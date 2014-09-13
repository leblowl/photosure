(ns photosure.bio
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [goog.string :as gstr]))

(defn bio [{:keys [img txt]} owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:id "bio-container"}
       (dom/div #js {:id "bio"}
         (dom/div #js {:id "bio-liner"}
           (dom/img #js {:id "selfie" :src img})
           (dom/div #js {:id "info-container"}
                    (dom/div #js {:id "about-container"}
                             (dom/p #js {:id "about"} txt))
                    (dom/div #js {:className "share-container"}
                             (dom/div #js {:className "share-bar"}
                              (dom/div #js {:className "share"} (gstr/unescapeEntities "&#62220;"))
                              (dom/div #js {:className "share"} (gstr/unescapeEntities "&#62229;")))))))))))

(defn render [] (om/root bio
                         {:img "images/me.jpg" :txt "Hey my name is Charles Leblow, I like to take photos and this is my site. Welcome! Since we have some time to talk alone now, I will tell you all about my deepest darkest secrets of interal fire and ice alchemy of the sacred heart!"}
                         {:target (. js/document
                                     (getElementById "dynamic-content"))}))
