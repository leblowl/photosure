(ns photosure.app.view-model
  (:require [accountant.core :as acc]
            [photosure.app.route :as rte]
            [photosure.bio.view :as bio-v]
            [photosure.bio.view-model :as bio-vm]
            [photosure.gallery.view-model :as gallery-vm]
            [photosure.gallery.view :as gallery-v]
            [reagent.core :as r]
            [reagent.ratom :as rr]))

(def app-view-handlers
  {:bio       bio-v/bio-view
   :gallery   gallery-v/gallery-view
   :not-found #(do (acc/navigate! (rte/path-for :bio))
                   (acc/dispatch-current!)
                   nil)})

(defn app-view-model
  [*model]
  (let [*app (rr/reaction (:app @*model))
        *path (rr/reaction (:path (:route @*app)))]

    (rr/reaction
      (let [view-id (:handler (rte/match-path @*path))
            view (get app-view-handlers view-id)]

        (-> @*app
            (assoc-in [:nav :active] view-id)
            (assoc :view-id view-id)
            (assoc :view view))))))

(defn view-model
  [*model]
  {:*app (app-view-model *model)
   :*bio (bio-vm/bio-view-model *model)
   :*gallery (gallery-vm/gallery-view-model *model)})
