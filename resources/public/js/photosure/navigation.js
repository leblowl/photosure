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
var action__10079__auto___17226 = (function (params__10080__auto__){if(cljs.core.map_QMARK_.call(null,params__10080__auto__))
{var map__17224 = params__10080__auto__;var map__17224__$1 = ((cljs.core.seq_QMARK_.call(null,map__17224))?cljs.core.apply.call(null,cljs.core.hash_map,map__17224):map__17224);return window.location = "/#/bio";
} else
{if(cljs.core.vector_QMARK_.call(null,params__10080__auto__))
{var vec__17225 = params__10080__auto__;return window.location = "/#/bio";
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/",action__10079__auto___17226);
var action__10079__auto___17229 = (function (params__10080__auto__){if(cljs.core.map_QMARK_.call(null,params__10080__auto__))
{var map__17227 = params__10080__auto__;var map__17227__$1 = ((cljs.core.seq_QMARK_.call(null,map__17227))?cljs.core.apply.call(null,cljs.core.hash_map,map__17227):map__17227);return photosure.bio.render.call(null);
} else
{if(cljs.core.vector_QMARK_.call(null,params__10080__auto__))
{var vec__17228 = params__10080__auto__;return photosure.bio.render.call(null);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/bio",action__10079__auto___17229);
var action__10079__auto___17232 = (function (params__10080__auto__){if(cljs.core.map_QMARK_.call(null,params__10080__auto__))
{var map__17230 = params__10080__auto__;var map__17230__$1 = ((cljs.core.seq_QMARK_.call(null,map__17230))?cljs.core.apply.call(null,cljs.core.hash_map,map__17230):map__17230);var page = cljs.core.get.call(null,map__17230__$1,new cljs.core.Keyword(null,"page","page",849072397));if(cljs.core.truth_(cljs.core.re_matches.call(null,/[0-9]+/,page)))
{return photosure.blog.render.call(null,parseInt(page));
} else
{return window.location = "/#/blog";
}
} else
{if(cljs.core.vector_QMARK_.call(null,params__10080__auto__))
{var vec__17231 = params__10080__auto__;var page = cljs.core.nth.call(null,vec__17231,(0),null);if(cljs.core.truth_(cljs.core.re_matches.call(null,/[0-9]+/,page)))
{return photosure.blog.render.call(null,parseInt(page));
} else
{return window.location = "/#/blog";
}
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/blog/:page",action__10079__auto___17232);
var action__10079__auto___17235 = (function (params__10080__auto__){if(cljs.core.map_QMARK_.call(null,params__10080__auto__))
{var map__17233 = params__10080__auto__;var map__17233__$1 = ((cljs.core.seq_QMARK_.call(null,map__17233))?cljs.core.apply.call(null,cljs.core.hash_map,map__17233):map__17233);return photosure.blog.render.call(null,(0));
} else
{if(cljs.core.vector_QMARK_.call(null,params__10080__auto__))
{var vec__17234 = params__10080__auto__;return photosure.blog.render.call(null,(0));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/blog",action__10079__auto___17235);
var action__10079__auto___17238 = (function (params__10080__auto__){if(cljs.core.map_QMARK_.call(null,params__10080__auto__))
{var map__17236 = params__10080__auto__;var map__17236__$1 = ((cljs.core.seq_QMARK_.call(null,map__17236))?cljs.core.apply.call(null,cljs.core.hash_map,map__17236):map__17236);return photosure.gallery.render.call(null);
} else
{if(cljs.core.vector_QMARK_.call(null,params__10080__auto__))
{var vec__17237 = params__10080__auto__;return photosure.gallery.render.call(null);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/gallery",action__10079__auto___17238);
var action__10079__auto___17241 = (function (params__10080__auto__){if(cljs.core.map_QMARK_.call(null,params__10080__auto__))
{var map__17239 = params__10080__auto__;var map__17239__$1 = ((cljs.core.seq_QMARK_.call(null,map__17239))?cljs.core.apply.call(null,cljs.core.hash_map,map__17239):map__17239);return window.location = "/#/bio";
} else
{if(cljs.core.vector_QMARK_.call(null,params__10080__auto__))
{var vec__17240 = params__10080__auto__;return window.location = "/#/bio";
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"*",action__10079__auto___17241);
photosure.navigation.refresh_navigation = (function refresh_navigation(){var token = photosure.navigation.history.getToken();var set_active = ((function (token){
return (function (nav){return cljs.core.assoc.call(null,nav,new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(nav),token));
});})(token))
;return cljs.core.swap_BANG_.call(null,photosure.navigation.navigation_state,((function (token,set_active){
return (function (p1__17242_SHARP_){return cljs.core.map.call(null,set_active,p1__17242_SHARP_);
});})(token,set_active))
);
});
photosure.navigation.on_navigate = (function on_navigate(event){photosure.navigation.refresh_navigation.call(null);
return secretary.core.dispatch_BANG_.call(null,(((event.token == null))?"/":event.token));
});
var G__17243_17244 = photosure.navigation.history;goog.events.listen(G__17243_17244,goog.history.EventType.NAVIGATE,photosure.navigation.on_navigate);
G__17243_17244.setEnabled(true);
photosure.navigation.navigation_item_view = (function navigation_item_view(p__17245,owner){var map__17250 = p__17245;var map__17250__$1 = ((cljs.core.seq_QMARK_.call(null,map__17250))?cljs.core.apply.call(null,cljs.core.hash_map,map__17250):map__17250);var active = cljs.core.get.call(null,map__17250__$1,new cljs.core.Keyword(null,"active","active",1895962068));var path = cljs.core.get.call(null,map__17250__$1,new cljs.core.Keyword(null,"path","path",-188191168));var name = cljs.core.get.call(null,map__17250__$1,new cljs.core.Keyword(null,"name","name",1843675177));var id = cljs.core.get.call(null,map__17250__$1,new cljs.core.Keyword(null,"id","id",-1388402092));if(typeof photosure.navigation.t17251 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.navigation.t17251 = (function (id,name,path,active,map__17250,owner,p__17245,navigation_item_view,meta17252){
this.id = id;
this.name = name;
this.path = path;
this.active = active;
this.map__17250 = map__17250;
this.owner = owner;
this.p__17245 = p__17245;
this.navigation_item_view = navigation_item_view;
this.meta17252 = meta17252;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.navigation.t17251.cljs$lang$type = true;
photosure.navigation.t17251.cljs$lang$ctorStr = "photosure.navigation/t17251";
photosure.navigation.t17251.cljs$lang$ctorPrWriter = ((function (map__17250,map__17250__$1,active,path,name,id){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.navigation/t17251");
});})(map__17250,map__17250__$1,active,path,name,id))
;
photosure.navigation.t17251.prototype.om$core$IRender$ = true;
photosure.navigation.t17251.prototype.om$core$IRender$render$arity$1 = ((function (map__17250,map__17250__$1,active,path,name,id){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.li({"className": (cljs.core.truth_(self__.active)?"active":""), "id": self__.id},React.DOM.a({"href": ("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.path))},self__.name));
});})(map__17250,map__17250__$1,active,path,name,id))
;
photosure.navigation.t17251.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__17250,map__17250__$1,active,path,name,id){
return (function (_17253){var self__ = this;
var _17253__$1 = this;return self__.meta17252;
});})(map__17250,map__17250__$1,active,path,name,id))
;
photosure.navigation.t17251.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__17250,map__17250__$1,active,path,name,id){
return (function (_17253,meta17252__$1){var self__ = this;
var _17253__$1 = this;return (new photosure.navigation.t17251(self__.id,self__.name,self__.path,self__.active,self__.map__17250,self__.owner,self__.p__17245,self__.navigation_item_view,meta17252__$1));
});})(map__17250,map__17250__$1,active,path,name,id))
;
photosure.navigation.__GT_t17251 = ((function (map__17250,map__17250__$1,active,path,name,id){
return (function __GT_t17251(id__$1,name__$1,path__$1,active__$1,map__17250__$2,owner__$1,p__17245__$1,navigation_item_view__$1,meta17252){return (new photosure.navigation.t17251(id__$1,name__$1,path__$1,active__$1,map__17250__$2,owner__$1,p__17245__$1,navigation_item_view__$1,meta17252));
});})(map__17250,map__17250__$1,active,path,name,id))
;
}
return (new photosure.navigation.t17251(id,name,path,active,map__17250__$1,owner,p__17245,navigation_item_view,null));
});
photosure.navigation.navigation_view = (function navigation_view(app,owner){if(typeof photosure.navigation.t17257 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.navigation.t17257 = (function (owner,app,navigation_view,meta17258){
this.owner = owner;
this.app = app;
this.navigation_view = navigation_view;
this.meta17258 = meta17258;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.navigation.t17257.cljs$lang$type = true;
photosure.navigation.t17257.cljs$lang$ctorStr = "photosure.navigation/t17257";
photosure.navigation.t17257.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"photosure.navigation/t17257");
});
photosure.navigation.t17257.prototype.om$core$IRender$ = true;
photosure.navigation.t17257.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "navigation-container"},React.DOM.div({"className": "banner-container"},React.DOM.p({"className": "banner"},"C.P.Leblow Gallery")),cljs.core.apply.call(null,om.dom.ul,{"className": "nav nav-tabs"},om.core.build_all.call(null,photosure.navigation.navigation_item_view,self__.app)));
});
photosure.navigation.t17257.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17259){var self__ = this;
var _17259__$1 = this;return self__.meta17258;
});
photosure.navigation.t17257.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17259,meta17258__$1){var self__ = this;
var _17259__$1 = this;return (new photosure.navigation.t17257(self__.owner,self__.app,self__.navigation_view,meta17258__$1));
});
photosure.navigation.__GT_t17257 = (function __GT_t17257(owner__$1,app__$1,navigation_view__$1,meta17258){return (new photosure.navigation.t17257(owner__$1,app__$1,navigation_view__$1,meta17258));
});
}
return (new photosure.navigation.t17257(owner,app,navigation_view,null));
});
om.core.root.call(null,photosure.navigation.navigation_view,photosure.navigation.navigation_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("static-header")], null));

//# sourceMappingURL=navigation.js.map