(defproject photosure "0.1.0-SNAPSHOT"
  :description "cpleblow photography site"
  :url "cpleblow.me"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2173"]
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]
                 [om "0.6.5"]
                 [enfocus "2.0.2"]
                 [secretary "1.0.2"]
                 [http-kit "2.1.18"]
		 [compojure "1.1.8"]
                 [ring "1.3.0"]
                 [ring-edn "0.1.0"]
                 [enlive "1.1.5"]
                 [clj-http "0.9.2"]
                 [hickory "0.5.3"]]
  :main photosure.server

  :plugins [[lein-cljsbuild "1.0.2"]]

  :source-paths ["src/clj"]
  :resource-paths ["resources"]

  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src/cljs"]
                        :compiler {:output-to "resources/public/js/client.js"
                                   :output-dir "resources/public/js"
                                   :optimizations :none
				   :source-map true}}]})
