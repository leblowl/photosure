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
photosure.blog.text_view = (function text_view(caption,owner){if(typeof photosure.blog.t17263 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t17263 = (function (owner,caption,text_view,meta17264){
this.owner = owner;
this.caption = caption;
this.text_view = text_view;
this.meta17264 = meta17264;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t17263.cljs$lang$type = true;
photosure.blog.t17263.cljs$lang$ctorStr = "photosure.blog/t17263";
photosure.blog.t17263.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t17263");
});
photosure.blog.t17263.prototype.om$core$IRender$ = true;
photosure.blog.t17263.prototype.om$core$IRender$render$arity$1 = (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return React.DOM.div({"dangerouslySetInnerHTML": {"__html": self__.caption}, "className": "caption"},null);
});
photosure.blog.t17263.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17265){var self__ = this;
var _17265__$1 = this;return self__.meta17264;
});
photosure.blog.t17263.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17265,meta17264__$1){var self__ = this;
var _17265__$1 = this;return (new photosure.blog.t17263(self__.owner,self__.caption,self__.text_view,meta17264__$1));
});
photosure.blog.__GT_t17263 = (function __GT_t17263(owner__$1,caption__$1,text_view__$1,meta17264){return (new photosure.blog.t17263(owner__$1,caption__$1,text_view__$1,meta17264));
});
}
return (new photosure.blog.t17263(owner,caption,text_view,null));
});
photosure.blog.answer_post_view = (function answer_post_view(p__17266){var map__17271 = p__17266;var map__17271__$1 = ((cljs.core.seq_QMARK_.call(null,map__17271))?cljs.core.apply.call(null,cljs.core.hash_map,map__17271):map__17271);var id = cljs.core.get.call(null,map__17271__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var asking_name = cljs.core.get.call(null,map__17271__$1,new cljs.core.Keyword(null,"asking_name","asking_name",728401374));var asking_url = cljs.core.get.call(null,map__17271__$1,new cljs.core.Keyword(null,"asking_url","asking_url",-384387495));var question = cljs.core.get.call(null,map__17271__$1,new cljs.core.Keyword(null,"question","question",-1411720117));var answer = cljs.core.get.call(null,map__17271__$1,new cljs.core.Keyword(null,"answer","answer",-742633163));if(typeof photosure.blog.t17272 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t17272 = (function (answer,question,asking_url,asking_name,id,map__17271,p__17266,answer_post_view,meta17273){
this.answer = answer;
this.question = question;
this.asking_url = asking_url;
this.asking_name = asking_name;
this.id = id;
this.map__17271 = map__17271;
this.p__17266 = p__17266;
this.answer_post_view = answer_post_view;
this.meta17273 = meta17273;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t17272.cljs$lang$type = true;
photosure.blog.t17272.cljs$lang$ctorStr = "photosure.blog/t17272";
photosure.blog.t17272.cljs$lang$ctorPrWriter = ((function (map__17271,map__17271__$1,id,asking_name,asking_url,question,answer){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t17272");
});})(map__17271,map__17271__$1,id,asking_name,asking_url,question,answer))
;
photosure.blog.t17272.prototype.om$core$IRender$ = true;
photosure.blog.t17272.prototype.om$core$IRender$render$arity$1 = ((function (map__17271,map__17271__$1,id,asking_name,asking_url,question,answer){
return (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return React.DOM.div({"className": "post", "id": self__.id},React.DOM.div(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.asking_name)+" @ "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.asking_url)+": "),React.DOM.div({})));
});})(map__17271,map__17271__$1,id,asking_name,asking_url,question,answer))
;
photosure.blog.t17272.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__17271,map__17271__$1,id,asking_name,asking_url,question,answer){
return (function (_17274){var self__ = this;
var _17274__$1 = this;return self__.meta17273;
});})(map__17271,map__17271__$1,id,asking_name,asking_url,question,answer))
;
photosure.blog.t17272.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__17271,map__17271__$1,id,asking_name,asking_url,question,answer){
return (function (_17274,meta17273__$1){var self__ = this;
var _17274__$1 = this;return (new photosure.blog.t17272(self__.answer,self__.question,self__.asking_url,self__.asking_name,self__.id,self__.map__17271,self__.p__17266,self__.answer_post_view,meta17273__$1));
});})(map__17271,map__17271__$1,id,asking_name,asking_url,question,answer))
;
photosure.blog.__GT_t17272 = ((function (map__17271,map__17271__$1,id,asking_name,asking_url,question,answer){
return (function __GT_t17272(answer__$1,question__$1,asking_url__$1,asking_name__$1,id__$1,map__17271__$2,p__17266__$1,answer_post_view__$1,meta17273){return (new photosure.blog.t17272(answer__$1,question__$1,asking_url__$1,asking_name__$1,id__$1,map__17271__$2,p__17266__$1,answer_post_view__$1,meta17273));
});})(map__17271,map__17271__$1,id,asking_name,asking_url,question,answer))
;
}
return (new photosure.blog.t17272(answer,question,asking_url,asking_name,id,map__17271__$1,p__17266,answer_post_view,null));
});
photosure.blog.text_post_view = (function text_post_view(p__17275,owner){var map__17280 = p__17275;var map__17280__$1 = ((cljs.core.seq_QMARK_.call(null,map__17280))?cljs.core.apply.call(null,cljs.core.hash_map,map__17280):map__17280);var id = cljs.core.get.call(null,map__17280__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var title = cljs.core.get.call(null,map__17280__$1,new cljs.core.Keyword(null,"title","title",636505583));var body = cljs.core.get.call(null,map__17280__$1,new cljs.core.Keyword(null,"body","body",-2049205669));if(typeof photosure.blog.t17281 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t17281 = (function (body,title,id,map__17280,owner,p__17275,text_post_view,meta17282){
this.body = body;
this.title = title;
this.id = id;
this.map__17280 = map__17280;
this.owner = owner;
this.p__17275 = p__17275;
this.text_post_view = text_post_view;
this.meta17282 = meta17282;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t17281.cljs$lang$type = true;
photosure.blog.t17281.cljs$lang$ctorStr = "photosure.blog/t17281";
photosure.blog.t17281.cljs$lang$ctorPrWriter = ((function (map__17280,map__17280__$1,id,title,body){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t17281");
});})(map__17280,map__17280__$1,id,title,body))
;
photosure.blog.t17281.prototype.om$core$IRender$ = true;
photosure.blog.t17281.prototype.om$core$IRender$render$arity$1 = ((function (map__17280,map__17280__$1,id,title,body){
return (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return React.DOM.div({"className": "post", "id": self__.id},React.DOM.h2({"className": "blog-title"},self__.title),om.core.build.call(null,photosure.blog.text_view,self__.body));
});})(map__17280,map__17280__$1,id,title,body))
;
photosure.blog.t17281.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__17280,map__17280__$1,id,title,body){
return (function (_17283){var self__ = this;
var _17283__$1 = this;return self__.meta17282;
});})(map__17280,map__17280__$1,id,title,body))
;
photosure.blog.t17281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__17280,map__17280__$1,id,title,body){
return (function (_17283,meta17282__$1){var self__ = this;
var _17283__$1 = this;return (new photosure.blog.t17281(self__.body,self__.title,self__.id,self__.map__17280,self__.owner,self__.p__17275,self__.text_post_view,meta17282__$1));
});})(map__17280,map__17280__$1,id,title,body))
;
photosure.blog.__GT_t17281 = ((function (map__17280,map__17280__$1,id,title,body){
return (function __GT_t17281(body__$1,title__$1,id__$1,map__17280__$2,owner__$1,p__17275__$1,text_post_view__$1,meta17282){return (new photosure.blog.t17281(body__$1,title__$1,id__$1,map__17280__$2,owner__$1,p__17275__$1,text_post_view__$1,meta17282));
});})(map__17280,map__17280__$1,id,title,body))
;
}
return (new photosure.blog.t17281(body,title,id,map__17280__$1,owner,p__17275,text_post_view,null));
});
photosure.blog.photo_post_view = (function photo_post_view(p__17284,owner){var map__17291 = p__17284;var map__17291__$1 = ((cljs.core.seq_QMARK_.call(null,map__17291))?cljs.core.apply.call(null,cljs.core.hash_map,map__17291):map__17291);var id = cljs.core.get.call(null,map__17291__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var photos = cljs.core.get.call(null,map__17291__$1,new cljs.core.Keyword(null,"photos","photos",11691538));var caption = cljs.core.get.call(null,map__17291__$1,new cljs.core.Keyword(null,"caption","caption",-855383902));if(typeof photosure.blog.t17292 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t17292 = (function (caption,photos,id,map__17291,owner,p__17284,photo_post_view,meta17293){
this.caption = caption;
this.photos = photos;
this.id = id;
this.map__17291 = map__17291;
this.owner = owner;
this.p__17284 = p__17284;
this.photo_post_view = photo_post_view;
this.meta17293 = meta17293;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t17292.cljs$lang$type = true;
photosure.blog.t17292.cljs$lang$ctorStr = "photosure.blog/t17292";
photosure.blog.t17292.cljs$lang$ctorPrWriter = ((function (map__17291,map__17291__$1,id,photos,caption){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t17292");
});})(map__17291,map__17291__$1,id,photos,caption))
;
photosure.blog.t17292.prototype.om$core$IRenderState$ = true;
photosure.blog.t17292.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__17291,map__17291__$1,id,photos,caption){
return (function (this$,p__17295){var self__ = this;
var map__17296 = p__17295;var map__17296__$1 = ((cljs.core.seq_QMARK_.call(null,map__17296))?cljs.core.apply.call(null,cljs.core.hash_map,map__17296):map__17296);var loaded = cljs.core.get.call(null,map__17296__$1,new cljs.core.Keyword(null,"loaded","loaded",-1246482293));var this$__$1 = this;return React.DOM.div({"className": "post", "id": self__.id},cljs.core.apply.call(null,om.dom.div,{"className": ("blog-photo")},React.DOM.div({"className": ("loader "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not.call(null,loaded))?"on":"off"))), "id": "blah"}),cljs.core.map.call(null,((function (this$__$1,map__17296,map__17296__$1,loaded,map__17291,map__17291__$1,id,photos,caption){
return (function (photo){return React.DOM.img({"onLoad": ((function (this$__$1,map__17296,map__17296__$1,loaded,map__17291,map__17291__$1,id,photos,caption){
return (function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true);
});})(this$__$1,map__17296,map__17296__$1,loaded,map__17291,map__17291__$1,id,photos,caption))
, "className": ("blog-photo-img"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(loaded)?" loaded":null))), "src": photo});
});})(this$__$1,map__17296,map__17296__$1,loaded,map__17291,map__17291__$1,id,photos,caption))
,self__.photos)),om.core.build.call(null,photosure.blog.text_view,self__.caption));
});})(map__17291,map__17291__$1,id,photos,caption))
;
photosure.blog.t17292.prototype.om$core$IWillReceiveProps$ = true;
photosure.blog.t17292.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = ((function (map__17291,map__17291__$1,id,photos,caption){
return (function (this$,next_props){var self__ = this;
var this$__$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),false);
});})(map__17291,map__17291__$1,id,photos,caption))
;
photosure.blog.t17292.prototype.om$core$IInitState$ = true;
photosure.blog.t17292.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__17291,map__17291__$1,id,photos,caption){
return (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),false], null);
});})(map__17291,map__17291__$1,id,photos,caption))
;
photosure.blog.t17292.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__17291,map__17291__$1,id,photos,caption){
return (function (_17294){var self__ = this;
var _17294__$1 = this;return self__.meta17293;
});})(map__17291,map__17291__$1,id,photos,caption))
;
photosure.blog.t17292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__17291,map__17291__$1,id,photos,caption){
return (function (_17294,meta17293__$1){var self__ = this;
var _17294__$1 = this;return (new photosure.blog.t17292(self__.caption,self__.photos,self__.id,self__.map__17291,self__.owner,self__.p__17284,self__.photo_post_view,meta17293__$1));
});})(map__17291,map__17291__$1,id,photos,caption))
;
photosure.blog.__GT_t17292 = ((function (map__17291,map__17291__$1,id,photos,caption){
return (function __GT_t17292(caption__$1,photos__$1,id__$1,map__17291__$2,owner__$1,p__17284__$1,photo_post_view__$1,meta17293){return (new photosure.blog.t17292(caption__$1,photos__$1,id__$1,map__17291__$2,owner__$1,p__17284__$1,photo_post_view__$1,meta17293));
});})(map__17291,map__17291__$1,id,photos,caption))
;
}
return (new photosure.blog.t17292(caption,photos,id,map__17291__$1,owner,p__17284,photo_post_view,null));
});
photosure.blog.post_view = (function post_view(p__17297,owner){var map__17302 = p__17297;var map__17302__$1 = ((cljs.core.seq_QMARK_.call(null,map__17302))?cljs.core.apply.call(null,cljs.core.hash_map,map__17302):map__17302);var post = map__17302__$1;var type = cljs.core.get.call(null,map__17302__$1,new cljs.core.Keyword(null,"type","type",1174270348));if(typeof photosure.blog.t17303 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t17303 = (function (type,post,map__17302,owner,p__17297,post_view,meta17304){
this.type = type;
this.post = post;
this.map__17302 = map__17302;
this.owner = owner;
this.p__17297 = p__17297;
this.post_view = post_view;
this.meta17304 = meta17304;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t17303.cljs$lang$type = true;
photosure.blog.t17303.cljs$lang$ctorStr = "photosure.blog/t17303";
photosure.blog.t17303.cljs$lang$ctorPrWriter = ((function (map__17302,map__17302__$1,post,type){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t17303");
});})(map__17302,map__17302__$1,post,type))
;
photosure.blog.t17303.prototype.om$core$IRender$ = true;
photosure.blog.t17303.prototype.om$core$IRender$render$arity$1 = ((function (map__17302,map__17302__$1,post,type){
return (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core._EQ_.call(null,self__.type,"photo"))
{return om.core.build.call(null,photosure.blog.photo_post_view,self__.post);
} else
{return om.core.build.call(null,photosure.blog.text_post_view,self__.post);
}
});})(map__17302,map__17302__$1,post,type))
;
photosure.blog.t17303.prototype.om$core$IDidUpdate$ = true;
photosure.blog.t17303.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__17302,map__17302__$1,post,type){
return (function (this$,prev_props,prev_state){var self__ = this;
var this$__$1 = this;return cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"load-chan","load-chan",342107614)),"done!");
});})(map__17302,map__17302__$1,post,type))
;
photosure.blog.t17303.prototype.om$core$IDidMount$ = true;
photosure.blog.t17303.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__17302,map__17302__$1,post,type){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"load-chan","load-chan",342107614)),"done!");
});})(map__17302,map__17302__$1,post,type))
;
photosure.blog.t17303.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__17302,map__17302__$1,post,type){
return (function (_17305){var self__ = this;
var _17305__$1 = this;return self__.meta17304;
});})(map__17302,map__17302__$1,post,type))
;
photosure.blog.t17303.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__17302,map__17302__$1,post,type){
return (function (_17305,meta17304__$1){var self__ = this;
var _17305__$1 = this;return (new photosure.blog.t17303(self__.type,self__.post,self__.map__17302,self__.owner,self__.p__17297,self__.post_view,meta17304__$1));
});})(map__17302,map__17302__$1,post,type))
;
photosure.blog.__GT_t17303 = ((function (map__17302,map__17302__$1,post,type){
return (function __GT_t17303(type__$1,post__$1,map__17302__$2,owner__$1,p__17297__$1,post_view__$1,meta17304){return (new photosure.blog.t17303(type__$1,post__$1,map__17302__$2,owner__$1,p__17297__$1,post_view__$1,meta17304));
});})(map__17302,map__17302__$1,post,type))
;
}
return (new photosure.blog.t17303(type,post,map__17302__$1,owner,p__17297,post_view,null));
});
photosure.blog.posts_view = (function posts_view(posts,owner){if(typeof photosure.blog.t17347 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t17347 = (function (owner,posts,posts_view,meta17348){
this.owner = owner;
this.posts = posts;
this.posts_view = posts_view;
this.meta17348 = meta17348;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t17347.cljs$lang$type = true;
photosure.blog.t17347.cljs$lang$ctorStr = "photosure.blog/t17347";
photosure.blog.t17347.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t17347");
});
photosure.blog.t17347.prototype.om$core$IRenderState$ = true;
photosure.blog.t17347.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__17350){var self__ = this;
var map__17351 = p__17350;var map__17351__$1 = ((cljs.core.seq_QMARK_.call(null,map__17351))?cljs.core.apply.call(null,cljs.core.hash_map,map__17351):map__17351);var load_chan = cljs.core.get.call(null,map__17351__$1,new cljs.core.Keyword(null,"load-chan","load-chan",342107614));var iter = cljs.core.get.call(null,map__17351__$1,new cljs.core.Keyword(null,"iter","iter",1308240283));var this$__$1 = this;return cljs.core.apply.call(null,om.dom.div,{"id": "post-list"},om.core.build_all.call(null,photosure.blog.post_view,cljs.core.take.call(null,iter,self__.posts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"load-chan","load-chan",342107614),load_chan], null)], null)));
});
photosure.blog.t17347.prototype.om$core$IWillMount$ = true;
photosure.blog.t17347.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var load_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"load-chan","load-chan",342107614));var loaded_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448));var c__6367__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto__,load_chan,loaded_chan,___$1){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto__,load_chan,loaded_chan,___$1){
return (function (state_17369){var state_val_17370 = (state_17369[(1)]);if((state_val_17370 === (7)))
{var inst_17364 = (state_17369[(2)]);var state_17369__$1 = (function (){var statearr_17371 = state_17369;(statearr_17371[(7)] = inst_17364);
return statearr_17371;
})();var statearr_17372_17387 = state_17369__$1;(statearr_17372_17387[(2)] = null);
(statearr_17372_17387[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17370 === (6)))
{var state_17369__$1 = state_17369;var statearr_17373_17388 = state_17369__$1;(statearr_17373_17388[(2)] = null);
(statearr_17373_17388[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17370 === (5)))
{var inst_17360 = cljs.core.async.put_BANG_.call(null,loaded_chan,"all done!");var inst_17361 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"load-count","load-count",128885706),(0));var state_17369__$1 = (function (){var statearr_17374 = state_17369;(statearr_17374[(8)] = inst_17360);
return statearr_17374;
})();var statearr_17375_17389 = state_17369__$1;(statearr_17375_17389[(2)] = inst_17361);
(statearr_17375_17389[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17370 === (4)))
{var inst_17354 = (state_17369[(2)]);var inst_17355 = (function (){var load = inst_17354;return ((function (load,inst_17354,state_val_17370,c__6367__auto__,load_chan,loaded_chan,___$1){
return (function (p1__17306_SHARP_){return (p1__17306_SHARP_ + (1));
});
;})(load,inst_17354,state_val_17370,c__6367__auto__,load_chan,loaded_chan,___$1))
})();var inst_17356 = om.core.update_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"load-count","load-count",128885706),inst_17355);var inst_17357 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"load-count","load-count",128885706));var inst_17358 = cljs.core._EQ_.call(null,inst_17357,(20));var state_17369__$1 = (function (){var statearr_17376 = state_17369;(statearr_17376[(9)] = inst_17356);
return statearr_17376;
})();if(inst_17358)
{var statearr_17377_17390 = state_17369__$1;(statearr_17377_17390[(1)] = (5));
} else
{var statearr_17378_17391 = state_17369__$1;(statearr_17378_17391[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17370 === (3)))
{var inst_17367 = (state_17369[(2)]);var state_17369__$1 = state_17369;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17369__$1,inst_17367);
} else
{if((state_val_17370 === (2)))
{var state_17369__$1 = state_17369;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17369__$1,(4),load_chan);
} else
{if((state_val_17370 === (1)))
{var state_17369__$1 = state_17369;var statearr_17379_17392 = state_17369__$1;(statearr_17379_17392[(2)] = null);
(statearr_17379_17392[(1)] = (2));
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
var state_machine__6353__auto____0 = (function (){var statearr_17383 = [null,null,null,null,null,null,null,null,null,null];(statearr_17383[(0)] = state_machine__6353__auto__);
(statearr_17383[(1)] = (1));
return statearr_17383;
});
var state_machine__6353__auto____1 = (function (state_17369){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_17369);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e17384){if((e17384 instanceof Object))
{var ex__6356__auto__ = e17384;var statearr_17385_17393 = state_17369;(statearr_17385_17393[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17369);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17384;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17394 = state_17369;
state_17369 = G__17394;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_17369){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_17369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto__,load_chan,loaded_chan,___$1))
})();var state__6369__auto__ = (function (){var statearr_17386 = f__6368__auto__.call(null);(statearr_17386[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto__);
return statearr_17386;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto__,load_chan,loaded_chan,___$1))
);
return c__6367__auto__;
});
photosure.blog.t17347.prototype.om$core$IInitState$ = true;
photosure.blog.t17347.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"load-chan","load-chan",342107614),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"load-count","load-count",128885706),(0),new cljs.core.Keyword(null,"iter","iter",1308240283),(20)], null);
});
photosure.blog.t17347.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17349){var self__ = this;
var _17349__$1 = this;return self__.meta17348;
});
photosure.blog.t17347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17349,meta17348__$1){var self__ = this;
var _17349__$1 = this;return (new photosure.blog.t17347(self__.owner,self__.posts,self__.posts_view,meta17348__$1));
});
photosure.blog.__GT_t17347 = (function __GT_t17347(owner__$1,posts__$1,posts_view__$1,meta17348){return (new photosure.blog.t17347(owner__$1,posts__$1,posts_view__$1,meta17348));
});
}
return (new photosure.blog.t17347(owner,posts,posts_view,null));
});
photosure.blog.set_posts = (function set_posts(app,page){return photosure.util.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),("api/posts/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(page)),new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),(function (_){return om.core.update_BANG_.call(null,app,new cljs.core.Keyword(null,"posts","posts",760043164),_);
})], null));
});
photosure.blog.page_top_btn = (function page_top_btn(page,owner){if(typeof photosure.blog.t17400 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t17400 = (function (owner,page,page_top_btn,meta17401){
this.owner = owner;
this.page = page;
this.page_top_btn = page_top_btn;
this.meta17401 = meta17401;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t17400.cljs$lang$type = true;
photosure.blog.t17400.cljs$lang$ctorStr = "photosure.blog/t17400";
photosure.blog.t17400.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t17400");
});
photosure.blog.t17400.prototype.om$core$IRenderState$ = true;
photosure.blog.t17400.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__17403){var self__ = this;
var map__17404 = p__17403;var map__17404__$1 = ((cljs.core.seq_QMARK_.call(null,map__17404))?cljs.core.apply.call(null,cljs.core.hash_map,map__17404):map__17404);var nav_chan = cljs.core.get.call(null,map__17404__$1,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980));var className = cljs.core.get.call(null,map__17404__$1,new cljs.core.Keyword(null,"className","className",-1983287057));var text = cljs.core.get.call(null,map__17404__$1,new cljs.core.Keyword(null,"text","text",-1790561697));var this$__$1 = this;return React.DOM.div({"onClick": ((function (this$__$1,map__17404,map__17404__$1,nav_chan,className,text){
return (function (_){return cljs.core.async.put_BANG_.call(null,nav_chan,"top");
});})(this$__$1,map__17404,map__17404__$1,nav_chan,className,text))
, "onMouseLeave": ((function (this$__$1,map__17404,map__17404__$1,nav_chan,className,text){
return (function (_){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"text","text",-1790561697),(self__.page + (1)));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"className","className",-1983287057),"page");
return setTimeout(((function (this$__$1,map__17404,map__17404__$1,nav_chan,className,text){
return (function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"className","className",-1983287057),"page fadein");
});})(this$__$1,map__17404,map__17404__$1,nav_chan,className,text))
,(50));
});})(this$__$1,map__17404,map__17404__$1,nav_chan,className,text))
, "onMouseEnter": ((function (this$__$1,map__17404,map__17404__$1,nav_chan,className,text){
return (function (_){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"text","text",-1790561697),goog.string.unescapeEntities("&#xe600"));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"className","className",-1983287057),"icon");
return setTimeout(((function (this$__$1,map__17404,map__17404__$1,nav_chan,className,text){
return (function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"className","className",-1983287057),"icon fadein");
});})(this$__$1,map__17404,map__17404__$1,nav_chan,className,text))
,(50));
});})(this$__$1,map__17404,map__17404__$1,nav_chan,className,text))
, "className": "top"},React.DOM.p({"className": className, "id": "change"},text));
});
photosure.blog.t17400.prototype.om$core$IInitState$ = true;
photosure.blog.t17400.prototype.om$core$IInitState$init_state$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"page fadein"], null);
});
photosure.blog.t17400.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17402){var self__ = this;
var _17402__$1 = this;return self__.meta17401;
});
photosure.blog.t17400.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17402,meta17401__$1){var self__ = this;
var _17402__$1 = this;return (new photosure.blog.t17400(self__.owner,self__.page,self__.page_top_btn,meta17401__$1));
});
photosure.blog.__GT_t17400 = (function __GT_t17400(owner__$1,page__$1,page_top_btn__$1,meta17401){return (new photosure.blog.t17400(owner__$1,page__$1,page_top_btn__$1,meta17401));
});
}
return (new photosure.blog.t17400(owner,page,page_top_btn,null));
});
photosure.blog.posts_nav = (function posts_nav(app,owner){if(typeof photosure.blog.t17410 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t17410 = (function (owner,app,posts_nav,meta17411){
this.owner = owner;
this.app = app;
this.posts_nav = posts_nav;
this.meta17411 = meta17411;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t17410.cljs$lang$type = true;
photosure.blog.t17410.cljs$lang$ctorStr = "photosure.blog/t17410";
photosure.blog.t17410.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t17410");
});
photosure.blog.t17410.prototype.om$core$IRenderState$ = true;
photosure.blog.t17410.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__17413){var self__ = this;
var map__17414 = p__17413;var map__17414__$1 = ((cljs.core.seq_QMARK_.call(null,map__17414))?cljs.core.apply.call(null,cljs.core.hash_map,map__17414):map__17414);var nav_chan = cljs.core.get.call(null,map__17414__$1,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980));var ___$1 = this;return React.DOM.div({"className": "posts-nav"},React.DOM.div({"onClick": ((function (___$1,map__17414,map__17414__$1,nav_chan){
return (function (___$2){return cljs.core.async.put_BANG_.call(null,nav_chan,"prev");
});})(___$1,map__17414,map__17414__$1,nav_chan))
, "className": ("prev"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.app),(0)))?" disabled":null)))},React.DOM.p({"className": "icon"},goog.string.unescapeEntities("&#xe602"))),om.core.build.call(null,photosure.blog.page_top_btn,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980),nav_chan,new cljs.core.Keyword(null,"text","text",-1790561697),(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.app) + (1))], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.app) + (1))], null)], null)),React.DOM.div({"onClick": ((function (___$1,map__17414,map__17414__$1,nav_chan){
return (function (___$2){return cljs.core.async.put_BANG_.call(null,nav_chan,"next");
});})(___$1,map__17414,map__17414__$1,nav_chan))
, "className": "next"},React.DOM.p({"className": "icon"},goog.string.unescapeEntities("&#xe601"))));
});
photosure.blog.t17410.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17412){var self__ = this;
var _17412__$1 = this;return self__.meta17411;
});
photosure.blog.t17410.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17412,meta17411__$1){var self__ = this;
var _17412__$1 = this;return (new photosure.blog.t17410(self__.owner,self__.app,self__.posts_nav,meta17411__$1));
});
photosure.blog.__GT_t17410 = (function __GT_t17410(owner__$1,app__$1,posts_nav__$1,meta17411){return (new photosure.blog.t17410(owner__$1,app__$1,posts_nav__$1,meta17411));
});
}
return (new photosure.blog.t17410(owner,app,posts_nav,null));
});
photosure.blog.blog = (function blog(app,owner){if(typeof photosure.blog.t17504 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t17504 = (function (owner,app,blog,meta17505){
this.owner = owner;
this.app = app;
this.blog = blog;
this.meta17505 = meta17505;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t17504.cljs$lang$type = true;
photosure.blog.t17504.cljs$lang$ctorStr = "photosure.blog/t17504";
photosure.blog.t17504.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t17504");
});
photosure.blog.t17504.prototype.om$core$IRenderState$ = true;
photosure.blog.t17504.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__17507){var self__ = this;
var map__17508 = p__17507;var map__17508__$1 = ((cljs.core.seq_QMARK_.call(null,map__17508))?cljs.core.apply.call(null,cljs.core.hash_map,map__17508):map__17508);var scroll_top = cljs.core.get.call(null,map__17508__$1,new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100));var nav_chan = cljs.core.get.call(null,map__17508__$1,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980));var loaded_chan = cljs.core.get.call(null,map__17508__$1,new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448));var loaded = cljs.core.get.call(null,map__17508__$1,new cljs.core.Keyword(null,"loaded","loaded",-1246482293));var this$__$1 = this;return React.DOM.div({"id": "blog-gallery-container"},om.core.build.call(null,photosure.scrolldiv.scroll_div,self__.app,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"blog-gallery",new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),(0)], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),("blog-gallery"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(loaded)?" loaded":null))),new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),scroll_top], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.core.build.call(null,photosure.blog.posts_view,new cljs.core.Keyword(null,"posts","posts",760043164).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448),loaded_chan], null)], null)),om.core.build.call(null,photosure.blog.posts_nav,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980),nav_chan], null)], null))], null)], null)], null)));
});
photosure.blog.t17504.prototype.om$core$IWillMount$ = true;
photosure.blog.t17504.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;photosure.blog.set_posts.call(null,self__.app,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.app));
var loaded_chan_17591 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448));var c__6367__auto___17592 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto___17592,loaded_chan_17591,___$1){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto___17592,loaded_chan_17591,___$1){
return (function (state_17517){var state_val_17518 = (state_17517[(1)]);if((state_val_17518 === (4)))
{var inst_17511 = (state_17517[(2)]);var inst_17512 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true);var state_17517__$1 = (function (){var statearr_17519 = state_17517;(statearr_17519[(7)] = inst_17511);
(statearr_17519[(8)] = inst_17512);
return statearr_17519;
})();var statearr_17520_17593 = state_17517__$1;(statearr_17520_17593[(2)] = null);
(statearr_17520_17593[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17518 === (3)))
{var inst_17515 = (state_17517[(2)]);var state_17517__$1 = state_17517;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17517__$1,inst_17515);
} else
{if((state_val_17518 === (2)))
{var state_17517__$1 = state_17517;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17517__$1,(4),loaded_chan_17591);
} else
{if((state_val_17518 === (1)))
{var state_17517__$1 = state_17517;var statearr_17521_17594 = state_17517__$1;(statearr_17521_17594[(2)] = null);
(statearr_17521_17594[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6367__auto___17592,loaded_chan_17591,___$1))
;return ((function (switch__6352__auto__,c__6367__auto___17592,loaded_chan_17591,___$1){
return (function() {
var state_machine__6353__auto__ = null;
var state_machine__6353__auto____0 = (function (){var statearr_17525 = [null,null,null,null,null,null,null,null,null];(statearr_17525[(0)] = state_machine__6353__auto__);
(statearr_17525[(1)] = (1));
return statearr_17525;
});
var state_machine__6353__auto____1 = (function (state_17517){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_17517);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e17526){if((e17526 instanceof Object))
{var ex__6356__auto__ = e17526;var statearr_17527_17595 = state_17517;(statearr_17527_17595[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17517);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17526;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17596 = state_17517;
state_17517 = G__17596;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_17517){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_17517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto___17592,loaded_chan_17591,___$1))
})();var state__6369__auto__ = (function (){var statearr_17528 = f__6368__auto__.call(null);(statearr_17528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto___17592);
return statearr_17528;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto___17592,loaded_chan_17591,___$1))
);
var nav_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980));var c__6367__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto__,nav_chan,___$1){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto__,nav_chan,___$1){
return (function (state_17564){var state_val_17565 = (state_17564[(1)]);if((state_val_17565 === (7)))
{var inst_17559 = (state_17564[(2)]);var state_17564__$1 = (function (){var statearr_17566 = state_17564;(statearr_17566[(7)] = inst_17559);
return statearr_17566;
})();var statearr_17567_17597 = state_17564__$1;(statearr_17567_17597[(2)] = null);
(statearr_17567_17597[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17565 === (1)))
{var state_17564__$1 = state_17564;var statearr_17568_17598 = state_17564__$1;(statearr_17568_17598[(2)] = null);
(statearr_17568_17598[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17565 === (4)))
{var inst_17531 = (state_17564[(8)]);var inst_17531__$1 = (state_17564[(2)]);var inst_17532 = cljs.core._EQ_.call(null,inst_17531__$1,"prev");var state_17564__$1 = (function (){var statearr_17569 = state_17564;(statearr_17569[(8)] = inst_17531__$1);
return statearr_17569;
})();if(inst_17532)
{var statearr_17570_17599 = state_17564__$1;(statearr_17570_17599[(1)] = (5));
} else
{var statearr_17571_17600 = state_17564__$1;(statearr_17571_17600[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17565 === (13)))
{var inst_17555 = (state_17564[(2)]);var state_17564__$1 = state_17564;var statearr_17572_17601 = state_17564__$1;(statearr_17572_17601[(2)] = inst_17555);
(statearr_17572_17601[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17565 === (6)))
{var inst_17531 = (state_17564[(8)]);var inst_17541 = cljs.core._EQ_.call(null,inst_17531,"next");var state_17564__$1 = state_17564;if(inst_17541)
{var statearr_17573_17602 = state_17564__$1;(statearr_17573_17602[(1)] = (8));
} else
{var statearr_17574_17603 = state_17564__$1;(statearr_17574_17603[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17565 === (3)))
{var inst_17562 = (state_17564[(2)]);var state_17564__$1 = state_17564;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17564__$1,inst_17562);
} else
{if((state_val_17565 === (12)))
{var state_17564__$1 = state_17564;var statearr_17575_17604 = state_17564__$1;(statearr_17575_17604[(2)] = null);
(statearr_17575_17604[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17565 === (2)))
{var state_17564__$1 = state_17564;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17564__$1,(4),nav_chan);
} else
{if((state_val_17565 === (11)))
{var inst_17552 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),(0));var state_17564__$1 = state_17564;var statearr_17576_17605 = state_17564__$1;(statearr_17576_17605[(2)] = inst_17552);
(statearr_17576_17605[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17565 === (9)))
{var inst_17531 = (state_17564[(8)]);var inst_17550 = cljs.core._EQ_.call(null,inst_17531,"top");var state_17564__$1 = state_17564;if(inst_17550)
{var statearr_17577_17606 = state_17564__$1;(statearr_17577_17606[(1)] = (11));
} else
{var statearr_17578_17607 = state_17564__$1;(statearr_17578_17607[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17565 === (5)))
{var inst_17531 = (state_17564[(8)]);var inst_17534 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),false);var inst_17535 = (function (){var cmd = inst_17531;return ((function (cmd,inst_17531,inst_17534,state_val_17565,c__6367__auto__,nav_chan,___$1){
return (function (p1__17415_SHARP_){return (p1__17415_SHARP_ - (1));
});
;})(cmd,inst_17531,inst_17534,state_val_17565,c__6367__auto__,nav_chan,___$1))
})();var inst_17536 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"page","page",849072397),inst_17535);var inst_17537 = cljs.core.deref.call(null,self__.app);var inst_17538 = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(inst_17537);var inst_17539 = photosure.blog.set_posts.call(null,self__.app,inst_17538);var state_17564__$1 = (function (){var statearr_17579 = state_17564;(statearr_17579[(9)] = inst_17534);
(statearr_17579[(10)] = inst_17536);
return statearr_17579;
})();var statearr_17580_17608 = state_17564__$1;(statearr_17580_17608[(2)] = inst_17539);
(statearr_17580_17608[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17565 === (10)))
{var inst_17557 = (state_17564[(2)]);var state_17564__$1 = state_17564;var statearr_17581_17609 = state_17564__$1;(statearr_17581_17609[(2)] = inst_17557);
(statearr_17581_17609[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17565 === (8)))
{var inst_17531 = (state_17564[(8)]);var inst_17543 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),false);var inst_17544 = (function (){var cmd = inst_17531;return ((function (cmd,inst_17531,inst_17543,state_val_17565,c__6367__auto__,nav_chan,___$1){
return (function (p1__17416_SHARP_){return (p1__17416_SHARP_ + (1));
});
;})(cmd,inst_17531,inst_17543,state_val_17565,c__6367__auto__,nav_chan,___$1))
})();var inst_17545 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"page","page",849072397),inst_17544);var inst_17546 = cljs.core.deref.call(null,self__.app);var inst_17547 = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(inst_17546);var inst_17548 = photosure.blog.set_posts.call(null,self__.app,inst_17547);var state_17564__$1 = (function (){var statearr_17582 = state_17564;(statearr_17582[(11)] = inst_17543);
(statearr_17582[(12)] = inst_17545);
return statearr_17582;
})();var statearr_17583_17610 = state_17564__$1;(statearr_17583_17610[(2)] = inst_17548);
(statearr_17583_17610[(1)] = (10));
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
var state_machine__6353__auto____0 = (function (){var statearr_17587 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17587[(0)] = state_machine__6353__auto__);
(statearr_17587[(1)] = (1));
return statearr_17587;
});
var state_machine__6353__auto____1 = (function (state_17564){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_17564);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e17588){if((e17588 instanceof Object))
{var ex__6356__auto__ = e17588;var statearr_17589_17611 = state_17564;(statearr_17589_17611[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17564);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17588;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17612 = state_17564;
state_17564 = G__17612;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_17564){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_17564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto__,nav_chan,___$1))
})();var state__6369__auto__ = (function (){var statearr_17590 = f__6368__auto__.call(null);(statearr_17590[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto__);
return statearr_17590;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto__,nav_chan,___$1))
);
return c__6367__auto__;
});
photosure.blog.t17504.prototype.om$core$IInitState$ = true;
photosure.blog.t17504.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),false,new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),(0)], null);
});
photosure.blog.t17504.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17506){var self__ = this;
var _17506__$1 = this;return self__.meta17505;
});
photosure.blog.t17504.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17506,meta17505__$1){var self__ = this;
var _17506__$1 = this;return (new photosure.blog.t17504(self__.owner,self__.app,self__.blog,meta17505__$1));
});
photosure.blog.__GT_t17504 = (function __GT_t17504(owner__$1,app__$1,blog__$1,meta17505){return (new photosure.blog.t17504(owner__$1,app__$1,blog__$1,meta17505));
});
}
return (new photosure.blog.t17504(owner,app,blog,null));
});
photosure.blog.render = (function render(page){cljs.core.swap_BANG_.call(null,photosure.blog.app_data,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),page);
return om.core.root.call(null,photosure.blog.blog,photosure.blog.app_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("dynamic-content")], null));
});

//# sourceMappingURL=blog.js.map