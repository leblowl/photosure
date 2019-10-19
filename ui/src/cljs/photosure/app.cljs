(ns photosure.app
  (:require [accountant.core :as acc]
            [aide.core :as aide]
            [aide-reagent.core :as aide-reagent]
            [photosure.app.model :as model]
            [photosure.app.event :as event]
            [photosure.app.route :as rte]
            [photosure.app.view-model :as vm]
            [photosure.app.view :as view]
            [reagent.core :as r]))

(defn init-history!
  [app]
  (acc/configure-navigation!
    {:nav-handler
     (fn [path]
       (aide/emit app event/on-route-change path))

     :path-exists?
     (fn [path]
       (boolean (rte/match-path path)))})

  (acc/dispatch-current!))

(defn ^:export render-app
  [elt]
  (let [*model (atom model/initial-model)
        view-model (vm/view-model (aide-reagent/atom->reaction *model))
        app (aide/object {:*model *model})]

    (init-history! app)

    (-> view/app-view
        (aide-reagent/connect view-model app)
        (r/render elt))

    (aide/emit app event/on-start)

    (assoc app :view-model view-model)))
