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
photosure.blog.text_view = (function text_view(caption,owner){if(typeof photosure.blog.t14782 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t14782 = (function (owner,caption,text_view,meta14783){
this.owner = owner;
this.caption = caption;
this.text_view = text_view;
this.meta14783 = meta14783;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t14782.cljs$lang$type = true;
photosure.blog.t14782.cljs$lang$ctorStr = "photosure.blog/t14782";
photosure.blog.t14782.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t14782");
});
photosure.blog.t14782.prototype.om$core$IRender$ = true;
photosure.blog.t14782.prototype.om$core$IRender$render$arity$1 = (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return React.DOM.div({"dangerouslySetInnerHTML": {"__html": self__.caption}, "className": "caption"},null);
});
photosure.blog.t14782.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14784){var self__ = this;
var _14784__$1 = this;return self__.meta14783;
});
photosure.blog.t14782.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14784,meta14783__$1){var self__ = this;
var _14784__$1 = this;return (new photosure.blog.t14782(self__.owner,self__.caption,self__.text_view,meta14783__$1));
});
photosure.blog.__GT_t14782 = (function __GT_t14782(owner__$1,caption__$1,text_view__$1,meta14783){return (new photosure.blog.t14782(owner__$1,caption__$1,text_view__$1,meta14783));
});
}
return (new photosure.blog.t14782(owner,caption,text_view,null));
});
photosure.blog.text_post_view = (function text_post_view(p__14785,owner){var map__14790 = p__14785;var map__14790__$1 = ((cljs.core.seq_QMARK_.call(null,map__14790))?cljs.core.apply.call(null,cljs.core.hash_map,map__14790):map__14790);var id = cljs.core.get.call(null,map__14790__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var title = cljs.core.get.call(null,map__14790__$1,new cljs.core.Keyword(null,"title","title",636505583));var body = cljs.core.get.call(null,map__14790__$1,new cljs.core.Keyword(null,"body","body",-2049205669));if(typeof photosure.blog.t14791 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t14791 = (function (body,title,id,map__14790,owner,p__14785,text_post_view,meta14792){
this.body = body;
this.title = title;
this.id = id;
this.map__14790 = map__14790;
this.owner = owner;
this.p__14785 = p__14785;
this.text_post_view = text_post_view;
this.meta14792 = meta14792;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t14791.cljs$lang$type = true;
photosure.blog.t14791.cljs$lang$ctorStr = "photosure.blog/t14791";
photosure.blog.t14791.cljs$lang$ctorPrWriter = ((function (map__14790,map__14790__$1,id,title,body){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t14791");
});})(map__14790,map__14790__$1,id,title,body))
;
photosure.blog.t14791.prototype.om$core$IRender$ = true;
photosure.blog.t14791.prototype.om$core$IRender$render$arity$1 = ((function (map__14790,map__14790__$1,id,title,body){
return (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return React.DOM.div({"className": "post", "id": self__.id},React.DOM.h2({"className": "blog-title"},self__.title),om.core.build.call(null,photosure.blog.text_view,self__.body));
});})(map__14790,map__14790__$1,id,title,body))
;
photosure.blog.t14791.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__14790,map__14790__$1,id,title,body){
return (function (_14793){var self__ = this;
var _14793__$1 = this;return self__.meta14792;
});})(map__14790,map__14790__$1,id,title,body))
;
photosure.blog.t14791.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__14790,map__14790__$1,id,title,body){
return (function (_14793,meta14792__$1){var self__ = this;
var _14793__$1 = this;return (new photosure.blog.t14791(self__.body,self__.title,self__.id,self__.map__14790,self__.owner,self__.p__14785,self__.text_post_view,meta14792__$1));
});})(map__14790,map__14790__$1,id,title,body))
;
photosure.blog.__GT_t14791 = ((function (map__14790,map__14790__$1,id,title,body){
return (function __GT_t14791(body__$1,title__$1,id__$1,map__14790__$2,owner__$1,p__14785__$1,text_post_view__$1,meta14792){return (new photosure.blog.t14791(body__$1,title__$1,id__$1,map__14790__$2,owner__$1,p__14785__$1,text_post_view__$1,meta14792));
});})(map__14790,map__14790__$1,id,title,body))
;
}
return (new photosure.blog.t14791(body,title,id,map__14790__$1,owner,p__14785,text_post_view,null));
});
photosure.blog.photo_post_view = (function photo_post_view(p__14794,owner){var map__14801 = p__14794;var map__14801__$1 = ((cljs.core.seq_QMARK_.call(null,map__14801))?cljs.core.apply.call(null,cljs.core.hash_map,map__14801):map__14801);var id = cljs.core.get.call(null,map__14801__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var photos = cljs.core.get.call(null,map__14801__$1,new cljs.core.Keyword(null,"photos","photos",11691538));var caption = cljs.core.get.call(null,map__14801__$1,new cljs.core.Keyword(null,"caption","caption",-855383902));if(typeof photosure.blog.t14802 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t14802 = (function (caption,photos,id,map__14801,owner,p__14794,photo_post_view,meta14803){
this.caption = caption;
this.photos = photos;
this.id = id;
this.map__14801 = map__14801;
this.owner = owner;
this.p__14794 = p__14794;
this.photo_post_view = photo_post_view;
this.meta14803 = meta14803;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t14802.cljs$lang$type = true;
photosure.blog.t14802.cljs$lang$ctorStr = "photosure.blog/t14802";
photosure.blog.t14802.cljs$lang$ctorPrWriter = ((function (map__14801,map__14801__$1,id,photos,caption){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t14802");
});})(map__14801,map__14801__$1,id,photos,caption))
;
photosure.blog.t14802.prototype.om$core$IRenderState$ = true;
photosure.blog.t14802.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__14801,map__14801__$1,id,photos,caption){
return (function (this$,p__14805){var self__ = this;
var map__14806 = p__14805;var map__14806__$1 = ((cljs.core.seq_QMARK_.call(null,map__14806))?cljs.core.apply.call(null,cljs.core.hash_map,map__14806):map__14806);var loaded = cljs.core.get.call(null,map__14806__$1,new cljs.core.Keyword(null,"loaded","loaded",-1246482293));var this$__$1 = this;return React.DOM.div({"className": "post", "id": self__.id},cljs.core.apply.call(null,om.dom.div,{"className": ("blog-photo")},React.DOM.div({"className": ("loader "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not.call(null,loaded))?"on":"off"))), "id": "blah"}),cljs.core.map.call(null,((function (this$__$1,map__14806,map__14806__$1,loaded,map__14801,map__14801__$1,id,photos,caption){
return (function (photo){return React.DOM.img({"onLoad": ((function (this$__$1,map__14806,map__14806__$1,loaded,map__14801,map__14801__$1,id,photos,caption){
return (function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true);
});})(this$__$1,map__14806,map__14806__$1,loaded,map__14801,map__14801__$1,id,photos,caption))
, "className": ("blog-photo-img"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(loaded)?" loaded":null))), "src": photo});
});})(this$__$1,map__14806,map__14806__$1,loaded,map__14801,map__14801__$1,id,photos,caption))
,self__.photos)),om.core.build.call(null,photosure.blog.text_view,self__.caption));
});})(map__14801,map__14801__$1,id,photos,caption))
;
photosure.blog.t14802.prototype.om$core$IWillReceiveProps$ = true;
photosure.blog.t14802.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = ((function (map__14801,map__14801__$1,id,photos,caption){
return (function (this$,next_props){var self__ = this;
var this$__$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),false);
});})(map__14801,map__14801__$1,id,photos,caption))
;
photosure.blog.t14802.prototype.om$core$IInitState$ = true;
photosure.blog.t14802.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__14801,map__14801__$1,id,photos,caption){
return (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),false], null);
});})(map__14801,map__14801__$1,id,photos,caption))
;
photosure.blog.t14802.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__14801,map__14801__$1,id,photos,caption){
return (function (_14804){var self__ = this;
var _14804__$1 = this;return self__.meta14803;
});})(map__14801,map__14801__$1,id,photos,caption))
;
photosure.blog.t14802.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__14801,map__14801__$1,id,photos,caption){
return (function (_14804,meta14803__$1){var self__ = this;
var _14804__$1 = this;return (new photosure.blog.t14802(self__.caption,self__.photos,self__.id,self__.map__14801,self__.owner,self__.p__14794,self__.photo_post_view,meta14803__$1));
});})(map__14801,map__14801__$1,id,photos,caption))
;
photosure.blog.__GT_t14802 = ((function (map__14801,map__14801__$1,id,photos,caption){
return (function __GT_t14802(caption__$1,photos__$1,id__$1,map__14801__$2,owner__$1,p__14794__$1,photo_post_view__$1,meta14803){return (new photosure.blog.t14802(caption__$1,photos__$1,id__$1,map__14801__$2,owner__$1,p__14794__$1,photo_post_view__$1,meta14803));
});})(map__14801,map__14801__$1,id,photos,caption))
;
}
return (new photosure.blog.t14802(caption,photos,id,map__14801__$1,owner,p__14794,photo_post_view,null));
});
photosure.blog.post_view = (function post_view(p__14807,owner){var map__14812 = p__14807;var map__14812__$1 = ((cljs.core.seq_QMARK_.call(null,map__14812))?cljs.core.apply.call(null,cljs.core.hash_map,map__14812):map__14812);var post = map__14812__$1;var type = cljs.core.get.call(null,map__14812__$1,new cljs.core.Keyword(null,"type","type",1174270348));if(typeof photosure.blog.t14813 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t14813 = (function (type,post,map__14812,owner,p__14807,post_view,meta14814){
this.type = type;
this.post = post;
this.map__14812 = map__14812;
this.owner = owner;
this.p__14807 = p__14807;
this.post_view = post_view;
this.meta14814 = meta14814;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t14813.cljs$lang$type = true;
photosure.blog.t14813.cljs$lang$ctorStr = "photosure.blog/t14813";
photosure.blog.t14813.cljs$lang$ctorPrWriter = ((function (map__14812,map__14812__$1,post,type){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t14813");
});})(map__14812,map__14812__$1,post,type))
;
photosure.blog.t14813.prototype.om$core$IRender$ = true;
photosure.blog.t14813.prototype.om$core$IRender$render$arity$1 = ((function (map__14812,map__14812__$1,post,type){
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
});})(map__14812,map__14812__$1,post,type))
;
photosure.blog.t14813.prototype.om$core$IDidUpdate$ = true;
photosure.blog.t14813.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__14812,map__14812__$1,post,type){
return (function (this$,prev_props,prev_state){var self__ = this;
var this$__$1 = this;return cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"load-chan","load-chan",342107614)),"done!");
});})(map__14812,map__14812__$1,post,type))
;
photosure.blog.t14813.prototype.om$core$IDidMount$ = true;
photosure.blog.t14813.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__14812,map__14812__$1,post,type){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"load-chan","load-chan",342107614)),"done!");
});})(map__14812,map__14812__$1,post,type))
;
photosure.blog.t14813.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__14812,map__14812__$1,post,type){
return (function (_14815){var self__ = this;
var _14815__$1 = this;return self__.meta14814;
});})(map__14812,map__14812__$1,post,type))
;
photosure.blog.t14813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__14812,map__14812__$1,post,type){
return (function (_14815,meta14814__$1){var self__ = this;
var _14815__$1 = this;return (new photosure.blog.t14813(self__.type,self__.post,self__.map__14812,self__.owner,self__.p__14807,self__.post_view,meta14814__$1));
});})(map__14812,map__14812__$1,post,type))
;
photosure.blog.__GT_t14813 = ((function (map__14812,map__14812__$1,post,type){
return (function __GT_t14813(type__$1,post__$1,map__14812__$2,owner__$1,p__14807__$1,post_view__$1,meta14814){return (new photosure.blog.t14813(type__$1,post__$1,map__14812__$2,owner__$1,p__14807__$1,post_view__$1,meta14814));
});})(map__14812,map__14812__$1,post,type))
;
}
return (new photosure.blog.t14813(type,post,map__14812__$1,owner,p__14807,post_view,null));
});
photosure.blog.posts_view = (function posts_view(posts,owner){if(typeof photosure.blog.t14857 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t14857 = (function (owner,posts,posts_view,meta14858){
this.owner = owner;
this.posts = posts;
this.posts_view = posts_view;
this.meta14858 = meta14858;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t14857.cljs$lang$type = true;
photosure.blog.t14857.cljs$lang$ctorStr = "photosure.blog/t14857";
photosure.blog.t14857.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t14857");
});
photosure.blog.t14857.prototype.om$core$IRenderState$ = true;
photosure.blog.t14857.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__14860){var self__ = this;
var map__14861 = p__14860;var map__14861__$1 = ((cljs.core.seq_QMARK_.call(null,map__14861))?cljs.core.apply.call(null,cljs.core.hash_map,map__14861):map__14861);var load_chan = cljs.core.get.call(null,map__14861__$1,new cljs.core.Keyword(null,"load-chan","load-chan",342107614));var iter = cljs.core.get.call(null,map__14861__$1,new cljs.core.Keyword(null,"iter","iter",1308240283));var this$__$1 = this;return cljs.core.apply.call(null,om.dom.div,{"id": "post-list"},om.core.build_all.call(null,photosure.blog.post_view,cljs.core.take.call(null,iter,self__.posts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"load-chan","load-chan",342107614),load_chan], null)], null)));
});
photosure.blog.t14857.prototype.om$core$IWillMount$ = true;
photosure.blog.t14857.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var load_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"load-chan","load-chan",342107614));var loaded_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448));var c__6367__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto__,load_chan,loaded_chan,___$1){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto__,load_chan,loaded_chan,___$1){
return (function (state_14879){var state_val_14880 = (state_14879[(1)]);if((state_val_14880 === (7)))
{var inst_14874 = (state_14879[(2)]);var state_14879__$1 = (function (){var statearr_14881 = state_14879;(statearr_14881[(7)] = inst_14874);
return statearr_14881;
})();var statearr_14882_14897 = state_14879__$1;(statearr_14882_14897[(2)] = null);
(statearr_14882_14897[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14880 === (6)))
{var state_14879__$1 = state_14879;var statearr_14883_14898 = state_14879__$1;(statearr_14883_14898[(2)] = null);
(statearr_14883_14898[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14880 === (5)))
{var inst_14870 = cljs.core.async.put_BANG_.call(null,loaded_chan,"all done!");var inst_14871 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"load-count","load-count",128885706),(0));var state_14879__$1 = (function (){var statearr_14884 = state_14879;(statearr_14884[(8)] = inst_14870);
return statearr_14884;
})();var statearr_14885_14899 = state_14879__$1;(statearr_14885_14899[(2)] = inst_14871);
(statearr_14885_14899[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14880 === (4)))
{var inst_14864 = (state_14879[(2)]);var inst_14865 = (function (){var load = inst_14864;return ((function (load,inst_14864,state_val_14880,c__6367__auto__,load_chan,loaded_chan,___$1){
return (function (p1__14816_SHARP_){return (p1__14816_SHARP_ + (1));
});
;})(load,inst_14864,state_val_14880,c__6367__auto__,load_chan,loaded_chan,___$1))
})();var inst_14866 = om.core.update_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"load-count","load-count",128885706),inst_14865);var inst_14867 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"load-count","load-count",128885706));var inst_14868 = cljs.core._EQ_.call(null,inst_14867,(20));var state_14879__$1 = (function (){var statearr_14886 = state_14879;(statearr_14886[(9)] = inst_14866);
return statearr_14886;
})();if(inst_14868)
{var statearr_14887_14900 = state_14879__$1;(statearr_14887_14900[(1)] = (5));
} else
{var statearr_14888_14901 = state_14879__$1;(statearr_14888_14901[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14880 === (3)))
{var inst_14877 = (state_14879[(2)]);var state_14879__$1 = state_14879;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14879__$1,inst_14877);
} else
{if((state_val_14880 === (2)))
{var state_14879__$1 = state_14879;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14879__$1,(4),load_chan);
} else
{if((state_val_14880 === (1)))
{var state_14879__$1 = state_14879;var statearr_14889_14902 = state_14879__$1;(statearr_14889_14902[(2)] = null);
(statearr_14889_14902[(1)] = (2));
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
var state_machine__6353__auto____0 = (function (){var statearr_14893 = [null,null,null,null,null,null,null,null,null,null];(statearr_14893[(0)] = state_machine__6353__auto__);
(statearr_14893[(1)] = (1));
return statearr_14893;
});
var state_machine__6353__auto____1 = (function (state_14879){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_14879);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e14894){if((e14894 instanceof Object))
{var ex__6356__auto__ = e14894;var statearr_14895_14903 = state_14879;(statearr_14895_14903[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14879);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14894;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14904 = state_14879;
state_14879 = G__14904;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_14879){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_14879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto__,load_chan,loaded_chan,___$1))
})();var state__6369__auto__ = (function (){var statearr_14896 = f__6368__auto__.call(null);(statearr_14896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto__);
return statearr_14896;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto__,load_chan,loaded_chan,___$1))
);
return c__6367__auto__;
});
photosure.blog.t14857.prototype.om$core$IInitState$ = true;
photosure.blog.t14857.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"load-chan","load-chan",342107614),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"load-count","load-count",128885706),(0),new cljs.core.Keyword(null,"iter","iter",1308240283),(20)], null);
});
photosure.blog.t14857.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14859){var self__ = this;
var _14859__$1 = this;return self__.meta14858;
});
photosure.blog.t14857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14859,meta14858__$1){var self__ = this;
var _14859__$1 = this;return (new photosure.blog.t14857(self__.owner,self__.posts,self__.posts_view,meta14858__$1));
});
photosure.blog.__GT_t14857 = (function __GT_t14857(owner__$1,posts__$1,posts_view__$1,meta14858){return (new photosure.blog.t14857(owner__$1,posts__$1,posts_view__$1,meta14858));
});
}
return (new photosure.blog.t14857(owner,posts,posts_view,null));
});
photosure.blog.set_posts = (function set_posts(app,page){return photosure.util.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),("api/posts/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(page)),new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),(function (_){return om.core.update_BANG_.call(null,app,new cljs.core.Keyword(null,"posts","posts",760043164),_);
})], null));
});
photosure.blog.page_top_btn = (function page_top_btn(page,owner){if(typeof photosure.blog.t14910 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t14910 = (function (owner,page,page_top_btn,meta14911){
this.owner = owner;
this.page = page;
this.page_top_btn = page_top_btn;
this.meta14911 = meta14911;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t14910.cljs$lang$type = true;
photosure.blog.t14910.cljs$lang$ctorStr = "photosure.blog/t14910";
photosure.blog.t14910.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t14910");
});
photosure.blog.t14910.prototype.om$core$IRenderState$ = true;
photosure.blog.t14910.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__14913){var self__ = this;
var map__14914 = p__14913;var map__14914__$1 = ((cljs.core.seq_QMARK_.call(null,map__14914))?cljs.core.apply.call(null,cljs.core.hash_map,map__14914):map__14914);var nav_chan = cljs.core.get.call(null,map__14914__$1,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980));var className = cljs.core.get.call(null,map__14914__$1,new cljs.core.Keyword(null,"className","className",-1983287057));var text = cljs.core.get.call(null,map__14914__$1,new cljs.core.Keyword(null,"text","text",-1790561697));var this$__$1 = this;return React.DOM.div({"onClick": ((function (this$__$1,map__14914,map__14914__$1,nav_chan,className,text){
return (function (_){return cljs.core.async.put_BANG_.call(null,nav_chan,"top");
});})(this$__$1,map__14914,map__14914__$1,nav_chan,className,text))
, "onMouseLeave": ((function (this$__$1,map__14914,map__14914__$1,nav_chan,className,text){
return (function (_){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"text","text",-1790561697),(self__.page + (1)));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"className","className",-1983287057),"page");
return setTimeout(((function (this$__$1,map__14914,map__14914__$1,nav_chan,className,text){
return (function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"className","className",-1983287057),"page fadein");
});})(this$__$1,map__14914,map__14914__$1,nav_chan,className,text))
,(50));
});})(this$__$1,map__14914,map__14914__$1,nav_chan,className,text))
, "onMouseEnter": ((function (this$__$1,map__14914,map__14914__$1,nav_chan,className,text){
return (function (_){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"text","text",-1790561697),goog.string.unescapeEntities("&#xe600"));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"className","className",-1983287057),"icon-nav");
return setTimeout(((function (this$__$1,map__14914,map__14914__$1,nav_chan,className,text){
return (function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"className","className",-1983287057),"icon-nav fadein");
});})(this$__$1,map__14914,map__14914__$1,nav_chan,className,text))
,(50));
});})(this$__$1,map__14914,map__14914__$1,nav_chan,className,text))
, "className": "top"},React.DOM.p({"className": className, "id": "change"},text));
});
photosure.blog.t14910.prototype.om$core$IInitState$ = true;
photosure.blog.t14910.prototype.om$core$IInitState$init_state$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"page fadein"], null);
});
photosure.blog.t14910.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14912){var self__ = this;
var _14912__$1 = this;return self__.meta14911;
});
photosure.blog.t14910.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14912,meta14911__$1){var self__ = this;
var _14912__$1 = this;return (new photosure.blog.t14910(self__.owner,self__.page,self__.page_top_btn,meta14911__$1));
});
photosure.blog.__GT_t14910 = (function __GT_t14910(owner__$1,page__$1,page_top_btn__$1,meta14911){return (new photosure.blog.t14910(owner__$1,page__$1,page_top_btn__$1,meta14911));
});
}
return (new photosure.blog.t14910(owner,page,page_top_btn,null));
});
photosure.blog.posts_nav = (function posts_nav(app,owner){if(typeof photosure.blog.t14920 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t14920 = (function (owner,app,posts_nav,meta14921){
this.owner = owner;
this.app = app;
this.posts_nav = posts_nav;
this.meta14921 = meta14921;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t14920.cljs$lang$type = true;
photosure.blog.t14920.cljs$lang$ctorStr = "photosure.blog/t14920";
photosure.blog.t14920.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t14920");
});
photosure.blog.t14920.prototype.om$core$IRenderState$ = true;
photosure.blog.t14920.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__14923){var self__ = this;
var map__14924 = p__14923;var map__14924__$1 = ((cljs.core.seq_QMARK_.call(null,map__14924))?cljs.core.apply.call(null,cljs.core.hash_map,map__14924):map__14924);var nav_chan = cljs.core.get.call(null,map__14924__$1,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980));var ___$1 = this;return React.DOM.div({"className": "posts-nav"},React.DOM.div({"onClick": ((function (___$1,map__14924,map__14924__$1,nav_chan){
return (function (___$2){return cljs.core.async.put_BANG_.call(null,nav_chan,"prev");
});})(___$1,map__14924,map__14924__$1,nav_chan))
, "className": ("prev"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.app),(0)))?" disabled":null)))},React.DOM.p({"className": "icon-nav"},goog.string.unescapeEntities("&#xe602"))),om.core.build.call(null,photosure.blog.page_top_btn,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980),nav_chan,new cljs.core.Keyword(null,"text","text",-1790561697),(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.app) + (1))], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.app) + (1))], null)], null)),React.DOM.div({"onClick": ((function (___$1,map__14924,map__14924__$1,nav_chan){
return (function (___$2){return cljs.core.async.put_BANG_.call(null,nav_chan,"next");
});})(___$1,map__14924,map__14924__$1,nav_chan))
, "className": "next"},React.DOM.p({"className": "icon-nav"},goog.string.unescapeEntities("&#xe601"))));
});
photosure.blog.t14920.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14922){var self__ = this;
var _14922__$1 = this;return self__.meta14921;
});
photosure.blog.t14920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14922,meta14921__$1){var self__ = this;
var _14922__$1 = this;return (new photosure.blog.t14920(self__.owner,self__.app,self__.posts_nav,meta14921__$1));
});
photosure.blog.__GT_t14920 = (function __GT_t14920(owner__$1,app__$1,posts_nav__$1,meta14921){return (new photosure.blog.t14920(owner__$1,app__$1,posts_nav__$1,meta14921));
});
}
return (new photosure.blog.t14920(owner,app,posts_nav,null));
});
photosure.blog.blog = (function blog(app,owner){if(typeof photosure.blog.t15014 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t15014 = (function (owner,app,blog,meta15015){
this.owner = owner;
this.app = app;
this.blog = blog;
this.meta15015 = meta15015;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t15014.cljs$lang$type = true;
photosure.blog.t15014.cljs$lang$ctorStr = "photosure.blog/t15014";
photosure.blog.t15014.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t15014");
});
photosure.blog.t15014.prototype.om$core$IRenderState$ = true;
photosure.blog.t15014.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__15017){var self__ = this;
var map__15018 = p__15017;var map__15018__$1 = ((cljs.core.seq_QMARK_.call(null,map__15018))?cljs.core.apply.call(null,cljs.core.hash_map,map__15018):map__15018);var scroll_top = cljs.core.get.call(null,map__15018__$1,new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100));var nav_chan = cljs.core.get.call(null,map__15018__$1,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980));var loaded_chan = cljs.core.get.call(null,map__15018__$1,new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448));var loaded = cljs.core.get.call(null,map__15018__$1,new cljs.core.Keyword(null,"loaded","loaded",-1246482293));var this$__$1 = this;return React.DOM.div({"id": "blog-gallery-container"},om.core.build.call(null,photosure.scrolldiv.scroll_div,self__.app,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"blog-gallery",new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),(0)], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),("blog-gallery"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(loaded)?" loaded":null))),new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),scroll_top], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.core.build.call(null,photosure.blog.posts_view,new cljs.core.Keyword(null,"posts","posts",760043164).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448),loaded_chan], null)], null)),om.core.build.call(null,photosure.blog.posts_nav,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980),nav_chan], null)], null))], null)], null)], null)));
});
photosure.blog.t15014.prototype.om$core$IWillMount$ = true;
photosure.blog.t15014.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;photosure.blog.set_posts.call(null,self__.app,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.app));
var loaded_chan_15101 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448));var c__6367__auto___15102 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto___15102,loaded_chan_15101,___$1){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto___15102,loaded_chan_15101,___$1){
return (function (state_15027){var state_val_15028 = (state_15027[(1)]);if((state_val_15028 === (4)))
{var inst_15021 = (state_15027[(2)]);var inst_15022 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true);var state_15027__$1 = (function (){var statearr_15029 = state_15027;(statearr_15029[(7)] = inst_15022);
(statearr_15029[(8)] = inst_15021);
return statearr_15029;
})();var statearr_15030_15103 = state_15027__$1;(statearr_15030_15103[(2)] = null);
(statearr_15030_15103[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15028 === (3)))
{var inst_15025 = (state_15027[(2)]);var state_15027__$1 = state_15027;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15027__$1,inst_15025);
} else
{if((state_val_15028 === (2)))
{var state_15027__$1 = state_15027;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15027__$1,(4),loaded_chan_15101);
} else
{if((state_val_15028 === (1)))
{var state_15027__$1 = state_15027;var statearr_15031_15104 = state_15027__$1;(statearr_15031_15104[(2)] = null);
(statearr_15031_15104[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6367__auto___15102,loaded_chan_15101,___$1))
;return ((function (switch__6352__auto__,c__6367__auto___15102,loaded_chan_15101,___$1){
return (function() {
var state_machine__6353__auto__ = null;
var state_machine__6353__auto____0 = (function (){var statearr_15035 = [null,null,null,null,null,null,null,null,null];(statearr_15035[(0)] = state_machine__6353__auto__);
(statearr_15035[(1)] = (1));
return statearr_15035;
});
var state_machine__6353__auto____1 = (function (state_15027){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_15027);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e15036){if((e15036 instanceof Object))
{var ex__6356__auto__ = e15036;var statearr_15037_15105 = state_15027;(statearr_15037_15105[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15027);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15036;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15106 = state_15027;
state_15027 = G__15106;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_15027){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_15027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto___15102,loaded_chan_15101,___$1))
})();var state__6369__auto__ = (function (){var statearr_15038 = f__6368__auto__.call(null);(statearr_15038[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto___15102);
return statearr_15038;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto___15102,loaded_chan_15101,___$1))
);
var nav_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980));var c__6367__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto__,nav_chan,___$1){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto__,nav_chan,___$1){
return (function (state_15074){var state_val_15075 = (state_15074[(1)]);if((state_val_15075 === (7)))
{var inst_15069 = (state_15074[(2)]);var state_15074__$1 = (function (){var statearr_15076 = state_15074;(statearr_15076[(7)] = inst_15069);
return statearr_15076;
})();var statearr_15077_15107 = state_15074__$1;(statearr_15077_15107[(2)] = null);
(statearr_15077_15107[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15075 === (1)))
{var state_15074__$1 = state_15074;var statearr_15078_15108 = state_15074__$1;(statearr_15078_15108[(2)] = null);
(statearr_15078_15108[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15075 === (4)))
{var inst_15041 = (state_15074[(8)]);var inst_15041__$1 = (state_15074[(2)]);var inst_15042 = cljs.core._EQ_.call(null,inst_15041__$1,"prev");var state_15074__$1 = (function (){var statearr_15079 = state_15074;(statearr_15079[(8)] = inst_15041__$1);
return statearr_15079;
})();if(inst_15042)
{var statearr_15080_15109 = state_15074__$1;(statearr_15080_15109[(1)] = (5));
} else
{var statearr_15081_15110 = state_15074__$1;(statearr_15081_15110[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15075 === (13)))
{var inst_15065 = (state_15074[(2)]);var state_15074__$1 = state_15074;var statearr_15082_15111 = state_15074__$1;(statearr_15082_15111[(2)] = inst_15065);
(statearr_15082_15111[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15075 === (6)))
{var inst_15041 = (state_15074[(8)]);var inst_15051 = cljs.core._EQ_.call(null,inst_15041,"next");var state_15074__$1 = state_15074;if(inst_15051)
{var statearr_15083_15112 = state_15074__$1;(statearr_15083_15112[(1)] = (8));
} else
{var statearr_15084_15113 = state_15074__$1;(statearr_15084_15113[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15075 === (3)))
{var inst_15072 = (state_15074[(2)]);var state_15074__$1 = state_15074;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15074__$1,inst_15072);
} else
{if((state_val_15075 === (12)))
{var state_15074__$1 = state_15074;var statearr_15085_15114 = state_15074__$1;(statearr_15085_15114[(2)] = null);
(statearr_15085_15114[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15075 === (2)))
{var state_15074__$1 = state_15074;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15074__$1,(4),nav_chan);
} else
{if((state_val_15075 === (11)))
{var inst_15062 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),(0));var state_15074__$1 = state_15074;var statearr_15086_15115 = state_15074__$1;(statearr_15086_15115[(2)] = inst_15062);
(statearr_15086_15115[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15075 === (9)))
{var inst_15041 = (state_15074[(8)]);var inst_15060 = cljs.core._EQ_.call(null,inst_15041,"top");var state_15074__$1 = state_15074;if(inst_15060)
{var statearr_15087_15116 = state_15074__$1;(statearr_15087_15116[(1)] = (11));
} else
{var statearr_15088_15117 = state_15074__$1;(statearr_15088_15117[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15075 === (5)))
{var inst_15041 = (state_15074[(8)]);var inst_15044 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),false);var inst_15045 = (function (){var cmd = inst_15041;return ((function (cmd,inst_15041,inst_15044,state_val_15075,c__6367__auto__,nav_chan,___$1){
return (function (p1__14925_SHARP_){return (p1__14925_SHARP_ - (1));
});
;})(cmd,inst_15041,inst_15044,state_val_15075,c__6367__auto__,nav_chan,___$1))
})();var inst_15046 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"page","page",849072397),inst_15045);var inst_15047 = cljs.core.deref.call(null,self__.app);var inst_15048 = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(inst_15047);var inst_15049 = photosure.blog.set_posts.call(null,self__.app,inst_15048);var state_15074__$1 = (function (){var statearr_15089 = state_15074;(statearr_15089[(9)] = inst_15046);
(statearr_15089[(10)] = inst_15044);
return statearr_15089;
})();var statearr_15090_15118 = state_15074__$1;(statearr_15090_15118[(2)] = inst_15049);
(statearr_15090_15118[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15075 === (10)))
{var inst_15067 = (state_15074[(2)]);var state_15074__$1 = state_15074;var statearr_15091_15119 = state_15074__$1;(statearr_15091_15119[(2)] = inst_15067);
(statearr_15091_15119[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15075 === (8)))
{var inst_15041 = (state_15074[(8)]);var inst_15053 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),false);var inst_15054 = (function (){var cmd = inst_15041;return ((function (cmd,inst_15041,inst_15053,state_val_15075,c__6367__auto__,nav_chan,___$1){
return (function (p1__14926_SHARP_){return (p1__14926_SHARP_ + (1));
});
;})(cmd,inst_15041,inst_15053,state_val_15075,c__6367__auto__,nav_chan,___$1))
})();var inst_15055 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"page","page",849072397),inst_15054);var inst_15056 = cljs.core.deref.call(null,self__.app);var inst_15057 = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(inst_15056);var inst_15058 = photosure.blog.set_posts.call(null,self__.app,inst_15057);var state_15074__$1 = (function (){var statearr_15092 = state_15074;(statearr_15092[(11)] = inst_15053);
(statearr_15092[(12)] = inst_15055);
return statearr_15092;
})();var statearr_15093_15120 = state_15074__$1;(statearr_15093_15120[(2)] = inst_15058);
(statearr_15093_15120[(1)] = (10));
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
var state_machine__6353__auto____0 = (function (){var statearr_15097 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15097[(0)] = state_machine__6353__auto__);
(statearr_15097[(1)] = (1));
return statearr_15097;
});
var state_machine__6353__auto____1 = (function (state_15074){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_15074);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e15098){if((e15098 instanceof Object))
{var ex__6356__auto__ = e15098;var statearr_15099_15121 = state_15074;(statearr_15099_15121[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15074);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15098;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15122 = state_15074;
state_15074 = G__15122;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_15074){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_15074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto__,nav_chan,___$1))
})();var state__6369__auto__ = (function (){var statearr_15100 = f__6368__auto__.call(null);(statearr_15100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto__);
return statearr_15100;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto__,nav_chan,___$1))
);
return c__6367__auto__;
});
photosure.blog.t15014.prototype.om$core$IInitState$ = true;
photosure.blog.t15014.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),false,new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),(0)], null);
});
photosure.blog.t15014.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15016){var self__ = this;
var _15016__$1 = this;return self__.meta15015;
});
photosure.blog.t15014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15016,meta15015__$1){var self__ = this;
var _15016__$1 = this;return (new photosure.blog.t15014(self__.owner,self__.app,self__.blog,meta15015__$1));
});
photosure.blog.__GT_t15014 = (function __GT_t15014(owner__$1,app__$1,blog__$1,meta15015){return (new photosure.blog.t15014(owner__$1,app__$1,blog__$1,meta15015));
});
}
return (new photosure.blog.t15014(owner,app,blog,null));
});
photosure.blog.render = (function render(){return om.core.root.call(null,photosure.blog.blog,photosure.blog.app_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("dynamic-content")], null));
});

//# sourceMappingURL=blog.js.map