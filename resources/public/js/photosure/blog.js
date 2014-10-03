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
photosure.blog.text_line_view = (function text_line_view(caption_line,owner){if(typeof photosure.blog.t13367 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t13367 = (function (owner,caption_line,text_line_view,meta13368){
this.owner = owner;
this.caption_line = caption_line;
this.text_line_view = text_line_view;
this.meta13368 = meta13368;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t13367.cljs$lang$type = true;
photosure.blog.t13367.cljs$lang$ctorStr = "photosure.blog/t13367";
photosure.blog.t13367.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t13367");
});
photosure.blog.t13367.prototype.om$core$IRender$ = true;
photosure.blog.t13367.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.p({},self__.caption_line);
});
photosure.blog.t13367.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13369){var self__ = this;
var _13369__$1 = this;return self__.meta13368;
});
photosure.blog.t13367.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13369,meta13368__$1){var self__ = this;
var _13369__$1 = this;return (new photosure.blog.t13367(self__.owner,self__.caption_line,self__.text_line_view,meta13368__$1));
});
photosure.blog.__GT_t13367 = (function __GT_t13367(owner__$1,caption_line__$1,text_line_view__$1,meta13368){return (new photosure.blog.t13367(owner__$1,caption_line__$1,text_line_view__$1,meta13368));
});
}
return (new photosure.blog.t13367(owner,caption_line,text_line_view,null));
});
photosure.blog.text_view = (function text_view(caption,owner){if(typeof photosure.blog.t13374 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t13374 = (function (owner,caption,text_view,meta13375){
this.owner = owner;
this.caption = caption;
this.text_view = text_view;
this.meta13375 = meta13375;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t13374.cljs$lang$type = true;
photosure.blog.t13374.cljs$lang$ctorStr = "photosure.blog/t13374";
photosure.blog.t13374.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t13374");
});
photosure.blog.t13374.prototype.om$core$IRender$ = true;
photosure.blog.t13374.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.apply.call(null,om.dom.div,{"className": "caption"},om.core.build_all.call(null,photosure.blog.text_line_view,cljs.core.map.call(null,((function (this$__$1){
return (function (p1__13370_SHARP_){return cljs.core.get.call(null,p1__13370_SHARP_,(2));
});})(this$__$1))
,photosure.blog.parse_caption.call(null,self__.caption))));
});
photosure.blog.t13374.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13376){var self__ = this;
var _13376__$1 = this;return self__.meta13375;
});
photosure.blog.t13374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13376,meta13375__$1){var self__ = this;
var _13376__$1 = this;return (new photosure.blog.t13374(self__.owner,self__.caption,self__.text_view,meta13375__$1));
});
photosure.blog.__GT_t13374 = (function __GT_t13374(owner__$1,caption__$1,text_view__$1,meta13375){return (new photosure.blog.t13374(owner__$1,caption__$1,text_view__$1,meta13375));
});
}
return (new photosure.blog.t13374(owner,caption,text_view,null));
});
photosure.blog.text_post_view = (function text_post_view(p__13377,owner){var map__13382 = p__13377;var map__13382__$1 = ((cljs.core.seq_QMARK_.call(null,map__13382))?cljs.core.apply.call(null,cljs.core.hash_map,map__13382):map__13382);var id = cljs.core.get.call(null,map__13382__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var title = cljs.core.get.call(null,map__13382__$1,new cljs.core.Keyword(null,"title","title",636505583));var body = cljs.core.get.call(null,map__13382__$1,new cljs.core.Keyword(null,"body","body",-2049205669));if(typeof photosure.blog.t13383 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t13383 = (function (body,title,id,map__13382,owner,p__13377,text_post_view,meta13384){
this.body = body;
this.title = title;
this.id = id;
this.map__13382 = map__13382;
this.owner = owner;
this.p__13377 = p__13377;
this.text_post_view = text_post_view;
this.meta13384 = meta13384;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t13383.cljs$lang$type = true;
photosure.blog.t13383.cljs$lang$ctorStr = "photosure.blog/t13383";
photosure.blog.t13383.cljs$lang$ctorPrWriter = ((function (map__13382,map__13382__$1,id,title,body){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t13383");
});})(map__13382,map__13382__$1,id,title,body))
;
photosure.blog.t13383.prototype.om$core$IRender$ = true;
photosure.blog.t13383.prototype.om$core$IRender$render$arity$1 = ((function (map__13382,map__13382__$1,id,title,body){
return (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return React.DOM.div({"className": "post", "id": self__.id},React.DOM.h2({"className": "blog-title"},self__.title),om.core.build.call(null,photosure.blog.text_view,self__.body));
});})(map__13382,map__13382__$1,id,title,body))
;
photosure.blog.t13383.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13382,map__13382__$1,id,title,body){
return (function (_13385){var self__ = this;
var _13385__$1 = this;return self__.meta13384;
});})(map__13382,map__13382__$1,id,title,body))
;
photosure.blog.t13383.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13382,map__13382__$1,id,title,body){
return (function (_13385,meta13384__$1){var self__ = this;
var _13385__$1 = this;return (new photosure.blog.t13383(self__.body,self__.title,self__.id,self__.map__13382,self__.owner,self__.p__13377,self__.text_post_view,meta13384__$1));
});})(map__13382,map__13382__$1,id,title,body))
;
photosure.blog.__GT_t13383 = ((function (map__13382,map__13382__$1,id,title,body){
return (function __GT_t13383(body__$1,title__$1,id__$1,map__13382__$2,owner__$1,p__13377__$1,text_post_view__$1,meta13384){return (new photosure.blog.t13383(body__$1,title__$1,id__$1,map__13382__$2,owner__$1,p__13377__$1,text_post_view__$1,meta13384));
});})(map__13382,map__13382__$1,id,title,body))
;
}
return (new photosure.blog.t13383(body,title,id,map__13382__$1,owner,p__13377,text_post_view,null));
});
photosure.blog.photo_post_view = (function photo_post_view(p__13386,owner){var map__13394 = p__13386;var map__13394__$1 = ((cljs.core.seq_QMARK_.call(null,map__13394))?cljs.core.apply.call(null,cljs.core.hash_map,map__13394):map__13394);var id = cljs.core.get.call(null,map__13394__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var vec__13395 = cljs.core.get.call(null,map__13394__$1,new cljs.core.Keyword(null,"photos","photos",11691538));var map__13396 = cljs.core.nth.call(null,vec__13395,(0),null);var map__13396__$1 = ((cljs.core.seq_QMARK_.call(null,map__13396))?cljs.core.apply.call(null,cljs.core.hash_map,map__13396):map__13396);var map__13397 = cljs.core.get.call(null,map__13396__$1,new cljs.core.Keyword(null,"original_size","original_size",-1238801714));var map__13397__$1 = ((cljs.core.seq_QMARK_.call(null,map__13397))?cljs.core.apply.call(null,cljs.core.hash_map,map__13397):map__13397);var url = cljs.core.get.call(null,map__13397__$1,new cljs.core.Keyword(null,"url","url",276297046));var caption = cljs.core.get.call(null,map__13394__$1,new cljs.core.Keyword(null,"caption","caption",-855383902));if(typeof photosure.blog.t13398 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t13398 = (function (p__13386,owner,photo_post_view,caption,vec__13395,map__13396,map__13397,id,url,map__13394,meta13399){
this.p__13386 = p__13386;
this.owner = owner;
this.photo_post_view = photo_post_view;
this.caption = caption;
this.vec__13395 = vec__13395;
this.map__13396 = map__13396;
this.map__13397 = map__13397;
this.id = id;
this.url = url;
this.map__13394 = map__13394;
this.meta13399 = meta13399;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t13398.cljs$lang$type = true;
photosure.blog.t13398.cljs$lang$ctorStr = "photosure.blog/t13398";
photosure.blog.t13398.cljs$lang$ctorPrWriter = ((function (map__13394,map__13394__$1,id,vec__13395,map__13396,map__13396__$1,map__13397,map__13397__$1,url,caption){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t13398");
});})(map__13394,map__13394__$1,id,vec__13395,map__13396,map__13396__$1,map__13397,map__13397__$1,url,caption))
;
photosure.blog.t13398.prototype.om$core$IRender$ = true;
photosure.blog.t13398.prototype.om$core$IRender$render$arity$1 = ((function (map__13394,map__13394__$1,id,vec__13395,map__13396,map__13396__$1,map__13397,map__13397__$1,url,caption){
return (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return React.DOM.div({"className": "post", "id": self__.id},React.DOM.div({"className": "blog-photo"},React.DOM.img({"src": self__.url})),om.core.build.call(null,photosure.blog.text_view,self__.caption));
});})(map__13394,map__13394__$1,id,vec__13395,map__13396,map__13396__$1,map__13397,map__13397__$1,url,caption))
;
photosure.blog.t13398.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13394,map__13394__$1,id,vec__13395,map__13396,map__13396__$1,map__13397,map__13397__$1,url,caption){
return (function (_13400){var self__ = this;
var _13400__$1 = this;return self__.meta13399;
});})(map__13394,map__13394__$1,id,vec__13395,map__13396,map__13396__$1,map__13397,map__13397__$1,url,caption))
;
photosure.blog.t13398.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13394,map__13394__$1,id,vec__13395,map__13396,map__13396__$1,map__13397,map__13397__$1,url,caption){
return (function (_13400,meta13399__$1){var self__ = this;
var _13400__$1 = this;return (new photosure.blog.t13398(self__.p__13386,self__.owner,self__.photo_post_view,self__.caption,self__.vec__13395,self__.map__13396,self__.map__13397,self__.id,self__.url,self__.map__13394,meta13399__$1));
});})(map__13394,map__13394__$1,id,vec__13395,map__13396,map__13396__$1,map__13397,map__13397__$1,url,caption))
;
photosure.blog.__GT_t13398 = ((function (map__13394,map__13394__$1,id,vec__13395,map__13396,map__13396__$1,map__13397,map__13397__$1,url,caption){
return (function __GT_t13398(p__13386__$1,owner__$1,photo_post_view__$1,caption__$1,vec__13395__$1,map__13396__$2,map__13397__$2,id__$1,url__$1,map__13394__$2,meta13399){return (new photosure.blog.t13398(p__13386__$1,owner__$1,photo_post_view__$1,caption__$1,vec__13395__$1,map__13396__$2,map__13397__$2,id__$1,url__$1,map__13394__$2,meta13399));
});})(map__13394,map__13394__$1,id,vec__13395,map__13396,map__13396__$1,map__13397,map__13397__$1,url,caption))
;
}
return (new photosure.blog.t13398(p__13386,owner,photo_post_view,caption,vec__13395,map__13396__$1,map__13397__$1,id,url,map__13394__$1,null));
});
photosure.blog.post_view = (function post_view(p__13401,owner){var map__13406 = p__13401;var map__13406__$1 = ((cljs.core.seq_QMARK_.call(null,map__13406))?cljs.core.apply.call(null,cljs.core.hash_map,map__13406):map__13406);var post = map__13406__$1;var type = cljs.core.get.call(null,map__13406__$1,new cljs.core.Keyword(null,"type","type",1174270348));if(typeof photosure.blog.t13407 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t13407 = (function (type,post,map__13406,owner,p__13401,post_view,meta13408){
this.type = type;
this.post = post;
this.map__13406 = map__13406;
this.owner = owner;
this.p__13401 = p__13401;
this.post_view = post_view;
this.meta13408 = meta13408;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t13407.cljs$lang$type = true;
photosure.blog.t13407.cljs$lang$ctorStr = "photosure.blog/t13407";
photosure.blog.t13407.cljs$lang$ctorPrWriter = ((function (map__13406,map__13406__$1,post,type){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t13407");
});})(map__13406,map__13406__$1,post,type))
;
photosure.blog.t13407.prototype.om$core$IRender$ = true;
photosure.blog.t13407.prototype.om$core$IRender$render$arity$1 = ((function (map__13406,map__13406__$1,post,type){
return (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core._EQ_.call(null,self__.type,"photo"))
{return om.core.build.call(null,photosure.blog.photo_post_view,self__.post);
} else
{return om.core.build.call(null,photosure.blog.text_post_view,self__.post);
}
});})(map__13406,map__13406__$1,post,type))
;
photosure.blog.t13407.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13406,map__13406__$1,post,type){
return (function (_13409){var self__ = this;
var _13409__$1 = this;return self__.meta13408;
});})(map__13406,map__13406__$1,post,type))
;
photosure.blog.t13407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13406,map__13406__$1,post,type){
return (function (_13409,meta13408__$1){var self__ = this;
var _13409__$1 = this;return (new photosure.blog.t13407(self__.type,self__.post,self__.map__13406,self__.owner,self__.p__13401,self__.post_view,meta13408__$1));
});})(map__13406,map__13406__$1,post,type))
;
photosure.blog.__GT_t13407 = ((function (map__13406,map__13406__$1,post,type){
return (function __GT_t13407(type__$1,post__$1,map__13406__$2,owner__$1,p__13401__$1,post_view__$1,meta13408){return (new photosure.blog.t13407(type__$1,post__$1,map__13406__$2,owner__$1,p__13401__$1,post_view__$1,meta13408));
});})(map__13406,map__13406__$1,post,type))
;
}
return (new photosure.blog.t13407(type,post,map__13406__$1,owner,p__13401,post_view,null));
});
photosure.blog.posts_view = (function posts_view(app,owner){if(typeof photosure.blog.t13415 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t13415 = (function (owner,app,posts_view,meta13416){
this.owner = owner;
this.app = app;
this.posts_view = posts_view;
this.meta13416 = meta13416;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t13415.cljs$lang$type = true;
photosure.blog.t13415.cljs$lang$ctorStr = "photosure.blog/t13415";
photosure.blog.t13415.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t13415");
});
photosure.blog.t13415.prototype.om$core$IRenderState$ = true;
photosure.blog.t13415.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__13418){var self__ = this;
var map__13419 = p__13418;var map__13419__$1 = ((cljs.core.seq_QMARK_.call(null,map__13419))?cljs.core.apply.call(null,cljs.core.hash_map,map__13419):map__13419);var scroll_chan = cljs.core.get.call(null,map__13419__$1,new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748));var this$__$1 = this;return cljs.core.apply.call(null,om.dom.div,{"onScroll": ((function (this$__$1,map__13419,map__13419__$1,scroll_chan){
return (function (){return cljs.core.async.put_BANG_.call(null,scroll_chan,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),om.core.get_node.call(null,self__.owner).scrollTop,new cljs.core.Keyword(null,"height","height",1025178622),((1) + om.core.get_node.call(null,self__.owner).scrollHeight)], null));
});})(this$__$1,map__13419,map__13419__$1,scroll_chan))
, "id": "post-list"},om.core.build_all.call(null,photosure.blog.post_view,new cljs.core.Keyword(null,"posts","posts",760043164).cljs$core$IFn$_invoke$arity$1(self__.app)));
});
photosure.blog.t13415.prototype.om$core$IWillMount$ = true;
photosure.blog.t13415.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return photosure.util.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),"api/posts",new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),((function (___$1){
return (function (___$2){return om.core.update_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"posts","posts",760043164),___$2);
});})(___$1))
], null));
});
photosure.blog.t13415.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13417){var self__ = this;
var _13417__$1 = this;return self__.meta13416;
});
photosure.blog.t13415.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13417,meta13416__$1){var self__ = this;
var _13417__$1 = this;return (new photosure.blog.t13415(self__.owner,self__.app,self__.posts_view,meta13416__$1));
});
photosure.blog.__GT_t13415 = (function __GT_t13415(owner__$1,app__$1,posts_view__$1,meta13416){return (new photosure.blog.t13415(owner__$1,app__$1,posts_view__$1,meta13416));
});
}
return (new photosure.blog.t13415(owner,app,posts_view,null));
});
photosure.blog.translate = (function translate(x,y){return ("translate("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)+"%,"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)+"%)");
});
photosure.blog.scroll_bar = (function scroll_bar(app,owner){if(typeof photosure.blog.t13425 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t13425 = (function (owner,app,scroll_bar,meta13426){
this.owner = owner;
this.app = app;
this.scroll_bar = scroll_bar;
this.meta13426 = meta13426;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t13425.cljs$lang$type = true;
photosure.blog.t13425.cljs$lang$ctorStr = "photosure.blog/t13425";
photosure.blog.t13425.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t13425");
});
photosure.blog.t13425.prototype.om$core$IRenderState$ = true;
photosure.blog.t13425.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__13428){var self__ = this;
var map__13429 = p__13428;var map__13429__$1 = ((cljs.core.seq_QMARK_.call(null,map__13429))?cljs.core.apply.call(null,cljs.core.hash_map,map__13429):map__13429);var track_height = cljs.core.get.call(null,map__13429__$1,new cljs.core.Keyword(null,"track-height","track-height",-1871630545));var scroll_height = cljs.core.get.call(null,map__13429__$1,new cljs.core.Keyword(null,"scroll-height","scroll-height",882644149));var scroll_top = cljs.core.get.call(null,map__13429__$1,new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100));var this$__$1 = this;return React.DOM.div({"style": {"top": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round.call(null,(track_height * (scroll_top / scroll_height))))+"px")}, "className": "scroll-bar"});
});
photosure.blog.t13425.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13427){var self__ = this;
var _13427__$1 = this;return self__.meta13426;
});
photosure.blog.t13425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13427,meta13426__$1){var self__ = this;
var _13427__$1 = this;return (new photosure.blog.t13425(self__.owner,self__.app,self__.scroll_bar,meta13426__$1));
});
photosure.blog.__GT_t13425 = (function __GT_t13425(owner__$1,app__$1,scroll_bar__$1,meta13426){return (new photosure.blog.t13425(owner__$1,app__$1,scroll_bar__$1,meta13426));
});
}
return (new photosure.blog.t13425(owner,app,scroll_bar,null));
});
photosure.blog.blog = (function blog(app,owner){if(typeof photosure.blog.t13458 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t13458 = (function (owner,app,blog,meta13459){
this.owner = owner;
this.app = app;
this.blog = blog;
this.meta13459 = meta13459;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t13458.cljs$lang$type = true;
photosure.blog.t13458.cljs$lang$ctorStr = "photosure.blog/t13458";
photosure.blog.t13458.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t13458");
});
photosure.blog.t13458.prototype.om$core$IRenderState$ = true;
photosure.blog.t13458.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__13461){var self__ = this;
var map__13462 = p__13461;var map__13462__$1 = ((cljs.core.seq_QMARK_.call(null,map__13462))?cljs.core.apply.call(null,cljs.core.hash_map,map__13462):map__13462);var track_height = cljs.core.get.call(null,map__13462__$1,new cljs.core.Keyword(null,"track-height","track-height",-1871630545));var scroll_height = cljs.core.get.call(null,map__13462__$1,new cljs.core.Keyword(null,"scroll-height","scroll-height",882644149));var scroll_top = cljs.core.get.call(null,map__13462__$1,new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100));var scroll_chan = cljs.core.get.call(null,map__13462__$1,new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748));var this$__$1 = this;return React.DOM.div({"id": "blog-gallery-container"},React.DOM.div({"id": "blog-gallery"},React.DOM.div({"id": "overflow-wrapper"},React.DOM.div({"className": "scroll-header"}),om.core.build.call(null,photosure.blog.posts_view,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748),scroll_chan], null)], null)),React.DOM.div({"className": "scroll-footer"})),om.core.build.call(null,photosure.blog.scroll_bar,self__.app,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),scroll_top,new cljs.core.Keyword(null,"scroll-height","scroll-height",882644149),scroll_height,new cljs.core.Keyword(null,"track-height","track-height",-1871630545),track_height], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),scroll_top,new cljs.core.Keyword(null,"scroll-height","scroll-height",882644149),scroll_height,new cljs.core.Keyword(null,"track-height","track-height",-1871630545),track_height], null)], null))));
});
photosure.blog.t13458.prototype.om$core$IDidMount$ = true;
photosure.blog.t13458.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"track-height","track-height",-1871630545),om.core.get_node.call(null,self__.owner).clientHeight);
});
photosure.blog.t13458.prototype.om$core$IWillMount$ = true;
photosure.blog.t13458.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var scroll_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748));var c__6367__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto__,scroll_chan,___$1){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto__,scroll_chan,___$1){
return (function (state_13474){var state_val_13475 = (state_13474[(1)]);if((state_val_13475 === (4)))
{var inst_13465 = (state_13474[(2)]);var inst_13466 = new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100).cljs$core$IFn$_invoke$arity$1(inst_13465);var inst_13467 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),inst_13466);var inst_13468 = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(inst_13465);var inst_13469 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"scroll-height","scroll-height",882644149),inst_13468);var state_13474__$1 = (function (){var statearr_13476 = state_13474;(statearr_13476[(7)] = inst_13469);
(statearr_13476[(8)] = inst_13467);
return statearr_13476;
})();var statearr_13477_13486 = state_13474__$1;(statearr_13477_13486[(2)] = null);
(statearr_13477_13486[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13475 === (3)))
{var inst_13472 = (state_13474[(2)]);var state_13474__$1 = state_13474;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13474__$1,inst_13472);
} else
{if((state_val_13475 === (2)))
{var state_13474__$1 = state_13474;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13474__$1,(4),scroll_chan);
} else
{if((state_val_13475 === (1)))
{var state_13474__$1 = state_13474;var statearr_13478_13487 = state_13474__$1;(statearr_13478_13487[(2)] = null);
(statearr_13478_13487[(1)] = (2));
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
var state_machine__6353__auto____0 = (function (){var statearr_13482 = [null,null,null,null,null,null,null,null,null];(statearr_13482[(0)] = state_machine__6353__auto__);
(statearr_13482[(1)] = (1));
return statearr_13482;
});
var state_machine__6353__auto____1 = (function (state_13474){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_13474);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e13483){if((e13483 instanceof Object))
{var ex__6356__auto__ = e13483;var statearr_13484_13488 = state_13474;(statearr_13484_13488[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13474);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13483;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13489 = state_13474;
state_13474 = G__13489;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_13474){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_13474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto__,scroll_chan,___$1))
})();var state__6369__auto__ = (function (){var statearr_13485 = f__6368__auto__.call(null);(statearr_13485[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto__);
return statearr_13485;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto__,scroll_chan,___$1))
);
return c__6367__auto__;
});
photosure.blog.t13458.prototype.om$core$IInitState$ = true;
photosure.blog.t13458.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"scroll-chan","scroll-chan",627452748),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),(0),new cljs.core.Keyword(null,"scroll-height","scroll-height",882644149),(1),new cljs.core.Keyword(null,"track-height","track-height",-1871630545),(0)], null);
});
photosure.blog.t13458.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13460){var self__ = this;
var _13460__$1 = this;return self__.meta13459;
});
photosure.blog.t13458.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13460,meta13459__$1){var self__ = this;
var _13460__$1 = this;return (new photosure.blog.t13458(self__.owner,self__.app,self__.blog,meta13459__$1));
});
photosure.blog.__GT_t13458 = (function __GT_t13458(owner__$1,app__$1,blog__$1,meta13459){return (new photosure.blog.t13458(owner__$1,app__$1,blog__$1,meta13459));
});
}
return (new photosure.blog.t13458(owner,app,blog,null));
});
photosure.blog.render = (function render(){cljs.core.println.call(null,"yo");
return om.core.root.call(null,photosure.blog.blog,photosure.blog.app_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("dynamic-content")], null));
});

//# sourceMappingURL=blog.js.map