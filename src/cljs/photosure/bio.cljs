(ns photosure.bio
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [goog.string :as gstr]
            [photosure.scrolldiv :refer [scroll-div]]))

(def app-state (atom {:selfie-src "images/me.jpg"
                      :about "Hey my name is Charles Leblow, I like to take photos and this is my site. Welcome! Since we have some time to talk alone now, I will tell you all about my deepest darkest secrets of interal fire and ice alchemy of the sacred heart! Now here are the secrets: they are an array of 9 secrets, subdivided into 3 quadrants of 5 elliptical meshes, infinitely, outertwined into the fabric of life. One love, One life, One unity"
                      :shares
                      [{:name "facebook"
                        :entity "&#62220;"
                        :svg "images/facebook.svg"
                        :href "https://www.facebook.com/cpleblow"}

                       {:name "tumblr"
                        :entity "&#62229;"
                        :svg "images/tumblr.svg"
                        :href "http://cpleblow.tumblr.com/"}

                       {:name "email"
                        :entity "&#9993;"
                        :svg "images/envelope.svg"
                        :href "mailto:tableof_5@comcast.net?Subject=One%20Love"}]}))

(defn share-view [{:keys [name entity svg href]} owner]
  (reify
    om/IRender
    (render [this]
      (dom/li #js {:className "share"}
        (dom/a #js {:className "share-link"
                    :name name
                    :href href}
          (dom/img #js {:className "share-icon"
                        :src svg}
            nil))))))

(defn shares-view [shares owner]
  (om/component
    (apply dom/ul #js {:className "shares"}
      (om/build-all share-view shares))))

(defn bio [{:keys [selfie-src about shares] :as app} owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:id "bio-container"}
       (dom/div #js {:id "bio"}
         (dom/div #js {:id "bio-liner"}
           (dom/img #js {:id "selfie" :src selfie-src})
           (dom/div #js {:id "info-container"}
             (om/build
               (scroll-div
                 (dom/p #js {:id "about"} about))
               app
               {:opts {:className "about-container"}})
             (dom/div #js {:className "shares-container"}
               (om/build shares-view shares)))))))))

(defn render []
  (om/root bio
           app-state
           {:target (. js/document
                       (getElementById "dynamic-content"))}))
