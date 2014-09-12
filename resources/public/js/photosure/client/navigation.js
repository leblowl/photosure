// Compiled by ClojureScript 0.0-2173
goog.provide('photosure.client.navigation');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('photosure.client.blog');
goog.require('goog.events');
goog.require('secretary.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('photosure.client.gallery');
goog.require('photosure.client.bio');
goog.require('photosure.client.blog');
goog.require('om.dom');
goog.require('photosure.client.bio');
goog.require('goog.History.EventType');
goog.require('goog.events');
goog.require('secretary.core');
goog.require('photosure.client.gallery');
photosure.client.navigation.history = (new goog.History());
photosure.client.navigation.navigation_state = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),"tab0",new cljs.core.Keyword(null,"name","name",1017277949),"bio",new cljs.core.Keyword(null,"path","path",1017337751),"/bio"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),"tab1",new cljs.core.Keyword(null,"name","name",1017277949),"blog",new cljs.core.Keyword(null,"path","path",1017337751),"/blog"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),"tab2",new cljs.core.Keyword(null,"name","name",1017277949),"gallery",new cljs.core.Keyword(null,"path","path",1017337751),"/gallery"], null)], null));
var action__9567__auto___9624 = (function (params__9568__auto__){if(cljs.core.map_QMARK_.call(null,params__9568__auto__))
{var map__9622 = params__9568__auto__;var map__9622__$1 = ((cljs.core.seq_QMARK_.call(null,map__9622))?cljs.core.apply.call(null,cljs.core.hash_map,map__9622):map__9622);return photosure.client.bio.render.call(null);
} else
{if(cljs.core.vector_QMARK_.call(null,params__9568__auto__))
{var vec__9623 = params__9568__auto__;return photosure.client.bio.render.call(null);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/bio",action__9567__auto___9624);
var action__9567__auto___9627 = (function (params__9568__auto__){if(cljs.core.map_QMARK_.call(null,params__9568__auto__))
{var map__9625 = params__9568__auto__;var map__9625__$1 = ((cljs.core.seq_QMARK_.call(null,map__9625))?cljs.core.apply.call(null,cljs.core.hash_map,map__9625):map__9625);return photosure.client.blog.render.call(null);
} else
{if(cljs.core.vector_QMARK_.call(null,params__9568__auto__))
{var vec__9626 = params__9568__auto__;return photosure.client.blog.render.call(null);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/blog",action__9567__auto___9627);
var action__9567__auto___9630 = (function (params__9568__auto__){if(cljs.core.map_QMARK_.call(null,params__9568__auto__))
{var map__9628 = params__9568__auto__;var map__9628__$1 = ((cljs.core.seq_QMARK_.call(null,map__9628))?cljs.core.apply.call(null,cljs.core.hash_map,map__9628):map__9628);return photosure.client.gallery.render.call(null);
} else
{if(cljs.core.vector_QMARK_.call(null,params__9568__auto__))
{var vec__9629 = params__9568__auto__;return photosure.client.gallery.render.call(null);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/gallery",action__9567__auto___9630);
photosure.client.navigation.refresh_navigation = (function refresh_navigation(){var token = photosure.client.navigation.history.getToken();var set_active = ((function (token){
return (function (nav){return cljs.core.assoc.call(null,nav,new cljs.core.Keyword(null,"active","active",3885920888),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(nav),token));
});})(token))
;return cljs.core.swap_BANG_.call(null,photosure.client.navigation.navigation_state,(function (p1__9631_SHARP_){return cljs.core.map.call(null,set_active,p1__9631_SHARP_);
}));
});
photosure.client.navigation.on_navigate = (function on_navigate(event){photosure.client.navigation.refresh_navigation.call(null);
return secretary.core.dispatch_BANG_.call(null,event.token);
});
var G__9632_9633 = photosure.client.navigation.history;goog.events.listen(G__9632_9633,goog.History.EventType.NAVIGATE,photosure.client.navigation.on_navigate);
G__9632_9633.setEnabled(true);
photosure.client.navigation.navigation_item_view = (function navigation_item_view(p__9634,owner){var map__9639 = p__9634;var map__9639__$1 = ((cljs.core.seq_QMARK_.call(null,map__9639))?cljs.core.apply.call(null,cljs.core.hash_map,map__9639):map__9639);var active = cljs.core.get.call(null,map__9639__$1,new cljs.core.Keyword(null,"active","active",3885920888));var path = cljs.core.get.call(null,map__9639__$1,new cljs.core.Keyword(null,"path","path",1017337751));var name = cljs.core.get.call(null,map__9639__$1,new cljs.core.Keyword(null,"name","name",1017277949));var id = cljs.core.get.call(null,map__9639__$1,new cljs.core.Keyword(null,"id","id",1013907597));if(typeof photosure.client.navigation.t9640 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.client.navigation.t9640 = (function (id,name,path,active,map__9639,owner,p__9634,navigation_item_view,meta9641){
this.id = id;
this.name = name;
this.path = path;
this.active = active;
this.map__9639 = map__9639;
this.owner = owner;
this.p__9634 = p__9634;
this.navigation_item_view = navigation_item_view;
this.meta9641 = meta9641;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.client.navigation.t9640.cljs$lang$type = true;
photosure.client.navigation.t9640.cljs$lang$ctorStr = "photosure.client.navigation/t9640";
photosure.client.navigation.t9640.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.client.navigation/t9640");
});
photosure.client.navigation.t9640.prototype.om$core$IRender$ = true;
photosure.client.navigation.t9640.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.li({"className": (cljs.core.truth_(self__.active)?"active":""), "id": self__.id},React.DOM.a({"href": [cljs.core.str("#"),cljs.core.str(self__.path)].join('')},self__.name));
});
photosure.client.navigation.t9640.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9642){var self__ = this;
var _9642__$1 = this;return self__.meta9641;
});
photosure.client.navigation.t9640.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9642,meta9641__$1){var self__ = this;
var _9642__$1 = this;return (new photosure.client.navigation.t9640(self__.id,self__.name,self__.path,self__.active,self__.map__9639,self__.owner,self__.p__9634,self__.navigation_item_view,meta9641__$1));
});
photosure.client.navigation.__GT_t9640 = (function __GT_t9640(id__$1,name__$1,path__$1,active__$1,map__9639__$2,owner__$1,p__9634__$1,navigation_item_view__$1,meta9641){return (new photosure.client.navigation.t9640(id__$1,name__$1,path__$1,active__$1,map__9639__$2,owner__$1,p__9634__$1,navigation_item_view__$1,meta9641));
});
}
return (new photosure.client.navigation.t9640(id,name,path,active,map__9639__$1,owner,p__9634,navigation_item_view,null));
});
photosure.client.navigation.navigation_view = (function navigation_view(app,owner){if(typeof photosure.client.navigation.t9646 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.client.navigation.t9646 = (function (owner,app,navigation_view,meta9647){
this.owner = owner;
this.app = app;
this.navigation_view = navigation_view;
this.meta9647 = meta9647;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.client.navigation.t9646.cljs$lang$type = true;
photosure.client.navigation.t9646.cljs$lang$ctorStr = "photosure.client.navigation/t9646";
photosure.client.navigation.t9646.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.client.navigation/t9646");
});
photosure.client.navigation.t9646.prototype.om$core$IRender$ = true;
photosure.client.navigation.t9646.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "navigation-container"},React.DOM.div({"className": "banner-container"},React.DOM.p({"className": "banner"},"C.P.Leblow Gallery")),cljs.core.apply.call(null,om.dom.ul,{"className": "nav nav-tabs"},om.core.build_all.call(null,photosure.client.navigation.navigation_item_view,self__.app)));
});
photosure.client.navigation.t9646.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9648){var self__ = this;
var _9648__$1 = this;return self__.meta9647;
});
photosure.client.navigation.t9646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9648,meta9647__$1){var self__ = this;
var _9648__$1 = this;return (new photosure.client.navigation.t9646(self__.owner,self__.app,self__.navigation_view,meta9647__$1));
});
photosure.client.navigation.__GT_t9646 = (function __GT_t9646(owner__$1,app__$1,navigation_view__$1,meta9647){return (new photosure.client.navigation.t9646(owner__$1,app__$1,navigation_view__$1,meta9647));
});
}
return (new photosure.client.navigation.t9646(owner,app,navigation_view,null));
});
om.core.root.call(null,photosure.client.navigation.navigation_view,photosure.client.navigation.navigation_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("static-header")], null));

//# sourceMappingURL=navigation.js.map