(defproject
  photosure
  "0.1.0-SNAPSHOT"
  :dependencies
  [[org.clojure/clojure "1.5.1"]
   [lib-noir "0.7.1"]
   [compojure "1.1.5"]
   [ring-server "0.3.0"]
   [selmer "0.4.3"]
   [com.taoensso/timbre "2.6.2"]
   [com.postspectacular/rotor "0.1.0"]
   [com.taoensso/tower "1.7.1"]
   [markdown-clj "0.9.33"]
   [org.clojure/clojurescript "0.0-1896"]
   [domina "1.0.1"]
   [prismatic/dommy "0.1.1"]
   [cljs-ajax "0.2.0"]]
  :cljsbuild
  {:builds
   [{:source-paths ["src-cljs"],
     :compiler
     {:pretty-print false,
      :output-to "resources/public/js/site.js",
      :optimizations :advanced}}]}
  :ring
  {:handler photosure.handler/war-handler,
   :init photosure.handler/init,
   :destroy photosure.handler/destroy}
  :profiles
  {:production
   {:ring
    {:open-browser? false, :stacktraces? false, :auto-reload? false}},
   :dev
   {:dependencies [[ring-mock "0.1.5"] [ring/ring-devel "1.2.0"]]}}
  :url
  "http://example.com/FIXME"
  :plugins
  [[lein-ring "0.8.7"] [lein-cljsbuild "0.3.3"]]
  :description
  "FIXME: write description"
  :min-lein-version "2.0.0")