(ns photosure.app.model
  (:require [photosure.app.route :as rte]))

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
         :blog    ["blog"    (rte/path-for :blog)]
         :gallery ["gallery" (rte/path-for :gallery)]}
   :active :bio})

(def initial-model
  {:app {:config  config-model
         :route   route-model
         :nav     nav-model
         :view-id nil
         :view    nil}})
