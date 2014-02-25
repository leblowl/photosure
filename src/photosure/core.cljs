(ns photosure.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <! timeout]]))

(def photos ["I" "LOVE" "YOU"])
(def index (atom 0))

(def app-state (atom {:photos [{:photo "flower1.jpg" :state "enter"}]
                      :index 0}))

(defn inc-index [app-state]
  (swap! app-state assoc :index (inc (:index @app-state))))

(defn get-next-photo [app-state]
  (inc-index app-state)
  (get (:photos @app-state) (:index @app-state)))

(defn photo [photo owner]
  (reify
    om/IRender
    (render [this]
      (dom/img #js {:src (:photo photo) :className (str "photo " (:state photo))}))))

(defn next-btn [app-state owner]
  (reify
    om/IRenderState
    (render-state [this {:keys [next]}]
      (dom/button #js {:id "next-btn" :onClick (fn [e] (put! next "flower1.jpg"))} ">"))))

(defn gallery [app-state owner]
  (reify

    om/IInitState
    (init-state [_]
      {:next (chan)})

    om/IWillMount
    (will-mount [_]
      (let [next (om/get-state owner :next)]
        (go (loop []
              (let [photo (<! next)]
                (om/transact! app-state :photos
                  (fn [xs]
                    (assoc-in xs [0 :state] "leave")))
                (<! (timeout 3000))
                (om/transact! app-state :photos
                  (fn [xs]
                    (assoc-in xs [0 :state] "enter")))
                (recur))))))

    om/IRenderState
    (render-state [this {:keys [next]}]
      (dom/div #js {:id "photo-gallery-container"}
        (apply dom/div #js {:id "photo-gallery"}
          (om/build-all photo (:photos app-state)))
         (om/build next-btn app-state {:init-state {:next next}})))))

(defn run [app app-state]
  (om/root app app-state {:target (. js/document (getElementById "app"))}))

(run gallery app-state)
