(ns photosure.client.gallery
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <! timeout]]))

"I LOVE YOU"

(defn filter-indexed [f coll]
  (map second (filter (fn [[ndx item]] (f ndx item)) (map vector (range) coll))))

(defn image [filepath] {:photo filepath})

(def app-state
  (atom
   {:photos [(image "images/puppy1.jpg")
             (image "images/cpleblow1.jpg")
             (image "images/cpleblow2.jpg")]}))

(defn photo [photo owner]
  (reify
    om/IRender
    (render [this]
      (.log js/console photo)
      (dom/img #js {:src (:photo photo) :className "photo"}))))

(defn prev-btn [app owner]
  (reify
    om/IRenderState
    (render-state [this {:keys [slide-chan]}]
      (dom/div #js {:id "prev-btn" :className "btn" :onClick (fn [e] (put! slide-chan "prev"))}))))

(defn next-btn [app owner]
  (reify
    om/IRenderState
    (render-state [this {:keys [slide-chan]}]
      (dom/div #js {:id "next-btn" :className "btn" :onClick (fn [e] (put! slide-chan "next"))}))))

(defn gallery [app owner]
  (reify
    om/IInitState
    (init-state [_]
      {:slide-chan (chan)
       :curr #{0 1 2}})

    om/IWillMount
    (will-mount [_]
      (let [slide-chan (om/get-state owner :slide-chan)]
        (go (loop []
              (let [len (count (:photos @app))]
                (if (= (<! slide-chan) "next")
                  (om/update-state! owner :curr (fn [_] (apply hash-set (map #(mod (inc %) len) _))))
                  (om/update-state! owner :curr (fn [_] (apply hash-set (map #(mod (dec %) len) _)))))
                (.log js/console (om/get-state owner :curr))
                (<! (timeout 500))
                (recur))))))

    om/IRenderState
    (render-state [this {:keys [slide-chan curr]}]
      (dom/div #js {:id "photo-gallery-container"}
        (dom/div #js {:id "left-pane"} (om/build prev-btn app {:init-state {:slide-chan slide-chan}}))
        (apply dom/div #js {:id "photo-gallery"}
               (om/build-all photo (filter-indexed (fn [ndx item] (curr ndx)) (:photos app))))
        (dom/div #js {:id "right-pane"} (om/build next-btn app {:init-state {:slide-chan slide-chan}}))))))

(defn run [] (om/root gallery app-state {:target (. js/document (getElementById "gallery"))}))
