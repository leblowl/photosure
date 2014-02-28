(ns photosure.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <! timeout]]))

(def photos ["I" "LOVE" "YOU"])

(def next-photos [1 2 3])
(def prev-photos [])

(def app-state (atom {:next-photos [{:photo "rsc/cpleblow2.jpg" :state "enter"}
                                    {:photo "rsc/cpleblow3.jpg" :state "enter"}]

                      :current-photos [{:photo "rsc/cpleblow1.jpg" :state "enter"}
                                       {:photo "rsc/cpleblow2.jpg" :state "center"}
                                       {:photo "rsc/cpleblow3.jpg" :state "leave"}]

                      :prev-photos [{:photo "2" :state "2"}]}))

(defn next-photo [app-state]
  (om/transact! app-state
    (fn [_]
      {:prev-photos (conj (:prev-photos _) (peek (:next-photos _)))
       :next-photos (pop (:next-photos _))})))

(defn transition-next [app-state]
  (om/transact! app-state :current-photo
    (fn [_]
      (assoc _ :state "center"))))

(defn new-next [app-state]
  (om/update! app-state assoc-in [:current-photos 1 :state] "leave")
  (om/update! app-state assoc-in [:current-photos 0 :state] "center"))

(defn prev-photo [app-state]
  (om/transact! app-state
    (fn [_]
      {:next-photos (conj (:next-photos _) (peek (:prev-photos _)))
       :prev-photos (pop (:prev-photos _))})))

(defn photo [photo owner]
  (reify
    om/IRender
    (render [this]
        (dom/img #js {:src (:photo photo) :className (str "photo " (:state photo))}))))

(defn prev-btn [app-state owner]
  (reify
    om/IRenderState
    (render-state [this {:keys [next]}]
      (dom/div #js {:id "prev-btn" :className "btn" :onClick (fn [e] (put! next "cpleblow1.jpg"))}))))

(defn next-btn [app-state owner]
  (reify
    om/IRenderState
    (render-state [this {:keys [next]}]
      (dom/div #js {:id "next-btn" :className "btn" :onClick (fn [e] (put! next "flower1.jpg"))}))))

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

                (om/transact! app-state [:current-photos 2 :state]
                  (fn [_] "enter"))
                (om/transact! app-state [:current-photos 1 :state]
                  (fn [_] "slide leave"))
                (om/transact! app-state [:current-photos 0 :state]
                  (fn [_] "slide center"))

                (<! (timeout 1500))
                (om/transact! app-state [:current-photos 1 :state]
                  (fn [_] "leave"))
                (om/transact! app-state [:current-photos 0 :state]
                  (fn [_] "center"))

                (<! (timeout 500))
                (om/transact! app-state :current-photos
                  (fn [_] (pop _)))

                (<! (timeout 500))
                (om/transact! app-state :current-photos
                  (fn [_] (into (pop (:next-photos @app-state)) _)))

                (recur))))))

    om/IRenderState
    (render-state [this {:keys [next]}]
      (dom/div #js {:id "photo-gallery-container"}
        (dom/div #js {:id "left-pane"} (om/build prev-btn app-state {:init-state {:next next}}))
        (apply dom/div #js {:id "photo-gallery"}
          (om/build-all photo (:current-photos app-state)))
        (dom/div #js {:id "right-pane"} (om/build next-btn app-state {:init-state {:next next}}))))))

(defn run [app app-state]
  (om/root app app-state {:target (. js/document (getElementById "app"))}))

(run gallery app-state)
