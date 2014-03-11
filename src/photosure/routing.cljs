(ns photosure.routing
  (:require [secretary.core :as secretary :include-macros true :refer [defroute]]))

(secretary/set-config! :prefix "#")

(defroute bio-path "#bio" []
  (js/alert "bio"))

(defroute blog-path "#blog" []
  (js/alert "blog"))

(defroute gallery-path "#gallery" []
  (js/alert "gallery"))
