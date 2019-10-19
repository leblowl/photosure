(ns photosure.app.event
  (:require [aide.core :as aide]
            [photosure.app.model :as model]
            [photosure.app.route :as rte]
            [photosure.util :as util]))

(defn get-route
  [path]
  (let [match (rte/match-path path)
        route-params (:route-params match)]
    (model/new-route path route-params)))

(aide/defevent on-route-change
  [app path]
  (let [app-route (get-route path)]
    (swap! (:*model app) assoc-in [:app :route] app-route)))

(defn set-config!
  [*model config]
  (swap! *model
         (fn [m]
           (assoc-in m [:app :config] config))))

(aide/defevent on-load-config
  [app]
  (util/edn-xhr {:method :get
                 :url (rte/path-for :config)
                 :on-complete
                 (fn [data]
                   (set-config! (:*model app) data))}))

(aide/defevent on-start
  [app]
  (aide/emit app on-load-config))
-
