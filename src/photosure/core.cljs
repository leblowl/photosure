(ns photosure.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(def app-state (atom {:list ["Lion" "Zebra"]}))


(defn gallery [state owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:id "backdrop"}
               (dom/div nil "Beginning")
               (dom/div nil "Middle")
               (dom/div nil "End")))))


(defn run [app]
  (om/root app app-state {:target (. js/document (getElementById "app"))}))

(run gallery)
