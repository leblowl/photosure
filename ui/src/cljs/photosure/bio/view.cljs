(ns photosure.bio.view
  (:require [goog.string :as gstr]))

(defn share-view
  [{:keys [name entity href]}]
  ^{:key (str "share-" name)}
  [:li {:class "share"}
   [:a {:class "share-link"
        :name name
        :href href}
    [:p {:class "icon-share"}
      (gstr/unescapeEntities entity)]]])

(defn shares-view
  [shares]
  [:ul {:class "shares"}
   (for [share shares]
     (share-view share))])

(defn bio-view
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
          (shares-view shares)]]]]]))
