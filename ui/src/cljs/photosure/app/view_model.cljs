(ns photosure.app.view-model
  (:require [accountant.core :as acc]
            [photosure.app.route :as rte]
            [reagent.core :as r]
            [reagent.ratom :as rr]))

(def app-view-handlers
  {:bio       nil
   :not-found #(do (acc/navigate! (rte/path-for :bio))
                   (acc/dispatch-current!)
                   nil)})

(defn app-view-model
  [*model]
  (let [*app (rr/reaction (:app @*model))
        *path (rr/reaction (:path (:route (:app @*model))))]

    (rr/reaction
      (let [view-id (:handler (rte/match-path @*path))
            view (get app-view-handlers view-id)]

        (-> @*app
            (assoc-in [:nav :active] view-id)
            (assoc :view-id view-id)
            (assoc :view view))))))

(defn view-model
  [*model]
  {:*route   (rr/reaction (:route @*model))
   :*app     (app-view-model *model)})
