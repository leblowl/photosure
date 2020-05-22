(ns photosure.app.model
  (:require [photosure.app.route :as rte]
            [photosure.window.model :as window-model]
            [photosure.bio.model :as bio-model]
            [photosure.gallery.model :as gallery-model]))

(def config-model
  {:api {:host ""}})

(defn new-route
  [path params]
  {:path path
   :params params})

(def route-model
  (new-route rte/app-root nil))

(def nav-model
  {:all {:bio     ["about"   (rte/path-for :bio)]
         :gallery ["gallery" (rte/path-for :gallery)]
         :blog    ["blog"    rte/blog-route]}

   :active :bio})

(def initial-model
  {:app {:config      config-model
         :route       route-model
         :window      window-model/window-model
         :nav         nav-model
         :active-view nil}
   :bio bio-model/bio-model
   :gallery gallery-model/gallery-model})
