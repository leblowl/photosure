(ns photosure.views.templates.home)
(use 'hiccup.core)
(use 'hiccup.page)

(defn render []
  (let [chapters (list "Home" "About" "Gallery" "Contact")]
    (html5
      [:div#header]
      ;how to increment id for li in for macro?
      [:ul#index (for [chapter chapters]
                   [:li.chapter
                      [:a {:href chapter} chapter]])]

      [:div#content]
      [:div#footer]
      ;Style & Scripts
      (include-css "/css/home.css"))))
