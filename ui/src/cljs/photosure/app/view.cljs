(ns photosure.app.view
  (:require [photosure.bio.view :as bio-v]
            [photosure.gallery.view :as gallery-v]))


(defn nav-item
  [{:keys [id label href active]}]
  ^{:key id}
  [:li {:id id :class (when active "active")}
   [:a {:href href}
    label]])

(defn nav
  [{:keys [all active]}]
  [:div {:class "navigation-container"}
   [:div {:class "banner-container"}
    [:p {:class "banner"}
     "cpleblow photography"]]
   [:ul {:class "nav nav-tabs"}
    (for [[item-id [label href]] all]
      (nav-item {:id (str "tab-" (name item-id))
                 :label label
                 :href href
                 :active (= item-id active)}))]])

(def app-views
  {:bio        bio-v/bio-view
   :gallery    gallery-v/gallery-view
   :collection gallery-v/collection-view})

(defn app-view
  [view-model emit]
  (let [app @(:*app view-model)
        nav-model (:nav app)
        active-view (:active-view app)]

    [:div {:id "app"}
     [nav nav-model]
     (when-let [view (get app-views active-view)]
       [view view-model emit])]))
