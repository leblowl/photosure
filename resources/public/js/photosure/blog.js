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
photosure.blog.app_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"posts","posts",760043164),cljs.core.PersistentVector.EMPTY], null));
photosure.blog.text_view = (function text_view(caption,owner){if(typeof photosure.blog.t10170 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t10170 = (function (owner,caption,text_view,meta10171){
this.owner = owner;
this.caption = caption;
this.text_view = text_view;
this.meta10171 = meta10171;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t10170.cljs$lang$type = true;
photosure.blog.t10170.cljs$lang$ctorStr = "photosure.blog/t10170";
photosure.blog.t10170.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t10170");
});
photosure.blog.t10170.prototype.om$core$IRender$ = true;
photosure.blog.t10170.prototype.om$core$IRender$render$arity$1 = (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return React.DOM.div({"dangerouslySetInnerHTML": {"__html": self__.caption}, "className": "caption"},null);
});
photosure.blog.t10170.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10172){var self__ = this;
var _10172__$1 = this;return self__.meta10171;
});
photosure.blog.t10170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10172,meta10171__$1){var self__ = this;
var _10172__$1 = this;return (new photosure.blog.t10170(self__.owner,self__.caption,self__.text_view,meta10171__$1));
});
photosure.blog.__GT_t10170 = (function __GT_t10170(owner__$1,caption__$1,text_view__$1,meta10171){return (new photosure.blog.t10170(owner__$1,caption__$1,text_view__$1,meta10171));
});
}
return (new photosure.blog.t10170(owner,caption,text_view,null));
});
photosure.blog.text_post_view = (function text_post_view(p__10173,owner){var map__10178 = p__10173;var map__10178__$1 = ((cljs.core.seq_QMARK_.call(null,map__10178))?cljs.core.apply.call(null,cljs.core.hash_map,map__10178):map__10178);var id = cljs.core.get.call(null,map__10178__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var title = cljs.core.get.call(null,map__10178__$1,new cljs.core.Keyword(null,"title","title",636505583));var body = cljs.core.get.call(null,map__10178__$1,new cljs.core.Keyword(null,"body","body",-2049205669));if(typeof photosure.blog.t10179 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t10179 = (function (body,title,id,map__10178,owner,p__10173,text_post_view,meta10180){
this.body = body;
this.title = title;
this.id = id;
this.map__10178 = map__10178;
this.owner = owner;
this.p__10173 = p__10173;
this.text_post_view = text_post_view;
this.meta10180 = meta10180;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t10179.cljs$lang$type = true;
photosure.blog.t10179.cljs$lang$ctorStr = "photosure.blog/t10179";
photosure.blog.t10179.cljs$lang$ctorPrWriter = ((function (map__10178,map__10178__$1,id,title,body){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t10179");
});})(map__10178,map__10178__$1,id,title,body))
;
photosure.blog.t10179.prototype.om$core$IRender$ = true;
photosure.blog.t10179.prototype.om$core$IRender$render$arity$1 = ((function (map__10178,map__10178__$1,id,title,body){
return (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return React.DOM.div({"className": "post", "id": self__.id},React.DOM.h2({"className": "blog-title"},self__.title),om.core.build.call(null,photosure.blog.text_view,self__.body));
});})(map__10178,map__10178__$1,id,title,body))
;
photosure.blog.t10179.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10178,map__10178__$1,id,title,body){
return (function (_10181){var self__ = this;
var _10181__$1 = this;return self__.meta10180;
});})(map__10178,map__10178__$1,id,title,body))
;
photosure.blog.t10179.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10178,map__10178__$1,id,title,body){
return (function (_10181,meta10180__$1){var self__ = this;
var _10181__$1 = this;return (new photosure.blog.t10179(self__.body,self__.title,self__.id,self__.map__10178,self__.owner,self__.p__10173,self__.text_post_view,meta10180__$1));
});})(map__10178,map__10178__$1,id,title,body))
;
photosure.blog.__GT_t10179 = ((function (map__10178,map__10178__$1,id,title,body){
return (function __GT_t10179(body__$1,title__$1,id__$1,map__10178__$2,owner__$1,p__10173__$1,text_post_view__$1,meta10180){return (new photosure.blog.t10179(body__$1,title__$1,id__$1,map__10178__$2,owner__$1,p__10173__$1,text_post_view__$1,meta10180));
});})(map__10178,map__10178__$1,id,title,body))
;
}
return (new photosure.blog.t10179(body,title,id,map__10178__$1,owner,p__10173,text_post_view,null));
});
photosure.blog.photo_post_view = (function photo_post_view(p__10182,owner){var map__10187 = p__10182;var map__10187__$1 = ((cljs.core.seq_QMARK_.call(null,map__10187))?cljs.core.apply.call(null,cljs.core.hash_map,map__10187):map__10187);var id = cljs.core.get.call(null,map__10187__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var photos = cljs.core.get.call(null,map__10187__$1,new cljs.core.Keyword(null,"photos","photos",11691538));var caption = cljs.core.get.call(null,map__10187__$1,new cljs.core.Keyword(null,"caption","caption",-855383902));if(typeof photosure.blog.t10188 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t10188 = (function (caption,photos,id,map__10187,owner,p__10182,photo_post_view,meta10189){
this.caption = caption;
this.photos = photos;
this.id = id;
this.map__10187 = map__10187;
this.owner = owner;
this.p__10182 = p__10182;
this.photo_post_view = photo_post_view;
this.meta10189 = meta10189;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t10188.cljs$lang$type = true;
photosure.blog.t10188.cljs$lang$ctorStr = "photosure.blog/t10188";
photosure.blog.t10188.cljs$lang$ctorPrWriter = ((function (map__10187,map__10187__$1,id,photos,caption){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t10188");
});})(map__10187,map__10187__$1,id,photos,caption))
;
photosure.blog.t10188.prototype.om$core$IRender$ = true;
photosure.blog.t10188.prototype.om$core$IRender$render$arity$1 = ((function (map__10187,map__10187__$1,id,photos,caption){
return (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return React.DOM.div({"className": "post", "id": self__.id},cljs.core.apply.call(null,om.dom.div,{"className": "blog-photo"},cljs.core.map.call(null,((function (this__5143__auto____$1,map__10187,map__10187__$1,id,photos,caption){
return (function (photo){return React.DOM.img({"src": photo});
});})(this__5143__auto____$1,map__10187,map__10187__$1,id,photos,caption))
,self__.photos)),om.core.build.call(null,photosure.blog.text_view,self__.caption));
});})(map__10187,map__10187__$1,id,photos,caption))
;
photosure.blog.t10188.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10187,map__10187__$1,id,photos,caption){
return (function (_10190){var self__ = this;
var _10190__$1 = this;return self__.meta10189;
});})(map__10187,map__10187__$1,id,photos,caption))
;
photosure.blog.t10188.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10187,map__10187__$1,id,photos,caption){
return (function (_10190,meta10189__$1){var self__ = this;
var _10190__$1 = this;return (new photosure.blog.t10188(self__.caption,self__.photos,self__.id,self__.map__10187,self__.owner,self__.p__10182,self__.photo_post_view,meta10189__$1));
});})(map__10187,map__10187__$1,id,photos,caption))
;
photosure.blog.__GT_t10188 = ((function (map__10187,map__10187__$1,id,photos,caption){
return (function __GT_t10188(caption__$1,photos__$1,id__$1,map__10187__$2,owner__$1,p__10182__$1,photo_post_view__$1,meta10189){return (new photosure.blog.t10188(caption__$1,photos__$1,id__$1,map__10187__$2,owner__$1,p__10182__$1,photo_post_view__$1,meta10189));
});})(map__10187,map__10187__$1,id,photos,caption))
;
}
return (new photosure.blog.t10188(caption,photos,id,map__10187__$1,owner,p__10182,photo_post_view,null));
});
photosure.blog.post_view = (function post_view(p__10191,owner){var map__10196 = p__10191;var map__10196__$1 = ((cljs.core.seq_QMARK_.call(null,map__10196))?cljs.core.apply.call(null,cljs.core.hash_map,map__10196):map__10196);var post = map__10196__$1;var type = cljs.core.get.call(null,map__10196__$1,new cljs.core.Keyword(null,"type","type",1174270348));if(typeof photosure.blog.t10197 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t10197 = (function (type,post,map__10196,owner,p__10191,post_view,meta10198){
this.type = type;
this.post = post;
this.map__10196 = map__10196;
this.owner = owner;
this.p__10191 = p__10191;
this.post_view = post_view;
this.meta10198 = meta10198;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t10197.cljs$lang$type = true;
photosure.blog.t10197.cljs$lang$ctorStr = "photosure.blog/t10197";
photosure.blog.t10197.cljs$lang$ctorPrWriter = ((function (map__10196,map__10196__$1,post,type){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t10197");
});})(map__10196,map__10196__$1,post,type))
;
photosure.blog.t10197.prototype.om$core$IRender$ = true;
photosure.blog.t10197.prototype.om$core$IRender$render$arity$1 = ((function (map__10196,map__10196__$1,post,type){
return (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core._EQ_.call(null,self__.type,"photo"))
{return om.core.build.call(null,photosure.blog.photo_post_view,self__.post);
} else
{return om.core.build.call(null,photosure.blog.text_post_view,self__.post);
}
});})(map__10196,map__10196__$1,post,type))
;
photosure.blog.t10197.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10196,map__10196__$1,post,type){
return (function (_10199){var self__ = this;
var _10199__$1 = this;return self__.meta10198;
});})(map__10196,map__10196__$1,post,type))
;
photosure.blog.t10197.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10196,map__10196__$1,post,type){
return (function (_10199,meta10198__$1){var self__ = this;
var _10199__$1 = this;return (new photosure.blog.t10197(self__.type,self__.post,self__.map__10196,self__.owner,self__.p__10191,self__.post_view,meta10198__$1));
});})(map__10196,map__10196__$1,post,type))
;
photosure.blog.__GT_t10197 = ((function (map__10196,map__10196__$1,post,type){
return (function __GT_t10197(type__$1,post__$1,map__10196__$2,owner__$1,p__10191__$1,post_view__$1,meta10198){return (new photosure.blog.t10197(type__$1,post__$1,map__10196__$2,owner__$1,p__10191__$1,post_view__$1,meta10198));
});})(map__10196,map__10196__$1,post,type))
;
}
return (new photosure.blog.t10197(type,post,map__10196__$1,owner,p__10191,post_view,null));
});
photosure.blog.posts_view = (function posts_view(app,owner){if(typeof photosure.blog.t10203 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t10203 = (function (owner,app,posts_view,meta10204){
this.owner = owner;
this.app = app;
this.posts_view = posts_view;
this.meta10204 = meta10204;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t10203.cljs$lang$type = true;
photosure.blog.t10203.cljs$lang$ctorStr = "photosure.blog/t10203";
photosure.blog.t10203.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t10203");
});
photosure.blog.t10203.prototype.om$core$IRender$ = true;
photosure.blog.t10203.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.apply.call(null,om.dom.div,{"id": "post-list"},om.core.build_all.call(null,photosure.blog.post_view,new cljs.core.Keyword(null,"posts","posts",760043164).cljs$core$IFn$_invoke$arity$1(self__.app)));
});
photosure.blog.t10203.prototype.om$core$IWillMount$ = true;
photosure.blog.t10203.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return null;
});
photosure.blog.t10203.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10205){var self__ = this;
var _10205__$1 = this;return self__.meta10204;
});
photosure.blog.t10203.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10205,meta10204__$1){var self__ = this;
var _10205__$1 = this;return (new photosure.blog.t10203(self__.owner,self__.app,self__.posts_view,meta10204__$1));
});
photosure.blog.__GT_t10203 = (function __GT_t10203(owner__$1,app__$1,posts_view__$1,meta10204){return (new photosure.blog.t10203(owner__$1,app__$1,posts_view__$1,meta10204));
});
}
return (new photosure.blog.t10203(owner,app,posts_view,null));
});
photosure.blog.spinner = (function spinner(app,owner){if(typeof photosure.blog.t10211 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t10211 = (function (owner,app,spinner,meta10212){
this.owner = owner;
this.app = app;
this.spinner = spinner;
this.meta10212 = meta10212;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t10211.cljs$lang$type = true;
photosure.blog.t10211.cljs$lang$ctorStr = "photosure.blog/t10211";
photosure.blog.t10211.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t10211");
});
photosure.blog.t10211.prototype.om$core$IRenderState$ = true;
photosure.blog.t10211.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__10214){var self__ = this;
var map__10215 = p__10214;var map__10215__$1 = ((cljs.core.seq_QMARK_.call(null,map__10215))?cljs.core.apply.call(null,cljs.core.hash_map,map__10215):map__10215);var time = cljs.core.get.call(null,map__10215__$1,new cljs.core.Keyword(null,"time","time",1385887882));var this$__$1 = this;return React.DOM.div({"id": "loader"},React.DOM.div({"className": ("circle "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red","green","blue"], null),cljs.core.mod.call(null,time,(3))))), "id": "one"}),React.DOM.div({"className": "circle", "id": "two"}),React.DOM.div({"className": "circle", "id": "three"}));
});
photosure.blog.t10211.prototype.om$core$IWillMount$ = true;
photosure.blog.t10211.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return setInterval(((function (___$1){
return (function (){return om.core.update_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"time","time",1385887882),((function (___$1){
return (function (time){return (time + (1));
});})(___$1))
);
});})(___$1))
,(300));
});
photosure.blog.t10211.prototype.om$core$IInitState$ = true;
photosure.blog.t10211.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"time","time",1385887882),(0)], null);
});
photosure.blog.t10211.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10213){var self__ = this;
var _10213__$1 = this;return self__.meta10212;
});
photosure.blog.t10211.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10213,meta10212__$1){var self__ = this;
var _10213__$1 = this;return (new photosure.blog.t10211(self__.owner,self__.app,self__.spinner,meta10212__$1));
});
photosure.blog.__GT_t10211 = (function __GT_t10211(owner__$1,app__$1,spinner__$1,meta10212){return (new photosure.blog.t10211(owner__$1,app__$1,spinner__$1,meta10212));
});
}
return (new photosure.blog.t10211(owner,app,spinner,null));
});
photosure.blog.blog = (function blog(app,owner){if(typeof photosure.blog.t10221 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t10221 = (function (owner,app,blog,meta10222){
this.owner = owner;
this.app = app;
this.blog = blog;
this.meta10222 = meta10222;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t10221.cljs$lang$type = true;
photosure.blog.t10221.cljs$lang$ctorStr = "photosure.blog/t10221";
photosure.blog.t10221.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t10221");
});
photosure.blog.t10221.prototype.om$core$IRenderState$ = true;
photosure.blog.t10221.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__10224){var self__ = this;
var map__10225 = p__10224;var map__10225__$1 = ((cljs.core.seq_QMARK_.call(null,map__10225))?cljs.core.apply.call(null,cljs.core.hash_map,map__10225):map__10225);var loaded = cljs.core.get.call(null,map__10225__$1,new cljs.core.Keyword(null,"loaded","loaded",-1246482293));var this$__$1 = this;return React.DOM.div({"id": "blog-gallery-container"},(cljs.core.truth_(loaded)?om.core.build.call(null,photosure.scrolldiv.scroll_div,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"blog-gallery",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.core.build.call(null,photosure.blog.posts_view,self__.app)], null)], null)], null)):null));
});
photosure.blog.t10221.prototype.om$core$IWillMount$ = true;
photosure.blog.t10221.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return photosure.util.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),"api/posts",new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),((function (___$1){
return (function (___$2){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true);
return om.core.update_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"posts","posts",760043164),___$2);
});})(___$1))
], null));
});
photosure.blog.t10221.prototype.om$core$IInitState$ = true;
photosure.blog.t10221.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),false], null);
});
photosure.blog.t10221.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10223){var self__ = this;
var _10223__$1 = this;return self__.meta10222;
});
photosure.blog.t10221.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10223,meta10222__$1){var self__ = this;
var _10223__$1 = this;return (new photosure.blog.t10221(self__.owner,self__.app,self__.blog,meta10222__$1));
});
photosure.blog.__GT_t10221 = (function __GT_t10221(owner__$1,app__$1,blog__$1,meta10222){return (new photosure.blog.t10221(owner__$1,app__$1,blog__$1,meta10222));
});
}
return (new photosure.blog.t10221(owner,app,blog,null));
});
photosure.blog.render = (function render(){return om.core.root.call(null,photosure.blog.blog,photosure.blog.app_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("dynamic-content")], null));
});

//# sourceMappingURL=blog.js.map