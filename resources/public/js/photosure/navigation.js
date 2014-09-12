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
var action__9599__auto___9788 = (function (params__9600__auto__){if(cljs.core.map_QMARK_.call(null,params__9600__auto__))
{var map__9786 = params__9600__auto__;var map__9786__$1 = ((cljs.core.seq_QMARK_.call(null,map__9786))?cljs.core.apply.call(null,cljs.core.hash_map,map__9786):map__9786);return photosure.bio.render.call(null);
} else
{if(cljs.core.vector_QMARK_.call(null,params__9600__auto__))
{var vec__9787 = params__9600__auto__;return photosure.bio.render.call(null);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/bio",action__9599__auto___9788);
var action__9599__auto___9791 = (function (params__9600__auto__){if(cljs.core.map_QMARK_.call(null,params__9600__auto__))
{var map__9789 = params__9600__auto__;var map__9789__$1 = ((cljs.core.seq_QMARK_.call(null,map__9789))?cljs.core.apply.call(null,cljs.core.hash_map,map__9789):map__9789);return photosure.blog.render.call(null);
} else
{if(cljs.core.vector_QMARK_.call(null,params__9600__auto__))
{var vec__9790 = params__9600__auto__;return photosure.blog.render.call(null);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/blog",action__9599__auto___9791);
var action__9599__auto___9794 = (function (params__9600__auto__){if(cljs.core.map_QMARK_.call(null,params__9600__auto__))
{var map__9792 = params__9600__auto__;var map__9792__$1 = ((cljs.core.seq_QMARK_.call(null,map__9792))?cljs.core.apply.call(null,cljs.core.hash_map,map__9792):map__9792);return photosure.gallery.render.call(null);
} else
{if(cljs.core.vector_QMARK_.call(null,params__9600__auto__))
{var vec__9793 = params__9600__auto__;return photosure.gallery.render.call(null);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/gallery",action__9599__auto___9794);
photosure.navigation.refresh_navigation = (function refresh_navigation(){var token = photosure.navigation.history.getToken();var set_active = ((function (token){
return (function (nav){return cljs.core.assoc.call(null,nav,new cljs.core.Keyword(null,"active","active",3885920888),cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(nav),token));
});})(token))
;return cljs.core.swap_BANG_.call(null,photosure.navigation.navigation_state,(function (p1__9795_SHARP_){return cljs.core.map.call(null,set_active,p1__9795_SHARP_);
}));
});
photosure.navigation.on_navigate = (function on_navigate(event){photosure.navigation.refresh_navigation.call(null);
return secretary.core.dispatch_BANG_.call(null,event.token);
});
var G__9796_9797 = photosure.navigation.history;goog.events.listen(G__9796_9797,goog.History.EventType.NAVIGATE,photosure.navigation.on_navigate);
G__9796_9797.setEnabled(true);
photosure.navigation.navigation_item_view = (function navigation_item_view(p__9798,owner){var map__9803 = p__9798;var map__9803__$1 = ((cljs.core.seq_QMARK_.call(null,map__9803))?cljs.core.apply.call(null,cljs.core.hash_map,map__9803):map__9803);var active = cljs.core.get.call(null,map__9803__$1,new cljs.core.Keyword(null,"active","active",3885920888));var path = cljs.core.get.call(null,map__9803__$1,new cljs.core.Keyword(null,"path","path",1017337751));var name = cljs.core.get.call(null,map__9803__$1,new cljs.core.Keyword(null,"name","name",1017277949));var id = cljs.core.get.call(null,map__9803__$1,new cljs.core.Keyword(null,"id","id",1013907597));if(typeof photosure.navigation.t9804 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.navigation.t9804 = (function (id,name,path,active,map__9803,owner,p__9798,navigation_item_view,meta9805){
this.id = id;
this.name = name;
this.path = path;
this.active = active;
this.map__9803 = map__9803;
this.owner = owner;
this.p__9798 = p__9798;
this.navigation_item_view = navigation_item_view;
this.meta9805 = meta9805;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.navigation.t9804.cljs$lang$type = true;
photosure.navigation.t9804.cljs$lang$ctorStr = "photosure.navigation/t9804";
photosure.navigation.t9804.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.navigation/t9804");
});
photosure.navigation.t9804.prototype.om$core$IRender$ = true;
photosure.navigation.t9804.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.li({"className": (cljs.core.truth_(self__.active)?"active":""), "id": self__.id},React.DOM.a({"href": [cljs.core.str("#"),cljs.core.str(self__.path)].join('')},self__.name));
});
photosure.navigation.t9804.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9806){var self__ = this;
var _9806__$1 = this;return self__.meta9805;
});
photosure.navigation.t9804.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9806,meta9805__$1){var self__ = this;
var _9806__$1 = this;return (new photosure.navigation.t9804(self__.id,self__.name,self__.path,self__.active,self__.map__9803,self__.owner,self__.p__9798,self__.navigation_item_view,meta9805__$1));
});
photosure.navigation.__GT_t9804 = (function __GT_t9804(id__$1,name__$1,path__$1,active__$1,map__9803__$2,owner__$1,p__9798__$1,navigation_item_view__$1,meta9805){return (new photosure.navigation.t9804(id__$1,name__$1,path__$1,active__$1,map__9803__$2,owner__$1,p__9798__$1,navigation_item_view__$1,meta9805));
});
}
return (new photosure.navigation.t9804(id,name,path,active,map__9803__$1,owner,p__9798,navigation_item_view,null));
});
photosure.navigation.navigation_view = (function navigation_view(app,owner){if(typeof photosure.navigation.t9810 !== 'undefined')
{} else
{
/**
* @constructor
*/
photosure.navigation.t9810 = (function (owner,app,navigation_view,meta9811){
this.owner = owner;
this.app = app;
this.navigation_view = navigation_view;
this.meta9811 = meta9811;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
photosure.navigation.t9810.cljs$lang$type = true;
photosure.navigation.t9810.cljs$lang$ctorStr = "photosure.navigation/t9810";
photosure.navigation.t9810.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"photosure.navigation/t9810");
});
photosure.navigation.t9810.prototype.om$core$IRender$ = true;
photosure.navigation.t9810.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "navigation-container"},React.DOM.div({"className": "banner-container"},React.DOM.p({"className": "banner"},"C.P.Leblow Gallery")),cljs.core.apply.call(null,om.dom.ul,{"className": "nav nav-tabs"},om.core.build_all.call(null,photosure.navigation.navigation_item_view,self__.app)));
});
photosure.navigation.t9810.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9812){var self__ = this;
var _9812__$1 = this;return self__.meta9811;
});
photosure.navigation.t9810.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9812,meta9811__$1){var self__ = this;
var _9812__$1 = this;return (new photosure.navigation.t9810(self__.owner,self__.app,self__.navigation_view,meta9811__$1));
});
photosure.navigation.__GT_t9810 = (function __GT_t9810(owner__$1,app__$1,navigation_view__$1,meta9811){return (new photosure.navigation.t9810(owner__$1,app__$1,navigation_view__$1,meta9811));
});
}
return (new photosure.navigation.t9810(owner,app,navigation_view,null));
});
om.core.root.call(null,photosure.navigation.navigation_view,photosure.navigation.navigation_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("static-header")], null));

//# sourceMappingURL=navigation.js.map