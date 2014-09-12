// Compiled by ClojureScript 0.0-2173
goog.provide('hickory.core');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string');
goog.require('clojure.zip');
goog.require('clojure.zip');
goog.require('hickory.utils');
goog.require('hickory.utils');
hickory.core.HiccupRepresentable = (function (){var obj10695 = {};return obj10695;
})();
hickory.core.as_hiccup = (function as_hiccup(this$){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.hickory$core$HiccupRepresentable$as_hiccup$arity$1;
} else
{return and__3431__auto__;
}
})())
{return this$.hickory$core$HiccupRepresentable$as_hiccup$arity$1(this$);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (hickory.core.as_hiccup[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (hickory.core.as_hiccup["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"HiccupRepresentable.as-hiccup",this$);
}
}
})().call(null,this$);
}
});
hickory.core.HickoryRepresentable = (function (){var obj10697 = {};return obj10697;
})();
hickory.core.as_hickory = (function as_hickory(this$){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.hickory$core$HickoryRepresentable$as_hickory$arity$1;
} else
{return and__3431__auto__;
}
})())
{return this$.hickory$core$HickoryRepresentable$as_hickory$arity$1(this$);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (hickory.core.as_hickory[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (hickory.core.as_hickory["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"HickoryRepresentable.as-hickory",this$);
}
}
})().call(null,this$);
}
});
hickory.core.node_type = (function node_type(type){return (Node[[cljs.core.str(type),cljs.core.str("_NODE")].join('')]);
});
hickory.core.Attribute = hickory.core.node_type.call(null,"ATTRIBUTE");
hickory.core.Comment = hickory.core.node_type.call(null,"COMMENT");
hickory.core.Document = hickory.core.node_type.call(null,"DOCUMENT");
hickory.core.DocumentType = hickory.core.node_type.call(null,"DOCUMENT_TYPE");
hickory.core.Element = hickory.core.node_type.call(null,"ELEMENT");
hickory.core.Text = hickory.core.node_type.call(null,"TEXT");
hickory.core.extend_type_with_seqable = (function extend_type_with_seqable(t){t.prototype.cljs$core$ISeqable$ = true;
return t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (array){var array__$1 = this;return cljs.core.array_seq.call(null,array__$1);
});
});
hickory.core.extend_type_with_seqable.call(null,NodeList);
if(typeof NamedNodeMap !== 'undefined')
{hickory.core.extend_type_with_seqable.call(null,NamedNodeMap);
} else
{}
if(typeof MozNamedAttrMap !== 'undefined')
{hickory.core.extend_type_with_seqable.call(null,MozNamedAttrMap);
} else
{}
hickory.core.format_doctype = (function format_doctype(dt){var name = (dt["name"]);var publicId = (dt["publicId"]);var systemId = (dt["systemId"]);if(!(cljs.core.empty_QMARK_.call(null,publicId)))
{return goog.string.format("<!DOCTYPE %s PUBLIC \"%s\" \"%s\">",name,publicId,systemId);
} else
{return [cljs.core.str("<!DOCTYPE "),cljs.core.str(name),cljs.core.str(">")].join('');
}
});
(hickory.core.HiccupRepresentable["object"] = true);
(hickory.core.as_hiccup["object"] = (function (this$){var pred__10699 = cljs.core._EQ_;var expr__10700 = (this$["nodeType"]);if(cljs.core.truth_(pred__10699.call(null,hickory.core.Attribute,expr__10700)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hickory.utils.lower_case_keyword.call(null,(this$["name"])),(this$["value"])], null);
} else
{if(cljs.core.truth_(pred__10699.call(null,hickory.core.Comment,expr__10700)))
{return [cljs.core.str("<!--"),cljs.core.str((this$["data"])),cljs.core.str("-->")].join('');
} else
{if(cljs.core.truth_(pred__10699.call(null,hickory.core.Document,expr__10700)))
{return cljs.core.map.call(null,hickory.core.as_hiccup,(this$["childNodes"]));
} else
{if(cljs.core.truth_(pred__10699.call(null,hickory.core.DocumentType,expr__10700)))
{return hickory.core.format_doctype.call(null,this$);
} else
{if(cljs.core.truth_(pred__10699.call(null,hickory.core.Element,expr__10700)))
{var tag = hickory.utils.lower_case_keyword.call(null,(this$["tagName"]));return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,hickory.core.as_hiccup,(this$["attributes"])))], null),(cljs.core.truth_(hickory.utils.unescapable_content.call(null,tag))?cljs.core.map.call(null,(function (p1__10698_SHARP_){return (p1__10698_SHARP_["wholeText"]);
}),(this$["childNodes"])):cljs.core.map.call(null,hickory.core.as_hiccup,(this$["childNodes"])))));
} else
{if(cljs.core.truth_(pred__10699.call(null,hickory.core.Text,expr__10700)))
{return hickory.utils.html_escape.call(null,(this$["wholeText"]));
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__10700)].join('')));
}
}
}
}
}
}
}));
(hickory.core.HickoryRepresentable["object"] = true);
(hickory.core.as_hickory["object"] = (function (this$){var pred__10702 = cljs.core._EQ_;var expr__10703 = (this$["nodeType"]);if(cljs.core.truth_(pred__10702.call(null,hickory.core.Attribute,expr__10703)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hickory.utils.lower_case_keyword.call(null,(this$["name"])),(this$["value"])], null);
} else
{if(cljs.core.truth_(pred__10702.call(null,hickory.core.Comment,expr__10703)))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"comment","comment",1964302801),new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(this$["data"])], null)], null);
} else
{if(cljs.core.truth_(pred__10702.call(null,hickory.core.Document,expr__10703)))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"document","document",1875625101),new cljs.core.Keyword(null,"content","content",1965434859),cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,hickory.core.as_hickory,(this$["childNodes"]))))], null);
} else
{if(cljs.core.truth_(pred__10702.call(null,hickory.core.DocumentType,expr__10703)))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"document-type","document-type",2553302046),new cljs.core.Keyword(null,"attrs","attrs",1107056660),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),(this$["name"]),new cljs.core.Keyword(null,"publicid","publicid",2307505334),(this$["publicId"]),new cljs.core.Keyword(null,"systemid","systemid",2989990652),(this$["systemId"])], null)], null);
} else
{if(cljs.core.truth_(pred__10702.call(null,hickory.core.Element,expr__10703)))
{return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"element","element",3646034542),new cljs.core.Keyword(null,"attrs","attrs",1107056660),cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,hickory.core.as_hickory,(this$["attributes"])))),new cljs.core.Keyword(null,"tag","tag",1014018828),hickory.utils.lower_case_keyword.call(null,(this$["tagName"])),new cljs.core.Keyword(null,"content","content",1965434859),cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,hickory.core.as_hickory,(this$["childNodes"]))))], null);
} else
{if(cljs.core.truth_(pred__10702.call(null,hickory.core.Text,expr__10703)))
{return (this$["wholeText"]);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__10703)].join('')));
}
}
}
}
}
}
}));
hickory.core.extract_doctype = (function extract_doctype(s){var temp__4092__auto__ = cljs.core.second.call(null,(function (){var or__3443__auto__ = cljs.core.re_find.call(null,/<!DOCTYPE ([^>]*)>/,s);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return cljs.core.re_find.call(null,/<!doctype ([^>]*)>/,s);
}
})());if(cljs.core.truth_(temp__4092__auto__))
{var doctype = temp__4092__auto__;return cljs.core.re_find.call(null,/([^\s]*)(\s+PUBLIC\s+[\"]?([^\"]*)[\"]?\s+[\"]?([^\"]*)[\"]?)?/,doctype);
} else
{return null;
}
});
hickory.core.remove_el = (function remove_el(el){return (el["parentNode"]).removeChild(el);
});
hickory.core.parse_dom_with_domparser = (function parse_dom_with_domparser(s){if(typeof DOMParser !== 'undefined')
{return (new DOMParser()).parseFromString(s,"text/html");
} else
{return null;
}
});
/**
* Parse an HTML document (or fragment) as a DOM using document.implementation.createHTMLDocument and document.write.
*/
hickory.core.parse_dom_with_write = (function parse_dom_with_write(s){var doc = document.implementation.createHTMLDocument("");var doctype_el = (doc["doctype"]);if(cljs.core.truth_(hickory.core.extract_doctype.call(null,s)))
{} else
{hickory.core.remove_el.call(null,doctype_el);
}
var temp__4092__auto___10705 = cljs.core.first.call(null,(doc["head"]["childNodes"]));if(cljs.core.truth_(temp__4092__auto___10705))
{var title_el_10706 = temp__4092__auto___10705;if(cljs.core.empty_QMARK_.call(null,(title_el_10706["text"])))
{hickory.core.remove_el.call(null,title_el_10706);
} else
{}
} else
{}
doc.write(s);
return doc;
});
/**
* Parse an entire HTML document into a DOM structure that can be
* used as input to as-hiccup or as-hickory.
*/
hickory.core.parse = (function parse(s){var or__3443__auto__ = hickory.core.parse_dom_with_domparser.call(null,s);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return hickory.core.parse_dom_with_write.call(null,s);
}
});
/**
* Parse an HTML fragment (some group of tags that might be at home somewhere
* in the tag hierarchy under <body>) into a list of DOM elements that can
* each be passed as input to as-hiccup or as-hickory.
*/
hickory.core.parse_fragment = (function parse_fragment(s){return (hickory.core.parse.call(null,s)["body"]["childNodes"]);
});

//# sourceMappingURL=core.js.map