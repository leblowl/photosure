(defproject photosure "0.1.0-SNAPSHOT"
  :description "cpleblow photography site"
  :url "cpleblow.me"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2322"]
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]
                 [om "0.7.3"]
                 [secretary "1.2.1"]
                 [http-kit "2.1.18"]
                 [compojure "1.1.9"]
                 [ring "1.3.0"]
                 [ring-transit "0.1.2"]
                 [com.cognitect/transit-cljs "0.8.188"]
                 [clj-http "0.9.2"]
                 [environ "1.0.0"]]
  :main photosure.server
  :min-lein-version "2.0.0"
  :plugins [[lein-cljsbuild "1.0.3"]
            [lein-pdo "0.1.1"]
            [lein-environ "1.0.0"]]

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
