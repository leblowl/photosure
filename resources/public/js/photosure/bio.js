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
photosure.bio.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selfie-src","selfie-src",156976163),"images/me.jpg",new cljs.core.Keyword(null,"about","about",1423892543),"My name is Charles Leblow.<br><br>\nPhotography has been a passion dating back to childhood.<br>\nI specialize in landscape and urban photography as well as family photography in informal settings or at your home. My work is done in 35mm format, primarily digital and also film, black and white, or custom editing options are available.<br>\nI am located in the San Francisco/Bay Area of California and am available for local hire for family events/portraits/informal photo shoots, small weddings, proms and parties, no job is too small.<br>\nPrints of my work are available only by special order. Please inquire for sizing, pricing, paper, and matting or framing options.<br>\nI could supply you with more written details about my skills as a photographer but I would prefer you judge me by my work, a sampling of which is available above in the Gallery, and not my writing skills.<br><br><br>\n\ncpleblow",new cljs.core.Keyword(null,"shares","shares",1096514365),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"facebook",new cljs.core.Keyword(null,"entity","entity",-450970276),"&#62220;",new cljs.core.Keyword(null,"svg","svg",856789142),"images/facebook.svg",new cljs.core.Keyword(null,"href","href",-793805698),"https://www.facebook.com/cpleblow"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"tumblr",new cljs.core.Keyword(null,"entity","entity",-450970276),"&#62229;",new cljs.core.Keyword(null,"svg","svg",856789142),"images/tumblr.svg",new cljs.core.Keyword(null,"href","href",-793805698),"http://cpleblow.tumblr.com/"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"email",new cljs.core.Keyword(null,"entity","entity",-450970276),"&#9993;",new cljs.core.Keyword(null,"svg","svg",856789142),"images/envelope.svg",new cljs.core.Keyword(null,"href","href",-793805698),"mailto:tableof_5@comcast.net?Subject=One%20Love"], null)], null)], null));
photosure.bio.share_view = (function share_view(p__10562,owner){var map__10567 = p__10562;var map__10567__$1 = ((cljs.core.seq_QMARK_.call(null,map__10567))?cljs.core.apply.call(null,cljs.core.hash_map,map__10567):map__10567);var href = cljs.core.get.call(null,map__10567__$1,new cljs.core.Keyword(null,"href","href",-793805698));var svg = cljs.core.get.call(null,map__10567__$1,new cljs.core.Keyword(null,"svg","svg",856789142));var entity = cljs.core.get.call(null,map__10567__$1,new cljs.core.Keyword(null,"entity","entity",-450970276));var name = cljs.core.get.call(null,map__10567__$1,new cljs.core.Keyword(null,"name","name",1843675177));if(typeof photosure.bio.t10568 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.bio.t10568 = (function (name,entity,svg,href,map__10567,owner,p__10562,share_view,meta10569){
this.name = name;
this.entity = entity;
this.svg = svg;
this.href = href;
this.map__10567 = map__10567;
this.owner = owner;
this.p__10562 = p__10562;
this.share_view = share_view;
this.meta10569 = meta10569;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.bio.t10568.cljs$lang$type = true;
photosure.bio.t10568.cljs$lang$ctorStr = "photosure.bio/t10568";
photosure.bio.t10568.cljs$lang$ctorPrWriter = ((function (map__10567,map__10567__$1,href,svg,entity,name){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.bio/t10568");
});})(map__10567,map__10567__$1,href,svg,entity,name))
;
photosure.bio.t10568.prototype.om$core$IRender$ = true;
photosure.bio.t10568.prototype.om$core$IRender$render$arity$1 = ((function (map__10567,map__10567__$1,href,svg,entity,name){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.li({"className": "share"},React.DOM.a({"href": self__.href, "name": self__.name, "className": "share-link"},React.DOM.img({"src": self__.svg, "className": "share-icon"},null)));
});})(map__10567,map__10567__$1,href,svg,entity,name))
;
photosure.bio.t10568.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10567,map__10567__$1,href,svg,entity,name){
return (function (_10570){var self__ = this;
var _10570__$1 = this;return self__.meta10569;
});})(map__10567,map__10567__$1,href,svg,entity,name))
;
photosure.bio.t10568.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10567,map__10567__$1,href,svg,entity,name){
return (function (_10570,meta10569__$1){var self__ = this;
var _10570__$1 = this;return (new photosure.bio.t10568(self__.name,self__.entity,self__.svg,self__.href,self__.map__10567,self__.owner,self__.p__10562,self__.share_view,meta10569__$1));
});})(map__10567,map__10567__$1,href,svg,entity,name))
;
photosure.bio.__GT_t10568 = ((function (map__10567,map__10567__$1,href,svg,entity,name){
return (function __GT_t10568(name__$1,entity__$1,svg__$1,href__$1,map__10567__$2,owner__$1,p__10562__$1,share_view__$1,meta10569){return (new photosure.bio.t10568(name__$1,entity__$1,svg__$1,href__$1,map__10567__$2,owner__$1,p__10562__$1,share_view__$1,meta10569));
});})(map__10567,map__10567__$1,href,svg,entity,name))
;
}
return (new photosure.bio.t10568(name,entity,svg,href,map__10567__$1,owner,p__10562,share_view,null));
});
photosure.bio.shares_view = (function shares_view(shares,owner){if(typeof photosure.bio.t10574 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.bio.t10574 = (function (owner,shares,shares_view,meta10575){
this.owner = owner;
this.shares = shares;
this.shares_view = shares_view;
this.meta10575 = meta10575;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.bio.t10574.cljs$lang$type = true;
photosure.bio.t10574.cljs$lang$ctorStr = "photosure.bio/t10574";
photosure.bio.t10574.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.bio/t10574");
});
photosure.bio.t10574.prototype.om$core$IRender$ = true;
photosure.bio.t10574.prototype.om$core$IRender$render$arity$1 = (function (this__5143__auto__){var self__ = this;
var this__5143__auto____$1 = this;return cljs.core.apply.call(null,om.dom.ul,{"className": "shares"},om.core.build_all.call(null,photosure.bio.share_view,self__.shares));
});
photosure.bio.t10574.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10576){var self__ = this;
var _10576__$1 = this;return self__.meta10575;
});
photosure.bio.t10574.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10576,meta10575__$1){var self__ = this;
var _10576__$1 = this;return (new photosure.bio.t10574(self__.owner,self__.shares,self__.shares_view,meta10575__$1));
});
photosure.bio.__GT_t10574 = (function __GT_t10574(owner__$1,shares__$1,shares_view__$1,meta10575){return (new photosure.bio.t10574(owner__$1,shares__$1,shares_view__$1,meta10575));
});
}
return (new photosure.bio.t10574(owner,shares,shares_view,null));
});
photosure.bio.bio = (function bio(p__10577,owner){var map__10582 = p__10577;var map__10582__$1 = ((cljs.core.seq_QMARK_.call(null,map__10582))?cljs.core.apply.call(null,cljs.core.hash_map,map__10582):map__10582);var app = map__10582__$1;var shares = cljs.core.get.call(null,map__10582__$1,new cljs.core.Keyword(null,"shares","shares",1096514365));var about = cljs.core.get.call(null,map__10582__$1,new cljs.core.Keyword(null,"about","about",1423892543));var selfie_src = cljs.core.get.call(null,map__10582__$1,new cljs.core.Keyword(null,"selfie-src","selfie-src",156976163));if(typeof photosure.bio.t10583 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.bio.t10583 = (function (selfie_src,about,shares,app,map__10582,owner,p__10577,bio,meta10584){
this.selfie_src = selfie_src;
this.about = about;
this.shares = shares;
this.app = app;
this.map__10582 = map__10582;
this.owner = owner;
this.p__10577 = p__10577;
this.bio = bio;
this.meta10584 = meta10584;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.bio.t10583.cljs$lang$type = true;
photosure.bio.t10583.cljs$lang$ctorStr = "photosure.bio/t10583";
photosure.bio.t10583.cljs$lang$ctorPrWriter = ((function (map__10582,map__10582__$1,app,shares,about,selfie_src){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.bio/t10583");
});})(map__10582,map__10582__$1,app,shares,about,selfie_src))
;
photosure.bio.t10583.prototype.om$core$IRender$ = true;
photosure.bio.t10583.prototype.om$core$IRender$render$arity$1 = ((function (map__10582,map__10582__$1,app,shares,about,selfie_src){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"id": "bio-container"},React.DOM.div({"id": "bio"},React.DOM.div({"id": "bio-liner"},React.DOM.img({"src": self__.selfie_src, "id": "selfie"}),React.DOM.div({"id": "info-container"},om.core.build.call(null,photosure.scrolldiv.scroll_div,self__.app,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"about-container"], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.p({"dangerouslySetInnerHTML": {"__html": self__.about}, "id": "about"},null)], null)], null)], null)),React.DOM.div({"className": "shares-container"},om.core.build.call(null,photosure.bio.shares_view,self__.shares))))));
});})(map__10582,map__10582__$1,app,shares,about,selfie_src))
;
photosure.bio.t10583.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10582,map__10582__$1,app,shares,about,selfie_src){
return (function (_10585){var self__ = this;
var _10585__$1 = this;return self__.meta10584;
});})(map__10582,map__10582__$1,app,shares,about,selfie_src))
;
photosure.bio.t10583.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10582,map__10582__$1,app,shares,about,selfie_src){
return (function (_10585,meta10584__$1){var self__ = this;
var _10585__$1 = this;return (new photosure.bio.t10583(self__.selfie_src,self__.about,self__.shares,self__.app,self__.map__10582,self__.owner,self__.p__10577,self__.bio,meta10584__$1));
});})(map__10582,map__10582__$1,app,shares,about,selfie_src))
;
photosure.bio.__GT_t10583 = ((function (map__10582,map__10582__$1,app,shares,about,selfie_src){
return (function __GT_t10583(selfie_src__$1,about__$1,shares__$1,app__$1,map__10582__$2,owner__$1,p__10577__$1,bio__$1,meta10584){return (new photosure.bio.t10583(selfie_src__$1,about__$1,shares__$1,app__$1,map__10582__$2,owner__$1,p__10577__$1,bio__$1,meta10584));
});})(map__10582,map__10582__$1,app,shares,about,selfie_src))
;
}
return (new photosure.bio.t10583(selfie_src,about,shares,app,map__10582__$1,owner,p__10577,bio,null));
});
photosure.bio.render = (function render(){return om.core.root.call(null,photosure.bio.bio,photosure.bio.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("dynamic-content")], null));
});

//# sourceMappingURL=bio.js.map