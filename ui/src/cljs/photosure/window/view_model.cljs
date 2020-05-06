(ns photosure.window.view-model
  (:require [reagent.ratom :as rr]))

(defn window-view-model
  [*model]
  (rr/reaction (:window @*model)))
