(ns photosure.routes.home
  (:use compojure.core)
  (:require [photosure.views.layout :as layout]
            [photosure.util :as util]
            [photosure.views.templates.home :as home]))

(defn home-page []
  (home/render))

(defn about-page []
  (layout/render "about.html"))

(defroutes home-routes
  (GET "/" [] (home-page))
  (GET "/about" [] (about-page)))
