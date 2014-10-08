// Compiled by ClojureScript 0.0-2322
goog.provide('photosure.bio');
goog.require('cljs.core');
goog.require('photosure.scrolldiv');
goog.require('photosure.scrolldiv');
goog.require('goog.string');
goog.require('goog.string');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
photosure.bio.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selfie-src","selfie-src",156976163),"images/me.jpg",new cljs.core.Keyword(null,"about","about",1423892543),"My name is Charles Leblow.<br><br>\nPhotography has been a passion dating back to childhood.<br>\nI specialize in landscape and urban photography as well as family photography in informal settings or at your home. My work is done in 35mm format, primarily digital and also film, black and white, or custom editing options are available.<br>\nI am located in the San Francisco/Bay Area of California and am available for local hire for family events/portraits/informal photo shoots, small weddings, proms and parties, no job is too small.<br>\nPrints of my work are available only by special order. Please inquire for sizing, pricing, paper, and matting or framing options.<br>\nI could supply you with more written details about my skills as a photographer but I would prefer you judge me by my work, a sampling of which is available above in the Gallery, and not my writing skills.<br><br><br>\n\ncpleblow",new cljs.core.Keyword(null,"shares","shares",1096514365),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"facebook",new cljs.core.Keyword(null,"entity","entity",-450970276),"&#xe604;",new cljs.core.Keyword(null,"svg","svg",856789142),"images/facebook.svg",new cljs.core.Keyword(null,"href","href",-793805698),"https://www.facebook.com/cpleblow"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"tumblr",new cljs.core.Keyword(null,"entity","entity",-450970276),"&#xe605;",new cljs.core.Keyword(null,"svg","svg",856789142),"images/tumblr.svg",new cljs.core.Keyword(null,"href","href",-793805698),"http://cpleblow.tumblr.com/"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"email",new cljs.core.Keyword(null,"entity","entity",-450970276),"&#xe603;",new cljs.core.Keyword(null,"svg","svg",856789142),"images/envelope.svg",new cljs.core.Keyword(null,"href","href",-793805698),"mailto:tableof_5@comcast.net?Subject=One%20Love"], null)], null)], null));
photosure.bio.share_view = (function share_view(p__15467,owner){var map__15472 = p__15467;var map__15472__$1 = ((cljs.core.seq_QMARK_.call(null,map__15472))?cljs.core.apply.call(null,cljs.core.hash_map,map__15472):map__15472);var href = cljs.core.get.call(null,map__15472__$1,new cljs.core.Keyword(null,"href","href",-793805698));var svg = cljs.core.get.call(null,map__15472__$1,new cljs.core.Keyword(null,"svg","svg",856789142));var entity = cljs.core.get.call(null,map__15472__$1,new cljs.core.Keyword(null,"entity","entity",-450970276));var name = cljs.core.get.call(null,map__15472__$1,new cljs.core.Keyword(null,"name","name",1843675177));if(typeof photosure.bio.t15473 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.bio.t15473 = (function (name,entity,svg,href,map__15472,owner,p__15467,share_view,meta15474){
this.name = name;
this.entity = entity;
this.svg = svg;
this.href = href;
this.map__15472 = map__15472;
this.owner = owner;
this.p__15467 = p__15467;
this.share_view = share_view;
this.meta15474 = meta15474;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.bio.t15473.cljs$lang$type = true;
photosure.bio.t15473.cljs$lang$ctorStr = "photosure.bio/t15473";
photosure.bio.t15473.cljs$lang$ctorPrWriter = ((function (map__15472,map__15472__$1,href,svg,entity,name){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.bio/t15473");
});})(map__15472,map__15472__$1,href,svg,entity,name))
;
photosure.bio.t15473.prototype.om$core$IRender$ = true;
photosure.bio.t15473.prototype.om$core$IRender$render$arity$1 = ((function (map__15472,map__15472__$1,href,svg,entity,name){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.li({"className": "share"},React.DOM.a({"href": self__.href, "name": self__.name, "className": "share-link"},React.DOM.p({"className": "icon-share"},goog.string.unescapeEntities(self__.entity))));
});})(map__15472,map__15472__$1,href,svg,entity,name))
;
photosure.bio.t15473.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__15472,map__15472__$1,href,svg,entity,name){
return (function (_15475){var self__ = this;
var _15475__$1 = this;return self__.meta15474;
});})(map__15472,map__15472__$1,href,svg,entity,name))
;
photosure.bio.t15473.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__15472,map__15472__$1,href,svg,entity,name){
return (function (_15475,meta15474__$1){var self__ = this;
var _15475__$1 = this;return (new photosure.bio.t15473(self__.name,self__.entity,self__.svg,self__.href,self__.map__15472,self__.owner,self__.p__15467,self__.share_view,meta15474__$1));
});})(map__15472,map__15472__$1,href,svg,entity,name))
;
photosure.bio.__GT_t15473 = ((function (map__15472,map__15472__$1,href,svg,entity,name){
return (function __GT_t15473(name__$1,entity__$1,svg__$1,href__$1,map__15472__$2,owner__$1,p__15467__$1,share_view__$1,meta15474){return (new photosure.bio.t15473(name__$1,entity__$1,svg__$1,href__$1,map__15472__$2,owner__$1,p__15467__$1,share_view__$1,meta15474));
});})(map__15472,map__15472__$1,href,svg,entity,name))
;
}
return (new photosure.bio.t15473(name,entity,svg,href,map__15472__$1,owner,p__15467,share_view,null));
});
photosure.bio.shares_view = (function shares_view(shares,owner){if(typeof photosure.bio.t15479 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.bio.t15479 = (function (owner,shares,shares_view,meta15480){
this.owner = owner;
this.shares = shares;
this.shares_view = shares_view;
this.meta15480 = meta15480;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.bio.t15479.cljs$lang$type = true;
photosure.bio.t15479.cljs$lang$ctorStr = "photosure.bio/t15479";
photosure.bio.t15479.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.bio/t15479");
});
photosure.bio.t15479.prototype.om$core$IRender$ = true;
photosure.bio.t15479.prototype.om$core$IRender$render$arity$1 = (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return cljs.core.apply.call(null,om.dom.ul,{"className": "shares"},om.core.build_all.call(null,photosure.bio.share_view,self__.shares));
});
photosure.bio.t15479.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15481){var self__ = this;
var _15481__$1 = this;return self__.meta15480;
});
photosure.bio.t15479.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15481,meta15480__$1){var self__ = this;
var _15481__$1 = this;return (new photosure.bio.t15479(self__.owner,self__.shares,self__.shares_view,meta15480__$1));
});
photosure.bio.__GT_t15479 = (function __GT_t15479(owner__$1,shares__$1,shares_view__$1,meta15480){return (new photosure.bio.t15479(owner__$1,shares__$1,shares_view__$1,meta15480));
});
}
return (new photosure.bio.t15479(owner,shares,shares_view,null));
});
photosure.bio.bio = (function bio(p__15482,owner){var map__15487 = p__15482;var map__15487__$1 = ((cljs.core.seq_QMARK_.call(null,map__15487))?cljs.core.apply.call(null,cljs.core.hash_map,map__15487):map__15487);var app = map__15487__$1;var shares = cljs.core.get.call(null,map__15487__$1,new cljs.core.Keyword(null,"shares","shares",1096514365));var about = cljs.core.get.call(null,map__15487__$1,new cljs.core.Keyword(null,"about","about",1423892543));var selfie_src = cljs.core.get.call(null,map__15487__$1,new cljs.core.Keyword(null,"selfie-src","selfie-src",156976163));if(typeof photosure.bio.t15488 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.bio.t15488 = (function (selfie_src,about,shares,app,map__15487,owner,p__15482,bio,meta15489){
this.selfie_src = selfie_src;
this.about = about;
this.shares = shares;
this.app = app;
this.map__15487 = map__15487;
this.owner = owner;
this.p__15482 = p__15482;
this.bio = bio;
this.meta15489 = meta15489;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.bio.t15488.cljs$lang$type = true;
photosure.bio.t15488.cljs$lang$ctorStr = "photosure.bio/t15488";
photosure.bio.t15488.cljs$lang$ctorPrWriter = ((function (map__15487,map__15487__$1,app,shares,about,selfie_src){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.bio/t15488");
});})(map__15487,map__15487__$1,app,shares,about,selfie_src))
;
photosure.bio.t15488.prototype.om$core$IRender$ = true;
photosure.bio.t15488.prototype.om$core$IRender$render$arity$1 = ((function (map__15487,map__15487__$1,app,shares,about,selfie_src){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"id": "bio-container"},React.DOM.div({"id": "bio"},React.DOM.div({"id": "bio-liner"},React.DOM.img({"src": self__.selfie_src, "id": "selfie"}),React.DOM.div({"id": "info-container"},om.core.build.call(null,photosure.scrolldiv.scroll_div,self__.app,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"about-container"], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.p({"dangerouslySetInnerHTML": {"__html": self__.about}, "id": "about"},null)], null)], null)], null)),React.DOM.div({"className": "shares-container"},om.core.build.call(null,photosure.bio.shares_view,self__.shares))))));
});})(map__15487,map__15487__$1,app,shares,about,selfie_src))
;
photosure.bio.t15488.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__15487,map__15487__$1,app,shares,about,selfie_src){
return (function (_15490){var self__ = this;
var _15490__$1 = this;return self__.meta15489;
});})(map__15487,map__15487__$1,app,shares,about,selfie_src))
;
photosure.bio.t15488.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__15487,map__15487__$1,app,shares,about,selfie_src){
return (function (_15490,meta15489__$1){var self__ = this;
var _15490__$1 = this;return (new photosure.bio.t15488(self__.selfie_src,self__.about,self__.shares,self__.app,self__.map__15487,self__.owner,self__.p__15482,self__.bio,meta15489__$1));
});})(map__15487,map__15487__$1,app,shares,about,selfie_src))
;
photosure.bio.__GT_t15488 = ((function (map__15487,map__15487__$1,app,shares,about,selfie_src){
return (function __GT_t15488(selfie_src__$1,about__$1,shares__$1,app__$1,map__15487__$2,owner__$1,p__15482__$1,bio__$1,meta15489){return (new photosure.bio.t15488(selfie_src__$1,about__$1,shares__$1,app__$1,map__15487__$2,owner__$1,p__15482__$1,bio__$1,meta15489));
});})(map__15487,map__15487__$1,app,shares,about,selfie_src))
;
}
return (new photosure.bio.t15488(selfie_src,about,shares,app,map__15487__$1,owner,p__15482,bio,null));
});
photosure.bio.render = (function render(){return om.core.root.call(null,photosure.bio.bio,photosure.bio.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("dynamic-content")], null));
});

//# sourceMappingURL=bio.js.map