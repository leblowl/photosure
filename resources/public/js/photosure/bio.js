// Compiled by ClojureScript 0.0-2173
goog.provide('photosure.bio');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
photosure.bio.bio = (function bio(p__9579,owner){var map__9584 = p__9579;var map__9584__$1 = ((cljs.core.seq_QMARK_.call(null,map__9584))?cljs.core.apply.call(null,cljs.core.hash_map,map__9584):map__9584);var txt = cljs.core.get.call(null,map__9584__$1,new cljs.core.Keyword(null,"txt","txt",1014019554));var img = cljs.core.get.call(null,map__9584__$1,new cljs.core.Keyword(null,"img","img",1014008629));if(typeof photosure.bio.t9585 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.bio.t9585 = (function (img,txt,map__9584,owner,p__9579,bio,meta9586){
this.img = img;
this.txt = txt;
this.map__9584 = map__9584;
this.owner = owner;
this.p__9579 = p__9579;
this.bio = bio;
this.meta9586 = meta9586;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.bio.t9585.cljs$lang$type = true;
photosure.bio.t9585.cljs$lang$ctorStr = "photosure.bio/t9585";
photosure.bio.t9585.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.bio/t9585");
});
photosure.bio.t9585.prototype.om$core$IRender$ = true;
photosure.bio.t9585.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"id": "bio"},React.DOM.div({"id": "selfie-container"},React.DOM.img({"src": self__.img, "id": "selfie"})),React.DOM.p({"id": "about"},self__.txt));
});
photosure.bio.t9585.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9587){var self__ = this;
var _9587__$1 = this;return self__.meta9586;
});
photosure.bio.t9585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9587,meta9586__$1){var self__ = this;
var _9587__$1 = this;return (new photosure.bio.t9585(self__.img,self__.txt,self__.map__9584,self__.owner,self__.p__9579,self__.bio,meta9586__$1));
});
photosure.bio.__GT_t9585 = (function __GT_t9585(img__$1,txt__$1,map__9584__$2,owner__$1,p__9579__$1,bio__$1,meta9586){return (new photosure.bio.t9585(img__$1,txt__$1,map__9584__$2,owner__$1,p__9579__$1,bio__$1,meta9586));
});
}
return (new photosure.bio.t9585(img,txt,map__9584__$1,owner,p__9579,bio,null));
});
photosure.bio.render = (function render(){return om.core.root.call(null,photosure.bio.bio,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"img","img",1014008629),"hey",new cljs.core.Keyword(null,"txt","txt",1014019554),"yeh"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("dynamic-content")], null));
});

//# sourceMappingURL=bio.js.map