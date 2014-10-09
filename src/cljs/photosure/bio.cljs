(ns photosure.bio
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [goog.string :as gstr]
            [photosure.scrolldiv :refer [scroll-div]]))

(def app-state (atom {:selfie-src "images/bio/me.jpg"
                      :about "My name is Charles Leblow.<br><br>
Photography has been a passion dating back to childhood.<br>
I specialize in landscape and urban photography as well as family photography in informal settings or at your home. My work is done in 35mm format, primarily digital and also film, black and white, or custom editing options are available.<br>
I am located in the San Francisco/Bay Area of California and am available for local hire for family events/portraits/informal photo shoots, small weddings, proms and parties, no job is too small.<br>
Prints of my work are available only by special order. Please inquire for sizing, pricing, paper, and matting or framing options.<br>
I could supply you with more written details about my skills as a photographer but I would prefer you judge me by my work, a sampling of which is available above in the Gallery, and not my writing skills.<br><br><br>

cpleblow"
                      :shares
                      [{:name "facebook"
                        :entity "&#xe606;"
                        :svg "images/facebook.svg"
                        :href "https://www.facebook.com/cpleblow"}

                       {:name "tumblr"
                        :entity "&#xe607;"
                        :svg "images/tumblr.svg"
                        :href "http://cpleblow.tumblr.com/"}

                       {:name "email"
                        :entity "&#xe603;"
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
          (dom/p #js {:className "icon-share"}
            (gstr/unescapeEntities entity)))))))

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
             (om/build scroll-div
                       app
                       {:init-state {:class "about-container"}
                        :opts {:children [(dom/p #js {:id "about"
                                                      :dangerouslySetInnerHTML #js {:__html about}} nil)]}})
             (dom/div #js {:className "shares-container"}
               (om/build shares-view shares)))))))))

(defn render []
  (om/root bio
           app-state
           {:target (. js/document
                       (getElementById "dynamic-content"))}))
