(ns photosure.server
  (:require [clj-http.client :as client]
            [compojure.route :as route]
            [compojure.handler       :refer [site]]
            [compojure.core          :refer [defroutes GET]]
            [ring.util.response      :refer [resource-response]]
            [ring.middleware.transit :refer [wrap-transit-response
                                             wrap-transit-params]]
            [org.httpkit.server      :refer [run-server]]))

(def tumblr-api (str "http://api.tumblr.com/v2/blog/cpleblow.tumblr.com/posts?api_key=" "api_key"))

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

(defroutes routes
  (GET "/" [] (resource-response "index.html" {:root "public"}))
  (GET ["/api/posts/:page" :page #"[0-9]+"] [page] (trim-posts (posts page)))
  (GET "/api/cms/gallery/img" [] gallery-imgs)
  (route/resources "/" {:root "public"})
  (route/not-found "Page not found."))

(defn run [handler & [port]]
  (defonce ^:private server
    (let [port (Integer. (or port 10333))]
      (println "Starting web server on port " port ".")
      (run-server handler {:port port}))))

(def handler (-> #'routes wrap-transit-response))

(defn -main [& [port]]
  (run handler port))
