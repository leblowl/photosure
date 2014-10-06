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
photosure.blog.text_view = (function text_view(caption,owner){if(typeof photosure.blog.t13933 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t13933 = (function (owner,caption,text_view,meta13934){
this.owner = owner;
this.caption = caption;
this.text_view = text_view;
this.meta13934 = meta13934;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t13933.cljs$lang$type = true;
photosure.blog.t13933.cljs$lang$ctorStr = "photosure.blog/t13933";
photosure.blog.t13933.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t13933");
});
photosure.blog.t13933.prototype.om$core$IRender$ = true;
photosure.blog.t13933.prototype.om$core$IRender$render$arity$1 = (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return React.DOM.div({"dangerouslySetInnerHTML": {"__html": self__.caption}, "className": "caption"},null);
});
photosure.blog.t13933.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13935){var self__ = this;
var _13935__$1 = this;return self__.meta13934;
});
photosure.blog.t13933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13935,meta13934__$1){var self__ = this;
var _13935__$1 = this;return (new photosure.blog.t13933(self__.owner,self__.caption,self__.text_view,meta13934__$1));
});
photosure.blog.__GT_t13933 = (function __GT_t13933(owner__$1,caption__$1,text_view__$1,meta13934){return (new photosure.blog.t13933(owner__$1,caption__$1,text_view__$1,meta13934));
});
}
return (new photosure.blog.t13933(owner,caption,text_view,null));
});
photosure.blog.text_post_view = (function text_post_view(p__13936,owner){var map__13941 = p__13936;var map__13941__$1 = ((cljs.core.seq_QMARK_.call(null,map__13941))?cljs.core.apply.call(null,cljs.core.hash_map,map__13941):map__13941);var id = cljs.core.get.call(null,map__13941__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var title = cljs.core.get.call(null,map__13941__$1,new cljs.core.Keyword(null,"title","title",636505583));var body = cljs.core.get.call(null,map__13941__$1,new cljs.core.Keyword(null,"body","body",-2049205669));if(typeof photosure.blog.t13942 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t13942 = (function (body,title,id,map__13941,owner,p__13936,text_post_view,meta13943){
this.body = body;
this.title = title;
this.id = id;
this.map__13941 = map__13941;
this.owner = owner;
this.p__13936 = p__13936;
this.text_post_view = text_post_view;
this.meta13943 = meta13943;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t13942.cljs$lang$type = true;
photosure.blog.t13942.cljs$lang$ctorStr = "photosure.blog/t13942";
photosure.blog.t13942.cljs$lang$ctorPrWriter = ((function (map__13941,map__13941__$1,id,title,body){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t13942");
});})(map__13941,map__13941__$1,id,title,body))
;
photosure.blog.t13942.prototype.om$core$IRender$ = true;
photosure.blog.t13942.prototype.om$core$IRender$render$arity$1 = ((function (map__13941,map__13941__$1,id,title,body){
return (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return React.DOM.div({"className": "post", "id": self__.id},React.DOM.h2({"className": "blog-title"},self__.title),om.core.build.call(null,photosure.blog.text_view,self__.body));
});})(map__13941,map__13941__$1,id,title,body))
;
photosure.blog.t13942.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13941,map__13941__$1,id,title,body){
return (function (_13944){var self__ = this;
var _13944__$1 = this;return self__.meta13943;
});})(map__13941,map__13941__$1,id,title,body))
;
photosure.blog.t13942.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13941,map__13941__$1,id,title,body){
return (function (_13944,meta13943__$1){var self__ = this;
var _13944__$1 = this;return (new photosure.blog.t13942(self__.body,self__.title,self__.id,self__.map__13941,self__.owner,self__.p__13936,self__.text_post_view,meta13943__$1));
});})(map__13941,map__13941__$1,id,title,body))
;
photosure.blog.__GT_t13942 = ((function (map__13941,map__13941__$1,id,title,body){
return (function __GT_t13942(body__$1,title__$1,id__$1,map__13941__$2,owner__$1,p__13936__$1,text_post_view__$1,meta13943){return (new photosure.blog.t13942(body__$1,title__$1,id__$1,map__13941__$2,owner__$1,p__13936__$1,text_post_view__$1,meta13943));
});})(map__13941,map__13941__$1,id,title,body))
;
}
return (new photosure.blog.t13942(body,title,id,map__13941__$1,owner,p__13936,text_post_view,null));
});
photosure.blog.photo_post_view = (function photo_post_view(p__13945,owner){var map__13950 = p__13945;var map__13950__$1 = ((cljs.core.seq_QMARK_.call(null,map__13950))?cljs.core.apply.call(null,cljs.core.hash_map,map__13950):map__13950);var id = cljs.core.get.call(null,map__13950__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var photos = cljs.core.get.call(null,map__13950__$1,new cljs.core.Keyword(null,"photos","photos",11691538));var caption = cljs.core.get.call(null,map__13950__$1,new cljs.core.Keyword(null,"caption","caption",-855383902));if(typeof photosure.blog.t13951 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t13951 = (function (caption,photos,id,map__13950,owner,p__13945,photo_post_view,meta13952){
this.caption = caption;
this.photos = photos;
this.id = id;
this.map__13950 = map__13950;
this.owner = owner;
this.p__13945 = p__13945;
this.photo_post_view = photo_post_view;
this.meta13952 = meta13952;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t13951.cljs$lang$type = true;
photosure.blog.t13951.cljs$lang$ctorStr = "photosure.blog/t13951";
photosure.blog.t13951.cljs$lang$ctorPrWriter = ((function (map__13950,map__13950__$1,id,photos,caption){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t13951");
});})(map__13950,map__13950__$1,id,photos,caption))
;
photosure.blog.t13951.prototype.om$core$IRender$ = true;
photosure.blog.t13951.prototype.om$core$IRender$render$arity$1 = ((function (map__13950,map__13950__$1,id,photos,caption){
return (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return React.DOM.div({"className": "post", "id": self__.id},cljs.core.apply.call(null,om.dom.div,{"className": "blog-photo"},cljs.core.map.call(null,((function (this__5143__auto____$1,map__13950,map__13950__$1,id,photos,caption){
return (function (photo){return React.DOM.div(null,"placeholder");
});})(this__5143__auto____$1,map__13950,map__13950__$1,id,photos,caption))
,self__.photos)),om.core.build.call(null,photosure.blog.text_view,self__.caption));
});})(map__13950,map__13950__$1,id,photos,caption))
;
photosure.blog.t13951.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13950,map__13950__$1,id,photos,caption){
return (function (_13953){var self__ = this;
var _13953__$1 = this;return self__.meta13952;
});})(map__13950,map__13950__$1,id,photos,caption))
;
photosure.blog.t13951.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13950,map__13950__$1,id,photos,caption){
return (function (_13953,meta13952__$1){var self__ = this;
var _13953__$1 = this;return (new photosure.blog.t13951(self__.caption,self__.photos,self__.id,self__.map__13950,self__.owner,self__.p__13945,self__.photo_post_view,meta13952__$1));
});})(map__13950,map__13950__$1,id,photos,caption))
;
photosure.blog.__GT_t13951 = ((function (map__13950,map__13950__$1,id,photos,caption){
return (function __GT_t13951(caption__$1,photos__$1,id__$1,map__13950__$2,owner__$1,p__13945__$1,photo_post_view__$1,meta13952){return (new photosure.blog.t13951(caption__$1,photos__$1,id__$1,map__13950__$2,owner__$1,p__13945__$1,photo_post_view__$1,meta13952));
});})(map__13950,map__13950__$1,id,photos,caption))
;
}
return (new photosure.blog.t13951(caption,photos,id,map__13950__$1,owner,p__13945,photo_post_view,null));
});
photosure.blog.post_view = (function post_view(p__13954,owner){var map__13959 = p__13954;var map__13959__$1 = ((cljs.core.seq_QMARK_.call(null,map__13959))?cljs.core.apply.call(null,cljs.core.hash_map,map__13959):map__13959);var post = map__13959__$1;var type = cljs.core.get.call(null,map__13959__$1,new cljs.core.Keyword(null,"type","type",1174270348));if(typeof photosure.blog.t13960 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t13960 = (function (type,post,map__13959,owner,p__13954,post_view,meta13961){
this.type = type;
this.post = post;
this.map__13959 = map__13959;
this.owner = owner;
this.p__13954 = p__13954;
this.post_view = post_view;
this.meta13961 = meta13961;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t13960.cljs$lang$type = true;
photosure.blog.t13960.cljs$lang$ctorStr = "photosure.blog/t13960";
photosure.blog.t13960.cljs$lang$ctorPrWriter = ((function (map__13959,map__13959__$1,post,type){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t13960");
});})(map__13959,map__13959__$1,post,type))
;
photosure.blog.t13960.prototype.om$core$IRender$ = true;
photosure.blog.t13960.prototype.om$core$IRender$render$arity$1 = ((function (map__13959,map__13959__$1,post,type){
return (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core._EQ_.call(null,self__.type,"photo"))
{return om.core.build.call(null,photosure.blog.photo_post_view,self__.post);
} else
{return om.core.build.call(null,photosure.blog.text_post_view,self__.post);
}
});})(map__13959,map__13959__$1,post,type))
;
photosure.blog.t13960.prototype.om$core$IDidMount$ = true;
photosure.blog.t13960.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__13959,map__13959__$1,post,type){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"load-chan","load-chan",342107614)),"done!");
});})(map__13959,map__13959__$1,post,type))
;
photosure.blog.t13960.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13959,map__13959__$1,post,type){
return (function (_13962){var self__ = this;
var _13962__$1 = this;return self__.meta13961;
});})(map__13959,map__13959__$1,post,type))
;
photosure.blog.t13960.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13959,map__13959__$1,post,type){
return (function (_13962,meta13961__$1){var self__ = this;
var _13962__$1 = this;return (new photosure.blog.t13960(self__.type,self__.post,self__.map__13959,self__.owner,self__.p__13954,self__.post_view,meta13961__$1));
});})(map__13959,map__13959__$1,post,type))
;
photosure.blog.__GT_t13960 = ((function (map__13959,map__13959__$1,post,type){
return (function __GT_t13960(type__$1,post__$1,map__13959__$2,owner__$1,p__13954__$1,post_view__$1,meta13961){return (new photosure.blog.t13960(type__$1,post__$1,map__13959__$2,owner__$1,p__13954__$1,post_view__$1,meta13961));
});})(map__13959,map__13959__$1,post,type))
;
}
return (new photosure.blog.t13960(type,post,map__13959__$1,owner,p__13954,post_view,null));
});
photosure.blog.posts_view = (function posts_view(posts,owner){if(typeof photosure.blog.t14002 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t14002 = (function (owner,posts,posts_view,meta14003){
this.owner = owner;
this.posts = posts;
this.posts_view = posts_view;
this.meta14003 = meta14003;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t14002.cljs$lang$type = true;
photosure.blog.t14002.cljs$lang$ctorStr = "photosure.blog/t14002";
photosure.blog.t14002.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t14002");
});
photosure.blog.t14002.prototype.om$core$IRenderState$ = true;
photosure.blog.t14002.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__14005){var self__ = this;
var map__14006 = p__14005;var map__14006__$1 = ((cljs.core.seq_QMARK_.call(null,map__14006))?cljs.core.apply.call(null,cljs.core.hash_map,map__14006):map__14006);var load_chan = cljs.core.get.call(null,map__14006__$1,new cljs.core.Keyword(null,"load-chan","load-chan",342107614));var iter = cljs.core.get.call(null,map__14006__$1,new cljs.core.Keyword(null,"iter","iter",1308240283));var this$__$1 = this;return cljs.core.apply.call(null,om.dom.div,{"id": "post-list"},om.core.build_all.call(null,photosure.blog.post_view,cljs.core.take.call(null,iter,self__.posts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"load-chan","load-chan",342107614),load_chan], null)], null)));
});
photosure.blog.t14002.prototype.om$core$IWillMount$ = true;
photosure.blog.t14002.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var load_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"load-chan","load-chan",342107614));var loaded_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448));var c__6367__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto__,load_chan,loaded_chan,___$1){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto__,load_chan,loaded_chan,___$1){
return (function (state_14023){var state_val_14024 = (state_14023[(1)]);if((state_val_14024 === (7)))
{var inst_14018 = (state_14023[(2)]);var state_14023__$1 = (function (){var statearr_14025 = state_14023;(statearr_14025[(7)] = inst_14018);
return statearr_14025;
})();var statearr_14026_14040 = state_14023__$1;(statearr_14026_14040[(2)] = null);
(statearr_14026_14040[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14024 === (6)))
{var state_14023__$1 = state_14023;var statearr_14027_14041 = state_14023__$1;(statearr_14027_14041[(2)] = null);
(statearr_14027_14041[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14024 === (5)))
{var inst_14015 = cljs.core.async.put_BANG_.call(null,loaded_chan,"all done!");var state_14023__$1 = state_14023;var statearr_14028_14042 = state_14023__$1;(statearr_14028_14042[(2)] = inst_14015);
(statearr_14028_14042[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14024 === (4)))
{var inst_14009 = (state_14023[(2)]);var inst_14010 = (function (){var load = inst_14009;return ((function (load,inst_14009,state_val_14024,c__6367__auto__,load_chan,loaded_chan,___$1){
return (function (p1__13963_SHARP_){return (p1__13963_SHARP_ + (1));
});
;})(load,inst_14009,state_val_14024,c__6367__auto__,load_chan,loaded_chan,___$1))
})();var inst_14011 = om.core.update_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"load-count","load-count",128885706),inst_14010);var inst_14012 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"load-count","load-count",128885706));var inst_14013 = cljs.core._EQ_.call(null,inst_14012,(20));var state_14023__$1 = (function (){var statearr_14029 = state_14023;(statearr_14029[(8)] = inst_14011);
return statearr_14029;
})();if(inst_14013)
{var statearr_14030_14043 = state_14023__$1;(statearr_14030_14043[(1)] = (5));
} else
{var statearr_14031_14044 = state_14023__$1;(statearr_14031_14044[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14024 === (3)))
{var inst_14021 = (state_14023[(2)]);var state_14023__$1 = state_14023;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14023__$1,inst_14021);
} else
{if((state_val_14024 === (2)))
{var state_14023__$1 = state_14023;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14023__$1,(4),load_chan);
} else
{if((state_val_14024 === (1)))
{var state_14023__$1 = state_14023;var statearr_14032_14045 = state_14023__$1;(statearr_14032_14045[(2)] = null);
(statearr_14032_14045[(1)] = (2));
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
var state_machine__6353__auto____0 = (function (){var statearr_14036 = [null,null,null,null,null,null,null,null,null];(statearr_14036[(0)] = state_machine__6353__auto__);
(statearr_14036[(1)] = (1));
return statearr_14036;
});
var state_machine__6353__auto____1 = (function (state_14023){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_14023);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e14037){if((e14037 instanceof Object))
{var ex__6356__auto__ = e14037;var statearr_14038_14046 = state_14023;(statearr_14038_14046[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14023);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14037;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14047 = state_14023;
state_14023 = G__14047;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_14023){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_14023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto__,load_chan,loaded_chan,___$1))
})();var state__6369__auto__ = (function (){var statearr_14039 = f__6368__auto__.call(null);(statearr_14039[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto__);
return statearr_14039;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto__,load_chan,loaded_chan,___$1))
);
return c__6367__auto__;
});
photosure.blog.t14002.prototype.om$core$IInitState$ = true;
photosure.blog.t14002.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"load-chan","load-chan",342107614),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"load-count","load-count",128885706),(0),new cljs.core.Keyword(null,"iter","iter",1308240283),(20)], null);
});
photosure.blog.t14002.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14004){var self__ = this;
var _14004__$1 = this;return self__.meta14003;
});
photosure.blog.t14002.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14004,meta14003__$1){var self__ = this;
var _14004__$1 = this;return (new photosure.blog.t14002(self__.owner,self__.posts,self__.posts_view,meta14003__$1));
});
photosure.blog.__GT_t14002 = (function __GT_t14002(owner__$1,posts__$1,posts_view__$1,meta14003){return (new photosure.blog.t14002(owner__$1,posts__$1,posts_view__$1,meta14003));
});
}
return (new photosure.blog.t14002(owner,posts,posts_view,null));
});
photosure.blog.get_posts = (function get_posts(app){return photosure.util.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),("api/posts/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app)))),new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),(function (_){return om.core.update_BANG_.call(null,app,new cljs.core.Keyword(null,"posts","posts",760043164),_);
})], null));
});
photosure.blog.posts_nav = (function posts_nav(app,owner){if(typeof photosure.blog.t14053 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t14053 = (function (owner,app,posts_nav,meta14054){
this.owner = owner;
this.app = app;
this.posts_nav = posts_nav;
this.meta14054 = meta14054;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t14053.cljs$lang$type = true;
photosure.blog.t14053.cljs$lang$ctorStr = "photosure.blog/t14053";
photosure.blog.t14053.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t14053");
});
photosure.blog.t14053.prototype.om$core$IRender$ = true;
photosure.blog.t14053.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "posts-nav"},React.DOM.div({"onClick": ((function (___$1){
return (function (___$2){om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"page","page",849072397),((function (___$1){
return (function (p1__14048_SHARP_){return (p1__14048_SHARP_ - (1));
});})(___$1))
);
return photosure.blog.get_posts.call(null,self__.app);
});})(___$1))
, "className": "prev"}),React.DOM.div({"className": "top"},React.DOM.p({"className": "page"},(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.app) + (1)))),React.DOM.div({"onClick": ((function (___$1){
return (function (___$2){console.log("next");
om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"page","page",849072397),((function (___$1){
return (function (p1__14049_SHARP_){return (p1__14049_SHARP_ + (1));
});})(___$1))
);
return photosure.blog.get_posts.call(null,self__.app);
});})(___$1))
, "className": "next"}));
});
photosure.blog.t14053.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14055){var self__ = this;
var _14055__$1 = this;return self__.meta14054;
});
photosure.blog.t14053.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14055,meta14054__$1){var self__ = this;
var _14055__$1 = this;return (new photosure.blog.t14053(self__.owner,self__.app,self__.posts_nav,meta14054__$1));
});
photosure.blog.__GT_t14053 = (function __GT_t14053(owner__$1,app__$1,posts_nav__$1,meta14054){return (new photosure.blog.t14053(owner__$1,app__$1,posts_nav__$1,meta14054));
});
}
return (new photosure.blog.t14053(owner,app,posts_nav,null));
});
photosure.blog.blog = (function blog(app,owner){if(typeof photosure.blog.t14081 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t14081 = (function (owner,app,blog,meta14082){
this.owner = owner;
this.app = app;
this.blog = blog;
this.meta14082 = meta14082;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t14081.cljs$lang$type = true;
photosure.blog.t14081.cljs$lang$ctorStr = "photosure.blog/t14081";
photosure.blog.t14081.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t14081");
});
photosure.blog.t14081.prototype.om$core$IRenderState$ = true;
photosure.blog.t14081.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__14084){var self__ = this;
var map__14085 = p__14084;var map__14085__$1 = ((cljs.core.seq_QMARK_.call(null,map__14085))?cljs.core.apply.call(null,cljs.core.hash_map,map__14085):map__14085);var loaded_chan = cljs.core.get.call(null,map__14085__$1,new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448));var loaded = cljs.core.get.call(null,map__14085__$1,new cljs.core.Keyword(null,"loaded","loaded",-1246482293));var this$__$1 = this;return React.DOM.div({"id": "blog-gallery-container"},om.core.build.call(null,photosure.scrolldiv.scroll_div,self__.app,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"blog-gallery"], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),("blog-gallery"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(loaded)?" loaded":null)))], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.core.build.call(null,photosure.blog.posts_view,new cljs.core.Keyword(null,"posts","posts",760043164).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448),loaded_chan], null)], null)),om.core.build.call(null,photosure.blog.posts_nav,self__.app)], null)], null)], null)));
});
photosure.blog.t14081.prototype.om$core$IWillMount$ = true;
photosure.blog.t14081.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;photosure.util.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),("api/posts/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.app))),new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),((function (___$1){
return (function (___$2){return om.core.update_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"posts","posts",760043164),___$2);
});})(___$1))
], null));
var loaded_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448));var c__6367__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto__,loaded_chan,___$1){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto__,loaded_chan,___$1){
return (function (state_14094){var state_val_14095 = (state_14094[(1)]);if((state_val_14095 === (4)))
{var inst_14088 = (state_14094[(2)]);var inst_14089 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true);var state_14094__$1 = (function (){var statearr_14096 = state_14094;(statearr_14096[(7)] = inst_14088);
(statearr_14096[(8)] = inst_14089);
return statearr_14096;
})();var statearr_14097_14106 = state_14094__$1;(statearr_14097_14106[(2)] = null);
(statearr_14097_14106[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14095 === (3)))
{var inst_14092 = (state_14094[(2)]);var state_14094__$1 = state_14094;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14094__$1,inst_14092);
} else
{if((state_val_14095 === (2)))
{var state_14094__$1 = state_14094;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14094__$1,(4),loaded_chan);
} else
{if((state_val_14095 === (1)))
{var state_14094__$1 = state_14094;var statearr_14098_14107 = state_14094__$1;(statearr_14098_14107[(2)] = null);
(statearr_14098_14107[(1)] = (2));
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
var state_machine__6353__auto____0 = (function (){var statearr_14102 = [null,null,null,null,null,null,null,null,null];(statearr_14102[(0)] = state_machine__6353__auto__);
(statearr_14102[(1)] = (1));
return statearr_14102;
});
var state_machine__6353__auto____1 = (function (state_14094){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_14094);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e14103){if((e14103 instanceof Object))
{var ex__6356__auto__ = e14103;var statearr_14104_14108 = state_14094;(statearr_14104_14108[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14094);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14103;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14109 = state_14094;
state_14094 = G__14109;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_14094){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_14094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto__,loaded_chan,___$1))
})();var state__6369__auto__ = (function (){var statearr_14105 = f__6368__auto__.call(null);(statearr_14105[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto__);
return statearr_14105;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto__,loaded_chan,___$1))
);
return c__6367__auto__;
});
photosure.blog.t14081.prototype.om$core$IInitState$ = true;
photosure.blog.t14081.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),false,new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448),cljs.core.async.chan.call(null)], null);
});
photosure.blog.t14081.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14083){var self__ = this;
var _14083__$1 = this;return self__.meta14082;
});
photosure.blog.t14081.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14083,meta14082__$1){var self__ = this;
var _14083__$1 = this;return (new photosure.blog.t14081(self__.owner,self__.app,self__.blog,meta14082__$1));
});
photosure.blog.__GT_t14081 = (function __GT_t14081(owner__$1,app__$1,blog__$1,meta14082){return (new photosure.blog.t14081(owner__$1,app__$1,blog__$1,meta14082));
});
}
return (new photosure.blog.t14081(owner,app,blog,null));
});
photosure.blog.render = (function render(){return om.core.root.call(null,photosure.blog.blog,photosure.blog.app_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("dynamic-content")], null));
});

//# sourceMappingURL=blog.js.map