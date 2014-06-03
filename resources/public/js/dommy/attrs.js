// Compiled by ClojureScript 0.0-2173
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__3431__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__3431__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__3431__auto__;
}
});
/**
* Finds the index of class in a space-delimited class-name
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_index = (function class_index(class_name,class$){var start_from = 0;while(true){
var i = class_name.indexOf(class$,start_from);if((i >= 0))
{if(dommy.attrs.class_match_QMARK_.call(null,class_name,class$,i))
{return i;
} else
{{
var G__14687 = (i + class$.length);
start_from = G__14687;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Does an HTML element have a class. Uses Element::classList if
* available and otherwise does fast parse of className string
*/
dommy.attrs.has_class_QMARK_ = (function has_class_QMARK_(elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto__ = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto__))
{var class_list = temp__4090__auto__;return class_list.contains(class$__$1);
} else
{var temp__4092__auto__ = elem__$1.className;if(cljs.core.truth_(temp__4092__auto__))
{var class_name = temp__4092__auto__;var temp__4092__auto____$1 = dommy.attrs.class_index.call(null,class_name,class$__$1);if(cljs.core.truth_(temp__4092__auto____$1))
{var i = temp__4092__auto____$1;return (i >= 0);
} else
{return null;
}
} else
{return null;
}
}
});
/**
* add class to element
* @param {...*} var_args
*/
dommy.attrs.add_class_BANG_ = (function() {
var add_class_BANG_ = null;
var add_class_BANG___2 = (function (elem,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var classes__$1 = clojure.string.trim.call(null,cljs.core.name.call(null,classes));if(cljs.core.seq.call(null,classes__$1))
{var temp__4090__auto___14712 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___14712))
{var class_list_14713 = temp__4090__auto___14712;var seq__14700_14714 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__14701_14715 = null;var count__14702_14716 = 0;var i__14703_14717 = 0;while(true){
if((i__14703_14717 < count__14702_14716))
{var class_14718 = cljs.core._nth.call(null,chunk__14701_14715,i__14703_14717);class_list_14713.add(class_14718);
{
var G__14719 = seq__14700_14714;
var G__14720 = chunk__14701_14715;
var G__14721 = count__14702_14716;
var G__14722 = (i__14703_14717 + 1);
seq__14700_14714 = G__14719;
chunk__14701_14715 = G__14720;
count__14702_14716 = G__14721;
i__14703_14717 = G__14722;
continue;
}
} else
{var temp__4092__auto___14723 = cljs.core.seq.call(null,seq__14700_14714);if(temp__4092__auto___14723)
{var seq__14700_14724__$1 = temp__4092__auto___14723;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14700_14724__$1))
{var c__4191__auto___14725 = cljs.core.chunk_first.call(null,seq__14700_14724__$1);{
var G__14726 = cljs.core.chunk_rest.call(null,seq__14700_14724__$1);
var G__14727 = c__4191__auto___14725;
var G__14728 = cljs.core.count.call(null,c__4191__auto___14725);
var G__14729 = 0;
seq__14700_14714 = G__14726;
chunk__14701_14715 = G__14727;
count__14702_14716 = G__14728;
i__14703_14717 = G__14729;
continue;
}
} else
{var class_14730 = cljs.core.first.call(null,seq__14700_14724__$1);class_list_14713.add(class_14730);
{
var G__14731 = cljs.core.next.call(null,seq__14700_14724__$1);
var G__14732 = null;
var G__14733 = 0;
var G__14734 = 0;
seq__14700_14714 = G__14731;
chunk__14701_14715 = G__14732;
count__14702_14716 = G__14733;
i__14703_14717 = G__14734;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_14735 = elem__$1.className;var seq__14704_14736 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__14705_14737 = null;var count__14706_14738 = 0;var i__14707_14739 = 0;while(true){
if((i__14707_14739 < count__14706_14738))
{var class_14740 = cljs.core._nth.call(null,chunk__14705_14737,i__14707_14739);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_14735,class_14740)))
{} else
{elem__$1.className = (((class_name_14735 === ""))?class_14740:[cljs.core.str(class_name_14735),cljs.core.str(" "),cljs.core.str(class_14740)].join(''));
}
{
var G__14741 = seq__14704_14736;
var G__14742 = chunk__14705_14737;
var G__14743 = count__14706_14738;
var G__14744 = (i__14707_14739 + 1);
seq__14704_14736 = G__14741;
chunk__14705_14737 = G__14742;
count__14706_14738 = G__14743;
i__14707_14739 = G__14744;
continue;
}
} else
{var temp__4092__auto___14745 = cljs.core.seq.call(null,seq__14704_14736);if(temp__4092__auto___14745)
{var seq__14704_14746__$1 = temp__4092__auto___14745;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14704_14746__$1))
{var c__4191__auto___14747 = cljs.core.chunk_first.call(null,seq__14704_14746__$1);{
var G__14748 = cljs.core.chunk_rest.call(null,seq__14704_14746__$1);
var G__14749 = c__4191__auto___14747;
var G__14750 = cljs.core.count.call(null,c__4191__auto___14747);
var G__14751 = 0;
seq__14704_14736 = G__14748;
chunk__14705_14737 = G__14749;
count__14706_14738 = G__14750;
i__14707_14739 = G__14751;
continue;
}
} else
{var class_14752 = cljs.core.first.call(null,seq__14704_14746__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_14735,class_14752)))
{} else
{elem__$1.className = (((class_name_14735 === ""))?class_14752:[cljs.core.str(class_name_14735),cljs.core.str(" "),cljs.core.str(class_14752)].join(''));
}
{
var G__14753 = cljs.core.next.call(null,seq__14704_14746__$1);
var G__14754 = null;
var G__14755 = 0;
var G__14756 = 0;
seq__14704_14736 = G__14753;
chunk__14705_14737 = G__14754;
count__14706_14738 = G__14755;
i__14707_14739 = G__14756;
continue;
}
}
} else
{}
}
break;
}
}
} else
{}
return elem__$1;
});
var add_class_BANG___3 = (function() { 
var G__14757__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__14708_14758 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__14709_14759 = null;var count__14710_14760 = 0;var i__14711_14761 = 0;while(true){
if((i__14711_14761 < count__14710_14760))
{var c_14762 = cljs.core._nth.call(null,chunk__14709_14759,i__14711_14761);add_class_BANG_.call(null,elem__$1,c_14762);
{
var G__14763 = seq__14708_14758;
var G__14764 = chunk__14709_14759;
var G__14765 = count__14710_14760;
var G__14766 = (i__14711_14761 + 1);
seq__14708_14758 = G__14763;
chunk__14709_14759 = G__14764;
count__14710_14760 = G__14765;
i__14711_14761 = G__14766;
continue;
}
} else
{var temp__4092__auto___14767 = cljs.core.seq.call(null,seq__14708_14758);if(temp__4092__auto___14767)
{var seq__14708_14768__$1 = temp__4092__auto___14767;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14708_14768__$1))
{var c__4191__auto___14769 = cljs.core.chunk_first.call(null,seq__14708_14768__$1);{
var G__14770 = cljs.core.chunk_rest.call(null,seq__14708_14768__$1);
var G__14771 = c__4191__auto___14769;
var G__14772 = cljs.core.count.call(null,c__4191__auto___14769);
var G__14773 = 0;
seq__14708_14758 = G__14770;
chunk__14709_14759 = G__14771;
count__14710_14760 = G__14772;
i__14711_14761 = G__14773;
continue;
}
} else
{var c_14774 = cljs.core.first.call(null,seq__14708_14768__$1);add_class_BANG_.call(null,elem__$1,c_14774);
{
var G__14775 = cljs.core.next.call(null,seq__14708_14768__$1);
var G__14776 = null;
var G__14777 = 0;
var G__14778 = 0;
seq__14708_14758 = G__14775;
chunk__14709_14759 = G__14776;
count__14710_14760 = G__14777;
i__14711_14761 = G__14778;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__14757 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14757__delegate.call(this,elem,classes,more_classes);};
G__14757.cljs$lang$maxFixedArity = 2;
G__14757.cljs$lang$applyTo = (function (arglist__14779){
var elem = cljs.core.first(arglist__14779);
arglist__14779 = cljs.core.next(arglist__14779);
var classes = cljs.core.first(arglist__14779);
var more_classes = cljs.core.rest(arglist__14779);
return G__14757__delegate(elem,classes,more_classes);
});
G__14757.cljs$core$IFn$_invoke$arity$variadic = G__14757__delegate;
return G__14757;
})()
;
add_class_BANG_ = function(elem,classes,var_args){
var more_classes = var_args;
switch(arguments.length){
case 2:
return add_class_BANG___2.call(this,elem,classes);
default:
return add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,classes, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_class_BANG_.cljs$lang$maxFixedArity = 2;
add_class_BANG_.cljs$lang$applyTo = add_class_BANG___3.cljs$lang$applyTo;
add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = add_class_BANG___2;
add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return add_class_BANG_;
})()
;
dommy.attrs.remove_class_str = (function remove_class_str(init_class_name,class$){var class_name = init_class_name;while(true){
var class_len = class_name.length;var temp__4090__auto__ = dommy.attrs.class_index.call(null,class_name,class$);if(cljs.core.truth_(temp__4090__auto__))
{var i = temp__4090__auto__;{
var G__14780 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__14780;
continue;
}
} else
{return class_name;
}
break;
}
});
/**
* remove class from and returns `elem`
* @param {...*} var_args
*/
dommy.attrs.remove_class_BANG_ = (function() {
var remove_class_BANG_ = null;
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___14789 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___14789))
{var class_list_14790 = temp__4090__auto___14789;class_list_14790.remove(class$__$1);
} else
{var class_name_14791 = elem__$1.className;var new_class_name_14792 = dommy.attrs.remove_class_str.call(null,class_name_14791,class$__$1);if((class_name_14791 === new_class_name_14792))
{} else
{elem__$1.className = new_class_name_14792;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__14793__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__14785 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__14786 = null;var count__14787 = 0;var i__14788 = 0;while(true){
if((i__14788 < count__14787))
{var c = cljs.core._nth.call(null,chunk__14786,i__14788);remove_class_BANG_.call(null,elem__$1,c);
{
var G__14794 = seq__14785;
var G__14795 = chunk__14786;
var G__14796 = count__14787;
var G__14797 = (i__14788 + 1);
seq__14785 = G__14794;
chunk__14786 = G__14795;
count__14787 = G__14796;
i__14788 = G__14797;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14785);if(temp__4092__auto__)
{var seq__14785__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14785__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__14785__$1);{
var G__14798 = cljs.core.chunk_rest.call(null,seq__14785__$1);
var G__14799 = c__4191__auto__;
var G__14800 = cljs.core.count.call(null,c__4191__auto__);
var G__14801 = 0;
seq__14785 = G__14798;
chunk__14786 = G__14799;
count__14787 = G__14800;
i__14788 = G__14801;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__14785__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__14802 = cljs.core.next.call(null,seq__14785__$1);
var G__14803 = null;
var G__14804 = 0;
var G__14805 = 0;
seq__14785 = G__14802;
chunk__14786 = G__14803;
count__14787 = G__14804;
i__14788 = G__14805;
continue;
}
}
} else
{return null;
}
}
break;
}
};
var G__14793 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14793__delegate.call(this,elem,class$,classes);};
G__14793.cljs$lang$maxFixedArity = 2;
G__14793.cljs$lang$applyTo = (function (arglist__14806){
var elem = cljs.core.first(arglist__14806);
arglist__14806 = cljs.core.next(arglist__14806);
var class$ = cljs.core.first(arglist__14806);
var classes = cljs.core.rest(arglist__14806);
return G__14793__delegate(elem,class$,classes);
});
G__14793.cljs$core$IFn$_invoke$arity$variadic = G__14793__delegate;
return G__14793;
})()
;
remove_class_BANG_ = function(elem,class$,var_args){
var classes = var_args;
switch(arguments.length){
case 2:
return remove_class_BANG___2.call(this,elem,class$);
default:
return remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,class$, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_class_BANG_.cljs$lang$maxFixedArity = 2;
remove_class_BANG_.cljs$lang$applyTo = remove_class_BANG___3.cljs$lang$applyTo;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_class_BANG___2;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_class_BANG_;
})()
;
/**
* (toggle-class! elem class) will add-class! if elem does not have class
* and remove-class! otherwise.
* (toggle-class! elem class add?) will add-class! if add? is truthy,
* otherwise it will remove-class!
*/
dommy.attrs.toggle_class_BANG_ = (function() {
var toggle_class_BANG_ = null;
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___14807 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___14807))
{var class_list_14808 = temp__4090__auto___14807;class_list_14808.toggle(class$__$1);
} else
{toggle_class_BANG_.call(null,elem__$1,class$__$1,!(dommy.attrs.has_class_QMARK_.call(null,elem__$1,class$__$1)));
}
return elem__$1;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(add_QMARK_)
{dommy.attrs.add_class_BANG_.call(null,elem__$1,class$);
} else
{dommy.attrs.remove_class_BANG_.call(null,elem__$1,class$);
}
return elem__$1;
});
toggle_class_BANG_ = function(elem,class$,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_class_BANG___2.call(this,elem,class$);
case 3:
return toggle_class_BANG___3.call(this,elem,class$,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_class_BANG___2;
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_class_BANG___3;
return toggle_class_BANG_;
})()
;
dommy.attrs.style_str = (function style_str(x){if(typeof x === 'string')
{return x;
} else
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__14811){var vec__14812 = p__14811;var k = cljs.core.nth.call(null,vec__14812,0,null);var v = cljs.core.nth.call(null,vec__14812,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
}),x));
}
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__14819_14825 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__14820_14826 = null;var count__14821_14827 = 0;var i__14822_14828 = 0;while(true){
if((i__14822_14828 < count__14821_14827))
{var vec__14823_14829 = cljs.core._nth.call(null,chunk__14820_14826,i__14822_14828);var k_14830 = cljs.core.nth.call(null,vec__14823_14829,0,null);var v_14831 = cljs.core.nth.call(null,vec__14823_14829,1,null);(style[cljs.core.name.call(null,k_14830)] = v_14831);
{
var G__14832 = seq__14819_14825;
var G__14833 = chunk__14820_14826;
var G__14834 = count__14821_14827;
var G__14835 = (i__14822_14828 + 1);
seq__14819_14825 = G__14832;
chunk__14820_14826 = G__14833;
count__14821_14827 = G__14834;
i__14822_14828 = G__14835;
continue;
}
} else
{var temp__4092__auto___14836 = cljs.core.seq.call(null,seq__14819_14825);if(temp__4092__auto___14836)
{var seq__14819_14837__$1 = temp__4092__auto___14836;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14819_14837__$1))
{var c__4191__auto___14838 = cljs.core.chunk_first.call(null,seq__14819_14837__$1);{
var G__14839 = cljs.core.chunk_rest.call(null,seq__14819_14837__$1);
var G__14840 = c__4191__auto___14838;
var G__14841 = cljs.core.count.call(null,c__4191__auto___14838);
var G__14842 = 0;
seq__14819_14825 = G__14839;
chunk__14820_14826 = G__14840;
count__14821_14827 = G__14841;
i__14822_14828 = G__14842;
continue;
}
} else
{var vec__14824_14843 = cljs.core.first.call(null,seq__14819_14837__$1);var k_14844 = cljs.core.nth.call(null,vec__14824_14843,0,null);var v_14845 = cljs.core.nth.call(null,vec__14824_14843,1,null);(style[cljs.core.name.call(null,k_14844)] = v_14845);
{
var G__14846 = cljs.core.next.call(null,seq__14819_14837__$1);
var G__14847 = null;
var G__14848 = 0;
var G__14849 = 0;
seq__14819_14825 = G__14846;
chunk__14820_14826 = G__14847;
count__14821_14827 = G__14848;
i__14822_14828 = G__14849;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_style_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_style_BANG___delegate.call(this,elem,kvs);};
set_style_BANG_.cljs$lang$maxFixedArity = 1;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__14850){
var elem = cljs.core.first(arglist__14850);
var kvs = cljs.core.rest(arglist__14850);
return set_style_BANG___delegate(elem,kvs);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
dommy.attrs.style = (function style(elem,k){if(cljs.core.truth_(k))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"k","k",-1640531420,null)))].join('')));
}
return (window.getComputedStyle(dommy.template.__GT_node_like.call(null,elem))[cljs.core.name.call(null,k)]);
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__14857_14863 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__14858_14864 = null;var count__14859_14865 = 0;var i__14860_14866 = 0;while(true){
if((i__14860_14866 < count__14859_14865))
{var vec__14861_14867 = cljs.core._nth.call(null,chunk__14858_14864,i__14860_14866);var k_14868 = cljs.core.nth.call(null,vec__14861_14867,0,null);var v_14869 = cljs.core.nth.call(null,vec__14861_14867,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_14868,[cljs.core.str(v_14869),cljs.core.str("px")].join(''));
{
var G__14870 = seq__14857_14863;
var G__14871 = chunk__14858_14864;
var G__14872 = count__14859_14865;
var G__14873 = (i__14860_14866 + 1);
seq__14857_14863 = G__14870;
chunk__14858_14864 = G__14871;
count__14859_14865 = G__14872;
i__14860_14866 = G__14873;
continue;
}
} else
{var temp__4092__auto___14874 = cljs.core.seq.call(null,seq__14857_14863);if(temp__4092__auto___14874)
{var seq__14857_14875__$1 = temp__4092__auto___14874;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14857_14875__$1))
{var c__4191__auto___14876 = cljs.core.chunk_first.call(null,seq__14857_14875__$1);{
var G__14877 = cljs.core.chunk_rest.call(null,seq__14857_14875__$1);
var G__14878 = c__4191__auto___14876;
var G__14879 = cljs.core.count.call(null,c__4191__auto___14876);
var G__14880 = 0;
seq__14857_14863 = G__14877;
chunk__14858_14864 = G__14878;
count__14859_14865 = G__14879;
i__14860_14866 = G__14880;
continue;
}
} else
{var vec__14862_14881 = cljs.core.first.call(null,seq__14857_14875__$1);var k_14882 = cljs.core.nth.call(null,vec__14862_14881,0,null);var v_14883 = cljs.core.nth.call(null,vec__14862_14881,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_14882,[cljs.core.str(v_14883),cljs.core.str("px")].join(''));
{
var G__14884 = cljs.core.next.call(null,seq__14857_14875__$1);
var G__14885 = null;
var G__14886 = 0;
var G__14887 = 0;
seq__14857_14863 = G__14884;
chunk__14858_14864 = G__14885;
count__14859_14865 = G__14886;
i__14860_14866 = G__14887;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_px_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_px_BANG___delegate.call(this,elem,kvs);};
set_px_BANG_.cljs$lang$maxFixedArity = 1;
set_px_BANG_.cljs$lang$applyTo = (function (arglist__14888){
var elem = cljs.core.first(arglist__14888);
var kvs = cljs.core.rest(arglist__14888);
return set_px_BANG___delegate(elem,kvs);
});
set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
dommy.attrs.px = (function px(elem,k){var pixels = dommy.attrs.style.call(null,dommy.template.__GT_node_like.call(null,elem),k);if(cljs.core.seq.call(null,pixels))
{return parseInt(pixels);
} else
{return null;
}
});
/**
* Sets dom attributes on and returns `elem`.
* Attributes without values will be set to "true":
* 
* (set-attr! elem :disabled)
* 
* With values, the function takes variadic kv pairs:
* 
* (set-attr! elem :id "some-id"
* :name "some-name")
* @param {...*} var_args
*/
dommy.attrs.set_attr_BANG_ = (function() {
var set_attr_BANG_ = null;
var set_attr_BANG___2 = (function (elem,k){return set_attr_BANG_.call(null,dommy.template.__GT_node_like.call(null,elem),k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){if(cljs.core.truth_(v))
{if(cljs.core.fn_QMARK_.call(null,v))
{var G__14897 = dommy.template.__GT_node_like.call(null,elem);(G__14897[cljs.core.name.call(null,k)] = v);
return G__14897;
} else
{var G__14898 = dommy.template.__GT_node_like.call(null,elem);G__14898.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__14898;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__14905__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__14899_14906 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__14900_14907 = null;var count__14901_14908 = 0;var i__14902_14909 = 0;while(true){
if((i__14902_14909 < count__14901_14908))
{var vec__14903_14910 = cljs.core._nth.call(null,chunk__14900_14907,i__14902_14909);var k_14911__$1 = cljs.core.nth.call(null,vec__14903_14910,0,null);var v_14912__$1 = cljs.core.nth.call(null,vec__14903_14910,1,null);set_attr_BANG_.call(null,elem__$1,k_14911__$1,v_14912__$1);
{
var G__14913 = seq__14899_14906;
var G__14914 = chunk__14900_14907;
var G__14915 = count__14901_14908;
var G__14916 = (i__14902_14909 + 1);
seq__14899_14906 = G__14913;
chunk__14900_14907 = G__14914;
count__14901_14908 = G__14915;
i__14902_14909 = G__14916;
continue;
}
} else
{var temp__4092__auto___14917 = cljs.core.seq.call(null,seq__14899_14906);if(temp__4092__auto___14917)
{var seq__14899_14918__$1 = temp__4092__auto___14917;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14899_14918__$1))
{var c__4191__auto___14919 = cljs.core.chunk_first.call(null,seq__14899_14918__$1);{
var G__14920 = cljs.core.chunk_rest.call(null,seq__14899_14918__$1);
var G__14921 = c__4191__auto___14919;
var G__14922 = cljs.core.count.call(null,c__4191__auto___14919);
var G__14923 = 0;
seq__14899_14906 = G__14920;
chunk__14900_14907 = G__14921;
count__14901_14908 = G__14922;
i__14902_14909 = G__14923;
continue;
}
} else
{var vec__14904_14924 = cljs.core.first.call(null,seq__14899_14918__$1);var k_14925__$1 = cljs.core.nth.call(null,vec__14904_14924,0,null);var v_14926__$1 = cljs.core.nth.call(null,vec__14904_14924,1,null);set_attr_BANG_.call(null,elem__$1,k_14925__$1,v_14926__$1);
{
var G__14927 = cljs.core.next.call(null,seq__14899_14918__$1);
var G__14928 = null;
var G__14929 = 0;
var G__14930 = 0;
seq__14899_14906 = G__14927;
chunk__14900_14907 = G__14928;
count__14901_14908 = G__14929;
i__14902_14909 = G__14930;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__14905 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__14905__delegate.call(this,elem,k,v,kvs);};
G__14905.cljs$lang$maxFixedArity = 3;
G__14905.cljs$lang$applyTo = (function (arglist__14931){
var elem = cljs.core.first(arglist__14931);
arglist__14931 = cljs.core.next(arglist__14931);
var k = cljs.core.first(arglist__14931);
arglist__14931 = cljs.core.next(arglist__14931);
var v = cljs.core.first(arglist__14931);
var kvs = cljs.core.rest(arglist__14931);
return G__14905__delegate(elem,k,v,kvs);
});
G__14905.cljs$core$IFn$_invoke$arity$variadic = G__14905__delegate;
return G__14905;
})()
;
set_attr_BANG_ = function(elem,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 2:
return set_attr_BANG___2.call(this,elem,k);
case 3:
return set_attr_BANG___3.call(this,elem,k,v);
default:
return set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic(elem,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_attr_BANG_.cljs$lang$maxFixedArity = 3;
set_attr_BANG_.cljs$lang$applyTo = set_attr_BANG___4.cljs$lang$applyTo;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_attr_BANG___2;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_attr_BANG___3;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return set_attr_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.attrs.remove_attr_BANG_ = (function() {
var remove_attr_BANG_ = null;
var remove_attr_BANG___2 = (function (elem,k){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),null,new cljs.core.Keyword(null,"classes","classes",1867525016),null], null), null).call(null,k)))
{elem__$1.className = "";
} else
{elem__$1.removeAttribute(cljs.core.name.call(null,k));
}
return elem__$1;
});
var remove_attr_BANG___3 = (function() { 
var G__14940__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__14936_14941 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__14937_14942 = null;var count__14938_14943 = 0;var i__14939_14944 = 0;while(true){
if((i__14939_14944 < count__14938_14943))
{var k_14945__$1 = cljs.core._nth.call(null,chunk__14937_14942,i__14939_14944);remove_attr_BANG_.call(null,elem__$1,k_14945__$1);
{
var G__14946 = seq__14936_14941;
var G__14947 = chunk__14937_14942;
var G__14948 = count__14938_14943;
var G__14949 = (i__14939_14944 + 1);
seq__14936_14941 = G__14946;
chunk__14937_14942 = G__14947;
count__14938_14943 = G__14948;
i__14939_14944 = G__14949;
continue;
}
} else
{var temp__4092__auto___14950 = cljs.core.seq.call(null,seq__14936_14941);if(temp__4092__auto___14950)
{var seq__14936_14951__$1 = temp__4092__auto___14950;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14936_14951__$1))
{var c__4191__auto___14952 = cljs.core.chunk_first.call(null,seq__14936_14951__$1);{
var G__14953 = cljs.core.chunk_rest.call(null,seq__14936_14951__$1);
var G__14954 = c__4191__auto___14952;
var G__14955 = cljs.core.count.call(null,c__4191__auto___14952);
var G__14956 = 0;
seq__14936_14941 = G__14953;
chunk__14937_14942 = G__14954;
count__14938_14943 = G__14955;
i__14939_14944 = G__14956;
continue;
}
} else
{var k_14957__$1 = cljs.core.first.call(null,seq__14936_14951__$1);remove_attr_BANG_.call(null,elem__$1,k_14957__$1);
{
var G__14958 = cljs.core.next.call(null,seq__14936_14951__$1);
var G__14959 = null;
var G__14960 = 0;
var G__14961 = 0;
seq__14936_14941 = G__14958;
chunk__14937_14942 = G__14959;
count__14938_14943 = G__14960;
i__14939_14944 = G__14961;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__14940 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14940__delegate.call(this,elem,k,ks);};
G__14940.cljs$lang$maxFixedArity = 2;
G__14940.cljs$lang$applyTo = (function (arglist__14962){
var elem = cljs.core.first(arglist__14962);
arglist__14962 = cljs.core.next(arglist__14962);
var k = cljs.core.first(arglist__14962);
var ks = cljs.core.rest(arglist__14962);
return G__14940__delegate(elem,k,ks);
});
G__14940.cljs$core$IFn$_invoke$arity$variadic = G__14940__delegate;
return G__14940;
})()
;
remove_attr_BANG_ = function(elem,k,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return remove_attr_BANG___2.call(this,elem,k);
default:
return remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_attr_BANG_.cljs$lang$maxFixedArity = 2;
remove_attr_BANG_.cljs$lang$applyTo = remove_attr_BANG___3.cljs$lang$applyTo;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_attr_BANG___2;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_attr_BANG_;
})()
;
dommy.attrs.attr = (function attr(elem,k){if(cljs.core.truth_(k))
{return dommy.template.__GT_node_like.call(null,elem).getAttribute(cljs.core.name.call(null,k));
} else
{return null;
}
});
dommy.attrs.toggle_attr_BANG_ = (function() {
var toggle_attr_BANG_ = null;
var toggle_attr_BANG___2 = (function (elem,k){return toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.attrs.attr.call(null,elem,k)));
});
var toggle_attr_BANG___3 = (function (elem,k,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(add_QMARK_)
{return dommy.attrs.set_attr_BANG_.call(null,elem__$1,k);
} else
{return dommy.attrs.remove_attr_BANG_.call(null,elem__$1,k);
}
});
toggle_attr_BANG_ = function(elem,k,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_attr_BANG___2.call(this,elem,k);
case 3:
return toggle_attr_BANG___3.call(this,elem,k,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_attr_BANG___2;
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_attr_BANG___3;
return toggle_attr_BANG_;
})()
;
dommy.attrs.hidden_QMARK_ = (function hidden_QMARK_(elem){return ("none" === dommy.template.__GT_node_like.call(null,elem).style.display);
});
/**
* Display or hide the given `elem`. Takes an optional boolean `show?`
* indicating whether to show or hide `elem`.
*/
dommy.attrs.toggle_BANG_ = (function() {
var toggle_BANG_ = null;
var toggle_BANG___1 = (function (elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);toggle_BANG_.call(null,elem__$1,dommy.attrs.hidden_QMARK_.call(null,elem__$1));
return elem__$1;
});
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__14964 = dommy.template.__GT_node_like.call(null,elem);G__14964.style.display = ((show_QMARK_)?"":"none");
return G__14964;
});
toggle_BANG_ = function(elem,show_QMARK_){
switch(arguments.length){
case 1:
return toggle_BANG___1.call(this,elem);
case 2:
return toggle_BANG___2.call(this,elem,show_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = toggle_BANG___1;
toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_BANG___2;
return toggle_BANG_;
})()
;
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__14966 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__14966,false);
return G__14966;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__14968 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__14968,true);
return G__14968;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__14970 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__14970["constructor"] = Object);
return G__14970;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map