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
   {:photos [(photo "images/cpleblow1.jpg" ["left"])
             (photo "images/cpleblow2.jpg" ["center"])
             (photo "images/cpleblow3.jpg" ["right"])
             (photo "images/cpleblow4.jpg" [])
             (photo "images/cpleblow5.jpg" [])
             (photo "images/cpleblow6.jpg" [])]
    :curr [0 1 2]}))

(defn photo-view [photo owner]
  (reify
    om/IRender
    (render [this]
      (dom/img #js {:src (:photo photo)
                    :className (str "photo " (if (empty? (:pos photo))
                                               "hidden"
                                               (str/join "-" (take-last 2 (:pos photo)))))}))))

(defn prev-btn [app owner]
  (reify
    om/IRenderState
    (render-state [this {:keys [slide-chan disabled]}]
      (dom/div #js {:id "prev-btn" :className (str "btn" (when disabled " disabled")) :onClick (fn [e] (put! slide-chan "prev"))}))))

(defn next-btn [app owner]
  (reify
    om/IRenderState
    (render-state [this {:keys [slide-chan disabled]}]
      (dom/div #js {:id "next-btn" :className (str "btn" (when disabled " disabled")) :onClick (fn [e] (put! slide-chan "next"))}))))

(defn originate [app ndx from]
  (om/update! app [:photos ndx :pos] [from]))

(defn transition [app ndx to]
  (om/transact! app [:photos ndx :pos] #(conj % to)))

(defn disappear [app ndx]
  (om/update! app [:photos ndx :pos] []))

(defn gallery [app owner]
  (reify
    om/IInitState
    (init-state [_]
      {:slide-chan (chan)
       :anim-in-progress false})

    om/IWillMount
    (will-mount [_]
      (let [slide-chan (om/get-state owner :slide-chan)]
        (go (loop []
              (let [len (count (:photos @app))]
                (if (= (<! slide-chan) "next")
                  (do
                    (disappear app (get (:curr @app) 2))
                    (om/transact! app :curr (fn [_] (apply vector (map #(mod (dec %) len) _))))
                    (om/set-state! owner :anim-in-progress true)
                    (originate  app (get (:curr @app) 0) "left")
                    (transition app (get (:curr @app) 1) "center")
                    (transition app (get (:curr @app) 2) "right")
                    (<! (timeout 1000))
                    (om/set-state! owner :anim-in-progress false)
                    (originate app (get (:curr @app) 1) "center")
                    (originate app (get (:curr @app) 2) "right"))
                  (do
                    (disappear app (get (:curr @app) 0))
                    (om/transact! app :curr (fn [_] (apply vector (map #(mod (inc %) len) _))))
                    (om/set-state! owner :anim-in-progress true)
                    (transition app (get (:curr @app) 0) "left")
                    (transition app (get (:curr @app) 1) "center")
                    (originate  app (get (:curr @app) 2) "right")
                    (<! (timeout 1000))
                    (om/set-state! owner :anim-in-progress false)
                    (originate app (get (:curr @app) 0) "left")
                    (originate app (get (:curr @app) 1) "center")))
                (recur))))))

    om/IRenderState
    (render-state [this {:keys [slide-chan anim-in-progress]}]
      (dom/div #js {:id "photo-gallery-container"}
        (dom/div #js {:id "left-pane"}
          (om/build prev-btn app {:init-state {:slide-chan slide-chan}
                                  :state {:disabled anim-in-progress}}))
        (apply dom/div #js {:id "photo-gallery"}
               (om/build-all photo-view (:photos app) {:key :photo}))
        (dom/div #js {:id "right-pane"}
          (om/build next-btn app {:init-state {:slide-chan slide-chan}
                                  :state {:disabled anim-in-progress}}))))))

(defn render [] (om/root gallery app-state {:target (. js/document (getElementById "dynamic-content"))}))
