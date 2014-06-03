(ns photosure.server.server
  (:require [org.httpkit.server :as srv])
  (:use [compojure.route :only [files not-found resources]]
        [compojure.handler :only [site]]
        [compojure.core :only [defroutes GET POST DELETE ANY context]]
        [net.cgrand.enlive-html]))

(def data {:blog_name "cpleblow"
           :id 87345566689
           :caption "found inside an open boxcar on a side track"
           :photos [{:caption ""
                     :alt_sizes [{:width 1280 :height 848 :url "http://37.media.tumblr.com/2abfbbc134982eac569dff1c5a1e26b5/tumblr_n6exohCKdZ1r7pi7mo1_500.jpg"}]}]})

(deftemplate post "post.html" [id image caption]
  [:div] (set-attr :id id)
  [:div :div.photo :img] (set-attr :src image)
  [:div :div.caption] (content caption))

(defn show-blog [req]
  ;;enlive here
  (apply str (post (:id data) (get-in data [:photos 0 :alt_sizes 0 :url]) (:caption data))))

(defroutes all-routes
  (GET "/blog" [] show-blog)
  (resources "/")
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
