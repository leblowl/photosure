(ns photosure.blog
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [photosure.util :as util]
            [goog.string :as gstr]
            [photosure.scrolldiv :refer [scroll-div]]
            [cljs.core.async :refer [put! chan <!]]))

(def app-data
  (atom {:posts []}))

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
                        photos :photos
                        caption :caption} owner]
  (om/component
    (dom/div #js {:id id :className "post"}
      (apply dom/div #js {:className "blog-photo"}
        (map (fn [photo]
               (dom/div nil "placeholder"))
          photos))
      (om/build text-view caption))))

(defn post-view [{:keys [type] :as post} owner]
  (reify
    om/IDidMount
    (did-mount [_]
      (put! (om/get-state owner :load-chan)
        "done!"))

    om/IRender
    (render [this]
      (if (= type "photo")
        (om/build photo-post-view post)
        (om/build text-post-view post)))))

(defn posts-view [posts owner]
  (reify
    om/IInitState
    (init-state [_]
      {:load-chan (chan)
       :load-count 0
       :iter 20})

    om/IWillMount
    (will-mount [_]
      (let [load-chan (om/get-state owner :load-chan)
            loaded-chan (om/get-state owner :loaded-chan)]
        (go (loop []
              (let [load (<! load-chan)]
                (do
                  (om/update-state! owner :load-count #(inc %))
                  (when (= (om/get-state owner :load-count) 20)
                    (put! loaded-chan "all done!")))
                (recur))))))

    om/IRenderState
    (render-state [this {:keys [iter load-chan]}]
      (apply dom/div #js {:id "post-list"}
        (om/build-all post-view (take iter posts) {:init-state {:load-chan load-chan}})))))

(defn blog [app owner]
  (reify
    om/IInitState
    (init-state [_]
      {:loaded false
       :loaded-chan (chan)})

    om/IWillMount
    (will-mount [_]
      (util/edn-xhr
       {:method :get
        :url "api/posts/0"
        :on-complete (fn [_] (om/update! app :posts _))})

      (let [loaded-chan (om/get-state owner :loaded-chan)]
        (go (loop []
              (let [loaded (<! loaded-chan)]
                (do
                  (om/set-state! owner :loaded true))
                (recur))))))

    om/IRenderState
    (render-state [this {:keys [loaded loaded-chan]}]
      (dom/div #js {:id "blog-gallery-container"}
        (om/build scroll-div
          app
          {:init-state {:class "blog-gallery"}
           :state {:class (str "blog-gallery" (when loaded " loaded"))}
           :opts {:children [(om/build posts-view (:posts app) {:init-state {:loaded-chan loaded-chan}})]}})))))

(defn render []
  (om/root blog
           app-data
           {:target (.getElementById js/document "dynamic-content")}))
