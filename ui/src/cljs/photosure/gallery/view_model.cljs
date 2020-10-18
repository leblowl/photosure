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
          (mapv #(assoc % :href (rte/path-for :collection {:collection-id (:id %)})))
          (partition column-size column-size []))))

(defn update-photos
  [photos collection-id num-columns]

  (let [photos (get photos collection-id)
        num-photos (count photos)
        column-size (int (Math/ceil (/ num-photos num-columns)))]

    (->> photos
         (mapv #(assoc % :href
                       (rte/path-for :photo
                                     {:collection-id collection-id
                                      :photo-id (:id %)})))
         (partition column-size column-size []))))

(defn get-active-photo
  [photos collection-id photo-id]

  (when-let [photo (->> (get photos collection-id)
                        (filter #(= (:id %) photo-id))
                        (first))]

    (let [collection-url (rte/path-for :collection {:collection-id (:collection photo)})
          inquire-url (str "mailto:tableof_5@comcast.net"
                           "?Subject=cpleblow photography - "
                           (:name photo))]
      (-> photo
          (assoc :collection-url collection-url)
          (assoc :inquire-url inquire-url)))))

(defn gallery-view-model
  [vm *model]
  (let [*api-host (rr/reaction (get-in @*model [:app :config :api :host]))
        *route (rr/reaction (get-in @*model [:app :route]))
        *active-view (get-in vm [:app :*active-view])
        *view-params (rr/reaction
                      (when (#{:collection :photo} @*active-view)
                        (:params @*route)))

        *window (rr/reaction (get-in @*model [:app :window]))

        *gallery (rr/reaction (get @*model :gallery))
        *photos (rr/reaction (:photos @*gallery))
        *active-photo (rr/reaction
                       (let [{:keys [collection-id photo-id]} @*view-params]
                         (get-active-photo @*photos
                                           (keyword collection-id)
                                           (keyword photo-id))))

        *last-touch-time (rr/reaction
                          (get-in @*gallery [:active-photo :last-touch-time]))


        *photo-show-control (rr/make-reaction
                             (let [*state (atom true)
                                   *prev-active-photo (atom nil)]
                               (fn []
                                 (let [_ @*last-touch-time]
                                   (when (= @*prev-active-photo nil)
                                     (reset! *state true))
                                   (when (= @*prev-active-photo @*active-photo)
                                     (swap! *state not))
                                   (reset! *prev-active-photo @*active-photo)
                                   @*state))))]

    (assoc vm :*gallery
           (rr/reaction
            (let [num-columns (get-num-columns @*window)
                  photos (:photos @*gallery)
                  {:keys [collection-id]} @*view-params
                  collection-id (keyword collection-id)]

              (-> @*gallery
                  (assoc :num-columns num-columns)

                  (update :collections
                          #(update-collections % num-columns))

                  (assoc :collection-photos
                         (update-photos photos
                                        collection-id
                                        num-columns))

                  (assoc :active-photo
                         @*active-photo)

                  (assoc-in [:active-photo :*show-control]
                            *photo-show-control)

                  ((fn [gallery]
                     (let [active-photo (:active-photo gallery)
                           active-photos (get-in gallery [:photos collection-id])
                           active-order (:order active-photo)
                           prev-order (mod (dec active-order)
                                           (count active-photos))
                           prev-photo (get active-photos prev-order)
                           next-order (mod (inc active-order)
                                           (count active-photos))
                           next-photo (get active-photos next-order)]

                       (-> gallery
                           (assoc :prev-photo-url
                                  (when prev-photo
                                    (rte/path-for :photo
                                                  {:collection-id collection-id
                                                   :photo-id (:id prev-photo)})))

                           (assoc :next-photo-url
                                  (when next-photo
                                    (rte/path-for :photo
                                                  {:collection-id collection-id
                                                   :photo-id (:id next-photo)})))))))))))))
