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
             :src img-source}])
    (when name
      [:div {:class "category-name"}
       name])]])

(defn category-list-view
  [categories]
  [:ul {:class "category-list"}
   (for [category categories]
     (category-view category))])

(defn categories-view
  [category-lists]
  [:div {:class "categories"}
   (for [category-list category-lists]
     (category-list-view category-list))])

(defn gallery-view
  [{:keys [*gallery]} emit]
  (let [{:keys [categories]} @*gallery]
    [:div {:id "gallery-container"}
     [:div {:id "gallery"}
      [categories-view categories]]]))
