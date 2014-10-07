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
photosure.blog.text_view = (function text_view(caption,owner){if(typeof photosure.blog.t9498 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t9498 = (function (owner,caption,text_view,meta9499){
this.owner = owner;
this.caption = caption;
this.text_view = text_view;
this.meta9499 = meta9499;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t9498.cljs$lang$type = true;
photosure.blog.t9498.cljs$lang$ctorStr = "photosure.blog/t9498";
photosure.blog.t9498.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t9498");
});
photosure.blog.t9498.prototype.om$core$IRender$ = true;
photosure.blog.t9498.prototype.om$core$IRender$render$arity$1 = (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return React.DOM.div({"dangerouslySetInnerHTML": {"__html": self__.caption}, "className": "caption"},null);
});
photosure.blog.t9498.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9500){var self__ = this;
var _9500__$1 = this;return self__.meta9499;
});
photosure.blog.t9498.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9500,meta9499__$1){var self__ = this;
var _9500__$1 = this;return (new photosure.blog.t9498(self__.owner,self__.caption,self__.text_view,meta9499__$1));
});
photosure.blog.__GT_t9498 = (function __GT_t9498(owner__$1,caption__$1,text_view__$1,meta9499){return (new photosure.blog.t9498(owner__$1,caption__$1,text_view__$1,meta9499));
});
}
return (new photosure.blog.t9498(owner,caption,text_view,null));
});
photosure.blog.answer_post_view = (function answer_post_view(p__9501){var map__9506 = p__9501;var map__9506__$1 = ((cljs.core.seq_QMARK_.call(null,map__9506))?cljs.core.apply.call(null,cljs.core.hash_map,map__9506):map__9506);var id = cljs.core.get.call(null,map__9506__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var asking_name = cljs.core.get.call(null,map__9506__$1,new cljs.core.Keyword(null,"asking_name","asking_name",728401374));var asking_url = cljs.core.get.call(null,map__9506__$1,new cljs.core.Keyword(null,"asking_url","asking_url",-384387495));var question = cljs.core.get.call(null,map__9506__$1,new cljs.core.Keyword(null,"question","question",-1411720117));var answer = cljs.core.get.call(null,map__9506__$1,new cljs.core.Keyword(null,"answer","answer",-742633163));if(typeof photosure.blog.t9507 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t9507 = (function (answer,question,asking_url,asking_name,id,map__9506,p__9501,answer_post_view,meta9508){
this.answer = answer;
this.question = question;
this.asking_url = asking_url;
this.asking_name = asking_name;
this.id = id;
this.map__9506 = map__9506;
this.p__9501 = p__9501;
this.answer_post_view = answer_post_view;
this.meta9508 = meta9508;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t9507.cljs$lang$type = true;
photosure.blog.t9507.cljs$lang$ctorStr = "photosure.blog/t9507";
photosure.blog.t9507.cljs$lang$ctorPrWriter = ((function (map__9506,map__9506__$1,id,asking_name,asking_url,question,answer){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t9507");
});})(map__9506,map__9506__$1,id,asking_name,asking_url,question,answer))
;
photosure.blog.t9507.prototype.om$core$IRender$ = true;
photosure.blog.t9507.prototype.om$core$IRender$render$arity$1 = ((function (map__9506,map__9506__$1,id,asking_name,asking_url,question,answer){
return (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return React.DOM.div({"className": "post", "id": self__.id},React.DOM.div(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.asking_name)+" @ "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.asking_url)+": "),React.DOM.div({})));
});})(map__9506,map__9506__$1,id,asking_name,asking_url,question,answer))
;
photosure.blog.t9507.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__9506,map__9506__$1,id,asking_name,asking_url,question,answer){
return (function (_9509){var self__ = this;
var _9509__$1 = this;return self__.meta9508;
});})(map__9506,map__9506__$1,id,asking_name,asking_url,question,answer))
;
photosure.blog.t9507.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__9506,map__9506__$1,id,asking_name,asking_url,question,answer){
return (function (_9509,meta9508__$1){var self__ = this;
var _9509__$1 = this;return (new photosure.blog.t9507(self__.answer,self__.question,self__.asking_url,self__.asking_name,self__.id,self__.map__9506,self__.p__9501,self__.answer_post_view,meta9508__$1));
});})(map__9506,map__9506__$1,id,asking_name,asking_url,question,answer))
;
photosure.blog.__GT_t9507 = ((function (map__9506,map__9506__$1,id,asking_name,asking_url,question,answer){
return (function __GT_t9507(answer__$1,question__$1,asking_url__$1,asking_name__$1,id__$1,map__9506__$2,p__9501__$1,answer_post_view__$1,meta9508){return (new photosure.blog.t9507(answer__$1,question__$1,asking_url__$1,asking_name__$1,id__$1,map__9506__$2,p__9501__$1,answer_post_view__$1,meta9508));
});})(map__9506,map__9506__$1,id,asking_name,asking_url,question,answer))
;
}
return (new photosure.blog.t9507(answer,question,asking_url,asking_name,id,map__9506__$1,p__9501,answer_post_view,null));
});
photosure.blog.text_post_view = (function text_post_view(p__9510,owner){var map__9515 = p__9510;var map__9515__$1 = ((cljs.core.seq_QMARK_.call(null,map__9515))?cljs.core.apply.call(null,cljs.core.hash_map,map__9515):map__9515);var id = cljs.core.get.call(null,map__9515__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var title = cljs.core.get.call(null,map__9515__$1,new cljs.core.Keyword(null,"title","title",636505583));var body = cljs.core.get.call(null,map__9515__$1,new cljs.core.Keyword(null,"body","body",-2049205669));if(typeof photosure.blog.t9516 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t9516 = (function (body,title,id,map__9515,owner,p__9510,text_post_view,meta9517){
this.body = body;
this.title = title;
this.id = id;
this.map__9515 = map__9515;
this.owner = owner;
this.p__9510 = p__9510;
this.text_post_view = text_post_view;
this.meta9517 = meta9517;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t9516.cljs$lang$type = true;
photosure.blog.t9516.cljs$lang$ctorStr = "photosure.blog/t9516";
photosure.blog.t9516.cljs$lang$ctorPrWriter = ((function (map__9515,map__9515__$1,id,title,body){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t9516");
});})(map__9515,map__9515__$1,id,title,body))
;
photosure.blog.t9516.prototype.om$core$IRender$ = true;
photosure.blog.t9516.prototype.om$core$IRender$render$arity$1 = ((function (map__9515,map__9515__$1,id,title,body){
return (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return React.DOM.div({"className": "post", "id": self__.id},React.DOM.h2({"className": "blog-title"},self__.title),om.core.build.call(null,photosure.blog.text_view,self__.body));
});})(map__9515,map__9515__$1,id,title,body))
;
photosure.blog.t9516.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__9515,map__9515__$1,id,title,body){
return (function (_9518){var self__ = this;
var _9518__$1 = this;return self__.meta9517;
});})(map__9515,map__9515__$1,id,title,body))
;
photosure.blog.t9516.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__9515,map__9515__$1,id,title,body){
return (function (_9518,meta9517__$1){var self__ = this;
var _9518__$1 = this;return (new photosure.blog.t9516(self__.body,self__.title,self__.id,self__.map__9515,self__.owner,self__.p__9510,self__.text_post_view,meta9517__$1));
});})(map__9515,map__9515__$1,id,title,body))
;
photosure.blog.__GT_t9516 = ((function (map__9515,map__9515__$1,id,title,body){
return (function __GT_t9516(body__$1,title__$1,id__$1,map__9515__$2,owner__$1,p__9510__$1,text_post_view__$1,meta9517){return (new photosure.blog.t9516(body__$1,title__$1,id__$1,map__9515__$2,owner__$1,p__9510__$1,text_post_view__$1,meta9517));
});})(map__9515,map__9515__$1,id,title,body))
;
}
return (new photosure.blog.t9516(body,title,id,map__9515__$1,owner,p__9510,text_post_view,null));
});
photosure.blog.photo_post_view = (function photo_post_view(p__9519,owner){var map__9526 = p__9519;var map__9526__$1 = ((cljs.core.seq_QMARK_.call(null,map__9526))?cljs.core.apply.call(null,cljs.core.hash_map,map__9526):map__9526);var id = cljs.core.get.call(null,map__9526__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var photos = cljs.core.get.call(null,map__9526__$1,new cljs.core.Keyword(null,"photos","photos",11691538));var caption = cljs.core.get.call(null,map__9526__$1,new cljs.core.Keyword(null,"caption","caption",-855383902));if(typeof photosure.blog.t9527 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t9527 = (function (caption,photos,id,map__9526,owner,p__9519,photo_post_view,meta9528){
this.caption = caption;
this.photos = photos;
this.id = id;
this.map__9526 = map__9526;
this.owner = owner;
this.p__9519 = p__9519;
this.photo_post_view = photo_post_view;
this.meta9528 = meta9528;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t9527.cljs$lang$type = true;
photosure.blog.t9527.cljs$lang$ctorStr = "photosure.blog/t9527";
photosure.blog.t9527.cljs$lang$ctorPrWriter = ((function (map__9526,map__9526__$1,id,photos,caption){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t9527");
});})(map__9526,map__9526__$1,id,photos,caption))
;
photosure.blog.t9527.prototype.om$core$IRenderState$ = true;
photosure.blog.t9527.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__9526,map__9526__$1,id,photos,caption){
return (function (this$,p__9530){var self__ = this;
var map__9531 = p__9530;var map__9531__$1 = ((cljs.core.seq_QMARK_.call(null,map__9531))?cljs.core.apply.call(null,cljs.core.hash_map,map__9531):map__9531);var loaded = cljs.core.get.call(null,map__9531__$1,new cljs.core.Keyword(null,"loaded","loaded",-1246482293));var this$__$1 = this;return React.DOM.div({"className": "post", "id": self__.id},cljs.core.apply.call(null,om.dom.div,{"className": ("blog-photo")},React.DOM.div({"className": ("loader "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not.call(null,loaded))?"on":"off"))), "id": "blah"}),cljs.core.map.call(null,((function (this$__$1,map__9531,map__9531__$1,loaded,map__9526,map__9526__$1,id,photos,caption){
return (function (photo){return React.DOM.img({"onLoad": ((function (this$__$1,map__9531,map__9531__$1,loaded,map__9526,map__9526__$1,id,photos,caption){
return (function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true);
});})(this$__$1,map__9531,map__9531__$1,loaded,map__9526,map__9526__$1,id,photos,caption))
, "className": ("blog-photo-img"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(loaded)?" loaded":null))), "src": photo});
});})(this$__$1,map__9531,map__9531__$1,loaded,map__9526,map__9526__$1,id,photos,caption))
,self__.photos)),om.core.build.call(null,photosure.blog.text_view,self__.caption));
});})(map__9526,map__9526__$1,id,photos,caption))
;
photosure.blog.t9527.prototype.om$core$IWillReceiveProps$ = true;
photosure.blog.t9527.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = ((function (map__9526,map__9526__$1,id,photos,caption){
return (function (this$,next_props){var self__ = this;
var this$__$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),false);
});})(map__9526,map__9526__$1,id,photos,caption))
;
photosure.blog.t9527.prototype.om$core$IInitState$ = true;
photosure.blog.t9527.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__9526,map__9526__$1,id,photos,caption){
return (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),false], null);
});})(map__9526,map__9526__$1,id,photos,caption))
;
photosure.blog.t9527.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__9526,map__9526__$1,id,photos,caption){
return (function (_9529){var self__ = this;
var _9529__$1 = this;return self__.meta9528;
});})(map__9526,map__9526__$1,id,photos,caption))
;
photosure.blog.t9527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__9526,map__9526__$1,id,photos,caption){
return (function (_9529,meta9528__$1){var self__ = this;
var _9529__$1 = this;return (new photosure.blog.t9527(self__.caption,self__.photos,self__.id,self__.map__9526,self__.owner,self__.p__9519,self__.photo_post_view,meta9528__$1));
});})(map__9526,map__9526__$1,id,photos,caption))
;
photosure.blog.__GT_t9527 = ((function (map__9526,map__9526__$1,id,photos,caption){
return (function __GT_t9527(caption__$1,photos__$1,id__$1,map__9526__$2,owner__$1,p__9519__$1,photo_post_view__$1,meta9528){return (new photosure.blog.t9527(caption__$1,photos__$1,id__$1,map__9526__$2,owner__$1,p__9519__$1,photo_post_view__$1,meta9528));
});})(map__9526,map__9526__$1,id,photos,caption))
;
}
return (new photosure.blog.t9527(caption,photos,id,map__9526__$1,owner,p__9519,photo_post_view,null));
});
photosure.blog.post_view = (function post_view(p__9532,owner){var map__9537 = p__9532;var map__9537__$1 = ((cljs.core.seq_QMARK_.call(null,map__9537))?cljs.core.apply.call(null,cljs.core.hash_map,map__9537):map__9537);var post = map__9537__$1;var type = cljs.core.get.call(null,map__9537__$1,new cljs.core.Keyword(null,"type","type",1174270348));if(typeof photosure.blog.t9538 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t9538 = (function (type,post,map__9537,owner,p__9532,post_view,meta9539){
this.type = type;
this.post = post;
this.map__9537 = map__9537;
this.owner = owner;
this.p__9532 = p__9532;
this.post_view = post_view;
this.meta9539 = meta9539;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t9538.cljs$lang$type = true;
photosure.blog.t9538.cljs$lang$ctorStr = "photosure.blog/t9538";
photosure.blog.t9538.cljs$lang$ctorPrWriter = ((function (map__9537,map__9537__$1,post,type){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t9538");
});})(map__9537,map__9537__$1,post,type))
;
photosure.blog.t9538.prototype.om$core$IRender$ = true;
photosure.blog.t9538.prototype.om$core$IRender$render$arity$1 = ((function (map__9537,map__9537__$1,post,type){
return (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core._EQ_.call(null,self__.type,"photo"))
{return om.core.build.call(null,photosure.blog.photo_post_view,self__.post);
} else
{return om.core.build.call(null,photosure.blog.text_post_view,self__.post);
}
});})(map__9537,map__9537__$1,post,type))
;
photosure.blog.t9538.prototype.om$core$IDidUpdate$ = true;
photosure.blog.t9538.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__9537,map__9537__$1,post,type){
return (function (this$,prev_props,prev_state){var self__ = this;
var this$__$1 = this;return cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"load-chan","load-chan",342107614)),"done!");
});})(map__9537,map__9537__$1,post,type))
;
photosure.blog.t9538.prototype.om$core$IDidMount$ = true;
photosure.blog.t9538.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__9537,map__9537__$1,post,type){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"load-chan","load-chan",342107614)),"done!");
});})(map__9537,map__9537__$1,post,type))
;
photosure.blog.t9538.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__9537,map__9537__$1,post,type){
return (function (_9540){var self__ = this;
var _9540__$1 = this;return self__.meta9539;
});})(map__9537,map__9537__$1,post,type))
;
photosure.blog.t9538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__9537,map__9537__$1,post,type){
return (function (_9540,meta9539__$1){var self__ = this;
var _9540__$1 = this;return (new photosure.blog.t9538(self__.type,self__.post,self__.map__9537,self__.owner,self__.p__9532,self__.post_view,meta9539__$1));
});})(map__9537,map__9537__$1,post,type))
;
photosure.blog.__GT_t9538 = ((function (map__9537,map__9537__$1,post,type){
return (function __GT_t9538(type__$1,post__$1,map__9537__$2,owner__$1,p__9532__$1,post_view__$1,meta9539){return (new photosure.blog.t9538(type__$1,post__$1,map__9537__$2,owner__$1,p__9532__$1,post_view__$1,meta9539));
});})(map__9537,map__9537__$1,post,type))
;
}
return (new photosure.blog.t9538(type,post,map__9537__$1,owner,p__9532,post_view,null));
});
photosure.blog.posts_view = (function posts_view(posts,owner){if(typeof photosure.blog.t9583 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t9583 = (function (owner,posts,posts_view,meta9584){
this.owner = owner;
this.posts = posts;
this.posts_view = posts_view;
this.meta9584 = meta9584;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t9583.cljs$lang$type = true;
photosure.blog.t9583.cljs$lang$ctorStr = "photosure.blog/t9583";
photosure.blog.t9583.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t9583");
});
photosure.blog.t9583.prototype.om$core$IRenderState$ = true;
photosure.blog.t9583.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__9586){var self__ = this;
var map__9587 = p__9586;var map__9587__$1 = ((cljs.core.seq_QMARK_.call(null,map__9587))?cljs.core.apply.call(null,cljs.core.hash_map,map__9587):map__9587);var load_chan = cljs.core.get.call(null,map__9587__$1,new cljs.core.Keyword(null,"load-chan","load-chan",342107614));var iter = cljs.core.get.call(null,map__9587__$1,new cljs.core.Keyword(null,"iter","iter",1308240283));var this$__$1 = this;return cljs.core.apply.call(null,om.dom.div,{"id": "post-list"},om.core.build_all.call(null,photosure.blog.post_view,cljs.core.take.call(null,iter,self__.posts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"load-chan","load-chan",342107614),load_chan], null)], null)));
});
photosure.blog.t9583.prototype.om$core$IWillMount$ = true;
photosure.blog.t9583.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var load_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"load-chan","load-chan",342107614));var loaded_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448));var c__6367__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto__,load_chan,loaded_chan,___$1){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto__,load_chan,loaded_chan,___$1){
return (function (state_9606){var state_val_9607 = (state_9606[(1)]);if((state_val_9607 === (7)))
{var inst_9601 = (state_9606[(2)]);var state_9606__$1 = (function (){var statearr_9608 = state_9606;(statearr_9608[(7)] = inst_9601);
return statearr_9608;
})();var statearr_9609_9624 = state_9606__$1;(statearr_9609_9624[(2)] = null);
(statearr_9609_9624[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9607 === (6)))
{var state_9606__$1 = state_9606;var statearr_9610_9625 = state_9606__$1;(statearr_9610_9625[(2)] = null);
(statearr_9610_9625[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9607 === (5)))
{var inst_9596 = cljs.core.async.put_BANG_.call(null,loaded_chan,"all done!");var inst_9597 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"load-count","load-count",128885706),(0));var inst_9598 = console.log("loaded");var state_9606__$1 = (function (){var statearr_9611 = state_9606;(statearr_9611[(8)] = inst_9596);
(statearr_9611[(9)] = inst_9597);
return statearr_9611;
})();var statearr_9612_9626 = state_9606__$1;(statearr_9612_9626[(2)] = inst_9598);
(statearr_9612_9626[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9607 === (4)))
{var inst_9590 = (state_9606[(2)]);var inst_9591 = (function (){var load = inst_9590;return ((function (load,inst_9590,state_val_9607,c__6367__auto__,load_chan,loaded_chan,___$1){
return (function (p1__9541_SHARP_){return (p1__9541_SHARP_ + (1));
});
;})(load,inst_9590,state_val_9607,c__6367__auto__,load_chan,loaded_chan,___$1))
})();var inst_9592 = om.core.update_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"load-count","load-count",128885706),inst_9591);var inst_9593 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"load-count","load-count",128885706));var inst_9594 = cljs.core._EQ_.call(null,inst_9593,(20));var state_9606__$1 = (function (){var statearr_9613 = state_9606;(statearr_9613[(10)] = inst_9592);
return statearr_9613;
})();if(inst_9594)
{var statearr_9614_9627 = state_9606__$1;(statearr_9614_9627[(1)] = (5));
} else
{var statearr_9615_9628 = state_9606__$1;(statearr_9615_9628[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9607 === (3)))
{var inst_9604 = (state_9606[(2)]);var state_9606__$1 = state_9606;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9606__$1,inst_9604);
} else
{if((state_val_9607 === (2)))
{var state_9606__$1 = state_9606;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9606__$1,(4),load_chan);
} else
{if((state_val_9607 === (1)))
{var state_9606__$1 = state_9606;var statearr_9616_9629 = state_9606__$1;(statearr_9616_9629[(2)] = null);
(statearr_9616_9629[(1)] = (2));
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
var state_machine__6353__auto____0 = (function (){var statearr_9620 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_9620[(0)] = state_machine__6353__auto__);
(statearr_9620[(1)] = (1));
return statearr_9620;
});
var state_machine__6353__auto____1 = (function (state_9606){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_9606);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e9621){if((e9621 instanceof Object))
{var ex__6356__auto__ = e9621;var statearr_9622_9630 = state_9606;(statearr_9622_9630[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9606);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e9621;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9631 = state_9606;
state_9606 = G__9631;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_9606){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_9606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto__,load_chan,loaded_chan,___$1))
})();var state__6369__auto__ = (function (){var statearr_9623 = f__6368__auto__.call(null);(statearr_9623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto__);
return statearr_9623;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto__,load_chan,loaded_chan,___$1))
);
return c__6367__auto__;
});
photosure.blog.t9583.prototype.om$core$IInitState$ = true;
photosure.blog.t9583.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"load-chan","load-chan",342107614),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"load-count","load-count",128885706),(0),new cljs.core.Keyword(null,"iter","iter",1308240283),(20)], null);
});
photosure.blog.t9583.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9585){var self__ = this;
var _9585__$1 = this;return self__.meta9584;
});
photosure.blog.t9583.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9585,meta9584__$1){var self__ = this;
var _9585__$1 = this;return (new photosure.blog.t9583(self__.owner,self__.posts,self__.posts_view,meta9584__$1));
});
photosure.blog.__GT_t9583 = (function __GT_t9583(owner__$1,posts__$1,posts_view__$1,meta9584){return (new photosure.blog.t9583(owner__$1,posts__$1,posts_view__$1,meta9584));
});
}
return (new photosure.blog.t9583(owner,posts,posts_view,null));
});
photosure.blog.set_posts = (function set_posts(app,page){return photosure.util.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),("api/posts/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(page)),new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),(function (_){return om.core.update_BANG_.call(null,app,new cljs.core.Keyword(null,"posts","posts",760043164),_);
})], null));
});
photosure.blog.posts_nav = (function posts_nav(app,owner){if(typeof photosure.blog.t9637 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t9637 = (function (owner,app,posts_nav,meta9638){
this.owner = owner;
this.app = app;
this.posts_nav = posts_nav;
this.meta9638 = meta9638;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t9637.cljs$lang$type = true;
photosure.blog.t9637.cljs$lang$ctorStr = "photosure.blog/t9637";
photosure.blog.t9637.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t9637");
});
photosure.blog.t9637.prototype.om$core$IRenderState$ = true;
photosure.blog.t9637.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__9640){var self__ = this;
var map__9641 = p__9640;var map__9641__$1 = ((cljs.core.seq_QMARK_.call(null,map__9641))?cljs.core.apply.call(null,cljs.core.hash_map,map__9641):map__9641);var nav_chan = cljs.core.get.call(null,map__9641__$1,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980));var ___$1 = this;return React.DOM.div({"className": "posts-nav"},React.DOM.div({"onClick": ((function (___$1,map__9641,map__9641__$1,nav_chan){
return (function (___$2){return cljs.core.async.put_BANG_.call(null,nav_chan,"prev");
});})(___$1,map__9641,map__9641__$1,nav_chan))
, "className": "prev"}),React.DOM.div({"className": "top"},React.DOM.p({"className": "page"},(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.app) + (1)))),React.DOM.div({"onClick": ((function (___$1,map__9641,map__9641__$1,nav_chan){
return (function (___$2){return cljs.core.async.put_BANG_.call(null,nav_chan,"next");
});})(___$1,map__9641,map__9641__$1,nav_chan))
, "className": "next"}));
});
photosure.blog.t9637.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9639){var self__ = this;
var _9639__$1 = this;return self__.meta9638;
});
photosure.blog.t9637.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9639,meta9638__$1){var self__ = this;
var _9639__$1 = this;return (new photosure.blog.t9637(self__.owner,self__.app,self__.posts_nav,meta9638__$1));
});
photosure.blog.__GT_t9637 = (function __GT_t9637(owner__$1,app__$1,posts_nav__$1,meta9638){return (new photosure.blog.t9637(owner__$1,app__$1,posts_nav__$1,meta9638));
});
}
return (new photosure.blog.t9637(owner,app,posts_nav,null));
});
photosure.blog.blog = (function blog(app,owner){if(typeof photosure.blog.t9712 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t9712 = (function (owner,app,blog,meta9713){
this.owner = owner;
this.app = app;
this.blog = blog;
this.meta9713 = meta9713;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t9712.cljs$lang$type = true;
photosure.blog.t9712.cljs$lang$ctorStr = "photosure.blog/t9712";
photosure.blog.t9712.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t9712");
});
photosure.blog.t9712.prototype.om$core$IRenderState$ = true;
photosure.blog.t9712.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__9715){var self__ = this;
var map__9716 = p__9715;var map__9716__$1 = ((cljs.core.seq_QMARK_.call(null,map__9716))?cljs.core.apply.call(null,cljs.core.hash_map,map__9716):map__9716);var scroll_top = cljs.core.get.call(null,map__9716__$1,new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100));var nav_chan = cljs.core.get.call(null,map__9716__$1,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980));var loaded_chan = cljs.core.get.call(null,map__9716__$1,new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448));var loaded = cljs.core.get.call(null,map__9716__$1,new cljs.core.Keyword(null,"loaded","loaded",-1246482293));var this$__$1 = this;return React.DOM.div({"id": "blog-gallery-container"},om.core.build.call(null,photosure.scrolldiv.scroll_div,self__.app,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"blog-gallery",new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),(0)], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),("blog-gallery"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(loaded)?" loaded":null))),new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),(0)], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.core.build.call(null,photosure.blog.posts_view,new cljs.core.Keyword(null,"posts","posts",760043164).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448),loaded_chan], null)], null)),om.core.build.call(null,photosure.blog.posts_nav,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980),nav_chan], null)], null))], null)], null)], null)));
});
photosure.blog.t9712.prototype.om$core$IWillMount$ = true;
photosure.blog.t9712.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;photosure.blog.set_posts.call(null,self__.app,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.app));
var loaded_chan_9780 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448));var c__6367__auto___9781 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto___9781,loaded_chan_9780,___$1){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto___9781,loaded_chan_9780,___$1){
return (function (state_9725){var state_val_9726 = (state_9725[(1)]);if((state_val_9726 === (4)))
{var inst_9719 = (state_9725[(2)]);var inst_9720 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true);var state_9725__$1 = (function (){var statearr_9727 = state_9725;(statearr_9727[(7)] = inst_9720);
(statearr_9727[(8)] = inst_9719);
return statearr_9727;
})();var statearr_9728_9782 = state_9725__$1;(statearr_9728_9782[(2)] = null);
(statearr_9728_9782[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9726 === (3)))
{var inst_9723 = (state_9725[(2)]);var state_9725__$1 = state_9725;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9725__$1,inst_9723);
} else
{if((state_val_9726 === (2)))
{var state_9725__$1 = state_9725;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9725__$1,(4),loaded_chan_9780);
} else
{if((state_val_9726 === (1)))
{var state_9725__$1 = state_9725;var statearr_9729_9783 = state_9725__$1;(statearr_9729_9783[(2)] = null);
(statearr_9729_9783[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6367__auto___9781,loaded_chan_9780,___$1))
;return ((function (switch__6352__auto__,c__6367__auto___9781,loaded_chan_9780,___$1){
return (function() {
var state_machine__6353__auto__ = null;
var state_machine__6353__auto____0 = (function (){var statearr_9733 = [null,null,null,null,null,null,null,null,null];(statearr_9733[(0)] = state_machine__6353__auto__);
(statearr_9733[(1)] = (1));
return statearr_9733;
});
var state_machine__6353__auto____1 = (function (state_9725){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_9725);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e9734){if((e9734 instanceof Object))
{var ex__6356__auto__ = e9734;var statearr_9735_9784 = state_9725;(statearr_9735_9784[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9725);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e9734;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9785 = state_9725;
state_9725 = G__9785;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_9725){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_9725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto___9781,loaded_chan_9780,___$1))
})();var state__6369__auto__ = (function (){var statearr_9736 = f__6368__auto__.call(null);(statearr_9736[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto___9781);
return statearr_9736;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto___9781,loaded_chan_9780,___$1))
);
var nav_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980));var c__6367__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto__,nav_chan,___$1){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto__,nav_chan,___$1){
return (function (state_9761){var state_val_9762 = (state_9761[(1)]);if((state_val_9762 === (7)))
{var inst_9756 = (state_9761[(2)]);var state_9761__$1 = (function (){var statearr_9763 = state_9761;(statearr_9763[(7)] = inst_9756);
return statearr_9763;
})();var statearr_9764_9786 = state_9761__$1;(statearr_9764_9786[(2)] = null);
(statearr_9764_9786[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9762 === (6)))
{var inst_9739 = (state_9761[(8)]);var inst_9749 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),false);var inst_9750 = (function (){var cmd = inst_9739;return ((function (cmd,inst_9739,inst_9749,state_val_9762,c__6367__auto__,nav_chan,___$1){
return (function (p1__9643_SHARP_){return (p1__9643_SHARP_ + (1));
});
;})(cmd,inst_9739,inst_9749,state_val_9762,c__6367__auto__,nav_chan,___$1))
})();var inst_9751 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"page","page",849072397),inst_9750);var inst_9752 = cljs.core.deref.call(null,self__.app);var inst_9753 = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(inst_9752);var inst_9754 = photosure.blog.set_posts.call(null,self__.app,inst_9753);var state_9761__$1 = (function (){var statearr_9765 = state_9761;(statearr_9765[(9)] = inst_9749);
(statearr_9765[(10)] = inst_9751);
return statearr_9765;
})();var statearr_9766_9787 = state_9761__$1;(statearr_9766_9787[(2)] = inst_9754);
(statearr_9766_9787[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9762 === (5)))
{var inst_9739 = (state_9761[(8)]);var inst_9742 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),false);var inst_9743 = (function (){var cmd = inst_9739;return ((function (cmd,inst_9739,inst_9742,state_val_9762,c__6367__auto__,nav_chan,___$1){
return (function (p1__9642_SHARP_){return (p1__9642_SHARP_ - (1));
});
;})(cmd,inst_9739,inst_9742,state_val_9762,c__6367__auto__,nav_chan,___$1))
})();var inst_9744 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"page","page",849072397),inst_9743);var inst_9745 = cljs.core.deref.call(null,self__.app);var inst_9746 = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(inst_9745);var inst_9747 = photosure.blog.set_posts.call(null,self__.app,inst_9746);var state_9761__$1 = (function (){var statearr_9767 = state_9761;(statearr_9767[(11)] = inst_9744);
(statearr_9767[(12)] = inst_9742);
return statearr_9767;
})();var statearr_9768_9788 = state_9761__$1;(statearr_9768_9788[(2)] = inst_9747);
(statearr_9768_9788[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9762 === (4)))
{var inst_9739 = (state_9761[(8)]);var inst_9739__$1 = (state_9761[(2)]);var inst_9740 = cljs.core._EQ_.call(null,inst_9739__$1,"prev");var state_9761__$1 = (function (){var statearr_9769 = state_9761;(statearr_9769[(8)] = inst_9739__$1);
return statearr_9769;
})();if(inst_9740)
{var statearr_9770_9789 = state_9761__$1;(statearr_9770_9789[(1)] = (5));
} else
{var statearr_9771_9790 = state_9761__$1;(statearr_9771_9790[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9762 === (3)))
{var inst_9759 = (state_9761[(2)]);var state_9761__$1 = state_9761;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9761__$1,inst_9759);
} else
{if((state_val_9762 === (2)))
{var state_9761__$1 = state_9761;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9761__$1,(4),nav_chan);
} else
{if((state_val_9762 === (1)))
{var state_9761__$1 = state_9761;var statearr_9772_9791 = state_9761__$1;(statearr_9772_9791[(2)] = null);
(statearr_9772_9791[(1)] = (2));
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
var state_machine__6353__auto____0 = (function (){var statearr_9776 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9776[(0)] = state_machine__6353__auto__);
(statearr_9776[(1)] = (1));
return statearr_9776;
});
var state_machine__6353__auto____1 = (function (state_9761){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_9761);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e9777){if((e9777 instanceof Object))
{var ex__6356__auto__ = e9777;var statearr_9778_9792 = state_9761;(statearr_9778_9792[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9761);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e9777;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9793 = state_9761;
state_9761 = G__9793;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_9761){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_9761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto__,nav_chan,___$1))
})();var state__6369__auto__ = (function (){var statearr_9779 = f__6368__auto__.call(null);(statearr_9779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto__);
return statearr_9779;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto__,nav_chan,___$1))
);
return c__6367__auto__;
});
photosure.blog.t9712.prototype.om$core$IInitState$ = true;
photosure.blog.t9712.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),false,new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980),cljs.core.async.chan.call(null)], null);
});
photosure.blog.t9712.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9714){var self__ = this;
var _9714__$1 = this;return self__.meta9713;
});
photosure.blog.t9712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9714,meta9713__$1){var self__ = this;
var _9714__$1 = this;return (new photosure.blog.t9712(self__.owner,self__.app,self__.blog,meta9713__$1));
});
photosure.blog.__GT_t9712 = (function __GT_t9712(owner__$1,app__$1,blog__$1,meta9713){return (new photosure.blog.t9712(owner__$1,app__$1,blog__$1,meta9713));
});
}
return (new photosure.blog.t9712(owner,app,blog,null));
});
photosure.blog.render = (function render(){return om.core.root.call(null,photosure.blog.blog,photosure.blog.app_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("dynamic-content")], null));
});

//# sourceMappingURL=blog.js.map