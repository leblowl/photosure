(ns photosure.window.event
  (:require [aide.core :as aide]
            [photosure.window.model :as model]))

(aide/defevent add-window-resize-listener
  [app]
  (aide/emit app on-window-resize)
  (.addEventListener js/window "resize" #(aide/emit app on-window-resize)))

(aide/defevent on-window-resize
  [app]
  (swap! (:*model app)
         #(-> %
              (assoc-in [:window :width] (.-innerWidth js/window))
              (assoc-in [:window :height] (.-innerHeight js/window)))))
