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
photosure.blog.text_view = (function text_view(caption,owner){if(typeof photosure.blog.t18905 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t18905 = (function (owner,caption,text_view,meta18906){
this.owner = owner;
this.caption = caption;
this.text_view = text_view;
this.meta18906 = meta18906;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t18905.cljs$lang$type = true;
photosure.blog.t18905.cljs$lang$ctorStr = "photosure.blog/t18905";
photosure.blog.t18905.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t18905");
});
photosure.blog.t18905.prototype.om$core$IRender$ = true;
photosure.blog.t18905.prototype.om$core$IRender$render$arity$1 = (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return React.DOM.div({"dangerouslySetInnerHTML": {"__html": self__.caption}, "className": "caption"},null);
});
photosure.blog.t18905.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18907){var self__ = this;
var _18907__$1 = this;return self__.meta18906;
});
photosure.blog.t18905.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18907,meta18906__$1){var self__ = this;
var _18907__$1 = this;return (new photosure.blog.t18905(self__.owner,self__.caption,self__.text_view,meta18906__$1));
});
photosure.blog.__GT_t18905 = (function __GT_t18905(owner__$1,caption__$1,text_view__$1,meta18906){return (new photosure.blog.t18905(owner__$1,caption__$1,text_view__$1,meta18906));
});
}
return (new photosure.blog.t18905(owner,caption,text_view,null));
});
photosure.blog.text_post_view = (function text_post_view(p__18908,owner){var map__18913 = p__18908;var map__18913__$1 = ((cljs.core.seq_QMARK_.call(null,map__18913))?cljs.core.apply.call(null,cljs.core.hash_map,map__18913):map__18913);var id = cljs.core.get.call(null,map__18913__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var title = cljs.core.get.call(null,map__18913__$1,new cljs.core.Keyword(null,"title","title",636505583));var body = cljs.core.get.call(null,map__18913__$1,new cljs.core.Keyword(null,"body","body",-2049205669));if(typeof photosure.blog.t18914 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t18914 = (function (body,title,id,map__18913,owner,p__18908,text_post_view,meta18915){
this.body = body;
this.title = title;
this.id = id;
this.map__18913 = map__18913;
this.owner = owner;
this.p__18908 = p__18908;
this.text_post_view = text_post_view;
this.meta18915 = meta18915;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t18914.cljs$lang$type = true;
photosure.blog.t18914.cljs$lang$ctorStr = "photosure.blog/t18914";
photosure.blog.t18914.cljs$lang$ctorPrWriter = ((function (map__18913,map__18913__$1,id,title,body){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t18914");
});})(map__18913,map__18913__$1,id,title,body))
;
photosure.blog.t18914.prototype.om$core$IRender$ = true;
photosure.blog.t18914.prototype.om$core$IRender$render$arity$1 = ((function (map__18913,map__18913__$1,id,title,body){
return (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return React.DOM.div({"className": "post", "id": self__.id},React.DOM.h2({"className": "blog-title"},self__.title),om.core.build.call(null,photosure.blog.text_view,self__.body));
});})(map__18913,map__18913__$1,id,title,body))
;
photosure.blog.t18914.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__18913,map__18913__$1,id,title,body){
return (function (_18916){var self__ = this;
var _18916__$1 = this;return self__.meta18915;
});})(map__18913,map__18913__$1,id,title,body))
;
photosure.blog.t18914.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__18913,map__18913__$1,id,title,body){
return (function (_18916,meta18915__$1){var self__ = this;
var _18916__$1 = this;return (new photosure.blog.t18914(self__.body,self__.title,self__.id,self__.map__18913,self__.owner,self__.p__18908,self__.text_post_view,meta18915__$1));
});})(map__18913,map__18913__$1,id,title,body))
;
photosure.blog.__GT_t18914 = ((function (map__18913,map__18913__$1,id,title,body){
return (function __GT_t18914(body__$1,title__$1,id__$1,map__18913__$2,owner__$1,p__18908__$1,text_post_view__$1,meta18915){return (new photosure.blog.t18914(body__$1,title__$1,id__$1,map__18913__$2,owner__$1,p__18908__$1,text_post_view__$1,meta18915));
});})(map__18913,map__18913__$1,id,title,body))
;
}
return (new photosure.blog.t18914(body,title,id,map__18913__$1,owner,p__18908,text_post_view,null));
});
photosure.blog.photo_post_view = (function photo_post_view(p__18917,owner){var map__18924 = p__18917;var map__18924__$1 = ((cljs.core.seq_QMARK_.call(null,map__18924))?cljs.core.apply.call(null,cljs.core.hash_map,map__18924):map__18924);var id = cljs.core.get.call(null,map__18924__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var photos = cljs.core.get.call(null,map__18924__$1,new cljs.core.Keyword(null,"photos","photos",11691538));var caption = cljs.core.get.call(null,map__18924__$1,new cljs.core.Keyword(null,"caption","caption",-855383902));if(typeof photosure.blog.t18925 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t18925 = (function (caption,photos,id,map__18924,owner,p__18917,photo_post_view,meta18926){
this.caption = caption;
this.photos = photos;
this.id = id;
this.map__18924 = map__18924;
this.owner = owner;
this.p__18917 = p__18917;
this.photo_post_view = photo_post_view;
this.meta18926 = meta18926;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t18925.cljs$lang$type = true;
photosure.blog.t18925.cljs$lang$ctorStr = "photosure.blog/t18925";
photosure.blog.t18925.cljs$lang$ctorPrWriter = ((function (map__18924,map__18924__$1,id,photos,caption){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t18925");
});})(map__18924,map__18924__$1,id,photos,caption))
;
photosure.blog.t18925.prototype.om$core$IRenderState$ = true;
photosure.blog.t18925.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__18924,map__18924__$1,id,photos,caption){
return (function (this$,p__18928){var self__ = this;
var map__18929 = p__18928;var map__18929__$1 = ((cljs.core.seq_QMARK_.call(null,map__18929))?cljs.core.apply.call(null,cljs.core.hash_map,map__18929):map__18929);var loaded = cljs.core.get.call(null,map__18929__$1,new cljs.core.Keyword(null,"loaded","loaded",-1246482293));var this$__$1 = this;return React.DOM.div({"className": "post", "id": self__.id},cljs.core.apply.call(null,om.dom.div,{"className": ("blog-photo")},React.DOM.div({"className": ("loader "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not.call(null,loaded))?"on":"off"))), "id": "blah"}),cljs.core.map.call(null,((function (this$__$1,map__18929,map__18929__$1,loaded,map__18924,map__18924__$1,id,photos,caption){
return (function (photo){return React.DOM.img({"onLoad": ((function (this$__$1,map__18929,map__18929__$1,loaded,map__18924,map__18924__$1,id,photos,caption){
return (function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true);
});})(this$__$1,map__18929,map__18929__$1,loaded,map__18924,map__18924__$1,id,photos,caption))
, "className": ("blog-photo-img"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(loaded)?" loaded":null))), "src": photo});
});})(this$__$1,map__18929,map__18929__$1,loaded,map__18924,map__18924__$1,id,photos,caption))
,self__.photos)),om.core.build.call(null,photosure.blog.text_view,self__.caption));
});})(map__18924,map__18924__$1,id,photos,caption))
;
photosure.blog.t18925.prototype.om$core$IWillReceiveProps$ = true;
photosure.blog.t18925.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = ((function (map__18924,map__18924__$1,id,photos,caption){
return (function (this$,next_props){var self__ = this;
var this$__$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),false);
});})(map__18924,map__18924__$1,id,photos,caption))
;
photosure.blog.t18925.prototype.om$core$IInitState$ = true;
photosure.blog.t18925.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__18924,map__18924__$1,id,photos,caption){
return (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),false], null);
});})(map__18924,map__18924__$1,id,photos,caption))
;
photosure.blog.t18925.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__18924,map__18924__$1,id,photos,caption){
return (function (_18927){var self__ = this;
var _18927__$1 = this;return self__.meta18926;
});})(map__18924,map__18924__$1,id,photos,caption))
;
photosure.blog.t18925.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__18924,map__18924__$1,id,photos,caption){
return (function (_18927,meta18926__$1){var self__ = this;
var _18927__$1 = this;return (new photosure.blog.t18925(self__.caption,self__.photos,self__.id,self__.map__18924,self__.owner,self__.p__18917,self__.photo_post_view,meta18926__$1));
});})(map__18924,map__18924__$1,id,photos,caption))
;
photosure.blog.__GT_t18925 = ((function (map__18924,map__18924__$1,id,photos,caption){
return (function __GT_t18925(caption__$1,photos__$1,id__$1,map__18924__$2,owner__$1,p__18917__$1,photo_post_view__$1,meta18926){return (new photosure.blog.t18925(caption__$1,photos__$1,id__$1,map__18924__$2,owner__$1,p__18917__$1,photo_post_view__$1,meta18926));
});})(map__18924,map__18924__$1,id,photos,caption))
;
}
return (new photosure.blog.t18925(caption,photos,id,map__18924__$1,owner,p__18917,photo_post_view,null));
});
photosure.blog.post_view = (function post_view(p__18930,owner){var map__18935 = p__18930;var map__18935__$1 = ((cljs.core.seq_QMARK_.call(null,map__18935))?cljs.core.apply.call(null,cljs.core.hash_map,map__18935):map__18935);var post = map__18935__$1;var type = cljs.core.get.call(null,map__18935__$1,new cljs.core.Keyword(null,"type","type",1174270348));if(typeof photosure.blog.t18936 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t18936 = (function (type,post,map__18935,owner,p__18930,post_view,meta18937){
this.type = type;
this.post = post;
this.map__18935 = map__18935;
this.owner = owner;
this.p__18930 = p__18930;
this.post_view = post_view;
this.meta18937 = meta18937;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t18936.cljs$lang$type = true;
photosure.blog.t18936.cljs$lang$ctorStr = "photosure.blog/t18936";
photosure.blog.t18936.cljs$lang$ctorPrWriter = ((function (map__18935,map__18935__$1,post,type){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t18936");
});})(map__18935,map__18935__$1,post,type))
;
photosure.blog.t18936.prototype.om$core$IRender$ = true;
photosure.blog.t18936.prototype.om$core$IRender$render$arity$1 = ((function (map__18935,map__18935__$1,post,type){
return (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core._EQ_.call(null,self__.type,"photo"))
{return om.core.build.call(null,photosure.blog.photo_post_view,self__.post);
} else
{return om.core.build.call(null,photosure.blog.text_post_view,self__.post);
}
});})(map__18935,map__18935__$1,post,type))
;
photosure.blog.t18936.prototype.om$core$IDidUpdate$ = true;
photosure.blog.t18936.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__18935,map__18935__$1,post,type){
return (function (this$,prev_props,prev_state){var self__ = this;
var this$__$1 = this;return cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"load-chan","load-chan",342107614)),"done!");
});})(map__18935,map__18935__$1,post,type))
;
photosure.blog.t18936.prototype.om$core$IDidMount$ = true;
photosure.blog.t18936.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__18935,map__18935__$1,post,type){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"load-chan","load-chan",342107614)),"done!");
});})(map__18935,map__18935__$1,post,type))
;
photosure.blog.t18936.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__18935,map__18935__$1,post,type){
return (function (_18938){var self__ = this;
var _18938__$1 = this;return self__.meta18937;
});})(map__18935,map__18935__$1,post,type))
;
photosure.blog.t18936.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__18935,map__18935__$1,post,type){
return (function (_18938,meta18937__$1){var self__ = this;
var _18938__$1 = this;return (new photosure.blog.t18936(self__.type,self__.post,self__.map__18935,self__.owner,self__.p__18930,self__.post_view,meta18937__$1));
});})(map__18935,map__18935__$1,post,type))
;
photosure.blog.__GT_t18936 = ((function (map__18935,map__18935__$1,post,type){
return (function __GT_t18936(type__$1,post__$1,map__18935__$2,owner__$1,p__18930__$1,post_view__$1,meta18937){return (new photosure.blog.t18936(type__$1,post__$1,map__18935__$2,owner__$1,p__18930__$1,post_view__$1,meta18937));
});})(map__18935,map__18935__$1,post,type))
;
}
return (new photosure.blog.t18936(type,post,map__18935__$1,owner,p__18930,post_view,null));
});
photosure.blog.posts_view = (function posts_view(posts,owner){if(typeof photosure.blog.t18981 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t18981 = (function (owner,posts,posts_view,meta18982){
this.owner = owner;
this.posts = posts;
this.posts_view = posts_view;
this.meta18982 = meta18982;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t18981.cljs$lang$type = true;
photosure.blog.t18981.cljs$lang$ctorStr = "photosure.blog/t18981";
photosure.blog.t18981.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t18981");
});
photosure.blog.t18981.prototype.om$core$IRenderState$ = true;
photosure.blog.t18981.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__18984){var self__ = this;
var map__18985 = p__18984;var map__18985__$1 = ((cljs.core.seq_QMARK_.call(null,map__18985))?cljs.core.apply.call(null,cljs.core.hash_map,map__18985):map__18985);var load_chan = cljs.core.get.call(null,map__18985__$1,new cljs.core.Keyword(null,"load-chan","load-chan",342107614));var iter = cljs.core.get.call(null,map__18985__$1,new cljs.core.Keyword(null,"iter","iter",1308240283));var this$__$1 = this;return cljs.core.apply.call(null,om.dom.div,{"id": "post-list"},om.core.build_all.call(null,photosure.blog.post_view,cljs.core.take.call(null,iter,self__.posts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"load-chan","load-chan",342107614),load_chan], null)], null)));
});
photosure.blog.t18981.prototype.om$core$IWillMount$ = true;
photosure.blog.t18981.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var load_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"load-chan","load-chan",342107614));var loaded_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448));var c__6367__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto__,load_chan,loaded_chan,___$1){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto__,load_chan,loaded_chan,___$1){
return (function (state_19004){var state_val_19005 = (state_19004[(1)]);if((state_val_19005 === (7)))
{var inst_18999 = (state_19004[(2)]);var state_19004__$1 = (function (){var statearr_19006 = state_19004;(statearr_19006[(7)] = inst_18999);
return statearr_19006;
})();var statearr_19007_19022 = state_19004__$1;(statearr_19007_19022[(2)] = null);
(statearr_19007_19022[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19005 === (6)))
{var state_19004__$1 = state_19004;var statearr_19008_19023 = state_19004__$1;(statearr_19008_19023[(2)] = null);
(statearr_19008_19023[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19005 === (5)))
{var inst_18994 = cljs.core.async.put_BANG_.call(null,loaded_chan,"all done!");var inst_18995 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"load-count","load-count",128885706),(0));var inst_18996 = console.log("loaded");var state_19004__$1 = (function (){var statearr_19009 = state_19004;(statearr_19009[(8)] = inst_18995);
(statearr_19009[(9)] = inst_18994);
return statearr_19009;
})();var statearr_19010_19024 = state_19004__$1;(statearr_19010_19024[(2)] = inst_18996);
(statearr_19010_19024[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19005 === (4)))
{var inst_18988 = (state_19004[(2)]);var inst_18989 = (function (){var load = inst_18988;return ((function (load,inst_18988,state_val_19005,c__6367__auto__,load_chan,loaded_chan,___$1){
return (function (p1__18939_SHARP_){return (p1__18939_SHARP_ + (1));
});
;})(load,inst_18988,state_val_19005,c__6367__auto__,load_chan,loaded_chan,___$1))
})();var inst_18990 = om.core.update_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"load-count","load-count",128885706),inst_18989);var inst_18991 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"load-count","load-count",128885706));var inst_18992 = cljs.core._EQ_.call(null,inst_18991,(20));var state_19004__$1 = (function (){var statearr_19011 = state_19004;(statearr_19011[(10)] = inst_18990);
return statearr_19011;
})();if(inst_18992)
{var statearr_19012_19025 = state_19004__$1;(statearr_19012_19025[(1)] = (5));
} else
{var statearr_19013_19026 = state_19004__$1;(statearr_19013_19026[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19005 === (3)))
{var inst_19002 = (state_19004[(2)]);var state_19004__$1 = state_19004;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19004__$1,inst_19002);
} else
{if((state_val_19005 === (2)))
{var state_19004__$1 = state_19004;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19004__$1,(4),load_chan);
} else
{if((state_val_19005 === (1)))
{var state_19004__$1 = state_19004;var statearr_19014_19027 = state_19004__$1;(statearr_19014_19027[(2)] = null);
(statearr_19014_19027[(1)] = (2));
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
var state_machine__6353__auto____0 = (function (){var statearr_19018 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_19018[(0)] = state_machine__6353__auto__);
(statearr_19018[(1)] = (1));
return statearr_19018;
});
var state_machine__6353__auto____1 = (function (state_19004){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_19004);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e19019){if((e19019 instanceof Object))
{var ex__6356__auto__ = e19019;var statearr_19020_19028 = state_19004;(statearr_19020_19028[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19004);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19019;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19029 = state_19004;
state_19004 = G__19029;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_19004){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_19004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto__,load_chan,loaded_chan,___$1))
})();var state__6369__auto__ = (function (){var statearr_19021 = f__6368__auto__.call(null);(statearr_19021[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto__);
return statearr_19021;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto__,load_chan,loaded_chan,___$1))
);
return c__6367__auto__;
});
photosure.blog.t18981.prototype.om$core$IInitState$ = true;
photosure.blog.t18981.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"load-chan","load-chan",342107614),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"load-count","load-count",128885706),(0),new cljs.core.Keyword(null,"iter","iter",1308240283),(20)], null);
});
photosure.blog.t18981.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18983){var self__ = this;
var _18983__$1 = this;return self__.meta18982;
});
photosure.blog.t18981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18983,meta18982__$1){var self__ = this;
var _18983__$1 = this;return (new photosure.blog.t18981(self__.owner,self__.posts,self__.posts_view,meta18982__$1));
});
photosure.blog.__GT_t18981 = (function __GT_t18981(owner__$1,posts__$1,posts_view__$1,meta18982){return (new photosure.blog.t18981(owner__$1,posts__$1,posts_view__$1,meta18982));
});
}
return (new photosure.blog.t18981(owner,posts,posts_view,null));
});
photosure.blog.set_posts = (function set_posts(app,page){return photosure.util.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),("api/posts/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(page)),new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),(function (_){return om.core.update_BANG_.call(null,app,new cljs.core.Keyword(null,"posts","posts",760043164),_);
})], null));
});
photosure.blog.posts_nav = (function posts_nav(app,owner){if(typeof photosure.blog.t19035 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t19035 = (function (owner,app,posts_nav,meta19036){
this.owner = owner;
this.app = app;
this.posts_nav = posts_nav;
this.meta19036 = meta19036;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t19035.cljs$lang$type = true;
photosure.blog.t19035.cljs$lang$ctorStr = "photosure.blog/t19035";
photosure.blog.t19035.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t19035");
});
photosure.blog.t19035.prototype.om$core$IRenderState$ = true;
photosure.blog.t19035.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__19038){var self__ = this;
var map__19039 = p__19038;var map__19039__$1 = ((cljs.core.seq_QMARK_.call(null,map__19039))?cljs.core.apply.call(null,cljs.core.hash_map,map__19039):map__19039);var nav_chan = cljs.core.get.call(null,map__19039__$1,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980));var ___$1 = this;return React.DOM.div({"className": "posts-nav"},React.DOM.div({"onClick": ((function (___$1,map__19039,map__19039__$1,nav_chan){
return (function (___$2){return cljs.core.async.put_BANG_.call(null,nav_chan,"prev");
});})(___$1,map__19039,map__19039__$1,nav_chan))
, "className": "prev"}),React.DOM.div({"className": "top"},React.DOM.p({"className": "page"},(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.app) + (1)))),React.DOM.div({"onClick": ((function (___$1,map__19039,map__19039__$1,nav_chan){
return (function (___$2){return cljs.core.async.put_BANG_.call(null,nav_chan,"next");
});})(___$1,map__19039,map__19039__$1,nav_chan))
, "className": "next"}));
});
photosure.blog.t19035.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19037){var self__ = this;
var _19037__$1 = this;return self__.meta19036;
});
photosure.blog.t19035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19037,meta19036__$1){var self__ = this;
var _19037__$1 = this;return (new photosure.blog.t19035(self__.owner,self__.app,self__.posts_nav,meta19036__$1));
});
photosure.blog.__GT_t19035 = (function __GT_t19035(owner__$1,app__$1,posts_nav__$1,meta19036){return (new photosure.blog.t19035(owner__$1,app__$1,posts_nav__$1,meta19036));
});
}
return (new photosure.blog.t19035(owner,app,posts_nav,null));
});
photosure.blog.blog = (function blog(app,owner){if(typeof photosure.blog.t19110 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t19110 = (function (owner,app,blog,meta19111){
this.owner = owner;
this.app = app;
this.blog = blog;
this.meta19111 = meta19111;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t19110.cljs$lang$type = true;
photosure.blog.t19110.cljs$lang$ctorStr = "photosure.blog/t19110";
photosure.blog.t19110.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t19110");
});
photosure.blog.t19110.prototype.om$core$IRenderState$ = true;
photosure.blog.t19110.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__19113){var self__ = this;
var map__19114 = p__19113;var map__19114__$1 = ((cljs.core.seq_QMARK_.call(null,map__19114))?cljs.core.apply.call(null,cljs.core.hash_map,map__19114):map__19114);var scroll_top = cljs.core.get.call(null,map__19114__$1,new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100));var nav_chan = cljs.core.get.call(null,map__19114__$1,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980));var loaded_chan = cljs.core.get.call(null,map__19114__$1,new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448));var loaded = cljs.core.get.call(null,map__19114__$1,new cljs.core.Keyword(null,"loaded","loaded",-1246482293));var this$__$1 = this;return React.DOM.div({"id": "blog-gallery-container"},om.core.build.call(null,photosure.scrolldiv.scroll_div,self__.app,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"blog-gallery",new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),(0)], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),("blog-gallery"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(loaded)?" loaded":null))),new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),(0)], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.core.build.call(null,photosure.blog.posts_view,new cljs.core.Keyword(null,"posts","posts",760043164).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448),loaded_chan], null)], null)),om.core.build.call(null,photosure.blog.posts_nav,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980),nav_chan], null)], null))], null)], null)], null)));
});
photosure.blog.t19110.prototype.om$core$IWillMount$ = true;
photosure.blog.t19110.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;photosure.blog.set_posts.call(null,self__.app,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.app));
var loaded_chan_19178 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448));var c__6367__auto___19179 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto___19179,loaded_chan_19178,___$1){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto___19179,loaded_chan_19178,___$1){
return (function (state_19123){var state_val_19124 = (state_19123[(1)]);if((state_val_19124 === (4)))
{var inst_19117 = (state_19123[(2)]);var inst_19118 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true);var state_19123__$1 = (function (){var statearr_19125 = state_19123;(statearr_19125[(7)] = inst_19118);
(statearr_19125[(8)] = inst_19117);
return statearr_19125;
})();var statearr_19126_19180 = state_19123__$1;(statearr_19126_19180[(2)] = null);
(statearr_19126_19180[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19124 === (3)))
{var inst_19121 = (state_19123[(2)]);var state_19123__$1 = state_19123;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19123__$1,inst_19121);
} else
{if((state_val_19124 === (2)))
{var state_19123__$1 = state_19123;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19123__$1,(4),loaded_chan_19178);
} else
{if((state_val_19124 === (1)))
{var state_19123__$1 = state_19123;var statearr_19127_19181 = state_19123__$1;(statearr_19127_19181[(2)] = null);
(statearr_19127_19181[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6367__auto___19179,loaded_chan_19178,___$1))
;return ((function (switch__6352__auto__,c__6367__auto___19179,loaded_chan_19178,___$1){
return (function() {
var state_machine__6353__auto__ = null;
var state_machine__6353__auto____0 = (function (){var statearr_19131 = [null,null,null,null,null,null,null,null,null];(statearr_19131[(0)] = state_machine__6353__auto__);
(statearr_19131[(1)] = (1));
return statearr_19131;
});
var state_machine__6353__auto____1 = (function (state_19123){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_19123);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e19132){if((e19132 instanceof Object))
{var ex__6356__auto__ = e19132;var statearr_19133_19182 = state_19123;(statearr_19133_19182[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19123);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19132;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19183 = state_19123;
state_19123 = G__19183;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_19123){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_19123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto___19179,loaded_chan_19178,___$1))
})();var state__6369__auto__ = (function (){var statearr_19134 = f__6368__auto__.call(null);(statearr_19134[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto___19179);
return statearr_19134;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto___19179,loaded_chan_19178,___$1))
);
var nav_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980));var c__6367__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto__,nav_chan,___$1){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto__,nav_chan,___$1){
return (function (state_19159){var state_val_19160 = (state_19159[(1)]);if((state_val_19160 === (7)))
{var inst_19154 = (state_19159[(2)]);var state_19159__$1 = (function (){var statearr_19161 = state_19159;(statearr_19161[(7)] = inst_19154);
return statearr_19161;
})();var statearr_19162_19184 = state_19159__$1;(statearr_19162_19184[(2)] = null);
(statearr_19162_19184[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19160 === (6)))
{var inst_19137 = (state_19159[(8)]);var inst_19147 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),false);var inst_19148 = (function (){var cmd = inst_19137;return ((function (cmd,inst_19137,inst_19147,state_val_19160,c__6367__auto__,nav_chan,___$1){
return (function (p1__19041_SHARP_){return (p1__19041_SHARP_ + (1));
});
;})(cmd,inst_19137,inst_19147,state_val_19160,c__6367__auto__,nav_chan,___$1))
})();var inst_19149 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"page","page",849072397),inst_19148);var inst_19150 = cljs.core.deref.call(null,self__.app);var inst_19151 = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(inst_19150);var inst_19152 = photosure.blog.set_posts.call(null,self__.app,inst_19151);var state_19159__$1 = (function (){var statearr_19163 = state_19159;(statearr_19163[(9)] = inst_19149);
(statearr_19163[(10)] = inst_19147);
return statearr_19163;
})();var statearr_19164_19185 = state_19159__$1;(statearr_19164_19185[(2)] = inst_19152);
(statearr_19164_19185[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19160 === (5)))
{var inst_19137 = (state_19159[(8)]);var inst_19140 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),false);var inst_19141 = (function (){var cmd = inst_19137;return ((function (cmd,inst_19137,inst_19140,state_val_19160,c__6367__auto__,nav_chan,___$1){
return (function (p1__19040_SHARP_){return (p1__19040_SHARP_ - (1));
});
;})(cmd,inst_19137,inst_19140,state_val_19160,c__6367__auto__,nav_chan,___$1))
})();var inst_19142 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"page","page",849072397),inst_19141);var inst_19143 = cljs.core.deref.call(null,self__.app);var inst_19144 = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(inst_19143);var inst_19145 = photosure.blog.set_posts.call(null,self__.app,inst_19144);var state_19159__$1 = (function (){var statearr_19165 = state_19159;(statearr_19165[(11)] = inst_19140);
(statearr_19165[(12)] = inst_19142);
return statearr_19165;
})();var statearr_19166_19186 = state_19159__$1;(statearr_19166_19186[(2)] = inst_19145);
(statearr_19166_19186[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19160 === (4)))
{var inst_19137 = (state_19159[(8)]);var inst_19137__$1 = (state_19159[(2)]);var inst_19138 = cljs.core._EQ_.call(null,inst_19137__$1,"prev");var state_19159__$1 = (function (){var statearr_19167 = state_19159;(statearr_19167[(8)] = inst_19137__$1);
return statearr_19167;
})();if(inst_19138)
{var statearr_19168_19187 = state_19159__$1;(statearr_19168_19187[(1)] = (5));
} else
{var statearr_19169_19188 = state_19159__$1;(statearr_19169_19188[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19160 === (3)))
{var inst_19157 = (state_19159[(2)]);var state_19159__$1 = state_19159;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19159__$1,inst_19157);
} else
{if((state_val_19160 === (2)))
{var state_19159__$1 = state_19159;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19159__$1,(4),nav_chan);
} else
{if((state_val_19160 === (1)))
{var state_19159__$1 = state_19159;var statearr_19170_19189 = state_19159__$1;(statearr_19170_19189[(2)] = null);
(statearr_19170_19189[(1)] = (2));
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
var state_machine__6353__auto____0 = (function (){var statearr_19174 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19174[(0)] = state_machine__6353__auto__);
(statearr_19174[(1)] = (1));
return statearr_19174;
});
var state_machine__6353__auto____1 = (function (state_19159){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_19159);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e19175){if((e19175 instanceof Object))
{var ex__6356__auto__ = e19175;var statearr_19176_19190 = state_19159;(statearr_19176_19190[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19159);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19175;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19191 = state_19159;
state_19159 = G__19191;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_19159){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_19159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto__,nav_chan,___$1))
})();var state__6369__auto__ = (function (){var statearr_19177 = f__6368__auto__.call(null);(statearr_19177[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto__);
return statearr_19177;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto__,nav_chan,___$1))
);
return c__6367__auto__;
});
photosure.blog.t19110.prototype.om$core$IInitState$ = true;
photosure.blog.t19110.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),false,new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980),cljs.core.async.chan.call(null)], null);
});
photosure.blog.t19110.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19112){var self__ = this;
var _19112__$1 = this;return self__.meta19111;
});
photosure.blog.t19110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19112,meta19111__$1){var self__ = this;
var _19112__$1 = this;return (new photosure.blog.t19110(self__.owner,self__.app,self__.blog,meta19111__$1));
});
photosure.blog.__GT_t19110 = (function __GT_t19110(owner__$1,app__$1,blog__$1,meta19111){return (new photosure.blog.t19110(owner__$1,app__$1,blog__$1,meta19111));
});
}
return (new photosure.blog.t19110(owner,app,blog,null));
});
photosure.blog.render = (function render(){return om.core.root.call(null,photosure.blog.blog,photosure.blog.app_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("dynamic-content")], null));
});

//# sourceMappingURL=blog.js.map