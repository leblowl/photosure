(ns photosure.gallery.event
  (:require [aide.core :as aide]))

(defn set-gallery!
  [*model gallery]
  (swap! *model #(assoc % :gallery gallery)))

(aide/defevent on-set-gallery
  [app gallery]
  (-> gallery
      (update :photos #(group-by :collection %))
      (->> (set-gallery! (:*model app)))))
