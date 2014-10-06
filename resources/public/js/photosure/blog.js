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
photosure.blog.text_view = (function text_view(caption,owner){if(typeof photosure.blog.t10130 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t10130 = (function (owner,caption,text_view,meta10131){
this.owner = owner;
this.caption = caption;
this.text_view = text_view;
this.meta10131 = meta10131;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t10130.cljs$lang$type = true;
photosure.blog.t10130.cljs$lang$ctorStr = "photosure.blog/t10130";
photosure.blog.t10130.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t10130");
});
photosure.blog.t10130.prototype.om$core$IRender$ = true;
photosure.blog.t10130.prototype.om$core$IRender$render$arity$1 = (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return React.DOM.div({"dangerouslySetInnerHTML": {"__html": self__.caption}, "className": "caption"},null);
});
photosure.blog.t10130.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10132){var self__ = this;
var _10132__$1 = this;return self__.meta10131;
});
photosure.blog.t10130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10132,meta10131__$1){var self__ = this;
var _10132__$1 = this;return (new photosure.blog.t10130(self__.owner,self__.caption,self__.text_view,meta10131__$1));
});
photosure.blog.__GT_t10130 = (function __GT_t10130(owner__$1,caption__$1,text_view__$1,meta10131){return (new photosure.blog.t10130(owner__$1,caption__$1,text_view__$1,meta10131));
});
}
return (new photosure.blog.t10130(owner,caption,text_view,null));
});
photosure.blog.text_post_view = (function text_post_view(p__10133,owner){var map__10138 = p__10133;var map__10138__$1 = ((cljs.core.seq_QMARK_.call(null,map__10138))?cljs.core.apply.call(null,cljs.core.hash_map,map__10138):map__10138);var id = cljs.core.get.call(null,map__10138__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var title = cljs.core.get.call(null,map__10138__$1,new cljs.core.Keyword(null,"title","title",636505583));var body = cljs.core.get.call(null,map__10138__$1,new cljs.core.Keyword(null,"body","body",-2049205669));if(typeof photosure.blog.t10139 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t10139 = (function (body,title,id,map__10138,owner,p__10133,text_post_view,meta10140){
this.body = body;
this.title = title;
this.id = id;
this.map__10138 = map__10138;
this.owner = owner;
this.p__10133 = p__10133;
this.text_post_view = text_post_view;
this.meta10140 = meta10140;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t10139.cljs$lang$type = true;
photosure.blog.t10139.cljs$lang$ctorStr = "photosure.blog/t10139";
photosure.blog.t10139.cljs$lang$ctorPrWriter = ((function (map__10138,map__10138__$1,id,title,body){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t10139");
});})(map__10138,map__10138__$1,id,title,body))
;
photosure.blog.t10139.prototype.om$core$IRender$ = true;
photosure.blog.t10139.prototype.om$core$IRender$render$arity$1 = ((function (map__10138,map__10138__$1,id,title,body){
return (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return React.DOM.div({"className": "post", "id": self__.id},React.DOM.h2({"className": "blog-title"},self__.title),om.core.build.call(null,photosure.blog.text_view,self__.body));
});})(map__10138,map__10138__$1,id,title,body))
;
photosure.blog.t10139.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10138,map__10138__$1,id,title,body){
return (function (_10141){var self__ = this;
var _10141__$1 = this;return self__.meta10140;
});})(map__10138,map__10138__$1,id,title,body))
;
photosure.blog.t10139.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10138,map__10138__$1,id,title,body){
return (function (_10141,meta10140__$1){var self__ = this;
var _10141__$1 = this;return (new photosure.blog.t10139(self__.body,self__.title,self__.id,self__.map__10138,self__.owner,self__.p__10133,self__.text_post_view,meta10140__$1));
});})(map__10138,map__10138__$1,id,title,body))
;
photosure.blog.__GT_t10139 = ((function (map__10138,map__10138__$1,id,title,body){
return (function __GT_t10139(body__$1,title__$1,id__$1,map__10138__$2,owner__$1,p__10133__$1,text_post_view__$1,meta10140){return (new photosure.blog.t10139(body__$1,title__$1,id__$1,map__10138__$2,owner__$1,p__10133__$1,text_post_view__$1,meta10140));
});})(map__10138,map__10138__$1,id,title,body))
;
}
return (new photosure.blog.t10139(body,title,id,map__10138__$1,owner,p__10133,text_post_view,null));
});
photosure.blog.photo_post_view = (function photo_post_view(p__10142,owner){var map__10147 = p__10142;var map__10147__$1 = ((cljs.core.seq_QMARK_.call(null,map__10147))?cljs.core.apply.call(null,cljs.core.hash_map,map__10147):map__10147);var id = cljs.core.get.call(null,map__10147__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var photos = cljs.core.get.call(null,map__10147__$1,new cljs.core.Keyword(null,"photos","photos",11691538));var caption = cljs.core.get.call(null,map__10147__$1,new cljs.core.Keyword(null,"caption","caption",-855383902));if(typeof photosure.blog.t10148 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t10148 = (function (caption,photos,id,map__10147,owner,p__10142,photo_post_view,meta10149){
this.caption = caption;
this.photos = photos;
this.id = id;
this.map__10147 = map__10147;
this.owner = owner;
this.p__10142 = p__10142;
this.photo_post_view = photo_post_view;
this.meta10149 = meta10149;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t10148.cljs$lang$type = true;
photosure.blog.t10148.cljs$lang$ctorStr = "photosure.blog/t10148";
photosure.blog.t10148.cljs$lang$ctorPrWriter = ((function (map__10147,map__10147__$1,id,photos,caption){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t10148");
});})(map__10147,map__10147__$1,id,photos,caption))
;
photosure.blog.t10148.prototype.om$core$IRender$ = true;
photosure.blog.t10148.prototype.om$core$IRender$render$arity$1 = ((function (map__10147,map__10147__$1,id,photos,caption){
return (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return React.DOM.div({"className": "post", "id": self__.id},cljs.core.apply.call(null,om.dom.div,{"className": "blog-photo"},cljs.core.map.call(null,((function (this__5143__auto____$1,map__10147,map__10147__$1,id,photos,caption){
return (function (photo){return React.DOM.div(null,"placeholder");
});})(this__5143__auto____$1,map__10147,map__10147__$1,id,photos,caption))
,self__.photos)),om.core.build.call(null,photosure.blog.text_view,self__.caption));
});})(map__10147,map__10147__$1,id,photos,caption))
;
photosure.blog.t10148.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10147,map__10147__$1,id,photos,caption){
return (function (_10150){var self__ = this;
var _10150__$1 = this;return self__.meta10149;
});})(map__10147,map__10147__$1,id,photos,caption))
;
photosure.blog.t10148.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10147,map__10147__$1,id,photos,caption){
return (function (_10150,meta10149__$1){var self__ = this;
var _10150__$1 = this;return (new photosure.blog.t10148(self__.caption,self__.photos,self__.id,self__.map__10147,self__.owner,self__.p__10142,self__.photo_post_view,meta10149__$1));
});})(map__10147,map__10147__$1,id,photos,caption))
;
photosure.blog.__GT_t10148 = ((function (map__10147,map__10147__$1,id,photos,caption){
return (function __GT_t10148(caption__$1,photos__$1,id__$1,map__10147__$2,owner__$1,p__10142__$1,photo_post_view__$1,meta10149){return (new photosure.blog.t10148(caption__$1,photos__$1,id__$1,map__10147__$2,owner__$1,p__10142__$1,photo_post_view__$1,meta10149));
});})(map__10147,map__10147__$1,id,photos,caption))
;
}
return (new photosure.blog.t10148(caption,photos,id,map__10147__$1,owner,p__10142,photo_post_view,null));
});
photosure.blog.post_view = (function post_view(p__10151,owner){var map__10156 = p__10151;var map__10156__$1 = ((cljs.core.seq_QMARK_.call(null,map__10156))?cljs.core.apply.call(null,cljs.core.hash_map,map__10156):map__10156);var post = map__10156__$1;var type = cljs.core.get.call(null,map__10156__$1,new cljs.core.Keyword(null,"type","type",1174270348));if(typeof photosure.blog.t10157 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t10157 = (function (type,post,map__10156,owner,p__10151,post_view,meta10158){
this.type = type;
this.post = post;
this.map__10156 = map__10156;
this.owner = owner;
this.p__10151 = p__10151;
this.post_view = post_view;
this.meta10158 = meta10158;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t10157.cljs$lang$type = true;
photosure.blog.t10157.cljs$lang$ctorStr = "photosure.blog/t10157";
photosure.blog.t10157.cljs$lang$ctorPrWriter = ((function (map__10156,map__10156__$1,post,type){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t10157");
});})(map__10156,map__10156__$1,post,type))
;
photosure.blog.t10157.prototype.om$core$IRender$ = true;
photosure.blog.t10157.prototype.om$core$IRender$render$arity$1 = ((function (map__10156,map__10156__$1,post,type){
return (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core._EQ_.call(null,self__.type,"photo"))
{return om.core.build.call(null,photosure.blog.photo_post_view,self__.post);
} else
{return om.core.build.call(null,photosure.blog.text_post_view,self__.post);
}
});})(map__10156,map__10156__$1,post,type))
;
photosure.blog.t10157.prototype.om$core$IDidMount$ = true;
photosure.blog.t10157.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__10156,map__10156__$1,post,type){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"load-chan","load-chan",342107614)),"done!");
});})(map__10156,map__10156__$1,post,type))
;
photosure.blog.t10157.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10156,map__10156__$1,post,type){
return (function (_10159){var self__ = this;
var _10159__$1 = this;return self__.meta10158;
});})(map__10156,map__10156__$1,post,type))
;
photosure.blog.t10157.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10156,map__10156__$1,post,type){
return (function (_10159,meta10158__$1){var self__ = this;
var _10159__$1 = this;return (new photosure.blog.t10157(self__.type,self__.post,self__.map__10156,self__.owner,self__.p__10151,self__.post_view,meta10158__$1));
});})(map__10156,map__10156__$1,post,type))
;
photosure.blog.__GT_t10157 = ((function (map__10156,map__10156__$1,post,type){
return (function __GT_t10157(type__$1,post__$1,map__10156__$2,owner__$1,p__10151__$1,post_view__$1,meta10158){return (new photosure.blog.t10157(type__$1,post__$1,map__10156__$2,owner__$1,p__10151__$1,post_view__$1,meta10158));
});})(map__10156,map__10156__$1,post,type))
;
}
return (new photosure.blog.t10157(type,post,map__10156__$1,owner,p__10151,post_view,null));
});
photosure.blog.posts_view = (function posts_view(posts,owner){if(typeof photosure.blog.t10199 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t10199 = (function (owner,posts,posts_view,meta10200){
this.owner = owner;
this.posts = posts;
this.posts_view = posts_view;
this.meta10200 = meta10200;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t10199.cljs$lang$type = true;
photosure.blog.t10199.cljs$lang$ctorStr = "photosure.blog/t10199";
photosure.blog.t10199.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t10199");
});
photosure.blog.t10199.prototype.om$core$IRenderState$ = true;
photosure.blog.t10199.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__10202){var self__ = this;
var map__10203 = p__10202;var map__10203__$1 = ((cljs.core.seq_QMARK_.call(null,map__10203))?cljs.core.apply.call(null,cljs.core.hash_map,map__10203):map__10203);var load_chan = cljs.core.get.call(null,map__10203__$1,new cljs.core.Keyword(null,"load-chan","load-chan",342107614));var iter = cljs.core.get.call(null,map__10203__$1,new cljs.core.Keyword(null,"iter","iter",1308240283));var this$__$1 = this;return cljs.core.apply.call(null,om.dom.div,{"id": "post-list"},om.core.build_all.call(null,photosure.blog.post_view,cljs.core.take.call(null,iter,self__.posts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"load-chan","load-chan",342107614),load_chan], null)], null)));
});
photosure.blog.t10199.prototype.om$core$IWillMount$ = true;
photosure.blog.t10199.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var load_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"load-chan","load-chan",342107614));var loaded_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448));var c__6367__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto__,load_chan,loaded_chan,___$1){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto__,load_chan,loaded_chan,___$1){
return (function (state_10220){var state_val_10221 = (state_10220[(1)]);if((state_val_10221 === (7)))
{var inst_10215 = (state_10220[(2)]);var state_10220__$1 = (function (){var statearr_10222 = state_10220;(statearr_10222[(7)] = inst_10215);
return statearr_10222;
})();var statearr_10223_10237 = state_10220__$1;(statearr_10223_10237[(2)] = null);
(statearr_10223_10237[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10221 === (6)))
{var state_10220__$1 = state_10220;var statearr_10224_10238 = state_10220__$1;(statearr_10224_10238[(2)] = null);
(statearr_10224_10238[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10221 === (5)))
{var inst_10212 = cljs.core.async.put_BANG_.call(null,loaded_chan,"all loaded");var state_10220__$1 = state_10220;var statearr_10225_10239 = state_10220__$1;(statearr_10225_10239[(2)] = inst_10212);
(statearr_10225_10239[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10221 === (4)))
{var inst_10206 = (state_10220[(2)]);var inst_10207 = (function (){var load = inst_10206;return ((function (load,inst_10206,state_val_10221,c__6367__auto__,load_chan,loaded_chan,___$1){
return (function (p1__10160_SHARP_){return (p1__10160_SHARP_ + (1));
});
;})(load,inst_10206,state_val_10221,c__6367__auto__,load_chan,loaded_chan,___$1))
})();var inst_10208 = om.core.update_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"load-count","load-count",128885706),inst_10207);var inst_10209 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"load-count","load-count",128885706));var inst_10210 = cljs.core._EQ_.call(null,inst_10209,(20));var state_10220__$1 = (function (){var statearr_10226 = state_10220;(statearr_10226[(8)] = inst_10208);
return statearr_10226;
})();if(inst_10210)
{var statearr_10227_10240 = state_10220__$1;(statearr_10227_10240[(1)] = (5));
} else
{var statearr_10228_10241 = state_10220__$1;(statearr_10228_10241[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10221 === (3)))
{var inst_10218 = (state_10220[(2)]);var state_10220__$1 = state_10220;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10220__$1,inst_10218);
} else
{if((state_val_10221 === (2)))
{var state_10220__$1 = state_10220;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10220__$1,(4),load_chan);
} else
{if((state_val_10221 === (1)))
{var state_10220__$1 = state_10220;var statearr_10229_10242 = state_10220__$1;(statearr_10229_10242[(2)] = null);
(statearr_10229_10242[(1)] = (2));
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
var state_machine__6353__auto____0 = (function (){var statearr_10233 = [null,null,null,null,null,null,null,null,null];(statearr_10233[(0)] = state_machine__6353__auto__);
(statearr_10233[(1)] = (1));
return statearr_10233;
});
var state_machine__6353__auto____1 = (function (state_10220){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_10220);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e10234){if((e10234 instanceof Object))
{var ex__6356__auto__ = e10234;var statearr_10235_10243 = state_10220;(statearr_10235_10243[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10220);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10234;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10244 = state_10220;
state_10220 = G__10244;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_10220){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_10220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto__,load_chan,loaded_chan,___$1))
})();var state__6369__auto__ = (function (){var statearr_10236 = f__6368__auto__.call(null);(statearr_10236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto__);
return statearr_10236;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto__,load_chan,loaded_chan,___$1))
);
return c__6367__auto__;
});
photosure.blog.t10199.prototype.om$core$IInitState$ = true;
photosure.blog.t10199.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"load-chan","load-chan",342107614),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"load-count","load-count",128885706),(0),new cljs.core.Keyword(null,"iter","iter",1308240283),(20)], null);
});
photosure.blog.t10199.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10201){var self__ = this;
var _10201__$1 = this;return self__.meta10200;
});
photosure.blog.t10199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10201,meta10200__$1){var self__ = this;
var _10201__$1 = this;return (new photosure.blog.t10199(self__.owner,self__.posts,self__.posts_view,meta10200__$1));
});
photosure.blog.__GT_t10199 = (function __GT_t10199(owner__$1,posts__$1,posts_view__$1,meta10200){return (new photosure.blog.t10199(owner__$1,posts__$1,posts_view__$1,meta10200));
});
}
return (new photosure.blog.t10199(owner,posts,posts_view,null));
});
photosure.blog.spinner = (function spinner(app,owner){if(typeof photosure.blog.t10250 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t10250 = (function (owner,app,spinner,meta10251){
this.owner = owner;
this.app = app;
this.spinner = spinner;
this.meta10251 = meta10251;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t10250.cljs$lang$type = true;
photosure.blog.t10250.cljs$lang$ctorStr = "photosure.blog/t10250";
photosure.blog.t10250.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t10250");
});
photosure.blog.t10250.prototype.om$core$IRenderState$ = true;
photosure.blog.t10250.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__10253){var self__ = this;
var map__10254 = p__10253;var map__10254__$1 = ((cljs.core.seq_QMARK_.call(null,map__10254))?cljs.core.apply.call(null,cljs.core.hash_map,map__10254):map__10254);var time = cljs.core.get.call(null,map__10254__$1,new cljs.core.Keyword(null,"time","time",1385887882));var this$__$1 = this;return React.DOM.div({"id": "loader"},React.DOM.div({"className": ("circle "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red","green","blue"], null),cljs.core.mod.call(null,time,(3))))), "id": "one"}),React.DOM.div({"className": "circle", "id": "two"}),React.DOM.div({"className": "circle", "id": "three"}));
});
photosure.blog.t10250.prototype.om$core$IWillMount$ = true;
photosure.blog.t10250.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return setInterval(((function (___$1){
return (function (){return om.core.update_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"time","time",1385887882),((function (___$1){
return (function (time){return (time + (1));
});})(___$1))
);
});})(___$1))
,(300));
});
photosure.blog.t10250.prototype.om$core$IInitState$ = true;
photosure.blog.t10250.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"time","time",1385887882),(0)], null);
});
photosure.blog.t10250.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10252){var self__ = this;
var _10252__$1 = this;return self__.meta10251;
});
photosure.blog.t10250.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10252,meta10251__$1){var self__ = this;
var _10252__$1 = this;return (new photosure.blog.t10250(self__.owner,self__.app,self__.spinner,meta10251__$1));
});
photosure.blog.__GT_t10250 = (function __GT_t10250(owner__$1,app__$1,spinner__$1,meta10251){return (new photosure.blog.t10250(owner__$1,app__$1,spinner__$1,meta10251));
});
}
return (new photosure.blog.t10250(owner,app,spinner,null));
});
photosure.blog.blog = (function blog(app,owner){if(typeof photosure.blog.t10280 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t10280 = (function (owner,app,blog,meta10281){
this.owner = owner;
this.app = app;
this.blog = blog;
this.meta10281 = meta10281;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t10280.cljs$lang$type = true;
photosure.blog.t10280.cljs$lang$ctorStr = "photosure.blog/t10280";
photosure.blog.t10280.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t10280");
});
photosure.blog.t10280.prototype.om$core$IRenderState$ = true;
photosure.blog.t10280.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__10283){var self__ = this;
var map__10284 = p__10283;var map__10284__$1 = ((cljs.core.seq_QMARK_.call(null,map__10284))?cljs.core.apply.call(null,cljs.core.hash_map,map__10284):map__10284);var loaded_chan = cljs.core.get.call(null,map__10284__$1,new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448));var loaded = cljs.core.get.call(null,map__10284__$1,new cljs.core.Keyword(null,"loaded","loaded",-1246482293));var this$__$1 = this;return React.DOM.div({"id": "blog-gallery-container"},om.core.build.call(null,photosure.scrolldiv.scroll_div,self__.app,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"blog-gallery"], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),("blog-gallery"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(loaded)?" loaded":null)))], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.core.build.call(null,photosure.blog.posts_view,new cljs.core.Keyword(null,"posts","posts",760043164).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448),loaded_chan], null)], null))], null)], null)], null)));
});
photosure.blog.t10280.prototype.om$core$IWillMount$ = true;
photosure.blog.t10280.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;photosure.util.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),"api/posts",new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),((function (___$1){
return (function (___$2){return om.core.update_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"posts","posts",760043164),___$2);
});})(___$1))
], null));
var loaded_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448));var c__6367__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto__,loaded_chan,___$1){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto__,loaded_chan,___$1){
return (function (state_10293){var state_val_10294 = (state_10293[(1)]);if((state_val_10294 === (4)))
{var inst_10287 = (state_10293[(2)]);var inst_10288 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true);var state_10293__$1 = (function (){var statearr_10295 = state_10293;(statearr_10295[(7)] = inst_10287);
(statearr_10295[(8)] = inst_10288);
return statearr_10295;
})();var statearr_10296_10305 = state_10293__$1;(statearr_10296_10305[(2)] = null);
(statearr_10296_10305[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10294 === (3)))
{var inst_10291 = (state_10293[(2)]);var state_10293__$1 = state_10293;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10293__$1,inst_10291);
} else
{if((state_val_10294 === (2)))
{var state_10293__$1 = state_10293;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10293__$1,(4),loaded_chan);
} else
{if((state_val_10294 === (1)))
{var state_10293__$1 = state_10293;var statearr_10297_10306 = state_10293__$1;(statearr_10297_10306[(2)] = null);
(statearr_10297_10306[(1)] = (2));
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
var state_machine__6353__auto____0 = (function (){var statearr_10301 = [null,null,null,null,null,null,null,null,null];(statearr_10301[(0)] = state_machine__6353__auto__);
(statearr_10301[(1)] = (1));
return statearr_10301;
});
var state_machine__6353__auto____1 = (function (state_10293){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_10293);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e10302){if((e10302 instanceof Object))
{var ex__6356__auto__ = e10302;var statearr_10303_10307 = state_10293;(statearr_10303_10307[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10293);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10302;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10308 = state_10293;
state_10293 = G__10308;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_10293){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_10293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto__,loaded_chan,___$1))
})();var state__6369__auto__ = (function (){var statearr_10304 = f__6368__auto__.call(null);(statearr_10304[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto__);
return statearr_10304;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto__,loaded_chan,___$1))
);
return c__6367__auto__;
});
photosure.blog.t10280.prototype.om$core$IInitState$ = true;
photosure.blog.t10280.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),false,new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448),cljs.core.async.chan.call(null)], null);
});
photosure.blog.t10280.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10282){var self__ = this;
var _10282__$1 = this;return self__.meta10281;
});
photosure.blog.t10280.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10282,meta10281__$1){var self__ = this;
var _10282__$1 = this;return (new photosure.blog.t10280(self__.owner,self__.app,self__.blog,meta10281__$1));
});
photosure.blog.__GT_t10280 = (function __GT_t10280(owner__$1,app__$1,blog__$1,meta10281){return (new photosure.blog.t10280(owner__$1,app__$1,blog__$1,meta10281));
});
}
return (new photosure.blog.t10280(owner,app,blog,null));
});
photosure.blog.render = (function render(){return om.core.root.call(null,photosure.blog.blog,photosure.blog.app_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("dynamic-content")], null));
});

//# sourceMappingURL=blog.js.map