(ns photosure.repl
  (:require [cljsbuild.core :as cljs]
            [photosure.app :as app]))

(defn start []
  (cljs/build-watch)
  (app/start))

(defn restart []
  (app/restart))

(defn stop []
  (app/stop)
  (cljs/stop))
