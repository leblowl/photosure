// Compiled by ClojureScript 0.0-2173
goog.provide('photosure.bio');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
photosure.bio.bio = (function bio(p__9704,owner){var map__9709 = p__9704;var map__9709__$1 = ((cljs.core.seq_QMARK_.call(null,map__9709))?cljs.core.apply.call(null,cljs.core.hash_map,map__9709):map__9709);var txt = cljs.core.get.call(null,map__9709__$1,new cljs.core.Keyword(null,"txt","txt",1014019554));var img = cljs.core.get.call(null,map__9709__$1,new cljs.core.Keyword(null,"img","img",1014008629));if(typeof photosure.bio.t9710 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.bio.t9710 = (function (img,txt,map__9709,owner,p__9704,bio,meta9711){
this.img = img;
this.txt = txt;
this.map__9709 = map__9709;
this.owner = owner;
this.p__9704 = p__9704;
this.bio = bio;
this.meta9711 = meta9711;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.bio.t9710.cljs$lang$type = true;
photosure.bio.t9710.cljs$lang$ctorStr = "photosure.bio/t9710";
photosure.bio.t9710.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.bio/t9710");
});
photosure.bio.t9710.prototype.om$core$IRender$ = true;
photosure.bio.t9710.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"id": "bio-container"},React.DOM.div({"id": "bio"},React.DOM.div({"id": "bio-liner"},React.DOM.img({"src": self__.img, "id": "selfie"}),React.DOM.div({"id": "info-container"},React.DOM.div({"id": "about-container"},React.DOM.p({"id": "about"},self__.txt)),React.DOM.div({"className": "share-container"},React.DOM.div({"className": "share-bar"},React.DOM.div({"className": "share"},React.DOM.div({"className": "share-inner"},goog.string.unescapeEntities("&#62220;"))),React.DOM.div({"className": "share"},React.DOM.div({"className": "share-inner"},goog.string.unescapeEntities("&#62229;"))),React.DOM.div({"className": "share"},React.DOM.div({"className": "share-inner"},goog.string.unescapeEntities("&#9993;")))))))));
});
photosure.bio.t9710.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9712){var self__ = this;
var _9712__$1 = this;return self__.meta9711;
});
photosure.bio.t9710.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9712,meta9711__$1){var self__ = this;
var _9712__$1 = this;return (new photosure.bio.t9710(self__.img,self__.txt,self__.map__9709,self__.owner,self__.p__9704,self__.bio,meta9711__$1));
});
photosure.bio.__GT_t9710 = (function __GT_t9710(img__$1,txt__$1,map__9709__$2,owner__$1,p__9704__$1,bio__$1,meta9711){return (new photosure.bio.t9710(img__$1,txt__$1,map__9709__$2,owner__$1,p__9704__$1,bio__$1,meta9711));
});
}
return (new photosure.bio.t9710(img,txt,map__9709__$1,owner,p__9704,bio,null));
});
photosure.bio.render = (function render(){return om.core.root.call(null,photosure.bio.bio,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"img","img",1014008629),"images/me.jpg",new cljs.core.Keyword(null,"txt","txt",1014019554),"Hey my name is Charles Leblow, I like to take photos and this is my site. Welcome! Since we have some time to talk alone now, I will tell you all about my deepest darkest secrets of interal fire and ice alchemy of the sacred heart!"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("dynamic-content")], null));
});

//# sourceMappingURL=bio.js.map