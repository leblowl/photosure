(ns photosure.app.model
  (:require [photosure.app.route :as rte]
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
  {:all {:bio     ["bio"     (rte/path-for :bio)]
         :gallery ["gallery" (rte/path-for :gallery)]
         :blog    ["blog"    rte/blog-route]}

   :active :bio})

(def initial-model
  {:app {:config  config-model
         :route   route-model
         :nav     nav-model
         :view-id nil
         :view    nil}
   :bio bio-model/bio-model
   :gallery gallery-model/gallery-model})
