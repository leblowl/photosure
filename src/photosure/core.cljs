(ns photosure.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(def app-state (atom {:list ["I", "LOVE", "YOU"]}))

(defn photo [title owner]
  (reify
    om/IRender
    (render [this]
      (dom/div nil title))))

(defn gallery [titles owner]
  (reify
    om/IRender
    (render [this]
      (apply dom/div
             nil
             (om/build-all photo (:list titles))))))


(defn run [app app-state]
  (om/root app app-state {:target (. js/document (getElementById "app"))}))

(run gallery app-state)
