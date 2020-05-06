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
      (list
       [:img {:class "category-preview"
              :src img-source}]
       [:div {:class "category-name"}
        name]))]])

(defn category-list-view
  ([categories]
   (category-list-view categories nil))

  ([categories opts]
   [:ul {:class (str "category-list" (when (:wide opts) " wide"))}
    (for [category categories]
      (category-view category))]))

(defn categories-view
  [num-columns category-lists]
  [:div {:class "categories"}
   (let [opts (when (= num-columns 1) {:wide true})]
     (for [category-list category-lists]
       (category-list-view category-list opts)))])

(defn gallery-view
  [{:keys [*gallery]} emit]
  (let [{:keys [num-columns categories]} @*gallery]
    [:div {:id "gallery-container"}
     [:div {:id "gallery"}
      [categories-view num-columns categories]]]))
