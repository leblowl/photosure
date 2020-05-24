(ns photosure.nav.view)

(defn nav-item
  [{:keys [id label href active]}]
  ^{:key id}
  [:div {:id id :class (str "nav-item" (when active " active"))}
   [:a {:href href}
    label]])

(defn nav-items
  [items active]
  [:ul {:class "nav-items"}
    (for [[item-id {:keys [label href children]}] items]
      [:li
       (nav-item {:id (str "tab-" (name item-id))
                  :label label
                  :href href
                  :active (= item-id active)})
       (when (seq children)
         (nav-items children active))])])

(defn nav
  [{:keys [all active]}]
  [:div {:class "navigation-container"}
   [:div {:class "banner-container"}
    [:p {:class "banner"}
     "cpleblow photography"]]
   [:div {:class "nav"}
    (nav-items all active)]])

(defn nav-view
  [view vm emit]
  (let [nav-model (:nav @(:*app vm))]
    [:div {:id "nav-page"}
     [nav nav-model]
     (view vm emit)]))

(defn simple-nav
  ([title]
   (simple-nav title nil))

  ([title {:keys [on-go-back]}]
   [:div {:class "sub-nav"}
    (when on-go-back
      [:div.btn {:class "icon-arrow-with-circle-left"
                 :on-click on-go-back}])
    [:div {:class "sub-nav-title"} title]]))
