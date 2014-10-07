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
photosure.blog.posts_view = (function posts_view(posts,owner){if(typeof photosure.blog.t9582 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t9582 = (function (owner,posts,posts_view,meta9583){
this.owner = owner;
this.posts = posts;
this.posts_view = posts_view;
this.meta9583 = meta9583;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t9582.cljs$lang$type = true;
photosure.blog.t9582.cljs$lang$ctorStr = "photosure.blog/t9582";
photosure.blog.t9582.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t9582");
});
photosure.blog.t9582.prototype.om$core$IRenderState$ = true;
photosure.blog.t9582.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__9585){var self__ = this;
var map__9586 = p__9585;var map__9586__$1 = ((cljs.core.seq_QMARK_.call(null,map__9586))?cljs.core.apply.call(null,cljs.core.hash_map,map__9586):map__9586);var load_chan = cljs.core.get.call(null,map__9586__$1,new cljs.core.Keyword(null,"load-chan","load-chan",342107614));var iter = cljs.core.get.call(null,map__9586__$1,new cljs.core.Keyword(null,"iter","iter",1308240283));var this$__$1 = this;return cljs.core.apply.call(null,om.dom.div,{"id": "post-list"},om.core.build_all.call(null,photosure.blog.post_view,cljs.core.take.call(null,iter,self__.posts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"load-chan","load-chan",342107614),load_chan], null)], null)));
});
photosure.blog.t9582.prototype.om$core$IWillMount$ = true;
photosure.blog.t9582.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var load_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"load-chan","load-chan",342107614));var loaded_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448));var c__6367__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto__,load_chan,loaded_chan,___$1){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto__,load_chan,loaded_chan,___$1){
return (function (state_9604){var state_val_9605 = (state_9604[(1)]);if((state_val_9605 === (7)))
{var inst_9599 = (state_9604[(2)]);var state_9604__$1 = (function (){var statearr_9606 = state_9604;(statearr_9606[(7)] = inst_9599);
return statearr_9606;
})();var statearr_9607_9622 = state_9604__$1;(statearr_9607_9622[(2)] = null);
(statearr_9607_9622[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9605 === (6)))
{var state_9604__$1 = state_9604;var statearr_9608_9623 = state_9604__$1;(statearr_9608_9623[(2)] = null);
(statearr_9608_9623[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9605 === (5)))
{var inst_9595 = cljs.core.async.put_BANG_.call(null,loaded_chan,"all done!");var inst_9596 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"load-count","load-count",128885706),(0));var state_9604__$1 = (function (){var statearr_9609 = state_9604;(statearr_9609[(8)] = inst_9595);
return statearr_9609;
})();var statearr_9610_9624 = state_9604__$1;(statearr_9610_9624[(2)] = inst_9596);
(statearr_9610_9624[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9605 === (4)))
{var inst_9589 = (state_9604[(2)]);var inst_9590 = (function (){var load = inst_9589;return ((function (load,inst_9589,state_val_9605,c__6367__auto__,load_chan,loaded_chan,___$1){
return (function (p1__9541_SHARP_){return (p1__9541_SHARP_ + (1));
});
;})(load,inst_9589,state_val_9605,c__6367__auto__,load_chan,loaded_chan,___$1))
})();var inst_9591 = om.core.update_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"load-count","load-count",128885706),inst_9590);var inst_9592 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"load-count","load-count",128885706));var inst_9593 = cljs.core._EQ_.call(null,inst_9592,(20));var state_9604__$1 = (function (){var statearr_9611 = state_9604;(statearr_9611[(9)] = inst_9591);
return statearr_9611;
})();if(inst_9593)
{var statearr_9612_9625 = state_9604__$1;(statearr_9612_9625[(1)] = (5));
} else
{var statearr_9613_9626 = state_9604__$1;(statearr_9613_9626[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9605 === (3)))
{var inst_9602 = (state_9604[(2)]);var state_9604__$1 = state_9604;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9604__$1,inst_9602);
} else
{if((state_val_9605 === (2)))
{var state_9604__$1 = state_9604;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9604__$1,(4),load_chan);
} else
{if((state_val_9605 === (1)))
{var state_9604__$1 = state_9604;var statearr_9614_9627 = state_9604__$1;(statearr_9614_9627[(2)] = null);
(statearr_9614_9627[(1)] = (2));
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
var state_machine__6353__auto____0 = (function (){var statearr_9618 = [null,null,null,null,null,null,null,null,null,null];(statearr_9618[(0)] = state_machine__6353__auto__);
(statearr_9618[(1)] = (1));
return statearr_9618;
});
var state_machine__6353__auto____1 = (function (state_9604){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_9604);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e9619){if((e9619 instanceof Object))
{var ex__6356__auto__ = e9619;var statearr_9620_9628 = state_9604;(statearr_9620_9628[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9604);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e9619;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9629 = state_9604;
state_9604 = G__9629;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_9604){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_9604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto__,load_chan,loaded_chan,___$1))
})();var state__6369__auto__ = (function (){var statearr_9621 = f__6368__auto__.call(null);(statearr_9621[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto__);
return statearr_9621;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto__,load_chan,loaded_chan,___$1))
);
return c__6367__auto__;
});
photosure.blog.t9582.prototype.om$core$IInitState$ = true;
photosure.blog.t9582.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"load-chan","load-chan",342107614),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"load-count","load-count",128885706),(0),new cljs.core.Keyword(null,"iter","iter",1308240283),(20)], null);
});
photosure.blog.t9582.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9584){var self__ = this;
var _9584__$1 = this;return self__.meta9583;
});
photosure.blog.t9582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9584,meta9583__$1){var self__ = this;
var _9584__$1 = this;return (new photosure.blog.t9582(self__.owner,self__.posts,self__.posts_view,meta9583__$1));
});
photosure.blog.__GT_t9582 = (function __GT_t9582(owner__$1,posts__$1,posts_view__$1,meta9583){return (new photosure.blog.t9582(owner__$1,posts__$1,posts_view__$1,meta9583));
});
}
return (new photosure.blog.t9582(owner,posts,posts_view,null));
});
photosure.blog.set_posts = (function set_posts(app,page){return photosure.util.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),("api/posts/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(page)),new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),(function (_){return om.core.update_BANG_.call(null,app,new cljs.core.Keyword(null,"posts","posts",760043164),_);
})], null));
});
photosure.blog.page_top_btn = (function page_top_btn(page,owner){if(typeof photosure.blog.t9635 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t9635 = (function (owner,page,page_top_btn,meta9636){
this.owner = owner;
this.page = page;
this.page_top_btn = page_top_btn;
this.meta9636 = meta9636;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t9635.cljs$lang$type = true;
photosure.blog.t9635.cljs$lang$ctorStr = "photosure.blog/t9635";
photosure.blog.t9635.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t9635");
});
photosure.blog.t9635.prototype.om$core$IRenderState$ = true;
photosure.blog.t9635.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__9638){var self__ = this;
var map__9639 = p__9638;var map__9639__$1 = ((cljs.core.seq_QMARK_.call(null,map__9639))?cljs.core.apply.call(null,cljs.core.hash_map,map__9639):map__9639);var nav_chan = cljs.core.get.call(null,map__9639__$1,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980));var className = cljs.core.get.call(null,map__9639__$1,new cljs.core.Keyword(null,"className","className",-1983287057));var text = cljs.core.get.call(null,map__9639__$1,new cljs.core.Keyword(null,"text","text",-1790561697));var this$__$1 = this;return React.DOM.div({"onClick": ((function (this$__$1,map__9639,map__9639__$1,nav_chan,className,text){
return (function (_){return cljs.core.async.put_BANG_.call(null,nav_chan,"top");
});})(this$__$1,map__9639,map__9639__$1,nav_chan,className,text))
, "onMouseLeave": ((function (this$__$1,map__9639,map__9639__$1,nav_chan,className,text){
return (function (_){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"text","text",-1790561697),(self__.page + (1)));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"className","className",-1983287057),"page");
return setTimeout(((function (this$__$1,map__9639,map__9639__$1,nav_chan,className,text){
return (function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"className","className",-1983287057),"page fadein");
});})(this$__$1,map__9639,map__9639__$1,nav_chan,className,text))
,(50));
});})(this$__$1,map__9639,map__9639__$1,nav_chan,className,text))
, "onMouseEnter": ((function (this$__$1,map__9639,map__9639__$1,nav_chan,className,text){
return (function (_){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"text","text",-1790561697),goog.string.unescapeEntities("&#xe600"));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"className","className",-1983287057),"icon");
return setTimeout(((function (this$__$1,map__9639,map__9639__$1,nav_chan,className,text){
return (function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"className","className",-1983287057),"icon fadein");
});})(this$__$1,map__9639,map__9639__$1,nav_chan,className,text))
,(50));
});})(this$__$1,map__9639,map__9639__$1,nav_chan,className,text))
, "className": "top"},React.DOM.p({"className": className, "id": "change"},text));
});
photosure.blog.t9635.prototype.om$core$IInitState$ = true;
photosure.blog.t9635.prototype.om$core$IInitState$init_state$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"page fadein"], null);
});
photosure.blog.t9635.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9637){var self__ = this;
var _9637__$1 = this;return self__.meta9636;
});
photosure.blog.t9635.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9637,meta9636__$1){var self__ = this;
var _9637__$1 = this;return (new photosure.blog.t9635(self__.owner,self__.page,self__.page_top_btn,meta9636__$1));
});
photosure.blog.__GT_t9635 = (function __GT_t9635(owner__$1,page__$1,page_top_btn__$1,meta9636){return (new photosure.blog.t9635(owner__$1,page__$1,page_top_btn__$1,meta9636));
});
}
return (new photosure.blog.t9635(owner,page,page_top_btn,null));
});
photosure.blog.posts_nav = (function posts_nav(app,owner){if(typeof photosure.blog.t9645 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t9645 = (function (owner,app,posts_nav,meta9646){
this.owner = owner;
this.app = app;
this.posts_nav = posts_nav;
this.meta9646 = meta9646;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t9645.cljs$lang$type = true;
photosure.blog.t9645.cljs$lang$ctorStr = "photosure.blog/t9645";
photosure.blog.t9645.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t9645");
});
photosure.blog.t9645.prototype.om$core$IRenderState$ = true;
photosure.blog.t9645.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__9648){var self__ = this;
var map__9649 = p__9648;var map__9649__$1 = ((cljs.core.seq_QMARK_.call(null,map__9649))?cljs.core.apply.call(null,cljs.core.hash_map,map__9649):map__9649);var nav_chan = cljs.core.get.call(null,map__9649__$1,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980));var ___$1 = this;return React.DOM.div({"className": "posts-nav"},React.DOM.div({"onClick": ((function (___$1,map__9649,map__9649__$1,nav_chan){
return (function (___$2){return cljs.core.async.put_BANG_.call(null,nav_chan,"prev");
});})(___$1,map__9649,map__9649__$1,nav_chan))
, "className": ("prev"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.app),(0)))?" disabled":null)))},React.DOM.p({"className": "icon"},goog.string.unescapeEntities("&#xe602"))),om.core.build.call(null,photosure.blog.page_top_btn,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980),nav_chan,new cljs.core.Keyword(null,"text","text",-1790561697),(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.app) + (1))], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.app) + (1))], null)], null)),React.DOM.div({"onClick": ((function (___$1,map__9649,map__9649__$1,nav_chan){
return (function (___$2){return cljs.core.async.put_BANG_.call(null,nav_chan,"next");
});})(___$1,map__9649,map__9649__$1,nav_chan))
, "className": "next"},React.DOM.p({"className": "icon"},goog.string.unescapeEntities("&#xe601"))));
});
photosure.blog.t9645.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9647){var self__ = this;
var _9647__$1 = this;return self__.meta9646;
});
photosure.blog.t9645.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9647,meta9646__$1){var self__ = this;
var _9647__$1 = this;return (new photosure.blog.t9645(self__.owner,self__.app,self__.posts_nav,meta9646__$1));
});
photosure.blog.__GT_t9645 = (function __GT_t9645(owner__$1,app__$1,posts_nav__$1,meta9646){return (new photosure.blog.t9645(owner__$1,app__$1,posts_nav__$1,meta9646));
});
}
return (new photosure.blog.t9645(owner,app,posts_nav,null));
});
photosure.blog.blog = (function blog(app,owner){if(typeof photosure.blog.t9739 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t9739 = (function (owner,app,blog,meta9740){
this.owner = owner;
this.app = app;
this.blog = blog;
this.meta9740 = meta9740;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t9739.cljs$lang$type = true;
photosure.blog.t9739.cljs$lang$ctorStr = "photosure.blog/t9739";
photosure.blog.t9739.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t9739");
});
photosure.blog.t9739.prototype.om$core$IRenderState$ = true;
photosure.blog.t9739.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__9742){var self__ = this;
var map__9743 = p__9742;var map__9743__$1 = ((cljs.core.seq_QMARK_.call(null,map__9743))?cljs.core.apply.call(null,cljs.core.hash_map,map__9743):map__9743);var scroll_top = cljs.core.get.call(null,map__9743__$1,new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100));var nav_chan = cljs.core.get.call(null,map__9743__$1,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980));var loaded_chan = cljs.core.get.call(null,map__9743__$1,new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448));var loaded = cljs.core.get.call(null,map__9743__$1,new cljs.core.Keyword(null,"loaded","loaded",-1246482293));var this$__$1 = this;return React.DOM.div({"id": "blog-gallery-container"},om.core.build.call(null,photosure.scrolldiv.scroll_div,self__.app,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"blog-gallery",new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),(0)], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),("blog-gallery"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(loaded)?" loaded":null))),new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),scroll_top], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.core.build.call(null,photosure.blog.posts_view,new cljs.core.Keyword(null,"posts","posts",760043164).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448),loaded_chan], null)], null)),om.core.build.call(null,photosure.blog.posts_nav,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980),nav_chan], null)], null))], null)], null)], null)));
});
photosure.blog.t9739.prototype.om$core$IWillMount$ = true;
photosure.blog.t9739.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;photosure.blog.set_posts.call(null,self__.app,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.app));
var loaded_chan_9826 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448));var c__6367__auto___9827 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto___9827,loaded_chan_9826,___$1){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto___9827,loaded_chan_9826,___$1){
return (function (state_9752){var state_val_9753 = (state_9752[(1)]);if((state_val_9753 === (4)))
{var inst_9746 = (state_9752[(2)]);var inst_9747 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true);var state_9752__$1 = (function (){var statearr_9754 = state_9752;(statearr_9754[(7)] = inst_9746);
(statearr_9754[(8)] = inst_9747);
return statearr_9754;
})();var statearr_9755_9828 = state_9752__$1;(statearr_9755_9828[(2)] = null);
(statearr_9755_9828[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9753 === (3)))
{var inst_9750 = (state_9752[(2)]);var state_9752__$1 = state_9752;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9752__$1,inst_9750);
} else
{if((state_val_9753 === (2)))
{var state_9752__$1 = state_9752;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9752__$1,(4),loaded_chan_9826);
} else
{if((state_val_9753 === (1)))
{var state_9752__$1 = state_9752;var statearr_9756_9829 = state_9752__$1;(statearr_9756_9829[(2)] = null);
(statearr_9756_9829[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6367__auto___9827,loaded_chan_9826,___$1))
;return ((function (switch__6352__auto__,c__6367__auto___9827,loaded_chan_9826,___$1){
return (function() {
var state_machine__6353__auto__ = null;
var state_machine__6353__auto____0 = (function (){var statearr_9760 = [null,null,null,null,null,null,null,null,null];(statearr_9760[(0)] = state_machine__6353__auto__);
(statearr_9760[(1)] = (1));
return statearr_9760;
});
var state_machine__6353__auto____1 = (function (state_9752){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_9752);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e9761){if((e9761 instanceof Object))
{var ex__6356__auto__ = e9761;var statearr_9762_9830 = state_9752;(statearr_9762_9830[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9752);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e9761;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9831 = state_9752;
state_9752 = G__9831;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_9752){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_9752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto___9827,loaded_chan_9826,___$1))
})();var state__6369__auto__ = (function (){var statearr_9763 = f__6368__auto__.call(null);(statearr_9763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto___9827);
return statearr_9763;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto___9827,loaded_chan_9826,___$1))
);
var nav_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980));var c__6367__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto__,nav_chan,___$1){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto__,nav_chan,___$1){
return (function (state_9799){var state_val_9800 = (state_9799[(1)]);if((state_val_9800 === (7)))
{var inst_9794 = (state_9799[(2)]);var state_9799__$1 = (function (){var statearr_9801 = state_9799;(statearr_9801[(7)] = inst_9794);
return statearr_9801;
})();var statearr_9802_9832 = state_9799__$1;(statearr_9802_9832[(2)] = null);
(statearr_9802_9832[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9800 === (1)))
{var state_9799__$1 = state_9799;var statearr_9803_9833 = state_9799__$1;(statearr_9803_9833[(2)] = null);
(statearr_9803_9833[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9800 === (4)))
{var inst_9766 = (state_9799[(8)]);var inst_9766__$1 = (state_9799[(2)]);var inst_9767 = cljs.core._EQ_.call(null,inst_9766__$1,"prev");var state_9799__$1 = (function (){var statearr_9804 = state_9799;(statearr_9804[(8)] = inst_9766__$1);
return statearr_9804;
})();if(inst_9767)
{var statearr_9805_9834 = state_9799__$1;(statearr_9805_9834[(1)] = (5));
} else
{var statearr_9806_9835 = state_9799__$1;(statearr_9806_9835[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9800 === (13)))
{var inst_9790 = (state_9799[(2)]);var state_9799__$1 = state_9799;var statearr_9807_9836 = state_9799__$1;(statearr_9807_9836[(2)] = inst_9790);
(statearr_9807_9836[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9800 === (6)))
{var inst_9766 = (state_9799[(8)]);var inst_9776 = cljs.core._EQ_.call(null,inst_9766,"next");var state_9799__$1 = state_9799;if(inst_9776)
{var statearr_9808_9837 = state_9799__$1;(statearr_9808_9837[(1)] = (8));
} else
{var statearr_9809_9838 = state_9799__$1;(statearr_9809_9838[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9800 === (3)))
{var inst_9797 = (state_9799[(2)]);var state_9799__$1 = state_9799;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9799__$1,inst_9797);
} else
{if((state_val_9800 === (12)))
{var state_9799__$1 = state_9799;var statearr_9810_9839 = state_9799__$1;(statearr_9810_9839[(2)] = null);
(statearr_9810_9839[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9800 === (2)))
{var state_9799__$1 = state_9799;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9799__$1,(4),nav_chan);
} else
{if((state_val_9800 === (11)))
{var inst_9787 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),(0));var state_9799__$1 = state_9799;var statearr_9811_9840 = state_9799__$1;(statearr_9811_9840[(2)] = inst_9787);
(statearr_9811_9840[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9800 === (9)))
{var inst_9766 = (state_9799[(8)]);var inst_9785 = cljs.core._EQ_.call(null,inst_9766,"top");var state_9799__$1 = state_9799;if(inst_9785)
{var statearr_9812_9841 = state_9799__$1;(statearr_9812_9841[(1)] = (11));
} else
{var statearr_9813_9842 = state_9799__$1;(statearr_9813_9842[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9800 === (5)))
{var inst_9766 = (state_9799[(8)]);var inst_9769 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),false);var inst_9770 = (function (){var cmd = inst_9766;return ((function (cmd,inst_9766,inst_9769,state_val_9800,c__6367__auto__,nav_chan,___$1){
return (function (p1__9650_SHARP_){return (p1__9650_SHARP_ - (1));
});
;})(cmd,inst_9766,inst_9769,state_val_9800,c__6367__auto__,nav_chan,___$1))
})();var inst_9771 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"page","page",849072397),inst_9770);var inst_9772 = cljs.core.deref.call(null,self__.app);var inst_9773 = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(inst_9772);var inst_9774 = photosure.blog.set_posts.call(null,self__.app,inst_9773);var state_9799__$1 = (function (){var statearr_9814 = state_9799;(statearr_9814[(9)] = inst_9771);
(statearr_9814[(10)] = inst_9769);
return statearr_9814;
})();var statearr_9815_9843 = state_9799__$1;(statearr_9815_9843[(2)] = inst_9774);
(statearr_9815_9843[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9800 === (10)))
{var inst_9792 = (state_9799[(2)]);var state_9799__$1 = state_9799;var statearr_9816_9844 = state_9799__$1;(statearr_9816_9844[(2)] = inst_9792);
(statearr_9816_9844[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9800 === (8)))
{var inst_9766 = (state_9799[(8)]);var inst_9778 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),false);var inst_9779 = (function (){var cmd = inst_9766;return ((function (cmd,inst_9766,inst_9778,state_val_9800,c__6367__auto__,nav_chan,___$1){
return (function (p1__9651_SHARP_){return (p1__9651_SHARP_ + (1));
});
;})(cmd,inst_9766,inst_9778,state_val_9800,c__6367__auto__,nav_chan,___$1))
})();var inst_9780 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"page","page",849072397),inst_9779);var inst_9781 = cljs.core.deref.call(null,self__.app);var inst_9782 = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(inst_9781);var inst_9783 = photosure.blog.set_posts.call(null,self__.app,inst_9782);var state_9799__$1 = (function (){var statearr_9817 = state_9799;(statearr_9817[(11)] = inst_9778);
(statearr_9817[(12)] = inst_9780);
return statearr_9817;
})();var statearr_9818_9845 = state_9799__$1;(statearr_9818_9845[(2)] = inst_9783);
(statearr_9818_9845[(1)] = (10));
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
var state_machine__6353__auto____0 = (function (){var statearr_9822 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9822[(0)] = state_machine__6353__auto__);
(statearr_9822[(1)] = (1));
return statearr_9822;
});
var state_machine__6353__auto____1 = (function (state_9799){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_9799);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e9823){if((e9823 instanceof Object))
{var ex__6356__auto__ = e9823;var statearr_9824_9846 = state_9799;(statearr_9824_9846[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9799);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e9823;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9847 = state_9799;
state_9799 = G__9847;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_9799){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_9799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto__,nav_chan,___$1))
})();var state__6369__auto__ = (function (){var statearr_9825 = f__6368__auto__.call(null);(statearr_9825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto__);
return statearr_9825;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto__,nav_chan,___$1))
);
return c__6367__auto__;
});
photosure.blog.t9739.prototype.om$core$IInitState$ = true;
photosure.blog.t9739.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),false,new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),(0)], null);
});
photosure.blog.t9739.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9741){var self__ = this;
var _9741__$1 = this;return self__.meta9740;
});
photosure.blog.t9739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9741,meta9740__$1){var self__ = this;
var _9741__$1 = this;return (new photosure.blog.t9739(self__.owner,self__.app,self__.blog,meta9740__$1));
});
photosure.blog.__GT_t9739 = (function __GT_t9739(owner__$1,app__$1,blog__$1,meta9740){return (new photosure.blog.t9739(owner__$1,app__$1,blog__$1,meta9740));
});
}
return (new photosure.blog.t9739(owner,app,blog,null));
});
photosure.blog.render = (function render(){return om.core.root.call(null,photosure.blog.blog,photosure.blog.app_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("dynamic-content")], null));
});

//# sourceMappingURL=blog.js.map