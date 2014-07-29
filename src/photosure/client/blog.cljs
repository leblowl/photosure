(ns photosure.client.blog
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(defn post-view [{:keys [post-id img-src caption]} owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:id post-id :class "post"}
        (dom/div #js {:class "photo"}
          (dom/img #js {:src img-src}))
        (dom/div #js {:class "caption"} caption)))))
