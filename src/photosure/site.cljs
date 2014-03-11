(ns photosure.site
  (:require [dommy.utils :as utils]
            [dommy.core :as dommy])
  (:use-macros [dommy.macros :only [node deftemplate sel sel1]]))

; (dommy/listen! js/window :hashchange #(js/alert "hey"))

(deftemplate bio [] [:div#bio [:div#bio-content-wrapper [:p#bio-content "This is a story all about how my website got flipp turned upside up"]]])

(defn render-bio []
  (dommy/append! (sel1 :#dynamic-content) (bio)))
