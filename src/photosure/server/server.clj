(ns photosure.server.server
  (:require [org.httpkit.server :as srv]
            [clj-http.client :as client])
  (:use [compojure.route :only [files not-found resources]]
        [compojure.handler :only [site]]
        [compojure.core :only [defroutes GET POST DELETE ANY context]]
        [ring.util.response :only [file-response]]
        [net.cgrand.enlive-html]))

(def data {:blog_name "cpleblow"
           :id 87345566689
           :caption "found inside an open boxcar on a side track"
           :photos [{:caption ""
                     :alt_sizes [{:width 1280 :height 848 :url "http://37.media.tumblr.com/2abfbbc134982eac569dff1c5a1e26b5/tumblr_n6exohCKdZ1r7pi7mo1_500.jpg"}]}]})

(def api "http://api.tumblr.com/v2/blog/cpleblow.tumblr.com/posts?api_key=Tg1KPogMJGHntn64LnRYkTK0pAdlt5VdihWiDNEuNjrYH7TB20&limit=2")
(def posts (get-in (client/get api {:as :json}) [:body :response :posts]))

(defsnippet post-list-item "public/html/post.html"
  [:.post]
  [id image caption]

  [:div] (set-attr :id id)
  [:div :div.photo :img] (set-attr :src image)
  [:div :div.caption] (html-content caption))

(deftemplate post-list-template "public/html/post.html" [posts]
  [:body] (content (map (fn [post] (post-list-item (:id post)
                                                  (get-in post [:photos 0 :alt_sizes 0 :url])
                                                  (:caption post)))
                        posts)))

(deftemplate bio-template "public/html/bio.html" [image text]
  [:img] (set-attr :src image)
  [:p] (content text))

(defn app [req]
  (file-response "public/html/photosure.html" {:root "resources"}))

(defn bio [req]
  (apply str (bio-template "public/images/me.jpg" "Hey it's me and this is my site. Check it out! But wait there is more...now for a limited time only you can harness the complete power of my site XL. Super large for a SUPER small price. Now check it!")))

(defn blog [req]
  (apply str (post-list-template posts)))

(defroutes all-routes
  (GET "/app" [] app)
  (GET "/bio" [] bio)
  (GET "/blog" [] blog)
  (resources "/")
  (not-found "<p>Page not found.</p>"))

(defonce server (atom nil))

(defn start []
  (reset! server (srv/run-server #'all-routes {:port 3000})))

(defn stop []
  (when-not (nil? @server)
    (@server :timeout 100)
    (reset! server nil)))

(defn restart []
  (stop)
  (start))

(defn -main [&args]
  (start))
