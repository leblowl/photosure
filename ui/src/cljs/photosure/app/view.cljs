(ns photosure.app.view
  (:require [photosure.bio.view :as bio-v]
            [photosure.gallery.view :as gallery-v]))

(def app-views
  {:bio        bio-v/bio-view
   :gallery    gallery-v/gallery-view
   :collection gallery-v/collection-view
   :photo      gallery-v/photo-view})

(defn app-view
  [view-model emit]
  (let [app @(:*app view-model)
        active-view (:active-view app)]

    [:div {:id "app"}
     (when-let [view (get app-views active-view)]
       [view view-model emit])]))
