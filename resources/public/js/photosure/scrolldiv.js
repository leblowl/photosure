// Compiled by ClojureScript 0.0-2322
goog.provide('photosure.scrolldiv');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
photosure.scrolldiv.scroll_bar = (function scroll_bar(app,owner){if(typeof photosure.scrolldiv.t10073 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.scrolldiv.t10073 = (function (owner,app,scroll_bar,meta10074){
this.owner = owner;
this.app = app;
this.scroll_bar = scroll_bar;
this.meta10074 = meta10074;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.scrolldiv.t10073.cljs$lang$type = true;
photosure.scrolldiv.t10073.cljs$lang$ctorStr = "photosure.scrolldiv/t10073";
photosure.scrolldiv.t10073.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.scrolldiv/t10073");
});
photosure.scrolldiv.t10073.prototype.om$core$IRenderState$ = true;
photosure.scrolldiv.t10073.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__10076){var self__ = this;
var map__10077 = p__10076;var map__10077__$1 = ((cljs.core.seq_QMARK_.call(null,map__10077))?cljs.core.apply.call(null,cljs.core.hash_map,map__10077):map__10077);var total_scroll_height = cljs.core.get.call(null,map__10077__$1,new cljs.core.Keyword(null,"total-scroll-height","total-scroll-height",-1230474362));var scroll_top = cljs.core.get.call(null,map__10077__$1,new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100));var total_track_height = cljs.core.get.call(null,map__10077__$1,new cljs.core.Keyword(null,"total-track-height","total-track-height",844315305));var this$__$1 = this;return React.DOM.div({"className": "scroll-track"},React.DOM.div({"style": {"top": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round.call(null,(total_track_height * (scroll_top / total_scroll_height))))+"px")}, "className": "scroll-bar"}));
});
photosure.scrolldiv.t10073.prototype.om$core$IWillUnmount$ = true;
photosure.scrolldiv.t10073.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return window.removeEventListener("resize",om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-resize","handle-resize",-1179349346)));
});
photosure.scrolldiv.t10073.prototype.om$core$IDidMount$ = true;
photosure.scrolldiv.t10073.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var elem = om.core.get_node.call(null,self__.owner);var padding_top = parseInt(window.getComputedStyle(elem).getPropertyValue("padding-top"));var padding_bottom = parseInt(window.getComputedStyle(elem).getPropertyValue("padding-bottom"));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-resize","handle-resize",-1179349346),((function (elem,padding_top,padding_bottom,___$1){
return (function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"total-track-height","total-track-height",844315305),(((elem.clientHeight - padding_top) - padding_bottom) - elem.firstChild.offsetHeight));
});})(elem,padding_top,padding_bottom,___$1))
);
om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-resize","handle-resize",-1179349346)).call(null);
return window.addEventListener("resize",om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-resize","handle-resize",-1179349346)));
});
photosure.scrolldiv.t10073.prototype.om$core$IWillMount$ = true;
photosure.scrolldiv.t10073.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var scroll_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748));var c__6367__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto__,scroll_chan,___$1){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto__,scroll_chan,___$1){
return (function (state_10089){var state_val_10090 = (state_10089[(1)]);if((state_val_10090 === (4)))
{var inst_10080 = (state_10089[(2)]);var inst_10081 = new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100).cljs$core$IFn$_invoke$arity$1(inst_10080);var inst_10082 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),inst_10081);var inst_10083 = new cljs.core.Keyword(null,"total-scroll-height","total-scroll-height",-1230474362).cljs$core$IFn$_invoke$arity$1(inst_10080);var inst_10084 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"total-scroll-height","total-scroll-height",-1230474362),inst_10083);var state_10089__$1 = (function (){var statearr_10091 = state_10089;(statearr_10091[(7)] = inst_10084);
(statearr_10091[(8)] = inst_10082);
return statearr_10091;
})();var statearr_10092_10101 = state_10089__$1;(statearr_10092_10101[(2)] = null);
(statearr_10092_10101[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10090 === (3)))
{var inst_10087 = (state_10089[(2)]);var state_10089__$1 = state_10089;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10089__$1,inst_10087);
} else
{if((state_val_10090 === (2)))
{var state_10089__$1 = state_10089;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10089__$1,(4),scroll_chan);
} else
{if((state_val_10090 === (1)))
{var state_10089__$1 = state_10089;var statearr_10093_10102 = state_10089__$1;(statearr_10093_10102[(2)] = null);
(statearr_10093_10102[(1)] = (2));
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
var state_machine__6353__auto____0 = (function (){var statearr_10097 = [null,null,null,null,null,null,null,null,null];(statearr_10097[(0)] = state_machine__6353__auto__);
(statearr_10097[(1)] = (1));
return statearr_10097;
});
var state_machine__6353__auto____1 = (function (state_10089){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_10089);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e10098){if((e10098 instanceof Object))
{var ex__6356__auto__ = e10098;var statearr_10099_10103 = state_10089;(statearr_10099_10103[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10089);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10098;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10104 = state_10089;
state_10089 = G__10104;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_10089){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_10089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto__,scroll_chan,___$1))
})();var state__6369__auto__ = (function (){var statearr_10100 = f__6368__auto__.call(null);(statearr_10100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto__);
return statearr_10100;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto__,scroll_chan,___$1))
);
return c__6367__auto__;
});
photosure.scrolldiv.t10073.prototype.om$core$IInitState$ = true;
photosure.scrolldiv.t10073.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"total-track-height","total-track-height",844315305),(0),new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),(0),new cljs.core.Keyword(null,"total-scroll-height","total-scroll-height",-1230474362),(1)], null);
});
photosure.scrolldiv.t10073.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10075){var self__ = this;
var _10075__$1 = this;return self__.meta10074;
});
photosure.scrolldiv.t10073.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10075,meta10074__$1){var self__ = this;
var _10075__$1 = this;return (new photosure.scrolldiv.t10073(self__.owner,self__.app,self__.scroll_bar,meta10074__$1));
});
photosure.scrolldiv.__GT_t10073 = (function __GT_t10073(owner__$1,app__$1,scroll_bar__$1,meta10074){return (new photosure.scrolldiv.t10073(owner__$1,app__$1,scroll_bar__$1,meta10074));
});
}
return (new photosure.scrolldiv.t10073(owner,app,scroll_bar,null));
});
photosure.scrolldiv.scroll_content = (function scroll_content(app,owner,opts){if(typeof photosure.scrolldiv.t10110 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.scrolldiv.t10110 = (function (opts,owner,app,scroll_content,meta10111){
this.opts = opts;
this.owner = owner;
this.app = app;
this.scroll_content = scroll_content;
this.meta10111 = meta10111;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.scrolldiv.t10110.cljs$lang$type = true;
photosure.scrolldiv.t10110.cljs$lang$ctorStr = "photosure.scrolldiv/t10110";
photosure.scrolldiv.t10110.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.scrolldiv/t10110");
});
photosure.scrolldiv.t10110.prototype.om$core$IRenderState$ = true;
photosure.scrolldiv.t10110.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__10113){var self__ = this;
var map__10114 = p__10113;var map__10114__$1 = ((cljs.core.seq_QMARK_.call(null,map__10114))?cljs.core.apply.call(null,cljs.core.hash_map,map__10114):map__10114);var scroll_chan = cljs.core.get.call(null,map__10114__$1,new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748));var this$__$1 = this;return cljs.core.apply.call(null,om.dom.div,{"onScroll": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-resize","handle-resize",-1179349346)), "className": "scroll-content"},new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(self__.opts));
});
photosure.scrolldiv.t10110.prototype.om$core$IWillUnmount$ = true;
photosure.scrolldiv.t10110.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return window.removeEventListener("resize",om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-resize","handle-resize",-1179349346)));
});
photosure.scrolldiv.t10110.prototype.om$core$IDidMount$ = true;
photosure.scrolldiv.t10110.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var elem_10115 = om.core.get_node.call(null,self__.owner);var scroll_chan_10116 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-resize","handle-resize",-1179349346),((function (elem_10115,scroll_chan_10116,this$__$1){
return (function (){return cljs.core.async.put_BANG_.call(null,scroll_chan_10116,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),elem_10115.scrollTop,new cljs.core.Keyword(null,"total-scroll-height","total-scroll-height",-1230474362),(elem_10115.scrollHeight - elem_10115.clientHeight)], null));
});})(elem_10115,scroll_chan_10116,this$__$1))
);
return window.addEventListener("resize",om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-resize","handle-resize",-1179349346)));
});
photosure.scrolldiv.t10110.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10112){var self__ = this;
var _10112__$1 = this;return self__.meta10111;
});
photosure.scrolldiv.t10110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10112,meta10111__$1){var self__ = this;
var _10112__$1 = this;return (new photosure.scrolldiv.t10110(self__.opts,self__.owner,self__.app,self__.scroll_content,meta10111__$1));
});
photosure.scrolldiv.__GT_t10110 = (function __GT_t10110(opts__$1,owner__$1,app__$1,scroll_content__$1,meta10111){return (new photosure.scrolldiv.t10110(opts__$1,owner__$1,app__$1,scroll_content__$1,meta10111));
});
}
return (new photosure.scrolldiv.t10110(opts,owner,app,scroll_content,null));
});
photosure.scrolldiv.scroll_div = (function scroll_div(app,owner,opts){if(typeof photosure.scrolldiv.t10122 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.scrolldiv.t10122 = (function (opts,owner,app,scroll_div,meta10123){
this.opts = opts;
this.owner = owner;
this.app = app;
this.scroll_div = scroll_div;
this.meta10123 = meta10123;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.scrolldiv.t10122.cljs$lang$type = true;
photosure.scrolldiv.t10122.cljs$lang$ctorStr = "photosure.scrolldiv/t10122";
photosure.scrolldiv.t10122.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.scrolldiv/t10122");
});
photosure.scrolldiv.t10122.prototype.om$core$IRenderState$ = true;
photosure.scrolldiv.t10122.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__10125){var self__ = this;
var map__10126 = p__10125;var map__10126__$1 = ((cljs.core.seq_QMARK_.call(null,map__10126))?cljs.core.apply.call(null,cljs.core.hash_map,map__10126):map__10126);var class$ = cljs.core.get.call(null,map__10126__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var scroll_chan = cljs.core.get.call(null,map__10126__$1,new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748));var this$__$1 = this;return React.DOM.div({"className": ("scroll-div "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$))},React.DOM.div({"className": "overflow-wrapper"},React.DOM.div({"className": "scroll-header"}),om.core.build.call(null,photosure.scrolldiv.scroll_content,self__.app,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748),scroll_chan], null),new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts], null)),React.DOM.div({"className": "scroll-footer"})),om.core.build.call(null,photosure.scrolldiv.scroll_bar,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748),scroll_chan], null)], null)));
});
photosure.scrolldiv.t10122.prototype.om$core$IInitState$ = true;
photosure.scrolldiv.t10122.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748),cljs.core.async.chan.call(null)], null);
});
photosure.scrolldiv.t10122.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10124){var self__ = this;
var _10124__$1 = this;return self__.meta10123;
});
photosure.scrolldiv.t10122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10124,meta10123__$1){var self__ = this;
var _10124__$1 = this;return (new photosure.scrolldiv.t10122(self__.opts,self__.owner,self__.app,self__.scroll_div,meta10123__$1));
});
photosure.scrolldiv.__GT_t10122 = (function __GT_t10122(opts__$1,owner__$1,app__$1,scroll_div__$1,meta10123){return (new photosure.scrolldiv.t10122(opts__$1,owner__$1,app__$1,scroll_div__$1,meta10123));
});
}
return (new photosure.scrolldiv.t10122(opts,owner,app,scroll_div,null));
});

//# sourceMappingURL=scrolldiv.js.map