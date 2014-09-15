// Compiled by ClojureScript 0.0-2173
goog.provide('photosure.navigation');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('photosure.blog');
goog.require('goog.events');
goog.require('photosure.gallery');
goog.require('secretary.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('photosure.bio');
goog.require('photosure.bio');
goog.require('om.dom');
goog.require('goog.History.EventType');
goog.require('photosure.blog');
goog.require('goog.events');
goog.require('secretary.core');
goog.require('photosure.gallery');
photosure.navigation.history = (new goog.History());
photosure.navigation.navigation_state = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),"tab0",new cljs.core.Keyword(null,"name","name",1017277949),"bio",new cljs.core.Keyword(null,"path","path",1017337751),"/bio"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),"tab1",new cljs.core.Keyword(null,"name","name",1017277949),"blog",new cljs.core.Keyword(null,"path","path",1017337751),"/blog"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),"tab2",new cljs.core.Keyword(null,"name","name",1017277949),"gallery",new cljs.core.Keyword(null,"path","path",1017337751),"/gallery"], null)], null));
var action__9614__auto___9779 = (function (params__9615__auto__){if(cljs.core.map_QMARK_.call(null,params__9615__auto__))
{var map__9777 = params__9615__auto__;var map__9777__$1 = ((cljs.core.seq_QMARK_.call(null,map__9777))?cljs.core.apply.call(null,cljs.core.hash_map,map__9777):map__9777);return photosure.bio.render.call(null);
} else
{if(cljs.core.vector_QMARK_.call(null,params__9615__auto__))
{var vec__9778 = params__9615__auto__;return photosure.bio.render.call(null);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/bio",action__9614__auto___9779);
var action__9614__auto___9782 = (function (params__9615__auto__){if(cljs.core.map_QMARK_.call(null,params__9615__auto__))
{var map__9780 = params__9615__auto__;var map__9780__$1 = ((cljs.core.seq_QMARK_.call(null,map__9780))?cljs.core.apply.call(null,cljs.core.hash_map,map__9780):map__9780);return photosure.blog.render.call(null);
} else
{if(cljs.core.vector_QMARK_.call(null,params__9615__auto__))
{var vec__9781 = params__9615__auto__;return photosure.blog.render.call(null);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/blog",action__9614__auto___9782);
var action__9614__auto___9785 = (function (params__9615__auto__){if(cljs.core.map_QMARK_.call(null,params__9615__auto__))
{var map__9783 = params__9615__auto__;var map__9783__$1 = ((cljs.core.seq_QMARK_.call(null,map__9783))?cljs.core.apply.call(null,cljs.core.hash_map,map__9783):map__9783);return photosure.gallery.render.call(null);
} else
{if(cljs.core.vector_QMARK_.call(null,params__9615__auto__))
{var vec__9784 = params__9615__auto__;return photosure.gallery.render.call(null);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/gallery",action__9614__auto___9785);
photosure.navigation.refresh_navigation = (function refresh_navigation(){var token = photosure.navigation.history.getToken();var set_active = ((function (token){
return (function (nav){return cljs.core.assoc.call(null,nav,new cljs.core.Keyword(null,"active","active",3885920888),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(nav),token));
});})(token))
;return cljs.core.swap_BANG_.call(null,photosure.navigation.navigation_state,(function (p1__9786_SHARP_){return cljs.core.map.call(null,set_active,p1__9786_SHARP_);
}));
});
photosure.navigation.on_navigate = (function on_navigate(event){photosure.navigation.refresh_navigation.call(null);
return secretary.core.dispatch_BANG_.call(null,event.token);
});
var G__9787_9788 = photosure.navigation.history;goog.events.listen(G__9787_9788,goog.History.EventType.NAVIGATE,photosure.navigation.on_navigate);
G__9787_9788.setEnabled(true);
photosure.navigation.navigation_item_view = (function navigation_item_view(p__9789,owner){var map__9794 = p__9789;var map__9794__$1 = ((cljs.core.seq_QMARK_.call(null,map__9794))?cljs.core.apply.call(null,cljs.core.hash_map,map__9794):map__9794);var active = cljs.core.get.call(null,map__9794__$1,new cljs.core.Keyword(null,"active","active",3885920888));var path = cljs.core.get.call(null,map__9794__$1,new cljs.core.Keyword(null,"path","path",1017337751));var name = cljs.core.get.call(null,map__9794__$1,new cljs.core.Keyword(null,"name","name",1017277949));var id = cljs.core.get.call(null,map__9794__$1,new cljs.core.Keyword(null,"id","id",1013907597));if(typeof photosure.navigation.t9795 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.navigation.t9795 = (function (id,name,path,active,map__9794,owner,p__9789,navigation_item_view,meta9796){
this.id = id;
this.name = name;
this.path = path;
this.active = active;
this.map__9794 = map__9794;
this.owner = owner;
this.p__9789 = p__9789;
this.navigation_item_view = navigation_item_view;
this.meta9796 = meta9796;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.navigation.t9795.cljs$lang$type = true;
photosure.navigation.t9795.cljs$lang$ctorStr = "photosure.navigation/t9795";
photosure.navigation.t9795.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.navigation/t9795");
});
photosure.navigation.t9795.prototype.om$core$IRender$ = true;
photosure.navigation.t9795.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.li({"className": (cljs.core.truth_(self__.active)?"active":""), "id": self__.id},React.DOM.a({"href": [cljs.core.str("#"),cljs.core.str(self__.path)].join('')},self__.name));
});
photosure.navigation.t9795.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9797){var self__ = this;
var _9797__$1 = this;return self__.meta9796;
});
photosure.navigation.t9795.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9797,meta9796__$1){var self__ = this;
var _9797__$1 = this;return (new photosure.navigation.t9795(self__.id,self__.name,self__.path,self__.active,self__.map__9794,self__.owner,self__.p__9789,self__.navigation_item_view,meta9796__$1));
});
photosure.navigation.__GT_t9795 = (function __GT_t9795(id__$1,name__$1,path__$1,active__$1,map__9794__$2,owner__$1,p__9789__$1,navigation_item_view__$1,meta9796){return (new photosure.navigation.t9795(id__$1,name__$1,path__$1,active__$1,map__9794__$2,owner__$1,p__9789__$1,navigation_item_view__$1,meta9796));
});
}
return (new photosure.navigation.t9795(id,name,path,active,map__9794__$1,owner,p__9789,navigation_item_view,null));
});
photosure.navigation.navigation_view = (function navigation_view(app,owner){if(typeof photosure.navigation.t9801 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.navigation.t9801 = (function (owner,app,navigation_view,meta9802){
this.owner = owner;
this.app = app;
this.navigation_view = navigation_view;
this.meta9802 = meta9802;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.navigation.t9801.cljs$lang$type = true;
photosure.navigation.t9801.cljs$lang$ctorStr = "photosure.navigation/t9801";
photosure.navigation.t9801.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.navigation/t9801");
});
photosure.navigation.t9801.prototype.om$core$IRender$ = true;
photosure.navigation.t9801.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "navigation-container"},React.DOM.div({"className": "banner-container"},React.DOM.p({"className": "banner"},"C.P.Leblow Gallery")),cljs.core.apply.call(null,om.dom.ul,{"className": "nav nav-tabs"},om.core.build_all.call(null,photosure.navigation.navigation_item_view,self__.app)));
});
photosure.navigation.t9801.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9803){var self__ = this;
var _9803__$1 = this;return self__.meta9802;
});
photosure.navigation.t9801.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9803,meta9802__$1){var self__ = this;
var _9803__$1 = this;return (new photosure.navigation.t9801(self__.owner,self__.app,self__.navigation_view,meta9802__$1));
});
photosure.navigation.__GT_t9801 = (function __GT_t9801(owner__$1,app__$1,navigation_view__$1,meta9802){return (new photosure.navigation.t9801(owner__$1,app__$1,navigation_view__$1,meta9802));
});
}
return (new photosure.navigation.t9801(owner,app,navigation_view,null));
});
om.core.root.call(null,photosure.navigation.navigation_view,photosure.navigation.navigation_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("static-header")], null));
photosure.navigation.history.setToken("/bio");

//# sourceMappingURL=navigation.js.map