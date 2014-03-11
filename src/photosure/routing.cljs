(ns photosure.routing
  (:require [secretary.core :as secretary :include-macros true :refer [defroute]]
            [goog.events :as events]
            [photosure.site :as site])
  (:import goog.History
           goog.history.EventType))

(secretary/set-config! :prefix "#")

(defroute home-path "/" []
  (site/render-blog))

(defroute bio-path "/bio" []
  (site/render-bio))

(defroute blog-path "/blog" []
  (site/render-blog))

(defroute gallery-path "/gallery" []
  (site/render-gallery))

(let [h (History.)]
  (goog.events/listen h EventType.NAVIGATE #(secretary/dispatch! (.-token %)))
  (doto h
    (.setEnabled true)))
