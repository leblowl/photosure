(ns photosure.client.gallery
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <! timeout]]
            [clojure.string :as str]
            [goog.string :as gstr]))

"I LOVE YOU"

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
      (dom/div #js {:className (str "frame " (if (empty? (:pos photo))
                                                "hidden"
                                                (get (:pos photo) 0)))}
       (dom/img #js {:src (:photo photo)
                     :className "photo"})))))

(defn prev-btn [app owner]
  (reify
    om/IRenderState
    (render-state [this {:keys [slide-chan disabled]}]
      (dom/div #js {:id "prev-btn"
                    :className (str "btn" (when disabled " disabled"))
                    :onClick (fn [e] (put! slide-chan "prev"))}
        (dom/p #js {:id "prev-arrow"} (gstr/unescapeEntities "&#10092;"))))))

(defn next-btn [app owner]
  (reify
    om/IRenderState
    (render-state [this {:keys [slide-chan disabled]}]
      (dom/div #js {:id "next-btn"
                    :className (str "btn" (when disabled " disabled"))
                    :onClick (fn [e] (put! slide-chan "next"))}
        (dom/p #js {:id "next-arrow"} (gstr/unescapeEntities "&#10093;"))))))

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
              (let [len (count (:photos @app))
                    cmd (<! slide-chan)]
                (do
                  (if (= cmd "next")
                    (do (om/update! app [:photos (get (:curr @app) 2) :pos] [])
                        (om/transact! app :curr
                                      (fn [_] (apply vector (map #(mod (dec %) len) _)))))
                    (do  (om/update! app [:photos (get (:curr @app) 0) :pos] [])
                         (om/transact! app :curr
                                       (fn [_] (apply vector (map #(mod (inc %) len) _))))))

                  (om/set-state! owner :anim-in-progress true)
                  (om/update! app [:photos (get (:curr @app) 0) :pos] ["left"])
                  (om/update! app [:photos (get (:curr @app) 1) :pos] ["center"])
                  (om/update! app [:photos (get (:curr @app) 2) :pos] ["right"])
                  (<! (timeout 1000))
                  (om/set-state! owner :anim-in-progress false))
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

(defn render []
  (om/root gallery
           app-state
           {:target (. js/document (getElementById "dynamic-content"))}))
