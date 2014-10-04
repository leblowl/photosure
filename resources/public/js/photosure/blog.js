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
photosure.blog.text_view = (function text_view(caption,owner){if(typeof photosure.blog.t9957 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t9957 = (function (owner,caption,text_view,meta9958){
this.owner = owner;
this.caption = caption;
this.text_view = text_view;
this.meta9958 = meta9958;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t9957.cljs$lang$type = true;
photosure.blog.t9957.cljs$lang$ctorStr = "photosure.blog/t9957";
photosure.blog.t9957.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t9957");
});
photosure.blog.t9957.prototype.om$core$IRender$ = true;
photosure.blog.t9957.prototype.om$core$IRender$render$arity$1 = (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return React.DOM.div({"dangerouslySetInnerHTML": {"__html": self__.caption}, "className": "caption"},null);
});
photosure.blog.t9957.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9959){var self__ = this;
var _9959__$1 = this;return self__.meta9958;
});
photosure.blog.t9957.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9959,meta9958__$1){var self__ = this;
var _9959__$1 = this;return (new photosure.blog.t9957(self__.owner,self__.caption,self__.text_view,meta9958__$1));
});
photosure.blog.__GT_t9957 = (function __GT_t9957(owner__$1,caption__$1,text_view__$1,meta9958){return (new photosure.blog.t9957(owner__$1,caption__$1,text_view__$1,meta9958));
});
}
return (new photosure.blog.t9957(owner,caption,text_view,null));
});
photosure.blog.text_post_view = (function text_post_view(p__9960,owner){var map__9965 = p__9960;var map__9965__$1 = ((cljs.core.seq_QMARK_.call(null,map__9965))?cljs.core.apply.call(null,cljs.core.hash_map,map__9965):map__9965);var id = cljs.core.get.call(null,map__9965__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var title = cljs.core.get.call(null,map__9965__$1,new cljs.core.Keyword(null,"title","title",636505583));var body = cljs.core.get.call(null,map__9965__$1,new cljs.core.Keyword(null,"body","body",-2049205669));if(typeof photosure.blog.t9966 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t9966 = (function (body,title,id,map__9965,owner,p__9960,text_post_view,meta9967){
this.body = body;
this.title = title;
this.id = id;
this.map__9965 = map__9965;
this.owner = owner;
this.p__9960 = p__9960;
this.text_post_view = text_post_view;
this.meta9967 = meta9967;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t9966.cljs$lang$type = true;
photosure.blog.t9966.cljs$lang$ctorStr = "photosure.blog/t9966";
photosure.blog.t9966.cljs$lang$ctorPrWriter = ((function (map__9965,map__9965__$1,id,title,body){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t9966");
});})(map__9965,map__9965__$1,id,title,body))
;
photosure.blog.t9966.prototype.om$core$IRender$ = true;
photosure.blog.t9966.prototype.om$core$IRender$render$arity$1 = ((function (map__9965,map__9965__$1,id,title,body){
return (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return React.DOM.div({"className": "post", "id": self__.id},React.DOM.h2({"className": "blog-title"},self__.title),om.core.build.call(null,photosure.blog.text_view,self__.body));
});})(map__9965,map__9965__$1,id,title,body))
;
photosure.blog.t9966.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__9965,map__9965__$1,id,title,body){
return (function (_9968){var self__ = this;
var _9968__$1 = this;return self__.meta9967;
});})(map__9965,map__9965__$1,id,title,body))
;
photosure.blog.t9966.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__9965,map__9965__$1,id,title,body){
return (function (_9968,meta9967__$1){var self__ = this;
var _9968__$1 = this;return (new photosure.blog.t9966(self__.body,self__.title,self__.id,self__.map__9965,self__.owner,self__.p__9960,self__.text_post_view,meta9967__$1));
});})(map__9965,map__9965__$1,id,title,body))
;
photosure.blog.__GT_t9966 = ((function (map__9965,map__9965__$1,id,title,body){
return (function __GT_t9966(body__$1,title__$1,id__$1,map__9965__$2,owner__$1,p__9960__$1,text_post_view__$1,meta9967){return (new photosure.blog.t9966(body__$1,title__$1,id__$1,map__9965__$2,owner__$1,p__9960__$1,text_post_view__$1,meta9967));
});})(map__9965,map__9965__$1,id,title,body))
;
}
return (new photosure.blog.t9966(body,title,id,map__9965__$1,owner,p__9960,text_post_view,null));
});
photosure.blog.photo_post_view = (function photo_post_view(p__9969,owner){var map__9974 = p__9969;var map__9974__$1 = ((cljs.core.seq_QMARK_.call(null,map__9974))?cljs.core.apply.call(null,cljs.core.hash_map,map__9974):map__9974);var id = cljs.core.get.call(null,map__9974__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var photos = cljs.core.get.call(null,map__9974__$1,new cljs.core.Keyword(null,"photos","photos",11691538));var caption = cljs.core.get.call(null,map__9974__$1,new cljs.core.Keyword(null,"caption","caption",-855383902));if(typeof photosure.blog.t9975 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t9975 = (function (caption,photos,id,map__9974,owner,p__9969,photo_post_view,meta9976){
this.caption = caption;
this.photos = photos;
this.id = id;
this.map__9974 = map__9974;
this.owner = owner;
this.p__9969 = p__9969;
this.photo_post_view = photo_post_view;
this.meta9976 = meta9976;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t9975.cljs$lang$type = true;
photosure.blog.t9975.cljs$lang$ctorStr = "photosure.blog/t9975";
photosure.blog.t9975.cljs$lang$ctorPrWriter = ((function (map__9974,map__9974__$1,id,photos,caption){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t9975");
});})(map__9974,map__9974__$1,id,photos,caption))
;
photosure.blog.t9975.prototype.om$core$IRender$ = true;
photosure.blog.t9975.prototype.om$core$IRender$render$arity$1 = ((function (map__9974,map__9974__$1,id,photos,caption){
return (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return React.DOM.div({"className": "post", "id": self__.id},cljs.core.apply.call(null,om.dom.div,{"className": "blog-photo"},cljs.core.map.call(null,((function (this__5143__auto____$1,map__9974,map__9974__$1,id,photos,caption){
return (function (photo){return React.DOM.img({"src": new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"original_size","original_size",-1238801714).cljs$core$IFn$_invoke$arity$1(photo))});
});})(this__5143__auto____$1,map__9974,map__9974__$1,id,photos,caption))
,self__.photos)),om.core.build.call(null,photosure.blog.text_view,self__.caption));
});})(map__9974,map__9974__$1,id,photos,caption))
;
photosure.blog.t9975.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__9974,map__9974__$1,id,photos,caption){
return (function (_9977){var self__ = this;
var _9977__$1 = this;return self__.meta9976;
});})(map__9974,map__9974__$1,id,photos,caption))
;
photosure.blog.t9975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__9974,map__9974__$1,id,photos,caption){
return (function (_9977,meta9976__$1){var self__ = this;
var _9977__$1 = this;return (new photosure.blog.t9975(self__.caption,self__.photos,self__.id,self__.map__9974,self__.owner,self__.p__9969,self__.photo_post_view,meta9976__$1));
});})(map__9974,map__9974__$1,id,photos,caption))
;
photosure.blog.__GT_t9975 = ((function (map__9974,map__9974__$1,id,photos,caption){
return (function __GT_t9975(caption__$1,photos__$1,id__$1,map__9974__$2,owner__$1,p__9969__$1,photo_post_view__$1,meta9976){return (new photosure.blog.t9975(caption__$1,photos__$1,id__$1,map__9974__$2,owner__$1,p__9969__$1,photo_post_view__$1,meta9976));
});})(map__9974,map__9974__$1,id,photos,caption))
;
}
return (new photosure.blog.t9975(caption,photos,id,map__9974__$1,owner,p__9969,photo_post_view,null));
});
photosure.blog.post_view = (function post_view(p__9978,owner){var map__9983 = p__9978;var map__9983__$1 = ((cljs.core.seq_QMARK_.call(null,map__9983))?cljs.core.apply.call(null,cljs.core.hash_map,map__9983):map__9983);var post = map__9983__$1;var type = cljs.core.get.call(null,map__9983__$1,new cljs.core.Keyword(null,"type","type",1174270348));if(typeof photosure.blog.t9984 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t9984 = (function (type,post,map__9983,owner,p__9978,post_view,meta9985){
this.type = type;
this.post = post;
this.map__9983 = map__9983;
this.owner = owner;
this.p__9978 = p__9978;
this.post_view = post_view;
this.meta9985 = meta9985;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t9984.cljs$lang$type = true;
photosure.blog.t9984.cljs$lang$ctorStr = "photosure.blog/t9984";
photosure.blog.t9984.cljs$lang$ctorPrWriter = ((function (map__9983,map__9983__$1,post,type){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t9984");
});})(map__9983,map__9983__$1,post,type))
;
photosure.blog.t9984.prototype.om$core$IRender$ = true;
photosure.blog.t9984.prototype.om$core$IRender$render$arity$1 = ((function (map__9983,map__9983__$1,post,type){
return (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core._EQ_.call(null,self__.type,"photo"))
{return om.core.build.call(null,photosure.blog.photo_post_view,self__.post);
} else
{return om.core.build.call(null,photosure.blog.text_post_view,self__.post);
}
});})(map__9983,map__9983__$1,post,type))
;
photosure.blog.t9984.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__9983,map__9983__$1,post,type){
return (function (_9986){var self__ = this;
var _9986__$1 = this;return self__.meta9985;
});})(map__9983,map__9983__$1,post,type))
;
photosure.blog.t9984.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__9983,map__9983__$1,post,type){
return (function (_9986,meta9985__$1){var self__ = this;
var _9986__$1 = this;return (new photosure.blog.t9984(self__.type,self__.post,self__.map__9983,self__.owner,self__.p__9978,self__.post_view,meta9985__$1));
});})(map__9983,map__9983__$1,post,type))
;
photosure.blog.__GT_t9984 = ((function (map__9983,map__9983__$1,post,type){
return (function __GT_t9984(type__$1,post__$1,map__9983__$2,owner__$1,p__9978__$1,post_view__$1,meta9985){return (new photosure.blog.t9984(type__$1,post__$1,map__9983__$2,owner__$1,p__9978__$1,post_view__$1,meta9985));
});})(map__9983,map__9983__$1,post,type))
;
}
return (new photosure.blog.t9984(type,post,map__9983__$1,owner,p__9978,post_view,null));
});
photosure.blog.posts_view = (function posts_view(app,owner){if(typeof photosure.blog.t9992 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t9992 = (function (owner,app,posts_view,meta9993){
this.owner = owner;
this.app = app;
this.posts_view = posts_view;
this.meta9993 = meta9993;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t9992.cljs$lang$type = true;
photosure.blog.t9992.cljs$lang$ctorStr = "photosure.blog/t9992";
photosure.blog.t9992.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t9992");
});
photosure.blog.t9992.prototype.om$core$IRenderState$ = true;
photosure.blog.t9992.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__9995){var self__ = this;
var map__9996 = p__9995;var map__9996__$1 = ((cljs.core.seq_QMARK_.call(null,map__9996))?cljs.core.apply.call(null,cljs.core.hash_map,map__9996):map__9996);var scroll_chan = cljs.core.get.call(null,map__9996__$1,new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748));var this$__$1 = this;return cljs.core.apply.call(null,om.dom.div,{"onScroll": ((function (this$__$1,map__9996,map__9996__$1,scroll_chan){
return (function (){return cljs.core.async.put_BANG_.call(null,scroll_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),om.core.get_node.call(null,self__.owner).scrollTop,new cljs.core.Keyword(null,"height","height",1025178622),((1) + om.core.get_node.call(null,self__.owner).scrollHeight)], null));
});})(this$__$1,map__9996,map__9996__$1,scroll_chan))
, "id": "post-list"},om.core.build_all.call(null,photosure.blog.post_view,new cljs.core.Keyword(null,"posts","posts",760043164).cljs$core$IFn$_invoke$arity$1(self__.app)));
});
photosure.blog.t9992.prototype.om$core$IWillMount$ = true;
photosure.blog.t9992.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return photosure.util.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),"api/posts",new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),((function (___$1){
return (function (___$2){return om.core.update_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"posts","posts",760043164),___$2);
});})(___$1))
], null));
});
photosure.blog.t9992.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9994){var self__ = this;
var _9994__$1 = this;return self__.meta9993;
});
photosure.blog.t9992.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9994,meta9993__$1){var self__ = this;
var _9994__$1 = this;return (new photosure.blog.t9992(self__.owner,self__.app,self__.posts_view,meta9993__$1));
});
photosure.blog.__GT_t9992 = (function __GT_t9992(owner__$1,app__$1,posts_view__$1,meta9993){return (new photosure.blog.t9992(owner__$1,app__$1,posts_view__$1,meta9993));
});
}
return (new photosure.blog.t9992(owner,app,posts_view,null));
});
photosure.blog.translate = (function translate(x,y){return ("translate("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)+"%,"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)+"%)");
});
photosure.blog.scroll_bar = (function scroll_bar(app,owner){if(typeof photosure.blog.t10002 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t10002 = (function (owner,app,scroll_bar,meta10003){
this.owner = owner;
this.app = app;
this.scroll_bar = scroll_bar;
this.meta10003 = meta10003;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t10002.cljs$lang$type = true;
photosure.blog.t10002.cljs$lang$ctorStr = "photosure.blog/t10002";
photosure.blog.t10002.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t10002");
});
photosure.blog.t10002.prototype.om$core$IRenderState$ = true;
photosure.blog.t10002.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__10005){var self__ = this;
var map__10006 = p__10005;var map__10006__$1 = ((cljs.core.seq_QMARK_.call(null,map__10006))?cljs.core.apply.call(null,cljs.core.hash_map,map__10006):map__10006);var track_height = cljs.core.get.call(null,map__10006__$1,new cljs.core.Keyword(null,"track-height","track-height",-1871630545));var scroll_height = cljs.core.get.call(null,map__10006__$1,new cljs.core.Keyword(null,"scroll-height","scroll-height",882644149));var scroll_top = cljs.core.get.call(null,map__10006__$1,new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100));var this$__$1 = this;return React.DOM.div({"style": {"top": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round.call(null,(track_height * (scroll_top / scroll_height))))+"px")}, "className": "scroll-bar"});
});
photosure.blog.t10002.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10004){var self__ = this;
var _10004__$1 = this;return self__.meta10003;
});
photosure.blog.t10002.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10004,meta10003__$1){var self__ = this;
var _10004__$1 = this;return (new photosure.blog.t10002(self__.owner,self__.app,self__.scroll_bar,meta10003__$1));
});
photosure.blog.__GT_t10002 = (function __GT_t10002(owner__$1,app__$1,scroll_bar__$1,meta10003){return (new photosure.blog.t10002(owner__$1,app__$1,scroll_bar__$1,meta10003));
});
}
return (new photosure.blog.t10002(owner,app,scroll_bar,null));
});
photosure.blog.blog = (function blog(app,owner){if(typeof photosure.blog.t10035 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t10035 = (function (owner,app,blog,meta10036){
this.owner = owner;
this.app = app;
this.blog = blog;
this.meta10036 = meta10036;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t10035.cljs$lang$type = true;
photosure.blog.t10035.cljs$lang$ctorStr = "photosure.blog/t10035";
photosure.blog.t10035.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t10035");
});
photosure.blog.t10035.prototype.om$core$IRenderState$ = true;
photosure.blog.t10035.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__10038){var self__ = this;
var map__10039 = p__10038;var map__10039__$1 = ((cljs.core.seq_QMARK_.call(null,map__10039))?cljs.core.apply.call(null,cljs.core.hash_map,map__10039):map__10039);var track_height = cljs.core.get.call(null,map__10039__$1,new cljs.core.Keyword(null,"track-height","track-height",-1871630545));var scroll_height = cljs.core.get.call(null,map__10039__$1,new cljs.core.Keyword(null,"scroll-height","scroll-height",882644149));var scroll_top = cljs.core.get.call(null,map__10039__$1,new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100));var scroll_chan = cljs.core.get.call(null,map__10039__$1,new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748));var this$__$1 = this;return React.DOM.div({"id": "blog-gallery-container"},React.DOM.div({"id": "blog-gallery"},React.DOM.div({"id": "overflow-wrapper"},React.DOM.div({"className": "scroll-header"}),om.core.build.call(null,photosure.blog.posts_view,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748),scroll_chan], null)], null)),React.DOM.div({"className": "scroll-footer"})),om.core.build.call(null,photosure.blog.scroll_bar,self__.app,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),scroll_top,new cljs.core.Keyword(null,"scroll-height","scroll-height",882644149),scroll_height,new cljs.core.Keyword(null,"track-height","track-height",-1871630545),track_height], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),scroll_top,new cljs.core.Keyword(null,"scroll-height","scroll-height",882644149),scroll_height,new cljs.core.Keyword(null,"track-height","track-height",-1871630545),track_height], null)], null))));
});
photosure.blog.t10035.prototype.om$core$IDidMount$ = true;
photosure.blog.t10035.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"track-height","track-height",-1871630545),om.core.get_node.call(null,self__.owner).clientHeight);
});
photosure.blog.t10035.prototype.om$core$IWillMount$ = true;
photosure.blog.t10035.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var scroll_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748));var c__6367__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto__,scroll_chan,___$1){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto__,scroll_chan,___$1){
return (function (state_10051){var state_val_10052 = (state_10051[(1)]);if((state_val_10052 === (4)))
{var inst_10042 = (state_10051[(2)]);var inst_10043 = new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100).cljs$core$IFn$_invoke$arity$1(inst_10042);var inst_10044 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),inst_10043);var inst_10045 = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(inst_10042);var inst_10046 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"scroll-height","scroll-height",882644149),inst_10045);var state_10051__$1 = (function (){var statearr_10053 = state_10051;(statearr_10053[(7)] = inst_10044);
(statearr_10053[(8)] = inst_10046);
return statearr_10053;
})();var statearr_10054_10063 = state_10051__$1;(statearr_10054_10063[(2)] = null);
(statearr_10054_10063[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10052 === (3)))
{var inst_10049 = (state_10051[(2)]);var state_10051__$1 = state_10051;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10051__$1,inst_10049);
} else
{if((state_val_10052 === (2)))
{var state_10051__$1 = state_10051;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10051__$1,(4),scroll_chan);
} else
{if((state_val_10052 === (1)))
{var state_10051__$1 = state_10051;var statearr_10055_10064 = state_10051__$1;(statearr_10055_10064[(2)] = null);
(statearr_10055_10064[(1)] = (2));
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
var state_machine__6353__auto____0 = (function (){var statearr_10059 = [null,null,null,null,null,null,null,null,null];(statearr_10059[(0)] = state_machine__6353__auto__);
(statearr_10059[(1)] = (1));
return statearr_10059;
});
var state_machine__6353__auto____1 = (function (state_10051){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_10051);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e10060){if((e10060 instanceof Object))
{var ex__6356__auto__ = e10060;var statearr_10061_10065 = state_10051;(statearr_10061_10065[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10051);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10060;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10066 = state_10051;
state_10051 = G__10066;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_10051){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_10051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto__,scroll_chan,___$1))
})();var state__6369__auto__ = (function (){var statearr_10062 = f__6368__auto__.call(null);(statearr_10062[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto__);
return statearr_10062;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto__,scroll_chan,___$1))
);
return c__6367__auto__;
});
photosure.blog.t10035.prototype.om$core$IInitState$ = true;
photosure.blog.t10035.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),(0),new cljs.core.Keyword(null,"scroll-height","scroll-height",882644149),(1),new cljs.core.Keyword(null,"track-height","track-height",-1871630545),(0)], null);
});
photosure.blog.t10035.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10037){var self__ = this;
var _10037__$1 = this;return self__.meta10036;
});
photosure.blog.t10035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10037,meta10036__$1){var self__ = this;
var _10037__$1 = this;return (new photosure.blog.t10035(self__.owner,self__.app,self__.blog,meta10036__$1));
});
photosure.blog.__GT_t10035 = (function __GT_t10035(owner__$1,app__$1,blog__$1,meta10036){return (new photosure.blog.t10035(owner__$1,app__$1,blog__$1,meta10036));
});
}
return (new photosure.blog.t10035(owner,app,blog,null));
});
photosure.blog.render = (function render(){cljs.core.println.call(null,"yo");
return om.core.root.call(null,photosure.blog.blog,photosure.blog.app_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("dynamic-content")], null));
});

//# sourceMappingURL=blog.js.map