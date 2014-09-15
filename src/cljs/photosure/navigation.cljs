(ns photosure.navigation
  (:require [photosure.bio :as bio]
            [photosure.blog :as blog]
            [photosure.gallery :as gallery]
            [secretary.core :as secretary :include-macros true :refer [defroute]]
            [goog.events :as events]
            [goog.history.EventType :as EventType]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true])
  (:import goog.History))

(def history (History.))

(def navigation-state
  (atom [{:id "tab0" :name "bio" :path "/bio"}
         {:id "tab1" :name "blog" :path "/blog"}
         {:id "tab2" :name "gallery" :path "/gallery"}]))

(defroute "/" []
  (set! (.-location js/window) "/#/bio"))

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
  (secretary/dispatch! (if (nil? (.-token event)) "/" (.-token event))))

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
