// Compiled by ClojureScript 0.0-2322
goog.provide('photosure.util');
goog.require('cljs.core');
goog.require('goog.events.EventType');
goog.require('goog.net.XhrIo');
goog.require('goog.events');
goog.require('goog.events');
goog.require('cljs.reader');
goog.require('cljs.reader');
photosure.util.meths = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"get","get",1683182755),"GET",new cljs.core.Keyword(null,"put","put",1299772570),"PUT",new cljs.core.Keyword(null,"post","post",269697687),"POST",new cljs.core.Keyword(null,"delete","delete",-1768633620),"DELETE"], null);
photosure.util.edn_xhr = (function edn_xhr(p__9579){var map__9581 = p__9579;var map__9581__$1 = ((cljs.core.seq_QMARK_.call(null,map__9581))?cljs.core.apply.call(null,cljs.core.hash_map,map__9581):map__9581);var on_complete = cljs.core.get.call(null,map__9581__$1,new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971));var data = cljs.core.get.call(null,map__9581__$1,new cljs.core.Keyword(null,"data","data",-232669377));var url = cljs.core.get.call(null,map__9581__$1,new cljs.core.Keyword(null,"url","url",276297046));var method = cljs.core.get.call(null,map__9581__$1,new cljs.core.Keyword(null,"method","method",55703592));var xhr = (new goog.net.XhrIo());goog.events.listen(xhr,goog.net.EventType.COMPLETE,((function (xhr,map__9581,map__9581__$1,on_complete,data,url,method){
return (function (e){return on_complete.call(null,cljs.reader.read_string.call(null,xhr.getResponseText()));
});})(xhr,map__9581,map__9581__$1,on_complete,data,url,method))
);
return xhr.send(url,photosure.util.meths.call(null,method),(cljs.core.truth_(data)?cljs.core.pr_str.call(null,data):null),{"Content-Type": "application/edn"});
});

//# sourceMappingURL=util.js.map