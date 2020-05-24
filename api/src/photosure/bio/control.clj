(ns photosure.bio.control
  (:require [clojure.edn :as edn]
            [clojure.java.io :as io]
            [ring.util.response :as resp]))

(defn get-req-base-url
  [req]
  (str (name (:scheme req))
       "://"
       (:server-name req)
       (when (not (#{80 443} (:server-port req)))
         (str ":" (:server-port req)))))

(defn get-bio
  [req]
  (let [base-url (get-req-base-url req)]
    (with-open [r (io/reader (io/resource "data/bio.edn"))]
      (-> (edn/read (java.io.PushbackReader. r))
          (update :selfie-src #(str base-url %))
          (resp/response)))))
