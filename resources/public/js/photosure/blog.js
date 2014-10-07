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
photosure.blog.text_view = (function text_view(caption,owner){if(typeof photosure.blog.t11657 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t11657 = (function (owner,caption,text_view,meta11658){
this.owner = owner;
this.caption = caption;
this.text_view = text_view;
this.meta11658 = meta11658;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t11657.cljs$lang$type = true;
photosure.blog.t11657.cljs$lang$ctorStr = "photosure.blog/t11657";
photosure.blog.t11657.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t11657");
});
photosure.blog.t11657.prototype.om$core$IRender$ = true;
photosure.blog.t11657.prototype.om$core$IRender$render$arity$1 = (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return React.DOM.div({"dangerouslySetInnerHTML": {"__html": self__.caption}, "className": "caption"},null);
});
photosure.blog.t11657.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11659){var self__ = this;
var _11659__$1 = this;return self__.meta11658;
});
photosure.blog.t11657.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11659,meta11658__$1){var self__ = this;
var _11659__$1 = this;return (new photosure.blog.t11657(self__.owner,self__.caption,self__.text_view,meta11658__$1));
});
photosure.blog.__GT_t11657 = (function __GT_t11657(owner__$1,caption__$1,text_view__$1,meta11658){return (new photosure.blog.t11657(owner__$1,caption__$1,text_view__$1,meta11658));
});
}
return (new photosure.blog.t11657(owner,caption,text_view,null));
});
photosure.blog.answer_post_view = (function answer_post_view(p__11660){var map__11665 = p__11660;var map__11665__$1 = ((cljs.core.seq_QMARK_.call(null,map__11665))?cljs.core.apply.call(null,cljs.core.hash_map,map__11665):map__11665);var id = cljs.core.get.call(null,map__11665__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var asking_name = cljs.core.get.call(null,map__11665__$1,new cljs.core.Keyword(null,"asking_name","asking_name",728401374));var asking_url = cljs.core.get.call(null,map__11665__$1,new cljs.core.Keyword(null,"asking_url","asking_url",-384387495));var question = cljs.core.get.call(null,map__11665__$1,new cljs.core.Keyword(null,"question","question",-1411720117));var answer = cljs.core.get.call(null,map__11665__$1,new cljs.core.Keyword(null,"answer","answer",-742633163));if(typeof photosure.blog.t11666 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t11666 = (function (answer,question,asking_url,asking_name,id,map__11665,p__11660,answer_post_view,meta11667){
this.answer = answer;
this.question = question;
this.asking_url = asking_url;
this.asking_name = asking_name;
this.id = id;
this.map__11665 = map__11665;
this.p__11660 = p__11660;
this.answer_post_view = answer_post_view;
this.meta11667 = meta11667;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t11666.cljs$lang$type = true;
photosure.blog.t11666.cljs$lang$ctorStr = "photosure.blog/t11666";
photosure.blog.t11666.cljs$lang$ctorPrWriter = ((function (map__11665,map__11665__$1,id,asking_name,asking_url,question,answer){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t11666");
});})(map__11665,map__11665__$1,id,asking_name,asking_url,question,answer))
;
photosure.blog.t11666.prototype.om$core$IRender$ = true;
photosure.blog.t11666.prototype.om$core$IRender$render$arity$1 = ((function (map__11665,map__11665__$1,id,asking_name,asking_url,question,answer){
return (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return React.DOM.div({"className": "post", "id": self__.id},React.DOM.div(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.asking_name)+" @ "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.asking_url)+": "),React.DOM.div({})));
});})(map__11665,map__11665__$1,id,asking_name,asking_url,question,answer))
;
photosure.blog.t11666.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__11665,map__11665__$1,id,asking_name,asking_url,question,answer){
return (function (_11668){var self__ = this;
var _11668__$1 = this;return self__.meta11667;
});})(map__11665,map__11665__$1,id,asking_name,asking_url,question,answer))
;
photosure.blog.t11666.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__11665,map__11665__$1,id,asking_name,asking_url,question,answer){
return (function (_11668,meta11667__$1){var self__ = this;
var _11668__$1 = this;return (new photosure.blog.t11666(self__.answer,self__.question,self__.asking_url,self__.asking_name,self__.id,self__.map__11665,self__.p__11660,self__.answer_post_view,meta11667__$1));
});})(map__11665,map__11665__$1,id,asking_name,asking_url,question,answer))
;
photosure.blog.__GT_t11666 = ((function (map__11665,map__11665__$1,id,asking_name,asking_url,question,answer){
return (function __GT_t11666(answer__$1,question__$1,asking_url__$1,asking_name__$1,id__$1,map__11665__$2,p__11660__$1,answer_post_view__$1,meta11667){return (new photosure.blog.t11666(answer__$1,question__$1,asking_url__$1,asking_name__$1,id__$1,map__11665__$2,p__11660__$1,answer_post_view__$1,meta11667));
});})(map__11665,map__11665__$1,id,asking_name,asking_url,question,answer))
;
}
return (new photosure.blog.t11666(answer,question,asking_url,asking_name,id,map__11665__$1,p__11660,answer_post_view,null));
});
photosure.blog.text_post_view = (function text_post_view(p__11669,owner){var map__11674 = p__11669;var map__11674__$1 = ((cljs.core.seq_QMARK_.call(null,map__11674))?cljs.core.apply.call(null,cljs.core.hash_map,map__11674):map__11674);var id = cljs.core.get.call(null,map__11674__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var title = cljs.core.get.call(null,map__11674__$1,new cljs.core.Keyword(null,"title","title",636505583));var body = cljs.core.get.call(null,map__11674__$1,new cljs.core.Keyword(null,"body","body",-2049205669));if(typeof photosure.blog.t11675 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t11675 = (function (body,title,id,map__11674,owner,p__11669,text_post_view,meta11676){
this.body = body;
this.title = title;
this.id = id;
this.map__11674 = map__11674;
this.owner = owner;
this.p__11669 = p__11669;
this.text_post_view = text_post_view;
this.meta11676 = meta11676;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t11675.cljs$lang$type = true;
photosure.blog.t11675.cljs$lang$ctorStr = "photosure.blog/t11675";
photosure.blog.t11675.cljs$lang$ctorPrWriter = ((function (map__11674,map__11674__$1,id,title,body){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t11675");
});})(map__11674,map__11674__$1,id,title,body))
;
photosure.blog.t11675.prototype.om$core$IRender$ = true;
photosure.blog.t11675.prototype.om$core$IRender$render$arity$1 = ((function (map__11674,map__11674__$1,id,title,body){
return (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return React.DOM.div({"className": "post", "id": self__.id},React.DOM.h2({"className": "blog-title"},self__.title),om.core.build.call(null,photosure.blog.text_view,self__.body));
});})(map__11674,map__11674__$1,id,title,body))
;
photosure.blog.t11675.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__11674,map__11674__$1,id,title,body){
return (function (_11677){var self__ = this;
var _11677__$1 = this;return self__.meta11676;
});})(map__11674,map__11674__$1,id,title,body))
;
photosure.blog.t11675.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__11674,map__11674__$1,id,title,body){
return (function (_11677,meta11676__$1){var self__ = this;
var _11677__$1 = this;return (new photosure.blog.t11675(self__.body,self__.title,self__.id,self__.map__11674,self__.owner,self__.p__11669,self__.text_post_view,meta11676__$1));
});})(map__11674,map__11674__$1,id,title,body))
;
photosure.blog.__GT_t11675 = ((function (map__11674,map__11674__$1,id,title,body){
return (function __GT_t11675(body__$1,title__$1,id__$1,map__11674__$2,owner__$1,p__11669__$1,text_post_view__$1,meta11676){return (new photosure.blog.t11675(body__$1,title__$1,id__$1,map__11674__$2,owner__$1,p__11669__$1,text_post_view__$1,meta11676));
});})(map__11674,map__11674__$1,id,title,body))
;
}
return (new photosure.blog.t11675(body,title,id,map__11674__$1,owner,p__11669,text_post_view,null));
});
photosure.blog.photo_post_view = (function photo_post_view(p__11678,owner){var map__11685 = p__11678;var map__11685__$1 = ((cljs.core.seq_QMARK_.call(null,map__11685))?cljs.core.apply.call(null,cljs.core.hash_map,map__11685):map__11685);var id = cljs.core.get.call(null,map__11685__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var photos = cljs.core.get.call(null,map__11685__$1,new cljs.core.Keyword(null,"photos","photos",11691538));var caption = cljs.core.get.call(null,map__11685__$1,new cljs.core.Keyword(null,"caption","caption",-855383902));if(typeof photosure.blog.t11686 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t11686 = (function (caption,photos,id,map__11685,owner,p__11678,photo_post_view,meta11687){
this.caption = caption;
this.photos = photos;
this.id = id;
this.map__11685 = map__11685;
this.owner = owner;
this.p__11678 = p__11678;
this.photo_post_view = photo_post_view;
this.meta11687 = meta11687;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t11686.cljs$lang$type = true;
photosure.blog.t11686.cljs$lang$ctorStr = "photosure.blog/t11686";
photosure.blog.t11686.cljs$lang$ctorPrWriter = ((function (map__11685,map__11685__$1,id,photos,caption){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t11686");
});})(map__11685,map__11685__$1,id,photos,caption))
;
photosure.blog.t11686.prototype.om$core$IRenderState$ = true;
photosure.blog.t11686.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__11685,map__11685__$1,id,photos,caption){
return (function (this$,p__11689){var self__ = this;
var map__11690 = p__11689;var map__11690__$1 = ((cljs.core.seq_QMARK_.call(null,map__11690))?cljs.core.apply.call(null,cljs.core.hash_map,map__11690):map__11690);var loaded = cljs.core.get.call(null,map__11690__$1,new cljs.core.Keyword(null,"loaded","loaded",-1246482293));var this$__$1 = this;return React.DOM.div({"className": "post", "id": self__.id},cljs.core.apply.call(null,om.dom.div,{"className": ("blog-photo")},React.DOM.div({"className": ("loader "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not.call(null,loaded))?"on":"off"))), "id": "blah"}),cljs.core.map.call(null,((function (this$__$1,map__11690,map__11690__$1,loaded,map__11685,map__11685__$1,id,photos,caption){
return (function (photo){return React.DOM.img({"onLoad": ((function (this$__$1,map__11690,map__11690__$1,loaded,map__11685,map__11685__$1,id,photos,caption){
return (function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true);
});})(this$__$1,map__11690,map__11690__$1,loaded,map__11685,map__11685__$1,id,photos,caption))
, "className": ("blog-photo-img"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(loaded)?" loaded":null))), "src": photo});
});})(this$__$1,map__11690,map__11690__$1,loaded,map__11685,map__11685__$1,id,photos,caption))
,self__.photos)),om.core.build.call(null,photosure.blog.text_view,self__.caption));
});})(map__11685,map__11685__$1,id,photos,caption))
;
photosure.blog.t11686.prototype.om$core$IWillReceiveProps$ = true;
photosure.blog.t11686.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = ((function (map__11685,map__11685__$1,id,photos,caption){
return (function (this$,next_props){var self__ = this;
var this$__$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),false);
});})(map__11685,map__11685__$1,id,photos,caption))
;
photosure.blog.t11686.prototype.om$core$IInitState$ = true;
photosure.blog.t11686.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__11685,map__11685__$1,id,photos,caption){
return (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),false], null);
});})(map__11685,map__11685__$1,id,photos,caption))
;
photosure.blog.t11686.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__11685,map__11685__$1,id,photos,caption){
return (function (_11688){var self__ = this;
var _11688__$1 = this;return self__.meta11687;
});})(map__11685,map__11685__$1,id,photos,caption))
;
photosure.blog.t11686.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__11685,map__11685__$1,id,photos,caption){
return (function (_11688,meta11687__$1){var self__ = this;
var _11688__$1 = this;return (new photosure.blog.t11686(self__.caption,self__.photos,self__.id,self__.map__11685,self__.owner,self__.p__11678,self__.photo_post_view,meta11687__$1));
});})(map__11685,map__11685__$1,id,photos,caption))
;
photosure.blog.__GT_t11686 = ((function (map__11685,map__11685__$1,id,photos,caption){
return (function __GT_t11686(caption__$1,photos__$1,id__$1,map__11685__$2,owner__$1,p__11678__$1,photo_post_view__$1,meta11687){return (new photosure.blog.t11686(caption__$1,photos__$1,id__$1,map__11685__$2,owner__$1,p__11678__$1,photo_post_view__$1,meta11687));
});})(map__11685,map__11685__$1,id,photos,caption))
;
}
return (new photosure.blog.t11686(caption,photos,id,map__11685__$1,owner,p__11678,photo_post_view,null));
});
photosure.blog.post_view = (function post_view(p__11691,owner){var map__11696 = p__11691;var map__11696__$1 = ((cljs.core.seq_QMARK_.call(null,map__11696))?cljs.core.apply.call(null,cljs.core.hash_map,map__11696):map__11696);var post = map__11696__$1;var type = cljs.core.get.call(null,map__11696__$1,new cljs.core.Keyword(null,"type","type",1174270348));if(typeof photosure.blog.t11697 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t11697 = (function (type,post,map__11696,owner,p__11691,post_view,meta11698){
this.type = type;
this.post = post;
this.map__11696 = map__11696;
this.owner = owner;
this.p__11691 = p__11691;
this.post_view = post_view;
this.meta11698 = meta11698;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t11697.cljs$lang$type = true;
photosure.blog.t11697.cljs$lang$ctorStr = "photosure.blog/t11697";
photosure.blog.t11697.cljs$lang$ctorPrWriter = ((function (map__11696,map__11696__$1,post,type){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t11697");
});})(map__11696,map__11696__$1,post,type))
;
photosure.blog.t11697.prototype.om$core$IRender$ = true;
photosure.blog.t11697.prototype.om$core$IRender$render$arity$1 = ((function (map__11696,map__11696__$1,post,type){
return (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core._EQ_.call(null,self__.type,"photo"))
{return om.core.build.call(null,photosure.blog.photo_post_view,self__.post);
} else
{return om.core.build.call(null,photosure.blog.text_post_view,self__.post);
}
});})(map__11696,map__11696__$1,post,type))
;
photosure.blog.t11697.prototype.om$core$IDidUpdate$ = true;
photosure.blog.t11697.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__11696,map__11696__$1,post,type){
return (function (this$,prev_props,prev_state){var self__ = this;
var this$__$1 = this;return cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"load-chan","load-chan",342107614)),"done!");
});})(map__11696,map__11696__$1,post,type))
;
photosure.blog.t11697.prototype.om$core$IDidMount$ = true;
photosure.blog.t11697.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__11696,map__11696__$1,post,type){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"load-chan","load-chan",342107614)),"done!");
});})(map__11696,map__11696__$1,post,type))
;
photosure.blog.t11697.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__11696,map__11696__$1,post,type){
return (function (_11699){var self__ = this;
var _11699__$1 = this;return self__.meta11698;
});})(map__11696,map__11696__$1,post,type))
;
photosure.blog.t11697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__11696,map__11696__$1,post,type){
return (function (_11699,meta11698__$1){var self__ = this;
var _11699__$1 = this;return (new photosure.blog.t11697(self__.type,self__.post,self__.map__11696,self__.owner,self__.p__11691,self__.post_view,meta11698__$1));
});})(map__11696,map__11696__$1,post,type))
;
photosure.blog.__GT_t11697 = ((function (map__11696,map__11696__$1,post,type){
return (function __GT_t11697(type__$1,post__$1,map__11696__$2,owner__$1,p__11691__$1,post_view__$1,meta11698){return (new photosure.blog.t11697(type__$1,post__$1,map__11696__$2,owner__$1,p__11691__$1,post_view__$1,meta11698));
});})(map__11696,map__11696__$1,post,type))
;
}
return (new photosure.blog.t11697(type,post,map__11696__$1,owner,p__11691,post_view,null));
});
photosure.blog.posts_view = (function posts_view(posts,owner){if(typeof photosure.blog.t11741 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t11741 = (function (owner,posts,posts_view,meta11742){
this.owner = owner;
this.posts = posts;
this.posts_view = posts_view;
this.meta11742 = meta11742;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t11741.cljs$lang$type = true;
photosure.blog.t11741.cljs$lang$ctorStr = "photosure.blog/t11741";
photosure.blog.t11741.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t11741");
});
photosure.blog.t11741.prototype.om$core$IRenderState$ = true;
photosure.blog.t11741.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__11744){var self__ = this;
var map__11745 = p__11744;var map__11745__$1 = ((cljs.core.seq_QMARK_.call(null,map__11745))?cljs.core.apply.call(null,cljs.core.hash_map,map__11745):map__11745);var load_chan = cljs.core.get.call(null,map__11745__$1,new cljs.core.Keyword(null,"load-chan","load-chan",342107614));var iter = cljs.core.get.call(null,map__11745__$1,new cljs.core.Keyword(null,"iter","iter",1308240283));var this$__$1 = this;return cljs.core.apply.call(null,om.dom.div,{"id": "post-list"},om.core.build_all.call(null,photosure.blog.post_view,cljs.core.take.call(null,iter,self__.posts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"load-chan","load-chan",342107614),load_chan], null)], null)));
});
photosure.blog.t11741.prototype.om$core$IWillMount$ = true;
photosure.blog.t11741.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var load_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"load-chan","load-chan",342107614));var loaded_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448));var c__6367__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto__,load_chan,loaded_chan,___$1){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto__,load_chan,loaded_chan,___$1){
return (function (state_11763){var state_val_11764 = (state_11763[(1)]);if((state_val_11764 === (7)))
{var inst_11758 = (state_11763[(2)]);var state_11763__$1 = (function (){var statearr_11765 = state_11763;(statearr_11765[(7)] = inst_11758);
return statearr_11765;
})();var statearr_11766_11781 = state_11763__$1;(statearr_11766_11781[(2)] = null);
(statearr_11766_11781[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11764 === (6)))
{var state_11763__$1 = state_11763;var statearr_11767_11782 = state_11763__$1;(statearr_11767_11782[(2)] = null);
(statearr_11767_11782[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11764 === (5)))
{var inst_11754 = cljs.core.async.put_BANG_.call(null,loaded_chan,"all done!");var inst_11755 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"load-count","load-count",128885706),(0));var state_11763__$1 = (function (){var statearr_11768 = state_11763;(statearr_11768[(8)] = inst_11754);
return statearr_11768;
})();var statearr_11769_11783 = state_11763__$1;(statearr_11769_11783[(2)] = inst_11755);
(statearr_11769_11783[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11764 === (4)))
{var inst_11748 = (state_11763[(2)]);var inst_11749 = (function (){var load = inst_11748;return ((function (load,inst_11748,state_val_11764,c__6367__auto__,load_chan,loaded_chan,___$1){
return (function (p1__11700_SHARP_){return (p1__11700_SHARP_ + (1));
});
;})(load,inst_11748,state_val_11764,c__6367__auto__,load_chan,loaded_chan,___$1))
})();var inst_11750 = om.core.update_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"load-count","load-count",128885706),inst_11749);var inst_11751 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"load-count","load-count",128885706));var inst_11752 = cljs.core._EQ_.call(null,inst_11751,(20));var state_11763__$1 = (function (){var statearr_11770 = state_11763;(statearr_11770[(9)] = inst_11750);
return statearr_11770;
})();if(inst_11752)
{var statearr_11771_11784 = state_11763__$1;(statearr_11771_11784[(1)] = (5));
} else
{var statearr_11772_11785 = state_11763__$1;(statearr_11772_11785[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11764 === (3)))
{var inst_11761 = (state_11763[(2)]);var state_11763__$1 = state_11763;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11763__$1,inst_11761);
} else
{if((state_val_11764 === (2)))
{var state_11763__$1 = state_11763;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11763__$1,(4),load_chan);
} else
{if((state_val_11764 === (1)))
{var state_11763__$1 = state_11763;var statearr_11773_11786 = state_11763__$1;(statearr_11773_11786[(2)] = null);
(statearr_11773_11786[(1)] = (2));
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
var state_machine__6353__auto____0 = (function (){var statearr_11777 = [null,null,null,null,null,null,null,null,null,null];(statearr_11777[(0)] = state_machine__6353__auto__);
(statearr_11777[(1)] = (1));
return statearr_11777;
});
var state_machine__6353__auto____1 = (function (state_11763){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_11763);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e11778){if((e11778 instanceof Object))
{var ex__6356__auto__ = e11778;var statearr_11779_11787 = state_11763;(statearr_11779_11787[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11763);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11778;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11788 = state_11763;
state_11763 = G__11788;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_11763){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_11763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto__,load_chan,loaded_chan,___$1))
})();var state__6369__auto__ = (function (){var statearr_11780 = f__6368__auto__.call(null);(statearr_11780[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto__);
return statearr_11780;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto__,load_chan,loaded_chan,___$1))
);
return c__6367__auto__;
});
photosure.blog.t11741.prototype.om$core$IInitState$ = true;
photosure.blog.t11741.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"load-chan","load-chan",342107614),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"load-count","load-count",128885706),(0),new cljs.core.Keyword(null,"iter","iter",1308240283),(20)], null);
});
photosure.blog.t11741.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11743){var self__ = this;
var _11743__$1 = this;return self__.meta11742;
});
photosure.blog.t11741.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11743,meta11742__$1){var self__ = this;
var _11743__$1 = this;return (new photosure.blog.t11741(self__.owner,self__.posts,self__.posts_view,meta11742__$1));
});
photosure.blog.__GT_t11741 = (function __GT_t11741(owner__$1,posts__$1,posts_view__$1,meta11742){return (new photosure.blog.t11741(owner__$1,posts__$1,posts_view__$1,meta11742));
});
}
return (new photosure.blog.t11741(owner,posts,posts_view,null));
});
photosure.blog.set_posts = (function set_posts(app,page){return photosure.util.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),("api/posts/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(page)),new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),(function (_){return om.core.update_BANG_.call(null,app,new cljs.core.Keyword(null,"posts","posts",760043164),_);
})], null));
});
photosure.blog.posts_nav = (function posts_nav(app,owner){if(typeof photosure.blog.t11794 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t11794 = (function (owner,app,posts_nav,meta11795){
this.owner = owner;
this.app = app;
this.posts_nav = posts_nav;
this.meta11795 = meta11795;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t11794.cljs$lang$type = true;
photosure.blog.t11794.cljs$lang$ctorStr = "photosure.blog/t11794";
photosure.blog.t11794.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t11794");
});
photosure.blog.t11794.prototype.om$core$IRenderState$ = true;
photosure.blog.t11794.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__11797){var self__ = this;
var map__11798 = p__11797;var map__11798__$1 = ((cljs.core.seq_QMARK_.call(null,map__11798))?cljs.core.apply.call(null,cljs.core.hash_map,map__11798):map__11798);var nav_chan = cljs.core.get.call(null,map__11798__$1,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980));var ___$1 = this;return React.DOM.div({"className": "posts-nav"},React.DOM.div({"onClick": ((function (___$1,map__11798,map__11798__$1,nav_chan){
return (function (___$2){return cljs.core.async.put_BANG_.call(null,nav_chan,"prev");
});})(___$1,map__11798,map__11798__$1,nav_chan))
, "className": "prev"},React.DOM.p({"className": "icon"},goog.string.unescapeEntities("&#xe602"))),React.DOM.div({"className": "top"},React.DOM.p({"className": "page"},(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.app) + (1)))),React.DOM.div({"onClick": ((function (___$1,map__11798,map__11798__$1,nav_chan){
return (function (___$2){return cljs.core.async.put_BANG_.call(null,nav_chan,"next");
});})(___$1,map__11798,map__11798__$1,nav_chan))
, "className": "next"},React.DOM.p({"className": "icon"},goog.string.unescapeEntities("&#xe601"))));
});
photosure.blog.t11794.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11796){var self__ = this;
var _11796__$1 = this;return self__.meta11795;
});
photosure.blog.t11794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11796,meta11795__$1){var self__ = this;
var _11796__$1 = this;return (new photosure.blog.t11794(self__.owner,self__.app,self__.posts_nav,meta11795__$1));
});
photosure.blog.__GT_t11794 = (function __GT_t11794(owner__$1,app__$1,posts_nav__$1,meta11795){return (new photosure.blog.t11794(owner__$1,app__$1,posts_nav__$1,meta11795));
});
}
return (new photosure.blog.t11794(owner,app,posts_nav,null));
});
photosure.blog.blog = (function blog(app,owner){if(typeof photosure.blog.t11869 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t11869 = (function (owner,app,blog,meta11870){
this.owner = owner;
this.app = app;
this.blog = blog;
this.meta11870 = meta11870;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t11869.cljs$lang$type = true;
photosure.blog.t11869.cljs$lang$ctorStr = "photosure.blog/t11869";
photosure.blog.t11869.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t11869");
});
photosure.blog.t11869.prototype.om$core$IRenderState$ = true;
photosure.blog.t11869.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__11872){var self__ = this;
var map__11873 = p__11872;var map__11873__$1 = ((cljs.core.seq_QMARK_.call(null,map__11873))?cljs.core.apply.call(null,cljs.core.hash_map,map__11873):map__11873);var scroll_top = cljs.core.get.call(null,map__11873__$1,new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100));var nav_chan = cljs.core.get.call(null,map__11873__$1,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980));var loaded_chan = cljs.core.get.call(null,map__11873__$1,new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448));var loaded = cljs.core.get.call(null,map__11873__$1,new cljs.core.Keyword(null,"loaded","loaded",-1246482293));var this$__$1 = this;return React.DOM.div({"id": "blog-gallery-container"},om.core.build.call(null,photosure.scrolldiv.scroll_div,self__.app,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"blog-gallery",new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),(0)], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),("blog-gallery"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(loaded)?" loaded":null))),new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),(0)], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.core.build.call(null,photosure.blog.posts_view,new cljs.core.Keyword(null,"posts","posts",760043164).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448),loaded_chan], null)], null)),om.core.build.call(null,photosure.blog.posts_nav,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980),nav_chan], null)], null))], null)], null)], null)));
});
photosure.blog.t11869.prototype.om$core$IWillMount$ = true;
photosure.blog.t11869.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;photosure.blog.set_posts.call(null,self__.app,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.app));
var loaded_chan_11937 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448));var c__6367__auto___11938 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto___11938,loaded_chan_11937,___$1){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto___11938,loaded_chan_11937,___$1){
return (function (state_11882){var state_val_11883 = (state_11882[(1)]);if((state_val_11883 === (4)))
{var inst_11876 = (state_11882[(2)]);var inst_11877 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true);var state_11882__$1 = (function (){var statearr_11884 = state_11882;(statearr_11884[(7)] = inst_11876);
(statearr_11884[(8)] = inst_11877);
return statearr_11884;
})();var statearr_11885_11939 = state_11882__$1;(statearr_11885_11939[(2)] = null);
(statearr_11885_11939[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11883 === (3)))
{var inst_11880 = (state_11882[(2)]);var state_11882__$1 = state_11882;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11882__$1,inst_11880);
} else
{if((state_val_11883 === (2)))
{var state_11882__$1 = state_11882;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11882__$1,(4),loaded_chan_11937);
} else
{if((state_val_11883 === (1)))
{var state_11882__$1 = state_11882;var statearr_11886_11940 = state_11882__$1;(statearr_11886_11940[(2)] = null);
(statearr_11886_11940[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6367__auto___11938,loaded_chan_11937,___$1))
;return ((function (switch__6352__auto__,c__6367__auto___11938,loaded_chan_11937,___$1){
return (function() {
var state_machine__6353__auto__ = null;
var state_machine__6353__auto____0 = (function (){var statearr_11890 = [null,null,null,null,null,null,null,null,null];(statearr_11890[(0)] = state_machine__6353__auto__);
(statearr_11890[(1)] = (1));
return statearr_11890;
});
var state_machine__6353__auto____1 = (function (state_11882){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_11882);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e11891){if((e11891 instanceof Object))
{var ex__6356__auto__ = e11891;var statearr_11892_11941 = state_11882;(statearr_11892_11941[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11882);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11891;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11942 = state_11882;
state_11882 = G__11942;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_11882){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_11882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto___11938,loaded_chan_11937,___$1))
})();var state__6369__auto__ = (function (){var statearr_11893 = f__6368__auto__.call(null);(statearr_11893[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto___11938);
return statearr_11893;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto___11938,loaded_chan_11937,___$1))
);
var nav_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980));var c__6367__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto__,nav_chan,___$1){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto__,nav_chan,___$1){
return (function (state_11918){var state_val_11919 = (state_11918[(1)]);if((state_val_11919 === (7)))
{var inst_11913 = (state_11918[(2)]);var state_11918__$1 = (function (){var statearr_11920 = state_11918;(statearr_11920[(7)] = inst_11913);
return statearr_11920;
})();var statearr_11921_11943 = state_11918__$1;(statearr_11921_11943[(2)] = null);
(statearr_11921_11943[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11919 === (6)))
{var inst_11896 = (state_11918[(8)]);var inst_11906 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),false);var inst_11907 = (function (){var cmd = inst_11896;return ((function (cmd,inst_11896,inst_11906,state_val_11919,c__6367__auto__,nav_chan,___$1){
return (function (p1__11800_SHARP_){return (p1__11800_SHARP_ + (1));
});
;})(cmd,inst_11896,inst_11906,state_val_11919,c__6367__auto__,nav_chan,___$1))
})();var inst_11908 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"page","page",849072397),inst_11907);var inst_11909 = cljs.core.deref.call(null,self__.app);var inst_11910 = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(inst_11909);var inst_11911 = photosure.blog.set_posts.call(null,self__.app,inst_11910);var state_11918__$1 = (function (){var statearr_11922 = state_11918;(statearr_11922[(9)] = inst_11908);
(statearr_11922[(10)] = inst_11906);
return statearr_11922;
})();var statearr_11923_11944 = state_11918__$1;(statearr_11923_11944[(2)] = inst_11911);
(statearr_11923_11944[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11919 === (5)))
{var inst_11896 = (state_11918[(8)]);var inst_11899 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),false);var inst_11900 = (function (){var cmd = inst_11896;return ((function (cmd,inst_11896,inst_11899,state_val_11919,c__6367__auto__,nav_chan,___$1){
return (function (p1__11799_SHARP_){return (p1__11799_SHARP_ - (1));
});
;})(cmd,inst_11896,inst_11899,state_val_11919,c__6367__auto__,nav_chan,___$1))
})();var inst_11901 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"page","page",849072397),inst_11900);var inst_11902 = cljs.core.deref.call(null,self__.app);var inst_11903 = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(inst_11902);var inst_11904 = photosure.blog.set_posts.call(null,self__.app,inst_11903);var state_11918__$1 = (function (){var statearr_11924 = state_11918;(statearr_11924[(11)] = inst_11899);
(statearr_11924[(12)] = inst_11901);
return statearr_11924;
})();var statearr_11925_11945 = state_11918__$1;(statearr_11925_11945[(2)] = inst_11904);
(statearr_11925_11945[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11919 === (4)))
{var inst_11896 = (state_11918[(8)]);var inst_11896__$1 = (state_11918[(2)]);var inst_11897 = cljs.core._EQ_.call(null,inst_11896__$1,"prev");var state_11918__$1 = (function (){var statearr_11926 = state_11918;(statearr_11926[(8)] = inst_11896__$1);
return statearr_11926;
})();if(inst_11897)
{var statearr_11927_11946 = state_11918__$1;(statearr_11927_11946[(1)] = (5));
} else
{var statearr_11928_11947 = state_11918__$1;(statearr_11928_11947[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11919 === (3)))
{var inst_11916 = (state_11918[(2)]);var state_11918__$1 = state_11918;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11918__$1,inst_11916);
} else
{if((state_val_11919 === (2)))
{var state_11918__$1 = state_11918;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11918__$1,(4),nav_chan);
} else
{if((state_val_11919 === (1)))
{var state_11918__$1 = state_11918;var statearr_11929_11948 = state_11918__$1;(statearr_11929_11948[(2)] = null);
(statearr_11929_11948[(1)] = (2));
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
var state_machine__6353__auto____0 = (function (){var statearr_11933 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11933[(0)] = state_machine__6353__auto__);
(statearr_11933[(1)] = (1));
return statearr_11933;
});
var state_machine__6353__auto____1 = (function (state_11918){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_11918);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e11934){if((e11934 instanceof Object))
{var ex__6356__auto__ = e11934;var statearr_11935_11949 = state_11918;(statearr_11935_11949[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11918);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11934;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11950 = state_11918;
state_11918 = G__11950;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_11918){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_11918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto__,nav_chan,___$1))
})();var state__6369__auto__ = (function (){var statearr_11936 = f__6368__auto__.call(null);(statearr_11936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto__);
return statearr_11936;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto__,nav_chan,___$1))
);
return c__6367__auto__;
});
photosure.blog.t11869.prototype.om$core$IInitState$ = true;
photosure.blog.t11869.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),false,new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980),cljs.core.async.chan.call(null)], null);
});
photosure.blog.t11869.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11871){var self__ = this;
var _11871__$1 = this;return self__.meta11870;
});
photosure.blog.t11869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11871,meta11870__$1){var self__ = this;
var _11871__$1 = this;return (new photosure.blog.t11869(self__.owner,self__.app,self__.blog,meta11870__$1));
});
photosure.blog.__GT_t11869 = (function __GT_t11869(owner__$1,app__$1,blog__$1,meta11870){return (new photosure.blog.t11869(owner__$1,app__$1,blog__$1,meta11870));
});
}
return (new photosure.blog.t11869(owner,app,blog,null));
});
photosure.blog.render = (function render(){return om.core.root.call(null,photosure.blog.blog,photosure.blog.app_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("dynamic-content")], null));
});

//# sourceMappingURL=blog.js.map