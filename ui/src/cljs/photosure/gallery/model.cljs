(ns photosure.gallery.model)

(def gallery-model
  "TODO: We can retrieve this data from the API at some point. However,
  hard-coding this on the client allows us to quickly build a
  prototype."
  {:categories
   [
    {:name "Summer"
     :img-source "/img/gallery/summer_sunset_california_sf.jpg"}

    {:name "Spring"
     :img-source "/img/gallery/spring_tree_california_clayton.jpg"}

    {:name "Winter"
     :img-source "/img/gallery/winter_tree_unknown.jpg"}
    ]
   })
