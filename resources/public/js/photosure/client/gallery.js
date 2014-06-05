// Compiled by ClojureScript 0.0-2173
goog.provide('photosure.client.gallery');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
photosure.client.gallery.filter_indexed = (function filter_indexed(f,coll){return cljs.core.map.call(null,cljs.core.second,cljs.core.filter.call(null,(function (p__20888){var vec__20889 = p__20888;var ndx = cljs.core.nth.call(null,vec__20889,0,null);var item = cljs.core.nth.call(null,vec__20889,1,null);return f.call(null,ndx,item);
}),cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),coll)));
});
photosure.client.gallery.photo = (function photo(filepath,pos){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"photo","photo",1120547236),filepath,new cljs.core.Keyword(null,"pos","pos",1014015430),pos], null);
});
photosure.client.gallery.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"photos","photos",4319837171),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [photosure.client.gallery.photo.call(null,"images/cpleblow1.jpg",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["left"], null)),photosure.client.gallery.photo.call(null,"images/cpleblow2.jpg",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["center"], null)),photosure.client.gallery.photo.call(null,"images/cpleblow3.jpg",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["right"], null)),photosure.client.gallery.photo.call(null,"images/cpleblow4.jpg",cljs.core.PersistentVector.EMPTY),photosure.client.gallery.photo.call(null,"images/cpleblow5.jpg",cljs.core.PersistentVector.EMPTY),photosure.client.gallery.photo.call(null,"images/cpleblow6.jpg",cljs.core.PersistentVector.EMPTY)], null),new cljs.core.Keyword(null,"curr","curr",1016969636),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,1,2], null)], null));
photosure.client.gallery.photo_view = (function photo_view(photo,owner){if(typeof photosure.client.gallery.t20893 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.client.gallery.t20893 = (function (owner,photo,photo_view,meta20894){
this.owner = owner;
this.photo = photo;
this.photo_view = photo_view;
this.meta20894 = meta20894;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.client.gallery.t20893.cljs$lang$type = true;
photosure.client.gallery.t20893.cljs$lang$ctorStr = "photosure.client.gallery/t20893";
photosure.client.gallery.t20893.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.client.gallery/t20893");
});
photosure.client.gallery.t20893.prototype.om$core$IRender$ = true;
photosure.client.gallery.t20893.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.img({"className": [cljs.core.str("photo "),cljs.core.str(clojure.string.join.call(null,"-",cljs.core.take_last.call(null,2,new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(self__.photo))))].join(''), "src": new cljs.core.Keyword(null,"photo","photo",1120547236).cljs$core$IFn$_invoke$arity$1(self__.photo)});
});
photosure.client.gallery.t20893.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20895){var self__ = this;
var _20895__$1 = this;return self__.meta20894;
});
photosure.client.gallery.t20893.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20895,meta20894__$1){var self__ = this;
var _20895__$1 = this;return (new photosure.client.gallery.t20893(self__.owner,self__.photo,self__.photo_view,meta20894__$1));
});
photosure.client.gallery.__GT_t20893 = (function __GT_t20893(owner__$1,photo__$1,photo_view__$1,meta20894){return (new photosure.client.gallery.t20893(owner__$1,photo__$1,photo_view__$1,meta20894));
});
}
return (new photosure.client.gallery.t20893(owner,photo,photo_view,null));
});
photosure.client.gallery.prev_btn = (function prev_btn(app,owner){if(typeof photosure.client.gallery.t20901 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.client.gallery.t20901 = (function (owner,app,prev_btn,meta20902){
this.owner = owner;
this.app = app;
this.prev_btn = prev_btn;
this.meta20902 = meta20902;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.client.gallery.t20901.cljs$lang$type = true;
photosure.client.gallery.t20901.cljs$lang$ctorStr = "photosure.client.gallery/t20901";
photosure.client.gallery.t20901.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.client.gallery/t20901");
});
photosure.client.gallery.t20901.prototype.om$core$IRenderState$ = true;
photosure.client.gallery.t20901.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__20904){var self__ = this;
var map__20905 = p__20904;var map__20905__$1 = ((cljs.core.seq_QMARK_.call(null,map__20905))?cljs.core.apply.call(null,cljs.core.hash_map,map__20905):map__20905);var disabled = cljs.core.get.call(null,map__20905__$1,new cljs.core.Keyword(null,"disabled","disabled",1284845038));var slide_chan = cljs.core.get.call(null,map__20905__$1,new cljs.core.Keyword(null,"slide-chan","slide-chan",2056802656));var this$__$1 = this;return React.DOM.div({"onClick": (function (e){return cljs.core.async.put_BANG_.call(null,slide_chan,"prev");
}), "className": [cljs.core.str("btn"),cljs.core.str((cljs.core.truth_(disabled)?" disabled":null))].join(''), "id": "prev-btn"});
});
photosure.client.gallery.t20901.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20903){var self__ = this;
var _20903__$1 = this;return self__.meta20902;
});
photosure.client.gallery.t20901.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20903,meta20902__$1){var self__ = this;
var _20903__$1 = this;return (new photosure.client.gallery.t20901(self__.owner,self__.app,self__.prev_btn,meta20902__$1));
});
photosure.client.gallery.__GT_t20901 = (function __GT_t20901(owner__$1,app__$1,prev_btn__$1,meta20902){return (new photosure.client.gallery.t20901(owner__$1,app__$1,prev_btn__$1,meta20902));
});
}
return (new photosure.client.gallery.t20901(owner,app,prev_btn,null));
});
photosure.client.gallery.next_btn = (function next_btn(app,owner){if(typeof photosure.client.gallery.t20911 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.client.gallery.t20911 = (function (owner,app,next_btn,meta20912){
this.owner = owner;
this.app = app;
this.next_btn = next_btn;
this.meta20912 = meta20912;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.client.gallery.t20911.cljs$lang$type = true;
photosure.client.gallery.t20911.cljs$lang$ctorStr = "photosure.client.gallery/t20911";
photosure.client.gallery.t20911.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.client.gallery/t20911");
});
photosure.client.gallery.t20911.prototype.om$core$IRenderState$ = true;
photosure.client.gallery.t20911.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__20914){var self__ = this;
var map__20915 = p__20914;var map__20915__$1 = ((cljs.core.seq_QMARK_.call(null,map__20915))?cljs.core.apply.call(null,cljs.core.hash_map,map__20915):map__20915);var disabled = cljs.core.get.call(null,map__20915__$1,new cljs.core.Keyword(null,"disabled","disabled",1284845038));var slide_chan = cljs.core.get.call(null,map__20915__$1,new cljs.core.Keyword(null,"slide-chan","slide-chan",2056802656));var this$__$1 = this;return React.DOM.div({"onClick": (function (e){return cljs.core.async.put_BANG_.call(null,slide_chan,"next");
}), "className": [cljs.core.str("btn"),cljs.core.str((cljs.core.truth_(disabled)?" disabled":null))].join(''), "id": "next-btn"});
});
photosure.client.gallery.t20911.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20913){var self__ = this;
var _20913__$1 = this;return self__.meta20912;
});
photosure.client.gallery.t20911.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20913,meta20912__$1){var self__ = this;
var _20913__$1 = this;return (new photosure.client.gallery.t20911(self__.owner,self__.app,self__.next_btn,meta20912__$1));
});
photosure.client.gallery.__GT_t20911 = (function __GT_t20911(owner__$1,app__$1,next_btn__$1,meta20912){return (new photosure.client.gallery.t20911(owner__$1,app__$1,next_btn__$1,meta20912));
});
}
return (new photosure.client.gallery.t20911(owner,app,next_btn,null));
});
photosure.client.gallery.originate = (function originate(app,ndx,from){return om.core.update_BANG_.call(null,app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"photos","photos",4319837171),ndx,new cljs.core.Keyword(null,"pos","pos",1014015430)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [from], null));
});
photosure.client.gallery.transition = (function transition(app,ndx,to){return om.core.transact_BANG_.call(null,app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"photos","photos",4319837171),ndx,new cljs.core.Keyword(null,"pos","pos",1014015430)], null),(function (p1__20916_SHARP_){return cljs.core.conj.call(null,p1__20916_SHARP_,to);
}));
});
photosure.client.gallery.disappear = (function disappear(app,ndx){return om.core.update_BANG_.call(null,app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"photos","photos",4319837171),ndx,new cljs.core.Keyword(null,"pos","pos",1014015430)], null),cljs.core.PersistentVector.EMPTY);
});
photosure.client.gallery.gallery = (function gallery(app,owner){if(typeof photosure.client.gallery.t21022 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.client.gallery.t21022 = (function (owner,app,gallery,meta21023){
this.owner = owner;
this.app = app;
this.gallery = gallery;
this.meta21023 = meta21023;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.client.gallery.t21022.cljs$lang$type = true;
photosure.client.gallery.t21022.cljs$lang$ctorStr = "photosure.client.gallery/t21022";
photosure.client.gallery.t21022.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.client.gallery/t21022");
});
photosure.client.gallery.t21022.prototype.om$core$IRenderState$ = true;
photosure.client.gallery.t21022.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__21025){var self__ = this;
var map__21026 = p__21025;var map__21026__$1 = ((cljs.core.seq_QMARK_.call(null,map__21026))?cljs.core.apply.call(null,cljs.core.hash_map,map__21026):map__21026);var anim_in_progress = cljs.core.get.call(null,map__21026__$1,new cljs.core.Keyword(null,"anim-in-progress","anim-in-progress",3132057483));var slide_chan = cljs.core.get.call(null,map__21026__$1,new cljs.core.Keyword(null,"slide-chan","slide-chan",2056802656));var this$__$1 = this;return React.DOM.div({"id": "photo-gallery-container"},React.DOM.div({"id": "left-pane"},om.core.build.call(null,photosure.client.gallery.prev_btn,self__.app,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slide-chan","slide-chan",2056802656),slide_chan], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",1284845038),anim_in_progress], null)], null))),cljs.core.apply.call(null,om.dom.div,{"id": "photo-gallery"},om.core.build_all.call(null,photosure.client.gallery.photo_view,cljs.core.filter.call(null,(function (photo){return !(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(photo)));
}),new cljs.core.Keyword(null,"photos","photos",4319837171).cljs$core$IFn$_invoke$arity$1(self__.app)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"photo","photo",1120547236)], null))),React.DOM.div({"id": "right-pane"},om.core.build.call(null,photosure.client.gallery.next_btn,self__.app,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slide-chan","slide-chan",2056802656),slide_chan], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",1284845038),anim_in_progress], null)], null))));
});
photosure.client.gallery.t21022.prototype.om$core$IWillMount$ = true;
photosure.client.gallery.t21022.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var slide_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"slide-chan","slide-chan",2056802656));var c__7523__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7524__auto__ = (function (){var switch__7508__auto__ = (function (state_21104){var state_val_21105 = (state_21104[1]);if((state_val_21105 === 9))
{var inst_21088 = (state_21104[2]);var inst_21089 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"anim-in-progress","anim-in-progress",3132057483),false);var inst_21090 = cljs.core.deref.call(null,self__.app);var inst_21091 = new cljs.core.Keyword(null,"curr","curr",1016969636).cljs$core$IFn$_invoke$arity$1(inst_21090);var inst_21092 = cljs.core.get.call(null,inst_21091,0);var inst_21093 = photosure.client.gallery.originate.call(null,self__.app,inst_21092,"left");var inst_21094 = cljs.core.deref.call(null,self__.app);var inst_21095 = new cljs.core.Keyword(null,"curr","curr",1016969636).cljs$core$IFn$_invoke$arity$1(inst_21094);var inst_21096 = cljs.core.get.call(null,inst_21095,1);var inst_21097 = photosure.client.gallery.originate.call(null,self__.app,inst_21096,"center");var state_21104__$1 = (function (){var statearr_21106 = state_21104;(statearr_21106[7] = inst_21093);
(statearr_21106[8] = inst_21089);
(statearr_21106[9] = inst_21088);
return statearr_21106;
})();var statearr_21107_21125 = state_21104__$1;(statearr_21107_21125[2] = inst_21097);
(statearr_21107_21125[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21105 === 8))
{var inst_21056 = (state_21104[2]);var inst_21057 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"anim-in-progress","anim-in-progress",3132057483),false);var inst_21058 = cljs.core.deref.call(null,self__.app);var inst_21059 = new cljs.core.Keyword(null,"curr","curr",1016969636).cljs$core$IFn$_invoke$arity$1(inst_21058);var inst_21060 = cljs.core.get.call(null,inst_21059,1);var inst_21061 = photosure.client.gallery.originate.call(null,self__.app,inst_21060,"center");var inst_21062 = cljs.core.deref.call(null,self__.app);var inst_21063 = new cljs.core.Keyword(null,"curr","curr",1016969636).cljs$core$IFn$_invoke$arity$1(inst_21062);var inst_21064 = cljs.core.get.call(null,inst_21063,2);var inst_21065 = photosure.client.gallery.originate.call(null,self__.app,inst_21064,"right");var state_21104__$1 = (function (){var statearr_21108 = state_21104;(statearr_21108[10] = inst_21057);
(statearr_21108[11] = inst_21056);
(statearr_21108[12] = inst_21061);
return statearr_21108;
})();var statearr_21109_21126 = state_21104__$1;(statearr_21109_21126[2] = inst_21065);
(statearr_21109_21126[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21105 === 7))
{var inst_21099 = (state_21104[2]);var state_21104__$1 = (function (){var statearr_21110 = state_21104;(statearr_21110[13] = inst_21099);
return statearr_21110;
})();var statearr_21111_21127 = state_21104__$1;(statearr_21111_21127[2] = null);
(statearr_21111_21127[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21105 === 6))
{var inst_21030 = (state_21104[14]);var inst_21067 = cljs.core.deref.call(null,self__.app);var inst_21068 = new cljs.core.Keyword(null,"curr","curr",1016969636).cljs$core$IFn$_invoke$arity$1(inst_21067);var inst_21069 = cljs.core.get.call(null,inst_21068,0);var inst_21070 = photosure.client.gallery.disappear.call(null,self__.app,inst_21069);var inst_21071 = (function (){var len = inst_21030;return ((function (len,inst_21030,inst_21067,inst_21068,inst_21069,inst_21070,state_val_21105){
return (function (___$2){return cljs.core.apply.call(null,cljs.core.vector,cljs.core.map.call(null,((function (len,inst_21030,inst_21067,inst_21068,inst_21069,inst_21070,state_val_21105){
return (function (p1__20918_SHARP_){return cljs.core.mod.call(null,(p1__20918_SHARP_ + 1),len);
});})(len,inst_21030,inst_21067,inst_21068,inst_21069,inst_21070,state_val_21105))
,___$2));
});
;})(len,inst_21030,inst_21067,inst_21068,inst_21069,inst_21070,state_val_21105))
})();var inst_21072 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"curr","curr",1016969636),inst_21071);var inst_21073 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"anim-in-progress","anim-in-progress",3132057483),true);var inst_21074 = cljs.core.deref.call(null,self__.app);var inst_21075 = new cljs.core.Keyword(null,"curr","curr",1016969636).cljs$core$IFn$_invoke$arity$1(inst_21074);var inst_21076 = cljs.core.get.call(null,inst_21075,0);var inst_21077 = photosure.client.gallery.transition.call(null,self__.app,inst_21076,"left");var inst_21078 = cljs.core.deref.call(null,self__.app);var inst_21079 = new cljs.core.Keyword(null,"curr","curr",1016969636).cljs$core$IFn$_invoke$arity$1(inst_21078);var inst_21080 = cljs.core.get.call(null,inst_21079,1);var inst_21081 = photosure.client.gallery.transition.call(null,self__.app,inst_21080,"center");var inst_21082 = cljs.core.deref.call(null,self__.app);var inst_21083 = new cljs.core.Keyword(null,"curr","curr",1016969636).cljs$core$IFn$_invoke$arity$1(inst_21082);var inst_21084 = cljs.core.get.call(null,inst_21083,2);var inst_21085 = photosure.client.gallery.originate.call(null,self__.app,inst_21084,"right");var inst_21086 = cljs.core.async.timeout.call(null,1000);var state_21104__$1 = (function (){var statearr_21112 = state_21104;(statearr_21112[15] = inst_21073);
(statearr_21112[16] = inst_21070);
(statearr_21112[17] = inst_21072);
(statearr_21112[18] = inst_21085);
(statearr_21112[19] = inst_21081);
(statearr_21112[20] = inst_21077);
return statearr_21112;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21104__$1,9,inst_21086);
} else
{if((state_val_21105 === 5))
{var inst_21030 = (state_21104[14]);var inst_21035 = cljs.core.deref.call(null,self__.app);var inst_21036 = new cljs.core.Keyword(null,"curr","curr",1016969636).cljs$core$IFn$_invoke$arity$1(inst_21035);var inst_21037 = cljs.core.get.call(null,inst_21036,2);var inst_21038 = photosure.client.gallery.disappear.call(null,self__.app,inst_21037);var inst_21039 = (function (){var len = inst_21030;return ((function (len,inst_21030,inst_21035,inst_21036,inst_21037,inst_21038,state_val_21105){
return (function (___$2){return cljs.core.apply.call(null,cljs.core.vector,cljs.core.map.call(null,((function (len,inst_21030,inst_21035,inst_21036,inst_21037,inst_21038,state_val_21105){
return (function (p1__20917_SHARP_){return cljs.core.mod.call(null,(p1__20917_SHARP_ - 1),len);
});})(len,inst_21030,inst_21035,inst_21036,inst_21037,inst_21038,state_val_21105))
,___$2));
});
;})(len,inst_21030,inst_21035,inst_21036,inst_21037,inst_21038,state_val_21105))
})();var inst_21040 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"curr","curr",1016969636),inst_21039);var inst_21041 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"anim-in-progress","anim-in-progress",3132057483),true);var inst_21042 = cljs.core.deref.call(null,self__.app);var inst_21043 = new cljs.core.Keyword(null,"curr","curr",1016969636).cljs$core$IFn$_invoke$arity$1(inst_21042);var inst_21044 = cljs.core.get.call(null,inst_21043,0);var inst_21045 = photosure.client.gallery.originate.call(null,self__.app,inst_21044,"left");var inst_21046 = cljs.core.deref.call(null,self__.app);var inst_21047 = new cljs.core.Keyword(null,"curr","curr",1016969636).cljs$core$IFn$_invoke$arity$1(inst_21046);var inst_21048 = cljs.core.get.call(null,inst_21047,1);var inst_21049 = photosure.client.gallery.transition.call(null,self__.app,inst_21048,"center");var inst_21050 = cljs.core.deref.call(null,self__.app);var inst_21051 = new cljs.core.Keyword(null,"curr","curr",1016969636).cljs$core$IFn$_invoke$arity$1(inst_21050);var inst_21052 = cljs.core.get.call(null,inst_21051,2);var inst_21053 = photosure.client.gallery.transition.call(null,self__.app,inst_21052,"right");var inst_21054 = cljs.core.async.timeout.call(null,1000);var state_21104__$1 = (function (){var statearr_21113 = state_21104;(statearr_21113[21] = inst_21053);
(statearr_21113[22] = inst_21049);
(statearr_21113[23] = inst_21038);
(statearr_21113[24] = inst_21045);
(statearr_21113[25] = inst_21040);
(statearr_21113[26] = inst_21041);
return statearr_21113;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21104__$1,8,inst_21054);
} else
{if((state_val_21105 === 4))
{var inst_21032 = (state_21104[2]);var inst_21033 = cljs.core._EQ_.call(null,inst_21032,"next");var state_21104__$1 = state_21104;if(inst_21033)
{var statearr_21114_21128 = state_21104__$1;(statearr_21114_21128[1] = 5);
} else
{var statearr_21115_21129 = state_21104__$1;(statearr_21115_21129[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21105 === 3))
{var inst_21102 = (state_21104[2]);var state_21104__$1 = state_21104;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21104__$1,inst_21102);
} else
{if((state_val_21105 === 2))
{var inst_21028 = cljs.core.deref.call(null,self__.app);var inst_21029 = new cljs.core.Keyword(null,"photos","photos",4319837171).cljs$core$IFn$_invoke$arity$1(inst_21028);var inst_21030 = cljs.core.count.call(null,inst_21029);var state_21104__$1 = (function (){var statearr_21116 = state_21104;(statearr_21116[14] = inst_21030);
return statearr_21116;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21104__$1,4,slide_chan);
} else
{if((state_val_21105 === 1))
{var state_21104__$1 = state_21104;var statearr_21117_21130 = state_21104__$1;(statearr_21117_21130[2] = null);
(statearr_21117_21130[1] = 2);
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
}
});return ((function (switch__7508__auto__){
return (function() {
var state_machine__7509__auto__ = null;
var state_machine__7509__auto____0 = (function (){var statearr_21121 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21121[0] = state_machine__7509__auto__);
(statearr_21121[1] = 1);
return statearr_21121;
});
var state_machine__7509__auto____1 = (function (state_21104){while(true){
var ret_value__7510__auto__ = (function (){try{while(true){
var result__7511__auto__ = switch__7508__auto__.call(null,state_21104);if(cljs.core.keyword_identical_QMARK_.call(null,result__7511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7511__auto__;
}
break;
}
}catch (e21122){if((e21122 instanceof Object))
{var ex__7512__auto__ = e21122;var statearr_21123_21131 = state_21104;(statearr_21123_21131[5] = ex__7512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21104);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21122;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21132 = state_21104;
state_21104 = G__21132;
continue;
}
} else
{return ret_value__7510__auto__;
}
break;
}
});
state_machine__7509__auto__ = function(state_21104){
switch(arguments.length){
case 0:
return state_machine__7509__auto____0.call(this);
case 1:
return state_machine__7509__auto____1.call(this,state_21104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7509__auto____0;
state_machine__7509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7509__auto____1;
return state_machine__7509__auto__;
})()
;})(switch__7508__auto__))
})();var state__7525__auto__ = (function (){var statearr_21124 = f__7524__auto__.call(null);(statearr_21124[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7523__auto__);
return statearr_21124;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7525__auto__);
}));
return c__7523__auto__;
});
photosure.client.gallery.t21022.prototype.om$core$IInitState$ = true;
photosure.client.gallery.t21022.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"slide-chan","slide-chan",2056802656),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"anim-in-progress","anim-in-progress",3132057483),false], null);
});
photosure.client.gallery.t21022.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21024){var self__ = this;
var _21024__$1 = this;return self__.meta21023;
});
photosure.client.gallery.t21022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21024,meta21023__$1){var self__ = this;
var _21024__$1 = this;return (new photosure.client.gallery.t21022(self__.owner,self__.app,self__.gallery,meta21023__$1));
});
photosure.client.gallery.__GT_t21022 = (function __GT_t21022(owner__$1,app__$1,gallery__$1,meta21023){return (new photosure.client.gallery.t21022(owner__$1,app__$1,gallery__$1,meta21023));
});
}
return (new photosure.client.gallery.t21022(owner,app,gallery,null));
});
photosure.client.gallery.render = (function render(){return om.core.root.call(null,photosure.client.gallery.gallery,photosure.client.gallery.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("dynamic-content")], null));
});

//# sourceMappingURL=gallery.js.map