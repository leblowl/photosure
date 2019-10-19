(ns photosure.bio.view-model
  (:require [reagent.ratom :as rr]))

(defn bio-view-model
  [*model]
  (let [api-host (rr/reaction (get-in @*model [:app :config :api :host]))
        bio (rr/reaction (get @*model :bio))]

    (rr/reaction
      (update @bio
              :selfie-src
              #(when (seq @api-host)
                 (str @api-host %))))))
