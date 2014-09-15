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
var action__9845__auto___15628 = (function (params__9846__auto__){if(cljs.core.map_QMARK_.call(null,params__9846__auto__))
{var map__15626 = params__9846__auto__;var map__15626__$1 = ((cljs.core.seq_QMARK_.call(null,map__15626))?cljs.core.apply.call(null,cljs.core.hash_map,map__15626):map__15626);return window.location = "/#/bio";
} else
{if(cljs.core.vector_QMARK_.call(null,params__9846__auto__))
{var vec__15627 = params__9846__auto__;return window.location = "/#/bio";
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/",action__9845__auto___15628);
var action__9845__auto___15631 = (function (params__9846__auto__){if(cljs.core.map_QMARK_.call(null,params__9846__auto__))
{var map__15629 = params__9846__auto__;var map__15629__$1 = ((cljs.core.seq_QMARK_.call(null,map__15629))?cljs.core.apply.call(null,cljs.core.hash_map,map__15629):map__15629);return photosure.bio.render.call(null);
} else
{if(cljs.core.vector_QMARK_.call(null,params__9846__auto__))
{var vec__15630 = params__9846__auto__;return photosure.bio.render.call(null);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/bio",action__9845__auto___15631);
var action__9845__auto___15634 = (function (params__9846__auto__){if(cljs.core.map_QMARK_.call(null,params__9846__auto__))
{var map__15632 = params__9846__auto__;var map__15632__$1 = ((cljs.core.seq_QMARK_.call(null,map__15632))?cljs.core.apply.call(null,cljs.core.hash_map,map__15632):map__15632);return photosure.blog.render.call(null);
} else
{if(cljs.core.vector_QMARK_.call(null,params__9846__auto__))
{var vec__15633 = params__9846__auto__;return photosure.blog.render.call(null);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/blog",action__9845__auto___15634);
var action__9845__auto___15637 = (function (params__9846__auto__){if(cljs.core.map_QMARK_.call(null,params__9846__auto__))
{var map__15635 = params__9846__auto__;var map__15635__$1 = ((cljs.core.seq_QMARK_.call(null,map__15635))?cljs.core.apply.call(null,cljs.core.hash_map,map__15635):map__15635);return photosure.gallery.render.call(null);
} else
{if(cljs.core.vector_QMARK_.call(null,params__9846__auto__))
{var vec__15636 = params__9846__auto__;return photosure.gallery.render.call(null);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/gallery",action__9845__auto___15637);
photosure.navigation.refresh_navigation = (function refresh_navigation(){var token = photosure.navigation.history.getToken();var set_active = ((function (token){
return (function (nav){return cljs.core.assoc.call(null,nav,new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(nav),token));
});})(token))
;return cljs.core.swap_BANG_.call(null,photosure.navigation.navigation_state,((function (token,set_active){
return (function (p1__15638_SHARP_){return cljs.core.map.call(null,set_active,p1__15638_SHARP_);
});})(token,set_active))
);
});
photosure.navigation.on_navigate = (function on_navigate(event){photosure.navigation.refresh_navigation.call(null);
return secretary.core.dispatch_BANG_.call(null,(((event.token == null))?"/":event.token));
});
var G__15639_15640 = photosure.navigation.history;goog.events.listen(G__15639_15640,goog.history.EventType.NAVIGATE,photosure.navigation.on_navigate);
G__15639_15640.setEnabled(true);
photosure.navigation.navigation_item_view = (function navigation_item_view(p__15641,owner){var map__15646 = p__15641;var map__15646__$1 = ((cljs.core.seq_QMARK_.call(null,map__15646))?cljs.core.apply.call(null,cljs.core.hash_map,map__15646):map__15646);var active = cljs.core.get.call(null,map__15646__$1,new cljs.core.Keyword(null,"active","active",1895962068));var path = cljs.core.get.call(null,map__15646__$1,new cljs.core.Keyword(null,"path","path",-188191168));var name = cljs.core.get.call(null,map__15646__$1,new cljs.core.Keyword(null,"name","name",1843675177));var id = cljs.core.get.call(null,map__15646__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof photosure.navigation.t15647 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.navigation.t15647 = (function (id,name,path,active,map__15646,owner,p__15641,navigation_item_view,meta15648){
this.id = id;
this.name = name;
this.path = path;
this.active = active;
this.map__15646 = map__15646;
this.owner = owner;
this.p__15641 = p__15641;
this.navigation_item_view = navigation_item_view;
this.meta15648 = meta15648;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.navigation.t15647.cljs$lang$type = true;
photosure.navigation.t15647.cljs$lang$ctorStr = "photosure.navigation/t15647";
photosure.navigation.t15647.cljs$lang$ctorPrWriter = ((function (map__15646,map__15646__$1,active,path,name,id){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.navigation/t15647");
});})(map__15646,map__15646__$1,active,path,name,id))
;
photosure.navigation.t15647.prototype.om$core$IRender$ = true;
photosure.navigation.t15647.prototype.om$core$IRender$render$arity$1 = ((function (map__15646,map__15646__$1,active,path,name,id){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.li({"className": (cljs.core.truth_(self__.active)?"active":""), "id": self__.id},React.DOM.a({"href": ("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.path))},self__.name));
});})(map__15646,map__15646__$1,active,path,name,id))
;
photosure.navigation.t15647.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__15646,map__15646__$1,active,path,name,id){
return (function (_15649){var self__ = this;
var _15649__$1 = this;return self__.meta15648;
});})(map__15646,map__15646__$1,active,path,name,id))
;
photosure.navigation.t15647.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__15646,map__15646__$1,active,path,name,id){
return (function (_15649,meta15648__$1){var self__ = this;
var _15649__$1 = this;return (new photosure.navigation.t15647(self__.id,self__.name,self__.path,self__.active,self__.map__15646,self__.owner,self__.p__15641,self__.navigation_item_view,meta15648__$1));
});})(map__15646,map__15646__$1,active,path,name,id))
;
photosure.navigation.__GT_t15647 = ((function (map__15646,map__15646__$1,active,path,name,id){
return (function __GT_t15647(id__$1,name__$1,path__$1,active__$1,map__15646__$2,owner__$1,p__15641__$1,navigation_item_view__$1,meta15648){return (new photosure.navigation.t15647(id__$1,name__$1,path__$1,active__$1,map__15646__$2,owner__$1,p__15641__$1,navigation_item_view__$1,meta15648));
});})(map__15646,map__15646__$1,active,path,name,id))
;
}
return (new photosure.navigation.t15647(id,name,path,active,map__15646__$1,owner,p__15641,navigation_item_view,null));
});
photosure.navigation.navigation_view = (function navigation_view(app,owner){if(typeof photosure.navigation.t15653 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.navigation.t15653 = (function (owner,app,navigation_view,meta15654){
this.owner = owner;
this.app = app;
this.navigation_view = navigation_view;
this.meta15654 = meta15654;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.navigation.t15653.cljs$lang$type = true;
photosure.navigation.t15653.cljs$lang$ctorStr = "photosure.navigation/t15653";
photosure.navigation.t15653.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.navigation/t15653");
});
photosure.navigation.t15653.prototype.om$core$IRender$ = true;
photosure.navigation.t15653.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "navigation-container"},React.DOM.div({"className": "banner-container"},React.DOM.p({"className": "banner"},"C.P.Leblow Gallery")),cljs.core.apply.call(null,om.dom.ul,{"className": "nav nav-tabs"},om.core.build_all.call(null,photosure.navigation.navigation_item_view,self__.app)));
});
photosure.navigation.t15653.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15655){var self__ = this;
var _15655__$1 = this;return self__.meta15654;
});
photosure.navigation.t15653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15655,meta15654__$1){var self__ = this;
var _15655__$1 = this;return (new photosure.navigation.t15653(self__.owner,self__.app,self__.navigation_view,meta15654__$1));
});
photosure.navigation.__GT_t15653 = (function __GT_t15653(owner__$1,app__$1,navigation_view__$1,meta15654){return (new photosure.navigation.t15653(owner__$1,app__$1,navigation_view__$1,meta15654));
});
}
return (new photosure.navigation.t15653(owner,app,navigation_view,null));
});
om.core.root.call(null,photosure.navigation.navigation_view,photosure.navigation.navigation_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("static-header")], null));

//# sourceMappingURL=navigation.js.map