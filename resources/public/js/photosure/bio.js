// Compiled by ClojureScript 0.0-2173
goog.provide('photosure.bio');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
photosure.bio.bio = (function bio(p__9767,owner){var map__9772 = p__9767;var map__9772__$1 = ((cljs.core.seq_QMARK_.call(null,map__9772))?cljs.core.apply.call(null,cljs.core.hash_map,map__9772):map__9772);var txt = cljs.core.get.call(null,map__9772__$1,new cljs.core.Keyword(null,"txt","txt",1014019554));var img = cljs.core.get.call(null,map__9772__$1,new cljs.core.Keyword(null,"img","img",1014008629));if(typeof photosure.bio.t9773 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.bio.t9773 = (function (img,txt,map__9772,owner,p__9767,bio,meta9774){
this.img = img;
this.txt = txt;
this.map__9772 = map__9772;
this.owner = owner;
this.p__9767 = p__9767;
this.bio = bio;
this.meta9774 = meta9774;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.bio.t9773.cljs$lang$type = true;
photosure.bio.t9773.cljs$lang$ctorStr = "photosure.bio/t9773";
photosure.bio.t9773.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.bio/t9773");
});
photosure.bio.t9773.prototype.om$core$IRender$ = true;
photosure.bio.t9773.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"id": "bio-container"},React.DOM.div({"id": "bio"},React.DOM.div({"id": "selfie-container"},React.DOM.img({"src": self__.img, "id": "selfie"})),React.DOM.div({"id": "about-container"},React.DOM.div({"id": "about"},self__.txt))));
});
photosure.bio.t9773.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9775){var self__ = this;
var _9775__$1 = this;return self__.meta9774;
});
photosure.bio.t9773.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9775,meta9774__$1){var self__ = this;
var _9775__$1 = this;return (new photosure.bio.t9773(self__.img,self__.txt,self__.map__9772,self__.owner,self__.p__9767,self__.bio,meta9774__$1));
});
photosure.bio.__GT_t9773 = (function __GT_t9773(img__$1,txt__$1,map__9772__$2,owner__$1,p__9767__$1,bio__$1,meta9774){return (new photosure.bio.t9773(img__$1,txt__$1,map__9772__$2,owner__$1,p__9767__$1,bio__$1,meta9774));
});
}
return (new photosure.bio.t9773(img,txt,map__9772__$1,owner,p__9767,bio,null));
});
photosure.bio.render = (function render(){return om.core.root.call(null,photosure.bio.bio,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"img","img",1014008629),"images/me.jpg",new cljs.core.Keyword(null,"txt","txt",1014019554),"Hey my name is Charles Leblow, I like to take photos and this is my site. Welcome! Since we have some time to talk alone now, I will tell you all about my deepest darkest secrets of interal fire and ice alchemy of the sacred heart!"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("dynamic-content")], null));
});

//# sourceMappingURL=bio.js.map