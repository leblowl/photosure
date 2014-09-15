// Compiled by ClojureScript 0.0-2322
goog.provide('photosure.bio');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
photosure.bio.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selfie-src","selfie-src",156976163),"images/me.jpg",new cljs.core.Keyword(null,"about","about",1423892543),"Hey my name is Charles Leblow, I like to take photos and this is my site. Welcome! Since we have some time to talk alone now, I will tell you all about my deepest darkest secrets of interal fire and ice alchemy of the sacred heart! Now here are the secrets: they are an array of 9 secrets, subdivided into 3 quadrants of 5 elliptical meshes, infinitely, outertwined into the fabric of life. One love, One life, One unity",new cljs.core.Keyword(null,"shares","shares",1096514365),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"facebook",new cljs.core.Keyword(null,"entity","entity",-450970276),"&#62220;",new cljs.core.Keyword(null,"href","href",-793805698),"https://www.facebook.com/cpleblow"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"tumblr",new cljs.core.Keyword(null,"entity","entity",-450970276),"&#62229;",new cljs.core.Keyword(null,"href","href",-793805698),"http://cpleblow.tumblr.com/"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"email",new cljs.core.Keyword(null,"entity","entity",-450970276),"&#9993;",new cljs.core.Keyword(null,"href","href",-793805698),"mailto:tableof_5@comcast.net?Subject=One%20Love"], null)], null)], null));
photosure.bio.share_view = (function share_view(p__9810,owner){var map__9815 = p__9810;var map__9815__$1 = ((cljs.core.seq_QMARK_.call(null,map__9815))?cljs.core.apply.call(null,cljs.core.hash_map,map__9815):map__9815);var href = cljs.core.get.call(null,map__9815__$1,new cljs.core.Keyword(null,"href","href",-793805698));var entity = cljs.core.get.call(null,map__9815__$1,new cljs.core.Keyword(null,"entity","entity",-450970276));var name = cljs.core.get.call(null,map__9815__$1,new cljs.core.Keyword(null,"name","name",1843675177));if(typeof photosure.bio.t9816 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.bio.t9816 = (function (name,entity,href,map__9815,owner,p__9810,share_view,meta9817){
this.name = name;
this.entity = entity;
this.href = href;
this.map__9815 = map__9815;
this.owner = owner;
this.p__9810 = p__9810;
this.share_view = share_view;
this.meta9817 = meta9817;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.bio.t9816.cljs$lang$type = true;
photosure.bio.t9816.cljs$lang$ctorStr = "photosure.bio/t9816";
photosure.bio.t9816.cljs$lang$ctorPrWriter = ((function (map__9815,map__9815__$1,href,entity,name){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.bio/t9816");
});})(map__9815,map__9815__$1,href,entity,name))
;
photosure.bio.t9816.prototype.om$core$IRender$ = true;
photosure.bio.t9816.prototype.om$core$IRender$render$arity$1 = ((function (map__9815,map__9815__$1,href,entity,name){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.li({"className": "share"},React.DOM.a({"href": self__.href, "name": self__.name, "className": "share-link"},React.DOM.span({"className": "share-icon"},goog.string.unescapeEntities(self__.entity))));
});})(map__9815,map__9815__$1,href,entity,name))
;
photosure.bio.t9816.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__9815,map__9815__$1,href,entity,name){
return (function (_9818){var self__ = this;
var _9818__$1 = this;return self__.meta9817;
});})(map__9815,map__9815__$1,href,entity,name))
;
photosure.bio.t9816.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__9815,map__9815__$1,href,entity,name){
return (function (_9818,meta9817__$1){var self__ = this;
var _9818__$1 = this;return (new photosure.bio.t9816(self__.name,self__.entity,self__.href,self__.map__9815,self__.owner,self__.p__9810,self__.share_view,meta9817__$1));
});})(map__9815,map__9815__$1,href,entity,name))
;
photosure.bio.__GT_t9816 = ((function (map__9815,map__9815__$1,href,entity,name){
return (function __GT_t9816(name__$1,entity__$1,href__$1,map__9815__$2,owner__$1,p__9810__$1,share_view__$1,meta9817){return (new photosure.bio.t9816(name__$1,entity__$1,href__$1,map__9815__$2,owner__$1,p__9810__$1,share_view__$1,meta9817));
});})(map__9815,map__9815__$1,href,entity,name))
;
}
return (new photosure.bio.t9816(name,entity,href,map__9815__$1,owner,p__9810,share_view,null));
});
photosure.bio.shares_view = (function shares_view(shares,owner){if(typeof photosure.bio.t9822 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.bio.t9822 = (function (owner,shares,shares_view,meta9823){
this.owner = owner;
this.shares = shares;
this.shares_view = shares_view;
this.meta9823 = meta9823;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.bio.t9822.cljs$lang$type = true;
photosure.bio.t9822.cljs$lang$ctorStr = "photosure.bio/t9822";
photosure.bio.t9822.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.bio/t9822");
});
photosure.bio.t9822.prototype.om$core$IRender$ = true;
photosure.bio.t9822.prototype.om$core$IRender$render$arity$1 = (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return cljs.core.apply.call(null,om.dom.ul,{"className": "shares"},om.core.build_all.call(null,photosure.bio.share_view,self__.shares));
});
photosure.bio.t9822.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9824){var self__ = this;
var _9824__$1 = this;return self__.meta9823;
});
photosure.bio.t9822.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9824,meta9823__$1){var self__ = this;
var _9824__$1 = this;return (new photosure.bio.t9822(self__.owner,self__.shares,self__.shares_view,meta9823__$1));
});
photosure.bio.__GT_t9822 = (function __GT_t9822(owner__$1,shares__$1,shares_view__$1,meta9823){return (new photosure.bio.t9822(owner__$1,shares__$1,shares_view__$1,meta9823));
});
}
return (new photosure.bio.t9822(owner,shares,shares_view,null));
});
photosure.bio.bio = (function bio(p__9825,owner){var map__9830 = p__9825;var map__9830__$1 = ((cljs.core.seq_QMARK_.call(null,map__9830))?cljs.core.apply.call(null,cljs.core.hash_map,map__9830):map__9830);var shares = cljs.core.get.call(null,map__9830__$1,new cljs.core.Keyword(null,"shares","shares",1096514365));var about = cljs.core.get.call(null,map__9830__$1,new cljs.core.Keyword(null,"about","about",1423892543));var selfie_src = cljs.core.get.call(null,map__9830__$1,new cljs.core.Keyword(null,"selfie-src","selfie-src",156976163));if(typeof photosure.bio.t9831 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.bio.t9831 = (function (selfie_src,about,shares,map__9830,owner,p__9825,bio,meta9832){
this.selfie_src = selfie_src;
this.about = about;
this.shares = shares;
this.map__9830 = map__9830;
this.owner = owner;
this.p__9825 = p__9825;
this.bio = bio;
this.meta9832 = meta9832;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.bio.t9831.cljs$lang$type = true;
photosure.bio.t9831.cljs$lang$ctorStr = "photosure.bio/t9831";
photosure.bio.t9831.cljs$lang$ctorPrWriter = ((function (map__9830,map__9830__$1,shares,about,selfie_src){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.bio/t9831");
});})(map__9830,map__9830__$1,shares,about,selfie_src))
;
photosure.bio.t9831.prototype.om$core$IRender$ = true;
photosure.bio.t9831.prototype.om$core$IRender$render$arity$1 = ((function (map__9830,map__9830__$1,shares,about,selfie_src){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"id": "bio-container"},React.DOM.div({"id": "bio"},React.DOM.div({"id": "bio-liner"},React.DOM.img({"src": self__.selfie_src, "id": "selfie"}),React.DOM.div({"id": "info-container"},React.DOM.div({"id": "about-container"},React.DOM.p({"id": "about"},self__.about)),React.DOM.div({"className": "shares-container"},om.core.build.call(null,photosure.bio.shares_view,self__.shares))))));
});})(map__9830,map__9830__$1,shares,about,selfie_src))
;
photosure.bio.t9831.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__9830,map__9830__$1,shares,about,selfie_src){
return (function (_9833){var self__ = this;
var _9833__$1 = this;return self__.meta9832;
});})(map__9830,map__9830__$1,shares,about,selfie_src))
;
photosure.bio.t9831.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__9830,map__9830__$1,shares,about,selfie_src){
return (function (_9833,meta9832__$1){var self__ = this;
var _9833__$1 = this;return (new photosure.bio.t9831(self__.selfie_src,self__.about,self__.shares,self__.map__9830,self__.owner,self__.p__9825,self__.bio,meta9832__$1));
});})(map__9830,map__9830__$1,shares,about,selfie_src))
;
photosure.bio.__GT_t9831 = ((function (map__9830,map__9830__$1,shares,about,selfie_src){
return (function __GT_t9831(selfie_src__$1,about__$1,shares__$1,map__9830__$2,owner__$1,p__9825__$1,bio__$1,meta9832){return (new photosure.bio.t9831(selfie_src__$1,about__$1,shares__$1,map__9830__$2,owner__$1,p__9825__$1,bio__$1,meta9832));
});})(map__9830,map__9830__$1,shares,about,selfie_src))
;
}
return (new photosure.bio.t9831(selfie_src,about,shares,map__9830__$1,owner,p__9825,bio,null));
});
photosure.bio.render = (function render(){return om.core.root.call(null,photosure.bio.bio,photosure.bio.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("dynamic-content")], null));
});

//# sourceMappingURL=bio.js.map