(ns photosure.app
  (:gen-class :main true)
  (:require [clojure.tools.logging :as log]
            [clojure.java.io :as io]
            [clojure.edn :as edn]
            [org.httpkit.server :as srv]
            [compojure.route :as route]
            [compojure.core :refer [defroutes GET]]
            [ring.util.response :as resp]
            [ring.middleware.transit :refer [wrap-transit-response]]))

(defn main-page
  [req]
  (resp/resource-response "photosure.html" {:root "public"}))

(defn ui-config
  [req]
  (with-open [r (io/reader (io/resource "config.edn"))]
    (-> (edn/read (java.io.PushbackReader. r))
        (resp/response))))

(defroutes routes
  (GET "/" [] main-page)
  (GET "/config" [] ui-config)
  (route/resources "/")
  (resp/not-found "Not found."))

(def app
  (-> routes
      wrap-transit-response))

(defonce server
  (atom nil))

(defn start
  ([opts]
   (let [opts (merge {:port 3001} opts)]
     (log/info (str "Starting server on port " (:port opts) "..."))
     (log/info (str "Server options: " opts))
     (reset! server (srv/run-server #'app opts))))

  ([]
   (start {})))

(defn stop
  []
  (if (nil? @server)
    (log/info "Server already stopped!")
    (do
      (log/info "Stopping server...")
      (@server :timeout 100)
      (reset! server nil))))

(defn restart
  []
  (stop)
  (start {}))

(defn -main
  [& args]
  (start {}))
