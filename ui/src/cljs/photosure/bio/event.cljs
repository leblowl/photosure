(ns photosure.bio.event
  (:require [aide.core :as aide]))

(defn set-bio!
  [*model bio]
  (swap! *model #(assoc % :bio bio)))

(aide/defevent on-set-bio
  [app bio]
  (set-bio! (:*model app) bio))
