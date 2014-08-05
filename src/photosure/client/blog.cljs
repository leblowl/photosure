(ns photosure.client.blog
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [photosure.client.util :as util]
            [goog.string :as gstr]
            [hickory.core :as hikry]))

(enable-console-print!)

(def app-data
  (atom {:posts []}))

(defn parse-caption [caption]
  (map hikry/as-hiccup (hikry/parse-fragment caption)))

(defn caption-line-view [caption-line owner]
  (reify
    om/IRender
    (render [this]
      (dom/p #js {} caption-line))))

(defn caption-view [caption owner]
  (reify
    om/IRender
    (render [this]
      (apply dom/div #js {:className "caption"}
        (om/build-all caption-line-view
                      (map #(get % 2) (parse-caption caption)))))))

(defn post-view [{id :id
                  [{{url :url} :original_size}] :photos
                  caption :caption} owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:id id :className "post"}
        (dom/div #js {:className "blog-photo"}
          (dom/img #js {:src url}))
        (om/build caption-view caption)))))

(defn posts-view [app owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (util/edn-xhr
       {:method :get
        :url "api/posts"
        :on-complete #(om/update! app :posts %)}))
    om/IRender
    (render [this]
      (apply dom/div #js {:id "post-list"}
        (om/build-all post-view (:posts app))))))

(defn render [] (om/root posts-view
                         app-data
                         {:target (. js/document
                                     (getElementById "dynamic-content"))}))
