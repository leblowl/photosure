// Compiled by ClojureScript 0.0-2173
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj14534 = {};return obj14534;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__3431__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (dommy.template._elem[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (dommy.template._elem["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PElement.-elem",this$);
}
}
})().call(null,this$);
}
});
/**
* index of css character (#,.) in base-element. bottleneck
*/
dommy.template.next_css_index = (function next_css_index(s,start_idx){var id_idx = s.indexOf("#",start_idx);var class_idx = s.indexOf(".",start_idx);var idx = Math.min(id_idx,class_idx);if((idx < 0))
{return Math.max(id_idx,class_idx);
} else
{return idx;
}
});
/**
* dom element from css-style keyword like :a.class1 or :span#my-span.class
*/
dommy.template.base_element = (function base_element(node_key){var node_str = cljs.core.name.call(null,node_key);var base_idx = dommy.template.next_css_index.call(null,node_str,0);var tag = (((base_idx > 0))?node_str.substring(0,base_idx):(((base_idx === 0))?"div":((new cljs.core.Keyword(null,"else","else",1017020587))?node_str:null)));var node = (cljs.core.truth_(dommy.template._PLUS_svg_tags_PLUS_.call(null,tag))?document.createElementNS(dommy.template._PLUS_svg_ns_PLUS_,tag):document.createElement(tag));if((base_idx >= 0))
{var str_14537 = node_str.substring(base_idx);while(true){
var next_idx_14538 = dommy.template.next_css_index.call(null,str_14537,1);var frag_14539 = (((next_idx_14538 >= 0))?str_14537.substring(0,next_idx_14538):str_14537);var G__14536_14540 = frag_14539.charAt(0);if(cljs.core._EQ_.call(null,"#",G__14536_14540))
{node.setAttribute("id",frag_14539.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__14536_14540))
{dommy.attrs.add_class_BANG_.call(null,node,frag_14539.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_14539.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_14538 >= 0))
{{
var G__14541 = str_14537.substring(next_idx_14538);
str_14537 = G__14541;
continue;
}
} else
{}
break;
}
} else
{}
return node;
});
dommy.template.throw_unable_to_make_node = (function throw_unable_to_make_node(node_data){throw [cljs.core.str("Don't know how to make node from: "),cljs.core.str(cljs.core.pr_str.call(null,node_data))].join('');
});
/**
* take data and return a document fragment
*/
dommy.template.__GT_document_fragment = (function() {
var __GT_document_fragment = null;
var __GT_document_fragment__1 = (function (data){return __GT_document_fragment.call(null,document.createDocumentFragment(),data);
});
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__14547 = data;if(G__14547)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__14547.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__14547.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__14547);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__14547);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__14548_14552 = cljs.core.seq.call(null,data);var chunk__14549_14553 = null;var count__14550_14554 = 0;var i__14551_14555 = 0;while(true){
if((i__14551_14555 < count__14550_14554))
{var child_14556 = cljs.core._nth.call(null,chunk__14549_14553,i__14551_14555);__GT_document_fragment.call(null,result_frag,child_14556);
{
var G__14557 = seq__14548_14552;
var G__14558 = chunk__14549_14553;
var G__14559 = count__14550_14554;
var G__14560 = (i__14551_14555 + 1);
seq__14548_14552 = G__14557;
chunk__14549_14553 = G__14558;
count__14550_14554 = G__14559;
i__14551_14555 = G__14560;
continue;
}
} else
{var temp__4092__auto___14561 = cljs.core.seq.call(null,seq__14548_14552);if(temp__4092__auto___14561)
{var seq__14548_14562__$1 = temp__4092__auto___14561;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14548_14562__$1))
{var c__4191__auto___14563 = cljs.core.chunk_first.call(null,seq__14548_14562__$1);{
var G__14564 = cljs.core.chunk_rest.call(null,seq__14548_14562__$1);
var G__14565 = c__4191__auto___14563;
var G__14566 = cljs.core.count.call(null,c__4191__auto___14563);
var G__14567 = 0;
seq__14548_14552 = G__14564;
chunk__14549_14553 = G__14565;
count__14550_14554 = G__14566;
i__14551_14555 = G__14567;
continue;
}
} else
{var child_14568 = cljs.core.first.call(null,seq__14548_14562__$1);__GT_document_fragment.call(null,result_frag,child_14568);
{
var G__14569 = cljs.core.next.call(null,seq__14548_14562__$1);
var G__14570 = null;
var G__14571 = 0;
var G__14572 = 0;
seq__14548_14552 = G__14569;
chunk__14549_14553 = G__14570;
count__14550_14554 = G__14571;
i__14551_14555 = G__14572;
continue;
}
}
} else
{}
}
break;
}
return result_frag;
} else
{if((data == null))
{return result_frag;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return dommy.template.throw_unable_to_make_node.call(null,data);
} else
{return null;
}
}
}
}
});
__GT_document_fragment = function(result_frag,data){
switch(arguments.length){
case 1:
return __GT_document_fragment__1.call(this,result_frag);
case 2:
return __GT_document_fragment__2.call(this,result_frag,data);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_document_fragment.cljs$core$IFn$_invoke$arity$1 = __GT_document_fragment__1;
__GT_document_fragment.cljs$core$IFn$_invoke$arity$2 = __GT_document_fragment__2;
return __GT_document_fragment;
})()
;
/**
* take data and return DOM node if it satisfies PElement and tries to
* make a document fragment otherwise
*/
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__14574 = data;if(G__14574)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__14574.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__14574.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__14574);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__14574);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.__GT_document_fragment.call(null,data);
}
});
/**
* element with either attrs or nested children [:div [:span "Hello"]]
*/
dommy.template.compound_element = (function compound_element(p__14575){var vec__14595 = p__14575;var tag_name = cljs.core.nth.call(null,vec__14595,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__14595,1,null);var children = cljs.core.nthnext.call(null,vec__14595,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__14597 = maybe_attrs;if(G__14597)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__14597.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__14597.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__14597);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__14597);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__14598_14614 = cljs.core.seq.call(null,attrs);var chunk__14599_14615 = null;var count__14600_14616 = 0;var i__14601_14617 = 0;while(true){
if((i__14601_14617 < count__14600_14616))
{var vec__14602_14618 = cljs.core._nth.call(null,chunk__14599_14615,i__14601_14617);var k_14619 = cljs.core.nth.call(null,vec__14602_14618,0,null);var v_14620 = cljs.core.nth.call(null,vec__14602_14618,1,null);var G__14603_14621 = k_14619;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__14603_14621))
{var seq__14604_14622 = cljs.core.seq.call(null,v_14620);var chunk__14605_14623 = null;var count__14606_14624 = 0;var i__14607_14625 = 0;while(true){
if((i__14607_14625 < count__14606_14624))
{var c_14626 = cljs.core._nth.call(null,chunk__14605_14623,i__14607_14625);dommy.attrs.add_class_BANG_.call(null,n,c_14626);
{
var G__14627 = seq__14604_14622;
var G__14628 = chunk__14605_14623;
var G__14629 = count__14606_14624;
var G__14630 = (i__14607_14625 + 1);
seq__14604_14622 = G__14627;
chunk__14605_14623 = G__14628;
count__14606_14624 = G__14629;
i__14607_14625 = G__14630;
continue;
}
} else
{var temp__4092__auto___14631 = cljs.core.seq.call(null,seq__14604_14622);if(temp__4092__auto___14631)
{var seq__14604_14632__$1 = temp__4092__auto___14631;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14604_14632__$1))
{var c__4191__auto___14633 = cljs.core.chunk_first.call(null,seq__14604_14632__$1);{
var G__14634 = cljs.core.chunk_rest.call(null,seq__14604_14632__$1);
var G__14635 = c__4191__auto___14633;
var G__14636 = cljs.core.count.call(null,c__4191__auto___14633);
var G__14637 = 0;
seq__14604_14622 = G__14634;
chunk__14605_14623 = G__14635;
count__14606_14624 = G__14636;
i__14607_14625 = G__14637;
continue;
}
} else
{var c_14638 = cljs.core.first.call(null,seq__14604_14632__$1);dommy.attrs.add_class_BANG_.call(null,n,c_14638);
{
var G__14639 = cljs.core.next.call(null,seq__14604_14632__$1);
var G__14640 = null;
var G__14641 = 0;
var G__14642 = 0;
seq__14604_14622 = G__14639;
chunk__14605_14623 = G__14640;
count__14606_14624 = G__14641;
i__14607_14625 = G__14642;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__14603_14621))
{dommy.attrs.add_class_BANG_.call(null,n,v_14620);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_14619,v_14620);
} else
{}
}
}
{
var G__14643 = seq__14598_14614;
var G__14644 = chunk__14599_14615;
var G__14645 = count__14600_14616;
var G__14646 = (i__14601_14617 + 1);
seq__14598_14614 = G__14643;
chunk__14599_14615 = G__14644;
count__14600_14616 = G__14645;
i__14601_14617 = G__14646;
continue;
}
} else
{var temp__4092__auto___14647 = cljs.core.seq.call(null,seq__14598_14614);if(temp__4092__auto___14647)
{var seq__14598_14648__$1 = temp__4092__auto___14647;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14598_14648__$1))
{var c__4191__auto___14649 = cljs.core.chunk_first.call(null,seq__14598_14648__$1);{
var G__14650 = cljs.core.chunk_rest.call(null,seq__14598_14648__$1);
var G__14651 = c__4191__auto___14649;
var G__14652 = cljs.core.count.call(null,c__4191__auto___14649);
var G__14653 = 0;
seq__14598_14614 = G__14650;
chunk__14599_14615 = G__14651;
count__14600_14616 = G__14652;
i__14601_14617 = G__14653;
continue;
}
} else
{var vec__14608_14654 = cljs.core.first.call(null,seq__14598_14648__$1);var k_14655 = cljs.core.nth.call(null,vec__14608_14654,0,null);var v_14656 = cljs.core.nth.call(null,vec__14608_14654,1,null);var G__14609_14657 = k_14655;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__14609_14657))
{var seq__14610_14658 = cljs.core.seq.call(null,v_14656);var chunk__14611_14659 = null;var count__14612_14660 = 0;var i__14613_14661 = 0;while(true){
if((i__14613_14661 < count__14612_14660))
{var c_14662 = cljs.core._nth.call(null,chunk__14611_14659,i__14613_14661);dommy.attrs.add_class_BANG_.call(null,n,c_14662);
{
var G__14663 = seq__14610_14658;
var G__14664 = chunk__14611_14659;
var G__14665 = count__14612_14660;
var G__14666 = (i__14613_14661 + 1);
seq__14610_14658 = G__14663;
chunk__14611_14659 = G__14664;
count__14612_14660 = G__14665;
i__14613_14661 = G__14666;
continue;
}
} else
{var temp__4092__auto___14667__$1 = cljs.core.seq.call(null,seq__14610_14658);if(temp__4092__auto___14667__$1)
{var seq__14610_14668__$1 = temp__4092__auto___14667__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14610_14668__$1))
{var c__4191__auto___14669 = cljs.core.chunk_first.call(null,seq__14610_14668__$1);{
var G__14670 = cljs.core.chunk_rest.call(null,seq__14610_14668__$1);
var G__14671 = c__4191__auto___14669;
var G__14672 = cljs.core.count.call(null,c__4191__auto___14669);
var G__14673 = 0;
seq__14610_14658 = G__14670;
chunk__14611_14659 = G__14671;
count__14612_14660 = G__14672;
i__14613_14661 = G__14673;
continue;
}
} else
{var c_14674 = cljs.core.first.call(null,seq__14610_14668__$1);dommy.attrs.add_class_BANG_.call(null,n,c_14674);
{
var G__14675 = cljs.core.next.call(null,seq__14610_14668__$1);
var G__14676 = null;
var G__14677 = 0;
var G__14678 = 0;
seq__14610_14658 = G__14675;
chunk__14611_14659 = G__14676;
count__14612_14660 = G__14677;
i__14613_14661 = G__14678;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__14609_14657))
{dommy.attrs.add_class_BANG_.call(null,n,v_14656);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_14655,v_14656);
} else
{}
}
}
{
var G__14679 = cljs.core.next.call(null,seq__14598_14648__$1);
var G__14680 = null;
var G__14681 = 0;
var G__14682 = 0;
seq__14598_14614 = G__14679;
chunk__14599_14615 = G__14680;
count__14600_14616 = G__14681;
i__14601_14617 = G__14682;
continue;
}
}
} else
{}
}
break;
}
n.appendChild(dommy.template.__GT_node_like.call(null,children__$1));
return n;
});
(dommy.template.PElement["string"] = true);
(dommy.template._elem["string"] = (function (this$){if((this$ instanceof cljs.core.Keyword))
{return dommy.template.base_element.call(null,this$);
} else
{return document.createTextNode([cljs.core.str(this$)].join(''));
}
}));
(dommy.template.PElement["number"] = true);
(dommy.template._elem["number"] = (function (this$){return document.createTextNode([cljs.core.str(this$)].join(''));
}));
cljs.core.PersistentVector.prototype.dommy$template$PElement$ = true;
cljs.core.PersistentVector.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return dommy.template.compound_element.call(null,this$__$1);
});
SVGElement.prototype.dommy$template$PElement$ = true;
SVGElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
Document.prototype.dommy$template$PElement$ = true;
Document.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
Text.prototype.dommy$template$PElement$ = true;
Text.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
DocumentFragment.prototype.dommy$template$PElement$ = true;
DocumentFragment.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
HTMLElement.prototype.dommy$template$PElement$ = true;
HTMLElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
try{Window.prototype.dommy$template$PElement$ = true;
Window.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
}catch (e14683){if((e14683 instanceof ReferenceError))
{var __14684 = e14683;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14683;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__14686 = data;if(G__14686)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__14686.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__14686.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__14686);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__14686);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.throw_unable_to_make_node.call(null,data);
}
});
dommy.template.html__GT_nodes = (function html__GT_nodes(html){var parent = document.createElement("div");parent.insertAdjacentHTML("beforeend",html);
return cljs.core.seq.call(null,Array.prototype.slice.call(parent.childNodes));
});

//# sourceMappingURL=template.js.map