(ns photosure.client.gallery
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <! timeout]]))

"I LOVE YOU"

(def app-state
  (atom
   {:next-photos    [{:photo "images/puppy1.jpg" :state "atleft"}]

    :current-photos [{:photo "images/cpleblow1.jpg" :state "atleft"}
                     {:photo "images/cpleblow2.jpg" :state "atcenter"}
                     {:photo "images/cpleblow3.jpg" :state "atright"}]

    :prev-photos    [{:photo "images/flower1.jpg" :state "atright"}]}))

(defn photo [photo owner]
  (reify
    om/IRender
    (render [this]
        (dom/img #js {:src (:photo photo) :id (:id photo) :className (str "photo " (:state photo))}))))

(defn slide-prev [app]
  (om/update! app [:current-photos 1 :state] "transition atleft")
  (om/update! app [:current-photos 2 :state] "transition atcenter"))

(defn slide-next [app]
  (om/update! app [:current-photos 1 :state] "transition atright")
  (om/update! app [:current-photos 0 :state] "transition atcenter"))

(defn prev-btn [app owner]
  (reify
    om/IRenderState
    (render-state [this {:keys [prev]}]
      (dom/div #js {:id "prev-btn" :className "btn" :onClick (fn [e] (put! prev (peek (:prev-photos @app-state))))}))))

(defn next-btn [app owner]
  (reify
    om/IRenderState
    (render-state [this {:keys [next]}]
      (dom/div #js {:id "next-btn" :className "btn" :onClick (fn [e] (put! next (peek (:next-photos @app-state))))}))))

(defn gallery [app owner]
  (reify
    om/IInitState
    (init-state [_]
      {:next-chan (chan)
       :prev-chan (chan)})

    om/IWillMount
    (will-mount [_]
      (let [next-photo (om/get-state owner :next-chan)
            prev-photo (om/get-state owner :prev-chan)]
        (go (loop []
              (let [photo (<! next-photo)]
                (slide-next app)
                (<! (timeout 500))
                (om/update! app [:current-photos 0 :state] "atcenter")
                (om/update! app [:current-photos 1 :state] "atright")
                (om/transact! app :current-photos (fn [xs] (into [photo] (pop xs))))
                (om/transact! app :next-photos (fn [xs] (pop xs)))
                (recur))))
        (go (loop []
              (let [photo (<! prev-photo)]
                (slide-prev app)
                (<! (timeout 500))
                (om/update! app [:current-photos 1 :state] "atleft")
                (om/update! app [:current-photos 2 :state] "atcenter")
                (om/transact! app :current-photos (fn [xs] (conj (subvec xs 1) photo)))
                (om/transact! app :prev-photos (fn [xs] (pop xs)))
                (recur))))))

    om/IRenderState
    (render-state [this {:keys [prev-chan next-chan]}]
      (dom/div #js {:id "photo-gallery-container"}
        (dom/div #js {:id "left-pane"} (om/build prev-btn app {:init-state {:prev prev-chan}}))
        (apply dom/div #js {:id "photo-gallery"}
          (om/build-all photo (:current-photos app) {:key :photo}))
        (dom/div #js {:id "right-pane"} (om/build next-btn app {:init-state {:next next-chan}}))))))

(defn run [] (om/root gallery app-state {:target (. js/document (getElementById "gallery"))}))
