(ns photosure.bio
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(defn bio [{:keys [img txt]} owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:id "bio-container"}
       (dom/div #js {:id "bio"}
         (dom/div #js {:id "selfie-container"}
           (dom/img #js {:id "selfie" :src img}))
         (dom/div #js {:id "about-container"}
           (dom/div #js {:id "about"} txt)))))))

(defn render [] (om/root bio
                         {:img "images/me.jpg" :txt "Hey my name is Charles Leblow, I like to take photos and this is my site. Welcome! Since we have some time to talk alone now, I will tell you all about my deepest darkest secrets of interal fire and ice alchemy of the sacred heart!"}
                         {:target (. js/document
                                     (getElementById "dynamic-content"))}))
