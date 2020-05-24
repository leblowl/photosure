(ns photosure.bio.control
  (:require [clojure.edn :as edn]
            [clojure.java.io :as io]
            [ring.util.response :as resp]))

(defn get-bio
  [req]
  (with-open [r (io/reader (io/resource "data/bio.edn"))]
    (-> (edn/read (java.io.PushbackReader. r))
        ;; TODO: Make URL absolute
        (resp/response))))
