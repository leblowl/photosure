(ns photosure.gallery.control
  (:require [clojure.java.io :as io]
            [ring.util.response :as resp]))

(defn gallery-imgs
  [req]
  (let [gallery-rsrc (io/file (io/resource "public/img/gallery"))]
    (->> (file-seq gallery-rsrc)
         (map #(.getName %))
         (drop 1)
         sort
         vec
         resp/response)))
