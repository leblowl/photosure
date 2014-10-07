// Compiled by ClojureScript 0.0-2322
goog.provide('photosure.gallery');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.string');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
photosure.gallery.photo = (function photo(filepath,pos){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"photo","photo",-52852781),filepath,new cljs.core.Keyword(null,"pos","pos",-864607220),pos,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),false], null);
});
photosure.gallery.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"photos","photos",11691538),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [photosure.gallery.photo.call(null,"images/cpleblow2.jpg",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["left"], null)),photosure.gallery.photo.call(null,"images/cpleblow1.jpg",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["center"], null)),photosure.gallery.photo.call(null,"images/cpleblow3.jpg",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["right"], null)),photosure.gallery.photo.call(null,"images/cpleblow4.jpg",cljs.core.PersistentVector.EMPTY),photosure.gallery.photo.call(null,"images/cpleblow5.jpg",cljs.core.PersistentVector.EMPTY),photosure.gallery.photo.call(null,"images/cpleblow6.jpg",cljs.core.PersistentVector.EMPTY)], null),new cljs.core.Keyword(null,"curr","curr",-1092372808),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null)], null));
photosure.gallery.img_loaded = (function img_loaded(photo){return om.core.update_BANG_.call(null,photo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded","loaded",-1246482293)], null),true);
});
photosure.gallery.all_loaded_QMARK_ = (function all_loaded_QMARK_(){var total = cljs.core.count.call(null,new cljs.core.Keyword(null,"photos","photos",11691538).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,photosure.gallery.app_state)));var loaded = cljs.core.count.call(null,cljs.core.get.call(null,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),new cljs.core.Keyword(null,"photos","photos",11691538).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,photosure.gallery.app_state))),true));return cljs.core._EQ_.call(null,(1),(total / loaded));
});
photosure.gallery.photo_view = (function photo_view(photo,owner){if(typeof photosure.gallery.t10174 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.gallery.t10174 = (function (owner,photo,photo_view,meta10175){
this.owner = owner;
this.photo = photo;
this.photo_view = photo_view;
this.meta10175 = meta10175;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.gallery.t10174.cljs$lang$type = true;
photosure.gallery.t10174.cljs$lang$ctorStr = "photosure.gallery/t10174";
photosure.gallery.t10174.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.gallery/t10174");
});
photosure.gallery.t10174.prototype.om$core$IRender$ = true;
photosure.gallery.t10174.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": ("frame "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(self__.photo)))?"hidden":cljs.core.get.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(self__.photo),(0)))))},React.DOM.img({"onLoad": ((function (this$__$1){
return (function (){return photosure.gallery.img_loaded.call(null,self__.photo);
});})(this$__$1))
, "src": new cljs.core.Keyword(null,"photo","photo",-52852781).cljs$core$IFn$_invoke$arity$1(self__.photo), "className": ("photo"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"loaded","loaded",-1246482293).cljs$core$IFn$_invoke$arity$1(self__.photo))?" loaded":null)))}));
});
photosure.gallery.t10174.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10176){var self__ = this;
var _10176__$1 = this;return self__.meta10175;
});
photosure.gallery.t10174.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10176,meta10175__$1){var self__ = this;
var _10176__$1 = this;return (new photosure.gallery.t10174(self__.owner,self__.photo,self__.photo_view,meta10175__$1));
});
photosure.gallery.__GT_t10174 = (function __GT_t10174(owner__$1,photo__$1,photo_view__$1,meta10175){return (new photosure.gallery.t10174(owner__$1,photo__$1,photo_view__$1,meta10175));
});
}
return (new photosure.gallery.t10174(owner,photo,photo_view,null));
});
photosure.gallery.prev_btn = (function prev_btn(app,owner){if(typeof photosure.gallery.t10182 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.gallery.t10182 = (function (owner,app,prev_btn,meta10183){
this.owner = owner;
this.app = app;
this.prev_btn = prev_btn;
this.meta10183 = meta10183;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.gallery.t10182.cljs$lang$type = true;
photosure.gallery.t10182.cljs$lang$ctorStr = "photosure.gallery/t10182";
photosure.gallery.t10182.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.gallery/t10182");
});
photosure.gallery.t10182.prototype.om$core$IRenderState$ = true;
photosure.gallery.t10182.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__10185){var self__ = this;
var map__10186 = p__10185;var map__10186__$1 = ((cljs.core.seq_QMARK_.call(null,map__10186))?cljs.core.apply.call(null,cljs.core.hash_map,map__10186):map__10186);var disabled = cljs.core.get.call(null,map__10186__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));var slide_chan = cljs.core.get.call(null,map__10186__$1,new cljs.core.Keyword(null,"slide-chan","slide-chan",-416984986));var this$__$1 = this;return React.DOM.div({"onClick": ((function (this$__$1,map__10186,map__10186__$1,disabled,slide_chan){
return (function (e){return cljs.core.async.put_BANG_.call(null,slide_chan,"prev");
});})(this$__$1,map__10186,map__10186__$1,disabled,slide_chan))
, "className": ("btn"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(disabled)?" disabled":null))), "id": "prev-btn"},React.DOM.p({"id": "prev-arrow"},goog.string.unescapeEntities("&#10092;")));
});
photosure.gallery.t10182.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10184){var self__ = this;
var _10184__$1 = this;return self__.meta10183;
});
photosure.gallery.t10182.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10184,meta10183__$1){var self__ = this;
var _10184__$1 = this;return (new photosure.gallery.t10182(self__.owner,self__.app,self__.prev_btn,meta10183__$1));
});
photosure.gallery.__GT_t10182 = (function __GT_t10182(owner__$1,app__$1,prev_btn__$1,meta10183){return (new photosure.gallery.t10182(owner__$1,app__$1,prev_btn__$1,meta10183));
});
}
return (new photosure.gallery.t10182(owner,app,prev_btn,null));
});
photosure.gallery.next_btn = (function next_btn(app,owner){if(typeof photosure.gallery.t10192 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.gallery.t10192 = (function (owner,app,next_btn,meta10193){
this.owner = owner;
this.app = app;
this.next_btn = next_btn;
this.meta10193 = meta10193;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.gallery.t10192.cljs$lang$type = true;
photosure.gallery.t10192.cljs$lang$ctorStr = "photosure.gallery/t10192";
photosure.gallery.t10192.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.gallery/t10192");
});
photosure.gallery.t10192.prototype.om$core$IRenderState$ = true;
photosure.gallery.t10192.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__10195){var self__ = this;
var map__10196 = p__10195;var map__10196__$1 = ((cljs.core.seq_QMARK_.call(null,map__10196))?cljs.core.apply.call(null,cljs.core.hash_map,map__10196):map__10196);var disabled = cljs.core.get.call(null,map__10196__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));var slide_chan = cljs.core.get.call(null,map__10196__$1,new cljs.core.Keyword(null,"slide-chan","slide-chan",-416984986));var this$__$1 = this;return React.DOM.div({"onClick": ((function (this$__$1,map__10196,map__10196__$1,disabled,slide_chan){
return (function (e){return cljs.core.async.put_BANG_.call(null,slide_chan,"next");
});})(this$__$1,map__10196,map__10196__$1,disabled,slide_chan))
, "className": ("btn"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(disabled)?" disabled":null))), "id": "next-btn"},React.DOM.p({"id": "next-arrow"},goog.string.unescapeEntities("&#10093;")));
});
photosure.gallery.t10192.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10194){var self__ = this;
var _10194__$1 = this;return self__.meta10193;
});
photosure.gallery.t10192.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10194,meta10193__$1){var self__ = this;
var _10194__$1 = this;return (new photosure.gallery.t10192(self__.owner,self__.app,self__.next_btn,meta10193__$1));
});
photosure.gallery.__GT_t10192 = (function __GT_t10192(owner__$1,app__$1,next_btn__$1,meta10193){return (new photosure.gallery.t10192(owner__$1,app__$1,next_btn__$1,meta10193));
});
}
return (new photosure.gallery.t10192(owner,app,next_btn,null));
});
photosure.gallery.gallery = (function gallery(app,owner){if(typeof photosure.gallery.t10295 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.gallery.t10295 = (function (owner,app,gallery,meta10296){
this.owner = owner;
this.app = app;
this.gallery = gallery;
this.meta10296 = meta10296;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.gallery.t10295.cljs$lang$type = true;
photosure.gallery.t10295.cljs$lang$ctorStr = "photosure.gallery/t10295";
photosure.gallery.t10295.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.gallery/t10295");
});
photosure.gallery.t10295.prototype.om$core$IRenderState$ = true;
photosure.gallery.t10295.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__10298){var self__ = this;
var map__10299 = p__10298;var map__10299__$1 = ((cljs.core.seq_QMARK_.call(null,map__10299))?cljs.core.apply.call(null,cljs.core.hash_map,map__10299):map__10299);var anim_in_progress = cljs.core.get.call(null,map__10299__$1,new cljs.core.Keyword(null,"anim-in-progress","anim-in-progress",-170743916));var slide_chan = cljs.core.get.call(null,map__10299__$1,new cljs.core.Keyword(null,"slide-chan","slide-chan",-416984986));var this$__$1 = this;return React.DOM.div({"id": "photo-gallery-container"},React.DOM.div({"id": "left-pane"},om.core.build.call(null,photosure.gallery.prev_btn,self__.app,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slide-chan","slide-chan",-416984986),slide_chan], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),anim_in_progress], null)], null))),cljs.core.apply.call(null,om.dom.div,{"className": ((photosure.gallery.all_loaded_QMARK_.call(null))?"loaded":null), "id": "photo-gallery"},React.DOM.div({"className": ("loader "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((photosure.gallery.all_loaded_QMARK_.call(null))?"off":"on"))), "id": "blah"}),om.core.build_all.call(null,photosure.gallery.photo_view,new cljs.core.Keyword(null,"photos","photos",11691538).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"photo","photo",-52852781)], null))),React.DOM.div({"id": "right-pane"},om.core.build.call(null,photosure.gallery.next_btn,self__.app,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slide-chan","slide-chan",-416984986),slide_chan], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),anim_in_progress], null)], null))));
});
photosure.gallery.t10295.prototype.om$core$IWillMount$ = true;
photosure.gallery.t10295.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var slide_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"slide-chan","slide-chan",-416984986));var c__6367__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto__,slide_chan,___$1){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto__,slide_chan,___$1){
return (function (state_10370){var state_val_10371 = (state_10370[(1)]);if((state_val_10371 === (8)))
{var inst_10364 = (state_10370[(2)]);var inst_10365 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"anim-in-progress","anim-in-progress",-170743916),false);var state_10370__$1 = (function (){var statearr_10372 = state_10370;(statearr_10372[(7)] = inst_10365);
(statearr_10372[(8)] = inst_10364);
return statearr_10372;
})();var statearr_10373_10391 = state_10370__$1;(statearr_10373_10391[(2)] = null);
(statearr_10373_10391[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10371 === (7)))
{var inst_10330 = (state_10370[(2)]);var inst_10331 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"anim-in-progress","anim-in-progress",-170743916),true);var inst_10332 = cljs.core.PersistentVector.EMPTY_NODE;var inst_10333 = cljs.core.deref.call(null,self__.app);var inst_10334 = new cljs.core.Keyword(null,"curr","curr",-1092372808).cljs$core$IFn$_invoke$arity$1(inst_10333);var inst_10335 = cljs.core.get.call(null,inst_10334,(0));var inst_10336 = [new cljs.core.Keyword(null,"photos","photos",11691538),inst_10335,new cljs.core.Keyword(null,"pos","pos",-864607220)];var inst_10337 = (new cljs.core.PersistentVector(null,3,(5),inst_10332,inst_10336,null));var inst_10338 = cljs.core.PersistentVector.EMPTY_NODE;var inst_10339 = ["left"];var inst_10340 = (new cljs.core.PersistentVector(null,1,(5),inst_10338,inst_10339,null));var inst_10341 = om.core.update_BANG_.call(null,self__.app,inst_10337,inst_10340);var inst_10342 = cljs.core.PersistentVector.EMPTY_NODE;var inst_10343 = cljs.core.deref.call(null,self__.app);var inst_10344 = new cljs.core.Keyword(null,"curr","curr",-1092372808).cljs$core$IFn$_invoke$arity$1(inst_10343);var inst_10345 = cljs.core.get.call(null,inst_10344,(1));var inst_10346 = [new cljs.core.Keyword(null,"photos","photos",11691538),inst_10345,new cljs.core.Keyword(null,"pos","pos",-864607220)];var inst_10347 = (new cljs.core.PersistentVector(null,3,(5),inst_10342,inst_10346,null));var inst_10348 = cljs.core.PersistentVector.EMPTY_NODE;var inst_10349 = ["center"];var inst_10350 = (new cljs.core.PersistentVector(null,1,(5),inst_10348,inst_10349,null));var inst_10351 = om.core.update_BANG_.call(null,self__.app,inst_10347,inst_10350);var inst_10352 = cljs.core.PersistentVector.EMPTY_NODE;var inst_10353 = cljs.core.deref.call(null,self__.app);var inst_10354 = new cljs.core.Keyword(null,"curr","curr",-1092372808).cljs$core$IFn$_invoke$arity$1(inst_10353);var inst_10355 = cljs.core.get.call(null,inst_10354,(2));var inst_10356 = [new cljs.core.Keyword(null,"photos","photos",11691538),inst_10355,new cljs.core.Keyword(null,"pos","pos",-864607220)];var inst_10357 = (new cljs.core.PersistentVector(null,3,(5),inst_10352,inst_10356,null));var inst_10358 = cljs.core.PersistentVector.EMPTY_NODE;var inst_10359 = ["right"];var inst_10360 = (new cljs.core.PersistentVector(null,1,(5),inst_10358,inst_10359,null));var inst_10361 = om.core.update_BANG_.call(null,self__.app,inst_10357,inst_10360);var inst_10362 = cljs.core.async.timeout.call(null,(1000));var state_10370__$1 = (function (){var statearr_10374 = state_10370;(statearr_10374[(9)] = inst_10331);
(statearr_10374[(10)] = inst_10351);
(statearr_10374[(11)] = inst_10341);
(statearr_10374[(12)] = inst_10361);
(statearr_10374[(13)] = inst_10330);
return statearr_10374;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10370__$1,(8),inst_10362);
} else
{if((state_val_10371 === (6)))
{var inst_10305 = (state_10370[(14)]);var inst_10303 = (state_10370[(15)]);var inst_10319 = cljs.core.PersistentVector.EMPTY_NODE;var inst_10320 = cljs.core.deref.call(null,self__.app);var inst_10321 = new cljs.core.Keyword(null,"curr","curr",-1092372808).cljs$core$IFn$_invoke$arity$1(inst_10320);var inst_10322 = cljs.core.get.call(null,inst_10321,(0));var inst_10323 = [new cljs.core.Keyword(null,"photos","photos",11691538),inst_10322,new cljs.core.Keyword(null,"pos","pos",-864607220)];var inst_10324 = (new cljs.core.PersistentVector(null,3,(5),inst_10319,inst_10323,null));var inst_10325 = cljs.core.PersistentVector.EMPTY;var inst_10326 = om.core.update_BANG_.call(null,self__.app,inst_10324,inst_10325);var inst_10327 = (function (){var cmd = inst_10305;var len = inst_10303;return ((function (cmd,len,inst_10305,inst_10303,inst_10319,inst_10320,inst_10321,inst_10322,inst_10323,inst_10324,inst_10325,inst_10326,state_val_10371,c__6367__auto__,slide_chan,___$1){
return (function (___$2){return cljs.core.apply.call(null,cljs.core.vector,cljs.core.map.call(null,((function (cmd,len,inst_10305,inst_10303,inst_10319,inst_10320,inst_10321,inst_10322,inst_10323,inst_10324,inst_10325,inst_10326,state_val_10371,c__6367__auto__,slide_chan,___$1){
return (function (p1__10198_SHARP_){return cljs.core.mod.call(null,(p1__10198_SHARP_ + (1)),len);
});})(cmd,len,inst_10305,inst_10303,inst_10319,inst_10320,inst_10321,inst_10322,inst_10323,inst_10324,inst_10325,inst_10326,state_val_10371,c__6367__auto__,slide_chan,___$1))
,___$2));
});
;})(cmd,len,inst_10305,inst_10303,inst_10319,inst_10320,inst_10321,inst_10322,inst_10323,inst_10324,inst_10325,inst_10326,state_val_10371,c__6367__auto__,slide_chan,___$1))
})();var inst_10328 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"curr","curr",-1092372808),inst_10327);var state_10370__$1 = (function (){var statearr_10375 = state_10370;(statearr_10375[(16)] = inst_10326);
return statearr_10375;
})();var statearr_10376_10392 = state_10370__$1;(statearr_10376_10392[(2)] = inst_10328);
(statearr_10376_10392[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10371 === (5)))
{var inst_10305 = (state_10370[(14)]);var inst_10303 = (state_10370[(15)]);var inst_10308 = cljs.core.PersistentVector.EMPTY_NODE;var inst_10309 = cljs.core.deref.call(null,self__.app);var inst_10310 = new cljs.core.Keyword(null,"curr","curr",-1092372808).cljs$core$IFn$_invoke$arity$1(inst_10309);var inst_10311 = cljs.core.get.call(null,inst_10310,(2));var inst_10312 = [new cljs.core.Keyword(null,"photos","photos",11691538),inst_10311,new cljs.core.Keyword(null,"pos","pos",-864607220)];var inst_10313 = (new cljs.core.PersistentVector(null,3,(5),inst_10308,inst_10312,null));var inst_10314 = cljs.core.PersistentVector.EMPTY;var inst_10315 = om.core.update_BANG_.call(null,self__.app,inst_10313,inst_10314);var inst_10316 = (function (){var cmd = inst_10305;var len = inst_10303;return ((function (cmd,len,inst_10305,inst_10303,inst_10308,inst_10309,inst_10310,inst_10311,inst_10312,inst_10313,inst_10314,inst_10315,state_val_10371,c__6367__auto__,slide_chan,___$1){
return (function (___$2){return cljs.core.apply.call(null,cljs.core.vector,cljs.core.map.call(null,((function (cmd,len,inst_10305,inst_10303,inst_10308,inst_10309,inst_10310,inst_10311,inst_10312,inst_10313,inst_10314,inst_10315,state_val_10371,c__6367__auto__,slide_chan,___$1){
return (function (p1__10197_SHARP_){return cljs.core.mod.call(null,(p1__10197_SHARP_ - (1)),len);
});})(cmd,len,inst_10305,inst_10303,inst_10308,inst_10309,inst_10310,inst_10311,inst_10312,inst_10313,inst_10314,inst_10315,state_val_10371,c__6367__auto__,slide_chan,___$1))
,___$2));
});
;})(cmd,len,inst_10305,inst_10303,inst_10308,inst_10309,inst_10310,inst_10311,inst_10312,inst_10313,inst_10314,inst_10315,state_val_10371,c__6367__auto__,slide_chan,___$1))
})();var inst_10317 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"curr","curr",-1092372808),inst_10316);var state_10370__$1 = (function (){var statearr_10377 = state_10370;(statearr_10377[(17)] = inst_10315);
return statearr_10377;
})();var statearr_10378_10393 = state_10370__$1;(statearr_10378_10393[(2)] = inst_10317);
(statearr_10378_10393[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10371 === (4)))
{var inst_10305 = (state_10370[(14)]);var inst_10305__$1 = (state_10370[(2)]);var inst_10306 = cljs.core._EQ_.call(null,inst_10305__$1,"next");var state_10370__$1 = (function (){var statearr_10379 = state_10370;(statearr_10379[(14)] = inst_10305__$1);
return statearr_10379;
})();if(inst_10306)
{var statearr_10380_10394 = state_10370__$1;(statearr_10380_10394[(1)] = (5));
} else
{var statearr_10381_10395 = state_10370__$1;(statearr_10381_10395[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10371 === (3)))
{var inst_10368 = (state_10370[(2)]);var state_10370__$1 = state_10370;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10370__$1,inst_10368);
} else
{if((state_val_10371 === (2)))
{var inst_10301 = cljs.core.deref.call(null,self__.app);var inst_10302 = new cljs.core.Keyword(null,"photos","photos",11691538).cljs$core$IFn$_invoke$arity$1(inst_10301);var inst_10303 = cljs.core.count.call(null,inst_10302);var state_10370__$1 = (function (){var statearr_10382 = state_10370;(statearr_10382[(15)] = inst_10303);
return statearr_10382;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10370__$1,(4),slide_chan);
} else
{if((state_val_10371 === (1)))
{var state_10370__$1 = state_10370;var statearr_10383_10396 = state_10370__$1;(statearr_10383_10396[(2)] = null);
(statearr_10383_10396[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
});})(c__6367__auto__,slide_chan,___$1))
;return ((function (switch__6352__auto__,c__6367__auto__,slide_chan,___$1){
return (function() {
var state_machine__6353__auto__ = null;
var state_machine__6353__auto____0 = (function (){var statearr_10387 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10387[(0)] = state_machine__6353__auto__);
(statearr_10387[(1)] = (1));
return statearr_10387;
});
var state_machine__6353__auto____1 = (function (state_10370){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_10370);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e10388){if((e10388 instanceof Object))
{var ex__6356__auto__ = e10388;var statearr_10389_10397 = state_10370;(statearr_10389_10397[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10370);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10388;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10398 = state_10370;
state_10370 = G__10398;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_10370){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_10370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto__,slide_chan,___$1))
})();var state__6369__auto__ = (function (){var statearr_10390 = f__6368__auto__.call(null);(statearr_10390[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto__);
return statearr_10390;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto__,slide_chan,___$1))
);
return c__6367__auto__;
});
photosure.gallery.t10295.prototype.om$core$IInitState$ = true;
photosure.gallery.t10295.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"slide-chan","slide-chan",-416984986),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"anim-in-progress","anim-in-progress",-170743916),false], null);
});
photosure.gallery.t10295.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10297){var self__ = this;
var _10297__$1 = this;return self__.meta10296;
});
photosure.gallery.t10295.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10297,meta10296__$1){var self__ = this;
var _10297__$1 = this;return (new photosure.gallery.t10295(self__.owner,self__.app,self__.gallery,meta10296__$1));
});
photosure.gallery.__GT_t10295 = (function __GT_t10295(owner__$1,app__$1,gallery__$1,meta10296){return (new photosure.gallery.t10295(owner__$1,app__$1,gallery__$1,meta10296));
});
}
return (new photosure.gallery.t10295(owner,app,gallery,null));
});
photosure.gallery.render = (function render(){return om.core.root.call(null,photosure.gallery.gallery,photosure.gallery.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("dynamic-content")], null));
});

//# sourceMappingURL=gallery.js.map