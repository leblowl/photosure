(ns photosure.site
  (:require [photosure.gallery]
            [dommy.utils :as utils]
            [dommy.core :as dommy])
  (:use-macros [dommy.macros :only [node deftemplate sel sel1]]))

; (dommy/listen! js/window :hashchange #(js/alert "hey"))

(defn activate [nav-id]
  (doseq [link (sel [:#static-header ".link"])]
    (dommy/remove-class! link :active))
  (dommy/add-class! (sel1 nav-id) :active))

(deftemplate bio [] [:div#bio
                     [:div#bio-wrapper
                      [:img#me {:src "rsc/me.jpg"}]
                      [:div#bio-content-wrapper
                       [:p#bio-content [:h3 "C.P.Leblow"] "This is a story all about how my website got flipp turned upside up"]]]])
(defn render-bio []
  (activate :#bio-link)
  (dommy/replace-contents! (sel1 :#dynamic-content) (bio)))

(deftemplate blog [] [:div#blog "Welcome to my blog"])
(defn render-blog []
  (activate :#blog-link)
  (dommy/replace-contents! (sel1 :#dynamic-content) (blog)))

(deftemplate gallery [] [:div#gallery])
(defn render-gallery []
  (activate :#gallery-link)
  (dommy/replace-contents! (sel1 :#dynamic-content) (gallery))
  (photosure.gallery.run))
