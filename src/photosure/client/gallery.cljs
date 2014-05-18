(ns photosure.client.gallery
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <! timeout]]
            [clojure.string :as str]))

"I LOVE YOU"

(defn filter-indexed [f coll]
  (map second (filter (fn [[ndx item]] (f ndx item)) (map vector (range) coll))))

(defn photo [filepath pos] {:photo filepath :pos pos})

(def app-state
  (atom
   {:photos [(photo "images/puppy1.jpg" ["left"])
             (photo "images/cpleblow1.jpg" ["center"])
             (photo "images/cpleblow2.jpg" ["right"])]}))

(defn photo-view [photo owner]
  (reify
    om/IRender
    (render [this]
      (.log js/console photo)
      (dom/img #js {:src (:photo photo) :className (str "photo " (str/join " " (:pos photo)))}))))

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

(defn originate [app ndx from]
  (om/update! app [:photos ndx :pos] [from]))

(defn transition [app ndx to]
  (om/transact! app [:photos ndx :pos] #(conj % (str "transition " to))))

(defn gallery [app owner]
  (reify
    om/IInitState
    (init-state [_]
      {:slide-chan (chan)
       :curr [0 1 2]})

    om/IWillMount
    (will-mount [_]
      (let [slide-chan (om/get-state owner :slide-chan)]
        (go (loop []
              (let [len (count (:photos @app))]
                (if (= (<! slide-chan) "next")
                  (do
                    (om/update-state! owner :curr (fn [_] (apply vector (map #(mod (dec %) len) _))))
                    (originate  app (om/get-state owner [:curr 0]) "left")
                    (transition app (om/get-state owner [:curr 1]) "center")
                    (transition app (om/get-state owner [:curr 2]) "right"))
                  (do
                    (om/update-state! owner :curr (fn [_] (apply vector (map #(mod (inc %) len) _))))
                    (transition app (om/get-state owner [:curr 0]) "left")
                    (transition app (om/get-state owner [:curr 1]) "center")
                    (originate  app (om/get-state owner [:curr 2]) "right")))
                (<! (timeout 500))
                (recur))))))

    om/IRenderState
    (render-state [this {:keys [slide-chan curr]}]
      (dom/div #js {:id "photo-gallery-container"}
        (dom/div #js {:id "left-pane"} (om/build prev-btn app {:init-state {:slide-chan slide-chan}}))
        (apply dom/div #js {:id "photo-gallery"}
               (om/build-all photo-view (:photos app) {:key :photo}))
        (dom/div #js {:id "right-pane"} (om/build next-btn app {:init-state {:slide-chan slide-chan}}))))))

(defn run [] (om/root gallery app-state {:target (. js/document (getElementById "gallery"))}))
