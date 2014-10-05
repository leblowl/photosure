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
photosure.blog.app_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"posts","posts",760043164),cljs.core.PersistentVector.EMPTY], null));
photosure.blog.parse_caption = (function parse_caption(caption){return cljs.core.map.call(null,hickory.core.as_hiccup,hickory.core.parse_fragment.call(null,caption));
});
photosure.blog.text_view = (function text_view(caption,owner){if(typeof photosure.blog.t12911 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t12911 = (function (owner,caption,text_view,meta12912){
this.owner = owner;
this.caption = caption;
this.text_view = text_view;
this.meta12912 = meta12912;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t12911.cljs$lang$type = true;
photosure.blog.t12911.cljs$lang$ctorStr = "photosure.blog/t12911";
photosure.blog.t12911.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t12911");
});
photosure.blog.t12911.prototype.om$core$IRender$ = true;
photosure.blog.t12911.prototype.om$core$IRender$render$arity$1 = (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return React.DOM.div({"dangerouslySetInnerHTML": {"__html": self__.caption}, "className": "caption"},null);
});
photosure.blog.t12911.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12913){var self__ = this;
var _12913__$1 = this;return self__.meta12912;
});
photosure.blog.t12911.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12913,meta12912__$1){var self__ = this;
var _12913__$1 = this;return (new photosure.blog.t12911(self__.owner,self__.caption,self__.text_view,meta12912__$1));
});
photosure.blog.__GT_t12911 = (function __GT_t12911(owner__$1,caption__$1,text_view__$1,meta12912){return (new photosure.blog.t12911(owner__$1,caption__$1,text_view__$1,meta12912));
});
}
return (new photosure.blog.t12911(owner,caption,text_view,null));
});
photosure.blog.text_post_view = (function text_post_view(p__12914,owner){var map__12919 = p__12914;var map__12919__$1 = ((cljs.core.seq_QMARK_.call(null,map__12919))?cljs.core.apply.call(null,cljs.core.hash_map,map__12919):map__12919);var id = cljs.core.get.call(null,map__12919__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var title = cljs.core.get.call(null,map__12919__$1,new cljs.core.Keyword(null,"title","title",636505583));var body = cljs.core.get.call(null,map__12919__$1,new cljs.core.Keyword(null,"body","body",-2049205669));if(typeof photosure.blog.t12920 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t12920 = (function (body,title,id,map__12919,owner,p__12914,text_post_view,meta12921){
this.body = body;
this.title = title;
this.id = id;
this.map__12919 = map__12919;
this.owner = owner;
this.p__12914 = p__12914;
this.text_post_view = text_post_view;
this.meta12921 = meta12921;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t12920.cljs$lang$type = true;
photosure.blog.t12920.cljs$lang$ctorStr = "photosure.blog/t12920";
photosure.blog.t12920.cljs$lang$ctorPrWriter = ((function (map__12919,map__12919__$1,id,title,body){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t12920");
});})(map__12919,map__12919__$1,id,title,body))
;
photosure.blog.t12920.prototype.om$core$IRender$ = true;
photosure.blog.t12920.prototype.om$core$IRender$render$arity$1 = ((function (map__12919,map__12919__$1,id,title,body){
return (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return React.DOM.div({"className": "post", "id": self__.id},React.DOM.h2({"className": "blog-title"},self__.title),om.core.build.call(null,photosure.blog.text_view,self__.body));
});})(map__12919,map__12919__$1,id,title,body))
;
photosure.blog.t12920.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__12919,map__12919__$1,id,title,body){
return (function (_12922){var self__ = this;
var _12922__$1 = this;return self__.meta12921;
});})(map__12919,map__12919__$1,id,title,body))
;
photosure.blog.t12920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__12919,map__12919__$1,id,title,body){
return (function (_12922,meta12921__$1){var self__ = this;
var _12922__$1 = this;return (new photosure.blog.t12920(self__.body,self__.title,self__.id,self__.map__12919,self__.owner,self__.p__12914,self__.text_post_view,meta12921__$1));
});})(map__12919,map__12919__$1,id,title,body))
;
photosure.blog.__GT_t12920 = ((function (map__12919,map__12919__$1,id,title,body){
return (function __GT_t12920(body__$1,title__$1,id__$1,map__12919__$2,owner__$1,p__12914__$1,text_post_view__$1,meta12921){return (new photosure.blog.t12920(body__$1,title__$1,id__$1,map__12919__$2,owner__$1,p__12914__$1,text_post_view__$1,meta12921));
});})(map__12919,map__12919__$1,id,title,body))
;
}
return (new photosure.blog.t12920(body,title,id,map__12919__$1,owner,p__12914,text_post_view,null));
});
photosure.blog.photo_post_view = (function photo_post_view(p__12923,owner){var map__12928 = p__12923;var map__12928__$1 = ((cljs.core.seq_QMARK_.call(null,map__12928))?cljs.core.apply.call(null,cljs.core.hash_map,map__12928):map__12928);var id = cljs.core.get.call(null,map__12928__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var photos = cljs.core.get.call(null,map__12928__$1,new cljs.core.Keyword(null,"photos","photos",11691538));var caption = cljs.core.get.call(null,map__12928__$1,new cljs.core.Keyword(null,"caption","caption",-855383902));if(typeof photosure.blog.t12929 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t12929 = (function (caption,photos,id,map__12928,owner,p__12923,photo_post_view,meta12930){
this.caption = caption;
this.photos = photos;
this.id = id;
this.map__12928 = map__12928;
this.owner = owner;
this.p__12923 = p__12923;
this.photo_post_view = photo_post_view;
this.meta12930 = meta12930;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t12929.cljs$lang$type = true;
photosure.blog.t12929.cljs$lang$ctorStr = "photosure.blog/t12929";
photosure.blog.t12929.cljs$lang$ctorPrWriter = ((function (map__12928,map__12928__$1,id,photos,caption){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t12929");
});})(map__12928,map__12928__$1,id,photos,caption))
;
photosure.blog.t12929.prototype.om$core$IRender$ = true;
photosure.blog.t12929.prototype.om$core$IRender$render$arity$1 = ((function (map__12928,map__12928__$1,id,photos,caption){
return (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return React.DOM.div({"className": "post", "id": self__.id},cljs.core.apply.call(null,om.dom.div,{"className": "blog-photo"},cljs.core.map.call(null,((function (this__5143__auto____$1,map__12928,map__12928__$1,id,photos,caption){
return (function (photo){return React.DOM.img({"src": new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"original_size","original_size",-1238801714).cljs$core$IFn$_invoke$arity$1(photo))});
});})(this__5143__auto____$1,map__12928,map__12928__$1,id,photos,caption))
,self__.photos)),om.core.build.call(null,photosure.blog.text_view,self__.caption));
});})(map__12928,map__12928__$1,id,photos,caption))
;
photosure.blog.t12929.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__12928,map__12928__$1,id,photos,caption){
return (function (_12931){var self__ = this;
var _12931__$1 = this;return self__.meta12930;
});})(map__12928,map__12928__$1,id,photos,caption))
;
photosure.blog.t12929.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__12928,map__12928__$1,id,photos,caption){
return (function (_12931,meta12930__$1){var self__ = this;
var _12931__$1 = this;return (new photosure.blog.t12929(self__.caption,self__.photos,self__.id,self__.map__12928,self__.owner,self__.p__12923,self__.photo_post_view,meta12930__$1));
});})(map__12928,map__12928__$1,id,photos,caption))
;
photosure.blog.__GT_t12929 = ((function (map__12928,map__12928__$1,id,photos,caption){
return (function __GT_t12929(caption__$1,photos__$1,id__$1,map__12928__$2,owner__$1,p__12923__$1,photo_post_view__$1,meta12930){return (new photosure.blog.t12929(caption__$1,photos__$1,id__$1,map__12928__$2,owner__$1,p__12923__$1,photo_post_view__$1,meta12930));
});})(map__12928,map__12928__$1,id,photos,caption))
;
}
return (new photosure.blog.t12929(caption,photos,id,map__12928__$1,owner,p__12923,photo_post_view,null));
});
photosure.blog.post_view = (function post_view(p__12932,owner){var map__12937 = p__12932;var map__12937__$1 = ((cljs.core.seq_QMARK_.call(null,map__12937))?cljs.core.apply.call(null,cljs.core.hash_map,map__12937):map__12937);var post = map__12937__$1;var type = cljs.core.get.call(null,map__12937__$1,new cljs.core.Keyword(null,"type","type",1174270348));if(typeof photosure.blog.t12938 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t12938 = (function (type,post,map__12937,owner,p__12932,post_view,meta12939){
this.type = type;
this.post = post;
this.map__12937 = map__12937;
this.owner = owner;
this.p__12932 = p__12932;
this.post_view = post_view;
this.meta12939 = meta12939;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t12938.cljs$lang$type = true;
photosure.blog.t12938.cljs$lang$ctorStr = "photosure.blog/t12938";
photosure.blog.t12938.cljs$lang$ctorPrWriter = ((function (map__12937,map__12937__$1,post,type){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t12938");
});})(map__12937,map__12937__$1,post,type))
;
photosure.blog.t12938.prototype.om$core$IRender$ = true;
photosure.blog.t12938.prototype.om$core$IRender$render$arity$1 = ((function (map__12937,map__12937__$1,post,type){
return (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core._EQ_.call(null,self__.type,"photo"))
{return om.core.build.call(null,photosure.blog.photo_post_view,self__.post);
} else
{return om.core.build.call(null,photosure.blog.text_post_view,self__.post);
}
});})(map__12937,map__12937__$1,post,type))
;
photosure.blog.t12938.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__12937,map__12937__$1,post,type){
return (function (_12940){var self__ = this;
var _12940__$1 = this;return self__.meta12939;
});})(map__12937,map__12937__$1,post,type))
;
photosure.blog.t12938.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__12937,map__12937__$1,post,type){
return (function (_12940,meta12939__$1){var self__ = this;
var _12940__$1 = this;return (new photosure.blog.t12938(self__.type,self__.post,self__.map__12937,self__.owner,self__.p__12932,self__.post_view,meta12939__$1));
});})(map__12937,map__12937__$1,post,type))
;
photosure.blog.__GT_t12938 = ((function (map__12937,map__12937__$1,post,type){
return (function __GT_t12938(type__$1,post__$1,map__12937__$2,owner__$1,p__12932__$1,post_view__$1,meta12939){return (new photosure.blog.t12938(type__$1,post__$1,map__12937__$2,owner__$1,p__12932__$1,post_view__$1,meta12939));
});})(map__12937,map__12937__$1,post,type))
;
}
return (new photosure.blog.t12938(type,post,map__12937__$1,owner,p__12932,post_view,null));
});
photosure.blog.posts_view = (function posts_view(app,owner){if(typeof photosure.blog.t12944 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t12944 = (function (owner,app,posts_view,meta12945){
this.owner = owner;
this.app = app;
this.posts_view = posts_view;
this.meta12945 = meta12945;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t12944.cljs$lang$type = true;
photosure.blog.t12944.cljs$lang$ctorStr = "photosure.blog/t12944";
photosure.blog.t12944.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t12944");
});
photosure.blog.t12944.prototype.om$core$IRender$ = true;
photosure.blog.t12944.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.apply.call(null,om.dom.div,{"id": "post-list"},om.core.build_all.call(null,photosure.blog.post_view,new cljs.core.Keyword(null,"posts","posts",760043164).cljs$core$IFn$_invoke$arity$1(self__.app)));
});
photosure.blog.t12944.prototype.om$core$IWillMount$ = true;
photosure.blog.t12944.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return photosure.util.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),"api/posts",new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),((function (___$1){
return (function (___$2){return om.core.update_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"posts","posts",760043164),___$2);
});})(___$1))
], null));
});
photosure.blog.t12944.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12946){var self__ = this;
var _12946__$1 = this;return self__.meta12945;
});
photosure.blog.t12944.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12946,meta12945__$1){var self__ = this;
var _12946__$1 = this;return (new photosure.blog.t12944(self__.owner,self__.app,self__.posts_view,meta12945__$1));
});
photosure.blog.__GT_t12944 = (function __GT_t12944(owner__$1,app__$1,posts_view__$1,meta12945){return (new photosure.blog.t12944(owner__$1,app__$1,posts_view__$1,meta12945));
});
}
return (new photosure.blog.t12944(owner,app,posts_view,null));
});
photosure.blog.blog = (function blog(app,owner){if(typeof photosure.blog.t12950 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t12950 = (function (owner,app,blog,meta12951){
this.owner = owner;
this.app = app;
this.blog = blog;
this.meta12951 = meta12951;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t12950.cljs$lang$type = true;
photosure.blog.t12950.cljs$lang$ctorStr = "photosure.blog/t12950";
photosure.blog.t12950.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t12950");
});
photosure.blog.t12950.prototype.om$core$IRender$ = true;
photosure.blog.t12950.prototype.om$core$IRender$render$arity$1 = (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return React.DOM.div({"id": "blog-gallery-container"},om.core.build.call(null,photosure.scrolldiv.scroll_div,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"blog-gallery",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.core.build.call(null,photosure.blog.posts_view,self__.app)], null)], null)], null)));
});
photosure.blog.t12950.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12952){var self__ = this;
var _12952__$1 = this;return self__.meta12951;
});
photosure.blog.t12950.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12952,meta12951__$1){var self__ = this;
var _12952__$1 = this;return (new photosure.blog.t12950(self__.owner,self__.app,self__.blog,meta12951__$1));
});
photosure.blog.__GT_t12950 = (function __GT_t12950(owner__$1,app__$1,blog__$1,meta12951){return (new photosure.blog.t12950(owner__$1,app__$1,blog__$1,meta12951));
});
}
return (new photosure.blog.t12950(owner,app,blog,null));
});
photosure.blog.render = (function render(){return om.core.root.call(null,photosure.blog.blog,photosure.blog.app_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("dynamic-content")], null));
});

//# sourceMappingURL=blog.js.map