// Compiled by ClojureScript 0.0-2173
goog.provide('photosure.client.core');
goog.require('cljs.core');
goog.require('dommy.core');
goog.require('dommy.core');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('photosure.client.gallery');
photosure.client.core.activate = (function activate(nav_id){var seq__9978_9982 = cljs.core.seq.call(null,dommy.utils.__GT_Array.call(null,document.querySelectorAll(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#static-header","#static-header",3672017659),".link"], null)))));var chunk__9979_9983 = null;var count__9980_9984 = 0;var i__9981_9985 = 0;while(true){
if((i__9981_9985 < count__9980_9984))
{var link_9986 = cljs.core._nth.call(null,chunk__9979_9983,i__9981_9985);dommy.core.remove_class_BANG_.call(null,link_9986,new cljs.core.Keyword(null,"active","active",3885920888));
{
var G__9987 = seq__9978_9982;
var G__9988 = chunk__9979_9983;
var G__9989 = count__9980_9984;
var G__9990 = (i__9981_9985 + 1);
seq__9978_9982 = G__9987;
chunk__9979_9983 = G__9988;
count__9980_9984 = G__9989;
i__9981_9985 = G__9990;
continue;
}
} else
{var temp__4092__auto___9991 = cljs.core.seq.call(null,seq__9978_9982);if(temp__4092__auto___9991)
{var seq__9978_9992__$1 = temp__4092__auto___9991;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9978_9992__$1))
{var c__4191__auto___9993 = cljs.core.chunk_first.call(null,seq__9978_9992__$1);{
var G__9994 = cljs.core.chunk_rest.call(null,seq__9978_9992__$1);
var G__9995 = c__4191__auto___9993;
var G__9996 = cljs.core.count.call(null,c__4191__auto___9993);
var G__9997 = 0;
seq__9978_9982 = G__9994;
chunk__9979_9983 = G__9995;
count__9980_9984 = G__9996;
i__9981_9985 = G__9997;
continue;
}
} else
{var link_9998 = cljs.core.first.call(null,seq__9978_9992__$1);dommy.core.remove_class_BANG_.call(null,link_9998,new cljs.core.Keyword(null,"active","active",3885920888));
{
var G__9999 = cljs.core.next.call(null,seq__9978_9992__$1);
var G__10000 = null;
var G__10001 = 0;
var G__10002 = 0;
seq__9978_9982 = G__9999;
chunk__9979_9983 = G__10000;
count__9980_9984 = G__10001;
i__9981_9985 = G__10002;
continue;
}
}
} else
{}
}
break;
}
return dommy.core.add_class_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,nav_id)),new cljs.core.Keyword(null,"active","active",3885920888));
});
photosure.client.core.bio = (function bio(){var dom10009 = document.createElement("div");dom10009.setAttribute("id","bio");
dom10009.appendChild((function (){var dom10010 = document.createElement("div");dom10010.setAttribute("id","bio-wrapper");
dom10010.appendChild((function (){var dom10011 = document.createElement("img");dom10011.setAttribute("id","me");
if("images/me.jpg")
{dom10011.setAttribute("src","images/me.jpg");
} else
{}
return dom10011;
})());
dom10010.appendChild((function (){var dom10012 = document.createElement("div");dom10012.setAttribute("id","bio-content-wrapper");
dom10012.appendChild((function (){var dom10013 = document.createElement("p");dom10013.setAttribute("id","bio-content");
dom10013.appendChild((function (){var dom10014 = document.createElement("h3");dom10014.appendChild(document.createTextNode("C.P.Leblow"));
return dom10014;
})());
dom10013.appendChild(document.createTextNode("This is a story all about how my website got flipp turned upside up"));
return dom10013;
})());
return dom10012;
})());
return dom10010;
})());
return dom10009;
});
photosure.client.core.render_bio = (function render_bio(){photosure.client.core.activate.call(null,new cljs.core.Keyword(null,"#bio-link","#bio-link",3095550516));
return dommy.core.replace_contents_BANG_.call(null,document.getElementById("dynamic-content"),photosure.client.core.bio.call(null));
});
photosure.client.core.blog = (function blog(){var dom10017 = document.createElement("div");dom10017.setAttribute("id","blog-wrapper");
dom10017.appendChild((function (){var dom10018 = document.createElement("div");dom10018.setAttribute("id","blog");
dom10018.appendChild(document.createTextNode("under construction..."));
return dom10018;
})());
return dom10017;
});
photosure.client.core.render_blog = (function render_blog(){photosure.client.core.activate.call(null,new cljs.core.Keyword(null,"#blog-link","#blog-link",3656286708));
return dommy.core.replace_contents_BANG_.call(null,document.getElementById("dynamic-content"),photosure.client.core.blog.call(null));
});
photosure.client.core.gallery = (function gallery(){var dom10020 = document.createElement("div");dom10020.setAttribute("id","gallery");
return dom10020;
});
photosure.client.core.render_gallery = (function render_gallery(){photosure.client.core.activate.call(null,new cljs.core.Keyword(null,"#gallery-link","#gallery-link",1389950122));
dommy.core.replace_contents_BANG_.call(null,document.getElementById("dynamic-content"),photosure.client.core.gallery.call(null));
return photosure.client.gallery.run.call(null);
});

//# sourceMappingURL=core.js.map