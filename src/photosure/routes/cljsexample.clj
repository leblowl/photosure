(ns photosure.routes.cljsexample
  (:require [compojure.core :refer :all]
            [noir.response :as response]
            [photosure.views.layout :as layout]))

(def messages
  (atom 
    [{:message "Hello world"
      :user    "Foo"}
     {:message "Ajax is fun"
      :user    "Bar"}]))

(defroutes cljs-routes
  (GET "/cljsexample" [] (layout/render "cljsexample.html")) 
  (GET "/messages" [] (response/edn @messages))
  (POST "/add-message" [message user] 
        (response/edn 
          (swap! messages conj {:message message :user user}))))
