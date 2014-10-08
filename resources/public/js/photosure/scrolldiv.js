// Compiled by ClojureScript 0.0-2322
goog.provide('photosure.scrolldiv');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
photosure.scrolldiv.scroll_bar = (function scroll_bar(app,owner){if(typeof photosure.scrolldiv.t10128 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.scrolldiv.t10128 = (function (owner,app,scroll_bar,meta10129){
this.owner = owner;
this.app = app;
this.scroll_bar = scroll_bar;
this.meta10129 = meta10129;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.scrolldiv.t10128.cljs$lang$type = true;
photosure.scrolldiv.t10128.cljs$lang$ctorStr = "photosure.scrolldiv/t10128";
photosure.scrolldiv.t10128.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.scrolldiv/t10128");
});
photosure.scrolldiv.t10128.prototype.om$core$IRenderState$ = true;
photosure.scrolldiv.t10128.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__10131){var self__ = this;
var map__10132 = p__10131;var map__10132__$1 = ((cljs.core.seq_QMARK_.call(null,map__10132))?cljs.core.apply.call(null,cljs.core.hash_map,map__10132):map__10132);var total_scroll_height = cljs.core.get.call(null,map__10132__$1,new cljs.core.Keyword(null,"total-scroll-height","total-scroll-height",-1230474362));var scroll_top = cljs.core.get.call(null,map__10132__$1,new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100));var total_track_height = cljs.core.get.call(null,map__10132__$1,new cljs.core.Keyword(null,"total-track-height","total-track-height",844315305));var this$__$1 = this;return React.DOM.div({"className": "scroll-track"},React.DOM.div({"style": {"top": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round.call(null,(total_track_height * (scroll_top / total_scroll_height))))+"px")}, "className": "scroll-bar"}));
});
photosure.scrolldiv.t10128.prototype.om$core$IWillUnmount$ = true;
photosure.scrolldiv.t10128.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return window.removeEventListener("resize",om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-resize","handle-resize",-1179349346)));
});
photosure.scrolldiv.t10128.prototype.om$core$IDidMount$ = true;
photosure.scrolldiv.t10128.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var elem = om.core.get_node.call(null,self__.owner);var padding_top = parseInt(window.getComputedStyle(elem).getPropertyValue("padding-top"));var padding_bottom = parseInt(window.getComputedStyle(elem).getPropertyValue("padding-bottom"));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-resize","handle-resize",-1179349346),((function (elem,padding_top,padding_bottom,___$1){
return (function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"total-track-height","total-track-height",844315305),(((elem.clientHeight - padding_top) - padding_bottom) - elem.firstChild.offsetHeight));
});})(elem,padding_top,padding_bottom,___$1))
);
om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-resize","handle-resize",-1179349346)).call(null);
return window.addEventListener("resize",om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-resize","handle-resize",-1179349346)));
});
photosure.scrolldiv.t10128.prototype.om$core$IWillMount$ = true;
photosure.scrolldiv.t10128.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var scroll_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748));var c__6367__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto__,scroll_chan,___$1){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto__,scroll_chan,___$1){
return (function (state_10144){var state_val_10145 = (state_10144[(1)]);if((state_val_10145 === (4)))
{var inst_10135 = (state_10144[(2)]);var inst_10136 = new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100).cljs$core$IFn$_invoke$arity$1(inst_10135);var inst_10137 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),inst_10136);var inst_10138 = new cljs.core.Keyword(null,"total-scroll-height","total-scroll-height",-1230474362).cljs$core$IFn$_invoke$arity$1(inst_10135);var inst_10139 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"total-scroll-height","total-scroll-height",-1230474362),inst_10138);var state_10144__$1 = (function (){var statearr_10146 = state_10144;(statearr_10146[(7)] = inst_10139);
(statearr_10146[(8)] = inst_10137);
return statearr_10146;
})();var statearr_10147_10156 = state_10144__$1;(statearr_10147_10156[(2)] = null);
(statearr_10147_10156[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10145 === (3)))
{var inst_10142 = (state_10144[(2)]);var state_10144__$1 = state_10144;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10144__$1,inst_10142);
} else
{if((state_val_10145 === (2)))
{var state_10144__$1 = state_10144;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10144__$1,(4),scroll_chan);
} else
{if((state_val_10145 === (1)))
{var state_10144__$1 = state_10144;var statearr_10148_10157 = state_10144__$1;(statearr_10148_10157[(2)] = null);
(statearr_10148_10157[(1)] = (2));
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
var state_machine__6353__auto____0 = (function (){var statearr_10152 = [null,null,null,null,null,null,null,null,null];(statearr_10152[(0)] = state_machine__6353__auto__);
(statearr_10152[(1)] = (1));
return statearr_10152;
});
var state_machine__6353__auto____1 = (function (state_10144){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_10144);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e10153){if((e10153 instanceof Object))
{var ex__6356__auto__ = e10153;var statearr_10154_10158 = state_10144;(statearr_10154_10158[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10144);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10153;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10159 = state_10144;
state_10144 = G__10159;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_10144){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_10144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto__,scroll_chan,___$1))
})();var state__6369__auto__ = (function (){var statearr_10155 = f__6368__auto__.call(null);(statearr_10155[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto__);
return statearr_10155;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto__,scroll_chan,___$1))
);
return c__6367__auto__;
});
photosure.scrolldiv.t10128.prototype.om$core$IInitState$ = true;
photosure.scrolldiv.t10128.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"total-track-height","total-track-height",844315305),(0),new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),(0),new cljs.core.Keyword(null,"total-scroll-height","total-scroll-height",-1230474362),(1)], null);
});
photosure.scrolldiv.t10128.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10130){var self__ = this;
var _10130__$1 = this;return self__.meta10129;
});
photosure.scrolldiv.t10128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10130,meta10129__$1){var self__ = this;
var _10130__$1 = this;return (new photosure.scrolldiv.t10128(self__.owner,self__.app,self__.scroll_bar,meta10129__$1));
});
photosure.scrolldiv.__GT_t10128 = (function __GT_t10128(owner__$1,app__$1,scroll_bar__$1,meta10129){return (new photosure.scrolldiv.t10128(owner__$1,app__$1,scroll_bar__$1,meta10129));
});
}
return (new photosure.scrolldiv.t10128(owner,app,scroll_bar,null));
});
photosure.scrolldiv.scroll_content = (function scroll_content(app,owner,opts){if(typeof photosure.scrolldiv.t10165 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.scrolldiv.t10165 = (function (opts,owner,app,scroll_content,meta10166){
this.opts = opts;
this.owner = owner;
this.app = app;
this.scroll_content = scroll_content;
this.meta10166 = meta10166;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.scrolldiv.t10165.cljs$lang$type = true;
photosure.scrolldiv.t10165.cljs$lang$ctorStr = "photosure.scrolldiv/t10165";
photosure.scrolldiv.t10165.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.scrolldiv/t10165");
});
photosure.scrolldiv.t10165.prototype.om$core$IRenderState$ = true;
photosure.scrolldiv.t10165.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__10168){var self__ = this;
var map__10169 = p__10168;var map__10169__$1 = ((cljs.core.seq_QMARK_.call(null,map__10169))?cljs.core.apply.call(null,cljs.core.hash_map,map__10169):map__10169);var scroll_chan = cljs.core.get.call(null,map__10169__$1,new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748));var this$__$1 = this;return cljs.core.apply.call(null,om.dom.div,{"onScroll": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-resize","handle-resize",-1179349346)), "className": "scroll-content"},new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(self__.opts));
});
photosure.scrolldiv.t10165.prototype.om$core$IWillUnmount$ = true;
photosure.scrolldiv.t10165.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return window.removeEventListener("resize",om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-resize","handle-resize",-1179349346)));
});
photosure.scrolldiv.t10165.prototype.om$core$IWillUpdate$ = true;
photosure.scrolldiv.t10165.prototype.om$core$IWillUpdate$will_update$arity$3 = (function (this$,next_props,next_state){var self__ = this;
var this$__$1 = this;return om.core.get_node.call(null,self__.owner).scrollTop = new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100).cljs$core$IFn$_invoke$arity$1(next_state);
});
photosure.scrolldiv.t10165.prototype.om$core$IDidMount$ = true;
photosure.scrolldiv.t10165.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var elem_10170 = om.core.get_node.call(null,self__.owner);var scroll_chan_10171 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-resize","handle-resize",-1179349346),((function (elem_10170,scroll_chan_10171,this$__$1){
return (function (_){return cljs.core.async.put_BANG_.call(null,scroll_chan_10171,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),elem_10170.scrollTop,new cljs.core.Keyword(null,"total-scroll-height","total-scroll-height",-1230474362),(elem_10170.scrollHeight - elem_10170.clientHeight)], null));
});})(elem_10170,scroll_chan_10171,this$__$1))
);
return window.addEventListener("resize",om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-resize","handle-resize",-1179349346)));
});
photosure.scrolldiv.t10165.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10167){var self__ = this;
var _10167__$1 = this;return self__.meta10166;
});
photosure.scrolldiv.t10165.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10167,meta10166__$1){var self__ = this;
var _10167__$1 = this;return (new photosure.scrolldiv.t10165(self__.opts,self__.owner,self__.app,self__.scroll_content,meta10166__$1));
});
photosure.scrolldiv.__GT_t10165 = (function __GT_t10165(opts__$1,owner__$1,app__$1,scroll_content__$1,meta10166){return (new photosure.scrolldiv.t10165(opts__$1,owner__$1,app__$1,scroll_content__$1,meta10166));
});
}
return (new photosure.scrolldiv.t10165(opts,owner,app,scroll_content,null));
});
photosure.scrolldiv.scroll_div = (function scroll_div(app,owner,opts){if(typeof photosure.scrolldiv.t10177 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.scrolldiv.t10177 = (function (opts,owner,app,scroll_div,meta10178){
this.opts = opts;
this.owner = owner;
this.app = app;
this.scroll_div = scroll_div;
this.meta10178 = meta10178;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.scrolldiv.t10177.cljs$lang$type = true;
photosure.scrolldiv.t10177.cljs$lang$ctorStr = "photosure.scrolldiv/t10177";
photosure.scrolldiv.t10177.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.scrolldiv/t10177");
});
photosure.scrolldiv.t10177.prototype.om$core$IRenderState$ = true;
photosure.scrolldiv.t10177.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__10180){var self__ = this;
var map__10181 = p__10180;var map__10181__$1 = ((cljs.core.seq_QMARK_.call(null,map__10181))?cljs.core.apply.call(null,cljs.core.hash_map,map__10181):map__10181);var scroll_top = cljs.core.get.call(null,map__10181__$1,new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100));var class$ = cljs.core.get.call(null,map__10181__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var scroll_chan = cljs.core.get.call(null,map__10181__$1,new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748));var this$__$1 = this;return React.DOM.div({"className": ("scroll-div "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$))},React.DOM.div({"className": "overflow-wrapper"},React.DOM.div({"className": "scroll-header"}),om.core.build.call(null,photosure.scrolldiv.scroll_content,self__.app,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748),scroll_chan,new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),scroll_top], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),scroll_top], null),new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts], null)),React.DOM.div({"className": "scroll-footer"})),om.core.build.call(null,photosure.scrolldiv.scroll_bar,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748),scroll_chan], null)], null)));
});
photosure.scrolldiv.t10177.prototype.om$core$IInitState$ = true;
photosure.scrolldiv.t10177.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748),cljs.core.async.chan.call(null)], null);
});
photosure.scrolldiv.t10177.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10179){var self__ = this;
var _10179__$1 = this;return self__.meta10178;
});
photosure.scrolldiv.t10177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10179,meta10178__$1){var self__ = this;
var _10179__$1 = this;return (new photosure.scrolldiv.t10177(self__.opts,self__.owner,self__.app,self__.scroll_div,meta10178__$1));
});
photosure.scrolldiv.__GT_t10177 = (function __GT_t10177(opts__$1,owner__$1,app__$1,scroll_div__$1,meta10178){return (new photosure.scrolldiv.t10177(opts__$1,owner__$1,app__$1,scroll_div__$1,meta10178));
});
}
return (new photosure.scrolldiv.t10177(opts,owner,app,scroll_div,null));
});

//# sourceMappingURL=scrolldiv.js.map