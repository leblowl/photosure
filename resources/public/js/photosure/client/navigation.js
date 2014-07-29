// Compiled by ClojureScript 0.0-2173
goog.provide('photosure.client.navigation');
goog.require('cljs.core');
goog.require('enfocus.core');
goog.require('goog.History');
goog.require('goog.events');
goog.require('enfocus.events');
goog.require('secretary.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('enfocus.core');
goog.require('enfocus.events');
goog.require('photosure.client.gallery');
goog.require('enfocus.effects');
goog.require('photosure.client.bio');
goog.require('om.dom');
goog.require('photosure.client.bio');
goog.require('enfocus.effects');
goog.require('goog.History.EventType');
goog.require('goog.events');
goog.require('secretary.core');
goog.require('photosure.client.gallery');
photosure.client.navigation.history = (new goog.History());
photosure.client.navigation.navigation_state = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),"tab0",new cljs.core.Keyword(null,"name","name",1017277949),"bio",new cljs.core.Keyword(null,"path","path",1017337751),"/bio"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),"tab1",new cljs.core.Keyword(null,"name","name",1017277949),"blog",new cljs.core.Keyword(null,"path","path",1017337751),"/blog"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),"tab2",new cljs.core.Keyword(null,"name","name",1017277949),"gallery",new cljs.core.Keyword(null,"path","path",1017337751),"/gallery"], null)], null));
var action__9448__auto___10171 = (function (params__9449__auto__){if(cljs.core.map_QMARK_.call(null,params__9449__auto__))
{var map__10169 = params__9449__auto__;var map__10169__$1 = ((cljs.core.seq_QMARK_.call(null,map__10169))?cljs.core.apply.call(null,cljs.core.hash_map,map__10169):map__10169);return photosure.client.bio.render.call(null);
} else
{if(cljs.core.vector_QMARK_.call(null,params__9449__auto__))
{var vec__10170 = params__9449__auto__;return photosure.client.bio.render.call(null);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/bio",action__9448__auto___10171);
var action__9448__auto___10174 = (function (params__9449__auto__){if(cljs.core.map_QMARK_.call(null,params__9449__auto__))
{var map__10172 = params__9449__auto__;var map__10172__$1 = ((cljs.core.seq_QMARK_.call(null,map__10172))?cljs.core.apply.call(null,cljs.core.hash_map,map__10172):map__10172);return console.log("blog");
} else
{if(cljs.core.vector_QMARK_.call(null,params__9449__auto__))
{var vec__10173 = params__9449__auto__;return console.log("blog");
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/blog",action__9448__auto___10174);
var action__9448__auto___10177 = (function (params__9449__auto__){if(cljs.core.map_QMARK_.call(null,params__9449__auto__))
{var map__10175 = params__9449__auto__;var map__10175__$1 = ((cljs.core.seq_QMARK_.call(null,map__10175))?cljs.core.apply.call(null,cljs.core.hash_map,map__10175):map__10175);return photosure.client.gallery.render.call(null);
} else
{if(cljs.core.vector_QMARK_.call(null,params__9449__auto__))
{var vec__10176 = params__9449__auto__;return photosure.client.gallery.render.call(null);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/gallery",action__9448__auto___10177);
photosure.client.navigation.refresh_navigation = (function refresh_navigation(){var token = photosure.client.navigation.history.getToken();var set_active = ((function (token){
return (function (nav){return cljs.core.assoc.call(null,nav,new cljs.core.Keyword(null,"active","active",3885920888),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(nav),token));
});})(token))
;return cljs.core.swap_BANG_.call(null,photosure.client.navigation.navigation_state,(function (p1__10178_SHARP_){return cljs.core.map.call(null,set_active,p1__10178_SHARP_);
}));
});
photosure.client.navigation.on_navigate = (function on_navigate(event){photosure.client.navigation.refresh_navigation.call(null);
return secretary.core.dispatch_BANG_.call(null,event.token);
});
var G__10179_10180 = photosure.client.navigation.history;goog.events.listen(G__10179_10180,goog.History.EventType.NAVIGATE,photosure.client.navigation.on_navigate);
G__10179_10180.setEnabled(true);
photosure.client.navigation.navigation_item_view = (function navigation_item_view(p__10181,owner){var map__10186 = p__10181;var map__10186__$1 = ((cljs.core.seq_QMARK_.call(null,map__10186))?cljs.core.apply.call(null,cljs.core.hash_map,map__10186):map__10186);var active = cljs.core.get.call(null,map__10186__$1,new cljs.core.Keyword(null,"active","active",3885920888));var path = cljs.core.get.call(null,map__10186__$1,new cljs.core.Keyword(null,"path","path",1017337751));var name = cljs.core.get.call(null,map__10186__$1,new cljs.core.Keyword(null,"name","name",1017277949));var id = cljs.core.get.call(null,map__10186__$1,new cljs.core.Keyword(null,"id","id",1013907597));if(typeof photosure.client.navigation.t10187 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.client.navigation.t10187 = (function (id,name,path,active,map__10186,owner,p__10181,navigation_item_view,meta10188){
this.id = id;
this.name = name;
this.path = path;
this.active = active;
this.map__10186 = map__10186;
this.owner = owner;
this.p__10181 = p__10181;
this.navigation_item_view = navigation_item_view;
this.meta10188 = meta10188;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.client.navigation.t10187.cljs$lang$type = true;
photosure.client.navigation.t10187.cljs$lang$ctorStr = "photosure.client.navigation/t10187";
photosure.client.navigation.t10187.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.client.navigation/t10187");
});
photosure.client.navigation.t10187.prototype.om$core$IRender$ = true;
photosure.client.navigation.t10187.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.li({"className": (cljs.core.truth_(self__.active)?"active":""), "id": self__.id},React.DOM.a({"href": [cljs.core.str("#"),cljs.core.str(self__.path)].join('')},self__.name));
});
photosure.client.navigation.t10187.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10189){var self__ = this;
var _10189__$1 = this;return self__.meta10188;
});
photosure.client.navigation.t10187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10189,meta10188__$1){var self__ = this;
var _10189__$1 = this;return (new photosure.client.navigation.t10187(self__.id,self__.name,self__.path,self__.active,self__.map__10186,self__.owner,self__.p__10181,self__.navigation_item_view,meta10188__$1));
});
photosure.client.navigation.__GT_t10187 = (function __GT_t10187(id__$1,name__$1,path__$1,active__$1,map__10186__$2,owner__$1,p__10181__$1,navigation_item_view__$1,meta10188){return (new photosure.client.navigation.t10187(id__$1,name__$1,path__$1,active__$1,map__10186__$2,owner__$1,p__10181__$1,navigation_item_view__$1,meta10188));
});
}
return (new photosure.client.navigation.t10187(id,name,path,active,map__10186__$1,owner,p__10181,navigation_item_view,null));
});
photosure.client.navigation.navigation_view = (function navigation_view(app,owner){if(typeof photosure.client.navigation.t10193 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.client.navigation.t10193 = (function (owner,app,navigation_view,meta10194){
this.owner = owner;
this.app = app;
this.navigation_view = navigation_view;
this.meta10194 = meta10194;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.client.navigation.t10193.cljs$lang$type = true;
photosure.client.navigation.t10193.cljs$lang$ctorStr = "photosure.client.navigation/t10193";
photosure.client.navigation.t10193.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.client.navigation/t10193");
});
photosure.client.navigation.t10193.prototype.om$core$IRender$ = true;
photosure.client.navigation.t10193.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "navigation-container"},React.DOM.p({"className": "banner"},"C.P.Leblow Gallery"),cljs.core.apply.call(null,om.dom.ul,{"className": "nav nav-tabs"},om.core.build_all.call(null,photosure.client.navigation.navigation_item_view,self__.app)));
});
photosure.client.navigation.t10193.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10195){var self__ = this;
var _10195__$1 = this;return self__.meta10194;
});
photosure.client.navigation.t10193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10195,meta10194__$1){var self__ = this;
var _10195__$1 = this;return (new photosure.client.navigation.t10193(self__.owner,self__.app,self__.navigation_view,meta10194__$1));
});
photosure.client.navigation.__GT_t10193 = (function __GT_t10193(owner__$1,app__$1,navigation_view__$1,meta10194){return (new photosure.client.navigation.t10193(owner__$1,app__$1,navigation_view__$1,meta10194));
});
}
return (new photosure.client.navigation.t10193(owner,app,navigation_view,null));
});
om.core.root.call(null,photosure.client.navigation.navigation_view,photosure.client.navigation.navigation_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("static-header")], null));

//# sourceMappingURL=navigation.js.map