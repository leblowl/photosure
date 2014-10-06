(ns photosure.util
  (:require [cognitect.transit :as tr]
            [goog.events :as events])
  (:import [goog.net XhrIo]
           [goog.events EventType]))

(def ^:private meths
  {:get "GET"
   :put "PUT"
   :post "POST"
   :delete "DELETE"})

(defn edn-xhr [{:keys [method url data on-complete]}]
  (let [xhr (XhrIo.)]
    (events/listen xhr goog.net.EventType.COMPLETE
                   (fn [e]
                     (on-complete (tr/read (tr/reader :json) (.getResponseText xhr)))))
    (. xhr
       (send url (meths method) (when data (tr/write (tr/writer :json) data))
             #js {"Content-Type" "application/transit+json"}))))
