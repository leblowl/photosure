(ns photosure.gallery.view-model
  (:require [reagent.ratom :as rr]
            [photosure.app.route :as rte]))

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

(defn update-collections
  [collections num-columns]
  (let [num-collections (count collections)
        column-size (int (Math/ceil (/ num-collections num-columns)))]

    (->>  collections
          (mapv #(assoc % :href (rte/path-for :collection {:id (:id %)})))
          (partition column-size column-size []))))

(defn update-photos
  [photos collection num-columns]
  (let [photos (get photos collection)
        num-photos (count photos)
        column-size (int (Math/ceil (/ num-photos num-columns)))]

    (->> photos
         (mapv #(assoc % :href (rte/path-for :photo {:id (:id %)})))
         (partition column-size column-size []))))

(defn update-active-photo
  [photos photo]
  (let [photo-id photo
        photos (flatten (vals photos))]

    (when-let [photo (first (filter #(= (:id %) photo-id) photos))]
      (let [collection-url (rte/path-for :collection {:id (:collection photo)})
            inquire-url (str "mailto:tableof_5@comcast.net"
                             "?Subject=cpleblow photography - "
                             (:name photo))]
        (-> photo
            (assoc :collection-url collection-url)
            (assoc :inquire-url inquire-url))))))

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
            (let [num-columns (get-num-columns @*window)]

              (-> @*gallery
                  (assoc :num-columns num-columns)

                  (update :collections #(update-collections % num-columns))

                  (update :photos #(update-photos % @*element-id num-columns))

                  (update :active-photo #(update-active-photo (:photos @*gallery) @*element-id))))))))
