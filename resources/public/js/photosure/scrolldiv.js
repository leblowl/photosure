// Compiled by ClojureScript 0.0-2322
goog.provide('photosure.scrolldiv');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
photosure.scrolldiv.scroll_bar = (function scroll_bar(app,owner){if(typeof photosure.scrolldiv.t15931 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.scrolldiv.t15931 = (function (owner,app,scroll_bar,meta15932){
this.owner = owner;
this.app = app;
this.scroll_bar = scroll_bar;
this.meta15932 = meta15932;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.scrolldiv.t15931.cljs$lang$type = true;
photosure.scrolldiv.t15931.cljs$lang$ctorStr = "photosure.scrolldiv/t15931";
photosure.scrolldiv.t15931.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.scrolldiv/t15931");
});
photosure.scrolldiv.t15931.prototype.om$core$IRenderState$ = true;
photosure.scrolldiv.t15931.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__15934){var self__ = this;
var map__15935 = p__15934;var map__15935__$1 = ((cljs.core.seq_QMARK_.call(null,map__15935))?cljs.core.apply.call(null,cljs.core.hash_map,map__15935):map__15935);var total_scroll_height = cljs.core.get.call(null,map__15935__$1,new cljs.core.Keyword(null,"total-scroll-height","total-scroll-height",-1230474362));var scroll_top = cljs.core.get.call(null,map__15935__$1,new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100));var total_track_height = cljs.core.get.call(null,map__15935__$1,new cljs.core.Keyword(null,"total-track-height","total-track-height",844315305));var this$__$1 = this;return React.DOM.div({"className": "scroll-track"},React.DOM.div({"style": {"top": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round.call(null,(total_track_height * (scroll_top / total_scroll_height))))+"px")}, "className": "scroll-bar"}));
});
photosure.scrolldiv.t15931.prototype.om$core$IDidMount$ = true;
photosure.scrolldiv.t15931.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"total-track-height","total-track-height",844315305),(om.core.get_node.call(null,self__.owner).clientHeight - om.core.get_node.call(null,self__.owner).firstChild.offsetHeight));
});
photosure.scrolldiv.t15931.prototype.om$core$IWillMount$ = true;
photosure.scrolldiv.t15931.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var scroll_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748));var c__6367__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto__,scroll_chan,___$1){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto__,scroll_chan,___$1){
return (function (state_15947){var state_val_15948 = (state_15947[(1)]);if((state_val_15948 === (4)))
{var inst_15938 = (state_15947[(2)]);var inst_15939 = new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100).cljs$core$IFn$_invoke$arity$1(inst_15938);var inst_15940 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),inst_15939);var inst_15941 = new cljs.core.Keyword(null,"total-scroll-height","total-scroll-height",-1230474362).cljs$core$IFn$_invoke$arity$1(inst_15938);var inst_15942 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"total-scroll-height","total-scroll-height",-1230474362),inst_15941);var state_15947__$1 = (function (){var statearr_15949 = state_15947;(statearr_15949[(7)] = inst_15940);
(statearr_15949[(8)] = inst_15942);
return statearr_15949;
})();var statearr_15950_15959 = state_15947__$1;(statearr_15950_15959[(2)] = null);
(statearr_15950_15959[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15948 === (3)))
{var inst_15945 = (state_15947[(2)]);var state_15947__$1 = state_15947;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15947__$1,inst_15945);
} else
{if((state_val_15948 === (2)))
{var state_15947__$1 = state_15947;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15947__$1,(4),scroll_chan);
} else
{if((state_val_15948 === (1)))
{var state_15947__$1 = state_15947;var statearr_15951_15960 = state_15947__$1;(statearr_15951_15960[(2)] = null);
(statearr_15951_15960[(1)] = (2));
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
var state_machine__6353__auto____0 = (function (){var statearr_15955 = [null,null,null,null,null,null,null,null,null];(statearr_15955[(0)] = state_machine__6353__auto__);
(statearr_15955[(1)] = (1));
return statearr_15955;
});
var state_machine__6353__auto____1 = (function (state_15947){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_15947);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e15956){if((e15956 instanceof Object))
{var ex__6356__auto__ = e15956;var statearr_15957_15961 = state_15947;(statearr_15957_15961[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15947);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15956;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15962 = state_15947;
state_15947 = G__15962;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_15947){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_15947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto__,scroll_chan,___$1))
})();var state__6369__auto__ = (function (){var statearr_15958 = f__6368__auto__.call(null);(statearr_15958[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto__);
return statearr_15958;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto__,scroll_chan,___$1))
);
return c__6367__auto__;
});
photosure.scrolldiv.t15931.prototype.om$core$IInitState$ = true;
photosure.scrolldiv.t15931.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"total-track-height","total-track-height",844315305),(0),new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),(0),new cljs.core.Keyword(null,"total-scroll-height","total-scroll-height",-1230474362),(1)], null);
});
photosure.scrolldiv.t15931.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15933){var self__ = this;
var _15933__$1 = this;return self__.meta15932;
});
photosure.scrolldiv.t15931.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15933,meta15932__$1){var self__ = this;
var _15933__$1 = this;return (new photosure.scrolldiv.t15931(self__.owner,self__.app,self__.scroll_bar,meta15932__$1));
});
photosure.scrolldiv.__GT_t15931 = (function __GT_t15931(owner__$1,app__$1,scroll_bar__$1,meta15932){return (new photosure.scrolldiv.t15931(owner__$1,app__$1,scroll_bar__$1,meta15932));
});
}
return (new photosure.scrolldiv.t15931(owner,app,scroll_bar,null));
});
photosure.scrolldiv.scroll_content = (function scroll_content(content){return (function (app,owner){if(typeof photosure.scrolldiv.t15968 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.scrolldiv.t15968 = (function (owner,app,content,scroll_content,meta15969){
this.owner = owner;
this.app = app;
this.content = content;
this.scroll_content = scroll_content;
this.meta15969 = meta15969;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.scrolldiv.t15968.cljs$lang$type = true;
photosure.scrolldiv.t15968.cljs$lang$ctorStr = "photosure.scrolldiv/t15968";
photosure.scrolldiv.t15968.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.scrolldiv/t15968");
});
photosure.scrolldiv.t15968.prototype.om$core$IRenderState$ = true;
photosure.scrolldiv.t15968.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__15971){var self__ = this;
var map__15972 = p__15971;var map__15972__$1 = ((cljs.core.seq_QMARK_.call(null,map__15972))?cljs.core.apply.call(null,cljs.core.hash_map,map__15972):map__15972);var scroll_chan = cljs.core.get.call(null,map__15972__$1,new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748));var this$__$1 = this;return React.DOM.div({"onScroll": ((function (this$__$1,map__15972,map__15972__$1,scroll_chan){
return (function (){var elem = om.core.get_node.call(null,self__.owner);return cljs.core.async.put_BANG_.call(null,scroll_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),elem.scrollTop,new cljs.core.Keyword(null,"total-scroll-height","total-scroll-height",-1230474362),(elem.scrollHeight - elem.clientHeight)], null));
});})(this$__$1,map__15972,map__15972__$1,scroll_chan))
, "className": "scroll-content"},self__.content);
});
photosure.scrolldiv.t15968.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15970){var self__ = this;
var _15970__$1 = this;return self__.meta15969;
});
photosure.scrolldiv.t15968.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15970,meta15969__$1){var self__ = this;
var _15970__$1 = this;return (new photosure.scrolldiv.t15968(self__.owner,self__.app,self__.content,self__.scroll_content,meta15969__$1));
});
photosure.scrolldiv.__GT_t15968 = (function __GT_t15968(owner__$1,app__$1,content__$1,scroll_content__$1,meta15969){return (new photosure.scrolldiv.t15968(owner__$1,app__$1,content__$1,scroll_content__$1,meta15969));
});
}
return (new photosure.scrolldiv.t15968(owner,app,content,scroll_content,null));
});
});
photosure.scrolldiv.scroll_div = (function scroll_div(content){return (function (app,owner,opts){if(typeof photosure.scrolldiv.t15978 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.scrolldiv.t15978 = (function (opts,owner,app,content,scroll_div,meta15979){
this.opts = opts;
this.owner = owner;
this.app = app;
this.content = content;
this.scroll_div = scroll_div;
this.meta15979 = meta15979;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.scrolldiv.t15978.cljs$lang$type = true;
photosure.scrolldiv.t15978.cljs$lang$ctorStr = "photosure.scrolldiv/t15978";
photosure.scrolldiv.t15978.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.scrolldiv/t15978");
});
photosure.scrolldiv.t15978.prototype.om$core$IRenderState$ = true;
photosure.scrolldiv.t15978.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__15981){var self__ = this;
var map__15982 = p__15981;var map__15982__$1 = ((cljs.core.seq_QMARK_.call(null,map__15982))?cljs.core.apply.call(null,cljs.core.hash_map,map__15982):map__15982);var scroll_chan = cljs.core.get.call(null,map__15982__$1,new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748));var this$__$1 = this;return React.DOM.div({"className": ("scroll-div "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(self__.opts)))},React.DOM.div({"className": "overflow-wrapper"},React.DOM.div({"className": "scroll-header"}),om.core.build.call(null,photosure.scrolldiv.scroll_content.call(null,self__.content),self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748),scroll_chan], null)], null)),React.DOM.div({"className": "scroll-footer"})),om.core.build.call(null,photosure.scrolldiv.scroll_bar,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748),scroll_chan], null)], null)));
});
photosure.scrolldiv.t15978.prototype.om$core$IInitState$ = true;
photosure.scrolldiv.t15978.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748),cljs.core.async.chan.call(null)], null);
});
photosure.scrolldiv.t15978.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15980){var self__ = this;
var _15980__$1 = this;return self__.meta15979;
});
photosure.scrolldiv.t15978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15980,meta15979__$1){var self__ = this;
var _15980__$1 = this;return (new photosure.scrolldiv.t15978(self__.opts,self__.owner,self__.app,self__.content,self__.scroll_div,meta15979__$1));
});
photosure.scrolldiv.__GT_t15978 = (function __GT_t15978(opts__$1,owner__$1,app__$1,content__$1,scroll_div__$1,meta15979){return (new photosure.scrolldiv.t15978(opts__$1,owner__$1,app__$1,content__$1,scroll_div__$1,meta15979));
});
}
return (new photosure.scrolldiv.t15978(opts,owner,app,content,scroll_div,null));
});
});

//# sourceMappingURL=scrolldiv.js.map