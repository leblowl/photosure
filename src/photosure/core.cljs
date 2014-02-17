(ns photosure.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(def app-state (atom {:list ["Lion" "Zebra"]}))



(om/root (fn [app owner]
           (apply dom/ul
                  nil
                  (map (fn [text] (dom/li nil text)) (:list app))))
         app-state
         {:target (. js/document (getElementById "app"))})
