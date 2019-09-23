(defproject photosure "0.1.0-SNAPSHOT"
  :description "cpleblow photography site"
  :url "cpleblow.me"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.10.0"]
                 [org.clojure/clojurescript "1.10.520"]
                 [org.clojure/core.async "0.4.500"]
                 [org.omcljs/om "1.0.0-beta1"]
                 [clj-commons/secretary "1.2.4"]
                 [http-kit "2.3.0"]
                 [compojure "1.6.1"]
                 [ring "1.7.1"]
                 [ring-transit "0.1.6"]
                 [nrepl "0.6.0"]
                 [com.cognitect/transit-cljs "0.8.256"]
                 [clj-http "3.10.0"]
                 [environ "1.1.0"]]
  :main photosure.server
  :min-lein-version "2.0.0"
  :plugins [[lein-cljsbuild "1.1.7"]
            [lein-pdo "0.1.1"]
            [lein-environ "1.1.0"]]

  :aliases {"all-dev" ["pdo" "cljsbuild" "auto" "dev," "with-profile" "dev" "run" "24099"]
            "build-pro" ["pdo" "cljsbuild" "clean," "cljsbuild" "once" "release"]
            "up-pro" ["pdo" "with-profile" "release" "run" "24099"]}
  :source-paths ["src/clj"]
  :resource-paths ["resources"]

  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src/cljs"]
                        :compiler {:output-to "resources/public/js/photosure-dev.js"
                                   :output-dir "resources/public/js"
                                   :optimizations :none
				   :source-map true}}
                       {:id "release"
                        :source-paths ["src/cljs"]
                        :compiler {:output-to "resources/public/js/photosure.js"
                                   :optimizations :advanced
                                   :pretty-print false
                                   :preamble ["react/react.min.js"]
                                   :externs ["react/externs/react.js"]}}]})
