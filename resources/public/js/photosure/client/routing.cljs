(ns photosure.client.routing
  (:require [secretary.core :as secretary :include-macros true :refer [defroute]]
            [goog.events :as events]
            [photosure.client.core :as core])
  (:import goog.History
           goog.history.EventType))

(secretary/set-config! :prefix "#")

(defroute home-path "/" []
  (core/render-blog))

(defroute bio-path "/bio" []
  (core/render-bio))

(defroute blog-path "/blog" []
  (core/render-blog))

(defroute gallery-path "/gallery" []
  (core/render-gallery))

(let [h (History.)]
  (goog.events/listen h EventType.NAVIGATE #(secretary/dispatch! (.-token %)))
  (doto h
    (.setEnabled true)))
