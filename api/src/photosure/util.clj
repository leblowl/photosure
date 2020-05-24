(ns photosure.util)

(defn get-req-base-url
  [req]
  (str (name (:scheme req))
       "://"
       (:server-name req)
       (when (not (#{80 443} (:server-port req)))
         (str ":" (:server-port req)))))
