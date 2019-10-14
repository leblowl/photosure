(ns photosure.app.event
  (:require [aide.core :as aide]
            [photosure.app.model :as model]
            [photosure.app.route :as rte]))

(defn get-route
  [path]
  (let [match (rte/match-path path)
        route-params (:route-params match)]
    (model/new-route path route-params)))

(aide/defevent on-route-change
  [app path]
  (let [app-route (get-route path)]
    (swap! (:*model app) assoc-in [:app :route] app-route)))
-
