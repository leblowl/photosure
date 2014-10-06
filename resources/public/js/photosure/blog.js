// Compiled by ClojureScript 0.0-2322
goog.provide('photosure.blog');
goog.require('cljs.core');
goog.require('photosure.scrolldiv');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('goog.string');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('photosure.util');
goog.require('photosure.util');
goog.require('om.core');
goog.require('om.core');
goog.require('goog.string');
goog.require('photosure.scrolldiv');
photosure.blog.app_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"posts","posts",760043164),cljs.core.PersistentVector.EMPTY], null));
photosure.blog.text_view = (function text_view(caption,owner){if(typeof photosure.blog.t9498 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t9498 = (function (owner,caption,text_view,meta9499){
this.owner = owner;
this.caption = caption;
this.text_view = text_view;
this.meta9499 = meta9499;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t9498.cljs$lang$type = true;
photosure.blog.t9498.cljs$lang$ctorStr = "photosure.blog/t9498";
photosure.blog.t9498.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t9498");
});
photosure.blog.t9498.prototype.om$core$IRender$ = true;
photosure.blog.t9498.prototype.om$core$IRender$render$arity$1 = (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return React.DOM.div({"dangerouslySetInnerHTML": {"__html": self__.caption}, "className": "caption"},null);
});
photosure.blog.t9498.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9500){var self__ = this;
var _9500__$1 = this;return self__.meta9499;
});
photosure.blog.t9498.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9500,meta9499__$1){var self__ = this;
var _9500__$1 = this;return (new photosure.blog.t9498(self__.owner,self__.caption,self__.text_view,meta9499__$1));
});
photosure.blog.__GT_t9498 = (function __GT_t9498(owner__$1,caption__$1,text_view__$1,meta9499){return (new photosure.blog.t9498(owner__$1,caption__$1,text_view__$1,meta9499));
});
}
return (new photosure.blog.t9498(owner,caption,text_view,null));
});
photosure.blog.text_post_view = (function text_post_view(p__9501,owner){var map__9506 = p__9501;var map__9506__$1 = ((cljs.core.seq_QMARK_.call(null,map__9506))?cljs.core.apply.call(null,cljs.core.hash_map,map__9506):map__9506);var id = cljs.core.get.call(null,map__9506__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var title = cljs.core.get.call(null,map__9506__$1,new cljs.core.Keyword(null,"title","title",636505583));var body = cljs.core.get.call(null,map__9506__$1,new cljs.core.Keyword(null,"body","body",-2049205669));if(typeof photosure.blog.t9507 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t9507 = (function (body,title,id,map__9506,owner,p__9501,text_post_view,meta9508){
this.body = body;
this.title = title;
this.id = id;
this.map__9506 = map__9506;
this.owner = owner;
this.p__9501 = p__9501;
this.text_post_view = text_post_view;
this.meta9508 = meta9508;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t9507.cljs$lang$type = true;
photosure.blog.t9507.cljs$lang$ctorStr = "photosure.blog/t9507";
photosure.blog.t9507.cljs$lang$ctorPrWriter = ((function (map__9506,map__9506__$1,id,title,body){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t9507");
});})(map__9506,map__9506__$1,id,title,body))
;
photosure.blog.t9507.prototype.om$core$IRender$ = true;
photosure.blog.t9507.prototype.om$core$IRender$render$arity$1 = ((function (map__9506,map__9506__$1,id,title,body){
return (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return React.DOM.div({"className": "post", "id": self__.id},React.DOM.h2({"className": "blog-title"},self__.title),om.core.build.call(null,photosure.blog.text_view,self__.body));
});})(map__9506,map__9506__$1,id,title,body))
;
photosure.blog.t9507.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__9506,map__9506__$1,id,title,body){
return (function (_9509){var self__ = this;
var _9509__$1 = this;return self__.meta9508;
});})(map__9506,map__9506__$1,id,title,body))
;
photosure.blog.t9507.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__9506,map__9506__$1,id,title,body){
return (function (_9509,meta9508__$1){var self__ = this;
var _9509__$1 = this;return (new photosure.blog.t9507(self__.body,self__.title,self__.id,self__.map__9506,self__.owner,self__.p__9501,self__.text_post_view,meta9508__$1));
});})(map__9506,map__9506__$1,id,title,body))
;
photosure.blog.__GT_t9507 = ((function (map__9506,map__9506__$1,id,title,body){
return (function __GT_t9507(body__$1,title__$1,id__$1,map__9506__$2,owner__$1,p__9501__$1,text_post_view__$1,meta9508){return (new photosure.blog.t9507(body__$1,title__$1,id__$1,map__9506__$2,owner__$1,p__9501__$1,text_post_view__$1,meta9508));
});})(map__9506,map__9506__$1,id,title,body))
;
}
return (new photosure.blog.t9507(body,title,id,map__9506__$1,owner,p__9501,text_post_view,null));
});
photosure.blog.photo_post_view = (function photo_post_view(p__9510,owner){var map__9515 = p__9510;var map__9515__$1 = ((cljs.core.seq_QMARK_.call(null,map__9515))?cljs.core.apply.call(null,cljs.core.hash_map,map__9515):map__9515);var id = cljs.core.get.call(null,map__9515__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var photos = cljs.core.get.call(null,map__9515__$1,new cljs.core.Keyword(null,"photos","photos",11691538));var caption = cljs.core.get.call(null,map__9515__$1,new cljs.core.Keyword(null,"caption","caption",-855383902));if(typeof photosure.blog.t9516 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t9516 = (function (caption,photos,id,map__9515,owner,p__9510,photo_post_view,meta9517){
this.caption = caption;
this.photos = photos;
this.id = id;
this.map__9515 = map__9515;
this.owner = owner;
this.p__9510 = p__9510;
this.photo_post_view = photo_post_view;
this.meta9517 = meta9517;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t9516.cljs$lang$type = true;
photosure.blog.t9516.cljs$lang$ctorStr = "photosure.blog/t9516";
photosure.blog.t9516.cljs$lang$ctorPrWriter = ((function (map__9515,map__9515__$1,id,photos,caption){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t9516");
});})(map__9515,map__9515__$1,id,photos,caption))
;
photosure.blog.t9516.prototype.om$core$IRender$ = true;
photosure.blog.t9516.prototype.om$core$IRender$render$arity$1 = ((function (map__9515,map__9515__$1,id,photos,caption){
return (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return React.DOM.div({"className": "post", "id": self__.id},cljs.core.apply.call(null,om.dom.div,{"className": "blog-photo"},cljs.core.map.call(null,((function (this__5143__auto____$1,map__9515,map__9515__$1,id,photos,caption){
return (function (photo){return React.DOM.div(null,"placeholder");
});})(this__5143__auto____$1,map__9515,map__9515__$1,id,photos,caption))
,self__.photos)),om.core.build.call(null,photosure.blog.text_view,self__.caption));
});})(map__9515,map__9515__$1,id,photos,caption))
;
photosure.blog.t9516.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__9515,map__9515__$1,id,photos,caption){
return (function (_9518){var self__ = this;
var _9518__$1 = this;return self__.meta9517;
});})(map__9515,map__9515__$1,id,photos,caption))
;
photosure.blog.t9516.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__9515,map__9515__$1,id,photos,caption){
return (function (_9518,meta9517__$1){var self__ = this;
var _9518__$1 = this;return (new photosure.blog.t9516(self__.caption,self__.photos,self__.id,self__.map__9515,self__.owner,self__.p__9510,self__.photo_post_view,meta9517__$1));
});})(map__9515,map__9515__$1,id,photos,caption))
;
photosure.blog.__GT_t9516 = ((function (map__9515,map__9515__$1,id,photos,caption){
return (function __GT_t9516(caption__$1,photos__$1,id__$1,map__9515__$2,owner__$1,p__9510__$1,photo_post_view__$1,meta9517){return (new photosure.blog.t9516(caption__$1,photos__$1,id__$1,map__9515__$2,owner__$1,p__9510__$1,photo_post_view__$1,meta9517));
});})(map__9515,map__9515__$1,id,photos,caption))
;
}
return (new photosure.blog.t9516(caption,photos,id,map__9515__$1,owner,p__9510,photo_post_view,null));
});
photosure.blog.post_view = (function post_view(p__9519,owner){var map__9524 = p__9519;var map__9524__$1 = ((cljs.core.seq_QMARK_.call(null,map__9524))?cljs.core.apply.call(null,cljs.core.hash_map,map__9524):map__9524);var post = map__9524__$1;var type = cljs.core.get.call(null,map__9524__$1,new cljs.core.Keyword(null,"type","type",1174270348));if(typeof photosure.blog.t9525 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t9525 = (function (type,post,map__9524,owner,p__9519,post_view,meta9526){
this.type = type;
this.post = post;
this.map__9524 = map__9524;
this.owner = owner;
this.p__9519 = p__9519;
this.post_view = post_view;
this.meta9526 = meta9526;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t9525.cljs$lang$type = true;
photosure.blog.t9525.cljs$lang$ctorStr = "photosure.blog/t9525";
photosure.blog.t9525.cljs$lang$ctorPrWriter = ((function (map__9524,map__9524__$1,post,type){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t9525");
});})(map__9524,map__9524__$1,post,type))
;
photosure.blog.t9525.prototype.om$core$IRender$ = true;
photosure.blog.t9525.prototype.om$core$IRender$render$arity$1 = ((function (map__9524,map__9524__$1,post,type){
return (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core._EQ_.call(null,self__.type,"photo"))
{return om.core.build.call(null,photosure.blog.photo_post_view,self__.post);
} else
{return om.core.build.call(null,photosure.blog.text_post_view,self__.post);
}
});})(map__9524,map__9524__$1,post,type))
;
photosure.blog.t9525.prototype.om$core$IDidMount$ = true;
photosure.blog.t9525.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__9524,map__9524__$1,post,type){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"load-chan","load-chan",342107614)),"done!");
});})(map__9524,map__9524__$1,post,type))
;
photosure.blog.t9525.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__9524,map__9524__$1,post,type){
return (function (_9527){var self__ = this;
var _9527__$1 = this;return self__.meta9526;
});})(map__9524,map__9524__$1,post,type))
;
photosure.blog.t9525.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__9524,map__9524__$1,post,type){
return (function (_9527,meta9526__$1){var self__ = this;
var _9527__$1 = this;return (new photosure.blog.t9525(self__.type,self__.post,self__.map__9524,self__.owner,self__.p__9519,self__.post_view,meta9526__$1));
});})(map__9524,map__9524__$1,post,type))
;
photosure.blog.__GT_t9525 = ((function (map__9524,map__9524__$1,post,type){
return (function __GT_t9525(type__$1,post__$1,map__9524__$2,owner__$1,p__9519__$1,post_view__$1,meta9526){return (new photosure.blog.t9525(type__$1,post__$1,map__9524__$2,owner__$1,p__9519__$1,post_view__$1,meta9526));
});})(map__9524,map__9524__$1,post,type))
;
}
return (new photosure.blog.t9525(type,post,map__9524__$1,owner,p__9519,post_view,null));
});
photosure.blog.posts_view = (function posts_view(posts,owner){if(typeof photosure.blog.t9567 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t9567 = (function (owner,posts,posts_view,meta9568){
this.owner = owner;
this.posts = posts;
this.posts_view = posts_view;
this.meta9568 = meta9568;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t9567.cljs$lang$type = true;
photosure.blog.t9567.cljs$lang$ctorStr = "photosure.blog/t9567";
photosure.blog.t9567.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t9567");
});
photosure.blog.t9567.prototype.om$core$IRenderState$ = true;
photosure.blog.t9567.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__9570){var self__ = this;
var map__9571 = p__9570;var map__9571__$1 = ((cljs.core.seq_QMARK_.call(null,map__9571))?cljs.core.apply.call(null,cljs.core.hash_map,map__9571):map__9571);var load_chan = cljs.core.get.call(null,map__9571__$1,new cljs.core.Keyword(null,"load-chan","load-chan",342107614));var iter = cljs.core.get.call(null,map__9571__$1,new cljs.core.Keyword(null,"iter","iter",1308240283));var this$__$1 = this;return cljs.core.apply.call(null,om.dom.div,{"id": "post-list"},om.core.build_all.call(null,photosure.blog.post_view,cljs.core.take.call(null,iter,self__.posts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"load-chan","load-chan",342107614),load_chan], null)], null)));
});
photosure.blog.t9567.prototype.om$core$IWillMount$ = true;
photosure.blog.t9567.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var load_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"load-chan","load-chan",342107614));var loaded_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448));var c__6367__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto__,load_chan,loaded_chan,___$1){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto__,load_chan,loaded_chan,___$1){
return (function (state_9588){var state_val_9589 = (state_9588[(1)]);if((state_val_9589 === (7)))
{var inst_9583 = (state_9588[(2)]);var state_9588__$1 = (function (){var statearr_9590 = state_9588;(statearr_9590[(7)] = inst_9583);
return statearr_9590;
})();var statearr_9591_9605 = state_9588__$1;(statearr_9591_9605[(2)] = null);
(statearr_9591_9605[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9589 === (6)))
{var state_9588__$1 = state_9588;var statearr_9592_9606 = state_9588__$1;(statearr_9592_9606[(2)] = null);
(statearr_9592_9606[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9589 === (5)))
{var inst_9580 = cljs.core.async.put_BANG_.call(null,loaded_chan,"all done!");var state_9588__$1 = state_9588;var statearr_9593_9607 = state_9588__$1;(statearr_9593_9607[(2)] = inst_9580);
(statearr_9593_9607[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9589 === (4)))
{var inst_9574 = (state_9588[(2)]);var inst_9575 = (function (){var load = inst_9574;return ((function (load,inst_9574,state_val_9589,c__6367__auto__,load_chan,loaded_chan,___$1){
return (function (p1__9528_SHARP_){return (p1__9528_SHARP_ + (1));
});
;})(load,inst_9574,state_val_9589,c__6367__auto__,load_chan,loaded_chan,___$1))
})();var inst_9576 = om.core.update_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"load-count","load-count",128885706),inst_9575);var inst_9577 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"load-count","load-count",128885706));var inst_9578 = cljs.core._EQ_.call(null,inst_9577,(20));var state_9588__$1 = (function (){var statearr_9594 = state_9588;(statearr_9594[(8)] = inst_9576);
return statearr_9594;
})();if(inst_9578)
{var statearr_9595_9608 = state_9588__$1;(statearr_9595_9608[(1)] = (5));
} else
{var statearr_9596_9609 = state_9588__$1;(statearr_9596_9609[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9589 === (3)))
{var inst_9586 = (state_9588[(2)]);var state_9588__$1 = state_9588;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9588__$1,inst_9586);
} else
{if((state_val_9589 === (2)))
{var state_9588__$1 = state_9588;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9588__$1,(4),load_chan);
} else
{if((state_val_9589 === (1)))
{var state_9588__$1 = state_9588;var statearr_9597_9610 = state_9588__$1;(statearr_9597_9610[(2)] = null);
(statearr_9597_9610[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__6367__auto__,load_chan,loaded_chan,___$1))
;return ((function (switch__6352__auto__,c__6367__auto__,load_chan,loaded_chan,___$1){
return (function() {
var state_machine__6353__auto__ = null;
var state_machine__6353__auto____0 = (function (){var statearr_9601 = [null,null,null,null,null,null,null,null,null];(statearr_9601[(0)] = state_machine__6353__auto__);
(statearr_9601[(1)] = (1));
return statearr_9601;
});
var state_machine__6353__auto____1 = (function (state_9588){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_9588);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e9602){if((e9602 instanceof Object))
{var ex__6356__auto__ = e9602;var statearr_9603_9611 = state_9588;(statearr_9603_9611[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9588);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e9602;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9612 = state_9588;
state_9588 = G__9612;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_9588){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_9588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto__,load_chan,loaded_chan,___$1))
})();var state__6369__auto__ = (function (){var statearr_9604 = f__6368__auto__.call(null);(statearr_9604[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto__);
return statearr_9604;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto__,load_chan,loaded_chan,___$1))
);
return c__6367__auto__;
});
photosure.blog.t9567.prototype.om$core$IInitState$ = true;
photosure.blog.t9567.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"load-chan","load-chan",342107614),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"load-count","load-count",128885706),(0),new cljs.core.Keyword(null,"iter","iter",1308240283),(20)], null);
});
photosure.blog.t9567.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9569){var self__ = this;
var _9569__$1 = this;return self__.meta9568;
});
photosure.blog.t9567.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9569,meta9568__$1){var self__ = this;
var _9569__$1 = this;return (new photosure.blog.t9567(self__.owner,self__.posts,self__.posts_view,meta9568__$1));
});
photosure.blog.__GT_t9567 = (function __GT_t9567(owner__$1,posts__$1,posts_view__$1,meta9568){return (new photosure.blog.t9567(owner__$1,posts__$1,posts_view__$1,meta9568));
});
}
return (new photosure.blog.t9567(owner,posts,posts_view,null));
});
photosure.blog.blog = (function blog(app,owner){if(typeof photosure.blog.t9638 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t9638 = (function (owner,app,blog,meta9639){
this.owner = owner;
this.app = app;
this.blog = blog;
this.meta9639 = meta9639;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t9638.cljs$lang$type = true;
photosure.blog.t9638.cljs$lang$ctorStr = "photosure.blog/t9638";
photosure.blog.t9638.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t9638");
});
photosure.blog.t9638.prototype.om$core$IRenderState$ = true;
photosure.blog.t9638.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__9641){var self__ = this;
var map__9642 = p__9641;var map__9642__$1 = ((cljs.core.seq_QMARK_.call(null,map__9642))?cljs.core.apply.call(null,cljs.core.hash_map,map__9642):map__9642);var loaded_chan = cljs.core.get.call(null,map__9642__$1,new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448));var loaded = cljs.core.get.call(null,map__9642__$1,new cljs.core.Keyword(null,"loaded","loaded",-1246482293));var this$__$1 = this;return React.DOM.div({"id": "blog-gallery-container"},om.core.build.call(null,photosure.scrolldiv.scroll_div,self__.app,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"blog-gallery"], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),("blog-gallery"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(loaded)?" loaded":null)))], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.core.build.call(null,photosure.blog.posts_view,new cljs.core.Keyword(null,"posts","posts",760043164).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448),loaded_chan], null)], null))], null)], null)], null)));
});
photosure.blog.t9638.prototype.om$core$IWillMount$ = true;
photosure.blog.t9638.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;photosure.util.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),"api/posts/0",new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),((function (___$1){
return (function (___$2){return om.core.update_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"posts","posts",760043164),___$2);
});})(___$1))
], null));
var loaded_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448));var c__6367__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto__,loaded_chan,___$1){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto__,loaded_chan,___$1){
return (function (state_9651){var state_val_9652 = (state_9651[(1)]);if((state_val_9652 === (4)))
{var inst_9645 = (state_9651[(2)]);var inst_9646 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true);var state_9651__$1 = (function (){var statearr_9653 = state_9651;(statearr_9653[(7)] = inst_9645);
(statearr_9653[(8)] = inst_9646);
return statearr_9653;
})();var statearr_9654_9663 = state_9651__$1;(statearr_9654_9663[(2)] = null);
(statearr_9654_9663[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9652 === (3)))
{var inst_9649 = (state_9651[(2)]);var state_9651__$1 = state_9651;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9651__$1,inst_9649);
} else
{if((state_val_9652 === (2)))
{var state_9651__$1 = state_9651;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9651__$1,(4),loaded_chan);
} else
{if((state_val_9652 === (1)))
{var state_9651__$1 = state_9651;var statearr_9655_9664 = state_9651__$1;(statearr_9655_9664[(2)] = null);
(statearr_9655_9664[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6367__auto__,loaded_chan,___$1))
;return ((function (switch__6352__auto__,c__6367__auto__,loaded_chan,___$1){
return (function() {
var state_machine__6353__auto__ = null;
var state_machine__6353__auto____0 = (function (){var statearr_9659 = [null,null,null,null,null,null,null,null,null];(statearr_9659[(0)] = state_machine__6353__auto__);
(statearr_9659[(1)] = (1));
return statearr_9659;
});
var state_machine__6353__auto____1 = (function (state_9651){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_9651);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e9660){if((e9660 instanceof Object))
{var ex__6356__auto__ = e9660;var statearr_9661_9665 = state_9651;(statearr_9661_9665[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9651);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e9660;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9666 = state_9651;
state_9651 = G__9666;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_9651){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_9651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto__,loaded_chan,___$1))
})();var state__6369__auto__ = (function (){var statearr_9662 = f__6368__auto__.call(null);(statearr_9662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto__);
return statearr_9662;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto__,loaded_chan,___$1))
);
return c__6367__auto__;
});
photosure.blog.t9638.prototype.om$core$IInitState$ = true;
photosure.blog.t9638.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),false,new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448),cljs.core.async.chan.call(null)], null);
});
photosure.blog.t9638.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9640){var self__ = this;
var _9640__$1 = this;return self__.meta9639;
});
photosure.blog.t9638.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9640,meta9639__$1){var self__ = this;
var _9640__$1 = this;return (new photosure.blog.t9638(self__.owner,self__.app,self__.blog,meta9639__$1));
});
photosure.blog.__GT_t9638 = (function __GT_t9638(owner__$1,app__$1,blog__$1,meta9639){return (new photosure.blog.t9638(owner__$1,app__$1,blog__$1,meta9639));
});
}
return (new photosure.blog.t9638(owner,app,blog,null));
});
photosure.blog.render = (function render(){return om.core.root.call(null,photosure.blog.blog,photosure.blog.app_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("dynamic-content")], null));
});

//# sourceMappingURL=blog.js.map