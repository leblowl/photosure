(ns photosure.util.web
  (:require [clojure.string :as str]
            [photosure.util :as util]))

(defn format-query-params
  [query-params]
  (->> query-params
       util/remove-nil-values
       (map (fn [[k v]]
              (str (.encodeURIComponent (name k))
                   "="
                   (.encodeURIComponent v))))
       (str/join "&")))

(defn add-query-params
  [path query-params]
  (let [qp (cond
             (string? query-params) query-params
             (map? query-params) (format-query-params query-params))]

    (if (empty? qp)
      path
      (str path "?" qp))))
