(ns photosure.gallery.view
  (:require [goog.string :as gstr]
            [clojure.string :as str]
            [photosure.app.event :as event]
            [photosure.nav.view :as nav]))

(defn category-view
  [{:keys [name img-source href]} {:keys [no-title]}]

  ^{:key (str "category-" name)}
  [:li {:class "category"}
   (when img-source
     [:a {:class "category-link"
          :name name
          :href href}

      [:img {:class "category-preview"
             :src img-source}]
      (when (not no-title)
        [:div {:class "category-name"}
         name])])])

(defn category-list-view
  ([categories]
   (category-list-view categories nil))

  ([categories opts]
   ;; TODO: Find a smaller key
   ^{:key categories}
   [:ul {:class (str "category-list" (when (:wide opts) " wide"))}
    (for [category categories]
      (category-view category opts))]))

(defn categories-view
  ([num-columns category-lists]
   (categories-view num-columns category-lists nil))

  ([num-columns category-lists opts]
   [:div {:class "categories"}
    (let [opts (merge opts (when (= num-columns 1) {:wide true}))]
      (for [category-list category-lists]
        (category-list-view category-list opts)))]))

(defn gallery-view
  [{:keys [*gallery]} emit]

  (let [{:keys [num-columns categories]} @*gallery
        title "Collections"]

    [:div {:id "gallery-container"}
     (nav/simple-nav title {:on-go-back #(emit event/on-go-back)})
     [:div {:id "gallery"}
      [categories-view num-columns categories]]]))

(defn collection-view
  [{:keys [*gallery]} emit]

  (let [{:keys [num-columns photos]} @*gallery
        title (str/capitalize (name (:collection (ffirst photos))))]

    [:div {:id "gallery-container"}
     (nav/simple-nav title {:on-go-back #(emit event/on-go-back)})
     [:div {:id "gallery"}
      [categories-view num-columns photos {:no-title true}]]]))

(defn photo-view
  [{:keys [*gallery]} emit]

  (let [{:keys [active-photo]} @*gallery
        {:keys [img-source]} active-photo
        title ""]

    [:div {:class "photo-container"}
     (nav/simple-nav title {:on-go-back #(emit event/on-go-back)})
     [:div {:class "photo-column"}
      (when img-source
        [:img {:class "photo"
               :src img-source}])]]))
