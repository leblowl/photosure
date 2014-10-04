// Compiled by ClojureScript 0.0-2322
goog.provide('photosure.scrolldiv');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
photosure.scrolldiv.scroll_bar = (function scroll_bar(app,owner){if(typeof photosure.scrolldiv.t11601 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.scrolldiv.t11601 = (function (owner,app,scroll_bar,meta11602){
this.owner = owner;
this.app = app;
this.scroll_bar = scroll_bar;
this.meta11602 = meta11602;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.scrolldiv.t11601.cljs$lang$type = true;
photosure.scrolldiv.t11601.cljs$lang$ctorStr = "photosure.scrolldiv/t11601";
photosure.scrolldiv.t11601.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.scrolldiv/t11601");
});
photosure.scrolldiv.t11601.prototype.om$core$IRenderState$ = true;
photosure.scrolldiv.t11601.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__11604){var self__ = this;
var map__11605 = p__11604;var map__11605__$1 = ((cljs.core.seq_QMARK_.call(null,map__11605))?cljs.core.apply.call(null,cljs.core.hash_map,map__11605):map__11605);var total_scroll_height = cljs.core.get.call(null,map__11605__$1,new cljs.core.Keyword(null,"total-scroll-height","total-scroll-height",-1230474362));var scroll_top = cljs.core.get.call(null,map__11605__$1,new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100));var total_track_height = cljs.core.get.call(null,map__11605__$1,new cljs.core.Keyword(null,"total-track-height","total-track-height",844315305));var this$__$1 = this;return React.DOM.div({"className": "scroll-track"},React.DOM.div({"style": {"top": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round.call(null,(total_track_height * (scroll_top / total_scroll_height))))+"px")}, "className": "scroll-bar"}));
});
photosure.scrolldiv.t11601.prototype.om$core$IWillUnmount$ = true;
photosure.scrolldiv.t11601.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return window.removeEventListener("resize",om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-resize","handle-resize",-1179349346)));
});
photosure.scrolldiv.t11601.prototype.om$core$IDidMount$ = true;
photosure.scrolldiv.t11601.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var elem = om.core.get_node.call(null,self__.owner);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-resize","handle-resize",-1179349346),((function (elem,___$1){
return (function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"total-track-height","total-track-height",844315305),(elem.clientHeight - elem.firstChild.offsetHeight));
});})(elem,___$1))
);
om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-resize","handle-resize",-1179349346)).call(null);
return window.addEventListener("resize",om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-resize","handle-resize",-1179349346)));
});
photosure.scrolldiv.t11601.prototype.om$core$IWillMount$ = true;
photosure.scrolldiv.t11601.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var scroll_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748));var c__6367__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto__,scroll_chan,___$1){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto__,scroll_chan,___$1){
return (function (state_11617){var state_val_11618 = (state_11617[(1)]);if((state_val_11618 === (4)))
{var inst_11608 = (state_11617[(2)]);var inst_11609 = new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100).cljs$core$IFn$_invoke$arity$1(inst_11608);var inst_11610 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),inst_11609);var inst_11611 = new cljs.core.Keyword(null,"total-scroll-height","total-scroll-height",-1230474362).cljs$core$IFn$_invoke$arity$1(inst_11608);var inst_11612 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"total-scroll-height","total-scroll-height",-1230474362),inst_11611);var state_11617__$1 = (function (){var statearr_11619 = state_11617;(statearr_11619[(7)] = inst_11610);
(statearr_11619[(8)] = inst_11612);
return statearr_11619;
})();var statearr_11620_11629 = state_11617__$1;(statearr_11620_11629[(2)] = null);
(statearr_11620_11629[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11618 === (3)))
{var inst_11615 = (state_11617[(2)]);var state_11617__$1 = state_11617;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11617__$1,inst_11615);
} else
{if((state_val_11618 === (2)))
{var state_11617__$1 = state_11617;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11617__$1,(4),scroll_chan);
} else
{if((state_val_11618 === (1)))
{var state_11617__$1 = state_11617;var statearr_11621_11630 = state_11617__$1;(statearr_11621_11630[(2)] = null);
(statearr_11621_11630[(1)] = (2));
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
var state_machine__6353__auto____0 = (function (){var statearr_11625 = [null,null,null,null,null,null,null,null,null];(statearr_11625[(0)] = state_machine__6353__auto__);
(statearr_11625[(1)] = (1));
return statearr_11625;
});
var state_machine__6353__auto____1 = (function (state_11617){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_11617);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e11626){if((e11626 instanceof Object))
{var ex__6356__auto__ = e11626;var statearr_11627_11631 = state_11617;(statearr_11627_11631[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11617);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11626;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11632 = state_11617;
state_11617 = G__11632;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_11617){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_11617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto__,scroll_chan,___$1))
})();var state__6369__auto__ = (function (){var statearr_11628 = f__6368__auto__.call(null);(statearr_11628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto__);
return statearr_11628;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto__,scroll_chan,___$1))
);
return c__6367__auto__;
});
photosure.scrolldiv.t11601.prototype.om$core$IInitState$ = true;
photosure.scrolldiv.t11601.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"total-track-height","total-track-height",844315305),(0),new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),(0),new cljs.core.Keyword(null,"total-scroll-height","total-scroll-height",-1230474362),(1)], null);
});
photosure.scrolldiv.t11601.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11603){var self__ = this;
var _11603__$1 = this;return self__.meta11602;
});
photosure.scrolldiv.t11601.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11603,meta11602__$1){var self__ = this;
var _11603__$1 = this;return (new photosure.scrolldiv.t11601(self__.owner,self__.app,self__.scroll_bar,meta11602__$1));
});
photosure.scrolldiv.__GT_t11601 = (function __GT_t11601(owner__$1,app__$1,scroll_bar__$1,meta11602){return (new photosure.scrolldiv.t11601(owner__$1,app__$1,scroll_bar__$1,meta11602));
});
}
return (new photosure.scrolldiv.t11601(owner,app,scroll_bar,null));
});
photosure.scrolldiv.scroll_content = (function scroll_content(content){return (function (app,owner){if(typeof photosure.scrolldiv.t11638 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.scrolldiv.t11638 = (function (owner,app,content,scroll_content,meta11639){
this.owner = owner;
this.app = app;
this.content = content;
this.scroll_content = scroll_content;
this.meta11639 = meta11639;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.scrolldiv.t11638.cljs$lang$type = true;
photosure.scrolldiv.t11638.cljs$lang$ctorStr = "photosure.scrolldiv/t11638";
photosure.scrolldiv.t11638.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.scrolldiv/t11638");
});
photosure.scrolldiv.t11638.prototype.om$core$IRenderState$ = true;
photosure.scrolldiv.t11638.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__11641){var self__ = this;
var map__11642 = p__11641;var map__11642__$1 = ((cljs.core.seq_QMARK_.call(null,map__11642))?cljs.core.apply.call(null,cljs.core.hash_map,map__11642):map__11642);var scroll_chan = cljs.core.get.call(null,map__11642__$1,new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748));var this$__$1 = this;return React.DOM.div({"onScroll": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-resize","handle-resize",-1179349346)), "className": "scroll-content"},self__.content);
});
photosure.scrolldiv.t11638.prototype.om$core$IWillUnmount$ = true;
photosure.scrolldiv.t11638.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return window.removeEventListener("resize",om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-resize","handle-resize",-1179349346)));
});
photosure.scrolldiv.t11638.prototype.om$core$IDidMount$ = true;
photosure.scrolldiv.t11638.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var elem_11643 = om.core.get_node.call(null,self__.owner);var scroll_chan_11644 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-resize","handle-resize",-1179349346),((function (elem_11643,scroll_chan_11644,this$__$1){
return (function (){return cljs.core.async.put_BANG_.call(null,scroll_chan_11644,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),elem_11643.scrollTop,new cljs.core.Keyword(null,"total-scroll-height","total-scroll-height",-1230474362),(elem_11643.scrollHeight - elem_11643.clientHeight)], null));
});})(elem_11643,scroll_chan_11644,this$__$1))
);
return window.addEventListener("resize",om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-resize","handle-resize",-1179349346)));
});
photosure.scrolldiv.t11638.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11640){var self__ = this;
var _11640__$1 = this;return self__.meta11639;
});
photosure.scrolldiv.t11638.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11640,meta11639__$1){var self__ = this;
var _11640__$1 = this;return (new photosure.scrolldiv.t11638(self__.owner,self__.app,self__.content,self__.scroll_content,meta11639__$1));
});
photosure.scrolldiv.__GT_t11638 = (function __GT_t11638(owner__$1,app__$1,content__$1,scroll_content__$1,meta11639){return (new photosure.scrolldiv.t11638(owner__$1,app__$1,content__$1,scroll_content__$1,meta11639));
});
}
return (new photosure.scrolldiv.t11638(owner,app,content,scroll_content,null));
});
});
photosure.scrolldiv.scroll_div = (function scroll_div(content){return (function (app,owner,opts){if(typeof photosure.scrolldiv.t11650 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.scrolldiv.t11650 = (function (opts,owner,app,content,scroll_div,meta11651){
this.opts = opts;
this.owner = owner;
this.app = app;
this.content = content;
this.scroll_div = scroll_div;
this.meta11651 = meta11651;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.scrolldiv.t11650.cljs$lang$type = true;
photosure.scrolldiv.t11650.cljs$lang$ctorStr = "photosure.scrolldiv/t11650";
photosure.scrolldiv.t11650.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.scrolldiv/t11650");
});
photosure.scrolldiv.t11650.prototype.om$core$IRenderState$ = true;
photosure.scrolldiv.t11650.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__11653){var self__ = this;
var map__11654 = p__11653;var map__11654__$1 = ((cljs.core.seq_QMARK_.call(null,map__11654))?cljs.core.apply.call(null,cljs.core.hash_map,map__11654):map__11654);var scroll_chan = cljs.core.get.call(null,map__11654__$1,new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748));var this$__$1 = this;return React.DOM.div({"className": ("scroll-div "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(self__.opts)))},React.DOM.div({"className": "overflow-wrapper"},React.DOM.div({"className": "scroll-header"}),om.core.build.call(null,photosure.scrolldiv.scroll_content.call(null,self__.content),self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748),scroll_chan], null)], null)),React.DOM.div({"className": "scroll-footer"})),om.core.build.call(null,photosure.scrolldiv.scroll_bar,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748),scroll_chan], null)], null)));
});
photosure.scrolldiv.t11650.prototype.om$core$IInitState$ = true;
photosure.scrolldiv.t11650.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748),cljs.core.async.chan.call(null)], null);
});
photosure.scrolldiv.t11650.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11652){var self__ = this;
var _11652__$1 = this;return self__.meta11651;
});
photosure.scrolldiv.t11650.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11652,meta11651__$1){var self__ = this;
var _11652__$1 = this;return (new photosure.scrolldiv.t11650(self__.opts,self__.owner,self__.app,self__.content,self__.scroll_div,meta11651__$1));
});
photosure.scrolldiv.__GT_t11650 = (function __GT_t11650(opts__$1,owner__$1,app__$1,content__$1,scroll_div__$1,meta11651){return (new photosure.scrolldiv.t11650(opts__$1,owner__$1,app__$1,content__$1,scroll_div__$1,meta11651));
});
}
return (new photosure.scrolldiv.t11650(opts,owner,app,content,scroll_div,null));
});
});

//# sourceMappingURL=scrolldiv.js.map