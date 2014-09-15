// Compiled by ClojureScript 0.0-2322
goog.provide('photosure.blog');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('goog.string');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('hickory.core');
goog.require('photosure.util');
goog.require('photosure.util');
goog.require('om.core');
goog.require('om.core');
goog.require('hickory.core');
goog.require('goog.string');
cljs.core.enable_console_print_BANG_.call(null);
photosure.blog.app_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"posts","posts",760043164),cljs.core.PersistentVector.EMPTY], null));
photosure.blog.parse_caption = (function parse_caption(caption){return cljs.core.map.call(null,hickory.core.as_hiccup,hickory.core.parse_fragment.call(null,caption));
});
photosure.blog.caption_line_view = (function caption_line_view(caption_line,owner){if(typeof photosure.blog.t9473 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t9473 = (function (owner,caption_line,caption_line_view,meta9474){
this.owner = owner;
this.caption_line = caption_line;
this.caption_line_view = caption_line_view;
this.meta9474 = meta9474;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t9473.cljs$lang$type = true;
photosure.blog.t9473.cljs$lang$ctorStr = "photosure.blog/t9473";
photosure.blog.t9473.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t9473");
});
photosure.blog.t9473.prototype.om$core$IRender$ = true;
photosure.blog.t9473.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.p({},self__.caption_line);
});
photosure.blog.t9473.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9475){var self__ = this;
var _9475__$1 = this;return self__.meta9474;
});
photosure.blog.t9473.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9475,meta9474__$1){var self__ = this;
var _9475__$1 = this;return (new photosure.blog.t9473(self__.owner,self__.caption_line,self__.caption_line_view,meta9474__$1));
});
photosure.blog.__GT_t9473 = (function __GT_t9473(owner__$1,caption_line__$1,caption_line_view__$1,meta9474){return (new photosure.blog.t9473(owner__$1,caption_line__$1,caption_line_view__$1,meta9474));
});
}
return (new photosure.blog.t9473(owner,caption_line,caption_line_view,null));
});
photosure.blog.caption_view = (function caption_view(caption,owner){if(typeof photosure.blog.t9480 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t9480 = (function (owner,caption,caption_view,meta9481){
this.owner = owner;
this.caption = caption;
this.caption_view = caption_view;
this.meta9481 = meta9481;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t9480.cljs$lang$type = true;
photosure.blog.t9480.cljs$lang$ctorStr = "photosure.blog/t9480";
photosure.blog.t9480.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t9480");
});
photosure.blog.t9480.prototype.om$core$IRender$ = true;
photosure.blog.t9480.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.apply.call(null,om.dom.div,{"className": "caption"},om.core.build_all.call(null,photosure.blog.caption_line_view,cljs.core.map.call(null,((function (this$__$1){
return (function (p1__9476_SHARP_){return cljs.core.get.call(null,p1__9476_SHARP_,(2));
});})(this$__$1))
,photosure.blog.parse_caption.call(null,self__.caption))));
});
photosure.blog.t9480.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9482){var self__ = this;
var _9482__$1 = this;return self__.meta9481;
});
photosure.blog.t9480.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9482,meta9481__$1){var self__ = this;
var _9482__$1 = this;return (new photosure.blog.t9480(self__.owner,self__.caption,self__.caption_view,meta9481__$1));
});
photosure.blog.__GT_t9480 = (function __GT_t9480(owner__$1,caption__$1,caption_view__$1,meta9481){return (new photosure.blog.t9480(owner__$1,caption__$1,caption_view__$1,meta9481));
});
}
return (new photosure.blog.t9480(owner,caption,caption_view,null));
});
photosure.blog.post_view = (function post_view(p__9483,owner){var map__9491 = p__9483;var map__9491__$1 = ((cljs.core.seq_QMARK_.call(null,map__9491))?cljs.core.apply.call(null,cljs.core.hash_map,map__9491):map__9491);var id = cljs.core.get.call(null,map__9491__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var vec__9492 = cljs.core.get.call(null,map__9491__$1,new cljs.core.Keyword(null,"photos","photos",11691538));var map__9493 = cljs.core.nth.call(null,vec__9492,(0),null);var map__9493__$1 = ((cljs.core.seq_QMARK_.call(null,map__9493))?cljs.core.apply.call(null,cljs.core.hash_map,map__9493):map__9493);var map__9494 = cljs.core.get.call(null,map__9493__$1,new cljs.core.Keyword(null,"original_size","original_size",-1238801714));var map__9494__$1 = ((cljs.core.seq_QMARK_.call(null,map__9494))?cljs.core.apply.call(null,cljs.core.hash_map,map__9494):map__9494);var url = cljs.core.get.call(null,map__9494__$1,new cljs.core.Keyword(null,"url","url",276297046));var caption = cljs.core.get.call(null,map__9491__$1,new cljs.core.Keyword(null,"caption","caption",-855383902));if(typeof photosure.blog.t9495 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t9495 = (function (map__9493,vec__9492,owner,caption,map__9491,p__9483,post_view,id,map__9494,url,meta9496){
this.map__9493 = map__9493;
this.vec__9492 = vec__9492;
this.owner = owner;
this.caption = caption;
this.map__9491 = map__9491;
this.p__9483 = p__9483;
this.post_view = post_view;
this.id = id;
this.map__9494 = map__9494;
this.url = url;
this.meta9496 = meta9496;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t9495.cljs$lang$type = true;
photosure.blog.t9495.cljs$lang$ctorStr = "photosure.blog/t9495";
photosure.blog.t9495.cljs$lang$ctorPrWriter = ((function (map__9491,map__9491__$1,id,vec__9492,map__9493,map__9493__$1,map__9494,map__9494__$1,url,caption){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t9495");
});})(map__9491,map__9491__$1,id,vec__9492,map__9493,map__9493__$1,map__9494,map__9494__$1,url,caption))
;
photosure.blog.t9495.prototype.om$core$IRender$ = true;
photosure.blog.t9495.prototype.om$core$IRender$render$arity$1 = ((function (map__9491,map__9491__$1,id,vec__9492,map__9493,map__9493__$1,map__9494,map__9494__$1,url,caption){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "post", "id": self__.id},React.DOM.div({"className": "blog-photo"},React.DOM.img({"src": self__.url})),om.core.build.call(null,photosure.blog.caption_view,self__.caption));
});})(map__9491,map__9491__$1,id,vec__9492,map__9493,map__9493__$1,map__9494,map__9494__$1,url,caption))
;
photosure.blog.t9495.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__9491,map__9491__$1,id,vec__9492,map__9493,map__9493__$1,map__9494,map__9494__$1,url,caption){
return (function (_9497){var self__ = this;
var _9497__$1 = this;return self__.meta9496;
});})(map__9491,map__9491__$1,id,vec__9492,map__9493,map__9493__$1,map__9494,map__9494__$1,url,caption))
;
photosure.blog.t9495.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__9491,map__9491__$1,id,vec__9492,map__9493,map__9493__$1,map__9494,map__9494__$1,url,caption){
return (function (_9497,meta9496__$1){var self__ = this;
var _9497__$1 = this;return (new photosure.blog.t9495(self__.map__9493,self__.vec__9492,self__.owner,self__.caption,self__.map__9491,self__.p__9483,self__.post_view,self__.id,self__.map__9494,self__.url,meta9496__$1));
});})(map__9491,map__9491__$1,id,vec__9492,map__9493,map__9493__$1,map__9494,map__9494__$1,url,caption))
;
photosure.blog.__GT_t9495 = ((function (map__9491,map__9491__$1,id,vec__9492,map__9493,map__9493__$1,map__9494,map__9494__$1,url,caption){
return (function __GT_t9495(map__9493__$2,vec__9492__$1,owner__$1,caption__$1,map__9491__$2,p__9483__$1,post_view__$1,id__$1,map__9494__$2,url__$1,meta9496){return (new photosure.blog.t9495(map__9493__$2,vec__9492__$1,owner__$1,caption__$1,map__9491__$2,p__9483__$1,post_view__$1,id__$1,map__9494__$2,url__$1,meta9496));
});})(map__9491,map__9491__$1,id,vec__9492,map__9493,map__9493__$1,map__9494,map__9494__$1,url,caption))
;
}
return (new photosure.blog.t9495(map__9493__$1,vec__9492,owner,caption,map__9491__$1,p__9483,post_view,id,map__9494__$1,url,null));
});
photosure.blog.posts_view = (function posts_view(app,owner){if(typeof photosure.blog.t9504 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t9504 = (function (owner,app,posts_view,meta9505){
this.owner = owner;
this.app = app;
this.posts_view = posts_view;
this.meta9505 = meta9505;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t9504.cljs$lang$type = true;
photosure.blog.t9504.cljs$lang$ctorStr = "photosure.blog/t9504";
photosure.blog.t9504.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t9504");
});
photosure.blog.t9504.prototype.om$core$IRenderState$ = true;
photosure.blog.t9504.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__9507){var self__ = this;
var map__9508 = p__9507;var map__9508__$1 = ((cljs.core.seq_QMARK_.call(null,map__9508))?cljs.core.apply.call(null,cljs.core.hash_map,map__9508):map__9508);var scroll_chan = cljs.core.get.call(null,map__9508__$1,new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748));var this$__$1 = this;return cljs.core.apply.call(null,om.dom.div,{"onScroll": ((function (this$__$1,map__9508,map__9508__$1,scroll_chan){
return (function (){return cljs.core.async.put_BANG_.call(null,scroll_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),om.core.get_node.call(null,self__.owner).scrollTop,new cljs.core.Keyword(null,"height","height",1025178622),((1) + om.core.get_node.call(null,self__.owner).scrollHeight)], null));
});})(this$__$1,map__9508,map__9508__$1,scroll_chan))
, "id": "post-list"},om.core.build_all.call(null,photosure.blog.post_view,new cljs.core.Keyword(null,"posts","posts",760043164).cljs$core$IFn$_invoke$arity$1(self__.app)));
});
photosure.blog.t9504.prototype.om$core$IWillMount$ = true;
photosure.blog.t9504.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return photosure.util.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),"api/posts",new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),((function (___$1){
return (function (p1__9498_SHARP_){return om.core.update_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"posts","posts",760043164),p1__9498_SHARP_);
});})(___$1))
], null));
});
photosure.blog.t9504.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9506){var self__ = this;
var _9506__$1 = this;return self__.meta9505;
});
photosure.blog.t9504.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9506,meta9505__$1){var self__ = this;
var _9506__$1 = this;return (new photosure.blog.t9504(self__.owner,self__.app,self__.posts_view,meta9505__$1));
});
photosure.blog.__GT_t9504 = (function __GT_t9504(owner__$1,app__$1,posts_view__$1,meta9505){return (new photosure.blog.t9504(owner__$1,app__$1,posts_view__$1,meta9505));
});
}
return (new photosure.blog.t9504(owner,app,posts_view,null));
});
photosure.blog.translate = (function translate(x,y){return ("translate("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)+"%,"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)+"%)");
});
photosure.blog.scroll_bar = (function scroll_bar(app,owner){if(typeof photosure.blog.t9514 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t9514 = (function (owner,app,scroll_bar,meta9515){
this.owner = owner;
this.app = app;
this.scroll_bar = scroll_bar;
this.meta9515 = meta9515;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t9514.cljs$lang$type = true;
photosure.blog.t9514.cljs$lang$ctorStr = "photosure.blog/t9514";
photosure.blog.t9514.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t9514");
});
photosure.blog.t9514.prototype.om$core$IRenderState$ = true;
photosure.blog.t9514.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__9517){var self__ = this;
var map__9518 = p__9517;var map__9518__$1 = ((cljs.core.seq_QMARK_.call(null,map__9518))?cljs.core.apply.call(null,cljs.core.hash_map,map__9518):map__9518);var track_height = cljs.core.get.call(null,map__9518__$1,new cljs.core.Keyword(null,"track-height","track-height",-1871630545));var scroll_height = cljs.core.get.call(null,map__9518__$1,new cljs.core.Keyword(null,"scroll-height","scroll-height",882644149));var scroll_top = cljs.core.get.call(null,map__9518__$1,new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100));var this$__$1 = this;return React.DOM.div({"style": {"top": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round.call(null,(track_height * (scroll_top / scroll_height))))+"px")}, "className": "scroll-bar"});
});
photosure.blog.t9514.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9516){var self__ = this;
var _9516__$1 = this;return self__.meta9515;
});
photosure.blog.t9514.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9516,meta9515__$1){var self__ = this;
var _9516__$1 = this;return (new photosure.blog.t9514(self__.owner,self__.app,self__.scroll_bar,meta9515__$1));
});
photosure.blog.__GT_t9514 = (function __GT_t9514(owner__$1,app__$1,scroll_bar__$1,meta9515){return (new photosure.blog.t9514(owner__$1,app__$1,scroll_bar__$1,meta9515));
});
}
return (new photosure.blog.t9514(owner,app,scroll_bar,null));
});
photosure.blog.blog = (function blog(app,owner){if(typeof photosure.blog.t9547 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t9547 = (function (owner,app,blog,meta9548){
this.owner = owner;
this.app = app;
this.blog = blog;
this.meta9548 = meta9548;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t9547.cljs$lang$type = true;
photosure.blog.t9547.cljs$lang$ctorStr = "photosure.blog/t9547";
photosure.blog.t9547.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t9547");
});
photosure.blog.t9547.prototype.om$core$IRenderState$ = true;
photosure.blog.t9547.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__9550){var self__ = this;
var map__9551 = p__9550;var map__9551__$1 = ((cljs.core.seq_QMARK_.call(null,map__9551))?cljs.core.apply.call(null,cljs.core.hash_map,map__9551):map__9551);var track_height = cljs.core.get.call(null,map__9551__$1,new cljs.core.Keyword(null,"track-height","track-height",-1871630545));var scroll_height = cljs.core.get.call(null,map__9551__$1,new cljs.core.Keyword(null,"scroll-height","scroll-height",882644149));var scroll_top = cljs.core.get.call(null,map__9551__$1,new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100));var scroll_chan = cljs.core.get.call(null,map__9551__$1,new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748));var this$__$1 = this;return React.DOM.div({"id": "blog-gallery-container"},React.DOM.div({"id": "blog-gallery"},React.DOM.div({"id": "overflow-wrapper"},React.DOM.div({"className": "scroll-header"}),om.core.build.call(null,photosure.blog.posts_view,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748),scroll_chan], null)], null)),React.DOM.div({"className": "scroll-footer"})),om.core.build.call(null,photosure.blog.scroll_bar,self__.app,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),scroll_top,new cljs.core.Keyword(null,"scroll-height","scroll-height",882644149),scroll_height,new cljs.core.Keyword(null,"track-height","track-height",-1871630545),track_height], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),scroll_top,new cljs.core.Keyword(null,"scroll-height","scroll-height",882644149),scroll_height,new cljs.core.Keyword(null,"track-height","track-height",-1871630545),track_height], null)], null))));
});
photosure.blog.t9547.prototype.om$core$IDidMount$ = true;
photosure.blog.t9547.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"track-height","track-height",-1871630545),om.core.get_node.call(null,self__.owner).clientHeight);
});
photosure.blog.t9547.prototype.om$core$IWillMount$ = true;
photosure.blog.t9547.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var scroll_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748));var c__6367__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto__,scroll_chan,___$1){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto__,scroll_chan,___$1){
return (function (state_9563){var state_val_9564 = (state_9563[(1)]);if((state_val_9564 === (4)))
{var inst_9554 = (state_9563[(2)]);var inst_9555 = new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100).cljs$core$IFn$_invoke$arity$1(inst_9554);var inst_9556 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),inst_9555);var inst_9557 = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(inst_9554);var inst_9558 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"scroll-height","scroll-height",882644149),inst_9557);var state_9563__$1 = (function (){var statearr_9565 = state_9563;(statearr_9565[(7)] = inst_9558);
(statearr_9565[(8)] = inst_9556);
return statearr_9565;
})();var statearr_9566_9575 = state_9563__$1;(statearr_9566_9575[(2)] = null);
(statearr_9566_9575[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9564 === (3)))
{var inst_9561 = (state_9563[(2)]);var state_9563__$1 = state_9563;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9563__$1,inst_9561);
} else
{if((state_val_9564 === (2)))
{var state_9563__$1 = state_9563;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9563__$1,(4),scroll_chan);
} else
{if((state_val_9564 === (1)))
{var state_9563__$1 = state_9563;var statearr_9567_9576 = state_9563__$1;(statearr_9567_9576[(2)] = null);
(statearr_9567_9576[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6367__auto__,scroll_chan,___$1))
;return ((function (switch__6352__auto__,c__6367__auto__,scroll_chan,___$1){
return (function() {
var state_machine__6353__auto__ = null;
var state_machine__6353__auto____0 = (function (){var statearr_9571 = [null,null,null,null,null,null,null,null,null];(statearr_9571[(0)] = state_machine__6353__auto__);
(statearr_9571[(1)] = (1));
return statearr_9571;
});
var state_machine__6353__auto____1 = (function (state_9563){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_9563);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e9572){if((e9572 instanceof Object))
{var ex__6356__auto__ = e9572;var statearr_9573_9577 = state_9563;(statearr_9573_9577[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9563);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e9572;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9578 = state_9563;
state_9563 = G__9578;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_9563){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_9563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto__,scroll_chan,___$1))
})();var state__6369__auto__ = (function (){var statearr_9574 = f__6368__auto__.call(null);(statearr_9574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto__);
return statearr_9574;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto__,scroll_chan,___$1))
);
return c__6367__auto__;
});
photosure.blog.t9547.prototype.om$core$IInitState$ = true;
photosure.blog.t9547.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),(0),new cljs.core.Keyword(null,"scroll-height","scroll-height",882644149),(1),new cljs.core.Keyword(null,"track-height","track-height",-1871630545),(0)], null);
});
photosure.blog.t9547.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9549){var self__ = this;
var _9549__$1 = this;return self__.meta9548;
});
photosure.blog.t9547.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9549,meta9548__$1){var self__ = this;
var _9549__$1 = this;return (new photosure.blog.t9547(self__.owner,self__.app,self__.blog,meta9548__$1));
});
photosure.blog.__GT_t9547 = (function __GT_t9547(owner__$1,app__$1,blog__$1,meta9548){return (new photosure.blog.t9547(owner__$1,app__$1,blog__$1,meta9548));
});
}
return (new photosure.blog.t9547(owner,app,blog,null));
});
photosure.blog.render = (function render(){cljs.core.println.call(null,"YAY!");
return om.core.root.call(null,photosure.blog.blog,photosure.blog.app_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("dynamic-content")], null));
});

//# sourceMappingURL=blog.js.map