(ns photosure.blog
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [photosure.util :as util]
            [goog.string :as gstr]
            [hickory.core :as hikry]
            [cljs.core.async :refer [put! chan <! timeout]]))

(enable-console-print!)

(def app-data
  (atom {:posts []}))

(defn parse-caption [caption]
  (map hikry/as-hiccup (hikry/parse-fragment caption)))

(defn text-view [caption owner]
  (om/component
    (dom/div #js {:className "caption"
                 :dangerouslySetInnerHTML #js {:__html caption}}
     nil)))

(defn text-post-view [{id :id
                       title :title
                       body :body} owner]
  (om/component
    (dom/div #js {:id id :className "post"}
      (dom/h2 #js {:className "blog-title"}
        title)
      (om/build text-view body))))

(defn photo-post-view [{id :id
                        [{{url :url} :original_size}] :photos
                        caption :caption} owner]
  (om/component
    (dom/div #js {:id id :className "post"}
      (dom/div #js {:className "blog-photo"}
        (dom/img #js {:src url}))
      (om/build text-view caption))))

(defn post-view [{:keys [type] :as post} owner]
  (reify
    om/IRender
    (render [this]
      (if (= type "photo")
        (om/build photo-post-view post)
        (om/build text-post-view post)))))

(defn posts-view [app owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (util/edn-xhr
       {:method :get
        :url "api/posts"
        :on-complete (fn [_]
                       (om/update! app :posts _))}))

    om/IRenderState
    (render-state [this {:keys [scroll-chan]}]
      (apply dom/div #js {:id "post-list"
                          :onScroll #(put! scroll-chan {:scroll-top (.-scrollTop (om/get-node owner))
                                                        :height (+ 1 (.-scrollHeight (om/get-node owner)))})}
             (om/build-all post-view (:posts app))))))

(defn translate [x y]
  (str "translate(" x "%," y "%)"))

(defn scroll-bar [app owner]
  (reify
    om/IRenderState
    (render-state [this {:keys [scroll-top scroll-height track-height]}]

      (dom/div #js {:className "scroll-bar"
                    :style #js {:top
                                (str (Math/round
                                      (* track-height (/ scroll-top scroll-height)))
                                     "px")}}))))

(defn blog [app owner]
  (reify
    om/IInitState
    (init-state [_]
      {:scroll-chan (chan)
       :scroll-top 0
       :scroll-height 1
       :track-height 0})

    om/IWillMount
    (will-mount [_]
      (let [scroll-chan (om/get-state owner :scroll-chan)]
        (go (loop []
              (let [infos (<! scroll-chan)]
                (do
                  (om/set-state! owner :scroll-top (:scroll-top infos))
                  (om/set-state! owner :scroll-height (:height infos)))
                (recur))))))

    om/IDidMount
    (did-mount [_]
      (om/set-state! owner :track-height (.-clientHeight (om/get-node owner))))

    om/IRenderState
    (render-state [this {:keys [scroll-chan scroll-top scroll-height track-height]}]
      (dom/div #js {:id "blog-gallery-container"}
               (dom/div #js {:id "blog-gallery"}
                 (dom/div #js {:id "overflow-wrapper"}
                          (dom/div #js {:className "scroll-header"})
                          (om/build posts-view app {:init-state {:scroll-chan scroll-chan}})
                          (dom/div #js {:className "scroll-footer"}))
                 (om/build scroll-bar app {:init-state {:scroll-top scroll-top
                                                        :scroll-height scroll-height
                                                        :track-height track-height}
                                           :state {:scroll-top scroll-top
                                                   :scroll-height scroll-height
                                                   :track-height track-height}}))))))

(defn render []
  (println "yo")
  (om/root blog
    app-data
    {:target (. js/document
               (getElementById "dynamic-content"))}))
