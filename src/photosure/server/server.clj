(ns photosure.server.server
  (:require [org.httpkit.server :as srv])
  (:use [compojure.route :only [files not-found]]
        [compojure.handler :only [site]]
        [compojure.core :only [defroutes GET POST DELETE ANY context]]))

(defn show-blog [req]
  ;;enlive here
  "<html><body><div>dude</div></body></html>"
  )

(defroutes all-routes
  (GET "/blog" [] show-blog)
  (not-found "<p>Page not found.</p>"))

(defonce server (atom nil))

(defn start-server []
  (reset! server (srv/run-server #'all-routes {:port 3000})))

(defn stop-server []
  (when-not (nil? @server)
    (@server :timeout 100)
    (reset! server nil)))

(defn -main [&args]
  (start-server))
