(ns photosure.app.view-model
  (:require [photosure.app.route :as rte]
            [photosure.window.view-model :as window-vm]
            [photosure.bio.view-model :as bio-vm]
            [photosure.gallery.view-model :as gallery-vm]
            [reagent.core :as r]
            [reagent.ratom :as rr]))

(defn get-active-nav-item
  [view-id]
  (get {:bio :bio
        :gallery :gallery
        :collection :gallery}
       view-id))

(defn app-view-model
  [vm *model]
  (let [*app (rr/reaction (:app @*model))
        *active-view (rr/reaction (:active-view @*app))]

    (assoc vm :*app
           (rr/reaction
            (assoc-in @*app
                      [:nav :active]
                      (get-active-nav-item @*active-view))))))

(defn view-model
  [*model]
  (-> {}
      (app-view-model *model)
      (window-vm/window-view-model *model)
      (bio-vm/bio-view-model *model)
      (gallery-vm/gallery-view-model *model)))
