(ns photosure.gallery.control
  (:require [clojure.java.io :as io]
            [clojure.edn :as edn]
            [ring.util.response :as resp]
            [photosure.util :as util]))

(defn gallery-imgs
  [req]
  (let [gallery-rsrc (io/file (io/resource "public/img/gallery"))]
    (->> (file-seq gallery-rsrc)
         (map #(.getName %))
         (drop 1)
         sort
         vec
         resp/response)))

(defn get-gallery
  [req]
  (let [base-url (util/get-req-base-url req)]
    (with-open [r (io/reader (io/resource "data/gallery.edn"))]
      (-> (edn/read (java.io.PushbackReader. r))
          (update :collections
                  (fn [collections]
                    (map (fn [collection]
                           (-> collection
                               (update :img-source #(str base-url %))))
                         collections)))

          (update :photos
                  (fn [photos]
                    (map (fn [photo]
                           (-> photo
                               (update :img-source #(str base-url %))))
                         photos)))

          (resp/response)))))
