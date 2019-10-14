(defproject photosure "0.1.0-SNAPSHOT"
  :description "cpleblow photography site web UI"
  :url "cpleblowphotography.com"
  :license {:name "MIT"
            :url "https://opensource.org/licenses/MIT"}

  :jvm-opts ["-Xmx128m" "-server"]

  :dependencies [[clj-commons/secretary "1.2.4"]
                 [http-kit "2.3.0"]
                 [org.clojure/clojure "1.10.0"]
                 [org.clojure/clojurescript "1.10.520"]
                 [org.clojure/core.async "0.4.500"]
                 [org.clojure/tools.logging "0.5.0"]
                 [org.omcljs/om "1.0.0-beta1"]
                 [compojure "1.6.1"]
                 [ring "1.7.1"]
                 [ring-transit "0.1.6"]
                 [nrepl "0.6.0"]
                 [com.cognitect/transit-cljs "0.8.256"]
                 [environ "1.1.0"]]

  :main photosure.app
  :min-lein-version "2.0.0"
  :plugins [[lein-cljsbuild "1.1.7"]
            [lein-environ "1.1.0"]]

  :source-paths ["src/clj"]
  :resource-paths ["rsrc"]

  :profiles
  {:dev
   {:resource-paths ["env/dev/rsrc"]}}

  :cljsbuild
  {:builds [{:id "dev"
             :source-paths ["src/cljs"]
             :compiler {:output-to "rsrc/public/js/photosure.js"
                        :output-dir "rsrc/public/js/out"
                        :main "photosure.navigation"
                        :asset-path "js/out"
                        :optimizations :none
                        :source-map true}}

            {:id "release"
             :source-paths ["src/cljs"]
             :compiler {:output-to "rsrc/public/js/photosure.js"
                        :optimizations :advanced
                        :pretty-print false
                        :preamble ["react/react.min.js"]
                        :externs ["react/externs/react.js"]}}]})
