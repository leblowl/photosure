(ns photosure.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <!]]))

(def app-state (atom {:photos ["I" "LOVE" "YOU"]}))

(defn photo [photo owner]
  (reify
    om/IRender
    (render [this]
      (dom/div nil photo))))

(defn next-btn [app-state owner]
  (reify
    om/IRenderState
    (render-state [this {:keys [next]}]
      (dom/button #js {:id "next-btn" :onClick (fn [e] (put! next "You asked for it!"))} "Next"))))

(defn gallery [app-state owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:id "photo-gallery-container"}
        (apply dom/div #js {:id "photo-gallery"}
          (om/build-all photo (:photos app-state)))
         (om/build next-btn app-state)))))

(defn run [app app-state]
  (om/root app app-state {:target (. js/document (getElementById "app"))}))

(run gallery app-state)
