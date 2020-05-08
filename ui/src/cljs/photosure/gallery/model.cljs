(ns photosure.gallery.model)

(def gallery-model
  {:num-columns nil

   ;; TODO: We can retrieve this data from the API at some point. However,
   ;; hard-coding this on the client allows us to quickly build a
   ;; prototype.
   :categories
   [{:name "Summer"
     :img-source "/img/gallery/summer_sunset_california_sf.jpg"
     :href "/gallery/collections/summer"
     }

    {:name "Spring"
     :img-source "/img/gallery/spring_tree_california_clayton.jpg"
     :href "/gallery/collections/spring"
     }

    {:name "Winter"
     :img-source "/img/gallery/winter_tree_unknown.jpg"
     :href "/gallery/collections/winter"
     }

    {:name "Streets"
     :img-source "/img/gallery/street_1.jpg"
     :href "/gallery/collections/streets"
     }

    {:name "Deserts"
     :img-source "/img/gallery/desert_1.jpg"
     :href "/gallery/collections/deserts"
     }

    {:name "Creeks"
     :img-source "/img/gallery/creek_1.jpg"
     :href "/gallery/collections/creeks"
     }

    {:name "Bridges"
     :img-source "/img/gallery/bridge_1.jpg"
     :href "/gallery/collections/bridges"
     }
    ]

   :photos
   {:summer
    [{:collection :summer
      :id :summer1
      :order 0
      :name "Summer Sunset California"
      :img-source "/img/gallery/summer_sunset_california_sf.jpg"
      :href "/gallery/collections/summer/photos/summer_sunset_california"
      }
     ]

    :spring
    [{:collection :spring
      :id :spring1
      :order 0
      :name "Spring Tree"
      :img-source "/img/gallery/spring_tree_california_clayton.jpg"
      :href "/gallery/collections/spring/photos/spring_tree"
      }
     ]

    :winter
    [{:collection :winter
      :id :winter1
      :order 0
      :name "Winter Tree"
      :img-source "/img/gallery/winter_tree_unknown.jpg"
      :href "/gallery/collections/winter/photos/winter_tree"
      }
     ]

    :streets
    [{:collection :streets
      :id :streets1
      :order 0
      :name "The Street"
      :img-source "/img/gallery/street_1.jpg"
      :href "/gallery/collections/streets/photos/the_street"
      }
     ]

    :deserts
    [{:collection :deserts
      :id :deserts1
      :order 0
      :name "Desert Sunset"
      :img-source "/img/gallery/desert_1.jpg"
      :href "/gallery/collections/deserts/photos/desert_sunset"
      }
     ]

    :creeks
    [{:collection :creeks
      :id :creeks1
      :order 0
      :name "Still Water"
      :img-source "/img/gallery/creek_1.jpg"
      :href "/gallery/collections/creeks/photos/still_water"
      }
     ]

    :bridges
    [{:collection :bridges
      :id :bridges1
      :order 0
      :name "Green"
      :img-source "/img/gallery/bridge_1.jpg"
      :href "/gallery/collections/bridges/photos/green"
      }
     ]
    }
   })
