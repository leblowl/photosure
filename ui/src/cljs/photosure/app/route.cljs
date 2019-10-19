(ns photosure.app.route
  (:require [bidi.bidi :as bidi]
            [photosure.util.web :as tw]))

(def app-root
  "/")

(def app-routes
  [app-root
   {""          :bio
    "bio"       :bio
    "blog"      :blog
    "gallery"   :gallery
    "config"    :config
    true        :not-found}])

(defn match-path
  ([path]
   (match-path path nil))

  ([path params]
   (match-path app-routes path params))

  ([routes path params]
   (apply bidi/match-route routes path params)))

(defn path-for
  ([resource-id]
   (path-for resource-id nil))

  ([resource-id params]
   (path-for app-routes resource-id params))

  ([routes resource-id {:keys [query-params] :as params}]
   (let [params (-> params (dissoc :query-params) seq flatten)]
     (cond-> (apply bidi/path-for
                    routes
                    resource-id
                    params)
       query-params (tw/add-query-params query-params)))))
