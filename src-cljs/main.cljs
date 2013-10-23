(ns photosure.main
  (:require-macros [enfocus.macros :as em])
  (:require [enfocus.core :as ef]
            [photosure.views.templates.home :as home]))

(em/defaction setContent [chapter]
  "#content" (ef/html-content (home/renderAbout)))

(em/at "#chapterHome" (ev/listen :click
                                 (setContent "Home")))
