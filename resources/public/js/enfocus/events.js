// Compiled by ClojureScript 0.0-2173
goog.provide('enfocus.events');
goog.require('cljs.core');
goog.require('enfocus.core');
goog.require('enfocus.core');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events');
enfocus.events.view_port_monitor = cljs.core.atom.call(null,null);
/**
* needed to support window :resize
*/
enfocus.events.get_vp_monitor = (function get_vp_monitor(){if(cljs.core.truth_(cljs.core.deref.call(null,enfocus.events.view_port_monitor)))
{return cljs.core.deref.call(null,enfocus.events.view_port_monitor);
} else
{cljs.core.swap_BANG_.call(null,enfocus.events.view_port_monitor,(function (){return (new goog.dom.ViewportSizeMonitor());
}));
return cljs.core.deref.call(null,enfocus.events.view_port_monitor);
}
});
enfocus.events.gen_enter_leave_wrapper = (function gen_enter_leave_wrapper(event){var obj = (new Object());obj.listen = (function (elm,func,opt_cap,opt_scope,opt_handler){var callback = enfocus.events.mouse_enter_leave.call(null,func);callback.listen = func;
callback.scope = opt_scope;
if(cljs.core.truth_(opt_handler))
{return opt_handler.listen(elm,cljs.core.name.call(null,event),callback);
} else
{return goog.events.listen(elm,cljs.core.name.call(null,event),callback);
}
});
obj.unlisten = (function (elm,func,opt_cap,opt_scope,opt_handler){var listeners = goog.events.getListeners(elm,cljs.core.name.call(null,event),false);var seq__14209_14213 = cljs.core.seq.call(null,listeners);var chunk__14210_14214 = null;var count__14211_14215 = 0;var i__14212_14216 = 0;while(true){
if((i__14212_14216 < count__14211_14215))
{var obj_14217__$1 = cljs.core._nth.call(null,chunk__14210_14214,i__14212_14216);var listener_14218 = obj_14217__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_14218.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_14218.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_14218);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_14218);
}
} else
{}
{
var G__14219 = seq__14209_14213;
var G__14220 = chunk__14210_14214;
var G__14221 = count__14211_14215;
var G__14222 = (i__14212_14216 + 1);
seq__14209_14213 = G__14219;
chunk__14210_14214 = G__14220;
count__14211_14215 = G__14221;
i__14212_14216 = G__14222;
continue;
}
} else
{var temp__4092__auto___14223 = cljs.core.seq.call(null,seq__14209_14213);if(temp__4092__auto___14223)
{var seq__14209_14224__$1 = temp__4092__auto___14223;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14209_14224__$1))
{var c__4191__auto___14225 = cljs.core.chunk_first.call(null,seq__14209_14224__$1);{
var G__14226 = cljs.core.chunk_rest.call(null,seq__14209_14224__$1);
var G__14227 = c__4191__auto___14225;
var G__14228 = cljs.core.count.call(null,c__4191__auto___14225);
var G__14229 = 0;
seq__14209_14213 = G__14226;
chunk__14210_14214 = G__14227;
count__14211_14215 = G__14228;
i__14212_14216 = G__14229;
continue;
}
} else
{var obj_14230__$1 = cljs.core.first.call(null,seq__14209_14224__$1);var listener_14231 = obj_14230__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_14231.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_14231.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_14231);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_14231);
}
} else
{}
{
var G__14232 = cljs.core.next.call(null,seq__14209_14224__$1);
var G__14233 = null;
var G__14234 = 0;
var G__14235 = 0;
seq__14209_14213 = G__14232;
chunk__14210_14214 = G__14233;
count__14211_14215 = G__14234;
i__14212_14216 = G__14235;
continue;
}
}
} else
{}
}
break;
}
return listeners;
});
return obj;
});
enfocus.events.wrapper_register = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",2027084997),enfocus.events.gen_enter_leave_wrapper.call(null,new cljs.core.Keyword(null,"mouseover","mouseover",1601081963)),new cljs.core.Keyword(null,"mouseleave","mouseleave",2033263780),enfocus.events.gen_enter_leave_wrapper.call(null,new cljs.core.Keyword(null,"mouseout","mouseout",894298107))], null);
/**
* adding an event to the selected nodes
*/
enfocus.events.listen = (function listen(event,func){var wrapper = enfocus.events.wrapper_register.call(null,event);return (function (pnod){if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"resize","resize",4374433830),event)) && ((window === pnod)))
{return goog.events.listen(enfocus.events.get_vp_monitor.call(null),"resize",func);
} else
{if((wrapper == null))
{return goog.events.listen(pnod,cljs.core.name.call(null,event),func);
} else
{return goog.events.listenWithWrapper(pnod,wrapper,func);
}
}
});
});
/**
* removing all listeners of a given event type from the selected nodes
* @param {...*} var_args
*/
enfocus.events.remove_listeners = (function() { 
var remove_listeners__delegate = function (event_list){var get_name = (function (p1__14236_SHARP_){return cljs.core.name.call(null,((cljs.core._EQ_.call(null,p1__14236_SHARP_,new cljs.core.Keyword(null,"mouseenter","mouseenter",2027084997)))?new cljs.core.Keyword(null,"mouseover","mouseover",1601081963):((cljs.core._EQ_.call(null,p1__14236_SHARP_,new cljs.core.Keyword(null,"mouseleave","mouseleave",2033263780)))?new cljs.core.Keyword(null,"mouseout","mouseout",894298107):((new cljs.core.Keyword(null,"else","else",1017020587))?p1__14236_SHARP_:null))));
});return (function (pnod){var seq__14241 = cljs.core.seq.call(null,event_list);var chunk__14242 = null;var count__14243 = 0;var i__14244 = 0;while(true){
if((i__14244 < count__14243))
{var ev = cljs.core._nth.call(null,chunk__14242,i__14244);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__14245 = seq__14241;
var G__14246 = chunk__14242;
var G__14247 = count__14243;
var G__14248 = (i__14244 + 1);
seq__14241 = G__14245;
chunk__14242 = G__14246;
count__14243 = G__14247;
i__14244 = G__14248;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14241);if(temp__4092__auto__)
{var seq__14241__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14241__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__14241__$1);{
var G__14249 = cljs.core.chunk_rest.call(null,seq__14241__$1);
var G__14250 = c__4191__auto__;
var G__14251 = cljs.core.count.call(null,c__4191__auto__);
var G__14252 = 0;
seq__14241 = G__14249;
chunk__14242 = G__14250;
count__14243 = G__14251;
i__14244 = G__14252;
continue;
}
} else
{var ev = cljs.core.first.call(null,seq__14241__$1);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__14253 = cljs.core.next.call(null,seq__14241__$1);
var G__14254 = null;
var G__14255 = 0;
var G__14256 = 0;
seq__14241 = G__14253;
chunk__14242 = G__14254;
count__14243 = G__14255;
i__14244 = G__14256;
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
var remove_listeners = function (var_args){
var event_list = null;if (arguments.length > 0) {
  event_list = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return remove_listeners__delegate.call(this,event_list);};
remove_listeners.cljs$lang$maxFixedArity = 0;
remove_listeners.cljs$lang$applyTo = (function (arglist__14257){
var event_list = cljs.core.seq(arglist__14257);
return remove_listeners__delegate(event_list);
});
remove_listeners.cljs$core$IFn$_invoke$arity$variadic = remove_listeners__delegate;
return remove_listeners;
})()
;
/**
* removing a specific event from the selected nodes
*/
enfocus.events.unlisten = (function() {
var unlisten = null;
var unlisten__1 = (function (event){return enfocus.events.remove_listeners.call(null,event);
});
var unlisten__2 = (function (event,func){var wrapper = enfocus.events.wrapper_register.call(null,event);return (function (pnod){if((wrapper == null))
{return goog.events.unlisten(pnod,cljs.core.name.call(null,event),func);
} else
{return goog.events.unlistenWithWrapper(pnod,wrapper,func);
}
});
});
unlisten = function(event,func){
switch(arguments.length){
case 1:
return unlisten__1.call(this,event);
case 2:
return unlisten__2.call(this,event,func);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unlisten.cljs$core$IFn$_invoke$arity$1 = unlisten__1;
unlisten.cljs$core$IFn$_invoke$arity$2 = unlisten__2;
return unlisten;
})()
;
enfocus.events.get_node_chain = (function get_node_chain(top,node){if(((node == null)) || (cljs.core._EQ_.call(null,node,top)))
{return cljs.core.List.EMPTY;
} else
{return cljs.core.conj.call(null,get_node_chain.call(null,top,node.parentNode),node);
}
});
enfocus.events.create_event = (function create_event(type,cur,tar){var event = (new goog.events.Event(type));event.currentTarget = cur;
event.target = tar;
return event;
});
enfocus.events.listen_live = (function listen_live(event,selector,func){return (function (node){return enfocus.core.at.call(null,node,enfocus.events.listen.call(null,event,(function (p1__14258_SHARP_){var seq__14263 = cljs.core.seq.call(null,enfocus.events.get_node_chain.call(null,node,p1__14258_SHARP_.target));var chunk__14264 = null;var count__14265 = 0;var i__14266 = 0;while(true){
if((i__14266 < count__14265))
{var el = cljs.core._nth.call(null,chunk__14264,i__14266);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__14263,chunk__14264,count__14265,i__14266,el){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__14258_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__14258_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__14258_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__14263,chunk__14264,count__14265,i__14266,el))
));
{
var G__14267 = seq__14263;
var G__14268 = chunk__14264;
var G__14269 = count__14265;
var G__14270 = (i__14266 + 1);
seq__14263 = G__14267;
chunk__14264 = G__14268;
count__14265 = G__14269;
i__14266 = G__14270;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14263);if(temp__4092__auto__)
{var seq__14263__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14263__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__14263__$1);{
var G__14271 = cljs.core.chunk_rest.call(null,seq__14263__$1);
var G__14272 = c__4191__auto__;
var G__14273 = cljs.core.count.call(null,c__4191__auto__);
var G__14274 = 0;
seq__14263 = G__14271;
chunk__14264 = G__14272;
count__14265 = G__14273;
i__14266 = G__14274;
continue;
}
} else
{var el = cljs.core.first.call(null,seq__14263__$1);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__14263,chunk__14264,count__14265,i__14266,el,seq__14263__$1,temp__4092__auto__){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__14258_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__14258_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__14258_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__14263,chunk__14264,count__14265,i__14266,el,seq__14263__$1,temp__4092__auto__))
));
{
var G__14275 = cljs.core.next.call(null,seq__14263__$1);
var G__14276 = null;
var G__14277 = 0;
var G__14278 = 0;
seq__14263 = G__14275;
chunk__14264 = G__14276;
count__14265 = G__14277;
i__14266 = G__14278;
continue;
}
}
} else
{return null;
}
}
break;
}
})));
});
});
/**
* returns true if the node(child) is a child of parent
*/
enfocus.events.child_of_QMARK_ = (function child_of_QMARK_(parent,child){while(true){
if(cljs.core.not.call(null,child))
{return false;
} else
{if((parent === child))
{return false;
} else
{if((child.parentNode === parent))
{return true;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__14279 = parent;
var G__14280 = child.parentNode;
parent = G__14279;
child = G__14280;
continue;
}
} else
{return null;
}
}
}
}
break;
}
});
/**
* this is used to build cross browser versions of :mouseenter and :mouseleave events
*/
enfocus.events.mouse_enter_leave = (function mouse_enter_leave(func){return (function (e){var re = e.relatedTarget;var this$ = e.currentTarget;if((!((re === this$))) && (!(enfocus.events.child_of_QMARK_.call(null,this$,re))))
{return func.call(null,e);
} else
{return null;
}
});
});

//# sourceMappingURL=events.js.map