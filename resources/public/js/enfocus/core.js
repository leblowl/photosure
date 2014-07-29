// Compiled by ClojureScript 0.0-2173
goog.provide('enfocus.core');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('goog.Timer');
goog.require('goog.dom.query');
goog.require('goog.async.Delay');
goog.require('goog.dom.classes');
goog.require('enfocus.enlive.syntax');
goog.require('goog.dom.ViewportSizeMonitor');
goog.require('goog.events');
goog.require('goog.dom.ViewportSizeMonitor');
goog.require('goog.async.Delay');
goog.require('goog.dom');
goog.require('enfocus.enlive.syntax');
goog.require('goog.dom');
goog.require('clojure.string');
goog.require('goog.Timer');
goog.require('domina.xpath');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('domina');
goog.require('goog.net.XhrIo');
goog.require('goog.style');
goog.require('goog.dom.query');
goog.require('domina.css');
goog.require('goog.net.XhrIo');
goog.require('goog.events');
goog.require('domina.xpath');
goog.require('domina.css');
enfocus.core.ISelector = (function (){var obj14332 = {};return obj14332;
})();
enfocus.core.select = (function() {
var select = null;
var select__1 = (function (this$){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.enfocus$core$ISelector$select$arity$1;
} else
{return and__3431__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$1(this$);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (enfocus.core.select[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (enfocus.core.select["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$);
}
});
var select__2 = (function (this$,root){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.enfocus$core$ISelector$select$arity$2;
} else
{return and__3431__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$2(this$,root);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (enfocus.core.select[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (enfocus.core.select["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$,root);
}
});
var select__3 = (function (this$,root,id_mask){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.enfocus$core$ISelector$select$arity$3;
} else
{return and__3431__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$3(this$,root,id_mask);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (enfocus.core.select[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (enfocus.core.select["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$,root,id_mask);
}
});
select = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return select__1.call(this,this$);
case 2:
return select__2.call(this,this$,root);
case 3:
return select__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select.cljs$core$IFn$_invoke$arity$1 = select__1;
select.cljs$core$IFn$_invoke$arity$2 = select__2;
select.cljs$core$IFn$_invoke$arity$3 = select__3;
return select;
})()
;
enfocus.core.ITransform = (function (){var obj14334 = {};return obj14334;
})();
enfocus.core.apply_transform = (function() {
var apply_transform = null;
var apply_transform__2 = (function (this$,nodes){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.enfocus$core$ITransform$apply_transform$arity$2;
} else
{return and__3431__auto__;
}
})())
{return this$.enfocus$core$ITransform$apply_transform$arity$2(this$,nodes);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (enfocus.core.apply_transform["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransform.apply-transform",this$);
}
}
})().call(null,this$,nodes);
}
});
var apply_transform__3 = (function (this$,nodes,callback){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.enfocus$core$ITransform$apply_transform$arity$3;
} else
{return and__3431__auto__;
}
})())
{return this$.enfocus$core$ITransform$apply_transform$arity$3(this$,nodes,callback);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (enfocus.core.apply_transform["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransform.apply-transform",this$);
}
}
})().call(null,this$,nodes,callback);
}
});
apply_transform = function(this$,nodes,callback){
switch(arguments.length){
case 2:
return apply_transform__2.call(this,this$,nodes);
case 3:
return apply_transform__3.call(this,this$,nodes,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
apply_transform.cljs$core$IFn$_invoke$arity$2 = apply_transform__2;
apply_transform.cljs$core$IFn$_invoke$arity$3 = apply_transform__3;
return apply_transform;
})()
;
enfocus.core.debug = true;
enfocus.core.log_debug = (function log_debug(mesg){if(cljs.core.truth_((function (){var and__3431__auto__ = enfocus.core.debug;if(cljs.core.truth_(and__3431__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3431__auto__;
}
})()))
{return console.log(mesg);
} else
{return null;
}
});
enfocus.core.setTimeout = (function setTimeout(func,ttime){return goog.Timer.callOnce(func,ttime);
});
enfocus.core.node_QMARK_ = (function node_QMARK_(tst){return goog.dom.isNodeLike(tst);
});
enfocus.core.nodelist_QMARK_ = (function nodelist_QMARK_(tst){return (tst instanceof NodeList);
});
/**
* coverts a nodelist, node into a collection
*/
enfocus.core.nodes__GT_coll = (function nodes__GT_coll(nl){if(cljs.core._EQ_.call(null,nl,window))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nl], null);
} else
{return domina.nodes.call(null,nl);
}
});
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){return cljs.core.mapcat.call(null,(function (p1__14335_SHARP_){if(typeof p1__14335_SHARP_ === 'string')
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__14335_SHARP_)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return enfocus.core.nodes__GT_coll.call(null,p1__14335_SHARP_);
} else
{return null;
}
}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){var seq__14342_14348 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));var chunk__14343_14349 = null;var count__14344_14350 = 0;var i__14345_14351 = 0;while(true){
if((i__14345_14351 < count__14344_14350))
{var vec__14346_14352 = cljs.core._nth.call(null,chunk__14343_14349,i__14345_14351);var attr_14353 = cljs.core.nth.call(null,vec__14346_14352,0,null);var value_14354 = cljs.core.nth.call(null,vec__14346_14352,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_14353),value_14354);
{
var G__14355 = seq__14342_14348;
var G__14356 = chunk__14343_14349;
var G__14357 = count__14344_14350;
var G__14358 = (i__14345_14351 + 1);
seq__14342_14348 = G__14355;
chunk__14343_14349 = G__14356;
count__14344_14350 = G__14357;
i__14345_14351 = G__14358;
continue;
}
} else
{var temp__4092__auto___14359 = cljs.core.seq.call(null,seq__14342_14348);if(temp__4092__auto___14359)
{var seq__14342_14360__$1 = temp__4092__auto___14359;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14342_14360__$1))
{var c__4191__auto___14361 = cljs.core.chunk_first.call(null,seq__14342_14360__$1);{
var G__14362 = cljs.core.chunk_rest.call(null,seq__14342_14360__$1);
var G__14363 = c__4191__auto___14361;
var G__14364 = cljs.core.count.call(null,c__4191__auto___14361);
var G__14365 = 0;
seq__14342_14348 = G__14362;
chunk__14343_14349 = G__14363;
count__14344_14350 = G__14364;
i__14345_14351 = G__14365;
continue;
}
} else
{var vec__14347_14366 = cljs.core.first.call(null,seq__14342_14360__$1);var attr_14367 = cljs.core.nth.call(null,vec__14347_14366,0,null);var value_14368 = cljs.core.nth.call(null,vec__14347_14366,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_14367),value_14368);
{
var G__14369 = cljs.core.next.call(null,seq__14342_14360__$1);
var G__14370 = null;
var G__14371 = 0;
var G__14372 = 0;
seq__14342_14348 = G__14369;
chunk__14343_14349 = G__14370;
count__14344_14350 = G__14371;
i__14345_14351 = G__14372;
continue;
}
}
} else
{}
}
break;
}
return obj;
});
/**
* removes the property value from an elements style obj.
*/
enfocus.core.style_remove = (function style_remove(obj,values){var seq__14377 = cljs.core.seq.call(null,values);var chunk__14378 = null;var count__14379 = 0;var i__14380 = 0;while(true){
if((i__14380 < count__14379))
{var attr = cljs.core._nth.call(null,chunk__14378,i__14380);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__14381 = seq__14377;
var G__14382 = chunk__14378;
var G__14383 = count__14379;
var G__14384 = (i__14380 + 1);
seq__14377 = G__14381;
chunk__14378 = G__14382;
count__14379 = G__14383;
i__14380 = G__14384;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14377);if(temp__4092__auto__)
{var seq__14377__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14377__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__14377__$1);{
var G__14385 = cljs.core.chunk_rest.call(null,seq__14377__$1);
var G__14386 = c__4191__auto__;
var G__14387 = cljs.core.count.call(null,c__4191__auto__);
var G__14388 = 0;
seq__14377 = G__14385;
chunk__14378 = G__14386;
count__14379 = G__14387;
i__14380 = G__14388;
continue;
}
} else
{var attr = cljs.core.first.call(null,seq__14377__$1);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__14389 = cljs.core.next.call(null,seq__14377__$1);
var G__14390 = null;
var G__14391 = 0;
var G__14392 = 0;
seq__14377 = G__14389;
chunk__14378 = G__14390;
count__14379 = G__14391;
i__14380 = G__14392;
continue;
}
}
} else
{return null;
}
}
break;
}
});
enfocus.core.get_eff_prop_name = (function get_eff_prop_name(etype){return [cljs.core.str("__ef_effect_"),cljs.core.str(etype)].join('');
});
enfocus.core.get_mills = (function get_mills(){return (new Date()).getMilliseconds();
});
enfocus.core.pix_round = (function pix_round(step){if((step < 0))
{return Math.floor.call(null,step);
} else
{return Math.ceil.call(null,step);
}
});
enfocus.core.add_map_attrs = (function() {
var add_map_attrs = null;
var add_map_attrs__2 = (function (elem,ats){if(cljs.core.truth_(elem))
{if(cljs.core.map_QMARK_.call(null,ats))
{var seq__14399_14405 = cljs.core.seq.call(null,ats);var chunk__14400_14406 = null;var count__14401_14407 = 0;var i__14402_14408 = 0;while(true){
if((i__14402_14408 < count__14401_14407))
{var vec__14403_14409 = cljs.core._nth.call(null,chunk__14400_14406,i__14402_14408);var k_14410 = cljs.core.nth.call(null,vec__14403_14409,0,null);var v_14411 = cljs.core.nth.call(null,vec__14403_14409,1,null);add_map_attrs.call(null,elem,k_14410,v_14411);
{
var G__14412 = seq__14399_14405;
var G__14413 = chunk__14400_14406;
var G__14414 = count__14401_14407;
var G__14415 = (i__14402_14408 + 1);
seq__14399_14405 = G__14412;
chunk__14400_14406 = G__14413;
count__14401_14407 = G__14414;
i__14402_14408 = G__14415;
continue;
}
} else
{var temp__4092__auto___14416 = cljs.core.seq.call(null,seq__14399_14405);if(temp__4092__auto___14416)
{var seq__14399_14417__$1 = temp__4092__auto___14416;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14399_14417__$1))
{var c__4191__auto___14418 = cljs.core.chunk_first.call(null,seq__14399_14417__$1);{
var G__14419 = cljs.core.chunk_rest.call(null,seq__14399_14417__$1);
var G__14420 = c__4191__auto___14418;
var G__14421 = cljs.core.count.call(null,c__4191__auto___14418);
var G__14422 = 0;
seq__14399_14405 = G__14419;
chunk__14400_14406 = G__14420;
count__14401_14407 = G__14421;
i__14402_14408 = G__14422;
continue;
}
} else
{var vec__14404_14423 = cljs.core.first.call(null,seq__14399_14417__$1);var k_14424 = cljs.core.nth.call(null,vec__14404_14423,0,null);var v_14425 = cljs.core.nth.call(null,vec__14404_14423,1,null);add_map_attrs.call(null,elem,k_14424,v_14425);
{
var G__14426 = cljs.core.next.call(null,seq__14399_14417__$1);
var G__14427 = null;
var G__14428 = 0;
var G__14429 = 0;
seq__14399_14405 = G__14426;
chunk__14400_14406 = G__14427;
count__14401_14407 = G__14428;
i__14402_14408 = G__14429;
continue;
}
}
} else
{}
}
break;
}
return elem;
} else
{return null;
}
} else
{return null;
}
});
var add_map_attrs__3 = (function (elem,k,v){elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
add_map_attrs = function(elem,k,v){
switch(arguments.length){
case 2:
return add_map_attrs__2.call(this,elem,k);
case 3:
return add_map_attrs__3.call(this,elem,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_map_attrs.cljs$core$IFn$_invoke$arity$2 = add_map_attrs__2;
add_map_attrs.cljs$core$IFn$_invoke$arity$3 = add_map_attrs__3;
return add_map_attrs;
})()
;
/**
* this is incremented everytime a remote template is loaded and decremented when
* it is added to the dom cache
*/
enfocus.core.tpl_load_cnt = cljs.core.atom.call(null,0);
/**
* cache for the remote templates
*/
enfocus.core.tpl_cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
enfocus.core.hide_style = new cljs.core.PersistentArrayMap(null, 1, ["style","display: none; width: 0px; height: 0px"], null).strobj;
/**
* Add a hidden div to hold the dom as we are transforming it this has to be done
* because css selectors do not work unless we have it in the main dom
*/
enfocus.core.create_hidden_dom = (function create_hidden_dom(child){var div = goog.dom.createDom("div",enfocus.core.hide_style);if(cljs.core._EQ_.call(null,child.nodeType,11))
{goog.dom.appendChild(div,child);
} else
{enfocus.core.log_debug.call(null,cljs.core.count.call(null,domina.nodes.call(null,child)));
var seq__14434_14438 = cljs.core.seq.call(null,domina.nodes.call(null,child));var chunk__14435_14439 = null;var count__14436_14440 = 0;var i__14437_14441 = 0;while(true){
if((i__14437_14441 < count__14436_14440))
{var node_14442 = cljs.core._nth.call(null,chunk__14435_14439,i__14437_14441);goog.dom.appendChild(div,node_14442);
{
var G__14443 = seq__14434_14438;
var G__14444 = chunk__14435_14439;
var G__14445 = count__14436_14440;
var G__14446 = (i__14437_14441 + 1);
seq__14434_14438 = G__14443;
chunk__14435_14439 = G__14444;
count__14436_14440 = G__14445;
i__14437_14441 = G__14446;
continue;
}
} else
{var temp__4092__auto___14447 = cljs.core.seq.call(null,seq__14434_14438);if(temp__4092__auto___14447)
{var seq__14434_14448__$1 = temp__4092__auto___14447;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14434_14448__$1))
{var c__4191__auto___14449 = cljs.core.chunk_first.call(null,seq__14434_14448__$1);{
var G__14450 = cljs.core.chunk_rest.call(null,seq__14434_14448__$1);
var G__14451 = c__4191__auto___14449;
var G__14452 = cljs.core.count.call(null,c__4191__auto___14449);
var G__14453 = 0;
seq__14434_14438 = G__14450;
chunk__14435_14439 = G__14451;
count__14436_14440 = G__14452;
i__14437_14441 = G__14453;
continue;
}
} else
{var node_14454 = cljs.core.first.call(null,seq__14434_14448__$1);goog.dom.appendChild(div,node_14454);
{
var G__14455 = cljs.core.next.call(null,seq__14434_14448__$1);
var G__14456 = null;
var G__14457 = 0;
var G__14458 = 0;
seq__14434_14438 = G__14455;
chunk__14435_14439 = G__14456;
count__14436_14440 = G__14457;
i__14437_14441 = G__14458;
continue;
}
}
} else
{}
}
break;
}
}
goog.dom.appendChild(goog.dom.getDocument().documentElement,div);
return div;
});
/**
* removes the hidden div and returns the children
*/
enfocus.core.remove_node_return_child = (function remove_node_return_child(div){var child = div.childNodes;var frag = document.createDocumentFragment();goog.dom.append(frag,child);
goog.dom.removeNode(div);
return frag;
});
/**
* replaces all the ids in a string html fragement/template with a generated
* symbol appended on to a existing id this is done to make sure we don't have
* id colisions during the transformation process
*/
enfocus.core.replace_ids = (function() {
var replace_ids = null;
var replace_ids__1 = (function (text){return replace_ids.call(null,[cljs.core.str(cljs.core.name.call(null,cljs.core.gensym.call(null,"id"))),cljs.core.str("_")].join(''),text);
});
var replace_ids__2 = (function (id_mask,text){var re = (new RegExp("(<.*?\\sid=['\"])(.*?)(['\"].*?>)","g"));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_mask,text.replace(re,(function (a,b,c,d){return [cljs.core.str(b),cljs.core.str(id_mask),cljs.core.str(c),cljs.core.str(d)].join('');
}))], null);
});
replace_ids = function(id_mask,text){
switch(arguments.length){
case 1:
return replace_ids__1.call(this,id_mask);
case 2:
return replace_ids__2.call(this,id_mask,text);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
replace_ids.cljs$core$IFn$_invoke$arity$1 = replace_ids__1;
replace_ids.cljs$core$IFn$_invoke$arity$2 = replace_ids__2;
return replace_ids;
})()
;
/**
* before adding the dom back into the live dom we reset the masked ids to orig vals
*/
enfocus.core.reset_ids = (function reset_ids(sym,nod){var id_nodes = enfocus.core.css_select.call(null,nod,"*[id]");var nod_col = enfocus.core.nodes__GT_coll.call(null,id_nodes);return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__14459_SHARP_){var id = p1__14459_SHARP_.getAttribute("id");var rid = id.replace(sym,"");return p1__14459_SHARP_.setAttribute("id",rid);
}),nod_col));
});
/**
* loads a remote file into the cache, and masks the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri,dom_key,id_mask){if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,dom_key) == null))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);
var req = (new goog.net.XhrIo());var callback = ((function (req){
return (function (req__$1){var text = req__$1.getResponseText();var vec__14461 = enfocus.core.replace_ids.call(null,id_mask,text);var sym = cljs.core.nth.call(null,vec__14461,0,null);var txt = cljs.core.nth.call(null,vec__14461,1,null);return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,dom_key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,txt], null));
});})(req))
;goog.events.listen(req,goog.net.EventType.COMPLETE,(function (){callback.call(null,req);
return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.dec);
}));
return req.send(uri,"GET");
} else
{return null;
}
});
enfocus.core.html_to_dom = (function html_to_dom(html){var dfa = enfocus.core.nodes__GT_coll.call(null,domina.html_to_dom.call(null,html));var frag = document.createDocumentFragment();enfocus.core.log_debug.call(null,cljs.core.count.call(null,dfa));
var seq__14466_14470 = cljs.core.seq.call(null,dfa);var chunk__14467_14471 = null;var count__14468_14472 = 0;var i__14469_14473 = 0;while(true){
if((i__14469_14473 < count__14468_14472))
{var df_14474 = cljs.core._nth.call(null,chunk__14467_14471,i__14469_14473);goog.dom.append(frag,df_14474);
{
var G__14475 = seq__14466_14470;
var G__14476 = chunk__14467_14471;
var G__14477 = count__14468_14472;
var G__14478 = (i__14469_14473 + 1);
seq__14466_14470 = G__14475;
chunk__14467_14471 = G__14476;
count__14468_14472 = G__14477;
i__14469_14473 = G__14478;
continue;
}
} else
{var temp__4092__auto___14479 = cljs.core.seq.call(null,seq__14466_14470);if(temp__4092__auto___14479)
{var seq__14466_14480__$1 = temp__4092__auto___14479;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14466_14480__$1))
{var c__4191__auto___14481 = cljs.core.chunk_first.call(null,seq__14466_14480__$1);{
var G__14482 = cljs.core.chunk_rest.call(null,seq__14466_14480__$1);
var G__14483 = c__4191__auto___14481;
var G__14484 = cljs.core.count.call(null,c__4191__auto___14481);
var G__14485 = 0;
seq__14466_14470 = G__14482;
chunk__14467_14471 = G__14483;
count__14468_14472 = G__14484;
i__14469_14473 = G__14485;
continue;
}
} else
{var df_14486 = cljs.core.first.call(null,seq__14466_14480__$1);goog.dom.append(frag,df_14486);
{
var G__14487 = cljs.core.next.call(null,seq__14466_14480__$1);
var G__14488 = null;
var G__14489 = 0;
var G__14490 = 0;
seq__14466_14470 = G__14487;
chunk__14467_14471 = G__14488;
count__14468_14472 = G__14489;
i__14469_14473 = G__14490;
continue;
}
}
} else
{}
}
break;
}
return frag;
});
/**
* returns and dom from the cache and symbol used to scope the ids
*/
enfocus.core.get_cached_dom = (function get_cached_dom(uri){var nod = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,uri);if(cljs.core.truth_(nod))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,nod),enfocus.core.html_to_dom.call(null,cljs.core.second.call(null,nod))], null);
} else
{return null;
}
});
/**
* returns the cached snippet or creates one and adds it to the cache if needed
*/
enfocus.core.get_cached_snippet = (function get_cached_snippet(uri,sel){var sel_str = enfocus.core.create_sel_str.call(null,sel);var cache = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,[cljs.core.str(uri),cljs.core.str(sel_str)].join(''));if(cljs.core.truth_(cache))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,cache),enfocus.core.html_to_dom.call(null,cljs.core.second.call(null,cache))], null);
} else
{var vec__14493 = enfocus.core.get_cached_dom.call(null,uri);var sym = cljs.core.nth.call(null,vec__14493,0,null);var tdom = cljs.core.nth.call(null,vec__14493,1,null);var dom = enfocus.core.create_hidden_dom.call(null,tdom);var tsnip = domina.nodes.call(null,enfocus.core.css_select.call(null,sym,dom,sel));var html_snip = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__14493,sym,tdom,dom,tsnip){
return (function (p1__14491_SHARP_){return p1__14491_SHARP_.outerHTML;
});})(vec__14493,sym,tdom,dom,tsnip))
,tsnip));enfocus.core.remove_node_return_child.call(null,dom);
cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,[cljs.core.str(uri),cljs.core.str(sel_str)].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,html_snip], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,enfocus.core.html_to_dom.call(null,html_snip)], null);
}
});
/**
* wrapper function for extractors that maps the extraction to all nodes returned by the selector
*/
enfocus.core.extr_multi_node = (function extr_multi_node(func){var trans = (function trans(pnodes){var pnod_col = enfocus.core.nodes__GT_coll.call(null,pnodes);var result = cljs.core.map.call(null,func,pnod_col);if((cljs.core.count.call(null,result) <= 1))
{return cljs.core.first.call(null,result);
} else
{return result;
}
});if(typeof enfocus.core.t14497 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t14497 = (function (trans,func,extr_multi_node,meta14498){
this.trans = trans;
this.func = func;
this.extr_multi_node = extr_multi_node;
this.meta14498 = meta14498;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t14497.cljs$lang$type = true;
enfocus.core.t14497.cljs$lang$ctorStr = "enfocus.core/t14497";
enfocus.core.t14497.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"enfocus.core/t14497");
});
enfocus.core.t14497.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t14497.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t14497.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t14497.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14499){var self__ = this;
var _14499__$1 = this;return self__.meta14498;
});
enfocus.core.t14497.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14499,meta14498__$1){var self__ = this;
var _14499__$1 = this;return (new enfocus.core.t14497(self__.trans,self__.func,self__.extr_multi_node,meta14498__$1));
});
enfocus.core.__GT_t14497 = (function __GT_t14497(trans__$1,func__$1,extr_multi_node__$1,meta14498){return (new enfocus.core.t14497(trans__$1,func__$1,extr_multi_node__$1,meta14498));
});
}
return (new enfocus.core.t14497(trans,func,extr_multi_node,null));
});
/**
* Allows standard domina functions to be chainable
*/
enfocus.core.multi_node_chain = (function() {
var multi_node_chain = null;
var multi_node_chain__1 = (function (func){var trans = (function (nodes,chain){var val = func.call(null,nodes);if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.call(null,chain,nodes);
} else
{return val;
}
});if(typeof enfocus.core.t14507 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t14507 = (function (trans,func,multi_node_chain,meta14508){
this.trans = trans;
this.func = func;
this.multi_node_chain = multi_node_chain;
this.meta14508 = meta14508;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t14507.cljs$lang$type = true;
enfocus.core.t14507.cljs$lang$ctorStr = "enfocus.core/t14507";
enfocus.core.t14507.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"enfocus.core/t14507");
});
enfocus.core.t14507.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t14507.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t14507.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t14507.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14509){var self__ = this;
var _14509__$1 = this;return self__.meta14508;
});
enfocus.core.t14507.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14509,meta14508__$1){var self__ = this;
var _14509__$1 = this;return (new enfocus.core.t14507(self__.trans,self__.func,self__.multi_node_chain,meta14508__$1));
});
enfocus.core.__GT_t14507 = (function __GT_t14507(trans__$1,func__$1,multi_node_chain__$1,meta14508){return (new enfocus.core.t14507(trans__$1,func__$1,multi_node_chain__$1,meta14508));
});
}
return (new enfocus.core.t14507(trans,func,multi_node_chain,null));
});
var multi_node_chain__2 = (function (values,func){var trans = (function (nodes,chain){var vnodes = cljs.core.mapcat.call(null,(function (p1__14500_SHARP_){return domina.nodes.call(null,p1__14500_SHARP_);
}),values);var val = func.call(null,nodes,vnodes);if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.call(null,chain,nodes);
} else
{return val;
}
});if(typeof enfocus.core.t14510 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t14510 = (function (trans,func,values,multi_node_chain,meta14511){
this.trans = trans;
this.func = func;
this.values = values;
this.multi_node_chain = multi_node_chain;
this.meta14511 = meta14511;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t14510.cljs$lang$type = true;
enfocus.core.t14510.cljs$lang$ctorStr = "enfocus.core/t14510";
enfocus.core.t14510.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"enfocus.core/t14510");
});
enfocus.core.t14510.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t14510.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t14510.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t14510.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14512){var self__ = this;
var _14512__$1 = this;return self__.meta14511;
});
enfocus.core.t14510.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14512,meta14511__$1){var self__ = this;
var _14512__$1 = this;return (new enfocus.core.t14510(self__.trans,self__.func,self__.values,self__.multi_node_chain,meta14511__$1));
});
enfocus.core.__GT_t14510 = (function __GT_t14510(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta14511){return (new enfocus.core.t14510(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta14511));
});
}
return (new enfocus.core.t14510(trans,func,values,multi_node_chain,null));
});
multi_node_chain = function(values,func){
switch(arguments.length){
case 1:
return multi_node_chain__1.call(this,values);
case 2:
return multi_node_chain__2.call(this,values,func);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
multi_node_chain.cljs$core$IFn$_invoke$arity$1 = multi_node_chain__1;
multi_node_chain.cljs$core$IFn$_invoke$arity$2 = multi_node_chain__2;
return multi_node_chain;
})()
;
/**
* Replaces the content of the element. Values can be nodes or collection of nodes.
* @param {...*} var_args
*/
enfocus.core.content = (function() { 
var content__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__14513_SHARP_,p2__14514_SHARP_){domina.destroy_children_BANG_.call(null,p1__14513_SHARP_);
return domina.append_BANG_.call(null,p1__14513_SHARP_,p2__14514_SHARP_);
}));
};
var content = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return content__delegate.call(this,values);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__14515){
var values = cljs.core.seq(arglist__14515);
return content__delegate(values);
});
content.cljs$core$IFn$_invoke$arity$variadic = content__delegate;
return content;
})()
;
/**
* Replaces the content of the element with the dom structure represented by the html string passed
*/
enfocus.core.html_content = (function html_content(txt){return enfocus.core.multi_node_chain.call(null,(function (p1__14516_SHARP_){return domina.set_html_BANG_.call(null,p1__14516_SHARP_,txt);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.set_attr = (function() { 
var set_attr__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__14517_SHARP_){var seq__14524 = cljs.core.seq.call(null,pairs);var chunk__14525 = null;var count__14526 = 0;var i__14527 = 0;while(true){
if((i__14527 < count__14526))
{var vec__14528 = cljs.core._nth.call(null,chunk__14525,i__14527);var name = cljs.core.nth.call(null,vec__14528,0,null);var value = cljs.core.nth.call(null,vec__14528,1,null);domina.set_attr_BANG_.call(null,p1__14517_SHARP_,name,value);
{
var G__14530 = seq__14524;
var G__14531 = chunk__14525;
var G__14532 = count__14526;
var G__14533 = (i__14527 + 1);
seq__14524 = G__14530;
chunk__14525 = G__14531;
count__14526 = G__14532;
i__14527 = G__14533;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14524);if(temp__4092__auto__)
{var seq__14524__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14524__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__14524__$1);{
var G__14534 = cljs.core.chunk_rest.call(null,seq__14524__$1);
var G__14535 = c__4191__auto__;
var G__14536 = cljs.core.count.call(null,c__4191__auto__);
var G__14537 = 0;
seq__14524 = G__14534;
chunk__14525 = G__14535;
count__14526 = G__14536;
i__14527 = G__14537;
continue;
}
} else
{var vec__14529 = cljs.core.first.call(null,seq__14524__$1);var name = cljs.core.nth.call(null,vec__14529,0,null);var value = cljs.core.nth.call(null,vec__14529,1,null);domina.set_attr_BANG_.call(null,p1__14517_SHARP_,name,value);
{
var G__14538 = cljs.core.next.call(null,seq__14524__$1);
var G__14539 = null;
var G__14540 = 0;
var G__14541 = 0;
seq__14524 = G__14538;
chunk__14525 = G__14539;
count__14526 = G__14540;
i__14527 = G__14541;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
};
var set_attr = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_attr__delegate.call(this,values);};
set_attr.cljs$lang$maxFixedArity = 0;
set_attr.cljs$lang$applyTo = (function (arglist__14542){
var values = cljs.core.seq(arglist__14542);
return set_attr__delegate(values);
});
set_attr.cljs$core$IFn$_invoke$arity$variadic = set_attr__delegate;
return set_attr;
})()
;
/**
* Dissocs attributes on the selected element.
* @param {...*} var_args
*/
enfocus.core.remove_attr = (function() { 
var remove_attr__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__14543_SHARP_){var seq__14548 = cljs.core.seq.call(null,values);var chunk__14549 = null;var count__14550 = 0;var i__14551 = 0;while(true){
if((i__14551 < count__14550))
{var name = cljs.core._nth.call(null,chunk__14549,i__14551);domina.remove_attr_BANG_.call(null,p1__14543_SHARP_,name);
{
var G__14552 = seq__14548;
var G__14553 = chunk__14549;
var G__14554 = count__14550;
var G__14555 = (i__14551 + 1);
seq__14548 = G__14552;
chunk__14549 = G__14553;
count__14550 = G__14554;
i__14551 = G__14555;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14548);if(temp__4092__auto__)
{var seq__14548__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14548__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__14548__$1);{
var G__14556 = cljs.core.chunk_rest.call(null,seq__14548__$1);
var G__14557 = c__4191__auto__;
var G__14558 = cljs.core.count.call(null,c__4191__auto__);
var G__14559 = 0;
seq__14548 = G__14556;
chunk__14549 = G__14557;
count__14550 = G__14558;
i__14551 = G__14559;
continue;
}
} else
{var name = cljs.core.first.call(null,seq__14548__$1);domina.remove_attr_BANG_.call(null,p1__14543_SHARP_,name);
{
var G__14560 = cljs.core.next.call(null,seq__14548__$1);
var G__14561 = null;
var G__14562 = 0;
var G__14563 = 0;
seq__14548 = G__14560;
chunk__14549 = G__14561;
count__14550 = G__14562;
i__14551 = G__14563;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
};
var remove_attr = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return remove_attr__delegate.call(this,values);};
remove_attr.cljs$lang$maxFixedArity = 0;
remove_attr.cljs$lang$applyTo = (function (arglist__14564){
var values = cljs.core.seq(arglist__14564);
return remove_attr__delegate(values);
});
remove_attr.cljs$core$IFn$_invoke$arity$variadic = remove_attr__delegate;
return remove_attr;
})()
;
/**
* @param {...*} var_args
*/
enfocus.core.set_prop = (function() { 
var set_prop__delegate = function (forms){return (function (node){var h = cljs.core.mapcat.call(null,(function (p__14567){var vec__14568 = p__14567;var n = cljs.core.nth.call(null,vec__14568,0,null);var v = cljs.core.nth.call(null,vec__14568,1,null);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v),cljs.core.name.call(null,n));
}),cljs.core.partition.call(null,2,forms));return goog.dom.setProperties(node,cljs.core.apply.call(null,cljs.core.js_obj,h));
});
};
var set_prop = function (var_args){
var forms = null;if (arguments.length > 0) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_prop__delegate.call(this,forms);};
set_prop.cljs$lang$maxFixedArity = 0;
set_prop.cljs$lang$applyTo = (function (arglist__14569){
var forms = cljs.core.seq(arglist__14569);
return set_prop__delegate(forms);
});
set_prop.cljs$core$IFn$_invoke$arity$variadic = set_prop__delegate;
return set_prop;
})()
;
/**
* returns true if the element has a given class
*/
enfocus.core.has_class = (function has_class(el,cls){return goog.dom.classes.hasClass(el,cls);
});
/**
* Adds the specified classes to the selected element.
* @param {...*} var_args
*/
enfocus.core.add_class = (function() { 
var add_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__14570_SHARP_){var seq__14575 = cljs.core.seq.call(null,values);var chunk__14576 = null;var count__14577 = 0;var i__14578 = 0;while(true){
if((i__14578 < count__14577))
{var val = cljs.core._nth.call(null,chunk__14576,i__14578);domina.add_class_BANG_.call(null,p1__14570_SHARP_,val);
{
var G__14579 = seq__14575;
var G__14580 = chunk__14576;
var G__14581 = count__14577;
var G__14582 = (i__14578 + 1);
seq__14575 = G__14579;
chunk__14576 = G__14580;
count__14577 = G__14581;
i__14578 = G__14582;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14575);if(temp__4092__auto__)
{var seq__14575__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14575__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__14575__$1);{
var G__14583 = cljs.core.chunk_rest.call(null,seq__14575__$1);
var G__14584 = c__4191__auto__;
var G__14585 = cljs.core.count.call(null,c__4191__auto__);
var G__14586 = 0;
seq__14575 = G__14583;
chunk__14576 = G__14584;
count__14577 = G__14585;
i__14578 = G__14586;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__14575__$1);domina.add_class_BANG_.call(null,p1__14570_SHARP_,val);
{
var G__14587 = cljs.core.next.call(null,seq__14575__$1);
var G__14588 = null;
var G__14589 = 0;
var G__14590 = 0;
seq__14575 = G__14587;
chunk__14576 = G__14588;
count__14577 = G__14589;
i__14578 = G__14590;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
};
var add_class = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return add_class__delegate.call(this,values);};
add_class.cljs$lang$maxFixedArity = 0;
add_class.cljs$lang$applyTo = (function (arglist__14591){
var values = cljs.core.seq(arglist__14591);
return add_class__delegate(values);
});
add_class.cljs$core$IFn$_invoke$arity$variadic = add_class__delegate;
return add_class;
})()
;
/**
* Removes the specified classes from the selected element.
* @param {...*} var_args
*/
enfocus.core.remove_class = (function() { 
var remove_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__14592_SHARP_){var seq__14597 = cljs.core.seq.call(null,values);var chunk__14598 = null;var count__14599 = 0;var i__14600 = 0;while(true){
if((i__14600 < count__14599))
{var val = cljs.core._nth.call(null,chunk__14598,i__14600);domina.remove_class_BANG_.call(null,p1__14592_SHARP_,val);
{
var G__14601 = seq__14597;
var G__14602 = chunk__14598;
var G__14603 = count__14599;
var G__14604 = (i__14600 + 1);
seq__14597 = G__14601;
chunk__14598 = G__14602;
count__14599 = G__14603;
i__14600 = G__14604;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14597);if(temp__4092__auto__)
{var seq__14597__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14597__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__14597__$1);{
var G__14605 = cljs.core.chunk_rest.call(null,seq__14597__$1);
var G__14606 = c__4191__auto__;
var G__14607 = cljs.core.count.call(null,c__4191__auto__);
var G__14608 = 0;
seq__14597 = G__14605;
chunk__14598 = G__14606;
count__14599 = G__14607;
i__14600 = G__14608;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__14597__$1);domina.remove_class_BANG_.call(null,p1__14592_SHARP_,val);
{
var G__14609 = cljs.core.next.call(null,seq__14597__$1);
var G__14610 = null;
var G__14611 = 0;
var G__14612 = 0;
seq__14597 = G__14609;
chunk__14598 = G__14610;
count__14599 = G__14611;
i__14600 = G__14612;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
};
var remove_class = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return remove_class__delegate.call(this,values);};
remove_class.cljs$lang$maxFixedArity = 0;
remove_class.cljs$lang$applyTo = (function (arglist__14613){
var values = cljs.core.seq(arglist__14613);
return remove_class__delegate(values);
});
remove_class.cljs$core$IFn$_invoke$arity$variadic = remove_class__delegate;
return remove_class;
})()
;
/**
* Sets the specified classes on the selected element
* @param {...*} var_args
*/
enfocus.core.set_class = (function() { 
var set_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__14614_SHARP_){return domina.set_classes_BANG_.call(null,p1__14614_SHARP_,values);
}));
};
var set_class = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_class__delegate.call(this,values);};
set_class.cljs$lang$maxFixedArity = 0;
set_class.cljs$lang$applyTo = (function (arglist__14615){
var values = cljs.core.seq(arglist__14615);
return set_class__delegate(values);
});
set_class.cljs$core$IFn$_invoke$arity$variadic = set_class__delegate;
return set_class;
})()
;
/**
* @param {...*} var_args
*/
enfocus.core.do__GT_ = (function() { 
var do__GT___delegate = function (forms){return (function (pnod){var seq__14620 = cljs.core.seq.call(null,forms);var chunk__14621 = null;var count__14622 = 0;var i__14623 = 0;while(true){
if((i__14623 < count__14622))
{var fun = cljs.core._nth.call(null,chunk__14621,i__14623);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__14624 = seq__14620;
var G__14625 = chunk__14621;
var G__14626 = count__14622;
var G__14627 = (i__14623 + 1);
seq__14620 = G__14624;
chunk__14621 = G__14625;
count__14622 = G__14626;
i__14623 = G__14627;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14620);if(temp__4092__auto__)
{var seq__14620__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14620__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__14620__$1);{
var G__14628 = cljs.core.chunk_rest.call(null,seq__14620__$1);
var G__14629 = c__4191__auto__;
var G__14630 = cljs.core.count.call(null,c__4191__auto__);
var G__14631 = 0;
seq__14620 = G__14628;
chunk__14621 = G__14629;
count__14622 = G__14630;
i__14623 = G__14631;
continue;
}
} else
{var fun = cljs.core.first.call(null,seq__14620__$1);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__14632 = cljs.core.next.call(null,seq__14620__$1);
var G__14633 = null;
var G__14634 = 0;
var G__14635 = 0;
seq__14620 = G__14632;
chunk__14621 = G__14633;
count__14622 = G__14634;
i__14623 = G__14635;
continue;
}
}
} else
{return null;
}
}
break;
}
});
};
var do__GT_ = function (var_args){
var forms = null;if (arguments.length > 0) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return do__GT___delegate.call(this,forms);};
do__GT_.cljs$lang$maxFixedArity = 0;
do__GT_.cljs$lang$applyTo = (function (arglist__14636){
var forms = cljs.core.seq(arglist__14636);
return do__GT___delegate(forms);
});
do__GT_.cljs$core$IFn$_invoke$arity$variadic = do__GT___delegate;
return do__GT_;
})()
;
/**
* Appends the content of the element. Values can be nodes or collection of nodes.
* @param {...*} var_args
*/
enfocus.core.append = (function() { 
var append__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__14637_SHARP_,p2__14638_SHARP_){return domina.append_BANG_.call(null,p1__14637_SHARP_,p2__14638_SHARP_);
}));
};
var append = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return append__delegate.call(this,values);};
append.cljs$lang$maxFixedArity = 0;
append.cljs$lang$applyTo = (function (arglist__14639){
var values = cljs.core.seq(arglist__14639);
return append__delegate(values);
});
append.cljs$core$IFn$_invoke$arity$variadic = append__delegate;
return append;
})()
;
/**
* Prepends the content of the element. Values can be nodes or collection of nodes.
* @param {...*} var_args
*/
enfocus.core.prepend = (function() { 
var prepend__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__14640_SHARP_,p2__14641_SHARP_){return domina.prepend_BANG_.call(null,p1__14640_SHARP_,p2__14641_SHARP_);
}));
};
var prepend = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return prepend__delegate.call(this,values);};
prepend.cljs$lang$maxFixedArity = 0;
prepend.cljs$lang$applyTo = (function (arglist__14642){
var values = cljs.core.seq(arglist__14642);
return prepend__delegate(values);
});
prepend.cljs$core$IFn$_invoke$arity$variadic = prepend__delegate;
return prepend;
})()
;
/**
* inserts the content before the selected node. Values can be nodes or collection of nodes
* @param {...*} var_args
*/
enfocus.core.before = (function() { 
var before__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__14643_SHARP_,p2__14644_SHARP_){return domina.insert_before_BANG_.call(null,p1__14643_SHARP_,p2__14644_SHARP_);
}));
};
var before = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return before__delegate.call(this,values);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__14645){
var values = cljs.core.seq(arglist__14645);
return before__delegate(values);
});
before.cljs$core$IFn$_invoke$arity$variadic = before__delegate;
return before;
})()
;
/**
* inserts the content after the selected node. Values can be nodes or collection of nodes
* @param {...*} var_args
*/
enfocus.core.after = (function() { 
var after__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__14646_SHARP_,p2__14647_SHARP_){return domina.insert_after_BANG_.call(null,p1__14646_SHARP_,p2__14647_SHARP_);
}));
};
var after = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return after__delegate.call(this,values);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__14648){
var values = cljs.core.seq(arglist__14648);
return after__delegate(values);
});
after.cljs$core$IFn$_invoke$arity$variadic = after__delegate;
return after;
})()
;
/**
* substitutes the content for the selected node. Values can be nodes or collection of nodes
* @param {...*} var_args
*/
enfocus.core.substitute = (function() { 
var substitute__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__14649_SHARP_,p2__14650_SHARP_){return domina.swap_content_BANG_.call(null,p1__14649_SHARP_,p2__14650_SHARP_);
}));
};
var substitute = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return substitute__delegate.call(this,values);};
substitute.cljs$lang$maxFixedArity = 0;
substitute.cljs$lang$applyTo = (function (arglist__14651){
var values = cljs.core.seq(arglist__14651);
return substitute__delegate(values);
});
substitute.cljs$core$IFn$_invoke$arity$variadic = substitute__delegate;
return substitute;
})()
;
/**
* removes the selected nodes from the dom
*/
enfocus.core.remove_node = (function remove_node(){return enfocus.core.multi_node_chain.call(null,(function (p1__14652_SHARP_){return domina.detach_BANG_.call(null,p1__14652_SHARP_);
}));
});
/**
* wrap and element in a new element defined as :div {:class 'temp'}
*/
enfocus.core.wrap = (function wrap(elm,mattr){return (function (pnod){var elem = goog.dom.createElement(cljs.core.name.call(null,elm));enfocus.core.add_map_attrs.call(null,elem,mattr);
enfocus.core.at.call(null,elem,enfocus.core.content.call(null,pnod.cloneNode(true)));
return enfocus.core.at.call(null,pnod,enfocus.core.do__GT_.call(null,enfocus.core.after.call(null,elem),enfocus.core.remove_node.call(null)));
});
});
/**
* replaces a node with all its children
*/
enfocus.core.unwrap = (function unwrap(){return (function (pnod){var frag = document.createDocumentFragment();goog.dom.append(frag,pnod.childNodes);
return goog.dom.replaceNode(frag,pnod);
});
});
/**
* set a list of style elements from the selected nodes
* @param {...*} var_args
*/
enfocus.core.set_style = (function() { 
var set_style__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__14653_SHARP_){var seq__14660 = cljs.core.seq.call(null,pairs);var chunk__14661 = null;var count__14662 = 0;var i__14663 = 0;while(true){
if((i__14663 < count__14662))
{var vec__14664 = cljs.core._nth.call(null,chunk__14661,i__14663);var name = cljs.core.nth.call(null,vec__14664,0,null);var value = cljs.core.nth.call(null,vec__14664,1,null);domina.set_style_BANG_.call(null,p1__14653_SHARP_,name,value);
{
var G__14666 = seq__14660;
var G__14667 = chunk__14661;
var G__14668 = count__14662;
var G__14669 = (i__14663 + 1);
seq__14660 = G__14666;
chunk__14661 = G__14667;
count__14662 = G__14668;
i__14663 = G__14669;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14660);if(temp__4092__auto__)
{var seq__14660__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14660__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__14660__$1);{
var G__14670 = cljs.core.chunk_rest.call(null,seq__14660__$1);
var G__14671 = c__4191__auto__;
var G__14672 = cljs.core.count.call(null,c__4191__auto__);
var G__14673 = 0;
seq__14660 = G__14670;
chunk__14661 = G__14671;
count__14662 = G__14672;
i__14663 = G__14673;
continue;
}
} else
{var vec__14665 = cljs.core.first.call(null,seq__14660__$1);var name = cljs.core.nth.call(null,vec__14665,0,null);var value = cljs.core.nth.call(null,vec__14665,1,null);domina.set_style_BANG_.call(null,p1__14653_SHARP_,name,value);
{
var G__14674 = cljs.core.next.call(null,seq__14660__$1);
var G__14675 = null;
var G__14676 = 0;
var G__14677 = 0;
seq__14660 = G__14674;
chunk__14661 = G__14675;
count__14662 = G__14676;
i__14663 = G__14677;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
};
var set_style = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_style__delegate.call(this,values);};
set_style.cljs$lang$maxFixedArity = 0;
set_style.cljs$lang$applyTo = (function (arglist__14678){
var values = cljs.core.seq(arglist__14678);
return set_style__delegate(values);
});
set_style.cljs$core$IFn$_invoke$arity$variadic = set_style__delegate;
return set_style;
})()
;
/**
* remove a list style elements from the selected nodes. note: you can only remove styles that are inline
* @param {...*} var_args
*/
enfocus.core.remove_style = (function() { 
var remove_style__delegate = function (values){return (function (pnod){return enfocus.core.style_remove.call(null,pnod,values);
});
};
var remove_style = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return remove_style__delegate.call(this,values);};
remove_style.cljs$lang$maxFixedArity = 0;
remove_style.cljs$lang$applyTo = (function (arglist__14679){
var values = cljs.core.seq(arglist__14679);
return remove_style__delegate(values);
});
remove_style.cljs$core$IFn$_invoke$arity$variadic = remove_style__delegate;
return remove_style;
})()
;
/**
* calls the focus function on the selected node
*/
enfocus.core.focus = (function focus(){return (function (node){return node.focus();
});
});
/**
* calls the blur function on the selected node
*/
enfocus.core.blur = (function blur(){return (function (node){return node.blur();
});
});
/**
* addes key value pair of data to the selected nodes. Only use clojure data structures when setting
*/
enfocus.core.set_data = (function set_data(ky,val){return enfocus.core.multi_node_chain.call(null,(function (p1__14680_SHARP_){return domina.set_data_BANG_.call(null,p1__14680_SHARP_,ky,val);
}));
});
/**
* delays and action by a set timeout, note this is an async operations
* @param {...*} var_args
*/
enfocus.core.delay = (function() { 
var delay__delegate = function (ttime,funcs){return (function (pnod){return enfocus.core.setTimeout.call(null,(function (){return cljs.core.apply.call(null,enfocus.core.at,pnod,funcs);
}),ttime);
});
};
var delay = function (ttime,var_args){
var funcs = null;if (arguments.length > 1) {
  funcs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return delay__delegate.call(this,ttime,funcs);};
delay.cljs$lang$maxFixedArity = 1;
delay.cljs$lang$applyTo = (function (arglist__14681){
var ttime = cljs.core.first(arglist__14681);
var funcs = cljs.core.rest(arglist__14681);
return delay__delegate(ttime,funcs);
});
delay.cljs$core$IFn$_invoke$arity$variadic = delay__delegate;
return delay;
})()
;
/**
* replaces entries like the following ${var1} in attributes and text
*/
enfocus.core.replace_vars = (function replace_vars(vars){var rep_str = (function rep_str(text){return clojure.string.replace.call(null,text,/\$\{\s*(\S+)\s*}/,(function (p1__14683_SHARP_,p2__14682_SHARP_){return vars.call(null,cljs.core.keyword.call(null,p2__14682_SHARP_));
}));
});
return (function rep_node(pnod){if(cljs.core.truth_(pnod.attributes))
{var seq__14708_14716 = cljs.core.seq.call(null,cljs.core.range.call(null,pnod.attributes.length));var chunk__14709_14717 = null;var count__14710_14718 = 0;var i__14711_14719 = 0;while(true){
if((i__14711_14719 < count__14710_14718))
{var idx_14720 = cljs.core._nth.call(null,chunk__14709_14717,i__14711_14719);var attr_14721 = pnod.attributes.item(idx_14720);if(cljs.core.truth_(attr_14721.specified))
{attr_14721.value = rep_str.call(null,attr_14721.value);
} else
{}
{
var G__14722 = seq__14708_14716;
var G__14723 = chunk__14709_14717;
var G__14724 = count__14710_14718;
var G__14725 = (i__14711_14719 + 1);
seq__14708_14716 = G__14722;
chunk__14709_14717 = G__14723;
count__14710_14718 = G__14724;
i__14711_14719 = G__14725;
continue;
}
} else
{var temp__4092__auto___14726 = cljs.core.seq.call(null,seq__14708_14716);if(temp__4092__auto___14726)
{var seq__14708_14727__$1 = temp__4092__auto___14726;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14708_14727__$1))
{var c__4191__auto___14728 = cljs.core.chunk_first.call(null,seq__14708_14727__$1);{
var G__14729 = cljs.core.chunk_rest.call(null,seq__14708_14727__$1);
var G__14730 = c__4191__auto___14728;
var G__14731 = cljs.core.count.call(null,c__4191__auto___14728);
var G__14732 = 0;
seq__14708_14716 = G__14729;
chunk__14709_14717 = G__14730;
count__14710_14718 = G__14731;
i__14711_14719 = G__14732;
continue;
}
} else
{var idx_14733 = cljs.core.first.call(null,seq__14708_14727__$1);var attr_14734 = pnod.attributes.item(idx_14733);if(cljs.core.truth_(attr_14734.specified))
{attr_14734.value = rep_str.call(null,attr_14734.value);
} else
{}
{
var G__14735 = cljs.core.next.call(null,seq__14708_14727__$1);
var G__14736 = null;
var G__14737 = 0;
var G__14738 = 0;
seq__14708_14716 = G__14735;
chunk__14709_14717 = G__14736;
count__14710_14718 = G__14737;
i__14711_14719 = G__14738;
continue;
}
}
} else
{}
}
break;
}
} else
{}
if(cljs.core._EQ_.call(null,pnod.nodeType,3))
{return pnod.nodeValue = rep_str.call(null,pnod.nodeValue);
} else
{var seq__14712 = cljs.core.seq.call(null,enfocus.core.nodes__GT_coll.call(null,pnod.childNodes));var chunk__14713 = null;var count__14714 = 0;var i__14715 = 0;while(true){
if((i__14715 < count__14714))
{var cnode = cljs.core._nth.call(null,chunk__14713,i__14715);rep_node.call(null,cnode);
{
var G__14739 = seq__14712;
var G__14740 = chunk__14713;
var G__14741 = count__14714;
var G__14742 = (i__14715 + 1);
seq__14712 = G__14739;
chunk__14713 = G__14740;
count__14714 = G__14741;
i__14715 = G__14742;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14712);if(temp__4092__auto__)
{var seq__14712__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14712__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__14712__$1);{
var G__14743 = cljs.core.chunk_rest.call(null,seq__14712__$1);
var G__14744 = c__4191__auto__;
var G__14745 = cljs.core.count.call(null,c__4191__auto__);
var G__14746 = 0;
seq__14712 = G__14743;
chunk__14713 = G__14744;
count__14714 = G__14745;
i__14715 = G__14746;
continue;
}
} else
{var cnode = cljs.core.first.call(null,seq__14712__$1);rep_node.call(null,cnode);
{
var G__14747 = cljs.core.next.call(null,seq__14712__$1);
var G__14748 = null;
var G__14749 = 0;
var G__14750 = 0;
seq__14712 = G__14747;
chunk__14713 = G__14748;
count__14714 = G__14749;
i__14715 = G__14750;
continue;
}
}
} else
{return null;
}
}
break;
}
}
});
});
/**
* takes clojure data structure and emits a document element
*/
enfocus.core.html = (function html(node_spec){if(typeof node_spec === 'string')
{return document.createTextNode(node_spec);
} else
{if(cljs.core.vector_QMARK_.call(null,node_spec))
{var vec__14760 = node_spec;var tag = cljs.core.nth.call(null,vec__14760,0,null);var vec__14761 = cljs.core.nthnext.call(null,vec__14760,1);var m = cljs.core.nth.call(null,vec__14761,0,null);var ms = cljs.core.nthnext.call(null,vec__14761,1);var more = vec__14761;var _ = enfocus.core.log_debug.call(null,cljs.core.pr_str.call(null,tag,m,ms));var vec__14762 = cljs.core.name.call(null,tag).split(/(?=[#.])/);var tag_name = cljs.core.nth.call(null,vec__14762,0,null);var segments = cljs.core.nthnext.call(null,vec__14762,1);var id = cljs.core.some.call(null,((function (vec__14760,tag,vec__14761,m,ms,more,_,vec__14762,tag_name,segments){
return (function (seg){if(cljs.core._EQ_.call(null,"#",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__14760,tag,vec__14761,m,ms,more,_,vec__14762,tag_name,segments))
,segments);var classes = cljs.core.keep.call(null,((function (vec__14760,tag,vec__14761,m,ms,more,_,vec__14762,tag_name,segments,id){
return (function (seg){if(cljs.core._EQ_.call(null,".",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__14760,tag,vec__14761,m,ms,more,_,vec__14762,tag_name,segments,id))
,segments);var attrs = ((cljs.core.map_QMARK_.call(null,m))?m:cljs.core.PersistentArrayMap.EMPTY);var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"id","id",1013907597),id):attrs);var attrs__$2 = ((!(cljs.core.empty_QMARK_.call(null,classes)))?cljs.core.assoc.call(null,attrs__$1,new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",classes))):attrs__$1);var content = cljs.core.flatten.call(null,cljs.core.map.call(null,html,((cljs.core.map_QMARK_.call(null,m))?ms:more)));var node = document.createElement(tag_name);var seq__14763_14769 = cljs.core.seq.call(null,attrs__$2);var chunk__14764_14770 = null;var count__14765_14771 = 0;var i__14766_14772 = 0;while(true){
if((i__14766_14772 < count__14765_14771))
{var vec__14767_14773 = cljs.core._nth.call(null,chunk__14764_14770,i__14766_14772);var key_14774 = cljs.core.nth.call(null,vec__14767_14773,0,null);var val_14775 = cljs.core.nth.call(null,vec__14767_14773,1,null);node.setAttribute(cljs.core.name.call(null,key_14774),val_14775);
{
var G__14776 = seq__14763_14769;
var G__14777 = chunk__14764_14770;
var G__14778 = count__14765_14771;
var G__14779 = (i__14766_14772 + 1);
seq__14763_14769 = G__14776;
chunk__14764_14770 = G__14777;
count__14765_14771 = G__14778;
i__14766_14772 = G__14779;
continue;
}
} else
{var temp__4092__auto___14780 = cljs.core.seq.call(null,seq__14763_14769);if(temp__4092__auto___14780)
{var seq__14763_14781__$1 = temp__4092__auto___14780;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14763_14781__$1))
{var c__4191__auto___14782 = cljs.core.chunk_first.call(null,seq__14763_14781__$1);{
var G__14783 = cljs.core.chunk_rest.call(null,seq__14763_14781__$1);
var G__14784 = c__4191__auto___14782;
var G__14785 = cljs.core.count.call(null,c__4191__auto___14782);
var G__14786 = 0;
seq__14763_14769 = G__14783;
chunk__14764_14770 = G__14784;
count__14765_14771 = G__14785;
i__14766_14772 = G__14786;
continue;
}
} else
{var vec__14768_14787 = cljs.core.first.call(null,seq__14763_14781__$1);var key_14788 = cljs.core.nth.call(null,vec__14768_14787,0,null);var val_14789 = cljs.core.nth.call(null,vec__14768_14787,1,null);node.setAttribute(cljs.core.name.call(null,key_14788),val_14789);
{
var G__14790 = cljs.core.next.call(null,seq__14763_14781__$1);
var G__14791 = null;
var G__14792 = 0;
var G__14793 = 0;
seq__14763_14769 = G__14790;
chunk__14764_14770 = G__14791;
count__14765_14771 = G__14792;
i__14766_14772 = G__14793;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(content))
{return domina.append_BANG_.call(null,node,content);
} else
{return null;
}
} else
{if(cljs.core.sequential_QMARK_.call(null,node_spec))
{return cljs.core.flatten.call(null,cljs.core.map.call(null,html,node_spec));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return document.createTextNode([cljs.core.str(node_spec)].join(''));
} else
{return null;
}
}
}
}
});
/**
* returns the attribute on the selected element or elements.
* in cases where more than one element is selected you will
* receive a list of values
*/
enfocus.core.get_attr = (function get_attr(attr){return enfocus.core.extr_multi_node.call(null,(function (pnod){return pnod.getAttribute(cljs.core.name.call(null,attr));
}));
});
/**
* returns the text value of the selected element or elements.
* in cases where more than one element is selected you will
* receive a list of values
*/
enfocus.core.get_text = (function get_text(){return enfocus.core.extr_multi_node.call(null,(function (pnod){return goog.dom.getTextContent(pnod);
}));
});
/**
* returns the data on a selected node for a given key. If bubble is set will look at parent
*/
enfocus.core.get_data = (function() {
var get_data = null;
var get_data__1 = (function (ky){return get_data.call(null,ky,false);
});
var get_data__2 = (function (ky,bubble){return enfocus.core.extr_multi_node.call(null,(function (node){return domina.get_data.call(null,node,ky,bubble);
}));
});
get_data = function(ky,bubble){
switch(arguments.length){
case 1:
return get_data__1.call(this,ky);
case 2:
return get_data__2.call(this,ky,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$1 = get_data__1;
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
return get_data;
})()
;
/**
* returns the property on the selected element or elements.
* in cases where more than one element is selected you will
* receive a list of values
*/
enfocus.core.get_prop = (function get_prop(prop){return enfocus.core.extr_multi_node.call(null,(function (pnod){return (pnod[cljs.core.name.call(null,prop)]);
}));
});
/**
* this function takes a map, key and value.  It will check if
* the value exists and create a seq of values if one exits.
*/
enfocus.core.merge_form_val = (function merge_form_val(form_map,ky,val){var mval = form_map.call(null,ky);if(cljs.core.coll_QMARK_.call(null,mval))
{return cljs.core.assoc.call(null,form_map,ky,cljs.core.conj.call(null,mval,val));
} else
{if(cljs.core.truth_(mval))
{return cljs.core.assoc.call(null,form_map,ky,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,mval),val));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.assoc.call(null,form_map,ky,val);
} else
{return null;
}
}
}
});
enfocus.core.read_simple_input = (function read_simple_input(el,col){if(!(cljs.core.empty_QMARK_.call(null,el.name)))
{return enfocus.core.merge_form_val.call(null,col,cljs.core.keyword.call(null,el.name),el.value);
} else
{return col;
}
});
enfocus.core.read_checked_input = (function read_checked_input(el,col){if(cljs.core.truth_((function (){var and__3431__auto__ = el.checked;if(cljs.core.truth_(and__3431__auto__))
{return !(cljs.core.empty_QMARK_.call(null,el.name));
} else
{return and__3431__auto__;
}
})()))
{return enfocus.core.merge_form_val.call(null,col,cljs.core.keyword.call(null,el.name),el.value);
} else
{return col;
}
});
enfocus.core.read_select_input = (function read_select_input(el,col){if(!(cljs.core.empty_QMARK_.call(null,el.name)))
{var nm = cljs.core.keyword.call(null,el.name);var onodes = domina.nodes.call(null,el.options);var opts = cljs.core.filter.call(null,((function (nm,onodes){
return (function (p1__14794_SHARP_){return p1__14794_SHARP_.selected;
});})(nm,onodes))
,onodes);return enfocus.core.merge_form_val.call(null,col,nm,cljs.core.map.call(null,(function (p1__14795_SHARP_){return p1__14795_SHARP_.value;
}),opts));
} else
{return col;
}
});
/**
* returns a map of the form values tied to name of input fields.
* {:name1 'value1' name2 ('select1' 'select2')}
*/
enfocus.core.read_form = (function read_form(){return enfocus.core.extr_multi_node.call(null,(function (node){var inputs = node.elements;return cljs.core.reduce.call(null,(function (p1__14797_SHARP_,p2__14796_SHARP_){var G__14800 = p2__14796_SHARP_.nodeName;if(cljs.core._EQ_.call(null,"BUTTON",G__14800))
{return enfocus.core.read_simple_input.call(null,p2__14796_SHARP_,p1__14797_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"SELECT",G__14800))
{return enfocus.core.read_select_input.call(null,p2__14796_SHARP_,p1__14797_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"TEXTAREA",G__14800))
{return enfocus.core.read_simple_input.call(null,p2__14796_SHARP_,p1__14797_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"INPUT",G__14800))
{var G__14801 = p2__14796_SHARP_.type;if(cljs.core._EQ_.call(null,"radio",G__14801))
{return enfocus.core.read_checked_input.call(null,p2__14796_SHARP_,p1__14797_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"checkbox",G__14801))
{return enfocus.core.read_checked_input.call(null,p2__14796_SHARP_,p1__14797_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"submit",G__14801))
{return enfocus.core.read_simple_input.call(null,p2__14796_SHARP_,p1__14797_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"reset",G__14801))
{return enfocus.core.read_simple_input.call(null,p2__14796_SHARP_,p1__14797_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"button",G__14801))
{return enfocus.core.read_simple_input.call(null,p2__14796_SHARP_,p1__14797_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"password",G__14801))
{return enfocus.core.read_simple_input.call(null,p2__14796_SHARP_,p1__14797_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"hidden",G__14801))
{return enfocus.core.read_simple_input.call(null,p2__14796_SHARP_,p1__14797_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"text",G__14801))
{return enfocus.core.read_simple_input.call(null,p2__14796_SHARP_,p1__14797_SHARP_);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return p1__14797_SHARP_;
} else
{return null;
}
}
}
}
}
}
}
}
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return p1__14797_SHARP_;
} else
{return null;
}
}
}
}
}
}),cljs.core.PersistentArrayMap.EMPTY,inputs);
}));
});
enfocus.core.reg_filt = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
* filter allows you to apply function to futhur scope down what is returned by a selector
*/
enfocus.core.filter = (function filter(tst,trans){return enfocus.core.multi_node_chain.call(null,(function() {
var filt = null;
var filt__1 = (function (pnodes){return filt.call(null,pnodes,null);
});
var filt__2 = (function (pnodes,chain){var pnod_col = enfocus.core.nodes__GT_coll.call(null,pnodes);var ttest = (((tst instanceof cljs.core.Keyword))?cljs.core.deref.call(null,enfocus.core.reg_filt).call(null,tst):tst);var res = cljs.core.filter.call(null,ttest,pnod_col);if((chain == null))
{return enfocus.core.apply_transform.call(null,trans,res);
} else
{return enfocus.core.apply_transform.call(null,trans,res,chain);
}
});
filt = function(pnodes,chain){
switch(arguments.length){
case 1:
return filt__1.call(this,pnodes);
case 2:
return filt__2.call(this,pnodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filt.cljs$core$IFn$_invoke$arity$1 = filt__1;
filt.cljs$core$IFn$_invoke$arity$2 = filt__2;
return filt;
})()
);
});
/**
* registers a filter for a given keyword
*/
enfocus.core.register_filter = (function register_filter(ky,func){return cljs.core.swap_BANG_.call(null,enfocus.core.reg_filt,cljs.core.assoc,ky,func);
});
/**
* takes a list of options and returns the selected ones.
*/
enfocus.core.selected_options = (function selected_options(pnod){return pnod.selected;
});
/**
* takes a list of radio or checkboxes and returns the checked ones
*/
enfocus.core.checked_radio_checkbox = (function checked_radio_checkbox(pnod){return pnod.checked;
});
enfocus.core.register_filter.call(null,new cljs.core.Keyword(null,"selected","selected",2205476365),enfocus.core.selected_options);
enfocus.core.register_filter.call(null,new cljs.core.Keyword(null,"checked","checked",1756218137),enfocus.core.checked_radio_checkbox);
enfocus.core.match_QMARK_ = (function match_QMARK_(selector){return (function (node){if(cljs.core.truth_((node["matches"])))
{return node.matches(selector);
} else
{if(cljs.core.truth_((node["matchesSelector"])))
{return node.matchesSelector(selector);
} else
{if(cljs.core.truth_((node["msMatchesSelector"])))
{return node.msMatchesSelector(selector);
} else
{if(cljs.core.truth_((node["mozMatchesSelector"])))
{return node.mozMatchesSelector(selector);
} else
{if(cljs.core.truth_((node["webkitMatchesSelector"])))
{return node.webkitMatchesSelector(selector);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([node], true),enfocus.core.nodes__GT_coll.call(null,enfocus.core.select.call(null,node)));
} else
{return null;
}
}
}
}
}
}
});
});
/**
* converts keywords, symbols and strings used in the enlive selector
* syntax to a string representing a standard css selector.  It also
* applys id masking if mask provided
*/
enfocus.core.create_sel_str = (function() {
var create_sel_str = null;
var create_sel_str__1 = (function (css_sel){return create_sel_str.call(null,"",css_sel);
});
var create_sel_str__2 = (function (id_mask_sym,css_sel){return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__14802_SHARP_){if((p1__14802_SHARP_ instanceof cljs.core.Symbol))
{return enfocus.core.css_syms.call(null,p1__14802_SHARP_);
} else
{if((p1__14802_SHARP_ instanceof cljs.core.Keyword))
{return [cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,p1__14802_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else
{if(cljs.core.vector_QMARK_.call(null,p1__14802_SHARP_))
{return create_sel_str.call(null,p1__14802_SHARP_);
} else
{if(typeof p1__14802_SHARP_ === 'string')
{return p1__14802_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
} else
{return null;
}
}
}
}
}),css_sel));
});
create_sel_str = function(id_mask_sym,css_sel){
switch(arguments.length){
case 1:
return create_sel_str__1.call(this,id_mask_sym);
case 2:
return create_sel_str__2.call(this,id_mask_sym,css_sel);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_sel_str.cljs$core$IFn$_invoke$arity$1 = create_sel_str__1;
create_sel_str.cljs$core$IFn$_invoke$arity$2 = create_sel_str__2;
return create_sel_str;
})()
;
/**
* takes either an enlive selector or a css3 selector and returns a set of nodes that match the selector
*/
enfocus.core.css_select = (function() {
var css_select = null;
var css_select__1 = (function (css_sel){return css_select.call(null,"",document,css_sel);
});
var css_select__2 = (function (dom_node,css_sel){return css_select.call(null,"",dom_node,css_sel);
});
var css_select__3 = (function (id_mask_sym,dom_node,css_sel){var sel = clojure.string.trim.call(null,enfocus.enlive.syntax.convert.call(null,enfocus.core.create_sel_str.call(null,id_mask_sym,css_sel)));var ret = domina.css.sel.call(null,dom_node,sel);return ret;
});
css_select = function(id_mask_sym,dom_node,css_sel){
switch(arguments.length){
case 1:
return css_select__1.call(this,id_mask_sym);
case 2:
return css_select__2.call(this,id_mask_sym,dom_node);
case 3:
return css_select__3.call(this,id_mask_sym,dom_node,css_sel);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
css_select.cljs$core$IFn$_invoke$arity$1 = css_select__1;
css_select.cljs$core$IFn$_invoke$arity$2 = css_select__2;
css_select.cljs$core$IFn$_invoke$arity$3 = css_select__3;
return css_select;
})()
;
enfocus.core.nil_t = (function nil_t(func){var or__3443__auto__ = func;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return enfocus.core.remove_node;
}
});
/**
* @param {...*} var_args
*/
enfocus.core.i_at = (function() { 
var i_at__delegate = function (id_mask,node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var G__14811 = node;if(G__14811)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__14811.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__14811.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__14811);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__14811);
}
})();if((!(sel_QMARK_)) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{var vec__14812 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__14812,0,null);var trans__$1 = cljs.core.nth.call(null,vec__14812,1,null);var seq__14813 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,trans__$1));var chunk__14814 = null;var count__14815 = 0;var i__14816 = 0;while(true){
if((i__14816 < count__14815))
{var vec__14817 = cljs.core._nth.call(null,chunk__14814,i__14816);var sel = cljs.core.nth.call(null,vec__14817,0,null);var t = cljs.core.nth.call(null,vec__14817,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__14819 = seq__14813;
var G__14820 = chunk__14814;
var G__14821 = count__14815;
var G__14822 = (i__14816 + 1);
seq__14813 = G__14819;
chunk__14814 = G__14820;
count__14815 = G__14821;
i__14816 = G__14822;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14813);if(temp__4092__auto__)
{var seq__14813__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14813__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__14813__$1);{
var G__14823 = cljs.core.chunk_rest.call(null,seq__14813__$1);
var G__14824 = c__4191__auto__;
var G__14825 = cljs.core.count.call(null,c__4191__auto__);
var G__14826 = 0;
seq__14813 = G__14823;
chunk__14814 = G__14824;
count__14815 = G__14825;
i__14816 = G__14826;
continue;
}
} else
{var vec__14818 = cljs.core.first.call(null,seq__14813__$1);var sel = cljs.core.nth.call(null,vec__14818,0,null);var t = cljs.core.nth.call(null,vec__14818,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__14827 = cljs.core.next.call(null,seq__14813__$1);
var G__14828 = null;
var G__14829 = 0;
var G__14830 = 0;
seq__14813 = G__14827;
chunk__14814 = G__14828;
count__14815 = G__14829;
i__14816 = G__14830;
continue;
}
}
} else
{return null;
}
}
break;
}
}
};
var i_at = function (id_mask,node,var_args){
var trans = null;if (arguments.length > 2) {
  trans = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return i_at__delegate.call(this,id_mask,node,trans);};
i_at.cljs$lang$maxFixedArity = 2;
i_at.cljs$lang$applyTo = (function (arglist__14831){
var id_mask = cljs.core.first(arglist__14831);
arglist__14831 = cljs.core.next(arglist__14831);
var node = cljs.core.first(arglist__14831);
var trans = cljs.core.rest(arglist__14831);
return i_at__delegate(id_mask,node,trans);
});
i_at.cljs$core$IFn$_invoke$arity$variadic = i_at__delegate;
return i_at;
})()
;
/**
* @param {...*} var_args
*/
enfocus.core.at = (function() { 
var at__delegate = function (node,trans){return cljs.core.apply.call(null,enfocus.core.i_at,"",node,trans);
};
var at = function (node,var_args){
var trans = null;if (arguments.length > 1) {
  trans = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return at__delegate.call(this,node,trans);};
at.cljs$lang$maxFixedArity = 1;
at.cljs$lang$applyTo = (function (arglist__14832){
var node = cljs.core.first(arglist__14832);
var trans = cljs.core.rest(arglist__14832);
return at__delegate(node,trans);
});
at.cljs$core$IFn$_invoke$arity$variadic = at__delegate;
return at;
})()
;
/**
* @param {...*} var_args
*/
enfocus.core.from = (function() { 
var from__delegate = function (node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var G__14837 = node;if(G__14837)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__14837.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__14837.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__14837);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__14837);
}
})();if((sel_QMARK_) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),enfocus.core.select.call(null,node));
} else
{if(cljs.core._EQ_.call(null,1,cnt))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var vec__14838 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__14838,0,null);var trans__$1 = cljs.core.nth.call(null,vec__14838,1,null);return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p__14839){var vec__14840 = p__14839;var ky = cljs.core.nth.call(null,vec__14840,0,null);var sel = cljs.core.nth.call(null,vec__14840,1,null);var ext = cljs.core.nth.call(null,vec__14840,2,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.call(null,ext,enfocus.core.select.call(null,sel,node__$1,""))], null);
}),cljs.core.partition.call(null,3,trans__$1)));
} else
{return null;
}
}
}
};
var from = function (node,var_args){
var trans = null;if (arguments.length > 1) {
  trans = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return from__delegate.call(this,node,trans);};
from.cljs$lang$maxFixedArity = 1;
from.cljs$lang$applyTo = (function (arglist__14841){
var node = cljs.core.first(arglist__14841);
var trans = cljs.core.rest(arglist__14841);
return from__delegate(node,trans);
});
from.cljs$core$IFn$_invoke$arity$variadic = from__delegate;
return from;
})()
;
enfocus.core.xpath = (function xpath(path){return (function (root,id_mask){if(cljs.core.empty_QMARK_.call(null,id_mask))
{return domina.xpath.xpath.call(null,root,path);
} else
{var tmp = path.replace("@ID='",[cljs.core.str("@ID='"),cljs.core.str(id_mask)].join(''));var mpath = path.replace("@id='",[cljs.core.str("@id='"),cljs.core.str(id_mask)].join(''));return domina.xpath.xpath.call(null,root,mpath);
}
});
});
enfocus.core.this_node = (function this_node(root,id_mask){return root;
});
if(cljs.core.truth_((typeof Text != 'undefined')))
{Text.prototype.domina$DomContent$ = true;
Text.prototype.domina$DomContent$nodes$arity$1 = (function (content){var content__$1 = this;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content__$1], null);
});
Text.prototype.domina$DomContent$single_node$arity$1 = (function (content){var content__$1 = this;return content__$1;
});
} else
{}
(enfocus.core.ISelector["string"] = true);
(enfocus.core.select["string"] = (function() {
var G__14842 = null;
var G__14842__1 = (function (this$){return enfocus.core.select.call(null,this$,document,"");
});
var G__14842__2 = (function (this$,root){return enfocus.core.select.call(null,this$,root,"");
});
var G__14842__3 = (function (this$,root,id_mask){return enfocus.core.css_select.call(null,id_mask,root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
});
G__14842 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__14842__1.call(this,this$);
case 2:
return G__14842__2.call(this,this$,root);
case 3:
return G__14842__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__14842;
})()
);
cljs.core.PersistentVector.prototype.enfocus$core$ISelector$ = true;
cljs.core.PersistentVector.prototype.enfocus$core$ISelector$select$arity$1 = (function (this$){var this$__$1 = this;return enfocus.core.select.call(null,this$__$1,document,"");
});
cljs.core.PersistentVector.prototype.enfocus$core$ISelector$select$arity$2 = (function (this$,root){var this$__$1 = this;return enfocus.core.select.call(null,this$__$1,root,"");
});
cljs.core.PersistentVector.prototype.enfocus$core$ISelector$select$arity$3 = (function (this$,root,id_mask){var this$__$1 = this;return enfocus.core.css_select.call(null,id_mask,root,this$__$1);
});
(enfocus.core.ISelector["function"] = true);
(enfocus.core.select["function"] = (function() {
var G__14843 = null;
var G__14843__1 = (function (this$){return enfocus.core.select.call(null,this$,document,"");
});
var G__14843__2 = (function (this$,root){return enfocus.core.select.call(null,this$,root,"");
});
var G__14843__3 = (function (this$,root,id_mask){return this$.call(null,root,id_mask);
});
G__14843 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__14843__1.call(this,this$);
case 2:
return G__14843__2.call(this,this$,root);
case 3:
return G__14843__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__14843;
})()
);
(enfocus.core.ITransform["function"] = true);
(enfocus.core.apply_transform["function"] = (function() {
var G__14844 = null;
var G__14844__2 = (function (trans,nodes){return cljs.core.doall.call(null,cljs.core.map.call(null,trans,enfocus.core.nodes__GT_coll.call(null,nodes)));
});
var G__14844__3 = (function (trans,nodes,chain){var pnod_col = enfocus.core.nodes__GT_coll.call(null,nodes);var val = cljs.core.doall.call(null,cljs.core.map.call(null,trans,pnod_col));if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.call(null,chain,nodes);
} else
{return val;
}
});
G__14844 = function(trans,nodes,chain){
switch(arguments.length){
case 2:
return G__14844__2.call(this,trans,nodes);
case 3:
return G__14844__3.call(this,trans,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__14844;
})()
);

//# sourceMappingURL=core.js.map