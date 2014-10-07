// Compiled by ClojureScript 0.0-2322
goog.provide('photosure.navigation');
goog.require('cljs.core');
goog.require('secretary.core');
goog.require('photosure.gallery');
goog.require('photosure.blog');
goog.require('om.dom');
goog.require('photosure.bio');
goog.require('goog.history.EventType');
goog.require('photosure.blog');
goog.require('om.dom');
goog.require('goog.history.EventType');
goog.require('goog.History');
goog.require('goog.events');
goog.require('om.core');
goog.require('om.core');
goog.require('secretary.core');
goog.require('photosure.bio');
goog.require('photosure.gallery');
goog.require('goog.events');
photosure.navigation.history = (new goog.History());
photosure.navigation.navigation_state = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"tab0",new cljs.core.Keyword(null,"name","name",1843675177),"bio",new cljs.core.Keyword(null,"path","path",-188191168),"/bio"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"tab1",new cljs.core.Keyword(null,"name","name",1843675177),"blog",new cljs.core.Keyword(null,"path","path",-188191168),"/blog"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"tab2",new cljs.core.Keyword(null,"name","name",1843675177),"gallery",new cljs.core.Keyword(null,"path","path",-188191168),"/gallery"], null)], null));
var action__10109__auto___10235 = (function (params__10110__auto__){if(cljs.core.map_QMARK_.call(null,params__10110__auto__))
{var map__10233 = params__10110__auto__;var map__10233__$1 = ((cljs.core.seq_QMARK_.call(null,map__10233))?cljs.core.apply.call(null,cljs.core.hash_map,map__10233):map__10233);return window.location = "/#/bio";
} else
{if(cljs.core.vector_QMARK_.call(null,params__10110__auto__))
{var vec__10234 = params__10110__auto__;return window.location = "/#/bio";
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/",action__10109__auto___10235);
var action__10109__auto___10238 = (function (params__10110__auto__){if(cljs.core.map_QMARK_.call(null,params__10110__auto__))
{var map__10236 = params__10110__auto__;var map__10236__$1 = ((cljs.core.seq_QMARK_.call(null,map__10236))?cljs.core.apply.call(null,cljs.core.hash_map,map__10236):map__10236);return photosure.bio.render.call(null);
} else
{if(cljs.core.vector_QMARK_.call(null,params__10110__auto__))
{var vec__10237 = params__10110__auto__;return photosure.bio.render.call(null);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/bio",action__10109__auto___10238);
var action__10109__auto___10241 = (function (params__10110__auto__){if(cljs.core.map_QMARK_.call(null,params__10110__auto__))
{var map__10239 = params__10110__auto__;var map__10239__$1 = ((cljs.core.seq_QMARK_.call(null,map__10239))?cljs.core.apply.call(null,cljs.core.hash_map,map__10239):map__10239);return photosure.blog.render.call(null);
} else
{if(cljs.core.vector_QMARK_.call(null,params__10110__auto__))
{var vec__10240 = params__10110__auto__;return photosure.blog.render.call(null);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/blog",action__10109__auto___10241);
var action__10109__auto___10244 = (function (params__10110__auto__){if(cljs.core.map_QMARK_.call(null,params__10110__auto__))
{var map__10242 = params__10110__auto__;var map__10242__$1 = ((cljs.core.seq_QMARK_.call(null,map__10242))?cljs.core.apply.call(null,cljs.core.hash_map,map__10242):map__10242);return photosure.gallery.render.call(null);
} else
{if(cljs.core.vector_QMARK_.call(null,params__10110__auto__))
{var vec__10243 = params__10110__auto__;return photosure.gallery.render.call(null);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/gallery",action__10109__auto___10244);
var action__10109__auto___10247 = (function (params__10110__auto__){if(cljs.core.map_QMARK_.call(null,params__10110__auto__))
{var map__10245 = params__10110__auto__;var map__10245__$1 = ((cljs.core.seq_QMARK_.call(null,map__10245))?cljs.core.apply.call(null,cljs.core.hash_map,map__10245):map__10245);return window.location = "/#/bio";
} else
{if(cljs.core.vector_QMARK_.call(null,params__10110__auto__))
{var vec__10246 = params__10110__auto__;return window.location = "/#/bio";
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"*",action__10109__auto___10247);
photosure.navigation.refresh_navigation = (function refresh_navigation(){var token = photosure.navigation.history.getToken();var set_active = ((function (token){
return (function (nav){return cljs.core.assoc.call(null,nav,new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(nav),token));
});})(token))
;return cljs.core.swap_BANG_.call(null,photosure.navigation.navigation_state,((function (token,set_active){
return (function (p1__10248_SHARP_){return cljs.core.map.call(null,set_active,p1__10248_SHARP_);
});})(token,set_active))
);
});
photosure.navigation.on_navigate = (function on_navigate(event){photosure.navigation.refresh_navigation.call(null);
return secretary.core.dispatch_BANG_.call(null,(((event.token == null))?"/":event.token));
});
var G__10249_10250 = photosure.navigation.history;goog.events.listen(G__10249_10250,goog.history.EventType.NAVIGATE,photosure.navigation.on_navigate);
G__10249_10250.setEnabled(true);
photosure.navigation.navigation_item_view = (function navigation_item_view(p__10251,owner){var map__10256 = p__10251;var map__10256__$1 = ((cljs.core.seq_QMARK_.call(null,map__10256))?cljs.core.apply.call(null,cljs.core.hash_map,map__10256):map__10256);var active = cljs.core.get.call(null,map__10256__$1,new cljs.core.Keyword(null,"active","active",1895962068));var path = cljs.core.get.call(null,map__10256__$1,new cljs.core.Keyword(null,"path","path",-188191168));var name = cljs.core.get.call(null,map__10256__$1,new cljs.core.Keyword(null,"name","name",1843675177));var id = cljs.core.get.call(null,map__10256__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof photosure.navigation.t10257 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.navigation.t10257 = (function (id,name,path,active,map__10256,owner,p__10251,navigation_item_view,meta10258){
this.id = id;
this.name = name;
this.path = path;
this.active = active;
this.map__10256 = map__10256;
this.owner = owner;
this.p__10251 = p__10251;
this.navigation_item_view = navigation_item_view;
this.meta10258 = meta10258;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.navigation.t10257.cljs$lang$type = true;
photosure.navigation.t10257.cljs$lang$ctorStr = "photosure.navigation/t10257";
photosure.navigation.t10257.cljs$lang$ctorPrWriter = ((function (map__10256,map__10256__$1,active,path,name,id){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.navigation/t10257");
});})(map__10256,map__10256__$1,active,path,name,id))
;
photosure.navigation.t10257.prototype.om$core$IRender$ = true;
photosure.navigation.t10257.prototype.om$core$IRender$render$arity$1 = ((function (map__10256,map__10256__$1,active,path,name,id){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.li({"className": (cljs.core.truth_(self__.active)?"active":""), "id": self__.id},React.DOM.a({"href": ("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.path))},self__.name));
});})(map__10256,map__10256__$1,active,path,name,id))
;
photosure.navigation.t10257.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10256,map__10256__$1,active,path,name,id){
return (function (_10259){var self__ = this;
var _10259__$1 = this;return self__.meta10258;
});})(map__10256,map__10256__$1,active,path,name,id))
;
photosure.navigation.t10257.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10256,map__10256__$1,active,path,name,id){
return (function (_10259,meta10258__$1){var self__ = this;
var _10259__$1 = this;return (new photosure.navigation.t10257(self__.id,self__.name,self__.path,self__.active,self__.map__10256,self__.owner,self__.p__10251,self__.navigation_item_view,meta10258__$1));
});})(map__10256,map__10256__$1,active,path,name,id))
;
photosure.navigation.__GT_t10257 = ((function (map__10256,map__10256__$1,active,path,name,id){
return (function __GT_t10257(id__$1,name__$1,path__$1,active__$1,map__10256__$2,owner__$1,p__10251__$1,navigation_item_view__$1,meta10258){return (new photosure.navigation.t10257(id__$1,name__$1,path__$1,active__$1,map__10256__$2,owner__$1,p__10251__$1,navigation_item_view__$1,meta10258));
});})(map__10256,map__10256__$1,active,path,name,id))
;
}
return (new photosure.navigation.t10257(id,name,path,active,map__10256__$1,owner,p__10251,navigation_item_view,null));
});
photosure.navigation.navigation_view = (function navigation_view(app,owner){if(typeof photosure.navigation.t10263 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.navigation.t10263 = (function (owner,app,navigation_view,meta10264){
this.owner = owner;
this.app = app;
this.navigation_view = navigation_view;
this.meta10264 = meta10264;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.navigation.t10263.cljs$lang$type = true;
photosure.navigation.t10263.cljs$lang$ctorStr = "photosure.navigation/t10263";
photosure.navigation.t10263.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.navigation/t10263");
});
photosure.navigation.t10263.prototype.om$core$IRender$ = true;
photosure.navigation.t10263.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "navigation-container"},React.DOM.div({"className": "banner-container"},React.DOM.p({"className": "banner"},"C.P.Leblow Gallery")),cljs.core.apply.call(null,om.dom.ul,{"className": "nav nav-tabs"},om.core.build_all.call(null,photosure.navigation.navigation_item_view,self__.app)));
});
photosure.navigation.t10263.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10265){var self__ = this;
var _10265__$1 = this;return self__.meta10264;
});
photosure.navigation.t10263.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10265,meta10264__$1){var self__ = this;
var _10265__$1 = this;return (new photosure.navigation.t10263(self__.owner,self__.app,self__.navigation_view,meta10264__$1));
});
photosure.navigation.__GT_t10263 = (function __GT_t10263(owner__$1,app__$1,navigation_view__$1,meta10264){return (new photosure.navigation.t10263(owner__$1,app__$1,navigation_view__$1,meta10264));
});
}
return (new photosure.navigation.t10263(owner,app,navigation_view,null));
});
om.core.root.call(null,photosure.navigation.navigation_view,photosure.navigation.navigation_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("static-header")], null));

//# sourceMappingURL=navigation.js.map