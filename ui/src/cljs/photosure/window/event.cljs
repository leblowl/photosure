(ns photosure.window.event
  (:require [aide.core :as aide]
            [photosure.window.model :as model]))

(aide/defevent on-modal-open
  [app]
  (let [el  (.-body js/document)]
    (.add (.-classList el) "modal-open")))

(aide/defevent on-modal-closed
  [app]
  (let [el  (.-body js/document)]
    (.remove (.-classList el) "modal-open")))

(aide/defevent reset-window-scroll
  [app]
  (.scrollTo js/window 0 0))

(aide/defevent add-window-resize-listener
  [app]
  (aide/emit app on-window-resize)
  (.addEventListener js/window "resize" #(aide/emit app on-window-resize)))

(aide/defevent on-window-resize
  [app]
  (swap! (:*model app)
         #(-> %
              (assoc-in [:app :window :width] (.-innerWidth js/window))
              (assoc-in [:app :window :height] (.-innerHeight js/window)))))
