// Compiled by ClojureScript 0.0-2322
goog.provide('photosure.scrolldiv');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
photosure.scrolldiv.scroll_bar = (function scroll_bar(app,owner){if(typeof photosure.scrolldiv.t12809 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.scrolldiv.t12809 = (function (owner,app,scroll_bar,meta12810){
this.owner = owner;
this.app = app;
this.scroll_bar = scroll_bar;
this.meta12810 = meta12810;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.scrolldiv.t12809.cljs$lang$type = true;
photosure.scrolldiv.t12809.cljs$lang$ctorStr = "photosure.scrolldiv/t12809";
photosure.scrolldiv.t12809.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.scrolldiv/t12809");
});
photosure.scrolldiv.t12809.prototype.om$core$IInitState$ = true;
photosure.scrolldiv.t12809.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"total-track-height","total-track-height",844315305),(0),new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),(0),new cljs.core.Keyword(null,"total-scroll-height","total-scroll-height",-1230474362),(1)], null);
});
photosure.scrolldiv.t12809.prototype.photosure$scrolldiv$children$ = true;
photosure.scrolldiv.t12809.prototype.om$core$IDidMount$ = true;
photosure.scrolldiv.t12809.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var elem = om.core.get_node.call(null,self__.owner);var padding_top = parseInt(window.getComputedStyle(elem).getPropertyValue("padding-top"));var padding_bottom = parseInt(window.getComputedStyle(elem).getPropertyValue("padding-bottom"));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-resize","handle-resize",-1179349346),((function (elem,padding_top,padding_bottom,___$1){
return (function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"total-track-height","total-track-height",844315305),(((elem.clientHeight - padding_top) - padding_bottom) - elem.firstChild.offsetHeight));
});})(elem,padding_top,padding_bottom,___$1))
);
om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-resize","handle-resize",-1179349346)).call(null);
return window.addEventListener("resize",om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-resize","handle-resize",-1179349346)));
});
photosure.scrolldiv.t12809.prototype.photosure$scrolldiv$react$ = true;
photosure.scrolldiv.t12809.prototype.photosure$scrolldiv$make$ = true;
photosure.scrolldiv.t12809.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12811){var self__ = this;
var _12811__$1 = this;return self__.meta12810;
});
photosure.scrolldiv.t12809.prototype.photosure$scrolldiv$component$ = true;
photosure.scrolldiv.t12809.prototype.om$core$IWillUnmount$ = true;
photosure.scrolldiv.t12809.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return window.removeEventListener("resize",om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-resize","handle-resize",-1179349346)));
});
photosure.scrolldiv.t12809.prototype.om$core$IRenderState$ = true;
photosure.scrolldiv.t12809.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__12812){var self__ = this;
var map__12813 = p__12812;var map__12813__$1 = ((cljs.core.seq_QMARK_.call(null,map__12813))?cljs.core.apply.call(null,cljs.core.hash_map,map__12813):map__12813);var total_scroll_height = cljs.core.get.call(null,map__12813__$1,new cljs.core.Keyword(null,"total-scroll-height","total-scroll-height",-1230474362));var scroll_top = cljs.core.get.call(null,map__12813__$1,new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100));var total_track_height = cljs.core.get.call(null,map__12813__$1,new cljs.core.Keyword(null,"total-track-height","total-track-height",844315305));var this$__$1 = this;return React.DOM.div({"className": "scroll-track"},React.DOM.div({"style": {"top": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round.call(null,(total_track_height * (scroll_top / total_scroll_height))))+"px")}, "className": "scroll-bar"}));
});
photosure.scrolldiv.t12809.prototype.photosure$scrolldiv$that$ = true;
photosure.scrolldiv.t12809.prototype.om$core$IWillMount$ = true;
photosure.scrolldiv.t12809.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var scroll_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748));var c__6367__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto__,scroll_chan,___$1){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto__,scroll_chan,___$1){
return (function (state_12825){var state_val_12826 = (state_12825[(1)]);if((state_val_12826 === (4)))
{var inst_12816 = (state_12825[(2)]);var inst_12817 = new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100).cljs$core$IFn$_invoke$arity$1(inst_12816);var inst_12818 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),inst_12817);var inst_12819 = new cljs.core.Keyword(null,"total-scroll-height","total-scroll-height",-1230474362).cljs$core$IFn$_invoke$arity$1(inst_12816);var inst_12820 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"total-scroll-height","total-scroll-height",-1230474362),inst_12819);var state_12825__$1 = (function (){var statearr_12827 = state_12825;(statearr_12827[(7)] = inst_12818);
(statearr_12827[(8)] = inst_12820);
return statearr_12827;
})();var statearr_12828_12837 = state_12825__$1;(statearr_12828_12837[(2)] = null);
(statearr_12828_12837[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12826 === (3)))
{var inst_12823 = (state_12825[(2)]);var state_12825__$1 = state_12825;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12825__$1,inst_12823);
} else
{if((state_val_12826 === (2)))
{var state_12825__$1 = state_12825;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12825__$1,(4),scroll_chan);
} else
{if((state_val_12826 === (1)))
{var state_12825__$1 = state_12825;var statearr_12829_12838 = state_12825__$1;(statearr_12829_12838[(2)] = null);
(statearr_12829_12838[(1)] = (2));
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
var state_machine__6353__auto____0 = (function (){var statearr_12833 = [null,null,null,null,null,null,null,null,null];(statearr_12833[(0)] = state_machine__6353__auto__);
(statearr_12833[(1)] = (1));
return statearr_12833;
});
var state_machine__6353__auto____1 = (function (state_12825){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_12825);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e12834){if((e12834 instanceof Object))
{var ex__6356__auto__ = e12834;var statearr_12835_12839 = state_12825;(statearr_12835_12839[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12825);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12834;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12840 = state_12825;
state_12825 = G__12840;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_12825){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_12825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto__,scroll_chan,___$1))
})();var state__6369__auto__ = (function (){var statearr_12836 = f__6368__auto__.call(null);(statearr_12836[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto__);
return statearr_12836;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto__,scroll_chan,___$1))
);
return c__6367__auto__;
});
photosure.scrolldiv.t12809.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12811,meta12810__$1){var self__ = this;
var _12811__$1 = this;return (new photosure.scrolldiv.t12809(self__.owner,self__.app,self__.scroll_bar,meta12810__$1));
});
photosure.scrolldiv.t12809.prototype.photosure$scrolldiv$accepts$ = true;
photosure.scrolldiv.__GT_t12809 = (function __GT_t12809(owner__$1,app__$1,scroll_bar__$1,meta12810){return (new photosure.scrolldiv.t12809(owner__$1,app__$1,scroll_bar__$1,meta12810));
});
}
return (new photosure.scrolldiv.t12809(owner,app,scroll_bar,null));
});
photosure.scrolldiv.scroll_content = (function scroll_content(app,owner,opts){if(typeof photosure.scrolldiv.t12846 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.scrolldiv.t12846 = (function (opts,owner,app,scroll_content,meta12847){
this.opts = opts;
this.owner = owner;
this.app = app;
this.scroll_content = scroll_content;
this.meta12847 = meta12847;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.scrolldiv.t12846.cljs$lang$type = true;
photosure.scrolldiv.t12846.cljs$lang$ctorStr = "photosure.scrolldiv/t12846";
photosure.scrolldiv.t12846.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.scrolldiv/t12846");
});
photosure.scrolldiv.t12846.prototype.om$core$IRenderState$ = true;
photosure.scrolldiv.t12846.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__12849){var self__ = this;
var map__12850 = p__12849;var map__12850__$1 = ((cljs.core.seq_QMARK_.call(null,map__12850))?cljs.core.apply.call(null,cljs.core.hash_map,map__12850):map__12850);var scroll_chan = cljs.core.get.call(null,map__12850__$1,new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748));var this$__$1 = this;return cljs.core.apply.call(null,om.dom.div,{"onScroll": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-resize","handle-resize",-1179349346)), "className": "scroll-content"},new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(self__.opts));
});
photosure.scrolldiv.t12846.prototype.om$core$IWillUnmount$ = true;
photosure.scrolldiv.t12846.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return window.removeEventListener("resize",om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-resize","handle-resize",-1179349346)));
});
photosure.scrolldiv.t12846.prototype.om$core$IDidMount$ = true;
photosure.scrolldiv.t12846.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var elem_12851 = om.core.get_node.call(null,self__.owner);var scroll_chan_12852 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-resize","handle-resize",-1179349346),((function (elem_12851,scroll_chan_12852,this$__$1){
return (function (){return cljs.core.async.put_BANG_.call(null,scroll_chan_12852,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),elem_12851.scrollTop,new cljs.core.Keyword(null,"total-scroll-height","total-scroll-height",-1230474362),(elem_12851.scrollHeight - elem_12851.clientHeight)], null));
});})(elem_12851,scroll_chan_12852,this$__$1))
);
return window.addEventListener("resize",om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-resize","handle-resize",-1179349346)));
});
photosure.scrolldiv.t12846.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12848){var self__ = this;
var _12848__$1 = this;return self__.meta12847;
});
photosure.scrolldiv.t12846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12848,meta12847__$1){var self__ = this;
var _12848__$1 = this;return (new photosure.scrolldiv.t12846(self__.opts,self__.owner,self__.app,self__.scroll_content,meta12847__$1));
});
photosure.scrolldiv.__GT_t12846 = (function __GT_t12846(opts__$1,owner__$1,app__$1,scroll_content__$1,meta12847){return (new photosure.scrolldiv.t12846(opts__$1,owner__$1,app__$1,scroll_content__$1,meta12847));
});
}
return (new photosure.scrolldiv.t12846(opts,owner,app,scroll_content,null));
});
photosure.scrolldiv.scroll_div = (function scroll_div(app,owner,opts){if(typeof photosure.scrolldiv.t12858 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.scrolldiv.t12858 = (function (opts,owner,app,scroll_div,meta12859){
this.opts = opts;
this.owner = owner;
this.app = app;
this.scroll_div = scroll_div;
this.meta12859 = meta12859;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.scrolldiv.t12858.cljs$lang$type = true;
photosure.scrolldiv.t12858.cljs$lang$ctorStr = "photosure.scrolldiv/t12858";
photosure.scrolldiv.t12858.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.scrolldiv/t12858");
});
photosure.scrolldiv.t12858.prototype.om$core$IRenderState$ = true;
photosure.scrolldiv.t12858.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__12861){var self__ = this;
var map__12862 = p__12861;var map__12862__$1 = ((cljs.core.seq_QMARK_.call(null,map__12862))?cljs.core.apply.call(null,cljs.core.hash_map,map__12862):map__12862);var scroll_chan = cljs.core.get.call(null,map__12862__$1,new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748));var this$__$1 = this;return React.DOM.div({"className": ("scroll-div "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(self__.opts)))},React.DOM.div({"className": "overflow-wrapper"},React.DOM.div({"className": "scroll-header"}),om.core.build.call(null,photosure.scrolldiv.scroll_content,self__.app,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748),scroll_chan], null),new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts], null)),React.DOM.div({"className": "scroll-footer"})),om.core.build.call(null,photosure.scrolldiv.scroll_bar,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748),scroll_chan], null)], null)));
});
photosure.scrolldiv.t12858.prototype.om$core$IInitState$ = true;
photosure.scrolldiv.t12858.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748),cljs.core.async.chan.call(null)], null);
});
photosure.scrolldiv.t12858.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12860){var self__ = this;
var _12860__$1 = this;return self__.meta12859;
});
photosure.scrolldiv.t12858.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12860,meta12859__$1){var self__ = this;
var _12860__$1 = this;return (new photosure.scrolldiv.t12858(self__.opts,self__.owner,self__.app,self__.scroll_div,meta12859__$1));
});
photosure.scrolldiv.__GT_t12858 = (function __GT_t12858(opts__$1,owner__$1,app__$1,scroll_div__$1,meta12859){return (new photosure.scrolldiv.t12858(opts__$1,owner__$1,app__$1,scroll_div__$1,meta12859));
});
}
return (new photosure.scrolldiv.t12858(opts,owner,app,scroll_div,null));
});

//# sourceMappingURL=scrolldiv.js.map