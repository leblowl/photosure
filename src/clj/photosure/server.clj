(ns photosure.server
  (:gen-class :main true)
  (:require [org.httpkit.server :as srv]
            [clj-http.client :as client]
            [environ.core :refer [env]])
  (:use [compojure.route :only [files not-found resources]]
        [compojure.handler :only [site]]
        [compojure.core :only [defroutes GET POST DELETE ANY context]]
        [ring.util.response :only [file-response response]]
        [ring.middleware.transit :refer [wrap-transit-response
                                         wrap-transit-params]]))

(def root (env :root))
(def tumblr-api (str "http://api.tumblr.com/v2/blog/cpleblow.tumblr.com/posts?api_key=" (env :tumblr-key)))

(defn gallery-imgs [req]
  (sort (drop 1 (for [file (file-seq
                       (clojure.java.io/file "resources/public/images/gallery"))]
             (.getName file)))))

(defn posts [page]
  (let [offset (str "&offset=" (* 20 (read-string page)))
        req (str tumblr-api offset)]
    (get-in (client/get req {:as :json}) [:body :response :posts])))

(defn trim-posts [posts]
  (map (fn [post]
         (cond
           (= (:type post) "text") (select-keys post [:id :type :title :body])
           (= (:type post) "photo") (assoc (select-keys post [:id :type :caption])
                                      :photos (map #(:url (:original_size %)) (:photos post)))
           (= (:type post) "answer") (select-keys post [:id :type :asking_name :asking_url :question :answer])
           :else (println (:type post))))
    posts))

(defn app [req]
  (file-response (str "public/" root) {:root "resources"}))

(defroutes routes
  (GET "/" [] app)
  (GET ["/api/posts/:page" :page #"[0-9]+"] [page] (trim-posts (posts page)))
  (GET "/api/cms/gallery/img" [] gallery-imgs)
  (resources "/")
  (not-found "<p>Page not found.</p>"))

(def sapp
  (-> routes
      wrap-transit-response))

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
