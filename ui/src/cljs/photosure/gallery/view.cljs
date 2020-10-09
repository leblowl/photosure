(ns photosure.gallery.view
  (:require [goog.string :as gstr]
            [clojure.string :as str]
            [photosure.app.event :as app-e]
            [photosure.gallery.event :as event]
            [photosure.nav.view :as nav]
            [photosure.app.route :as rte]))

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

(defn -gallery-view
  [{:keys [*gallery]} emit]

  (let [{:keys [num-columns collections]} @*gallery
        title "Collections"]

    [:div {:id "gallery-container"}
     (nav/simple-nav title emit)

     [:div {:id "gallery"}
      [categories-view num-columns collections]]]))

(defn gallery-view
  [vm emit]
  (emit app-e/on-page-load)
  (fn gallery-view
    [vm emit]
    (nav/nav-view -gallery-view vm emit)))

(defn -collection-view
  [{:keys [*gallery]} emit]

  (let [{:keys [num-columns collection-photos]} @*gallery
        title (some-> collection-photos ffirst :collection name str/capitalize)]

    [:div {:id "gallery-container"}
     (nav/simple-nav title emit)

     [:div {:id "gallery"}
      [categories-view num-columns collection-photos {:no-title true}]]]))

(defn collection-view
  [vm emit]
  (emit app-e/on-page-load)
  (fn collection-view
    [vm emit]
    (nav/nav-view -collection-view vm emit)))

(defn photo-view
  [{:keys [*gallery]} emit]

  (fn photo-view
    [{:keys [*gallery]} emit]

    (let [{:keys [active-photo
                  prev-photo-url
                  next-photo-url]} @*gallery

          {:keys [name
                  note
                  img-source
                  collection-url
                  inquire-url]} active-photo

          title [:div.sub-nav-title-bar
                 [:span name [:span.sep "..."]]
                 [:span.note note]
                 [:a.btn.inquire {:href inquire-url}
                  "Inquire"]]]

      [:div {:class "photo-container"}
       (nav/simple-nav
        title
        emit
        {:on-go-back #(emit app-e/on-go-to collection-url)})

       [:div {:class "photo-column"}
        [:a.btn.prev-btn
         {:class "icon-chevron-thin-left"
          :href prev-photo-url}]

        (when img-source
          [:div {:class "photo-wrapper"}
           [:img {:class "photo"
                  :src img-source}]])

        [:a.btn.next-btn
         {:class "icon-chevron-thin-right"
          :href next-photo-url}]]])))
