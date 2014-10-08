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
var action__10193__auto___10286 = (function (params__10194__auto__){if(cljs.core.map_QMARK_.call(null,params__10194__auto__))
{var map__10284 = params__10194__auto__;var map__10284__$1 = ((cljs.core.seq_QMARK_.call(null,map__10284))?cljs.core.apply.call(null,cljs.core.hash_map,map__10284):map__10284);return window.location = "/#/bio";
} else
{if(cljs.core.vector_QMARK_.call(null,params__10194__auto__))
{var vec__10285 = params__10194__auto__;return window.location = "/#/bio";
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/",action__10193__auto___10286);
var action__10193__auto___10289 = (function (params__10194__auto__){if(cljs.core.map_QMARK_.call(null,params__10194__auto__))
{var map__10287 = params__10194__auto__;var map__10287__$1 = ((cljs.core.seq_QMARK_.call(null,map__10287))?cljs.core.apply.call(null,cljs.core.hash_map,map__10287):map__10287);return photosure.bio.render.call(null);
} else
{if(cljs.core.vector_QMARK_.call(null,params__10194__auto__))
{var vec__10288 = params__10194__auto__;return photosure.bio.render.call(null);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/bio",action__10193__auto___10289);
var action__10193__auto___10292 = (function (params__10194__auto__){if(cljs.core.map_QMARK_.call(null,params__10194__auto__))
{var map__10290 = params__10194__auto__;var map__10290__$1 = ((cljs.core.seq_QMARK_.call(null,map__10290))?cljs.core.apply.call(null,cljs.core.hash_map,map__10290):map__10290);return photosure.blog.render.call(null);
} else
{if(cljs.core.vector_QMARK_.call(null,params__10194__auto__))
{var vec__10291 = params__10194__auto__;return photosure.blog.render.call(null);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/blog",action__10193__auto___10292);
var action__10193__auto___10295 = (function (params__10194__auto__){if(cljs.core.map_QMARK_.call(null,params__10194__auto__))
{var map__10293 = params__10194__auto__;var map__10293__$1 = ((cljs.core.seq_QMARK_.call(null,map__10293))?cljs.core.apply.call(null,cljs.core.hash_map,map__10293):map__10293);return photosure.gallery.render.call(null);
} else
{if(cljs.core.vector_QMARK_.call(null,params__10194__auto__))
{var vec__10294 = params__10194__auto__;return photosure.gallery.render.call(null);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/gallery",action__10193__auto___10295);
var action__10193__auto___10298 = (function (params__10194__auto__){if(cljs.core.map_QMARK_.call(null,params__10194__auto__))
{var map__10296 = params__10194__auto__;var map__10296__$1 = ((cljs.core.seq_QMARK_.call(null,map__10296))?cljs.core.apply.call(null,cljs.core.hash_map,map__10296):map__10296);return window.location = "/#/bio";
} else
{if(cljs.core.vector_QMARK_.call(null,params__10194__auto__))
{var vec__10297 = params__10194__auto__;return window.location = "/#/bio";
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"*",action__10193__auto___10298);
photosure.navigation.refresh_navigation = (function refresh_navigation(){var token = photosure.navigation.history.getToken();var set_active = ((function (token){
return (function (nav){return cljs.core.assoc.call(null,nav,new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(nav),token));
});})(token))
;return cljs.core.swap_BANG_.call(null,photosure.navigation.navigation_state,((function (token,set_active){
return (function (p1__10299_SHARP_){return cljs.core.map.call(null,set_active,p1__10299_SHARP_);
});})(token,set_active))
);
});
photosure.navigation.on_navigate = (function on_navigate(event){photosure.navigation.refresh_navigation.call(null);
return secretary.core.dispatch_BANG_.call(null,(((event.token == null))?"/":event.token));
});
var G__10300_10301 = photosure.navigation.history;goog.events.listen(G__10300_10301,goog.history.EventType.NAVIGATE,photosure.navigation.on_navigate);
G__10300_10301.setEnabled(true);
photosure.navigation.navigation_item_view = (function navigation_item_view(p__10302,owner){var map__10307 = p__10302;var map__10307__$1 = ((cljs.core.seq_QMARK_.call(null,map__10307))?cljs.core.apply.call(null,cljs.core.hash_map,map__10307):map__10307);var active = cljs.core.get.call(null,map__10307__$1,new cljs.core.Keyword(null,"active","active",1895962068));var path = cljs.core.get.call(null,map__10307__$1,new cljs.core.Keyword(null,"path","path",-188191168));var name = cljs.core.get.call(null,map__10307__$1,new cljs.core.Keyword(null,"name","name",1843675177));var id = cljs.core.get.call(null,map__10307__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof photosure.navigation.t10308 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.navigation.t10308 = (function (id,name,path,active,map__10307,owner,p__10302,navigation_item_view,meta10309){
this.id = id;
this.name = name;
this.path = path;
this.active = active;
this.map__10307 = map__10307;
this.owner = owner;
this.p__10302 = p__10302;
this.navigation_item_view = navigation_item_view;
this.meta10309 = meta10309;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.navigation.t10308.cljs$lang$type = true;
photosure.navigation.t10308.cljs$lang$ctorStr = "photosure.navigation/t10308";
photosure.navigation.t10308.cljs$lang$ctorPrWriter = ((function (map__10307,map__10307__$1,active,path,name,id){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.navigation/t10308");
});})(map__10307,map__10307__$1,active,path,name,id))
;
photosure.navigation.t10308.prototype.om$core$IRender$ = true;
photosure.navigation.t10308.prototype.om$core$IRender$render$arity$1 = ((function (map__10307,map__10307__$1,active,path,name,id){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.li({"className": (cljs.core.truth_(self__.active)?"active":""), "id": self__.id},React.DOM.a({"href": ("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.path))},self__.name));
});})(map__10307,map__10307__$1,active,path,name,id))
;
photosure.navigation.t10308.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10307,map__10307__$1,active,path,name,id){
return (function (_10310){var self__ = this;
var _10310__$1 = this;return self__.meta10309;
});})(map__10307,map__10307__$1,active,path,name,id))
;
photosure.navigation.t10308.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10307,map__10307__$1,active,path,name,id){
return (function (_10310,meta10309__$1){var self__ = this;
var _10310__$1 = this;return (new photosure.navigation.t10308(self__.id,self__.name,self__.path,self__.active,self__.map__10307,self__.owner,self__.p__10302,self__.navigation_item_view,meta10309__$1));
});})(map__10307,map__10307__$1,active,path,name,id))
;
photosure.navigation.__GT_t10308 = ((function (map__10307,map__10307__$1,active,path,name,id){
return (function __GT_t10308(id__$1,name__$1,path__$1,active__$1,map__10307__$2,owner__$1,p__10302__$1,navigation_item_view__$1,meta10309){return (new photosure.navigation.t10308(id__$1,name__$1,path__$1,active__$1,map__10307__$2,owner__$1,p__10302__$1,navigation_item_view__$1,meta10309));
});})(map__10307,map__10307__$1,active,path,name,id))
;
}
return (new photosure.navigation.t10308(id,name,path,active,map__10307__$1,owner,p__10302,navigation_item_view,null));
});
photosure.navigation.navigation_view = (function navigation_view(app,owner){if(typeof photosure.navigation.t10314 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.navigation.t10314 = (function (owner,app,navigation_view,meta10315){
this.owner = owner;
this.app = app;
this.navigation_view = navigation_view;
this.meta10315 = meta10315;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.navigation.t10314.cljs$lang$type = true;
photosure.navigation.t10314.cljs$lang$ctorStr = "photosure.navigation/t10314";
photosure.navigation.t10314.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.navigation/t10314");
});
photosure.navigation.t10314.prototype.om$core$IRender$ = true;
photosure.navigation.t10314.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "navigation-container"},React.DOM.div({"className": "banner-container"},React.DOM.p({"className": "banner"},"cpleblow photography")),cljs.core.apply.call(null,om.dom.ul,{"className": "nav nav-tabs"},om.core.build_all.call(null,photosure.navigation.navigation_item_view,self__.app)));
});
photosure.navigation.t10314.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10316){var self__ = this;
var _10316__$1 = this;return self__.meta10315;
});
photosure.navigation.t10314.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10316,meta10315__$1){var self__ = this;
var _10316__$1 = this;return (new photosure.navigation.t10314(self__.owner,self__.app,self__.navigation_view,meta10315__$1));
});
photosure.navigation.__GT_t10314 = (function __GT_t10314(owner__$1,app__$1,navigation_view__$1,meta10315){return (new photosure.navigation.t10314(owner__$1,app__$1,navigation_view__$1,meta10315));
});
}
return (new photosure.navigation.t10314(owner,app,navigation_view,null));
});
om.core.root.call(null,photosure.navigation.navigation_view,photosure.navigation.navigation_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("static-header")], null));

//# sourceMappingURL=navigation.js.map