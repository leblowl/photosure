(ns photosure.gallery.view-model
  (:require [reagent.ratom :as rr]))

(defn qualify-category-img-source
  [api-host x]
  (update x :img-source #(when (seq api-host) (str api-host %))))

(defn gallery-view-model
  [*model]
  (let [api-host (rr/reaction (get-in @*model [:app :config :api :host]))
        gallery (rr/reaction (get @*model :gallery))]

    (rr/reaction
     (update @gallery
             :categories
             #(mapv (partial qualify-category-img-source @api-host) %)))))
