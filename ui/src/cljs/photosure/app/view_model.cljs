(ns photosure.app.view-model
  (:require [photosure.app.route :as rte]
            [photosure.window.view-model :as window-vm]
            [photosure.bio.view-model :as bio-vm]
            [photosure.gallery.view-model :as gallery-vm]
            [reagent.core :as r]
            [reagent.ratom :as rr]
            [clojure.string :as str]))

(defn get-active-nav-item
  [view-id view-params]
  (cond
    (= view-id :bio) :bio
    (= view-id :gallery) :gallery
    (= view-id :collection) (keyword (:collection-id view-params))))

(defn app-view-model
  [vm *model]
  (let [*app (rr/reaction (:app @*model))
        *active-view (rr/reaction (:active-view @*app))
        *active-view-params (rr/reaction (:params (:route @*app)))
        *collections (rr/reaction (:collections (:gallery @*model)))]

    (assoc vm :*app
           (rr/reaction
            (-> @*app

                (assoc-in [:nav :all :gallery :children]
                          (->> @*collections
                               (mapv #(vector (:id %)
                                              (hash-map :label (str/lower-case (:name %))
                                                        :href (rte/path-for :collection {:collection-id (:id %)}))))
                               (into {})))

                (assoc-in [:nav :active]
                          (get-active-nav-item @*active-view @*active-view-params)))))))

(defn view-model
  [*model]
  (-> {}
      (app-view-model *model)
      (window-vm/window-view-model *model)
      (bio-vm/bio-view-model *model)
      (gallery-vm/gallery-view-model *model)))
