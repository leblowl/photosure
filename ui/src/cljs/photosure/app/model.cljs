(ns photosure.app.model
  (:require [photosure.app.route :as rte]
            [photosure.window.model :as window-m]
            [photosure.nav.model :as nav-m]
            [photosure.bio.model :as bio-m]
            [photosure.gallery.model :as gallery-m]))

(def config-model
  {:api {:host ""}})

(defn new-route
  [path params]
  {:path path
   :params params})

(def route-model
  (new-route rte/app-root nil))

(def initial-model
  {:app {:config      config-model
         :route       route-model
         :window      window-m/window-model
         :nav         nav-m/nav-model
         :active-view nil}
   :bio bio-m/bio-model
   :gallery gallery-m/gallery-model})
