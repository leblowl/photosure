// Compiled by ClojureScript 0.0-2322
goog.provide('secretary.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('clojure.string');
secretary.core.IRouteMatches = (function (){var obj14368 = {};return obj14368;
})();
secretary.core.route_matches = (function route_matches(this$,route){if((function (){var and__3548__auto__ = this$;if(and__3548__auto__)
{return this$.secretary$core$IRouteMatches$route_matches$arity$2;
} else
{return and__3548__auto__;
}
})())
{return this$.secretary$core$IRouteMatches$route_matches$arity$2(this$,route);
} else
{var x__4187__auto__ = (((this$ == null))?null:this$);return (function (){var or__3560__auto__ = (secretary.core.route_matches[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (secretary.core.route_matches["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRouteMatches.route-matches",this$);
}
}
})().call(null,this$,route);
}
});
secretary.core.IRouteValue = (function (){var obj14370 = {};return obj14370;
})();
secretary.core.route_value = (function route_value(this$){if((function (){var and__3548__auto__ = this$;if(and__3548__auto__)
{return this$.secretary$core$IRouteValue$route_value$arity$1;
} else
{return and__3548__auto__;
}
})())
{return this$.secretary$core$IRouteValue$route_value$arity$1(this$);
} else
{var x__4187__auto__ = (((this$ == null))?null:this$);return (function (){var or__3560__auto__ = (secretary.core.route_value[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (secretary.core.route_value["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRouteValue.route-value",this$);
}
}
})().call(null,this$);
}
});
secretary.core.IRenderRoute = (function (){var obj14372 = {};return obj14372;
})();
secretary.core.render_route = (function() {
var render_route = null;
var render_route__1 = (function (this$){if((function (){var and__3548__auto__ = this$;if(and__3548__auto__)
{return this$.secretary$core$IRenderRoute$render_route$arity$1;
} else
{return and__3548__auto__;
}
})())
{return this$.secretary$core$IRenderRoute$render_route$arity$1(this$);
} else
{var x__4187__auto__ = (((this$ == null))?null:this$);return (function (){var or__3560__auto__ = (secretary.core.render_route[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (secretary.core.render_route["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderRoute.render-route",this$);
}
}
})().call(null,this$);
}
});
var render_route__2 = (function (this$,params){if((function (){var and__3548__auto__ = this$;if(and__3548__auto__)
{return this$.secretary$core$IRenderRoute$render_route$arity$2;
} else
{return and__3548__auto__;
}
})())
{return this$.secretary$core$IRenderRoute$render_route$arity$2(this$,params);
} else
{var x__4187__auto__ = (((this$ == null))?null:this$);return (function (){var or__3560__auto__ = (secretary.core.render_route[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (secretary.core.render_route["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderRoute.render-route",this$);
}
}
})().call(null,this$,params);
}
});
render_route = function(this$,params){
switch(arguments.length){
case 1:
return render_route__1.call(this,this$);
case 2:
return render_route__2.call(this,this$,params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
render_route.cljs$core$IFn$_invoke$arity$1 = render_route__1;
render_route.cljs$core$IFn$_invoke$arity$2 = render_route__2;
return render_route;
})()
;
secretary.core._STAR_config_STAR_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),""], null));
/**
* Gets a value for *config* at path.
*/
secretary.core.get_config = (function get_config(path){var path__$1 = ((cljs.core.sequential_QMARK_.call(null,path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));return cljs.core.get_in.call(null,cljs.core.deref.call(null,secretary.core._STAR_config_STAR_),path__$1);
});
/**
* Associates a value val for *config* at path.
*/
secretary.core.set_config_BANG_ = (function set_config_BANG_(path,val){var path__$1 = ((cljs.core.sequential_QMARK_.call(null,path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));return cljs.core.swap_BANG_.call(null,secretary.core._STAR_config_STAR_,cljs.core.assoc_in,path__$1,val);
});
secretary.core.encode = encodeURIComponent;
/**
* Given a key and a value return and encoded key-value pair.
*/
secretary.core.encode_pair = (function (){var method_table__4426__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4427__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4428__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4429__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4430__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("encode-pair",((function (method_table__4426__auto__,prefer_table__4427__auto__,method_cache__4428__auto__,cached_hierarchy__4429__auto__,hierarchy__4430__auto__){
return (function (p__14373){var vec__14374 = p__14373;var k = cljs.core.nth.call(null,vec__14374,(0),null);var v = cljs.core.nth.call(null,vec__14374,(1),null);if((cljs.core.sequential_QMARK_.call(null,v)) || (cljs.core.set_QMARK_.call(null,v)))
{return new cljs.core.Keyword("secretary.core","sequential","secretary.core/sequential",-347187207);
} else
{if((function (){var or__3560__auto__ = cljs.core.map_QMARK_.call(null,v);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var G__14376 = v;if(G__14376)
{var bit__4210__auto__ = (G__14376.cljs$lang$protocol_mask$partition0$ & (67108864));if((bit__4210__auto__) || (G__14376.cljs$core$IRecord$))
{return true;
} else
{if((!G__14376.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,G__14376);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,G__14376);
}
}
})())
{return new cljs.core.Keyword("secretary.core","map","secretary.core/map",-31086646);
} else
{return null;
}
}
});})(method_table__4426__auto__,prefer_table__4427__auto__,method_cache__4428__auto__,cached_hierarchy__4429__auto__,hierarchy__4430__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4430__auto__,method_table__4426__auto__,prefer_table__4427__auto__,method_cache__4428__auto__,cached_hierarchy__4429__auto__));
})();
secretary.core.key_index = (function() {
var key_index = null;
var key_index__1 = (function (k){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"[]");
});
var key_index__2 = (function (k,index){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"]");
});
key_index = function(k,index){
switch(arguments.length){
case 1:
return key_index__1.call(this,k);
case 2:
return key_index__2.call(this,k,index);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
key_index.cljs$core$IFn$_invoke$arity$1 = key_index__1;
key_index.cljs$core$IFn$_invoke$arity$2 = key_index__2;
return key_index;
})()
;
cljs.core._add_method.call(null,secretary.core.encode_pair,new cljs.core.Keyword("secretary.core","sequential","secretary.core/sequential",-347187207),(function (p__14377){var vec__14378 = p__14377;var k = cljs.core.nth.call(null,vec__14378,(0),null);var v = cljs.core.nth.call(null,vec__14378,(1),null);var encoded = cljs.core.map_indexed.call(null,((function (vec__14378,k,v){
return (function (i,x){var pair = ((cljs.core.coll_QMARK_.call(null,x))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secretary.core.key_index.call(null,k,i),x], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secretary.core.key_index.call(null,k),x], null));return secretary.core.encode_pair.call(null,pair);
});})(vec__14378,k,v))
,v);return clojure.string.join.call(null,"&",encoded);
}));
cljs.core._add_method.call(null,secretary.core.encode_pair,new cljs.core.Keyword("secretary.core","map","secretary.core/map",-31086646),(function (p__14379){var vec__14380 = p__14379;var k = cljs.core.nth.call(null,vec__14380,(0),null);var v = cljs.core.nth.call(null,vec__14380,(1),null);var encoded = cljs.core.map.call(null,((function (vec__14380,k,v){
return (function (p__14381){var vec__14382 = p__14381;var ik = cljs.core.nth.call(null,vec__14382,(0),null);var iv = cljs.core.nth.call(null,vec__14382,(1),null);return secretary.core.encode_pair.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secretary.core.key_index.call(null,k,cljs.core.name.call(null,ik)),iv], null));
});})(vec__14380,k,v))
,v);return clojure.string.join.call(null,"&",encoded);
}));
cljs.core._add_method.call(null,secretary.core.encode_pair,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__14383){var vec__14384 = p__14383;var k = cljs.core.nth.call(null,vec__14384,(0),null);var v = cljs.core.nth.call(null,vec__14384,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(secretary.core.encode.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
}));
/**
* Convert a map of query parameters into url encoded string.
*/
secretary.core.encode_query_params = (function encode_query_params(query_params){return clojure.string.join.call(null,"&",cljs.core.map.call(null,secretary.core.encode_pair,query_params));
});
/**
* Like js/encodeURIComponent excepts ignore slashes.
*/
secretary.core.encode_uri = (function encode_uri(uri){return clojure.string.join.call(null,"/",cljs.core.map.call(null,secretary.core.encode,clojure.string.split.call(null,uri,/\//)));
});
secretary.core.decode = decodeURIComponent;
/**
* Parse a value from a serialized query-string key index. If the
* index value is empty 0 is returned, if it's a digit it returns the
* js/parseInt value, otherwise it returns the extracted index.
*/
secretary.core.parse_path = (function parse_path(path){var index_re = /\[([^\]]*)\]*/;var parts = cljs.core.re_seq.call(null,index_re,path);return cljs.core.map.call(null,((function (index_re,parts){
return (function (p__14387){var vec__14388 = p__14387;var _ = cljs.core.nth.call(null,vec__14388,(0),null);var part = cljs.core.nth.call(null,vec__14388,(1),null);if(cljs.core.empty_QMARK_.call(null,part))
{return (0);
} else
{if(cljs.core.truth_(cljs.core.re_matches.call(null,/\d+/,part)))
{return parseInt(part);
} else
{return part;

}
}
});})(index_re,parts))
,parts);
});
/**
* Return a key path for a serialized query-string entry.
* 
* Ex.
* 
* (key-parse "foo[][a][][b]")
* ;; => ("foo" 0 "a" 0 "b")
* 
*/
secretary.core.key_parse = (function key_parse(k){var re = /([^\[\]]+)((?:\[[^\]]*\])*)?/;var vec__14390 = cljs.core.re_matches.call(null,re,k);var _ = cljs.core.nth.call(null,vec__14390,(0),null);var key = cljs.core.nth.call(null,vec__14390,(1),null);var path = cljs.core.nth.call(null,vec__14390,(2),null);var parsed_path = (cljs.core.truth_(path)?secretary.core.parse_path.call(null,path):null);return cljs.core.cons.call(null,key,parsed_path);
});
/**
* Like assoc-in but numbers in path create vectors instead of maps.
* 
* Ex.
* 
* (assoc-in-query-params {} ["foo" 0] 1)
* ;; => {"foo" [1]}
* 
* (assoc-in-query-params {} ["foo" 0 "a"] 1)
* ;; => {"foo" [{"a" 1}]}
* 
*/
secretary.core.assoc_in_query_params = (function assoc_in_query_params(m,path,v){var heads = (function (xs){return cljs.core.map_indexed.call(null,(function (i,_){return cljs.core.take.call(null,(i + (1)),xs);
}),xs);
});var hs = heads.call(null,path);var m__$1 = cljs.core.reduce.call(null,((function (heads,hs){
return (function (m__$1,h){if((typeof cljs.core.last.call(null,h) === 'number') && (!(cljs.core.vector_QMARK_.call(null,cljs.core.get_in.call(null,m__$1,cljs.core.butlast.call(null,h))))))
{return cljs.core.assoc_in.call(null,m__$1,cljs.core.butlast.call(null,h),cljs.core.PersistentVector.EMPTY);
} else
{return m__$1;
}
});})(heads,hs))
,m,hs);if((cljs.core.last.call(null,path) === (0)))
{return cljs.core.update_in.call(null,m__$1,cljs.core.butlast.call(null,path),cljs.core.conj,v);
} else
{return cljs.core.assoc_in.call(null,m__$1,path,v);
}
});
/**
* Extract a map of query parameters from a query string.
*/
secretary.core.decode_query_params = (function decode_query_params(query_string){var parts = clojure.string.split.call(null,query_string,/&/);var params = cljs.core.reduce.call(null,((function (parts){
return (function (m,part){var vec__14392 = clojure.string.split.call(null,part,/=/,(2));var k = cljs.core.nth.call(null,vec__14392,(0),null);var v = cljs.core.nth.call(null,vec__14392,(1),null);return secretary.core.assoc_in_query_params.call(null,m,secretary.core.key_parse.call(null,k),secretary.core.decode.call(null,v));
});})(parts))
,cljs.core.PersistentArrayMap.EMPTY,parts);var params__$1 = clojure.walk.keywordize_keys.call(null,params);return params__$1;
});
/**
* Like re-matches but result is a always vector. If re does not
* capture matches then it will return a vector of [m m] as if it had a
* single capture. Other wise it maintains consistent behavior with
* re-matches.
*/
secretary.core.re_matches_STAR_ = (function re_matches_STAR_(re,s){var ms = cljs.core.re_matches.call(null,re,s);if(cljs.core.truth_(ms))
{if(cljs.core.sequential_QMARK_.call(null,ms))
{return ms;
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms,ms], null);
}
} else
{return null;
}
});
secretary.core.re_escape_chars = cljs.core.set.call(null,"\\.*+|?()[]{}$^");
secretary.core.re_escape = (function re_escape(s){return cljs.core.reduce.call(null,(function (s__$1,c){if(cljs.core.truth_(secretary.core.re_escape_chars.call(null,c)))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s__$1)+"\\"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c));
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c));
}
}),"",s);
});
/**
* Attempt to lex a single token from s with clauses. Each clause is a
* pair of [regexp action] where action is a function. regexp is
* expected to begin with ^ and contain a single capture. If the
* attempt is successful a vector of [s-without-token (action capture)]
* is returned. Otherwise the result is nil.
*/
secretary.core.lex_STAR_ = (function lex_STAR_(s,clauses){return cljs.core.some.call(null,(function (p__14396){var vec__14397 = p__14396;var re = cljs.core.nth.call(null,vec__14397,(0),null);var action = cljs.core.nth.call(null,vec__14397,(1),null);var temp__4126__auto__ = cljs.core.re_find.call(null,re,s);if(cljs.core.truth_(temp__4126__auto__))
{var vec__14398 = temp__4126__auto__;var m = cljs.core.nth.call(null,vec__14398,(0),null);var c = cljs.core.nth.call(null,vec__14398,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s,cljs.core.count.call(null,m)),action.call(null,c)], null);
} else
{return null;
}
}),clauses);
});
/**
* Return a pair of [regex params]. regex is a compiled regular
* expression for matching routes. params is a list of route param
* names (:*, :id, etc.).
*/
secretary.core.lex_route = (function lex_route(s,clauses){var s__$1 = s;var pattern = "";var params = cljs.core.PersistentVector.EMPTY;while(true){
if(cljs.core.seq.call(null,s__$1))
{var vec__14401 = secretary.core.lex_STAR_.call(null,s__$1,clauses);var s__$2 = cljs.core.nth.call(null,vec__14401,(0),null);var vec__14402 = cljs.core.nth.call(null,vec__14401,(1),null);var r = cljs.core.nth.call(null,vec__14402,(0),null);var p = cljs.core.nth.call(null,vec__14402,(1),null);{
var G__14403 = s__$2;
var G__14404 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pattern)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(r));
var G__14405 = cljs.core.conj.call(null,params,p);
s__$1 = G__14403;
pattern = G__14404;
params = G__14405;
continue;
}
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.re_pattern.call(null,("^"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pattern)+"$")),cljs.core.remove.call(null,cljs.core.nil_QMARK_,params)], null);
}
break;
}
});
/**
* Given a route return an instance of IRouteMatches.
*/
secretary.core.compile_route = (function compile_route(orig_route){var clauses = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/^\*([^\s.:*\/]*)/,(function (v){var r = "(.*?)";var p = ((cljs.core.seq.call(null,v))?cljs.core.keyword.call(null,v):new cljs.core.Keyword(null,"*","*",-1294732318));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,p], null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/^\:([^\s.:*\/]+)/,(function (v){var r = "([^,;?/]+)";var p = cljs.core.keyword.call(null,v);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,p], null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/^([^:*]+)/,(function (v){var r = secretary.core.re_escape.call(null,v);return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null);
})], null)], null);var vec__14411 = secretary.core.lex_route.call(null,orig_route,clauses);var re = cljs.core.nth.call(null,vec__14411,(0),null);var params = cljs.core.nth.call(null,vec__14411,(1),null);if(typeof secretary.core.t14412 !== 'undefined')
{} else
{
/**
* @constructor
*/
secretary.core.t14412 = (function (params,re,vec__14411,clauses,orig_route,compile_route,meta14413){
this.params = params;
this.re = re;
this.vec__14411 = vec__14411;
this.clauses = clauses;
this.orig_route = orig_route;
this.compile_route = compile_route;
this.meta14413 = meta14413;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
secretary.core.t14412.cljs$lang$type = true;
secretary.core.t14412.cljs$lang$ctorStr = "secretary.core/t14412";
secretary.core.t14412.cljs$lang$ctorPrWriter = ((function (clauses,vec__14411,re,params){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"secretary.core/t14412");
});})(clauses,vec__14411,re,params))
;
secretary.core.t14412.prototype.secretary$core$IRouteMatches$ = true;
secretary.core.t14412.prototype.secretary$core$IRouteMatches$route_matches$arity$2 = ((function (clauses,vec__14411,re,params){
return (function (_,route){var self__ = this;
var ___$1 = this;var temp__4126__auto__ = secretary.core.re_matches_STAR_.call(null,self__.re,route);if(cljs.core.truth_(temp__4126__auto__))
{var vec__14415 = temp__4126__auto__;var ___$2 = cljs.core.nth.call(null,vec__14415,(0),null);var ms = cljs.core.nthnext.call(null,vec__14415,(1));return cljs.core.merge_with.call(null,cljs.core.vector,cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,self__.params,cljs.core.map.call(null,secretary.core.decode,ms))));
} else
{return null;
}
});})(clauses,vec__14411,re,params))
;
secretary.core.t14412.prototype.secretary$core$IRouteValue$ = true;
secretary.core.t14412.prototype.secretary$core$IRouteValue$route_value$arity$1 = ((function (clauses,vec__14411,re,params){
return (function (this$){var self__ = this;
var this$__$1 = this;return self__.orig_route;
});})(clauses,vec__14411,re,params))
;
secretary.core.t14412.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (clauses,vec__14411,re,params){
return (function (_14414){var self__ = this;
var _14414__$1 = this;return self__.meta14413;
});})(clauses,vec__14411,re,params))
;
secretary.core.t14412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (clauses,vec__14411,re,params){
return (function (_14414,meta14413__$1){var self__ = this;
var _14414__$1 = this;return (new secretary.core.t14412(self__.params,self__.re,self__.vec__14411,self__.clauses,self__.orig_route,self__.compile_route,meta14413__$1));
});})(clauses,vec__14411,re,params))
;
secretary.core.__GT_t14412 = ((function (clauses,vec__14411,re,params){
return (function __GT_t14412(params__$1,re__$1,vec__14411__$1,clauses__$1,orig_route__$1,compile_route__$1,meta14413){return (new secretary.core.t14412(params__$1,re__$1,vec__14411__$1,clauses__$1,orig_route__$1,compile_route__$1,meta14413));
});})(clauses,vec__14411,re,params))
;
}
return (new secretary.core.t14412(params,re,vec__14411,clauses,orig_route,compile_route,null));
});
/**
* @param {...*} var_args
*/
secretary.core.render_route_STAR_ = (function() { 
var render_route_STAR___delegate = function (obj,args){if((function (){var G__14417 = obj;if(G__14417)
{var bit__4210__auto__ = null;if(cljs.core.truth_((function (){var or__3560__auto__ = bit__4210__auto__;if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return G__14417.secretary$core$IRenderRoute$;
}
})()))
{return true;
} else
{if((!G__14417.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,secretary.core.IRenderRoute,G__14417);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,secretary.core.IRenderRoute,G__14417);
}
})())
{return cljs.core.apply.call(null,secretary.core.render_route,obj,args);
} else
{return null;
}
};
var render_route_STAR_ = function (obj,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return render_route_STAR___delegate.call(this,obj,args);};
render_route_STAR_.cljs$lang$maxFixedArity = 1;
render_route_STAR_.cljs$lang$applyTo = (function (arglist__14418){
var obj = cljs.core.first(arglist__14418);
var args = cljs.core.rest(arglist__14418);
return render_route_STAR___delegate(obj,args);
});
render_route_STAR_.cljs$core$IFn$_invoke$arity$variadic = render_route_STAR___delegate;
return render_route_STAR_;
})()
;
secretary.core._STAR_routes_STAR_ = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
secretary.core.add_route_BANG_ = (function add_route_BANG_(obj,action){var obj__$1 = ((typeof obj === 'string')?secretary.core.compile_route.call(null,obj):obj);return cljs.core.swap_BANG_.call(null,secretary.core._STAR_routes_STAR_,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj__$1,action], null));
});
secretary.core.remove_route_BANG_ = (function remove_route_BANG_(obj){return cljs.core.swap_BANG_.call(null,secretary.core._STAR_routes_STAR_,(function (rs){return cljs.core.filterv.call(null,(function (p__14421){var vec__14422 = p__14421;var x = cljs.core.nth.call(null,vec__14422,(0),null);var _ = cljs.core.nth.call(null,vec__14422,(1),null);return cljs.core.not_EQ_.call(null,x,obj);
}),rs);
}));
});
secretary.core.reset_routes_BANG_ = (function reset_routes_BANG_(){return cljs.core.reset_BANG_.call(null,secretary.core._STAR_routes_STAR_,cljs.core.PersistentVector.EMPTY);
});
secretary.core.locate_route = (function locate_route(route){return cljs.core.some.call(null,(function (p__14425){var vec__14426 = p__14425;var compiled_route = cljs.core.nth.call(null,vec__14426,(0),null);var action = cljs.core.nth.call(null,vec__14426,(1),null);var temp__4126__auto__ = secretary.core.route_matches.call(null,compiled_route,route);if(cljs.core.truth_(temp__4126__auto__))
{var params = temp__4126__auto__;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"route","route",329891309),compiled_route], null);
} else
{return null;
}
}),cljs.core.deref.call(null,secretary.core._STAR_routes_STAR_));
});
/**
* Returns original route value as set in defroute when passed a URI path.
*/
secretary.core.locate_route_value = (function locate_route_value(uri){return secretary.core.route_value.call(null,new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(secretary.core.locate_route.call(null,uri)));
});
secretary.core.prefix = (function prefix(){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(secretary.core.get_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prefix","prefix",-265908465)], null))));
});
secretary.core.uri_without_prefix = (function uri_without_prefix(uri){return clojure.string.replace.call(null,uri,cljs.core.re_pattern.call(null,("^"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(secretary.core.prefix.call(null)))),"");
});
/**
* Ensures that the uri has a leading slash
*/
secretary.core.uri_with_leading_slash = (function uri_with_leading_slash(uri){if(cljs.core._EQ_.call(null,"/",cljs.core.first.call(null,uri)))
{return uri;
} else
{return ("/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri));
}
});
/**
* Dispatch an action for a given route if it matches the URI path.
*/
secretary.core.dispatch_BANG_ = (function dispatch_BANG_(uri){var vec__14429 = clojure.string.split.call(null,secretary.core.uri_without_prefix.call(null,uri),/\?/);var uri_path = cljs.core.nth.call(null,vec__14429,(0),null);var query_string = cljs.core.nth.call(null,vec__14429,(1),null);var uri_path__$1 = secretary.core.uri_with_leading_slash.call(null,uri_path);var query_params = (cljs.core.truth_(query_string)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-params","query-params",900640534),secretary.core.decode_query_params.call(null,query_string)], null):null);var map__14430 = secretary.core.locate_route.call(null,uri_path__$1);var map__14430__$1 = ((cljs.core.seq_QMARK_.call(null,map__14430))?cljs.core.apply.call(null,cljs.core.hash_map,map__14430):map__14430);var params = cljs.core.get.call(null,map__14430__$1,new cljs.core.Keyword(null,"params","params",710516235));var action = cljs.core.get.call(null,map__14430__$1,new cljs.core.Keyword(null,"action","action",-811238024));var action__$1 = (function (){var or__3560__auto__ = action;if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return cljs.core.identity;
}
})();var params__$1 = cljs.core.merge.call(null,params,query_params);return action__$1.call(null,params__$1);
});
secretary.core.invalid_params = (function invalid_params(params,validations){return cljs.core.reduce.call(null,(function (m,p__14433){var vec__14434 = p__14433;var key = cljs.core.nth.call(null,vec__14434,(0),null);var validation = cljs.core.nth.call(null,vec__14434,(1),null);var value = cljs.core.get.call(null,params,key);if(cljs.core.truth_(cljs.core.re_matches.call(null,validation,value)))
{return m;
} else
{return cljs.core.assoc.call(null,m,key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [value,validation], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.call(null,(2),validations));
});
secretary.core.params_valid_QMARK_ = (function params_valid_QMARK_(params,validations){return cljs.core.empty_QMARK_.call(null,secretary.core.invalid_params.call(null,params,validations));
});
cljs.core.PersistentVector.prototype.secretary$core$IRouteMatches$ = true;
cljs.core.PersistentVector.prototype.secretary$core$IRouteMatches$route_matches$arity$2 = (function (p__14435,route){var vec__14436 = p__14435;var route_string = cljs.core.nth.call(null,vec__14436,(0),null);var validations = cljs.core.nthnext.call(null,vec__14436,(1));var vec__14437 = this;var route_string__$1 = cljs.core.nth.call(null,vec__14437,(0),null);var validations__$1 = cljs.core.nthnext.call(null,vec__14437,(1));var params = secretary.core.route_matches.call(null,secretary.core.compile_route.call(null,route_string__$1),route);if(secretary.core.params_valid_QMARK_.call(null,params,validations__$1))
{return params;
} else
{return null;
}
});
RegExp.prototype.secretary$core$IRouteMatches$ = true;
RegExp.prototype.secretary$core$IRouteMatches$route_matches$arity$2 = (function (this$,route){var this$__$1 = this;var temp__4126__auto__ = secretary.core.re_matches_STAR_.call(null,this$__$1,route);if(cljs.core.truth_(temp__4126__auto__))
{var vec__14438 = temp__4126__auto__;var _ = cljs.core.nth.call(null,vec__14438,(0),null);var ms = cljs.core.nthnext.call(null,vec__14438,(1));return cljs.core.vec.call(null,ms);
} else
{return null;
}
});
(secretary.core.IRouteMatches["string"] = true);
(secretary.core.route_matches["string"] = (function (this$,route){return secretary.core.route_matches.call(null,secretary.core.compile_route.call(null,this$),route);
}));
cljs.core.PersistentVector.prototype.secretary$core$IRouteValue$ = true;
cljs.core.PersistentVector.prototype.secretary$core$IRouteValue$route_value$arity$1 = (function (p__14439){var vec__14440 = p__14439;var route_string = cljs.core.nth.call(null,vec__14440,(0),null);var validations = cljs.core.nthnext.call(null,vec__14440,(1));var vec__14441 = this;var route_string__$1 = cljs.core.nth.call(null,vec__14441,(0),null);var validations__$1 = cljs.core.nthnext.call(null,vec__14441,(1));return cljs.core.vec.call(null,cljs.core.cons.call(null,secretary.core.route_value.call(null,route_string__$1),validations__$1));
});
RegExp.prototype.secretary$core$IRouteValue$ = true;
RegExp.prototype.secretary$core$IRouteValue$route_value$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
(secretary.core.IRouteValue["string"] = true);
(secretary.core.route_value["string"] = (function (this$){return secretary.core.route_value.call(null,secretary.core.compile_route.call(null,this$));
}));
cljs.core.PersistentVector.prototype.secretary$core$IRenderRoute$ = true;
cljs.core.PersistentVector.prototype.secretary$core$IRenderRoute$render_route$arity$1 = (function (this$){var this$__$1 = this;return secretary.core.render_route.call(null,this$__$1,cljs.core.PersistentArrayMap.EMPTY);
});
cljs.core.PersistentVector.prototype.secretary$core$IRenderRoute$render_route$arity$2 = (function (p__14442,params){var vec__14443 = p__14442;var route_string = cljs.core.nth.call(null,vec__14443,(0),null);var validations = cljs.core.nthnext.call(null,vec__14443,(1));var vec__14444 = this;var route_string__$1 = cljs.core.nth.call(null,vec__14444,(0),null);var validations__$1 = cljs.core.nthnext.call(null,vec__14444,(1));var invalid = secretary.core.invalid_params.call(null,params,validations__$1);if(cljs.core.empty_QMARK_.call(null,invalid))
{return secretary.core.render_route.call(null,route_string__$1,params);
} else
{throw cljs.core.ex_info.call(null,"Could not build route: invalid params",invalid);
}
});
(secretary.core.IRenderRoute["string"] = true);
(secretary.core.render_route["string"] = (function (this$){return secretary.core.render_route.call(null,this$,cljs.core.PersistentArrayMap.EMPTY);
}));
(secretary.core.render_route["string"] = (function (this$,params){var map__14445 = params;var map__14445__$1 = ((cljs.core.seq_QMARK_.call(null,map__14445))?cljs.core.apply.call(null,cljs.core.hash_map,map__14445):map__14445);var m = map__14445__$1;var query_params = cljs.core.get.call(null,map__14445__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));var a = cljs.core.atom.call(null,m);var path = this$.replace((new RegExp(":[^\\s.:*/]+|\\*[^\\s.:*/]*","g")),((function (map__14445,map__14445__$1,m,query_params,a){
return (function ($1){var lookup = cljs.core.keyword.call(null,((cljs.core._EQ_.call(null,$1,"*"))?$1:cljs.core.subs.call(null,$1,(1))));var v = cljs.core.get.call(null,cljs.core.deref.call(null,a),lookup);var replacement = ((cljs.core.sequential_QMARK_.call(null,v))?(function (){cljs.core.swap_BANG_.call(null,a,cljs.core.assoc,lookup,cljs.core.next.call(null,v));
return secretary.core.encode_uri.call(null,cljs.core.first.call(null,v));
})():(cljs.core.truth_(v)?secretary.core.encode_uri.call(null,v):$1));return replacement;
});})(map__14445,map__14445__$1,m,query_params,a))
);var path__$1 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(secretary.core.get_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prefix","prefix",-265908465)], null)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path));var temp__4124__auto__ = (function (){var and__3548__auto__ = query_params;if(cljs.core.truth_(and__3548__auto__))
{return secretary.core.encode_query_params.call(null,query_params);
} else
{return and__3548__auto__;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var query_string = temp__4124__auto__;return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path__$1)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_string));
} else
{return path__$1;
}
}));

//# sourceMappingURL=core.js.map