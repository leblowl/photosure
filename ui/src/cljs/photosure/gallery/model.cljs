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
      :href "/gallery/collections/summer/photos/summer1"
      }
     ]

    :spring
    [{:collection :spring
      :id :spring1
      :order 0
      :name "Spring Tree"
      :img-source "/img/gallery/spring_tree_california_clayton.jpg"
      :href "/gallery/collections/spring/photos/spring1"
      }
     ]

    :winter
    [{:collection :winter
      :id :winter1
      :order 0
      :name "Winter Tree"
      :img-source "/img/gallery/winter_tree_unknown.jpg"
      :href "/gallery/collections/winter/photos/winter1"
      }
     {:collection :winter
      :id :winter2
      :order 0
      :name "Winter Tree"
      :img-source "/img/gallery/winter_2.jpg"
      :href "/gallery/collections/winter/photos/winter2"
      }
     {:collection :winter
      :id :winter3
      :order 0
      :name "Winter Tree"
      :img-source "/img/gallery/winter_3.jpg"
      :href "/gallery/collections/winter/photos/winter3"
      }
     {:collection :winter
      :id :winter4
      :order 0
      :name "Winter Tree"
      :img-source "/img/gallery/winter_4.jpg"
      :href "/gallery/collections/winter/photos/winter4"
      }
     {:collection :winter
      :id :winter5
      :order 0
      :name "Winter Tree"
      :img-source "/img/gallery/winter_5.jpg"
      :href "/gallery/collections/winter/photos/winter5"
      }
     {:collection :winter
      :id :winter6
      :order 0
      :name "Winter Tree"
      :img-source "/img/gallery/winter_6.jpg"
      :href "/gallery/collections/winter/photos/winter6"
      }
     {:collection :winter
      :id :winter7
      :order 0
      :name "Winter Tree"
      :img-source "/img/gallery/winter_7.jpg"
      :href "/gallery/collections/winter/photos/winter7"
      }
     ]

    :streets
    [{:collection :streets
      :id :streets1
      :order 0
      :name "The Street"
      :img-source "/img/gallery/street_1.jpg"
      :href "/gallery/collections/streets/photos/streets1"
      }
     ]

    :deserts
    [{:collection :deserts
      :id :deserts1
      :order 0
      :name "Desert Sunset"
      :note "Somewhere, Utah"
      :img-source "/img/gallery/desert_1.jpg"
      :href "/gallery/collections/deserts/photos/deserts1"
      }
     {:collection :deserts
      :id :deserts2
      :order 0
      :name "Desert Sunset"
      :note "Somewhere, Utah"
      :img-source "/img/gallery/desert_2.jpg"
      :href "/gallery/collections/deserts/photos/deserts2"
      }
     {:collection :deserts
      :id :deserts3
      :order 0
      :name "Desert Sunset"
      :note "Somewhere, Utah"
      :img-source "/img/gallery/desert_3.jpg"
      :href "/gallery/collections/deserts/photos/deserts3"
      }
     {:collection :deserts
      :id :deserts4
      :order 0
      :name "Desert Sunset"
      :note "Somewhere, Utah"
      :img-source "/img/gallery/desert_4.jpg"
      :href "/gallery/collections/deserts/photos/deserts4"
      }
     {:collection :deserts
      :id :deserts5
      :order 0
      :name "Desert Sunset"
      :note "Somewhere, Utah"
      :img-source "/img/gallery/desert_5.jpg"
      :href "/gallery/collections/deserts/photos/deserts5"
      }
     {:collection :deserts
      :id :deserts6
      :order 0
      :name "Desert Sunset"
      :note "Somewhere, Utah"
      :img-source "/img/gallery/desert_6.jpg"
      :href "/gallery/collections/deserts/photos/deserts6"
      }
     {:collection :deserts
      :id :deserts7
      :order 0
      :name "Desert Sunset"
      :note "Somewhere, Utah"
      :img-source "/img/gallery/desert_7.jpg"
      :href "/gallery/collections/deserts/photos/deserts7"
      }
     ]

    :creeks
    [{:collection :creeks
      :id :creeks1
      :order 0
      :name "Still Water"
      :img-source "/img/gallery/creek_1.jpg"
      :href "/gallery/collections/creeks/photos/creeks1"
      }
     ]

    :bridges
    [{:collection :bridges
      :id :bridges1
      :order 0
      :name "Green"
      :img-source "/img/gallery/bridge_1.jpg"
      :href "/gallery/collections/bridges/photos/bridges1"
      }
     ]
    }
   })
