(set-env!
        :target-path "target"
        :resource-paths #{"resources"}
        :source-paths #{"src/clj" "src/cljs" "../boot-cljs/src"}
        :dependencies '[
                        [adzerk/boot-cljs-repl "0.1.9"]
                        [adzerk/boot-reload "0.2.6"]
                        [boot-syu "0.1.0"]
                        [org.clojure/clojure "1.7.0-beta3"]
                        [org.clojure/clojurescript "0.0-3291"]
                        [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                        [org.omcljs/om "0.8.8"]
                        [sablono "0.3.4"]
                        [org.clojars.leanpixel/cljs-uuid-utils "1.0.0-SNAPSHOT"]
                        [com.andrewmcveigh/cljs-time "0.3.5"]
                        [ring "1.4.0-RC1"]
                        [compojure "1.3.4"]
                        [http-kit "2.1.19"]
                        [clj-http "1.1.2"]
                        [secretary "2.0.0.1-260a59"]
                        [ring-transit "0.1.3"]
                        [com.cognitect/transit-cljs "0.8.215"]])

(require
  '[adzerk.boot-cljs       :refer :all]
  '[adzerk.boot-reload     :refer :all]
  '[adzerk.boot-cljs-repl  :refer :all]
  '[boot-syu.task          :refer :all]
  '[photosure.server          :as server]
  '[ring.middleware.reload    :as reload]
  '[ring.middleware.file      :as file]
  '[ring.middleware.file-info :as file-info])

(defn dev-handler []
  (-> server/handler (reload/wrap-reload)
                     (file/wrap-file "target/public")
                     (file-info/wrap-file-info)))

(deftask dev-cljs
  "Build cljs for development."
[]
(comp (watch)
      (speak)
      (reload :on-jsload (symbol "photosure.navigation/go!"))
      (cljs :source-map true
            :optimizations :none
            :output-to "public/js/main.js")))

(deftask dev-serve
  "Start server for development."
[]
(with-post-wrap fileset (server/run (dev-handler))))

(deftask dev
  "Build cljs and start server for development."
[]
(comp
      (dev-cljs)
      (dev-serve)))

(deftask prod
  "Build application uberjar with http-kit main."
[]
(comp (cljs :unified true
            :source-map true
            :optimizations :none
            :output-to "public/js/main.js")
      (aot :all true)
      (uber)
      (jar :file "photosure.jar" :main 'photosure.server)))
