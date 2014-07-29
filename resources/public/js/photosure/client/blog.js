// Compiled by ClojureScript 0.0-2173
goog.provide('photosure.client.blog');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
photosure.client.blog.post_view = (function post_view(p__10260,owner){var map__10265 = p__10260;var map__10265__$1 = ((cljs.core.seq_QMARK_.call(null,map__10265))?cljs.core.apply.call(null,cljs.core.hash_map,map__10265):map__10265);var caption = cljs.core.get.call(null,map__10265__$1,new cljs.core.Keyword(null,"caption","caption",1566477656));var img_src = cljs.core.get.call(null,map__10265__$1,new cljs.core.Keyword(null,"img-src","img-src",2929665100));var post_id = cljs.core.get.call(null,map__10265__$1,new cljs.core.Keyword(null,"post-id","post-id",622644442));if(typeof photosure.client.blog.t10266 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.client.blog.t10266 = (function (post_id,img_src,caption,map__10265,owner,p__10260,post_view,meta10267){
this.post_id = post_id;
this.img_src = img_src;
this.caption = caption;
this.map__10265 = map__10265;
this.owner = owner;
this.p__10260 = p__10260;
this.post_view = post_view;
this.meta10267 = meta10267;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.client.blog.t10266.cljs$lang$type = true;
photosure.client.blog.t10266.cljs$lang$ctorStr = "photosure.client.blog/t10266";
photosure.client.blog.t10266.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.client.blog/t10266");
});
photosure.client.blog.t10266.prototype.om$core$IRender$ = true;
photosure.client.blog.t10266.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"class": "post", "id": self__.post_id},React.DOM.div({"class": "photo"},React.DOM.img({"src": self__.img_src})),React.DOM.div({"class": "caption"},self__.caption));
});
photosure.client.blog.t10266.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10268){var self__ = this;
var _10268__$1 = this;return self__.meta10267;
});
photosure.client.blog.t10266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10268,meta10267__$1){var self__ = this;
var _10268__$1 = this;return (new photosure.client.blog.t10266(self__.post_id,self__.img_src,self__.caption,self__.map__10265,self__.owner,self__.p__10260,self__.post_view,meta10267__$1));
});
photosure.client.blog.__GT_t10266 = (function __GT_t10266(post_id__$1,img_src__$1,caption__$1,map__10265__$2,owner__$1,p__10260__$1,post_view__$1,meta10267){return (new photosure.client.blog.t10266(post_id__$1,img_src__$1,caption__$1,map__10265__$2,owner__$1,p__10260__$1,post_view__$1,meta10267));
});
}
return (new photosure.client.blog.t10266(post_id,img_src,caption,map__10265__$1,owner,p__10260,post_view,null));
});

//# sourceMappingURL=blog.js.map