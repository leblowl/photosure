(ns photosure.site
  (:require [dommy.utils :as utils]
            [dommy.core :as dommy])
  (:use-macros [dommy.macros :only [node deftemplate sel sel1]]))

; (dommy/listen! js/window :hashchange #(js/alert "hey"))

(defn activate [nav-id]
  (doseq [link (sel [:#static-header ".link"])]
    (dommy/remove-class! link :active))
  (dommy/add-class! (sel1 nav-id) :active))

(deftemplate bio [] [:div#bio [:div#bio-content-wrapper [:p#bio-content "This is a story all about how my website got flipp turned upside up"]]])
(defn render-bio []
  (activate :#bio-link)
  (dommy/replace-contents! (sel1 :#dynamic-content) (bio)))

(deftemplate blog [] [:div#blog "Welcome to my blog"])
(defn render-blog []
  (activate :#blog-link)
  (dommy/replace-contents! (sel1 :#dynamic-content) (blog)))

(deftemplate gallery [] [:div#gallery "GALLERIA!"])
(defn render-gallery []
  (activate :#gallery-link)
  (dommy/replace-contents! (sel1 :#dynamic-content) (gallery)))
