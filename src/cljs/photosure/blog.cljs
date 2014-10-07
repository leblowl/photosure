(ns photosure.blog
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [photosure.util :as util]
            [goog.string :as gstr]
            [photosure.scrolldiv :refer [scroll-div]]
            [cljs.core.async :refer [put! chan <!]]))

(def app-data
  (atom {:page 0
         :posts []}))

(defn text-view [caption owner]
  (om/component
    (dom/div #js {:className "caption"
                  :dangerouslySetInnerHTML #js {:__html caption}}
      nil)))

(defn text-post-view [{id :id
                       title :title
                       body :body} owner]
  (om/component
    (dom/div #js {:id id :className "post"}
      (dom/h2 #js {:className "blog-title"}
        title)
      (om/build text-view body))))

(defn photo-post-view [{id :id
                        photos :photos
                        caption :caption} owner]
  (reify
    om/IInitState
    (init-state [this]
      {:loaded false})

    om/IWillReceiveProps
    (will-receive-props [this next-props]
      (om/set-state! owner :loaded false))

    om/IRenderState
    (render-state [this {:keys [loaded]}]
     (dom/div #js {:id id :className "post"}
       (apply dom/div #js {:className (str "blog-photo")}
         (dom/div #js {:id "blah"
                       :className (str "loader "(if (not loaded) "on" "off"))})
         (map (fn [photo]
                (dom/img #js {:src photo
                              :className (str "blog-photo-img" (when loaded " loaded"))
                              :onLoad #(om/set-state! owner :loaded true)}))
           photos))
       (om/build text-view caption)))))

(defn post-view [{:keys [type] :as post} owner]
  (reify
    om/IDidMount
    (did-mount [_]
      (put! (om/get-state owner :load-chan)
        "done!"))

    om/IDidUpdate
    (did-update [this prev-props prev-state]
      (put! (om/get-state owner :load-chan)
        "done!"))

    om/IRender
    (render [this]
      (cond
        (= type "photo") (om/build photo-post-view post)
        (= type "text")  (om/build text-post-view post)))))

(defn posts-view [posts owner]
  (reify
    om/IInitState
    (init-state [_]
      {:load-chan (chan)
       :load-count 0
       :iter 20})

    om/IWillMount
    (will-mount [_]
      (let [load-chan (om/get-state owner :load-chan)
            loaded-chan (om/get-state owner :loaded-chan)]
        (go (loop []
              (let [load (<! load-chan)]
                (do
                  (om/update-state! owner :load-count #(inc %))
                  (when (= (om/get-state owner :load-count) 20)
                    (put! loaded-chan "all done!")
                    (om/set-state! owner :load-count 0)))
                (recur))))))

    om/IRenderState
    (render-state [this {:keys [iter load-chan]}]
      (apply dom/div #js {:id "post-list"}
        (om/build-all post-view (take iter posts) {:init-state {:load-chan load-chan}})))))

(defn set-posts [app page]
  (util/edn-xhr
    {:method :get
     :url (str "api/posts/" page)
     :on-complete (fn [_] (om/update! app :posts _))}))

(defn page-top-btn [page owner]
  (reify
    om/IInitState
    (init-state [this]
      {:className "page fadein"})

    om/IRenderState
    (render-state [this {:keys [text className nav-chan]}]
      ; kind of sketchy to do mouseenter mouseleave like this with timeout
      ; seems quick enough now to not cause problems
      (dom/div #js {:className "top"
                    :onMouseEnter (fn [_]
                                    (om/set-state! owner :text (gstr/unescapeEntities "&#xe600"))
                                    (om/set-state! owner :className "icon")
                                    (js/setTimeout
                                      (fn [] (om/set-state! owner :className "icon fadein"))
                                      50))
                    :onMouseLeave (fn [_]
                                    (om/set-state! owner :text (+ page 1))
                                    (om/set-state! owner :className "page")
                                    (js/setTimeout
                                      (fn [] (om/set-state! owner :className "page fadein"))
                                      50))
                    :onClick (fn [_] (put! nav-chan "top"))}
        (dom/p #js {:id "change"
                    :className className} text)))))

(defn posts-nav [app owner]
  (reify
    om/IRenderState
    (render-state [_ {:keys [nav-chan]}]
      (dom/div #js {:className "posts-nav"}
        (dom/div #js {:className (str "prev" (when (= (:page app) 0) " disabled"))
                      :onClick (fn [_] (put! nav-chan "prev"))}
          (dom/p #js {:className "icon"}
            (gstr/unescapeEntities "&#xe602")))
        (om/build page-top-btn (:page app) {:init-state {:nav-chan nav-chan
                                                         :text (+ (:page app) 1)}
                                            :state {:text (+ (:page app) 1)}})
        (dom/div #js {:className "next"
                      :onClick (fn [_] (put! nav-chan "next"))}
          (dom/p #js {:className "icon"}
            (gstr/unescapeEntities "&#xe601")))))))

(defn blog [app owner]
  (reify
    om/IInitState
    (init-state [_]
      {:loaded false
       :loaded-chan (chan)
       :nav-chan (chan)
       :scroll-top 0})

    om/IWillMount
    (will-mount [_]
      (set-posts app (:page app))

      (let [loaded-chan (om/get-state owner :loaded-chan)]
        (go (loop []
              (let [loaded (<! loaded-chan)]
                (do
                  (om/set-state! owner :loaded true))
                (recur)))))

      (let [nav-chan (om/get-state owner :nav-chan)]
        (go (loop []
              (let [cmd (<! nav-chan)]
                (do
                  (cond
                    (= cmd "prev") (do
                                     (om/set-state! owner :loaded false)
                                     (om/transact! app :page #(dec %))
                                     (set-posts app (:page @app)))
                    (= cmd "next") (do
                                     (om/set-state! owner :loaded false)
                                     (om/transact! app :page #(inc %))
                                     (set-posts app (:page @app)))
                    (= cmd "top") (do
                                    (om/set-state! owner :scroll-top 0))))
                (recur))))))

    om/IRenderState
    (render-state [this {:keys [loaded loaded-chan nav-chan scroll-top]}]
      (dom/div #js {:id "blog-gallery-container"}
        (om/build scroll-div
          app
          {:init-state {:class "blog-gallery"
                        :scroll-top 0}
           :state {:class (str "blog-gallery" (when loaded " loaded"))
                   :scroll-top scroll-top}
           :opts {:children [(om/build posts-view (:posts app) {:init-state {:loaded-chan loaded-chan}})
                             (om/build posts-nav app {:init-state {:nav-chan nav-chan}})]}})))))

(defn render []
  (om/root blog
           app-data
           {:target (.getElementById js/document "dynamic-content")}))
