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
photosure.client.gallery.filter_indexed = (function filter_indexed(f,coll){return cljs.core.map.call(null,cljs.core.second,cljs.core.filter.call(null,(function (p__9271){var vec__9272 = p__9271;var ndx = cljs.core.nth.call(null,vec__9272,0,null);var item = cljs.core.nth.call(null,vec__9272,1,null);return f.call(null,ndx,item);
}),cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),coll)));
});
photosure.client.gallery.photo = (function photo(filepath,pos){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"photo","photo",1120547236),filepath,new cljs.core.Keyword(null,"pos","pos",1014015430),pos], null);
});
photosure.client.gallery.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"photos","photos",4319837171),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [photosure.client.gallery.photo.call(null,"images/cpleblow1.jpg",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["left"], null)),photosure.client.gallery.photo.call(null,"images/cpleblow2.jpg",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["center"], null)),photosure.client.gallery.photo.call(null,"images/cpleblow3.jpg",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["right"], null)),photosure.client.gallery.photo.call(null,"images/cpleblow4.jpg",cljs.core.PersistentVector.EMPTY),photosure.client.gallery.photo.call(null,"images/cpleblow5.jpg",cljs.core.PersistentVector.EMPTY),photosure.client.gallery.photo.call(null,"images/cpleblow6.jpg",cljs.core.PersistentVector.EMPTY)], null),new cljs.core.Keyword(null,"curr","curr",1016969636),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,1,2], null)], null));
photosure.client.gallery.photo_view = (function photo_view(photo,owner){if(typeof photosure.client.gallery.t9276 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.client.gallery.t9276 = (function (owner,photo,photo_view,meta9277){
this.owner = owner;
this.photo = photo;
this.photo_view = photo_view;
this.meta9277 = meta9277;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.client.gallery.t9276.cljs$lang$type = true;
photosure.client.gallery.t9276.cljs$lang$ctorStr = "photosure.client.gallery/t9276";
photosure.client.gallery.t9276.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.client.gallery/t9276");
});
photosure.client.gallery.t9276.prototype.om$core$IRender$ = true;
photosure.client.gallery.t9276.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.img({"className": [cljs.core.str("photo "),cljs.core.str(clojure.string.join.call(null,"-",cljs.core.take_last.call(null,2,new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(self__.photo))))].join(''), "src": new cljs.core.Keyword(null,"photo","photo",1120547236).cljs$core$IFn$_invoke$arity$1(self__.photo)});
});
photosure.client.gallery.t9276.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9278){var self__ = this;
var _9278__$1 = this;return self__.meta9277;
});
photosure.client.gallery.t9276.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9278,meta9277__$1){var self__ = this;
var _9278__$1 = this;return (new photosure.client.gallery.t9276(self__.owner,self__.photo,self__.photo_view,meta9277__$1));
});
photosure.client.gallery.__GT_t9276 = (function __GT_t9276(owner__$1,photo__$1,photo_view__$1,meta9277){return (new photosure.client.gallery.t9276(owner__$1,photo__$1,photo_view__$1,meta9277));
});
}
return (new photosure.client.gallery.t9276(owner,photo,photo_view,null));
});
photosure.client.gallery.prev_btn = (function prev_btn(app,owner){if(typeof photosure.client.gallery.t9284 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.client.gallery.t9284 = (function (owner,app,prev_btn,meta9285){
this.owner = owner;
this.app = app;
this.prev_btn = prev_btn;
this.meta9285 = meta9285;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.client.gallery.t9284.cljs$lang$type = true;
photosure.client.gallery.t9284.cljs$lang$ctorStr = "photosure.client.gallery/t9284";
photosure.client.gallery.t9284.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.client.gallery/t9284");
});
photosure.client.gallery.t9284.prototype.om$core$IRenderState$ = true;
photosure.client.gallery.t9284.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__9287){var self__ = this;
var map__9288 = p__9287;var map__9288__$1 = ((cljs.core.seq_QMARK_.call(null,map__9288))?cljs.core.apply.call(null,cljs.core.hash_map,map__9288):map__9288);var disabled = cljs.core.get.call(null,map__9288__$1,new cljs.core.Keyword(null,"disabled","disabled",1284845038));var slide_chan = cljs.core.get.call(null,map__9288__$1,new cljs.core.Keyword(null,"slide-chan","slide-chan",2056802656));var this$__$1 = this;return React.DOM.div({"onClick": (function (e){return cljs.core.async.put_BANG_.call(null,slide_chan,"prev");
}), "className": [cljs.core.str("btn"),cljs.core.str((cljs.core.truth_(disabled)?" disabled":null))].join(''), "id": "prev-btn"});
});
photosure.client.gallery.t9284.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9286){var self__ = this;
var _9286__$1 = this;return self__.meta9285;
});
photosure.client.gallery.t9284.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9286,meta9285__$1){var self__ = this;
var _9286__$1 = this;return (new photosure.client.gallery.t9284(self__.owner,self__.app,self__.prev_btn,meta9285__$1));
});
photosure.client.gallery.__GT_t9284 = (function __GT_t9284(owner__$1,app__$1,prev_btn__$1,meta9285){return (new photosure.client.gallery.t9284(owner__$1,app__$1,prev_btn__$1,meta9285));
});
}
return (new photosure.client.gallery.t9284(owner,app,prev_btn,null));
});
photosure.client.gallery.next_btn = (function next_btn(app,owner){if(typeof photosure.client.gallery.t9294 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.client.gallery.t9294 = (function (owner,app,next_btn,meta9295){
this.owner = owner;
this.app = app;
this.next_btn = next_btn;
this.meta9295 = meta9295;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.client.gallery.t9294.cljs$lang$type = true;
photosure.client.gallery.t9294.cljs$lang$ctorStr = "photosure.client.gallery/t9294";
photosure.client.gallery.t9294.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.client.gallery/t9294");
});
photosure.client.gallery.t9294.prototype.om$core$IRenderState$ = true;
photosure.client.gallery.t9294.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__9297){var self__ = this;
var map__9298 = p__9297;var map__9298__$1 = ((cljs.core.seq_QMARK_.call(null,map__9298))?cljs.core.apply.call(null,cljs.core.hash_map,map__9298):map__9298);var disabled = cljs.core.get.call(null,map__9298__$1,new cljs.core.Keyword(null,"disabled","disabled",1284845038));var slide_chan = cljs.core.get.call(null,map__9298__$1,new cljs.core.Keyword(null,"slide-chan","slide-chan",2056802656));var this$__$1 = this;return React.DOM.div({"onClick": (function (e){return cljs.core.async.put_BANG_.call(null,slide_chan,"next");
}), "className": [cljs.core.str("btn"),cljs.core.str((cljs.core.truth_(disabled)?" disabled":null))].join(''), "id": "next-btn"});
});
photosure.client.gallery.t9294.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9296){var self__ = this;
var _9296__$1 = this;return self__.meta9295;
});
photosure.client.gallery.t9294.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9296,meta9295__$1){var self__ = this;
var _9296__$1 = this;return (new photosure.client.gallery.t9294(self__.owner,self__.app,self__.next_btn,meta9295__$1));
});
photosure.client.gallery.__GT_t9294 = (function __GT_t9294(owner__$1,app__$1,next_btn__$1,meta9295){return (new photosure.client.gallery.t9294(owner__$1,app__$1,next_btn__$1,meta9295));
});
}
return (new photosure.client.gallery.t9294(owner,app,next_btn,null));
});
photosure.client.gallery.originate = (function originate(app,ndx,from){return om.core.update_BANG_.call(null,app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"photos","photos",4319837171),ndx,new cljs.core.Keyword(null,"pos","pos",1014015430)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [from], null));
});
photosure.client.gallery.transition = (function transition(app,ndx,to){return om.core.transact_BANG_.call(null,app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"photos","photos",4319837171),ndx,new cljs.core.Keyword(null,"pos","pos",1014015430)], null),(function (p1__9299_SHARP_){return cljs.core.conj.call(null,p1__9299_SHARP_,to);
}));
});
photosure.client.gallery.disappear = (function disappear(app,ndx){return om.core.update_BANG_.call(null,app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"photos","photos",4319837171),ndx,new cljs.core.Keyword(null,"pos","pos",1014015430)], null),cljs.core.PersistentVector.EMPTY);
});
photosure.client.gallery.gallery = (function gallery(app,owner){if(typeof photosure.client.gallery.t9405 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.client.gallery.t9405 = (function (owner,app,gallery,meta9406){
this.owner = owner;
this.app = app;
this.gallery = gallery;
this.meta9406 = meta9406;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.client.gallery.t9405.cljs$lang$type = true;
photosure.client.gallery.t9405.cljs$lang$ctorStr = "photosure.client.gallery/t9405";
photosure.client.gallery.t9405.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.client.gallery/t9405");
});
photosure.client.gallery.t9405.prototype.om$core$IRenderState$ = true;
photosure.client.gallery.t9405.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__9408){var self__ = this;
var map__9409 = p__9408;var map__9409__$1 = ((cljs.core.seq_QMARK_.call(null,map__9409))?cljs.core.apply.call(null,cljs.core.hash_map,map__9409):map__9409);var anim_in_progress = cljs.core.get.call(null,map__9409__$1,new cljs.core.Keyword(null,"anim-in-progress","anim-in-progress",3132057483));var slide_chan = cljs.core.get.call(null,map__9409__$1,new cljs.core.Keyword(null,"slide-chan","slide-chan",2056802656));var this$__$1 = this;return React.DOM.div({"id": "photo-gallery-container"},React.DOM.div({"id": "left-pane"},om.core.build.call(null,photosure.client.gallery.prev_btn,self__.app,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slide-chan","slide-chan",2056802656),slide_chan], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",1284845038),anim_in_progress], null)], null))),cljs.core.apply.call(null,om.dom.div,{"id": "photo-gallery"},om.core.build_all.call(null,photosure.client.gallery.photo_view,cljs.core.filter.call(null,(function (photo){return !(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(photo)));
}),new cljs.core.Keyword(null,"photos","photos",4319837171).cljs$core$IFn$_invoke$arity$1(self__.app)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"photo","photo",1120547236)], null))),React.DOM.div({"id": "right-pane"},om.core.build.call(null,photosure.client.gallery.next_btn,self__.app,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slide-chan","slide-chan",2056802656),slide_chan], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",1284845038),anim_in_progress], null)], null))));
});
photosure.client.gallery.t9405.prototype.om$core$IWillMount$ = true;
photosure.client.gallery.t9405.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var slide_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"slide-chan","slide-chan",2056802656));var c__6746__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6747__auto__ = (function (){var switch__6731__auto__ = (function (state_9487){var state_val_9488 = (state_9487[1]);if((state_val_9488 === 9))
{var inst_9471 = (state_9487[2]);var inst_9472 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"anim-in-progress","anim-in-progress",3132057483),false);var inst_9473 = cljs.core.deref.call(null,self__.app);var inst_9474 = new cljs.core.Keyword(null,"curr","curr",1016969636).cljs$core$IFn$_invoke$arity$1(inst_9473);var inst_9475 = cljs.core.get.call(null,inst_9474,0);var inst_9476 = photosure.client.gallery.originate.call(null,self__.app,inst_9475,"left");var inst_9477 = cljs.core.deref.call(null,self__.app);var inst_9478 = new cljs.core.Keyword(null,"curr","curr",1016969636).cljs$core$IFn$_invoke$arity$1(inst_9477);var inst_9479 = cljs.core.get.call(null,inst_9478,1);var inst_9480 = photosure.client.gallery.originate.call(null,self__.app,inst_9479,"center");var state_9487__$1 = (function (){var statearr_9489 = state_9487;(statearr_9489[7] = inst_9476);
(statearr_9489[8] = inst_9471);
(statearr_9489[9] = inst_9472);
return statearr_9489;
})();var statearr_9490_9508 = state_9487__$1;(statearr_9490_9508[2] = inst_9480);
(statearr_9490_9508[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9488 === 8))
{var inst_9439 = (state_9487[2]);var inst_9440 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"anim-in-progress","anim-in-progress",3132057483),false);var inst_9441 = cljs.core.deref.call(null,self__.app);var inst_9442 = new cljs.core.Keyword(null,"curr","curr",1016969636).cljs$core$IFn$_invoke$arity$1(inst_9441);var inst_9443 = cljs.core.get.call(null,inst_9442,1);var inst_9444 = photosure.client.gallery.originate.call(null,self__.app,inst_9443,"center");var inst_9445 = cljs.core.deref.call(null,self__.app);var inst_9446 = new cljs.core.Keyword(null,"curr","curr",1016969636).cljs$core$IFn$_invoke$arity$1(inst_9445);var inst_9447 = cljs.core.get.call(null,inst_9446,2);var inst_9448 = photosure.client.gallery.originate.call(null,self__.app,inst_9447,"right");var state_9487__$1 = (function (){var statearr_9491 = state_9487;(statearr_9491[10] = inst_9439);
(statearr_9491[11] = inst_9444);
(statearr_9491[12] = inst_9440);
return statearr_9491;
})();var statearr_9492_9509 = state_9487__$1;(statearr_9492_9509[2] = inst_9448);
(statearr_9492_9509[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9488 === 7))
{var inst_9482 = (state_9487[2]);var state_9487__$1 = (function (){var statearr_9493 = state_9487;(statearr_9493[13] = inst_9482);
return statearr_9493;
})();var statearr_9494_9510 = state_9487__$1;(statearr_9494_9510[2] = null);
(statearr_9494_9510[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9488 === 6))
{var inst_9413 = (state_9487[14]);var inst_9450 = cljs.core.deref.call(null,self__.app);var inst_9451 = new cljs.core.Keyword(null,"curr","curr",1016969636).cljs$core$IFn$_invoke$arity$1(inst_9450);var inst_9452 = cljs.core.get.call(null,inst_9451,0);var inst_9453 = photosure.client.gallery.disappear.call(null,self__.app,inst_9452);var inst_9454 = (function (){var len = inst_9413;return ((function (len,inst_9413,inst_9450,inst_9451,inst_9452,inst_9453,state_val_9488){
return (function (___$2){return cljs.core.apply.call(null,cljs.core.vector,cljs.core.map.call(null,((function (len,inst_9413,inst_9450,inst_9451,inst_9452,inst_9453,state_val_9488){
return (function (p1__9301_SHARP_){return cljs.core.mod.call(null,(p1__9301_SHARP_ + 1),len);
});})(len,inst_9413,inst_9450,inst_9451,inst_9452,inst_9453,state_val_9488))
,___$2));
});
;})(len,inst_9413,inst_9450,inst_9451,inst_9452,inst_9453,state_val_9488))
})();var inst_9455 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"curr","curr",1016969636),inst_9454);var inst_9456 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"anim-in-progress","anim-in-progress",3132057483),true);var inst_9457 = cljs.core.deref.call(null,self__.app);var inst_9458 = new cljs.core.Keyword(null,"curr","curr",1016969636).cljs$core$IFn$_invoke$arity$1(inst_9457);var inst_9459 = cljs.core.get.call(null,inst_9458,0);var inst_9460 = photosure.client.gallery.transition.call(null,self__.app,inst_9459,"left");var inst_9461 = cljs.core.deref.call(null,self__.app);var inst_9462 = new cljs.core.Keyword(null,"curr","curr",1016969636).cljs$core$IFn$_invoke$arity$1(inst_9461);var inst_9463 = cljs.core.get.call(null,inst_9462,1);var inst_9464 = photosure.client.gallery.transition.call(null,self__.app,inst_9463,"center");var inst_9465 = cljs.core.deref.call(null,self__.app);var inst_9466 = new cljs.core.Keyword(null,"curr","curr",1016969636).cljs$core$IFn$_invoke$arity$1(inst_9465);var inst_9467 = cljs.core.get.call(null,inst_9466,2);var inst_9468 = photosure.client.gallery.originate.call(null,self__.app,inst_9467,"right");var inst_9469 = cljs.core.async.timeout.call(null,1000);var state_9487__$1 = (function (){var statearr_9495 = state_9487;(statearr_9495[15] = inst_9468);
(statearr_9495[16] = inst_9464);
(statearr_9495[17] = inst_9460);
(statearr_9495[18] = inst_9455);
(statearr_9495[19] = inst_9456);
(statearr_9495[20] = inst_9453);
return statearr_9495;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9487__$1,9,inst_9469);
} else
{if((state_val_9488 === 5))
{var inst_9413 = (state_9487[14]);var inst_9418 = cljs.core.deref.call(null,self__.app);var inst_9419 = new cljs.core.Keyword(null,"curr","curr",1016969636).cljs$core$IFn$_invoke$arity$1(inst_9418);var inst_9420 = cljs.core.get.call(null,inst_9419,2);var inst_9421 = photosure.client.gallery.disappear.call(null,self__.app,inst_9420);var inst_9422 = (function (){var len = inst_9413;return ((function (len,inst_9413,inst_9418,inst_9419,inst_9420,inst_9421,state_val_9488){
return (function (___$2){return cljs.core.apply.call(null,cljs.core.vector,cljs.core.map.call(null,((function (len,inst_9413,inst_9418,inst_9419,inst_9420,inst_9421,state_val_9488){
return (function (p1__9300_SHARP_){return cljs.core.mod.call(null,(p1__9300_SHARP_ - 1),len);
});})(len,inst_9413,inst_9418,inst_9419,inst_9420,inst_9421,state_val_9488))
,___$2));
});
;})(len,inst_9413,inst_9418,inst_9419,inst_9420,inst_9421,state_val_9488))
})();var inst_9423 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"curr","curr",1016969636),inst_9422);var inst_9424 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"anim-in-progress","anim-in-progress",3132057483),true);var inst_9425 = cljs.core.deref.call(null,self__.app);var inst_9426 = new cljs.core.Keyword(null,"curr","curr",1016969636).cljs$core$IFn$_invoke$arity$1(inst_9425);var inst_9427 = cljs.core.get.call(null,inst_9426,0);var inst_9428 = photosure.client.gallery.originate.call(null,self__.app,inst_9427,"left");var inst_9429 = cljs.core.deref.call(null,self__.app);var inst_9430 = new cljs.core.Keyword(null,"curr","curr",1016969636).cljs$core$IFn$_invoke$arity$1(inst_9429);var inst_9431 = cljs.core.get.call(null,inst_9430,1);var inst_9432 = photosure.client.gallery.transition.call(null,self__.app,inst_9431,"center");var inst_9433 = cljs.core.deref.call(null,self__.app);var inst_9434 = new cljs.core.Keyword(null,"curr","curr",1016969636).cljs$core$IFn$_invoke$arity$1(inst_9433);var inst_9435 = cljs.core.get.call(null,inst_9434,2);var inst_9436 = photosure.client.gallery.transition.call(null,self__.app,inst_9435,"right");var inst_9437 = cljs.core.async.timeout.call(null,1000);var state_9487__$1 = (function (){var statearr_9496 = state_9487;(statearr_9496[21] = inst_9424);
(statearr_9496[22] = inst_9423);
(statearr_9496[23] = inst_9421);
(statearr_9496[24] = inst_9436);
(statearr_9496[25] = inst_9428);
(statearr_9496[26] = inst_9432);
return statearr_9496;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9487__$1,8,inst_9437);
} else
{if((state_val_9488 === 4))
{var inst_9415 = (state_9487[2]);var inst_9416 = cljs.core._EQ_.call(null,inst_9415,"next");var state_9487__$1 = state_9487;if(inst_9416)
{var statearr_9497_9511 = state_9487__$1;(statearr_9497_9511[1] = 5);
} else
{var statearr_9498_9512 = state_9487__$1;(statearr_9498_9512[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9488 === 3))
{var inst_9485 = (state_9487[2]);var state_9487__$1 = state_9487;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9487__$1,inst_9485);
} else
{if((state_val_9488 === 2))
{var inst_9411 = cljs.core.deref.call(null,self__.app);var inst_9412 = new cljs.core.Keyword(null,"photos","photos",4319837171).cljs$core$IFn$_invoke$arity$1(inst_9411);var inst_9413 = cljs.core.count.call(null,inst_9412);var state_9487__$1 = (function (){var statearr_9499 = state_9487;(statearr_9499[14] = inst_9413);
return statearr_9499;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9487__$1,4,slide_chan);
} else
{if((state_val_9488 === 1))
{var state_9487__$1 = state_9487;var statearr_9500_9513 = state_9487__$1;(statearr_9500_9513[2] = null);
(statearr_9500_9513[1] = 2);
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
});return ((function (switch__6731__auto__){
return (function() {
var state_machine__6732__auto__ = null;
var state_machine__6732__auto____0 = (function (){var statearr_9504 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9504[0] = state_machine__6732__auto__);
(statearr_9504[1] = 1);
return statearr_9504;
});
var state_machine__6732__auto____1 = (function (state_9487){while(true){
var ret_value__6733__auto__ = (function (){try{while(true){
var result__6734__auto__ = switch__6731__auto__.call(null,state_9487);if(cljs.core.keyword_identical_QMARK_.call(null,result__6734__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6734__auto__;
}
break;
}
}catch (e9505){if((e9505 instanceof Object))
{var ex__6735__auto__ = e9505;var statearr_9506_9514 = state_9487;(statearr_9506_9514[5] = ex__6735__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9487);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9505;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6733__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9515 = state_9487;
state_9487 = G__9515;
continue;
}
} else
{return ret_value__6733__auto__;
}
break;
}
});
state_machine__6732__auto__ = function(state_9487){
switch(arguments.length){
case 0:
return state_machine__6732__auto____0.call(this);
case 1:
return state_machine__6732__auto____1.call(this,state_9487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6732__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6732__auto____0;
state_machine__6732__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6732__auto____1;
return state_machine__6732__auto__;
})()
;})(switch__6731__auto__))
})();var state__6748__auto__ = (function (){var statearr_9507 = f__6747__auto__.call(null);(statearr_9507[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6746__auto__);
return statearr_9507;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6748__auto__);
}));
return c__6746__auto__;
});
photosure.client.gallery.t9405.prototype.om$core$IInitState$ = true;
photosure.client.gallery.t9405.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"slide-chan","slide-chan",2056802656),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"anim-in-progress","anim-in-progress",3132057483),false], null);
});
photosure.client.gallery.t9405.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9407){var self__ = this;
var _9407__$1 = this;return self__.meta9406;
});
photosure.client.gallery.t9405.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9407,meta9406__$1){var self__ = this;
var _9407__$1 = this;return (new photosure.client.gallery.t9405(self__.owner,self__.app,self__.gallery,meta9406__$1));
});
photosure.client.gallery.__GT_t9405 = (function __GT_t9405(owner__$1,app__$1,gallery__$1,meta9406){return (new photosure.client.gallery.t9405(owner__$1,app__$1,gallery__$1,meta9406));
});
}
return (new photosure.client.gallery.t9405(owner,app,gallery,null));
});
photosure.client.gallery.run = (function run(){return om.core.root.call(null,photosure.client.gallery.gallery,photosure.client.gallery.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("gallery")], null));
});

//# sourceMappingURL=gallery.js.map