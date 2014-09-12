(ns photosure.bio
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(defn bio [{:keys [img txt]} owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:id "bio"}
        (dom/div #js {:id "selfie-container"}
          (dom/img #js {:id "selfie" :src img}))
        (dom/p #js {:id "about"} txt)))))

(defn render [] (om/root bio
                         {:img "hey" :txt "yeh"}
                         {:target (. js/document
                                     (getElementById "dynamic-content"))}))
