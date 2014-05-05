(ns photosure.client.gallery
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <! timeout]]))

"I LOVE YOU"

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
      (dom/img #js {:src (:photo photo) :className (str "photo")}))))

(defn slide-prev [app]
  (om/update! app [:current-photos 1 :state] "transition atleft")
  (om/update! app [:current-photos 2 :state] "transition atcenter"))

(defn slide-next [app]
  ; (om/update! app [:current-photos 1 :state] "transition atright")
  ; (om/update! app [:current-photos 0 :state] "transition atcenter")
  )

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
       :prev-chan (chan)
       :curr (atom #{0 1 2})})

    om/IWillMount
    (will-mount [_]
      (let [next-photo (om/get-state owner :next-chan)
            prev-photo (om/get-state owner :prev-chan)]
        (go (loop []
              (let [photo (<! next-photo)
                    len (count (:photos app))]
                (om/update-state! owner :curr (fn [_] (map #(mod (inc %) len) _)))
                (<! (timeout 500))
                (recur))))
        (go (loop []
              (let [photo (<! prev-photo)
                    len (count (:photos app))]
                (om/update-state! owner :curr (fn [_] (map #(mod (dec %) len) _)))
                (<! (timeout 500))
                (recur))))))


;    (let [curr (om/get-state owner :curr)]
 ;     (filter  #(curr (second %)) (map vector (:photos app) (range)))
  ;    {:key :photo}
   ;)

    om/IRenderState
    (render-state [this {:keys [prev-chan next-chan curr]}]
      (dom/div #js {:id "photo-gallery-container"}
               (dom/div #js {:id "left-pane"} (om/build prev-btn app {:init-state {:prev prev-chan}}))
               (apply dom/div #js {:id "photo-gallery"}
                      (om/build-all photo
                                    (let [curr2 (om/get-state owner :curr)]
                                      (map first (filter #(@curr (second %)) (map vector (:photos app) (range)))))))
               (dom/div #js {:id "right-pane"} (om/build next-btn app {:init-state {:next next-chan}}))))))

(defn run [] (om/root gallery app-state {:target (. js/document (getElementById "gallery"))}))
