(ns photosure.bio.view
  (:require [goog.string :as gstr]
            [photosure.nav.view :as nav]))

(defn share-view
  [{:keys [name class href]}]
  ^{:key (str "share-" name)}
  [:li {:class "share"}
   [:a {:class "share-link"
        :name name
        :href href}
    [:div {:class (str "icon-share " class)}]]])

(defn shares-view
  [shares]
  [:ul {:class "shares"}
   (for [share shares]
     (share-view share))])

(defn -bio-view
  [{:keys [*bio]} emit]
  (let [{:keys [selfie-src about shares]} @*bio]
    [:div {:id "bio-container"}
     [:div {:id "bio"}
      [:div {:id "bio-liner"}
       [:img {:id "selfie" :src selfie-src}]
       [:div {:id "info-container"}
        [:div {:class "about-container"}
         [:p {:id "about"
              :dangerouslySetInnerHTML {:__html about}}]]
        [:div {:class "shares-container"}
         (shares-view shares)]]]]
     #_[:div.copyright "© 2020 cpleblow photography"]]))

(defn bio-view
  [vm emit]
  (nav/nav-view -bio-view vm emit))
