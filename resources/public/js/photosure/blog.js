// Compiled by ClojureScript 0.0-2322
goog.provide('photosure.blog');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('goog.string');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('hickory.core');
goog.require('photosure.util');
goog.require('photosure.util');
goog.require('om.core');
goog.require('om.core');
goog.require('hickory.core');
goog.require('goog.string');
cljs.core.enable_console_print_BANG_.call(null);
photosure.blog.app_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"posts","posts",760043164),cljs.core.PersistentVector.EMPTY], null));
photosure.blog.parse_caption = (function parse_caption(caption){return cljs.core.map.call(null,hickory.core.as_hiccup,hickory.core.parse_fragment.call(null,caption));
});
photosure.blog.text_view = (function text_view(caption,owner){if(typeof photosure.blog.t15795 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t15795 = (function (owner,caption,text_view,meta15796){
this.owner = owner;
this.caption = caption;
this.text_view = text_view;
this.meta15796 = meta15796;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t15795.cljs$lang$type = true;
photosure.blog.t15795.cljs$lang$ctorStr = "photosure.blog/t15795";
photosure.blog.t15795.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t15795");
});
photosure.blog.t15795.prototype.om$core$IRender$ = true;
photosure.blog.t15795.prototype.om$core$IRender$render$arity$1 = (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return React.DOM.div({"dangerouslySetInnerHTML": {"__html": self__.caption}, "className": "caption"},null);
});
photosure.blog.t15795.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15797){var self__ = this;
var _15797__$1 = this;return self__.meta15796;
});
photosure.blog.t15795.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15797,meta15796__$1){var self__ = this;
var _15797__$1 = this;return (new photosure.blog.t15795(self__.owner,self__.caption,self__.text_view,meta15796__$1));
});
photosure.blog.__GT_t15795 = (function __GT_t15795(owner__$1,caption__$1,text_view__$1,meta15796){return (new photosure.blog.t15795(owner__$1,caption__$1,text_view__$1,meta15796));
});
}
return (new photosure.blog.t15795(owner,caption,text_view,null));
});
photosure.blog.text_post_view = (function text_post_view(p__15798,owner){var map__15803 = p__15798;var map__15803__$1 = ((cljs.core.seq_QMARK_.call(null,map__15803))?cljs.core.apply.call(null,cljs.core.hash_map,map__15803):map__15803);var id = cljs.core.get.call(null,map__15803__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var title = cljs.core.get.call(null,map__15803__$1,new cljs.core.Keyword(null,"title","title",636505583));var body = cljs.core.get.call(null,map__15803__$1,new cljs.core.Keyword(null,"body","body",-2049205669));if(typeof photosure.blog.t15804 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t15804 = (function (body,title,id,map__15803,owner,p__15798,text_post_view,meta15805){
this.body = body;
this.title = title;
this.id = id;
this.map__15803 = map__15803;
this.owner = owner;
this.p__15798 = p__15798;
this.text_post_view = text_post_view;
this.meta15805 = meta15805;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t15804.cljs$lang$type = true;
photosure.blog.t15804.cljs$lang$ctorStr = "photosure.blog/t15804";
photosure.blog.t15804.cljs$lang$ctorPrWriter = ((function (map__15803,map__15803__$1,id,title,body){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t15804");
});})(map__15803,map__15803__$1,id,title,body))
;
photosure.blog.t15804.prototype.om$core$IRender$ = true;
photosure.blog.t15804.prototype.om$core$IRender$render$arity$1 = ((function (map__15803,map__15803__$1,id,title,body){
return (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return React.DOM.div({"className": "post", "id": self__.id},React.DOM.h2({"className": "blog-title"},self__.title),om.core.build.call(null,photosure.blog.text_view,self__.body));
});})(map__15803,map__15803__$1,id,title,body))
;
photosure.blog.t15804.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__15803,map__15803__$1,id,title,body){
return (function (_15806){var self__ = this;
var _15806__$1 = this;return self__.meta15805;
});})(map__15803,map__15803__$1,id,title,body))
;
photosure.blog.t15804.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__15803,map__15803__$1,id,title,body){
return (function (_15806,meta15805__$1){var self__ = this;
var _15806__$1 = this;return (new photosure.blog.t15804(self__.body,self__.title,self__.id,self__.map__15803,self__.owner,self__.p__15798,self__.text_post_view,meta15805__$1));
});})(map__15803,map__15803__$1,id,title,body))
;
photosure.blog.__GT_t15804 = ((function (map__15803,map__15803__$1,id,title,body){
return (function __GT_t15804(body__$1,title__$1,id__$1,map__15803__$2,owner__$1,p__15798__$1,text_post_view__$1,meta15805){return (new photosure.blog.t15804(body__$1,title__$1,id__$1,map__15803__$2,owner__$1,p__15798__$1,text_post_view__$1,meta15805));
});})(map__15803,map__15803__$1,id,title,body))
;
}
return (new photosure.blog.t15804(body,title,id,map__15803__$1,owner,p__15798,text_post_view,null));
});
photosure.blog.photo_post_view = (function photo_post_view(p__15807,owner){var map__15812 = p__15807;var map__15812__$1 = ((cljs.core.seq_QMARK_.call(null,map__15812))?cljs.core.apply.call(null,cljs.core.hash_map,map__15812):map__15812);var id = cljs.core.get.call(null,map__15812__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var photos = cljs.core.get.call(null,map__15812__$1,new cljs.core.Keyword(null,"photos","photos",11691538));var caption = cljs.core.get.call(null,map__15812__$1,new cljs.core.Keyword(null,"caption","caption",-855383902));if(typeof photosure.blog.t15813 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t15813 = (function (caption,photos,id,map__15812,owner,p__15807,photo_post_view,meta15814){
this.caption = caption;
this.photos = photos;
this.id = id;
this.map__15812 = map__15812;
this.owner = owner;
this.p__15807 = p__15807;
this.photo_post_view = photo_post_view;
this.meta15814 = meta15814;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t15813.cljs$lang$type = true;
photosure.blog.t15813.cljs$lang$ctorStr = "photosure.blog/t15813";
photosure.blog.t15813.cljs$lang$ctorPrWriter = ((function (map__15812,map__15812__$1,id,photos,caption){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t15813");
});})(map__15812,map__15812__$1,id,photos,caption))
;
photosure.blog.t15813.prototype.om$core$IRender$ = true;
photosure.blog.t15813.prototype.om$core$IRender$render$arity$1 = ((function (map__15812,map__15812__$1,id,photos,caption){
return (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return React.DOM.div({"className": "post", "id": self__.id},cljs.core.apply.call(null,om.dom.div,{"className": "blog-photo"},cljs.core.map.call(null,((function (this__5143__auto____$1,map__15812,map__15812__$1,id,photos,caption){
return (function (photo){return React.DOM.img({"src": new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"original_size","original_size",-1238801714).cljs$core$IFn$_invoke$arity$1(photo))});
});})(this__5143__auto____$1,map__15812,map__15812__$1,id,photos,caption))
,self__.photos)),om.core.build.call(null,photosure.blog.text_view,self__.caption));
});})(map__15812,map__15812__$1,id,photos,caption))
;
photosure.blog.t15813.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__15812,map__15812__$1,id,photos,caption){
return (function (_15815){var self__ = this;
var _15815__$1 = this;return self__.meta15814;
});})(map__15812,map__15812__$1,id,photos,caption))
;
photosure.blog.t15813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__15812,map__15812__$1,id,photos,caption){
return (function (_15815,meta15814__$1){var self__ = this;
var _15815__$1 = this;return (new photosure.blog.t15813(self__.caption,self__.photos,self__.id,self__.map__15812,self__.owner,self__.p__15807,self__.photo_post_view,meta15814__$1));
});})(map__15812,map__15812__$1,id,photos,caption))
;
photosure.blog.__GT_t15813 = ((function (map__15812,map__15812__$1,id,photos,caption){
return (function __GT_t15813(caption__$1,photos__$1,id__$1,map__15812__$2,owner__$1,p__15807__$1,photo_post_view__$1,meta15814){return (new photosure.blog.t15813(caption__$1,photos__$1,id__$1,map__15812__$2,owner__$1,p__15807__$1,photo_post_view__$1,meta15814));
});})(map__15812,map__15812__$1,id,photos,caption))
;
}
return (new photosure.blog.t15813(caption,photos,id,map__15812__$1,owner,p__15807,photo_post_view,null));
});
photosure.blog.post_view = (function post_view(p__15816,owner){var map__15821 = p__15816;var map__15821__$1 = ((cljs.core.seq_QMARK_.call(null,map__15821))?cljs.core.apply.call(null,cljs.core.hash_map,map__15821):map__15821);var post = map__15821__$1;var type = cljs.core.get.call(null,map__15821__$1,new cljs.core.Keyword(null,"type","type",1174270348));if(typeof photosure.blog.t15822 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t15822 = (function (type,post,map__15821,owner,p__15816,post_view,meta15823){
this.type = type;
this.post = post;
this.map__15821 = map__15821;
this.owner = owner;
this.p__15816 = p__15816;
this.post_view = post_view;
this.meta15823 = meta15823;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t15822.cljs$lang$type = true;
photosure.blog.t15822.cljs$lang$ctorStr = "photosure.blog/t15822";
photosure.blog.t15822.cljs$lang$ctorPrWriter = ((function (map__15821,map__15821__$1,post,type){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t15822");
});})(map__15821,map__15821__$1,post,type))
;
photosure.blog.t15822.prototype.om$core$IRender$ = true;
photosure.blog.t15822.prototype.om$core$IRender$render$arity$1 = ((function (map__15821,map__15821__$1,post,type){
return (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core._EQ_.call(null,self__.type,"photo"))
{return om.core.build.call(null,photosure.blog.photo_post_view,self__.post);
} else
{return om.core.build.call(null,photosure.blog.text_post_view,self__.post);
}
});})(map__15821,map__15821__$1,post,type))
;
photosure.blog.t15822.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__15821,map__15821__$1,post,type){
return (function (_15824){var self__ = this;
var _15824__$1 = this;return self__.meta15823;
});})(map__15821,map__15821__$1,post,type))
;
photosure.blog.t15822.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__15821,map__15821__$1,post,type){
return (function (_15824,meta15823__$1){var self__ = this;
var _15824__$1 = this;return (new photosure.blog.t15822(self__.type,self__.post,self__.map__15821,self__.owner,self__.p__15816,self__.post_view,meta15823__$1));
});})(map__15821,map__15821__$1,post,type))
;
photosure.blog.__GT_t15822 = ((function (map__15821,map__15821__$1,post,type){
return (function __GT_t15822(type__$1,post__$1,map__15821__$2,owner__$1,p__15816__$1,post_view__$1,meta15823){return (new photosure.blog.t15822(type__$1,post__$1,map__15821__$2,owner__$1,p__15816__$1,post_view__$1,meta15823));
});})(map__15821,map__15821__$1,post,type))
;
}
return (new photosure.blog.t15822(type,post,map__15821__$1,owner,p__15816,post_view,null));
});
photosure.blog.posts_view = (function posts_view(app,owner){if(typeof photosure.blog.t15830 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t15830 = (function (owner,app,posts_view,meta15831){
this.owner = owner;
this.app = app;
this.posts_view = posts_view;
this.meta15831 = meta15831;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t15830.cljs$lang$type = true;
photosure.blog.t15830.cljs$lang$ctorStr = "photosure.blog/t15830";
photosure.blog.t15830.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t15830");
});
photosure.blog.t15830.prototype.om$core$IRenderState$ = true;
photosure.blog.t15830.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__15833){var self__ = this;
var map__15834 = p__15833;var map__15834__$1 = ((cljs.core.seq_QMARK_.call(null,map__15834))?cljs.core.apply.call(null,cljs.core.hash_map,map__15834):map__15834);var scroll_chan = cljs.core.get.call(null,map__15834__$1,new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748));var this$__$1 = this;return cljs.core.apply.call(null,om.dom.div,{"onScroll": ((function (this$__$1,map__15834,map__15834__$1,scroll_chan){
return (function (){var elem = om.core.get_node.call(null,self__.owner);return cljs.core.async.put_BANG_.call(null,scroll_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),elem.scrollTop,new cljs.core.Keyword(null,"total-scroll-height","total-scroll-height",-1230474362),(elem.scrollHeight - elem.clientHeight)], null));
});})(this$__$1,map__15834,map__15834__$1,scroll_chan))
, "id": "post-list"},om.core.build_all.call(null,photosure.blog.post_view,new cljs.core.Keyword(null,"posts","posts",760043164).cljs$core$IFn$_invoke$arity$1(self__.app)));
});
photosure.blog.t15830.prototype.om$core$IWillMount$ = true;
photosure.blog.t15830.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return photosure.util.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),"api/posts",new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),((function (___$1){
return (function (___$2){return om.core.update_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"posts","posts",760043164),___$2);
});})(___$1))
], null));
});
photosure.blog.t15830.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15832){var self__ = this;
var _15832__$1 = this;return self__.meta15831;
});
photosure.blog.t15830.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15832,meta15831__$1){var self__ = this;
var _15832__$1 = this;return (new photosure.blog.t15830(self__.owner,self__.app,self__.posts_view,meta15831__$1));
});
photosure.blog.__GT_t15830 = (function __GT_t15830(owner__$1,app__$1,posts_view__$1,meta15831){return (new photosure.blog.t15830(owner__$1,app__$1,posts_view__$1,meta15831));
});
}
return (new photosure.blog.t15830(owner,app,posts_view,null));
});
photosure.blog.translate = (function translate(x,y){return ("translate("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)+"%,"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)+"%)");
});
photosure.blog.scroll_bar = (function scroll_bar(app,owner){if(typeof photosure.blog.t15863 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t15863 = (function (owner,app,scroll_bar,meta15864){
this.owner = owner;
this.app = app;
this.scroll_bar = scroll_bar;
this.meta15864 = meta15864;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t15863.cljs$lang$type = true;
photosure.blog.t15863.cljs$lang$ctorStr = "photosure.blog/t15863";
photosure.blog.t15863.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t15863");
});
photosure.blog.t15863.prototype.om$core$IRenderState$ = true;
photosure.blog.t15863.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__15866){var self__ = this;
var map__15867 = p__15866;var map__15867__$1 = ((cljs.core.seq_QMARK_.call(null,map__15867))?cljs.core.apply.call(null,cljs.core.hash_map,map__15867):map__15867);var total_scroll_height = cljs.core.get.call(null,map__15867__$1,new cljs.core.Keyword(null,"total-scroll-height","total-scroll-height",-1230474362));var scroll_top = cljs.core.get.call(null,map__15867__$1,new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100));var total_track_height = cljs.core.get.call(null,map__15867__$1,new cljs.core.Keyword(null,"total-track-height","total-track-height",844315305));var this$__$1 = this;return React.DOM.div({"className": "scroll-track"},React.DOM.div({"style": {"top": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round.call(null,(total_track_height * (scroll_top / total_scroll_height))))+"px")}, "className": "scroll-bar"}));
});
photosure.blog.t15863.prototype.om$core$IDidMount$ = true;
photosure.blog.t15863.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"total-track-height","total-track-height",844315305),(om.core.get_node.call(null,self__.owner).clientHeight - om.core.get_node.call(null,self__.owner).firstChild.offsetHeight));
});
photosure.blog.t15863.prototype.om$core$IWillMount$ = true;
photosure.blog.t15863.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var scroll_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748));var c__6367__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto__,scroll_chan,___$1){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto__,scroll_chan,___$1){
return (function (state_15879){var state_val_15880 = (state_15879[(1)]);if((state_val_15880 === (4)))
{var inst_15870 = (state_15879[(2)]);var inst_15871 = new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100).cljs$core$IFn$_invoke$arity$1(inst_15870);var inst_15872 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),inst_15871);var inst_15873 = new cljs.core.Keyword(null,"total-scroll-height","total-scroll-height",-1230474362).cljs$core$IFn$_invoke$arity$1(inst_15870);var inst_15874 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"total-scroll-height","total-scroll-height",-1230474362),inst_15873);var state_15879__$1 = (function (){var statearr_15881 = state_15879;(statearr_15881[(7)] = inst_15872);
(statearr_15881[(8)] = inst_15874);
return statearr_15881;
})();var statearr_15882_15891 = state_15879__$1;(statearr_15882_15891[(2)] = null);
(statearr_15882_15891[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15880 === (3)))
{var inst_15877 = (state_15879[(2)]);var state_15879__$1 = state_15879;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15879__$1,inst_15877);
} else
{if((state_val_15880 === (2)))
{var state_15879__$1 = state_15879;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15879__$1,(4),scroll_chan);
} else
{if((state_val_15880 === (1)))
{var state_15879__$1 = state_15879;var statearr_15883_15892 = state_15879__$1;(statearr_15883_15892[(2)] = null);
(statearr_15883_15892[(1)] = (2));
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
var state_machine__6353__auto____0 = (function (){var statearr_15887 = [null,null,null,null,null,null,null,null,null];(statearr_15887[(0)] = state_machine__6353__auto__);
(statearr_15887[(1)] = (1));
return statearr_15887;
});
var state_machine__6353__auto____1 = (function (state_15879){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_15879);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e15888){if((e15888 instanceof Object))
{var ex__6356__auto__ = e15888;var statearr_15889_15893 = state_15879;(statearr_15889_15893[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15879);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15888;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15894 = state_15879;
state_15879 = G__15894;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_15879){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_15879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto__,scroll_chan,___$1))
})();var state__6369__auto__ = (function (){var statearr_15890 = f__6368__auto__.call(null);(statearr_15890[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto__);
return statearr_15890;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto__,scroll_chan,___$1))
);
return c__6367__auto__;
});
photosure.blog.t15863.prototype.om$core$IInitState$ = true;
photosure.blog.t15863.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"total-track-height","total-track-height",844315305),(0),new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),(0),new cljs.core.Keyword(null,"total-scroll-height","total-scroll-height",-1230474362),(1)], null);
});
photosure.blog.t15863.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15865){var self__ = this;
var _15865__$1 = this;return self__.meta15864;
});
photosure.blog.t15863.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15865,meta15864__$1){var self__ = this;
var _15865__$1 = this;return (new photosure.blog.t15863(self__.owner,self__.app,self__.scroll_bar,meta15864__$1));
});
photosure.blog.__GT_t15863 = (function __GT_t15863(owner__$1,app__$1,scroll_bar__$1,meta15864){return (new photosure.blog.t15863(owner__$1,app__$1,scroll_bar__$1,meta15864));
});
}
return (new photosure.blog.t15863(owner,app,scroll_bar,null));
});
photosure.blog.blog = (function blog(app,owner){if(typeof photosure.blog.t15900 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t15900 = (function (owner,app,blog,meta15901){
this.owner = owner;
this.app = app;
this.blog = blog;
this.meta15901 = meta15901;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t15900.cljs$lang$type = true;
photosure.blog.t15900.cljs$lang$ctorStr = "photosure.blog/t15900";
photosure.blog.t15900.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t15900");
});
photosure.blog.t15900.prototype.om$core$IRenderState$ = true;
photosure.blog.t15900.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__15903){var self__ = this;
var map__15904 = p__15903;var map__15904__$1 = ((cljs.core.seq_QMARK_.call(null,map__15904))?cljs.core.apply.call(null,cljs.core.hash_map,map__15904):map__15904);var scroll_chan = cljs.core.get.call(null,map__15904__$1,new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748));var this$__$1 = this;return React.DOM.div({"id": "blog-gallery-container"},React.DOM.div({"id": "blog-gallery"},React.DOM.div({"id": "overflow-wrapper"},React.DOM.div({"className": "scroll-header"}),om.core.build.call(null,photosure.blog.posts_view,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748),scroll_chan], null)], null)),React.DOM.div({"className": "scroll-footer"})),om.core.build.call(null,photosure.blog.scroll_bar,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748),scroll_chan], null)], null))));
});
photosure.blog.t15900.prototype.om$core$IInitState$ = true;
photosure.blog.t15900.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748),cljs.core.async.chan.call(null)], null);
});
photosure.blog.t15900.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15902){var self__ = this;
var _15902__$1 = this;return self__.meta15901;
});
photosure.blog.t15900.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15902,meta15901__$1){var self__ = this;
var _15902__$1 = this;return (new photosure.blog.t15900(self__.owner,self__.app,self__.blog,meta15901__$1));
});
photosure.blog.__GT_t15900 = (function __GT_t15900(owner__$1,app__$1,blog__$1,meta15901){return (new photosure.blog.t15900(owner__$1,app__$1,blog__$1,meta15901));
});
}
return (new photosure.blog.t15900(owner,app,blog,null));
});
photosure.blog.render = (function render(){return om.core.root.call(null,photosure.blog.blog,photosure.blog.app_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("dynamic-content")], null));
});

//# sourceMappingURL=blog.js.map