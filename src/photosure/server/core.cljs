(ns photosure.server.core
  (:require [cljs.core :as cljs]
            [cljs.nodejs :as nodejs]))

(defn say-hello [request response next]
  (let [name (.-name (.-params request))
        response-body (cljs/clj->js {:name name})]
    (do
      (.send response response-body)
      (next))))

(defn fetch-posts [request response next]
  (let [consumer_key "nArQ3AMh7kkiU72PjowZxx1eYZ0PxIFpHFojpxtsoqnjvEJ6CC"
        consumer_secret "f3UwUKOEugWVbszKWUDfH4r2KcqP8hf67tzv0X5H7HVSAWrAig"
        tumblr (nodejs/require "tumblr.js")
        client (.createClient tumblr cljs/clj->js {:consumer_key consumer_key
                                                   :consumer_secret consumer_secret})
        response-body (cljs/clj->js {:eh "dude??"})
        passport (nodejs/require "passport")
        tumblr_strategy (.-Strategy (nodejs/require "passport-tumblr"))
        strategy (tumblr_strategy cljs/clj->js {:consumerKey consumer_key
                                                :consumerSecret consumer_secret})]
    (do
      (.send response response-body)
      (next))))

(defn recv [request response next]
  (let [response-body (cljs/clj->js {:yo "whoah"})]
    (do
      (.redirect response "greeting/luke")
      (next))))

(defn create-server []
  (let [restify (nodejs/require "restify")
        server (.createServer restify)
        static-file-regexp (js/RegExp. "^/\\/?.*")
        static-server-opts (cljs/clj->js {:directory "./resources" :default "photosure.html"})
        static-file-server (.serveStatic restify static-server-opts)]
    (do
      (.get server "/greeting/:name" say-hello)
      (.get server "/tumblr" fetch-posts)
      (.get server "/auth/tumblr/callback" recv)
      (.get server static-file-regexp static-file-server))
    server))

(defn -main [& args]
  (let [web-server (create-server)]
    (.listen web-server 3000)))

(set! *main-cli-fn* -main)
