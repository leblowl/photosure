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
photosure.scrolldiv.scroll_bar = (function scroll_bar(app,owner){if(typeof photosure.scrolldiv.t10401 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.scrolldiv.t10401 = (function (owner,app,scroll_bar,meta10402){
this.owner = owner;
this.app = app;
this.scroll_bar = scroll_bar;
this.meta10402 = meta10402;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.scrolldiv.t10401.cljs$lang$type = true;
photosure.scrolldiv.t10401.cljs$lang$ctorStr = "photosure.scrolldiv/t10401";
photosure.scrolldiv.t10401.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.scrolldiv/t10401");
});
photosure.scrolldiv.t10401.prototype.om$core$IRenderState$ = true;
photosure.scrolldiv.t10401.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__10404){var self__ = this;
var map__10405 = p__10404;var map__10405__$1 = ((cljs.core.seq_QMARK_.call(null,map__10405))?cljs.core.apply.call(null,cljs.core.hash_map,map__10405):map__10405);var total_scroll_height = cljs.core.get.call(null,map__10405__$1,new cljs.core.Keyword(null,"total-scroll-height","total-scroll-height",-1230474362));var scroll_top = cljs.core.get.call(null,map__10405__$1,new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100));var total_track_height = cljs.core.get.call(null,map__10405__$1,new cljs.core.Keyword(null,"total-track-height","total-track-height",844315305));var this$__$1 = this;return React.DOM.div({"className": "scroll-track"},React.DOM.div({"style": {"top": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round.call(null,(total_track_height * (scroll_top / total_scroll_height))))+"px")}, "className": "scroll-bar"}));
});
photosure.scrolldiv.t10401.prototype.om$core$IWillUnmount$ = true;
photosure.scrolldiv.t10401.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return window.removeEventListener("resize",om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-resize","handle-resize",-1179349346)));
});
photosure.scrolldiv.t10401.prototype.om$core$IDidMount$ = true;
photosure.scrolldiv.t10401.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var elem = om.core.get_node.call(null,self__.owner);var padding_top = parseInt(window.getComputedStyle(elem).getPropertyValue("padding-top"));var padding_bottom = parseInt(window.getComputedStyle(elem).getPropertyValue("padding-bottom"));cljs.core.println.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(padding_top)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(padding_bottom)));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-resize","handle-resize",-1179349346),((function (elem,padding_top,padding_bottom,___$1){
return (function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"total-track-height","total-track-height",844315305),(((elem.clientHeight - padding_top) - padding_bottom) - elem.firstChild.offsetHeight));
});})(elem,padding_top,padding_bottom,___$1))
);
om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-resize","handle-resize",-1179349346)).call(null);
return window.addEventListener("resize",om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-resize","handle-resize",-1179349346)));
});
photosure.scrolldiv.t10401.prototype.om$core$IWillMount$ = true;
photosure.scrolldiv.t10401.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var scroll_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748));var c__6367__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto__,scroll_chan,___$1){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto__,scroll_chan,___$1){
return (function (state_10417){var state_val_10418 = (state_10417[(1)]);if((state_val_10418 === (4)))
{var inst_10408 = (state_10417[(2)]);var inst_10409 = new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100).cljs$core$IFn$_invoke$arity$1(inst_10408);var inst_10410 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),inst_10409);var inst_10411 = new cljs.core.Keyword(null,"total-scroll-height","total-scroll-height",-1230474362).cljs$core$IFn$_invoke$arity$1(inst_10408);var inst_10412 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"total-scroll-height","total-scroll-height",-1230474362),inst_10411);var state_10417__$1 = (function (){var statearr_10419 = state_10417;(statearr_10419[(7)] = inst_10412);
(statearr_10419[(8)] = inst_10410);
return statearr_10419;
})();var statearr_10420_10429 = state_10417__$1;(statearr_10420_10429[(2)] = null);
(statearr_10420_10429[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10418 === (3)))
{var inst_10415 = (state_10417[(2)]);var state_10417__$1 = state_10417;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10417__$1,inst_10415);
} else
{if((state_val_10418 === (2)))
{var state_10417__$1 = state_10417;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10417__$1,(4),scroll_chan);
} else
{if((state_val_10418 === (1)))
{var state_10417__$1 = state_10417;var statearr_10421_10430 = state_10417__$1;(statearr_10421_10430[(2)] = null);
(statearr_10421_10430[(1)] = (2));
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
var state_machine__6353__auto____0 = (function (){var statearr_10425 = [null,null,null,null,null,null,null,null,null];(statearr_10425[(0)] = state_machine__6353__auto__);
(statearr_10425[(1)] = (1));
return statearr_10425;
});
var state_machine__6353__auto____1 = (function (state_10417){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_10417);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e10426){if((e10426 instanceof Object))
{var ex__6356__auto__ = e10426;var statearr_10427_10431 = state_10417;(statearr_10427_10431[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10417);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10426;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10432 = state_10417;
state_10417 = G__10432;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_10417){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_10417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto__,scroll_chan,___$1))
})();var state__6369__auto__ = (function (){var statearr_10428 = f__6368__auto__.call(null);(statearr_10428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto__);
return statearr_10428;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto__,scroll_chan,___$1))
);
return c__6367__auto__;
});
photosure.scrolldiv.t10401.prototype.om$core$IInitState$ = true;
photosure.scrolldiv.t10401.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"total-track-height","total-track-height",844315305),(0),new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),(0),new cljs.core.Keyword(null,"total-scroll-height","total-scroll-height",-1230474362),(1)], null);
});
photosure.scrolldiv.t10401.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10403){var self__ = this;
var _10403__$1 = this;return self__.meta10402;
});
photosure.scrolldiv.t10401.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10403,meta10402__$1){var self__ = this;
var _10403__$1 = this;return (new photosure.scrolldiv.t10401(self__.owner,self__.app,self__.scroll_bar,meta10402__$1));
});
photosure.scrolldiv.__GT_t10401 = (function __GT_t10401(owner__$1,app__$1,scroll_bar__$1,meta10402){return (new photosure.scrolldiv.t10401(owner__$1,app__$1,scroll_bar__$1,meta10402));
});
}
return (new photosure.scrolldiv.t10401(owner,app,scroll_bar,null));
});
photosure.scrolldiv.scroll_content = (function scroll_content(content){return (function (app,owner){if(typeof photosure.scrolldiv.t10438 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.scrolldiv.t10438 = (function (owner,app,content,scroll_content,meta10439){
this.owner = owner;
this.app = app;
this.content = content;
this.scroll_content = scroll_content;
this.meta10439 = meta10439;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.scrolldiv.t10438.cljs$lang$type = true;
photosure.scrolldiv.t10438.cljs$lang$ctorStr = "photosure.scrolldiv/t10438";
photosure.scrolldiv.t10438.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.scrolldiv/t10438");
});
photosure.scrolldiv.t10438.prototype.om$core$IRenderState$ = true;
photosure.scrolldiv.t10438.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__10441){var self__ = this;
var map__10442 = p__10441;var map__10442__$1 = ((cljs.core.seq_QMARK_.call(null,map__10442))?cljs.core.apply.call(null,cljs.core.hash_map,map__10442):map__10442);var scroll_chan = cljs.core.get.call(null,map__10442__$1,new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748));var this$__$1 = this;return React.DOM.div({"onScroll": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-resize","handle-resize",-1179349346)), "className": "scroll-content"},self__.content);
});
photosure.scrolldiv.t10438.prototype.om$core$IWillUnmount$ = true;
photosure.scrolldiv.t10438.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return window.removeEventListener("resize",om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-resize","handle-resize",-1179349346)));
});
photosure.scrolldiv.t10438.prototype.om$core$IDidMount$ = true;
photosure.scrolldiv.t10438.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var elem_10443 = om.core.get_node.call(null,self__.owner);var scroll_chan_10444 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-resize","handle-resize",-1179349346),((function (elem_10443,scroll_chan_10444,this$__$1){
return (function (){return cljs.core.async.put_BANG_.call(null,scroll_chan_10444,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),elem_10443.scrollTop,new cljs.core.Keyword(null,"total-scroll-height","total-scroll-height",-1230474362),(elem_10443.scrollHeight - elem_10443.clientHeight)], null));
});})(elem_10443,scroll_chan_10444,this$__$1))
);
return window.addEventListener("resize",om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-resize","handle-resize",-1179349346)));
});
photosure.scrolldiv.t10438.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10440){var self__ = this;
var _10440__$1 = this;return self__.meta10439;
});
photosure.scrolldiv.t10438.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10440,meta10439__$1){var self__ = this;
var _10440__$1 = this;return (new photosure.scrolldiv.t10438(self__.owner,self__.app,self__.content,self__.scroll_content,meta10439__$1));
});
photosure.scrolldiv.__GT_t10438 = (function __GT_t10438(owner__$1,app__$1,content__$1,scroll_content__$1,meta10439){return (new photosure.scrolldiv.t10438(owner__$1,app__$1,content__$1,scroll_content__$1,meta10439));
});
}
return (new photosure.scrolldiv.t10438(owner,app,content,scroll_content,null));
});
});
photosure.scrolldiv.scroll_div = (function scroll_div(content){return (function (app,owner,opts){if(typeof photosure.scrolldiv.t10450 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.scrolldiv.t10450 = (function (opts,owner,app,content,scroll_div,meta10451){
this.opts = opts;
this.owner = owner;
this.app = app;
this.content = content;
this.scroll_div = scroll_div;
this.meta10451 = meta10451;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.scrolldiv.t10450.cljs$lang$type = true;
photosure.scrolldiv.t10450.cljs$lang$ctorStr = "photosure.scrolldiv/t10450";
photosure.scrolldiv.t10450.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.scrolldiv/t10450");
});
photosure.scrolldiv.t10450.prototype.om$core$IRenderState$ = true;
photosure.scrolldiv.t10450.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__10453){var self__ = this;
var map__10454 = p__10453;var map__10454__$1 = ((cljs.core.seq_QMARK_.call(null,map__10454))?cljs.core.apply.call(null,cljs.core.hash_map,map__10454):map__10454);var scroll_chan = cljs.core.get.call(null,map__10454__$1,new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748));var this$__$1 = this;return React.DOM.div({"className": ("scroll-div "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(self__.opts)))},React.DOM.div({"className": "overflow-wrapper"},React.DOM.div({"className": "scroll-header"}),om.core.build.call(null,photosure.scrolldiv.scroll_content.call(null,self__.content),self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748),scroll_chan], null)], null)),React.DOM.div({"className": "scroll-footer"})),om.core.build.call(null,photosure.scrolldiv.scroll_bar,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748),scroll_chan], null)], null)));
});
photosure.scrolldiv.t10450.prototype.om$core$IInitState$ = true;
photosure.scrolldiv.t10450.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748),cljs.core.async.chan.call(null)], null);
});
photosure.scrolldiv.t10450.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10452){var self__ = this;
var _10452__$1 = this;return self__.meta10451;
});
photosure.scrolldiv.t10450.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10452,meta10451__$1){var self__ = this;
var _10452__$1 = this;return (new photosure.scrolldiv.t10450(self__.opts,self__.owner,self__.app,self__.content,self__.scroll_div,meta10451__$1));
});
photosure.scrolldiv.__GT_t10450 = (function __GT_t10450(opts__$1,owner__$1,app__$1,content__$1,scroll_div__$1,meta10451){return (new photosure.scrolldiv.t10450(opts__$1,owner__$1,app__$1,content__$1,scroll_div__$1,meta10451));
});
}
return (new photosure.scrolldiv.t10450(opts,owner,app,content,scroll_div,null));
});
});

//# sourceMappingURL=scrolldiv.js.map