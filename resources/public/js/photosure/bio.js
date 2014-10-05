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
photosure.bio.share_view = (function share_view(p__10011,owner){var map__10016 = p__10011;var map__10016__$1 = ((cljs.core.seq_QMARK_.call(null,map__10016))?cljs.core.apply.call(null,cljs.core.hash_map,map__10016):map__10016);var href = cljs.core.get.call(null,map__10016__$1,new cljs.core.Keyword(null,"href","href",-793805698));var svg = cljs.core.get.call(null,map__10016__$1,new cljs.core.Keyword(null,"svg","svg",856789142));var entity = cljs.core.get.call(null,map__10016__$1,new cljs.core.Keyword(null,"entity","entity",-450970276));var name = cljs.core.get.call(null,map__10016__$1,new cljs.core.Keyword(null,"name","name",1843675177));if(typeof photosure.bio.t10017 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.bio.t10017 = (function (name,entity,svg,href,map__10016,owner,p__10011,share_view,meta10018){
this.name = name;
this.entity = entity;
this.svg = svg;
this.href = href;
this.map__10016 = map__10016;
this.owner = owner;
this.p__10011 = p__10011;
this.share_view = share_view;
this.meta10018 = meta10018;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.bio.t10017.cljs$lang$type = true;
photosure.bio.t10017.cljs$lang$ctorStr = "photosure.bio/t10017";
photosure.bio.t10017.cljs$lang$ctorPrWriter = ((function (map__10016,map__10016__$1,href,svg,entity,name){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.bio/t10017");
});})(map__10016,map__10016__$1,href,svg,entity,name))
;
photosure.bio.t10017.prototype.om$core$IRender$ = true;
photosure.bio.t10017.prototype.om$core$IRender$render$arity$1 = ((function (map__10016,map__10016__$1,href,svg,entity,name){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.li({"className": "share"},React.DOM.a({"href": self__.href, "name": self__.name, "className": "share-link"},React.DOM.img({"src": self__.svg, "className": "share-icon"},null)));
});})(map__10016,map__10016__$1,href,svg,entity,name))
;
photosure.bio.t10017.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10016,map__10016__$1,href,svg,entity,name){
return (function (_10019){var self__ = this;
var _10019__$1 = this;return self__.meta10018;
});})(map__10016,map__10016__$1,href,svg,entity,name))
;
photosure.bio.t10017.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10016,map__10016__$1,href,svg,entity,name){
return (function (_10019,meta10018__$1){var self__ = this;
var _10019__$1 = this;return (new photosure.bio.t10017(self__.name,self__.entity,self__.svg,self__.href,self__.map__10016,self__.owner,self__.p__10011,self__.share_view,meta10018__$1));
});})(map__10016,map__10016__$1,href,svg,entity,name))
;
photosure.bio.__GT_t10017 = ((function (map__10016,map__10016__$1,href,svg,entity,name){
return (function __GT_t10017(name__$1,entity__$1,svg__$1,href__$1,map__10016__$2,owner__$1,p__10011__$1,share_view__$1,meta10018){return (new photosure.bio.t10017(name__$1,entity__$1,svg__$1,href__$1,map__10016__$2,owner__$1,p__10011__$1,share_view__$1,meta10018));
});})(map__10016,map__10016__$1,href,svg,entity,name))
;
}
return (new photosure.bio.t10017(name,entity,svg,href,map__10016__$1,owner,p__10011,share_view,null));
});
photosure.bio.shares_view = (function shares_view(shares,owner){if(typeof photosure.bio.t10023 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.bio.t10023 = (function (owner,shares,shares_view,meta10024){
this.owner = owner;
this.shares = shares;
this.shares_view = shares_view;
this.meta10024 = meta10024;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.bio.t10023.cljs$lang$type = true;
photosure.bio.t10023.cljs$lang$ctorStr = "photosure.bio/t10023";
photosure.bio.t10023.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.bio/t10023");
});
photosure.bio.t10023.prototype.om$core$IRender$ = true;
photosure.bio.t10023.prototype.om$core$IRender$render$arity$1 = (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return cljs.core.apply.call(null,om.dom.ul,{"className": "shares"},om.core.build_all.call(null,photosure.bio.share_view,self__.shares));
});
photosure.bio.t10023.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10025){var self__ = this;
var _10025__$1 = this;return self__.meta10024;
});
photosure.bio.t10023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10025,meta10024__$1){var self__ = this;
var _10025__$1 = this;return (new photosure.bio.t10023(self__.owner,self__.shares,self__.shares_view,meta10024__$1));
});
photosure.bio.__GT_t10023 = (function __GT_t10023(owner__$1,shares__$1,shares_view__$1,meta10024){return (new photosure.bio.t10023(owner__$1,shares__$1,shares_view__$1,meta10024));
});
}
return (new photosure.bio.t10023(owner,shares,shares_view,null));
});
photosure.bio.bio = (function bio(p__10026,owner){var map__10031 = p__10026;var map__10031__$1 = ((cljs.core.seq_QMARK_.call(null,map__10031))?cljs.core.apply.call(null,cljs.core.hash_map,map__10031):map__10031);var shares = cljs.core.get.call(null,map__10031__$1,new cljs.core.Keyword(null,"shares","shares",1096514365));var about = cljs.core.get.call(null,map__10031__$1,new cljs.core.Keyword(null,"about","about",1423892543));var selfie_src = cljs.core.get.call(null,map__10031__$1,new cljs.core.Keyword(null,"selfie-src","selfie-src",156976163));if(typeof photosure.bio.t10032 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.bio.t10032 = (function (selfie_src,about,shares,map__10031,owner,p__10026,bio,meta10033){
this.selfie_src = selfie_src;
this.about = about;
this.shares = shares;
this.map__10031 = map__10031;
this.owner = owner;
this.p__10026 = p__10026;
this.bio = bio;
this.meta10033 = meta10033;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.bio.t10032.cljs$lang$type = true;
photosure.bio.t10032.cljs$lang$ctorStr = "photosure.bio/t10032";
photosure.bio.t10032.cljs$lang$ctorPrWriter = ((function (map__10031,map__10031__$1,shares,about,selfie_src){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.bio/t10032");
});})(map__10031,map__10031__$1,shares,about,selfie_src))
;
photosure.bio.t10032.prototype.om$core$IRender$ = true;
photosure.bio.t10032.prototype.om$core$IRender$render$arity$1 = ((function (map__10031,map__10031__$1,shares,about,selfie_src){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"id": "bio-container"},React.DOM.div({"id": "bio"},React.DOM.div({"id": "bio-liner"},React.DOM.img({"src": self__.selfie_src, "id": "selfie"}),React.DOM.div({"id": "info-container"},React.DOM.div({"id": "about-container"},React.DOM.p({"id": "about"},self__.about)),React.DOM.div({"className": "shares-container"},om.core.build.call(null,photosure.bio.shares_view,self__.shares))))));
});})(map__10031,map__10031__$1,shares,about,selfie_src))
;
photosure.bio.t10032.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10031,map__10031__$1,shares,about,selfie_src){
return (function (_10034){var self__ = this;
var _10034__$1 = this;return self__.meta10033;
});})(map__10031,map__10031__$1,shares,about,selfie_src))
;
photosure.bio.t10032.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10031,map__10031__$1,shares,about,selfie_src){
return (function (_10034,meta10033__$1){var self__ = this;
var _10034__$1 = this;return (new photosure.bio.t10032(self__.selfie_src,self__.about,self__.shares,self__.map__10031,self__.owner,self__.p__10026,self__.bio,meta10033__$1));
});})(map__10031,map__10031__$1,shares,about,selfie_src))
;
photosure.bio.__GT_t10032 = ((function (map__10031,map__10031__$1,shares,about,selfie_src){
return (function __GT_t10032(selfie_src__$1,about__$1,shares__$1,map__10031__$2,owner__$1,p__10026__$1,bio__$1,meta10033){return (new photosure.bio.t10032(selfie_src__$1,about__$1,shares__$1,map__10031__$2,owner__$1,p__10026__$1,bio__$1,meta10033));
});})(map__10031,map__10031__$1,shares,about,selfie_src))
;
}
return (new photosure.bio.t10032(selfie_src,about,shares,map__10031__$1,owner,p__10026,bio,null));
});
photosure.bio.render = (function render(){return om.core.root.call(null,photosure.bio.bio,photosure.bio.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("dynamic-content")], null));
});

//# sourceMappingURL=bio.js.map