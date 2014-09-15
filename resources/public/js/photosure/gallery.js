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
photosure.gallery.photo = (function photo(filepath,pos){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"photo","photo",1120547236),filepath,new cljs.core.Keyword(null,"pos","pos",1014015430),pos], null);
});
photosure.gallery.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"photos","photos",4319837171),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [photosure.gallery.photo.call(null,"images/cpleblow1.jpg",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["center"], null)),photosure.gallery.photo.call(null,"images/cpleblow2.jpg",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["right"], null)),photosure.gallery.photo.call(null,"images/cpleblow3.jpg",cljs.core.PersistentVector.EMPTY),photosure.gallery.photo.call(null,"images/cpleblow4.jpg",cljs.core.PersistentVector.EMPTY),photosure.gallery.photo.call(null,"images/cpleblow5.jpg",cljs.core.PersistentVector.EMPTY),photosure.gallery.photo.call(null,"images/cpleblow6.jpg",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["left"], null))], null),new cljs.core.Keyword(null,"curr","curr",1016969636),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,1,2], null)], null));
photosure.gallery.photo_view = (function photo_view(photo,owner){if(typeof photosure.gallery.t9382 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.gallery.t9382 = (function (owner,photo,photo_view,meta9383){
this.owner = owner;
this.photo = photo;
this.photo_view = photo_view;
this.meta9383 = meta9383;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.gallery.t9382.cljs$lang$type = true;
photosure.gallery.t9382.cljs$lang$ctorStr = "photosure.gallery/t9382";
photosure.gallery.t9382.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.gallery/t9382");
});
photosure.gallery.t9382.prototype.om$core$IRender$ = true;
photosure.gallery.t9382.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": [cljs.core.str("frame "),cljs.core.str(((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(self__.photo)))?"hidden":cljs.core.get.call(null,new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(self__.photo),0)))].join('')},React.DOM.img({"className": "photo", "src": new cljs.core.Keyword(null,"photo","photo",1120547236).cljs$core$IFn$_invoke$arity$1(self__.photo)}));
});
photosure.gallery.t9382.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9384){var self__ = this;
var _9384__$1 = this;return self__.meta9383;
});
photosure.gallery.t9382.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9384,meta9383__$1){var self__ = this;
var _9384__$1 = this;return (new photosure.gallery.t9382(self__.owner,self__.photo,self__.photo_view,meta9383__$1));
});
photosure.gallery.__GT_t9382 = (function __GT_t9382(owner__$1,photo__$1,photo_view__$1,meta9383){return (new photosure.gallery.t9382(owner__$1,photo__$1,photo_view__$1,meta9383));
});
}
return (new photosure.gallery.t9382(owner,photo,photo_view,null));
});
photosure.gallery.prev_btn = (function prev_btn(app,owner){if(typeof photosure.gallery.t9390 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.gallery.t9390 = (function (owner,app,prev_btn,meta9391){
this.owner = owner;
this.app = app;
this.prev_btn = prev_btn;
this.meta9391 = meta9391;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.gallery.t9390.cljs$lang$type = true;
photosure.gallery.t9390.cljs$lang$ctorStr = "photosure.gallery/t9390";
photosure.gallery.t9390.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.gallery/t9390");
});
photosure.gallery.t9390.prototype.om$core$IRenderState$ = true;
photosure.gallery.t9390.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__9393){var self__ = this;
var map__9394 = p__9393;var map__9394__$1 = ((cljs.core.seq_QMARK_.call(null,map__9394))?cljs.core.apply.call(null,cljs.core.hash_map,map__9394):map__9394);var disabled = cljs.core.get.call(null,map__9394__$1,new cljs.core.Keyword(null,"disabled","disabled",1284845038));var slide_chan = cljs.core.get.call(null,map__9394__$1,new cljs.core.Keyword(null,"slide-chan","slide-chan",2056802656));var this$__$1 = this;return React.DOM.div({"onClick": (function (e){return cljs.core.async.put_BANG_.call(null,slide_chan,"prev");
}), "className": [cljs.core.str("btn"),cljs.core.str((cljs.core.truth_(disabled)?" disabled":null))].join(''), "id": "prev-btn"},React.DOM.p({"id": "prev-arrow"},goog.string.unescapeEntities("&#10092;")));
});
photosure.gallery.t9390.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9392){var self__ = this;
var _9392__$1 = this;return self__.meta9391;
});
photosure.gallery.t9390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9392,meta9391__$1){var self__ = this;
var _9392__$1 = this;return (new photosure.gallery.t9390(self__.owner,self__.app,self__.prev_btn,meta9391__$1));
});
photosure.gallery.__GT_t9390 = (function __GT_t9390(owner__$1,app__$1,prev_btn__$1,meta9391){return (new photosure.gallery.t9390(owner__$1,app__$1,prev_btn__$1,meta9391));
});
}
return (new photosure.gallery.t9390(owner,app,prev_btn,null));
});
photosure.gallery.next_btn = (function next_btn(app,owner){if(typeof photosure.gallery.t9400 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.gallery.t9400 = (function (owner,app,next_btn,meta9401){
this.owner = owner;
this.app = app;
this.next_btn = next_btn;
this.meta9401 = meta9401;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.gallery.t9400.cljs$lang$type = true;
photosure.gallery.t9400.cljs$lang$ctorStr = "photosure.gallery/t9400";
photosure.gallery.t9400.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.gallery/t9400");
});
photosure.gallery.t9400.prototype.om$core$IRenderState$ = true;
photosure.gallery.t9400.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__9403){var self__ = this;
var map__9404 = p__9403;var map__9404__$1 = ((cljs.core.seq_QMARK_.call(null,map__9404))?cljs.core.apply.call(null,cljs.core.hash_map,map__9404):map__9404);var disabled = cljs.core.get.call(null,map__9404__$1,new cljs.core.Keyword(null,"disabled","disabled",1284845038));var slide_chan = cljs.core.get.call(null,map__9404__$1,new cljs.core.Keyword(null,"slide-chan","slide-chan",2056802656));var this$__$1 = this;return React.DOM.div({"onClick": (function (e){return cljs.core.async.put_BANG_.call(null,slide_chan,"next");
}), "className": [cljs.core.str("btn"),cljs.core.str((cljs.core.truth_(disabled)?" disabled":null))].join(''), "id": "next-btn"},React.DOM.p({"id": "next-arrow"},goog.string.unescapeEntities("&#10093;")));
});
photosure.gallery.t9400.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9402){var self__ = this;
var _9402__$1 = this;return self__.meta9401;
});
photosure.gallery.t9400.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9402,meta9401__$1){var self__ = this;
var _9402__$1 = this;return (new photosure.gallery.t9400(self__.owner,self__.app,self__.next_btn,meta9401__$1));
});
photosure.gallery.__GT_t9400 = (function __GT_t9400(owner__$1,app__$1,next_btn__$1,meta9401){return (new photosure.gallery.t9400(owner__$1,app__$1,next_btn__$1,meta9401));
});
}
return (new photosure.gallery.t9400(owner,app,next_btn,null));
});
photosure.gallery.gallery = (function gallery(app,owner){if(typeof photosure.gallery.t9493 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.gallery.t9493 = (function (owner,app,gallery,meta9494){
this.owner = owner;
this.app = app;
this.gallery = gallery;
this.meta9494 = meta9494;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.gallery.t9493.cljs$lang$type = true;
photosure.gallery.t9493.cljs$lang$ctorStr = "photosure.gallery/t9493";
photosure.gallery.t9493.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.gallery/t9493");
});
photosure.gallery.t9493.prototype.om$core$IRenderState$ = true;
photosure.gallery.t9493.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__9496){var self__ = this;
var map__9497 = p__9496;var map__9497__$1 = ((cljs.core.seq_QMARK_.call(null,map__9497))?cljs.core.apply.call(null,cljs.core.hash_map,map__9497):map__9497);var anim_in_progress = cljs.core.get.call(null,map__9497__$1,new cljs.core.Keyword(null,"anim-in-progress","anim-in-progress",3132057483));var slide_chan = cljs.core.get.call(null,map__9497__$1,new cljs.core.Keyword(null,"slide-chan","slide-chan",2056802656));var this$__$1 = this;return React.DOM.div({"id": "photo-gallery-container"},React.DOM.div({"id": "left-pane"},om.core.build.call(null,photosure.gallery.prev_btn,self__.app,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slide-chan","slide-chan",2056802656),slide_chan], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",1284845038),anim_in_progress], null)], null))),cljs.core.apply.call(null,om.dom.div,{"id": "photo-gallery"},om.core.build_all.call(null,photosure.gallery.photo_view,new cljs.core.Keyword(null,"photos","photos",4319837171).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"photo","photo",1120547236)], null))),React.DOM.div({"id": "right-pane"},om.core.build.call(null,photosure.gallery.next_btn,self__.app,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slide-chan","slide-chan",2056802656),slide_chan], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",1284845038),anim_in_progress], null)], null))));
});
photosure.gallery.t9493.prototype.om$core$IWillMount$ = true;
photosure.gallery.t9493.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var slide_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"slide-chan","slide-chan",2056802656));var c__6222__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6223__auto__ = (function (){var switch__6207__auto__ = (function (state_9558){var state_val_9559 = (state_9558[1]);if((state_val_9559 === 8))
{var inst_9552 = (state_9558[2]);var inst_9553 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"anim-in-progress","anim-in-progress",3132057483),false);var state_9558__$1 = (function (){var statearr_9560 = state_9558;(statearr_9560[7] = inst_9553);
(statearr_9560[8] = inst_9552);
return statearr_9560;
})();var statearr_9561_9579 = state_9558__$1;(statearr_9561_9579[2] = null);
(statearr_9561_9579[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9559 === 7))
{var inst_9524 = (state_9558[2]);var inst_9525 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"anim-in-progress","anim-in-progress",3132057483),true);var inst_9526 = cljs.core.deref.call(null,self__.app);var inst_9527 = new cljs.core.Keyword(null,"curr","curr",1016969636).cljs$core$IFn$_invoke$arity$1(inst_9526);var inst_9528 = cljs.core.get.call(null,inst_9527,0);var inst_9529 = [new cljs.core.Keyword(null,"photos","photos",4319837171),inst_9528,new cljs.core.Keyword(null,"pos","pos",1014015430)];var inst_9530 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9529,null));var inst_9531 = ["left"];var inst_9532 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9531,null));var inst_9533 = om.core.update_BANG_.call(null,self__.app,inst_9530,inst_9532);var inst_9534 = cljs.core.deref.call(null,self__.app);var inst_9535 = new cljs.core.Keyword(null,"curr","curr",1016969636).cljs$core$IFn$_invoke$arity$1(inst_9534);var inst_9536 = cljs.core.get.call(null,inst_9535,1);var inst_9537 = [new cljs.core.Keyword(null,"photos","photos",4319837171),inst_9536,new cljs.core.Keyword(null,"pos","pos",1014015430)];var inst_9538 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9537,null));var inst_9539 = ["center"];var inst_9540 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9539,null));var inst_9541 = om.core.update_BANG_.call(null,self__.app,inst_9538,inst_9540);var inst_9542 = cljs.core.deref.call(null,self__.app);var inst_9543 = new cljs.core.Keyword(null,"curr","curr",1016969636).cljs$core$IFn$_invoke$arity$1(inst_9542);var inst_9544 = cljs.core.get.call(null,inst_9543,2);var inst_9545 = [new cljs.core.Keyword(null,"photos","photos",4319837171),inst_9544,new cljs.core.Keyword(null,"pos","pos",1014015430)];var inst_9546 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9545,null));var inst_9547 = ["right"];var inst_9548 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9547,null));var inst_9549 = om.core.update_BANG_.call(null,self__.app,inst_9546,inst_9548);var inst_9550 = cljs.core.async.timeout.call(null,1000);var state_9558__$1 = (function (){var statearr_9562 = state_9558;(statearr_9562[9] = inst_9541);
(statearr_9562[10] = inst_9549);
(statearr_9562[11] = inst_9524);
(statearr_9562[12] = inst_9533);
(statearr_9562[13] = inst_9525);
return statearr_9562;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9558__$1,8,inst_9550);
} else
{if((state_val_9559 === 6))
{var inst_9501 = (state_9558[14]);var inst_9503 = (state_9558[15]);var inst_9515 = cljs.core.deref.call(null,self__.app);var inst_9516 = new cljs.core.Keyword(null,"curr","curr",1016969636).cljs$core$IFn$_invoke$arity$1(inst_9515);var inst_9517 = cljs.core.get.call(null,inst_9516,0);var inst_9518 = [new cljs.core.Keyword(null,"photos","photos",4319837171),inst_9517,new cljs.core.Keyword(null,"pos","pos",1014015430)];var inst_9519 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9518,null));var inst_9520 = om.core.update_BANG_.call(null,self__.app,inst_9519,cljs.core.PersistentVector.EMPTY);var inst_9521 = (function (){var cmd = inst_9503;var len = inst_9501;return ((function (cmd,len,inst_9501,inst_9503,inst_9515,inst_9516,inst_9517,inst_9518,inst_9519,inst_9520,state_val_9559){
return (function (___$2){return cljs.core.apply.call(null,cljs.core.vector,cljs.core.map.call(null,((function (cmd,len,inst_9501,inst_9503,inst_9515,inst_9516,inst_9517,inst_9518,inst_9519,inst_9520,state_val_9559){
return (function (p1__9406_SHARP_){return cljs.core.mod.call(null,(p1__9406_SHARP_ + 1),len);
});})(cmd,len,inst_9501,inst_9503,inst_9515,inst_9516,inst_9517,inst_9518,inst_9519,inst_9520,state_val_9559))
,___$2));
});
;})(cmd,len,inst_9501,inst_9503,inst_9515,inst_9516,inst_9517,inst_9518,inst_9519,inst_9520,state_val_9559))
})();var inst_9522 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"curr","curr",1016969636),inst_9521);var state_9558__$1 = (function (){var statearr_9563 = state_9558;(statearr_9563[16] = inst_9520);
return statearr_9563;
})();var statearr_9564_9580 = state_9558__$1;(statearr_9564_9580[2] = inst_9522);
(statearr_9564_9580[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9559 === 5))
{var inst_9501 = (state_9558[14]);var inst_9503 = (state_9558[15]);var inst_9506 = cljs.core.deref.call(null,self__.app);var inst_9507 = new cljs.core.Keyword(null,"curr","curr",1016969636).cljs$core$IFn$_invoke$arity$1(inst_9506);var inst_9508 = cljs.core.get.call(null,inst_9507,2);var inst_9509 = [new cljs.core.Keyword(null,"photos","photos",4319837171),inst_9508,new cljs.core.Keyword(null,"pos","pos",1014015430)];var inst_9510 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9509,null));var inst_9511 = om.core.update_BANG_.call(null,self__.app,inst_9510,cljs.core.PersistentVector.EMPTY);var inst_9512 = (function (){var cmd = inst_9503;var len = inst_9501;return ((function (cmd,len,inst_9501,inst_9503,inst_9506,inst_9507,inst_9508,inst_9509,inst_9510,inst_9511,state_val_9559){
return (function (___$2){return cljs.core.apply.call(null,cljs.core.vector,cljs.core.map.call(null,((function (cmd,len,inst_9501,inst_9503,inst_9506,inst_9507,inst_9508,inst_9509,inst_9510,inst_9511,state_val_9559){
return (function (p1__9405_SHARP_){return cljs.core.mod.call(null,(p1__9405_SHARP_ - 1),len);
});})(cmd,len,inst_9501,inst_9503,inst_9506,inst_9507,inst_9508,inst_9509,inst_9510,inst_9511,state_val_9559))
,___$2));
});
;})(cmd,len,inst_9501,inst_9503,inst_9506,inst_9507,inst_9508,inst_9509,inst_9510,inst_9511,state_val_9559))
})();var inst_9513 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"curr","curr",1016969636),inst_9512);var state_9558__$1 = (function (){var statearr_9565 = state_9558;(statearr_9565[17] = inst_9511);
return statearr_9565;
})();var statearr_9566_9581 = state_9558__$1;(statearr_9566_9581[2] = inst_9513);
(statearr_9566_9581[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9559 === 4))
{var inst_9503 = (state_9558[15]);var inst_9503__$1 = (state_9558[2]);var inst_9504 = cljs.core._EQ_.call(null,inst_9503__$1,"next");var state_9558__$1 = (function (){var statearr_9567 = state_9558;(statearr_9567[15] = inst_9503__$1);
return statearr_9567;
})();if(inst_9504)
{var statearr_9568_9582 = state_9558__$1;(statearr_9568_9582[1] = 5);
} else
{var statearr_9569_9583 = state_9558__$1;(statearr_9569_9583[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9559 === 3))
{var inst_9556 = (state_9558[2]);var state_9558__$1 = state_9558;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9558__$1,inst_9556);
} else
{if((state_val_9559 === 2))
{var inst_9499 = cljs.core.deref.call(null,self__.app);var inst_9500 = new cljs.core.Keyword(null,"photos","photos",4319837171).cljs$core$IFn$_invoke$arity$1(inst_9499);var inst_9501 = cljs.core.count.call(null,inst_9500);var state_9558__$1 = (function (){var statearr_9570 = state_9558;(statearr_9570[14] = inst_9501);
return statearr_9570;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9558__$1,4,slide_chan);
} else
{if((state_val_9559 === 1))
{var state_9558__$1 = state_9558;var statearr_9571_9584 = state_9558__$1;(statearr_9571_9584[2] = null);
(statearr_9571_9584[1] = 2);
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
var state_machine__6208__auto____0 = (function (){var statearr_9575 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9575[0] = state_machine__6208__auto__);
(statearr_9575[1] = 1);
return statearr_9575;
});
var state_machine__6208__auto____1 = (function (state_9558){while(true){
var ret_value__6209__auto__ = (function (){try{while(true){
var result__6210__auto__ = switch__6207__auto__.call(null,state_9558);if(cljs.core.keyword_identical_QMARK_.call(null,result__6210__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6210__auto__;
}
break;
}
}catch (e9576){if((e9576 instanceof Object))
{var ex__6211__auto__ = e9576;var statearr_9577_9585 = state_9558;(statearr_9577_9585[5] = ex__6211__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9558);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9576;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6209__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9586 = state_9558;
state_9558 = G__9586;
continue;
}
} else
{return ret_value__6209__auto__;
}
break;
}
});
state_machine__6208__auto__ = function(state_9558){
switch(arguments.length){
case 0:
return state_machine__6208__auto____0.call(this);
case 1:
return state_machine__6208__auto____1.call(this,state_9558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6208__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6208__auto____0;
state_machine__6208__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6208__auto____1;
return state_machine__6208__auto__;
})()
;})(switch__6207__auto__))
})();var state__6224__auto__ = (function (){var statearr_9578 = f__6223__auto__.call(null);(statearr_9578[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6222__auto__);
return statearr_9578;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6224__auto__);
}));
return c__6222__auto__;
});
photosure.gallery.t9493.prototype.om$core$IInitState$ = true;
photosure.gallery.t9493.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"slide-chan","slide-chan",2056802656),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"anim-in-progress","anim-in-progress",3132057483),false], null);
});
photosure.gallery.t9493.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9495){var self__ = this;
var _9495__$1 = this;return self__.meta9494;
});
photosure.gallery.t9493.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9495,meta9494__$1){var self__ = this;
var _9495__$1 = this;return (new photosure.gallery.t9493(self__.owner,self__.app,self__.gallery,meta9494__$1));
});
photosure.gallery.__GT_t9493 = (function __GT_t9493(owner__$1,app__$1,gallery__$1,meta9494){return (new photosure.gallery.t9493(owner__$1,app__$1,gallery__$1,meta9494));
});
}
return (new photosure.gallery.t9493(owner,app,gallery,null));
});
photosure.gallery.render = (function render(){return om.core.root.call(null,photosure.gallery.gallery,photosure.gallery.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("dynamic-content")], null));
});

//# sourceMappingURL=gallery.js.map