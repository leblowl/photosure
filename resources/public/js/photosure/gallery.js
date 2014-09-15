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
photosure.gallery.photo_view = (function photo_view(photo,owner){if(typeof photosure.gallery.t9585 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.gallery.t9585 = (function (owner,photo,photo_view,meta9586){
this.owner = owner;
this.photo = photo;
this.photo_view = photo_view;
this.meta9586 = meta9586;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.gallery.t9585.cljs$lang$type = true;
photosure.gallery.t9585.cljs$lang$ctorStr = "photosure.gallery/t9585";
photosure.gallery.t9585.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.gallery/t9585");
});
photosure.gallery.t9585.prototype.om$core$IRender$ = true;
photosure.gallery.t9585.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": ("frame "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(self__.photo)))?"hidden":cljs.core.get.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(self__.photo),(0)))))},React.DOM.img({"onLoad": ((function (this$__$1){
return (function (){return photosure.gallery.img_loaded.call(null,self__.photo);
});})(this$__$1))
, "src": new cljs.core.Keyword(null,"photo","photo",-52852781).cljs$core$IFn$_invoke$arity$1(self__.photo), "className": ("photo"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"loaded","loaded",-1246482293).cljs$core$IFn$_invoke$arity$1(self__.photo))?" loaded":null)))}));
});
photosure.gallery.t9585.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9587){var self__ = this;
var _9587__$1 = this;return self__.meta9586;
});
photosure.gallery.t9585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9587,meta9586__$1){var self__ = this;
var _9587__$1 = this;return (new photosure.gallery.t9585(self__.owner,self__.photo,self__.photo_view,meta9586__$1));
});
photosure.gallery.__GT_t9585 = (function __GT_t9585(owner__$1,photo__$1,photo_view__$1,meta9586){return (new photosure.gallery.t9585(owner__$1,photo__$1,photo_view__$1,meta9586));
});
}
return (new photosure.gallery.t9585(owner,photo,photo_view,null));
});
photosure.gallery.prev_btn = (function prev_btn(app,owner){if(typeof photosure.gallery.t9593 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.gallery.t9593 = (function (owner,app,prev_btn,meta9594){
this.owner = owner;
this.app = app;
this.prev_btn = prev_btn;
this.meta9594 = meta9594;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.gallery.t9593.cljs$lang$type = true;
photosure.gallery.t9593.cljs$lang$ctorStr = "photosure.gallery/t9593";
photosure.gallery.t9593.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.gallery/t9593");
});
photosure.gallery.t9593.prototype.om$core$IRenderState$ = true;
photosure.gallery.t9593.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__9596){var self__ = this;
var map__9597 = p__9596;var map__9597__$1 = ((cljs.core.seq_QMARK_.call(null,map__9597))?cljs.core.apply.call(null,cljs.core.hash_map,map__9597):map__9597);var disabled = cljs.core.get.call(null,map__9597__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));var slide_chan = cljs.core.get.call(null,map__9597__$1,new cljs.core.Keyword(null,"slide-chan","slide-chan",-416984986));var this$__$1 = this;return React.DOM.div({"onClick": ((function (this$__$1,map__9597,map__9597__$1,disabled,slide_chan){
return (function (e){return cljs.core.async.put_BANG_.call(null,slide_chan,"prev");
});})(this$__$1,map__9597,map__9597__$1,disabled,slide_chan))
, "className": ("btn"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(disabled)?" disabled":null))), "id": "prev-btn"},React.DOM.p({"id": "prev-arrow"},goog.string.unescapeEntities("&#10092;")));
});
photosure.gallery.t9593.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9595){var self__ = this;
var _9595__$1 = this;return self__.meta9594;
});
photosure.gallery.t9593.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9595,meta9594__$1){var self__ = this;
var _9595__$1 = this;return (new photosure.gallery.t9593(self__.owner,self__.app,self__.prev_btn,meta9594__$1));
});
photosure.gallery.__GT_t9593 = (function __GT_t9593(owner__$1,app__$1,prev_btn__$1,meta9594){return (new photosure.gallery.t9593(owner__$1,app__$1,prev_btn__$1,meta9594));
});
}
return (new photosure.gallery.t9593(owner,app,prev_btn,null));
});
photosure.gallery.next_btn = (function next_btn(app,owner){if(typeof photosure.gallery.t9603 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.gallery.t9603 = (function (owner,app,next_btn,meta9604){
this.owner = owner;
this.app = app;
this.next_btn = next_btn;
this.meta9604 = meta9604;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.gallery.t9603.cljs$lang$type = true;
photosure.gallery.t9603.cljs$lang$ctorStr = "photosure.gallery/t9603";
photosure.gallery.t9603.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.gallery/t9603");
});
photosure.gallery.t9603.prototype.om$core$IRenderState$ = true;
photosure.gallery.t9603.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__9606){var self__ = this;
var map__9607 = p__9606;var map__9607__$1 = ((cljs.core.seq_QMARK_.call(null,map__9607))?cljs.core.apply.call(null,cljs.core.hash_map,map__9607):map__9607);var disabled = cljs.core.get.call(null,map__9607__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));var slide_chan = cljs.core.get.call(null,map__9607__$1,new cljs.core.Keyword(null,"slide-chan","slide-chan",-416984986));var this$__$1 = this;return React.DOM.div({"onClick": ((function (this$__$1,map__9607,map__9607__$1,disabled,slide_chan){
return (function (e){return cljs.core.async.put_BANG_.call(null,slide_chan,"next");
});})(this$__$1,map__9607,map__9607__$1,disabled,slide_chan))
, "className": ("btn"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(disabled)?" disabled":null))), "id": "next-btn"},React.DOM.p({"id": "next-arrow"},goog.string.unescapeEntities("&#10093;")));
});
photosure.gallery.t9603.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9605){var self__ = this;
var _9605__$1 = this;return self__.meta9604;
});
photosure.gallery.t9603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9605,meta9604__$1){var self__ = this;
var _9605__$1 = this;return (new photosure.gallery.t9603(self__.owner,self__.app,self__.next_btn,meta9604__$1));
});
photosure.gallery.__GT_t9603 = (function __GT_t9603(owner__$1,app__$1,next_btn__$1,meta9604){return (new photosure.gallery.t9603(owner__$1,app__$1,next_btn__$1,meta9604));
});
}
return (new photosure.gallery.t9603(owner,app,next_btn,null));
});
photosure.gallery.gallery = (function gallery(app,owner){if(typeof photosure.gallery.t9706 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.gallery.t9706 = (function (owner,app,gallery,meta9707){
this.owner = owner;
this.app = app;
this.gallery = gallery;
this.meta9707 = meta9707;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.gallery.t9706.cljs$lang$type = true;
photosure.gallery.t9706.cljs$lang$ctorStr = "photosure.gallery/t9706";
photosure.gallery.t9706.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.gallery/t9706");
});
photosure.gallery.t9706.prototype.om$core$IRenderState$ = true;
photosure.gallery.t9706.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__9709){var self__ = this;
var map__9710 = p__9709;var map__9710__$1 = ((cljs.core.seq_QMARK_.call(null,map__9710))?cljs.core.apply.call(null,cljs.core.hash_map,map__9710):map__9710);var anim_in_progress = cljs.core.get.call(null,map__9710__$1,new cljs.core.Keyword(null,"anim-in-progress","anim-in-progress",-170743916));var slide_chan = cljs.core.get.call(null,map__9710__$1,new cljs.core.Keyword(null,"slide-chan","slide-chan",-416984986));var this$__$1 = this;return React.DOM.div({"id": "photo-gallery-container"},React.DOM.div({"id": "left-pane"},om.core.build.call(null,photosure.gallery.prev_btn,self__.app,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slide-chan","slide-chan",-416984986),slide_chan], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),anim_in_progress], null)], null))),cljs.core.apply.call(null,om.dom.div,{"className": ((photosure.gallery.all_loaded_QMARK_.call(null))?"loaded":null), "id": "photo-gallery"},om.core.build_all.call(null,photosure.gallery.photo_view,new cljs.core.Keyword(null,"photos","photos",11691538).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"photo","photo",-52852781)], null))),React.DOM.div({"id": "right-pane"},om.core.build.call(null,photosure.gallery.next_btn,self__.app,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slide-chan","slide-chan",-416984986),slide_chan], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),anim_in_progress], null)], null))));
});
photosure.gallery.t9706.prototype.om$core$IWillMount$ = true;
photosure.gallery.t9706.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var slide_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"slide-chan","slide-chan",-416984986));var c__6367__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto__,slide_chan,___$1){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto__,slide_chan,___$1){
return (function (state_9781){var state_val_9782 = (state_9781[(1)]);if((state_val_9782 === (8)))
{var inst_9775 = (state_9781[(2)]);var inst_9776 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"anim-in-progress","anim-in-progress",-170743916),false);var state_9781__$1 = (function (){var statearr_9783 = state_9781;(statearr_9783[(7)] = inst_9775);
(statearr_9783[(8)] = inst_9776);
return statearr_9783;
})();var statearr_9784_9802 = state_9781__$1;(statearr_9784_9802[(2)] = null);
(statearr_9784_9802[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9782 === (7)))
{var inst_9741 = (state_9781[(2)]);var inst_9742 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"anim-in-progress","anim-in-progress",-170743916),true);var inst_9743 = cljs.core.PersistentVector.EMPTY_NODE;var inst_9744 = cljs.core.deref.call(null,self__.app);var inst_9745 = new cljs.core.Keyword(null,"curr","curr",-1092372808).cljs$core$IFn$_invoke$arity$1(inst_9744);var inst_9746 = cljs.core.get.call(null,inst_9745,(0));var inst_9747 = [new cljs.core.Keyword(null,"photos","photos",11691538),inst_9746,new cljs.core.Keyword(null,"pos","pos",-864607220)];var inst_9748 = (new cljs.core.PersistentVector(null,3,(5),inst_9743,inst_9747,null));var inst_9749 = cljs.core.PersistentVector.EMPTY_NODE;var inst_9750 = ["left"];var inst_9751 = (new cljs.core.PersistentVector(null,1,(5),inst_9749,inst_9750,null));var inst_9752 = om.core.update_BANG_.call(null,self__.app,inst_9748,inst_9751);var inst_9753 = cljs.core.PersistentVector.EMPTY_NODE;var inst_9754 = cljs.core.deref.call(null,self__.app);var inst_9755 = new cljs.core.Keyword(null,"curr","curr",-1092372808).cljs$core$IFn$_invoke$arity$1(inst_9754);var inst_9756 = cljs.core.get.call(null,inst_9755,(1));var inst_9757 = [new cljs.core.Keyword(null,"photos","photos",11691538),inst_9756,new cljs.core.Keyword(null,"pos","pos",-864607220)];var inst_9758 = (new cljs.core.PersistentVector(null,3,(5),inst_9753,inst_9757,null));var inst_9759 = cljs.core.PersistentVector.EMPTY_NODE;var inst_9760 = ["center"];var inst_9761 = (new cljs.core.PersistentVector(null,1,(5),inst_9759,inst_9760,null));var inst_9762 = om.core.update_BANG_.call(null,self__.app,inst_9758,inst_9761);var inst_9763 = cljs.core.PersistentVector.EMPTY_NODE;var inst_9764 = cljs.core.deref.call(null,self__.app);var inst_9765 = new cljs.core.Keyword(null,"curr","curr",-1092372808).cljs$core$IFn$_invoke$arity$1(inst_9764);var inst_9766 = cljs.core.get.call(null,inst_9765,(2));var inst_9767 = [new cljs.core.Keyword(null,"photos","photos",11691538),inst_9766,new cljs.core.Keyword(null,"pos","pos",-864607220)];var inst_9768 = (new cljs.core.PersistentVector(null,3,(5),inst_9763,inst_9767,null));var inst_9769 = cljs.core.PersistentVector.EMPTY_NODE;var inst_9770 = ["right"];var inst_9771 = (new cljs.core.PersistentVector(null,1,(5),inst_9769,inst_9770,null));var inst_9772 = om.core.update_BANG_.call(null,self__.app,inst_9768,inst_9771);var inst_9773 = cljs.core.async.timeout.call(null,(1000));var state_9781__$1 = (function (){var statearr_9785 = state_9781;(statearr_9785[(9)] = inst_9741);
(statearr_9785[(10)] = inst_9742);
(statearr_9785[(11)] = inst_9752);
(statearr_9785[(12)] = inst_9772);
(statearr_9785[(13)] = inst_9762);
return statearr_9785;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9781__$1,(8),inst_9773);
} else
{if((state_val_9782 === (6)))
{var inst_9716 = (state_9781[(14)]);var inst_9714 = (state_9781[(15)]);var inst_9730 = cljs.core.PersistentVector.EMPTY_NODE;var inst_9731 = cljs.core.deref.call(null,self__.app);var inst_9732 = new cljs.core.Keyword(null,"curr","curr",-1092372808).cljs$core$IFn$_invoke$arity$1(inst_9731);var inst_9733 = cljs.core.get.call(null,inst_9732,(0));var inst_9734 = [new cljs.core.Keyword(null,"photos","photos",11691538),inst_9733,new cljs.core.Keyword(null,"pos","pos",-864607220)];var inst_9735 = (new cljs.core.PersistentVector(null,3,(5),inst_9730,inst_9734,null));var inst_9736 = cljs.core.PersistentVector.EMPTY;var inst_9737 = om.core.update_BANG_.call(null,self__.app,inst_9735,inst_9736);var inst_9738 = (function (){var cmd = inst_9716;var len = inst_9714;return ((function (cmd,len,inst_9716,inst_9714,inst_9730,inst_9731,inst_9732,inst_9733,inst_9734,inst_9735,inst_9736,inst_9737,state_val_9782,c__6367__auto__,slide_chan,___$1){
return (function (___$2){return cljs.core.apply.call(null,cljs.core.vector,cljs.core.map.call(null,((function (cmd,len,inst_9716,inst_9714,inst_9730,inst_9731,inst_9732,inst_9733,inst_9734,inst_9735,inst_9736,inst_9737,state_val_9782,c__6367__auto__,slide_chan,___$1){
return (function (p1__9609_SHARP_){return cljs.core.mod.call(null,(p1__9609_SHARP_ + (1)),len);
});})(cmd,len,inst_9716,inst_9714,inst_9730,inst_9731,inst_9732,inst_9733,inst_9734,inst_9735,inst_9736,inst_9737,state_val_9782,c__6367__auto__,slide_chan,___$1))
,___$2));
});
;})(cmd,len,inst_9716,inst_9714,inst_9730,inst_9731,inst_9732,inst_9733,inst_9734,inst_9735,inst_9736,inst_9737,state_val_9782,c__6367__auto__,slide_chan,___$1))
})();var inst_9739 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"curr","curr",-1092372808),inst_9738);var state_9781__$1 = (function (){var statearr_9786 = state_9781;(statearr_9786[(16)] = inst_9737);
return statearr_9786;
})();var statearr_9787_9803 = state_9781__$1;(statearr_9787_9803[(2)] = inst_9739);
(statearr_9787_9803[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9782 === (5)))
{var inst_9716 = (state_9781[(14)]);var inst_9714 = (state_9781[(15)]);var inst_9719 = cljs.core.PersistentVector.EMPTY_NODE;var inst_9720 = cljs.core.deref.call(null,self__.app);var inst_9721 = new cljs.core.Keyword(null,"curr","curr",-1092372808).cljs$core$IFn$_invoke$arity$1(inst_9720);var inst_9722 = cljs.core.get.call(null,inst_9721,(2));var inst_9723 = [new cljs.core.Keyword(null,"photos","photos",11691538),inst_9722,new cljs.core.Keyword(null,"pos","pos",-864607220)];var inst_9724 = (new cljs.core.PersistentVector(null,3,(5),inst_9719,inst_9723,null));var inst_9725 = cljs.core.PersistentVector.EMPTY;var inst_9726 = om.core.update_BANG_.call(null,self__.app,inst_9724,inst_9725);var inst_9727 = (function (){var cmd = inst_9716;var len = inst_9714;return ((function (cmd,len,inst_9716,inst_9714,inst_9719,inst_9720,inst_9721,inst_9722,inst_9723,inst_9724,inst_9725,inst_9726,state_val_9782,c__6367__auto__,slide_chan,___$1){
return (function (___$2){return cljs.core.apply.call(null,cljs.core.vector,cljs.core.map.call(null,((function (cmd,len,inst_9716,inst_9714,inst_9719,inst_9720,inst_9721,inst_9722,inst_9723,inst_9724,inst_9725,inst_9726,state_val_9782,c__6367__auto__,slide_chan,___$1){
return (function (p1__9608_SHARP_){return cljs.core.mod.call(null,(p1__9608_SHARP_ - (1)),len);
});})(cmd,len,inst_9716,inst_9714,inst_9719,inst_9720,inst_9721,inst_9722,inst_9723,inst_9724,inst_9725,inst_9726,state_val_9782,c__6367__auto__,slide_chan,___$1))
,___$2));
});
;})(cmd,len,inst_9716,inst_9714,inst_9719,inst_9720,inst_9721,inst_9722,inst_9723,inst_9724,inst_9725,inst_9726,state_val_9782,c__6367__auto__,slide_chan,___$1))
})();var inst_9728 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"curr","curr",-1092372808),inst_9727);var state_9781__$1 = (function (){var statearr_9788 = state_9781;(statearr_9788[(17)] = inst_9726);
return statearr_9788;
})();var statearr_9789_9804 = state_9781__$1;(statearr_9789_9804[(2)] = inst_9728);
(statearr_9789_9804[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9782 === (4)))
{var inst_9716 = (state_9781[(14)]);var inst_9716__$1 = (state_9781[(2)]);var inst_9717 = cljs.core._EQ_.call(null,inst_9716__$1,"next");var state_9781__$1 = (function (){var statearr_9790 = state_9781;(statearr_9790[(14)] = inst_9716__$1);
return statearr_9790;
})();if(inst_9717)
{var statearr_9791_9805 = state_9781__$1;(statearr_9791_9805[(1)] = (5));
} else
{var statearr_9792_9806 = state_9781__$1;(statearr_9792_9806[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9782 === (3)))
{var inst_9779 = (state_9781[(2)]);var state_9781__$1 = state_9781;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9781__$1,inst_9779);
} else
{if((state_val_9782 === (2)))
{var inst_9712 = cljs.core.deref.call(null,self__.app);var inst_9713 = new cljs.core.Keyword(null,"photos","photos",11691538).cljs$core$IFn$_invoke$arity$1(inst_9712);var inst_9714 = cljs.core.count.call(null,inst_9713);var state_9781__$1 = (function (){var statearr_9793 = state_9781;(statearr_9793[(15)] = inst_9714);
return statearr_9793;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9781__$1,(4),slide_chan);
} else
{if((state_val_9782 === (1)))
{var state_9781__$1 = state_9781;var statearr_9794_9807 = state_9781__$1;(statearr_9794_9807[(2)] = null);
(statearr_9794_9807[(1)] = (2));
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
var state_machine__6353__auto____0 = (function (){var statearr_9798 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9798[(0)] = state_machine__6353__auto__);
(statearr_9798[(1)] = (1));
return statearr_9798;
});
var state_machine__6353__auto____1 = (function (state_9781){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_9781);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e9799){if((e9799 instanceof Object))
{var ex__6356__auto__ = e9799;var statearr_9800_9808 = state_9781;(statearr_9800_9808[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9781);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e9799;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9809 = state_9781;
state_9781 = G__9809;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_9781){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_9781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto__,slide_chan,___$1))
})();var state__6369__auto__ = (function (){var statearr_9801 = f__6368__auto__.call(null);(statearr_9801[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto__);
return statearr_9801;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto__,slide_chan,___$1))
);
return c__6367__auto__;
});
photosure.gallery.t9706.prototype.om$core$IInitState$ = true;
photosure.gallery.t9706.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"slide-chan","slide-chan",-416984986),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"anim-in-progress","anim-in-progress",-170743916),false], null);
});
photosure.gallery.t9706.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9708){var self__ = this;
var _9708__$1 = this;return self__.meta9707;
});
photosure.gallery.t9706.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9708,meta9707__$1){var self__ = this;
var _9708__$1 = this;return (new photosure.gallery.t9706(self__.owner,self__.app,self__.gallery,meta9707__$1));
});
photosure.gallery.__GT_t9706 = (function __GT_t9706(owner__$1,app__$1,gallery__$1,meta9707){return (new photosure.gallery.t9706(owner__$1,app__$1,gallery__$1,meta9707));
});
}
return (new photosure.gallery.t9706(owner,app,gallery,null));
});
photosure.gallery.render = (function render(){return om.core.root.call(null,photosure.gallery.gallery,photosure.gallery.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("dynamic-content")], null));
});

//# sourceMappingURL=gallery.js.map