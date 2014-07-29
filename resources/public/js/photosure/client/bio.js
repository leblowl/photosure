// Compiled by ClojureScript 0.0-2173
goog.provide('photosure.client.bio');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
photosure.client.bio.bio = (function bio(p__10215,owner){var map__10220 = p__10215;var map__10220__$1 = ((cljs.core.seq_QMARK_.call(null,map__10220))?cljs.core.apply.call(null,cljs.core.hash_map,map__10220):map__10220);var txt = cljs.core.get.call(null,map__10220__$1,new cljs.core.Keyword(null,"txt","txt",1014019554));var img = cljs.core.get.call(null,map__10220__$1,new cljs.core.Keyword(null,"img","img",1014008629));if(typeof photosure.client.bio.t10221 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.client.bio.t10221 = (function (img,txt,map__10220,owner,p__10215,bio,meta10222){
this.img = img;
this.txt = txt;
this.map__10220 = map__10220;
this.owner = owner;
this.p__10215 = p__10215;
this.bio = bio;
this.meta10222 = meta10222;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.client.bio.t10221.cljs$lang$type = true;
photosure.client.bio.t10221.cljs$lang$ctorStr = "photosure.client.bio/t10221";
photosure.client.bio.t10221.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.client.bio/t10221");
});
photosure.client.bio.t10221.prototype.om$core$IRender$ = true;
photosure.client.bio.t10221.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"id": "bio"},React.DOM.div({"id": "selfie-container"},React.DOM.img({"src": self__.img, "id": "selfie"})),React.DOM.p({"id": "about"},self__.txt));
});
photosure.client.bio.t10221.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10223){var self__ = this;
var _10223__$1 = this;return self__.meta10222;
});
photosure.client.bio.t10221.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10223,meta10222__$1){var self__ = this;
var _10223__$1 = this;return (new photosure.client.bio.t10221(self__.img,self__.txt,self__.map__10220,self__.owner,self__.p__10215,self__.bio,meta10222__$1));
});
photosure.client.bio.__GT_t10221 = (function __GT_t10221(img__$1,txt__$1,map__10220__$2,owner__$1,p__10215__$1,bio__$1,meta10222){return (new photosure.client.bio.t10221(img__$1,txt__$1,map__10220__$2,owner__$1,p__10215__$1,bio__$1,meta10222));
});
}
return (new photosure.client.bio.t10221(img,txt,map__10220__$1,owner,p__10215,bio,null));
});
photosure.client.bio.render = (function render(){return om.core.root.call(null,photosure.client.bio.bio,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"img","img",1014008629),"hey",new cljs.core.Keyword(null,"txt","txt",1014019554),"yeh"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("dynamic-content")], null));
});

//# sourceMappingURL=bio.js.map