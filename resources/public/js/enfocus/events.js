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
obj.unlisten = (function (elm,func,opt_cap,opt_scope,opt_handler){var listeners = goog.events.getListeners(elm,cljs.core.name.call(null,event),false);var seq__16710_16714 = cljs.core.seq.call(null,listeners);var chunk__16711_16715 = null;var count__16712_16716 = 0;var i__16713_16717 = 0;while(true){
if((i__16713_16717 < count__16712_16716))
{var obj_16718__$1 = cljs.core._nth.call(null,chunk__16711_16715,i__16713_16717);var listener_16719 = obj_16718__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_16719.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_16719.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_16719);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_16719);
}
} else
{}
{
var G__16720 = seq__16710_16714;
var G__16721 = chunk__16711_16715;
var G__16722 = count__16712_16716;
var G__16723 = (i__16713_16717 + 1);
seq__16710_16714 = G__16720;
chunk__16711_16715 = G__16721;
count__16712_16716 = G__16722;
i__16713_16717 = G__16723;
continue;
}
} else
{var temp__4092__auto___16724 = cljs.core.seq.call(null,seq__16710_16714);if(temp__4092__auto___16724)
{var seq__16710_16725__$1 = temp__4092__auto___16724;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16710_16725__$1))
{var c__4191__auto___16726 = cljs.core.chunk_first.call(null,seq__16710_16725__$1);{
var G__16727 = cljs.core.chunk_rest.call(null,seq__16710_16725__$1);
var G__16728 = c__4191__auto___16726;
var G__16729 = cljs.core.count.call(null,c__4191__auto___16726);
var G__16730 = 0;
seq__16710_16714 = G__16727;
chunk__16711_16715 = G__16728;
count__16712_16716 = G__16729;
i__16713_16717 = G__16730;
continue;
}
} else
{var obj_16731__$1 = cljs.core.first.call(null,seq__16710_16725__$1);var listener_16732 = obj_16731__$1.listener;if(((cljs.core.not.call(null,func)) || (cljs.core._EQ_.call(null,listener_16732.listen,func))) && ((cljs.core.not.call(null,opt_scope)) || (cljs.core._EQ_.call(null,listener_16732.scope,opt_scope))))
{if(cljs.core.truth_(opt_handler))
{opt_handler.unlisten(elm,cljs.core.name.call(null,event),listener_16732);
} else
{goog.events.unlisten(elm,cljs.core.name.call(null,event),listener_16732);
}
} else
{}
{
var G__16733 = cljs.core.next.call(null,seq__16710_16725__$1);
var G__16734 = null;
var G__16735 = 0;
var G__16736 = 0;
seq__16710_16714 = G__16733;
chunk__16711_16715 = G__16734;
count__16712_16716 = G__16735;
i__16713_16717 = G__16736;
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
var remove_listeners__delegate = function (event_list){var get_name = (function (p1__16737_SHARP_){return cljs.core.name.call(null,((cljs.core._EQ_.call(null,p1__16737_SHARP_,new cljs.core.Keyword(null,"mouseenter","mouseenter",2027084997)))?new cljs.core.Keyword(null,"mouseover","mouseover",1601081963):((cljs.core._EQ_.call(null,p1__16737_SHARP_,new cljs.core.Keyword(null,"mouseleave","mouseleave",2033263780)))?new cljs.core.Keyword(null,"mouseout","mouseout",894298107):((new cljs.core.Keyword(null,"else","else",1017020587))?p1__16737_SHARP_:null))));
});return (function (pnod){var seq__16742 = cljs.core.seq.call(null,event_list);var chunk__16743 = null;var count__16744 = 0;var i__16745 = 0;while(true){
if((i__16745 < count__16744))
{var ev = cljs.core._nth.call(null,chunk__16743,i__16745);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__16746 = seq__16742;
var G__16747 = chunk__16743;
var G__16748 = count__16744;
var G__16749 = (i__16745 + 1);
seq__16742 = G__16746;
chunk__16743 = G__16747;
count__16744 = G__16748;
i__16745 = G__16749;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16742);if(temp__4092__auto__)
{var seq__16742__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16742__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__16742__$1);{
var G__16750 = cljs.core.chunk_rest.call(null,seq__16742__$1);
var G__16751 = c__4191__auto__;
var G__16752 = cljs.core.count.call(null,c__4191__auto__);
var G__16753 = 0;
seq__16742 = G__16750;
chunk__16743 = G__16751;
count__16744 = G__16752;
i__16745 = G__16753;
continue;
}
} else
{var ev = cljs.core.first.call(null,seq__16742__$1);goog.events.removeAll(pnod,get_name.call(null,ev));
{
var G__16754 = cljs.core.next.call(null,seq__16742__$1);
var G__16755 = null;
var G__16756 = 0;
var G__16757 = 0;
seq__16742 = G__16754;
chunk__16743 = G__16755;
count__16744 = G__16756;
i__16745 = G__16757;
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
remove_listeners.cljs$lang$applyTo = (function (arglist__16758){
var event_list = cljs.core.seq(arglist__16758);
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
enfocus.events.listen_live = (function listen_live(event,selector,func){return (function (node){return enfocus.core.at.call(null,node,enfocus.events.listen.call(null,event,(function (p1__16759_SHARP_){var seq__16764 = cljs.core.seq.call(null,enfocus.events.get_node_chain.call(null,node,p1__16759_SHARP_.target));var chunk__16765 = null;var count__16766 = 0;var i__16767 = 0;while(true){
if((i__16767 < count__16766))
{var el = cljs.core._nth.call(null,chunk__16765,i__16767);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__16764,chunk__16765,count__16766,i__16767,el){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__16759_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__16759_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__16759_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__16764,chunk__16765,count__16766,i__16767,el))
));
{
var G__16768 = seq__16764;
var G__16769 = chunk__16765;
var G__16770 = count__16766;
var G__16771 = (i__16767 + 1);
seq__16764 = G__16768;
chunk__16765 = G__16769;
count__16766 = G__16770;
i__16767 = G__16771;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16764);if(temp__4092__auto__)
{var seq__16764__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16764__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__16764__$1);{
var G__16772 = cljs.core.chunk_rest.call(null,seq__16764__$1);
var G__16773 = c__4191__auto__;
var G__16774 = cljs.core.count.call(null,c__4191__auto__);
var G__16775 = 0;
seq__16764 = G__16772;
chunk__16765 = G__16773;
count__16766 = G__16774;
i__16767 = G__16775;
continue;
}
} else
{var el = cljs.core.first.call(null,seq__16764__$1);enfocus.core.at.call(null,el,enfocus.core.filter.call(null,enfocus.core.match_QMARK_.call(null,selector),((function (seq__16764,chunk__16765,count__16766,i__16767,el,seq__16764__$1,temp__4092__auto__){
return (function (node__$1){var event_copy = enfocus.events.create_event.call(null,event,el,p1__16759_SHARP_.target);func.call(null,event_copy);
if(cljs.core.truth_(event_copy.defaultPrevented))
{p1__16759_SHARP_.preventDefault();
} else
{}
if(cljs.core.truth_(event_copy.propagationStopped))
{return p1__16759_SHARP_.stopPropagation();
} else
{return null;
}
});})(seq__16764,chunk__16765,count__16766,i__16767,el,seq__16764__$1,temp__4092__auto__))
));
{
var G__16776 = cljs.core.next.call(null,seq__16764__$1);
var G__16777 = null;
var G__16778 = 0;
var G__16779 = 0;
seq__16764 = G__16776;
chunk__16765 = G__16777;
count__16766 = G__16778;
i__16767 = G__16779;
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
var G__16780 = parent;
var G__16781 = child.parentNode;
parent = G__16780;
child = G__16781;
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