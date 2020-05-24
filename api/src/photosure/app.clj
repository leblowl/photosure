(ns photosure.app
  (:gen-class :main true)
  (:require [clojure.tools.logging :as log]
            [org.httpkit.server :as srv]
            [clj-http.client :as client]
            [environ.core :refer [env]]
            [compojure.route :as route]
            [compojure.core :refer [defroutes GET]]
            [jumblerg.middleware.cors :as middleware-cors]
            [ring.util.response :as resp]
            [ring.middleware.transit :as middleware-transit]
            [photosure.bio.control :as bio]
            [photosure.gallery.control :as gallery]))

(defn index
  [req]
  (resp/response "Welcome!"))

(defroutes routes
  (GET "/" [] index)
  (GET "/api/cms/gallery/img" [] gallery/gallery-imgs)
  (GET "/api/cms/bio" [] bio/get-bio)
  (route/resources "/")
  (resp/not-found "Not found."))

(def app
  (-> routes
      (middleware-cors/wrap-cors #".*")
      middleware-transit/wrap-transit-response))

(defonce server
  (atom nil))

(defn start
  ([opts]
   (let [opts (merge {:port 3002} opts)]
     (log/info (str "Server options: " opts))
     (log/info "Starting server...")
     (reset! server (srv/run-server #'app opts))))

  ([]
   (start nil)))

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
