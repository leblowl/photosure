// Compiled by ClojureScript 0.0-2173
goog.provide('photosure.client.gallery');
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
photosure.client.gallery.photo = (function photo(filepath,pos){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"photo","photo",1120547236),filepath,new cljs.core.Keyword(null,"pos","pos",1014015430),pos], null);
});
photosure.client.gallery.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"photos","photos",4319837171),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [photosure.client.gallery.photo.call(null,"images/cpleblow1.jpg",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["left"], null)),photosure.client.gallery.photo.call(null,"images/cpleblow2.jpg",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["center"], null)),photosure.client.gallery.photo.call(null,"images/cpleblow3.jpg",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["right"], null)),photosure.client.gallery.photo.call(null,"images/cpleblow4.jpg",cljs.core.PersistentVector.EMPTY),photosure.client.gallery.photo.call(null,"images/cpleblow5.jpg",cljs.core.PersistentVector.EMPTY),photosure.client.gallery.photo.call(null,"images/cpleblow6.jpg",cljs.core.PersistentVector.EMPTY)], null),new cljs.core.Keyword(null,"curr","curr",1016969636),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,1,2], null)], null));
photosure.client.gallery.photo_view = (function photo_view(photo,owner){if(typeof photosure.client.gallery.t9342 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.client.gallery.t9342 = (function (owner,photo,photo_view,meta9343){
this.owner = owner;
this.photo = photo;
this.photo_view = photo_view;
this.meta9343 = meta9343;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.client.gallery.t9342.cljs$lang$type = true;
photosure.client.gallery.t9342.cljs$lang$ctorStr = "photosure.client.gallery/t9342";
photosure.client.gallery.t9342.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.client.gallery/t9342");
});
photosure.client.gallery.t9342.prototype.om$core$IRender$ = true;
photosure.client.gallery.t9342.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": [cljs.core.str("frame "),cljs.core.str(((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(self__.photo)))?"hidden":cljs.core.get.call(null,new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(self__.photo),0)))].join('')},React.DOM.img({"className": "photo", "src": new cljs.core.Keyword(null,"photo","photo",1120547236).cljs$core$IFn$_invoke$arity$1(self__.photo)}));
});
photosure.client.gallery.t9342.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9344){var self__ = this;
var _9344__$1 = this;return self__.meta9343;
});
photosure.client.gallery.t9342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9344,meta9343__$1){var self__ = this;
var _9344__$1 = this;return (new photosure.client.gallery.t9342(self__.owner,self__.photo,self__.photo_view,meta9343__$1));
});
photosure.client.gallery.__GT_t9342 = (function __GT_t9342(owner__$1,photo__$1,photo_view__$1,meta9343){return (new photosure.client.gallery.t9342(owner__$1,photo__$1,photo_view__$1,meta9343));
});
}
return (new photosure.client.gallery.t9342(owner,photo,photo_view,null));
});
photosure.client.gallery.prev_btn = (function prev_btn(app,owner){if(typeof photosure.client.gallery.t9350 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.client.gallery.t9350 = (function (owner,app,prev_btn,meta9351){
this.owner = owner;
this.app = app;
this.prev_btn = prev_btn;
this.meta9351 = meta9351;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.client.gallery.t9350.cljs$lang$type = true;
photosure.client.gallery.t9350.cljs$lang$ctorStr = "photosure.client.gallery/t9350";
photosure.client.gallery.t9350.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.client.gallery/t9350");
});
photosure.client.gallery.t9350.prototype.om$core$IRenderState$ = true;
photosure.client.gallery.t9350.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__9353){var self__ = this;
var map__9354 = p__9353;var map__9354__$1 = ((cljs.core.seq_QMARK_.call(null,map__9354))?cljs.core.apply.call(null,cljs.core.hash_map,map__9354):map__9354);var disabled = cljs.core.get.call(null,map__9354__$1,new cljs.core.Keyword(null,"disabled","disabled",1284845038));var slide_chan = cljs.core.get.call(null,map__9354__$1,new cljs.core.Keyword(null,"slide-chan","slide-chan",2056802656));var this$__$1 = this;return React.DOM.div({"onClick": (function (e){return cljs.core.async.put_BANG_.call(null,slide_chan,"prev");
}), "className": [cljs.core.str("btn"),cljs.core.str((cljs.core.truth_(disabled)?" disabled":null))].join(''), "id": "prev-btn"},React.DOM.p({"id": "prev-arrow"},goog.string.unescapeEntities("&#10092;")));
});
photosure.client.gallery.t9350.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9352){var self__ = this;
var _9352__$1 = this;return self__.meta9351;
});
photosure.client.gallery.t9350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9352,meta9351__$1){var self__ = this;
var _9352__$1 = this;return (new photosure.client.gallery.t9350(self__.owner,self__.app,self__.prev_btn,meta9351__$1));
});
photosure.client.gallery.__GT_t9350 = (function __GT_t9350(owner__$1,app__$1,prev_btn__$1,meta9351){return (new photosure.client.gallery.t9350(owner__$1,app__$1,prev_btn__$1,meta9351));
});
}
return (new photosure.client.gallery.t9350(owner,app,prev_btn,null));
});
photosure.client.gallery.next_btn = (function next_btn(app,owner){if(typeof photosure.client.gallery.t9360 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.client.gallery.t9360 = (function (owner,app,next_btn,meta9361){
this.owner = owner;
this.app = app;
this.next_btn = next_btn;
this.meta9361 = meta9361;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.client.gallery.t9360.cljs$lang$type = true;
photosure.client.gallery.t9360.cljs$lang$ctorStr = "photosure.client.gallery/t9360";
photosure.client.gallery.t9360.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.client.gallery/t9360");
});
photosure.client.gallery.t9360.prototype.om$core$IRenderState$ = true;
photosure.client.gallery.t9360.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__9363){var self__ = this;
var map__9364 = p__9363;var map__9364__$1 = ((cljs.core.seq_QMARK_.call(null,map__9364))?cljs.core.apply.call(null,cljs.core.hash_map,map__9364):map__9364);var disabled = cljs.core.get.call(null,map__9364__$1,new cljs.core.Keyword(null,"disabled","disabled",1284845038));var slide_chan = cljs.core.get.call(null,map__9364__$1,new cljs.core.Keyword(null,"slide-chan","slide-chan",2056802656));var this$__$1 = this;return React.DOM.div({"onClick": (function (e){return cljs.core.async.put_BANG_.call(null,slide_chan,"next");
}), "className": [cljs.core.str("btn"),cljs.core.str((cljs.core.truth_(disabled)?" disabled":null))].join(''), "id": "next-btn"},React.DOM.p({"id": "next-arrow"},goog.string.unescapeEntities("&#10093;")));
});
photosure.client.gallery.t9360.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9362){var self__ = this;
var _9362__$1 = this;return self__.meta9361;
});
photosure.client.gallery.t9360.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9362,meta9361__$1){var self__ = this;
var _9362__$1 = this;return (new photosure.client.gallery.t9360(self__.owner,self__.app,self__.next_btn,meta9361__$1));
});
photosure.client.gallery.__GT_t9360 = (function __GT_t9360(owner__$1,app__$1,next_btn__$1,meta9361){return (new photosure.client.gallery.t9360(owner__$1,app__$1,next_btn__$1,meta9361));
});
}
return (new photosure.client.gallery.t9360(owner,app,next_btn,null));
});
photosure.client.gallery.gallery = (function gallery(app,owner){if(typeof photosure.client.gallery.t9453 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.client.gallery.t9453 = (function (owner,app,gallery,meta9454){
this.owner = owner;
this.app = app;
this.gallery = gallery;
this.meta9454 = meta9454;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.client.gallery.t9453.cljs$lang$type = true;
photosure.client.gallery.t9453.cljs$lang$ctorStr = "photosure.client.gallery/t9453";
photosure.client.gallery.t9453.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.client.gallery/t9453");
});
photosure.client.gallery.t9453.prototype.om$core$IRenderState$ = true;
photosure.client.gallery.t9453.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__9456){var self__ = this;
var map__9457 = p__9456;var map__9457__$1 = ((cljs.core.seq_QMARK_.call(null,map__9457))?cljs.core.apply.call(null,cljs.core.hash_map,map__9457):map__9457);var anim_in_progress = cljs.core.get.call(null,map__9457__$1,new cljs.core.Keyword(null,"anim-in-progress","anim-in-progress",3132057483));var slide_chan = cljs.core.get.call(null,map__9457__$1,new cljs.core.Keyword(null,"slide-chan","slide-chan",2056802656));var this$__$1 = this;return React.DOM.div({"id": "photo-gallery-container"},React.DOM.div({"id": "left-pane"},om.core.build.call(null,photosure.client.gallery.prev_btn,self__.app,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slide-chan","slide-chan",2056802656),slide_chan], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",1284845038),anim_in_progress], null)], null))),cljs.core.apply.call(null,om.dom.div,{"id": "photo-gallery"},om.core.build_all.call(null,photosure.client.gallery.photo_view,new cljs.core.Keyword(null,"photos","photos",4319837171).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"photo","photo",1120547236)], null))),React.DOM.div({"id": "right-pane"},om.core.build.call(null,photosure.client.gallery.next_btn,self__.app,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slide-chan","slide-chan",2056802656),slide_chan], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",1284845038),anim_in_progress], null)], null))));
});
photosure.client.gallery.t9453.prototype.om$core$IWillMount$ = true;
photosure.client.gallery.t9453.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var slide_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"slide-chan","slide-chan",2056802656));var c__6935__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6936__auto__ = (function (){var switch__6865__auto__ = (function (state_9518){var state_val_9519 = (state_9518[1]);if((state_val_9519 === 8))
{var inst_9512 = (state_9518[2]);var inst_9513 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"anim-in-progress","anim-in-progress",3132057483),false);var state_9518__$1 = (function (){var statearr_9520 = state_9518;(statearr_9520[7] = inst_9512);
(statearr_9520[8] = inst_9513);
return statearr_9520;
})();var statearr_9521_9539 = state_9518__$1;(statearr_9521_9539[2] = null);
(statearr_9521_9539[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9519 === 7))
{var inst_9484 = (state_9518[2]);var inst_9485 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"anim-in-progress","anim-in-progress",3132057483),true);var inst_9486 = cljs.core.deref.call(null,self__.app);var inst_9487 = new cljs.core.Keyword(null,"curr","curr",1016969636).cljs$core$IFn$_invoke$arity$1(inst_9486);var inst_9488 = cljs.core.get.call(null,inst_9487,0);var inst_9489 = [new cljs.core.Keyword(null,"photos","photos",4319837171),inst_9488,new cljs.core.Keyword(null,"pos","pos",1014015430)];var inst_9490 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9489,null));var inst_9491 = ["left"];var inst_9492 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9491,null));var inst_9493 = om.core.update_BANG_.call(null,self__.app,inst_9490,inst_9492);var inst_9494 = cljs.core.deref.call(null,self__.app);var inst_9495 = new cljs.core.Keyword(null,"curr","curr",1016969636).cljs$core$IFn$_invoke$arity$1(inst_9494);var inst_9496 = cljs.core.get.call(null,inst_9495,1);var inst_9497 = [new cljs.core.Keyword(null,"photos","photos",4319837171),inst_9496,new cljs.core.Keyword(null,"pos","pos",1014015430)];var inst_9498 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9497,null));var inst_9499 = ["center"];var inst_9500 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9499,null));var inst_9501 = om.core.update_BANG_.call(null,self__.app,inst_9498,inst_9500);var inst_9502 = cljs.core.deref.call(null,self__.app);var inst_9503 = new cljs.core.Keyword(null,"curr","curr",1016969636).cljs$core$IFn$_invoke$arity$1(inst_9502);var inst_9504 = cljs.core.get.call(null,inst_9503,2);var inst_9505 = [new cljs.core.Keyword(null,"photos","photos",4319837171),inst_9504,new cljs.core.Keyword(null,"pos","pos",1014015430)];var inst_9506 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9505,null));var inst_9507 = ["right"];var inst_9508 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9507,null));var inst_9509 = om.core.update_BANG_.call(null,self__.app,inst_9506,inst_9508);var inst_9510 = cljs.core.async.timeout.call(null,1000);var state_9518__$1 = (function (){var statearr_9522 = state_9518;(statearr_9522[9] = inst_9501);
(statearr_9522[10] = inst_9493);
(statearr_9522[11] = inst_9509);
(statearr_9522[12] = inst_9485);
(statearr_9522[13] = inst_9484);
return statearr_9522;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9518__$1,8,inst_9510);
} else
{if((state_val_9519 === 6))
{var inst_9463 = (state_9518[14]);var inst_9461 = (state_9518[15]);var inst_9475 = cljs.core.deref.call(null,self__.app);var inst_9476 = new cljs.core.Keyword(null,"curr","curr",1016969636).cljs$core$IFn$_invoke$arity$1(inst_9475);var inst_9477 = cljs.core.get.call(null,inst_9476,0);var inst_9478 = [new cljs.core.Keyword(null,"photos","photos",4319837171),inst_9477,new cljs.core.Keyword(null,"pos","pos",1014015430)];var inst_9479 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9478,null));var inst_9480 = om.core.update_BANG_.call(null,self__.app,inst_9479,cljs.core.PersistentVector.EMPTY);var inst_9481 = (function (){var cmd = inst_9463;var len = inst_9461;return ((function (cmd,len,inst_9463,inst_9461,inst_9475,inst_9476,inst_9477,inst_9478,inst_9479,inst_9480,state_val_9519){
return (function (___$2){return cljs.core.apply.call(null,cljs.core.vector,cljs.core.map.call(null,((function (cmd,len,inst_9463,inst_9461,inst_9475,inst_9476,inst_9477,inst_9478,inst_9479,inst_9480,state_val_9519){
return (function (p1__9366_SHARP_){return cljs.core.mod.call(null,(p1__9366_SHARP_ + 1),len);
});})(cmd,len,inst_9463,inst_9461,inst_9475,inst_9476,inst_9477,inst_9478,inst_9479,inst_9480,state_val_9519))
,___$2));
});
;})(cmd,len,inst_9463,inst_9461,inst_9475,inst_9476,inst_9477,inst_9478,inst_9479,inst_9480,state_val_9519))
})();var inst_9482 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"curr","curr",1016969636),inst_9481);var state_9518__$1 = (function (){var statearr_9523 = state_9518;(statearr_9523[16] = inst_9480);
return statearr_9523;
})();var statearr_9524_9540 = state_9518__$1;(statearr_9524_9540[2] = inst_9482);
(statearr_9524_9540[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9519 === 5))
{var inst_9463 = (state_9518[14]);var inst_9461 = (state_9518[15]);var inst_9466 = cljs.core.deref.call(null,self__.app);var inst_9467 = new cljs.core.Keyword(null,"curr","curr",1016969636).cljs$core$IFn$_invoke$arity$1(inst_9466);var inst_9468 = cljs.core.get.call(null,inst_9467,2);var inst_9469 = [new cljs.core.Keyword(null,"photos","photos",4319837171),inst_9468,new cljs.core.Keyword(null,"pos","pos",1014015430)];var inst_9470 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9469,null));var inst_9471 = om.core.update_BANG_.call(null,self__.app,inst_9470,cljs.core.PersistentVector.EMPTY);var inst_9472 = (function (){var cmd = inst_9463;var len = inst_9461;return ((function (cmd,len,inst_9463,inst_9461,inst_9466,inst_9467,inst_9468,inst_9469,inst_9470,inst_9471,state_val_9519){
return (function (___$2){return cljs.core.apply.call(null,cljs.core.vector,cljs.core.map.call(null,((function (cmd,len,inst_9463,inst_9461,inst_9466,inst_9467,inst_9468,inst_9469,inst_9470,inst_9471,state_val_9519){
return (function (p1__9365_SHARP_){return cljs.core.mod.call(null,(p1__9365_SHARP_ - 1),len);
});})(cmd,len,inst_9463,inst_9461,inst_9466,inst_9467,inst_9468,inst_9469,inst_9470,inst_9471,state_val_9519))
,___$2));
});
;})(cmd,len,inst_9463,inst_9461,inst_9466,inst_9467,inst_9468,inst_9469,inst_9470,inst_9471,state_val_9519))
})();var inst_9473 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"curr","curr",1016969636),inst_9472);var state_9518__$1 = (function (){var statearr_9525 = state_9518;(statearr_9525[17] = inst_9471);
return statearr_9525;
})();var statearr_9526_9541 = state_9518__$1;(statearr_9526_9541[2] = inst_9473);
(statearr_9526_9541[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9519 === 4))
{var inst_9463 = (state_9518[14]);var inst_9463__$1 = (state_9518[2]);var inst_9464 = cljs.core._EQ_.call(null,inst_9463__$1,"next");var state_9518__$1 = (function (){var statearr_9527 = state_9518;(statearr_9527[14] = inst_9463__$1);
return statearr_9527;
})();if(inst_9464)
{var statearr_9528_9542 = state_9518__$1;(statearr_9528_9542[1] = 5);
} else
{var statearr_9529_9543 = state_9518__$1;(statearr_9529_9543[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9519 === 3))
{var inst_9516 = (state_9518[2]);var state_9518__$1 = state_9518;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9518__$1,inst_9516);
} else
{if((state_val_9519 === 2))
{var inst_9459 = cljs.core.deref.call(null,self__.app);var inst_9460 = new cljs.core.Keyword(null,"photos","photos",4319837171).cljs$core$IFn$_invoke$arity$1(inst_9459);var inst_9461 = cljs.core.count.call(null,inst_9460);var state_9518__$1 = (function (){var statearr_9530 = state_9518;(statearr_9530[15] = inst_9461);
return statearr_9530;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9518__$1,4,slide_chan);
} else
{if((state_val_9519 === 1))
{var state_9518__$1 = state_9518;var statearr_9531_9544 = state_9518__$1;(statearr_9531_9544[2] = null);
(statearr_9531_9544[1] = 2);
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
});return ((function (switch__6865__auto__){
return (function() {
var state_machine__6866__auto__ = null;
var state_machine__6866__auto____0 = (function (){var statearr_9535 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9535[0] = state_machine__6866__auto__);
(statearr_9535[1] = 1);
return statearr_9535;
});
var state_machine__6866__auto____1 = (function (state_9518){while(true){
var ret_value__6867__auto__ = (function (){try{while(true){
var result__6868__auto__ = switch__6865__auto__.call(null,state_9518);if(cljs.core.keyword_identical_QMARK_.call(null,result__6868__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6868__auto__;
}
break;
}
}catch (e9536){if((e9536 instanceof Object))
{var ex__6869__auto__ = e9536;var statearr_9537_9545 = state_9518;(statearr_9537_9545[5] = ex__6869__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9518);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9536;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6867__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9546 = state_9518;
state_9518 = G__9546;
continue;
}
} else
{return ret_value__6867__auto__;
}
break;
}
});
state_machine__6866__auto__ = function(state_9518){
switch(arguments.length){
case 0:
return state_machine__6866__auto____0.call(this);
case 1:
return state_machine__6866__auto____1.call(this,state_9518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6866__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6866__auto____0;
state_machine__6866__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6866__auto____1;
return state_machine__6866__auto__;
})()
;})(switch__6865__auto__))
})();var state__6937__auto__ = (function (){var statearr_9538 = f__6936__auto__.call(null);(statearr_9538[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6935__auto__);
return statearr_9538;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6937__auto__);
}));
return c__6935__auto__;
});
photosure.client.gallery.t9453.prototype.om$core$IInitState$ = true;
photosure.client.gallery.t9453.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"slide-chan","slide-chan",2056802656),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"anim-in-progress","anim-in-progress",3132057483),false], null);
});
photosure.client.gallery.t9453.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9455){var self__ = this;
var _9455__$1 = this;return self__.meta9454;
});
photosure.client.gallery.t9453.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9455,meta9454__$1){var self__ = this;
var _9455__$1 = this;return (new photosure.client.gallery.t9453(self__.owner,self__.app,self__.gallery,meta9454__$1));
});
photosure.client.gallery.__GT_t9453 = (function __GT_t9453(owner__$1,app__$1,gallery__$1,meta9454){return (new photosure.client.gallery.t9453(owner__$1,app__$1,gallery__$1,meta9454));
});
}
return (new photosure.client.gallery.t9453(owner,app,gallery,null));
});
photosure.client.gallery.render = (function render(){return om.core.root.call(null,photosure.client.gallery.gallery,photosure.client.gallery.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("dynamic-content")], null));
});

//# sourceMappingURL=gallery.js.map