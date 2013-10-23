(ns photosure.views.templates.home
  (:require [hiccup.core :refer :all ]
            [hiccup.page :refer :all ]))

(defn render []
  (let [chapters ["Home" "About" "Gallery" "Contact"]]
    (html5 [:div#header ;how to increment id for li in for macro?
            [:ul#index (for [chapter chapters]
                         [(keyword (str "li" "#chapter" chapter ".chapter")) chapter])]]
      [:div#content ]
      [:div#footer ]

      ;Style & Scripts
      (include-css "/css/home.css")
      (include-js "/js/site.js"))))


(defn renderHome []
  (html5 [:div#contentHome]))

(defn renderAbout []
  (html5 [:div#contentAbout "Hey Whatsup I'm photosure, you're new best friend!"]))
;; You can use a JS event handler to trigger a CSS animation (e.g. by adding a class name to an element, or setting the relevant style property directly) thereby getting the best of both worlds. –  NickFitz Jun 8 '10 at 17:40

