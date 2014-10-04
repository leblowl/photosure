(ns photosure.scrolldiv
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <! timeout]]))

(enable-console-print!)

(defn scroll-bar [app owner]
  (reify
    om/IInitState
    (init-state [_]
      {:total-track-height 0
       :scroll-top 0
       :total-scroll-height 1})

    om/IWillMount
    (will-mount [_]
      (let [scroll-chan (om/get-state owner :scroll-chan)]
        (go (loop []
              (let [infos (<! scroll-chan)]
                (do
                  (om/set-state! owner :scroll-top (:scroll-top infos))
                  (om/set-state! owner :total-scroll-height (:total-scroll-height infos)))
                (recur))))))

    om/IDidMount
    (did-mount [_]
      (let [elem (om/get-node owner)]
        (om/set-state! owner :handle-resize #(om/set-state! owner :total-track-height
                                               (- (.-clientHeight elem)
                                                  (.-offsetHeight
                                                    (.-firstChild elem)))))
        ((om/get-state owner :handle-resize))
        (.addEventListener js/window "resize" (om/get-state owner :handle-resize))))

    om/IWillUnmount
    (will-unmount [this]
      (.removeEventListener js/window "resize" (om/get-state owner :handle-resize)))

    om/IRenderState
    (render-state [this {:keys [total-track-height scroll-top total-scroll-height]}]
      (dom/div #js {:className "scroll-track"}
       (dom/div #js {:className "scroll-bar"
                     :style #js {:top
                                 (str (Math/round
                                        (* total-track-height
                                           (/ scroll-top total-scroll-height)))
                                   "px")}})))))

(defn scroll-content [content]
  (fn [app owner]
    (reify
      om/IDidMount
      (did-mount [this]
        (let [elem (om/get-node owner)
              scroll-chan (om/get-state owner :scroll-chan)]
          (om/set-state! owner :handle-resize
            #(put! scroll-chan
               {:scroll-top (.-scrollTop elem)
                :total-scroll-height (- (.-scrollHeight elem)
                                       (.-clientHeight elem))})))
        (.addEventListener js/window "resize" (om/get-state owner :handle-resize)))

      om/IWillUnmount
      (will-unmount [_]
        (.removeEventListener js/window "resize" (om/get-state owner :handle-resize)))

      om/IRenderState
      (render-state [this {:keys [scroll-chan]}]
        (dom/div #js {:className "scroll-content"
                      :onScroll (om/get-state owner :handle-resize)}
          content)))))

(defn scroll-div [content]
  (fn [app owner opts]
    (reify
      om/IInitState
      (init-state [_]
        {:scroll-chan (chan)})

      om/IRenderState
      (render-state [this {:keys [scroll-chan]}]
        (dom/div #js {:className (str "scroll-div " (:className opts))}
          (dom/div #js {:className "overflow-wrapper"}
            (dom/div #js {:className "scroll-header"})
            (om/build (scroll-content content) app {:init-state {:scroll-chan scroll-chan}})
            (dom/div #js {:className "scroll-footer"}))
          (om/build scroll-bar app {:init-state {:scroll-chan scroll-chan}}))))))
