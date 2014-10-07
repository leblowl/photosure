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
var action__10070__auto___10295 = (function (params__10071__auto__){if(cljs.core.map_QMARK_.call(null,params__10071__auto__))
{var map__10293 = params__10071__auto__;var map__10293__$1 = ((cljs.core.seq_QMARK_.call(null,map__10293))?cljs.core.apply.call(null,cljs.core.hash_map,map__10293):map__10293);return window.location = "/#/bio";
} else
{if(cljs.core.vector_QMARK_.call(null,params__10071__auto__))
{var vec__10294 = params__10071__auto__;return window.location = "/#/bio";
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/",action__10070__auto___10295);
var action__10070__auto___10298 = (function (params__10071__auto__){if(cljs.core.map_QMARK_.call(null,params__10071__auto__))
{var map__10296 = params__10071__auto__;var map__10296__$1 = ((cljs.core.seq_QMARK_.call(null,map__10296))?cljs.core.apply.call(null,cljs.core.hash_map,map__10296):map__10296);return photosure.bio.render.call(null);
} else
{if(cljs.core.vector_QMARK_.call(null,params__10071__auto__))
{var vec__10297 = params__10071__auto__;return photosure.bio.render.call(null);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/bio",action__10070__auto___10298);
var action__10070__auto___10301 = (function (params__10071__auto__){if(cljs.core.map_QMARK_.call(null,params__10071__auto__))
{var map__10299 = params__10071__auto__;var map__10299__$1 = ((cljs.core.seq_QMARK_.call(null,map__10299))?cljs.core.apply.call(null,cljs.core.hash_map,map__10299):map__10299);return photosure.blog.render.call(null);
} else
{if(cljs.core.vector_QMARK_.call(null,params__10071__auto__))
{var vec__10300 = params__10071__auto__;return photosure.blog.render.call(null);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/blog",action__10070__auto___10301);
var action__10070__auto___10304 = (function (params__10071__auto__){if(cljs.core.map_QMARK_.call(null,params__10071__auto__))
{var map__10302 = params__10071__auto__;var map__10302__$1 = ((cljs.core.seq_QMARK_.call(null,map__10302))?cljs.core.apply.call(null,cljs.core.hash_map,map__10302):map__10302);return photosure.gallery.render.call(null);
} else
{if(cljs.core.vector_QMARK_.call(null,params__10071__auto__))
{var vec__10303 = params__10071__auto__;return photosure.gallery.render.call(null);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/gallery",action__10070__auto___10304);
var action__10070__auto___10307 = (function (params__10071__auto__){if(cljs.core.map_QMARK_.call(null,params__10071__auto__))
{var map__10305 = params__10071__auto__;var map__10305__$1 = ((cljs.core.seq_QMARK_.call(null,map__10305))?cljs.core.apply.call(null,cljs.core.hash_map,map__10305):map__10305);return window.location = "/#/bio";
} else
{if(cljs.core.vector_QMARK_.call(null,params__10071__auto__))
{var vec__10306 = params__10071__auto__;return window.location = "/#/bio";
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"*",action__10070__auto___10307);
photosure.navigation.refresh_navigation = (function refresh_navigation(){var token = photosure.navigation.history.getToken();var set_active = ((function (token){
return (function (nav){return cljs.core.assoc.call(null,nav,new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(nav),token));
});})(token))
;return cljs.core.swap_BANG_.call(null,photosure.navigation.navigation_state,((function (token,set_active){
return (function (p1__10308_SHARP_){return cljs.core.map.call(null,set_active,p1__10308_SHARP_);
});})(token,set_active))
);
});
photosure.navigation.on_navigate = (function on_navigate(event){photosure.navigation.refresh_navigation.call(null);
return secretary.core.dispatch_BANG_.call(null,(((event.token == null))?"/":event.token));
});
var G__10309_10310 = photosure.navigation.history;goog.events.listen(G__10309_10310,goog.history.EventType.NAVIGATE,photosure.navigation.on_navigate);
G__10309_10310.setEnabled(true);
photosure.navigation.navigation_item_view = (function navigation_item_view(p__10311,owner){var map__10316 = p__10311;var map__10316__$1 = ((cljs.core.seq_QMARK_.call(null,map__10316))?cljs.core.apply.call(null,cljs.core.hash_map,map__10316):map__10316);var active = cljs.core.get.call(null,map__10316__$1,new cljs.core.Keyword(null,"active","active",1895962068));var path = cljs.core.get.call(null,map__10316__$1,new cljs.core.Keyword(null,"path","path",-188191168));var name = cljs.core.get.call(null,map__10316__$1,new cljs.core.Keyword(null,"name","name",1843675177));var id = cljs.core.get.call(null,map__10316__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof photosure.navigation.t10317 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.navigation.t10317 = (function (id,name,path,active,map__10316,owner,p__10311,navigation_item_view,meta10318){
this.id = id;
this.name = name;
this.path = path;
this.active = active;
this.map__10316 = map__10316;
this.owner = owner;
this.p__10311 = p__10311;
this.navigation_item_view = navigation_item_view;
this.meta10318 = meta10318;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.navigation.t10317.cljs$lang$type = true;
photosure.navigation.t10317.cljs$lang$ctorStr = "photosure.navigation/t10317";
photosure.navigation.t10317.cljs$lang$ctorPrWriter = ((function (map__10316,map__10316__$1,active,path,name,id){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.navigation/t10317");
});})(map__10316,map__10316__$1,active,path,name,id))
;
photosure.navigation.t10317.prototype.om$core$IRender$ = true;
photosure.navigation.t10317.prototype.om$core$IRender$render$arity$1 = ((function (map__10316,map__10316__$1,active,path,name,id){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.li({"className": (cljs.core.truth_(self__.active)?"active":""), "id": self__.id},React.DOM.a({"href": ("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.path))},self__.name));
});})(map__10316,map__10316__$1,active,path,name,id))
;
photosure.navigation.t10317.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10316,map__10316__$1,active,path,name,id){
return (function (_10319){var self__ = this;
var _10319__$1 = this;return self__.meta10318;
});})(map__10316,map__10316__$1,active,path,name,id))
;
photosure.navigation.t10317.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10316,map__10316__$1,active,path,name,id){
return (function (_10319,meta10318__$1){var self__ = this;
var _10319__$1 = this;return (new photosure.navigation.t10317(self__.id,self__.name,self__.path,self__.active,self__.map__10316,self__.owner,self__.p__10311,self__.navigation_item_view,meta10318__$1));
});})(map__10316,map__10316__$1,active,path,name,id))
;
photosure.navigation.__GT_t10317 = ((function (map__10316,map__10316__$1,active,path,name,id){
return (function __GT_t10317(id__$1,name__$1,path__$1,active__$1,map__10316__$2,owner__$1,p__10311__$1,navigation_item_view__$1,meta10318){return (new photosure.navigation.t10317(id__$1,name__$1,path__$1,active__$1,map__10316__$2,owner__$1,p__10311__$1,navigation_item_view__$1,meta10318));
});})(map__10316,map__10316__$1,active,path,name,id))
;
}
return (new photosure.navigation.t10317(id,name,path,active,map__10316__$1,owner,p__10311,navigation_item_view,null));
});
photosure.navigation.navigation_view = (function navigation_view(app,owner){if(typeof photosure.navigation.t10323 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.navigation.t10323 = (function (owner,app,navigation_view,meta10324){
this.owner = owner;
this.app = app;
this.navigation_view = navigation_view;
this.meta10324 = meta10324;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.navigation.t10323.cljs$lang$type = true;
photosure.navigation.t10323.cljs$lang$ctorStr = "photosure.navigation/t10323";
photosure.navigation.t10323.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.navigation/t10323");
});
photosure.navigation.t10323.prototype.om$core$IRender$ = true;
photosure.navigation.t10323.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "navigation-container"},React.DOM.div({"className": "banner-container"},React.DOM.p({"className": "banner"},"cpleblow photography")),cljs.core.apply.call(null,om.dom.ul,{"className": "nav nav-tabs"},om.core.build_all.call(null,photosure.navigation.navigation_item_view,self__.app)));
});
photosure.navigation.t10323.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10325){var self__ = this;
var _10325__$1 = this;return self__.meta10324;
});
photosure.navigation.t10323.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10325,meta10324__$1){var self__ = this;
var _10325__$1 = this;return (new photosure.navigation.t10323(self__.owner,self__.app,self__.navigation_view,meta10324__$1));
});
photosure.navigation.__GT_t10323 = (function __GT_t10323(owner__$1,app__$1,navigation_view__$1,meta10324){return (new photosure.navigation.t10323(owner__$1,app__$1,navigation_view__$1,meta10324));
});
}
return (new photosure.navigation.t10323(owner,app,navigation_view,null));
});
om.core.root.call(null,photosure.navigation.navigation_view,photosure.navigation.navigation_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("static-header")], null));

//# sourceMappingURL=navigation.js.map