(ns photosure.routing)

(defn set-location [route]
  (swap! app-state
    #(assoc-in % [:view :window :location] route)))

(defn get-views-data [[path args]]
  (case path
    :home        [home/home-views]
    :collections [collections/collections-views]
    :collection  [collections/collection-views]
    :unit        [unit/unit-views {:page :info}]
    :check-in    [check-in/check-in-views
                  {:page :resources
                   :commit (new-commit
                             (apply u/get-unit @app-state args))}]
    :resources   [resources/resources-views {:selected nil}]
    :settings    [settings/settings-views]))

(defn set-views
  ([fn]
   (set-views fn {}))
  ([fn state]
   (swap! app-state
     #(update-in % [:view :window] merge {:views-fn fn
                                          :views-state state}))))
(defn set-route [path & args]
  (set-location [path args])
  (apply set-views (get-views-data [path args])))

(u/sub-go-loop event-bus-pub :set-route
  (fn [[topic route]]
    (apply set-route route)))

(u/sub-go-loop event-bus-pub :window
  (fn [[topic cmd k vorfn]]
    (case cmd
      :set (swap! app-state #(assoc-in % [:view :window :views-state k] vorfn))
      :update (swap! app-state #(update-in % [:view :window :views-state k] vorfn)))))
