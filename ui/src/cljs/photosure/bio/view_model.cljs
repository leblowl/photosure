(ns photosure.bio.view-model
  (:require [reagent.ratom :as rr]))

(defn bio-view-model
  [vm *model]
  (assoc vm :*bio
         (rr/reaction (get @*model :bio))))
