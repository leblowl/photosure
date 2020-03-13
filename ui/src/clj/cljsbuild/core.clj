(ns cljsbuild.core
  (:require [cljs.build.api :as cljs]
            [cljs.closure :as closure]
            [cljs.env :as env]))

(def stopped (atom false))

(def builder (atom nil))

(defn build-watch
  ([]
   (build-watch
    ["src/cljs"]
    {:asset-path   "/js"
     :output-to    "target/cljsbuild/public/js/app.js"
     :output-dir   "target/cljsbuild/public/js"
     :main         'photosure.main
     :source-map   true
     :pretty-print true
     :verbose      true}))

  ([srcs opts]
   (reset! builder
           (future
             (cljs/watch (closure/compilable-input-paths srcs)
                         opts
                         (env/default-compiler-env
                          (closure/add-externs-sources opts))
                         stopped)))))

(defn stop []
  (reset! stopped true)
  @builder)
