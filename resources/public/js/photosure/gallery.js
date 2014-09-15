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
photosure.gallery.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"photos","photos",4319837171),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [photosure.gallery.photo.call(null,"images/cpleblow1.jpg",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["center"], null)),photosure.gallery.photo.call(null,"images/cpleblow2.jpg",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["right"], null)),photosure.gallery.photo.call(null,"images/cpleblow3.jpg",cljs.core.PersistentVector.EMPTY),photosure.gallery.photo.call(null,"images/cpleblow4.jpg",cljs.core.PersistentVector.EMPTY),photosure.gallery.photo.call(null,"images/cpleblow5.jpg",cljs.core.PersistentVector.EMPTY),photosure.gallery.photo.call(null,"images/cpleblow6.jpg",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["left"], null))], null),new cljs.core.Keyword(null,"curr","curr",1016969636),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,1,2], null)], null));
photosure.gallery.img_loaded = (function img_loaded(photo){return om.core.update_BANG_.call(null,photo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded","loaded",4211352439)], null),true);
});
photosure.gallery.all_loaded_QMARK_ = (function all_loaded_QMARK_(){var total = cljs.core.count.call(null,new cljs.core.Keyword(null,"photos","photos",4319837171).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,photosure.gallery.app_state)));var loaded = cljs.core.count.call(null,cljs.core.get.call(null,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"loaded","loaded",4211352439),new cljs.core.Keyword(null,"photos","photos",4319837171).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,photosure.gallery.app_state))),true));return cljs.core._EQ_.call(null,1,(total / loaded));
});
photosure.gallery.photo_view = (function photo_view(photo,owner){if(typeof photosure.gallery.t14489 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.gallery.t14489 = (function (owner,photo,photo_view,meta14490){
this.owner = owner;
this.photo = photo;
this.photo_view = photo_view;
this.meta14490 = meta14490;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.gallery.t14489.cljs$lang$type = true;
photosure.gallery.t14489.cljs$lang$ctorStr = "photosure.gallery/t14489";
photosure.gallery.t14489.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.gallery/t14489");
});
photosure.gallery.t14489.prototype.om$core$IRender$ = true;
photosure.gallery.t14489.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": [cljs.core.str("frame "),cljs.core.str(((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(self__.photo)))?"hidden":cljs.core.get.call(null,new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(self__.photo),0)))].join('')},React.DOM.img({"onLoad": (function (){return photosure.gallery.img_loaded.call(null,self__.photo);
}), "src": new cljs.core.Keyword(null,"photo","photo",1120547236).cljs$core$IFn$_invoke$arity$1(self__.photo), "className": [cljs.core.str("photo"),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"loaded","loaded",4211352439).cljs$core$IFn$_invoke$arity$1(self__.photo))?" loaded":null))].join('')}));
});
photosure.gallery.t14489.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14491){var self__ = this;
var _14491__$1 = this;return self__.meta14490;
});
photosure.gallery.t14489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14491,meta14490__$1){var self__ = this;
var _14491__$1 = this;return (new photosure.gallery.t14489(self__.owner,self__.photo,self__.photo_view,meta14490__$1));
});
photosure.gallery.__GT_t14489 = (function __GT_t14489(owner__$1,photo__$1,photo_view__$1,meta14490){return (new photosure.gallery.t14489(owner__$1,photo__$1,photo_view__$1,meta14490));
});
}
return (new photosure.gallery.t14489(owner,photo,photo_view,null));
});
photosure.gallery.prev_btn = (function prev_btn(app,owner){if(typeof photosure.gallery.t14497 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.gallery.t14497 = (function (owner,app,prev_btn,meta14498){
this.owner = owner;
this.app = app;
this.prev_btn = prev_btn;
this.meta14498 = meta14498;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.gallery.t14497.cljs$lang$type = true;
photosure.gallery.t14497.cljs$lang$ctorStr = "photosure.gallery/t14497";
photosure.gallery.t14497.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.gallery/t14497");
});
photosure.gallery.t14497.prototype.om$core$IRenderState$ = true;
photosure.gallery.t14497.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__14500){var self__ = this;
var map__14501 = p__14500;var map__14501__$1 = ((cljs.core.seq_QMARK_.call(null,map__14501))?cljs.core.apply.call(null,cljs.core.hash_map,map__14501):map__14501);var disabled = cljs.core.get.call(null,map__14501__$1,new cljs.core.Keyword(null,"disabled","disabled",1284845038));var slide_chan = cljs.core.get.call(null,map__14501__$1,new cljs.core.Keyword(null,"slide-chan","slide-chan",2056802656));var this$__$1 = this;return React.DOM.div({"onClick": (function (e){return cljs.core.async.put_BANG_.call(null,slide_chan,"prev");
}), "className": [cljs.core.str("btn"),cljs.core.str((cljs.core.truth_(disabled)?" disabled":null))].join(''), "id": "prev-btn"},React.DOM.p({"id": "prev-arrow"},goog.string.unescapeEntities("&#10092;")));
});
photosure.gallery.t14497.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14499){var self__ = this;
var _14499__$1 = this;return self__.meta14498;
});
photosure.gallery.t14497.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14499,meta14498__$1){var self__ = this;
var _14499__$1 = this;return (new photosure.gallery.t14497(self__.owner,self__.app,self__.prev_btn,meta14498__$1));
});
photosure.gallery.__GT_t14497 = (function __GT_t14497(owner__$1,app__$1,prev_btn__$1,meta14498){return (new photosure.gallery.t14497(owner__$1,app__$1,prev_btn__$1,meta14498));
});
}
return (new photosure.gallery.t14497(owner,app,prev_btn,null));
});
photosure.gallery.next_btn = (function next_btn(app,owner){if(typeof photosure.gallery.t14507 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.gallery.t14507 = (function (owner,app,next_btn,meta14508){
this.owner = owner;
this.app = app;
this.next_btn = next_btn;
this.meta14508 = meta14508;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.gallery.t14507.cljs$lang$type = true;
photosure.gallery.t14507.cljs$lang$ctorStr = "photosure.gallery/t14507";
photosure.gallery.t14507.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.gallery/t14507");
});
photosure.gallery.t14507.prototype.om$core$IRenderState$ = true;
photosure.gallery.t14507.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__14510){var self__ = this;
var map__14511 = p__14510;var map__14511__$1 = ((cljs.core.seq_QMARK_.call(null,map__14511))?cljs.core.apply.call(null,cljs.core.hash_map,map__14511):map__14511);var disabled = cljs.core.get.call(null,map__14511__$1,new cljs.core.Keyword(null,"disabled","disabled",1284845038));var slide_chan = cljs.core.get.call(null,map__14511__$1,new cljs.core.Keyword(null,"slide-chan","slide-chan",2056802656));var this$__$1 = this;return React.DOM.div({"onClick": (function (e){return cljs.core.async.put_BANG_.call(null,slide_chan,"next");
}), "className": [cljs.core.str("btn"),cljs.core.str((cljs.core.truth_(disabled)?" disabled":null))].join(''), "id": "next-btn"},React.DOM.p({"id": "next-arrow"},goog.string.unescapeEntities("&#10093;")));
});
photosure.gallery.t14507.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14509){var self__ = this;
var _14509__$1 = this;return self__.meta14508;
});
photosure.gallery.t14507.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14509,meta14508__$1){var self__ = this;
var _14509__$1 = this;return (new photosure.gallery.t14507(self__.owner,self__.app,self__.next_btn,meta14508__$1));
});
photosure.gallery.__GT_t14507 = (function __GT_t14507(owner__$1,app__$1,next_btn__$1,meta14508){return (new photosure.gallery.t14507(owner__$1,app__$1,next_btn__$1,meta14508));
});
}
return (new photosure.gallery.t14507(owner,app,next_btn,null));
});
photosure.gallery.gallery = (function gallery(app,owner){if(typeof photosure.gallery.t14600 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.gallery.t14600 = (function (owner,app,gallery,meta14601){
this.owner = owner;
this.app = app;
this.gallery = gallery;
this.meta14601 = meta14601;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.gallery.t14600.cljs$lang$type = true;
photosure.gallery.t14600.cljs$lang$ctorStr = "photosure.gallery/t14600";
photosure.gallery.t14600.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.gallery/t14600");
});
photosure.gallery.t14600.prototype.om$core$IRenderState$ = true;
photosure.gallery.t14600.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__14603){var self__ = this;
var map__14604 = p__14603;var map__14604__$1 = ((cljs.core.seq_QMARK_.call(null,map__14604))?cljs.core.apply.call(null,cljs.core.hash_map,map__14604):map__14604);var anim_in_progress = cljs.core.get.call(null,map__14604__$1,new cljs.core.Keyword(null,"anim-in-progress","anim-in-progress",3132057483));var slide_chan = cljs.core.get.call(null,map__14604__$1,new cljs.core.Keyword(null,"slide-chan","slide-chan",2056802656));var this$__$1 = this;return React.DOM.div({"id": "photo-gallery-container"},React.DOM.div({"id": "left-pane"},om.core.build.call(null,photosure.gallery.prev_btn,self__.app,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slide-chan","slide-chan",2056802656),slide_chan], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",1284845038),anim_in_progress], null)], null))),cljs.core.apply.call(null,om.dom.div,{"className": ((photosure.gallery.all_loaded_QMARK_.call(null))?"loaded":null), "id": "photo-gallery"},om.core.build_all.call(null,photosure.gallery.photo_view,new cljs.core.Keyword(null,"photos","photos",4319837171).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"photo","photo",1120547236)], null))),React.DOM.div({"id": "right-pane"},om.core.build.call(null,photosure.gallery.next_btn,self__.app,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slide-chan","slide-chan",2056802656),slide_chan], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",1284845038),anim_in_progress], null)], null))));
});
photosure.gallery.t14600.prototype.om$core$IWillMount$ = true;
photosure.gallery.t14600.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var slide_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"slide-chan","slide-chan",2056802656));var c__6222__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6223__auto__ = (function (){var switch__6207__auto__ = (function (state_14665){var state_val_14666 = (state_14665[1]);if((state_val_14666 === 8))
{var inst_14659 = (state_14665[2]);var inst_14660 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"anim-in-progress","anim-in-progress",3132057483),false);var state_14665__$1 = (function (){var statearr_14667 = state_14665;(statearr_14667[7] = inst_14660);
(statearr_14667[8] = inst_14659);
return statearr_14667;
})();var statearr_14668_14686 = state_14665__$1;(statearr_14668_14686[2] = null);
(statearr_14668_14686[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14666 === 7))
{var inst_14631 = (state_14665[2]);var inst_14632 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"anim-in-progress","anim-in-progress",3132057483),true);var inst_14633 = cljs.core.deref.call(null,self__.app);var inst_14634 = new cljs.core.Keyword(null,"curr","curr",1016969636).cljs$core$IFn$_invoke$arity$1(inst_14633);var inst_14635 = cljs.core.get.call(null,inst_14634,0);var inst_14636 = [new cljs.core.Keyword(null,"photos","photos",4319837171),inst_14635,new cljs.core.Keyword(null,"pos","pos",1014015430)];var inst_14637 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_14636,null));var inst_14638 = ["left"];var inst_14639 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_14638,null));var inst_14640 = om.core.update_BANG_.call(null,self__.app,inst_14637,inst_14639);var inst_14641 = cljs.core.deref.call(null,self__.app);var inst_14642 = new cljs.core.Keyword(null,"curr","curr",1016969636).cljs$core$IFn$_invoke$arity$1(inst_14641);var inst_14643 = cljs.core.get.call(null,inst_14642,1);var inst_14644 = [new cljs.core.Keyword(null,"photos","photos",4319837171),inst_14643,new cljs.core.Keyword(null,"pos","pos",1014015430)];var inst_14645 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_14644,null));var inst_14646 = ["center"];var inst_14647 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_14646,null));var inst_14648 = om.core.update_BANG_.call(null,self__.app,inst_14645,inst_14647);var inst_14649 = cljs.core.deref.call(null,self__.app);var inst_14650 = new cljs.core.Keyword(null,"curr","curr",1016969636).cljs$core$IFn$_invoke$arity$1(inst_14649);var inst_14651 = cljs.core.get.call(null,inst_14650,2);var inst_14652 = [new cljs.core.Keyword(null,"photos","photos",4319837171),inst_14651,new cljs.core.Keyword(null,"pos","pos",1014015430)];var inst_14653 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_14652,null));var inst_14654 = ["right"];var inst_14655 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_14654,null));var inst_14656 = om.core.update_BANG_.call(null,self__.app,inst_14653,inst_14655);var inst_14657 = cljs.core.async.timeout.call(null,1000);var state_14665__$1 = (function (){var statearr_14669 = state_14665;(statearr_14669[9] = inst_14640);
(statearr_14669[10] = inst_14656);
(statearr_14669[11] = inst_14648);
(statearr_14669[12] = inst_14632);
(statearr_14669[13] = inst_14631);
return statearr_14669;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14665__$1,8,inst_14657);
} else
{if((state_val_14666 === 6))
{var inst_14610 = (state_14665[14]);var inst_14608 = (state_14665[15]);var inst_14622 = cljs.core.deref.call(null,self__.app);var inst_14623 = new cljs.core.Keyword(null,"curr","curr",1016969636).cljs$core$IFn$_invoke$arity$1(inst_14622);var inst_14624 = cljs.core.get.call(null,inst_14623,0);var inst_14625 = [new cljs.core.Keyword(null,"photos","photos",4319837171),inst_14624,new cljs.core.Keyword(null,"pos","pos",1014015430)];var inst_14626 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_14625,null));var inst_14627 = om.core.update_BANG_.call(null,self__.app,inst_14626,cljs.core.PersistentVector.EMPTY);var inst_14628 = (function (){var cmd = inst_14610;var len = inst_14608;return ((function (cmd,len,inst_14610,inst_14608,inst_14622,inst_14623,inst_14624,inst_14625,inst_14626,inst_14627,state_val_14666){
return (function (___$2){return cljs.core.apply.call(null,cljs.core.vector,cljs.core.map.call(null,((function (cmd,len,inst_14610,inst_14608,inst_14622,inst_14623,inst_14624,inst_14625,inst_14626,inst_14627,state_val_14666){
return (function (p1__14513_SHARP_){return cljs.core.mod.call(null,(p1__14513_SHARP_ + 1),len);
});})(cmd,len,inst_14610,inst_14608,inst_14622,inst_14623,inst_14624,inst_14625,inst_14626,inst_14627,state_val_14666))
,___$2));
});
;})(cmd,len,inst_14610,inst_14608,inst_14622,inst_14623,inst_14624,inst_14625,inst_14626,inst_14627,state_val_14666))
})();var inst_14629 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"curr","curr",1016969636),inst_14628);var state_14665__$1 = (function (){var statearr_14670 = state_14665;(statearr_14670[16] = inst_14627);
return statearr_14670;
})();var statearr_14671_14687 = state_14665__$1;(statearr_14671_14687[2] = inst_14629);
(statearr_14671_14687[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14666 === 5))
{var inst_14610 = (state_14665[14]);var inst_14608 = (state_14665[15]);var inst_14613 = cljs.core.deref.call(null,self__.app);var inst_14614 = new cljs.core.Keyword(null,"curr","curr",1016969636).cljs$core$IFn$_invoke$arity$1(inst_14613);var inst_14615 = cljs.core.get.call(null,inst_14614,2);var inst_14616 = [new cljs.core.Keyword(null,"photos","photos",4319837171),inst_14615,new cljs.core.Keyword(null,"pos","pos",1014015430)];var inst_14617 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_14616,null));var inst_14618 = om.core.update_BANG_.call(null,self__.app,inst_14617,cljs.core.PersistentVector.EMPTY);var inst_14619 = (function (){var cmd = inst_14610;var len = inst_14608;return ((function (cmd,len,inst_14610,inst_14608,inst_14613,inst_14614,inst_14615,inst_14616,inst_14617,inst_14618,state_val_14666){
return (function (___$2){return cljs.core.apply.call(null,cljs.core.vector,cljs.core.map.call(null,((function (cmd,len,inst_14610,inst_14608,inst_14613,inst_14614,inst_14615,inst_14616,inst_14617,inst_14618,state_val_14666){
return (function (p1__14512_SHARP_){return cljs.core.mod.call(null,(p1__14512_SHARP_ - 1),len);
});})(cmd,len,inst_14610,inst_14608,inst_14613,inst_14614,inst_14615,inst_14616,inst_14617,inst_14618,state_val_14666))
,___$2));
});
;})(cmd,len,inst_14610,inst_14608,inst_14613,inst_14614,inst_14615,inst_14616,inst_14617,inst_14618,state_val_14666))
})();var inst_14620 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"curr","curr",1016969636),inst_14619);var state_14665__$1 = (function (){var statearr_14672 = state_14665;(statearr_14672[17] = inst_14618);
return statearr_14672;
})();var statearr_14673_14688 = state_14665__$1;(statearr_14673_14688[2] = inst_14620);
(statearr_14673_14688[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14666 === 4))
{var inst_14610 = (state_14665[14]);var inst_14610__$1 = (state_14665[2]);var inst_14611 = cljs.core._EQ_.call(null,inst_14610__$1,"next");var state_14665__$1 = (function (){var statearr_14674 = state_14665;(statearr_14674[14] = inst_14610__$1);
return statearr_14674;
})();if(inst_14611)
{var statearr_14675_14689 = state_14665__$1;(statearr_14675_14689[1] = 5);
} else
{var statearr_14676_14690 = state_14665__$1;(statearr_14676_14690[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14666 === 3))
{var inst_14663 = (state_14665[2]);var state_14665__$1 = state_14665;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14665__$1,inst_14663);
} else
{if((state_val_14666 === 2))
{var inst_14606 = cljs.core.deref.call(null,self__.app);var inst_14607 = new cljs.core.Keyword(null,"photos","photos",4319837171).cljs$core$IFn$_invoke$arity$1(inst_14606);var inst_14608 = cljs.core.count.call(null,inst_14607);var state_14665__$1 = (function (){var statearr_14677 = state_14665;(statearr_14677[15] = inst_14608);
return statearr_14677;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14665__$1,4,slide_chan);
} else
{if((state_val_14666 === 1))
{var state_14665__$1 = state_14665;var statearr_14678_14691 = state_14665__$1;(statearr_14678_14691[2] = null);
(statearr_14678_14691[1] = 2);
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
var state_machine__6208__auto____0 = (function (){var statearr_14682 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14682[0] = state_machine__6208__auto__);
(statearr_14682[1] = 1);
return statearr_14682;
});
var state_machine__6208__auto____1 = (function (state_14665){while(true){
var ret_value__6209__auto__ = (function (){try{while(true){
var result__6210__auto__ = switch__6207__auto__.call(null,state_14665);if(cljs.core.keyword_identical_QMARK_.call(null,result__6210__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6210__auto__;
}
break;
}
}catch (e14683){if((e14683 instanceof Object))
{var ex__6211__auto__ = e14683;var statearr_14684_14692 = state_14665;(statearr_14684_14692[5] = ex__6211__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14665);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14683;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6209__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14693 = state_14665;
state_14665 = G__14693;
continue;
}
} else
{return ret_value__6209__auto__;
}
break;
}
});
state_machine__6208__auto__ = function(state_14665){
switch(arguments.length){
case 0:
return state_machine__6208__auto____0.call(this);
case 1:
return state_machine__6208__auto____1.call(this,state_14665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6208__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6208__auto____0;
state_machine__6208__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6208__auto____1;
return state_machine__6208__auto__;
})()
;})(switch__6207__auto__))
})();var state__6224__auto__ = (function (){var statearr_14685 = f__6223__auto__.call(null);(statearr_14685[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6222__auto__);
return statearr_14685;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6224__auto__);
}));
return c__6222__auto__;
});
photosure.gallery.t14600.prototype.om$core$IInitState$ = true;
photosure.gallery.t14600.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"slide-chan","slide-chan",2056802656),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"anim-in-progress","anim-in-progress",3132057483),false], null);
});
photosure.gallery.t14600.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14602){var self__ = this;
var _14602__$1 = this;return self__.meta14601;
});
photosure.gallery.t14600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14602,meta14601__$1){var self__ = this;
var _14602__$1 = this;return (new photosure.gallery.t14600(self__.owner,self__.app,self__.gallery,meta14601__$1));
});
photosure.gallery.__GT_t14600 = (function __GT_t14600(owner__$1,app__$1,gallery__$1,meta14601){return (new photosure.gallery.t14600(owner__$1,app__$1,gallery__$1,meta14601));
});
}
return (new photosure.gallery.t14600(owner,app,gallery,null));
});
photosure.gallery.render = (function render(){return om.core.root.call(null,photosure.gallery.gallery,photosure.gallery.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("dynamic-content")], null));
});

//# sourceMappingURL=gallery.js.map