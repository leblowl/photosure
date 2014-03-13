(ns photosure.server.core
  (:require [cljs.core :as cljs]
            [cljs.nodejs :as nodejs]))

(defn say-hello [request response next]
  (let [name request.params.name
        response-body (cljs/clj->js {:name name})]
    (do
      (.send response response-body)
      (next))))

(defn create-server []
  (let [restify (nodejs/require "restify")
        server (.createServer restify)
        static-file-regexp (js/RegExp. "^/\\/?.*")
        static-server-opts (cljs/clj->js {:directory "./resources" :default "photosure.html"})
        static-file-server (.serveStatic restify static-server-opts)]
    (do
      (.get server "/greeting/:name" say-hello)
      (.get server static-file-regexp static-file-server))
    server))

(defn -main [& args]
  (let [web-server (create-server)]
    (.listen web-server 3000)))

(set! *main-cli-fn* -main)
