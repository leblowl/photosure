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
photosure.blog.text_view = (function text_view(caption,owner){if(typeof photosure.blog.t10635 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t10635 = (function (owner,caption,text_view,meta10636){
this.owner = owner;
this.caption = caption;
this.text_view = text_view;
this.meta10636 = meta10636;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t10635.cljs$lang$type = true;
photosure.blog.t10635.cljs$lang$ctorStr = "photosure.blog/t10635";
photosure.blog.t10635.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t10635");
});
photosure.blog.t10635.prototype.om$core$IRender$ = true;
photosure.blog.t10635.prototype.om$core$IRender$render$arity$1 = (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return React.DOM.div({"dangerouslySetInnerHTML": {"__html": self__.caption}, "className": "caption"},null);
});
photosure.blog.t10635.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10637){var self__ = this;
var _10637__$1 = this;return self__.meta10636;
});
photosure.blog.t10635.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10637,meta10636__$1){var self__ = this;
var _10637__$1 = this;return (new photosure.blog.t10635(self__.owner,self__.caption,self__.text_view,meta10636__$1));
});
photosure.blog.__GT_t10635 = (function __GT_t10635(owner__$1,caption__$1,text_view__$1,meta10636){return (new photosure.blog.t10635(owner__$1,caption__$1,text_view__$1,meta10636));
});
}
return (new photosure.blog.t10635(owner,caption,text_view,null));
});
photosure.blog.text_post_view = (function text_post_view(p__10638,owner){var map__10643 = p__10638;var map__10643__$1 = ((cljs.core.seq_QMARK_.call(null,map__10643))?cljs.core.apply.call(null,cljs.core.hash_map,map__10643):map__10643);var id = cljs.core.get.call(null,map__10643__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var title = cljs.core.get.call(null,map__10643__$1,new cljs.core.Keyword(null,"title","title",636505583));var body = cljs.core.get.call(null,map__10643__$1,new cljs.core.Keyword(null,"body","body",-2049205669));if(typeof photosure.blog.t10644 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t10644 = (function (body,title,id,map__10643,owner,p__10638,text_post_view,meta10645){
this.body = body;
this.title = title;
this.id = id;
this.map__10643 = map__10643;
this.owner = owner;
this.p__10638 = p__10638;
this.text_post_view = text_post_view;
this.meta10645 = meta10645;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t10644.cljs$lang$type = true;
photosure.blog.t10644.cljs$lang$ctorStr = "photosure.blog/t10644";
photosure.blog.t10644.cljs$lang$ctorPrWriter = ((function (map__10643,map__10643__$1,id,title,body){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t10644");
});})(map__10643,map__10643__$1,id,title,body))
;
photosure.blog.t10644.prototype.om$core$IRender$ = true;
photosure.blog.t10644.prototype.om$core$IRender$render$arity$1 = ((function (map__10643,map__10643__$1,id,title,body){
return (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return React.DOM.div({"className": "post", "id": self__.id},React.DOM.h2({"className": "blog-title"},self__.title),om.core.build.call(null,photosure.blog.text_view,self__.body));
});})(map__10643,map__10643__$1,id,title,body))
;
photosure.blog.t10644.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10643,map__10643__$1,id,title,body){
return (function (_10646){var self__ = this;
var _10646__$1 = this;return self__.meta10645;
});})(map__10643,map__10643__$1,id,title,body))
;
photosure.blog.t10644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10643,map__10643__$1,id,title,body){
return (function (_10646,meta10645__$1){var self__ = this;
var _10646__$1 = this;return (new photosure.blog.t10644(self__.body,self__.title,self__.id,self__.map__10643,self__.owner,self__.p__10638,self__.text_post_view,meta10645__$1));
});})(map__10643,map__10643__$1,id,title,body))
;
photosure.blog.__GT_t10644 = ((function (map__10643,map__10643__$1,id,title,body){
return (function __GT_t10644(body__$1,title__$1,id__$1,map__10643__$2,owner__$1,p__10638__$1,text_post_view__$1,meta10645){return (new photosure.blog.t10644(body__$1,title__$1,id__$1,map__10643__$2,owner__$1,p__10638__$1,text_post_view__$1,meta10645));
});})(map__10643,map__10643__$1,id,title,body))
;
}
return (new photosure.blog.t10644(body,title,id,map__10643__$1,owner,p__10638,text_post_view,null));
});
photosure.blog.photo_post_view = (function photo_post_view(p__10647,owner){var map__10652 = p__10647;var map__10652__$1 = ((cljs.core.seq_QMARK_.call(null,map__10652))?cljs.core.apply.call(null,cljs.core.hash_map,map__10652):map__10652);var id = cljs.core.get.call(null,map__10652__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var photos = cljs.core.get.call(null,map__10652__$1,new cljs.core.Keyword(null,"photos","photos",11691538));var caption = cljs.core.get.call(null,map__10652__$1,new cljs.core.Keyword(null,"caption","caption",-855383902));if(typeof photosure.blog.t10653 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t10653 = (function (caption,photos,id,map__10652,owner,p__10647,photo_post_view,meta10654){
this.caption = caption;
this.photos = photos;
this.id = id;
this.map__10652 = map__10652;
this.owner = owner;
this.p__10647 = p__10647;
this.photo_post_view = photo_post_view;
this.meta10654 = meta10654;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t10653.cljs$lang$type = true;
photosure.blog.t10653.cljs$lang$ctorStr = "photosure.blog/t10653";
photosure.blog.t10653.cljs$lang$ctorPrWriter = ((function (map__10652,map__10652__$1,id,photos,caption){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t10653");
});})(map__10652,map__10652__$1,id,photos,caption))
;
photosure.blog.t10653.prototype.om$core$IRender$ = true;
photosure.blog.t10653.prototype.om$core$IRender$render$arity$1 = ((function (map__10652,map__10652__$1,id,photos,caption){
return (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return React.DOM.div({"className": "post", "id": self__.id},cljs.core.apply.call(null,om.dom.div,{"className": "blog-photo"},cljs.core.map.call(null,((function (this__5143__auto____$1,map__10652,map__10652__$1,id,photos,caption){
return (function (photo){return React.DOM.div(null,"placeholder");
});})(this__5143__auto____$1,map__10652,map__10652__$1,id,photos,caption))
,self__.photos)),om.core.build.call(null,photosure.blog.text_view,self__.caption));
});})(map__10652,map__10652__$1,id,photos,caption))
;
photosure.blog.t10653.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10652,map__10652__$1,id,photos,caption){
return (function (_10655){var self__ = this;
var _10655__$1 = this;return self__.meta10654;
});})(map__10652,map__10652__$1,id,photos,caption))
;
photosure.blog.t10653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10652,map__10652__$1,id,photos,caption){
return (function (_10655,meta10654__$1){var self__ = this;
var _10655__$1 = this;return (new photosure.blog.t10653(self__.caption,self__.photos,self__.id,self__.map__10652,self__.owner,self__.p__10647,self__.photo_post_view,meta10654__$1));
});})(map__10652,map__10652__$1,id,photos,caption))
;
photosure.blog.__GT_t10653 = ((function (map__10652,map__10652__$1,id,photos,caption){
return (function __GT_t10653(caption__$1,photos__$1,id__$1,map__10652__$2,owner__$1,p__10647__$1,photo_post_view__$1,meta10654){return (new photosure.blog.t10653(caption__$1,photos__$1,id__$1,map__10652__$2,owner__$1,p__10647__$1,photo_post_view__$1,meta10654));
});})(map__10652,map__10652__$1,id,photos,caption))
;
}
return (new photosure.blog.t10653(caption,photos,id,map__10652__$1,owner,p__10647,photo_post_view,null));
});
photosure.blog.post_view = (function post_view(p__10656,owner){var map__10661 = p__10656;var map__10661__$1 = ((cljs.core.seq_QMARK_.call(null,map__10661))?cljs.core.apply.call(null,cljs.core.hash_map,map__10661):map__10661);var post = map__10661__$1;var type = cljs.core.get.call(null,map__10661__$1,new cljs.core.Keyword(null,"type","type",1174270348));if(typeof photosure.blog.t10662 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t10662 = (function (type,post,map__10661,owner,p__10656,post_view,meta10663){
this.type = type;
this.post = post;
this.map__10661 = map__10661;
this.owner = owner;
this.p__10656 = p__10656;
this.post_view = post_view;
this.meta10663 = meta10663;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t10662.cljs$lang$type = true;
photosure.blog.t10662.cljs$lang$ctorStr = "photosure.blog/t10662";
photosure.blog.t10662.cljs$lang$ctorPrWriter = ((function (map__10661,map__10661__$1,post,type){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t10662");
});})(map__10661,map__10661__$1,post,type))
;
photosure.blog.t10662.prototype.om$core$IRender$ = true;
photosure.blog.t10662.prototype.om$core$IRender$render$arity$1 = ((function (map__10661,map__10661__$1,post,type){
return (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core._EQ_.call(null,self__.type,"photo"))
{return om.core.build.call(null,photosure.blog.photo_post_view,self__.post);
} else
{return om.core.build.call(null,photosure.blog.text_post_view,self__.post);
}
});})(map__10661,map__10661__$1,post,type))
;
photosure.blog.t10662.prototype.om$core$IDidUpdate$ = true;
photosure.blog.t10662.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__10661,map__10661__$1,post,type){
return (function (this$,prev_props,prev_state){var self__ = this;
var this$__$1 = this;return cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"load-chan","load-chan",342107614)),"done!");
});})(map__10661,map__10661__$1,post,type))
;
photosure.blog.t10662.prototype.om$core$IDidMount$ = true;
photosure.blog.t10662.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__10661,map__10661__$1,post,type){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"load-chan","load-chan",342107614)),"done!");
});})(map__10661,map__10661__$1,post,type))
;
photosure.blog.t10662.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10661,map__10661__$1,post,type){
return (function (_10664){var self__ = this;
var _10664__$1 = this;return self__.meta10663;
});})(map__10661,map__10661__$1,post,type))
;
photosure.blog.t10662.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10661,map__10661__$1,post,type){
return (function (_10664,meta10663__$1){var self__ = this;
var _10664__$1 = this;return (new photosure.blog.t10662(self__.type,self__.post,self__.map__10661,self__.owner,self__.p__10656,self__.post_view,meta10663__$1));
});})(map__10661,map__10661__$1,post,type))
;
photosure.blog.__GT_t10662 = ((function (map__10661,map__10661__$1,post,type){
return (function __GT_t10662(type__$1,post__$1,map__10661__$2,owner__$1,p__10656__$1,post_view__$1,meta10663){return (new photosure.blog.t10662(type__$1,post__$1,map__10661__$2,owner__$1,p__10656__$1,post_view__$1,meta10663));
});})(map__10661,map__10661__$1,post,type))
;
}
return (new photosure.blog.t10662(type,post,map__10661__$1,owner,p__10656,post_view,null));
});
photosure.blog.posts_view = (function posts_view(posts,owner){if(typeof photosure.blog.t10707 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t10707 = (function (owner,posts,posts_view,meta10708){
this.owner = owner;
this.posts = posts;
this.posts_view = posts_view;
this.meta10708 = meta10708;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t10707.cljs$lang$type = true;
photosure.blog.t10707.cljs$lang$ctorStr = "photosure.blog/t10707";
photosure.blog.t10707.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t10707");
});
photosure.blog.t10707.prototype.om$core$IRenderState$ = true;
photosure.blog.t10707.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__10710){var self__ = this;
var map__10711 = p__10710;var map__10711__$1 = ((cljs.core.seq_QMARK_.call(null,map__10711))?cljs.core.apply.call(null,cljs.core.hash_map,map__10711):map__10711);var load_chan = cljs.core.get.call(null,map__10711__$1,new cljs.core.Keyword(null,"load-chan","load-chan",342107614));var iter = cljs.core.get.call(null,map__10711__$1,new cljs.core.Keyword(null,"iter","iter",1308240283));var this$__$1 = this;return cljs.core.apply.call(null,om.dom.div,{"id": "post-list"},om.core.build_all.call(null,photosure.blog.post_view,cljs.core.take.call(null,iter,self__.posts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"load-chan","load-chan",342107614),load_chan], null)], null)));
});
photosure.blog.t10707.prototype.om$core$IWillMount$ = true;
photosure.blog.t10707.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var load_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"load-chan","load-chan",342107614));var loaded_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448));var c__6367__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto__,load_chan,loaded_chan,___$1){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto__,load_chan,loaded_chan,___$1){
return (function (state_10730){var state_val_10731 = (state_10730[(1)]);if((state_val_10731 === (7)))
{var inst_10725 = (state_10730[(2)]);var state_10730__$1 = (function (){var statearr_10732 = state_10730;(statearr_10732[(7)] = inst_10725);
return statearr_10732;
})();var statearr_10733_10748 = state_10730__$1;(statearr_10733_10748[(2)] = null);
(statearr_10733_10748[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10731 === (6)))
{var state_10730__$1 = state_10730;var statearr_10734_10749 = state_10730__$1;(statearr_10734_10749[(2)] = null);
(statearr_10734_10749[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10731 === (5)))
{var inst_10720 = cljs.core.async.put_BANG_.call(null,loaded_chan,"all done!");var inst_10721 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"load-count","load-count",128885706),(0));var inst_10722 = console.log("loaded");var state_10730__$1 = (function (){var statearr_10735 = state_10730;(statearr_10735[(8)] = inst_10720);
(statearr_10735[(9)] = inst_10721);
return statearr_10735;
})();var statearr_10736_10750 = state_10730__$1;(statearr_10736_10750[(2)] = inst_10722);
(statearr_10736_10750[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10731 === (4)))
{var inst_10714 = (state_10730[(2)]);var inst_10715 = (function (){var load = inst_10714;return ((function (load,inst_10714,state_val_10731,c__6367__auto__,load_chan,loaded_chan,___$1){
return (function (p1__10665_SHARP_){return (p1__10665_SHARP_ + (1));
});
;})(load,inst_10714,state_val_10731,c__6367__auto__,load_chan,loaded_chan,___$1))
})();var inst_10716 = om.core.update_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"load-count","load-count",128885706),inst_10715);var inst_10717 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"load-count","load-count",128885706));var inst_10718 = cljs.core._EQ_.call(null,inst_10717,(20));var state_10730__$1 = (function (){var statearr_10737 = state_10730;(statearr_10737[(10)] = inst_10716);
return statearr_10737;
})();if(inst_10718)
{var statearr_10738_10751 = state_10730__$1;(statearr_10738_10751[(1)] = (5));
} else
{var statearr_10739_10752 = state_10730__$1;(statearr_10739_10752[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10731 === (3)))
{var inst_10728 = (state_10730[(2)]);var state_10730__$1 = state_10730;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10730__$1,inst_10728);
} else
{if((state_val_10731 === (2)))
{var state_10730__$1 = state_10730;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10730__$1,(4),load_chan);
} else
{if((state_val_10731 === (1)))
{var state_10730__$1 = state_10730;var statearr_10740_10753 = state_10730__$1;(statearr_10740_10753[(2)] = null);
(statearr_10740_10753[(1)] = (2));
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
var state_machine__6353__auto____0 = (function (){var statearr_10744 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_10744[(0)] = state_machine__6353__auto__);
(statearr_10744[(1)] = (1));
return statearr_10744;
});
var state_machine__6353__auto____1 = (function (state_10730){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_10730);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e10745){if((e10745 instanceof Object))
{var ex__6356__auto__ = e10745;var statearr_10746_10754 = state_10730;(statearr_10746_10754[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10730);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10745;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10755 = state_10730;
state_10730 = G__10755;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_10730){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_10730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto__,load_chan,loaded_chan,___$1))
})();var state__6369__auto__ = (function (){var statearr_10747 = f__6368__auto__.call(null);(statearr_10747[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto__);
return statearr_10747;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto__,load_chan,loaded_chan,___$1))
);
return c__6367__auto__;
});
photosure.blog.t10707.prototype.om$core$IInitState$ = true;
photosure.blog.t10707.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"load-chan","load-chan",342107614),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"load-count","load-count",128885706),(0),new cljs.core.Keyword(null,"iter","iter",1308240283),(20)], null);
});
photosure.blog.t10707.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10709){var self__ = this;
var _10709__$1 = this;return self__.meta10708;
});
photosure.blog.t10707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10709,meta10708__$1){var self__ = this;
var _10709__$1 = this;return (new photosure.blog.t10707(self__.owner,self__.posts,self__.posts_view,meta10708__$1));
});
photosure.blog.__GT_t10707 = (function __GT_t10707(owner__$1,posts__$1,posts_view__$1,meta10708){return (new photosure.blog.t10707(owner__$1,posts__$1,posts_view__$1,meta10708));
});
}
return (new photosure.blog.t10707(owner,posts,posts_view,null));
});
photosure.blog.set_posts = (function set_posts(app,page){return photosure.util.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),("api/posts/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(page)),new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),(function (_){return om.core.update_BANG_.call(null,app,new cljs.core.Keyword(null,"posts","posts",760043164),_);
})], null));
});
photosure.blog.posts_nav = (function posts_nav(app,owner){if(typeof photosure.blog.t10761 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t10761 = (function (owner,app,posts_nav,meta10762){
this.owner = owner;
this.app = app;
this.posts_nav = posts_nav;
this.meta10762 = meta10762;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t10761.cljs$lang$type = true;
photosure.blog.t10761.cljs$lang$ctorStr = "photosure.blog/t10761";
photosure.blog.t10761.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t10761");
});
photosure.blog.t10761.prototype.om$core$IRenderState$ = true;
photosure.blog.t10761.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__10764){var self__ = this;
var map__10765 = p__10764;var map__10765__$1 = ((cljs.core.seq_QMARK_.call(null,map__10765))?cljs.core.apply.call(null,cljs.core.hash_map,map__10765):map__10765);var nav_chan = cljs.core.get.call(null,map__10765__$1,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980));var ___$1 = this;return React.DOM.div({"className": "posts-nav"},React.DOM.div({"onClick": ((function (___$1,map__10765,map__10765__$1,nav_chan){
return (function (___$2){return cljs.core.async.put_BANG_.call(null,nav_chan,"prev");
});})(___$1,map__10765,map__10765__$1,nav_chan))
, "className": "prev"}),React.DOM.div({"className": "top"},React.DOM.p({"className": "page"},(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.app) + (1)))),React.DOM.div({"onClick": ((function (___$1,map__10765,map__10765__$1,nav_chan){
return (function (___$2){return cljs.core.async.put_BANG_.call(null,nav_chan,"next");
});})(___$1,map__10765,map__10765__$1,nav_chan))
, "className": "next"}));
});
photosure.blog.t10761.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10763){var self__ = this;
var _10763__$1 = this;return self__.meta10762;
});
photosure.blog.t10761.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10763,meta10762__$1){var self__ = this;
var _10763__$1 = this;return (new photosure.blog.t10761(self__.owner,self__.app,self__.posts_nav,meta10762__$1));
});
photosure.blog.__GT_t10761 = (function __GT_t10761(owner__$1,app__$1,posts_nav__$1,meta10762){return (new photosure.blog.t10761(owner__$1,app__$1,posts_nav__$1,meta10762));
});
}
return (new photosure.blog.t10761(owner,app,posts_nav,null));
});
photosure.blog.blog = (function blog(app,owner){if(typeof photosure.blog.t10836 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t10836 = (function (owner,app,blog,meta10837){
this.owner = owner;
this.app = app;
this.blog = blog;
this.meta10837 = meta10837;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t10836.cljs$lang$type = true;
photosure.blog.t10836.cljs$lang$ctorStr = "photosure.blog/t10836";
photosure.blog.t10836.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t10836");
});
photosure.blog.t10836.prototype.om$core$IRenderState$ = true;
photosure.blog.t10836.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__10839){var self__ = this;
var map__10840 = p__10839;var map__10840__$1 = ((cljs.core.seq_QMARK_.call(null,map__10840))?cljs.core.apply.call(null,cljs.core.hash_map,map__10840):map__10840);var scroll_top = cljs.core.get.call(null,map__10840__$1,new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100));var nav_chan = cljs.core.get.call(null,map__10840__$1,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980));var loaded_chan = cljs.core.get.call(null,map__10840__$1,new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448));var loaded = cljs.core.get.call(null,map__10840__$1,new cljs.core.Keyword(null,"loaded","loaded",-1246482293));var this$__$1 = this;return React.DOM.div({"id": "blog-gallery-container"},om.core.build.call(null,photosure.scrolldiv.scroll_div,self__.app,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"blog-gallery",new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),(0)], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),("blog-gallery"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(loaded)?" loaded":null))),new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),(0)], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.core.build.call(null,photosure.blog.posts_view,new cljs.core.Keyword(null,"posts","posts",760043164).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448),loaded_chan], null)], null)),om.core.build.call(null,photosure.blog.posts_nav,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980),nav_chan], null)], null))], null)], null)], null)));
});
photosure.blog.t10836.prototype.om$core$IWillMount$ = true;
photosure.blog.t10836.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;photosure.blog.set_posts.call(null,self__.app,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.app));
var loaded_chan_10904 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448));var c__6367__auto___10905 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto___10905,loaded_chan_10904,___$1){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto___10905,loaded_chan_10904,___$1){
return (function (state_10849){var state_val_10850 = (state_10849[(1)]);if((state_val_10850 === (4)))
{var inst_10843 = (state_10849[(2)]);var inst_10844 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true);var state_10849__$1 = (function (){var statearr_10851 = state_10849;(statearr_10851[(7)] = inst_10843);
(statearr_10851[(8)] = inst_10844);
return statearr_10851;
})();var statearr_10852_10906 = state_10849__$1;(statearr_10852_10906[(2)] = null);
(statearr_10852_10906[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10850 === (3)))
{var inst_10847 = (state_10849[(2)]);var state_10849__$1 = state_10849;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10849__$1,inst_10847);
} else
{if((state_val_10850 === (2)))
{var state_10849__$1 = state_10849;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10849__$1,(4),loaded_chan_10904);
} else
{if((state_val_10850 === (1)))
{var state_10849__$1 = state_10849;var statearr_10853_10907 = state_10849__$1;(statearr_10853_10907[(2)] = null);
(statearr_10853_10907[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6367__auto___10905,loaded_chan_10904,___$1))
;return ((function (switch__6352__auto__,c__6367__auto___10905,loaded_chan_10904,___$1){
return (function() {
var state_machine__6353__auto__ = null;
var state_machine__6353__auto____0 = (function (){var statearr_10857 = [null,null,null,null,null,null,null,null,null];(statearr_10857[(0)] = state_machine__6353__auto__);
(statearr_10857[(1)] = (1));
return statearr_10857;
});
var state_machine__6353__auto____1 = (function (state_10849){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_10849);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e10858){if((e10858 instanceof Object))
{var ex__6356__auto__ = e10858;var statearr_10859_10908 = state_10849;(statearr_10859_10908[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10849);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10858;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10909 = state_10849;
state_10849 = G__10909;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_10849){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_10849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto___10905,loaded_chan_10904,___$1))
})();var state__6369__auto__ = (function (){var statearr_10860 = f__6368__auto__.call(null);(statearr_10860[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto___10905);
return statearr_10860;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto___10905,loaded_chan_10904,___$1))
);
var nav_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980));var c__6367__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto__,nav_chan,___$1){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto__,nav_chan,___$1){
return (function (state_10885){var state_val_10886 = (state_10885[(1)]);if((state_val_10886 === (7)))
{var inst_10880 = (state_10885[(2)]);var state_10885__$1 = (function (){var statearr_10887 = state_10885;(statearr_10887[(7)] = inst_10880);
return statearr_10887;
})();var statearr_10888_10910 = state_10885__$1;(statearr_10888_10910[(2)] = null);
(statearr_10888_10910[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10886 === (6)))
{var inst_10863 = (state_10885[(8)]);var inst_10873 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),false);var inst_10874 = (function (){var cmd = inst_10863;return ((function (cmd,inst_10863,inst_10873,state_val_10886,c__6367__auto__,nav_chan,___$1){
return (function (p1__10767_SHARP_){return (p1__10767_SHARP_ + (1));
});
;})(cmd,inst_10863,inst_10873,state_val_10886,c__6367__auto__,nav_chan,___$1))
})();var inst_10875 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"page","page",849072397),inst_10874);var inst_10876 = cljs.core.deref.call(null,self__.app);var inst_10877 = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(inst_10876);var inst_10878 = photosure.blog.set_posts.call(null,self__.app,inst_10877);var state_10885__$1 = (function (){var statearr_10889 = state_10885;(statearr_10889[(9)] = inst_10875);
(statearr_10889[(10)] = inst_10873);
return statearr_10889;
})();var statearr_10890_10911 = state_10885__$1;(statearr_10890_10911[(2)] = inst_10878);
(statearr_10890_10911[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10886 === (5)))
{var inst_10863 = (state_10885[(8)]);var inst_10866 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),false);var inst_10867 = (function (){var cmd = inst_10863;return ((function (cmd,inst_10863,inst_10866,state_val_10886,c__6367__auto__,nav_chan,___$1){
return (function (p1__10766_SHARP_){return (p1__10766_SHARP_ - (1));
});
;})(cmd,inst_10863,inst_10866,state_val_10886,c__6367__auto__,nav_chan,___$1))
})();var inst_10868 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"page","page",849072397),inst_10867);var inst_10869 = cljs.core.deref.call(null,self__.app);var inst_10870 = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(inst_10869);var inst_10871 = photosure.blog.set_posts.call(null,self__.app,inst_10870);var state_10885__$1 = (function (){var statearr_10891 = state_10885;(statearr_10891[(11)] = inst_10866);
(statearr_10891[(12)] = inst_10868);
return statearr_10891;
})();var statearr_10892_10912 = state_10885__$1;(statearr_10892_10912[(2)] = inst_10871);
(statearr_10892_10912[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10886 === (4)))
{var inst_10863 = (state_10885[(8)]);var inst_10863__$1 = (state_10885[(2)]);var inst_10864 = cljs.core._EQ_.call(null,inst_10863__$1,"prev");var state_10885__$1 = (function (){var statearr_10893 = state_10885;(statearr_10893[(8)] = inst_10863__$1);
return statearr_10893;
})();if(inst_10864)
{var statearr_10894_10913 = state_10885__$1;(statearr_10894_10913[(1)] = (5));
} else
{var statearr_10895_10914 = state_10885__$1;(statearr_10895_10914[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10886 === (3)))
{var inst_10883 = (state_10885[(2)]);var state_10885__$1 = state_10885;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10885__$1,inst_10883);
} else
{if((state_val_10886 === (2)))
{var state_10885__$1 = state_10885;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10885__$1,(4),nav_chan);
} else
{if((state_val_10886 === (1)))
{var state_10885__$1 = state_10885;var statearr_10896_10915 = state_10885__$1;(statearr_10896_10915[(2)] = null);
(statearr_10896_10915[(1)] = (2));
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
var state_machine__6353__auto____0 = (function (){var statearr_10900 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10900[(0)] = state_machine__6353__auto__);
(statearr_10900[(1)] = (1));
return statearr_10900;
});
var state_machine__6353__auto____1 = (function (state_10885){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_10885);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e10901){if((e10901 instanceof Object))
{var ex__6356__auto__ = e10901;var statearr_10902_10916 = state_10885;(statearr_10902_10916[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10885);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10901;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10917 = state_10885;
state_10885 = G__10917;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_10885){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_10885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto__,nav_chan,___$1))
})();var state__6369__auto__ = (function (){var statearr_10903 = f__6368__auto__.call(null);(statearr_10903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto__);
return statearr_10903;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto__,nav_chan,___$1))
);
return c__6367__auto__;
});
photosure.blog.t10836.prototype.om$core$IInitState$ = true;
photosure.blog.t10836.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),false,new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980),cljs.core.async.chan.call(null)], null);
});
photosure.blog.t10836.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10838){var self__ = this;
var _10838__$1 = this;return self__.meta10837;
});
photosure.blog.t10836.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10838,meta10837__$1){var self__ = this;
var _10838__$1 = this;return (new photosure.blog.t10836(self__.owner,self__.app,self__.blog,meta10837__$1));
});
photosure.blog.__GT_t10836 = (function __GT_t10836(owner__$1,app__$1,blog__$1,meta10837){return (new photosure.blog.t10836(owner__$1,app__$1,blog__$1,meta10837));
});
}
return (new photosure.blog.t10836(owner,app,blog,null));
});
photosure.blog.render = (function render(){return om.core.root.call(null,photosure.blog.blog,photosure.blog.app_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("dynamic-content")], null));
});

//# sourceMappingURL=blog.js.map