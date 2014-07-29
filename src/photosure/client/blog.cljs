(ns photosure.client.blog
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(def post-example-data
          {:blog_name "cpleblow"
           :id 87345566689
           :caption "found inside an open boxcar on a side track"
           :photos [{:caption ""
                     :alt_sizes [{:width 1280 :height 848 :url "http://37.media.tumblr.com/2abfbbc134982eac569dff1c5a1e26b5/tumblr_n6exohCKdZ1r7pi7mo1_500.jpg"}]}]})

(defn post-view [{:keys [post-id img-src caption]} owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:id post-id :class "post"}
        (dom/div #js {:class "photo"}
          (dom/img #js {:src img-src}))
        (dom/div #js {:class "caption"} caption)))))

(defn post-list-view [app owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:id "post-list"} "hey"))))

(defn render [] (om/root post-list-view
                         {}
                         {:target (. js/document
                                     (getElementById "dynamic-content"))}))
