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
photosure.blog.text_view = (function text_view(caption,owner){if(typeof photosure.blog.t24292 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t24292 = (function (owner,caption,text_view,meta24293){
this.owner = owner;
this.caption = caption;
this.text_view = text_view;
this.meta24293 = meta24293;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t24292.cljs$lang$type = true;
photosure.blog.t24292.cljs$lang$ctorStr = "photosure.blog/t24292";
photosure.blog.t24292.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t24292");
});
photosure.blog.t24292.prototype.om$core$IRender$ = true;
photosure.blog.t24292.prototype.om$core$IRender$render$arity$1 = (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return React.DOM.div({"dangerouslySetInnerHTML": {"__html": self__.caption}, "className": "caption"},null);
});
photosure.blog.t24292.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24294){var self__ = this;
var _24294__$1 = this;return self__.meta24293;
});
photosure.blog.t24292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24294,meta24293__$1){var self__ = this;
var _24294__$1 = this;return (new photosure.blog.t24292(self__.owner,self__.caption,self__.text_view,meta24293__$1));
});
photosure.blog.__GT_t24292 = (function __GT_t24292(owner__$1,caption__$1,text_view__$1,meta24293){return (new photosure.blog.t24292(owner__$1,caption__$1,text_view__$1,meta24293));
});
}
return (new photosure.blog.t24292(owner,caption,text_view,null));
});
photosure.blog.answer_post_view = (function answer_post_view(p__24295){var map__24300 = p__24295;var map__24300__$1 = ((cljs.core.seq_QMARK_.call(null,map__24300))?cljs.core.apply.call(null,cljs.core.hash_map,map__24300):map__24300);var id = cljs.core.get.call(null,map__24300__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var asking_name = cljs.core.get.call(null,map__24300__$1,new cljs.core.Keyword(null,"asking_name","asking_name",728401374));var asking_url = cljs.core.get.call(null,map__24300__$1,new cljs.core.Keyword(null,"asking_url","asking_url",-384387495));var question = cljs.core.get.call(null,map__24300__$1,new cljs.core.Keyword(null,"question","question",-1411720117));var answer = cljs.core.get.call(null,map__24300__$1,new cljs.core.Keyword(null,"answer","answer",-742633163));if(typeof photosure.blog.t24301 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t24301 = (function (answer,question,asking_url,asking_name,id,map__24300,p__24295,answer_post_view,meta24302){
this.answer = answer;
this.question = question;
this.asking_url = asking_url;
this.asking_name = asking_name;
this.id = id;
this.map__24300 = map__24300;
this.p__24295 = p__24295;
this.answer_post_view = answer_post_view;
this.meta24302 = meta24302;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t24301.cljs$lang$type = true;
photosure.blog.t24301.cljs$lang$ctorStr = "photosure.blog/t24301";
photosure.blog.t24301.cljs$lang$ctorPrWriter = ((function (map__24300,map__24300__$1,id,asking_name,asking_url,question,answer){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t24301");
});})(map__24300,map__24300__$1,id,asking_name,asking_url,question,answer))
;
photosure.blog.t24301.prototype.om$core$IRender$ = true;
photosure.blog.t24301.prototype.om$core$IRender$render$arity$1 = ((function (map__24300,map__24300__$1,id,asking_name,asking_url,question,answer){
return (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return React.DOM.div({"className": "post", "id": self__.id},React.DOM.div(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.asking_name)+" @ "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.asking_url)+": "),React.DOM.div({})));
});})(map__24300,map__24300__$1,id,asking_name,asking_url,question,answer))
;
photosure.blog.t24301.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__24300,map__24300__$1,id,asking_name,asking_url,question,answer){
return (function (_24303){var self__ = this;
var _24303__$1 = this;return self__.meta24302;
});})(map__24300,map__24300__$1,id,asking_name,asking_url,question,answer))
;
photosure.blog.t24301.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__24300,map__24300__$1,id,asking_name,asking_url,question,answer){
return (function (_24303,meta24302__$1){var self__ = this;
var _24303__$1 = this;return (new photosure.blog.t24301(self__.answer,self__.question,self__.asking_url,self__.asking_name,self__.id,self__.map__24300,self__.p__24295,self__.answer_post_view,meta24302__$1));
});})(map__24300,map__24300__$1,id,asking_name,asking_url,question,answer))
;
photosure.blog.__GT_t24301 = ((function (map__24300,map__24300__$1,id,asking_name,asking_url,question,answer){
return (function __GT_t24301(answer__$1,question__$1,asking_url__$1,asking_name__$1,id__$1,map__24300__$2,p__24295__$1,answer_post_view__$1,meta24302){return (new photosure.blog.t24301(answer__$1,question__$1,asking_url__$1,asking_name__$1,id__$1,map__24300__$2,p__24295__$1,answer_post_view__$1,meta24302));
});})(map__24300,map__24300__$1,id,asking_name,asking_url,question,answer))
;
}
return (new photosure.blog.t24301(answer,question,asking_url,asking_name,id,map__24300__$1,p__24295,answer_post_view,null));
});
photosure.blog.text_post_view = (function text_post_view(p__24304,owner){var map__24309 = p__24304;var map__24309__$1 = ((cljs.core.seq_QMARK_.call(null,map__24309))?cljs.core.apply.call(null,cljs.core.hash_map,map__24309):map__24309);var id = cljs.core.get.call(null,map__24309__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var title = cljs.core.get.call(null,map__24309__$1,new cljs.core.Keyword(null,"title","title",636505583));var body = cljs.core.get.call(null,map__24309__$1,new cljs.core.Keyword(null,"body","body",-2049205669));if(typeof photosure.blog.t24310 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t24310 = (function (body,title,id,map__24309,owner,p__24304,text_post_view,meta24311){
this.body = body;
this.title = title;
this.id = id;
this.map__24309 = map__24309;
this.owner = owner;
this.p__24304 = p__24304;
this.text_post_view = text_post_view;
this.meta24311 = meta24311;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t24310.cljs$lang$type = true;
photosure.blog.t24310.cljs$lang$ctorStr = "photosure.blog/t24310";
photosure.blog.t24310.cljs$lang$ctorPrWriter = ((function (map__24309,map__24309__$1,id,title,body){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t24310");
});})(map__24309,map__24309__$1,id,title,body))
;
photosure.blog.t24310.prototype.om$core$IRender$ = true;
photosure.blog.t24310.prototype.om$core$IRender$render$arity$1 = ((function (map__24309,map__24309__$1,id,title,body){
return (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return React.DOM.div({"className": "post", "id": self__.id},React.DOM.h2({"className": "blog-title"},self__.title),om.core.build.call(null,photosure.blog.text_view,self__.body));
});})(map__24309,map__24309__$1,id,title,body))
;
photosure.blog.t24310.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__24309,map__24309__$1,id,title,body){
return (function (_24312){var self__ = this;
var _24312__$1 = this;return self__.meta24311;
});})(map__24309,map__24309__$1,id,title,body))
;
photosure.blog.t24310.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__24309,map__24309__$1,id,title,body){
return (function (_24312,meta24311__$1){var self__ = this;
var _24312__$1 = this;return (new photosure.blog.t24310(self__.body,self__.title,self__.id,self__.map__24309,self__.owner,self__.p__24304,self__.text_post_view,meta24311__$1));
});})(map__24309,map__24309__$1,id,title,body))
;
photosure.blog.__GT_t24310 = ((function (map__24309,map__24309__$1,id,title,body){
return (function __GT_t24310(body__$1,title__$1,id__$1,map__24309__$2,owner__$1,p__24304__$1,text_post_view__$1,meta24311){return (new photosure.blog.t24310(body__$1,title__$1,id__$1,map__24309__$2,owner__$1,p__24304__$1,text_post_view__$1,meta24311));
});})(map__24309,map__24309__$1,id,title,body))
;
}
return (new photosure.blog.t24310(body,title,id,map__24309__$1,owner,p__24304,text_post_view,null));
});
photosure.blog.photo_post_view = (function photo_post_view(p__24313,owner){var map__24320 = p__24313;var map__24320__$1 = ((cljs.core.seq_QMARK_.call(null,map__24320))?cljs.core.apply.call(null,cljs.core.hash_map,map__24320):map__24320);var id = cljs.core.get.call(null,map__24320__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var photos = cljs.core.get.call(null,map__24320__$1,new cljs.core.Keyword(null,"photos","photos",11691538));var caption = cljs.core.get.call(null,map__24320__$1,new cljs.core.Keyword(null,"caption","caption",-855383902));if(typeof photosure.blog.t24321 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t24321 = (function (caption,photos,id,map__24320,owner,p__24313,photo_post_view,meta24322){
this.caption = caption;
this.photos = photos;
this.id = id;
this.map__24320 = map__24320;
this.owner = owner;
this.p__24313 = p__24313;
this.photo_post_view = photo_post_view;
this.meta24322 = meta24322;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t24321.cljs$lang$type = true;
photosure.blog.t24321.cljs$lang$ctorStr = "photosure.blog/t24321";
photosure.blog.t24321.cljs$lang$ctorPrWriter = ((function (map__24320,map__24320__$1,id,photos,caption){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t24321");
});})(map__24320,map__24320__$1,id,photos,caption))
;
photosure.blog.t24321.prototype.om$core$IRenderState$ = true;
photosure.blog.t24321.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__24320,map__24320__$1,id,photos,caption){
return (function (this$,p__24324){var self__ = this;
var map__24325 = p__24324;var map__24325__$1 = ((cljs.core.seq_QMARK_.call(null,map__24325))?cljs.core.apply.call(null,cljs.core.hash_map,map__24325):map__24325);var loaded = cljs.core.get.call(null,map__24325__$1,new cljs.core.Keyword(null,"loaded","loaded",-1246482293));var this$__$1 = this;return React.DOM.div({"className": "post", "id": self__.id},cljs.core.apply.call(null,om.dom.div,{"className": ("blog-photo")},React.DOM.div({"className": ("loader "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not.call(null,loaded))?"on":"off"))), "id": "blah"}),cljs.core.map.call(null,((function (this$__$1,map__24325,map__24325__$1,loaded,map__24320,map__24320__$1,id,photos,caption){
return (function (photo){return React.DOM.img({"onLoad": ((function (this$__$1,map__24325,map__24325__$1,loaded,map__24320,map__24320__$1,id,photos,caption){
return (function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true);
});})(this$__$1,map__24325,map__24325__$1,loaded,map__24320,map__24320__$1,id,photos,caption))
, "className": ("blog-photo-img"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(loaded)?" loaded":null))), "src": photo});
});})(this$__$1,map__24325,map__24325__$1,loaded,map__24320,map__24320__$1,id,photos,caption))
,self__.photos)),om.core.build.call(null,photosure.blog.text_view,self__.caption));
});})(map__24320,map__24320__$1,id,photos,caption))
;
photosure.blog.t24321.prototype.om$core$IWillReceiveProps$ = true;
photosure.blog.t24321.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = ((function (map__24320,map__24320__$1,id,photos,caption){
return (function (this$,next_props){var self__ = this;
var this$__$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),false);
});})(map__24320,map__24320__$1,id,photos,caption))
;
photosure.blog.t24321.prototype.om$core$IInitState$ = true;
photosure.blog.t24321.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__24320,map__24320__$1,id,photos,caption){
return (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),false], null);
});})(map__24320,map__24320__$1,id,photos,caption))
;
photosure.blog.t24321.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__24320,map__24320__$1,id,photos,caption){
return (function (_24323){var self__ = this;
var _24323__$1 = this;return self__.meta24322;
});})(map__24320,map__24320__$1,id,photos,caption))
;
photosure.blog.t24321.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__24320,map__24320__$1,id,photos,caption){
return (function (_24323,meta24322__$1){var self__ = this;
var _24323__$1 = this;return (new photosure.blog.t24321(self__.caption,self__.photos,self__.id,self__.map__24320,self__.owner,self__.p__24313,self__.photo_post_view,meta24322__$1));
});})(map__24320,map__24320__$1,id,photos,caption))
;
photosure.blog.__GT_t24321 = ((function (map__24320,map__24320__$1,id,photos,caption){
return (function __GT_t24321(caption__$1,photos__$1,id__$1,map__24320__$2,owner__$1,p__24313__$1,photo_post_view__$1,meta24322){return (new photosure.blog.t24321(caption__$1,photos__$1,id__$1,map__24320__$2,owner__$1,p__24313__$1,photo_post_view__$1,meta24322));
});})(map__24320,map__24320__$1,id,photos,caption))
;
}
return (new photosure.blog.t24321(caption,photos,id,map__24320__$1,owner,p__24313,photo_post_view,null));
});
photosure.blog.post_view = (function post_view(p__24326,owner){var map__24331 = p__24326;var map__24331__$1 = ((cljs.core.seq_QMARK_.call(null,map__24331))?cljs.core.apply.call(null,cljs.core.hash_map,map__24331):map__24331);var post = map__24331__$1;var type = cljs.core.get.call(null,map__24331__$1,new cljs.core.Keyword(null,"type","type",1174270348));if(typeof photosure.blog.t24332 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t24332 = (function (type,post,map__24331,owner,p__24326,post_view,meta24333){
this.type = type;
this.post = post;
this.map__24331 = map__24331;
this.owner = owner;
this.p__24326 = p__24326;
this.post_view = post_view;
this.meta24333 = meta24333;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t24332.cljs$lang$type = true;
photosure.blog.t24332.cljs$lang$ctorStr = "photosure.blog/t24332";
photosure.blog.t24332.cljs$lang$ctorPrWriter = ((function (map__24331,map__24331__$1,post,type){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t24332");
});})(map__24331,map__24331__$1,post,type))
;
photosure.blog.t24332.prototype.om$core$IRender$ = true;
photosure.blog.t24332.prototype.om$core$IRender$render$arity$1 = ((function (map__24331,map__24331__$1,post,type){
return (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core._EQ_.call(null,self__.type,"photo"))
{return om.core.build.call(null,photosure.blog.photo_post_view,self__.post);
} else
{return om.core.build.call(null,photosure.blog.text_post_view,self__.post);
}
});})(map__24331,map__24331__$1,post,type))
;
photosure.blog.t24332.prototype.om$core$IDidUpdate$ = true;
photosure.blog.t24332.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__24331,map__24331__$1,post,type){
return (function (this$,prev_props,prev_state){var self__ = this;
var this$__$1 = this;return cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"load-chan","load-chan",342107614)),"done!");
});})(map__24331,map__24331__$1,post,type))
;
photosure.blog.t24332.prototype.om$core$IDidMount$ = true;
photosure.blog.t24332.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__24331,map__24331__$1,post,type){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"load-chan","load-chan",342107614)),"done!");
});})(map__24331,map__24331__$1,post,type))
;
photosure.blog.t24332.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__24331,map__24331__$1,post,type){
return (function (_24334){var self__ = this;
var _24334__$1 = this;return self__.meta24333;
});})(map__24331,map__24331__$1,post,type))
;
photosure.blog.t24332.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__24331,map__24331__$1,post,type){
return (function (_24334,meta24333__$1){var self__ = this;
var _24334__$1 = this;return (new photosure.blog.t24332(self__.type,self__.post,self__.map__24331,self__.owner,self__.p__24326,self__.post_view,meta24333__$1));
});})(map__24331,map__24331__$1,post,type))
;
photosure.blog.__GT_t24332 = ((function (map__24331,map__24331__$1,post,type){
return (function __GT_t24332(type__$1,post__$1,map__24331__$2,owner__$1,p__24326__$1,post_view__$1,meta24333){return (new photosure.blog.t24332(type__$1,post__$1,map__24331__$2,owner__$1,p__24326__$1,post_view__$1,meta24333));
});})(map__24331,map__24331__$1,post,type))
;
}
return (new photosure.blog.t24332(type,post,map__24331__$1,owner,p__24326,post_view,null));
});
photosure.blog.posts_view = (function posts_view(posts,owner){if(typeof photosure.blog.t24376 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t24376 = (function (owner,posts,posts_view,meta24377){
this.owner = owner;
this.posts = posts;
this.posts_view = posts_view;
this.meta24377 = meta24377;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t24376.cljs$lang$type = true;
photosure.blog.t24376.cljs$lang$ctorStr = "photosure.blog/t24376";
photosure.blog.t24376.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t24376");
});
photosure.blog.t24376.prototype.om$core$IRenderState$ = true;
photosure.blog.t24376.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__24379){var self__ = this;
var map__24380 = p__24379;var map__24380__$1 = ((cljs.core.seq_QMARK_.call(null,map__24380))?cljs.core.apply.call(null,cljs.core.hash_map,map__24380):map__24380);var load_chan = cljs.core.get.call(null,map__24380__$1,new cljs.core.Keyword(null,"load-chan","load-chan",342107614));var iter = cljs.core.get.call(null,map__24380__$1,new cljs.core.Keyword(null,"iter","iter",1308240283));var this$__$1 = this;return cljs.core.apply.call(null,om.dom.div,{"id": "post-list"},om.core.build_all.call(null,photosure.blog.post_view,cljs.core.take.call(null,iter,self__.posts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"load-chan","load-chan",342107614),load_chan], null)], null)));
});
photosure.blog.t24376.prototype.om$core$IWillMount$ = true;
photosure.blog.t24376.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var load_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"load-chan","load-chan",342107614));var loaded_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448));var c__6367__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto__,load_chan,loaded_chan,___$1){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto__,load_chan,loaded_chan,___$1){
return (function (state_24398){var state_val_24399 = (state_24398[(1)]);if((state_val_24399 === (7)))
{var inst_24393 = (state_24398[(2)]);var state_24398__$1 = (function (){var statearr_24400 = state_24398;(statearr_24400[(7)] = inst_24393);
return statearr_24400;
})();var statearr_24401_24416 = state_24398__$1;(statearr_24401_24416[(2)] = null);
(statearr_24401_24416[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24399 === (6)))
{var state_24398__$1 = state_24398;var statearr_24402_24417 = state_24398__$1;(statearr_24402_24417[(2)] = null);
(statearr_24402_24417[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24399 === (5)))
{var inst_24389 = cljs.core.async.put_BANG_.call(null,loaded_chan,"all done!");var inst_24390 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"load-count","load-count",128885706),(0));var state_24398__$1 = (function (){var statearr_24403 = state_24398;(statearr_24403[(8)] = inst_24389);
return statearr_24403;
})();var statearr_24404_24418 = state_24398__$1;(statearr_24404_24418[(2)] = inst_24390);
(statearr_24404_24418[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24399 === (4)))
{var inst_24383 = (state_24398[(2)]);var inst_24384 = (function (){var load = inst_24383;return ((function (load,inst_24383,state_val_24399,c__6367__auto__,load_chan,loaded_chan,___$1){
return (function (p1__24335_SHARP_){return (p1__24335_SHARP_ + (1));
});
;})(load,inst_24383,state_val_24399,c__6367__auto__,load_chan,loaded_chan,___$1))
})();var inst_24385 = om.core.update_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"load-count","load-count",128885706),inst_24384);var inst_24386 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"load-count","load-count",128885706));var inst_24387 = cljs.core._EQ_.call(null,inst_24386,(20));var state_24398__$1 = (function (){var statearr_24405 = state_24398;(statearr_24405[(9)] = inst_24385);
return statearr_24405;
})();if(inst_24387)
{var statearr_24406_24419 = state_24398__$1;(statearr_24406_24419[(1)] = (5));
} else
{var statearr_24407_24420 = state_24398__$1;(statearr_24407_24420[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24399 === (3)))
{var inst_24396 = (state_24398[(2)]);var state_24398__$1 = state_24398;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24398__$1,inst_24396);
} else
{if((state_val_24399 === (2)))
{var state_24398__$1 = state_24398;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24398__$1,(4),load_chan);
} else
{if((state_val_24399 === (1)))
{var state_24398__$1 = state_24398;var statearr_24408_24421 = state_24398__$1;(statearr_24408_24421[(2)] = null);
(statearr_24408_24421[(1)] = (2));
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
var state_machine__6353__auto____0 = (function (){var statearr_24412 = [null,null,null,null,null,null,null,null,null,null];(statearr_24412[(0)] = state_machine__6353__auto__);
(statearr_24412[(1)] = (1));
return statearr_24412;
});
var state_machine__6353__auto____1 = (function (state_24398){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_24398);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e24413){if((e24413 instanceof Object))
{var ex__6356__auto__ = e24413;var statearr_24414_24422 = state_24398;(statearr_24414_24422[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24398);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24413;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24423 = state_24398;
state_24398 = G__24423;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_24398){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_24398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto__,load_chan,loaded_chan,___$1))
})();var state__6369__auto__ = (function (){var statearr_24415 = f__6368__auto__.call(null);(statearr_24415[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto__);
return statearr_24415;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto__,load_chan,loaded_chan,___$1))
);
return c__6367__auto__;
});
photosure.blog.t24376.prototype.om$core$IInitState$ = true;
photosure.blog.t24376.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"load-chan","load-chan",342107614),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"load-count","load-count",128885706),(0),new cljs.core.Keyword(null,"iter","iter",1308240283),(20)], null);
});
photosure.blog.t24376.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24378){var self__ = this;
var _24378__$1 = this;return self__.meta24377;
});
photosure.blog.t24376.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24378,meta24377__$1){var self__ = this;
var _24378__$1 = this;return (new photosure.blog.t24376(self__.owner,self__.posts,self__.posts_view,meta24377__$1));
});
photosure.blog.__GT_t24376 = (function __GT_t24376(owner__$1,posts__$1,posts_view__$1,meta24377){return (new photosure.blog.t24376(owner__$1,posts__$1,posts_view__$1,meta24377));
});
}
return (new photosure.blog.t24376(owner,posts,posts_view,null));
});
photosure.blog.set_posts = (function set_posts(app,page){return photosure.util.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),("api/posts/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(page)),new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),(function (_){return om.core.update_BANG_.call(null,app,new cljs.core.Keyword(null,"posts","posts",760043164),_);
})], null));
});
photosure.blog.page_top_btn = (function page_top_btn(page,owner){if(typeof photosure.blog.t24429 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t24429 = (function (owner,page,page_top_btn,meta24430){
this.owner = owner;
this.page = page;
this.page_top_btn = page_top_btn;
this.meta24430 = meta24430;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t24429.cljs$lang$type = true;
photosure.blog.t24429.cljs$lang$ctorStr = "photosure.blog/t24429";
photosure.blog.t24429.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t24429");
});
photosure.blog.t24429.prototype.om$core$IRenderState$ = true;
photosure.blog.t24429.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__24432){var self__ = this;
var map__24433 = p__24432;var map__24433__$1 = ((cljs.core.seq_QMARK_.call(null,map__24433))?cljs.core.apply.call(null,cljs.core.hash_map,map__24433):map__24433);var nav_chan = cljs.core.get.call(null,map__24433__$1,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980));var className = cljs.core.get.call(null,map__24433__$1,new cljs.core.Keyword(null,"className","className",-1983287057));var text = cljs.core.get.call(null,map__24433__$1,new cljs.core.Keyword(null,"text","text",-1790561697));var this$__$1 = this;return React.DOM.div({"onClick": ((function (this$__$1,map__24433,map__24433__$1,nav_chan,className,text){
return (function (_){return cljs.core.async.put_BANG_.call(null,nav_chan,"top");
});})(this$__$1,map__24433,map__24433__$1,nav_chan,className,text))
, "onMouseLeave": ((function (this$__$1,map__24433,map__24433__$1,nav_chan,className,text){
return (function (_){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"text","text",-1790561697),(self__.page + (1)));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"className","className",-1983287057),"page");
return setTimeout(((function (this$__$1,map__24433,map__24433__$1,nav_chan,className,text){
return (function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"className","className",-1983287057),"page fadein");
});})(this$__$1,map__24433,map__24433__$1,nav_chan,className,text))
,(50));
});})(this$__$1,map__24433,map__24433__$1,nav_chan,className,text))
, "onMouseEnter": ((function (this$__$1,map__24433,map__24433__$1,nav_chan,className,text){
return (function (_){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"text","text",-1790561697),goog.string.unescapeEntities("&#xe600"));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"className","className",-1983287057),"icon");
return setTimeout(((function (this$__$1,map__24433,map__24433__$1,nav_chan,className,text){
return (function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"className","className",-1983287057),"icon fadein");
});})(this$__$1,map__24433,map__24433__$1,nav_chan,className,text))
,(50));
});})(this$__$1,map__24433,map__24433__$1,nav_chan,className,text))
, "className": "top"},React.DOM.p({"className": className, "id": "change"},text));
});
photosure.blog.t24429.prototype.om$core$IInitState$ = true;
photosure.blog.t24429.prototype.om$core$IInitState$init_state$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),(self__.page + (1)),new cljs.core.Keyword(null,"className","className",-1983287057),"page fadein"], null);
});
photosure.blog.t24429.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24431){var self__ = this;
var _24431__$1 = this;return self__.meta24430;
});
photosure.blog.t24429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24431,meta24430__$1){var self__ = this;
var _24431__$1 = this;return (new photosure.blog.t24429(self__.owner,self__.page,self__.page_top_btn,meta24430__$1));
});
photosure.blog.__GT_t24429 = (function __GT_t24429(owner__$1,page__$1,page_top_btn__$1,meta24430){return (new photosure.blog.t24429(owner__$1,page__$1,page_top_btn__$1,meta24430));
});
}
return (new photosure.blog.t24429(owner,page,page_top_btn,null));
});
photosure.blog.posts_nav = (function posts_nav(app,owner){if(typeof photosure.blog.t24439 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t24439 = (function (owner,app,posts_nav,meta24440){
this.owner = owner;
this.app = app;
this.posts_nav = posts_nav;
this.meta24440 = meta24440;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t24439.cljs$lang$type = true;
photosure.blog.t24439.cljs$lang$ctorStr = "photosure.blog/t24439";
photosure.blog.t24439.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t24439");
});
photosure.blog.t24439.prototype.om$core$IRenderState$ = true;
photosure.blog.t24439.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__24442){var self__ = this;
var map__24443 = p__24442;var map__24443__$1 = ((cljs.core.seq_QMARK_.call(null,map__24443))?cljs.core.apply.call(null,cljs.core.hash_map,map__24443):map__24443);var nav_chan = cljs.core.get.call(null,map__24443__$1,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980));var ___$1 = this;return React.DOM.div({"className": "posts-nav"},React.DOM.div({"onClick": ((function (___$1,map__24443,map__24443__$1,nav_chan){
return (function (___$2){return cljs.core.async.put_BANG_.call(null,nav_chan,"prev");
});})(___$1,map__24443,map__24443__$1,nav_chan))
, "className": "prev"},React.DOM.p({"className": "icon"},goog.string.unescapeEntities("&#xe602"))),om.core.build.call(null,photosure.blog.page_top_btn,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980),nav_chan], null)], null)),React.DOM.div({"onClick": ((function (___$1,map__24443,map__24443__$1,nav_chan){
return (function (___$2){return cljs.core.async.put_BANG_.call(null,nav_chan,"next");
});})(___$1,map__24443,map__24443__$1,nav_chan))
, "className": "next"},React.DOM.p({"className": "icon"},goog.string.unescapeEntities("&#xe601"))));
});
photosure.blog.t24439.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24441){var self__ = this;
var _24441__$1 = this;return self__.meta24440;
});
photosure.blog.t24439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24441,meta24440__$1){var self__ = this;
var _24441__$1 = this;return (new photosure.blog.t24439(self__.owner,self__.app,self__.posts_nav,meta24440__$1));
});
photosure.blog.__GT_t24439 = (function __GT_t24439(owner__$1,app__$1,posts_nav__$1,meta24440){return (new photosure.blog.t24439(owner__$1,app__$1,posts_nav__$1,meta24440));
});
}
return (new photosure.blog.t24439(owner,app,posts_nav,null));
});
photosure.blog.blog = (function blog(app,owner){if(typeof photosure.blog.t24533 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t24533 = (function (owner,app,blog,meta24534){
this.owner = owner;
this.app = app;
this.blog = blog;
this.meta24534 = meta24534;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t24533.cljs$lang$type = true;
photosure.blog.t24533.cljs$lang$ctorStr = "photosure.blog/t24533";
photosure.blog.t24533.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t24533");
});
photosure.blog.t24533.prototype.om$core$IRenderState$ = true;
photosure.blog.t24533.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__24536){var self__ = this;
var map__24537 = p__24536;var map__24537__$1 = ((cljs.core.seq_QMARK_.call(null,map__24537))?cljs.core.apply.call(null,cljs.core.hash_map,map__24537):map__24537);var scroll_top = cljs.core.get.call(null,map__24537__$1,new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100));var nav_chan = cljs.core.get.call(null,map__24537__$1,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980));var loaded_chan = cljs.core.get.call(null,map__24537__$1,new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448));var loaded = cljs.core.get.call(null,map__24537__$1,new cljs.core.Keyword(null,"loaded","loaded",-1246482293));var this$__$1 = this;return React.DOM.div({"id": "blog-gallery-container"},om.core.build.call(null,photosure.scrolldiv.scroll_div,self__.app,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"blog-gallery",new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),(0)], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),("blog-gallery"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(loaded)?" loaded":null))),new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),scroll_top], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.core.build.call(null,photosure.blog.posts_view,new cljs.core.Keyword(null,"posts","posts",760043164).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448),loaded_chan], null)], null)),om.core.build.call(null,photosure.blog.posts_nav,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980),nav_chan], null)], null))], null)], null)], null)));
});
photosure.blog.t24533.prototype.om$core$IWillMount$ = true;
photosure.blog.t24533.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;photosure.blog.set_posts.call(null,self__.app,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.app));
var loaded_chan_24620 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448));var c__6367__auto___24621 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto___24621,loaded_chan_24620,___$1){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto___24621,loaded_chan_24620,___$1){
return (function (state_24546){var state_val_24547 = (state_24546[(1)]);if((state_val_24547 === (4)))
{var inst_24540 = (state_24546[(2)]);var inst_24541 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true);var state_24546__$1 = (function (){var statearr_24548 = state_24546;(statearr_24548[(7)] = inst_24541);
(statearr_24548[(8)] = inst_24540);
return statearr_24548;
})();var statearr_24549_24622 = state_24546__$1;(statearr_24549_24622[(2)] = null);
(statearr_24549_24622[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24547 === (3)))
{var inst_24544 = (state_24546[(2)]);var state_24546__$1 = state_24546;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24546__$1,inst_24544);
} else
{if((state_val_24547 === (2)))
{var state_24546__$1 = state_24546;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24546__$1,(4),loaded_chan_24620);
} else
{if((state_val_24547 === (1)))
{var state_24546__$1 = state_24546;var statearr_24550_24623 = state_24546__$1;(statearr_24550_24623[(2)] = null);
(statearr_24550_24623[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6367__auto___24621,loaded_chan_24620,___$1))
;return ((function (switch__6352__auto__,c__6367__auto___24621,loaded_chan_24620,___$1){
return (function() {
var state_machine__6353__auto__ = null;
var state_machine__6353__auto____0 = (function (){var statearr_24554 = [null,null,null,null,null,null,null,null,null];(statearr_24554[(0)] = state_machine__6353__auto__);
(statearr_24554[(1)] = (1));
return statearr_24554;
});
var state_machine__6353__auto____1 = (function (state_24546){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_24546);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e24555){if((e24555 instanceof Object))
{var ex__6356__auto__ = e24555;var statearr_24556_24624 = state_24546;(statearr_24556_24624[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24546);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24555;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24625 = state_24546;
state_24546 = G__24625;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_24546){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_24546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto___24621,loaded_chan_24620,___$1))
})();var state__6369__auto__ = (function (){var statearr_24557 = f__6368__auto__.call(null);(statearr_24557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto___24621);
return statearr_24557;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto___24621,loaded_chan_24620,___$1))
);
var nav_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980));var c__6367__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto__,nav_chan,___$1){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto__,nav_chan,___$1){
return (function (state_24593){var state_val_24594 = (state_24593[(1)]);if((state_val_24594 === (7)))
{var inst_24588 = (state_24593[(2)]);var state_24593__$1 = (function (){var statearr_24595 = state_24593;(statearr_24595[(7)] = inst_24588);
return statearr_24595;
})();var statearr_24596_24626 = state_24593__$1;(statearr_24596_24626[(2)] = null);
(statearr_24596_24626[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24594 === (1)))
{var state_24593__$1 = state_24593;var statearr_24597_24627 = state_24593__$1;(statearr_24597_24627[(2)] = null);
(statearr_24597_24627[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24594 === (4)))
{var inst_24560 = (state_24593[(8)]);var inst_24560__$1 = (state_24593[(2)]);var inst_24561 = cljs.core._EQ_.call(null,inst_24560__$1,"prev");var state_24593__$1 = (function (){var statearr_24598 = state_24593;(statearr_24598[(8)] = inst_24560__$1);
return statearr_24598;
})();if(inst_24561)
{var statearr_24599_24628 = state_24593__$1;(statearr_24599_24628[(1)] = (5));
} else
{var statearr_24600_24629 = state_24593__$1;(statearr_24600_24629[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24594 === (13)))
{var inst_24584 = (state_24593[(2)]);var state_24593__$1 = state_24593;var statearr_24601_24630 = state_24593__$1;(statearr_24601_24630[(2)] = inst_24584);
(statearr_24601_24630[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24594 === (6)))
{var inst_24560 = (state_24593[(8)]);var inst_24570 = cljs.core._EQ_.call(null,inst_24560,"next");var state_24593__$1 = state_24593;if(inst_24570)
{var statearr_24602_24631 = state_24593__$1;(statearr_24602_24631[(1)] = (8));
} else
{var statearr_24603_24632 = state_24593__$1;(statearr_24603_24632[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24594 === (3)))
{var inst_24591 = (state_24593[(2)]);var state_24593__$1 = state_24593;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24593__$1,inst_24591);
} else
{if((state_val_24594 === (12)))
{var state_24593__$1 = state_24593;var statearr_24604_24633 = state_24593__$1;(statearr_24604_24633[(2)] = null);
(statearr_24604_24633[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24594 === (2)))
{var state_24593__$1 = state_24593;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24593__$1,(4),nav_chan);
} else
{if((state_val_24594 === (11)))
{var inst_24581 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),(0));var state_24593__$1 = state_24593;var statearr_24605_24634 = state_24593__$1;(statearr_24605_24634[(2)] = inst_24581);
(statearr_24605_24634[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24594 === (9)))
{var inst_24560 = (state_24593[(8)]);var inst_24579 = cljs.core._EQ_.call(null,inst_24560,"top");var state_24593__$1 = state_24593;if(inst_24579)
{var statearr_24606_24635 = state_24593__$1;(statearr_24606_24635[(1)] = (11));
} else
{var statearr_24607_24636 = state_24593__$1;(statearr_24607_24636[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24594 === (5)))
{var inst_24560 = (state_24593[(8)]);var inst_24563 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),false);var inst_24564 = (function (){var cmd = inst_24560;return ((function (cmd,inst_24560,inst_24563,state_val_24594,c__6367__auto__,nav_chan,___$1){
return (function (p1__24444_SHARP_){return (p1__24444_SHARP_ - (1));
});
;})(cmd,inst_24560,inst_24563,state_val_24594,c__6367__auto__,nav_chan,___$1))
})();var inst_24565 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"page","page",849072397),inst_24564);var inst_24566 = cljs.core.deref.call(null,self__.app);var inst_24567 = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(inst_24566);var inst_24568 = photosure.blog.set_posts.call(null,self__.app,inst_24567);var state_24593__$1 = (function (){var statearr_24608 = state_24593;(statearr_24608[(9)] = inst_24565);
(statearr_24608[(10)] = inst_24563);
return statearr_24608;
})();var statearr_24609_24637 = state_24593__$1;(statearr_24609_24637[(2)] = inst_24568);
(statearr_24609_24637[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24594 === (10)))
{var inst_24586 = (state_24593[(2)]);var state_24593__$1 = state_24593;var statearr_24610_24638 = state_24593__$1;(statearr_24610_24638[(2)] = inst_24586);
(statearr_24610_24638[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24594 === (8)))
{var inst_24560 = (state_24593[(8)]);var inst_24572 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),false);var inst_24573 = (function (){var cmd = inst_24560;return ((function (cmd,inst_24560,inst_24572,state_val_24594,c__6367__auto__,nav_chan,___$1){
return (function (p1__24445_SHARP_){return (p1__24445_SHARP_ + (1));
});
;})(cmd,inst_24560,inst_24572,state_val_24594,c__6367__auto__,nav_chan,___$1))
})();var inst_24574 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"page","page",849072397),inst_24573);var inst_24575 = cljs.core.deref.call(null,self__.app);var inst_24576 = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(inst_24575);var inst_24577 = photosure.blog.set_posts.call(null,self__.app,inst_24576);var state_24593__$1 = (function (){var statearr_24611 = state_24593;(statearr_24611[(11)] = inst_24572);
(statearr_24611[(12)] = inst_24574);
return statearr_24611;
})();var statearr_24612_24639 = state_24593__$1;(statearr_24612_24639[(2)] = inst_24577);
(statearr_24612_24639[(1)] = (10));
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
var state_machine__6353__auto____0 = (function (){var statearr_24616 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24616[(0)] = state_machine__6353__auto__);
(statearr_24616[(1)] = (1));
return statearr_24616;
});
var state_machine__6353__auto____1 = (function (state_24593){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_24593);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e24617){if((e24617 instanceof Object))
{var ex__6356__auto__ = e24617;var statearr_24618_24640 = state_24593;(statearr_24618_24640[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24593);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24617;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24641 = state_24593;
state_24593 = G__24641;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_24593){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_24593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto__,nav_chan,___$1))
})();var state__6369__auto__ = (function (){var statearr_24619 = f__6368__auto__.call(null);(statearr_24619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto__);
return statearr_24619;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto__,nav_chan,___$1))
);
return c__6367__auto__;
});
photosure.blog.t24533.prototype.om$core$IInitState$ = true;
photosure.blog.t24533.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),false,new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),(0)], null);
});
photosure.blog.t24533.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24535){var self__ = this;
var _24535__$1 = this;return self__.meta24534;
});
photosure.blog.t24533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24535,meta24534__$1){var self__ = this;
var _24535__$1 = this;return (new photosure.blog.t24533(self__.owner,self__.app,self__.blog,meta24534__$1));
});
photosure.blog.__GT_t24533 = (function __GT_t24533(owner__$1,app__$1,blog__$1,meta24534){return (new photosure.blog.t24533(owner__$1,app__$1,blog__$1,meta24534));
});
}
return (new photosure.blog.t24533(owner,app,blog,null));
});
photosure.blog.render = (function render(){return om.core.root.call(null,photosure.blog.blog,photosure.blog.app_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("dynamic-content")], null));
});

//# sourceMappingURL=blog.js.map