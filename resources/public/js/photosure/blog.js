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
photosure.blog.caption_line_view = (function caption_line_view(caption_line,owner){if(typeof photosure.blog.t9277 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t9277 = (function (owner,caption_line,caption_line_view,meta9278){
this.owner = owner;
this.caption_line = caption_line;
this.caption_line_view = caption_line_view;
this.meta9278 = meta9278;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t9277.cljs$lang$type = true;
photosure.blog.t9277.cljs$lang$ctorStr = "photosure.blog/t9277";
photosure.blog.t9277.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.blog/t9277");
});
photosure.blog.t9277.prototype.om$core$IRender$ = true;
photosure.blog.t9277.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.p({},self__.caption_line);
});
photosure.blog.t9277.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9279){var self__ = this;
var _9279__$1 = this;return self__.meta9278;
});
photosure.blog.t9277.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9279,meta9278__$1){var self__ = this;
var _9279__$1 = this;return (new photosure.blog.t9277(self__.owner,self__.caption_line,self__.caption_line_view,meta9278__$1));
});
photosure.blog.__GT_t9277 = (function __GT_t9277(owner__$1,caption_line__$1,caption_line_view__$1,meta9278){return (new photosure.blog.t9277(owner__$1,caption_line__$1,caption_line_view__$1,meta9278));
});
}
return (new photosure.blog.t9277(owner,caption_line,caption_line_view,null));
});
photosure.blog.caption_view = (function caption_view(caption,owner){if(typeof photosure.blog.t9284 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t9284 = (function (owner,caption,caption_view,meta9285){
this.owner = owner;
this.caption = caption;
this.caption_view = caption_view;
this.meta9285 = meta9285;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t9284.cljs$lang$type = true;
photosure.blog.t9284.cljs$lang$ctorStr = "photosure.blog/t9284";
photosure.blog.t9284.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.blog/t9284");
});
photosure.blog.t9284.prototype.om$core$IRender$ = true;
photosure.blog.t9284.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.apply.call(null,om.dom.div,{"className": "caption"},om.core.build_all.call(null,photosure.blog.caption_line_view,cljs.core.map.call(null,(function (p1__9280_SHARP_){return cljs.core.get.call(null,p1__9280_SHARP_,2);
}),photosure.blog.parse_caption.call(null,self__.caption))));
});
photosure.blog.t9284.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9286){var self__ = this;
var _9286__$1 = this;return self__.meta9285;
});
photosure.blog.t9284.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9286,meta9285__$1){var self__ = this;
var _9286__$1 = this;return (new photosure.blog.t9284(self__.owner,self__.caption,self__.caption_view,meta9285__$1));
});
photosure.blog.__GT_t9284 = (function __GT_t9284(owner__$1,caption__$1,caption_view__$1,meta9285){return (new photosure.blog.t9284(owner__$1,caption__$1,caption_view__$1,meta9285));
});
}
return (new photosure.blog.t9284(owner,caption,caption_view,null));
});
photosure.blog.post_view = (function post_view(p__9287,owner){var map__9295 = p__9287;var map__9295__$1 = ((cljs.core.seq_QMARK_.call(null,map__9295))?cljs.core.apply.call(null,cljs.core.hash_map,map__9295):map__9295);var id = cljs.core.get.call(null,map__9295__$1,new cljs.core.Keyword(null,"id","id",1013907597));var vec__9296 = cljs.core.get.call(null,map__9295__$1,new cljs.core.Keyword(null,"photos","photos",4319837171));var map__9297 = cljs.core.nth.call(null,vec__9296,0,null);var map__9297__$1 = ((cljs.core.seq_QMARK_.call(null,map__9297))?cljs.core.apply.call(null,cljs.core.hash_map,map__9297):map__9297);var map__9298 = cljs.core.get.call(null,map__9297__$1,new cljs.core.Keyword(null,"original_size","original_size",2877259041));var map__9298__$1 = ((cljs.core.seq_QMARK_.call(null,map__9298))?cljs.core.apply.call(null,cljs.core.hash_map,map__9298):map__9298);var url = cljs.core.get.call(null,map__9298__$1,new cljs.core.Keyword(null,"url","url",1014020321));var caption = cljs.core.get.call(null,map__9295__$1,new cljs.core.Keyword(null,"caption","caption",1566477656));if(typeof photosure.blog.t9299 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t9299 = (function (id,p__9287,map__9298,map__9295,caption,map__9297,owner,post_view,vec__9296,url,meta9300){
this.id = id;
this.p__9287 = p__9287;
this.map__9298 = map__9298;
this.map__9295 = map__9295;
this.caption = caption;
this.map__9297 = map__9297;
this.owner = owner;
this.post_view = post_view;
this.vec__9296 = vec__9296;
this.url = url;
this.meta9300 = meta9300;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t9299.cljs$lang$type = true;
photosure.blog.t9299.cljs$lang$ctorStr = "photosure.blog/t9299";
photosure.blog.t9299.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.blog/t9299");
});
photosure.blog.t9299.prototype.om$core$IRender$ = true;
photosure.blog.t9299.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "post", "id": self__.id},React.DOM.div({"className": "blog-photo"},React.DOM.img({"src": self__.url})),om.core.build.call(null,photosure.blog.caption_view,self__.caption));
});
photosure.blog.t9299.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9301){var self__ = this;
var _9301__$1 = this;return self__.meta9300;
});
photosure.blog.t9299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9301,meta9300__$1){var self__ = this;
var _9301__$1 = this;return (new photosure.blog.t9299(self__.id,self__.p__9287,self__.map__9298,self__.map__9295,self__.caption,self__.map__9297,self__.owner,self__.post_view,self__.vec__9296,self__.url,meta9300__$1));
});
photosure.blog.__GT_t9299 = (function __GT_t9299(id__$1,p__9287__$1,map__9298__$2,map__9295__$2,caption__$1,map__9297__$2,owner__$1,post_view__$1,vec__9296__$1,url__$1,meta9300){return (new photosure.blog.t9299(id__$1,p__9287__$1,map__9298__$2,map__9295__$2,caption__$1,map__9297__$2,owner__$1,post_view__$1,vec__9296__$1,url__$1,meta9300));
});
}
return (new photosure.blog.t9299(id,p__9287,map__9298__$1,map__9295__$1,caption,map__9297__$1,owner,post_view,vec__9296,url,null));
});
photosure.blog.posts_view = (function posts_view(app,owner){if(typeof photosure.blog.t9308 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t9308 = (function (owner,app,posts_view,meta9309){
this.owner = owner;
this.app = app;
this.posts_view = posts_view;
this.meta9309 = meta9309;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t9308.cljs$lang$type = true;
photosure.blog.t9308.cljs$lang$ctorStr = "photosure.blog/t9308";
photosure.blog.t9308.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.blog/t9308");
});
photosure.blog.t9308.prototype.om$core$IRenderState$ = true;
photosure.blog.t9308.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__9311){var self__ = this;
var map__9312 = p__9311;var map__9312__$1 = ((cljs.core.seq_QMARK_.call(null,map__9312))?cljs.core.apply.call(null,cljs.core.hash_map,map__9312):map__9312);var scroll_chan = cljs.core.get.call(null,map__9312__$1,new cljs.core.Keyword(null,"scroll-chan","scroll-chan",3032676804));var this$__$1 = this;return cljs.core.apply.call(null,om.dom.div,{"onScroll": (function (){return cljs.core.async.put_BANG_.call(null,scroll_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scroll-top","scroll-top",1079042503),om.core.get_node.call(null,self__.owner).scrollTop,new cljs.core.Keyword(null,"height","height",4087841945),(1 + om.core.get_node.call(null,self__.owner).scrollHeight)], null));
}), "id": "post-list"},om.core.build_all.call(null,photosure.blog.post_view,new cljs.core.Keyword(null,"posts","posts",1120759621).cljs$core$IFn$_invoke$arity$1(self__.app)));
});
photosure.blog.t9308.prototype.om$core$IWillMount$ = true;
photosure.blog.t9308.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return photosure.util.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.Keyword(null,"url","url",1014020321),"api/posts",new cljs.core.Keyword(null,"on-complete","on-complete",2943599833),(function (p1__9302_SHARP_){return om.core.update_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"posts","posts",1120759621),p1__9302_SHARP_);
})], null));
});
photosure.blog.t9308.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9310){var self__ = this;
var _9310__$1 = this;return self__.meta9309;
});
photosure.blog.t9308.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9310,meta9309__$1){var self__ = this;
var _9310__$1 = this;return (new photosure.blog.t9308(self__.owner,self__.app,self__.posts_view,meta9309__$1));
});
photosure.blog.__GT_t9308 = (function __GT_t9308(owner__$1,app__$1,posts_view__$1,meta9309){return (new photosure.blog.t9308(owner__$1,app__$1,posts_view__$1,meta9309));
});
}
return (new photosure.blog.t9308(owner,app,posts_view,null));
});
photosure.blog.translate = (function translate(x,y){return [cljs.core.str("translate("),cljs.core.str(x),cljs.core.str("%,"),cljs.core.str(y),cljs.core.str("%)")].join('');
});
photosure.blog.scroll_bar = (function scroll_bar(app,owner){if(typeof photosure.blog.t9318 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t9318 = (function (owner,app,scroll_bar,meta9319){
this.owner = owner;
this.app = app;
this.scroll_bar = scroll_bar;
this.meta9319 = meta9319;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t9318.cljs$lang$type = true;
photosure.blog.t9318.cljs$lang$ctorStr = "photosure.blog/t9318";
photosure.blog.t9318.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.blog/t9318");
});
photosure.blog.t9318.prototype.om$core$IRenderState$ = true;
photosure.blog.t9318.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__9321){var self__ = this;
var map__9322 = p__9321;var map__9322__$1 = ((cljs.core.seq_QMARK_.call(null,map__9322))?cljs.core.apply.call(null,cljs.core.hash_map,map__9322):map__9322);var track_height = cljs.core.get.call(null,map__9322__$1,new cljs.core.Keyword(null,"track-height","track-height",1541342043));var scroll_height = cljs.core.get.call(null,map__9322__$1,new cljs.core.Keyword(null,"scroll-height","scroll-height",4164695961));var scroll_top = cljs.core.get.call(null,map__9322__$1,new cljs.core.Keyword(null,"scroll-top","scroll-top",1079042503));var this$__$1 = this;cljs.core.println.call(null,[cljs.core.str("top "),cljs.core.str(scroll_top)].join(''));
cljs.core.println.call(null,[cljs.core.str("height "),cljs.core.str(scroll_height)].join(''));
cljs.core.println.call(null,[cljs.core.str("track height "),cljs.core.str(track_height)].join(''));
cljs.core.println.call(null,[cljs.core.str(Math.round.call(null,(100 * (scroll_top / scroll_height))))].join(''));
return React.DOM.div({"style": {"top": [cljs.core.str(Math.round.call(null,(track_height * (scroll_top / scroll_height)))),cljs.core.str("px")].join('')}, "className": "scroll-bar"});
});
photosure.blog.t9318.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9320){var self__ = this;
var _9320__$1 = this;return self__.meta9319;
});
photosure.blog.t9318.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9320,meta9319__$1){var self__ = this;
var _9320__$1 = this;return (new photosure.blog.t9318(self__.owner,self__.app,self__.scroll_bar,meta9319__$1));
});
photosure.blog.__GT_t9318 = (function __GT_t9318(owner__$1,app__$1,scroll_bar__$1,meta9319){return (new photosure.blog.t9318(owner__$1,app__$1,scroll_bar__$1,meta9319));
});
}
return (new photosure.blog.t9318(owner,app,scroll_bar,null));
});
photosure.blog.blog = (function blog(app,owner){if(typeof photosure.blog.t9351 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t9351 = (function (owner,app,blog,meta9352){
this.owner = owner;
this.app = app;
this.blog = blog;
this.meta9352 = meta9352;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t9351.cljs$lang$type = true;
photosure.blog.t9351.cljs$lang$ctorStr = "photosure.blog/t9351";
photosure.blog.t9351.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.blog/t9351");
});
photosure.blog.t9351.prototype.om$core$IRenderState$ = true;
photosure.blog.t9351.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__9354){var self__ = this;
var map__9355 = p__9354;var map__9355__$1 = ((cljs.core.seq_QMARK_.call(null,map__9355))?cljs.core.apply.call(null,cljs.core.hash_map,map__9355):map__9355);var track_height = cljs.core.get.call(null,map__9355__$1,new cljs.core.Keyword(null,"track-height","track-height",1541342043));var scroll_height = cljs.core.get.call(null,map__9355__$1,new cljs.core.Keyword(null,"scroll-height","scroll-height",4164695961));var scroll_top = cljs.core.get.call(null,map__9355__$1,new cljs.core.Keyword(null,"scroll-top","scroll-top",1079042503));var scroll_chan = cljs.core.get.call(null,map__9355__$1,new cljs.core.Keyword(null,"scroll-chan","scroll-chan",3032676804));var this$__$1 = this;return React.DOM.div({"id": "blog-gallery-container"},React.DOM.div({"id": "blog-gallery"},React.DOM.div({"id": "overflow-wrapper"},React.DOM.div({"className": "scroll-header"}),om.core.build.call(null,photosure.blog.posts_view,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scroll-chan","scroll-chan",3032676804),scroll_chan], null)], null)),React.DOM.div({"className": "scroll-footer"})),om.core.build.call(null,photosure.blog.scroll_bar,self__.app,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"scroll-top","scroll-top",1079042503),scroll_top,new cljs.core.Keyword(null,"scroll-height","scroll-height",4164695961),scroll_height,new cljs.core.Keyword(null,"track-height","track-height",1541342043),track_height], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"scroll-top","scroll-top",1079042503),scroll_top,new cljs.core.Keyword(null,"scroll-height","scroll-height",4164695961),scroll_height,new cljs.core.Keyword(null,"track-height","track-height",1541342043),track_height], null)], null))));
});
photosure.blog.t9351.prototype.om$core$IDidMount$ = true;
photosure.blog.t9351.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"track-height","track-height",1541342043),om.core.get_node.call(null,self__.owner).clientHeight);
});
photosure.blog.t9351.prototype.om$core$IWillMount$ = true;
photosure.blog.t9351.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var scroll_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"scroll-chan","scroll-chan",3032676804));var c__6222__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6223__auto__ = (function (){var switch__6207__auto__ = (function (state_9367){var state_val_9368 = (state_9367[1]);if((state_val_9368 === 4))
{var inst_9358 = (state_9367[2]);var inst_9359 = new cljs.core.Keyword(null,"scroll-top","scroll-top",1079042503).cljs$core$IFn$_invoke$arity$1(inst_9358);var inst_9360 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"scroll-top","scroll-top",1079042503),inst_9359);var inst_9361 = new cljs.core.Keyword(null,"height","height",4087841945).cljs$core$IFn$_invoke$arity$1(inst_9358);var inst_9362 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"scroll-height","scroll-height",4164695961),inst_9361);var state_9367__$1 = (function (){var statearr_9369 = state_9367;(statearr_9369[7] = inst_9360);
(statearr_9369[8] = inst_9362);
return statearr_9369;
})();var statearr_9370_9379 = state_9367__$1;(statearr_9370_9379[2] = null);
(statearr_9370_9379[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9368 === 3))
{var inst_9365 = (state_9367[2]);var state_9367__$1 = state_9367;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9367__$1,inst_9365);
} else
{if((state_val_9368 === 2))
{var state_9367__$1 = state_9367;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9367__$1,4,scroll_chan);
} else
{if((state_val_9368 === 1))
{var state_9367__$1 = state_9367;var statearr_9371_9380 = state_9367__$1;(statearr_9371_9380[2] = null);
(statearr_9371_9380[1] = 2);
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
var state_machine__6208__auto____0 = (function (){var statearr_9375 = [null,null,null,null,null,null,null,null,null];(statearr_9375[0] = state_machine__6208__auto__);
(statearr_9375[1] = 1);
return statearr_9375;
});
var state_machine__6208__auto____1 = (function (state_9367){while(true){
var ret_value__6209__auto__ = (function (){try{while(true){
var result__6210__auto__ = switch__6207__auto__.call(null,state_9367);if(cljs.core.keyword_identical_QMARK_.call(null,result__6210__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6210__auto__;
}
break;
}
}catch (e9376){if((e9376 instanceof Object))
{var ex__6211__auto__ = e9376;var statearr_9377_9381 = state_9367;(statearr_9377_9381[5] = ex__6211__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9367);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9376;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6209__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9382 = state_9367;
state_9367 = G__9382;
continue;
}
} else
{return ret_value__6209__auto__;
}
break;
}
});
state_machine__6208__auto__ = function(state_9367){
switch(arguments.length){
case 0:
return state_machine__6208__auto____0.call(this);
case 1:
return state_machine__6208__auto____1.call(this,state_9367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6208__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6208__auto____0;
state_machine__6208__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6208__auto____1;
return state_machine__6208__auto__;
})()
;})(switch__6207__auto__))
})();var state__6224__auto__ = (function (){var statearr_9378 = f__6223__auto__.call(null);(statearr_9378[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6222__auto__);
return statearr_9378;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6224__auto__);
}));
return c__6222__auto__;
});
photosure.blog.t9351.prototype.om$core$IInitState$ = true;
photosure.blog.t9351.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"scroll-chan","scroll-chan",3032676804),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"scroll-top","scroll-top",1079042503),0,new cljs.core.Keyword(null,"scroll-height","scroll-height",4164695961),1,new cljs.core.Keyword(null,"track-height","track-height",1541342043),0], null);
});
photosure.blog.t9351.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9353){var self__ = this;
var _9353__$1 = this;return self__.meta9352;
});
photosure.blog.t9351.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9353,meta9352__$1){var self__ = this;
var _9353__$1 = this;return (new photosure.blog.t9351(self__.owner,self__.app,self__.blog,meta9352__$1));
});
photosure.blog.__GT_t9351 = (function __GT_t9351(owner__$1,app__$1,blog__$1,meta9352){return (new photosure.blog.t9351(owner__$1,app__$1,blog__$1,meta9352));
});
}
return (new photosure.blog.t9351(owner,app,blog,null));
});
photosure.blog.render = (function render(){return om.core.root.call(null,photosure.blog.blog,photosure.blog.app_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("dynamic-content")], null));
});

//# sourceMappingURL=blog.js.map