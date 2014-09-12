// Compiled by ClojureScript 0.0-2173
goog.provide('photosure.client.blog');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.string');
goog.require('hickory.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('om.dom');
goog.require('goog.string');
goog.require('cljs.core.async');
goog.require('photosure.client.util');
goog.require('hickory.core');
goog.require('photosure.client.util');
cljs.core.enable_console_print_BANG_.call(null);
photosure.client.blog.app_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"posts","posts",1120759621),cljs.core.PersistentVector.EMPTY], null));
photosure.client.blog.parse_caption = (function parse_caption(caption){return cljs.core.map.call(null,hickory.core.as_hiccup,hickory.core.parse_fragment.call(null,caption));
});
photosure.client.blog.caption_line_view = (function caption_line_view(caption_line,owner){if(typeof photosure.client.blog.t19567 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.client.blog.t19567 = (function (owner,caption_line,caption_line_view,meta19568){
this.owner = owner;
this.caption_line = caption_line;
this.caption_line_view = caption_line_view;
this.meta19568 = meta19568;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.client.blog.t19567.cljs$lang$type = true;
photosure.client.blog.t19567.cljs$lang$ctorStr = "photosure.client.blog/t19567";
photosure.client.blog.t19567.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.client.blog/t19567");
});
photosure.client.blog.t19567.prototype.om$core$IRender$ = true;
photosure.client.blog.t19567.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.p({},self__.caption_line);
});
photosure.client.blog.t19567.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19569){var self__ = this;
var _19569__$1 = this;return self__.meta19568;
});
photosure.client.blog.t19567.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19569,meta19568__$1){var self__ = this;
var _19569__$1 = this;return (new photosure.client.blog.t19567(self__.owner,self__.caption_line,self__.caption_line_view,meta19568__$1));
});
photosure.client.blog.__GT_t19567 = (function __GT_t19567(owner__$1,caption_line__$1,caption_line_view__$1,meta19568){return (new photosure.client.blog.t19567(owner__$1,caption_line__$1,caption_line_view__$1,meta19568));
});
}
return (new photosure.client.blog.t19567(owner,caption_line,caption_line_view,null));
});
photosure.client.blog.caption_view = (function caption_view(caption,owner){if(typeof photosure.client.blog.t19574 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.client.blog.t19574 = (function (owner,caption,caption_view,meta19575){
this.owner = owner;
this.caption = caption;
this.caption_view = caption_view;
this.meta19575 = meta19575;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.client.blog.t19574.cljs$lang$type = true;
photosure.client.blog.t19574.cljs$lang$ctorStr = "photosure.client.blog/t19574";
photosure.client.blog.t19574.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.client.blog/t19574");
});
photosure.client.blog.t19574.prototype.om$core$IRender$ = true;
photosure.client.blog.t19574.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.apply.call(null,om.dom.div,{"className": "caption"},om.core.build_all.call(null,photosure.client.blog.caption_line_view,cljs.core.map.call(null,(function (p1__19570_SHARP_){return cljs.core.get.call(null,p1__19570_SHARP_,2);
}),photosure.client.blog.parse_caption.call(null,self__.caption))));
});
photosure.client.blog.t19574.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19576){var self__ = this;
var _19576__$1 = this;return self__.meta19575;
});
photosure.client.blog.t19574.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19576,meta19575__$1){var self__ = this;
var _19576__$1 = this;return (new photosure.client.blog.t19574(self__.owner,self__.caption,self__.caption_view,meta19575__$1));
});
photosure.client.blog.__GT_t19574 = (function __GT_t19574(owner__$1,caption__$1,caption_view__$1,meta19575){return (new photosure.client.blog.t19574(owner__$1,caption__$1,caption_view__$1,meta19575));
});
}
return (new photosure.client.blog.t19574(owner,caption,caption_view,null));
});
photosure.client.blog.post_view = (function post_view(p__19577,owner){var map__19585 = p__19577;var map__19585__$1 = ((cljs.core.seq_QMARK_.call(null,map__19585))?cljs.core.apply.call(null,cljs.core.hash_map,map__19585):map__19585);var id = cljs.core.get.call(null,map__19585__$1,new cljs.core.Keyword(null,"id","id",1013907597));var vec__19586 = cljs.core.get.call(null,map__19585__$1,new cljs.core.Keyword(null,"photos","photos",4319837171));var map__19587 = cljs.core.nth.call(null,vec__19586,0,null);var map__19587__$1 = ((cljs.core.seq_QMARK_.call(null,map__19587))?cljs.core.apply.call(null,cljs.core.hash_map,map__19587):map__19587);var map__19588 = cljs.core.get.call(null,map__19587__$1,new cljs.core.Keyword(null,"original_size","original_size",2877259041));var map__19588__$1 = ((cljs.core.seq_QMARK_.call(null,map__19588))?cljs.core.apply.call(null,cljs.core.hash_map,map__19588):map__19588);var url = cljs.core.get.call(null,map__19588__$1,new cljs.core.Keyword(null,"url","url",1014020321));var caption = cljs.core.get.call(null,map__19585__$1,new cljs.core.Keyword(null,"caption","caption",1566477656));if(typeof photosure.client.blog.t19589 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.client.blog.t19589 = (function (id,map__19588,map__19587,p__19577,map__19585,caption,owner,post_view,vec__19586,url,meta19590){
this.id = id;
this.map__19588 = map__19588;
this.map__19587 = map__19587;
this.p__19577 = p__19577;
this.map__19585 = map__19585;
this.caption = caption;
this.owner = owner;
this.post_view = post_view;
this.vec__19586 = vec__19586;
this.url = url;
this.meta19590 = meta19590;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.client.blog.t19589.cljs$lang$type = true;
photosure.client.blog.t19589.cljs$lang$ctorStr = "photosure.client.blog/t19589";
photosure.client.blog.t19589.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.client.blog/t19589");
});
photosure.client.blog.t19589.prototype.om$core$IRender$ = true;
photosure.client.blog.t19589.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "post", "id": self__.id},React.DOM.div({"className": "blog-photo"},React.DOM.img({"src": self__.url})),om.core.build.call(null,photosure.client.blog.caption_view,self__.caption));
});
photosure.client.blog.t19589.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19591){var self__ = this;
var _19591__$1 = this;return self__.meta19590;
});
photosure.client.blog.t19589.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19591,meta19590__$1){var self__ = this;
var _19591__$1 = this;return (new photosure.client.blog.t19589(self__.id,self__.map__19588,self__.map__19587,self__.p__19577,self__.map__19585,self__.caption,self__.owner,self__.post_view,self__.vec__19586,self__.url,meta19590__$1));
});
photosure.client.blog.__GT_t19589 = (function __GT_t19589(id__$1,map__19588__$2,map__19587__$2,p__19577__$1,map__19585__$2,caption__$1,owner__$1,post_view__$1,vec__19586__$1,url__$1,meta19590){return (new photosure.client.blog.t19589(id__$1,map__19588__$2,map__19587__$2,p__19577__$1,map__19585__$2,caption__$1,owner__$1,post_view__$1,vec__19586__$1,url__$1,meta19590));
});
}
return (new photosure.client.blog.t19589(id,map__19588__$1,map__19587__$1,p__19577,map__19585__$1,caption,owner,post_view,vec__19586,url,null));
});
photosure.client.blog.posts_view = (function posts_view(app,owner){if(typeof photosure.client.blog.t19598 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.client.blog.t19598 = (function (owner,app,posts_view,meta19599){
this.owner = owner;
this.app = app;
this.posts_view = posts_view;
this.meta19599 = meta19599;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.client.blog.t19598.cljs$lang$type = true;
photosure.client.blog.t19598.cljs$lang$ctorStr = "photosure.client.blog/t19598";
photosure.client.blog.t19598.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.client.blog/t19598");
});
photosure.client.blog.t19598.prototype.om$core$IRenderState$ = true;
photosure.client.blog.t19598.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__19601){var self__ = this;
var map__19602 = p__19601;var map__19602__$1 = ((cljs.core.seq_QMARK_.call(null,map__19602))?cljs.core.apply.call(null,cljs.core.hash_map,map__19602):map__19602);var scroll_chan = cljs.core.get.call(null,map__19602__$1,new cljs.core.Keyword(null,"scroll-chan","scroll-chan",3032676804));var this$__$1 = this;return cljs.core.apply.call(null,om.dom.div,{"onScroll": (function (){return cljs.core.async.put_BANG_.call(null,scroll_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scroll-top","scroll-top",1079042503),om.core.get_node.call(null,self__.owner).scrollTop,new cljs.core.Keyword(null,"height","height",4087841945),(1 + om.core.get_node.call(null,self__.owner).scrollHeight)], null));
}), "id": "post-list"},om.core.build_all.call(null,photosure.client.blog.post_view,new cljs.core.Keyword(null,"posts","posts",1120759621).cljs$core$IFn$_invoke$arity$1(self__.app)));
});
photosure.client.blog.t19598.prototype.om$core$IWillMount$ = true;
photosure.client.blog.t19598.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return photosure.client.util.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.Keyword(null,"url","url",1014020321),"api/posts",new cljs.core.Keyword(null,"on-complete","on-complete",2943599833),(function (p1__19592_SHARP_){return om.core.update_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"posts","posts",1120759621),p1__19592_SHARP_);
})], null));
});
photosure.client.blog.t19598.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19600){var self__ = this;
var _19600__$1 = this;return self__.meta19599;
});
photosure.client.blog.t19598.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19600,meta19599__$1){var self__ = this;
var _19600__$1 = this;return (new photosure.client.blog.t19598(self__.owner,self__.app,self__.posts_view,meta19599__$1));
});
photosure.client.blog.__GT_t19598 = (function __GT_t19598(owner__$1,app__$1,posts_view__$1,meta19599){return (new photosure.client.blog.t19598(owner__$1,app__$1,posts_view__$1,meta19599));
});
}
return (new photosure.client.blog.t19598(owner,app,posts_view,null));
});
photosure.client.blog.translate = (function translate(x,y){return [cljs.core.str("translate("),cljs.core.str(x),cljs.core.str("%,"),cljs.core.str(y),cljs.core.str("%)")].join('');
});
photosure.client.blog.scroll_bar = (function scroll_bar(app,owner){if(typeof photosure.client.blog.t19608 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.client.blog.t19608 = (function (owner,app,scroll_bar,meta19609){
this.owner = owner;
this.app = app;
this.scroll_bar = scroll_bar;
this.meta19609 = meta19609;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.client.blog.t19608.cljs$lang$type = true;
photosure.client.blog.t19608.cljs$lang$ctorStr = "photosure.client.blog/t19608";
photosure.client.blog.t19608.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.client.blog/t19608");
});
photosure.client.blog.t19608.prototype.om$core$IRenderState$ = true;
photosure.client.blog.t19608.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__19611){var self__ = this;
var map__19612 = p__19611;var map__19612__$1 = ((cljs.core.seq_QMARK_.call(null,map__19612))?cljs.core.apply.call(null,cljs.core.hash_map,map__19612):map__19612);var track_height = cljs.core.get.call(null,map__19612__$1,new cljs.core.Keyword(null,"track-height","track-height",1541342043));var scroll_height = cljs.core.get.call(null,map__19612__$1,new cljs.core.Keyword(null,"scroll-height","scroll-height",4164695961));var scroll_top = cljs.core.get.call(null,map__19612__$1,new cljs.core.Keyword(null,"scroll-top","scroll-top",1079042503));var this$__$1 = this;cljs.core.println.call(null,[cljs.core.str("top "),cljs.core.str(scroll_top)].join(''));
cljs.core.println.call(null,[cljs.core.str("height "),cljs.core.str(scroll_height)].join(''));
cljs.core.println.call(null,[cljs.core.str("track height "),cljs.core.str(track_height)].join(''));
cljs.core.println.call(null,[cljs.core.str(Math.round.call(null,(100 * (scroll_top / scroll_height))))].join(''));
return React.DOM.div({"style": {"top": [cljs.core.str(Math.round.call(null,(track_height * (scroll_top / scroll_height)))),cljs.core.str("px")].join('')}, "className": "scroll-bar"});
});
photosure.client.blog.t19608.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19610){var self__ = this;
var _19610__$1 = this;return self__.meta19609;
});
photosure.client.blog.t19608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19610,meta19609__$1){var self__ = this;
var _19610__$1 = this;return (new photosure.client.blog.t19608(self__.owner,self__.app,self__.scroll_bar,meta19609__$1));
});
photosure.client.blog.__GT_t19608 = (function __GT_t19608(owner__$1,app__$1,scroll_bar__$1,meta19609){return (new photosure.client.blog.t19608(owner__$1,app__$1,scroll_bar__$1,meta19609));
});
}
return (new photosure.client.blog.t19608(owner,app,scroll_bar,null));
});
photosure.client.blog.blog = (function blog(app,owner){if(typeof photosure.client.blog.t19641 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.client.blog.t19641 = (function (owner,app,blog,meta19642){
this.owner = owner;
this.app = app;
this.blog = blog;
this.meta19642 = meta19642;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.client.blog.t19641.cljs$lang$type = true;
photosure.client.blog.t19641.cljs$lang$ctorStr = "photosure.client.blog/t19641";
photosure.client.blog.t19641.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.client.blog/t19641");
});
photosure.client.blog.t19641.prototype.om$core$IRenderState$ = true;
photosure.client.blog.t19641.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__19644){var self__ = this;
var map__19645 = p__19644;var map__19645__$1 = ((cljs.core.seq_QMARK_.call(null,map__19645))?cljs.core.apply.call(null,cljs.core.hash_map,map__19645):map__19645);var track_height = cljs.core.get.call(null,map__19645__$1,new cljs.core.Keyword(null,"track-height","track-height",1541342043));var scroll_height = cljs.core.get.call(null,map__19645__$1,new cljs.core.Keyword(null,"scroll-height","scroll-height",4164695961));var scroll_top = cljs.core.get.call(null,map__19645__$1,new cljs.core.Keyword(null,"scroll-top","scroll-top",1079042503));var scroll_chan = cljs.core.get.call(null,map__19645__$1,new cljs.core.Keyword(null,"scroll-chan","scroll-chan",3032676804));var this$__$1 = this;return React.DOM.div({"id": "blog-gallery-container"},React.DOM.div({"id": "blog-gallery"},React.DOM.div({"id": "overflow-wrapper"},React.DOM.div({"className": "scroll-header"}),om.core.build.call(null,photosure.client.blog.posts_view,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scroll-chan","scroll-chan",3032676804),scroll_chan], null)], null)),React.DOM.div({"className": "scroll-footer"})),om.core.build.call(null,photosure.client.blog.scroll_bar,self__.app,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"scroll-top","scroll-top",1079042503),scroll_top,new cljs.core.Keyword(null,"scroll-height","scroll-height",4164695961),scroll_height,new cljs.core.Keyword(null,"track-height","track-height",1541342043),track_height], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"scroll-top","scroll-top",1079042503),scroll_top,new cljs.core.Keyword(null,"scroll-height","scroll-height",4164695961),scroll_height,new cljs.core.Keyword(null,"track-height","track-height",1541342043),track_height], null)], null))));
});
photosure.client.blog.t19641.prototype.om$core$IDidMount$ = true;
photosure.client.blog.t19641.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"track-height","track-height",1541342043),om.core.get_node.call(null,self__.owner).clientHeight);
});
photosure.client.blog.t19641.prototype.om$core$IWillMount$ = true;
photosure.client.blog.t19641.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var scroll_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"scroll-chan","scroll-chan",3032676804));var c__6935__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6936__auto__ = (function (){var switch__6865__auto__ = (function (state_19657){var state_val_19658 = (state_19657[1]);if((state_val_19658 === 4))
{var inst_19648 = (state_19657[2]);var inst_19649 = new cljs.core.Keyword(null,"scroll-top","scroll-top",1079042503).cljs$core$IFn$_invoke$arity$1(inst_19648);var inst_19650 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"scroll-top","scroll-top",1079042503),inst_19649);var inst_19651 = new cljs.core.Keyword(null,"height","height",4087841945).cljs$core$IFn$_invoke$arity$1(inst_19648);var inst_19652 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"scroll-height","scroll-height",4164695961),inst_19651);var state_19657__$1 = (function (){var statearr_19659 = state_19657;(statearr_19659[7] = inst_19650);
(statearr_19659[8] = inst_19652);
return statearr_19659;
})();var statearr_19660_19669 = state_19657__$1;(statearr_19660_19669[2] = null);
(statearr_19660_19669[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19658 === 3))
{var inst_19655 = (state_19657[2]);var state_19657__$1 = state_19657;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19657__$1,inst_19655);
} else
{if((state_val_19658 === 2))
{var state_19657__$1 = state_19657;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19657__$1,4,scroll_chan);
} else
{if((state_val_19658 === 1))
{var state_19657__$1 = state_19657;var statearr_19661_19670 = state_19657__$1;(statearr_19661_19670[2] = null);
(statearr_19661_19670[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__6865__auto__){
return (function() {
var state_machine__6866__auto__ = null;
var state_machine__6866__auto____0 = (function (){var statearr_19665 = [null,null,null,null,null,null,null,null,null];(statearr_19665[0] = state_machine__6866__auto__);
(statearr_19665[1] = 1);
return statearr_19665;
});
var state_machine__6866__auto____1 = (function (state_19657){while(true){
var ret_value__6867__auto__ = (function (){try{while(true){
var result__6868__auto__ = switch__6865__auto__.call(null,state_19657);if(cljs.core.keyword_identical_QMARK_.call(null,result__6868__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6868__auto__;
}
break;
}
}catch (e19666){if((e19666 instanceof Object))
{var ex__6869__auto__ = e19666;var statearr_19667_19671 = state_19657;(statearr_19667_19671[5] = ex__6869__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19657);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19666;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6867__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19672 = state_19657;
state_19657 = G__19672;
continue;
}
} else
{return ret_value__6867__auto__;
}
break;
}
});
state_machine__6866__auto__ = function(state_19657){
switch(arguments.length){
case 0:
return state_machine__6866__auto____0.call(this);
case 1:
return state_machine__6866__auto____1.call(this,state_19657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6866__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6866__auto____0;
state_machine__6866__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6866__auto____1;
return state_machine__6866__auto__;
})()
;})(switch__6865__auto__))
})();var state__6937__auto__ = (function (){var statearr_19668 = f__6936__auto__.call(null);(statearr_19668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6935__auto__);
return statearr_19668;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6937__auto__);
}));
return c__6935__auto__;
});
photosure.client.blog.t19641.prototype.om$core$IInitState$ = true;
photosure.client.blog.t19641.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"scroll-chan","scroll-chan",3032676804),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"scroll-top","scroll-top",1079042503),0,new cljs.core.Keyword(null,"scroll-height","scroll-height",4164695961),1,new cljs.core.Keyword(null,"track-height","track-height",1541342043),0], null);
});
photosure.client.blog.t19641.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19643){var self__ = this;
var _19643__$1 = this;return self__.meta19642;
});
photosure.client.blog.t19641.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19643,meta19642__$1){var self__ = this;
var _19643__$1 = this;return (new photosure.client.blog.t19641(self__.owner,self__.app,self__.blog,meta19642__$1));
});
photosure.client.blog.__GT_t19641 = (function __GT_t19641(owner__$1,app__$1,blog__$1,meta19642){return (new photosure.client.blog.t19641(owner__$1,app__$1,blog__$1,meta19642));
});
}
return (new photosure.client.blog.t19641(owner,app,blog,null));
});
photosure.client.blog.render = (function render(){return om.core.root.call(null,photosure.client.blog.blog,photosure.client.blog.app_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("dynamic-content")], null));
});

//# sourceMappingURL=blog.js.map