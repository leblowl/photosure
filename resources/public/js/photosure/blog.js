// Compiled by ClojureScript 0.0-2173
goog.provide('photosure.blog');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('photosure.util');
goog.require('goog.string');
goog.require('hickory.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('om.dom');
goog.require('goog.string');
goog.require('cljs.core.async');
goog.require('photosure.util');
goog.require('hickory.core');
cljs.core.enable_console_print_BANG_.call(null);
photosure.blog.app_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"posts","posts",1120759621),cljs.core.PersistentVector.EMPTY], null));
photosure.blog.parse_caption = (function parse_caption(caption){return cljs.core.map.call(null,hickory.core.as_hiccup,hickory.core.parse_fragment.call(null,caption));
});
photosure.blog.caption_line_view = (function caption_line_view(caption_line,owner){if(typeof photosure.blog.t9680 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t9680 = (function (owner,caption_line,caption_line_view,meta9681){
this.owner = owner;
this.caption_line = caption_line;
this.caption_line_view = caption_line_view;
this.meta9681 = meta9681;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t9680.cljs$lang$type = true;
photosure.blog.t9680.cljs$lang$ctorStr = "photosure.blog/t9680";
photosure.blog.t9680.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.blog/t9680");
});
photosure.blog.t9680.prototype.om$core$IRender$ = true;
photosure.blog.t9680.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.p({},self__.caption_line);
});
photosure.blog.t9680.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9682){var self__ = this;
var _9682__$1 = this;return self__.meta9681;
});
photosure.blog.t9680.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9682,meta9681__$1){var self__ = this;
var _9682__$1 = this;return (new photosure.blog.t9680(self__.owner,self__.caption_line,self__.caption_line_view,meta9681__$1));
});
photosure.blog.__GT_t9680 = (function __GT_t9680(owner__$1,caption_line__$1,caption_line_view__$1,meta9681){return (new photosure.blog.t9680(owner__$1,caption_line__$1,caption_line_view__$1,meta9681));
});
}
return (new photosure.blog.t9680(owner,caption_line,caption_line_view,null));
});
photosure.blog.caption_view = (function caption_view(caption,owner){if(typeof photosure.blog.t9687 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t9687 = (function (owner,caption,caption_view,meta9688){
this.owner = owner;
this.caption = caption;
this.caption_view = caption_view;
this.meta9688 = meta9688;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t9687.cljs$lang$type = true;
photosure.blog.t9687.cljs$lang$ctorStr = "photosure.blog/t9687";
photosure.blog.t9687.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.blog/t9687");
});
photosure.blog.t9687.prototype.om$core$IRender$ = true;
photosure.blog.t9687.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.apply.call(null,om.dom.div,{"className": "caption"},om.core.build_all.call(null,photosure.blog.caption_line_view,cljs.core.map.call(null,(function (p1__9683_SHARP_){return cljs.core.get.call(null,p1__9683_SHARP_,2);
}),photosure.blog.parse_caption.call(null,self__.caption))));
});
photosure.blog.t9687.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9689){var self__ = this;
var _9689__$1 = this;return self__.meta9688;
});
photosure.blog.t9687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9689,meta9688__$1){var self__ = this;
var _9689__$1 = this;return (new photosure.blog.t9687(self__.owner,self__.caption,self__.caption_view,meta9688__$1));
});
photosure.blog.__GT_t9687 = (function __GT_t9687(owner__$1,caption__$1,caption_view__$1,meta9688){return (new photosure.blog.t9687(owner__$1,caption__$1,caption_view__$1,meta9688));
});
}
return (new photosure.blog.t9687(owner,caption,caption_view,null));
});
photosure.blog.post_view = (function post_view(p__9690,owner){var map__9698 = p__9690;var map__9698__$1 = ((cljs.core.seq_QMARK_.call(null,map__9698))?cljs.core.apply.call(null,cljs.core.hash_map,map__9698):map__9698);var id = cljs.core.get.call(null,map__9698__$1,new cljs.core.Keyword(null,"id","id",1013907597));var vec__9699 = cljs.core.get.call(null,map__9698__$1,new cljs.core.Keyword(null,"photos","photos",4319837171));var map__9700 = cljs.core.nth.call(null,vec__9699,0,null);var map__9700__$1 = ((cljs.core.seq_QMARK_.call(null,map__9700))?cljs.core.apply.call(null,cljs.core.hash_map,map__9700):map__9700);var map__9701 = cljs.core.get.call(null,map__9700__$1,new cljs.core.Keyword(null,"original_size","original_size",2877259041));var map__9701__$1 = ((cljs.core.seq_QMARK_.call(null,map__9701))?cljs.core.apply.call(null,cljs.core.hash_map,map__9701):map__9701);var url = cljs.core.get.call(null,map__9701__$1,new cljs.core.Keyword(null,"url","url",1014020321));var caption = cljs.core.get.call(null,map__9698__$1,new cljs.core.Keyword(null,"caption","caption",1566477656));if(typeof photosure.blog.t9702 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t9702 = (function (id,vec__9699,p__9690,caption,map__9701,map__9700,owner,post_view,url,map__9698,meta9703){
this.id = id;
this.vec__9699 = vec__9699;
this.p__9690 = p__9690;
this.caption = caption;
this.map__9701 = map__9701;
this.map__9700 = map__9700;
this.owner = owner;
this.post_view = post_view;
this.url = url;
this.map__9698 = map__9698;
this.meta9703 = meta9703;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t9702.cljs$lang$type = true;
photosure.blog.t9702.cljs$lang$ctorStr = "photosure.blog/t9702";
photosure.blog.t9702.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.blog/t9702");
});
photosure.blog.t9702.prototype.om$core$IRender$ = true;
photosure.blog.t9702.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "post", "id": self__.id},React.DOM.div({"className": "blog-photo"},React.DOM.img({"src": self__.url})),om.core.build.call(null,photosure.blog.caption_view,self__.caption));
});
photosure.blog.t9702.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9704){var self__ = this;
var _9704__$1 = this;return self__.meta9703;
});
photosure.blog.t9702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9704,meta9703__$1){var self__ = this;
var _9704__$1 = this;return (new photosure.blog.t9702(self__.id,self__.vec__9699,self__.p__9690,self__.caption,self__.map__9701,self__.map__9700,self__.owner,self__.post_view,self__.url,self__.map__9698,meta9703__$1));
});
photosure.blog.__GT_t9702 = (function __GT_t9702(id__$1,vec__9699__$1,p__9690__$1,caption__$1,map__9701__$2,map__9700__$2,owner__$1,post_view__$1,url__$1,map__9698__$2,meta9703){return (new photosure.blog.t9702(id__$1,vec__9699__$1,p__9690__$1,caption__$1,map__9701__$2,map__9700__$2,owner__$1,post_view__$1,url__$1,map__9698__$2,meta9703));
});
}
return (new photosure.blog.t9702(id,vec__9699,p__9690,caption,map__9701__$1,map__9700__$1,owner,post_view,url,map__9698__$1,null));
});
photosure.blog.posts_view = (function posts_view(app,owner){if(typeof photosure.blog.t9711 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t9711 = (function (owner,app,posts_view,meta9712){
this.owner = owner;
this.app = app;
this.posts_view = posts_view;
this.meta9712 = meta9712;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t9711.cljs$lang$type = true;
photosure.blog.t9711.cljs$lang$ctorStr = "photosure.blog/t9711";
photosure.blog.t9711.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.blog/t9711");
});
photosure.blog.t9711.prototype.om$core$IRenderState$ = true;
photosure.blog.t9711.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__9714){var self__ = this;
var map__9715 = p__9714;var map__9715__$1 = ((cljs.core.seq_QMARK_.call(null,map__9715))?cljs.core.apply.call(null,cljs.core.hash_map,map__9715):map__9715);var scroll_chan = cljs.core.get.call(null,map__9715__$1,new cljs.core.Keyword(null,"scroll-chan","scroll-chan",3032676804));var this$__$1 = this;return cljs.core.apply.call(null,om.dom.div,{"onScroll": (function (){return cljs.core.async.put_BANG_.call(null,scroll_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scroll-top","scroll-top",1079042503),om.core.get_node.call(null,self__.owner).scrollTop,new cljs.core.Keyword(null,"height","height",4087841945),(1 + om.core.get_node.call(null,self__.owner).scrollHeight)], null));
}), "id": "post-list"},om.core.build_all.call(null,photosure.blog.post_view,new cljs.core.Keyword(null,"posts","posts",1120759621).cljs$core$IFn$_invoke$arity$1(self__.app)));
});
photosure.blog.t9711.prototype.om$core$IWillMount$ = true;
photosure.blog.t9711.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return photosure.util.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.Keyword(null,"url","url",1014020321),"api/posts",new cljs.core.Keyword(null,"on-complete","on-complete",2943599833),(function (p1__9705_SHARP_){return om.core.update_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"posts","posts",1120759621),p1__9705_SHARP_);
})], null));
});
photosure.blog.t9711.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9713){var self__ = this;
var _9713__$1 = this;return self__.meta9712;
});
photosure.blog.t9711.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9713,meta9712__$1){var self__ = this;
var _9713__$1 = this;return (new photosure.blog.t9711(self__.owner,self__.app,self__.posts_view,meta9712__$1));
});
photosure.blog.__GT_t9711 = (function __GT_t9711(owner__$1,app__$1,posts_view__$1,meta9712){return (new photosure.blog.t9711(owner__$1,app__$1,posts_view__$1,meta9712));
});
}
return (new photosure.blog.t9711(owner,app,posts_view,null));
});
photosure.blog.translate = (function translate(x,y){return [cljs.core.str("translate("),cljs.core.str(x),cljs.core.str("%,"),cljs.core.str(y),cljs.core.str("%)")].join('');
});
photosure.blog.scroll_bar = (function scroll_bar(app,owner){if(typeof photosure.blog.t9721 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t9721 = (function (owner,app,scroll_bar,meta9722){
this.owner = owner;
this.app = app;
this.scroll_bar = scroll_bar;
this.meta9722 = meta9722;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t9721.cljs$lang$type = true;
photosure.blog.t9721.cljs$lang$ctorStr = "photosure.blog/t9721";
photosure.blog.t9721.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.blog/t9721");
});
photosure.blog.t9721.prototype.om$core$IRenderState$ = true;
photosure.blog.t9721.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__9724){var self__ = this;
var map__9725 = p__9724;var map__9725__$1 = ((cljs.core.seq_QMARK_.call(null,map__9725))?cljs.core.apply.call(null,cljs.core.hash_map,map__9725):map__9725);var track_height = cljs.core.get.call(null,map__9725__$1,new cljs.core.Keyword(null,"track-height","track-height",1541342043));var scroll_height = cljs.core.get.call(null,map__9725__$1,new cljs.core.Keyword(null,"scroll-height","scroll-height",4164695961));var scroll_top = cljs.core.get.call(null,map__9725__$1,new cljs.core.Keyword(null,"scroll-top","scroll-top",1079042503));var this$__$1 = this;cljs.core.println.call(null,[cljs.core.str("top "),cljs.core.str(scroll_top)].join(''));
cljs.core.println.call(null,[cljs.core.str("height "),cljs.core.str(scroll_height)].join(''));
cljs.core.println.call(null,[cljs.core.str("track height "),cljs.core.str(track_height)].join(''));
cljs.core.println.call(null,[cljs.core.str(Math.round.call(null,(100 * (scroll_top / scroll_height))))].join(''));
return React.DOM.div({"style": {"top": [cljs.core.str(Math.round.call(null,(track_height * (scroll_top / scroll_height)))),cljs.core.str("px")].join('')}, "className": "scroll-bar"});
});
photosure.blog.t9721.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9723){var self__ = this;
var _9723__$1 = this;return self__.meta9722;
});
photosure.blog.t9721.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9723,meta9722__$1){var self__ = this;
var _9723__$1 = this;return (new photosure.blog.t9721(self__.owner,self__.app,self__.scroll_bar,meta9722__$1));
});
photosure.blog.__GT_t9721 = (function __GT_t9721(owner__$1,app__$1,scroll_bar__$1,meta9722){return (new photosure.blog.t9721(owner__$1,app__$1,scroll_bar__$1,meta9722));
});
}
return (new photosure.blog.t9721(owner,app,scroll_bar,null));
});
photosure.blog.blog = (function blog(app,owner){if(typeof photosure.blog.t9754 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t9754 = (function (owner,app,blog,meta9755){
this.owner = owner;
this.app = app;
this.blog = blog;
this.meta9755 = meta9755;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t9754.cljs$lang$type = true;
photosure.blog.t9754.cljs$lang$ctorStr = "photosure.blog/t9754";
photosure.blog.t9754.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.blog/t9754");
});
photosure.blog.t9754.prototype.om$core$IRenderState$ = true;
photosure.blog.t9754.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__9757){var self__ = this;
var map__9758 = p__9757;var map__9758__$1 = ((cljs.core.seq_QMARK_.call(null,map__9758))?cljs.core.apply.call(null,cljs.core.hash_map,map__9758):map__9758);var track_height = cljs.core.get.call(null,map__9758__$1,new cljs.core.Keyword(null,"track-height","track-height",1541342043));var scroll_height = cljs.core.get.call(null,map__9758__$1,new cljs.core.Keyword(null,"scroll-height","scroll-height",4164695961));var scroll_top = cljs.core.get.call(null,map__9758__$1,new cljs.core.Keyword(null,"scroll-top","scroll-top",1079042503));var scroll_chan = cljs.core.get.call(null,map__9758__$1,new cljs.core.Keyword(null,"scroll-chan","scroll-chan",3032676804));var this$__$1 = this;return React.DOM.div({"id": "blog-gallery-container"},React.DOM.div({"id": "blog-gallery"},React.DOM.div({"id": "overflow-wrapper"},React.DOM.div({"className": "scroll-header"}),om.core.build.call(null,photosure.blog.posts_view,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scroll-chan","scroll-chan",3032676804),scroll_chan], null)], null)),React.DOM.div({"className": "scroll-footer"})),om.core.build.call(null,photosure.blog.scroll_bar,self__.app,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"scroll-top","scroll-top",1079042503),scroll_top,new cljs.core.Keyword(null,"scroll-height","scroll-height",4164695961),scroll_height,new cljs.core.Keyword(null,"track-height","track-height",1541342043),track_height], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"scroll-top","scroll-top",1079042503),scroll_top,new cljs.core.Keyword(null,"scroll-height","scroll-height",4164695961),scroll_height,new cljs.core.Keyword(null,"track-height","track-height",1541342043),track_height], null)], null))));
});
photosure.blog.t9754.prototype.om$core$IDidMount$ = true;
photosure.blog.t9754.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"track-height","track-height",1541342043),om.core.get_node.call(null,self__.owner).clientHeight);
});
photosure.blog.t9754.prototype.om$core$IWillMount$ = true;
photosure.blog.t9754.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var scroll_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"scroll-chan","scroll-chan",3032676804));var c__6222__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6223__auto__ = (function (){var switch__6207__auto__ = (function (state_9770){var state_val_9771 = (state_9770[1]);if((state_val_9771 === 4))
{var inst_9761 = (state_9770[2]);var inst_9762 = new cljs.core.Keyword(null,"scroll-top","scroll-top",1079042503).cljs$core$IFn$_invoke$arity$1(inst_9761);var inst_9763 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"scroll-top","scroll-top",1079042503),inst_9762);var inst_9764 = new cljs.core.Keyword(null,"height","height",4087841945).cljs$core$IFn$_invoke$arity$1(inst_9761);var inst_9765 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"scroll-height","scroll-height",4164695961),inst_9764);var state_9770__$1 = (function (){var statearr_9772 = state_9770;(statearr_9772[7] = inst_9765);
(statearr_9772[8] = inst_9763);
return statearr_9772;
})();var statearr_9773_9782 = state_9770__$1;(statearr_9773_9782[2] = null);
(statearr_9773_9782[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9771 === 3))
{var inst_9768 = (state_9770[2]);var state_9770__$1 = state_9770;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9770__$1,inst_9768);
} else
{if((state_val_9771 === 2))
{var state_9770__$1 = state_9770;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9770__$1,4,scroll_chan);
} else
{if((state_val_9771 === 1))
{var state_9770__$1 = state_9770;var statearr_9774_9783 = state_9770__$1;(statearr_9774_9783[2] = null);
(statearr_9774_9783[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__6207__auto__){
return (function() {
var state_machine__6208__auto__ = null;
var state_machine__6208__auto____0 = (function (){var statearr_9778 = [null,null,null,null,null,null,null,null,null];(statearr_9778[0] = state_machine__6208__auto__);
(statearr_9778[1] = 1);
return statearr_9778;
});
var state_machine__6208__auto____1 = (function (state_9770){while(true){
var ret_value__6209__auto__ = (function (){try{while(true){
var result__6210__auto__ = switch__6207__auto__.call(null,state_9770);if(cljs.core.keyword_identical_QMARK_.call(null,result__6210__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6210__auto__;
}
break;
}
}catch (e9779){if((e9779 instanceof Object))
{var ex__6211__auto__ = e9779;var statearr_9780_9784 = state_9770;(statearr_9780_9784[5] = ex__6211__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9770);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9779;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6209__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9785 = state_9770;
state_9770 = G__9785;
continue;
}
} else
{return ret_value__6209__auto__;
}
break;
}
});
state_machine__6208__auto__ = function(state_9770){
switch(arguments.length){
case 0:
return state_machine__6208__auto____0.call(this);
case 1:
return state_machine__6208__auto____1.call(this,state_9770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6208__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6208__auto____0;
state_machine__6208__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6208__auto____1;
return state_machine__6208__auto__;
})()
;})(switch__6207__auto__))
})();var state__6224__auto__ = (function (){var statearr_9781 = f__6223__auto__.call(null);(statearr_9781[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6222__auto__);
return statearr_9781;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6224__auto__);
}));
return c__6222__auto__;
});
photosure.blog.t9754.prototype.om$core$IInitState$ = true;
photosure.blog.t9754.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"scroll-chan","scroll-chan",3032676804),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"scroll-top","scroll-top",1079042503),0,new cljs.core.Keyword(null,"scroll-height","scroll-height",4164695961),1,new cljs.core.Keyword(null,"track-height","track-height",1541342043),0], null);
});
photosure.blog.t9754.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9756){var self__ = this;
var _9756__$1 = this;return self__.meta9755;
});
photosure.blog.t9754.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9756,meta9755__$1){var self__ = this;
var _9756__$1 = this;return (new photosure.blog.t9754(self__.owner,self__.app,self__.blog,meta9755__$1));
});
photosure.blog.__GT_t9754 = (function __GT_t9754(owner__$1,app__$1,blog__$1,meta9755){return (new photosure.blog.t9754(owner__$1,app__$1,blog__$1,meta9755));
});
}
return (new photosure.blog.t9754(owner,app,blog,null));
});
photosure.blog.render = (function render(){return om.core.root.call(null,photosure.blog.blog,photosure.blog.app_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("dynamic-content")], null));
});

//# sourceMappingURL=blog.js.map