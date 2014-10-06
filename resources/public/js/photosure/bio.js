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
photosure.bio.share_view = (function share_view(p__10309,owner){var map__10314 = p__10309;var map__10314__$1 = ((cljs.core.seq_QMARK_.call(null,map__10314))?cljs.core.apply.call(null,cljs.core.hash_map,map__10314):map__10314);var href = cljs.core.get.call(null,map__10314__$1,new cljs.core.Keyword(null,"href","href",-793805698));var svg = cljs.core.get.call(null,map__10314__$1,new cljs.core.Keyword(null,"svg","svg",856789142));var entity = cljs.core.get.call(null,map__10314__$1,new cljs.core.Keyword(null,"entity","entity",-450970276));var name = cljs.core.get.call(null,map__10314__$1,new cljs.core.Keyword(null,"name","name",1843675177));if(typeof photosure.bio.t10315 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.bio.t10315 = (function (name,entity,svg,href,map__10314,owner,p__10309,share_view,meta10316){
this.name = name;
this.entity = entity;
this.svg = svg;
this.href = href;
this.map__10314 = map__10314;
this.owner = owner;
this.p__10309 = p__10309;
this.share_view = share_view;
this.meta10316 = meta10316;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.bio.t10315.cljs$lang$type = true;
photosure.bio.t10315.cljs$lang$ctorStr = "photosure.bio/t10315";
photosure.bio.t10315.cljs$lang$ctorPrWriter = ((function (map__10314,map__10314__$1,href,svg,entity,name){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.bio/t10315");
});})(map__10314,map__10314__$1,href,svg,entity,name))
;
photosure.bio.t10315.prototype.om$core$IRender$ = true;
photosure.bio.t10315.prototype.om$core$IRender$render$arity$1 = ((function (map__10314,map__10314__$1,href,svg,entity,name){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.li({"className": "share"},React.DOM.a({"href": self__.href, "name": self__.name, "className": "share-link"},React.DOM.img({"src": self__.svg, "className": "share-icon"},null)));
});})(map__10314,map__10314__$1,href,svg,entity,name))
;
photosure.bio.t10315.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10314,map__10314__$1,href,svg,entity,name){
return (function (_10317){var self__ = this;
var _10317__$1 = this;return self__.meta10316;
});})(map__10314,map__10314__$1,href,svg,entity,name))
;
photosure.bio.t10315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10314,map__10314__$1,href,svg,entity,name){
return (function (_10317,meta10316__$1){var self__ = this;
var _10317__$1 = this;return (new photosure.bio.t10315(self__.name,self__.entity,self__.svg,self__.href,self__.map__10314,self__.owner,self__.p__10309,self__.share_view,meta10316__$1));
});})(map__10314,map__10314__$1,href,svg,entity,name))
;
photosure.bio.__GT_t10315 = ((function (map__10314,map__10314__$1,href,svg,entity,name){
return (function __GT_t10315(name__$1,entity__$1,svg__$1,href__$1,map__10314__$2,owner__$1,p__10309__$1,share_view__$1,meta10316){return (new photosure.bio.t10315(name__$1,entity__$1,svg__$1,href__$1,map__10314__$2,owner__$1,p__10309__$1,share_view__$1,meta10316));
});})(map__10314,map__10314__$1,href,svg,entity,name))
;
}
return (new photosure.bio.t10315(name,entity,svg,href,map__10314__$1,owner,p__10309,share_view,null));
});
photosure.bio.shares_view = (function shares_view(shares,owner){if(typeof photosure.bio.t10321 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.bio.t10321 = (function (owner,shares,shares_view,meta10322){
this.owner = owner;
this.shares = shares;
this.shares_view = shares_view;
this.meta10322 = meta10322;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.bio.t10321.cljs$lang$type = true;
photosure.bio.t10321.cljs$lang$ctorStr = "photosure.bio/t10321";
photosure.bio.t10321.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.bio/t10321");
});
photosure.bio.t10321.prototype.om$core$IRender$ = true;
photosure.bio.t10321.prototype.om$core$IRender$render$arity$1 = (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return cljs.core.apply.call(null,om.dom.ul,{"className": "shares"},om.core.build_all.call(null,photosure.bio.share_view,self__.shares));
});
photosure.bio.t10321.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10323){var self__ = this;
var _10323__$1 = this;return self__.meta10322;
});
photosure.bio.t10321.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10323,meta10322__$1){var self__ = this;
var _10323__$1 = this;return (new photosure.bio.t10321(self__.owner,self__.shares,self__.shares_view,meta10322__$1));
});
photosure.bio.__GT_t10321 = (function __GT_t10321(owner__$1,shares__$1,shares_view__$1,meta10322){return (new photosure.bio.t10321(owner__$1,shares__$1,shares_view__$1,meta10322));
});
}
return (new photosure.bio.t10321(owner,shares,shares_view,null));
});
photosure.bio.bio = (function bio(p__10324,owner){var map__10329 = p__10324;var map__10329__$1 = ((cljs.core.seq_QMARK_.call(null,map__10329))?cljs.core.apply.call(null,cljs.core.hash_map,map__10329):map__10329);var app = map__10329__$1;var shares = cljs.core.get.call(null,map__10329__$1,new cljs.core.Keyword(null,"shares","shares",1096514365));var about = cljs.core.get.call(null,map__10329__$1,new cljs.core.Keyword(null,"about","about",1423892543));var selfie_src = cljs.core.get.call(null,map__10329__$1,new cljs.core.Keyword(null,"selfie-src","selfie-src",156976163));if(typeof photosure.bio.t10330 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.bio.t10330 = (function (selfie_src,about,shares,app,map__10329,owner,p__10324,bio,meta10331){
this.selfie_src = selfie_src;
this.about = about;
this.shares = shares;
this.app = app;
this.map__10329 = map__10329;
this.owner = owner;
this.p__10324 = p__10324;
this.bio = bio;
this.meta10331 = meta10331;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.bio.t10330.cljs$lang$type = true;
photosure.bio.t10330.cljs$lang$ctorStr = "photosure.bio/t10330";
photosure.bio.t10330.cljs$lang$ctorPrWriter = ((function (map__10329,map__10329__$1,app,shares,about,selfie_src){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.bio/t10330");
});})(map__10329,map__10329__$1,app,shares,about,selfie_src))
;
photosure.bio.t10330.prototype.om$core$IRender$ = true;
photosure.bio.t10330.prototype.om$core$IRender$render$arity$1 = ((function (map__10329,map__10329__$1,app,shares,about,selfie_src){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"id": "bio-container"},React.DOM.div({"id": "bio"},React.DOM.div({"id": "bio-liner"},React.DOM.img({"src": self__.selfie_src, "id": "selfie"}),React.DOM.div({"id": "info-container"},om.core.build.call(null,photosure.scrolldiv.scroll_div,self__.app,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"about-container"], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.p({"id": "about"},self__.about)], null)], null)], null)),React.DOM.div({"className": "shares-container"},om.core.build.call(null,photosure.bio.shares_view,self__.shares))))));
});})(map__10329,map__10329__$1,app,shares,about,selfie_src))
;
photosure.bio.t10330.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10329,map__10329__$1,app,shares,about,selfie_src){
return (function (_10332){var self__ = this;
var _10332__$1 = this;return self__.meta10331;
});})(map__10329,map__10329__$1,app,shares,about,selfie_src))
;
photosure.bio.t10330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10329,map__10329__$1,app,shares,about,selfie_src){
return (function (_10332,meta10331__$1){var self__ = this;
var _10332__$1 = this;return (new photosure.bio.t10330(self__.selfie_src,self__.about,self__.shares,self__.app,self__.map__10329,self__.owner,self__.p__10324,self__.bio,meta10331__$1));
});})(map__10329,map__10329__$1,app,shares,about,selfie_src))
;
photosure.bio.__GT_t10330 = ((function (map__10329,map__10329__$1,app,shares,about,selfie_src){
return (function __GT_t10330(selfie_src__$1,about__$1,shares__$1,app__$1,map__10329__$2,owner__$1,p__10324__$1,bio__$1,meta10331){return (new photosure.bio.t10330(selfie_src__$1,about__$1,shares__$1,app__$1,map__10329__$2,owner__$1,p__10324__$1,bio__$1,meta10331));
});})(map__10329,map__10329__$1,app,shares,about,selfie_src))
;
}
return (new photosure.bio.t10330(selfie_src,about,shares,app,map__10329__$1,owner,p__10324,bio,null));
});
photosure.bio.render = (function render(){return om.core.root.call(null,photosure.bio.bio,photosure.bio.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("dynamic-content")], null));
});

//# sourceMappingURL=bio.js.map