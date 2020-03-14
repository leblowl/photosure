(defproject photosure "0.1.0-SNAPSHOT"
  :description "cpleblow photography site web UI"
  :url "cpleblowphotography.com"
  :license {:name "MIT"
            :url "https://opensource.org/licenses/MIT"}

  :jvm-opts ["-Xmx128m" "-server"]

  :dependencies [[aide "0.1.0"]
                 [aide-reagent "0.1.0"]
                 [bidi "2.1.6"]
                 [com.cognitect/transit-cljs "0.8.256"]
                 [environ "1.1.0"]
                 [http-kit "2.3.0"]
                 [nrepl "0.6.0"]
                 [org.clojure/clojure "1.10.0"]
                 [org.clojure/clojurescript "1.10.520"]
                 [org.clojure/tools.logging "0.5.0"]
                 [compojure "1.6.1"]
                 [reagent "0.8.1"]
                 [ring "1.7.1"]
                 [ring-transit "0.1.6"]
                 [venantius/accountant "0.2.4"]]
  :main photosure.app
  :min-lein-version "2.5.0"
  :plugins [[lein-cljsbuild "1.1.7"]
            [lein-environ "1.1.0"]]

  :source-paths ["src/clj"]
  :resource-paths ["rsrc" "target/cljsbuild"]

  :cljsbuild
  {:builds
   {:dev
    {:source-paths ["src/cljs"]
     :compiler
     {:main "photosure.main"
      :asset-path "/js/out"
      :output-to "target/cljsbuild/public/js/app.js"
      :output-dir "target/cljsbuild/public/js/out"
      :source-map    true
      :optimizations :none
      :pretty-print  true}}}}

  :profiles
  {:dev
   {:resource-paths ["env/dev/rsrc"]}

   :uberjar
   {:resource-paths ["env/pro/rsrc"]
    :aot :all
    :omit-source true
    :uberjar-name "photosure-ui.jar"
    :prep-tasks ["compile" ["cljsbuild" "once"]]}})
