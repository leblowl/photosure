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
photosure.gallery.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"photos","photos",4319837171),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [photosure.gallery.photo.call(null,"images/cpleblow1.jpg",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["left"], null)),photosure.gallery.photo.call(null,"images/cpleblow2.jpg",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["center"], null)),photosure.gallery.photo.call(null,"images/cpleblow3.jpg",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["right"], null)),photosure.gallery.photo.call(null,"images/cpleblow4.jpg",cljs.core.PersistentVector.EMPTY),photosure.gallery.photo.call(null,"images/cpleblow5.jpg",cljs.core.PersistentVector.EMPTY),photosure.gallery.photo.call(null,"images/cpleblow6.jpg",cljs.core.PersistentVector.EMPTY)], null),new cljs.core.Keyword(null,"curr","curr",1016969636),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,1,2], null)], null));
photosure.gallery.photo_view = (function photo_view(photo,owner){if(typeof photosure.gallery.t9386 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.gallery.t9386 = (function (owner,photo,photo_view,meta9387){
this.owner = owner;
this.photo = photo;
this.photo_view = photo_view;
this.meta9387 = meta9387;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.gallery.t9386.cljs$lang$type = true;
photosure.gallery.t9386.cljs$lang$ctorStr = "photosure.gallery/t9386";
photosure.gallery.t9386.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.gallery/t9386");
});
photosure.gallery.t9386.prototype.om$core$IRender$ = true;
photosure.gallery.t9386.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": [cljs.core.str("frame "),cljs.core.str(((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(self__.photo)))?"hidden":cljs.core.get.call(null,new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(self__.photo),0)))].join('')},React.DOM.img({"className": "photo", "src": new cljs.core.Keyword(null,"photo","photo",1120547236).cljs$core$IFn$_invoke$arity$1(self__.photo)}));
});
photosure.gallery.t9386.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9388){var self__ = this;
var _9388__$1 = this;return self__.meta9387;
});
photosure.gallery.t9386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9388,meta9387__$1){var self__ = this;
var _9388__$1 = this;return (new photosure.gallery.t9386(self__.owner,self__.photo,self__.photo_view,meta9387__$1));
});
photosure.gallery.__GT_t9386 = (function __GT_t9386(owner__$1,photo__$1,photo_view__$1,meta9387){return (new photosure.gallery.t9386(owner__$1,photo__$1,photo_view__$1,meta9387));
});
}
return (new photosure.gallery.t9386(owner,photo,photo_view,null));
});
photosure.gallery.prev_btn = (function prev_btn(app,owner){if(typeof photosure.gallery.t9394 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.gallery.t9394 = (function (owner,app,prev_btn,meta9395){
this.owner = owner;
this.app = app;
this.prev_btn = prev_btn;
this.meta9395 = meta9395;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.gallery.t9394.cljs$lang$type = true;
photosure.gallery.t9394.cljs$lang$ctorStr = "photosure.gallery/t9394";
photosure.gallery.t9394.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.gallery/t9394");
});
photosure.gallery.t9394.prototype.om$core$IRenderState$ = true;
photosure.gallery.t9394.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__9397){var self__ = this;
var map__9398 = p__9397;var map__9398__$1 = ((cljs.core.seq_QMARK_.call(null,map__9398))?cljs.core.apply.call(null,cljs.core.hash_map,map__9398):map__9398);var disabled = cljs.core.get.call(null,map__9398__$1,new cljs.core.Keyword(null,"disabled","disabled",1284845038));var slide_chan = cljs.core.get.call(null,map__9398__$1,new cljs.core.Keyword(null,"slide-chan","slide-chan",2056802656));var this$__$1 = this;return React.DOM.div({"onClick": (function (e){return cljs.core.async.put_BANG_.call(null,slide_chan,"prev");
}), "className": [cljs.core.str("btn"),cljs.core.str((cljs.core.truth_(disabled)?" disabled":null))].join(''), "id": "prev-btn"},React.DOM.p({"id": "prev-arrow"},goog.string.unescapeEntities("&#10092;")));
});
photosure.gallery.t9394.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9396){var self__ = this;
var _9396__$1 = this;return self__.meta9395;
});
photosure.gallery.t9394.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9396,meta9395__$1){var self__ = this;
var _9396__$1 = this;return (new photosure.gallery.t9394(self__.owner,self__.app,self__.prev_btn,meta9395__$1));
});
photosure.gallery.__GT_t9394 = (function __GT_t9394(owner__$1,app__$1,prev_btn__$1,meta9395){return (new photosure.gallery.t9394(owner__$1,app__$1,prev_btn__$1,meta9395));
});
}
return (new photosure.gallery.t9394(owner,app,prev_btn,null));
});
photosure.gallery.next_btn = (function next_btn(app,owner){if(typeof photosure.gallery.t9404 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.gallery.t9404 = (function (owner,app,next_btn,meta9405){
this.owner = owner;
this.app = app;
this.next_btn = next_btn;
this.meta9405 = meta9405;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.gallery.t9404.cljs$lang$type = true;
photosure.gallery.t9404.cljs$lang$ctorStr = "photosure.gallery/t9404";
photosure.gallery.t9404.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.gallery/t9404");
});
photosure.gallery.t9404.prototype.om$core$IRenderState$ = true;
photosure.gallery.t9404.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__9407){var self__ = this;
var map__9408 = p__9407;var map__9408__$1 = ((cljs.core.seq_QMARK_.call(null,map__9408))?cljs.core.apply.call(null,cljs.core.hash_map,map__9408):map__9408);var disabled = cljs.core.get.call(null,map__9408__$1,new cljs.core.Keyword(null,"disabled","disabled",1284845038));var slide_chan = cljs.core.get.call(null,map__9408__$1,new cljs.core.Keyword(null,"slide-chan","slide-chan",2056802656));var this$__$1 = this;return React.DOM.div({"onClick": (function (e){return cljs.core.async.put_BANG_.call(null,slide_chan,"next");
}), "className": [cljs.core.str("btn"),cljs.core.str((cljs.core.truth_(disabled)?" disabled":null))].join(''), "id": "next-btn"},React.DOM.p({"id": "next-arrow"},goog.string.unescapeEntities("&#10093;")));
});
photosure.gallery.t9404.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9406){var self__ = this;
var _9406__$1 = this;return self__.meta9405;
});
photosure.gallery.t9404.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9406,meta9405__$1){var self__ = this;
var _9406__$1 = this;return (new photosure.gallery.t9404(self__.owner,self__.app,self__.next_btn,meta9405__$1));
});
photosure.gallery.__GT_t9404 = (function __GT_t9404(owner__$1,app__$1,next_btn__$1,meta9405){return (new photosure.gallery.t9404(owner__$1,app__$1,next_btn__$1,meta9405));
});
}
return (new photosure.gallery.t9404(owner,app,next_btn,null));
});
photosure.gallery.gallery = (function gallery(app,owner){if(typeof photosure.gallery.t9497 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.gallery.t9497 = (function (owner,app,gallery,meta9498){
this.owner = owner;
this.app = app;
this.gallery = gallery;
this.meta9498 = meta9498;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.gallery.t9497.cljs$lang$type = true;
photosure.gallery.t9497.cljs$lang$ctorStr = "photosure.gallery/t9497";
photosure.gallery.t9497.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.gallery/t9497");
});
photosure.gallery.t9497.prototype.om$core$IRenderState$ = true;
photosure.gallery.t9497.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__9500){var self__ = this;
var map__9501 = p__9500;var map__9501__$1 = ((cljs.core.seq_QMARK_.call(null,map__9501))?cljs.core.apply.call(null,cljs.core.hash_map,map__9501):map__9501);var anim_in_progress = cljs.core.get.call(null,map__9501__$1,new cljs.core.Keyword(null,"anim-in-progress","anim-in-progress",3132057483));var slide_chan = cljs.core.get.call(null,map__9501__$1,new cljs.core.Keyword(null,"slide-chan","slide-chan",2056802656));var this$__$1 = this;return React.DOM.div({"id": "photo-gallery-container"},React.DOM.div({"id": "left-pane"},om.core.build.call(null,photosure.gallery.prev_btn,self__.app,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slide-chan","slide-chan",2056802656),slide_chan], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",1284845038),anim_in_progress], null)], null))),cljs.core.apply.call(null,om.dom.div,{"id": "photo-gallery"},om.core.build_all.call(null,photosure.gallery.photo_view,new cljs.core.Keyword(null,"photos","photos",4319837171).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"photo","photo",1120547236)], null))),React.DOM.div({"id": "right-pane"},om.core.build.call(null,photosure.gallery.next_btn,self__.app,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slide-chan","slide-chan",2056802656),slide_chan], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",1284845038),anim_in_progress], null)], null))));
});
photosure.gallery.t9497.prototype.om$core$IWillMount$ = true;
photosure.gallery.t9497.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var slide_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"slide-chan","slide-chan",2056802656));var c__6222__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6223__auto__ = (function (){var switch__6207__auto__ = (function (state_9562){var state_val_9563 = (state_9562[1]);if((state_val_9563 === 8))
{var inst_9556 = (state_9562[2]);var inst_9557 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"anim-in-progress","anim-in-progress",3132057483),false);var state_9562__$1 = (function (){var statearr_9564 = state_9562;(statearr_9564[7] = inst_9556);
(statearr_9564[8] = inst_9557);
return statearr_9564;
})();var statearr_9565_9583 = state_9562__$1;(statearr_9565_9583[2] = null);
(statearr_9565_9583[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9563 === 7))
{var inst_9528 = (state_9562[2]);var inst_9529 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"anim-in-progress","anim-in-progress",3132057483),true);var inst_9530 = cljs.core.deref.call(null,self__.app);var inst_9531 = new cljs.core.Keyword(null,"curr","curr",1016969636).cljs$core$IFn$_invoke$arity$1(inst_9530);var inst_9532 = cljs.core.get.call(null,inst_9531,0);var inst_9533 = [new cljs.core.Keyword(null,"photos","photos",4319837171),inst_9532,new cljs.core.Keyword(null,"pos","pos",1014015430)];var inst_9534 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9533,null));var inst_9535 = ["left"];var inst_9536 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9535,null));var inst_9537 = om.core.update_BANG_.call(null,self__.app,inst_9534,inst_9536);var inst_9538 = cljs.core.deref.call(null,self__.app);var inst_9539 = new cljs.core.Keyword(null,"curr","curr",1016969636).cljs$core$IFn$_invoke$arity$1(inst_9538);var inst_9540 = cljs.core.get.call(null,inst_9539,1);var inst_9541 = [new cljs.core.Keyword(null,"photos","photos",4319837171),inst_9540,new cljs.core.Keyword(null,"pos","pos",1014015430)];var inst_9542 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9541,null));var inst_9543 = ["center"];var inst_9544 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9543,null));var inst_9545 = om.core.update_BANG_.call(null,self__.app,inst_9542,inst_9544);var inst_9546 = cljs.core.deref.call(null,self__.app);var inst_9547 = new cljs.core.Keyword(null,"curr","curr",1016969636).cljs$core$IFn$_invoke$arity$1(inst_9546);var inst_9548 = cljs.core.get.call(null,inst_9547,2);var inst_9549 = [new cljs.core.Keyword(null,"photos","photos",4319837171),inst_9548,new cljs.core.Keyword(null,"pos","pos",1014015430)];var inst_9550 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9549,null));var inst_9551 = ["right"];var inst_9552 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9551,null));var inst_9553 = om.core.update_BANG_.call(null,self__.app,inst_9550,inst_9552);var inst_9554 = cljs.core.async.timeout.call(null,1000);var state_9562__$1 = (function (){var statearr_9566 = state_9562;(statearr_9566[9] = inst_9545);
(statearr_9566[10] = inst_9553);
(statearr_9566[11] = inst_9529);
(statearr_9566[12] = inst_9537);
(statearr_9566[13] = inst_9528);
return statearr_9566;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9562__$1,8,inst_9554);
} else
{if((state_val_9563 === 6))
{var inst_9507 = (state_9562[14]);var inst_9505 = (state_9562[15]);var inst_9519 = cljs.core.deref.call(null,self__.app);var inst_9520 = new cljs.core.Keyword(null,"curr","curr",1016969636).cljs$core$IFn$_invoke$arity$1(inst_9519);var inst_9521 = cljs.core.get.call(null,inst_9520,0);var inst_9522 = [new cljs.core.Keyword(null,"photos","photos",4319837171),inst_9521,new cljs.core.Keyword(null,"pos","pos",1014015430)];var inst_9523 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9522,null));var inst_9524 = om.core.update_BANG_.call(null,self__.app,inst_9523,cljs.core.PersistentVector.EMPTY);var inst_9525 = (function (){var cmd = inst_9507;var len = inst_9505;return ((function (cmd,len,inst_9507,inst_9505,inst_9519,inst_9520,inst_9521,inst_9522,inst_9523,inst_9524,state_val_9563){
return (function (___$2){return cljs.core.apply.call(null,cljs.core.vector,cljs.core.map.call(null,((function (cmd,len,inst_9507,inst_9505,inst_9519,inst_9520,inst_9521,inst_9522,inst_9523,inst_9524,state_val_9563){
return (function (p1__9410_SHARP_){return cljs.core.mod.call(null,(p1__9410_SHARP_ + 1),len);
});})(cmd,len,inst_9507,inst_9505,inst_9519,inst_9520,inst_9521,inst_9522,inst_9523,inst_9524,state_val_9563))
,___$2));
});
;})(cmd,len,inst_9507,inst_9505,inst_9519,inst_9520,inst_9521,inst_9522,inst_9523,inst_9524,state_val_9563))
})();var inst_9526 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"curr","curr",1016969636),inst_9525);var state_9562__$1 = (function (){var statearr_9567 = state_9562;(statearr_9567[16] = inst_9524);
return statearr_9567;
})();var statearr_9568_9584 = state_9562__$1;(statearr_9568_9584[2] = inst_9526);
(statearr_9568_9584[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9563 === 5))
{var inst_9507 = (state_9562[14]);var inst_9505 = (state_9562[15]);var inst_9510 = cljs.core.deref.call(null,self__.app);var inst_9511 = new cljs.core.Keyword(null,"curr","curr",1016969636).cljs$core$IFn$_invoke$arity$1(inst_9510);var inst_9512 = cljs.core.get.call(null,inst_9511,2);var inst_9513 = [new cljs.core.Keyword(null,"photos","photos",4319837171),inst_9512,new cljs.core.Keyword(null,"pos","pos",1014015430)];var inst_9514 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9513,null));var inst_9515 = om.core.update_BANG_.call(null,self__.app,inst_9514,cljs.core.PersistentVector.EMPTY);var inst_9516 = (function (){var cmd = inst_9507;var len = inst_9505;return ((function (cmd,len,inst_9507,inst_9505,inst_9510,inst_9511,inst_9512,inst_9513,inst_9514,inst_9515,state_val_9563){
return (function (___$2){return cljs.core.apply.call(null,cljs.core.vector,cljs.core.map.call(null,((function (cmd,len,inst_9507,inst_9505,inst_9510,inst_9511,inst_9512,inst_9513,inst_9514,inst_9515,state_val_9563){
return (function (p1__9409_SHARP_){return cljs.core.mod.call(null,(p1__9409_SHARP_ - 1),len);
});})(cmd,len,inst_9507,inst_9505,inst_9510,inst_9511,inst_9512,inst_9513,inst_9514,inst_9515,state_val_9563))
,___$2));
});
;})(cmd,len,inst_9507,inst_9505,inst_9510,inst_9511,inst_9512,inst_9513,inst_9514,inst_9515,state_val_9563))
})();var inst_9517 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"curr","curr",1016969636),inst_9516);var state_9562__$1 = (function (){var statearr_9569 = state_9562;(statearr_9569[17] = inst_9515);
return statearr_9569;
})();var statearr_9570_9585 = state_9562__$1;(statearr_9570_9585[2] = inst_9517);
(statearr_9570_9585[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9563 === 4))
{var inst_9507 = (state_9562[14]);var inst_9507__$1 = (state_9562[2]);var inst_9508 = cljs.core._EQ_.call(null,inst_9507__$1,"next");var state_9562__$1 = (function (){var statearr_9571 = state_9562;(statearr_9571[14] = inst_9507__$1);
return statearr_9571;
})();if(inst_9508)
{var statearr_9572_9586 = state_9562__$1;(statearr_9572_9586[1] = 5);
} else
{var statearr_9573_9587 = state_9562__$1;(statearr_9573_9587[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9563 === 3))
{var inst_9560 = (state_9562[2]);var state_9562__$1 = state_9562;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9562__$1,inst_9560);
} else
{if((state_val_9563 === 2))
{var inst_9503 = cljs.core.deref.call(null,self__.app);var inst_9504 = new cljs.core.Keyword(null,"photos","photos",4319837171).cljs$core$IFn$_invoke$arity$1(inst_9503);var inst_9505 = cljs.core.count.call(null,inst_9504);var state_9562__$1 = (function (){var statearr_9574 = state_9562;(statearr_9574[15] = inst_9505);
return statearr_9574;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9562__$1,4,slide_chan);
} else
{if((state_val_9563 === 1))
{var state_9562__$1 = state_9562;var statearr_9575_9588 = state_9562__$1;(statearr_9575_9588[2] = null);
(statearr_9575_9588[1] = 2);
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
var state_machine__6208__auto____0 = (function (){var statearr_9579 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9579[0] = state_machine__6208__auto__);
(statearr_9579[1] = 1);
return statearr_9579;
});
var state_machine__6208__auto____1 = (function (state_9562){while(true){
var ret_value__6209__auto__ = (function (){try{while(true){
var result__6210__auto__ = switch__6207__auto__.call(null,state_9562);if(cljs.core.keyword_identical_QMARK_.call(null,result__6210__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6210__auto__;
}
break;
}
}catch (e9580){if((e9580 instanceof Object))
{var ex__6211__auto__ = e9580;var statearr_9581_9589 = state_9562;(statearr_9581_9589[5] = ex__6211__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9562);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9580;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6209__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9590 = state_9562;
state_9562 = G__9590;
continue;
}
} else
{return ret_value__6209__auto__;
}
break;
}
});
state_machine__6208__auto__ = function(state_9562){
switch(arguments.length){
case 0:
return state_machine__6208__auto____0.call(this);
case 1:
return state_machine__6208__auto____1.call(this,state_9562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6208__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6208__auto____0;
state_machine__6208__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6208__auto____1;
return state_machine__6208__auto__;
})()
;})(switch__6207__auto__))
})();var state__6224__auto__ = (function (){var statearr_9582 = f__6223__auto__.call(null);(statearr_9582[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6222__auto__);
return statearr_9582;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6224__auto__);
}));
return c__6222__auto__;
});
photosure.gallery.t9497.prototype.om$core$IInitState$ = true;
photosure.gallery.t9497.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"slide-chan","slide-chan",2056802656),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"anim-in-progress","anim-in-progress",3132057483),false], null);
});
photosure.gallery.t9497.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9499){var self__ = this;
var _9499__$1 = this;return self__.meta9498;
});
photosure.gallery.t9497.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9499,meta9498__$1){var self__ = this;
var _9499__$1 = this;return (new photosure.gallery.t9497(self__.owner,self__.app,self__.gallery,meta9498__$1));
});
photosure.gallery.__GT_t9497 = (function __GT_t9497(owner__$1,app__$1,gallery__$1,meta9498){return (new photosure.gallery.t9497(owner__$1,app__$1,gallery__$1,meta9498));
});
}
return (new photosure.gallery.t9497(owner,app,gallery,null));
});
photosure.gallery.render = (function render(){return om.core.root.call(null,photosure.gallery.gallery,photosure.gallery.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("dynamic-content")], null));
});

//# sourceMappingURL=gallery.js.map