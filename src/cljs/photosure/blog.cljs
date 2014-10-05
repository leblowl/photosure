(ns photosure.blog
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [photosure.util :as util]
            [goog.string :as gstr]
            [hickory.core :as hikry]
            [photosure.scrolldiv :refer [scroll-div]]))

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
                        photos :photos
                        caption :caption} owner]
  (om/component
    (dom/div #js {:id id :className "post"}
      (apply dom/div #js {:className "blog-photo"}
        (map (fn [photo]
               (dom/img #js {:src (:url (:original_size photo))}))
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
    (will-mount [_]
      (util/edn-xhr
       {:method :get
        :url "api/posts"
        :on-complete (fn [_]
                       (om/update! app :posts _))}))

    om/IRender
    (render [this]
      (apply dom/div #js {:id "post-list"}
        (om/build-all post-view (:posts app))))))

(defn blog [app owner]
  (om/component
    (dom/div #js {:id "blog-gallery-container"}
      (om/build scroll-div
                app
                {:opts {:className "blog-gallery"
                        :children [(om/build posts-view app)]}}))))

(defn render []
  (om/root blog
           app-data
           {:target (.getElementById js/document "dynamic-content")}))
