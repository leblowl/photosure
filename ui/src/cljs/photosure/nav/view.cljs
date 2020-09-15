(ns photosure.nav.view
  (:require [photosure.nav.event :as event]))

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
  [{:keys [mobile-show all active]} emit]
  [:div {:class (str "navigation-container" (when mobile-show " mobile-show"))}
   [:div {:class "banner-container"}
    [:p {:class "banner"}
     "cpleblow photography"]
    [:div.btn {:class "icon-menu"
               :on-click #(emit event/on-menu)}]]
   [:div {:class "nav"}
    (nav-items all active)]])

(defn nav-view
  [view vm emit]
  (let [nav-model (:nav @(:*app vm))]
    [:div {:id "nav-page"}
     [nav nav-model emit]
     (view vm emit)]))

(defn simple-nav
  ([title emit]
   (simple-nav title emit nil))

  ([title emit {:keys [menu on-go-back go-back-class]}]
   [:div {:class "sub-nav"}
    (when on-go-back
      [:div.btn {:class (or go-back-class "icon-arrow-with-circle-left")
                 :on-click on-go-back}])
    [:div {:class "sub-nav-title"} title]
    (when menu
      [:div.btn {:class "icon-menu"
                 :on-click #(emit event/on-menu)}])
    ]))
