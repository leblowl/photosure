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
photosure.client.gallery.filter_indexed = (function filter_indexed(f,coll){return cljs.core.map.call(null,cljs.core.second,cljs.core.filter.call(null,(function (p__15368){var vec__15369 = p__15368;var ndx = cljs.core.nth.call(null,vec__15369,0,null);var item = cljs.core.nth.call(null,vec__15369,1,null);return f.call(null,ndx,item);
}),cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),coll)));
});
photosure.client.gallery.photo = (function photo(filepath,pos){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"photo","photo",1120547236),filepath,new cljs.core.Keyword(null,"pos","pos",1014015430),pos], null);
});
photosure.client.gallery.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"photos","photos",4319837171),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [photosure.client.gallery.photo.call(null,"images/cpleblow1.jpg",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["left"], null)),photosure.client.gallery.photo.call(null,"images/cpleblow2.jpg",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["center"], null)),photosure.client.gallery.photo.call(null,"images/cpleblow3.jpg",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["right"], null)),photosure.client.gallery.photo.call(null,"images/cpleblow4.jpg",cljs.core.PersistentVector.EMPTY),photosure.client.gallery.photo.call(null,"images/cpleblow5.jpg",cljs.core.PersistentVector.EMPTY),photosure.client.gallery.photo.call(null,"images/cpleblow6.jpg",cljs.core.PersistentVector.EMPTY)], null),new cljs.core.Keyword(null,"curr","curr",1016969636),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,1,2], null)], null));
photosure.client.gallery.photo_view = (function photo_view(photo,owner){if(typeof photosure.client.gallery.t15373 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.client.gallery.t15373 = (function (owner,photo,photo_view,meta15374){
this.owner = owner;
this.photo = photo;
this.photo_view = photo_view;
this.meta15374 = meta15374;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.client.gallery.t15373.cljs$lang$type = true;
photosure.client.gallery.t15373.cljs$lang$ctorStr = "photosure.client.gallery/t15373";
photosure.client.gallery.t15373.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.client.gallery/t15373");
});
photosure.client.gallery.t15373.prototype.om$core$IRender$ = true;
photosure.client.gallery.t15373.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.img({"className": [cljs.core.str("photo "),cljs.core.str(clojure.string.join.call(null,"-",cljs.core.take_last.call(null,2,new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(self__.photo))))].join(''), "src": new cljs.core.Keyword(null,"photo","photo",1120547236).cljs$core$IFn$_invoke$arity$1(self__.photo)});
});
photosure.client.gallery.t15373.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15375){var self__ = this;
var _15375__$1 = this;return self__.meta15374;
});
photosure.client.gallery.t15373.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15375,meta15374__$1){var self__ = this;
var _15375__$1 = this;return (new photosure.client.gallery.t15373(self__.owner,self__.photo,self__.photo_view,meta15374__$1));
});
photosure.client.gallery.__GT_t15373 = (function __GT_t15373(owner__$1,photo__$1,photo_view__$1,meta15374){return (new photosure.client.gallery.t15373(owner__$1,photo__$1,photo_view__$1,meta15374));
});
}
return (new photosure.client.gallery.t15373(owner,photo,photo_view,null));
});
photosure.client.gallery.prev_btn = (function prev_btn(app,owner){if(typeof photosure.client.gallery.t15381 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.client.gallery.t15381 = (function (owner,app,prev_btn,meta15382){
this.owner = owner;
this.app = app;
this.prev_btn = prev_btn;
this.meta15382 = meta15382;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.client.gallery.t15381.cljs$lang$type = true;
photosure.client.gallery.t15381.cljs$lang$ctorStr = "photosure.client.gallery/t15381";
photosure.client.gallery.t15381.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.client.gallery/t15381");
});
photosure.client.gallery.t15381.prototype.om$core$IRenderState$ = true;
photosure.client.gallery.t15381.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__15384){var self__ = this;
var map__15385 = p__15384;var map__15385__$1 = ((cljs.core.seq_QMARK_.call(null,map__15385))?cljs.core.apply.call(null,cljs.core.hash_map,map__15385):map__15385);var disabled = cljs.core.get.call(null,map__15385__$1,new cljs.core.Keyword(null,"disabled","disabled",1284845038));var slide_chan = cljs.core.get.call(null,map__15385__$1,new cljs.core.Keyword(null,"slide-chan","slide-chan",2056802656));var this$__$1 = this;return React.DOM.div({"onClick": (function (e){return cljs.core.async.put_BANG_.call(null,slide_chan,"prev");
}), "className": [cljs.core.str("btn"),cljs.core.str((cljs.core.truth_(disabled)?" disabled":null))].join(''), "id": "prev-btn"});
});
photosure.client.gallery.t15381.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15383){var self__ = this;
var _15383__$1 = this;return self__.meta15382;
});
photosure.client.gallery.t15381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15383,meta15382__$1){var self__ = this;
var _15383__$1 = this;return (new photosure.client.gallery.t15381(self__.owner,self__.app,self__.prev_btn,meta15382__$1));
});
photosure.client.gallery.__GT_t15381 = (function __GT_t15381(owner__$1,app__$1,prev_btn__$1,meta15382){return (new photosure.client.gallery.t15381(owner__$1,app__$1,prev_btn__$1,meta15382));
});
}
return (new photosure.client.gallery.t15381(owner,app,prev_btn,null));
});
photosure.client.gallery.next_btn = (function next_btn(app,owner){if(typeof photosure.client.gallery.t15391 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.client.gallery.t15391 = (function (owner,app,next_btn,meta15392){
this.owner = owner;
this.app = app;
this.next_btn = next_btn;
this.meta15392 = meta15392;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.client.gallery.t15391.cljs$lang$type = true;
photosure.client.gallery.t15391.cljs$lang$ctorStr = "photosure.client.gallery/t15391";
photosure.client.gallery.t15391.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.client.gallery/t15391");
});
photosure.client.gallery.t15391.prototype.om$core$IRenderState$ = true;
photosure.client.gallery.t15391.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__15394){var self__ = this;
var map__15395 = p__15394;var map__15395__$1 = ((cljs.core.seq_QMARK_.call(null,map__15395))?cljs.core.apply.call(null,cljs.core.hash_map,map__15395):map__15395);var disabled = cljs.core.get.call(null,map__15395__$1,new cljs.core.Keyword(null,"disabled","disabled",1284845038));var slide_chan = cljs.core.get.call(null,map__15395__$1,new cljs.core.Keyword(null,"slide-chan","slide-chan",2056802656));var this$__$1 = this;return React.DOM.div({"onClick": (function (e){return cljs.core.async.put_BANG_.call(null,slide_chan,"next");
}), "className": [cljs.core.str("btn"),cljs.core.str((cljs.core.truth_(disabled)?" disabled":null))].join(''), "id": "next-btn"});
});
photosure.client.gallery.t15391.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15393){var self__ = this;
var _15393__$1 = this;return self__.meta15392;
});
photosure.client.gallery.t15391.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15393,meta15392__$1){var self__ = this;
var _15393__$1 = this;return (new photosure.client.gallery.t15391(self__.owner,self__.app,self__.next_btn,meta15392__$1));
});
photosure.client.gallery.__GT_t15391 = (function __GT_t15391(owner__$1,app__$1,next_btn__$1,meta15392){return (new photosure.client.gallery.t15391(owner__$1,app__$1,next_btn__$1,meta15392));
});
}
return (new photosure.client.gallery.t15391(owner,app,next_btn,null));
});
photosure.client.gallery.originate = (function originate(app,ndx,from){return om.core.update_BANG_.call(null,app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"photos","photos",4319837171),ndx,new cljs.core.Keyword(null,"pos","pos",1014015430)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [from], null));
});
photosure.client.gallery.transition = (function transition(app,ndx,to){return om.core.transact_BANG_.call(null,app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"photos","photos",4319837171),ndx,new cljs.core.Keyword(null,"pos","pos",1014015430)], null),(function (p1__15396_SHARP_){return cljs.core.conj.call(null,p1__15396_SHARP_,to);
}));
});
photosure.client.gallery.disappear = (function disappear(app,ndx){return om.core.update_BANG_.call(null,app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"photos","photos",4319837171),ndx,new cljs.core.Keyword(null,"pos","pos",1014015430)], null),cljs.core.PersistentVector.EMPTY);
});
photosure.client.gallery.gallery = (function gallery(app,owner){if(typeof photosure.client.gallery.t15502 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.client.gallery.t15502 = (function (owner,app,gallery,meta15503){
this.owner = owner;
this.app = app;
this.gallery = gallery;
this.meta15503 = meta15503;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.client.gallery.t15502.cljs$lang$type = true;
photosure.client.gallery.t15502.cljs$lang$ctorStr = "photosure.client.gallery/t15502";
photosure.client.gallery.t15502.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.client.gallery/t15502");
});
photosure.client.gallery.t15502.prototype.om$core$IRenderState$ = true;
photosure.client.gallery.t15502.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__15505){var self__ = this;
var map__15506 = p__15505;var map__15506__$1 = ((cljs.core.seq_QMARK_.call(null,map__15506))?cljs.core.apply.call(null,cljs.core.hash_map,map__15506):map__15506);var anim_in_progress = cljs.core.get.call(null,map__15506__$1,new cljs.core.Keyword(null,"anim-in-progress","anim-in-progress",3132057483));var slide_chan = cljs.core.get.call(null,map__15506__$1,new cljs.core.Keyword(null,"slide-chan","slide-chan",2056802656));var this$__$1 = this;return React.DOM.div({"id": "photo-gallery-container"},React.DOM.div({"id": "left-pane"},om.core.build.call(null,photosure.client.gallery.prev_btn,self__.app,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slide-chan","slide-chan",2056802656),slide_chan], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",1284845038),anim_in_progress], null)], null))),cljs.core.apply.call(null,om.dom.div,{"id": "photo-gallery"},om.core.build_all.call(null,photosure.client.gallery.photo_view,cljs.core.filter.call(null,(function (photo){return !(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(photo)));
}),new cljs.core.Keyword(null,"photos","photos",4319837171).cljs$core$IFn$_invoke$arity$1(self__.app)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"photo","photo",1120547236)], null))),React.DOM.div({"id": "right-pane"},om.core.build.call(null,photosure.client.gallery.next_btn,self__.app,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slide-chan","slide-chan",2056802656),slide_chan], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",1284845038),anim_in_progress], null)], null))));
});
photosure.client.gallery.t15502.prototype.om$core$IWillMount$ = true;
photosure.client.gallery.t15502.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var slide_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"slide-chan","slide-chan",2056802656));var c__6659__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6660__auto__ = (function (){var switch__6644__auto__ = (function (state_15584){var state_val_15585 = (state_15584[1]);if((state_val_15585 === 9))
{var inst_15568 = (state_15584[2]);var inst_15569 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"anim-in-progress","anim-in-progress",3132057483),false);var inst_15570 = cljs.core.deref.call(null,self__.app);var inst_15571 = new cljs.core.Keyword(null,"curr","curr",1016969636).cljs$core$IFn$_invoke$arity$1(inst_15570);var inst_15572 = cljs.core.get.call(null,inst_15571,0);var inst_15573 = photosure.client.gallery.originate.call(null,self__.app,inst_15572,"left");var inst_15574 = cljs.core.deref.call(null,self__.app);var inst_15575 = new cljs.core.Keyword(null,"curr","curr",1016969636).cljs$core$IFn$_invoke$arity$1(inst_15574);var inst_15576 = cljs.core.get.call(null,inst_15575,1);var inst_15577 = photosure.client.gallery.originate.call(null,self__.app,inst_15576,"center");var state_15584__$1 = (function (){var statearr_15586 = state_15584;(statearr_15586[7] = inst_15573);
(statearr_15586[8] = inst_15569);
(statearr_15586[9] = inst_15568);
return statearr_15586;
})();var statearr_15587_15605 = state_15584__$1;(statearr_15587_15605[2] = inst_15577);
(statearr_15587_15605[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15585 === 8))
{var inst_15536 = (state_15584[2]);var inst_15537 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"anim-in-progress","anim-in-progress",3132057483),false);var inst_15538 = cljs.core.deref.call(null,self__.app);var inst_15539 = new cljs.core.Keyword(null,"curr","curr",1016969636).cljs$core$IFn$_invoke$arity$1(inst_15538);var inst_15540 = cljs.core.get.call(null,inst_15539,1);var inst_15541 = photosure.client.gallery.originate.call(null,self__.app,inst_15540,"center");var inst_15542 = cljs.core.deref.call(null,self__.app);var inst_15543 = new cljs.core.Keyword(null,"curr","curr",1016969636).cljs$core$IFn$_invoke$arity$1(inst_15542);var inst_15544 = cljs.core.get.call(null,inst_15543,2);var inst_15545 = photosure.client.gallery.originate.call(null,self__.app,inst_15544,"right");var state_15584__$1 = (function (){var statearr_15588 = state_15584;(statearr_15588[10] = inst_15537);
(statearr_15588[11] = inst_15541);
(statearr_15588[12] = inst_15536);
return statearr_15588;
})();var statearr_15589_15606 = state_15584__$1;(statearr_15589_15606[2] = inst_15545);
(statearr_15589_15606[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15585 === 7))
{var inst_15579 = (state_15584[2]);var state_15584__$1 = (function (){var statearr_15590 = state_15584;(statearr_15590[13] = inst_15579);
return statearr_15590;
})();var statearr_15591_15607 = state_15584__$1;(statearr_15591_15607[2] = null);
(statearr_15591_15607[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15585 === 6))
{var inst_15510 = (state_15584[14]);var inst_15547 = cljs.core.deref.call(null,self__.app);var inst_15548 = new cljs.core.Keyword(null,"curr","curr",1016969636).cljs$core$IFn$_invoke$arity$1(inst_15547);var inst_15549 = cljs.core.get.call(null,inst_15548,0);var inst_15550 = photosure.client.gallery.disappear.call(null,self__.app,inst_15549);var inst_15551 = (function (){var len = inst_15510;return ((function (len,inst_15510,inst_15547,inst_15548,inst_15549,inst_15550,state_val_15585){
return (function (___$2){return cljs.core.apply.call(null,cljs.core.vector,cljs.core.map.call(null,((function (len,inst_15510,inst_15547,inst_15548,inst_15549,inst_15550,state_val_15585){
return (function (p1__15398_SHARP_){return cljs.core.mod.call(null,(p1__15398_SHARP_ + 1),len);
});})(len,inst_15510,inst_15547,inst_15548,inst_15549,inst_15550,state_val_15585))
,___$2));
});
;})(len,inst_15510,inst_15547,inst_15548,inst_15549,inst_15550,state_val_15585))
})();var inst_15552 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"curr","curr",1016969636),inst_15551);var inst_15553 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"anim-in-progress","anim-in-progress",3132057483),true);var inst_15554 = cljs.core.deref.call(null,self__.app);var inst_15555 = new cljs.core.Keyword(null,"curr","curr",1016969636).cljs$core$IFn$_invoke$arity$1(inst_15554);var inst_15556 = cljs.core.get.call(null,inst_15555,0);var inst_15557 = photosure.client.gallery.transition.call(null,self__.app,inst_15556,"left");var inst_15558 = cljs.core.deref.call(null,self__.app);var inst_15559 = new cljs.core.Keyword(null,"curr","curr",1016969636).cljs$core$IFn$_invoke$arity$1(inst_15558);var inst_15560 = cljs.core.get.call(null,inst_15559,1);var inst_15561 = photosure.client.gallery.transition.call(null,self__.app,inst_15560,"center");var inst_15562 = cljs.core.deref.call(null,self__.app);var inst_15563 = new cljs.core.Keyword(null,"curr","curr",1016969636).cljs$core$IFn$_invoke$arity$1(inst_15562);var inst_15564 = cljs.core.get.call(null,inst_15563,2);var inst_15565 = photosure.client.gallery.originate.call(null,self__.app,inst_15564,"right");var inst_15566 = cljs.core.async.timeout.call(null,1000);var state_15584__$1 = (function (){var statearr_15592 = state_15584;(statearr_15592[15] = inst_15553);
(statearr_15592[16] = inst_15552);
(statearr_15592[17] = inst_15550);
(statearr_15592[18] = inst_15565);
(statearr_15592[19] = inst_15557);
(statearr_15592[20] = inst_15561);
return statearr_15592;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15584__$1,9,inst_15566);
} else
{if((state_val_15585 === 5))
{var inst_15510 = (state_15584[14]);var inst_15515 = cljs.core.deref.call(null,self__.app);var inst_15516 = new cljs.core.Keyword(null,"curr","curr",1016969636).cljs$core$IFn$_invoke$arity$1(inst_15515);var inst_15517 = cljs.core.get.call(null,inst_15516,2);var inst_15518 = photosure.client.gallery.disappear.call(null,self__.app,inst_15517);var inst_15519 = (function (){var len = inst_15510;return ((function (len,inst_15510,inst_15515,inst_15516,inst_15517,inst_15518,state_val_15585){
return (function (___$2){return cljs.core.apply.call(null,cljs.core.vector,cljs.core.map.call(null,((function (len,inst_15510,inst_15515,inst_15516,inst_15517,inst_15518,state_val_15585){
return (function (p1__15397_SHARP_){return cljs.core.mod.call(null,(p1__15397_SHARP_ - 1),len);
});})(len,inst_15510,inst_15515,inst_15516,inst_15517,inst_15518,state_val_15585))
,___$2));
});
;})(len,inst_15510,inst_15515,inst_15516,inst_15517,inst_15518,state_val_15585))
})();var inst_15520 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"curr","curr",1016969636),inst_15519);var inst_15521 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"anim-in-progress","anim-in-progress",3132057483),true);var inst_15522 = cljs.core.deref.call(null,self__.app);var inst_15523 = new cljs.core.Keyword(null,"curr","curr",1016969636).cljs$core$IFn$_invoke$arity$1(inst_15522);var inst_15524 = cljs.core.get.call(null,inst_15523,0);var inst_15525 = photosure.client.gallery.originate.call(null,self__.app,inst_15524,"left");var inst_15526 = cljs.core.deref.call(null,self__.app);var inst_15527 = new cljs.core.Keyword(null,"curr","curr",1016969636).cljs$core$IFn$_invoke$arity$1(inst_15526);var inst_15528 = cljs.core.get.call(null,inst_15527,1);var inst_15529 = photosure.client.gallery.transition.call(null,self__.app,inst_15528,"center");var inst_15530 = cljs.core.deref.call(null,self__.app);var inst_15531 = new cljs.core.Keyword(null,"curr","curr",1016969636).cljs$core$IFn$_invoke$arity$1(inst_15530);var inst_15532 = cljs.core.get.call(null,inst_15531,2);var inst_15533 = photosure.client.gallery.transition.call(null,self__.app,inst_15532,"right");var inst_15534 = cljs.core.async.timeout.call(null,1000);var state_15584__$1 = (function (){var statearr_15593 = state_15584;(statearr_15593[21] = inst_15529);
(statearr_15593[22] = inst_15533);
(statearr_15593[23] = inst_15525);
(statearr_15593[24] = inst_15518);
(statearr_15593[25] = inst_15520);
(statearr_15593[26] = inst_15521);
return statearr_15593;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15584__$1,8,inst_15534);
} else
{if((state_val_15585 === 4))
{var inst_15512 = (state_15584[2]);var inst_15513 = cljs.core._EQ_.call(null,inst_15512,"next");var state_15584__$1 = state_15584;if(inst_15513)
{var statearr_15594_15608 = state_15584__$1;(statearr_15594_15608[1] = 5);
} else
{var statearr_15595_15609 = state_15584__$1;(statearr_15595_15609[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15585 === 3))
{var inst_15582 = (state_15584[2]);var state_15584__$1 = state_15584;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15584__$1,inst_15582);
} else
{if((state_val_15585 === 2))
{var inst_15508 = cljs.core.deref.call(null,self__.app);var inst_15509 = new cljs.core.Keyword(null,"photos","photos",4319837171).cljs$core$IFn$_invoke$arity$1(inst_15508);var inst_15510 = cljs.core.count.call(null,inst_15509);var state_15584__$1 = (function (){var statearr_15596 = state_15584;(statearr_15596[14] = inst_15510);
return statearr_15596;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15584__$1,4,slide_chan);
} else
{if((state_val_15585 === 1))
{var state_15584__$1 = state_15584;var statearr_15597_15610 = state_15584__$1;(statearr_15597_15610[2] = null);
(statearr_15597_15610[1] = 2);
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
});return ((function (switch__6644__auto__){
return (function() {
var state_machine__6645__auto__ = null;
var state_machine__6645__auto____0 = (function (){var statearr_15601 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15601[0] = state_machine__6645__auto__);
(statearr_15601[1] = 1);
return statearr_15601;
});
var state_machine__6645__auto____1 = (function (state_15584){while(true){
var ret_value__6646__auto__ = (function (){try{while(true){
var result__6647__auto__ = switch__6644__auto__.call(null,state_15584);if(cljs.core.keyword_identical_QMARK_.call(null,result__6647__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6647__auto__;
}
break;
}
}catch (e15602){if((e15602 instanceof Object))
{var ex__6648__auto__ = e15602;var statearr_15603_15611 = state_15584;(statearr_15603_15611[5] = ex__6648__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15584);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15602;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6646__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15612 = state_15584;
state_15584 = G__15612;
continue;
}
} else
{return ret_value__6646__auto__;
}
break;
}
});
state_machine__6645__auto__ = function(state_15584){
switch(arguments.length){
case 0:
return state_machine__6645__auto____0.call(this);
case 1:
return state_machine__6645__auto____1.call(this,state_15584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6645__auto____0;
state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6645__auto____1;
return state_machine__6645__auto__;
})()
;})(switch__6644__auto__))
})();var state__6661__auto__ = (function (){var statearr_15604 = f__6660__auto__.call(null);(statearr_15604[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6659__auto__);
return statearr_15604;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6661__auto__);
}));
return c__6659__auto__;
});
photosure.client.gallery.t15502.prototype.om$core$IInitState$ = true;
photosure.client.gallery.t15502.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"slide-chan","slide-chan",2056802656),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"anim-in-progress","anim-in-progress",3132057483),false], null);
});
photosure.client.gallery.t15502.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15504){var self__ = this;
var _15504__$1 = this;return self__.meta15503;
});
photosure.client.gallery.t15502.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15504,meta15503__$1){var self__ = this;
var _15504__$1 = this;return (new photosure.client.gallery.t15502(self__.owner,self__.app,self__.gallery,meta15503__$1));
});
photosure.client.gallery.__GT_t15502 = (function __GT_t15502(owner__$1,app__$1,gallery__$1,meta15503){return (new photosure.client.gallery.t15502(owner__$1,app__$1,gallery__$1,meta15503));
});
}
return (new photosure.client.gallery.t15502(owner,app,gallery,null));
});
photosure.client.gallery.render = (function render(){return om.core.root.call(null,photosure.client.gallery.gallery,photosure.client.gallery.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("dynamic-content")], null));
});

//# sourceMappingURL=gallery.js.map