// Compiled by ClojureScript 0.0-2173
goog.provide('photosure.bio');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
photosure.bio.bio = (function bio(p__9677,owner){var map__9682 = p__9677;var map__9682__$1 = ((cljs.core.seq_QMARK_.call(null,map__9682))?cljs.core.apply.call(null,cljs.core.hash_map,map__9682):map__9682);var txt = cljs.core.get.call(null,map__9682__$1,new cljs.core.Keyword(null,"txt","txt",1014019554));var img = cljs.core.get.call(null,map__9682__$1,new cljs.core.Keyword(null,"img","img",1014008629));if(typeof photosure.bio.t9683 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.bio.t9683 = (function (img,txt,map__9682,owner,p__9677,bio,meta9684){
this.img = img;
this.txt = txt;
this.map__9682 = map__9682;
this.owner = owner;
this.p__9677 = p__9677;
this.bio = bio;
this.meta9684 = meta9684;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.bio.t9683.cljs$lang$type = true;
photosure.bio.t9683.cljs$lang$ctorStr = "photosure.bio/t9683";
photosure.bio.t9683.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.bio/t9683");
});
photosure.bio.t9683.prototype.om$core$IRender$ = true;
photosure.bio.t9683.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"id": "bio-container"},React.DOM.div({"id": "bio"},React.DOM.div({"id": "bio-liner"},React.DOM.img({"src": self__.img, "id": "selfie"}),React.DOM.div({"id": "about-container"},React.DOM.p({"id": "about"},self__.txt)))));
});
photosure.bio.t9683.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9685){var self__ = this;
var _9685__$1 = this;return self__.meta9684;
});
photosure.bio.t9683.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9685,meta9684__$1){var self__ = this;
var _9685__$1 = this;return (new photosure.bio.t9683(self__.img,self__.txt,self__.map__9682,self__.owner,self__.p__9677,self__.bio,meta9684__$1));
});
photosure.bio.__GT_t9683 = (function __GT_t9683(img__$1,txt__$1,map__9682__$2,owner__$1,p__9677__$1,bio__$1,meta9684){return (new photosure.bio.t9683(img__$1,txt__$1,map__9682__$2,owner__$1,p__9677__$1,bio__$1,meta9684));
});
}
return (new photosure.bio.t9683(img,txt,map__9682__$1,owner,p__9677,bio,null));
});
photosure.bio.render = (function render(){return om.core.root.call(null,photosure.bio.bio,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"img","img",1014008629),"images/me.jpg",new cljs.core.Keyword(null,"txt","txt",1014019554),"Hey my name is Charles Leblow, I like to take photos and this is my site. Welcome! Since we have some time to talk alone now, I will tell you all about my deepest darkest secrets of interal fire and ice alchemy of the sacred heart!"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("dynamic-content")], null));
});

//# sourceMappingURL=bio.js.map