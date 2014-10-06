// Compiled by ClojureScript 0.0-2322
goog.provide('photosure.util');
goog.require('cljs.core');
goog.require('goog.events.EventType');
goog.require('goog.net.XhrIo');
goog.require('goog.events');
goog.require('goog.events');
goog.require('cognitect.transit');
goog.require('cognitect.transit');
photosure.util.meths = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"get","get",1683182755),"GET",new cljs.core.Keyword(null,"put","put",1299772570),"PUT",new cljs.core.Keyword(null,"post","post",269697687),"POST",new cljs.core.Keyword(null,"delete","delete",-1768633620),"DELETE"], null);
photosure.util.edn_xhr = (function edn_xhr(p__10115){var map__10117 = p__10115;var map__10117__$1 = ((cljs.core.seq_QMARK_.call(null,map__10117))?cljs.core.apply.call(null,cljs.core.hash_map,map__10117):map__10117);var on_complete = cljs.core.get.call(null,map__10117__$1,new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971));var data = cljs.core.get.call(null,map__10117__$1,new cljs.core.Keyword(null,"data","data",-232669377));var url = cljs.core.get.call(null,map__10117__$1,new cljs.core.Keyword(null,"url","url",276297046));var method = cljs.core.get.call(null,map__10117__$1,new cljs.core.Keyword(null,"method","method",55703592));var xhr = (new goog.net.XhrIo());goog.events.listen(xhr,goog.net.EventType.COMPLETE,((function (xhr,map__10117,map__10117__$1,on_complete,data,url,method){
return (function (e){return on_complete.call(null,cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),xhr.getResponseText()));
});})(xhr,map__10117,map__10117__$1,on_complete,data,url,method))
);
return xhr.send(url,photosure.util.meths.call(null,method),(cljs.core.truth_(data)?cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),data):null),{"Content-Type": "application/transit+json"});
});

//# sourceMappingURL=util.js.map