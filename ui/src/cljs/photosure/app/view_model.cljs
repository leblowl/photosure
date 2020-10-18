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
  (let [*app (rr/reaction (get @*model :app))
        *active-view (rr/reaction (get @*app :active-view))
        *active-view-params (rr/reaction (get-in @*app [:route :params]))
        *nav-active (rr/reaction
                     (get-active-nav-item @*active-view @*active-view-params))

        *collections (rr/reaction (:collections (:gallery @*model)))
        *nav-gallery-children
        (rr/reaction
         (->> @*collections
              (mapv #(vector (:id %)
                             (hash-map :label (str/lower-case (:name %))
                                       :href (rte/path-for :collection {:collection-id (:id %)}))))
              (into {})))

        ;; This let prevents the reaction from running
        ;; unless [:app :nav :all] changes. However, it seems odd. Is
        ;; there a simpler way to do this?
        *nav-all (let [*all (rr/reaction (get-in @*app [:nav :all]))]
                   (rr/reaction
                    (assoc-in @*all [:gallery :*children] *nav-gallery-children)))

        *mobile-show (rr/reaction (get-in @*app [:nav :mobile-show]))]

    (-> vm

        (assoc-in [:app :*active-view] *active-view)

        (assoc-in [:app :nav :*all] *nav-all)

        (assoc-in [:app :nav :*active] *nav-active)

        (assoc-in [:app :nav :*mobile-show] *mobile-show)

        (window-vm/window-view-model *model))))

(defn view-model
  [*model]
  (-> {}
      (app-view-model *model)
      (window-vm/window-view-model *model)
      (bio-vm/bio-view-model *model)
      (gallery-vm/gallery-view-model *model)))
