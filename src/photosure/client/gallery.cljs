(ns photosure.client.gallery
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <! timeout]]))

"I LOVE YOU"

(def app-state
  (atom
   {:next-photos    [{:photo "images/cpleblow3.jpg" :state "atleft"}]

    :current-photos [{:photo "images/cpleblow1.jpg" :state "atleft"}
                     {:photo "images/cpleblow2.jpg" :state "atcenter"}
                     {:photo "images/cpleblow3.jpg" :state "atright"}]

    :prev-photos    [{:photo "images/cpleblow1.jpg" :state "atright"}]}))

(defn photo [photo owner]
  (reify
    om/IRender
    (render [this]
        (dom/img #js {:src (:photo photo) :id (:id photo) :className (str "photo " (:state photo))}))))

(defn slide-next [app]
  (om/transact! app [:current-photos 1 :state] (fn [_] (str _ " transition atright")))
  (om/transact! app [:current-photos 0 :state] (fn [_] (str _ " transition atcenter"))))

(defn prev-btn [app owner]
  (reify
    om/IRenderState
    (render-state [this {:keys [next]}]
      (dom/div #js {:id "prev-btn" :className "btn" :onClick (fn [e] (put! next "cpleblow1.jpg"))}))))

(defn next-btn [app owner]
  (reify
    om/IRenderState
    (render-state [this {:keys [next]}]
      (dom/div #js {:id "next-btn" :className "btn" :onClick (fn [e] (put! next "cpleblow1.jpg"))}))))

(defn gallery [app owner]
  (reify
    om/IInitState
    (init-state [_]
      {:next-chan (chan)})

    om/IWillMount
    (will-mount [_]
      (let [next-photo (om/get-state owner :next-chan)]
        (go (loop []
              (let [photo (<! next-photo)]
                (om/transact! app [:current-photos 0 :state] (fn [_] (str _ " transition atcenter")))
                (om/transact! app [:current-photos 1 :state] (fn [_] (str _ " transition atright")))
                (<! (timeout 500))
                (om/update! app [:current-photos 0 :state] "atcenter")
                (om/update! app [:current-photos 1 :state] "atright")


                (om/transact! app :current-photos (fn [xs] (into [{:photo "images/cpleblow3.jpg" :state "atleft"}] (pop xs))))

                ;(slide-next app)
                ;(om/transact! app :current-photos (fn [xs] (subvec xs 1)))
                (recur))))))

    om/IRenderState
    (render-state [this {:keys [next-chan]}]
      (dom/div #js {:id "photo-gallery-container"}
        (dom/div #js {:id "left-pane"} (om/build prev-btn app {:init-state {:next next-chan}}))
        (apply dom/div #js {:id "photo-gallery"}
          (om/build-all photo (:current-photos app) {:key :photo}))
        (dom/div #js {:id "right-pane"} (om/build next-btn app {:init-state {:next next-chan}}))))))

(defn run [] (om/root gallery app-state {:target (. js/document (getElementById "gallery"))}))
