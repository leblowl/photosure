(ns photosure.server
  (:gen-class :main true)
  (:require [org.httpkit.server :as srv]
            [clj-http.client :as client])
  (:use [compojure.route :only [files not-found resources]]
        [compojure.handler :only [site]]
        [compojure.core :only [defroutes GET POST DELETE ANY context]]
        [ring.util.response :only [file-response]]
        [ring.middleware.edn :refer [wrap-edn-params]]))

(def api "http://api.tumblr.com/v2/blog/cpleblow.tumblr.com/posts?api_key=Tg1KPogMJGHntn64LnRYkTK0pAdlt5VdihWiDNEuNjrYH7TB20")

(def post-data (get-in (client/get api {:as :json}) [:body :response :posts]))

(defn generate-response [data & [status]]
  {:status (or status 200)
   :headers {"Content-Type" "application/edn"}
   :body (pr-str data)})

(defn posts [req]
  (generate-response post-data))

(defn app [req]
  (file-response "public/photosure.html" {:root "resources"}))

(defroutes routes
  (GET "/" [] app)
  (GET "/api/posts" [] posts)
  (resources "/")
  (not-found "<p>Page not found.</p>"))

(def sapp
  (-> routes
      wrap-edn-params))

(defonce server (atom nil))

(defn start [port]
  (reset! server (srv/run-server #'sapp {:port port})))

(defn stop []
  (when-not (nil? @server)
    (@server :timeout 100)
    (reset! server nil)))

(defn restart [port]
  (stop)
  (start port))

(defn -main [& args]
  (start (Integer. (first args))))
