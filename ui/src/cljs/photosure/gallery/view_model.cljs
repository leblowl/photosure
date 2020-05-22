(ns photosure.gallery.view-model
  (:require [reagent.ratom :as rr]))

;; TODO: Remove this when we pull data from the server.
;; Data provided by the server should come with fully
;; qualified URLs.
(defn make-url-absolute
  [api-host x]
  (when (seq api-host)
    (str api-host x)))

(defn get-num-columns
  [window]
  (cond
    (< 1900 (:width window)) 4
    (< 1400 (:width window)) 3
    (< 900  (:width window)) 2
    :else 1))

(defn gallery-view-model
  [vm *model]
  (let [*api-host (rr/reaction (get-in @*model [:app :config :api :host]))
        *route (rr/reaction (get-in @*model [:app :route]))
        *active-view (rr/reaction
                      (get @(:*app vm) :active-view))
        *element-id (rr/reaction
                     (when (#{:collection :photo} @*active-view)
                       (keyword (get-in @*route [:params :id]))))
        *gallery (rr/reaction (get @*model :gallery))
        *window (rr/reaction (get-in @*model [:app :window]))]

    (assoc vm :*gallery
           (rr/reaction
            (let [num-columns (get-num-columns @*window)
                  make-url-absolute (partial make-url-absolute @*api-host)]

              (-> @*gallery
                  (assoc :num-columns num-columns)

                  (update :categories
                          (fn [categories]
                            (let [num-categories (count categories)
                                  column-size (int (Math/ceil (/ num-categories num-columns)))]

                              (->>  categories
                                    (mapv #(update % :img-source make-url-absolute))
                                    (partition column-size column-size [])))))

                  (update :photos
                          (fn [photos]
                            (let [collection @*element-id
                                  photos (get photos collection)
                                  num-photos (count photos)
                                  column-size (int (Math/ceil (/ num-photos num-columns)))]

                              (->>  photos
                                    (mapv #(update % :img-source make-url-absolute))
                                    (partition column-size column-size [])))))

                  (assoc :active-photo
                         (let [photo-id @*element-id
                               photos (flatten (vals (:photos @*gallery)))
                               photo (first (filter #(= (:id %) photo-id) photos))]

                           (-> photo
                               (update :img-source make-url-absolute))))))))))
