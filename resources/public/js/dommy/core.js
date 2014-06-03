// Compiled by ClojureScript 0.0-2173
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('dommy.template');
goog.require('dommy.template');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.core.has_class_QMARK_ = dommy.attrs.has_class_QMARK_;
dommy.core.add_class_BANG_ = dommy.attrs.add_class_BANG_;
dommy.core.remove_class_BANG_ = dommy.attrs.remove_class_BANG_;
dommy.core.toggle_class_BANG_ = dommy.attrs.toggle_class_BANG_;
dommy.core.set_attr_BANG_ = dommy.attrs.set_attr_BANG_;
dommy.core.set_style_BANG_ = dommy.attrs.set_style_BANG_;
dommy.core.set_px_BANG_ = dommy.attrs.set_px_BANG_;
dommy.core.px = dommy.attrs.px;
dommy.core.style_str = dommy.attrs.style_str;
dommy.core.style = dommy.attrs.style;
dommy.core.remove_attr_BANG_ = dommy.attrs.remove_attr_BANG_;
dommy.core.toggle_attr_BANG_ = dommy.attrs.toggle_attr_BANG_;
dommy.core.attr = dommy.attrs.attr;
dommy.core.hidden_QMARK_ = dommy.attrs.hidden_QMARK_;
dommy.core.toggle_BANG_ = dommy.attrs.toggle_BANG_;
dommy.core.hide_BANG_ = dommy.attrs.hide_BANG_;
dommy.core.show_BANG_ = dommy.attrs.show_BANG_;
dommy.core.bounding_client_rect = dommy.attrs.bounding_client_rect;
dommy.core.scroll_into_view = dommy.attrs.scroll_into_view;
dommy.core.dissoc_in = dommy.utils.dissoc_in;
dommy.core.__GT_Array = dommy.utils.__GT_Array;
dommy.core.set_html_BANG_ = (function set_html_BANG_(elem,html){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);elem__$1.innerHTML = html;
return elem__$1;
});
dommy.core.html = (function html(elem){return dommy.template.__GT_node_like.call(null,elem).innerHTML;
});
dommy.core.set_text_BANG_ = (function set_text_BANG_(elem,text){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var prop = (cljs.core.truth_(elem__$1.textContent)?"textContent":"innerText");(elem__$1[prop] = text);
return elem__$1;
});
dommy.core.text = (function text(elem){var or__3443__auto__ = elem.textContent;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return elem.innerText;
}
});
dommy.core.value = (function value(elem){return dommy.template.__GT_node_like.call(null,elem).value;
});
dommy.core.set_value_BANG_ = (function set_value_BANG_(elem,value){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);elem__$1.value = value;
return elem__$1;
});
/**
* append `child` to `parent`. 'parent' and 'child' should be node-like
* (work with dommy.template/->node-like). The node-like projection
* of parent is returned after appending child.
* @param {...*} var_args
*/
dommy.core.append_BANG_ = (function() {
var append_BANG_ = null;
var append_BANG___2 = (function (parent,child){var G__14143 = dommy.template.__GT_node_like.call(null,parent);G__14143.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__14143;
});
var append_BANG___3 = (function() { 
var G__14148__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__14144_14149 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__14145_14150 = null;var count__14146_14151 = 0;var i__14147_14152 = 0;while(true){
if((i__14147_14152 < count__14146_14151))
{var c_14153 = cljs.core._nth.call(null,chunk__14145_14150,i__14147_14152);append_BANG_.call(null,parent__$1,c_14153);
{
var G__14154 = seq__14144_14149;
var G__14155 = chunk__14145_14150;
var G__14156 = count__14146_14151;
var G__14157 = (i__14147_14152 + 1);
seq__14144_14149 = G__14154;
chunk__14145_14150 = G__14155;
count__14146_14151 = G__14156;
i__14147_14152 = G__14157;
continue;
}
} else
{var temp__4092__auto___14158 = cljs.core.seq.call(null,seq__14144_14149);if(temp__4092__auto___14158)
{var seq__14144_14159__$1 = temp__4092__auto___14158;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14144_14159__$1))
{var c__4191__auto___14160 = cljs.core.chunk_first.call(null,seq__14144_14159__$1);{
var G__14161 = cljs.core.chunk_rest.call(null,seq__14144_14159__$1);
var G__14162 = c__4191__auto___14160;
var G__14163 = cljs.core.count.call(null,c__4191__auto___14160);
var G__14164 = 0;
seq__14144_14149 = G__14161;
chunk__14145_14150 = G__14162;
count__14146_14151 = G__14163;
i__14147_14152 = G__14164;
continue;
}
} else
{var c_14165 = cljs.core.first.call(null,seq__14144_14159__$1);append_BANG_.call(null,parent__$1,c_14165);
{
var G__14166 = cljs.core.next.call(null,seq__14144_14159__$1);
var G__14167 = null;
var G__14168 = 0;
var G__14169 = 0;
seq__14144_14149 = G__14166;
chunk__14145_14150 = G__14167;
count__14146_14151 = G__14168;
i__14147_14152 = G__14169;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__14148 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14148__delegate.call(this,parent,child,more_children);};
G__14148.cljs$lang$maxFixedArity = 2;
G__14148.cljs$lang$applyTo = (function (arglist__14170){
var parent = cljs.core.first(arglist__14170);
arglist__14170 = cljs.core.next(arglist__14170);
var child = cljs.core.first(arglist__14170);
var more_children = cljs.core.rest(arglist__14170);
return G__14148__delegate(parent,child,more_children);
});
G__14148.cljs$core$IFn$_invoke$arity$variadic = G__14148__delegate;
return G__14148;
})()
;
append_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return append_BANG___2.call(this,parent,child);
default:
return append_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
append_BANG_.cljs$lang$maxFixedArity = 2;
append_BANG_.cljs$lang$applyTo = append_BANG___3.cljs$lang$applyTo;
append_BANG_.cljs$core$IFn$_invoke$arity$2 = append_BANG___2;
append_BANG_.cljs$core$IFn$_invoke$arity$variadic = append_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return append_BANG_;
})()
;
/**
* prepend `child` to `parent`, both node-like
* return ->node-like projection of `parent`
* @param {...*} var_args
*/
dommy.core.prepend_BANG_ = (function() {
var prepend_BANG_ = null;
var prepend_BANG___2 = (function (parent,child){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);return parent__$1.insertBefore(dommy.template.__GT_node_like.call(null,child),parent__$1.firstChild);
});
var prepend_BANG___3 = (function() { 
var G__14179__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__14175_14180 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__14176_14181 = null;var count__14177_14182 = 0;var i__14178_14183 = 0;while(true){
if((i__14178_14183 < count__14177_14182))
{var c_14184 = cljs.core._nth.call(null,chunk__14176_14181,i__14178_14183);prepend_BANG_.call(null,parent__$1,c_14184);
{
var G__14185 = seq__14175_14180;
var G__14186 = chunk__14176_14181;
var G__14187 = count__14177_14182;
var G__14188 = (i__14178_14183 + 1);
seq__14175_14180 = G__14185;
chunk__14176_14181 = G__14186;
count__14177_14182 = G__14187;
i__14178_14183 = G__14188;
continue;
}
} else
{var temp__4092__auto___14189 = cljs.core.seq.call(null,seq__14175_14180);if(temp__4092__auto___14189)
{var seq__14175_14190__$1 = temp__4092__auto___14189;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14175_14190__$1))
{var c__4191__auto___14191 = cljs.core.chunk_first.call(null,seq__14175_14190__$1);{
var G__14192 = cljs.core.chunk_rest.call(null,seq__14175_14190__$1);
var G__14193 = c__4191__auto___14191;
var G__14194 = cljs.core.count.call(null,c__4191__auto___14191);
var G__14195 = 0;
seq__14175_14180 = G__14192;
chunk__14176_14181 = G__14193;
count__14177_14182 = G__14194;
i__14178_14183 = G__14195;
continue;
}
} else
{var c_14196 = cljs.core.first.call(null,seq__14175_14190__$1);prepend_BANG_.call(null,parent__$1,c_14196);
{
var G__14197 = cljs.core.next.call(null,seq__14175_14190__$1);
var G__14198 = null;
var G__14199 = 0;
var G__14200 = 0;
seq__14175_14180 = G__14197;
chunk__14176_14181 = G__14198;
count__14177_14182 = G__14199;
i__14178_14183 = G__14200;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__14179 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14179__delegate.call(this,parent,child,more_children);};
G__14179.cljs$lang$maxFixedArity = 2;
G__14179.cljs$lang$applyTo = (function (arglist__14201){
var parent = cljs.core.first(arglist__14201);
arglist__14201 = cljs.core.next(arglist__14201);
var child = cljs.core.first(arglist__14201);
var more_children = cljs.core.rest(arglist__14201);
return G__14179__delegate(parent,child,more_children);
});
G__14179.cljs$core$IFn$_invoke$arity$variadic = G__14179__delegate;
return G__14179;
})()
;
prepend_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return prepend_BANG___2.call(this,parent,child);
default:
return prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prepend_BANG_.cljs$lang$maxFixedArity = 2;
prepend_BANG_.cljs$lang$applyTo = prepend_BANG___3.cljs$lang$applyTo;
prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = prepend_BANG___2;
prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return prepend_BANG_;
})()
;
/**
* insert `node` before `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_before_BANG_ = (function insert_before_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);if(cljs.core.truth_(other__$1.parentNode))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",499016324,null),new cljs.core.Symbol(null,"other","other",-1534461751,null))))].join('')));
}
other__$1.parentNode.insertBefore(actual_node,other__$1);
return actual_node;
});
/**
* insert `node` after `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___14202 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___14202))
{var next_14203 = temp__4090__auto___14202;parent.insertBefore(actual_node,next_14203);
} else
{parent.appendChild(actual_node);
}
return actual_node;
});
/**
* replace `elem` with `new`, both node-like, return node-like projection of new.
* node-like projection of elem must have parent.
*/
dommy.core.replace_BANG_ = (function replace_BANG_(elem,new$){var new$__$1 = dommy.template.__GT_node_like.call(null,new$);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(elem__$1.parentNode))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",499016324,null),new cljs.core.Symbol(null,"elem","elem",-1637415608,null))))].join('')));
}
elem__$1.parentNode.replaceChild(new$__$1,elem__$1);
return new$__$1;
});
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__14205 = dommy.template.__GT_node_like.call(null,parent);G__14205.innerHTML = "";
dommy.core.append_BANG_.call(null,G__14205,node_like);
return G__14205;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__14207 = elem__$1.parentNode;G__14207.removeChild(elem__$1);
return G__14207;
});
/**
* clears all children from `elem`
*/
dommy.core.clear_BANG_ = (function clear_BANG_(elem){return dommy.template.__GT_node_like.call(null,elem).innerHTML = "";
});
dommy.core.selector = (function selector(data){if(cljs.core.coll_QMARK_.call(null,data))
{return clojure.string.join.call(null," ",cljs.core.map.call(null,selector,data));
} else
{if((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))
{return cljs.core.name.call(null,data);
} else
{return null;
}
}
});
dommy.core.selector_map = (function selector_map(template,key_selectors_map){var container = dommy.template.__GT_node_like.call(null,template);if(!(cljs.core.contains_QMARK_.call(null,key_selectors_map,new cljs.core.Keyword(null,"container","container",602947571))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-2051487815,null),new cljs.core.Symbol(null,"key-selectors-map","key-selectors-map",19054414,null),new cljs.core.Keyword(null,"container","container",602947571)))))].join('')));
}
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__14213){var vec__14214 = p__14213;var k = cljs.core.nth.call(null,vec__14214,0,null);var v = cljs.core.nth.call(null,vec__14214,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t14215 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t14215 = (function (v,k,vec__14214,p__14213,container,key_selectors_map,template,selector_map,meta14216){
this.v = v;
this.k = k;
this.vec__14214 = vec__14214;
this.p__14213 = p__14213;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta14216 = meta14216;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t14215.cljs$lang$type = true;
dommy.core.t14215.cljs$lang$ctorStr = "dommy.core/t14215";
dommy.core.t14215.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"dommy.core/t14215");
});
dommy.core.t14215.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t14215.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14217){var self__ = this;
var _14217__$1 = this;return self__.meta14216;
});
dommy.core.t14215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14217,meta14216__$1){var self__ = this;
var _14217__$1 = this;return (new dommy.core.t14215(self__.v,self__.k,self__.vec__14214,self__.p__14213,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta14216__$1));
});
dommy.core.__GT_t14215 = (function __GT_t14215(v__$1,k__$1,vec__14214__$1,p__14213__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta14216){return (new dommy.core.t14215(v__$1,k__$1,vec__14214__$1,p__14213__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta14216));
});
}
return (new dommy.core.t14215(v,k,vec__14214,p__14213,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__14218_SHARP_){return p1__14218_SHARP_.parentNode;
}),dommy.template.__GT_node_like.call(null,elem)));
});
/**
* returns a predicate on nodes that match `selector` at the
* time of this `matches-pred` call (may return outdated results
* if you fuck with the DOM)
*/
dommy.core.matches_pred = (function() {
var matches_pred = null;
var matches_pred__1 = (function (selector){return matches_pred.call(null,document,selector);
});
var matches_pred__2 = (function (base,selector){var matches = dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,dommy.template.__GT_node_like.call(null,base)).querySelectorAll(dommy.core.selector.call(null,selector)));return (function (elem){return (matches.indexOf(elem) >= 0);
});
});
matches_pred = function(base,selector){
switch(arguments.length){
case 1:
return matches_pred__1.call(this,base);
case 2:
return matches_pred__2.call(this,base,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
matches_pred.cljs$core$IFn$_invoke$arity$1 = matches_pred__1;
matches_pred.cljs$core$IFn$_invoke$arity$2 = matches_pred__2;
return matches_pred;
})()
;
/**
* closest ancestor of `node` (up to `base`, if provided)
* that matches `selector`
*/
dommy.core.closest = (function() {
var closest = null;
var closest__2 = (function (elem,selector){return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,selector),dommy.core.ancestor_nodes.call(null,dommy.template.__GT_node_like.call(null,elem))));
});
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__14219_SHARP_){return !((p1__14219_SHARP_ === base__$1));
}),dommy.core.ancestor_nodes.call(null,elem__$1))));
});
closest = function(base,elem,selector){
switch(arguments.length){
case 2:
return closest__2.call(this,base,elem);
case 3:
return closest__3.call(this,base,elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
closest.cljs$core$IFn$_invoke$arity$2 = closest__2;
closest.cljs$core$IFn$_invoke$arity$3 = closest__3;
return closest;
})()
;
/**
* is `descendant` a descendant of `ancestor`?
*/
dommy.core.descendant_QMARK_ = (function descendant_QMARK_(descendant,ancestor){var descendant__$1 = dommy.template.__GT_node_like.call(null,descendant);var ancestor__$1 = dommy.template.__GT_node_like.call(null,ancestor);if(cljs.core.truth_(ancestor__$1.contains))
{return ancestor__$1.contains(descendant__$1);
} else
{if(cljs.core.truth_(ancestor__$1.compareDocumentPosition))
{return ((ancestor__$1.compareDocumentPosition(descendant__$1) & (1 << 4)) != 0);
} else
{return null;
}
}
});
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__14220){var vec__14221 = p__14220;var special_mouse_event = cljs.core.nth.call(null,vec__14221,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__14221,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3443__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__3431__auto__ = related_target;if(cljs.core.truth_(and__3431__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__3431__auto__;
}
})()))
{return null;
} else
{return f.call(null,event);
}
});
})], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",2027084997),new cljs.core.Keyword(null,"mouseover","mouseover",1601081963),new cljs.core.Keyword(null,"mouseleave","mouseleave",2033263780),new cljs.core.Keyword(null,"mouseout","mouseout",894298107)], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_((function (){var and__3431__auto__ = selected_target;if(cljs.core.truth_(and__3431__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",1284845038)));
} else
{return and__3431__auto__;
}
})()))
{event.selectedTarget = selected_target;
return f.call(null,event);
} else
{return null;
}
});
});
/**
* Returns a nested map of event listeners on `nodes`
*/
dommy.core.event_listeners = (function event_listeners(elem){var or__3443__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
* @param {...*} var_args
*/
dommy.core.update_event_listeners_BANG_ = (function() { 
var update_event_listeners_BANG___delegate = function (elem,f,args){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
};
var update_event_listeners_BANG_ = function (elem,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return update_event_listeners_BANG___delegate.call(this,elem,f,args);};
update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__14222){
var elem = cljs.core.first(arglist__14222);
arglist__14222 = cljs.core.next(arglist__14222);
var f = cljs.core.first(arglist__14222);
var args = cljs.core.rest(arglist__14222);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__14223_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__14223_SHARP_));
}),cljs.core.rest).call(null,elem_sel);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dommy.template.__GT_node_like.call(null,elem_sel),null], null);
}
});
/**
* Adds `f` as a listener for events of type `event-type` on
* `elem-sel`, which must either be a DOM node, or a sequence
* whose first item is a DOM node.
* 
* In other words, the call to `listen!` can take two forms:
* 
* If `elem-sel` is a DOM node, i.e., you're doing something like:
* 
* (listen! elem :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on the `elem`.
* 
* If `elem-sel` is a sequence:
* 
* (listen! [elem :.selector.for :.some.descendants] :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on descendants of `elem` that match the selector
* 
* Also accepts any number of event-type and handler pairs for setting
* multiple listeners at once:
* 
* (listen! some-elem :click click-handler :hover hover-handler)
* @param {...*} var_args
*/
dommy.core.listen_BANG_ = (function() { 
var listen_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__14247_14270 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_14271 = cljs.core.nth.call(null,vec__14247_14270,0,null);var selector_14272 = cljs.core.nth.call(null,vec__14247_14270,1,null);var seq__14248_14273 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__14255_14274 = null;var count__14256_14275 = 0;var i__14257_14276 = 0;while(true){
if((i__14257_14276 < count__14256_14275))
{var vec__14264_14277 = cljs.core._nth.call(null,chunk__14255_14274,i__14257_14276);var orig_type_14278 = cljs.core.nth.call(null,vec__14264_14277,0,null);var f_14279 = cljs.core.nth.call(null,vec__14264_14277,1,null);var seq__14258_14280 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_14278,new cljs.core.PersistentArrayMap.fromArray([orig_type_14278,cljs.core.identity], true, false)));var chunk__14260_14281 = null;var count__14261_14282 = 0;var i__14262_14283 = 0;while(true){
if((i__14262_14283 < count__14261_14282))
{var vec__14265_14284 = cljs.core._nth.call(null,chunk__14260_14281,i__14262_14283);var actual_type_14285 = cljs.core.nth.call(null,vec__14265_14284,0,null);var factory_14286 = cljs.core.nth.call(null,vec__14265_14284,1,null);var canonical_f_14287 = (cljs.core.truth_(selector_14272)?cljs.core.partial.call(null,dommy.core.live_listener,elem_14271,selector_14272):cljs.core.identity).call(null,factory_14286.call(null,f_14279));dommy.core.update_event_listeners_BANG_.call(null,elem_14271,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_14272,actual_type_14285,f_14279], null),canonical_f_14287);
if(cljs.core.truth_(elem_14271.addEventListener))
{elem_14271.addEventListener(cljs.core.name.call(null,actual_type_14285),canonical_f_14287);
} else
{elem_14271.attachEvent(cljs.core.name.call(null,actual_type_14285),canonical_f_14287);
}
{
var G__14288 = seq__14258_14280;
var G__14289 = chunk__14260_14281;
var G__14290 = count__14261_14282;
var G__14291 = (i__14262_14283 + 1);
seq__14258_14280 = G__14288;
chunk__14260_14281 = G__14289;
count__14261_14282 = G__14290;
i__14262_14283 = G__14291;
continue;
}
} else
{var temp__4092__auto___14292 = cljs.core.seq.call(null,seq__14258_14280);if(temp__4092__auto___14292)
{var seq__14258_14293__$1 = temp__4092__auto___14292;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14258_14293__$1))
{var c__4191__auto___14294 = cljs.core.chunk_first.call(null,seq__14258_14293__$1);{
var G__14295 = cljs.core.chunk_rest.call(null,seq__14258_14293__$1);
var G__14296 = c__4191__auto___14294;
var G__14297 = cljs.core.count.call(null,c__4191__auto___14294);
var G__14298 = 0;
seq__14258_14280 = G__14295;
chunk__14260_14281 = G__14296;
count__14261_14282 = G__14297;
i__14262_14283 = G__14298;
continue;
}
} else
{var vec__14266_14299 = cljs.core.first.call(null,seq__14258_14293__$1);var actual_type_14300 = cljs.core.nth.call(null,vec__14266_14299,0,null);var factory_14301 = cljs.core.nth.call(null,vec__14266_14299,1,null);var canonical_f_14302 = (cljs.core.truth_(selector_14272)?cljs.core.partial.call(null,dommy.core.live_listener,elem_14271,selector_14272):cljs.core.identity).call(null,factory_14301.call(null,f_14279));dommy.core.update_event_listeners_BANG_.call(null,elem_14271,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_14272,actual_type_14300,f_14279], null),canonical_f_14302);
if(cljs.core.truth_(elem_14271.addEventListener))
{elem_14271.addEventListener(cljs.core.name.call(null,actual_type_14300),canonical_f_14302);
} else
{elem_14271.attachEvent(cljs.core.name.call(null,actual_type_14300),canonical_f_14302);
}
{
var G__14303 = cljs.core.next.call(null,seq__14258_14293__$1);
var G__14304 = null;
var G__14305 = 0;
var G__14306 = 0;
seq__14258_14280 = G__14303;
chunk__14260_14281 = G__14304;
count__14261_14282 = G__14305;
i__14262_14283 = G__14306;
continue;
}
}
} else
{}
}
break;
}
{
var G__14307 = seq__14248_14273;
var G__14308 = chunk__14255_14274;
var G__14309 = count__14256_14275;
var G__14310 = (i__14257_14276 + 1);
seq__14248_14273 = G__14307;
chunk__14255_14274 = G__14308;
count__14256_14275 = G__14309;
i__14257_14276 = G__14310;
continue;
}
} else
{var temp__4092__auto___14311 = cljs.core.seq.call(null,seq__14248_14273);if(temp__4092__auto___14311)
{var seq__14248_14312__$1 = temp__4092__auto___14311;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14248_14312__$1))
{var c__4191__auto___14313 = cljs.core.chunk_first.call(null,seq__14248_14312__$1);{
var G__14314 = cljs.core.chunk_rest.call(null,seq__14248_14312__$1);
var G__14315 = c__4191__auto___14313;
var G__14316 = cljs.core.count.call(null,c__4191__auto___14313);
var G__14317 = 0;
seq__14248_14273 = G__14314;
chunk__14255_14274 = G__14315;
count__14256_14275 = G__14316;
i__14257_14276 = G__14317;
continue;
}
} else
{var vec__14267_14318 = cljs.core.first.call(null,seq__14248_14312__$1);var orig_type_14319 = cljs.core.nth.call(null,vec__14267_14318,0,null);var f_14320 = cljs.core.nth.call(null,vec__14267_14318,1,null);var seq__14249_14321 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_14319,new cljs.core.PersistentArrayMap.fromArray([orig_type_14319,cljs.core.identity], true, false)));var chunk__14251_14322 = null;var count__14252_14323 = 0;var i__14253_14324 = 0;while(true){
if((i__14253_14324 < count__14252_14323))
{var vec__14268_14325 = cljs.core._nth.call(null,chunk__14251_14322,i__14253_14324);var actual_type_14326 = cljs.core.nth.call(null,vec__14268_14325,0,null);var factory_14327 = cljs.core.nth.call(null,vec__14268_14325,1,null);var canonical_f_14328 = (cljs.core.truth_(selector_14272)?cljs.core.partial.call(null,dommy.core.live_listener,elem_14271,selector_14272):cljs.core.identity).call(null,factory_14327.call(null,f_14320));dommy.core.update_event_listeners_BANG_.call(null,elem_14271,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_14272,actual_type_14326,f_14320], null),canonical_f_14328);
if(cljs.core.truth_(elem_14271.addEventListener))
{elem_14271.addEventListener(cljs.core.name.call(null,actual_type_14326),canonical_f_14328);
} else
{elem_14271.attachEvent(cljs.core.name.call(null,actual_type_14326),canonical_f_14328);
}
{
var G__14329 = seq__14249_14321;
var G__14330 = chunk__14251_14322;
var G__14331 = count__14252_14323;
var G__14332 = (i__14253_14324 + 1);
seq__14249_14321 = G__14329;
chunk__14251_14322 = G__14330;
count__14252_14323 = G__14331;
i__14253_14324 = G__14332;
continue;
}
} else
{var temp__4092__auto___14333__$1 = cljs.core.seq.call(null,seq__14249_14321);if(temp__4092__auto___14333__$1)
{var seq__14249_14334__$1 = temp__4092__auto___14333__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14249_14334__$1))
{var c__4191__auto___14335 = cljs.core.chunk_first.call(null,seq__14249_14334__$1);{
var G__14336 = cljs.core.chunk_rest.call(null,seq__14249_14334__$1);
var G__14337 = c__4191__auto___14335;
var G__14338 = cljs.core.count.call(null,c__4191__auto___14335);
var G__14339 = 0;
seq__14249_14321 = G__14336;
chunk__14251_14322 = G__14337;
count__14252_14323 = G__14338;
i__14253_14324 = G__14339;
continue;
}
} else
{var vec__14269_14340 = cljs.core.first.call(null,seq__14249_14334__$1);var actual_type_14341 = cljs.core.nth.call(null,vec__14269_14340,0,null);var factory_14342 = cljs.core.nth.call(null,vec__14269_14340,1,null);var canonical_f_14343 = (cljs.core.truth_(selector_14272)?cljs.core.partial.call(null,dommy.core.live_listener,elem_14271,selector_14272):cljs.core.identity).call(null,factory_14342.call(null,f_14320));dommy.core.update_event_listeners_BANG_.call(null,elem_14271,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_14272,actual_type_14341,f_14320], null),canonical_f_14343);
if(cljs.core.truth_(elem_14271.addEventListener))
{elem_14271.addEventListener(cljs.core.name.call(null,actual_type_14341),canonical_f_14343);
} else
{elem_14271.attachEvent(cljs.core.name.call(null,actual_type_14341),canonical_f_14343);
}
{
var G__14344 = cljs.core.next.call(null,seq__14249_14334__$1);
var G__14345 = null;
var G__14346 = 0;
var G__14347 = 0;
seq__14249_14321 = G__14344;
chunk__14251_14322 = G__14345;
count__14252_14323 = G__14346;
i__14253_14324 = G__14347;
continue;
}
}
} else
{}
}
break;
}
{
var G__14348 = cljs.core.next.call(null,seq__14248_14312__$1);
var G__14349 = null;
var G__14350 = 0;
var G__14351 = 0;
seq__14248_14273 = G__14348;
chunk__14255_14274 = G__14349;
count__14256_14275 = G__14350;
i__14257_14276 = G__14351;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_BANG___delegate.call(this,elem_sel,type_fs);};
listen_BANG_.cljs$lang$maxFixedArity = 1;
listen_BANG_.cljs$lang$applyTo = (function (arglist__14352){
var elem_sel = cljs.core.first(arglist__14352);
var type_fs = cljs.core.rest(arglist__14352);
return listen_BANG___delegate(elem_sel,type_fs);
});
listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_BANG___delegate;
return listen_BANG_;
})()
;
/**
* Removes event listener for the element defined in `elem-sel`,
* which is the same format as listen!.
* 
* The following forms are allowed, and will remove all handlers
* that match the parameters passed in:
* 
* (unlisten! [elem :.selector] :click event-listener)
* 
* (unlisten! [elem :.selector]
* :click event-listener
* :mouseover other-event-listener)
* @param {...*} var_args
*/
dommy.core.unlisten_BANG_ = (function() { 
var unlisten_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__14376_14399 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_14400 = cljs.core.nth.call(null,vec__14376_14399,0,null);var selector_14401 = cljs.core.nth.call(null,vec__14376_14399,1,null);var seq__14377_14402 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__14384_14403 = null;var count__14385_14404 = 0;var i__14386_14405 = 0;while(true){
if((i__14386_14405 < count__14385_14404))
{var vec__14393_14406 = cljs.core._nth.call(null,chunk__14384_14403,i__14386_14405);var orig_type_14407 = cljs.core.nth.call(null,vec__14393_14406,0,null);var f_14408 = cljs.core.nth.call(null,vec__14393_14406,1,null);var seq__14387_14409 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_14407,new cljs.core.PersistentArrayMap.fromArray([orig_type_14407,cljs.core.identity], true, false)));var chunk__14389_14410 = null;var count__14390_14411 = 0;var i__14391_14412 = 0;while(true){
if((i__14391_14412 < count__14390_14411))
{var vec__14394_14413 = cljs.core._nth.call(null,chunk__14389_14410,i__14391_14412);var actual_type_14414 = cljs.core.nth.call(null,vec__14394_14413,0,null);var __14415 = cljs.core.nth.call(null,vec__14394_14413,1,null);var keys_14416 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_14401,actual_type_14414,f_14408], null);var canonical_f_14417 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_14400),keys_14416);dommy.core.update_event_listeners_BANG_.call(null,elem_14400,dommy.utils.dissoc_in,keys_14416);
if(cljs.core.truth_(elem_14400.removeEventListener))
{elem_14400.removeEventListener(cljs.core.name.call(null,actual_type_14414),canonical_f_14417);
} else
{elem_14400.detachEvent(cljs.core.name.call(null,actual_type_14414),canonical_f_14417);
}
{
var G__14418 = seq__14387_14409;
var G__14419 = chunk__14389_14410;
var G__14420 = count__14390_14411;
var G__14421 = (i__14391_14412 + 1);
seq__14387_14409 = G__14418;
chunk__14389_14410 = G__14419;
count__14390_14411 = G__14420;
i__14391_14412 = G__14421;
continue;
}
} else
{var temp__4092__auto___14422 = cljs.core.seq.call(null,seq__14387_14409);if(temp__4092__auto___14422)
{var seq__14387_14423__$1 = temp__4092__auto___14422;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14387_14423__$1))
{var c__4191__auto___14424 = cljs.core.chunk_first.call(null,seq__14387_14423__$1);{
var G__14425 = cljs.core.chunk_rest.call(null,seq__14387_14423__$1);
var G__14426 = c__4191__auto___14424;
var G__14427 = cljs.core.count.call(null,c__4191__auto___14424);
var G__14428 = 0;
seq__14387_14409 = G__14425;
chunk__14389_14410 = G__14426;
count__14390_14411 = G__14427;
i__14391_14412 = G__14428;
continue;
}
} else
{var vec__14395_14429 = cljs.core.first.call(null,seq__14387_14423__$1);var actual_type_14430 = cljs.core.nth.call(null,vec__14395_14429,0,null);var __14431 = cljs.core.nth.call(null,vec__14395_14429,1,null);var keys_14432 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_14401,actual_type_14430,f_14408], null);var canonical_f_14433 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_14400),keys_14432);dommy.core.update_event_listeners_BANG_.call(null,elem_14400,dommy.utils.dissoc_in,keys_14432);
if(cljs.core.truth_(elem_14400.removeEventListener))
{elem_14400.removeEventListener(cljs.core.name.call(null,actual_type_14430),canonical_f_14433);
} else
{elem_14400.detachEvent(cljs.core.name.call(null,actual_type_14430),canonical_f_14433);
}
{
var G__14434 = cljs.core.next.call(null,seq__14387_14423__$1);
var G__14435 = null;
var G__14436 = 0;
var G__14437 = 0;
seq__14387_14409 = G__14434;
chunk__14389_14410 = G__14435;
count__14390_14411 = G__14436;
i__14391_14412 = G__14437;
continue;
}
}
} else
{}
}
break;
}
{
var G__14438 = seq__14377_14402;
var G__14439 = chunk__14384_14403;
var G__14440 = count__14385_14404;
var G__14441 = (i__14386_14405 + 1);
seq__14377_14402 = G__14438;
chunk__14384_14403 = G__14439;
count__14385_14404 = G__14440;
i__14386_14405 = G__14441;
continue;
}
} else
{var temp__4092__auto___14442 = cljs.core.seq.call(null,seq__14377_14402);if(temp__4092__auto___14442)
{var seq__14377_14443__$1 = temp__4092__auto___14442;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14377_14443__$1))
{var c__4191__auto___14444 = cljs.core.chunk_first.call(null,seq__14377_14443__$1);{
var G__14445 = cljs.core.chunk_rest.call(null,seq__14377_14443__$1);
var G__14446 = c__4191__auto___14444;
var G__14447 = cljs.core.count.call(null,c__4191__auto___14444);
var G__14448 = 0;
seq__14377_14402 = G__14445;
chunk__14384_14403 = G__14446;
count__14385_14404 = G__14447;
i__14386_14405 = G__14448;
continue;
}
} else
{var vec__14396_14449 = cljs.core.first.call(null,seq__14377_14443__$1);var orig_type_14450 = cljs.core.nth.call(null,vec__14396_14449,0,null);var f_14451 = cljs.core.nth.call(null,vec__14396_14449,1,null);var seq__14378_14452 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_14450,new cljs.core.PersistentArrayMap.fromArray([orig_type_14450,cljs.core.identity], true, false)));var chunk__14380_14453 = null;var count__14381_14454 = 0;var i__14382_14455 = 0;while(true){
if((i__14382_14455 < count__14381_14454))
{var vec__14397_14456 = cljs.core._nth.call(null,chunk__14380_14453,i__14382_14455);var actual_type_14457 = cljs.core.nth.call(null,vec__14397_14456,0,null);var __14458 = cljs.core.nth.call(null,vec__14397_14456,1,null);var keys_14459 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_14401,actual_type_14457,f_14451], null);var canonical_f_14460 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_14400),keys_14459);dommy.core.update_event_listeners_BANG_.call(null,elem_14400,dommy.utils.dissoc_in,keys_14459);
if(cljs.core.truth_(elem_14400.removeEventListener))
{elem_14400.removeEventListener(cljs.core.name.call(null,actual_type_14457),canonical_f_14460);
} else
{elem_14400.detachEvent(cljs.core.name.call(null,actual_type_14457),canonical_f_14460);
}
{
var G__14461 = seq__14378_14452;
var G__14462 = chunk__14380_14453;
var G__14463 = count__14381_14454;
var G__14464 = (i__14382_14455 + 1);
seq__14378_14452 = G__14461;
chunk__14380_14453 = G__14462;
count__14381_14454 = G__14463;
i__14382_14455 = G__14464;
continue;
}
} else
{var temp__4092__auto___14465__$1 = cljs.core.seq.call(null,seq__14378_14452);if(temp__4092__auto___14465__$1)
{var seq__14378_14466__$1 = temp__4092__auto___14465__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14378_14466__$1))
{var c__4191__auto___14467 = cljs.core.chunk_first.call(null,seq__14378_14466__$1);{
var G__14468 = cljs.core.chunk_rest.call(null,seq__14378_14466__$1);
var G__14469 = c__4191__auto___14467;
var G__14470 = cljs.core.count.call(null,c__4191__auto___14467);
var G__14471 = 0;
seq__14378_14452 = G__14468;
chunk__14380_14453 = G__14469;
count__14381_14454 = G__14470;
i__14382_14455 = G__14471;
continue;
}
} else
{var vec__14398_14472 = cljs.core.first.call(null,seq__14378_14466__$1);var actual_type_14473 = cljs.core.nth.call(null,vec__14398_14472,0,null);var __14474 = cljs.core.nth.call(null,vec__14398_14472,1,null);var keys_14475 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_14401,actual_type_14473,f_14451], null);var canonical_f_14476 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_14400),keys_14475);dommy.core.update_event_listeners_BANG_.call(null,elem_14400,dommy.utils.dissoc_in,keys_14475);
if(cljs.core.truth_(elem_14400.removeEventListener))
{elem_14400.removeEventListener(cljs.core.name.call(null,actual_type_14473),canonical_f_14476);
} else
{elem_14400.detachEvent(cljs.core.name.call(null,actual_type_14473),canonical_f_14476);
}
{
var G__14477 = cljs.core.next.call(null,seq__14378_14466__$1);
var G__14478 = null;
var G__14479 = 0;
var G__14480 = 0;
seq__14378_14452 = G__14477;
chunk__14380_14453 = G__14478;
count__14381_14454 = G__14479;
i__14382_14455 = G__14480;
continue;
}
}
} else
{}
}
break;
}
{
var G__14481 = cljs.core.next.call(null,seq__14377_14443__$1);
var G__14482 = null;
var G__14483 = 0;
var G__14484 = 0;
seq__14377_14402 = G__14481;
chunk__14384_14403 = G__14482;
count__14385_14404 = G__14483;
i__14386_14405 = G__14484;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var unlisten_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return unlisten_BANG___delegate.call(this,elem_sel,type_fs);};
unlisten_BANG_.cljs$lang$maxFixedArity = 1;
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__14485){
var elem_sel = cljs.core.first(arglist__14485);
var type_fs = cljs.core.rest(arglist__14485);
return unlisten_BANG___delegate(elem_sel,type_fs);
});
unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = unlisten_BANG___delegate;
return unlisten_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.core.listen_once_BANG_ = (function() { 
var listen_once_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__14493_14500 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_14501 = cljs.core.nth.call(null,vec__14493_14500,0,null);var selector_14502 = cljs.core.nth.call(null,vec__14493_14500,1,null);var seq__14494_14503 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__14495_14504 = null;var count__14496_14505 = 0;var i__14497_14506 = 0;while(true){
if((i__14497_14506 < count__14496_14505))
{var vec__14498_14507 = cljs.core._nth.call(null,chunk__14495_14504,i__14497_14506);var type_14508 = cljs.core.nth.call(null,vec__14498_14507,0,null);var f_14509 = cljs.core.nth.call(null,vec__14498_14507,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_14508,((function (seq__14494_14503,chunk__14495_14504,count__14496_14505,i__14497_14506,vec__14498_14507,type_14508,f_14509){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_14508,this_fn);
return f_14509.call(null,e);
});})(seq__14494_14503,chunk__14495_14504,count__14496_14505,i__14497_14506,vec__14498_14507,type_14508,f_14509))
);
{
var G__14510 = seq__14494_14503;
var G__14511 = chunk__14495_14504;
var G__14512 = count__14496_14505;
var G__14513 = (i__14497_14506 + 1);
seq__14494_14503 = G__14510;
chunk__14495_14504 = G__14511;
count__14496_14505 = G__14512;
i__14497_14506 = G__14513;
continue;
}
} else
{var temp__4092__auto___14514 = cljs.core.seq.call(null,seq__14494_14503);if(temp__4092__auto___14514)
{var seq__14494_14515__$1 = temp__4092__auto___14514;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14494_14515__$1))
{var c__4191__auto___14516 = cljs.core.chunk_first.call(null,seq__14494_14515__$1);{
var G__14517 = cljs.core.chunk_rest.call(null,seq__14494_14515__$1);
var G__14518 = c__4191__auto___14516;
var G__14519 = cljs.core.count.call(null,c__4191__auto___14516);
var G__14520 = 0;
seq__14494_14503 = G__14517;
chunk__14495_14504 = G__14518;
count__14496_14505 = G__14519;
i__14497_14506 = G__14520;
continue;
}
} else
{var vec__14499_14521 = cljs.core.first.call(null,seq__14494_14515__$1);var type_14522 = cljs.core.nth.call(null,vec__14499_14521,0,null);var f_14523 = cljs.core.nth.call(null,vec__14499_14521,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_14522,((function (seq__14494_14503,chunk__14495_14504,count__14496_14505,i__14497_14506,vec__14499_14521,type_14522,f_14523,seq__14494_14515__$1,temp__4092__auto___14514){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_14522,this_fn);
return f_14523.call(null,e);
});})(seq__14494_14503,chunk__14495_14504,count__14496_14505,i__14497_14506,vec__14499_14521,type_14522,f_14523,seq__14494_14515__$1,temp__4092__auto___14514))
);
{
var G__14524 = cljs.core.next.call(null,seq__14494_14515__$1);
var G__14525 = null;
var G__14526 = 0;
var G__14527 = 0;
seq__14494_14503 = G__14524;
chunk__14495_14504 = G__14525;
count__14496_14505 = G__14526;
i__14497_14506 = G__14527;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_once_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_once_BANG___delegate.call(this,elem_sel,type_fs);};
listen_once_BANG_.cljs$lang$maxFixedArity = 1;
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__14528){
var elem_sel = cljs.core.first(arglist__14528);
var type_fs = cljs.core.rest(arglist__14528);
return listen_once_BANG___delegate(elem_sel,type_fs);
});
listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_once_BANG___delegate;
return listen_once_BANG_;
})()
;
/**
* NOTE: ONLY TO BE USED FOR TESTS. May not work at mocking many
* event types or their bubbling behaviours
* 
* Creates an event of type `event-type`, optionally having
* `update-event!` mutate and return an updated event object,
* and fires it on `node`.
* Only works when `node` is in the DOM
* @param {...*} var_args
*/
dommy.core.fire_BANG_ = (function() { 
var fire_BANG___delegate = function (node,event_type,p__14529){var vec__14531 = p__14529;var update_event_BANG_ = cljs.core.nth.call(null,vec__14531,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null))))].join('')));
}
var update_event_BANG___$1 = (function (){var or__3443__auto__ = update_event_BANG_;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return cljs.core.identity;
}
})();if(cljs.core.truth_(document.createEvent))
{var event = document.createEvent("Event");event.initEvent(cljs.core.name.call(null,event_type),true,true);
return node.dispatchEvent(update_event_BANG___$1.call(null,event));
} else
{return node.fireEvent([cljs.core.str("on"),cljs.core.str(cljs.core.name.call(null,event_type))].join(''),update_event_BANG___$1.call(null,document.createEventObject()));
}
};
var fire_BANG_ = function (node,event_type,var_args){
var p__14529 = null;if (arguments.length > 2) {
  p__14529 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__14529);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__14532){
var node = cljs.core.first(arglist__14532);
arglist__14532 = cljs.core.next(arglist__14532);
var event_type = cljs.core.first(arglist__14532);
var p__14529 = cljs.core.rest(arglist__14532);
return fire_BANG___delegate(node,event_type,p__14529);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map