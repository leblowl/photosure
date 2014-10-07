// Compiled by ClojureScript 0.0-2322
goog.provide('photosure.scrolldiv');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
photosure.scrolldiv.scroll_bar = (function scroll_bar(app,owner){if(typeof photosure.scrolldiv.t18841 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.scrolldiv.t18841 = (function (owner,app,scroll_bar,meta18842){
this.owner = owner;
this.app = app;
this.scroll_bar = scroll_bar;
this.meta18842 = meta18842;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.scrolldiv.t18841.cljs$lang$type = true;
photosure.scrolldiv.t18841.cljs$lang$ctorStr = "photosure.scrolldiv/t18841";
photosure.scrolldiv.t18841.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.scrolldiv/t18841");
});
photosure.scrolldiv.t18841.prototype.om$core$IRenderState$ = true;
photosure.scrolldiv.t18841.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__18844){var self__ = this;
var map__18845 = p__18844;var map__18845__$1 = ((cljs.core.seq_QMARK_.call(null,map__18845))?cljs.core.apply.call(null,cljs.core.hash_map,map__18845):map__18845);var total_scroll_height = cljs.core.get.call(null,map__18845__$1,new cljs.core.Keyword(null,"total-scroll-height","total-scroll-height",-1230474362));var scroll_top = cljs.core.get.call(null,map__18845__$1,new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100));var total_track_height = cljs.core.get.call(null,map__18845__$1,new cljs.core.Keyword(null,"total-track-height","total-track-height",844315305));var this$__$1 = this;return React.DOM.div({"className": "scroll-track"},React.DOM.div({"style": {"top": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round.call(null,(total_track_height * (scroll_top / total_scroll_height))))+"px")}, "className": "scroll-bar"}));
});
photosure.scrolldiv.t18841.prototype.om$core$IWillUnmount$ = true;
photosure.scrolldiv.t18841.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return window.removeEventListener("resize",om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-resize","handle-resize",-1179349346)));
});
photosure.scrolldiv.t18841.prototype.om$core$IDidMount$ = true;
photosure.scrolldiv.t18841.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var elem = om.core.get_node.call(null,self__.owner);var padding_top = parseInt(window.getComputedStyle(elem).getPropertyValue("padding-top"));var padding_bottom = parseInt(window.getComputedStyle(elem).getPropertyValue("padding-bottom"));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-resize","handle-resize",-1179349346),((function (elem,padding_top,padding_bottom,___$1){
return (function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"total-track-height","total-track-height",844315305),(((elem.clientHeight - padding_top) - padding_bottom) - elem.firstChild.offsetHeight));
});})(elem,padding_top,padding_bottom,___$1))
);
om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-resize","handle-resize",-1179349346)).call(null);
return window.addEventListener("resize",om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-resize","handle-resize",-1179349346)));
});
photosure.scrolldiv.t18841.prototype.om$core$IWillMount$ = true;
photosure.scrolldiv.t18841.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var scroll_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748));var c__6367__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto__,scroll_chan,___$1){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto__,scroll_chan,___$1){
return (function (state_18857){var state_val_18858 = (state_18857[(1)]);if((state_val_18858 === (4)))
{var inst_18848 = (state_18857[(2)]);var inst_18849 = new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100).cljs$core$IFn$_invoke$arity$1(inst_18848);var inst_18850 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),inst_18849);var inst_18851 = new cljs.core.Keyword(null,"total-scroll-height","total-scroll-height",-1230474362).cljs$core$IFn$_invoke$arity$1(inst_18848);var inst_18852 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"total-scroll-height","total-scroll-height",-1230474362),inst_18851);var state_18857__$1 = (function (){var statearr_18859 = state_18857;(statearr_18859[(7)] = inst_18852);
(statearr_18859[(8)] = inst_18850);
return statearr_18859;
})();var statearr_18860_18869 = state_18857__$1;(statearr_18860_18869[(2)] = null);
(statearr_18860_18869[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18858 === (3)))
{var inst_18855 = (state_18857[(2)]);var state_18857__$1 = state_18857;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18857__$1,inst_18855);
} else
{if((state_val_18858 === (2)))
{var state_18857__$1 = state_18857;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18857__$1,(4),scroll_chan);
} else
{if((state_val_18858 === (1)))
{var state_18857__$1 = state_18857;var statearr_18861_18870 = state_18857__$1;(statearr_18861_18870[(2)] = null);
(statearr_18861_18870[(1)] = (2));
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
var state_machine__6353__auto____0 = (function (){var statearr_18865 = [null,null,null,null,null,null,null,null,null];(statearr_18865[(0)] = state_machine__6353__auto__);
(statearr_18865[(1)] = (1));
return statearr_18865;
});
var state_machine__6353__auto____1 = (function (state_18857){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_18857);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e18866){if((e18866 instanceof Object))
{var ex__6356__auto__ = e18866;var statearr_18867_18871 = state_18857;(statearr_18867_18871[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18857);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18866;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18872 = state_18857;
state_18857 = G__18872;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_18857){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_18857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto__,scroll_chan,___$1))
})();var state__6369__auto__ = (function (){var statearr_18868 = f__6368__auto__.call(null);(statearr_18868[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto__);
return statearr_18868;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto__,scroll_chan,___$1))
);
return c__6367__auto__;
});
photosure.scrolldiv.t18841.prototype.om$core$IInitState$ = true;
photosure.scrolldiv.t18841.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"total-track-height","total-track-height",844315305),(0),new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),(0),new cljs.core.Keyword(null,"total-scroll-height","total-scroll-height",-1230474362),(1)], null);
});
photosure.scrolldiv.t18841.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18843){var self__ = this;
var _18843__$1 = this;return self__.meta18842;
});
photosure.scrolldiv.t18841.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18843,meta18842__$1){var self__ = this;
var _18843__$1 = this;return (new photosure.scrolldiv.t18841(self__.owner,self__.app,self__.scroll_bar,meta18842__$1));
});
photosure.scrolldiv.__GT_t18841 = (function __GT_t18841(owner__$1,app__$1,scroll_bar__$1,meta18842){return (new photosure.scrolldiv.t18841(owner__$1,app__$1,scroll_bar__$1,meta18842));
});
}
return (new photosure.scrolldiv.t18841(owner,app,scroll_bar,null));
});
photosure.scrolldiv.scroll_content = (function scroll_content(app,owner,opts){if(typeof photosure.scrolldiv.t18878 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.scrolldiv.t18878 = (function (opts,owner,app,scroll_content,meta18879){
this.opts = opts;
this.owner = owner;
this.app = app;
this.scroll_content = scroll_content;
this.meta18879 = meta18879;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.scrolldiv.t18878.cljs$lang$type = true;
photosure.scrolldiv.t18878.cljs$lang$ctorStr = "photosure.scrolldiv/t18878";
photosure.scrolldiv.t18878.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.scrolldiv/t18878");
});
photosure.scrolldiv.t18878.prototype.om$core$IRenderState$ = true;
photosure.scrolldiv.t18878.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__18881){var self__ = this;
var map__18882 = p__18881;var map__18882__$1 = ((cljs.core.seq_QMARK_.call(null,map__18882))?cljs.core.apply.call(null,cljs.core.hash_map,map__18882):map__18882);var scroll_chan = cljs.core.get.call(null,map__18882__$1,new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748));var this$__$1 = this;return cljs.core.apply.call(null,om.dom.div,{"onScroll": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-resize","handle-resize",-1179349346)), "className": "scroll-content"},new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(self__.opts));
});
photosure.scrolldiv.t18878.prototype.om$core$IWillUnmount$ = true;
photosure.scrolldiv.t18878.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return window.removeEventListener("resize",om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-resize","handle-resize",-1179349346)));
});
photosure.scrolldiv.t18878.prototype.om$core$IWillUpdate$ = true;
photosure.scrolldiv.t18878.prototype.om$core$IWillUpdate$will_update$arity$3 = (function (this$,next_props,next_state){var self__ = this;
var this$__$1 = this;if(cljs.core.not_EQ_.call(null,om.core.get_node.call(null,self__.owner).scrollTop,new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100).cljs$core$IFn$_invoke$arity$1(next_state)))
{return om.core.get_node.call(null,self__.owner).scrollTop = new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100).cljs$core$IFn$_invoke$arity$1(next_state);
} else
{return null;
}
});
photosure.scrolldiv.t18878.prototype.om$core$IDidMount$ = true;
photosure.scrolldiv.t18878.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var elem_18883 = om.core.get_node.call(null,self__.owner);var scroll_chan_18884 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-resize","handle-resize",-1179349346),((function (elem_18883,scroll_chan_18884,this$__$1){
return (function (_){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),elem_18883.scrollTop);
return cljs.core.async.put_BANG_.call(null,scroll_chan_18884,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),elem_18883.scrollTop,new cljs.core.Keyword(null,"total-scroll-height","total-scroll-height",-1230474362),(elem_18883.scrollHeight - elem_18883.clientHeight)], null));
});})(elem_18883,scroll_chan_18884,this$__$1))
);
return window.addEventListener("resize",om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-resize","handle-resize",-1179349346)));
});
photosure.scrolldiv.t18878.prototype.om$core$IInitState$ = true;
photosure.scrolldiv.t18878.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),(0)], null);
});
photosure.scrolldiv.t18878.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18880){var self__ = this;
var _18880__$1 = this;return self__.meta18879;
});
photosure.scrolldiv.t18878.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18880,meta18879__$1){var self__ = this;
var _18880__$1 = this;return (new photosure.scrolldiv.t18878(self__.opts,self__.owner,self__.app,self__.scroll_content,meta18879__$1));
});
photosure.scrolldiv.__GT_t18878 = (function __GT_t18878(opts__$1,owner__$1,app__$1,scroll_content__$1,meta18879){return (new photosure.scrolldiv.t18878(opts__$1,owner__$1,app__$1,scroll_content__$1,meta18879));
});
}
return (new photosure.scrolldiv.t18878(opts,owner,app,scroll_content,null));
});
photosure.scrolldiv.scroll_div = (function scroll_div(app,owner,opts){if(typeof photosure.scrolldiv.t18890 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.scrolldiv.t18890 = (function (opts,owner,app,scroll_div,meta18891){
this.opts = opts;
this.owner = owner;
this.app = app;
this.scroll_div = scroll_div;
this.meta18891 = meta18891;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.scrolldiv.t18890.cljs$lang$type = true;
photosure.scrolldiv.t18890.cljs$lang$ctorStr = "photosure.scrolldiv/t18890";
photosure.scrolldiv.t18890.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.scrolldiv/t18890");
});
photosure.scrolldiv.t18890.prototype.om$core$IRenderState$ = true;
photosure.scrolldiv.t18890.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__18893){var self__ = this;
var map__18894 = p__18893;var map__18894__$1 = ((cljs.core.seq_QMARK_.call(null,map__18894))?cljs.core.apply.call(null,cljs.core.hash_map,map__18894):map__18894);var scroll_top = cljs.core.get.call(null,map__18894__$1,new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100));var class$ = cljs.core.get.call(null,map__18894__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var scroll_chan = cljs.core.get.call(null,map__18894__$1,new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748));var this$__$1 = this;return React.DOM.div({"className": ("scroll-div "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$))},React.DOM.div({"className": "overflow-wrapper"},React.DOM.div({"className": "scroll-header"}),om.core.build.call(null,photosure.scrolldiv.scroll_content,self__.app,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748),scroll_chan,new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),scroll_top], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),scroll_top], null),new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts], null)),React.DOM.div({"className": "scroll-footer"})),om.core.build.call(null,photosure.scrolldiv.scroll_bar,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748),scroll_chan], null)], null)));
});
photosure.scrolldiv.t18890.prototype.om$core$IInitState$ = true;
photosure.scrolldiv.t18890.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748),cljs.core.async.chan.call(null)], null);
});
photosure.scrolldiv.t18890.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18892){var self__ = this;
var _18892__$1 = this;return self__.meta18891;
});
photosure.scrolldiv.t18890.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18892,meta18891__$1){var self__ = this;
var _18892__$1 = this;return (new photosure.scrolldiv.t18890(self__.opts,self__.owner,self__.app,self__.scroll_div,meta18891__$1));
});
photosure.scrolldiv.__GT_t18890 = (function __GT_t18890(opts__$1,owner__$1,app__$1,scroll_div__$1,meta18891){return (new photosure.scrolldiv.t18890(opts__$1,owner__$1,app__$1,scroll_div__$1,meta18891));
});
}
return (new photosure.scrolldiv.t18890(opts,owner,app,scroll_div,null));
});

//# sourceMappingURL=scrolldiv.js.map