// Compiled by ClojureScript 0.0-2173
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.string');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('goog.dom.xml');
goog.require('goog.style');
goog.require('goog.dom.forms');
goog.require('domina.support');
goog.require('goog.events');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_17583 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_17584 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_17585 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_17584,table_section_wrapper_17584,opt_wrapper_17583,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_17585,table_section_wrapper_17584,cell_wrapper_17585,opt_wrapper_17583,table_section_wrapper_17584,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_17584]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3431__auto__ = div.firstChild;if(cljs.core.truth_(and__3431__auto__))
{return div.firstChild.childNodes;
} else
{return and__3431__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__17590 = cljs.core.seq.call(null,tbody);var chunk__17591 = null;var count__17592 = 0;var i__17593 = 0;while(true){
if((i__17593 < count__17592))
{var child = cljs.core._nth.call(null,chunk__17591,i__17593);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__17594 = seq__17590;
var G__17595 = chunk__17591;
var G__17596 = count__17592;
var G__17597 = (i__17593 + 1);
seq__17590 = G__17594;
chunk__17591 = G__17595;
count__17592 = G__17596;
i__17593 = G__17597;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17590);if(temp__4092__auto__)
{var seq__17590__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17590__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__17590__$1);{
var G__17598 = cljs.core.chunk_rest.call(null,seq__17590__$1);
var G__17599 = c__4191__auto__;
var G__17600 = cljs.core.count.call(null,c__4191__auto__);
var G__17601 = 0;
seq__17590 = G__17598;
chunk__17591 = G__17599;
count__17592 = G__17600;
i__17593 = G__17601;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__17590__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__17602 = cljs.core.next.call(null,seq__17590__$1);
var G__17603 = null;
var G__17604 = 0;
var G__17605 = 0;
seq__17590 = G__17602;
chunk__17591 = G__17603;
count__17592 = G__17604;
i__17593 = G__17605;
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
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__17607 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__17607,0,null);var start_wrap = cljs.core.nth.call(null,vec__17607,1,null);var end_wrap = cljs.core.nth.call(null,vec__17607,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__17608 = wrapper.lastChild;
var G__17609 = (level - 1);
wrapper = G__17608;
level = G__17609;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3431__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3431__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3431__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj17611 = {};return obj17611;
})();
domina.nodes = (function nodes(content){if((function (){var and__3431__auto__ = content;if(and__3431__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3431__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4070__auto__ = (((content == null))?null:content);return (function (){var or__3443__auto__ = (domina.nodes[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (domina.nodes["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3431__auto__ = nodeseq;if(and__3431__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3431__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4070__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3443__auto__ = (domina.single_node[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (domina.single_node["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3431__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3431__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3431__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__17612){
var mesg = cljs.core.seq(arglist__17612);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__17613){
var mesg = cljs.core.seq(arglist__17613);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__17614){
var contents = cljs.core.seq(arglist__17614);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__17615_SHARP_){return p1__17615_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__17616_SHARP_,p2__17617_SHARP_){return goog.dom.insertChildAt(p1__17616_SHARP_,p2__17617_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__17619_SHARP_,p2__17618_SHARP_){return goog.dom.insertSiblingBefore(p2__17618_SHARP_,p1__17619_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__17621_SHARP_,p2__17620_SHARP_){return goog.dom.insertSiblingAfter(p2__17620_SHARP_,p1__17621_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__17623_SHARP_,p2__17622_SHARP_){return goog.dom.replaceNode(p2__17622_SHARP_,p1__17623_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__17628_17632 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17629_17633 = null;var count__17630_17634 = 0;var i__17631_17635 = 0;while(true){
if((i__17631_17635 < count__17630_17634))
{var n_17636 = cljs.core._nth.call(null,chunk__17629_17633,i__17631_17635);goog.style.setStyle(n_17636,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17637 = seq__17628_17632;
var G__17638 = chunk__17629_17633;
var G__17639 = count__17630_17634;
var G__17640 = (i__17631_17635 + 1);
seq__17628_17632 = G__17637;
chunk__17629_17633 = G__17638;
count__17630_17634 = G__17639;
i__17631_17635 = G__17640;
continue;
}
} else
{var temp__4092__auto___17641 = cljs.core.seq.call(null,seq__17628_17632);if(temp__4092__auto___17641)
{var seq__17628_17642__$1 = temp__4092__auto___17641;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17628_17642__$1))
{var c__4191__auto___17643 = cljs.core.chunk_first.call(null,seq__17628_17642__$1);{
var G__17644 = cljs.core.chunk_rest.call(null,seq__17628_17642__$1);
var G__17645 = c__4191__auto___17643;
var G__17646 = cljs.core.count.call(null,c__4191__auto___17643);
var G__17647 = 0;
seq__17628_17632 = G__17644;
chunk__17629_17633 = G__17645;
count__17630_17634 = G__17646;
i__17631_17635 = G__17647;
continue;
}
} else
{var n_17648 = cljs.core.first.call(null,seq__17628_17642__$1);goog.style.setStyle(n_17648,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17649 = cljs.core.next.call(null,seq__17628_17642__$1);
var G__17650 = null;
var G__17651 = 0;
var G__17652 = 0;
seq__17628_17632 = G__17649;
chunk__17629_17633 = G__17650;
count__17630_17634 = G__17651;
i__17631_17635 = G__17652;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__17653){
var content = cljs.core.first(arglist__17653);
arglist__17653 = cljs.core.next(arglist__17653);
var name = cljs.core.first(arglist__17653);
var value = cljs.core.rest(arglist__17653);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__17658_17662 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17659_17663 = null;var count__17660_17664 = 0;var i__17661_17665 = 0;while(true){
if((i__17661_17665 < count__17660_17664))
{var n_17666 = cljs.core._nth.call(null,chunk__17659_17663,i__17661_17665);n_17666.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17667 = seq__17658_17662;
var G__17668 = chunk__17659_17663;
var G__17669 = count__17660_17664;
var G__17670 = (i__17661_17665 + 1);
seq__17658_17662 = G__17667;
chunk__17659_17663 = G__17668;
count__17660_17664 = G__17669;
i__17661_17665 = G__17670;
continue;
}
} else
{var temp__4092__auto___17671 = cljs.core.seq.call(null,seq__17658_17662);if(temp__4092__auto___17671)
{var seq__17658_17672__$1 = temp__4092__auto___17671;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17658_17672__$1))
{var c__4191__auto___17673 = cljs.core.chunk_first.call(null,seq__17658_17672__$1);{
var G__17674 = cljs.core.chunk_rest.call(null,seq__17658_17672__$1);
var G__17675 = c__4191__auto___17673;
var G__17676 = cljs.core.count.call(null,c__4191__auto___17673);
var G__17677 = 0;
seq__17658_17662 = G__17674;
chunk__17659_17663 = G__17675;
count__17660_17664 = G__17676;
i__17661_17665 = G__17677;
continue;
}
} else
{var n_17678 = cljs.core.first.call(null,seq__17658_17672__$1);n_17678.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17679 = cljs.core.next.call(null,seq__17658_17672__$1);
var G__17680 = null;
var G__17681 = 0;
var G__17682 = 0;
seq__17658_17662 = G__17679;
chunk__17659_17663 = G__17680;
count__17660_17664 = G__17681;
i__17661_17665 = G__17682;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__17683){
var content = cljs.core.first(arglist__17683);
arglist__17683 = cljs.core.next(arglist__17683);
var name = cljs.core.first(arglist__17683);
var value = cljs.core.rest(arglist__17683);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__17688_17692 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17689_17693 = null;var count__17690_17694 = 0;var i__17691_17695 = 0;while(true){
if((i__17691_17695 < count__17690_17694))
{var n_17696 = cljs.core._nth.call(null,chunk__17689_17693,i__17691_17695);n_17696.removeAttribute(cljs.core.name.call(null,name));
{
var G__17697 = seq__17688_17692;
var G__17698 = chunk__17689_17693;
var G__17699 = count__17690_17694;
var G__17700 = (i__17691_17695 + 1);
seq__17688_17692 = G__17697;
chunk__17689_17693 = G__17698;
count__17690_17694 = G__17699;
i__17691_17695 = G__17700;
continue;
}
} else
{var temp__4092__auto___17701 = cljs.core.seq.call(null,seq__17688_17692);if(temp__4092__auto___17701)
{var seq__17688_17702__$1 = temp__4092__auto___17701;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17688_17702__$1))
{var c__4191__auto___17703 = cljs.core.chunk_first.call(null,seq__17688_17702__$1);{
var G__17704 = cljs.core.chunk_rest.call(null,seq__17688_17702__$1);
var G__17705 = c__4191__auto___17703;
var G__17706 = cljs.core.count.call(null,c__4191__auto___17703);
var G__17707 = 0;
seq__17688_17692 = G__17704;
chunk__17689_17693 = G__17705;
count__17690_17694 = G__17706;
i__17691_17695 = G__17707;
continue;
}
} else
{var n_17708 = cljs.core.first.call(null,seq__17688_17702__$1);n_17708.removeAttribute(cljs.core.name.call(null,name));
{
var G__17709 = cljs.core.next.call(null,seq__17688_17702__$1);
var G__17710 = null;
var G__17711 = 0;
var G__17712 = 0;
seq__17688_17692 = G__17709;
chunk__17689_17693 = G__17710;
count__17690_17694 = G__17711;
i__17691_17695 = G__17712;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__17714 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__17714,0,null);var v = cljs.core.nth.call(null,vec__17714,1,null);if(cljs.core.truth_((function (){var and__3431__auto__ = k;if(cljs.core.truth_(and__3431__auto__))
{return v;
} else
{return and__3431__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return null;
}
}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__17715_SHARP_){var attr = attrs__$1.item(p1__17715_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__17722_17728 = cljs.core.seq.call(null,styles);var chunk__17723_17729 = null;var count__17724_17730 = 0;var i__17725_17731 = 0;while(true){
if((i__17725_17731 < count__17724_17730))
{var vec__17726_17732 = cljs.core._nth.call(null,chunk__17723_17729,i__17725_17731);var name_17733 = cljs.core.nth.call(null,vec__17726_17732,0,null);var value_17734 = cljs.core.nth.call(null,vec__17726_17732,1,null);domina.set_style_BANG_.call(null,content,name_17733,value_17734);
{
var G__17735 = seq__17722_17728;
var G__17736 = chunk__17723_17729;
var G__17737 = count__17724_17730;
var G__17738 = (i__17725_17731 + 1);
seq__17722_17728 = G__17735;
chunk__17723_17729 = G__17736;
count__17724_17730 = G__17737;
i__17725_17731 = G__17738;
continue;
}
} else
{var temp__4092__auto___17739 = cljs.core.seq.call(null,seq__17722_17728);if(temp__4092__auto___17739)
{var seq__17722_17740__$1 = temp__4092__auto___17739;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17722_17740__$1))
{var c__4191__auto___17741 = cljs.core.chunk_first.call(null,seq__17722_17740__$1);{
var G__17742 = cljs.core.chunk_rest.call(null,seq__17722_17740__$1);
var G__17743 = c__4191__auto___17741;
var G__17744 = cljs.core.count.call(null,c__4191__auto___17741);
var G__17745 = 0;
seq__17722_17728 = G__17742;
chunk__17723_17729 = G__17743;
count__17724_17730 = G__17744;
i__17725_17731 = G__17745;
continue;
}
} else
{var vec__17727_17746 = cljs.core.first.call(null,seq__17722_17740__$1);var name_17747 = cljs.core.nth.call(null,vec__17727_17746,0,null);var value_17748 = cljs.core.nth.call(null,vec__17727_17746,1,null);domina.set_style_BANG_.call(null,content,name_17747,value_17748);
{
var G__17749 = cljs.core.next.call(null,seq__17722_17740__$1);
var G__17750 = null;
var G__17751 = 0;
var G__17752 = 0;
seq__17722_17728 = G__17749;
chunk__17723_17729 = G__17750;
count__17724_17730 = G__17751;
i__17725_17731 = G__17752;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__17759_17765 = cljs.core.seq.call(null,attrs);var chunk__17760_17766 = null;var count__17761_17767 = 0;var i__17762_17768 = 0;while(true){
if((i__17762_17768 < count__17761_17767))
{var vec__17763_17769 = cljs.core._nth.call(null,chunk__17760_17766,i__17762_17768);var name_17770 = cljs.core.nth.call(null,vec__17763_17769,0,null);var value_17771 = cljs.core.nth.call(null,vec__17763_17769,1,null);domina.set_attr_BANG_.call(null,content,name_17770,value_17771);
{
var G__17772 = seq__17759_17765;
var G__17773 = chunk__17760_17766;
var G__17774 = count__17761_17767;
var G__17775 = (i__17762_17768 + 1);
seq__17759_17765 = G__17772;
chunk__17760_17766 = G__17773;
count__17761_17767 = G__17774;
i__17762_17768 = G__17775;
continue;
}
} else
{var temp__4092__auto___17776 = cljs.core.seq.call(null,seq__17759_17765);if(temp__4092__auto___17776)
{var seq__17759_17777__$1 = temp__4092__auto___17776;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17759_17777__$1))
{var c__4191__auto___17778 = cljs.core.chunk_first.call(null,seq__17759_17777__$1);{
var G__17779 = cljs.core.chunk_rest.call(null,seq__17759_17777__$1);
var G__17780 = c__4191__auto___17778;
var G__17781 = cljs.core.count.call(null,c__4191__auto___17778);
var G__17782 = 0;
seq__17759_17765 = G__17779;
chunk__17760_17766 = G__17780;
count__17761_17767 = G__17781;
i__17762_17768 = G__17782;
continue;
}
} else
{var vec__17764_17783 = cljs.core.first.call(null,seq__17759_17777__$1);var name_17784 = cljs.core.nth.call(null,vec__17764_17783,0,null);var value_17785 = cljs.core.nth.call(null,vec__17764_17783,1,null);domina.set_attr_BANG_.call(null,content,name_17784,value_17785);
{
var G__17786 = cljs.core.next.call(null,seq__17759_17777__$1);
var G__17787 = null;
var G__17788 = 0;
var G__17789 = 0;
seq__17759_17765 = G__17786;
chunk__17760_17766 = G__17787;
count__17761_17767 = G__17788;
i__17762_17768 = G__17789;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__17794_17798 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17795_17799 = null;var count__17796_17800 = 0;var i__17797_17801 = 0;while(true){
if((i__17797_17801 < count__17796_17800))
{var node_17802 = cljs.core._nth.call(null,chunk__17795_17799,i__17797_17801);goog.dom.classes.add(node_17802,class$);
{
var G__17803 = seq__17794_17798;
var G__17804 = chunk__17795_17799;
var G__17805 = count__17796_17800;
var G__17806 = (i__17797_17801 + 1);
seq__17794_17798 = G__17803;
chunk__17795_17799 = G__17804;
count__17796_17800 = G__17805;
i__17797_17801 = G__17806;
continue;
}
} else
{var temp__4092__auto___17807 = cljs.core.seq.call(null,seq__17794_17798);if(temp__4092__auto___17807)
{var seq__17794_17808__$1 = temp__4092__auto___17807;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17794_17808__$1))
{var c__4191__auto___17809 = cljs.core.chunk_first.call(null,seq__17794_17808__$1);{
var G__17810 = cljs.core.chunk_rest.call(null,seq__17794_17808__$1);
var G__17811 = c__4191__auto___17809;
var G__17812 = cljs.core.count.call(null,c__4191__auto___17809);
var G__17813 = 0;
seq__17794_17798 = G__17810;
chunk__17795_17799 = G__17811;
count__17796_17800 = G__17812;
i__17797_17801 = G__17813;
continue;
}
} else
{var node_17814 = cljs.core.first.call(null,seq__17794_17808__$1);goog.dom.classes.add(node_17814,class$);
{
var G__17815 = cljs.core.next.call(null,seq__17794_17808__$1);
var G__17816 = null;
var G__17817 = 0;
var G__17818 = 0;
seq__17794_17798 = G__17815;
chunk__17795_17799 = G__17816;
count__17796_17800 = G__17817;
i__17797_17801 = G__17818;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__17823_17827 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17824_17828 = null;var count__17825_17829 = 0;var i__17826_17830 = 0;while(true){
if((i__17826_17830 < count__17825_17829))
{var node_17831 = cljs.core._nth.call(null,chunk__17824_17828,i__17826_17830);goog.dom.classes.remove(node_17831,class$);
{
var G__17832 = seq__17823_17827;
var G__17833 = chunk__17824_17828;
var G__17834 = count__17825_17829;
var G__17835 = (i__17826_17830 + 1);
seq__17823_17827 = G__17832;
chunk__17824_17828 = G__17833;
count__17825_17829 = G__17834;
i__17826_17830 = G__17835;
continue;
}
} else
{var temp__4092__auto___17836 = cljs.core.seq.call(null,seq__17823_17827);if(temp__4092__auto___17836)
{var seq__17823_17837__$1 = temp__4092__auto___17836;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17823_17837__$1))
{var c__4191__auto___17838 = cljs.core.chunk_first.call(null,seq__17823_17837__$1);{
var G__17839 = cljs.core.chunk_rest.call(null,seq__17823_17837__$1);
var G__17840 = c__4191__auto___17838;
var G__17841 = cljs.core.count.call(null,c__4191__auto___17838);
var G__17842 = 0;
seq__17823_17827 = G__17839;
chunk__17824_17828 = G__17840;
count__17825_17829 = G__17841;
i__17826_17830 = G__17842;
continue;
}
} else
{var node_17843 = cljs.core.first.call(null,seq__17823_17837__$1);goog.dom.classes.remove(node_17843,class$);
{
var G__17844 = cljs.core.next.call(null,seq__17823_17837__$1);
var G__17845 = null;
var G__17846 = 0;
var G__17847 = 0;
seq__17823_17827 = G__17844;
chunk__17824_17828 = G__17845;
count__17825_17829 = G__17846;
i__17826_17830 = G__17847;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__17852_17856 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17853_17857 = null;var count__17854_17858 = 0;var i__17855_17859 = 0;while(true){
if((i__17855_17859 < count__17854_17858))
{var node_17860 = cljs.core._nth.call(null,chunk__17853_17857,i__17855_17859);goog.dom.classes.toggle(node_17860,class$);
{
var G__17861 = seq__17852_17856;
var G__17862 = chunk__17853_17857;
var G__17863 = count__17854_17858;
var G__17864 = (i__17855_17859 + 1);
seq__17852_17856 = G__17861;
chunk__17853_17857 = G__17862;
count__17854_17858 = G__17863;
i__17855_17859 = G__17864;
continue;
}
} else
{var temp__4092__auto___17865 = cljs.core.seq.call(null,seq__17852_17856);if(temp__4092__auto___17865)
{var seq__17852_17866__$1 = temp__4092__auto___17865;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17852_17866__$1))
{var c__4191__auto___17867 = cljs.core.chunk_first.call(null,seq__17852_17866__$1);{
var G__17868 = cljs.core.chunk_rest.call(null,seq__17852_17866__$1);
var G__17869 = c__4191__auto___17867;
var G__17870 = cljs.core.count.call(null,c__4191__auto___17867);
var G__17871 = 0;
seq__17852_17856 = G__17868;
chunk__17853_17857 = G__17869;
count__17854_17858 = G__17870;
i__17855_17859 = G__17871;
continue;
}
} else
{var node_17872 = cljs.core.first.call(null,seq__17852_17866__$1);goog.dom.classes.toggle(node_17872,class$);
{
var G__17873 = cljs.core.next.call(null,seq__17852_17866__$1);
var G__17874 = null;
var G__17875 = 0;
var G__17876 = 0;
seq__17852_17856 = G__17873;
chunk__17853_17857 = G__17874;
count__17854_17858 = G__17875;
i__17855_17859 = G__17876;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_17885__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__17881_17886 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17882_17887 = null;var count__17883_17888 = 0;var i__17884_17889 = 0;while(true){
if((i__17884_17889 < count__17883_17888))
{var node_17890 = cljs.core._nth.call(null,chunk__17882_17887,i__17884_17889);goog.dom.classes.set(node_17890,classes_17885__$1);
{
var G__17891 = seq__17881_17886;
var G__17892 = chunk__17882_17887;
var G__17893 = count__17883_17888;
var G__17894 = (i__17884_17889 + 1);
seq__17881_17886 = G__17891;
chunk__17882_17887 = G__17892;
count__17883_17888 = G__17893;
i__17884_17889 = G__17894;
continue;
}
} else
{var temp__4092__auto___17895 = cljs.core.seq.call(null,seq__17881_17886);if(temp__4092__auto___17895)
{var seq__17881_17896__$1 = temp__4092__auto___17895;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17881_17896__$1))
{var c__4191__auto___17897 = cljs.core.chunk_first.call(null,seq__17881_17896__$1);{
var G__17898 = cljs.core.chunk_rest.call(null,seq__17881_17896__$1);
var G__17899 = c__4191__auto___17897;
var G__17900 = cljs.core.count.call(null,c__4191__auto___17897);
var G__17901 = 0;
seq__17881_17886 = G__17898;
chunk__17882_17887 = G__17899;
count__17883_17888 = G__17900;
i__17884_17889 = G__17901;
continue;
}
} else
{var node_17902 = cljs.core.first.call(null,seq__17881_17896__$1);goog.dom.classes.set(node_17902,classes_17885__$1);
{
var G__17903 = cljs.core.next.call(null,seq__17881_17896__$1);
var G__17904 = null;
var G__17905 = 0;
var G__17906 = 0;
seq__17881_17886 = G__17903;
chunk__17882_17887 = G__17904;
count__17883_17888 = G__17905;
i__17884_17889 = G__17906;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__17911_17915 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17912_17916 = null;var count__17913_17917 = 0;var i__17914_17918 = 0;while(true){
if((i__17914_17918 < count__17913_17917))
{var node_17919 = cljs.core._nth.call(null,chunk__17912_17916,i__17914_17918);goog.dom.setTextContent(node_17919,value);
{
var G__17920 = seq__17911_17915;
var G__17921 = chunk__17912_17916;
var G__17922 = count__17913_17917;
var G__17923 = (i__17914_17918 + 1);
seq__17911_17915 = G__17920;
chunk__17912_17916 = G__17921;
count__17913_17917 = G__17922;
i__17914_17918 = G__17923;
continue;
}
} else
{var temp__4092__auto___17924 = cljs.core.seq.call(null,seq__17911_17915);if(temp__4092__auto___17924)
{var seq__17911_17925__$1 = temp__4092__auto___17924;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17911_17925__$1))
{var c__4191__auto___17926 = cljs.core.chunk_first.call(null,seq__17911_17925__$1);{
var G__17927 = cljs.core.chunk_rest.call(null,seq__17911_17925__$1);
var G__17928 = c__4191__auto___17926;
var G__17929 = cljs.core.count.call(null,c__4191__auto___17926);
var G__17930 = 0;
seq__17911_17915 = G__17927;
chunk__17912_17916 = G__17928;
count__17913_17917 = G__17929;
i__17914_17918 = G__17930;
continue;
}
} else
{var node_17931 = cljs.core.first.call(null,seq__17911_17925__$1);goog.dom.setTextContent(node_17931,value);
{
var G__17932 = cljs.core.next.call(null,seq__17911_17925__$1);
var G__17933 = null;
var G__17934 = 0;
var G__17935 = 0;
seq__17911_17915 = G__17932;
chunk__17912_17916 = G__17933;
count__17913_17917 = G__17934;
i__17914_17918 = G__17935;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__17940_17944 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17941_17945 = null;var count__17942_17946 = 0;var i__17943_17947 = 0;while(true){
if((i__17943_17947 < count__17942_17946))
{var node_17948 = cljs.core._nth.call(null,chunk__17941_17945,i__17943_17947);goog.dom.forms.setValue(node_17948,value);
{
var G__17949 = seq__17940_17944;
var G__17950 = chunk__17941_17945;
var G__17951 = count__17942_17946;
var G__17952 = (i__17943_17947 + 1);
seq__17940_17944 = G__17949;
chunk__17941_17945 = G__17950;
count__17942_17946 = G__17951;
i__17943_17947 = G__17952;
continue;
}
} else
{var temp__4092__auto___17953 = cljs.core.seq.call(null,seq__17940_17944);if(temp__4092__auto___17953)
{var seq__17940_17954__$1 = temp__4092__auto___17953;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17940_17954__$1))
{var c__4191__auto___17955 = cljs.core.chunk_first.call(null,seq__17940_17954__$1);{
var G__17956 = cljs.core.chunk_rest.call(null,seq__17940_17954__$1);
var G__17957 = c__4191__auto___17955;
var G__17958 = cljs.core.count.call(null,c__4191__auto___17955);
var G__17959 = 0;
seq__17940_17944 = G__17956;
chunk__17941_17945 = G__17957;
count__17942_17946 = G__17958;
i__17943_17947 = G__17959;
continue;
}
} else
{var node_17960 = cljs.core.first.call(null,seq__17940_17954__$1);goog.dom.forms.setValue(node_17960,value);
{
var G__17961 = cljs.core.next.call(null,seq__17940_17954__$1);
var G__17962 = null;
var G__17963 = 0;
var G__17964 = 0;
seq__17940_17944 = G__17961;
chunk__17941_17945 = G__17962;
count__17942_17946 = G__17963;
i__17943_17947 = G__17964;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3431__auto__ = allows_inner_html_QMARK_;if(and__3431__auto__)
{var and__3431__auto____$1 = (function (){var or__3443__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3431__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3431__auto____$1;
}
} else
{return and__3431__auto__;
}
})()))
{var value_17975 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__17971_17976 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17972_17977 = null;var count__17973_17978 = 0;var i__17974_17979 = 0;while(true){
if((i__17974_17979 < count__17973_17978))
{var node_17980 = cljs.core._nth.call(null,chunk__17972_17977,i__17974_17979);node_17980.innerHTML = value_17975;
{
var G__17981 = seq__17971_17976;
var G__17982 = chunk__17972_17977;
var G__17983 = count__17973_17978;
var G__17984 = (i__17974_17979 + 1);
seq__17971_17976 = G__17981;
chunk__17972_17977 = G__17982;
count__17973_17978 = G__17983;
i__17974_17979 = G__17984;
continue;
}
} else
{var temp__4092__auto___17985 = cljs.core.seq.call(null,seq__17971_17976);if(temp__4092__auto___17985)
{var seq__17971_17986__$1 = temp__4092__auto___17985;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17971_17986__$1))
{var c__4191__auto___17987 = cljs.core.chunk_first.call(null,seq__17971_17986__$1);{
var G__17988 = cljs.core.chunk_rest.call(null,seq__17971_17986__$1);
var G__17989 = c__4191__auto___17987;
var G__17990 = cljs.core.count.call(null,c__4191__auto___17987);
var G__17991 = 0;
seq__17971_17976 = G__17988;
chunk__17972_17977 = G__17989;
count__17973_17978 = G__17990;
i__17974_17979 = G__17991;
continue;
}
} else
{var node_17992 = cljs.core.first.call(null,seq__17971_17986__$1);node_17992.innerHTML = value_17975;
{
var G__17993 = cljs.core.next.call(null,seq__17971_17986__$1);
var G__17994 = null;
var G__17995 = 0;
var G__17996 = 0;
seq__17971_17976 = G__17993;
chunk__17972_17977 = G__17994;
count__17973_17978 = G__17995;
i__17974_17979 = G__17996;
continue;
}
}
} else
{}
}
break;
}
}catch (e17970){if((e17970 instanceof Error))
{var e_17997 = e17970;domina.replace_children_BANG_.call(null,content,value_17975);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17970;
} else
{}
}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3431__auto__ = bubble;if(cljs.core.truth_(and__3431__auto__))
{return (value == null);
} else
{return and__3431__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3443__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__18004_18008 = cljs.core.seq.call(null,children);var chunk__18005_18009 = null;var count__18006_18010 = 0;var i__18007_18011 = 0;while(true){
if((i__18007_18011 < count__18006_18010))
{var child_18012 = cljs.core._nth.call(null,chunk__18005_18009,i__18007_18011);frag.appendChild(child_18012);
{
var G__18013 = seq__18004_18008;
var G__18014 = chunk__18005_18009;
var G__18015 = count__18006_18010;
var G__18016 = (i__18007_18011 + 1);
seq__18004_18008 = G__18013;
chunk__18005_18009 = G__18014;
count__18006_18010 = G__18015;
i__18007_18011 = G__18016;
continue;
}
} else
{var temp__4092__auto___18017 = cljs.core.seq.call(null,seq__18004_18008);if(temp__4092__auto___18017)
{var seq__18004_18018__$1 = temp__4092__auto___18017;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18004_18018__$1))
{var c__4191__auto___18019 = cljs.core.chunk_first.call(null,seq__18004_18018__$1);{
var G__18020 = cljs.core.chunk_rest.call(null,seq__18004_18018__$1);
var G__18021 = c__4191__auto___18019;
var G__18022 = cljs.core.count.call(null,c__4191__auto___18019);
var G__18023 = 0;
seq__18004_18008 = G__18020;
chunk__18005_18009 = G__18021;
count__18006_18010 = G__18022;
i__18007_18011 = G__18023;
continue;
}
} else
{var child_18024 = cljs.core.first.call(null,seq__18004_18018__$1);frag.appendChild(child_18024);
{
var G__18025 = cljs.core.next.call(null,seq__18004_18018__$1);
var G__18026 = null;
var G__18027 = 0;
var G__18028 = 0;
seq__18004_18008 = G__18025;
chunk__18005_18009 = G__18026;
count__18006_18010 = G__18027;
i__18007_18011 = G__18028;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__17998_SHARP_,p2__17999_SHARP_){return f.call(null,p1__17998_SHARP_,p2__17999_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3431__auto__ = obj;if(cljs.core.truth_(and__3431__auto__))
{var and__3431__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3431__auto____$1)
{return obj.length;
} else
{return and__3431__auto____$1;
}
} else
{return and__3431__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__18030 = list_thing;if(G__18030)
{var bit__4093__auto__ = (G__18030.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4093__auto__) || (G__18030.cljs$core$ISeqable$))
{return true;
} else
{if((!G__18030.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__18030);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__18030);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__18031 = content;if(G__18031)
{var bit__4093__auto__ = (G__18031.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4093__auto__) || (G__18031.cljs$core$ISeqable$))
{return true;
} else
{if((!G__18031.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__18031);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__18031);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__18032 = content;if(G__18032)
{var bit__4093__auto__ = (G__18032.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4093__auto__) || (G__18032.cljs$core$ISeqable$))
{return true;
} else
{if((!G__18032.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__18032);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__18032);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}

//# sourceMappingURL=domina.js.map