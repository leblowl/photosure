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
enfocus.core.ISelector = (function (){var obj17062 = {};return obj17062;
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
enfocus.core.ITransform = (function (){var obj17064 = {};return obj17064;
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
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){return cljs.core.mapcat.call(null,(function (p1__17065_SHARP_){if(typeof p1__17065_SHARP_ === 'string')
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__17065_SHARP_)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return enfocus.core.nodes__GT_coll.call(null,p1__17065_SHARP_);
} else
{return null;
}
}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){var seq__17072_17078 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));var chunk__17073_17079 = null;var count__17074_17080 = 0;var i__17075_17081 = 0;while(true){
if((i__17075_17081 < count__17074_17080))
{var vec__17076_17082 = cljs.core._nth.call(null,chunk__17073_17079,i__17075_17081);var attr_17083 = cljs.core.nth.call(null,vec__17076_17082,0,null);var value_17084 = cljs.core.nth.call(null,vec__17076_17082,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_17083),value_17084);
{
var G__17085 = seq__17072_17078;
var G__17086 = chunk__17073_17079;
var G__17087 = count__17074_17080;
var G__17088 = (i__17075_17081 + 1);
seq__17072_17078 = G__17085;
chunk__17073_17079 = G__17086;
count__17074_17080 = G__17087;
i__17075_17081 = G__17088;
continue;
}
} else
{var temp__4092__auto___17089 = cljs.core.seq.call(null,seq__17072_17078);if(temp__4092__auto___17089)
{var seq__17072_17090__$1 = temp__4092__auto___17089;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17072_17090__$1))
{var c__4191__auto___17091 = cljs.core.chunk_first.call(null,seq__17072_17090__$1);{
var G__17092 = cljs.core.chunk_rest.call(null,seq__17072_17090__$1);
var G__17093 = c__4191__auto___17091;
var G__17094 = cljs.core.count.call(null,c__4191__auto___17091);
var G__17095 = 0;
seq__17072_17078 = G__17092;
chunk__17073_17079 = G__17093;
count__17074_17080 = G__17094;
i__17075_17081 = G__17095;
continue;
}
} else
{var vec__17077_17096 = cljs.core.first.call(null,seq__17072_17090__$1);var attr_17097 = cljs.core.nth.call(null,vec__17077_17096,0,null);var value_17098 = cljs.core.nth.call(null,vec__17077_17096,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_17097),value_17098);
{
var G__17099 = cljs.core.next.call(null,seq__17072_17090__$1);
var G__17100 = null;
var G__17101 = 0;
var G__17102 = 0;
seq__17072_17078 = G__17099;
chunk__17073_17079 = G__17100;
count__17074_17080 = G__17101;
i__17075_17081 = G__17102;
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
enfocus.core.style_remove = (function style_remove(obj,values){var seq__17107 = cljs.core.seq.call(null,values);var chunk__17108 = null;var count__17109 = 0;var i__17110 = 0;while(true){
if((i__17110 < count__17109))
{var attr = cljs.core._nth.call(null,chunk__17108,i__17110);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__17111 = seq__17107;
var G__17112 = chunk__17108;
var G__17113 = count__17109;
var G__17114 = (i__17110 + 1);
seq__17107 = G__17111;
chunk__17108 = G__17112;
count__17109 = G__17113;
i__17110 = G__17114;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17107);if(temp__4092__auto__)
{var seq__17107__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17107__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__17107__$1);{
var G__17115 = cljs.core.chunk_rest.call(null,seq__17107__$1);
var G__17116 = c__4191__auto__;
var G__17117 = cljs.core.count.call(null,c__4191__auto__);
var G__17118 = 0;
seq__17107 = G__17115;
chunk__17108 = G__17116;
count__17109 = G__17117;
i__17110 = G__17118;
continue;
}
} else
{var attr = cljs.core.first.call(null,seq__17107__$1);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__17119 = cljs.core.next.call(null,seq__17107__$1);
var G__17120 = null;
var G__17121 = 0;
var G__17122 = 0;
seq__17107 = G__17119;
chunk__17108 = G__17120;
count__17109 = G__17121;
i__17110 = G__17122;
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
{var seq__17129_17135 = cljs.core.seq.call(null,ats);var chunk__17130_17136 = null;var count__17131_17137 = 0;var i__17132_17138 = 0;while(true){
if((i__17132_17138 < count__17131_17137))
{var vec__17133_17139 = cljs.core._nth.call(null,chunk__17130_17136,i__17132_17138);var k_17140 = cljs.core.nth.call(null,vec__17133_17139,0,null);var v_17141 = cljs.core.nth.call(null,vec__17133_17139,1,null);add_map_attrs.call(null,elem,k_17140,v_17141);
{
var G__17142 = seq__17129_17135;
var G__17143 = chunk__17130_17136;
var G__17144 = count__17131_17137;
var G__17145 = (i__17132_17138 + 1);
seq__17129_17135 = G__17142;
chunk__17130_17136 = G__17143;
count__17131_17137 = G__17144;
i__17132_17138 = G__17145;
continue;
}
} else
{var temp__4092__auto___17146 = cljs.core.seq.call(null,seq__17129_17135);if(temp__4092__auto___17146)
{var seq__17129_17147__$1 = temp__4092__auto___17146;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17129_17147__$1))
{var c__4191__auto___17148 = cljs.core.chunk_first.call(null,seq__17129_17147__$1);{
var G__17149 = cljs.core.chunk_rest.call(null,seq__17129_17147__$1);
var G__17150 = c__4191__auto___17148;
var G__17151 = cljs.core.count.call(null,c__4191__auto___17148);
var G__17152 = 0;
seq__17129_17135 = G__17149;
chunk__17130_17136 = G__17150;
count__17131_17137 = G__17151;
i__17132_17138 = G__17152;
continue;
}
} else
{var vec__17134_17153 = cljs.core.first.call(null,seq__17129_17147__$1);var k_17154 = cljs.core.nth.call(null,vec__17134_17153,0,null);var v_17155 = cljs.core.nth.call(null,vec__17134_17153,1,null);add_map_attrs.call(null,elem,k_17154,v_17155);
{
var G__17156 = cljs.core.next.call(null,seq__17129_17147__$1);
var G__17157 = null;
var G__17158 = 0;
var G__17159 = 0;
seq__17129_17135 = G__17156;
chunk__17130_17136 = G__17157;
count__17131_17137 = G__17158;
i__17132_17138 = G__17159;
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
var seq__17164_17168 = cljs.core.seq.call(null,domina.nodes.call(null,child));var chunk__17165_17169 = null;var count__17166_17170 = 0;var i__17167_17171 = 0;while(true){
if((i__17167_17171 < count__17166_17170))
{var node_17172 = cljs.core._nth.call(null,chunk__17165_17169,i__17167_17171);goog.dom.appendChild(div,node_17172);
{
var G__17173 = seq__17164_17168;
var G__17174 = chunk__17165_17169;
var G__17175 = count__17166_17170;
var G__17176 = (i__17167_17171 + 1);
seq__17164_17168 = G__17173;
chunk__17165_17169 = G__17174;
count__17166_17170 = G__17175;
i__17167_17171 = G__17176;
continue;
}
} else
{var temp__4092__auto___17177 = cljs.core.seq.call(null,seq__17164_17168);if(temp__4092__auto___17177)
{var seq__17164_17178__$1 = temp__4092__auto___17177;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17164_17178__$1))
{var c__4191__auto___17179 = cljs.core.chunk_first.call(null,seq__17164_17178__$1);{
var G__17180 = cljs.core.chunk_rest.call(null,seq__17164_17178__$1);
var G__17181 = c__4191__auto___17179;
var G__17182 = cljs.core.count.call(null,c__4191__auto___17179);
var G__17183 = 0;
seq__17164_17168 = G__17180;
chunk__17165_17169 = G__17181;
count__17166_17170 = G__17182;
i__17167_17171 = G__17183;
continue;
}
} else
{var node_17184 = cljs.core.first.call(null,seq__17164_17178__$1);goog.dom.appendChild(div,node_17184);
{
var G__17185 = cljs.core.next.call(null,seq__17164_17178__$1);
var G__17186 = null;
var G__17187 = 0;
var G__17188 = 0;
seq__17164_17168 = G__17185;
chunk__17165_17169 = G__17186;
count__17166_17170 = G__17187;
i__17167_17171 = G__17188;
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
enfocus.core.reset_ids = (function reset_ids(sym,nod){var id_nodes = enfocus.core.css_select.call(null,nod,"*[id]");var nod_col = enfocus.core.nodes__GT_coll.call(null,id_nodes);return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__17189_SHARP_){var id = p1__17189_SHARP_.getAttribute("id");var rid = id.replace(sym,"");return p1__17189_SHARP_.setAttribute("id",rid);
}),nod_col));
});
/**
* loads a remote file into the cache, and masks the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri,dom_key,id_mask){if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,dom_key) == null))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);
var req = (new goog.net.XhrIo());var callback = ((function (req){
return (function (req__$1){var text = req__$1.getResponseText();var vec__17191 = enfocus.core.replace_ids.call(null,id_mask,text);var sym = cljs.core.nth.call(null,vec__17191,0,null);var txt = cljs.core.nth.call(null,vec__17191,1,null);return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,dom_key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,txt], null));
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
var seq__17196_17200 = cljs.core.seq.call(null,dfa);var chunk__17197_17201 = null;var count__17198_17202 = 0;var i__17199_17203 = 0;while(true){
if((i__17199_17203 < count__17198_17202))
{var df_17204 = cljs.core._nth.call(null,chunk__17197_17201,i__17199_17203);goog.dom.append(frag,df_17204);
{
var G__17205 = seq__17196_17200;
var G__17206 = chunk__17197_17201;
var G__17207 = count__17198_17202;
var G__17208 = (i__17199_17203 + 1);
seq__17196_17200 = G__17205;
chunk__17197_17201 = G__17206;
count__17198_17202 = G__17207;
i__17199_17203 = G__17208;
continue;
}
} else
{var temp__4092__auto___17209 = cljs.core.seq.call(null,seq__17196_17200);if(temp__4092__auto___17209)
{var seq__17196_17210__$1 = temp__4092__auto___17209;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17196_17210__$1))
{var c__4191__auto___17211 = cljs.core.chunk_first.call(null,seq__17196_17210__$1);{
var G__17212 = cljs.core.chunk_rest.call(null,seq__17196_17210__$1);
var G__17213 = c__4191__auto___17211;
var G__17214 = cljs.core.count.call(null,c__4191__auto___17211);
var G__17215 = 0;
seq__17196_17200 = G__17212;
chunk__17197_17201 = G__17213;
count__17198_17202 = G__17214;
i__17199_17203 = G__17215;
continue;
}
} else
{var df_17216 = cljs.core.first.call(null,seq__17196_17210__$1);goog.dom.append(frag,df_17216);
{
var G__17217 = cljs.core.next.call(null,seq__17196_17210__$1);
var G__17218 = null;
var G__17219 = 0;
var G__17220 = 0;
seq__17196_17200 = G__17217;
chunk__17197_17201 = G__17218;
count__17198_17202 = G__17219;
i__17199_17203 = G__17220;
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
{var vec__17223 = enfocus.core.get_cached_dom.call(null,uri);var sym = cljs.core.nth.call(null,vec__17223,0,null);var tdom = cljs.core.nth.call(null,vec__17223,1,null);var dom = enfocus.core.create_hidden_dom.call(null,tdom);var tsnip = domina.nodes.call(null,enfocus.core.css_select.call(null,sym,dom,sel));var html_snip = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__17223,sym,tdom,dom,tsnip){
return (function (p1__17221_SHARP_){return p1__17221_SHARP_.outerHTML;
});})(vec__17223,sym,tdom,dom,tsnip))
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
});if(typeof enfocus.core.t17227 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t17227 = (function (trans,func,extr_multi_node,meta17228){
this.trans = trans;
this.func = func;
this.extr_multi_node = extr_multi_node;
this.meta17228 = meta17228;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t17227.cljs$lang$type = true;
enfocus.core.t17227.cljs$lang$ctorStr = "enfocus.core/t17227";
enfocus.core.t17227.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"enfocus.core/t17227");
});
enfocus.core.t17227.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t17227.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t17227.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t17227.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17229){var self__ = this;
var _17229__$1 = this;return self__.meta17228;
});
enfocus.core.t17227.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17229,meta17228__$1){var self__ = this;
var _17229__$1 = this;return (new enfocus.core.t17227(self__.trans,self__.func,self__.extr_multi_node,meta17228__$1));
});
enfocus.core.__GT_t17227 = (function __GT_t17227(trans__$1,func__$1,extr_multi_node__$1,meta17228){return (new enfocus.core.t17227(trans__$1,func__$1,extr_multi_node__$1,meta17228));
});
}
return (new enfocus.core.t17227(trans,func,extr_multi_node,null));
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
});if(typeof enfocus.core.t17237 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t17237 = (function (trans,func,multi_node_chain,meta17238){
this.trans = trans;
this.func = func;
this.multi_node_chain = multi_node_chain;
this.meta17238 = meta17238;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t17237.cljs$lang$type = true;
enfocus.core.t17237.cljs$lang$ctorStr = "enfocus.core/t17237";
enfocus.core.t17237.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"enfocus.core/t17237");
});
enfocus.core.t17237.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t17237.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t17237.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t17237.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17239){var self__ = this;
var _17239__$1 = this;return self__.meta17238;
});
enfocus.core.t17237.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17239,meta17238__$1){var self__ = this;
var _17239__$1 = this;return (new enfocus.core.t17237(self__.trans,self__.func,self__.multi_node_chain,meta17238__$1));
});
enfocus.core.__GT_t17237 = (function __GT_t17237(trans__$1,func__$1,multi_node_chain__$1,meta17238){return (new enfocus.core.t17237(trans__$1,func__$1,multi_node_chain__$1,meta17238));
});
}
return (new enfocus.core.t17237(trans,func,multi_node_chain,null));
});
var multi_node_chain__2 = (function (values,func){var trans = (function (nodes,chain){var vnodes = cljs.core.mapcat.call(null,(function (p1__17230_SHARP_){return domina.nodes.call(null,p1__17230_SHARP_);
}),values);var val = func.call(null,nodes,vnodes);if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.call(null,chain,nodes);
} else
{return val;
}
});if(typeof enfocus.core.t17240 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t17240 = (function (trans,func,values,multi_node_chain,meta17241){
this.trans = trans;
this.func = func;
this.values = values;
this.multi_node_chain = multi_node_chain;
this.meta17241 = meta17241;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t17240.cljs$lang$type = true;
enfocus.core.t17240.cljs$lang$ctorStr = "enfocus.core/t17240";
enfocus.core.t17240.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"enfocus.core/t17240");
});
enfocus.core.t17240.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t17240.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t17240.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t17240.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17242){var self__ = this;
var _17242__$1 = this;return self__.meta17241;
});
enfocus.core.t17240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17242,meta17241__$1){var self__ = this;
var _17242__$1 = this;return (new enfocus.core.t17240(self__.trans,self__.func,self__.values,self__.multi_node_chain,meta17241__$1));
});
enfocus.core.__GT_t17240 = (function __GT_t17240(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta17241){return (new enfocus.core.t17240(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta17241));
});
}
return (new enfocus.core.t17240(trans,func,values,multi_node_chain,null));
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
var content__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__17243_SHARP_,p2__17244_SHARP_){domina.destroy_children_BANG_.call(null,p1__17243_SHARP_);
return domina.append_BANG_.call(null,p1__17243_SHARP_,p2__17244_SHARP_);
}));
};
var content = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return content__delegate.call(this,values);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__17245){
var values = cljs.core.seq(arglist__17245);
return content__delegate(values);
});
content.cljs$core$IFn$_invoke$arity$variadic = content__delegate;
return content;
})()
;
/**
* Replaces the content of the element with the dom structure represented by the html string passed
*/
enfocus.core.html_content = (function html_content(txt){return enfocus.core.multi_node_chain.call(null,(function (p1__17246_SHARP_){return domina.set_html_BANG_.call(null,p1__17246_SHARP_,txt);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.set_attr = (function() { 
var set_attr__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__17247_SHARP_){var seq__17254 = cljs.core.seq.call(null,pairs);var chunk__17255 = null;var count__17256 = 0;var i__17257 = 0;while(true){
if((i__17257 < count__17256))
{var vec__17258 = cljs.core._nth.call(null,chunk__17255,i__17257);var name = cljs.core.nth.call(null,vec__17258,0,null);var value = cljs.core.nth.call(null,vec__17258,1,null);domina.set_attr_BANG_.call(null,p1__17247_SHARP_,name,value);
{
var G__17260 = seq__17254;
var G__17261 = chunk__17255;
var G__17262 = count__17256;
var G__17263 = (i__17257 + 1);
seq__17254 = G__17260;
chunk__17255 = G__17261;
count__17256 = G__17262;
i__17257 = G__17263;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17254);if(temp__4092__auto__)
{var seq__17254__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17254__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__17254__$1);{
var G__17264 = cljs.core.chunk_rest.call(null,seq__17254__$1);
var G__17265 = c__4191__auto__;
var G__17266 = cljs.core.count.call(null,c__4191__auto__);
var G__17267 = 0;
seq__17254 = G__17264;
chunk__17255 = G__17265;
count__17256 = G__17266;
i__17257 = G__17267;
continue;
}
} else
{var vec__17259 = cljs.core.first.call(null,seq__17254__$1);var name = cljs.core.nth.call(null,vec__17259,0,null);var value = cljs.core.nth.call(null,vec__17259,1,null);domina.set_attr_BANG_.call(null,p1__17247_SHARP_,name,value);
{
var G__17268 = cljs.core.next.call(null,seq__17254__$1);
var G__17269 = null;
var G__17270 = 0;
var G__17271 = 0;
seq__17254 = G__17268;
chunk__17255 = G__17269;
count__17256 = G__17270;
i__17257 = G__17271;
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
set_attr.cljs$lang$applyTo = (function (arglist__17272){
var values = cljs.core.seq(arglist__17272);
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
var remove_attr__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__17273_SHARP_){var seq__17278 = cljs.core.seq.call(null,values);var chunk__17279 = null;var count__17280 = 0;var i__17281 = 0;while(true){
if((i__17281 < count__17280))
{var name = cljs.core._nth.call(null,chunk__17279,i__17281);domina.remove_attr_BANG_.call(null,p1__17273_SHARP_,name);
{
var G__17282 = seq__17278;
var G__17283 = chunk__17279;
var G__17284 = count__17280;
var G__17285 = (i__17281 + 1);
seq__17278 = G__17282;
chunk__17279 = G__17283;
count__17280 = G__17284;
i__17281 = G__17285;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17278);if(temp__4092__auto__)
{var seq__17278__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17278__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__17278__$1);{
var G__17286 = cljs.core.chunk_rest.call(null,seq__17278__$1);
var G__17287 = c__4191__auto__;
var G__17288 = cljs.core.count.call(null,c__4191__auto__);
var G__17289 = 0;
seq__17278 = G__17286;
chunk__17279 = G__17287;
count__17280 = G__17288;
i__17281 = G__17289;
continue;
}
} else
{var name = cljs.core.first.call(null,seq__17278__$1);domina.remove_attr_BANG_.call(null,p1__17273_SHARP_,name);
{
var G__17290 = cljs.core.next.call(null,seq__17278__$1);
var G__17291 = null;
var G__17292 = 0;
var G__17293 = 0;
seq__17278 = G__17290;
chunk__17279 = G__17291;
count__17280 = G__17292;
i__17281 = G__17293;
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
remove_attr.cljs$lang$applyTo = (function (arglist__17294){
var values = cljs.core.seq(arglist__17294);
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
var set_prop__delegate = function (forms){return (function (node){var h = cljs.core.mapcat.call(null,(function (p__17297){var vec__17298 = p__17297;var n = cljs.core.nth.call(null,vec__17298,0,null);var v = cljs.core.nth.call(null,vec__17298,1,null);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v),cljs.core.name.call(null,n));
}),cljs.core.partition.call(null,2,forms));return goog.dom.setProperties(node,cljs.core.apply.call(null,cljs.core.js_obj,h));
});
};
var set_prop = function (var_args){
var forms = null;if (arguments.length > 0) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_prop__delegate.call(this,forms);};
set_prop.cljs$lang$maxFixedArity = 0;
set_prop.cljs$lang$applyTo = (function (arglist__17299){
var forms = cljs.core.seq(arglist__17299);
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
var add_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__17300_SHARP_){var seq__17305 = cljs.core.seq.call(null,values);var chunk__17306 = null;var count__17307 = 0;var i__17308 = 0;while(true){
if((i__17308 < count__17307))
{var val = cljs.core._nth.call(null,chunk__17306,i__17308);domina.add_class_BANG_.call(null,p1__17300_SHARP_,val);
{
var G__17309 = seq__17305;
var G__17310 = chunk__17306;
var G__17311 = count__17307;
var G__17312 = (i__17308 + 1);
seq__17305 = G__17309;
chunk__17306 = G__17310;
count__17307 = G__17311;
i__17308 = G__17312;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17305);if(temp__4092__auto__)
{var seq__17305__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17305__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__17305__$1);{
var G__17313 = cljs.core.chunk_rest.call(null,seq__17305__$1);
var G__17314 = c__4191__auto__;
var G__17315 = cljs.core.count.call(null,c__4191__auto__);
var G__17316 = 0;
seq__17305 = G__17313;
chunk__17306 = G__17314;
count__17307 = G__17315;
i__17308 = G__17316;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__17305__$1);domina.add_class_BANG_.call(null,p1__17300_SHARP_,val);
{
var G__17317 = cljs.core.next.call(null,seq__17305__$1);
var G__17318 = null;
var G__17319 = 0;
var G__17320 = 0;
seq__17305 = G__17317;
chunk__17306 = G__17318;
count__17307 = G__17319;
i__17308 = G__17320;
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
add_class.cljs$lang$applyTo = (function (arglist__17321){
var values = cljs.core.seq(arglist__17321);
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
var remove_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__17322_SHARP_){var seq__17327 = cljs.core.seq.call(null,values);var chunk__17328 = null;var count__17329 = 0;var i__17330 = 0;while(true){
if((i__17330 < count__17329))
{var val = cljs.core._nth.call(null,chunk__17328,i__17330);domina.remove_class_BANG_.call(null,p1__17322_SHARP_,val);
{
var G__17331 = seq__17327;
var G__17332 = chunk__17328;
var G__17333 = count__17329;
var G__17334 = (i__17330 + 1);
seq__17327 = G__17331;
chunk__17328 = G__17332;
count__17329 = G__17333;
i__17330 = G__17334;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17327);if(temp__4092__auto__)
{var seq__17327__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17327__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__17327__$1);{
var G__17335 = cljs.core.chunk_rest.call(null,seq__17327__$1);
var G__17336 = c__4191__auto__;
var G__17337 = cljs.core.count.call(null,c__4191__auto__);
var G__17338 = 0;
seq__17327 = G__17335;
chunk__17328 = G__17336;
count__17329 = G__17337;
i__17330 = G__17338;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__17327__$1);domina.remove_class_BANG_.call(null,p1__17322_SHARP_,val);
{
var G__17339 = cljs.core.next.call(null,seq__17327__$1);
var G__17340 = null;
var G__17341 = 0;
var G__17342 = 0;
seq__17327 = G__17339;
chunk__17328 = G__17340;
count__17329 = G__17341;
i__17330 = G__17342;
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
remove_class.cljs$lang$applyTo = (function (arglist__17343){
var values = cljs.core.seq(arglist__17343);
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
var set_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__17344_SHARP_){return domina.set_classes_BANG_.call(null,p1__17344_SHARP_,values);
}));
};
var set_class = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_class__delegate.call(this,values);};
set_class.cljs$lang$maxFixedArity = 0;
set_class.cljs$lang$applyTo = (function (arglist__17345){
var values = cljs.core.seq(arglist__17345);
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
var do__GT___delegate = function (forms){return (function (pnod){var seq__17350 = cljs.core.seq.call(null,forms);var chunk__17351 = null;var count__17352 = 0;var i__17353 = 0;while(true){
if((i__17353 < count__17352))
{var fun = cljs.core._nth.call(null,chunk__17351,i__17353);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__17354 = seq__17350;
var G__17355 = chunk__17351;
var G__17356 = count__17352;
var G__17357 = (i__17353 + 1);
seq__17350 = G__17354;
chunk__17351 = G__17355;
count__17352 = G__17356;
i__17353 = G__17357;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17350);if(temp__4092__auto__)
{var seq__17350__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17350__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__17350__$1);{
var G__17358 = cljs.core.chunk_rest.call(null,seq__17350__$1);
var G__17359 = c__4191__auto__;
var G__17360 = cljs.core.count.call(null,c__4191__auto__);
var G__17361 = 0;
seq__17350 = G__17358;
chunk__17351 = G__17359;
count__17352 = G__17360;
i__17353 = G__17361;
continue;
}
} else
{var fun = cljs.core.first.call(null,seq__17350__$1);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__17362 = cljs.core.next.call(null,seq__17350__$1);
var G__17363 = null;
var G__17364 = 0;
var G__17365 = 0;
seq__17350 = G__17362;
chunk__17351 = G__17363;
count__17352 = G__17364;
i__17353 = G__17365;
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
do__GT_.cljs$lang$applyTo = (function (arglist__17366){
var forms = cljs.core.seq(arglist__17366);
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
var append__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__17367_SHARP_,p2__17368_SHARP_){return domina.append_BANG_.call(null,p1__17367_SHARP_,p2__17368_SHARP_);
}));
};
var append = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return append__delegate.call(this,values);};
append.cljs$lang$maxFixedArity = 0;
append.cljs$lang$applyTo = (function (arglist__17369){
var values = cljs.core.seq(arglist__17369);
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
var prepend__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__17370_SHARP_,p2__17371_SHARP_){return domina.prepend_BANG_.call(null,p1__17370_SHARP_,p2__17371_SHARP_);
}));
};
var prepend = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return prepend__delegate.call(this,values);};
prepend.cljs$lang$maxFixedArity = 0;
prepend.cljs$lang$applyTo = (function (arglist__17372){
var values = cljs.core.seq(arglist__17372);
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
var before__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__17373_SHARP_,p2__17374_SHARP_){return domina.insert_before_BANG_.call(null,p1__17373_SHARP_,p2__17374_SHARP_);
}));
};
var before = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return before__delegate.call(this,values);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__17375){
var values = cljs.core.seq(arglist__17375);
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
var after__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__17376_SHARP_,p2__17377_SHARP_){return domina.insert_after_BANG_.call(null,p1__17376_SHARP_,p2__17377_SHARP_);
}));
};
var after = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return after__delegate.call(this,values);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__17378){
var values = cljs.core.seq(arglist__17378);
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
var substitute__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__17379_SHARP_,p2__17380_SHARP_){return domina.swap_content_BANG_.call(null,p1__17379_SHARP_,p2__17380_SHARP_);
}));
};
var substitute = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return substitute__delegate.call(this,values);};
substitute.cljs$lang$maxFixedArity = 0;
substitute.cljs$lang$applyTo = (function (arglist__17381){
var values = cljs.core.seq(arglist__17381);
return substitute__delegate(values);
});
substitute.cljs$core$IFn$_invoke$arity$variadic = substitute__delegate;
return substitute;
})()
;
/**
* removes the selected nodes from the dom
*/
enfocus.core.remove_node = (function remove_node(){return enfocus.core.multi_node_chain.call(null,(function (p1__17382_SHARP_){return domina.detach_BANG_.call(null,p1__17382_SHARP_);
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
var set_style__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__17383_SHARP_){var seq__17390 = cljs.core.seq.call(null,pairs);var chunk__17391 = null;var count__17392 = 0;var i__17393 = 0;while(true){
if((i__17393 < count__17392))
{var vec__17394 = cljs.core._nth.call(null,chunk__17391,i__17393);var name = cljs.core.nth.call(null,vec__17394,0,null);var value = cljs.core.nth.call(null,vec__17394,1,null);domina.set_style_BANG_.call(null,p1__17383_SHARP_,name,value);
{
var G__17396 = seq__17390;
var G__17397 = chunk__17391;
var G__17398 = count__17392;
var G__17399 = (i__17393 + 1);
seq__17390 = G__17396;
chunk__17391 = G__17397;
count__17392 = G__17398;
i__17393 = G__17399;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17390);if(temp__4092__auto__)
{var seq__17390__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17390__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__17390__$1);{
var G__17400 = cljs.core.chunk_rest.call(null,seq__17390__$1);
var G__17401 = c__4191__auto__;
var G__17402 = cljs.core.count.call(null,c__4191__auto__);
var G__17403 = 0;
seq__17390 = G__17400;
chunk__17391 = G__17401;
count__17392 = G__17402;
i__17393 = G__17403;
continue;
}
} else
{var vec__17395 = cljs.core.first.call(null,seq__17390__$1);var name = cljs.core.nth.call(null,vec__17395,0,null);var value = cljs.core.nth.call(null,vec__17395,1,null);domina.set_style_BANG_.call(null,p1__17383_SHARP_,name,value);
{
var G__17404 = cljs.core.next.call(null,seq__17390__$1);
var G__17405 = null;
var G__17406 = 0;
var G__17407 = 0;
seq__17390 = G__17404;
chunk__17391 = G__17405;
count__17392 = G__17406;
i__17393 = G__17407;
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
set_style.cljs$lang$applyTo = (function (arglist__17408){
var values = cljs.core.seq(arglist__17408);
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
remove_style.cljs$lang$applyTo = (function (arglist__17409){
var values = cljs.core.seq(arglist__17409);
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
enfocus.core.set_data = (function set_data(ky,val){return enfocus.core.multi_node_chain.call(null,(function (p1__17410_SHARP_){return domina.set_data_BANG_.call(null,p1__17410_SHARP_,ky,val);
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
delay.cljs$lang$applyTo = (function (arglist__17411){
var ttime = cljs.core.first(arglist__17411);
var funcs = cljs.core.rest(arglist__17411);
return delay__delegate(ttime,funcs);
});
delay.cljs$core$IFn$_invoke$arity$variadic = delay__delegate;
return delay;
})()
;
/**
* replaces entries like the following ${var1} in attributes and text
*/
enfocus.core.replace_vars = (function replace_vars(vars){var rep_str = (function rep_str(text){return clojure.string.replace.call(null,text,/\$\{\s*(\S+)\s*}/,(function (p1__17413_SHARP_,p2__17412_SHARP_){return vars.call(null,cljs.core.keyword.call(null,p2__17412_SHARP_));
}));
});
return (function rep_node(pnod){if(cljs.core.truth_(pnod.attributes))
{var seq__17438_17446 = cljs.core.seq.call(null,cljs.core.range.call(null,pnod.attributes.length));var chunk__17439_17447 = null;var count__17440_17448 = 0;var i__17441_17449 = 0;while(true){
if((i__17441_17449 < count__17440_17448))
{var idx_17450 = cljs.core._nth.call(null,chunk__17439_17447,i__17441_17449);var attr_17451 = pnod.attributes.item(idx_17450);if(cljs.core.truth_(attr_17451.specified))
{attr_17451.value = rep_str.call(null,attr_17451.value);
} else
{}
{
var G__17452 = seq__17438_17446;
var G__17453 = chunk__17439_17447;
var G__17454 = count__17440_17448;
var G__17455 = (i__17441_17449 + 1);
seq__17438_17446 = G__17452;
chunk__17439_17447 = G__17453;
count__17440_17448 = G__17454;
i__17441_17449 = G__17455;
continue;
}
} else
{var temp__4092__auto___17456 = cljs.core.seq.call(null,seq__17438_17446);if(temp__4092__auto___17456)
{var seq__17438_17457__$1 = temp__4092__auto___17456;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17438_17457__$1))
{var c__4191__auto___17458 = cljs.core.chunk_first.call(null,seq__17438_17457__$1);{
var G__17459 = cljs.core.chunk_rest.call(null,seq__17438_17457__$1);
var G__17460 = c__4191__auto___17458;
var G__17461 = cljs.core.count.call(null,c__4191__auto___17458);
var G__17462 = 0;
seq__17438_17446 = G__17459;
chunk__17439_17447 = G__17460;
count__17440_17448 = G__17461;
i__17441_17449 = G__17462;
continue;
}
} else
{var idx_17463 = cljs.core.first.call(null,seq__17438_17457__$1);var attr_17464 = pnod.attributes.item(idx_17463);if(cljs.core.truth_(attr_17464.specified))
{attr_17464.value = rep_str.call(null,attr_17464.value);
} else
{}
{
var G__17465 = cljs.core.next.call(null,seq__17438_17457__$1);
var G__17466 = null;
var G__17467 = 0;
var G__17468 = 0;
seq__17438_17446 = G__17465;
chunk__17439_17447 = G__17466;
count__17440_17448 = G__17467;
i__17441_17449 = G__17468;
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
{var seq__17442 = cljs.core.seq.call(null,enfocus.core.nodes__GT_coll.call(null,pnod.childNodes));var chunk__17443 = null;var count__17444 = 0;var i__17445 = 0;while(true){
if((i__17445 < count__17444))
{var cnode = cljs.core._nth.call(null,chunk__17443,i__17445);rep_node.call(null,cnode);
{
var G__17469 = seq__17442;
var G__17470 = chunk__17443;
var G__17471 = count__17444;
var G__17472 = (i__17445 + 1);
seq__17442 = G__17469;
chunk__17443 = G__17470;
count__17444 = G__17471;
i__17445 = G__17472;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17442);if(temp__4092__auto__)
{var seq__17442__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17442__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__17442__$1);{
var G__17473 = cljs.core.chunk_rest.call(null,seq__17442__$1);
var G__17474 = c__4191__auto__;
var G__17475 = cljs.core.count.call(null,c__4191__auto__);
var G__17476 = 0;
seq__17442 = G__17473;
chunk__17443 = G__17474;
count__17444 = G__17475;
i__17445 = G__17476;
continue;
}
} else
{var cnode = cljs.core.first.call(null,seq__17442__$1);rep_node.call(null,cnode);
{
var G__17477 = cljs.core.next.call(null,seq__17442__$1);
var G__17478 = null;
var G__17479 = 0;
var G__17480 = 0;
seq__17442 = G__17477;
chunk__17443 = G__17478;
count__17444 = G__17479;
i__17445 = G__17480;
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
{var vec__17490 = node_spec;var tag = cljs.core.nth.call(null,vec__17490,0,null);var vec__17491 = cljs.core.nthnext.call(null,vec__17490,1);var m = cljs.core.nth.call(null,vec__17491,0,null);var ms = cljs.core.nthnext.call(null,vec__17491,1);var more = vec__17491;var _ = enfocus.core.log_debug.call(null,cljs.core.pr_str.call(null,tag,m,ms));var vec__17492 = cljs.core.name.call(null,tag).split(/(?=[#.])/);var tag_name = cljs.core.nth.call(null,vec__17492,0,null);var segments = cljs.core.nthnext.call(null,vec__17492,1);var id = cljs.core.some.call(null,((function (vec__17490,tag,vec__17491,m,ms,more,_,vec__17492,tag_name,segments){
return (function (seg){if(cljs.core._EQ_.call(null,"#",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__17490,tag,vec__17491,m,ms,more,_,vec__17492,tag_name,segments))
,segments);var classes = cljs.core.keep.call(null,((function (vec__17490,tag,vec__17491,m,ms,more,_,vec__17492,tag_name,segments,id){
return (function (seg){if(cljs.core._EQ_.call(null,".",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__17490,tag,vec__17491,m,ms,more,_,vec__17492,tag_name,segments,id))
,segments);var attrs = ((cljs.core.map_QMARK_.call(null,m))?m:cljs.core.PersistentArrayMap.EMPTY);var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"id","id",1013907597),id):attrs);var attrs__$2 = ((!(cljs.core.empty_QMARK_.call(null,classes)))?cljs.core.assoc.call(null,attrs__$1,new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",classes))):attrs__$1);var content = cljs.core.flatten.call(null,cljs.core.map.call(null,html,((cljs.core.map_QMARK_.call(null,m))?ms:more)));var node = document.createElement(tag_name);var seq__17493_17499 = cljs.core.seq.call(null,attrs__$2);var chunk__17494_17500 = null;var count__17495_17501 = 0;var i__17496_17502 = 0;while(true){
if((i__17496_17502 < count__17495_17501))
{var vec__17497_17503 = cljs.core._nth.call(null,chunk__17494_17500,i__17496_17502);var key_17504 = cljs.core.nth.call(null,vec__17497_17503,0,null);var val_17505 = cljs.core.nth.call(null,vec__17497_17503,1,null);node.setAttribute(cljs.core.name.call(null,key_17504),val_17505);
{
var G__17506 = seq__17493_17499;
var G__17507 = chunk__17494_17500;
var G__17508 = count__17495_17501;
var G__17509 = (i__17496_17502 + 1);
seq__17493_17499 = G__17506;
chunk__17494_17500 = G__17507;
count__17495_17501 = G__17508;
i__17496_17502 = G__17509;
continue;
}
} else
{var temp__4092__auto___17510 = cljs.core.seq.call(null,seq__17493_17499);if(temp__4092__auto___17510)
{var seq__17493_17511__$1 = temp__4092__auto___17510;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17493_17511__$1))
{var c__4191__auto___17512 = cljs.core.chunk_first.call(null,seq__17493_17511__$1);{
var G__17513 = cljs.core.chunk_rest.call(null,seq__17493_17511__$1);
var G__17514 = c__4191__auto___17512;
var G__17515 = cljs.core.count.call(null,c__4191__auto___17512);
var G__17516 = 0;
seq__17493_17499 = G__17513;
chunk__17494_17500 = G__17514;
count__17495_17501 = G__17515;
i__17496_17502 = G__17516;
continue;
}
} else
{var vec__17498_17517 = cljs.core.first.call(null,seq__17493_17511__$1);var key_17518 = cljs.core.nth.call(null,vec__17498_17517,0,null);var val_17519 = cljs.core.nth.call(null,vec__17498_17517,1,null);node.setAttribute(cljs.core.name.call(null,key_17518),val_17519);
{
var G__17520 = cljs.core.next.call(null,seq__17493_17511__$1);
var G__17521 = null;
var G__17522 = 0;
var G__17523 = 0;
seq__17493_17499 = G__17520;
chunk__17494_17500 = G__17521;
count__17495_17501 = G__17522;
i__17496_17502 = G__17523;
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
return (function (p1__17524_SHARP_){return p1__17524_SHARP_.selected;
});})(nm,onodes))
,onodes);return enfocus.core.merge_form_val.call(null,col,nm,cljs.core.map.call(null,(function (p1__17525_SHARP_){return p1__17525_SHARP_.value;
}),opts));
} else
{return col;
}
});
/**
* returns a map of the form values tied to name of input fields.
* {:name1 'value1' name2 ('select1' 'select2')}
*/
enfocus.core.read_form = (function read_form(){return enfocus.core.extr_multi_node.call(null,(function (node){var inputs = node.elements;return cljs.core.reduce.call(null,(function (p1__17527_SHARP_,p2__17526_SHARP_){var G__17530 = p2__17526_SHARP_.nodeName;if(cljs.core._EQ_.call(null,"BUTTON",G__17530))
{return enfocus.core.read_simple_input.call(null,p2__17526_SHARP_,p1__17527_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"SELECT",G__17530))
{return enfocus.core.read_select_input.call(null,p2__17526_SHARP_,p1__17527_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"TEXTAREA",G__17530))
{return enfocus.core.read_simple_input.call(null,p2__17526_SHARP_,p1__17527_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"INPUT",G__17530))
{var G__17531 = p2__17526_SHARP_.type;if(cljs.core._EQ_.call(null,"radio",G__17531))
{return enfocus.core.read_checked_input.call(null,p2__17526_SHARP_,p1__17527_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"checkbox",G__17531))
{return enfocus.core.read_checked_input.call(null,p2__17526_SHARP_,p1__17527_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"submit",G__17531))
{return enfocus.core.read_simple_input.call(null,p2__17526_SHARP_,p1__17527_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"reset",G__17531))
{return enfocus.core.read_simple_input.call(null,p2__17526_SHARP_,p1__17527_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"button",G__17531))
{return enfocus.core.read_simple_input.call(null,p2__17526_SHARP_,p1__17527_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"password",G__17531))
{return enfocus.core.read_simple_input.call(null,p2__17526_SHARP_,p1__17527_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"hidden",G__17531))
{return enfocus.core.read_simple_input.call(null,p2__17526_SHARP_,p1__17527_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"text",G__17531))
{return enfocus.core.read_simple_input.call(null,p2__17526_SHARP_,p1__17527_SHARP_);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return p1__17527_SHARP_;
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
{return p1__17527_SHARP_;
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
var create_sel_str__2 = (function (id_mask_sym,css_sel){return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__17532_SHARP_){if((p1__17532_SHARP_ instanceof cljs.core.Symbol))
{return enfocus.core.css_syms.call(null,p1__17532_SHARP_);
} else
{if((p1__17532_SHARP_ instanceof cljs.core.Keyword))
{return [cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,p1__17532_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else
{if(cljs.core.vector_QMARK_.call(null,p1__17532_SHARP_))
{return create_sel_str.call(null,p1__17532_SHARP_);
} else
{if(typeof p1__17532_SHARP_ === 'string')
{return p1__17532_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
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
var i_at__delegate = function (id_mask,node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var G__17541 = node;if(G__17541)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__17541.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__17541.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__17541);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__17541);
}
})();if((!(sel_QMARK_)) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{var vec__17542 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__17542,0,null);var trans__$1 = cljs.core.nth.call(null,vec__17542,1,null);var seq__17543 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,trans__$1));var chunk__17544 = null;var count__17545 = 0;var i__17546 = 0;while(true){
if((i__17546 < count__17545))
{var vec__17547 = cljs.core._nth.call(null,chunk__17544,i__17546);var sel = cljs.core.nth.call(null,vec__17547,0,null);var t = cljs.core.nth.call(null,vec__17547,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__17549 = seq__17543;
var G__17550 = chunk__17544;
var G__17551 = count__17545;
var G__17552 = (i__17546 + 1);
seq__17543 = G__17549;
chunk__17544 = G__17550;
count__17545 = G__17551;
i__17546 = G__17552;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17543);if(temp__4092__auto__)
{var seq__17543__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17543__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__17543__$1);{
var G__17553 = cljs.core.chunk_rest.call(null,seq__17543__$1);
var G__17554 = c__4191__auto__;
var G__17555 = cljs.core.count.call(null,c__4191__auto__);
var G__17556 = 0;
seq__17543 = G__17553;
chunk__17544 = G__17554;
count__17545 = G__17555;
i__17546 = G__17556;
continue;
}
} else
{var vec__17548 = cljs.core.first.call(null,seq__17543__$1);var sel = cljs.core.nth.call(null,vec__17548,0,null);var t = cljs.core.nth.call(null,vec__17548,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__17557 = cljs.core.next.call(null,seq__17543__$1);
var G__17558 = null;
var G__17559 = 0;
var G__17560 = 0;
seq__17543 = G__17557;
chunk__17544 = G__17558;
count__17545 = G__17559;
i__17546 = G__17560;
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
i_at.cljs$lang$applyTo = (function (arglist__17561){
var id_mask = cljs.core.first(arglist__17561);
arglist__17561 = cljs.core.next(arglist__17561);
var node = cljs.core.first(arglist__17561);
var trans = cljs.core.rest(arglist__17561);
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
at.cljs$lang$applyTo = (function (arglist__17562){
var node = cljs.core.first(arglist__17562);
var trans = cljs.core.rest(arglist__17562);
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
var from__delegate = function (node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var G__17567 = node;if(G__17567)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__17567.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__17567.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__17567);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__17567);
}
})();if((sel_QMARK_) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),enfocus.core.select.call(null,node));
} else
{if(cljs.core._EQ_.call(null,1,cnt))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var vec__17568 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__17568,0,null);var trans__$1 = cljs.core.nth.call(null,vec__17568,1,null);return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p__17569){var vec__17570 = p__17569;var ky = cljs.core.nth.call(null,vec__17570,0,null);var sel = cljs.core.nth.call(null,vec__17570,1,null);var ext = cljs.core.nth.call(null,vec__17570,2,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.call(null,ext,enfocus.core.select.call(null,sel,node__$1,""))], null);
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
from.cljs$lang$applyTo = (function (arglist__17571){
var node = cljs.core.first(arglist__17571);
var trans = cljs.core.rest(arglist__17571);
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
var G__17572 = null;
var G__17572__1 = (function (this$){return enfocus.core.select.call(null,this$,document,"");
});
var G__17572__2 = (function (this$,root){return enfocus.core.select.call(null,this$,root,"");
});
var G__17572__3 = (function (this$,root,id_mask){return enfocus.core.css_select.call(null,id_mask,root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
});
G__17572 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__17572__1.call(this,this$);
case 2:
return G__17572__2.call(this,this$,root);
case 3:
return G__17572__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__17572;
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
var G__17573 = null;
var G__17573__1 = (function (this$){return enfocus.core.select.call(null,this$,document,"");
});
var G__17573__2 = (function (this$,root){return enfocus.core.select.call(null,this$,root,"");
});
var G__17573__3 = (function (this$,root,id_mask){return this$.call(null,root,id_mask);
});
G__17573 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__17573__1.call(this,this$);
case 2:
return G__17573__2.call(this,this$,root);
case 3:
return G__17573__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__17573;
})()
);
(enfocus.core.ITransform["function"] = true);
(enfocus.core.apply_transform["function"] = (function() {
var G__17574 = null;
var G__17574__2 = (function (trans,nodes){return cljs.core.doall.call(null,cljs.core.map.call(null,trans,enfocus.core.nodes__GT_coll.call(null,nodes)));
});
var G__17574__3 = (function (trans,nodes,chain){var pnod_col = enfocus.core.nodes__GT_coll.call(null,nodes);var val = cljs.core.doall.call(null,cljs.core.map.call(null,trans,pnod_col));if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.call(null,chain,nodes);
} else
{return val;
}
});
G__17574 = function(trans,nodes,chain){
switch(arguments.length){
case 2:
return G__17574__2.call(this,trans,nodes);
case 3:
return G__17574__3.call(this,trans,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__17574;
})()
);

//# sourceMappingURL=core.js.map