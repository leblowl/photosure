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
photosure.bio.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selfie-src","selfie-src",156976163),"images/me.jpg",new cljs.core.Keyword(null,"about","about",1423892543),"Hey my name is Charles Leblow, I like to take photos and this is my site. Welcome! Since we have some time to talk alone now, I will tell you all about my deepest darkest secrets of interal fire and ice alchemy of the sacred heart! Now here are the secrets: they are an array of 9 secrets, subdivided into 3 quadrants of 5 elliptical meshes, infinitely, outertwined into the fabric of life. One love, One life, One unity",new cljs.core.Keyword(null,"shares","shares",1096514365),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"facebook",new cljs.core.Keyword(null,"entity","entity",-450970276),"&#62220;",new cljs.core.Keyword(null,"svg","svg",856789142),"images/facebook.svg",new cljs.core.Keyword(null,"href","href",-793805698),"https://www.facebook.com/cpleblow"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"tumblr",new cljs.core.Keyword(null,"entity","entity",-450970276),"&#62229;",new cljs.core.Keyword(null,"svg","svg",856789142),"images/tumblr.svg",new cljs.core.Keyword(null,"href","href",-793805698),"http://cpleblow.tumblr.com/"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"email",new cljs.core.Keyword(null,"entity","entity",-450970276),"&#9993;",new cljs.core.Keyword(null,"svg","svg",856789142),"images/envelope.svg",new cljs.core.Keyword(null,"href","href",-793805698),"mailto:tableof_5@comcast.net?Subject=One%20Love"], null)], null)], null));
photosure.bio.share_view = (function share_view(p__12953,owner){var map__12958 = p__12953;var map__12958__$1 = ((cljs.core.seq_QMARK_.call(null,map__12958))?cljs.core.apply.call(null,cljs.core.hash_map,map__12958):map__12958);var href = cljs.core.get.call(null,map__12958__$1,new cljs.core.Keyword(null,"href","href",-793805698));var svg = cljs.core.get.call(null,map__12958__$1,new cljs.core.Keyword(null,"svg","svg",856789142));var entity = cljs.core.get.call(null,map__12958__$1,new cljs.core.Keyword(null,"entity","entity",-450970276));var name = cljs.core.get.call(null,map__12958__$1,new cljs.core.Keyword(null,"name","name",1843675177));if(typeof photosure.bio.t12959 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.bio.t12959 = (function (name,entity,svg,href,map__12958,owner,p__12953,share_view,meta12960){
this.name = name;
this.entity = entity;
this.svg = svg;
this.href = href;
this.map__12958 = map__12958;
this.owner = owner;
this.p__12953 = p__12953;
this.share_view = share_view;
this.meta12960 = meta12960;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.bio.t12959.cljs$lang$type = true;
photosure.bio.t12959.cljs$lang$ctorStr = "photosure.bio/t12959";
photosure.bio.t12959.cljs$lang$ctorPrWriter = ((function (map__12958,map__12958__$1,href,svg,entity,name){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.bio/t12959");
});})(map__12958,map__12958__$1,href,svg,entity,name))
;
photosure.bio.t12959.prototype.om$core$IRender$ = true;
photosure.bio.t12959.prototype.om$core$IRender$render$arity$1 = ((function (map__12958,map__12958__$1,href,svg,entity,name){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.li({"className": "share"},React.DOM.a({"href": self__.href, "name": self__.name, "className": "share-link"},React.DOM.img({"src": self__.svg, "className": "share-icon"},null)));
});})(map__12958,map__12958__$1,href,svg,entity,name))
;
photosure.bio.t12959.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__12958,map__12958__$1,href,svg,entity,name){
return (function (_12961){var self__ = this;
var _12961__$1 = this;return self__.meta12960;
});})(map__12958,map__12958__$1,href,svg,entity,name))
;
photosure.bio.t12959.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__12958,map__12958__$1,href,svg,entity,name){
return (function (_12961,meta12960__$1){var self__ = this;
var _12961__$1 = this;return (new photosure.bio.t12959(self__.name,self__.entity,self__.svg,self__.href,self__.map__12958,self__.owner,self__.p__12953,self__.share_view,meta12960__$1));
});})(map__12958,map__12958__$1,href,svg,entity,name))
;
photosure.bio.__GT_t12959 = ((function (map__12958,map__12958__$1,href,svg,entity,name){
return (function __GT_t12959(name__$1,entity__$1,svg__$1,href__$1,map__12958__$2,owner__$1,p__12953__$1,share_view__$1,meta12960){return (new photosure.bio.t12959(name__$1,entity__$1,svg__$1,href__$1,map__12958__$2,owner__$1,p__12953__$1,share_view__$1,meta12960));
});})(map__12958,map__12958__$1,href,svg,entity,name))
;
}
return (new photosure.bio.t12959(name,entity,svg,href,map__12958__$1,owner,p__12953,share_view,null));
});
photosure.bio.shares_view = (function shares_view(shares,owner){if(typeof photosure.bio.t12965 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.bio.t12965 = (function (owner,shares,shares_view,meta12966){
this.owner = owner;
this.shares = shares;
this.shares_view = shares_view;
this.meta12966 = meta12966;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.bio.t12965.cljs$lang$type = true;
photosure.bio.t12965.cljs$lang$ctorStr = "photosure.bio/t12965";
photosure.bio.t12965.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.bio/t12965");
});
photosure.bio.t12965.prototype.om$core$IRender$ = true;
photosure.bio.t12965.prototype.om$core$IRender$render$arity$1 = (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return cljs.core.apply.call(null,om.dom.ul,{"className": "shares"},om.core.build_all.call(null,photosure.bio.share_view,self__.shares));
});
photosure.bio.t12965.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12967){var self__ = this;
var _12967__$1 = this;return self__.meta12966;
});
photosure.bio.t12965.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12967,meta12966__$1){var self__ = this;
var _12967__$1 = this;return (new photosure.bio.t12965(self__.owner,self__.shares,self__.shares_view,meta12966__$1));
});
photosure.bio.__GT_t12965 = (function __GT_t12965(owner__$1,shares__$1,shares_view__$1,meta12966){return (new photosure.bio.t12965(owner__$1,shares__$1,shares_view__$1,meta12966));
});
}
return (new photosure.bio.t12965(owner,shares,shares_view,null));
});
photosure.bio.bio = (function bio(p__12968,owner){var map__12973 = p__12968;var map__12973__$1 = ((cljs.core.seq_QMARK_.call(null,map__12973))?cljs.core.apply.call(null,cljs.core.hash_map,map__12973):map__12973);var app = map__12973__$1;var shares = cljs.core.get.call(null,map__12973__$1,new cljs.core.Keyword(null,"shares","shares",1096514365));var about = cljs.core.get.call(null,map__12973__$1,new cljs.core.Keyword(null,"about","about",1423892543));var selfie_src = cljs.core.get.call(null,map__12973__$1,new cljs.core.Keyword(null,"selfie-src","selfie-src",156976163));if(typeof photosure.bio.t12974 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.bio.t12974 = (function (selfie_src,about,shares,app,map__12973,owner,p__12968,bio,meta12975){
this.selfie_src = selfie_src;
this.about = about;
this.shares = shares;
this.app = app;
this.map__12973 = map__12973;
this.owner = owner;
this.p__12968 = p__12968;
this.bio = bio;
this.meta12975 = meta12975;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.bio.t12974.cljs$lang$type = true;
photosure.bio.t12974.cljs$lang$ctorStr = "photosure.bio/t12974";
photosure.bio.t12974.cljs$lang$ctorPrWriter = ((function (map__12973,map__12973__$1,app,shares,about,selfie_src){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.bio/t12974");
});})(map__12973,map__12973__$1,app,shares,about,selfie_src))
;
photosure.bio.t12974.prototype.om$core$IRender$ = true;
photosure.bio.t12974.prototype.om$core$IRender$render$arity$1 = ((function (map__12973,map__12973__$1,app,shares,about,selfie_src){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"id": "bio-container"},React.DOM.div({"id": "bio"},React.DOM.div({"id": "bio-liner"},React.DOM.img({"src": self__.selfie_src, "id": "selfie"}),React.DOM.div({"id": "info-container"},om.core.build.call(null,photosure.scrolldiv.scroll_div,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"about-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.p({"id": "about"},self__.about)], null)], null)], null)),React.DOM.div({"className": "shares-container"},om.core.build.call(null,photosure.bio.shares_view,self__.shares))))));
});})(map__12973,map__12973__$1,app,shares,about,selfie_src))
;
photosure.bio.t12974.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__12973,map__12973__$1,app,shares,about,selfie_src){
return (function (_12976){var self__ = this;
var _12976__$1 = this;return self__.meta12975;
});})(map__12973,map__12973__$1,app,shares,about,selfie_src))
;
photosure.bio.t12974.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__12973,map__12973__$1,app,shares,about,selfie_src){
return (function (_12976,meta12975__$1){var self__ = this;
var _12976__$1 = this;return (new photosure.bio.t12974(self__.selfie_src,self__.about,self__.shares,self__.app,self__.map__12973,self__.owner,self__.p__12968,self__.bio,meta12975__$1));
});})(map__12973,map__12973__$1,app,shares,about,selfie_src))
;
photosure.bio.__GT_t12974 = ((function (map__12973,map__12973__$1,app,shares,about,selfie_src){
return (function __GT_t12974(selfie_src__$1,about__$1,shares__$1,app__$1,map__12973__$2,owner__$1,p__12968__$1,bio__$1,meta12975){return (new photosure.bio.t12974(selfie_src__$1,about__$1,shares__$1,app__$1,map__12973__$2,owner__$1,p__12968__$1,bio__$1,meta12975));
});})(map__12973,map__12973__$1,app,shares,about,selfie_src))
;
}
return (new photosure.bio.t12974(selfie_src,about,shares,app,map__12973__$1,owner,p__12968,bio,null));
});
photosure.bio.render = (function render(){return om.core.root.call(null,photosure.bio.bio,photosure.bio.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("dynamic-content")], null));
});

//# sourceMappingURL=bio.js.map