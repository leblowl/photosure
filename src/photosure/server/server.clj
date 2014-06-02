(ns photosure.server.server
  (:require [org.httpkit.server :as srv]))

(defn app [req]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body "hello HTTP!"})

(defonce server (atom nil))

(defn start-server []
  (reset! server (srv/run-server #'app {:port 3000})))

(defn stop-server []
  (when-not (nil? @server)
    (@server :timeout 100)
    (reset! server nil)))

(defn -main [&args]
  (start-server))
