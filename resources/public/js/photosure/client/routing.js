// Compiled by ClojureScript 0.0-2173
goog.provide('photosure.client.routing');
goog.require('cljs.core');
goog.require('goog.history.EventType');
goog.require('goog.History');
goog.require('photosure.client.core');
goog.require('photosure.client.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('secretary.core');
goog.require('secretary.core');
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",4328760836),"#");
var action__4367__auto___4867 = (function (params__4368__auto__){if(cljs.core.map_QMARK_.call(null,params__4368__auto__))
{var map__4865 = params__4368__auto__;var map__4865__$1 = ((cljs.core.seq_QMARK_.call(null,map__4865))?cljs.core.apply.call(null,cljs.core.hash_map,map__4865):map__4865);return photosure.client.core.render_blog.call(null);
} else
{if(cljs.core.vector_QMARK_.call(null,params__4368__auto__))
{var vec__4866 = params__4368__auto__;return photosure.client.core.render_blog.call(null);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/",action__4367__auto___4867);
/**
* @param {...*} var_args
*/
photosure.client.routing.home_path = (function() { 
var home_path__delegate = function (args__4366__auto__){return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/",args__4366__auto__);
};
var home_path = function (var_args){
var args__4366__auto__ = null;if (arguments.length > 0) {
  args__4366__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return home_path__delegate.call(this,args__4366__auto__);};
home_path.cljs$lang$maxFixedArity = 0;
home_path.cljs$lang$applyTo = (function (arglist__4868){
var args__4366__auto__ = cljs.core.seq(arglist__4868);
return home_path__delegate(args__4366__auto__);
});
home_path.cljs$core$IFn$_invoke$arity$variadic = home_path__delegate;
return home_path;
})()
;
var action__4367__auto___4871 = (function (params__4368__auto__){if(cljs.core.map_QMARK_.call(null,params__4368__auto__))
{var map__4869 = params__4368__auto__;var map__4869__$1 = ((cljs.core.seq_QMARK_.call(null,map__4869))?cljs.core.apply.call(null,cljs.core.hash_map,map__4869):map__4869);return photosure.client.core.render_bio.call(null);
} else
{if(cljs.core.vector_QMARK_.call(null,params__4368__auto__))
{var vec__4870 = params__4368__auto__;return photosure.client.core.render_bio.call(null);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/bio",action__4367__auto___4871);
/**
* @param {...*} var_args
*/
photosure.client.routing.bio_path = (function() { 
var bio_path__delegate = function (args__4366__auto__){return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/bio",args__4366__auto__);
};
var bio_path = function (var_args){
var args__4366__auto__ = null;if (arguments.length > 0) {
  args__4366__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return bio_path__delegate.call(this,args__4366__auto__);};
bio_path.cljs$lang$maxFixedArity = 0;
bio_path.cljs$lang$applyTo = (function (arglist__4872){
var args__4366__auto__ = cljs.core.seq(arglist__4872);
return bio_path__delegate(args__4366__auto__);
});
bio_path.cljs$core$IFn$_invoke$arity$variadic = bio_path__delegate;
return bio_path;
})()
;
var action__4367__auto___4875 = (function (params__4368__auto__){if(cljs.core.map_QMARK_.call(null,params__4368__auto__))
{var map__4873 = params__4368__auto__;var map__4873__$1 = ((cljs.core.seq_QMARK_.call(null,map__4873))?cljs.core.apply.call(null,cljs.core.hash_map,map__4873):map__4873);return photosure.client.core.render_blog.call(null);
} else
{if(cljs.core.vector_QMARK_.call(null,params__4368__auto__))
{var vec__4874 = params__4368__auto__;return photosure.client.core.render_blog.call(null);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/blog",action__4367__auto___4875);
/**
* @param {...*} var_args
*/
photosure.client.routing.blog_path = (function() { 
var blog_path__delegate = function (args__4366__auto__){return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/blog",args__4366__auto__);
};
var blog_path = function (var_args){
var args__4366__auto__ = null;if (arguments.length > 0) {
  args__4366__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return blog_path__delegate.call(this,args__4366__auto__);};
blog_path.cljs$lang$maxFixedArity = 0;
blog_path.cljs$lang$applyTo = (function (arglist__4876){
var args__4366__auto__ = cljs.core.seq(arglist__4876);
return blog_path__delegate(args__4366__auto__);
});
blog_path.cljs$core$IFn$_invoke$arity$variadic = blog_path__delegate;
return blog_path;
})()
;
var action__4367__auto___4879 = (function (params__4368__auto__){if(cljs.core.map_QMARK_.call(null,params__4368__auto__))
{var map__4877 = params__4368__auto__;var map__4877__$1 = ((cljs.core.seq_QMARK_.call(null,map__4877))?cljs.core.apply.call(null,cljs.core.hash_map,map__4877):map__4877);return photosure.client.core.render_gallery.call(null);
} else
{if(cljs.core.vector_QMARK_.call(null,params__4368__auto__))
{var vec__4878 = params__4368__auto__;return photosure.client.core.render_gallery.call(null);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/gallery",action__4367__auto___4879);
/**
* @param {...*} var_args
*/
photosure.client.routing.gallery_path = (function() { 
var gallery_path__delegate = function (args__4366__auto__){return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/gallery",args__4366__auto__);
};
var gallery_path = function (var_args){
var args__4366__auto__ = null;if (arguments.length > 0) {
  args__4366__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return gallery_path__delegate.call(this,args__4366__auto__);};
gallery_path.cljs$lang$maxFixedArity = 0;
gallery_path.cljs$lang$applyTo = (function (arglist__4880){
var args__4366__auto__ = cljs.core.seq(arglist__4880);
return gallery_path__delegate(args__4366__auto__);
});
gallery_path.cljs$core$IFn$_invoke$arity$variadic = gallery_path__delegate;
return gallery_path;
})()
;
var h_4883 = (new goog.History());goog.events.listen(h_4883,goog.history.EventType.NAVIGATE,(function (p1__4881_SHARP_){return secretary.core.dispatch_BANG_.call(null,p1__4881_SHARP_.token);
}));
var G__4882_4884 = h_4883;G__4882_4884.setEnabled(true);

//# sourceMappingURL=routing.js.map