(ns photosure.bio.control
  (:require [clojure.edn :as edn]
            [clojure.java.io :as io]
            [ring.util.response :as resp]
            [photosure.util :as util]))

(defn get-bio
  [req]
  (let [base-url (util/get-req-base-url req)]
    (with-open [r (io/reader (io/resource "data/bio.edn"))]
      (-> (edn/read (java.io.PushbackReader. r))
          (update :selfie-src #(str base-url %))
          (resp/response)))))
