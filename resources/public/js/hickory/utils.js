// Compiled by ClojureScript 0.0-2173
goog.provide('hickory.utils');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* Elements that don't have a meaningful <tag></tag> form.
*/
hickory.utils.void_element = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 16, [new cljs.core.Keyword(null,"img","img",1014008629),null,new cljs.core.Keyword(null,"keygen","keygen",4174205955),null,new cljs.core.Keyword(null,"link","link",1017226092),null,new cljs.core.Keyword(null,"hr","hr",1013907580),null,new cljs.core.Keyword(null,"param","param",1120340991),null,new cljs.core.Keyword(null,"area","area",1016906751),null,new cljs.core.Keyword(null,"embed","embed",1110524491),null,new cljs.core.Keyword(null,"col","col",1014002930),null,new cljs.core.Keyword(null,"base","base",1016920643),null,new cljs.core.Keyword(null,"br","br",1013907394),null,new cljs.core.Keyword(null,"wbr","wbr",1014021753),null,new cljs.core.Keyword(null,"meta","meta",1017252215),null,new cljs.core.Keyword(null,"command","command",1964298941),null,new cljs.core.Keyword(null,"track","track",1124525245),null,new cljs.core.Keyword(null,"input","input",1114262332),null,new cljs.core.Keyword(null,"source","source",4412365709),null], null), null);
/**
* Elements whose content should never have html-escape codes.
*/
hickory.utils.unescapable_content = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",1123684643),null,new cljs.core.Keyword(null,"script","script",4401185853),null], null), null);
hickory.utils.html_escape = (function html_escape(s){return goog.string.htmlEscape(s);
});
hickory.utils.starts_with = (function starts_with(s,prefix){return goog.string.startsWith(s,prefix);
});
/**
* Converts its string argument into a lowercase keyword.
*/
hickory.utils.lower_case_keyword = (function lower_case_keyword(s){return cljs.core.keyword.call(null,clojure.string.lower_case.call(null,s));
});
/**
* Returns a string containing the HTML source for the doctype with given args.
* The second and third arguments can be nil or empty strings.
*/
hickory.utils.render_doctype = (function render_doctype(name,publicid,systemid){return [cljs.core.str("<!DOCTYPE "),cljs.core.str(name),cljs.core.str((cljs.core.truth_(cljs.core.not_empty.call(null,publicid))?[cljs.core.str(" PUBLIC \""),cljs.core.str(publicid),cljs.core.str("\"")].join(''):null)),cljs.core.str((cljs.core.truth_(cljs.core.not_empty.call(null,systemid))?[cljs.core.str(" \""),cljs.core.str(systemid),cljs.core.str("\"")].join(''):null)),cljs.core.str(">")].join('');
});

//# sourceMappingURL=utils.js.map