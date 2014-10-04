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
photosure.blog.text_view = (function text_view(caption,owner){if(typeof photosure.blog.t12330 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t12330 = (function (owner,caption,text_view,meta12331){
this.owner = owner;
this.caption = caption;
this.text_view = text_view;
this.meta12331 = meta12331;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t12330.cljs$lang$type = true;
photosure.blog.t12330.cljs$lang$ctorStr = "photosure.blog/t12330";
photosure.blog.t12330.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t12330");
});
photosure.blog.t12330.prototype.om$core$IRender$ = true;
photosure.blog.t12330.prototype.om$core$IRender$render$arity$1 = (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return React.DOM.div({"dangerouslySetInnerHTML": {"__html": self__.caption}, "className": "caption"},null);
});
photosure.blog.t12330.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12332){var self__ = this;
var _12332__$1 = this;return self__.meta12331;
});
photosure.blog.t12330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12332,meta12331__$1){var self__ = this;
var _12332__$1 = this;return (new photosure.blog.t12330(self__.owner,self__.caption,self__.text_view,meta12331__$1));
});
photosure.blog.__GT_t12330 = (function __GT_t12330(owner__$1,caption__$1,text_view__$1,meta12331){return (new photosure.blog.t12330(owner__$1,caption__$1,text_view__$1,meta12331));
});
}
return (new photosure.blog.t12330(owner,caption,text_view,null));
});
photosure.blog.text_post_view = (function text_post_view(p__12333,owner){var map__12338 = p__12333;var map__12338__$1 = ((cljs.core.seq_QMARK_.call(null,map__12338))?cljs.core.apply.call(null,cljs.core.hash_map,map__12338):map__12338);var id = cljs.core.get.call(null,map__12338__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var title = cljs.core.get.call(null,map__12338__$1,new cljs.core.Keyword(null,"title","title",636505583));var body = cljs.core.get.call(null,map__12338__$1,new cljs.core.Keyword(null,"body","body",-2049205669));if(typeof photosure.blog.t12339 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t12339 = (function (body,title,id,map__12338,owner,p__12333,text_post_view,meta12340){
this.body = body;
this.title = title;
this.id = id;
this.map__12338 = map__12338;
this.owner = owner;
this.p__12333 = p__12333;
this.text_post_view = text_post_view;
this.meta12340 = meta12340;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t12339.cljs$lang$type = true;
photosure.blog.t12339.cljs$lang$ctorStr = "photosure.blog/t12339";
photosure.blog.t12339.cljs$lang$ctorPrWriter = ((function (map__12338,map__12338__$1,id,title,body){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t12339");
});})(map__12338,map__12338__$1,id,title,body))
;
photosure.blog.t12339.prototype.om$core$IRender$ = true;
photosure.blog.t12339.prototype.om$core$IRender$render$arity$1 = ((function (map__12338,map__12338__$1,id,title,body){
return (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return React.DOM.div({"className": "post", "id": self__.id},React.DOM.h2({"className": "blog-title"},self__.title),om.core.build.call(null,photosure.blog.text_view,self__.body));
});})(map__12338,map__12338__$1,id,title,body))
;
photosure.blog.t12339.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__12338,map__12338__$1,id,title,body){
return (function (_12341){var self__ = this;
var _12341__$1 = this;return self__.meta12340;
});})(map__12338,map__12338__$1,id,title,body))
;
photosure.blog.t12339.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__12338,map__12338__$1,id,title,body){
return (function (_12341,meta12340__$1){var self__ = this;
var _12341__$1 = this;return (new photosure.blog.t12339(self__.body,self__.title,self__.id,self__.map__12338,self__.owner,self__.p__12333,self__.text_post_view,meta12340__$1));
});})(map__12338,map__12338__$1,id,title,body))
;
photosure.blog.__GT_t12339 = ((function (map__12338,map__12338__$1,id,title,body){
return (function __GT_t12339(body__$1,title__$1,id__$1,map__12338__$2,owner__$1,p__12333__$1,text_post_view__$1,meta12340){return (new photosure.blog.t12339(body__$1,title__$1,id__$1,map__12338__$2,owner__$1,p__12333__$1,text_post_view__$1,meta12340));
});})(map__12338,map__12338__$1,id,title,body))
;
}
return (new photosure.blog.t12339(body,title,id,map__12338__$1,owner,p__12333,text_post_view,null));
});
photosure.blog.photo_post_view = (function photo_post_view(p__12342,owner){var map__12347 = p__12342;var map__12347__$1 = ((cljs.core.seq_QMARK_.call(null,map__12347))?cljs.core.apply.call(null,cljs.core.hash_map,map__12347):map__12347);var id = cljs.core.get.call(null,map__12347__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var photos = cljs.core.get.call(null,map__12347__$1,new cljs.core.Keyword(null,"photos","photos",11691538));var caption = cljs.core.get.call(null,map__12347__$1,new cljs.core.Keyword(null,"caption","caption",-855383902));if(typeof photosure.blog.t12348 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t12348 = (function (caption,photos,id,map__12347,owner,p__12342,photo_post_view,meta12349){
this.caption = caption;
this.photos = photos;
this.id = id;
this.map__12347 = map__12347;
this.owner = owner;
this.p__12342 = p__12342;
this.photo_post_view = photo_post_view;
this.meta12349 = meta12349;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t12348.cljs$lang$type = true;
photosure.blog.t12348.cljs$lang$ctorStr = "photosure.blog/t12348";
photosure.blog.t12348.cljs$lang$ctorPrWriter = ((function (map__12347,map__12347__$1,id,photos,caption){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t12348");
});})(map__12347,map__12347__$1,id,photos,caption))
;
photosure.blog.t12348.prototype.om$core$IRender$ = true;
photosure.blog.t12348.prototype.om$core$IRender$render$arity$1 = ((function (map__12347,map__12347__$1,id,photos,caption){
return (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return React.DOM.div({"className": "post", "id": self__.id},cljs.core.apply.call(null,om.dom.div,{"className": "blog-photo"},cljs.core.map.call(null,((function (this__5143__auto____$1,map__12347,map__12347__$1,id,photos,caption){
return (function (photo){return React.DOM.img({"src": new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"original_size","original_size",-1238801714).cljs$core$IFn$_invoke$arity$1(photo))});
});})(this__5143__auto____$1,map__12347,map__12347__$1,id,photos,caption))
,self__.photos)),om.core.build.call(null,photosure.blog.text_view,self__.caption));
});})(map__12347,map__12347__$1,id,photos,caption))
;
photosure.blog.t12348.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__12347,map__12347__$1,id,photos,caption){
return (function (_12350){var self__ = this;
var _12350__$1 = this;return self__.meta12349;
});})(map__12347,map__12347__$1,id,photos,caption))
;
photosure.blog.t12348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__12347,map__12347__$1,id,photos,caption){
return (function (_12350,meta12349__$1){var self__ = this;
var _12350__$1 = this;return (new photosure.blog.t12348(self__.caption,self__.photos,self__.id,self__.map__12347,self__.owner,self__.p__12342,self__.photo_post_view,meta12349__$1));
});})(map__12347,map__12347__$1,id,photos,caption))
;
photosure.blog.__GT_t12348 = ((function (map__12347,map__12347__$1,id,photos,caption){
return (function __GT_t12348(caption__$1,photos__$1,id__$1,map__12347__$2,owner__$1,p__12342__$1,photo_post_view__$1,meta12349){return (new photosure.blog.t12348(caption__$1,photos__$1,id__$1,map__12347__$2,owner__$1,p__12342__$1,photo_post_view__$1,meta12349));
});})(map__12347,map__12347__$1,id,photos,caption))
;
}
return (new photosure.blog.t12348(caption,photos,id,map__12347__$1,owner,p__12342,photo_post_view,null));
});
photosure.blog.post_view = (function post_view(p__12351,owner){var map__12356 = p__12351;var map__12356__$1 = ((cljs.core.seq_QMARK_.call(null,map__12356))?cljs.core.apply.call(null,cljs.core.hash_map,map__12356):map__12356);var post = map__12356__$1;var type = cljs.core.get.call(null,map__12356__$1,new cljs.core.Keyword(null,"type","type",1174270348));if(typeof photosure.blog.t12357 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t12357 = (function (type,post,map__12356,owner,p__12351,post_view,meta12358){
this.type = type;
this.post = post;
this.map__12356 = map__12356;
this.owner = owner;
this.p__12351 = p__12351;
this.post_view = post_view;
this.meta12358 = meta12358;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t12357.cljs$lang$type = true;
photosure.blog.t12357.cljs$lang$ctorStr = "photosure.blog/t12357";
photosure.blog.t12357.cljs$lang$ctorPrWriter = ((function (map__12356,map__12356__$1,post,type){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t12357");
});})(map__12356,map__12356__$1,post,type))
;
photosure.blog.t12357.prototype.om$core$IRender$ = true;
photosure.blog.t12357.prototype.om$core$IRender$render$arity$1 = ((function (map__12356,map__12356__$1,post,type){
return (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core._EQ_.call(null,self__.type,"photo"))
{return om.core.build.call(null,photosure.blog.photo_post_view,self__.post);
} else
{return om.core.build.call(null,photosure.blog.text_post_view,self__.post);
}
});})(map__12356,map__12356__$1,post,type))
;
photosure.blog.t12357.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__12356,map__12356__$1,post,type){
return (function (_12359){var self__ = this;
var _12359__$1 = this;return self__.meta12358;
});})(map__12356,map__12356__$1,post,type))
;
photosure.blog.t12357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__12356,map__12356__$1,post,type){
return (function (_12359,meta12358__$1){var self__ = this;
var _12359__$1 = this;return (new photosure.blog.t12357(self__.type,self__.post,self__.map__12356,self__.owner,self__.p__12351,self__.post_view,meta12358__$1));
});})(map__12356,map__12356__$1,post,type))
;
photosure.blog.__GT_t12357 = ((function (map__12356,map__12356__$1,post,type){
return (function __GT_t12357(type__$1,post__$1,map__12356__$2,owner__$1,p__12351__$1,post_view__$1,meta12358){return (new photosure.blog.t12357(type__$1,post__$1,map__12356__$2,owner__$1,p__12351__$1,post_view__$1,meta12358));
});})(map__12356,map__12356__$1,post,type))
;
}
return (new photosure.blog.t12357(type,post,map__12356__$1,owner,p__12351,post_view,null));
});
photosure.blog.posts_view = (function posts_view(app,owner){if(typeof photosure.blog.t12365 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t12365 = (function (owner,app,posts_view,meta12366){
this.owner = owner;
this.app = app;
this.posts_view = posts_view;
this.meta12366 = meta12366;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t12365.cljs$lang$type = true;
photosure.blog.t12365.cljs$lang$ctorStr = "photosure.blog/t12365";
photosure.blog.t12365.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t12365");
});
photosure.blog.t12365.prototype.om$core$IRenderState$ = true;
photosure.blog.t12365.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__12368){var self__ = this;
var map__12369 = p__12368;var map__12369__$1 = ((cljs.core.seq_QMARK_.call(null,map__12369))?cljs.core.apply.call(null,cljs.core.hash_map,map__12369):map__12369);var scroll_chan = cljs.core.get.call(null,map__12369__$1,new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748));var this$__$1 = this;return cljs.core.apply.call(null,om.dom.div,{"onScroll": ((function (this$__$1,map__12369,map__12369__$1,scroll_chan){
return (function (){return cljs.core.async.put_BANG_.call(null,scroll_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),om.core.get_node.call(null,self__.owner).scrollTop,new cljs.core.Keyword(null,"height","height",1025178622),((1) + om.core.get_node.call(null,self__.owner).scrollHeight)], null));
});})(this$__$1,map__12369,map__12369__$1,scroll_chan))
, "id": "post-list"},om.core.build_all.call(null,photosure.blog.post_view,new cljs.core.Keyword(null,"posts","posts",760043164).cljs$core$IFn$_invoke$arity$1(self__.app)));
});
photosure.blog.t12365.prototype.om$core$IWillMount$ = true;
photosure.blog.t12365.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return photosure.util.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),"api/posts",new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),((function (___$1){
return (function (___$2){return om.core.update_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"posts","posts",760043164),___$2);
});})(___$1))
], null));
});
photosure.blog.t12365.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12367){var self__ = this;
var _12367__$1 = this;return self__.meta12366;
});
photosure.blog.t12365.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12367,meta12366__$1){var self__ = this;
var _12367__$1 = this;return (new photosure.blog.t12365(self__.owner,self__.app,self__.posts_view,meta12366__$1));
});
photosure.blog.__GT_t12365 = (function __GT_t12365(owner__$1,app__$1,posts_view__$1,meta12366){return (new photosure.blog.t12365(owner__$1,app__$1,posts_view__$1,meta12366));
});
}
return (new photosure.blog.t12365(owner,app,posts_view,null));
});
photosure.blog.translate = (function translate(x,y){return ("translate("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)+"%,"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)+"%)");
});
photosure.blog.scroll_bar = (function scroll_bar(app,owner){if(typeof photosure.blog.t12375 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t12375 = (function (owner,app,scroll_bar,meta12376){
this.owner = owner;
this.app = app;
this.scroll_bar = scroll_bar;
this.meta12376 = meta12376;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t12375.cljs$lang$type = true;
photosure.blog.t12375.cljs$lang$ctorStr = "photosure.blog/t12375";
photosure.blog.t12375.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t12375");
});
photosure.blog.t12375.prototype.om$core$IRenderState$ = true;
photosure.blog.t12375.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__12378){var self__ = this;
var map__12379 = p__12378;var map__12379__$1 = ((cljs.core.seq_QMARK_.call(null,map__12379))?cljs.core.apply.call(null,cljs.core.hash_map,map__12379):map__12379);var bar_height = cljs.core.get.call(null,map__12379__$1,new cljs.core.Keyword(null,"bar-height","bar-height",1563975272));var track_height = cljs.core.get.call(null,map__12379__$1,new cljs.core.Keyword(null,"track-height","track-height",-1871630545));var client_height = cljs.core.get.call(null,map__12379__$1,new cljs.core.Keyword(null,"client-height","client-height",908978545));var scroll_height = cljs.core.get.call(null,map__12379__$1,new cljs.core.Keyword(null,"scroll-height","scroll-height",882644149));var scroll_top = cljs.core.get.call(null,map__12379__$1,new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100));var this$__$1 = this;return React.DOM.div({"className": "scroll-track"},React.DOM.div({"style": {"top": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round.call(null,((track_height - bar_height) * (scroll_top / (scroll_height - client_height)))))+"px")}, "className": "scroll-bar"}));
});
photosure.blog.t12375.prototype.om$core$IDidMount$ = true;
photosure.blog.t12375.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"track-height","track-height",-1871630545),om.core.get_node.call(null,self__.owner).clientHeight);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"bar-height","bar-height",1563975272),om.core.get_node.call(null,self__.owner).firstChild.offsetHeight);
});
photosure.blog.t12375.prototype.om$core$IInitState$ = true;
photosure.blog.t12375.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"track-height","track-height",-1871630545),(0),new cljs.core.Keyword(null,"bar-height","bar-height",1563975272),(0)], null);
});
photosure.blog.t12375.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12377){var self__ = this;
var _12377__$1 = this;return self__.meta12376;
});
photosure.blog.t12375.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12377,meta12376__$1){var self__ = this;
var _12377__$1 = this;return (new photosure.blog.t12375(self__.owner,self__.app,self__.scroll_bar,meta12376__$1));
});
photosure.blog.__GT_t12375 = (function __GT_t12375(owner__$1,app__$1,scroll_bar__$1,meta12376){return (new photosure.blog.t12375(owner__$1,app__$1,scroll_bar__$1,meta12376));
});
}
return (new photosure.blog.t12375(owner,app,scroll_bar,null));
});
photosure.blog.blog = (function blog(app,owner){if(typeof photosure.blog.t12408 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t12408 = (function (owner,app,blog,meta12409){
this.owner = owner;
this.app = app;
this.blog = blog;
this.meta12409 = meta12409;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t12408.cljs$lang$type = true;
photosure.blog.t12408.cljs$lang$ctorStr = "photosure.blog/t12408";
photosure.blog.t12408.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t12408");
});
photosure.blog.t12408.prototype.om$core$IRenderState$ = true;
photosure.blog.t12408.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__12411){var self__ = this;
var map__12412 = p__12411;var map__12412__$1 = ((cljs.core.seq_QMARK_.call(null,map__12412))?cljs.core.apply.call(null,cljs.core.hash_map,map__12412):map__12412);var track_height = cljs.core.get.call(null,map__12412__$1,new cljs.core.Keyword(null,"track-height","track-height",-1871630545));var client_height = cljs.core.get.call(null,map__12412__$1,new cljs.core.Keyword(null,"client-height","client-height",908978545));var scroll_height = cljs.core.get.call(null,map__12412__$1,new cljs.core.Keyword(null,"scroll-height","scroll-height",882644149));var scroll_top = cljs.core.get.call(null,map__12412__$1,new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100));var scroll_chan = cljs.core.get.call(null,map__12412__$1,new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748));var this$__$1 = this;return React.DOM.div({"id": "blog-gallery-container"},React.DOM.div({"id": "blog-gallery"},React.DOM.div({"id": "overflow-wrapper"},React.DOM.div({"className": "scroll-header"}),om.core.build.call(null,photosure.blog.posts_view,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748),scroll_chan], null)], null)),React.DOM.div({"className": "scroll-footer"})),om.core.build.call(null,photosure.blog.scroll_bar,self__.app,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),scroll_top,new cljs.core.Keyword(null,"scroll-height","scroll-height",882644149),scroll_height,new cljs.core.Keyword(null,"client-height","client-height",908978545),client_height], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),scroll_top,new cljs.core.Keyword(null,"scroll-height","scroll-height",882644149),scroll_height,new cljs.core.Keyword(null,"client-height","client-height",908978545),client_height], null)], null))));
});
photosure.blog.t12408.prototype.om$core$IDidMount$ = true;
photosure.blog.t12408.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"client-height","client-height",908978545),om.core.get_node.call(null,self__.owner).clientHeight);
});
photosure.blog.t12408.prototype.om$core$IWillMount$ = true;
photosure.blog.t12408.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var scroll_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748));var c__6367__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto__,scroll_chan,___$1){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto__,scroll_chan,___$1){
return (function (state_12424){var state_val_12425 = (state_12424[(1)]);if((state_val_12425 === (4)))
{var inst_12415 = (state_12424[(2)]);var inst_12416 = new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100).cljs$core$IFn$_invoke$arity$1(inst_12415);var inst_12417 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),inst_12416);var inst_12418 = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(inst_12415);var inst_12419 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"scroll-height","scroll-height",882644149),inst_12418);var state_12424__$1 = (function (){var statearr_12426 = state_12424;(statearr_12426[(7)] = inst_12419);
(statearr_12426[(8)] = inst_12417);
return statearr_12426;
})();var statearr_12427_12436 = state_12424__$1;(statearr_12427_12436[(2)] = null);
(statearr_12427_12436[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12425 === (3)))
{var inst_12422 = (state_12424[(2)]);var state_12424__$1 = state_12424;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12424__$1,inst_12422);
} else
{if((state_val_12425 === (2)))
{var state_12424__$1 = state_12424;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12424__$1,(4),scroll_chan);
} else
{if((state_val_12425 === (1)))
{var state_12424__$1 = state_12424;var statearr_12428_12437 = state_12424__$1;(statearr_12428_12437[(2)] = null);
(statearr_12428_12437[(1)] = (2));
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
var state_machine__6353__auto____0 = (function (){var statearr_12432 = [null,null,null,null,null,null,null,null,null];(statearr_12432[(0)] = state_machine__6353__auto__);
(statearr_12432[(1)] = (1));
return statearr_12432;
});
var state_machine__6353__auto____1 = (function (state_12424){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_12424);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e12433){if((e12433 instanceof Object))
{var ex__6356__auto__ = e12433;var statearr_12434_12438 = state_12424;(statearr_12434_12438[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12424);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12433;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12439 = state_12424;
state_12424 = G__12439;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_12424){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_12424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto__,scroll_chan,___$1))
})();var state__6369__auto__ = (function (){var statearr_12435 = f__6368__auto__.call(null);(statearr_12435[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto__);
return statearr_12435;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto__,scroll_chan,___$1))
);
return c__6367__auto__;
});
photosure.blog.t12408.prototype.om$core$IInitState$ = true;
photosure.blog.t12408.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),(0),new cljs.core.Keyword(null,"scroll-height","scroll-height",882644149),(1),new cljs.core.Keyword(null,"client-height","client-height",908978545),(0)], null);
});
photosure.blog.t12408.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12410){var self__ = this;
var _12410__$1 = this;return self__.meta12409;
});
photosure.blog.t12408.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12410,meta12409__$1){var self__ = this;
var _12410__$1 = this;return (new photosure.blog.t12408(self__.owner,self__.app,self__.blog,meta12409__$1));
});
photosure.blog.__GT_t12408 = (function __GT_t12408(owner__$1,app__$1,blog__$1,meta12409){return (new photosure.blog.t12408(owner__$1,app__$1,blog__$1,meta12409));
});
}
return (new photosure.blog.t12408(owner,app,blog,null));
});
photosure.blog.render = (function render(){cljs.core.println.call(null,"yo");
return om.core.root.call(null,photosure.blog.blog,photosure.blog.app_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("dynamic-content")], null));
});

//# sourceMappingURL=blog.js.map