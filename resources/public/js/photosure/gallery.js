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
photosure.gallery.photo_view = (function photo_view(photo,owner){if(typeof photosure.gallery.t9851 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.gallery.t9851 = (function (owner,photo,photo_view,meta9852){
this.owner = owner;
this.photo = photo;
this.photo_view = photo_view;
this.meta9852 = meta9852;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.gallery.t9851.cljs$lang$type = true;
photosure.gallery.t9851.cljs$lang$ctorStr = "photosure.gallery/t9851";
photosure.gallery.t9851.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.gallery/t9851");
});
photosure.gallery.t9851.prototype.om$core$IRender$ = true;
photosure.gallery.t9851.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": ("frame "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(self__.photo)))?"hidden":cljs.core.get.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(self__.photo),(0)))))},React.DOM.img({"onLoad": ((function (this$__$1){
return (function (){return photosure.gallery.img_loaded.call(null,self__.photo);
});})(this$__$1))
, "src": new cljs.core.Keyword(null,"photo","photo",-52852781).cljs$core$IFn$_invoke$arity$1(self__.photo), "className": ("photo"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"loaded","loaded",-1246482293).cljs$core$IFn$_invoke$arity$1(self__.photo))?" loaded":null)))}));
});
photosure.gallery.t9851.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9853){var self__ = this;
var _9853__$1 = this;return self__.meta9852;
});
photosure.gallery.t9851.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9853,meta9852__$1){var self__ = this;
var _9853__$1 = this;return (new photosure.gallery.t9851(self__.owner,self__.photo,self__.photo_view,meta9852__$1));
});
photosure.gallery.__GT_t9851 = (function __GT_t9851(owner__$1,photo__$1,photo_view__$1,meta9852){return (new photosure.gallery.t9851(owner__$1,photo__$1,photo_view__$1,meta9852));
});
}
return (new photosure.gallery.t9851(owner,photo,photo_view,null));
});
photosure.gallery.prev_btn = (function prev_btn(app,owner){if(typeof photosure.gallery.t9859 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.gallery.t9859 = (function (owner,app,prev_btn,meta9860){
this.owner = owner;
this.app = app;
this.prev_btn = prev_btn;
this.meta9860 = meta9860;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.gallery.t9859.cljs$lang$type = true;
photosure.gallery.t9859.cljs$lang$ctorStr = "photosure.gallery/t9859";
photosure.gallery.t9859.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.gallery/t9859");
});
photosure.gallery.t9859.prototype.om$core$IRenderState$ = true;
photosure.gallery.t9859.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__9862){var self__ = this;
var map__9863 = p__9862;var map__9863__$1 = ((cljs.core.seq_QMARK_.call(null,map__9863))?cljs.core.apply.call(null,cljs.core.hash_map,map__9863):map__9863);var disabled = cljs.core.get.call(null,map__9863__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));var slide_chan = cljs.core.get.call(null,map__9863__$1,new cljs.core.Keyword(null,"slide-chan","slide-chan",-416984986));var this$__$1 = this;return React.DOM.div({"onClick": ((function (this$__$1,map__9863,map__9863__$1,disabled,slide_chan){
return (function (e){return cljs.core.async.put_BANG_.call(null,slide_chan,"prev");
});})(this$__$1,map__9863,map__9863__$1,disabled,slide_chan))
, "className": ("btn"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(disabled)?" disabled":null))), "id": "prev-btn"},React.DOM.p({"id": "prev-arrow"},goog.string.unescapeEntities("&#10092;")));
});
photosure.gallery.t9859.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9861){var self__ = this;
var _9861__$1 = this;return self__.meta9860;
});
photosure.gallery.t9859.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9861,meta9860__$1){var self__ = this;
var _9861__$1 = this;return (new photosure.gallery.t9859(self__.owner,self__.app,self__.prev_btn,meta9860__$1));
});
photosure.gallery.__GT_t9859 = (function __GT_t9859(owner__$1,app__$1,prev_btn__$1,meta9860){return (new photosure.gallery.t9859(owner__$1,app__$1,prev_btn__$1,meta9860));
});
}
return (new photosure.gallery.t9859(owner,app,prev_btn,null));
});
photosure.gallery.next_btn = (function next_btn(app,owner){if(typeof photosure.gallery.t9869 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.gallery.t9869 = (function (owner,app,next_btn,meta9870){
this.owner = owner;
this.app = app;
this.next_btn = next_btn;
this.meta9870 = meta9870;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.gallery.t9869.cljs$lang$type = true;
photosure.gallery.t9869.cljs$lang$ctorStr = "photosure.gallery/t9869";
photosure.gallery.t9869.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.gallery/t9869");
});
photosure.gallery.t9869.prototype.om$core$IRenderState$ = true;
photosure.gallery.t9869.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__9872){var self__ = this;
var map__9873 = p__9872;var map__9873__$1 = ((cljs.core.seq_QMARK_.call(null,map__9873))?cljs.core.apply.call(null,cljs.core.hash_map,map__9873):map__9873);var disabled = cljs.core.get.call(null,map__9873__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));var slide_chan = cljs.core.get.call(null,map__9873__$1,new cljs.core.Keyword(null,"slide-chan","slide-chan",-416984986));var this$__$1 = this;return React.DOM.div({"onClick": ((function (this$__$1,map__9873,map__9873__$1,disabled,slide_chan){
return (function (e){return cljs.core.async.put_BANG_.call(null,slide_chan,"next");
});})(this$__$1,map__9873,map__9873__$1,disabled,slide_chan))
, "className": ("btn"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(disabled)?" disabled":null))), "id": "next-btn"},React.DOM.p({"id": "next-arrow"},goog.string.unescapeEntities("&#10093;")));
});
photosure.gallery.t9869.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9871){var self__ = this;
var _9871__$1 = this;return self__.meta9870;
});
photosure.gallery.t9869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9871,meta9870__$1){var self__ = this;
var _9871__$1 = this;return (new photosure.gallery.t9869(self__.owner,self__.app,self__.next_btn,meta9870__$1));
});
photosure.gallery.__GT_t9869 = (function __GT_t9869(owner__$1,app__$1,next_btn__$1,meta9870){return (new photosure.gallery.t9869(owner__$1,app__$1,next_btn__$1,meta9870));
});
}
return (new photosure.gallery.t9869(owner,app,next_btn,null));
});
photosure.gallery.gallery = (function gallery(app,owner){if(typeof photosure.gallery.t9972 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.gallery.t9972 = (function (owner,app,gallery,meta9973){
this.owner = owner;
this.app = app;
this.gallery = gallery;
this.meta9973 = meta9973;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.gallery.t9972.cljs$lang$type = true;
photosure.gallery.t9972.cljs$lang$ctorStr = "photosure.gallery/t9972";
photosure.gallery.t9972.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.gallery/t9972");
});
photosure.gallery.t9972.prototype.om$core$IRenderState$ = true;
photosure.gallery.t9972.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__9975){var self__ = this;
var map__9976 = p__9975;var map__9976__$1 = ((cljs.core.seq_QMARK_.call(null,map__9976))?cljs.core.apply.call(null,cljs.core.hash_map,map__9976):map__9976);var anim_in_progress = cljs.core.get.call(null,map__9976__$1,new cljs.core.Keyword(null,"anim-in-progress","anim-in-progress",-170743916));var slide_chan = cljs.core.get.call(null,map__9976__$1,new cljs.core.Keyword(null,"slide-chan","slide-chan",-416984986));var this$__$1 = this;return React.DOM.div({"id": "photo-gallery-container"},React.DOM.div({"id": "left-pane"},om.core.build.call(null,photosure.gallery.prev_btn,self__.app,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slide-chan","slide-chan",-416984986),slide_chan], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),anim_in_progress], null)], null))),cljs.core.apply.call(null,om.dom.div,{"className": ((photosure.gallery.all_loaded_QMARK_.call(null))?"loaded":null), "id": "photo-gallery"},React.DOM.div({"className": ("loader "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((photosure.gallery.all_loaded_QMARK_.call(null))?"off":"on"))), "id": "blah"}),om.core.build_all.call(null,photosure.gallery.photo_view,new cljs.core.Keyword(null,"photos","photos",11691538).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"photo","photo",-52852781)], null))),React.DOM.div({"id": "right-pane"},om.core.build.call(null,photosure.gallery.next_btn,self__.app,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slide-chan","slide-chan",-416984986),slide_chan], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),anim_in_progress], null)], null))));
});
photosure.gallery.t9972.prototype.om$core$IWillMount$ = true;
photosure.gallery.t9972.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var slide_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"slide-chan","slide-chan",-416984986));var c__6367__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto__,slide_chan,___$1){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto__,slide_chan,___$1){
return (function (state_10047){var state_val_10048 = (state_10047[(1)]);if((state_val_10048 === (8)))
{var inst_10041 = (state_10047[(2)]);var inst_10042 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"anim-in-progress","anim-in-progress",-170743916),false);var state_10047__$1 = (function (){var statearr_10049 = state_10047;(statearr_10049[(7)] = inst_10041);
(statearr_10049[(8)] = inst_10042);
return statearr_10049;
})();var statearr_10050_10068 = state_10047__$1;(statearr_10050_10068[(2)] = null);
(statearr_10050_10068[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10048 === (7)))
{var inst_10007 = (state_10047[(2)]);var inst_10008 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"anim-in-progress","anim-in-progress",-170743916),true);var inst_10009 = cljs.core.PersistentVector.EMPTY_NODE;var inst_10010 = cljs.core.deref.call(null,self__.app);var inst_10011 = new cljs.core.Keyword(null,"curr","curr",-1092372808).cljs$core$IFn$_invoke$arity$1(inst_10010);var inst_10012 = cljs.core.get.call(null,inst_10011,(0));var inst_10013 = [new cljs.core.Keyword(null,"photos","photos",11691538),inst_10012,new cljs.core.Keyword(null,"pos","pos",-864607220)];var inst_10014 = (new cljs.core.PersistentVector(null,3,(5),inst_10009,inst_10013,null));var inst_10015 = cljs.core.PersistentVector.EMPTY_NODE;var inst_10016 = ["left"];var inst_10017 = (new cljs.core.PersistentVector(null,1,(5),inst_10015,inst_10016,null));var inst_10018 = om.core.update_BANG_.call(null,self__.app,inst_10014,inst_10017);var inst_10019 = cljs.core.PersistentVector.EMPTY_NODE;var inst_10020 = cljs.core.deref.call(null,self__.app);var inst_10021 = new cljs.core.Keyword(null,"curr","curr",-1092372808).cljs$core$IFn$_invoke$arity$1(inst_10020);var inst_10022 = cljs.core.get.call(null,inst_10021,(1));var inst_10023 = [new cljs.core.Keyword(null,"photos","photos",11691538),inst_10022,new cljs.core.Keyword(null,"pos","pos",-864607220)];var inst_10024 = (new cljs.core.PersistentVector(null,3,(5),inst_10019,inst_10023,null));var inst_10025 = cljs.core.PersistentVector.EMPTY_NODE;var inst_10026 = ["center"];var inst_10027 = (new cljs.core.PersistentVector(null,1,(5),inst_10025,inst_10026,null));var inst_10028 = om.core.update_BANG_.call(null,self__.app,inst_10024,inst_10027);var inst_10029 = cljs.core.PersistentVector.EMPTY_NODE;var inst_10030 = cljs.core.deref.call(null,self__.app);var inst_10031 = new cljs.core.Keyword(null,"curr","curr",-1092372808).cljs$core$IFn$_invoke$arity$1(inst_10030);var inst_10032 = cljs.core.get.call(null,inst_10031,(2));var inst_10033 = [new cljs.core.Keyword(null,"photos","photos",11691538),inst_10032,new cljs.core.Keyword(null,"pos","pos",-864607220)];var inst_10034 = (new cljs.core.PersistentVector(null,3,(5),inst_10029,inst_10033,null));var inst_10035 = cljs.core.PersistentVector.EMPTY_NODE;var inst_10036 = ["right"];var inst_10037 = (new cljs.core.PersistentVector(null,1,(5),inst_10035,inst_10036,null));var inst_10038 = om.core.update_BANG_.call(null,self__.app,inst_10034,inst_10037);var inst_10039 = cljs.core.async.timeout.call(null,(1000));var state_10047__$1 = (function (){var statearr_10051 = state_10047;(statearr_10051[(9)] = inst_10018);
(statearr_10051[(10)] = inst_10008);
(statearr_10051[(11)] = inst_10028);
(statearr_10051[(12)] = inst_10038);
(statearr_10051[(13)] = inst_10007);
return statearr_10051;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10047__$1,(8),inst_10039);
} else
{if((state_val_10048 === (6)))
{var inst_9982 = (state_10047[(14)]);var inst_9980 = (state_10047[(15)]);var inst_9996 = cljs.core.PersistentVector.EMPTY_NODE;var inst_9997 = cljs.core.deref.call(null,self__.app);var inst_9998 = new cljs.core.Keyword(null,"curr","curr",-1092372808).cljs$core$IFn$_invoke$arity$1(inst_9997);var inst_9999 = cljs.core.get.call(null,inst_9998,(0));var inst_10000 = [new cljs.core.Keyword(null,"photos","photos",11691538),inst_9999,new cljs.core.Keyword(null,"pos","pos",-864607220)];var inst_10001 = (new cljs.core.PersistentVector(null,3,(5),inst_9996,inst_10000,null));var inst_10002 = cljs.core.PersistentVector.EMPTY;var inst_10003 = om.core.update_BANG_.call(null,self__.app,inst_10001,inst_10002);var inst_10004 = (function (){var cmd = inst_9982;var len = inst_9980;return ((function (cmd,len,inst_9982,inst_9980,inst_9996,inst_9997,inst_9998,inst_9999,inst_10000,inst_10001,inst_10002,inst_10003,state_val_10048,c__6367__auto__,slide_chan,___$1){
return (function (___$2){return cljs.core.apply.call(null,cljs.core.vector,cljs.core.map.call(null,((function (cmd,len,inst_9982,inst_9980,inst_9996,inst_9997,inst_9998,inst_9999,inst_10000,inst_10001,inst_10002,inst_10003,state_val_10048,c__6367__auto__,slide_chan,___$1){
return (function (p1__9875_SHARP_){return cljs.core.mod.call(null,(p1__9875_SHARP_ + (1)),len);
});})(cmd,len,inst_9982,inst_9980,inst_9996,inst_9997,inst_9998,inst_9999,inst_10000,inst_10001,inst_10002,inst_10003,state_val_10048,c__6367__auto__,slide_chan,___$1))
,___$2));
});
;})(cmd,len,inst_9982,inst_9980,inst_9996,inst_9997,inst_9998,inst_9999,inst_10000,inst_10001,inst_10002,inst_10003,state_val_10048,c__6367__auto__,slide_chan,___$1))
})();var inst_10005 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"curr","curr",-1092372808),inst_10004);var state_10047__$1 = (function (){var statearr_10052 = state_10047;(statearr_10052[(16)] = inst_10003);
return statearr_10052;
})();var statearr_10053_10069 = state_10047__$1;(statearr_10053_10069[(2)] = inst_10005);
(statearr_10053_10069[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10048 === (5)))
{var inst_9982 = (state_10047[(14)]);var inst_9980 = (state_10047[(15)]);var inst_9985 = cljs.core.PersistentVector.EMPTY_NODE;var inst_9986 = cljs.core.deref.call(null,self__.app);var inst_9987 = new cljs.core.Keyword(null,"curr","curr",-1092372808).cljs$core$IFn$_invoke$arity$1(inst_9986);var inst_9988 = cljs.core.get.call(null,inst_9987,(2));var inst_9989 = [new cljs.core.Keyword(null,"photos","photos",11691538),inst_9988,new cljs.core.Keyword(null,"pos","pos",-864607220)];var inst_9990 = (new cljs.core.PersistentVector(null,3,(5),inst_9985,inst_9989,null));var inst_9991 = cljs.core.PersistentVector.EMPTY;var inst_9992 = om.core.update_BANG_.call(null,self__.app,inst_9990,inst_9991);var inst_9993 = (function (){var cmd = inst_9982;var len = inst_9980;return ((function (cmd,len,inst_9982,inst_9980,inst_9985,inst_9986,inst_9987,inst_9988,inst_9989,inst_9990,inst_9991,inst_9992,state_val_10048,c__6367__auto__,slide_chan,___$1){
return (function (___$2){return cljs.core.apply.call(null,cljs.core.vector,cljs.core.map.call(null,((function (cmd,len,inst_9982,inst_9980,inst_9985,inst_9986,inst_9987,inst_9988,inst_9989,inst_9990,inst_9991,inst_9992,state_val_10048,c__6367__auto__,slide_chan,___$1){
return (function (p1__9874_SHARP_){return cljs.core.mod.call(null,(p1__9874_SHARP_ - (1)),len);
});})(cmd,len,inst_9982,inst_9980,inst_9985,inst_9986,inst_9987,inst_9988,inst_9989,inst_9990,inst_9991,inst_9992,state_val_10048,c__6367__auto__,slide_chan,___$1))
,___$2));
});
;})(cmd,len,inst_9982,inst_9980,inst_9985,inst_9986,inst_9987,inst_9988,inst_9989,inst_9990,inst_9991,inst_9992,state_val_10048,c__6367__auto__,slide_chan,___$1))
})();var inst_9994 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"curr","curr",-1092372808),inst_9993);var state_10047__$1 = (function (){var statearr_10054 = state_10047;(statearr_10054[(17)] = inst_9992);
return statearr_10054;
})();var statearr_10055_10070 = state_10047__$1;(statearr_10055_10070[(2)] = inst_9994);
(statearr_10055_10070[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10048 === (4)))
{var inst_9982 = (state_10047[(14)]);var inst_9982__$1 = (state_10047[(2)]);var inst_9983 = cljs.core._EQ_.call(null,inst_9982__$1,"next");var state_10047__$1 = (function (){var statearr_10056 = state_10047;(statearr_10056[(14)] = inst_9982__$1);
return statearr_10056;
})();if(inst_9983)
{var statearr_10057_10071 = state_10047__$1;(statearr_10057_10071[(1)] = (5));
} else
{var statearr_10058_10072 = state_10047__$1;(statearr_10058_10072[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10048 === (3)))
{var inst_10045 = (state_10047[(2)]);var state_10047__$1 = state_10047;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10047__$1,inst_10045);
} else
{if((state_val_10048 === (2)))
{var inst_9978 = cljs.core.deref.call(null,self__.app);var inst_9979 = new cljs.core.Keyword(null,"photos","photos",11691538).cljs$core$IFn$_invoke$arity$1(inst_9978);var inst_9980 = cljs.core.count.call(null,inst_9979);var state_10047__$1 = (function (){var statearr_10059 = state_10047;(statearr_10059[(15)] = inst_9980);
return statearr_10059;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10047__$1,(4),slide_chan);
} else
{if((state_val_10048 === (1)))
{var state_10047__$1 = state_10047;var statearr_10060_10073 = state_10047__$1;(statearr_10060_10073[(2)] = null);
(statearr_10060_10073[(1)] = (2));
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
var state_machine__6353__auto____0 = (function (){var statearr_10064 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10064[(0)] = state_machine__6353__auto__);
(statearr_10064[(1)] = (1));
return statearr_10064;
});
var state_machine__6353__auto____1 = (function (state_10047){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_10047);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e10065){if((e10065 instanceof Object))
{var ex__6356__auto__ = e10065;var statearr_10066_10074 = state_10047;(statearr_10066_10074[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10047);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10065;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10075 = state_10047;
state_10047 = G__10075;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_10047){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_10047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto__,slide_chan,___$1))
})();var state__6369__auto__ = (function (){var statearr_10067 = f__6368__auto__.call(null);(statearr_10067[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto__);
return statearr_10067;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto__,slide_chan,___$1))
);
return c__6367__auto__;
});
photosure.gallery.t9972.prototype.om$core$IInitState$ = true;
photosure.gallery.t9972.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"slide-chan","slide-chan",-416984986),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"anim-in-progress","anim-in-progress",-170743916),false], null);
});
photosure.gallery.t9972.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9974){var self__ = this;
var _9974__$1 = this;return self__.meta9973;
});
photosure.gallery.t9972.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9974,meta9973__$1){var self__ = this;
var _9974__$1 = this;return (new photosure.gallery.t9972(self__.owner,self__.app,self__.gallery,meta9973__$1));
});
photosure.gallery.__GT_t9972 = (function __GT_t9972(owner__$1,app__$1,gallery__$1,meta9973){return (new photosure.gallery.t9972(owner__$1,app__$1,gallery__$1,meta9973));
});
}
return (new photosure.gallery.t9972(owner,app,gallery,null));
});
photosure.gallery.render = (function render(){return om.core.root.call(null,photosure.gallery.gallery,photosure.gallery.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("dynamic-content")], null));
});

//# sourceMappingURL=gallery.js.map