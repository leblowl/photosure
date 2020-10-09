(ns photosure.nav.event
  (:require [aide.core :as aide]
            [photosure.window.event :as window]))

(aide/defevent on-toggle-menu
  [app]
  (swap! (:*model app)
         #(update-in % [:app :nav :mobile-show] not))

  (if (get-in @(:*model app) [:app :nav :mobile-show])
    (aide/emit app window/on-modal-open)
    (aide/emit app window/on-modal-closed)))
