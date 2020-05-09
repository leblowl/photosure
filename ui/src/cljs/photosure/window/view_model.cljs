(ns photosure.window.view-model
  (:require [reagent.ratom :as rr]))

(defn window-view-model
  [vm *model]
  (assoc vm :*window
         (rr/reaction (get-in @*model [:app :window]))))
