// Compiled by ClojureScript 0.0-2173
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
photosure.gallery.photo = (function photo(filepath,pos){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"photo","photo",1120547236),filepath,new cljs.core.Keyword(null,"pos","pos",1014015430),pos,new cljs.core.Keyword(null,"loaded","loaded",4211352439),false], null);
});
photosure.gallery.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"photos","photos",4319837171),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [photosure.gallery.photo.call(null,"images/cpleblow2.jpg",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["left"], null)),photosure.gallery.photo.call(null,"images/cpleblow1.jpg",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["center"], null)),photosure.gallery.photo.call(null,"images/cpleblow3.jpg",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["right"], null)),photosure.gallery.photo.call(null,"images/cpleblow4.jpg",cljs.core.PersistentVector.EMPTY),photosure.gallery.photo.call(null,"images/cpleblow5.jpg",cljs.core.PersistentVector.EMPTY),photosure.gallery.photo.call(null,"images/cpleblow6.jpg",cljs.core.PersistentVector.EMPTY)], null),new cljs.core.Keyword(null,"curr","curr",1016969636),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,1,2], null)], null));
photosure.gallery.img_loaded = (function img_loaded(photo){return om.core.update_BANG_.call(null,photo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded","loaded",4211352439)], null),true);
});
photosure.gallery.all_loaded_QMARK_ = (function all_loaded_QMARK_(){var total = cljs.core.count.call(null,new cljs.core.Keyword(null,"photos","photos",4319837171).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,photosure.gallery.app_state)));var loaded = cljs.core.count.call(null,cljs.core.get.call(null,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"loaded","loaded",4211352439),new cljs.core.Keyword(null,"photos","photos",4319837171).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,photosure.gallery.app_state))),true));return cljs.core._EQ_.call(null,1,(total / loaded));
});
photosure.gallery.photo_view = (function photo_view(photo,owner){if(typeof photosure.gallery.t9913 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.gallery.t9913 = (function (owner,photo,photo_view,meta9914){
this.owner = owner;
this.photo = photo;
this.photo_view = photo_view;
this.meta9914 = meta9914;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.gallery.t9913.cljs$lang$type = true;
photosure.gallery.t9913.cljs$lang$ctorStr = "photosure.gallery/t9913";
photosure.gallery.t9913.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.gallery/t9913");
});
photosure.gallery.t9913.prototype.om$core$IRender$ = true;
photosure.gallery.t9913.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": [cljs.core.str("frame "),cljs.core.str(((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(self__.photo)))?"hidden":cljs.core.get.call(null,new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(self__.photo),0)))].join('')},React.DOM.img({"onLoad": (function (){return photosure.gallery.img_loaded.call(null,self__.photo);
}), "src": new cljs.core.Keyword(null,"photo","photo",1120547236).cljs$core$IFn$_invoke$arity$1(self__.photo), "className": [cljs.core.str("photo"),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"loaded","loaded",4211352439).cljs$core$IFn$_invoke$arity$1(self__.photo))?" loaded":null))].join('')}));
});
photosure.gallery.t9913.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9915){var self__ = this;
var _9915__$1 = this;return self__.meta9914;
});
photosure.gallery.t9913.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9915,meta9914__$1){var self__ = this;
var _9915__$1 = this;return (new photosure.gallery.t9913(self__.owner,self__.photo,self__.photo_view,meta9914__$1));
});
photosure.gallery.__GT_t9913 = (function __GT_t9913(owner__$1,photo__$1,photo_view__$1,meta9914){return (new photosure.gallery.t9913(owner__$1,photo__$1,photo_view__$1,meta9914));
});
}
return (new photosure.gallery.t9913(owner,photo,photo_view,null));
});
photosure.gallery.prev_btn = (function prev_btn(app,owner){if(typeof photosure.gallery.t9921 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.gallery.t9921 = (function (owner,app,prev_btn,meta9922){
this.owner = owner;
this.app = app;
this.prev_btn = prev_btn;
this.meta9922 = meta9922;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.gallery.t9921.cljs$lang$type = true;
photosure.gallery.t9921.cljs$lang$ctorStr = "photosure.gallery/t9921";
photosure.gallery.t9921.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.gallery/t9921");
});
photosure.gallery.t9921.prototype.om$core$IRenderState$ = true;
photosure.gallery.t9921.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__9924){var self__ = this;
var map__9925 = p__9924;var map__9925__$1 = ((cljs.core.seq_QMARK_.call(null,map__9925))?cljs.core.apply.call(null,cljs.core.hash_map,map__9925):map__9925);var disabled = cljs.core.get.call(null,map__9925__$1,new cljs.core.Keyword(null,"disabled","disabled",1284845038));var slide_chan = cljs.core.get.call(null,map__9925__$1,new cljs.core.Keyword(null,"slide-chan","slide-chan",2056802656));var this$__$1 = this;return React.DOM.div({"onClick": (function (e){return cljs.core.async.put_BANG_.call(null,slide_chan,"prev");
}), "className": [cljs.core.str("btn"),cljs.core.str((cljs.core.truth_(disabled)?" disabled":null))].join(''), "id": "prev-btn"},React.DOM.p({"id": "prev-arrow"},goog.string.unescapeEntities("&#10092;")));
});
photosure.gallery.t9921.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9923){var self__ = this;
var _9923__$1 = this;return self__.meta9922;
});
photosure.gallery.t9921.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9923,meta9922__$1){var self__ = this;
var _9923__$1 = this;return (new photosure.gallery.t9921(self__.owner,self__.app,self__.prev_btn,meta9922__$1));
});
photosure.gallery.__GT_t9921 = (function __GT_t9921(owner__$1,app__$1,prev_btn__$1,meta9922){return (new photosure.gallery.t9921(owner__$1,app__$1,prev_btn__$1,meta9922));
});
}
return (new photosure.gallery.t9921(owner,app,prev_btn,null));
});
photosure.gallery.next_btn = (function next_btn(app,owner){if(typeof photosure.gallery.t9931 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.gallery.t9931 = (function (owner,app,next_btn,meta9932){
this.owner = owner;
this.app = app;
this.next_btn = next_btn;
this.meta9932 = meta9932;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.gallery.t9931.cljs$lang$type = true;
photosure.gallery.t9931.cljs$lang$ctorStr = "photosure.gallery/t9931";
photosure.gallery.t9931.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.gallery/t9931");
});
photosure.gallery.t9931.prototype.om$core$IRenderState$ = true;
photosure.gallery.t9931.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__9934){var self__ = this;
var map__9935 = p__9934;var map__9935__$1 = ((cljs.core.seq_QMARK_.call(null,map__9935))?cljs.core.apply.call(null,cljs.core.hash_map,map__9935):map__9935);var disabled = cljs.core.get.call(null,map__9935__$1,new cljs.core.Keyword(null,"disabled","disabled",1284845038));var slide_chan = cljs.core.get.call(null,map__9935__$1,new cljs.core.Keyword(null,"slide-chan","slide-chan",2056802656));var this$__$1 = this;return React.DOM.div({"onClick": (function (e){return cljs.core.async.put_BANG_.call(null,slide_chan,"next");
}), "className": [cljs.core.str("btn"),cljs.core.str((cljs.core.truth_(disabled)?" disabled":null))].join(''), "id": "next-btn"},React.DOM.p({"id": "next-arrow"},goog.string.unescapeEntities("&#10093;")));
});
photosure.gallery.t9931.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9933){var self__ = this;
var _9933__$1 = this;return self__.meta9932;
});
photosure.gallery.t9931.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9933,meta9932__$1){var self__ = this;
var _9933__$1 = this;return (new photosure.gallery.t9931(self__.owner,self__.app,self__.next_btn,meta9932__$1));
});
photosure.gallery.__GT_t9931 = (function __GT_t9931(owner__$1,app__$1,next_btn__$1,meta9932){return (new photosure.gallery.t9931(owner__$1,app__$1,next_btn__$1,meta9932));
});
}
return (new photosure.gallery.t9931(owner,app,next_btn,null));
});
photosure.gallery.gallery = (function gallery(app,owner){if(typeof photosure.gallery.t10024 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.gallery.t10024 = (function (owner,app,gallery,meta10025){
this.owner = owner;
this.app = app;
this.gallery = gallery;
this.meta10025 = meta10025;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.gallery.t10024.cljs$lang$type = true;
photosure.gallery.t10024.cljs$lang$ctorStr = "photosure.gallery/t10024";
photosure.gallery.t10024.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.gallery/t10024");
});
photosure.gallery.t10024.prototype.om$core$IRenderState$ = true;
photosure.gallery.t10024.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__10027){var self__ = this;
var map__10028 = p__10027;var map__10028__$1 = ((cljs.core.seq_QMARK_.call(null,map__10028))?cljs.core.apply.call(null,cljs.core.hash_map,map__10028):map__10028);var anim_in_progress = cljs.core.get.call(null,map__10028__$1,new cljs.core.Keyword(null,"anim-in-progress","anim-in-progress",3132057483));var slide_chan = cljs.core.get.call(null,map__10028__$1,new cljs.core.Keyword(null,"slide-chan","slide-chan",2056802656));var this$__$1 = this;return React.DOM.div({"id": "photo-gallery-container"},React.DOM.div({"id": "left-pane"},om.core.build.call(null,photosure.gallery.prev_btn,self__.app,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slide-chan","slide-chan",2056802656),slide_chan], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",1284845038),anim_in_progress], null)], null))),cljs.core.apply.call(null,om.dom.div,{"className": ((photosure.gallery.all_loaded_QMARK_.call(null))?"loaded":null), "id": "photo-gallery"},om.core.build_all.call(null,photosure.gallery.photo_view,new cljs.core.Keyword(null,"photos","photos",4319837171).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"photo","photo",1120547236)], null))),React.DOM.div({"id": "right-pane"},om.core.build.call(null,photosure.gallery.next_btn,self__.app,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slide-chan","slide-chan",2056802656),slide_chan], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",1284845038),anim_in_progress], null)], null))));
});
photosure.gallery.t10024.prototype.om$core$IWillMount$ = true;
photosure.gallery.t10024.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var slide_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"slide-chan","slide-chan",2056802656));var c__6222__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6223__auto__ = (function (){var switch__6207__auto__ = (function (state_10089){var state_val_10090 = (state_10089[1]);if((state_val_10090 === 8))
{var inst_10083 = (state_10089[2]);var inst_10084 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"anim-in-progress","anim-in-progress",3132057483),false);var state_10089__$1 = (function (){var statearr_10091 = state_10089;(statearr_10091[7] = inst_10084);
(statearr_10091[8] = inst_10083);
return statearr_10091;
})();var statearr_10092_10110 = state_10089__$1;(statearr_10092_10110[2] = null);
(statearr_10092_10110[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10090 === 7))
{var inst_10055 = (state_10089[2]);var inst_10056 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"anim-in-progress","anim-in-progress",3132057483),true);var inst_10057 = cljs.core.deref.call(null,self__.app);var inst_10058 = new cljs.core.Keyword(null,"curr","curr",1016969636).cljs$core$IFn$_invoke$arity$1(inst_10057);var inst_10059 = cljs.core.get.call(null,inst_10058,0);var inst_10060 = [new cljs.core.Keyword(null,"photos","photos",4319837171),inst_10059,new cljs.core.Keyword(null,"pos","pos",1014015430)];var inst_10061 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10060,null));var inst_10062 = ["left"];var inst_10063 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10062,null));var inst_10064 = om.core.update_BANG_.call(null,self__.app,inst_10061,inst_10063);var inst_10065 = cljs.core.deref.call(null,self__.app);var inst_10066 = new cljs.core.Keyword(null,"curr","curr",1016969636).cljs$core$IFn$_invoke$arity$1(inst_10065);var inst_10067 = cljs.core.get.call(null,inst_10066,1);var inst_10068 = [new cljs.core.Keyword(null,"photos","photos",4319837171),inst_10067,new cljs.core.Keyword(null,"pos","pos",1014015430)];var inst_10069 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10068,null));var inst_10070 = ["center"];var inst_10071 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10070,null));var inst_10072 = om.core.update_BANG_.call(null,self__.app,inst_10069,inst_10071);var inst_10073 = cljs.core.deref.call(null,self__.app);var inst_10074 = new cljs.core.Keyword(null,"curr","curr",1016969636).cljs$core$IFn$_invoke$arity$1(inst_10073);var inst_10075 = cljs.core.get.call(null,inst_10074,2);var inst_10076 = [new cljs.core.Keyword(null,"photos","photos",4319837171),inst_10075,new cljs.core.Keyword(null,"pos","pos",1014015430)];var inst_10077 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10076,null));var inst_10078 = ["right"];var inst_10079 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10078,null));var inst_10080 = om.core.update_BANG_.call(null,self__.app,inst_10077,inst_10079);var inst_10081 = cljs.core.async.timeout.call(null,1000);var state_10089__$1 = (function (){var statearr_10093 = state_10089;(statearr_10093[9] = inst_10080);
(statearr_10093[10] = inst_10056);
(statearr_10093[11] = inst_10055);
(statearr_10093[12] = inst_10064);
(statearr_10093[13] = inst_10072);
return statearr_10093;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10089__$1,8,inst_10081);
} else
{if((state_val_10090 === 6))
{var inst_10034 = (state_10089[14]);var inst_10032 = (state_10089[15]);var inst_10046 = cljs.core.deref.call(null,self__.app);var inst_10047 = new cljs.core.Keyword(null,"curr","curr",1016969636).cljs$core$IFn$_invoke$arity$1(inst_10046);var inst_10048 = cljs.core.get.call(null,inst_10047,0);var inst_10049 = [new cljs.core.Keyword(null,"photos","photos",4319837171),inst_10048,new cljs.core.Keyword(null,"pos","pos",1014015430)];var inst_10050 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10049,null));var inst_10051 = om.core.update_BANG_.call(null,self__.app,inst_10050,cljs.core.PersistentVector.EMPTY);var inst_10052 = (function (){var cmd = inst_10034;var len = inst_10032;return ((function (cmd,len,inst_10034,inst_10032,inst_10046,inst_10047,inst_10048,inst_10049,inst_10050,inst_10051,state_val_10090){
return (function (___$2){return cljs.core.apply.call(null,cljs.core.vector,cljs.core.map.call(null,((function (cmd,len,inst_10034,inst_10032,inst_10046,inst_10047,inst_10048,inst_10049,inst_10050,inst_10051,state_val_10090){
return (function (p1__9937_SHARP_){return cljs.core.mod.call(null,(p1__9937_SHARP_ + 1),len);
});})(cmd,len,inst_10034,inst_10032,inst_10046,inst_10047,inst_10048,inst_10049,inst_10050,inst_10051,state_val_10090))
,___$2));
});
;})(cmd,len,inst_10034,inst_10032,inst_10046,inst_10047,inst_10048,inst_10049,inst_10050,inst_10051,state_val_10090))
})();var inst_10053 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"curr","curr",1016969636),inst_10052);var state_10089__$1 = (function (){var statearr_10094 = state_10089;(statearr_10094[16] = inst_10051);
return statearr_10094;
})();var statearr_10095_10111 = state_10089__$1;(statearr_10095_10111[2] = inst_10053);
(statearr_10095_10111[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10090 === 5))
{var inst_10034 = (state_10089[14]);var inst_10032 = (state_10089[15]);var inst_10037 = cljs.core.deref.call(null,self__.app);var inst_10038 = new cljs.core.Keyword(null,"curr","curr",1016969636).cljs$core$IFn$_invoke$arity$1(inst_10037);var inst_10039 = cljs.core.get.call(null,inst_10038,2);var inst_10040 = [new cljs.core.Keyword(null,"photos","photos",4319837171),inst_10039,new cljs.core.Keyword(null,"pos","pos",1014015430)];var inst_10041 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10040,null));var inst_10042 = om.core.update_BANG_.call(null,self__.app,inst_10041,cljs.core.PersistentVector.EMPTY);var inst_10043 = (function (){var cmd = inst_10034;var len = inst_10032;return ((function (cmd,len,inst_10034,inst_10032,inst_10037,inst_10038,inst_10039,inst_10040,inst_10041,inst_10042,state_val_10090){
return (function (___$2){return cljs.core.apply.call(null,cljs.core.vector,cljs.core.map.call(null,((function (cmd,len,inst_10034,inst_10032,inst_10037,inst_10038,inst_10039,inst_10040,inst_10041,inst_10042,state_val_10090){
return (function (p1__9936_SHARP_){return cljs.core.mod.call(null,(p1__9936_SHARP_ - 1),len);
});})(cmd,len,inst_10034,inst_10032,inst_10037,inst_10038,inst_10039,inst_10040,inst_10041,inst_10042,state_val_10090))
,___$2));
});
;})(cmd,len,inst_10034,inst_10032,inst_10037,inst_10038,inst_10039,inst_10040,inst_10041,inst_10042,state_val_10090))
})();var inst_10044 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"curr","curr",1016969636),inst_10043);var state_10089__$1 = (function (){var statearr_10096 = state_10089;(statearr_10096[17] = inst_10042);
return statearr_10096;
})();var statearr_10097_10112 = state_10089__$1;(statearr_10097_10112[2] = inst_10044);
(statearr_10097_10112[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10090 === 4))
{var inst_10034 = (state_10089[14]);var inst_10034__$1 = (state_10089[2]);var inst_10035 = cljs.core._EQ_.call(null,inst_10034__$1,"next");var state_10089__$1 = (function (){var statearr_10098 = state_10089;(statearr_10098[14] = inst_10034__$1);
return statearr_10098;
})();if(inst_10035)
{var statearr_10099_10113 = state_10089__$1;(statearr_10099_10113[1] = 5);
} else
{var statearr_10100_10114 = state_10089__$1;(statearr_10100_10114[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10090 === 3))
{var inst_10087 = (state_10089[2]);var state_10089__$1 = state_10089;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10089__$1,inst_10087);
} else
{if((state_val_10090 === 2))
{var inst_10030 = cljs.core.deref.call(null,self__.app);var inst_10031 = new cljs.core.Keyword(null,"photos","photos",4319837171).cljs$core$IFn$_invoke$arity$1(inst_10030);var inst_10032 = cljs.core.count.call(null,inst_10031);var state_10089__$1 = (function (){var statearr_10101 = state_10089;(statearr_10101[15] = inst_10032);
return statearr_10101;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10089__$1,4,slide_chan);
} else
{if((state_val_10090 === 1))
{var state_10089__$1 = state_10089;var statearr_10102_10115 = state_10089__$1;(statearr_10102_10115[2] = null);
(statearr_10102_10115[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__6207__auto__){
return (function() {
var state_machine__6208__auto__ = null;
var state_machine__6208__auto____0 = (function (){var statearr_10106 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10106[0] = state_machine__6208__auto__);
(statearr_10106[1] = 1);
return statearr_10106;
});
var state_machine__6208__auto____1 = (function (state_10089){while(true){
var ret_value__6209__auto__ = (function (){try{while(true){
var result__6210__auto__ = switch__6207__auto__.call(null,state_10089);if(cljs.core.keyword_identical_QMARK_.call(null,result__6210__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6210__auto__;
}
break;
}
}catch (e10107){if((e10107 instanceof Object))
{var ex__6211__auto__ = e10107;var statearr_10108_10116 = state_10089;(statearr_10108_10116[5] = ex__6211__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10089);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10107;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6209__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10117 = state_10089;
state_10089 = G__10117;
continue;
}
} else
{return ret_value__6209__auto__;
}
break;
}
});
state_machine__6208__auto__ = function(state_10089){
switch(arguments.length){
case 0:
return state_machine__6208__auto____0.call(this);
case 1:
return state_machine__6208__auto____1.call(this,state_10089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6208__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6208__auto____0;
state_machine__6208__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6208__auto____1;
return state_machine__6208__auto__;
})()
;})(switch__6207__auto__))
})();var state__6224__auto__ = (function (){var statearr_10109 = f__6223__auto__.call(null);(statearr_10109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6222__auto__);
return statearr_10109;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6224__auto__);
}));
return c__6222__auto__;
});
photosure.gallery.t10024.prototype.om$core$IInitState$ = true;
photosure.gallery.t10024.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"slide-chan","slide-chan",2056802656),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"anim-in-progress","anim-in-progress",3132057483),false], null);
});
photosure.gallery.t10024.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10026){var self__ = this;
var _10026__$1 = this;return self__.meta10025;
});
photosure.gallery.t10024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10026,meta10025__$1){var self__ = this;
var _10026__$1 = this;return (new photosure.gallery.t10024(self__.owner,self__.app,self__.gallery,meta10025__$1));
});
photosure.gallery.__GT_t10024 = (function __GT_t10024(owner__$1,app__$1,gallery__$1,meta10025){return (new photosure.gallery.t10024(owner__$1,app__$1,gallery__$1,meta10025));
});
}
return (new photosure.gallery.t10024(owner,app,gallery,null));
});
photosure.gallery.render = (function render(){return om.core.root.call(null,photosure.gallery.gallery,photosure.gallery.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("dynamic-content")], null));
});

//# sourceMappingURL=gallery.js.map