(ns photosure.gallery
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <! timeout]]
            [clojure.string :as str]
            [goog.string :as gstr]))

"I LOVE YOU"

(defn photo [filepath pos] {:photo filepath
                            :pos pos
                            :loaded false})

(def app-state
  (atom
    {:photos [(photo "images/gallery/cpleblow2.jpg" ["left"])
              (photo "images/gallery/cpleblow1.jpg" ["center"])
              (photo "images/gallery/cpleblow3.jpg" ["right"])
              (photo "images/gallery/cpleblow4.jpg" [])
              (photo "images/gallery/cpleblow5.jpg" [])
              (photo "images/gallery/cpleblow6.jpg" [])]
    :curr [0 1 2]}))

(defn img-loaded [photo]
  (om/update! photo [:loaded] true))

(defn all-loaded? []
  (let [total (count (:photos @app-state))
        loaded (count (get (group-by :loaded (:photos @app-state)) true))]
    (= 1 (/ total loaded))))

(defn photo-view [photo owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:className (str "frame " (if (empty? (:pos photo))
                                                "hidden"
                                                (get (:pos photo) 0)))}
        (dom/img #js {:className (str "photo" (when (:loaded photo) " loaded"))
                      :src (:photo photo)
                      :onLoad #(img-loaded photo)})))))

(defn prev-btn [app owner]
  (reify
    om/IRenderState
    (render-state [this {:keys [slide-chan disabled]}]
      (dom/div #js {:className (str "btn" (when disabled " disabled"))
                    :onClick (fn [e] (put! slide-chan "prev"))}
        (dom/p #js {:className "arrow"} (gstr/unescapeEntities "&#xe604;"))))))

(defn next-btn [app owner]
  (reify
    om/IRenderState
    (render-state [this {:keys [slide-chan disabled]}]
      (dom/div #js {:className (str "btn" (when disabled " disabled"))
                    :onClick (fn [e] (put! slide-chan "next"))}
        (dom/p #js {:className "arrow"} (gstr/unescapeEntities "&#xe605;"))))))

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
        (apply dom/div #js {:id "photo-gallery" :className (when (all-loaded?) "loaded")}
          (dom/div #js {:id "blah"
                        :className (str "loader "(if (all-loaded?) "off" "on"))})
          (om/build-all photo-view (:photos app) {:key :photo}))
        (dom/div #js {:id "right-pane"}
          (om/build next-btn app {:init-state {:slide-chan slide-chan}
                                  :state {:disabled anim-in-progress}}))))))

(defn render []
  (om/root gallery
           app-state
           {:target (. js/document (getElementById "dynamic-content"))}))
