(ns photosure.gallery.model)

(def gallery-model
  {:num-columns nil

   ;; TODO: We can retrieve this data from the API at some point. However,
   ;; hard-coding this on the client allows us to quickly build a
   ;; prototype.
   :categories
   [
    {:name "Summer"
     :img-source "/img/gallery/summer_sunset_california_sf.jpg"}

    {:name "Spring"
     :img-source "/img/gallery/spring_tree_california_clayton.jpg"}

    {:name "Winter"
     :img-source "/img/gallery/winter_tree_unknown.jpg"}

    {:name "Streets"
     :img-source "/img/gallery/street_1.jpg"}

    {:name "Deserts"
     :img-source "/img/gallery/desert_1.jpg"}

    {:name "Creeks"
     :img-source "/img/gallery/creek_1.jpg"}

    {:name "Bridges"
     :img-source "/img/gallery/bridge_1.jpg"}
    ]
   })
