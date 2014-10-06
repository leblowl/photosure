// Compiled by ClojureScript 0.0-2322
goog.provide('photosure.scrolldiv');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
photosure.scrolldiv.scroll_bar = (function scroll_bar(app,owner){if(typeof photosure.scrolldiv.t9990 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.scrolldiv.t9990 = (function (owner,app,scroll_bar,meta9991){
this.owner = owner;
this.app = app;
this.scroll_bar = scroll_bar;
this.meta9991 = meta9991;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.scrolldiv.t9990.cljs$lang$type = true;
photosure.scrolldiv.t9990.cljs$lang$ctorStr = "photosure.scrolldiv/t9990";
photosure.scrolldiv.t9990.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.scrolldiv/t9990");
});
photosure.scrolldiv.t9990.prototype.om$core$IRenderState$ = true;
photosure.scrolldiv.t9990.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__9993){var self__ = this;
var map__9994 = p__9993;var map__9994__$1 = ((cljs.core.seq_QMARK_.call(null,map__9994))?cljs.core.apply.call(null,cljs.core.hash_map,map__9994):map__9994);var total_scroll_height = cljs.core.get.call(null,map__9994__$1,new cljs.core.Keyword(null,"total-scroll-height","total-scroll-height",-1230474362));var scroll_top = cljs.core.get.call(null,map__9994__$1,new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100));var total_track_height = cljs.core.get.call(null,map__9994__$1,new cljs.core.Keyword(null,"total-track-height","total-track-height",844315305));var this$__$1 = this;return React.DOM.div({"className": "scroll-track"},React.DOM.div({"style": {"top": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round.call(null,(total_track_height * (scroll_top / total_scroll_height))))+"px")}, "className": "scroll-bar"}));
});
photosure.scrolldiv.t9990.prototype.om$core$IWillUnmount$ = true;
photosure.scrolldiv.t9990.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return window.removeEventListener("resize",om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-resize","handle-resize",-1179349346)));
});
photosure.scrolldiv.t9990.prototype.om$core$IDidMount$ = true;
photosure.scrolldiv.t9990.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var elem = om.core.get_node.call(null,self__.owner);var padding_top = parseInt(window.getComputedStyle(elem).getPropertyValue("padding-top"));var padding_bottom = parseInt(window.getComputedStyle(elem).getPropertyValue("padding-bottom"));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-resize","handle-resize",-1179349346),((function (elem,padding_top,padding_bottom,___$1){
return (function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"total-track-height","total-track-height",844315305),(((elem.clientHeight - padding_top) - padding_bottom) - elem.firstChild.offsetHeight));
});})(elem,padding_top,padding_bottom,___$1))
);
om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-resize","handle-resize",-1179349346)).call(null);
return window.addEventListener("resize",om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-resize","handle-resize",-1179349346)));
});
photosure.scrolldiv.t9990.prototype.om$core$IWillMount$ = true;
photosure.scrolldiv.t9990.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var scroll_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748));var c__6367__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto__,scroll_chan,___$1){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto__,scroll_chan,___$1){
return (function (state_10006){var state_val_10007 = (state_10006[(1)]);if((state_val_10007 === (4)))
{var inst_9997 = (state_10006[(2)]);var inst_9998 = new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100).cljs$core$IFn$_invoke$arity$1(inst_9997);var inst_9999 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),inst_9998);var inst_10000 = new cljs.core.Keyword(null,"total-scroll-height","total-scroll-height",-1230474362).cljs$core$IFn$_invoke$arity$1(inst_9997);var inst_10001 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"total-scroll-height","total-scroll-height",-1230474362),inst_10000);var state_10006__$1 = (function (){var statearr_10008 = state_10006;(statearr_10008[(7)] = inst_9999);
(statearr_10008[(8)] = inst_10001);
return statearr_10008;
})();var statearr_10009_10018 = state_10006__$1;(statearr_10009_10018[(2)] = null);
(statearr_10009_10018[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10007 === (3)))
{var inst_10004 = (state_10006[(2)]);var state_10006__$1 = state_10006;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10006__$1,inst_10004);
} else
{if((state_val_10007 === (2)))
{var state_10006__$1 = state_10006;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10006__$1,(4),scroll_chan);
} else
{if((state_val_10007 === (1)))
{var state_10006__$1 = state_10006;var statearr_10010_10019 = state_10006__$1;(statearr_10010_10019[(2)] = null);
(statearr_10010_10019[(1)] = (2));
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
var state_machine__6353__auto____0 = (function (){var statearr_10014 = [null,null,null,null,null,null,null,null,null];(statearr_10014[(0)] = state_machine__6353__auto__);
(statearr_10014[(1)] = (1));
return statearr_10014;
});
var state_machine__6353__auto____1 = (function (state_10006){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_10006);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e10015){if((e10015 instanceof Object))
{var ex__6356__auto__ = e10015;var statearr_10016_10020 = state_10006;(statearr_10016_10020[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10006);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10015;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10021 = state_10006;
state_10006 = G__10021;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_10006){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_10006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto__,scroll_chan,___$1))
})();var state__6369__auto__ = (function (){var statearr_10017 = f__6368__auto__.call(null);(statearr_10017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto__);
return statearr_10017;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto__,scroll_chan,___$1))
);
return c__6367__auto__;
});
photosure.scrolldiv.t9990.prototype.om$core$IInitState$ = true;
photosure.scrolldiv.t9990.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"total-track-height","total-track-height",844315305),(0),new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),(0),new cljs.core.Keyword(null,"total-scroll-height","total-scroll-height",-1230474362),(1)], null);
});
photosure.scrolldiv.t9990.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9992){var self__ = this;
var _9992__$1 = this;return self__.meta9991;
});
photosure.scrolldiv.t9990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9992,meta9991__$1){var self__ = this;
var _9992__$1 = this;return (new photosure.scrolldiv.t9990(self__.owner,self__.app,self__.scroll_bar,meta9991__$1));
});
photosure.scrolldiv.__GT_t9990 = (function __GT_t9990(owner__$1,app__$1,scroll_bar__$1,meta9991){return (new photosure.scrolldiv.t9990(owner__$1,app__$1,scroll_bar__$1,meta9991));
});
}
return (new photosure.scrolldiv.t9990(owner,app,scroll_bar,null));
});
photosure.scrolldiv.scroll_content = (function scroll_content(app,owner,opts){if(typeof photosure.scrolldiv.t10027 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.scrolldiv.t10027 = (function (opts,owner,app,scroll_content,meta10028){
this.opts = opts;
this.owner = owner;
this.app = app;
this.scroll_content = scroll_content;
this.meta10028 = meta10028;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.scrolldiv.t10027.cljs$lang$type = true;
photosure.scrolldiv.t10027.cljs$lang$ctorStr = "photosure.scrolldiv/t10027";
photosure.scrolldiv.t10027.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.scrolldiv/t10027");
});
photosure.scrolldiv.t10027.prototype.om$core$IRenderState$ = true;
photosure.scrolldiv.t10027.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__10030){var self__ = this;
var map__10031 = p__10030;var map__10031__$1 = ((cljs.core.seq_QMARK_.call(null,map__10031))?cljs.core.apply.call(null,cljs.core.hash_map,map__10031):map__10031);var scroll_chan = cljs.core.get.call(null,map__10031__$1,new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748));var this$__$1 = this;return cljs.core.apply.call(null,om.dom.div,{"onScroll": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-resize","handle-resize",-1179349346)), "className": "scroll-content"},new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(self__.opts));
});
photosure.scrolldiv.t10027.prototype.om$core$IWillUnmount$ = true;
photosure.scrolldiv.t10027.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return window.removeEventListener("resize",om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-resize","handle-resize",-1179349346)));
});
photosure.scrolldiv.t10027.prototype.om$core$IDidMount$ = true;
photosure.scrolldiv.t10027.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var elem_10032 = om.core.get_node.call(null,self__.owner);var scroll_chan_10033 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-resize","handle-resize",-1179349346),((function (elem_10032,scroll_chan_10033,this$__$1){
return (function (){return cljs.core.async.put_BANG_.call(null,scroll_chan_10033,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),elem_10032.scrollTop,new cljs.core.Keyword(null,"total-scroll-height","total-scroll-height",-1230474362),(elem_10032.scrollHeight - elem_10032.clientHeight)], null));
});})(elem_10032,scroll_chan_10033,this$__$1))
);
return window.addEventListener("resize",om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-resize","handle-resize",-1179349346)));
});
photosure.scrolldiv.t10027.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10029){var self__ = this;
var _10029__$1 = this;return self__.meta10028;
});
photosure.scrolldiv.t10027.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10029,meta10028__$1){var self__ = this;
var _10029__$1 = this;return (new photosure.scrolldiv.t10027(self__.opts,self__.owner,self__.app,self__.scroll_content,meta10028__$1));
});
photosure.scrolldiv.__GT_t10027 = (function __GT_t10027(opts__$1,owner__$1,app__$1,scroll_content__$1,meta10028){return (new photosure.scrolldiv.t10027(opts__$1,owner__$1,app__$1,scroll_content__$1,meta10028));
});
}
return (new photosure.scrolldiv.t10027(opts,owner,app,scroll_content,null));
});
photosure.scrolldiv.scroll_div = (function scroll_div(app,owner,opts){if(typeof photosure.scrolldiv.t10039 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.scrolldiv.t10039 = (function (opts,owner,app,scroll_div,meta10040){
this.opts = opts;
this.owner = owner;
this.app = app;
this.scroll_div = scroll_div;
this.meta10040 = meta10040;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.scrolldiv.t10039.cljs$lang$type = true;
photosure.scrolldiv.t10039.cljs$lang$ctorStr = "photosure.scrolldiv/t10039";
photosure.scrolldiv.t10039.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.scrolldiv/t10039");
});
photosure.scrolldiv.t10039.prototype.om$core$IRenderState$ = true;
photosure.scrolldiv.t10039.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__10042){var self__ = this;
var map__10043 = p__10042;var map__10043__$1 = ((cljs.core.seq_QMARK_.call(null,map__10043))?cljs.core.apply.call(null,cljs.core.hash_map,map__10043):map__10043);var scroll_chan = cljs.core.get.call(null,map__10043__$1,new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748));var this$__$1 = this;return React.DOM.div({"className": ("scroll-div "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(self__.opts)))},React.DOM.div({"className": "overflow-wrapper"},React.DOM.div({"className": "scroll-header"}),om.core.build.call(null,photosure.scrolldiv.scroll_content,self__.app,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748),scroll_chan], null),new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts], null)),React.DOM.div({"className": "scroll-footer"})),om.core.build.call(null,photosure.scrolldiv.scroll_bar,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748),scroll_chan], null)], null)));
});
photosure.scrolldiv.t10039.prototype.om$core$IInitState$ = true;
photosure.scrolldiv.t10039.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748),cljs.core.async.chan.call(null)], null);
});
photosure.scrolldiv.t10039.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10041){var self__ = this;
var _10041__$1 = this;return self__.meta10040;
});
photosure.scrolldiv.t10039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10041,meta10040__$1){var self__ = this;
var _10041__$1 = this;return (new photosure.scrolldiv.t10039(self__.opts,self__.owner,self__.app,self__.scroll_div,meta10040__$1));
});
photosure.scrolldiv.__GT_t10039 = (function __GT_t10039(opts__$1,owner__$1,app__$1,scroll_div__$1,meta10040){return (new photosure.scrolldiv.t10039(opts__$1,owner__$1,app__$1,scroll_div__$1,meta10040));
});
}
return (new photosure.scrolldiv.t10039(opts,owner,app,scroll_div,null));
});

//# sourceMappingURL=scrolldiv.js.map