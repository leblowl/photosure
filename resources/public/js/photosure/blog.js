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
photosure.blog.text_view = (function text_view(caption,owner){if(typeof photosure.blog.t10605 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t10605 = (function (owner,caption,text_view,meta10606){
this.owner = owner;
this.caption = caption;
this.text_view = text_view;
this.meta10606 = meta10606;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t10605.cljs$lang$type = true;
photosure.blog.t10605.cljs$lang$ctorStr = "photosure.blog/t10605";
photosure.blog.t10605.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t10605");
});
photosure.blog.t10605.prototype.om$core$IRender$ = true;
photosure.blog.t10605.prototype.om$core$IRender$render$arity$1 = (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return React.DOM.div({"dangerouslySetInnerHTML": {"__html": self__.caption}, "className": "caption"},null);
});
photosure.blog.t10605.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10607){var self__ = this;
var _10607__$1 = this;return self__.meta10606;
});
photosure.blog.t10605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10607,meta10606__$1){var self__ = this;
var _10607__$1 = this;return (new photosure.blog.t10605(self__.owner,self__.caption,self__.text_view,meta10606__$1));
});
photosure.blog.__GT_t10605 = (function __GT_t10605(owner__$1,caption__$1,text_view__$1,meta10606){return (new photosure.blog.t10605(owner__$1,caption__$1,text_view__$1,meta10606));
});
}
return (new photosure.blog.t10605(owner,caption,text_view,null));
});
photosure.blog.text_post_view = (function text_post_view(p__10608,owner){var map__10613 = p__10608;var map__10613__$1 = ((cljs.core.seq_QMARK_.call(null,map__10613))?cljs.core.apply.call(null,cljs.core.hash_map,map__10613):map__10613);var id = cljs.core.get.call(null,map__10613__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var title = cljs.core.get.call(null,map__10613__$1,new cljs.core.Keyword(null,"title","title",636505583));var body = cljs.core.get.call(null,map__10613__$1,new cljs.core.Keyword(null,"body","body",-2049205669));if(typeof photosure.blog.t10614 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t10614 = (function (body,title,id,map__10613,owner,p__10608,text_post_view,meta10615){
this.body = body;
this.title = title;
this.id = id;
this.map__10613 = map__10613;
this.owner = owner;
this.p__10608 = p__10608;
this.text_post_view = text_post_view;
this.meta10615 = meta10615;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t10614.cljs$lang$type = true;
photosure.blog.t10614.cljs$lang$ctorStr = "photosure.blog/t10614";
photosure.blog.t10614.cljs$lang$ctorPrWriter = ((function (map__10613,map__10613__$1,id,title,body){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t10614");
});})(map__10613,map__10613__$1,id,title,body))
;
photosure.blog.t10614.prototype.om$core$IRender$ = true;
photosure.blog.t10614.prototype.om$core$IRender$render$arity$1 = ((function (map__10613,map__10613__$1,id,title,body){
return (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return React.DOM.div({"className": "post", "id": self__.id},React.DOM.h2({"className": "blog-title"},self__.title),om.core.build.call(null,photosure.blog.text_view,self__.body));
});})(map__10613,map__10613__$1,id,title,body))
;
photosure.blog.t10614.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10613,map__10613__$1,id,title,body){
return (function (_10616){var self__ = this;
var _10616__$1 = this;return self__.meta10615;
});})(map__10613,map__10613__$1,id,title,body))
;
photosure.blog.t10614.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10613,map__10613__$1,id,title,body){
return (function (_10616,meta10615__$1){var self__ = this;
var _10616__$1 = this;return (new photosure.blog.t10614(self__.body,self__.title,self__.id,self__.map__10613,self__.owner,self__.p__10608,self__.text_post_view,meta10615__$1));
});})(map__10613,map__10613__$1,id,title,body))
;
photosure.blog.__GT_t10614 = ((function (map__10613,map__10613__$1,id,title,body){
return (function __GT_t10614(body__$1,title__$1,id__$1,map__10613__$2,owner__$1,p__10608__$1,text_post_view__$1,meta10615){return (new photosure.blog.t10614(body__$1,title__$1,id__$1,map__10613__$2,owner__$1,p__10608__$1,text_post_view__$1,meta10615));
});})(map__10613,map__10613__$1,id,title,body))
;
}
return (new photosure.blog.t10614(body,title,id,map__10613__$1,owner,p__10608,text_post_view,null));
});
photosure.blog.photo_post_view = (function photo_post_view(p__10617,owner){var map__10625 = p__10617;var map__10625__$1 = ((cljs.core.seq_QMARK_.call(null,map__10625))?cljs.core.apply.call(null,cljs.core.hash_map,map__10625):map__10625);var id = cljs.core.get.call(null,map__10625__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var vec__10626 = cljs.core.get.call(null,map__10625__$1,new cljs.core.Keyword(null,"photos","photos",11691538));var map__10627 = cljs.core.nth.call(null,vec__10626,(0),null);var map__10627__$1 = ((cljs.core.seq_QMARK_.call(null,map__10627))?cljs.core.apply.call(null,cljs.core.hash_map,map__10627):map__10627);var map__10628 = cljs.core.get.call(null,map__10627__$1,new cljs.core.Keyword(null,"original_size","original_size",-1238801714));var map__10628__$1 = ((cljs.core.seq_QMARK_.call(null,map__10628))?cljs.core.apply.call(null,cljs.core.hash_map,map__10628):map__10628);var url = cljs.core.get.call(null,map__10628__$1,new cljs.core.Keyword(null,"url","url",276297046));var caption = cljs.core.get.call(null,map__10625__$1,new cljs.core.Keyword(null,"caption","caption",-855383902));if(typeof photosure.blog.t10629 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t10629 = (function (owner,photo_post_view,map__10628,caption,map__10627,map__10625,p__10617,id,url,vec__10626,meta10630){
this.owner = owner;
this.photo_post_view = photo_post_view;
this.map__10628 = map__10628;
this.caption = caption;
this.map__10627 = map__10627;
this.map__10625 = map__10625;
this.p__10617 = p__10617;
this.id = id;
this.url = url;
this.vec__10626 = vec__10626;
this.meta10630 = meta10630;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t10629.cljs$lang$type = true;
photosure.blog.t10629.cljs$lang$ctorStr = "photosure.blog/t10629";
photosure.blog.t10629.cljs$lang$ctorPrWriter = ((function (map__10625,map__10625__$1,id,vec__10626,map__10627,map__10627__$1,map__10628,map__10628__$1,url,caption){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t10629");
});})(map__10625,map__10625__$1,id,vec__10626,map__10627,map__10627__$1,map__10628,map__10628__$1,url,caption))
;
photosure.blog.t10629.prototype.om$core$IRender$ = true;
photosure.blog.t10629.prototype.om$core$IRender$render$arity$1 = ((function (map__10625,map__10625__$1,id,vec__10626,map__10627,map__10627__$1,map__10628,map__10628__$1,url,caption){
return (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return React.DOM.div({"className": "post", "id": self__.id},React.DOM.div({"className": "blog-photo"},React.DOM.img({"src": self__.url})),om.core.build.call(null,photosure.blog.text_view,self__.caption));
});})(map__10625,map__10625__$1,id,vec__10626,map__10627,map__10627__$1,map__10628,map__10628__$1,url,caption))
;
photosure.blog.t10629.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10625,map__10625__$1,id,vec__10626,map__10627,map__10627__$1,map__10628,map__10628__$1,url,caption){
return (function (_10631){var self__ = this;
var _10631__$1 = this;return self__.meta10630;
});})(map__10625,map__10625__$1,id,vec__10626,map__10627,map__10627__$1,map__10628,map__10628__$1,url,caption))
;
photosure.blog.t10629.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10625,map__10625__$1,id,vec__10626,map__10627,map__10627__$1,map__10628,map__10628__$1,url,caption){
return (function (_10631,meta10630__$1){var self__ = this;
var _10631__$1 = this;return (new photosure.blog.t10629(self__.owner,self__.photo_post_view,self__.map__10628,self__.caption,self__.map__10627,self__.map__10625,self__.p__10617,self__.id,self__.url,self__.vec__10626,meta10630__$1));
});})(map__10625,map__10625__$1,id,vec__10626,map__10627,map__10627__$1,map__10628,map__10628__$1,url,caption))
;
photosure.blog.__GT_t10629 = ((function (map__10625,map__10625__$1,id,vec__10626,map__10627,map__10627__$1,map__10628,map__10628__$1,url,caption){
return (function __GT_t10629(owner__$1,photo_post_view__$1,map__10628__$2,caption__$1,map__10627__$2,map__10625__$2,p__10617__$1,id__$1,url__$1,vec__10626__$1,meta10630){return (new photosure.blog.t10629(owner__$1,photo_post_view__$1,map__10628__$2,caption__$1,map__10627__$2,map__10625__$2,p__10617__$1,id__$1,url__$1,vec__10626__$1,meta10630));
});})(map__10625,map__10625__$1,id,vec__10626,map__10627,map__10627__$1,map__10628,map__10628__$1,url,caption))
;
}
return (new photosure.blog.t10629(owner,photo_post_view,map__10628__$1,caption,map__10627__$1,map__10625__$1,p__10617,id,url,vec__10626,null));
});
photosure.blog.post_view = (function post_view(p__10632,owner){var map__10637 = p__10632;var map__10637__$1 = ((cljs.core.seq_QMARK_.call(null,map__10637))?cljs.core.apply.call(null,cljs.core.hash_map,map__10637):map__10637);var post = map__10637__$1;var type = cljs.core.get.call(null,map__10637__$1,new cljs.core.Keyword(null,"type","type",1174270348));if(typeof photosure.blog.t10638 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t10638 = (function (type,post,map__10637,owner,p__10632,post_view,meta10639){
this.type = type;
this.post = post;
this.map__10637 = map__10637;
this.owner = owner;
this.p__10632 = p__10632;
this.post_view = post_view;
this.meta10639 = meta10639;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t10638.cljs$lang$type = true;
photosure.blog.t10638.cljs$lang$ctorStr = "photosure.blog/t10638";
photosure.blog.t10638.cljs$lang$ctorPrWriter = ((function (map__10637,map__10637__$1,post,type){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t10638");
});})(map__10637,map__10637__$1,post,type))
;
photosure.blog.t10638.prototype.om$core$IRender$ = true;
photosure.blog.t10638.prototype.om$core$IRender$render$arity$1 = ((function (map__10637,map__10637__$1,post,type){
return (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core._EQ_.call(null,self__.type,"photo"))
{return om.core.build.call(null,photosure.blog.photo_post_view,self__.post);
} else
{return om.core.build.call(null,photosure.blog.text_post_view,self__.post);
}
});})(map__10637,map__10637__$1,post,type))
;
photosure.blog.t10638.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10637,map__10637__$1,post,type){
return (function (_10640){var self__ = this;
var _10640__$1 = this;return self__.meta10639;
});})(map__10637,map__10637__$1,post,type))
;
photosure.blog.t10638.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10637,map__10637__$1,post,type){
return (function (_10640,meta10639__$1){var self__ = this;
var _10640__$1 = this;return (new photosure.blog.t10638(self__.type,self__.post,self__.map__10637,self__.owner,self__.p__10632,self__.post_view,meta10639__$1));
});})(map__10637,map__10637__$1,post,type))
;
photosure.blog.__GT_t10638 = ((function (map__10637,map__10637__$1,post,type){
return (function __GT_t10638(type__$1,post__$1,map__10637__$2,owner__$1,p__10632__$1,post_view__$1,meta10639){return (new photosure.blog.t10638(type__$1,post__$1,map__10637__$2,owner__$1,p__10632__$1,post_view__$1,meta10639));
});})(map__10637,map__10637__$1,post,type))
;
}
return (new photosure.blog.t10638(type,post,map__10637__$1,owner,p__10632,post_view,null));
});
photosure.blog.posts_view = (function posts_view(app,owner){if(typeof photosure.blog.t10646 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t10646 = (function (owner,app,posts_view,meta10647){
this.owner = owner;
this.app = app;
this.posts_view = posts_view;
this.meta10647 = meta10647;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t10646.cljs$lang$type = true;
photosure.blog.t10646.cljs$lang$ctorStr = "photosure.blog/t10646";
photosure.blog.t10646.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t10646");
});
photosure.blog.t10646.prototype.om$core$IRenderState$ = true;
photosure.blog.t10646.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__10649){var self__ = this;
var map__10650 = p__10649;var map__10650__$1 = ((cljs.core.seq_QMARK_.call(null,map__10650))?cljs.core.apply.call(null,cljs.core.hash_map,map__10650):map__10650);var scroll_chan = cljs.core.get.call(null,map__10650__$1,new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748));var this$__$1 = this;return cljs.core.apply.call(null,om.dom.div,{"onScroll": ((function (this$__$1,map__10650,map__10650__$1,scroll_chan){
return (function (){return cljs.core.async.put_BANG_.call(null,scroll_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),om.core.get_node.call(null,self__.owner).scrollTop,new cljs.core.Keyword(null,"height","height",1025178622),((1) + om.core.get_node.call(null,self__.owner).scrollHeight)], null));
});})(this$__$1,map__10650,map__10650__$1,scroll_chan))
, "id": "post-list"},om.core.build_all.call(null,photosure.blog.post_view,new cljs.core.Keyword(null,"posts","posts",760043164).cljs$core$IFn$_invoke$arity$1(self__.app)));
});
photosure.blog.t10646.prototype.om$core$IWillMount$ = true;
photosure.blog.t10646.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return photosure.util.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),"api/posts",new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),((function (___$1){
return (function (___$2){return om.core.update_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"posts","posts",760043164),___$2);
});})(___$1))
], null));
});
photosure.blog.t10646.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10648){var self__ = this;
var _10648__$1 = this;return self__.meta10647;
});
photosure.blog.t10646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10648,meta10647__$1){var self__ = this;
var _10648__$1 = this;return (new photosure.blog.t10646(self__.owner,self__.app,self__.posts_view,meta10647__$1));
});
photosure.blog.__GT_t10646 = (function __GT_t10646(owner__$1,app__$1,posts_view__$1,meta10647){return (new photosure.blog.t10646(owner__$1,app__$1,posts_view__$1,meta10647));
});
}
return (new photosure.blog.t10646(owner,app,posts_view,null));
});
photosure.blog.translate = (function translate(x,y){return ("translate("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)+"%,"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)+"%)");
});
photosure.blog.scroll_bar = (function scroll_bar(app,owner){if(typeof photosure.blog.t10656 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t10656 = (function (owner,app,scroll_bar,meta10657){
this.owner = owner;
this.app = app;
this.scroll_bar = scroll_bar;
this.meta10657 = meta10657;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t10656.cljs$lang$type = true;
photosure.blog.t10656.cljs$lang$ctorStr = "photosure.blog/t10656";
photosure.blog.t10656.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t10656");
});
photosure.blog.t10656.prototype.om$core$IRenderState$ = true;
photosure.blog.t10656.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__10659){var self__ = this;
var map__10660 = p__10659;var map__10660__$1 = ((cljs.core.seq_QMARK_.call(null,map__10660))?cljs.core.apply.call(null,cljs.core.hash_map,map__10660):map__10660);var track_height = cljs.core.get.call(null,map__10660__$1,new cljs.core.Keyword(null,"track-height","track-height",-1871630545));var scroll_height = cljs.core.get.call(null,map__10660__$1,new cljs.core.Keyword(null,"scroll-height","scroll-height",882644149));var scroll_top = cljs.core.get.call(null,map__10660__$1,new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100));var this$__$1 = this;return React.DOM.div({"style": {"top": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round.call(null,(track_height * (scroll_top / scroll_height))))+"px")}, "className": "scroll-bar"});
});
photosure.blog.t10656.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10658){var self__ = this;
var _10658__$1 = this;return self__.meta10657;
});
photosure.blog.t10656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10658,meta10657__$1){var self__ = this;
var _10658__$1 = this;return (new photosure.blog.t10656(self__.owner,self__.app,self__.scroll_bar,meta10657__$1));
});
photosure.blog.__GT_t10656 = (function __GT_t10656(owner__$1,app__$1,scroll_bar__$1,meta10657){return (new photosure.blog.t10656(owner__$1,app__$1,scroll_bar__$1,meta10657));
});
}
return (new photosure.blog.t10656(owner,app,scroll_bar,null));
});
photosure.blog.blog = (function blog(app,owner){if(typeof photosure.blog.t10689 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t10689 = (function (owner,app,blog,meta10690){
this.owner = owner;
this.app = app;
this.blog = blog;
this.meta10690 = meta10690;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t10689.cljs$lang$type = true;
photosure.blog.t10689.cljs$lang$ctorStr = "photosure.blog/t10689";
photosure.blog.t10689.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t10689");
});
photosure.blog.t10689.prototype.om$core$IRenderState$ = true;
photosure.blog.t10689.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__10692){var self__ = this;
var map__10693 = p__10692;var map__10693__$1 = ((cljs.core.seq_QMARK_.call(null,map__10693))?cljs.core.apply.call(null,cljs.core.hash_map,map__10693):map__10693);var track_height = cljs.core.get.call(null,map__10693__$1,new cljs.core.Keyword(null,"track-height","track-height",-1871630545));var scroll_height = cljs.core.get.call(null,map__10693__$1,new cljs.core.Keyword(null,"scroll-height","scroll-height",882644149));var scroll_top = cljs.core.get.call(null,map__10693__$1,new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100));var scroll_chan = cljs.core.get.call(null,map__10693__$1,new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748));var this$__$1 = this;return React.DOM.div({"id": "blog-gallery-container"},React.DOM.div({"id": "blog-gallery"},React.DOM.div({"id": "overflow-wrapper"},React.DOM.div({"className": "scroll-header"}),om.core.build.call(null,photosure.blog.posts_view,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748),scroll_chan], null)], null)),React.DOM.div({"className": "scroll-footer"})),om.core.build.call(null,photosure.blog.scroll_bar,self__.app,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),scroll_top,new cljs.core.Keyword(null,"scroll-height","scroll-height",882644149),scroll_height,new cljs.core.Keyword(null,"track-height","track-height",-1871630545),track_height], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),scroll_top,new cljs.core.Keyword(null,"scroll-height","scroll-height",882644149),scroll_height,new cljs.core.Keyword(null,"track-height","track-height",-1871630545),track_height], null)], null))));
});
photosure.blog.t10689.prototype.om$core$IDidMount$ = true;
photosure.blog.t10689.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"track-height","track-height",-1871630545),om.core.get_node.call(null,self__.owner).clientHeight);
});
photosure.blog.t10689.prototype.om$core$IWillMount$ = true;
photosure.blog.t10689.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var scroll_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748));var c__6367__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto__,scroll_chan,___$1){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto__,scroll_chan,___$1){
return (function (state_10705){var state_val_10706 = (state_10705[(1)]);if((state_val_10706 === (4)))
{var inst_10696 = (state_10705[(2)]);var inst_10697 = new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100).cljs$core$IFn$_invoke$arity$1(inst_10696);var inst_10698 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),inst_10697);var inst_10699 = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(inst_10696);var inst_10700 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"scroll-height","scroll-height",882644149),inst_10699);var state_10705__$1 = (function (){var statearr_10707 = state_10705;(statearr_10707[(7)] = inst_10698);
(statearr_10707[(8)] = inst_10700);
return statearr_10707;
})();var statearr_10708_10717 = state_10705__$1;(statearr_10708_10717[(2)] = null);
(statearr_10708_10717[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10706 === (3)))
{var inst_10703 = (state_10705[(2)]);var state_10705__$1 = state_10705;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10705__$1,inst_10703);
} else
{if((state_val_10706 === (2)))
{var state_10705__$1 = state_10705;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10705__$1,(4),scroll_chan);
} else
{if((state_val_10706 === (1)))
{var state_10705__$1 = state_10705;var statearr_10709_10718 = state_10705__$1;(statearr_10709_10718[(2)] = null);
(statearr_10709_10718[(1)] = (2));
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
var state_machine__6353__auto____0 = (function (){var statearr_10713 = [null,null,null,null,null,null,null,null,null];(statearr_10713[(0)] = state_machine__6353__auto__);
(statearr_10713[(1)] = (1));
return statearr_10713;
});
var state_machine__6353__auto____1 = (function (state_10705){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_10705);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e10714){if((e10714 instanceof Object))
{var ex__6356__auto__ = e10714;var statearr_10715_10719 = state_10705;(statearr_10715_10719[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10705);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10714;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10720 = state_10705;
state_10705 = G__10720;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_10705){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_10705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto__,scroll_chan,___$1))
})();var state__6369__auto__ = (function (){var statearr_10716 = f__6368__auto__.call(null);(statearr_10716[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto__);
return statearr_10716;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto__,scroll_chan,___$1))
);
return c__6367__auto__;
});
photosure.blog.t10689.prototype.om$core$IInitState$ = true;
photosure.blog.t10689.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),(0),new cljs.core.Keyword(null,"scroll-height","scroll-height",882644149),(1),new cljs.core.Keyword(null,"track-height","track-height",-1871630545),(0)], null);
});
photosure.blog.t10689.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10691){var self__ = this;
var _10691__$1 = this;return self__.meta10690;
});
photosure.blog.t10689.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10691,meta10690__$1){var self__ = this;
var _10691__$1 = this;return (new photosure.blog.t10689(self__.owner,self__.app,self__.blog,meta10690__$1));
});
photosure.blog.__GT_t10689 = (function __GT_t10689(owner__$1,app__$1,blog__$1,meta10690){return (new photosure.blog.t10689(owner__$1,app__$1,blog__$1,meta10690));
});
}
return (new photosure.blog.t10689(owner,app,blog,null));
});
photosure.blog.render = (function render(){cljs.core.println.call(null,"yo");
return om.core.root.call(null,photosure.blog.blog,photosure.blog.app_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("dynamic-content")], null));
});

//# sourceMappingURL=blog.js.map