(ns photosure.gallery.view
  (:require [goog.string :as gstr]))

(defn category-view
  [{:keys [name img-source href]}]
  ^{:key (str "category-" name)}
  [:li {:class "category"}
   [:a {:class "category-link"
        :name name
        :href href}
    (when img-source
      [:img {:class "category-preview"
             :src img-source}])]])

(defn categories-view
  [categories]
  [:ul {:class "categories"}
   (for [category categories]
     (category-view category))])

(defn gallery-view
  [{:keys [*gallery]} emit]
  (let [{:keys [categories]} @*gallery]
    [:div {:id "gallery-container"}
     [:div {:id "gallery"}
      [categories-view categories]]]))
