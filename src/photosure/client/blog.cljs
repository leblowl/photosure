(ns photosure.client.blog
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [photosure.client.util :as util]
            [goog.string :as gstr]
            [hickory.core :as hikry]
            [cljs.core.async :refer [put! chan <! timeout]]))

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

(defn prev-btn [app owner]
  (reify
    om/IRenderState
    (render-state [this {:keys [slide-chan disabled]}]
      (dom/div #js {:id "prev-btn"
                    :className (str "btn" (when disabled " disabled"))
                    :onClick (fn [e] (put! slide-chan "prev"))}
        (dom/p #js {:id "prev-arrow"} (gstr/unescapeEntities "&#10092;"))))))

(defn next-btn [app owner]
  (reify
    om/IRenderState
    (render-state [this {:keys [slide-chan disabled]}]
      (dom/div #js {:id "next-btn"
                    :className (str "btn" (when disabled " disabled"))
                    :onClick (fn [e] (put! slide-chan "next"))}
        (dom/p #js {:id "next-arrow"} (gstr/unescapeEntities "&#10093;"))))))

(defn blog [app owner]
  (reify
    om/IInitState
    (init-state [_]
      {:slide-chan (chan)
       :anim-in-progress false})

    om/IRenderState
    (render-state [this {:keys [slide-chan anim-in-progress]}]
      (dom/div #js {:id "blog-gallery-container"}
               (dom/div #js {:id "blog-gallery"}
                        (dom/div #js {:className "scroll-header"})
                        (om/build posts-view app)
                        (dom/div #js {:className "scroll-footer"}))))))

(defn render [] (om/root blog
                         app-data
                         {:target (. js/document
                                     (getElementById "dynamic-content"))}))
