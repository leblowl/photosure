(ns photosure.gallery
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <! timeout]]))

"I LOVE YOU"

(def app-state
  (atom
   {:current-photos
    [{:photo "rsc/cpleblow1.jpg" :state "atleft"}
     {:photo "rsc/cpleblow2.jpg" :state "atcenter"}
     {:photo "rsc/cpleblow3.jpg" :state "atright"}]}))

(defn photo [photo owner]
  (reify
    om/IRender
    (render [this]
        (dom/img #js {:src (:photo photo) :id (:id photo) :className (str "photo " (:state photo))}))))

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

                (.log js/console "IWillMount: updating app state")
                (om/transact! app :current-photos (fn [xs] (subvec xs 1)))
                (recur))))))

    om/IWillUpdate
    (will-update [_ next-props next-state]
      (.log js/console "IWillUpdate: ready to update!"))
    om/IRenderState
    (render-state [this {:keys [next-chan]}]
      (dom/div #js {:id "photo-gallery-container"}
        (dom/div #js {:id "left-pane"} (om/build prev-btn app {:init-state {:next next-chan}}))
        (apply dom/div #js {:id "photo-gallery"}
          (om/build-all photo (:current-photos app)))
        (dom/div #js {:id "right-pane"} (om/build next-btn app {:init-state {:next next-chan}}))))))

(defn run [] (om/root gallery app-state {:target (. js/document (getElementById "gallery"))}))
