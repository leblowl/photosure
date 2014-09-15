// Compiled by ClojureScript 0.0-2173
goog.provide('photosure.bio');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
photosure.bio.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selfie-src","selfie-src",4697189233),"images/me.jpg",new cljs.core.Keyword(null,"about","about",1106515711),"Hey my name is Charles Leblow, I like to take photos and this is my site. Welcome! Since we have some time to talk alone now, I will tell you all about my deepest darkest secrets of interal fire and ice alchemy of the sacred heart! Now here are the secrets: they are an array of 9 secrets, subdivided into 3 quadrants of 5 elliptical meshes, infinitely, outertwined into the fabric of life. One love, One life, One unity",new cljs.core.Keyword(null,"shares","shares",4405305318),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"facebook",new cljs.core.Keyword(null,"entity","entity",4010596181),"&#62220;",new cljs.core.Keyword(null,"href","href",1017115293),"https://www.facebook.com/cpleblow"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"tumblr",new cljs.core.Keyword(null,"entity","entity",4010596181),"&#62229;",new cljs.core.Keyword(null,"href","href",1017115293),"http://cpleblow.tumblr.com/"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"email",new cljs.core.Keyword(null,"entity","entity",4010596181),"&#9993;",new cljs.core.Keyword(null,"href","href",1017115293),"mailto:tableof_5@comcast.net?Subject=One%20Love"], null)], null)], null));
photosure.bio.share_view = (function share_view(p__9956,owner){var map__9961 = p__9956;var map__9961__$1 = ((cljs.core.seq_QMARK_.call(null,map__9961))?cljs.core.apply.call(null,cljs.core.hash_map,map__9961):map__9961);var href = cljs.core.get.call(null,map__9961__$1,new cljs.core.Keyword(null,"href","href",1017115293));var entity = cljs.core.get.call(null,map__9961__$1,new cljs.core.Keyword(null,"entity","entity",4010596181));var name = cljs.core.get.call(null,map__9961__$1,new cljs.core.Keyword(null,"name","name",1017277949));if(typeof photosure.bio.t9962 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.bio.t9962 = (function (name,entity,href,map__9961,owner,p__9956,share_view,meta9963){
this.name = name;
this.entity = entity;
this.href = href;
this.map__9961 = map__9961;
this.owner = owner;
this.p__9956 = p__9956;
this.share_view = share_view;
this.meta9963 = meta9963;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.bio.t9962.cljs$lang$type = true;
photosure.bio.t9962.cljs$lang$ctorStr = "photosure.bio/t9962";
photosure.bio.t9962.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.bio/t9962");
});
photosure.bio.t9962.prototype.om$core$IRender$ = true;
photosure.bio.t9962.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.li({"className": "share"},React.DOM.a({"href": self__.href, "name": self__.name, "className": "share-link"},React.DOM.span({"className": "share-icon"},goog.string.unescapeEntities(self__.entity))));
});
photosure.bio.t9962.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9964){var self__ = this;
var _9964__$1 = this;return self__.meta9963;
});
photosure.bio.t9962.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9964,meta9963__$1){var self__ = this;
var _9964__$1 = this;return (new photosure.bio.t9962(self__.name,self__.entity,self__.href,self__.map__9961,self__.owner,self__.p__9956,self__.share_view,meta9963__$1));
});
photosure.bio.__GT_t9962 = (function __GT_t9962(name__$1,entity__$1,href__$1,map__9961__$2,owner__$1,p__9956__$1,share_view__$1,meta9963){return (new photosure.bio.t9962(name__$1,entity__$1,href__$1,map__9961__$2,owner__$1,p__9956__$1,share_view__$1,meta9963));
});
}
return (new photosure.bio.t9962(name,entity,href,map__9961__$1,owner,p__9956,share_view,null));
});
photosure.bio.shares_view = (function shares_view(shares,owner){if(typeof photosure.bio.t9968 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.bio.t9968 = (function (owner,shares,shares_view,meta9969){
this.owner = owner;
this.shares = shares;
this.shares_view = shares_view;
this.meta9969 = meta9969;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.bio.t9968.cljs$lang$type = true;
photosure.bio.t9968.cljs$lang$ctorStr = "photosure.bio/t9968";
photosure.bio.t9968.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.bio/t9968");
});
photosure.bio.t9968.prototype.om$core$IRender$ = true;
photosure.bio.t9968.prototype.om$core$IRender$render$arity$1 = (function (this__4992__auto__){var self__ = this;
var this__4992__auto____$1 = this;return cljs.core.apply.call(null,om.dom.ul,{"className": "shares"},om.core.build_all.call(null,photosure.bio.share_view,self__.shares));
});
photosure.bio.t9968.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9970){var self__ = this;
var _9970__$1 = this;return self__.meta9969;
});
photosure.bio.t9968.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9970,meta9969__$1){var self__ = this;
var _9970__$1 = this;return (new photosure.bio.t9968(self__.owner,self__.shares,self__.shares_view,meta9969__$1));
});
photosure.bio.__GT_t9968 = (function __GT_t9968(owner__$1,shares__$1,shares_view__$1,meta9969){return (new photosure.bio.t9968(owner__$1,shares__$1,shares_view__$1,meta9969));
});
}
return (new photosure.bio.t9968(owner,shares,shares_view,null));
});
photosure.bio.bio = (function bio(p__9971,owner){var map__9976 = p__9971;var map__9976__$1 = ((cljs.core.seq_QMARK_.call(null,map__9976))?cljs.core.apply.call(null,cljs.core.hash_map,map__9976):map__9976);var shares = cljs.core.get.call(null,map__9976__$1,new cljs.core.Keyword(null,"shares","shares",4405305318));var about = cljs.core.get.call(null,map__9976__$1,new cljs.core.Keyword(null,"about","about",1106515711));var selfie_src = cljs.core.get.call(null,map__9976__$1,new cljs.core.Keyword(null,"selfie-src","selfie-src",4697189233));if(typeof photosure.bio.t9977 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.bio.t9977 = (function (selfie_src,about,shares,map__9976,owner,p__9971,bio,meta9978){
this.selfie_src = selfie_src;
this.about = about;
this.shares = shares;
this.map__9976 = map__9976;
this.owner = owner;
this.p__9971 = p__9971;
this.bio = bio;
this.meta9978 = meta9978;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.bio.t9977.cljs$lang$type = true;
photosure.bio.t9977.cljs$lang$ctorStr = "photosure.bio/t9977";
photosure.bio.t9977.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.bio/t9977");
});
photosure.bio.t9977.prototype.om$core$IRender$ = true;
photosure.bio.t9977.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"id": "bio-container"},React.DOM.div({"id": "bio"},React.DOM.div({"id": "bio-liner"},React.DOM.img({"src": self__.selfie_src, "id": "selfie"}),React.DOM.div({"id": "info-container"},React.DOM.div({"id": "about-container"},React.DOM.p({"id": "about"},self__.about)),React.DOM.div({"className": "shares-container"},om.core.build.call(null,photosure.bio.shares_view,self__.shares))))));
});
photosure.bio.t9977.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9979){var self__ = this;
var _9979__$1 = this;return self__.meta9978;
});
photosure.bio.t9977.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9979,meta9978__$1){var self__ = this;
var _9979__$1 = this;return (new photosure.bio.t9977(self__.selfie_src,self__.about,self__.shares,self__.map__9976,self__.owner,self__.p__9971,self__.bio,meta9978__$1));
});
photosure.bio.__GT_t9977 = (function __GT_t9977(selfie_src__$1,about__$1,shares__$1,map__9976__$2,owner__$1,p__9971__$1,bio__$1,meta9978){return (new photosure.bio.t9977(selfie_src__$1,about__$1,shares__$1,map__9976__$2,owner__$1,p__9971__$1,bio__$1,meta9978));
});
}
return (new photosure.bio.t9977(selfie_src,about,shares,map__9976__$1,owner,p__9971,bio,null));
});
photosure.bio.render = (function render(){return om.core.root.call(null,photosure.bio.bio,photosure.bio.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("dynamic-content")], null));
});

//# sourceMappingURL=bio.js.map