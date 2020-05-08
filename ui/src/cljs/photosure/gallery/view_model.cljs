(ns photosure.gallery.view-model
  (:require [reagent.ratom :as rr]))

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
  (let [api-host (rr/reaction (get-in @*model [:app :config :api :host]))
        route (rr/reaction (get-in @*model [:app :route]))
        view-id (rr/reaction
                 (get @(:*app vm) :view-id))
        collection (rr/reaction
                    (when (= @view-id :collection)
                      (keyword (get-in @route [:params :id]))))
        gallery (rr/reaction (get @*model :gallery))
        window (rr/reaction (get @*model :window))]

    (assoc vm :*gallery
           (rr/reaction
            (let [num-columns (get-num-columns @window)
                  make-url-absolute (partial make-url-absolute @api-host)]

              (-> @gallery
                  (assoc :num-columns num-columns)

                  (update :categories
                          (fn [categories]
                            (let [num-categories (count categories)
                                  column-size (int (Math/ceil (/ num-categories num-columns)))]

                              (partition column-size
                                         column-size
                                         []
                                         (mapv #(update % :img-source make-url-absolute) categories)))))
                  (update :photos
                          (fn [photos]
                            (let [collection @collection
                                  photos (get photos collection)
                                  num-photos (count photos)
                                  column-size (int (Math/ceil (/ num-photos num-columns)))]

                              (partition column-size
                                         column-size
                                         []
                                         (mapv #(update % :img-source make-url-absolute) photos)))))))))))
