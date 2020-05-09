(ns photosure.bio.view-model
  (:require [reagent.ratom :as rr]))

(defn bio-view-model
  [vm *model]
  (let [*api-host (rr/reaction (get-in @*model [:app :config :api :host]))
        *bio (rr/reaction (get @*model :bio))]

    (assoc vm :*bio
           (rr/reaction
            ;; TODO: Remove this when we pull data from the server.
            ;; Data provided by the server should come with fully
            ;; qualified URLs.
            (update @*bio
                    :selfie-src
                    #(when (seq @*api-host)
                       (str @*api-host %)))))))
