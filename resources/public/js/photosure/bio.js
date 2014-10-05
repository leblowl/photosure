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
photosure.bio.share_view = (function share_view(p__9963,owner){var map__9968 = p__9963;var map__9968__$1 = ((cljs.core.seq_QMARK_.call(null,map__9968))?cljs.core.apply.call(null,cljs.core.hash_map,map__9968):map__9968);var href = cljs.core.get.call(null,map__9968__$1,new cljs.core.Keyword(null,"href","href",-793805698));var svg = cljs.core.get.call(null,map__9968__$1,new cljs.core.Keyword(null,"svg","svg",856789142));var entity = cljs.core.get.call(null,map__9968__$1,new cljs.core.Keyword(null,"entity","entity",-450970276));var name = cljs.core.get.call(null,map__9968__$1,new cljs.core.Keyword(null,"name","name",1843675177));if(typeof photosure.bio.t9969 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.bio.t9969 = (function (name,entity,svg,href,map__9968,owner,p__9963,share_view,meta9970){
this.name = name;
this.entity = entity;
this.svg = svg;
this.href = href;
this.map__9968 = map__9968;
this.owner = owner;
this.p__9963 = p__9963;
this.share_view = share_view;
this.meta9970 = meta9970;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.bio.t9969.cljs$lang$type = true;
photosure.bio.t9969.cljs$lang$ctorStr = "photosure.bio/t9969";
photosure.bio.t9969.cljs$lang$ctorPrWriter = ((function (map__9968,map__9968__$1,href,svg,entity,name){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.bio/t9969");
});})(map__9968,map__9968__$1,href,svg,entity,name))
;
photosure.bio.t9969.prototype.om$core$IRender$ = true;
photosure.bio.t9969.prototype.om$core$IRender$render$arity$1 = ((function (map__9968,map__9968__$1,href,svg,entity,name){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.li({"className": "share"},React.DOM.a({"href": self__.href, "name": self__.name, "className": "share-link"},React.DOM.img({"src": self__.svg, "className": "share-icon"},null)));
});})(map__9968,map__9968__$1,href,svg,entity,name))
;
photosure.bio.t9969.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__9968,map__9968__$1,href,svg,entity,name){
return (function (_9971){var self__ = this;
var _9971__$1 = this;return self__.meta9970;
});})(map__9968,map__9968__$1,href,svg,entity,name))
;
photosure.bio.t9969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__9968,map__9968__$1,href,svg,entity,name){
return (function (_9971,meta9970__$1){var self__ = this;
var _9971__$1 = this;return (new photosure.bio.t9969(self__.name,self__.entity,self__.svg,self__.href,self__.map__9968,self__.owner,self__.p__9963,self__.share_view,meta9970__$1));
});})(map__9968,map__9968__$1,href,svg,entity,name))
;
photosure.bio.__GT_t9969 = ((function (map__9968,map__9968__$1,href,svg,entity,name){
return (function __GT_t9969(name__$1,entity__$1,svg__$1,href__$1,map__9968__$2,owner__$1,p__9963__$1,share_view__$1,meta9970){return (new photosure.bio.t9969(name__$1,entity__$1,svg__$1,href__$1,map__9968__$2,owner__$1,p__9963__$1,share_view__$1,meta9970));
});})(map__9968,map__9968__$1,href,svg,entity,name))
;
}
return (new photosure.bio.t9969(name,entity,svg,href,map__9968__$1,owner,p__9963,share_view,null));
});
photosure.bio.shares_view = (function shares_view(shares,owner){if(typeof photosure.bio.t9975 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.bio.t9975 = (function (owner,shares,shares_view,meta9976){
this.owner = owner;
this.shares = shares;
this.shares_view = shares_view;
this.meta9976 = meta9976;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.bio.t9975.cljs$lang$type = true;
photosure.bio.t9975.cljs$lang$ctorStr = "photosure.bio/t9975";
photosure.bio.t9975.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.bio/t9975");
});
photosure.bio.t9975.prototype.om$core$IRender$ = true;
photosure.bio.t9975.prototype.om$core$IRender$render$arity$1 = (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return cljs.core.apply.call(null,om.dom.ul,{"className": "shares"},om.core.build_all.call(null,photosure.bio.share_view,self__.shares));
});
photosure.bio.t9975.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9977){var self__ = this;
var _9977__$1 = this;return self__.meta9976;
});
photosure.bio.t9975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9977,meta9976__$1){var self__ = this;
var _9977__$1 = this;return (new photosure.bio.t9975(self__.owner,self__.shares,self__.shares_view,meta9976__$1));
});
photosure.bio.__GT_t9975 = (function __GT_t9975(owner__$1,shares__$1,shares_view__$1,meta9976){return (new photosure.bio.t9975(owner__$1,shares__$1,shares_view__$1,meta9976));
});
}
return (new photosure.bio.t9975(owner,shares,shares_view,null));
});
photosure.bio.bio = (function bio(p__9978,owner){var map__9983 = p__9978;var map__9983__$1 = ((cljs.core.seq_QMARK_.call(null,map__9983))?cljs.core.apply.call(null,cljs.core.hash_map,map__9983):map__9983);var app = map__9983__$1;var shares = cljs.core.get.call(null,map__9983__$1,new cljs.core.Keyword(null,"shares","shares",1096514365));var about = cljs.core.get.call(null,map__9983__$1,new cljs.core.Keyword(null,"about","about",1423892543));var selfie_src = cljs.core.get.call(null,map__9983__$1,new cljs.core.Keyword(null,"selfie-src","selfie-src",156976163));if(typeof photosure.bio.t9984 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.bio.t9984 = (function (selfie_src,about,shares,app,map__9983,owner,p__9978,bio,meta9985){
this.selfie_src = selfie_src;
this.about = about;
this.shares = shares;
this.app = app;
this.map__9983 = map__9983;
this.owner = owner;
this.p__9978 = p__9978;
this.bio = bio;
this.meta9985 = meta9985;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.bio.t9984.cljs$lang$type = true;
photosure.bio.t9984.cljs$lang$ctorStr = "photosure.bio/t9984";
photosure.bio.t9984.cljs$lang$ctorPrWriter = ((function (map__9983,map__9983__$1,app,shares,about,selfie_src){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.bio/t9984");
});})(map__9983,map__9983__$1,app,shares,about,selfie_src))
;
photosure.bio.t9984.prototype.om$core$IRender$ = true;
photosure.bio.t9984.prototype.om$core$IRender$render$arity$1 = ((function (map__9983,map__9983__$1,app,shares,about,selfie_src){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"id": "bio-container"},React.DOM.div({"id": "bio"},React.DOM.div({"id": "bio-liner"},React.DOM.img({"src": self__.selfie_src, "id": "selfie"}),React.DOM.div({"id": "info-container"},om.core.build.call(null,photosure.scrolldiv.scroll_div.call(null,React.DOM.p({"id": "about"},self__.about)),self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"about-container"], null)], null)),React.DOM.div({"className": "shares-container"},om.core.build.call(null,photosure.bio.shares_view,self__.shares))))));
});})(map__9983,map__9983__$1,app,shares,about,selfie_src))
;
photosure.bio.t9984.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__9983,map__9983__$1,app,shares,about,selfie_src){
return (function (_9986){var self__ = this;
var _9986__$1 = this;return self__.meta9985;
});})(map__9983,map__9983__$1,app,shares,about,selfie_src))
;
photosure.bio.t9984.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__9983,map__9983__$1,app,shares,about,selfie_src){
return (function (_9986,meta9985__$1){var self__ = this;
var _9986__$1 = this;return (new photosure.bio.t9984(self__.selfie_src,self__.about,self__.shares,self__.app,self__.map__9983,self__.owner,self__.p__9978,self__.bio,meta9985__$1));
});})(map__9983,map__9983__$1,app,shares,about,selfie_src))
;
photosure.bio.__GT_t9984 = ((function (map__9983,map__9983__$1,app,shares,about,selfie_src){
return (function __GT_t9984(selfie_src__$1,about__$1,shares__$1,app__$1,map__9983__$2,owner__$1,p__9978__$1,bio__$1,meta9985){return (new photosure.bio.t9984(selfie_src__$1,about__$1,shares__$1,app__$1,map__9983__$2,owner__$1,p__9978__$1,bio__$1,meta9985));
});})(map__9983,map__9983__$1,app,shares,about,selfie_src))
;
}
return (new photosure.bio.t9984(selfie_src,about,shares,app,map__9983__$1,owner,p__9978,bio,null));
});
photosure.bio.render = (function render(){return om.core.root.call(null,photosure.bio.bio,photosure.bio.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("dynamic-content")], null));
});

//# sourceMappingURL=bio.js.map