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
var opt_wrapper_14853 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_14854 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_14855 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_14854,table_section_wrapper_14854,opt_wrapper_14853,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_14855,table_section_wrapper_14854,cell_wrapper_14855,opt_wrapper_14853,table_section_wrapper_14854,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_14854]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3431__auto__ = div.firstChild;if(cljs.core.truth_(and__3431__auto__))
{return div.firstChild.childNodes;
} else
{return and__3431__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__14860 = cljs.core.seq.call(null,tbody);var chunk__14861 = null;var count__14862 = 0;var i__14863 = 0;while(true){
if((i__14863 < count__14862))
{var child = cljs.core._nth.call(null,chunk__14861,i__14863);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__14864 = seq__14860;
var G__14865 = chunk__14861;
var G__14866 = count__14862;
var G__14867 = (i__14863 + 1);
seq__14860 = G__14864;
chunk__14861 = G__14865;
count__14862 = G__14866;
i__14863 = G__14867;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14860);if(temp__4092__auto__)
{var seq__14860__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14860__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__14860__$1);{
var G__14868 = cljs.core.chunk_rest.call(null,seq__14860__$1);
var G__14869 = c__4191__auto__;
var G__14870 = cljs.core.count.call(null,c__4191__auto__);
var G__14871 = 0;
seq__14860 = G__14868;
chunk__14861 = G__14869;
count__14862 = G__14870;
i__14863 = G__14871;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__14860__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__14872 = cljs.core.next.call(null,seq__14860__$1);
var G__14873 = null;
var G__14874 = 0;
var G__14875 = 0;
seq__14860 = G__14872;
chunk__14861 = G__14873;
count__14862 = G__14874;
i__14863 = G__14875;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__14877 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__14877,0,null);var start_wrap = cljs.core.nth.call(null,vec__14877,1,null);var end_wrap = cljs.core.nth.call(null,vec__14877,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__14878 = wrapper.lastChild;
var G__14879 = (level - 1);
wrapper = G__14878;
level = G__14879;
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
domina.DomContent = (function (){var obj14881 = {};return obj14881;
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
log_debug.cljs$lang$applyTo = (function (arglist__14882){
var mesg = cljs.core.seq(arglist__14882);
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
log.cljs$lang$applyTo = (function (arglist__14883){
var mesg = cljs.core.seq(arglist__14883);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__14884){
var contents = cljs.core.seq(arglist__14884);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__14885_SHARP_){return p1__14885_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__14886_SHARP_,p2__14887_SHARP_){return goog.dom.insertChildAt(p1__14886_SHARP_,p2__14887_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__14889_SHARP_,p2__14888_SHARP_){return goog.dom.insertSiblingBefore(p2__14888_SHARP_,p1__14889_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__14891_SHARP_,p2__14890_SHARP_){return goog.dom.insertSiblingAfter(p2__14890_SHARP_,p1__14891_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__14893_SHARP_,p2__14892_SHARP_){return goog.dom.replaceNode(p2__14892_SHARP_,p1__14893_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__14898_14902 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14899_14903 = null;var count__14900_14904 = 0;var i__14901_14905 = 0;while(true){
if((i__14901_14905 < count__14900_14904))
{var n_14906 = cljs.core._nth.call(null,chunk__14899_14903,i__14901_14905);goog.style.setStyle(n_14906,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__14907 = seq__14898_14902;
var G__14908 = chunk__14899_14903;
var G__14909 = count__14900_14904;
var G__14910 = (i__14901_14905 + 1);
seq__14898_14902 = G__14907;
chunk__14899_14903 = G__14908;
count__14900_14904 = G__14909;
i__14901_14905 = G__14910;
continue;
}
} else
{var temp__4092__auto___14911 = cljs.core.seq.call(null,seq__14898_14902);if(temp__4092__auto___14911)
{var seq__14898_14912__$1 = temp__4092__auto___14911;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14898_14912__$1))
{var c__4191__auto___14913 = cljs.core.chunk_first.call(null,seq__14898_14912__$1);{
var G__14914 = cljs.core.chunk_rest.call(null,seq__14898_14912__$1);
var G__14915 = c__4191__auto___14913;
var G__14916 = cljs.core.count.call(null,c__4191__auto___14913);
var G__14917 = 0;
seq__14898_14902 = G__14914;
chunk__14899_14903 = G__14915;
count__14900_14904 = G__14916;
i__14901_14905 = G__14917;
continue;
}
} else
{var n_14918 = cljs.core.first.call(null,seq__14898_14912__$1);goog.style.setStyle(n_14918,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__14919 = cljs.core.next.call(null,seq__14898_14912__$1);
var G__14920 = null;
var G__14921 = 0;
var G__14922 = 0;
seq__14898_14902 = G__14919;
chunk__14899_14903 = G__14920;
count__14900_14904 = G__14921;
i__14901_14905 = G__14922;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__14923){
var content = cljs.core.first(arglist__14923);
arglist__14923 = cljs.core.next(arglist__14923);
var name = cljs.core.first(arglist__14923);
var value = cljs.core.rest(arglist__14923);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__14928_14932 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14929_14933 = null;var count__14930_14934 = 0;var i__14931_14935 = 0;while(true){
if((i__14931_14935 < count__14930_14934))
{var n_14936 = cljs.core._nth.call(null,chunk__14929_14933,i__14931_14935);n_14936.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__14937 = seq__14928_14932;
var G__14938 = chunk__14929_14933;
var G__14939 = count__14930_14934;
var G__14940 = (i__14931_14935 + 1);
seq__14928_14932 = G__14937;
chunk__14929_14933 = G__14938;
count__14930_14934 = G__14939;
i__14931_14935 = G__14940;
continue;
}
} else
{var temp__4092__auto___14941 = cljs.core.seq.call(null,seq__14928_14932);if(temp__4092__auto___14941)
{var seq__14928_14942__$1 = temp__4092__auto___14941;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14928_14942__$1))
{var c__4191__auto___14943 = cljs.core.chunk_first.call(null,seq__14928_14942__$1);{
var G__14944 = cljs.core.chunk_rest.call(null,seq__14928_14942__$1);
var G__14945 = c__4191__auto___14943;
var G__14946 = cljs.core.count.call(null,c__4191__auto___14943);
var G__14947 = 0;
seq__14928_14932 = G__14944;
chunk__14929_14933 = G__14945;
count__14930_14934 = G__14946;
i__14931_14935 = G__14947;
continue;
}
} else
{var n_14948 = cljs.core.first.call(null,seq__14928_14942__$1);n_14948.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__14949 = cljs.core.next.call(null,seq__14928_14942__$1);
var G__14950 = null;
var G__14951 = 0;
var G__14952 = 0;
seq__14928_14932 = G__14949;
chunk__14929_14933 = G__14950;
count__14930_14934 = G__14951;
i__14931_14935 = G__14952;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__14953){
var content = cljs.core.first(arglist__14953);
arglist__14953 = cljs.core.next(arglist__14953);
var name = cljs.core.first(arglist__14953);
var value = cljs.core.rest(arglist__14953);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__14958_14962 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14959_14963 = null;var count__14960_14964 = 0;var i__14961_14965 = 0;while(true){
if((i__14961_14965 < count__14960_14964))
{var n_14966 = cljs.core._nth.call(null,chunk__14959_14963,i__14961_14965);n_14966.removeAttribute(cljs.core.name.call(null,name));
{
var G__14967 = seq__14958_14962;
var G__14968 = chunk__14959_14963;
var G__14969 = count__14960_14964;
var G__14970 = (i__14961_14965 + 1);
seq__14958_14962 = G__14967;
chunk__14959_14963 = G__14968;
count__14960_14964 = G__14969;
i__14961_14965 = G__14970;
continue;
}
} else
{var temp__4092__auto___14971 = cljs.core.seq.call(null,seq__14958_14962);if(temp__4092__auto___14971)
{var seq__14958_14972__$1 = temp__4092__auto___14971;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14958_14972__$1))
{var c__4191__auto___14973 = cljs.core.chunk_first.call(null,seq__14958_14972__$1);{
var G__14974 = cljs.core.chunk_rest.call(null,seq__14958_14972__$1);
var G__14975 = c__4191__auto___14973;
var G__14976 = cljs.core.count.call(null,c__4191__auto___14973);
var G__14977 = 0;
seq__14958_14962 = G__14974;
chunk__14959_14963 = G__14975;
count__14960_14964 = G__14976;
i__14961_14965 = G__14977;
continue;
}
} else
{var n_14978 = cljs.core.first.call(null,seq__14958_14972__$1);n_14978.removeAttribute(cljs.core.name.call(null,name));
{
var G__14979 = cljs.core.next.call(null,seq__14958_14972__$1);
var G__14980 = null;
var G__14981 = 0;
var G__14982 = 0;
seq__14958_14962 = G__14979;
chunk__14959_14963 = G__14980;
count__14960_14964 = G__14981;
i__14961_14965 = G__14982;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__14984 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__14984,0,null);var v = cljs.core.nth.call(null,vec__14984,1,null);if(cljs.core.truth_((function (){var and__3431__auto__ = k;if(cljs.core.truth_(and__3431__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__14985_SHARP_){var attr = attrs__$1.item(p1__14985_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__14992_14998 = cljs.core.seq.call(null,styles);var chunk__14993_14999 = null;var count__14994_15000 = 0;var i__14995_15001 = 0;while(true){
if((i__14995_15001 < count__14994_15000))
{var vec__14996_15002 = cljs.core._nth.call(null,chunk__14993_14999,i__14995_15001);var name_15003 = cljs.core.nth.call(null,vec__14996_15002,0,null);var value_15004 = cljs.core.nth.call(null,vec__14996_15002,1,null);domina.set_style_BANG_.call(null,content,name_15003,value_15004);
{
var G__15005 = seq__14992_14998;
var G__15006 = chunk__14993_14999;
var G__15007 = count__14994_15000;
var G__15008 = (i__14995_15001 + 1);
seq__14992_14998 = G__15005;
chunk__14993_14999 = G__15006;
count__14994_15000 = G__15007;
i__14995_15001 = G__15008;
continue;
}
} else
{var temp__4092__auto___15009 = cljs.core.seq.call(null,seq__14992_14998);if(temp__4092__auto___15009)
{var seq__14992_15010__$1 = temp__4092__auto___15009;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14992_15010__$1))
{var c__4191__auto___15011 = cljs.core.chunk_first.call(null,seq__14992_15010__$1);{
var G__15012 = cljs.core.chunk_rest.call(null,seq__14992_15010__$1);
var G__15013 = c__4191__auto___15011;
var G__15014 = cljs.core.count.call(null,c__4191__auto___15011);
var G__15015 = 0;
seq__14992_14998 = G__15012;
chunk__14993_14999 = G__15013;
count__14994_15000 = G__15014;
i__14995_15001 = G__15015;
continue;
}
} else
{var vec__14997_15016 = cljs.core.first.call(null,seq__14992_15010__$1);var name_15017 = cljs.core.nth.call(null,vec__14997_15016,0,null);var value_15018 = cljs.core.nth.call(null,vec__14997_15016,1,null);domina.set_style_BANG_.call(null,content,name_15017,value_15018);
{
var G__15019 = cljs.core.next.call(null,seq__14992_15010__$1);
var G__15020 = null;
var G__15021 = 0;
var G__15022 = 0;
seq__14992_14998 = G__15019;
chunk__14993_14999 = G__15020;
count__14994_15000 = G__15021;
i__14995_15001 = G__15022;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__15029_15035 = cljs.core.seq.call(null,attrs);var chunk__15030_15036 = null;var count__15031_15037 = 0;var i__15032_15038 = 0;while(true){
if((i__15032_15038 < count__15031_15037))
{var vec__15033_15039 = cljs.core._nth.call(null,chunk__15030_15036,i__15032_15038);var name_15040 = cljs.core.nth.call(null,vec__15033_15039,0,null);var value_15041 = cljs.core.nth.call(null,vec__15033_15039,1,null);domina.set_attr_BANG_.call(null,content,name_15040,value_15041);
{
var G__15042 = seq__15029_15035;
var G__15043 = chunk__15030_15036;
var G__15044 = count__15031_15037;
var G__15045 = (i__15032_15038 + 1);
seq__15029_15035 = G__15042;
chunk__15030_15036 = G__15043;
count__15031_15037 = G__15044;
i__15032_15038 = G__15045;
continue;
}
} else
{var temp__4092__auto___15046 = cljs.core.seq.call(null,seq__15029_15035);if(temp__4092__auto___15046)
{var seq__15029_15047__$1 = temp__4092__auto___15046;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15029_15047__$1))
{var c__4191__auto___15048 = cljs.core.chunk_first.call(null,seq__15029_15047__$1);{
var G__15049 = cljs.core.chunk_rest.call(null,seq__15029_15047__$1);
var G__15050 = c__4191__auto___15048;
var G__15051 = cljs.core.count.call(null,c__4191__auto___15048);
var G__15052 = 0;
seq__15029_15035 = G__15049;
chunk__15030_15036 = G__15050;
count__15031_15037 = G__15051;
i__15032_15038 = G__15052;
continue;
}
} else
{var vec__15034_15053 = cljs.core.first.call(null,seq__15029_15047__$1);var name_15054 = cljs.core.nth.call(null,vec__15034_15053,0,null);var value_15055 = cljs.core.nth.call(null,vec__15034_15053,1,null);domina.set_attr_BANG_.call(null,content,name_15054,value_15055);
{
var G__15056 = cljs.core.next.call(null,seq__15029_15047__$1);
var G__15057 = null;
var G__15058 = 0;
var G__15059 = 0;
seq__15029_15035 = G__15056;
chunk__15030_15036 = G__15057;
count__15031_15037 = G__15058;
i__15032_15038 = G__15059;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__15064_15068 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15065_15069 = null;var count__15066_15070 = 0;var i__15067_15071 = 0;while(true){
if((i__15067_15071 < count__15066_15070))
{var node_15072 = cljs.core._nth.call(null,chunk__15065_15069,i__15067_15071);goog.dom.classes.add(node_15072,class$);
{
var G__15073 = seq__15064_15068;
var G__15074 = chunk__15065_15069;
var G__15075 = count__15066_15070;
var G__15076 = (i__15067_15071 + 1);
seq__15064_15068 = G__15073;
chunk__15065_15069 = G__15074;
count__15066_15070 = G__15075;
i__15067_15071 = G__15076;
continue;
}
} else
{var temp__4092__auto___15077 = cljs.core.seq.call(null,seq__15064_15068);if(temp__4092__auto___15077)
{var seq__15064_15078__$1 = temp__4092__auto___15077;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15064_15078__$1))
{var c__4191__auto___15079 = cljs.core.chunk_first.call(null,seq__15064_15078__$1);{
var G__15080 = cljs.core.chunk_rest.call(null,seq__15064_15078__$1);
var G__15081 = c__4191__auto___15079;
var G__15082 = cljs.core.count.call(null,c__4191__auto___15079);
var G__15083 = 0;
seq__15064_15068 = G__15080;
chunk__15065_15069 = G__15081;
count__15066_15070 = G__15082;
i__15067_15071 = G__15083;
continue;
}
} else
{var node_15084 = cljs.core.first.call(null,seq__15064_15078__$1);goog.dom.classes.add(node_15084,class$);
{
var G__15085 = cljs.core.next.call(null,seq__15064_15078__$1);
var G__15086 = null;
var G__15087 = 0;
var G__15088 = 0;
seq__15064_15068 = G__15085;
chunk__15065_15069 = G__15086;
count__15066_15070 = G__15087;
i__15067_15071 = G__15088;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__15093_15097 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15094_15098 = null;var count__15095_15099 = 0;var i__15096_15100 = 0;while(true){
if((i__15096_15100 < count__15095_15099))
{var node_15101 = cljs.core._nth.call(null,chunk__15094_15098,i__15096_15100);goog.dom.classes.remove(node_15101,class$);
{
var G__15102 = seq__15093_15097;
var G__15103 = chunk__15094_15098;
var G__15104 = count__15095_15099;
var G__15105 = (i__15096_15100 + 1);
seq__15093_15097 = G__15102;
chunk__15094_15098 = G__15103;
count__15095_15099 = G__15104;
i__15096_15100 = G__15105;
continue;
}
} else
{var temp__4092__auto___15106 = cljs.core.seq.call(null,seq__15093_15097);if(temp__4092__auto___15106)
{var seq__15093_15107__$1 = temp__4092__auto___15106;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15093_15107__$1))
{var c__4191__auto___15108 = cljs.core.chunk_first.call(null,seq__15093_15107__$1);{
var G__15109 = cljs.core.chunk_rest.call(null,seq__15093_15107__$1);
var G__15110 = c__4191__auto___15108;
var G__15111 = cljs.core.count.call(null,c__4191__auto___15108);
var G__15112 = 0;
seq__15093_15097 = G__15109;
chunk__15094_15098 = G__15110;
count__15095_15099 = G__15111;
i__15096_15100 = G__15112;
continue;
}
} else
{var node_15113 = cljs.core.first.call(null,seq__15093_15107__$1);goog.dom.classes.remove(node_15113,class$);
{
var G__15114 = cljs.core.next.call(null,seq__15093_15107__$1);
var G__15115 = null;
var G__15116 = 0;
var G__15117 = 0;
seq__15093_15097 = G__15114;
chunk__15094_15098 = G__15115;
count__15095_15099 = G__15116;
i__15096_15100 = G__15117;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__15122_15126 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15123_15127 = null;var count__15124_15128 = 0;var i__15125_15129 = 0;while(true){
if((i__15125_15129 < count__15124_15128))
{var node_15130 = cljs.core._nth.call(null,chunk__15123_15127,i__15125_15129);goog.dom.classes.toggle(node_15130,class$);
{
var G__15131 = seq__15122_15126;
var G__15132 = chunk__15123_15127;
var G__15133 = count__15124_15128;
var G__15134 = (i__15125_15129 + 1);
seq__15122_15126 = G__15131;
chunk__15123_15127 = G__15132;
count__15124_15128 = G__15133;
i__15125_15129 = G__15134;
continue;
}
} else
{var temp__4092__auto___15135 = cljs.core.seq.call(null,seq__15122_15126);if(temp__4092__auto___15135)
{var seq__15122_15136__$1 = temp__4092__auto___15135;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15122_15136__$1))
{var c__4191__auto___15137 = cljs.core.chunk_first.call(null,seq__15122_15136__$1);{
var G__15138 = cljs.core.chunk_rest.call(null,seq__15122_15136__$1);
var G__15139 = c__4191__auto___15137;
var G__15140 = cljs.core.count.call(null,c__4191__auto___15137);
var G__15141 = 0;
seq__15122_15126 = G__15138;
chunk__15123_15127 = G__15139;
count__15124_15128 = G__15140;
i__15125_15129 = G__15141;
continue;
}
} else
{var node_15142 = cljs.core.first.call(null,seq__15122_15136__$1);goog.dom.classes.toggle(node_15142,class$);
{
var G__15143 = cljs.core.next.call(null,seq__15122_15136__$1);
var G__15144 = null;
var G__15145 = 0;
var G__15146 = 0;
seq__15122_15126 = G__15143;
chunk__15123_15127 = G__15144;
count__15124_15128 = G__15145;
i__15125_15129 = G__15146;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_15155__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__15151_15156 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15152_15157 = null;var count__15153_15158 = 0;var i__15154_15159 = 0;while(true){
if((i__15154_15159 < count__15153_15158))
{var node_15160 = cljs.core._nth.call(null,chunk__15152_15157,i__15154_15159);goog.dom.classes.set(node_15160,classes_15155__$1);
{
var G__15161 = seq__15151_15156;
var G__15162 = chunk__15152_15157;
var G__15163 = count__15153_15158;
var G__15164 = (i__15154_15159 + 1);
seq__15151_15156 = G__15161;
chunk__15152_15157 = G__15162;
count__15153_15158 = G__15163;
i__15154_15159 = G__15164;
continue;
}
} else
{var temp__4092__auto___15165 = cljs.core.seq.call(null,seq__15151_15156);if(temp__4092__auto___15165)
{var seq__15151_15166__$1 = temp__4092__auto___15165;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15151_15166__$1))
{var c__4191__auto___15167 = cljs.core.chunk_first.call(null,seq__15151_15166__$1);{
var G__15168 = cljs.core.chunk_rest.call(null,seq__15151_15166__$1);
var G__15169 = c__4191__auto___15167;
var G__15170 = cljs.core.count.call(null,c__4191__auto___15167);
var G__15171 = 0;
seq__15151_15156 = G__15168;
chunk__15152_15157 = G__15169;
count__15153_15158 = G__15170;
i__15154_15159 = G__15171;
continue;
}
} else
{var node_15172 = cljs.core.first.call(null,seq__15151_15166__$1);goog.dom.classes.set(node_15172,classes_15155__$1);
{
var G__15173 = cljs.core.next.call(null,seq__15151_15166__$1);
var G__15174 = null;
var G__15175 = 0;
var G__15176 = 0;
seq__15151_15156 = G__15173;
chunk__15152_15157 = G__15174;
count__15153_15158 = G__15175;
i__15154_15159 = G__15176;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__15181_15185 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15182_15186 = null;var count__15183_15187 = 0;var i__15184_15188 = 0;while(true){
if((i__15184_15188 < count__15183_15187))
{var node_15189 = cljs.core._nth.call(null,chunk__15182_15186,i__15184_15188);goog.dom.setTextContent(node_15189,value);
{
var G__15190 = seq__15181_15185;
var G__15191 = chunk__15182_15186;
var G__15192 = count__15183_15187;
var G__15193 = (i__15184_15188 + 1);
seq__15181_15185 = G__15190;
chunk__15182_15186 = G__15191;
count__15183_15187 = G__15192;
i__15184_15188 = G__15193;
continue;
}
} else
{var temp__4092__auto___15194 = cljs.core.seq.call(null,seq__15181_15185);if(temp__4092__auto___15194)
{var seq__15181_15195__$1 = temp__4092__auto___15194;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15181_15195__$1))
{var c__4191__auto___15196 = cljs.core.chunk_first.call(null,seq__15181_15195__$1);{
var G__15197 = cljs.core.chunk_rest.call(null,seq__15181_15195__$1);
var G__15198 = c__4191__auto___15196;
var G__15199 = cljs.core.count.call(null,c__4191__auto___15196);
var G__15200 = 0;
seq__15181_15185 = G__15197;
chunk__15182_15186 = G__15198;
count__15183_15187 = G__15199;
i__15184_15188 = G__15200;
continue;
}
} else
{var node_15201 = cljs.core.first.call(null,seq__15181_15195__$1);goog.dom.setTextContent(node_15201,value);
{
var G__15202 = cljs.core.next.call(null,seq__15181_15195__$1);
var G__15203 = null;
var G__15204 = 0;
var G__15205 = 0;
seq__15181_15185 = G__15202;
chunk__15182_15186 = G__15203;
count__15183_15187 = G__15204;
i__15184_15188 = G__15205;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__15210_15214 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15211_15215 = null;var count__15212_15216 = 0;var i__15213_15217 = 0;while(true){
if((i__15213_15217 < count__15212_15216))
{var node_15218 = cljs.core._nth.call(null,chunk__15211_15215,i__15213_15217);goog.dom.forms.setValue(node_15218,value);
{
var G__15219 = seq__15210_15214;
var G__15220 = chunk__15211_15215;
var G__15221 = count__15212_15216;
var G__15222 = (i__15213_15217 + 1);
seq__15210_15214 = G__15219;
chunk__15211_15215 = G__15220;
count__15212_15216 = G__15221;
i__15213_15217 = G__15222;
continue;
}
} else
{var temp__4092__auto___15223 = cljs.core.seq.call(null,seq__15210_15214);if(temp__4092__auto___15223)
{var seq__15210_15224__$1 = temp__4092__auto___15223;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15210_15224__$1))
{var c__4191__auto___15225 = cljs.core.chunk_first.call(null,seq__15210_15224__$1);{
var G__15226 = cljs.core.chunk_rest.call(null,seq__15210_15224__$1);
var G__15227 = c__4191__auto___15225;
var G__15228 = cljs.core.count.call(null,c__4191__auto___15225);
var G__15229 = 0;
seq__15210_15214 = G__15226;
chunk__15211_15215 = G__15227;
count__15212_15216 = G__15228;
i__15213_15217 = G__15229;
continue;
}
} else
{var node_15230 = cljs.core.first.call(null,seq__15210_15224__$1);goog.dom.forms.setValue(node_15230,value);
{
var G__15231 = cljs.core.next.call(null,seq__15210_15224__$1);
var G__15232 = null;
var G__15233 = 0;
var G__15234 = 0;
seq__15210_15214 = G__15231;
chunk__15211_15215 = G__15232;
count__15212_15216 = G__15233;
i__15213_15217 = G__15234;
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
{var value_15245 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__15241_15246 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15242_15247 = null;var count__15243_15248 = 0;var i__15244_15249 = 0;while(true){
if((i__15244_15249 < count__15243_15248))
{var node_15250 = cljs.core._nth.call(null,chunk__15242_15247,i__15244_15249);node_15250.innerHTML = value_15245;
{
var G__15251 = seq__15241_15246;
var G__15252 = chunk__15242_15247;
var G__15253 = count__15243_15248;
var G__15254 = (i__15244_15249 + 1);
seq__15241_15246 = G__15251;
chunk__15242_15247 = G__15252;
count__15243_15248 = G__15253;
i__15244_15249 = G__15254;
continue;
}
} else
{var temp__4092__auto___15255 = cljs.core.seq.call(null,seq__15241_15246);if(temp__4092__auto___15255)
{var seq__15241_15256__$1 = temp__4092__auto___15255;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15241_15256__$1))
{var c__4191__auto___15257 = cljs.core.chunk_first.call(null,seq__15241_15256__$1);{
var G__15258 = cljs.core.chunk_rest.call(null,seq__15241_15256__$1);
var G__15259 = c__4191__auto___15257;
var G__15260 = cljs.core.count.call(null,c__4191__auto___15257);
var G__15261 = 0;
seq__15241_15246 = G__15258;
chunk__15242_15247 = G__15259;
count__15243_15248 = G__15260;
i__15244_15249 = G__15261;
continue;
}
} else
{var node_15262 = cljs.core.first.call(null,seq__15241_15256__$1);node_15262.innerHTML = value_15245;
{
var G__15263 = cljs.core.next.call(null,seq__15241_15256__$1);
var G__15264 = null;
var G__15265 = 0;
var G__15266 = 0;
seq__15241_15246 = G__15263;
chunk__15242_15247 = G__15264;
count__15243_15248 = G__15265;
i__15244_15249 = G__15266;
continue;
}
}
} else
{}
}
break;
}
}catch (e15240){if((e15240 instanceof Error))
{var e_15267 = e15240;domina.replace_children_BANG_.call(null,content,value_15245);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15240;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__15274_15278 = cljs.core.seq.call(null,children);var chunk__15275_15279 = null;var count__15276_15280 = 0;var i__15277_15281 = 0;while(true){
if((i__15277_15281 < count__15276_15280))
{var child_15282 = cljs.core._nth.call(null,chunk__15275_15279,i__15277_15281);frag.appendChild(child_15282);
{
var G__15283 = seq__15274_15278;
var G__15284 = chunk__15275_15279;
var G__15285 = count__15276_15280;
var G__15286 = (i__15277_15281 + 1);
seq__15274_15278 = G__15283;
chunk__15275_15279 = G__15284;
count__15276_15280 = G__15285;
i__15277_15281 = G__15286;
continue;
}
} else
{var temp__4092__auto___15287 = cljs.core.seq.call(null,seq__15274_15278);if(temp__4092__auto___15287)
{var seq__15274_15288__$1 = temp__4092__auto___15287;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15274_15288__$1))
{var c__4191__auto___15289 = cljs.core.chunk_first.call(null,seq__15274_15288__$1);{
var G__15290 = cljs.core.chunk_rest.call(null,seq__15274_15288__$1);
var G__15291 = c__4191__auto___15289;
var G__15292 = cljs.core.count.call(null,c__4191__auto___15289);
var G__15293 = 0;
seq__15274_15278 = G__15290;
chunk__15275_15279 = G__15291;
count__15276_15280 = G__15292;
i__15277_15281 = G__15293;
continue;
}
} else
{var child_15294 = cljs.core.first.call(null,seq__15274_15288__$1);frag.appendChild(child_15294);
{
var G__15295 = cljs.core.next.call(null,seq__15274_15288__$1);
var G__15296 = null;
var G__15297 = 0;
var G__15298 = 0;
seq__15274_15278 = G__15295;
chunk__15275_15279 = G__15296;
count__15276_15280 = G__15297;
i__15277_15281 = G__15298;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__15268_SHARP_,p2__15269_SHARP_){return f.call(null,p1__15268_SHARP_,p2__15269_SHARP_);
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
{if((function (){var G__15300 = list_thing;if(G__15300)
{var bit__4093__auto__ = (G__15300.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4093__auto__) || (G__15300.cljs$core$ISeqable$))
{return true;
} else
{if((!G__15300.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15300);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15300);
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
{if((function (){var G__15301 = content;if(G__15301)
{var bit__4093__auto__ = (G__15301.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4093__auto__) || (G__15301.cljs$core$ISeqable$))
{return true;
} else
{if((!G__15301.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15301);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15301);
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
{if((function (){var G__15302 = content;if(G__15302)
{var bit__4093__auto__ = (G__15302.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4093__auto__) || (G__15302.cljs$core$ISeqable$))
{return true;
} else
{if((!G__15302.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15302);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15302);
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