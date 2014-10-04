// Compiled by ClojureScript 0.0-2322
goog.provide('photosure.blog');
goog.require('cljs.core');
goog.require('photosure.scrolldiv');
goog.require('om.dom');
goog.require('goog.string');
goog.require('om.dom');
goog.require('hickory.core');
goog.require('photosure.util');
goog.require('photosure.util');
goog.require('om.core');
goog.require('om.core');
goog.require('hickory.core');
goog.require('goog.string');
goog.require('photosure.scrolldiv');
cljs.core.enable_console_print_BANG_.call(null);
photosure.blog.app_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"posts","posts",760043164),cljs.core.PersistentVector.EMPTY], null));
photosure.blog.parse_caption = (function parse_caption(caption){return cljs.core.map.call(null,hickory.core.as_hiccup,hickory.core.parse_fragment.call(null,caption));
});
photosure.blog.text_view = (function text_view(caption,owner){if(typeof photosure.blog.t15620 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t15620 = (function (owner,caption,text_view,meta15621){
this.owner = owner;
this.caption = caption;
this.text_view = text_view;
this.meta15621 = meta15621;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t15620.cljs$lang$type = true;
photosure.blog.t15620.cljs$lang$ctorStr = "photosure.blog/t15620";
photosure.blog.t15620.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t15620");
});
photosure.blog.t15620.prototype.om$core$IRender$ = true;
photosure.blog.t15620.prototype.om$core$IRender$render$arity$1 = (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return React.DOM.div({"dangerouslySetInnerHTML": {"__html": self__.caption}, "className": "caption"},null);
});
photosure.blog.t15620.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15622){var self__ = this;
var _15622__$1 = this;return self__.meta15621;
});
photosure.blog.t15620.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15622,meta15621__$1){var self__ = this;
var _15622__$1 = this;return (new photosure.blog.t15620(self__.owner,self__.caption,self__.text_view,meta15621__$1));
});
photosure.blog.__GT_t15620 = (function __GT_t15620(owner__$1,caption__$1,text_view__$1,meta15621){return (new photosure.blog.t15620(owner__$1,caption__$1,text_view__$1,meta15621));
});
}
return (new photosure.blog.t15620(owner,caption,text_view,null));
});
photosure.blog.text_post_view = (function text_post_view(p__15623,owner){var map__15628 = p__15623;var map__15628__$1 = ((cljs.core.seq_QMARK_.call(null,map__15628))?cljs.core.apply.call(null,cljs.core.hash_map,map__15628):map__15628);var id = cljs.core.get.call(null,map__15628__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var title = cljs.core.get.call(null,map__15628__$1,new cljs.core.Keyword(null,"title","title",636505583));var body = cljs.core.get.call(null,map__15628__$1,new cljs.core.Keyword(null,"body","body",-2049205669));if(typeof photosure.blog.t15629 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t15629 = (function (body,title,id,map__15628,owner,p__15623,text_post_view,meta15630){
this.body = body;
this.title = title;
this.id = id;
this.map__15628 = map__15628;
this.owner = owner;
this.p__15623 = p__15623;
this.text_post_view = text_post_view;
this.meta15630 = meta15630;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t15629.cljs$lang$type = true;
photosure.blog.t15629.cljs$lang$ctorStr = "photosure.blog/t15629";
photosure.blog.t15629.cljs$lang$ctorPrWriter = ((function (map__15628,map__15628__$1,id,title,body){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t15629");
});})(map__15628,map__15628__$1,id,title,body))
;
photosure.blog.t15629.prototype.om$core$IRender$ = true;
photosure.blog.t15629.prototype.om$core$IRender$render$arity$1 = ((function (map__15628,map__15628__$1,id,title,body){
return (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return React.DOM.div({"className": "post", "id": self__.id},React.DOM.h2({"className": "blog-title"},self__.title),om.core.build.call(null,photosure.blog.text_view,self__.body));
});})(map__15628,map__15628__$1,id,title,body))
;
photosure.blog.t15629.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__15628,map__15628__$1,id,title,body){
return (function (_15631){var self__ = this;
var _15631__$1 = this;return self__.meta15630;
});})(map__15628,map__15628__$1,id,title,body))
;
photosure.blog.t15629.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__15628,map__15628__$1,id,title,body){
return (function (_15631,meta15630__$1){var self__ = this;
var _15631__$1 = this;return (new photosure.blog.t15629(self__.body,self__.title,self__.id,self__.map__15628,self__.owner,self__.p__15623,self__.text_post_view,meta15630__$1));
});})(map__15628,map__15628__$1,id,title,body))
;
photosure.blog.__GT_t15629 = ((function (map__15628,map__15628__$1,id,title,body){
return (function __GT_t15629(body__$1,title__$1,id__$1,map__15628__$2,owner__$1,p__15623__$1,text_post_view__$1,meta15630){return (new photosure.blog.t15629(body__$1,title__$1,id__$1,map__15628__$2,owner__$1,p__15623__$1,text_post_view__$1,meta15630));
});})(map__15628,map__15628__$1,id,title,body))
;
}
return (new photosure.blog.t15629(body,title,id,map__15628__$1,owner,p__15623,text_post_view,null));
});
photosure.blog.photo_post_view = (function photo_post_view(p__15632,owner){var map__15637 = p__15632;var map__15637__$1 = ((cljs.core.seq_QMARK_.call(null,map__15637))?cljs.core.apply.call(null,cljs.core.hash_map,map__15637):map__15637);var id = cljs.core.get.call(null,map__15637__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var photos = cljs.core.get.call(null,map__15637__$1,new cljs.core.Keyword(null,"photos","photos",11691538));var caption = cljs.core.get.call(null,map__15637__$1,new cljs.core.Keyword(null,"caption","caption",-855383902));if(typeof photosure.blog.t15638 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t15638 = (function (caption,photos,id,map__15637,owner,p__15632,photo_post_view,meta15639){
this.caption = caption;
this.photos = photos;
this.id = id;
this.map__15637 = map__15637;
this.owner = owner;
this.p__15632 = p__15632;
this.photo_post_view = photo_post_view;
this.meta15639 = meta15639;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t15638.cljs$lang$type = true;
photosure.blog.t15638.cljs$lang$ctorStr = "photosure.blog/t15638";
photosure.blog.t15638.cljs$lang$ctorPrWriter = ((function (map__15637,map__15637__$1,id,photos,caption){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t15638");
});})(map__15637,map__15637__$1,id,photos,caption))
;
photosure.blog.t15638.prototype.om$core$IRender$ = true;
photosure.blog.t15638.prototype.om$core$IRender$render$arity$1 = ((function (map__15637,map__15637__$1,id,photos,caption){
return (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return React.DOM.div({"className": "post", "id": self__.id},cljs.core.apply.call(null,om.dom.div,{"className": "blog-photo"},cljs.core.map.call(null,((function (this__5143__auto____$1,map__15637,map__15637__$1,id,photos,caption){
return (function (photo){return React.DOM.img({"src": new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"original_size","original_size",-1238801714).cljs$core$IFn$_invoke$arity$1(photo))});
});})(this__5143__auto____$1,map__15637,map__15637__$1,id,photos,caption))
,self__.photos)),om.core.build.call(null,photosure.blog.text_view,self__.caption));
});})(map__15637,map__15637__$1,id,photos,caption))
;
photosure.blog.t15638.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__15637,map__15637__$1,id,photos,caption){
return (function (_15640){var self__ = this;
var _15640__$1 = this;return self__.meta15639;
});})(map__15637,map__15637__$1,id,photos,caption))
;
photosure.blog.t15638.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__15637,map__15637__$1,id,photos,caption){
return (function (_15640,meta15639__$1){var self__ = this;
var _15640__$1 = this;return (new photosure.blog.t15638(self__.caption,self__.photos,self__.id,self__.map__15637,self__.owner,self__.p__15632,self__.photo_post_view,meta15639__$1));
});})(map__15637,map__15637__$1,id,photos,caption))
;
photosure.blog.__GT_t15638 = ((function (map__15637,map__15637__$1,id,photos,caption){
return (function __GT_t15638(caption__$1,photos__$1,id__$1,map__15637__$2,owner__$1,p__15632__$1,photo_post_view__$1,meta15639){return (new photosure.blog.t15638(caption__$1,photos__$1,id__$1,map__15637__$2,owner__$1,p__15632__$1,photo_post_view__$1,meta15639));
});})(map__15637,map__15637__$1,id,photos,caption))
;
}
return (new photosure.blog.t15638(caption,photos,id,map__15637__$1,owner,p__15632,photo_post_view,null));
});
photosure.blog.post_view = (function post_view(p__15641,owner){var map__15646 = p__15641;var map__15646__$1 = ((cljs.core.seq_QMARK_.call(null,map__15646))?cljs.core.apply.call(null,cljs.core.hash_map,map__15646):map__15646);var post = map__15646__$1;var type = cljs.core.get.call(null,map__15646__$1,new cljs.core.Keyword(null,"type","type",1174270348));if(typeof photosure.blog.t15647 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t15647 = (function (type,post,map__15646,owner,p__15641,post_view,meta15648){
this.type = type;
this.post = post;
this.map__15646 = map__15646;
this.owner = owner;
this.p__15641 = p__15641;
this.post_view = post_view;
this.meta15648 = meta15648;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t15647.cljs$lang$type = true;
photosure.blog.t15647.cljs$lang$ctorStr = "photosure.blog/t15647";
photosure.blog.t15647.cljs$lang$ctorPrWriter = ((function (map__15646,map__15646__$1,post,type){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t15647");
});})(map__15646,map__15646__$1,post,type))
;
photosure.blog.t15647.prototype.om$core$IRender$ = true;
photosure.blog.t15647.prototype.om$core$IRender$render$arity$1 = ((function (map__15646,map__15646__$1,post,type){
return (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core._EQ_.call(null,self__.type,"photo"))
{return om.core.build.call(null,photosure.blog.photo_post_view,self__.post);
} else
{return om.core.build.call(null,photosure.blog.text_post_view,self__.post);
}
});})(map__15646,map__15646__$1,post,type))
;
photosure.blog.t15647.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__15646,map__15646__$1,post,type){
return (function (_15649){var self__ = this;
var _15649__$1 = this;return self__.meta15648;
});})(map__15646,map__15646__$1,post,type))
;
photosure.blog.t15647.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__15646,map__15646__$1,post,type){
return (function (_15649,meta15648__$1){var self__ = this;
var _15649__$1 = this;return (new photosure.blog.t15647(self__.type,self__.post,self__.map__15646,self__.owner,self__.p__15641,self__.post_view,meta15648__$1));
});})(map__15646,map__15646__$1,post,type))
;
photosure.blog.__GT_t15647 = ((function (map__15646,map__15646__$1,post,type){
return (function __GT_t15647(type__$1,post__$1,map__15646__$2,owner__$1,p__15641__$1,post_view__$1,meta15648){return (new photosure.blog.t15647(type__$1,post__$1,map__15646__$2,owner__$1,p__15641__$1,post_view__$1,meta15648));
});})(map__15646,map__15646__$1,post,type))
;
}
return (new photosure.blog.t15647(type,post,map__15646__$1,owner,p__15641,post_view,null));
});
photosure.blog.posts_view = (function posts_view(app,owner){if(typeof photosure.blog.t15654 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t15654 = (function (owner,app,posts_view,meta15655){
this.owner = owner;
this.app = app;
this.posts_view = posts_view;
this.meta15655 = meta15655;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t15654.cljs$lang$type = true;
photosure.blog.t15654.cljs$lang$ctorStr = "photosure.blog/t15654";
photosure.blog.t15654.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t15654");
});
photosure.blog.t15654.prototype.om$core$IRender$ = true;
photosure.blog.t15654.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.apply.call(null,om.dom.div,{"id": "post-list"},om.core.build_all.call(null,photosure.blog.post_view,new cljs.core.Keyword(null,"posts","posts",760043164).cljs$core$IFn$_invoke$arity$1(self__.app)));
});
photosure.blog.t15654.prototype.om$core$IWillMount$ = true;
photosure.blog.t15654.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return photosure.util.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),"api/posts",new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),((function (___$1){
return (function (p1__15650_SHARP_){return om.core.update_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"posts","posts",760043164),p1__15650_SHARP_);
});})(___$1))
], null));
});
photosure.blog.t15654.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15656){var self__ = this;
var _15656__$1 = this;return self__.meta15655;
});
photosure.blog.t15654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15656,meta15655__$1){var self__ = this;
var _15656__$1 = this;return (new photosure.blog.t15654(self__.owner,self__.app,self__.posts_view,meta15655__$1));
});
photosure.blog.__GT_t15654 = (function __GT_t15654(owner__$1,app__$1,posts_view__$1,meta15655){return (new photosure.blog.t15654(owner__$1,app__$1,posts_view__$1,meta15655));
});
}
return (new photosure.blog.t15654(owner,app,posts_view,null));
});
photosure.blog.blog = (function blog(app,owner){if(typeof photosure.blog.t15660 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t15660 = (function (owner,app,blog,meta15661){
this.owner = owner;
this.app = app;
this.blog = blog;
this.meta15661 = meta15661;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t15660.cljs$lang$type = true;
photosure.blog.t15660.cljs$lang$ctorStr = "photosure.blog/t15660";
photosure.blog.t15660.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t15660");
});
photosure.blog.t15660.prototype.om$core$IRender$ = true;
photosure.blog.t15660.prototype.om$core$IRender$render$arity$1 = (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return React.DOM.div({"id": "blog-gallery-container"},om.core.build.call(null,photosure.scrolldiv.scroll_div.call(null,om.core.build.call(null,photosure.blog.posts_view,self__.app)),self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"blog-gallery"], null)], null)));
});
photosure.blog.t15660.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15662){var self__ = this;
var _15662__$1 = this;return self__.meta15661;
});
photosure.blog.t15660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15662,meta15661__$1){var self__ = this;
var _15662__$1 = this;return (new photosure.blog.t15660(self__.owner,self__.app,self__.blog,meta15661__$1));
});
photosure.blog.__GT_t15660 = (function __GT_t15660(owner__$1,app__$1,blog__$1,meta15661){return (new photosure.blog.t15660(owner__$1,app__$1,blog__$1,meta15661));
});
}
return (new photosure.blog.t15660(owner,app,blog,null));
});
photosure.blog.render = (function render(){return om.core.root.call(null,photosure.blog.blog,photosure.blog.app_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("dynamic-content")], null));
});

//# sourceMappingURL=blog.js.map