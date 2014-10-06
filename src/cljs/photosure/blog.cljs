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
               (dom/img #js {:src photo}))
          photos))
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
    (will-mount [_])

    om/IRender
    (render [this]
      (apply dom/div #js {:id "post-list"}
        (om/build-all post-view (:posts app))))))

(defn spinner [app owner]
  (reify
    om/IInitState
    (init-state [_]
      {:time 0})

    om/IWillMount
    (will-mount [_]
      (js/setInterval #(om/update-state! owner :time (fn [time] (inc time))) 300))

    om/IRenderState
    (render-state [this {:keys [time]}]
      (dom/div #js {:id "loader"}
        (dom/div #js {:id "one"
                      :className (str "circle " (get ["red" "green" "blue"] (mod time 3)))})
        (dom/div #js {:id "two"
                      :className "circle"})
        (dom/div #js {:id "three"
                      :className "circle"})))))

(defn blog [app owner]
  (reify
    om/IInitState
    (init-state [_]
      {:loaded false})

    om/IWillMount
    (will-mount [_]
      (util/edn-xhr
       {:method :get
        :url "api/posts"
        :on-complete (fn [_]
                       (om/set-state! owner :loaded true)
                       (om/update! app :posts _)
                       )}))

    om/IRenderState
    (render-state [this {:keys [loaded]}]
      (dom/div #js {:id "blog-gallery-container"}
       (when loaded
         (om/build scroll-div
           app
           {:opts {:className "blog-gallery"
                   :children [(om/build posts-view app)]}})
         )))))

(defn render []
  (om/root blog
           app-data
           {:target (.getElementById js/document "dynamic-content")}))
