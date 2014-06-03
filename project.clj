(defproject photosure "0.1.0-SNAPSHOT"
  :description "cpleblow photography site"
  :url "cpleblow.me"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2173"]
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]
                 [om "0.6.2"]
                 [prismatic/dommy "0.1.2"]
                 [secretary "1.0.2"]
                 [http-kit "2.1.18"]
		 [compojure "1.1.8"]
                 [ring "1.3.0"]]

  :plugins [[lein-resource "0.3.6"]
            [lein-cljsbuild "1.0.2"]]

  :cljsbuild {:builds [{:id "client"
                        :source-paths ["src/photosure/client"]
                        :compiler {:output-to "target/app/resources/js/client.js"
                                   :output-dir "target/app/resources/js"
                                   :optimizations :none}}
                       {:id "server"
                        :source-paths ["src/photosure/server"]
                        :compiler {:output-to "target/app/server.js"
                                   :optimizations :simple
                                   :target :nodejs}}]}

  :resource {:resource-paths ["resources"]
             :target-path "target/app/resources"
             :skip-stencil [ #"resources/images/.*" ]}

  :hooks [leiningen.cljsbuild leiningen.resource])
