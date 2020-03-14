(defproject photosure "0.1.0-SNAPSHOT"
  :description "cpleblow photography site"
  :url "cpleblowphotography.com"
  :license {:name "MIT"
            :url "https://opensource.org/licenses/MIT"}

  :jvm-opts ["-Xmx256m" "-server"]

  :dependencies [[jumblerg/ring-cors "2.0.0"]
                 [org.clojure/clojure "1.10.0"]
                 [org.clojure/tools.logging "0.5.0"]
                 [http-kit "2.3.0"]
                 [compojure "1.6.1"]
                 [ring "1.7.1"]
                 [ring-transit "0.1.6"]
                 [nrepl "0.6.0"]
                 [clj-http "3.10.0"]
                 [environ "1.1.0"]]

  :main photosure.app
  :min-lein-version "2.0.0"
  :plugins [[lein-environ "1.1.0"]]

  :source-paths ["src"]
  :resource-paths ["rsrc"]

  :profiles
  {:uberjar
   {:aot :all
    :omit-source true
    :uberjar-name "photosure-api.jar"}})
