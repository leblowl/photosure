(ns photosure.client.navigation
  (:require [photosure.client.gallery :as gallery]
            [photosure.client.bio :as bio]
            [photosure.client.blog :as blog]
            [secretary.core :as secretary :include-macros true :refer [defroute]]
            [goog.events :as events]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true])
  (:import goog.History
           goog.History.EventType))

(def history (History.))

(def navigation-state
  (atom [{:id "tab0" :name "bio" :path "/bio"}
         {:id "tab1" :name "blog" :path "/blog"}
         {:id "tab2" :name "gallery" :path "/gallery"}]))

(defroute "/bio" []
  (bio/render))

(defroute "/blog" []
  (blog/render))

(defroute "/gallery" []
  (gallery/render))

(defn refresh-navigation []
  (let [token (.getToken history)
        set-active (fn [nav]
                     (assoc nav :active (= (:path nav) token)))]
    (swap! navigation-state #(map set-active %))))

(defn on-navigate [event]
  (refresh-navigation)
  (secretary/dispatch! (.-token event)))

(doto history
  (events/listen EventType/NAVIGATE on-navigate)
  (.setEnabled true))

(defn navigation-item-view [{:keys [id name path active]} owner]
  (reify
    om/IRender
    (render [this]
      (dom/li #js {:id id :className (if active "active" "")}
              (dom/a #js {:href (str "#" path)} name)))))

(defn navigation-view [app owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:className "navigation-container"}
               (dom/div #js {:className "banner-container"}
                        (dom/p #js {:className "banner"} "C.P.Leblow Gallery"))
               (apply dom/ul #js {:className "nav nav-tabs"}
                      (om/build-all navigation-item-view app))))))

(om/root navigation-view
         navigation-state
         {:target (. js/document (getElementById "static-header"))})