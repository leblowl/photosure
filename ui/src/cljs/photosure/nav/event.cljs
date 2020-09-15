(ns photosure.nav.event
  (:require [aide.core :as aide]
            [photosure.nav.model :as model]))

(aide/defevent on-menu
  [app]
  (swap! (:*model app)
         #(update-in % [:app :nav :mobile-show] not)))
