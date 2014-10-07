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
photosure.blog.app_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),(0),new cljs.core.Keyword(null,"posts","posts",760043164),cljs.core.PersistentVector.EMPTY], null));
photosure.blog.text_view = (function text_view(caption,owner){if(typeof photosure.blog.t19180 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t19180 = (function (owner,caption,text_view,meta19181){
this.owner = owner;
this.caption = caption;
this.text_view = text_view;
this.meta19181 = meta19181;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t19180.cljs$lang$type = true;
photosure.blog.t19180.cljs$lang$ctorStr = "photosure.blog/t19180";
photosure.blog.t19180.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t19180");
});
photosure.blog.t19180.prototype.om$core$IRender$ = true;
photosure.blog.t19180.prototype.om$core$IRender$render$arity$1 = (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return React.DOM.div({"dangerouslySetInnerHTML": {"__html": self__.caption}, "className": "caption"},null);
});
photosure.blog.t19180.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19182){var self__ = this;
var _19182__$1 = this;return self__.meta19181;
});
photosure.blog.t19180.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19182,meta19181__$1){var self__ = this;
var _19182__$1 = this;return (new photosure.blog.t19180(self__.owner,self__.caption,self__.text_view,meta19181__$1));
});
photosure.blog.__GT_t19180 = (function __GT_t19180(owner__$1,caption__$1,text_view__$1,meta19181){return (new photosure.blog.t19180(owner__$1,caption__$1,text_view__$1,meta19181));
});
}
return (new photosure.blog.t19180(owner,caption,text_view,null));
});
photosure.blog.text_post_view = (function text_post_view(p__19183,owner){var map__19188 = p__19183;var map__19188__$1 = ((cljs.core.seq_QMARK_.call(null,map__19188))?cljs.core.apply.call(null,cljs.core.hash_map,map__19188):map__19188);var id = cljs.core.get.call(null,map__19188__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var title = cljs.core.get.call(null,map__19188__$1,new cljs.core.Keyword(null,"title","title",636505583));var body = cljs.core.get.call(null,map__19188__$1,new cljs.core.Keyword(null,"body","body",-2049205669));if(typeof photosure.blog.t19189 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t19189 = (function (body,title,id,map__19188,owner,p__19183,text_post_view,meta19190){
this.body = body;
this.title = title;
this.id = id;
this.map__19188 = map__19188;
this.owner = owner;
this.p__19183 = p__19183;
this.text_post_view = text_post_view;
this.meta19190 = meta19190;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t19189.cljs$lang$type = true;
photosure.blog.t19189.cljs$lang$ctorStr = "photosure.blog/t19189";
photosure.blog.t19189.cljs$lang$ctorPrWriter = ((function (map__19188,map__19188__$1,id,title,body){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t19189");
});})(map__19188,map__19188__$1,id,title,body))
;
photosure.blog.t19189.prototype.om$core$IRender$ = true;
photosure.blog.t19189.prototype.om$core$IRender$render$arity$1 = ((function (map__19188,map__19188__$1,id,title,body){
return (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return React.DOM.div({"className": "post", "id": self__.id},React.DOM.h2({"className": "blog-title"},self__.title),om.core.build.call(null,photosure.blog.text_view,self__.body));
});})(map__19188,map__19188__$1,id,title,body))
;
photosure.blog.t19189.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__19188,map__19188__$1,id,title,body){
return (function (_19191){var self__ = this;
var _19191__$1 = this;return self__.meta19190;
});})(map__19188,map__19188__$1,id,title,body))
;
photosure.blog.t19189.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__19188,map__19188__$1,id,title,body){
return (function (_19191,meta19190__$1){var self__ = this;
var _19191__$1 = this;return (new photosure.blog.t19189(self__.body,self__.title,self__.id,self__.map__19188,self__.owner,self__.p__19183,self__.text_post_view,meta19190__$1));
});})(map__19188,map__19188__$1,id,title,body))
;
photosure.blog.__GT_t19189 = ((function (map__19188,map__19188__$1,id,title,body){
return (function __GT_t19189(body__$1,title__$1,id__$1,map__19188__$2,owner__$1,p__19183__$1,text_post_view__$1,meta19190){return (new photosure.blog.t19189(body__$1,title__$1,id__$1,map__19188__$2,owner__$1,p__19183__$1,text_post_view__$1,meta19190));
});})(map__19188,map__19188__$1,id,title,body))
;
}
return (new photosure.blog.t19189(body,title,id,map__19188__$1,owner,p__19183,text_post_view,null));
});
photosure.blog.photo_post_view = (function photo_post_view(p__19192,owner){var map__19197 = p__19192;var map__19197__$1 = ((cljs.core.seq_QMARK_.call(null,map__19197))?cljs.core.apply.call(null,cljs.core.hash_map,map__19197):map__19197);var id = cljs.core.get.call(null,map__19197__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var photos = cljs.core.get.call(null,map__19197__$1,new cljs.core.Keyword(null,"photos","photos",11691538));var caption = cljs.core.get.call(null,map__19197__$1,new cljs.core.Keyword(null,"caption","caption",-855383902));if(typeof photosure.blog.t19198 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t19198 = (function (caption,photos,id,map__19197,owner,p__19192,photo_post_view,meta19199){
this.caption = caption;
this.photos = photos;
this.id = id;
this.map__19197 = map__19197;
this.owner = owner;
this.p__19192 = p__19192;
this.photo_post_view = photo_post_view;
this.meta19199 = meta19199;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t19198.cljs$lang$type = true;
photosure.blog.t19198.cljs$lang$ctorStr = "photosure.blog/t19198";
photosure.blog.t19198.cljs$lang$ctorPrWriter = ((function (map__19197,map__19197__$1,id,photos,caption){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t19198");
});})(map__19197,map__19197__$1,id,photos,caption))
;
photosure.blog.t19198.prototype.om$core$IRender$ = true;
photosure.blog.t19198.prototype.om$core$IRender$render$arity$1 = ((function (map__19197,map__19197__$1,id,photos,caption){
return (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return React.DOM.div({"className": "post", "id": self__.id},cljs.core.apply.call(null,om.dom.div,{"className": "blog-photo"},cljs.core.map.call(null,((function (this__5143__auto____$1,map__19197,map__19197__$1,id,photos,caption){
return (function (photo){return React.DOM.div(null,"placeholder");
});})(this__5143__auto____$1,map__19197,map__19197__$1,id,photos,caption))
,self__.photos)),om.core.build.call(null,photosure.blog.text_view,self__.caption));
});})(map__19197,map__19197__$1,id,photos,caption))
;
photosure.blog.t19198.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__19197,map__19197__$1,id,photos,caption){
return (function (_19200){var self__ = this;
var _19200__$1 = this;return self__.meta19199;
});})(map__19197,map__19197__$1,id,photos,caption))
;
photosure.blog.t19198.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__19197,map__19197__$1,id,photos,caption){
return (function (_19200,meta19199__$1){var self__ = this;
var _19200__$1 = this;return (new photosure.blog.t19198(self__.caption,self__.photos,self__.id,self__.map__19197,self__.owner,self__.p__19192,self__.photo_post_view,meta19199__$1));
});})(map__19197,map__19197__$1,id,photos,caption))
;
photosure.blog.__GT_t19198 = ((function (map__19197,map__19197__$1,id,photos,caption){
return (function __GT_t19198(caption__$1,photos__$1,id__$1,map__19197__$2,owner__$1,p__19192__$1,photo_post_view__$1,meta19199){return (new photosure.blog.t19198(caption__$1,photos__$1,id__$1,map__19197__$2,owner__$1,p__19192__$1,photo_post_view__$1,meta19199));
});})(map__19197,map__19197__$1,id,photos,caption))
;
}
return (new photosure.blog.t19198(caption,photos,id,map__19197__$1,owner,p__19192,photo_post_view,null));
});
photosure.blog.post_view = (function post_view(p__19201,owner){var map__19206 = p__19201;var map__19206__$1 = ((cljs.core.seq_QMARK_.call(null,map__19206))?cljs.core.apply.call(null,cljs.core.hash_map,map__19206):map__19206);var post = map__19206__$1;var type = cljs.core.get.call(null,map__19206__$1,new cljs.core.Keyword(null,"type","type",1174270348));if(typeof photosure.blog.t19207 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t19207 = (function (type,post,map__19206,owner,p__19201,post_view,meta19208){
this.type = type;
this.post = post;
this.map__19206 = map__19206;
this.owner = owner;
this.p__19201 = p__19201;
this.post_view = post_view;
this.meta19208 = meta19208;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t19207.cljs$lang$type = true;
photosure.blog.t19207.cljs$lang$ctorStr = "photosure.blog/t19207";
photosure.blog.t19207.cljs$lang$ctorPrWriter = ((function (map__19206,map__19206__$1,post,type){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t19207");
});})(map__19206,map__19206__$1,post,type))
;
photosure.blog.t19207.prototype.om$core$IRender$ = true;
photosure.blog.t19207.prototype.om$core$IRender$render$arity$1 = ((function (map__19206,map__19206__$1,post,type){
return (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core._EQ_.call(null,self__.type,"photo"))
{return om.core.build.call(null,photosure.blog.photo_post_view,self__.post);
} else
{return om.core.build.call(null,photosure.blog.text_post_view,self__.post);
}
});})(map__19206,map__19206__$1,post,type))
;
photosure.blog.t19207.prototype.om$core$IDidUpdate$ = true;
photosure.blog.t19207.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__19206,map__19206__$1,post,type){
return (function (this$,prev_props,prev_state){var self__ = this;
var this$__$1 = this;return cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"load-chan","load-chan",342107614)),"done!");
});})(map__19206,map__19206__$1,post,type))
;
photosure.blog.t19207.prototype.om$core$IDidMount$ = true;
photosure.blog.t19207.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__19206,map__19206__$1,post,type){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"load-chan","load-chan",342107614)),"done!");
});})(map__19206,map__19206__$1,post,type))
;
photosure.blog.t19207.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__19206,map__19206__$1,post,type){
return (function (_19209){var self__ = this;
var _19209__$1 = this;return self__.meta19208;
});})(map__19206,map__19206__$1,post,type))
;
photosure.blog.t19207.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__19206,map__19206__$1,post,type){
return (function (_19209,meta19208__$1){var self__ = this;
var _19209__$1 = this;return (new photosure.blog.t19207(self__.type,self__.post,self__.map__19206,self__.owner,self__.p__19201,self__.post_view,meta19208__$1));
});})(map__19206,map__19206__$1,post,type))
;
photosure.blog.__GT_t19207 = ((function (map__19206,map__19206__$1,post,type){
return (function __GT_t19207(type__$1,post__$1,map__19206__$2,owner__$1,p__19201__$1,post_view__$1,meta19208){return (new photosure.blog.t19207(type__$1,post__$1,map__19206__$2,owner__$1,p__19201__$1,post_view__$1,meta19208));
});})(map__19206,map__19206__$1,post,type))
;
}
return (new photosure.blog.t19207(type,post,map__19206__$1,owner,p__19201,post_view,null));
});
photosure.blog.posts_view = (function posts_view(posts,owner){if(typeof photosure.blog.t19252 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t19252 = (function (owner,posts,posts_view,meta19253){
this.owner = owner;
this.posts = posts;
this.posts_view = posts_view;
this.meta19253 = meta19253;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t19252.cljs$lang$type = true;
photosure.blog.t19252.cljs$lang$ctorStr = "photosure.blog/t19252";
photosure.blog.t19252.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t19252");
});
photosure.blog.t19252.prototype.om$core$IRenderState$ = true;
photosure.blog.t19252.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__19255){var self__ = this;
var map__19256 = p__19255;var map__19256__$1 = ((cljs.core.seq_QMARK_.call(null,map__19256))?cljs.core.apply.call(null,cljs.core.hash_map,map__19256):map__19256);var load_chan = cljs.core.get.call(null,map__19256__$1,new cljs.core.Keyword(null,"load-chan","load-chan",342107614));var iter = cljs.core.get.call(null,map__19256__$1,new cljs.core.Keyword(null,"iter","iter",1308240283));var this$__$1 = this;return cljs.core.apply.call(null,om.dom.div,{"id": "post-list"},om.core.build_all.call(null,photosure.blog.post_view,cljs.core.take.call(null,iter,self__.posts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"load-chan","load-chan",342107614),load_chan], null)], null)));
});
photosure.blog.t19252.prototype.om$core$IWillMount$ = true;
photosure.blog.t19252.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var load_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"load-chan","load-chan",342107614));var loaded_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448));var c__6367__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto__,load_chan,loaded_chan,___$1){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto__,load_chan,loaded_chan,___$1){
return (function (state_19275){var state_val_19276 = (state_19275[(1)]);if((state_val_19276 === (7)))
{var inst_19270 = (state_19275[(2)]);var state_19275__$1 = (function (){var statearr_19277 = state_19275;(statearr_19277[(7)] = inst_19270);
return statearr_19277;
})();var statearr_19278_19293 = state_19275__$1;(statearr_19278_19293[(2)] = null);
(statearr_19278_19293[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19276 === (6)))
{var state_19275__$1 = state_19275;var statearr_19279_19294 = state_19275__$1;(statearr_19279_19294[(2)] = null);
(statearr_19279_19294[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19276 === (5)))
{var inst_19265 = cljs.core.async.put_BANG_.call(null,loaded_chan,"all done!");var inst_19266 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"load-count","load-count",128885706),(0));var inst_19267 = console.log("loaded");var state_19275__$1 = (function (){var statearr_19280 = state_19275;(statearr_19280[(8)] = inst_19266);
(statearr_19280[(9)] = inst_19265);
return statearr_19280;
})();var statearr_19281_19295 = state_19275__$1;(statearr_19281_19295[(2)] = inst_19267);
(statearr_19281_19295[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19276 === (4)))
{var inst_19259 = (state_19275[(2)]);var inst_19260 = (function (){var load = inst_19259;return ((function (load,inst_19259,state_val_19276,c__6367__auto__,load_chan,loaded_chan,___$1){
return (function (p1__19210_SHARP_){return (p1__19210_SHARP_ + (1));
});
;})(load,inst_19259,state_val_19276,c__6367__auto__,load_chan,loaded_chan,___$1))
})();var inst_19261 = om.core.update_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"load-count","load-count",128885706),inst_19260);var inst_19262 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"load-count","load-count",128885706));var inst_19263 = cljs.core._EQ_.call(null,inst_19262,(20));var state_19275__$1 = (function (){var statearr_19282 = state_19275;(statearr_19282[(10)] = inst_19261);
return statearr_19282;
})();if(inst_19263)
{var statearr_19283_19296 = state_19275__$1;(statearr_19283_19296[(1)] = (5));
} else
{var statearr_19284_19297 = state_19275__$1;(statearr_19284_19297[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19276 === (3)))
{var inst_19273 = (state_19275[(2)]);var state_19275__$1 = state_19275;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19275__$1,inst_19273);
} else
{if((state_val_19276 === (2)))
{var state_19275__$1 = state_19275;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19275__$1,(4),load_chan);
} else
{if((state_val_19276 === (1)))
{var state_19275__$1 = state_19275;var statearr_19285_19298 = state_19275__$1;(statearr_19285_19298[(2)] = null);
(statearr_19285_19298[(1)] = (2));
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
var state_machine__6353__auto____0 = (function (){var statearr_19289 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_19289[(0)] = state_machine__6353__auto__);
(statearr_19289[(1)] = (1));
return statearr_19289;
});
var state_machine__6353__auto____1 = (function (state_19275){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_19275);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e19290){if((e19290 instanceof Object))
{var ex__6356__auto__ = e19290;var statearr_19291_19299 = state_19275;(statearr_19291_19299[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19275);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19290;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19300 = state_19275;
state_19275 = G__19300;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_19275){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_19275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto__,load_chan,loaded_chan,___$1))
})();var state__6369__auto__ = (function (){var statearr_19292 = f__6368__auto__.call(null);(statearr_19292[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto__);
return statearr_19292;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto__,load_chan,loaded_chan,___$1))
);
return c__6367__auto__;
});
photosure.blog.t19252.prototype.om$core$IInitState$ = true;
photosure.blog.t19252.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"load-chan","load-chan",342107614),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"load-count","load-count",128885706),(0),new cljs.core.Keyword(null,"iter","iter",1308240283),(20)], null);
});
photosure.blog.t19252.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19254){var self__ = this;
var _19254__$1 = this;return self__.meta19253;
});
photosure.blog.t19252.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19254,meta19253__$1){var self__ = this;
var _19254__$1 = this;return (new photosure.blog.t19252(self__.owner,self__.posts,self__.posts_view,meta19253__$1));
});
photosure.blog.__GT_t19252 = (function __GT_t19252(owner__$1,posts__$1,posts_view__$1,meta19253){return (new photosure.blog.t19252(owner__$1,posts__$1,posts_view__$1,meta19253));
});
}
return (new photosure.blog.t19252(owner,posts,posts_view,null));
});
photosure.blog.set_posts = (function set_posts(app,page){return photosure.util.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),("api/posts/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(page)),new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),(function (_){return om.core.update_BANG_.call(null,app,new cljs.core.Keyword(null,"posts","posts",760043164),_);
})], null));
});
photosure.blog.posts_nav = (function posts_nav(app,owner){if(typeof photosure.blog.t19306 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t19306 = (function (owner,app,posts_nav,meta19307){
this.owner = owner;
this.app = app;
this.posts_nav = posts_nav;
this.meta19307 = meta19307;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t19306.cljs$lang$type = true;
photosure.blog.t19306.cljs$lang$ctorStr = "photosure.blog/t19306";
photosure.blog.t19306.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t19306");
});
photosure.blog.t19306.prototype.om$core$IRenderState$ = true;
photosure.blog.t19306.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__19309){var self__ = this;
var map__19310 = p__19309;var map__19310__$1 = ((cljs.core.seq_QMARK_.call(null,map__19310))?cljs.core.apply.call(null,cljs.core.hash_map,map__19310):map__19310);var nav_chan = cljs.core.get.call(null,map__19310__$1,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980));var ___$1 = this;return React.DOM.div({"className": "posts-nav"},React.DOM.div({"onClick": ((function (___$1,map__19310,map__19310__$1,nav_chan){
return (function (___$2){return cljs.core.async.put_BANG_.call(null,nav_chan,"prev");
});})(___$1,map__19310,map__19310__$1,nav_chan))
, "className": "prev"}),React.DOM.div({"className": "top"},React.DOM.p({"className": "page"},(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.app) + (1)))),React.DOM.div({"onClick": ((function (___$1,map__19310,map__19310__$1,nav_chan){
return (function (___$2){return cljs.core.async.put_BANG_.call(null,nav_chan,"next");
});})(___$1,map__19310,map__19310__$1,nav_chan))
, "className": "next"}));
});
photosure.blog.t19306.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19308){var self__ = this;
var _19308__$1 = this;return self__.meta19307;
});
photosure.blog.t19306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19308,meta19307__$1){var self__ = this;
var _19308__$1 = this;return (new photosure.blog.t19306(self__.owner,self__.app,self__.posts_nav,meta19307__$1));
});
photosure.blog.__GT_t19306 = (function __GT_t19306(owner__$1,app__$1,posts_nav__$1,meta19307){return (new photosure.blog.t19306(owner__$1,app__$1,posts_nav__$1,meta19307));
});
}
return (new photosure.blog.t19306(owner,app,posts_nav,null));
});
photosure.blog.blog = (function blog(app,owner){if(typeof photosure.blog.t19381 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t19381 = (function (owner,app,blog,meta19382){
this.owner = owner;
this.app = app;
this.blog = blog;
this.meta19382 = meta19382;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t19381.cljs$lang$type = true;
photosure.blog.t19381.cljs$lang$ctorStr = "photosure.blog/t19381";
photosure.blog.t19381.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t19381");
});
photosure.blog.t19381.prototype.om$core$IRenderState$ = true;
photosure.blog.t19381.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__19384){var self__ = this;
var map__19385 = p__19384;var map__19385__$1 = ((cljs.core.seq_QMARK_.call(null,map__19385))?cljs.core.apply.call(null,cljs.core.hash_map,map__19385):map__19385);var scroll_top = cljs.core.get.call(null,map__19385__$1,new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100));var nav_chan = cljs.core.get.call(null,map__19385__$1,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980));var loaded_chan = cljs.core.get.call(null,map__19385__$1,new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448));var loaded = cljs.core.get.call(null,map__19385__$1,new cljs.core.Keyword(null,"loaded","loaded",-1246482293));var this$__$1 = this;return React.DOM.div({"id": "blog-gallery-container"},om.core.build.call(null,photosure.scrolldiv.scroll_div,self__.app,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"blog-gallery",new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),(0)], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),("blog-gallery"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(loaded)?" loaded":null))),new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),(0)], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.core.build.call(null,photosure.blog.posts_view,new cljs.core.Keyword(null,"posts","posts",760043164).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448),loaded_chan], null)], null)),om.core.build.call(null,photosure.blog.posts_nav,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980),nav_chan], null)], null))], null)], null)], null)));
});
photosure.blog.t19381.prototype.om$core$IWillMount$ = true;
photosure.blog.t19381.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;photosure.blog.set_posts.call(null,self__.app,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.app));
var loaded_chan_19449 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448));var c__6367__auto___19450 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto___19450,loaded_chan_19449,___$1){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto___19450,loaded_chan_19449,___$1){
return (function (state_19394){var state_val_19395 = (state_19394[(1)]);if((state_val_19395 === (4)))
{var inst_19388 = (state_19394[(2)]);var inst_19389 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true);var state_19394__$1 = (function (){var statearr_19396 = state_19394;(statearr_19396[(7)] = inst_19389);
(statearr_19396[(8)] = inst_19388);
return statearr_19396;
})();var statearr_19397_19451 = state_19394__$1;(statearr_19397_19451[(2)] = null);
(statearr_19397_19451[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19395 === (3)))
{var inst_19392 = (state_19394[(2)]);var state_19394__$1 = state_19394;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19394__$1,inst_19392);
} else
{if((state_val_19395 === (2)))
{var state_19394__$1 = state_19394;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19394__$1,(4),loaded_chan_19449);
} else
{if((state_val_19395 === (1)))
{var state_19394__$1 = state_19394;var statearr_19398_19452 = state_19394__$1;(statearr_19398_19452[(2)] = null);
(statearr_19398_19452[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6367__auto___19450,loaded_chan_19449,___$1))
;return ((function (switch__6352__auto__,c__6367__auto___19450,loaded_chan_19449,___$1){
return (function() {
var state_machine__6353__auto__ = null;
var state_machine__6353__auto____0 = (function (){var statearr_19402 = [null,null,null,null,null,null,null,null,null];(statearr_19402[(0)] = state_machine__6353__auto__);
(statearr_19402[(1)] = (1));
return statearr_19402;
});
var state_machine__6353__auto____1 = (function (state_19394){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_19394);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e19403){if((e19403 instanceof Object))
{var ex__6356__auto__ = e19403;var statearr_19404_19453 = state_19394;(statearr_19404_19453[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19394);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19403;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19454 = state_19394;
state_19394 = G__19454;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_19394){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_19394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto___19450,loaded_chan_19449,___$1))
})();var state__6369__auto__ = (function (){var statearr_19405 = f__6368__auto__.call(null);(statearr_19405[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto___19450);
return statearr_19405;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto___19450,loaded_chan_19449,___$1))
);
var nav_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980));var c__6367__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto__,nav_chan,___$1){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto__,nav_chan,___$1){
return (function (state_19430){var state_val_19431 = (state_19430[(1)]);if((state_val_19431 === (7)))
{var inst_19425 = (state_19430[(2)]);var state_19430__$1 = (function (){var statearr_19432 = state_19430;(statearr_19432[(7)] = inst_19425);
return statearr_19432;
})();var statearr_19433_19455 = state_19430__$1;(statearr_19433_19455[(2)] = null);
(statearr_19433_19455[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19431 === (6)))
{var inst_19408 = (state_19430[(8)]);var inst_19418 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),false);var inst_19419 = (function (){var cmd = inst_19408;return ((function (cmd,inst_19408,inst_19418,state_val_19431,c__6367__auto__,nav_chan,___$1){
return (function (p1__19312_SHARP_){return (p1__19312_SHARP_ + (1));
});
;})(cmd,inst_19408,inst_19418,state_val_19431,c__6367__auto__,nav_chan,___$1))
})();var inst_19420 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"page","page",849072397),inst_19419);var inst_19421 = cljs.core.deref.call(null,self__.app);var inst_19422 = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(inst_19421);var inst_19423 = photosure.blog.set_posts.call(null,self__.app,inst_19422);var state_19430__$1 = (function (){var statearr_19434 = state_19430;(statearr_19434[(9)] = inst_19420);
(statearr_19434[(10)] = inst_19418);
return statearr_19434;
})();var statearr_19435_19456 = state_19430__$1;(statearr_19435_19456[(2)] = inst_19423);
(statearr_19435_19456[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19431 === (5)))
{var inst_19408 = (state_19430[(8)]);var inst_19411 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),false);var inst_19412 = (function (){var cmd = inst_19408;return ((function (cmd,inst_19408,inst_19411,state_val_19431,c__6367__auto__,nav_chan,___$1){
return (function (p1__19311_SHARP_){return (p1__19311_SHARP_ - (1));
});
;})(cmd,inst_19408,inst_19411,state_val_19431,c__6367__auto__,nav_chan,___$1))
})();var inst_19413 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"page","page",849072397),inst_19412);var inst_19414 = cljs.core.deref.call(null,self__.app);var inst_19415 = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(inst_19414);var inst_19416 = photosure.blog.set_posts.call(null,self__.app,inst_19415);var state_19430__$1 = (function (){var statearr_19436 = state_19430;(statearr_19436[(11)] = inst_19413);
(statearr_19436[(12)] = inst_19411);
return statearr_19436;
})();var statearr_19437_19457 = state_19430__$1;(statearr_19437_19457[(2)] = inst_19416);
(statearr_19437_19457[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19431 === (4)))
{var inst_19408 = (state_19430[(8)]);var inst_19408__$1 = (state_19430[(2)]);var inst_19409 = cljs.core._EQ_.call(null,inst_19408__$1,"prev");var state_19430__$1 = (function (){var statearr_19438 = state_19430;(statearr_19438[(8)] = inst_19408__$1);
return statearr_19438;
})();if(inst_19409)
{var statearr_19439_19458 = state_19430__$1;(statearr_19439_19458[(1)] = (5));
} else
{var statearr_19440_19459 = state_19430__$1;(statearr_19440_19459[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19431 === (3)))
{var inst_19428 = (state_19430[(2)]);var state_19430__$1 = state_19430;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19430__$1,inst_19428);
} else
{if((state_val_19431 === (2)))
{var state_19430__$1 = state_19430;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19430__$1,(4),nav_chan);
} else
{if((state_val_19431 === (1)))
{var state_19430__$1 = state_19430;var statearr_19441_19460 = state_19430__$1;(statearr_19441_19460[(2)] = null);
(statearr_19441_19460[(1)] = (2));
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
});})(c__6367__auto__,nav_chan,___$1))
;return ((function (switch__6352__auto__,c__6367__auto__,nav_chan,___$1){
return (function() {
var state_machine__6353__auto__ = null;
var state_machine__6353__auto____0 = (function (){var statearr_19445 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19445[(0)] = state_machine__6353__auto__);
(statearr_19445[(1)] = (1));
return statearr_19445;
});
var state_machine__6353__auto____1 = (function (state_19430){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_19430);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e19446){if((e19446 instanceof Object))
{var ex__6356__auto__ = e19446;var statearr_19447_19461 = state_19430;(statearr_19447_19461[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19430);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19446;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19462 = state_19430;
state_19430 = G__19462;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_19430){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_19430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto__,nav_chan,___$1))
})();var state__6369__auto__ = (function (){var statearr_19448 = f__6368__auto__.call(null);(statearr_19448[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto__);
return statearr_19448;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto__,nav_chan,___$1))
);
return c__6367__auto__;
});
photosure.blog.t19381.prototype.om$core$IInitState$ = true;
photosure.blog.t19381.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),false,new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980),cljs.core.async.chan.call(null)], null);
});
photosure.blog.t19381.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19383){var self__ = this;
var _19383__$1 = this;return self__.meta19382;
});
photosure.blog.t19381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19383,meta19382__$1){var self__ = this;
var _19383__$1 = this;return (new photosure.blog.t19381(self__.owner,self__.app,self__.blog,meta19382__$1));
});
photosure.blog.__GT_t19381 = (function __GT_t19381(owner__$1,app__$1,blog__$1,meta19382){return (new photosure.blog.t19381(owner__$1,app__$1,blog__$1,meta19382));
});
}
return (new photosure.blog.t19381(owner,app,blog,null));
});
photosure.blog.render = (function render(){return om.core.root.call(null,photosure.blog.blog,photosure.blog.app_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("dynamic-content")], null));
});

//# sourceMappingURL=blog.js.map