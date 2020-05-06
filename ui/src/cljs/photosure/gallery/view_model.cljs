(ns photosure.gallery.view-model
  (:require [reagent.ratom :as rr]))

(defn qualify-category-img-source
  [api-host x]
  (update x :img-source #(when (seq api-host) (str api-host %))))

(defn get-num-columns
  [window]
  (cond
    (< 1900 (:width window)) 4
    (< 1400 (:width window)) 3
    (< 900  (:width window)) 2
    :else 1))

(defn gallery-view-model
  [*model]
  (let [api-host (rr/reaction (get-in @*model [:app :config :api :host]))
        gallery (rr/reaction (get @*model :gallery))
        window (rr/reaction (get @*model :window))]

    (rr/reaction
     (let [num-columns (get-num-columns @window)]

       (-> @gallery
           (assoc :num-columns num-columns)
           (update :categories
                   (fn [categories]
                     (let [num-categories (count categories)
                           column-size (int (Math/ceil (/ num-categories num-columns)))]

                       (partition column-size
                                  column-size
                                  []
                                  (mapv (partial qualify-category-img-source @api-host) categories))))))))))
