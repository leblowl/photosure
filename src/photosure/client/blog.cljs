(ns photosure.client.blog
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [photosure.client.util :as util]
            [goog.string :as gstr]))

(enable-console-print!)

(def post-example-data
          {:blog_name "cpleblow"
           :id 87345566689
           :caption "found inside an open boxcar on a side track"
           :photos [{:caption ""
                     :alt_sizes [{:width 1280 :height 848 :url "http://37.media.tumblr.com/2abfbbc134982eac569dff1c5a1e26b5/tumblr_n6exohCKdZ1r7pi7mo1_500.jpg"}]}]})

(def app-data
  (atom {:posts []}))

(defn post-view [{id :id [{{url :url} :original_size}] :photos caption :caption} owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:id id :className "post"}
        (dom/div #js {:className "blog-photo"}
          (dom/img #js {:src url}))
        (dom/div #js {:className "caption"} caption)))))

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
