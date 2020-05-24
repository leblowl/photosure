(ns photosure.nav.model
  (:require [photosure.app.route :as rte]))

(def nav-model
  {:all {:bio     {:label  "about"
                   :href (rte/path-for :bio)}

         :gallery {:label "collections"
                   :href (rte/path-for :gallery)
                   :children []}

         :contact {:label "contact"
                   :href "mailto:tableof_5@comcast.net?Subject=cpleblow photography"}

         :blog    {:label "blog"
                   :href rte/blog-route}}

   :active :bio})
