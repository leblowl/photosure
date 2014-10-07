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
photosure.blog.text_view = (function text_view(caption,owner){if(typeof photosure.blog.t17994 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t17994 = (function (owner,caption,text_view,meta17995){
this.owner = owner;
this.caption = caption;
this.text_view = text_view;
this.meta17995 = meta17995;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t17994.cljs$lang$type = true;
photosure.blog.t17994.cljs$lang$ctorStr = "photosure.blog/t17994";
photosure.blog.t17994.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t17994");
});
photosure.blog.t17994.prototype.om$core$IRender$ = true;
photosure.blog.t17994.prototype.om$core$IRender$render$arity$1 = (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return React.DOM.div({"dangerouslySetInnerHTML": {"__html": self__.caption}, "className": "caption"},null);
});
photosure.blog.t17994.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17996){var self__ = this;
var _17996__$1 = this;return self__.meta17995;
});
photosure.blog.t17994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17996,meta17995__$1){var self__ = this;
var _17996__$1 = this;return (new photosure.blog.t17994(self__.owner,self__.caption,self__.text_view,meta17995__$1));
});
photosure.blog.__GT_t17994 = (function __GT_t17994(owner__$1,caption__$1,text_view__$1,meta17995){return (new photosure.blog.t17994(owner__$1,caption__$1,text_view__$1,meta17995));
});
}
return (new photosure.blog.t17994(owner,caption,text_view,null));
});
photosure.blog.answer_post_view = (function answer_post_view(p__17997){var map__18002 = p__17997;var map__18002__$1 = ((cljs.core.seq_QMARK_.call(null,map__18002))?cljs.core.apply.call(null,cljs.core.hash_map,map__18002):map__18002);var id = cljs.core.get.call(null,map__18002__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var asking_name = cljs.core.get.call(null,map__18002__$1,new cljs.core.Keyword(null,"asking_name","asking_name",728401374));var asking_url = cljs.core.get.call(null,map__18002__$1,new cljs.core.Keyword(null,"asking_url","asking_url",-384387495));var question = cljs.core.get.call(null,map__18002__$1,new cljs.core.Keyword(null,"question","question",-1411720117));var answer = cljs.core.get.call(null,map__18002__$1,new cljs.core.Keyword(null,"answer","answer",-742633163));if(typeof photosure.blog.t18003 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t18003 = (function (answer,question,asking_url,asking_name,id,map__18002,p__17997,answer_post_view,meta18004){
this.answer = answer;
this.question = question;
this.asking_url = asking_url;
this.asking_name = asking_name;
this.id = id;
this.map__18002 = map__18002;
this.p__17997 = p__17997;
this.answer_post_view = answer_post_view;
this.meta18004 = meta18004;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t18003.cljs$lang$type = true;
photosure.blog.t18003.cljs$lang$ctorStr = "photosure.blog/t18003";
photosure.blog.t18003.cljs$lang$ctorPrWriter = ((function (map__18002,map__18002__$1,id,asking_name,asking_url,question,answer){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t18003");
});})(map__18002,map__18002__$1,id,asking_name,asking_url,question,answer))
;
photosure.blog.t18003.prototype.om$core$IRender$ = true;
photosure.blog.t18003.prototype.om$core$IRender$render$arity$1 = ((function (map__18002,map__18002__$1,id,asking_name,asking_url,question,answer){
return (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return React.DOM.div({"className": "post", "id": self__.id},React.DOM.div(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.asking_name)+" @ "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.asking_url)+": "),React.DOM.div({})));
});})(map__18002,map__18002__$1,id,asking_name,asking_url,question,answer))
;
photosure.blog.t18003.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__18002,map__18002__$1,id,asking_name,asking_url,question,answer){
return (function (_18005){var self__ = this;
var _18005__$1 = this;return self__.meta18004;
});})(map__18002,map__18002__$1,id,asking_name,asking_url,question,answer))
;
photosure.blog.t18003.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__18002,map__18002__$1,id,asking_name,asking_url,question,answer){
return (function (_18005,meta18004__$1){var self__ = this;
var _18005__$1 = this;return (new photosure.blog.t18003(self__.answer,self__.question,self__.asking_url,self__.asking_name,self__.id,self__.map__18002,self__.p__17997,self__.answer_post_view,meta18004__$1));
});})(map__18002,map__18002__$1,id,asking_name,asking_url,question,answer))
;
photosure.blog.__GT_t18003 = ((function (map__18002,map__18002__$1,id,asking_name,asking_url,question,answer){
return (function __GT_t18003(answer__$1,question__$1,asking_url__$1,asking_name__$1,id__$1,map__18002__$2,p__17997__$1,answer_post_view__$1,meta18004){return (new photosure.blog.t18003(answer__$1,question__$1,asking_url__$1,asking_name__$1,id__$1,map__18002__$2,p__17997__$1,answer_post_view__$1,meta18004));
});})(map__18002,map__18002__$1,id,asking_name,asking_url,question,answer))
;
}
return (new photosure.blog.t18003(answer,question,asking_url,asking_name,id,map__18002__$1,p__17997,answer_post_view,null));
});
photosure.blog.text_post_view = (function text_post_view(p__18006,owner){var map__18011 = p__18006;var map__18011__$1 = ((cljs.core.seq_QMARK_.call(null,map__18011))?cljs.core.apply.call(null,cljs.core.hash_map,map__18011):map__18011);var id = cljs.core.get.call(null,map__18011__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var title = cljs.core.get.call(null,map__18011__$1,new cljs.core.Keyword(null,"title","title",636505583));var body = cljs.core.get.call(null,map__18011__$1,new cljs.core.Keyword(null,"body","body",-2049205669));if(typeof photosure.blog.t18012 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t18012 = (function (body,title,id,map__18011,owner,p__18006,text_post_view,meta18013){
this.body = body;
this.title = title;
this.id = id;
this.map__18011 = map__18011;
this.owner = owner;
this.p__18006 = p__18006;
this.text_post_view = text_post_view;
this.meta18013 = meta18013;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t18012.cljs$lang$type = true;
photosure.blog.t18012.cljs$lang$ctorStr = "photosure.blog/t18012";
photosure.blog.t18012.cljs$lang$ctorPrWriter = ((function (map__18011,map__18011__$1,id,title,body){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t18012");
});})(map__18011,map__18011__$1,id,title,body))
;
photosure.blog.t18012.prototype.om$core$IRender$ = true;
photosure.blog.t18012.prototype.om$core$IRender$render$arity$1 = ((function (map__18011,map__18011__$1,id,title,body){
return (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return React.DOM.div({"className": "post", "id": self__.id},React.DOM.h2({"className": "blog-title"},self__.title),om.core.build.call(null,photosure.blog.text_view,self__.body));
});})(map__18011,map__18011__$1,id,title,body))
;
photosure.blog.t18012.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__18011,map__18011__$1,id,title,body){
return (function (_18014){var self__ = this;
var _18014__$1 = this;return self__.meta18013;
});})(map__18011,map__18011__$1,id,title,body))
;
photosure.blog.t18012.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__18011,map__18011__$1,id,title,body){
return (function (_18014,meta18013__$1){var self__ = this;
var _18014__$1 = this;return (new photosure.blog.t18012(self__.body,self__.title,self__.id,self__.map__18011,self__.owner,self__.p__18006,self__.text_post_view,meta18013__$1));
});})(map__18011,map__18011__$1,id,title,body))
;
photosure.blog.__GT_t18012 = ((function (map__18011,map__18011__$1,id,title,body){
return (function __GT_t18012(body__$1,title__$1,id__$1,map__18011__$2,owner__$1,p__18006__$1,text_post_view__$1,meta18013){return (new photosure.blog.t18012(body__$1,title__$1,id__$1,map__18011__$2,owner__$1,p__18006__$1,text_post_view__$1,meta18013));
});})(map__18011,map__18011__$1,id,title,body))
;
}
return (new photosure.blog.t18012(body,title,id,map__18011__$1,owner,p__18006,text_post_view,null));
});
photosure.blog.photo_post_view = (function photo_post_view(p__18015,owner){var map__18022 = p__18015;var map__18022__$1 = ((cljs.core.seq_QMARK_.call(null,map__18022))?cljs.core.apply.call(null,cljs.core.hash_map,map__18022):map__18022);var id = cljs.core.get.call(null,map__18022__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var photos = cljs.core.get.call(null,map__18022__$1,new cljs.core.Keyword(null,"photos","photos",11691538));var caption = cljs.core.get.call(null,map__18022__$1,new cljs.core.Keyword(null,"caption","caption",-855383902));if(typeof photosure.blog.t18023 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t18023 = (function (caption,photos,id,map__18022,owner,p__18015,photo_post_view,meta18024){
this.caption = caption;
this.photos = photos;
this.id = id;
this.map__18022 = map__18022;
this.owner = owner;
this.p__18015 = p__18015;
this.photo_post_view = photo_post_view;
this.meta18024 = meta18024;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t18023.cljs$lang$type = true;
photosure.blog.t18023.cljs$lang$ctorStr = "photosure.blog/t18023";
photosure.blog.t18023.cljs$lang$ctorPrWriter = ((function (map__18022,map__18022__$1,id,photos,caption){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t18023");
});})(map__18022,map__18022__$1,id,photos,caption))
;
photosure.blog.t18023.prototype.om$core$IRenderState$ = true;
photosure.blog.t18023.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__18022,map__18022__$1,id,photos,caption){
return (function (this$,p__18026){var self__ = this;
var map__18027 = p__18026;var map__18027__$1 = ((cljs.core.seq_QMARK_.call(null,map__18027))?cljs.core.apply.call(null,cljs.core.hash_map,map__18027):map__18027);var loaded = cljs.core.get.call(null,map__18027__$1,new cljs.core.Keyword(null,"loaded","loaded",-1246482293));var this$__$1 = this;return React.DOM.div({"className": "post", "id": self__.id},cljs.core.apply.call(null,om.dom.div,{"className": ("blog-photo")},React.DOM.div({"className": ("loader "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not.call(null,loaded))?"on":"off"))), "id": "blah"}),cljs.core.map.call(null,((function (this$__$1,map__18027,map__18027__$1,loaded,map__18022,map__18022__$1,id,photos,caption){
return (function (photo){return React.DOM.img({"onLoad": ((function (this$__$1,map__18027,map__18027__$1,loaded,map__18022,map__18022__$1,id,photos,caption){
return (function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true);
});})(this$__$1,map__18027,map__18027__$1,loaded,map__18022,map__18022__$1,id,photos,caption))
, "className": ("blog-photo-img"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(loaded)?" loaded":null))), "src": photo});
});})(this$__$1,map__18027,map__18027__$1,loaded,map__18022,map__18022__$1,id,photos,caption))
,self__.photos)),om.core.build.call(null,photosure.blog.text_view,self__.caption));
});})(map__18022,map__18022__$1,id,photos,caption))
;
photosure.blog.t18023.prototype.om$core$IWillReceiveProps$ = true;
photosure.blog.t18023.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = ((function (map__18022,map__18022__$1,id,photos,caption){
return (function (this$,next_props){var self__ = this;
var this$__$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),false);
});})(map__18022,map__18022__$1,id,photos,caption))
;
photosure.blog.t18023.prototype.om$core$IInitState$ = true;
photosure.blog.t18023.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__18022,map__18022__$1,id,photos,caption){
return (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),false], null);
});})(map__18022,map__18022__$1,id,photos,caption))
;
photosure.blog.t18023.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__18022,map__18022__$1,id,photos,caption){
return (function (_18025){var self__ = this;
var _18025__$1 = this;return self__.meta18024;
});})(map__18022,map__18022__$1,id,photos,caption))
;
photosure.blog.t18023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__18022,map__18022__$1,id,photos,caption){
return (function (_18025,meta18024__$1){var self__ = this;
var _18025__$1 = this;return (new photosure.blog.t18023(self__.caption,self__.photos,self__.id,self__.map__18022,self__.owner,self__.p__18015,self__.photo_post_view,meta18024__$1));
});})(map__18022,map__18022__$1,id,photos,caption))
;
photosure.blog.__GT_t18023 = ((function (map__18022,map__18022__$1,id,photos,caption){
return (function __GT_t18023(caption__$1,photos__$1,id__$1,map__18022__$2,owner__$1,p__18015__$1,photo_post_view__$1,meta18024){return (new photosure.blog.t18023(caption__$1,photos__$1,id__$1,map__18022__$2,owner__$1,p__18015__$1,photo_post_view__$1,meta18024));
});})(map__18022,map__18022__$1,id,photos,caption))
;
}
return (new photosure.blog.t18023(caption,photos,id,map__18022__$1,owner,p__18015,photo_post_view,null));
});
photosure.blog.post_view = (function post_view(p__18028,owner){var map__18033 = p__18028;var map__18033__$1 = ((cljs.core.seq_QMARK_.call(null,map__18033))?cljs.core.apply.call(null,cljs.core.hash_map,map__18033):map__18033);var post = map__18033__$1;var type = cljs.core.get.call(null,map__18033__$1,new cljs.core.Keyword(null,"type","type",1174270348));if(typeof photosure.blog.t18034 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t18034 = (function (type,post,map__18033,owner,p__18028,post_view,meta18035){
this.type = type;
this.post = post;
this.map__18033 = map__18033;
this.owner = owner;
this.p__18028 = p__18028;
this.post_view = post_view;
this.meta18035 = meta18035;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t18034.cljs$lang$type = true;
photosure.blog.t18034.cljs$lang$ctorStr = "photosure.blog/t18034";
photosure.blog.t18034.cljs$lang$ctorPrWriter = ((function (map__18033,map__18033__$1,post,type){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t18034");
});})(map__18033,map__18033__$1,post,type))
;
photosure.blog.t18034.prototype.om$core$IRender$ = true;
photosure.blog.t18034.prototype.om$core$IRender$render$arity$1 = ((function (map__18033,map__18033__$1,post,type){
return (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core._EQ_.call(null,self__.type,"photo"))
{return om.core.build.call(null,photosure.blog.photo_post_view,self__.post);
} else
{return om.core.build.call(null,photosure.blog.text_post_view,self__.post);
}
});})(map__18033,map__18033__$1,post,type))
;
photosure.blog.t18034.prototype.om$core$IDidUpdate$ = true;
photosure.blog.t18034.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__18033,map__18033__$1,post,type){
return (function (this$,prev_props,prev_state){var self__ = this;
var this$__$1 = this;return cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"load-chan","load-chan",342107614)),"done!");
});})(map__18033,map__18033__$1,post,type))
;
photosure.blog.t18034.prototype.om$core$IDidMount$ = true;
photosure.blog.t18034.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__18033,map__18033__$1,post,type){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.put_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"load-chan","load-chan",342107614)),"done!");
});})(map__18033,map__18033__$1,post,type))
;
photosure.blog.t18034.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__18033,map__18033__$1,post,type){
return (function (_18036){var self__ = this;
var _18036__$1 = this;return self__.meta18035;
});})(map__18033,map__18033__$1,post,type))
;
photosure.blog.t18034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__18033,map__18033__$1,post,type){
return (function (_18036,meta18035__$1){var self__ = this;
var _18036__$1 = this;return (new photosure.blog.t18034(self__.type,self__.post,self__.map__18033,self__.owner,self__.p__18028,self__.post_view,meta18035__$1));
});})(map__18033,map__18033__$1,post,type))
;
photosure.blog.__GT_t18034 = ((function (map__18033,map__18033__$1,post,type){
return (function __GT_t18034(type__$1,post__$1,map__18033__$2,owner__$1,p__18028__$1,post_view__$1,meta18035){return (new photosure.blog.t18034(type__$1,post__$1,map__18033__$2,owner__$1,p__18028__$1,post_view__$1,meta18035));
});})(map__18033,map__18033__$1,post,type))
;
}
return (new photosure.blog.t18034(type,post,map__18033__$1,owner,p__18028,post_view,null));
});
photosure.blog.posts_view = (function posts_view(posts,owner){if(typeof photosure.blog.t18078 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t18078 = (function (owner,posts,posts_view,meta18079){
this.owner = owner;
this.posts = posts;
this.posts_view = posts_view;
this.meta18079 = meta18079;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t18078.cljs$lang$type = true;
photosure.blog.t18078.cljs$lang$ctorStr = "photosure.blog/t18078";
photosure.blog.t18078.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t18078");
});
photosure.blog.t18078.prototype.om$core$IRenderState$ = true;
photosure.blog.t18078.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__18081){var self__ = this;
var map__18082 = p__18081;var map__18082__$1 = ((cljs.core.seq_QMARK_.call(null,map__18082))?cljs.core.apply.call(null,cljs.core.hash_map,map__18082):map__18082);var load_chan = cljs.core.get.call(null,map__18082__$1,new cljs.core.Keyword(null,"load-chan","load-chan",342107614));var iter = cljs.core.get.call(null,map__18082__$1,new cljs.core.Keyword(null,"iter","iter",1308240283));var this$__$1 = this;return cljs.core.apply.call(null,om.dom.div,{"id": "post-list"},om.core.build_all.call(null,photosure.blog.post_view,cljs.core.take.call(null,iter,self__.posts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"load-chan","load-chan",342107614),load_chan], null)], null)));
});
photosure.blog.t18078.prototype.om$core$IWillMount$ = true;
photosure.blog.t18078.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var load_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"load-chan","load-chan",342107614));var loaded_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448));var c__6367__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto__,load_chan,loaded_chan,___$1){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto__,load_chan,loaded_chan,___$1){
return (function (state_18100){var state_val_18101 = (state_18100[(1)]);if((state_val_18101 === (7)))
{var inst_18095 = (state_18100[(2)]);var state_18100__$1 = (function (){var statearr_18102 = state_18100;(statearr_18102[(7)] = inst_18095);
return statearr_18102;
})();var statearr_18103_18118 = state_18100__$1;(statearr_18103_18118[(2)] = null);
(statearr_18103_18118[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18101 === (6)))
{var state_18100__$1 = state_18100;var statearr_18104_18119 = state_18100__$1;(statearr_18104_18119[(2)] = null);
(statearr_18104_18119[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18101 === (5)))
{var inst_18091 = cljs.core.async.put_BANG_.call(null,loaded_chan,"all done!");var inst_18092 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"load-count","load-count",128885706),(0));var state_18100__$1 = (function (){var statearr_18105 = state_18100;(statearr_18105[(8)] = inst_18091);
return statearr_18105;
})();var statearr_18106_18120 = state_18100__$1;(statearr_18106_18120[(2)] = inst_18092);
(statearr_18106_18120[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18101 === (4)))
{var inst_18085 = (state_18100[(2)]);var inst_18086 = (function (){var load = inst_18085;return ((function (load,inst_18085,state_val_18101,c__6367__auto__,load_chan,loaded_chan,___$1){
return (function (p1__18037_SHARP_){return (p1__18037_SHARP_ + (1));
});
;})(load,inst_18085,state_val_18101,c__6367__auto__,load_chan,loaded_chan,___$1))
})();var inst_18087 = om.core.update_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"load-count","load-count",128885706),inst_18086);var inst_18088 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"load-count","load-count",128885706));var inst_18089 = cljs.core._EQ_.call(null,inst_18088,(20));var state_18100__$1 = (function (){var statearr_18107 = state_18100;(statearr_18107[(9)] = inst_18087);
return statearr_18107;
})();if(inst_18089)
{var statearr_18108_18121 = state_18100__$1;(statearr_18108_18121[(1)] = (5));
} else
{var statearr_18109_18122 = state_18100__$1;(statearr_18109_18122[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18101 === (3)))
{var inst_18098 = (state_18100[(2)]);var state_18100__$1 = state_18100;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18100__$1,inst_18098);
} else
{if((state_val_18101 === (2)))
{var state_18100__$1 = state_18100;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18100__$1,(4),load_chan);
} else
{if((state_val_18101 === (1)))
{var state_18100__$1 = state_18100;var statearr_18110_18123 = state_18100__$1;(statearr_18110_18123[(2)] = null);
(statearr_18110_18123[(1)] = (2));
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
var state_machine__6353__auto____0 = (function (){var statearr_18114 = [null,null,null,null,null,null,null,null,null,null];(statearr_18114[(0)] = state_machine__6353__auto__);
(statearr_18114[(1)] = (1));
return statearr_18114;
});
var state_machine__6353__auto____1 = (function (state_18100){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_18100);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e18115){if((e18115 instanceof Object))
{var ex__6356__auto__ = e18115;var statearr_18116_18124 = state_18100;(statearr_18116_18124[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18100);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18115;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18125 = state_18100;
state_18100 = G__18125;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_18100){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_18100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto__,load_chan,loaded_chan,___$1))
})();var state__6369__auto__ = (function (){var statearr_18117 = f__6368__auto__.call(null);(statearr_18117[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto__);
return statearr_18117;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto__,load_chan,loaded_chan,___$1))
);
return c__6367__auto__;
});
photosure.blog.t18078.prototype.om$core$IInitState$ = true;
photosure.blog.t18078.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"load-chan","load-chan",342107614),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"load-count","load-count",128885706),(0),new cljs.core.Keyword(null,"iter","iter",1308240283),(20)], null);
});
photosure.blog.t18078.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18080){var self__ = this;
var _18080__$1 = this;return self__.meta18079;
});
photosure.blog.t18078.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18080,meta18079__$1){var self__ = this;
var _18080__$1 = this;return (new photosure.blog.t18078(self__.owner,self__.posts,self__.posts_view,meta18079__$1));
});
photosure.blog.__GT_t18078 = (function __GT_t18078(owner__$1,posts__$1,posts_view__$1,meta18079){return (new photosure.blog.t18078(owner__$1,posts__$1,posts_view__$1,meta18079));
});
}
return (new photosure.blog.t18078(owner,posts,posts_view,null));
});
photosure.blog.set_posts = (function set_posts(app,page){return photosure.util.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),("api/posts/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(page)),new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),(function (_){return om.core.update_BANG_.call(null,app,new cljs.core.Keyword(null,"posts","posts",760043164),_);
})], null));
});
photosure.blog.page_top_btn = (function page_top_btn(page,owner){if(typeof photosure.blog.t18131 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t18131 = (function (owner,page,page_top_btn,meta18132){
this.owner = owner;
this.page = page;
this.page_top_btn = page_top_btn;
this.meta18132 = meta18132;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t18131.cljs$lang$type = true;
photosure.blog.t18131.cljs$lang$ctorStr = "photosure.blog/t18131";
photosure.blog.t18131.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t18131");
});
photosure.blog.t18131.prototype.om$core$IRenderState$ = true;
photosure.blog.t18131.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__18134){var self__ = this;
var map__18135 = p__18134;var map__18135__$1 = ((cljs.core.seq_QMARK_.call(null,map__18135))?cljs.core.apply.call(null,cljs.core.hash_map,map__18135):map__18135);var nav_chan = cljs.core.get.call(null,map__18135__$1,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980));var className = cljs.core.get.call(null,map__18135__$1,new cljs.core.Keyword(null,"className","className",-1983287057));var text = cljs.core.get.call(null,map__18135__$1,new cljs.core.Keyword(null,"text","text",-1790561697));var this$__$1 = this;return React.DOM.div({"onClick": ((function (this$__$1,map__18135,map__18135__$1,nav_chan,className,text){
return (function (_){return cljs.core.async.put_BANG_.call(null,nav_chan,"top");
});})(this$__$1,map__18135,map__18135__$1,nav_chan,className,text))
, "onMouseLeave": ((function (this$__$1,map__18135,map__18135__$1,nav_chan,className,text){
return (function (_){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"text","text",-1790561697),(self__.page + (1)));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"className","className",-1983287057),"page");
return setTimeout(((function (this$__$1,map__18135,map__18135__$1,nav_chan,className,text){
return (function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"className","className",-1983287057),"page fadein");
});})(this$__$1,map__18135,map__18135__$1,nav_chan,className,text))
,(50));
});})(this$__$1,map__18135,map__18135__$1,nav_chan,className,text))
, "onMouseEnter": ((function (this$__$1,map__18135,map__18135__$1,nav_chan,className,text){
return (function (_){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"text","text",-1790561697),goog.string.unescapeEntities("&#xe600"));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"className","className",-1983287057),"icon");
return setTimeout(((function (this$__$1,map__18135,map__18135__$1,nav_chan,className,text){
return (function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"className","className",-1983287057),"icon fadein");
});})(this$__$1,map__18135,map__18135__$1,nav_chan,className,text))
,(50));
});})(this$__$1,map__18135,map__18135__$1,nav_chan,className,text))
, "className": "top"},React.DOM.p({"className": className, "id": "change"},text));
});
photosure.blog.t18131.prototype.om$core$IInitState$ = true;
photosure.blog.t18131.prototype.om$core$IInitState$init_state$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"page fadein"], null);
});
photosure.blog.t18131.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18133){var self__ = this;
var _18133__$1 = this;return self__.meta18132;
});
photosure.blog.t18131.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18133,meta18132__$1){var self__ = this;
var _18133__$1 = this;return (new photosure.blog.t18131(self__.owner,self__.page,self__.page_top_btn,meta18132__$1));
});
photosure.blog.__GT_t18131 = (function __GT_t18131(owner__$1,page__$1,page_top_btn__$1,meta18132){return (new photosure.blog.t18131(owner__$1,page__$1,page_top_btn__$1,meta18132));
});
}
return (new photosure.blog.t18131(owner,page,page_top_btn,null));
});
photosure.blog.posts_nav = (function posts_nav(app,owner){if(typeof photosure.blog.t18141 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t18141 = (function (owner,app,posts_nav,meta18142){
this.owner = owner;
this.app = app;
this.posts_nav = posts_nav;
this.meta18142 = meta18142;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t18141.cljs$lang$type = true;
photosure.blog.t18141.cljs$lang$ctorStr = "photosure.blog/t18141";
photosure.blog.t18141.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t18141");
});
photosure.blog.t18141.prototype.om$core$IRenderState$ = true;
photosure.blog.t18141.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__18144){var self__ = this;
var map__18145 = p__18144;var map__18145__$1 = ((cljs.core.seq_QMARK_.call(null,map__18145))?cljs.core.apply.call(null,cljs.core.hash_map,map__18145):map__18145);var nav_chan = cljs.core.get.call(null,map__18145__$1,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980));var ___$1 = this;return React.DOM.div({"className": "posts-nav"},React.DOM.div({"onClick": ((function (___$1,map__18145,map__18145__$1,nav_chan){
return (function (___$2){return cljs.core.async.put_BANG_.call(null,nav_chan,"prev");
});})(___$1,map__18145,map__18145__$1,nav_chan))
, "className": ("prev"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.app),(0)))?" disabled":null)))},React.DOM.p({"className": "icon"},goog.string.unescapeEntities("&#xe602"))),om.core.build.call(null,photosure.blog.page_top_btn,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980),nav_chan,new cljs.core.Keyword(null,"text","text",-1790561697),(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.app) + (1))], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.app) + (1))], null)], null)),React.DOM.div({"onClick": ((function (___$1,map__18145,map__18145__$1,nav_chan){
return (function (___$2){return cljs.core.async.put_BANG_.call(null,nav_chan,"next");
});})(___$1,map__18145,map__18145__$1,nav_chan))
, "className": "next"},React.DOM.p({"className": "icon"},goog.string.unescapeEntities("&#xe601"))));
});
photosure.blog.t18141.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18143){var self__ = this;
var _18143__$1 = this;return self__.meta18142;
});
photosure.blog.t18141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18143,meta18142__$1){var self__ = this;
var _18143__$1 = this;return (new photosure.blog.t18141(self__.owner,self__.app,self__.posts_nav,meta18142__$1));
});
photosure.blog.__GT_t18141 = (function __GT_t18141(owner__$1,app__$1,posts_nav__$1,meta18142){return (new photosure.blog.t18141(owner__$1,app__$1,posts_nav__$1,meta18142));
});
}
return (new photosure.blog.t18141(owner,app,posts_nav,null));
});
photosure.blog.blog = (function blog(app,owner){if(typeof photosure.blog.t18235 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.blog.t18235 = (function (owner,app,blog,meta18236){
this.owner = owner;
this.app = app;
this.blog = blog;
this.meta18236 = meta18236;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.blog.t18235.cljs$lang$type = true;
photosure.blog.t18235.cljs$lang$ctorStr = "photosure.blog/t18235";
photosure.blog.t18235.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.blog/t18235");
});
photosure.blog.t18235.prototype.om$core$IRenderState$ = true;
photosure.blog.t18235.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__18238){var self__ = this;
var map__18239 = p__18238;var map__18239__$1 = ((cljs.core.seq_QMARK_.call(null,map__18239))?cljs.core.apply.call(null,cljs.core.hash_map,map__18239):map__18239);var scroll_top = cljs.core.get.call(null,map__18239__$1,new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100));var nav_chan = cljs.core.get.call(null,map__18239__$1,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980));var loaded_chan = cljs.core.get.call(null,map__18239__$1,new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448));var loaded = cljs.core.get.call(null,map__18239__$1,new cljs.core.Keyword(null,"loaded","loaded",-1246482293));var this$__$1 = this;return React.DOM.div({"id": "blog-gallery-container"},om.core.build.call(null,photosure.scrolldiv.scroll_div,self__.app,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"blog-gallery",new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),(0)], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),("blog-gallery"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(loaded)?" loaded":null))),new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),scroll_top], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.core.build.call(null,photosure.blog.posts_view,new cljs.core.Keyword(null,"posts","posts",760043164).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448),loaded_chan], null)], null)),om.core.build.call(null,photosure.blog.posts_nav,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980),nav_chan], null)], null))], null)], null)], null)));
});
photosure.blog.t18235.prototype.om$core$IWillMount$ = true;
photosure.blog.t18235.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;photosure.blog.set_posts.call(null,self__.app,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.app));
var loaded_chan_18322 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448));var c__6367__auto___18323 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto___18323,loaded_chan_18322,___$1){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto___18323,loaded_chan_18322,___$1){
return (function (state_18248){var state_val_18249 = (state_18248[(1)]);if((state_val_18249 === (4)))
{var inst_18242 = (state_18248[(2)]);var inst_18243 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true);var state_18248__$1 = (function (){var statearr_18250 = state_18248;(statearr_18250[(7)] = inst_18243);
(statearr_18250[(8)] = inst_18242);
return statearr_18250;
})();var statearr_18251_18324 = state_18248__$1;(statearr_18251_18324[(2)] = null);
(statearr_18251_18324[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18249 === (3)))
{var inst_18246 = (state_18248[(2)]);var state_18248__$1 = state_18248;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18248__$1,inst_18246);
} else
{if((state_val_18249 === (2)))
{var state_18248__$1 = state_18248;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18248__$1,(4),loaded_chan_18322);
} else
{if((state_val_18249 === (1)))
{var state_18248__$1 = state_18248;var statearr_18252_18325 = state_18248__$1;(statearr_18252_18325[(2)] = null);
(statearr_18252_18325[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6367__auto___18323,loaded_chan_18322,___$1))
;return ((function (switch__6352__auto__,c__6367__auto___18323,loaded_chan_18322,___$1){
return (function() {
var state_machine__6353__auto__ = null;
var state_machine__6353__auto____0 = (function (){var statearr_18256 = [null,null,null,null,null,null,null,null,null];(statearr_18256[(0)] = state_machine__6353__auto__);
(statearr_18256[(1)] = (1));
return statearr_18256;
});
var state_machine__6353__auto____1 = (function (state_18248){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_18248);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e18257){if((e18257 instanceof Object))
{var ex__6356__auto__ = e18257;var statearr_18258_18326 = state_18248;(statearr_18258_18326[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18248);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18257;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18327 = state_18248;
state_18248 = G__18327;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_18248){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_18248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto___18323,loaded_chan_18322,___$1))
})();var state__6369__auto__ = (function (){var statearr_18259 = f__6368__auto__.call(null);(statearr_18259[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto___18323);
return statearr_18259;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto___18323,loaded_chan_18322,___$1))
);
var nav_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980));var c__6367__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto__,nav_chan,___$1){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto__,nav_chan,___$1){
return (function (state_18295){var state_val_18296 = (state_18295[(1)]);if((state_val_18296 === (7)))
{var inst_18290 = (state_18295[(2)]);var state_18295__$1 = (function (){var statearr_18297 = state_18295;(statearr_18297[(7)] = inst_18290);
return statearr_18297;
})();var statearr_18298_18328 = state_18295__$1;(statearr_18298_18328[(2)] = null);
(statearr_18298_18328[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18296 === (1)))
{var state_18295__$1 = state_18295;var statearr_18299_18329 = state_18295__$1;(statearr_18299_18329[(2)] = null);
(statearr_18299_18329[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18296 === (4)))
{var inst_18262 = (state_18295[(8)]);var inst_18262__$1 = (state_18295[(2)]);var inst_18263 = cljs.core._EQ_.call(null,inst_18262__$1,"prev");var state_18295__$1 = (function (){var statearr_18300 = state_18295;(statearr_18300[(8)] = inst_18262__$1);
return statearr_18300;
})();if(inst_18263)
{var statearr_18301_18330 = state_18295__$1;(statearr_18301_18330[(1)] = (5));
} else
{var statearr_18302_18331 = state_18295__$1;(statearr_18302_18331[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18296 === (13)))
{var inst_18286 = (state_18295[(2)]);var state_18295__$1 = state_18295;var statearr_18303_18332 = state_18295__$1;(statearr_18303_18332[(2)] = inst_18286);
(statearr_18303_18332[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18296 === (6)))
{var inst_18262 = (state_18295[(8)]);var inst_18272 = cljs.core._EQ_.call(null,inst_18262,"next");var state_18295__$1 = state_18295;if(inst_18272)
{var statearr_18304_18333 = state_18295__$1;(statearr_18304_18333[(1)] = (8));
} else
{var statearr_18305_18334 = state_18295__$1;(statearr_18305_18334[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18296 === (3)))
{var inst_18293 = (state_18295[(2)]);var state_18295__$1 = state_18295;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18295__$1,inst_18293);
} else
{if((state_val_18296 === (12)))
{var state_18295__$1 = state_18295;var statearr_18306_18335 = state_18295__$1;(statearr_18306_18335[(2)] = null);
(statearr_18306_18335[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18296 === (2)))
{var state_18295__$1 = state_18295;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18295__$1,(4),nav_chan);
} else
{if((state_val_18296 === (11)))
{var inst_18283 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),(0));var state_18295__$1 = state_18295;var statearr_18307_18336 = state_18295__$1;(statearr_18307_18336[(2)] = inst_18283);
(statearr_18307_18336[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18296 === (9)))
{var inst_18262 = (state_18295[(8)]);var inst_18281 = cljs.core._EQ_.call(null,inst_18262,"top");var state_18295__$1 = state_18295;if(inst_18281)
{var statearr_18308_18337 = state_18295__$1;(statearr_18308_18337[(1)] = (11));
} else
{var statearr_18309_18338 = state_18295__$1;(statearr_18309_18338[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18296 === (5)))
{var inst_18262 = (state_18295[(8)]);var inst_18265 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),false);var inst_18266 = (function (){var cmd = inst_18262;return ((function (cmd,inst_18262,inst_18265,state_val_18296,c__6367__auto__,nav_chan,___$1){
return (function (p1__18146_SHARP_){return (p1__18146_SHARP_ - (1));
});
;})(cmd,inst_18262,inst_18265,state_val_18296,c__6367__auto__,nav_chan,___$1))
})();var inst_18267 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"page","page",849072397),inst_18266);var inst_18268 = cljs.core.deref.call(null,self__.app);var inst_18269 = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(inst_18268);var inst_18270 = photosure.blog.set_posts.call(null,self__.app,inst_18269);var state_18295__$1 = (function (){var statearr_18310 = state_18295;(statearr_18310[(9)] = inst_18265);
(statearr_18310[(10)] = inst_18267);
return statearr_18310;
})();var statearr_18311_18339 = state_18295__$1;(statearr_18311_18339[(2)] = inst_18270);
(statearr_18311_18339[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18296 === (10)))
{var inst_18288 = (state_18295[(2)]);var state_18295__$1 = state_18295;var statearr_18312_18340 = state_18295__$1;(statearr_18312_18340[(2)] = inst_18288);
(statearr_18312_18340[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18296 === (8)))
{var inst_18262 = (state_18295[(8)]);var inst_18274 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),false);var inst_18275 = (function (){var cmd = inst_18262;return ((function (cmd,inst_18262,inst_18274,state_val_18296,c__6367__auto__,nav_chan,___$1){
return (function (p1__18147_SHARP_){return (p1__18147_SHARP_ + (1));
});
;})(cmd,inst_18262,inst_18274,state_val_18296,c__6367__auto__,nav_chan,___$1))
})();var inst_18276 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"page","page",849072397),inst_18275);var inst_18277 = cljs.core.deref.call(null,self__.app);var inst_18278 = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(inst_18277);var inst_18279 = photosure.blog.set_posts.call(null,self__.app,inst_18278);var state_18295__$1 = (function (){var statearr_18313 = state_18295;(statearr_18313[(11)] = inst_18276);
(statearr_18313[(12)] = inst_18274);
return statearr_18313;
})();var statearr_18314_18341 = state_18295__$1;(statearr_18314_18341[(2)] = inst_18279);
(statearr_18314_18341[(1)] = (10));
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
var state_machine__6353__auto____0 = (function (){var statearr_18318 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18318[(0)] = state_machine__6353__auto__);
(statearr_18318[(1)] = (1));
return statearr_18318;
});
var state_machine__6353__auto____1 = (function (state_18295){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_18295);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e18319){if((e18319 instanceof Object))
{var ex__6356__auto__ = e18319;var statearr_18320_18342 = state_18295;(statearr_18320_18342[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18295);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18319;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18343 = state_18295;
state_18295 = G__18343;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_18295){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_18295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto__,nav_chan,___$1))
})();var state__6369__auto__ = (function (){var statearr_18321 = f__6368__auto__.call(null);(statearr_18321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto__);
return statearr_18321;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto__,nav_chan,___$1))
);
return c__6367__auto__;
});
photosure.blog.t18235.prototype.om$core$IInitState$ = true;
photosure.blog.t18235.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),false,new cljs.core.Keyword(null,"loaded-chan","loaded-chan",-670781448),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"nav-chan","nav-chan",310374980),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"scroll-top","scroll-top",-46723100),(0)], null);
});
photosure.blog.t18235.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18237){var self__ = this;
var _18237__$1 = this;return self__.meta18236;
});
photosure.blog.t18235.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18237,meta18236__$1){var self__ = this;
var _18237__$1 = this;return (new photosure.blog.t18235(self__.owner,self__.app,self__.blog,meta18236__$1));
});
photosure.blog.__GT_t18235 = (function __GT_t18235(owner__$1,app__$1,blog__$1,meta18236){return (new photosure.blog.t18235(owner__$1,app__$1,blog__$1,meta18236));
});
}
return (new photosure.blog.t18235(owner,app,blog,null));
});
photosure.blog.render = (function render(){return om.core.root.call(null,photosure.blog.blog,photosure.blog.app_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("dynamic-content")], null));
});

//# sourceMappingURL=blog.js.map