(ns photosure.main
  (:require [photosure.app :as app]))

(defn mount-by-id! [mount-fn id]
  (when-let [elt (.getElementById js/document id)]
    (mount-fn elt)))

(mount-by-id! app/render-app "app-container")
