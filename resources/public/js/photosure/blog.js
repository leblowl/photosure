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
photosure.blog.text_view = (function text_view(caption,owner){if(typeof photosure.blog.t10565 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t10565 = (function (owner,caption,text_view,meta10566){
this.owner = owner;
this.caption = caption;
this.text_view = text_view;
this.meta10566 = meta10566;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t10565.cljs$lang$type = true;
photosure.blog.t10565.cljs$lang$ctorStr = "photosure.blog/t10565";
photosure.blog.t10565.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t10565");
});
photosure.blog.t10565.prototype.om$core$IRender$ = true;
photosure.blog.t10565.prototype.om$core$IRender$render$arity$1 = (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return React.DOM.div({"dangerouslySetInnerHTML": {"__html": self__.caption}, "className": "caption"},null);
});
photosure.blog.t10565.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10567){var self__ = this;
var _10567__$1 = this;return self__.meta10566;
});
photosure.blog.t10565.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10567,meta10566__$1){var self__ = this;
var _10567__$1 = this;return (new photosure.blog.t10565(self__.owner,self__.caption,self__.text_view,meta10566__$1));
});
photosure.blog.__GT_t10565 = (function __GT_t10565(owner__$1,caption__$1,text_view__$1,meta10566){return (new photosure.blog.t10565(owner__$1,caption__$1,text_view__$1,meta10566));
});
}
return (new photosure.blog.t10565(owner,caption,text_view,null));
});
photosure.blog.text_post_view = (function text_post_view(p__10568,owner){var map__10573 = p__10568;var map__10573__$1 = ((cljs.core.seq_QMARK_.call(null,map__10573))?cljs.core.apply.call(null,cljs.core.hash_map,map__10573):map__10573);var id = cljs.core.get.call(null,map__10573__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var title = cljs.core.get.call(null,map__10573__$1,new cljs.core.Keyword(null,"title","title",636505583));var body = cljs.core.get.call(null,map__10573__$1,new cljs.core.Keyword(null,"body","body",-2049205669));if(typeof photosure.blog.t10574 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t10574 = (function (body,title,id,map__10573,owner,p__10568,text_post_view,meta10575){
this.body = body;
this.title = title;
this.id = id;
this.map__10573 = map__10573;
this.owner = owner;
this.p__10568 = p__10568;
this.text_post_view = text_post_view;
this.meta10575 = meta10575;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t10574.cljs$lang$type = true;
photosure.blog.t10574.cljs$lang$ctorStr = "photosure.blog/t10574";
photosure.blog.t10574.cljs$lang$ctorPrWriter = ((function (map__10573,map__10573__$1,id,title,body){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t10574");
});})(map__10573,map__10573__$1,id,title,body))
;
photosure.blog.t10574.prototype.om$core$IRender$ = true;
photosure.blog.t10574.prototype.om$core$IRender$render$arity$1 = ((function (map__10573,map__10573__$1,id,title,body){
return (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return React.DOM.div({"className": "post", "id": self__.id},React.DOM.h2({"className": "blog-title"},self__.title),om.core.build.call(null,photosure.blog.text_view,self__.body));
});})(map__10573,map__10573__$1,id,title,body))
;
photosure.blog.t10574.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10573,map__10573__$1,id,title,body){
return (function (_10576){var self__ = this;
var _10576__$1 = this;return self__.meta10575;
});})(map__10573,map__10573__$1,id,title,body))
;
photosure.blog.t10574.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10573,map__10573__$1,id,title,body){
return (function (_10576,meta10575__$1){var self__ = this;
var _10576__$1 = this;return (new photosure.blog.t10574(self__.body,self__.title,self__.id,self__.map__10573,self__.owner,self__.p__10568,self__.text_post_view,meta10575__$1));
});})(map__10573,map__10573__$1,id,title,body))
;
photosure.blog.__GT_t10574 = ((function (map__10573,map__10573__$1,id,title,body){
return (function __GT_t10574(body__$1,title__$1,id__$1,map__10573__$2,owner__$1,p__10568__$1,text_post_view__$1,meta10575){return (new photosure.blog.t10574(body__$1,title__$1,id__$1,map__10573__$2,owner__$1,p__10568__$1,text_post_view__$1,meta10575));
});})(map__10573,map__10573__$1,id,title,body))
;
}
return (new photosure.blog.t10574(body,title,id,map__10573__$1,owner,p__10568,text_post_view,null));
});
photosure.blog.photo_post_view = (function photo_post_view(p__10577,owner){var map__10584 = p__10577;var map__10584__$1 = ((cljs.core.seq_QMARK_.call(null,map__10584))?cljs.core.apply.call(null,cljs.core.hash_map,map__10584):map__10584);var id = cljs.core.get.call(null,map__10584__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var photos = cljs.core.get.call(null,map__10584__$1,new cljs.core.Keyword(null,"photos","photos",11691538));var caption = cljs.core.get.call(null,map__10584__$1,new cljs.core.Keyword(null,"caption","caption",-855383902));if(typeof photosure.blog.t10585 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t10585 = (function (caption,photos,id,map__10584,owner,p__10577,photo_post_view,meta10586){
this.caption = caption;
this.photos = photos;
this.id = id;
this.map__10584 = map__10584;
this.owner = owner;
this.p__10577 = p__10577;
this.photo_post_view = photo_post_view;
this.meta10586 = meta10586;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t10585.cljs$lang$type = true;
photosure.blog.t10585.cljs$lang$ctorStr = "photosure.blog/t10585";
photosure.blog.t10585.cljs$lang$ctorPrWriter = ((function (map__10584,map__10584__$1,id,photos,caption){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t10585");
});})(map__10584,map__10584__$1,id,photos,caption))
;
photosure.blog.t10585.prototype.om$core$IRenderState$ = true;
photosure.blog.t10585.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__10584,map__10584__$1,id,photos,caption){
return (function (this$,p__10588){var self__ = this;
var map__10589 = p__10588;var map__10589__$1 = ((cljs.core.seq_QMARK_.call(null,map__10589))?cljs.core.apply.call(null,cljs.core.hash_map,map__10589):map__10589);var loaded = cljs.core.get.call(null,map__10589__$1,new cljs.core.Keyword(null,"loaded","loaded",-1246482293));var this$__$1 = this;return React.DOM.div({"className": "post", "id": self__.id},cljs.core.apply.call(null,om.dom.div,{"className": ("blog-photo")},React.DOM.div({"className": ("loader "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not.call(null,loaded))?"on":"off"))), "id": "blah"}),cljs.core.map.call(null,((function (this$__$1,map__10589,map__10589__$1,loaded,map__10584,map__10584__$1,id,photos,caption){
return (function (photo){return React.DOM.img({"onLoad": ((function (this$__$1,map__10589,map__10589__$1,loaded,map__10584,map__10584__$1,id,photos,caption){
return (function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true);
});})(this$__$1,map__10589,map__10589__$1,loaded,map__10584,map__10584__$1,id,photos,caption))
, "className": ("blog-photo-img"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(loaded)?" loaded":null))), "src": photo});
});})(this$__$1,map__10589,map__10589__$1,loaded,map__10584,map__10584__$1,id,photos,caption))
,self__.photos)),om.core.build.call(null,photosure.blog.text_view,self__.caption));
});})(map__10584,map__10584__$1,id,photos,caption))
;
photosure.blog.t10585.prototype.om$core$IWillReceiveProps$ = true;
photosure.blog.t10585.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = ((function (map__10584,map__10584__$1,id,photos,caption){
return (function (this$,next_props){var self__ = this;
var this$__$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),false);
});})(map__10584,map__10584__$1,id,photos,caption))
;
photosure.blog.t10585.prototype.om$core$IInitState$ = true;
photosure.blog.t10585.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__10584,map__10584__$1,id,photos,caption){
return (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),false], null);
});})(map__10584,map__10584__$1,id,photos,caption))
;
photosure.blog.t10585.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10584,map__10584__$1,id,photos,caption){
return (function (_10587){var self__ = this;
var _10587__$1 = this;return self__.meta10586;
});})(map__10584,map__10584__$1,id,photos,caption))
;
photosure.blog.t10585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10584,map__10584__$1,id,photos,caption){
return (function (_10587,meta10586__$1){var self__ = this;
var _10587__$1 = this;return (new photosure.blog.t10585(self__.caption,self__.photos,self__.id,self__.map__10584,self__.owner,self__.p__10577,self__.photo_post_view,meta10586__$1));
});})(map__10584,map__10584__$1,id,photos,caption))
;
photosure.blog.__GT_t10585 = ((function (map__10584,map__10584__$1,id,photos,caption){
return (function __GT_t10585(caption__$1,photos__$1,id__$1,map__10584__$2,owner__$1,p__10577__$1,photo_post_view__$1,meta10586){return (new photosure.blog.t10585(caption__$1,photos__$1,id__$1,map__10584__$2,owner__$1,p__10577__$1,photo_post_view__$1,meta10586));
});})(map__10584,map__10584__$1,id,photos,caption))
;
}
return (new photosure.blog.t10585(caption,photos,id,map__10584__$1,owner,p__10577,photo_post_view,null));
});
photosure.blog.post_view = (function post_view(p__10590,owner){var map__10595 = p__10590;var map__10595__$1 = ((cljs.core.seq_QMARK_.call(null,map__10595))?cljs.core.apply.call(null,cljs.core.hash_map,map__10595):map__10595);var post = map__10595__$1;var type = cljs.core.get.call(null,map__10595__$1,new cljs.core.Keyword(null,"type","type",1174270348));if(typeof photosure.blog.t10596 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t10596 = (function (type,post,map__10595,owner,p__10590,post_view,meta10597){
this.type = type;
this.post = post;
this.map__10595 = map__10595;
this.owner = owner;
this.p__10590 = p__10590;
this.post_view = post_view;
this.meta10597 = meta10597;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t10596.cljs$lang$type = true;
photosure.blog.t10596.cljs$lang$ctorStr = "photosure.blog/t10596";
photosure.blog.t10596.cljs$lang$ctorPrWriter = ((function (map__10595,map__10595__$1,post,type){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t10596");
});})(map__10595,map__10595__$1,post,type))
;
photosure.blog.t10596.prototype.om$core$IRender$ = true;
photosure.blog.t10596.prototype.om$core$IRender$render$arity$1 = ((function (map__10595,map__10595__$1,post,type){
return (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core._EQ_.call(null,self__.type,"photo"))
{return om.core.build.call(null,photosure.blog.photo_post_view,self__.post);
} else
{if(cljs.core._EQ_.call(null,self__.type,"text"))
{return om.core.build.call(null,photosure.blog.text_post_view,self__.post);
} else
{return null;
}
}
});})(map__10595,map__10595__$1,post,type))
;
photosure.blog.t10596.prototype.om$core$IDidUpdate$ = true;
photosure.blog.t10596.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__10595,map__10595__$1,post,type){
return (function (this$,prev_props,prev_state){var self__ = this;
var this$__$1 = this;return cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"load-chan","load-chan",342107614)),"done!");
});})(map__10595,map__10595__$1,post,type))
;
photosure.blog.t10596.prototype.om$core$IDidMount$ = true;
photosure.blog.t10596.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__10595,map__10595__$1,post,type){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"load-chan","load-chan",342107614)),"done!");
});})(map__10595,map__10595__$1,post,type))
;
photosure.blog.t10596.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10595,map__10595__$1,post,type){
return (function (_10598){var self__ = this;
var _10598__$1 = this;return self__.meta10597;
});})(map__10595,map__10595__$1,post,type))
;
photosure.blog.t10596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10595,map__10595__$1,post,type){
return (function (_10598,meta10597__$1){var self__ = this;
var _10598__$1 = this;return (new photosure.blog.t10596(self__.type,self__.post,self__.map__10595,self__.owner,self__.p__10590,self__.post_view,meta10597__$1));
});})(map__10595,map__10595__$1,post,type))
;
photosure.blog.__GT_t10596 = ((function (map__10595,map__10595__$1,post,type){
return (function __GT_t10596(type__$1,post__$1,map__10595__$2,owner__$1,p__10590__$1,post_view__$1,meta10597){return (new photosure.blog.t10596(type__$1,post__$1,map__10595__$2,owner__$1,p__10590__$1,post_view__$1,meta10597));
});})(map__10595,map__10595__$1,post,type))
;
}
return (new photosure.blog.t10596(type,post,map__10595__$1,owner,p__10590,post_view,null));
});
photosure.blog.posts_view = (function posts_view(posts,owner){if(typeof photosure.blog.t10640 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t10640 = (function (owner,posts,posts_view,meta10641){
this.owner = owner;
this.posts = posts;
this.posts_view = posts_view;
this.meta10641 = meta10641;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t10640.cljs$lang$type = true;
photosure.blog.t10640.cljs$lang$ctorStr = "photosure.blog/t10640";
photosure.blog.t10640.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t10640");
});
photosure.blog.t10640.prototype.om$core$IRenderState$ = true;
photosure.blog.t10640.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__10643){var self__ = this;
var map__10644 = p__10643;var map__10644__$1 = ((cljs.core.seq_QMARK_.call(null,map__10644))?cljs.core.apply.call(null,cljs.core.hash_map,map__10644):map__10644);var load_chan = cljs.core.get.call(null,map__10644__$1,new cljs.core.Keyword(null,"load-chan","load-chan",342107614));var iter = cljs.core.get.call(null,map__10644__$1,new cljs.core.Keyword(null,"iter","iter",1308240283));var this$__$1 = this;return cljs.core.apply.call(null,om.dom.div,{"id": "post-list"},om.core.build_all.call(null,photosure.blog.post_view,cljs.core.take.call(null,iter,self__.posts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"load-chan","load-chan",342107614),load_chan], null)], null)));
});
photosure.blog.t10640.prototype.om$core$IWillMount$ = true;
photosure.blog.t10640.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var load_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"load-chan","load-chan",342107614));var loaded_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448));var c__6367__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto__,load_chan,loaded_chan,___$1){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto__,load_chan,loaded_chan,___$1){
return (function (state_10662){var state_val_10663 = (state_10662[(1)]);if((state_val_10663 === (7)))
{var inst_10657 = (state_10662[(2)]);var state_10662__$1 = (function (){var statearr_10664 = state_10662;(statearr_10664[(7)] = inst_10657);
return statearr_10664;
})();var statearr_10665_10680 = state_10662__$1;(statearr_10665_10680[(2)] = null);
(statearr_10665_10680[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10663 === (6)))
{var state_10662__$1 = state_10662;var statearr_10666_10681 = state_10662__$1;(statearr_10666_10681[(2)] = null);
(statearr_10666_10681[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10663 === (5)))
{var inst_10653 = cljs.core.async.put_BANG_.call(null,loaded_chan,"all done!");var inst_10654 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"load-count","load-count",128885706),(0));var state_10662__$1 = (function (){var statearr_10667 = state_10662;(statearr_10667[(8)] = inst_10653);
return statearr_10667;
})();var statearr_10668_10682 = state_10662__$1;(statearr_10668_10682[(2)] = inst_10654);
(statearr_10668_10682[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10663 === (4)))
{var inst_10647 = (state_10662[(2)]);var inst_10648 = (function (){var load = inst_10647;return ((function (load,inst_10647,state_val_10663,c__6367__auto__,load_chan,loaded_chan,___$1){
return (function (p1__10599_SHARP_){return (p1__10599_SHARP_ + (1));
});
;})(load,inst_10647,state_val_10663,c__6367__auto__,load_chan,loaded_chan,___$1))
})();var inst_10649 = om.core.update_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"load-count","load-count",128885706),inst_10648);var inst_10650 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"load-count","load-count",128885706));var inst_10651 = cljs.core._EQ_.call(null,inst_10650,(20));var state_10662__$1 = (function (){var statearr_10669 = state_10662;(statearr_10669[(9)] = inst_10649);
return statearr_10669;
})();if(inst_10651)
{var statearr_10670_10683 = state_10662__$1;(statearr_10670_10683[(1)] = (5));
} else
{var statearr_10671_10684 = state_10662__$1;(statearr_10671_10684[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10663 === (3)))
{var inst_10660 = (state_10662[(2)]);var state_10662__$1 = state_10662;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10662__$1,inst_10660);
} else
{if((state_val_10663 === (2)))
{var state_10662__$1 = state_10662;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10662__$1,(4),load_chan);
} else
{if((state_val_10663 === (1)))
{var state_10662__$1 = state_10662;var statearr_10672_10685 = state_10662__$1;(statearr_10672_10685[(2)] = null);
(statearr_10672_10685[(1)] = (2));
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
var state_machine__6353__auto____0 = (function (){var statearr_10676 = [null,null,null,null,null,null,null,null,null,null];(statearr_10676[(0)] = state_machine__6353__auto__);
(statearr_10676[(1)] = (1));
return statearr_10676;
});
var state_machine__6353__auto____1 = (function (state_10662){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_10662);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e10677){if((e10677 instanceof Object))
{var ex__6356__auto__ = e10677;var statearr_10678_10686 = state_10662;(statearr_10678_10686[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10662);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10677;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10687 = state_10662;
state_10662 = G__10687;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_10662){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_10662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto__,load_chan,loaded_chan,___$1))
})();var state__6369__auto__ = (function (){var statearr_10679 = f__6368__auto__.call(null);(statearr_10679[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto__);
return statearr_10679;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto__,load_chan,loaded_chan,___$1))
);
return c__6367__auto__;
});
photosure.blog.t10640.prototype.om$core$IInitState$ = true;
photosure.blog.t10640.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"load-chan","load-chan",342107614),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"load-count","load-count",128885706),(0),new cljs.core.Keyword(null,"iter","iter",1308240283),(20)], null);
});
photosure.blog.t10640.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10642){var self__ = this;
var _10642__$1 = this;return self__.meta10641;
});
photosure.blog.t10640.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10642,meta10641__$1){var self__ = this;
var _10642__$1 = this;return (new photosure.blog.t10640(self__.owner,self__.posts,self__.posts_view,meta10641__$1));
});
photosure.blog.__GT_t10640 = (function __GT_t10640(owner__$1,posts__$1,posts_view__$1,meta10641){return (new photosure.blog.t10640(owner__$1,posts__$1,posts_view__$1,meta10641));
});
}
return (new photosure.blog.t10640(owner,posts,posts_view,null));
});
photosure.blog.set_posts = (function set_posts(app,page){return photosure.util.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),("api/posts/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(page)),new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),(function (_){return om.core.update_BANG_.call(null,app,new cljs.core.Keyword(null,"posts","posts",760043164),_);
})], null));
});
photosure.blog.page_top_btn = (function page_top_btn(page,owner){if(typeof photosure.blog.t10693 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t10693 = (function (owner,page,page_top_btn,meta10694){
this.owner = owner;
this.page = page;
this.page_top_btn = page_top_btn;
this.meta10694 = meta10694;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t10693.cljs$lang$type = true;
photosure.blog.t10693.cljs$lang$ctorStr = "photosure.blog/t10693";
photosure.blog.t10693.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t10693");
});
photosure.blog.t10693.prototype.om$core$IRenderState$ = true;
photosure.blog.t10693.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__10696){var self__ = this;
var map__10697 = p__10696;var map__10697__$1 = ((cljs.core.seq_QMARK_.call(null,map__10697))?cljs.core.apply.call(null,cljs.core.hash_map,map__10697):map__10697);var nav_chan = cljs.core.get.call(null,map__10697__$1,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980));var className = cljs.core.get.call(null,map__10697__$1,new cljs.core.Keyword(null,"className","className",-1983287057));var text = cljs.core.get.call(null,map__10697__$1,new cljs.core.Keyword(null,"text","text",-1790561697));var this$__$1 = this;return React.DOM.div({"onClick": ((function (this$__$1,map__10697,map__10697__$1,nav_chan,className,text){
return (function (_){return cljs.core.async.put_BANG_.call(null,nav_chan,"top");
});})(this$__$1,map__10697,map__10697__$1,nav_chan,className,text))
, "onMouseLeave": ((function (this$__$1,map__10697,map__10697__$1,nav_chan,className,text){
return (function (_){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"text","text",-1790561697),(self__.page + (1)));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"className","className",-1983287057),"page");
return setTimeout(((function (this$__$1,map__10697,map__10697__$1,nav_chan,className,text){
return (function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"className","className",-1983287057),"page fadein");
});})(this$__$1,map__10697,map__10697__$1,nav_chan,className,text))
,(50));
});})(this$__$1,map__10697,map__10697__$1,nav_chan,className,text))
, "onMouseEnter": ((function (this$__$1,map__10697,map__10697__$1,nav_chan,className,text){
return (function (_){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"text","text",-1790561697),goog.string.unescapeEntities("&#xe600"));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"className","className",-1983287057),"icon");
return setTimeout(((function (this$__$1,map__10697,map__10697__$1,nav_chan,className,text){
return (function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"className","className",-1983287057),"icon fadein");
});})(this$__$1,map__10697,map__10697__$1,nav_chan,className,text))
,(50));
});})(this$__$1,map__10697,map__10697__$1,nav_chan,className,text))
, "className": "top"},React.DOM.p({"className": className, "id": "change"},text));
});
photosure.blog.t10693.prototype.om$core$IInitState$ = true;
photosure.blog.t10693.prototype.om$core$IInitState$init_state$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"page fadein"], null);
});
photosure.blog.t10693.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10695){var self__ = this;
var _10695__$1 = this;return self__.meta10694;
});
photosure.blog.t10693.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10695,meta10694__$1){var self__ = this;
var _10695__$1 = this;return (new photosure.blog.t10693(self__.owner,self__.page,self__.page_top_btn,meta10694__$1));
});
photosure.blog.__GT_t10693 = (function __GT_t10693(owner__$1,page__$1,page_top_btn__$1,meta10694){return (new photosure.blog.t10693(owner__$1,page__$1,page_top_btn__$1,meta10694));
});
}
return (new photosure.blog.t10693(owner,page,page_top_btn,null));
});
photosure.blog.posts_nav = (function posts_nav(app,owner){if(typeof photosure.blog.t10703 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t10703 = (function (owner,app,posts_nav,meta10704){
this.owner = owner;
this.app = app;
this.posts_nav = posts_nav;
this.meta10704 = meta10704;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t10703.cljs$lang$type = true;
photosure.blog.t10703.cljs$lang$ctorStr = "photosure.blog/t10703";
photosure.blog.t10703.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t10703");
});
photosure.blog.t10703.prototype.om$core$IRenderState$ = true;
photosure.blog.t10703.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__10706){var self__ = this;
var map__10707 = p__10706;var map__10707__$1 = ((cljs.core.seq_QMARK_.call(null,map__10707))?cljs.core.apply.call(null,cljs.core.hash_map,map__10707):map__10707);var nav_chan = cljs.core.get.call(null,map__10707__$1,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980));var ___$1 = this;return React.DOM.div({"className": "posts-nav"},React.DOM.div({"onClick": ((function (___$1,map__10707,map__10707__$1,nav_chan){
return (function (___$2){return cljs.core.async.put_BANG_.call(null,nav_chan,"prev");
});})(___$1,map__10707,map__10707__$1,nav_chan))
, "className": ("prev"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.app),(0)))?" disabled":null)))},React.DOM.p({"className": "icon"},goog.string.unescapeEntities("&#xe602"))),om.core.build.call(null,photosure.blog.page_top_btn,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980),nav_chan,new cljs.core.Keyword(null,"text","text",-1790561697),(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.app) + (1))], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.app) + (1))], null)], null)),React.DOM.div({"onClick": ((function (___$1,map__10707,map__10707__$1,nav_chan){
return (function (___$2){return cljs.core.async.put_BANG_.call(null,nav_chan,"next");
});})(___$1,map__10707,map__10707__$1,nav_chan))
, "className": "next"},React.DOM.p({"className": "icon"},goog.string.unescapeEntities("&#xe601"))));
});
photosure.blog.t10703.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10705){var self__ = this;
var _10705__$1 = this;return self__.meta10704;
});
photosure.blog.t10703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10705,meta10704__$1){var self__ = this;
var _10705__$1 = this;return (new photosure.blog.t10703(self__.owner,self__.app,self__.posts_nav,meta10704__$1));
});
photosure.blog.__GT_t10703 = (function __GT_t10703(owner__$1,app__$1,posts_nav__$1,meta10704){return (new photosure.blog.t10703(owner__$1,app__$1,posts_nav__$1,meta10704));
});
}
return (new photosure.blog.t10703(owner,app,posts_nav,null));
});
photosure.blog.blog = (function blog(app,owner){if(typeof photosure.blog.t10797 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t10797 = (function (owner,app,blog,meta10798){
this.owner = owner;
this.app = app;
this.blog = blog;
this.meta10798 = meta10798;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t10797.cljs$lang$type = true;
photosure.blog.t10797.cljs$lang$ctorStr = "photosure.blog/t10797";
photosure.blog.t10797.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t10797");
});
photosure.blog.t10797.prototype.om$core$IRenderState$ = true;
photosure.blog.t10797.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__10800){var self__ = this;
var map__10801 = p__10800;var map__10801__$1 = ((cljs.core.seq_QMARK_.call(null,map__10801))?cljs.core.apply.call(null,cljs.core.hash_map,map__10801):map__10801);var scroll_top = cljs.core.get.call(null,map__10801__$1,new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100));var nav_chan = cljs.core.get.call(null,map__10801__$1,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980));var loaded_chan = cljs.core.get.call(null,map__10801__$1,new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448));var loaded = cljs.core.get.call(null,map__10801__$1,new cljs.core.Keyword(null,"loaded","loaded",-1246482293));var this$__$1 = this;return React.DOM.div({"id": "blog-gallery-container"},om.core.build.call(null,photosure.scrolldiv.scroll_div,self__.app,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"blog-gallery",new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),(0)], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),("blog-gallery"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(loaded)?" loaded":null))),new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),scroll_top], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.core.build.call(null,photosure.blog.posts_view,new cljs.core.Keyword(null,"posts","posts",760043164).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448),loaded_chan], null)], null)),om.core.build.call(null,photosure.blog.posts_nav,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980),nav_chan], null)], null))], null)], null)], null)));
});
photosure.blog.t10797.prototype.om$core$IWillMount$ = true;
photosure.blog.t10797.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;photosure.blog.set_posts.call(null,self__.app,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.app));
var loaded_chan_10884 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448));var c__6367__auto___10885 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto___10885,loaded_chan_10884,___$1){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto___10885,loaded_chan_10884,___$1){
return (function (state_10810){var state_val_10811 = (state_10810[(1)]);if((state_val_10811 === (4)))
{var inst_10804 = (state_10810[(2)]);var inst_10805 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true);var state_10810__$1 = (function (){var statearr_10812 = state_10810;(statearr_10812[(7)] = inst_10804);
(statearr_10812[(8)] = inst_10805);
return statearr_10812;
})();var statearr_10813_10886 = state_10810__$1;(statearr_10813_10886[(2)] = null);
(statearr_10813_10886[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10811 === (3)))
{var inst_10808 = (state_10810[(2)]);var state_10810__$1 = state_10810;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10810__$1,inst_10808);
} else
{if((state_val_10811 === (2)))
{var state_10810__$1 = state_10810;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10810__$1,(4),loaded_chan_10884);
} else
{if((state_val_10811 === (1)))
{var state_10810__$1 = state_10810;var statearr_10814_10887 = state_10810__$1;(statearr_10814_10887[(2)] = null);
(statearr_10814_10887[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6367__auto___10885,loaded_chan_10884,___$1))
;return ((function (switch__6352__auto__,c__6367__auto___10885,loaded_chan_10884,___$1){
return (function() {
var state_machine__6353__auto__ = null;
var state_machine__6353__auto____0 = (function (){var statearr_10818 = [null,null,null,null,null,null,null,null,null];(statearr_10818[(0)] = state_machine__6353__auto__);
(statearr_10818[(1)] = (1));
return statearr_10818;
});
var state_machine__6353__auto____1 = (function (state_10810){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_10810);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e10819){if((e10819 instanceof Object))
{var ex__6356__auto__ = e10819;var statearr_10820_10888 = state_10810;(statearr_10820_10888[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10810);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10819;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10889 = state_10810;
state_10810 = G__10889;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_10810){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_10810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto___10885,loaded_chan_10884,___$1))
})();var state__6369__auto__ = (function (){var statearr_10821 = f__6368__auto__.call(null);(statearr_10821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto___10885);
return statearr_10821;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto___10885,loaded_chan_10884,___$1))
);
var nav_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980));var c__6367__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto__,nav_chan,___$1){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto__,nav_chan,___$1){
return (function (state_10857){var state_val_10858 = (state_10857[(1)]);if((state_val_10858 === (7)))
{var inst_10852 = (state_10857[(2)]);var state_10857__$1 = (function (){var statearr_10859 = state_10857;(statearr_10859[(7)] = inst_10852);
return statearr_10859;
})();var statearr_10860_10890 = state_10857__$1;(statearr_10860_10890[(2)] = null);
(statearr_10860_10890[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10858 === (1)))
{var state_10857__$1 = state_10857;var statearr_10861_10891 = state_10857__$1;(statearr_10861_10891[(2)] = null);
(statearr_10861_10891[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10858 === (4)))
{var inst_10824 = (state_10857[(8)]);var inst_10824__$1 = (state_10857[(2)]);var inst_10825 = cljs.core._EQ_.call(null,inst_10824__$1,"prev");var state_10857__$1 = (function (){var statearr_10862 = state_10857;(statearr_10862[(8)] = inst_10824__$1);
return statearr_10862;
})();if(inst_10825)
{var statearr_10863_10892 = state_10857__$1;(statearr_10863_10892[(1)] = (5));
} else
{var statearr_10864_10893 = state_10857__$1;(statearr_10864_10893[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10858 === (13)))
{var inst_10848 = (state_10857[(2)]);var state_10857__$1 = state_10857;var statearr_10865_10894 = state_10857__$1;(statearr_10865_10894[(2)] = inst_10848);
(statearr_10865_10894[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10858 === (6)))
{var inst_10824 = (state_10857[(8)]);var inst_10834 = cljs.core._EQ_.call(null,inst_10824,"next");var state_10857__$1 = state_10857;if(inst_10834)
{var statearr_10866_10895 = state_10857__$1;(statearr_10866_10895[(1)] = (8));
} else
{var statearr_10867_10896 = state_10857__$1;(statearr_10867_10896[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10858 === (3)))
{var inst_10855 = (state_10857[(2)]);var state_10857__$1 = state_10857;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10857__$1,inst_10855);
} else
{if((state_val_10858 === (12)))
{var state_10857__$1 = state_10857;var statearr_10868_10897 = state_10857__$1;(statearr_10868_10897[(2)] = null);
(statearr_10868_10897[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10858 === (2)))
{var state_10857__$1 = state_10857;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10857__$1,(4),nav_chan);
} else
{if((state_val_10858 === (11)))
{var inst_10845 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),(0));var state_10857__$1 = state_10857;var statearr_10869_10898 = state_10857__$1;(statearr_10869_10898[(2)] = inst_10845);
(statearr_10869_10898[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10858 === (9)))
{var inst_10824 = (state_10857[(8)]);var inst_10843 = cljs.core._EQ_.call(null,inst_10824,"top");var state_10857__$1 = state_10857;if(inst_10843)
{var statearr_10870_10899 = state_10857__$1;(statearr_10870_10899[(1)] = (11));
} else
{var statearr_10871_10900 = state_10857__$1;(statearr_10871_10900[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10858 === (5)))
{var inst_10824 = (state_10857[(8)]);var inst_10827 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),false);var inst_10828 = (function (){var cmd = inst_10824;return ((function (cmd,inst_10824,inst_10827,state_val_10858,c__6367__auto__,nav_chan,___$1){
return (function (p1__10708_SHARP_){return (p1__10708_SHARP_ - (1));
});
;})(cmd,inst_10824,inst_10827,state_val_10858,c__6367__auto__,nav_chan,___$1))
})();var inst_10829 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"page","page",849072397),inst_10828);var inst_10830 = cljs.core.deref.call(null,self__.app);var inst_10831 = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(inst_10830);var inst_10832 = photosure.blog.set_posts.call(null,self__.app,inst_10831);var state_10857__$1 = (function (){var statearr_10872 = state_10857;(statearr_10872[(9)] = inst_10829);
(statearr_10872[(10)] = inst_10827);
return statearr_10872;
})();var statearr_10873_10901 = state_10857__$1;(statearr_10873_10901[(2)] = inst_10832);
(statearr_10873_10901[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10858 === (10)))
{var inst_10850 = (state_10857[(2)]);var state_10857__$1 = state_10857;var statearr_10874_10902 = state_10857__$1;(statearr_10874_10902[(2)] = inst_10850);
(statearr_10874_10902[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10858 === (8)))
{var inst_10824 = (state_10857[(8)]);var inst_10836 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),false);var inst_10837 = (function (){var cmd = inst_10824;return ((function (cmd,inst_10824,inst_10836,state_val_10858,c__6367__auto__,nav_chan,___$1){
return (function (p1__10709_SHARP_){return (p1__10709_SHARP_ + (1));
});
;})(cmd,inst_10824,inst_10836,state_val_10858,c__6367__auto__,nav_chan,___$1))
})();var inst_10838 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"page","page",849072397),inst_10837);var inst_10839 = cljs.core.deref.call(null,self__.app);var inst_10840 = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(inst_10839);var inst_10841 = photosure.blog.set_posts.call(null,self__.app,inst_10840);var state_10857__$1 = (function (){var statearr_10875 = state_10857;(statearr_10875[(11)] = inst_10838);
(statearr_10875[(12)] = inst_10836);
return statearr_10875;
})();var statearr_10876_10903 = state_10857__$1;(statearr_10876_10903[(2)] = inst_10841);
(statearr_10876_10903[(1)] = (10));
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
var state_machine__6353__auto____0 = (function (){var statearr_10880 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10880[(0)] = state_machine__6353__auto__);
(statearr_10880[(1)] = (1));
return statearr_10880;
});
var state_machine__6353__auto____1 = (function (state_10857){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_10857);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e10881){if((e10881 instanceof Object))
{var ex__6356__auto__ = e10881;var statearr_10882_10904 = state_10857;(statearr_10882_10904[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10857);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10881;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10905 = state_10857;
state_10857 = G__10905;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_10857){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_10857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto__,nav_chan,___$1))
})();var state__6369__auto__ = (function (){var statearr_10883 = f__6368__auto__.call(null);(statearr_10883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto__);
return statearr_10883;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto__,nav_chan,___$1))
);
return c__6367__auto__;
});
photosure.blog.t10797.prototype.om$core$IInitState$ = true;
photosure.blog.t10797.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),false,new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),(0)], null);
});
photosure.blog.t10797.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10799){var self__ = this;
var _10799__$1 = this;return self__.meta10798;
});
photosure.blog.t10797.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10799,meta10798__$1){var self__ = this;
var _10799__$1 = this;return (new photosure.blog.t10797(self__.owner,self__.app,self__.blog,meta10798__$1));
});
photosure.blog.__GT_t10797 = (function __GT_t10797(owner__$1,app__$1,blog__$1,meta10798){return (new photosure.blog.t10797(owner__$1,app__$1,blog__$1,meta10798));
});
}
return (new photosure.blog.t10797(owner,app,blog,null));
});
photosure.blog.render = (function render(){return om.core.root.call(null,photosure.blog.blog,photosure.blog.app_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("dynamic-content")], null));
});

//# sourceMappingURL=blog.js.map