(ns photosure.app
  (:gen-class :main true)
  (:require [clojure.java.io :as io]
            [clojure.tools.logging :as log]
            [org.httpkit.server :as srv]
            [clj-http.client :as client]
            [environ.core :refer [env]]
            [compojure.route :as route]
            [compojure.core :refer [defroutes GET]]
            [jumblerg.middleware.cors :as middleware-cors]
            [ring.util.response :as resp]
            [ring.middleware.transit :as middleware-transit]))

(def tumblr-api
  (str "http://api.tumblr.com/v2/blog/cpleblow.tumblr.com/posts?api_key="
       (env :tumblr-key)))

(defn gallery-imgs
  [req]
  (let [gallery-rsrc (io/file (io/resource "public/img/gallery"))]
    (->> (file-seq gallery-rsrc)
         (map #(.getName %))
         (drop 1)
         sort
         vec
         resp/response)))

(defn posts
  [page]
  (let [offset (str "&offset=" (* 20 (read-string page)))
        req (str tumblr-api offset)]
    (get-in (client/get req {:as :json}) [:body :response :posts])))

(defn trim-posts
  [posts]
  (map (fn [post]
         (cond
           (= (:type post) "text") (select-keys post [:id :type :title :body])
           (= (:type post) "photo") (assoc (select-keys post [:id :type :caption])
                                      :photos (map #(:url (:original_size %)) (:photos post)))
           (= (:type post) "answer") (select-keys post [:id :type :asking_name :asking_url :question :answer])
           :else (println (:type post))))
    posts))

(defn index
  [req]
  (resp/response "Welcome!"))

(defroutes routes
  (GET "/" [] index)
  (GET ["/api/posts/:page" :page #"[0-9]+"] [page] (trim-posts (posts page)))
  (GET "/api/cms/gallery/img" [] gallery-imgs)
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
