(ns photosure.app.event
  (:require [aide.core :as aide]
            [accountant.core :as acc]
            [photosure.app.model :as model]
            [photosure.app.route :as rte]
            [photosure.bio.event :as bio]
            [photosure.gallery.event :as gallery]
            [photosure.window.event :as window]
            [photosure.util :as util]))

(defn get-route
  [path]
  (let [match (rte/match-path path)
        route-params (:route-params match)]
    (model/new-route path route-params)))

(aide/defevent on-route-change
  [app path]
  (let [app-route (get-route path)
        view-id (:handler (rte/match-path path))]

    (if (= :not-found view-id)
      (do (acc/navigate! (rte/path-for :bio))
          (acc/dispatch-current!))

      (swap! (:*model app)
             #(-> %
                  (assoc-in [:app :route] app-route)
                  (assoc-in [:app :active-view] view-id))))))

(aide/defevent on-go-to
  [app href]
  (acc/navigate! href))

(defn set-config!
  [*model config]
  (swap! *model
         (fn [m]
           (assoc-in m [:app :config] config))))

(aide/defevent on-load-models
  [app]
  (let [host (get-in @(:*model app) [:app :config :api :host])]
    (util/edn-xhr {:method :get
                   :url (str host (rte/path-for rte/api-routes :get-bio nil))
                   :on-complete
                   (fn [data]
                     (aide/emit app bio/on-set-bio data))})

    (util/edn-xhr {:method :get
                   :url (str host (rte/path-for rte/api-routes :get-gallery nil))
                   :on-complete
                   (fn [data]
                     (aide/emit app gallery/on-set-gallery data))})))

(aide/defevent on-load-data
  [app]
  (util/edn-xhr {:method :get
                 :url (rte/path-for :config)
                 :on-complete
                 (fn [data]
                   (set-config! (:*model app) data)
                   (aide/emit app on-load-models app))}))

(aide/defevent on-start
  [app]
  (aide/emit app window/add-window-resize-listener)
  (aide/emit app on-load-data))
