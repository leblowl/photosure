// Compiled by ClojureScript 0.0-2322
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11643 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11643 = (function (f,fn_handler,meta11644){
this.f = f;
this.fn_handler = fn_handler;
this.meta11644 = meta11644;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11643.cljs$lang$type = true;
cljs.core.async.t11643.cljs$lang$ctorStr = "cljs.core.async/t11643";
cljs.core.async.t11643.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t11643");
});
cljs.core.async.t11643.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11643.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11643.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11643.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11645){var self__ = this;
var _11645__$1 = this;return self__.meta11644;
});
cljs.core.async.t11643.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11645,meta11644__$1){var self__ = this;
var _11645__$1 = this;return (new cljs.core.async.t11643(self__.f,self__.fn_handler,meta11644__$1));
});
cljs.core.async.__GT_t11643 = (function __GT_t11643(f__$1,fn_handler__$1,meta11644){return (new cljs.core.async.t11643(f__$1,fn_handler__$1,meta11644));
});
}
return (new cljs.core.async.t11643(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11647 = buff;if(G__11647)
{var bit__4210__auto__ = null;if(cljs.core.truth_((function (){var or__3560__auto__ = bit__4210__auto__;if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return G__11647.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11647.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11647);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11647);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_11648 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11648);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_11648,ret){
return (function (){return fn1.call(null,val_11648);
});})(val_11648,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3548__auto__ = ret;if(cljs.core.truth_(and__3548__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3548__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4416__auto___11649 = n;var x_11650 = (0);while(true){
if((x_11650 < n__4416__auto___11649))
{(a[x_11650] = (0));
{
var G__11651 = (x_11650 + (1));
x_11650 = G__11651;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__11652 = (i + (1));
i = G__11652;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11656 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11656 = (function (flag,alt_flag,meta11657){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11657 = meta11657;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11656.cljs$lang$type = true;
cljs.core.async.t11656.cljs$lang$ctorStr = "cljs.core.async/t11656";
cljs.core.async.t11656.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t11656");
});})(flag))
;
cljs.core.async.t11656.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11656.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t11656.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t11656.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11658){var self__ = this;
var _11658__$1 = this;return self__.meta11657;
});})(flag))
;
cljs.core.async.t11656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11658,meta11657__$1){var self__ = this;
var _11658__$1 = this;return (new cljs.core.async.t11656(self__.flag,self__.alt_flag,meta11657__$1));
});})(flag))
;
cljs.core.async.__GT_t11656 = ((function (flag){
return (function __GT_t11656(flag__$1,alt_flag__$1,meta11657){return (new cljs.core.async.t11656(flag__$1,alt_flag__$1,meta11657));
});})(flag))
;
}
return (new cljs.core.async.t11656(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11662 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11662 = (function (cb,flag,alt_handler,meta11663){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11663 = meta11663;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11662.cljs$lang$type = true;
cljs.core.async.t11662.cljs$lang$ctorStr = "cljs.core.async/t11662";
cljs.core.async.t11662.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t11662");
});
cljs.core.async.t11662.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11662.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11662.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11662.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11664){var self__ = this;
var _11664__$1 = this;return self__.meta11663;
});
cljs.core.async.t11662.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11664,meta11663__$1){var self__ = this;
var _11664__$1 = this;return (new cljs.core.async.t11662(self__.cb,self__.flag,self__.alt_handler,meta11663__$1));
});
cljs.core.async.__GT_t11662 = (function __GT_t11662(cb__$1,flag__$1,alt_handler__$1,meta11663){return (new cljs.core.async.t11662(cb__$1,flag__$1,alt_handler__$1,meta11663));
});
}
return (new cljs.core.async.t11662(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11665_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11665_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3560__auto__ = wport;if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__11666 = (i + (1));
i = G__11666;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3560__auto__ = ret;if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3548__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3548__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3548__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__11667){var map__11669 = p__11667;var map__11669__$1 = ((cljs.core.seq_QMARK_.call(null,map__11669))?cljs.core.apply.call(null,cljs.core.hash_map,map__11669):map__11669);var opts = map__11669__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__11667 = null;if (arguments.length > 1) {
  p__11667 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11667);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11670){
var ports = cljs.core.first(arglist__11670);
var p__11667 = cljs.core.rest(arglist__11670);
return alts_BANG___delegate(ports,p__11667);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11678 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11678 = (function (ch,f,map_LT_,meta11679){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11679 = meta11679;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11678.cljs$lang$type = true;
cljs.core.async.t11678.cljs$lang$ctorStr = "cljs.core.async/t11678";
cljs.core.async.t11678.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t11678");
});
cljs.core.async.t11678.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11678.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t11678.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11678.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11681 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11681 = (function (fn1,_,meta11679,ch,f,map_LT_,meta11682){
this.fn1 = fn1;
this._ = _;
this.meta11679 = meta11679;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11682 = meta11682;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11681.cljs$lang$type = true;
cljs.core.async.t11681.cljs$lang$ctorStr = "cljs.core.async/t11681";
cljs.core.async.t11681.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t11681");
});})(___$1))
;
cljs.core.async.t11681.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11681.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t11681.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t11681.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__11671_SHARP_){return f1.call(null,(((p1__11671_SHARP_ == null))?null:self__.f.call(null,p1__11671_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t11681.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_11683){var self__ = this;
var _11683__$1 = this;return self__.meta11682;
});})(___$1))
;
cljs.core.async.t11681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_11683,meta11682__$1){var self__ = this;
var _11683__$1 = this;return (new cljs.core.async.t11681(self__.fn1,self__._,self__.meta11679,self__.ch,self__.f,self__.map_LT_,meta11682__$1));
});})(___$1))
;
cljs.core.async.__GT_t11681 = ((function (___$1){
return (function __GT_t11681(fn1__$1,___$2,meta11679__$1,ch__$2,f__$2,map_LT___$2,meta11682){return (new cljs.core.async.t11681(fn1__$1,___$2,meta11679__$1,ch__$2,f__$2,map_LT___$2,meta11682));
});})(___$1))
;
}
return (new cljs.core.async.t11681(fn1,___$1,self__.meta11679,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3548__auto__ = ret;if(cljs.core.truth_(and__3548__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3548__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t11678.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11678.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11678.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11680){var self__ = this;
var _11680__$1 = this;return self__.meta11679;
});
cljs.core.async.t11678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11680,meta11679__$1){var self__ = this;
var _11680__$1 = this;return (new cljs.core.async.t11678(self__.ch,self__.f,self__.map_LT_,meta11679__$1));
});
cljs.core.async.__GT_t11678 = (function __GT_t11678(ch__$1,f__$1,map_LT___$1,meta11679){return (new cljs.core.async.t11678(ch__$1,f__$1,map_LT___$1,meta11679));
});
}
return (new cljs.core.async.t11678(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11687 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11687 = (function (ch,f,map_GT_,meta11688){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11688 = meta11688;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11687.cljs$lang$type = true;
cljs.core.async.t11687.cljs$lang$ctorStr = "cljs.core.async/t11687";
cljs.core.async.t11687.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t11687");
});
cljs.core.async.t11687.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11687.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t11687.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11687.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11687.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11687.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11687.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11689){var self__ = this;
var _11689__$1 = this;return self__.meta11688;
});
cljs.core.async.t11687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11689,meta11688__$1){var self__ = this;
var _11689__$1 = this;return (new cljs.core.async.t11687(self__.ch,self__.f,self__.map_GT_,meta11688__$1));
});
cljs.core.async.__GT_t11687 = (function __GT_t11687(ch__$1,f__$1,map_GT___$1,meta11688){return (new cljs.core.async.t11687(ch__$1,f__$1,map_GT___$1,meta11688));
});
}
return (new cljs.core.async.t11687(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11693 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11693 = (function (ch,p,filter_GT_,meta11694){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11694 = meta11694;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11693.cljs$lang$type = true;
cljs.core.async.t11693.cljs$lang$ctorStr = "cljs.core.async/t11693";
cljs.core.async.t11693.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t11693");
});
cljs.core.async.t11693.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11693.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t11693.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11693.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11693.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11693.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11693.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11695){var self__ = this;
var _11695__$1 = this;return self__.meta11694;
});
cljs.core.async.t11693.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11695,meta11694__$1){var self__ = this;
var _11695__$1 = this;return (new cljs.core.async.t11693(self__.ch,self__.p,self__.filter_GT_,meta11694__$1));
});
cljs.core.async.__GT_t11693 = (function __GT_t11693(ch__$1,p__$1,filter_GT___$1,meta11694){return (new cljs.core.async.t11693(ch__$1,p__$1,filter_GT___$1,meta11694));
});
}
return (new cljs.core.async.t11693(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6367__auto___11778 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto___11778,out){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto___11778,out){
return (function (state_11757){var state_val_11758 = (state_11757[(1)]);if((state_val_11758 === (7)))
{var inst_11753 = (state_11757[(2)]);var state_11757__$1 = state_11757;var statearr_11759_11779 = state_11757__$1;(statearr_11759_11779[(2)] = inst_11753);
(statearr_11759_11779[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11758 === (1)))
{var state_11757__$1 = state_11757;var statearr_11760_11780 = state_11757__$1;(statearr_11760_11780[(2)] = null);
(statearr_11760_11780[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11758 === (4)))
{var inst_11739 = (state_11757[(7)]);var inst_11739__$1 = (state_11757[(2)]);var inst_11740 = (inst_11739__$1 == null);var state_11757__$1 = (function (){var statearr_11761 = state_11757;(statearr_11761[(7)] = inst_11739__$1);
return statearr_11761;
})();if(cljs.core.truth_(inst_11740))
{var statearr_11762_11781 = state_11757__$1;(statearr_11762_11781[(1)] = (5));
} else
{var statearr_11763_11782 = state_11757__$1;(statearr_11763_11782[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11758 === (6)))
{var inst_11739 = (state_11757[(7)]);var inst_11744 = p.call(null,inst_11739);var state_11757__$1 = state_11757;if(cljs.core.truth_(inst_11744))
{var statearr_11764_11783 = state_11757__$1;(statearr_11764_11783[(1)] = (8));
} else
{var statearr_11765_11784 = state_11757__$1;(statearr_11765_11784[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11758 === (3)))
{var inst_11755 = (state_11757[(2)]);var state_11757__$1 = state_11757;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11757__$1,inst_11755);
} else
{if((state_val_11758 === (2)))
{var state_11757__$1 = state_11757;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11757__$1,(4),ch);
} else
{if((state_val_11758 === (11)))
{var inst_11747 = (state_11757[(2)]);var state_11757__$1 = state_11757;var statearr_11766_11785 = state_11757__$1;(statearr_11766_11785[(2)] = inst_11747);
(statearr_11766_11785[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11758 === (9)))
{var state_11757__$1 = state_11757;var statearr_11767_11786 = state_11757__$1;(statearr_11767_11786[(2)] = null);
(statearr_11767_11786[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11758 === (5)))
{var inst_11742 = cljs.core.async.close_BANG_.call(null,out);var state_11757__$1 = state_11757;var statearr_11768_11787 = state_11757__$1;(statearr_11768_11787[(2)] = inst_11742);
(statearr_11768_11787[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11758 === (10)))
{var inst_11750 = (state_11757[(2)]);var state_11757__$1 = (function (){var statearr_11769 = state_11757;(statearr_11769[(8)] = inst_11750);
return statearr_11769;
})();var statearr_11770_11788 = state_11757__$1;(statearr_11770_11788[(2)] = null);
(statearr_11770_11788[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11758 === (8)))
{var inst_11739 = (state_11757[(7)]);var state_11757__$1 = state_11757;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11757__$1,(11),out,inst_11739);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6367__auto___11778,out))
;return ((function (switch__6352__auto__,c__6367__auto___11778,out){
return (function() {
var state_machine__6353__auto__ = null;
var state_machine__6353__auto____0 = (function (){var statearr_11774 = [null,null,null,null,null,null,null,null,null];(statearr_11774[(0)] = state_machine__6353__auto__);
(statearr_11774[(1)] = (1));
return statearr_11774;
});
var state_machine__6353__auto____1 = (function (state_11757){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_11757);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e11775){if((e11775 instanceof Object))
{var ex__6356__auto__ = e11775;var statearr_11776_11789 = state_11757;(statearr_11776_11789[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11757);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11775;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11790 = state_11757;
state_11757 = G__11790;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_11757){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_11757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto___11778,out))
})();var state__6369__auto__ = (function (){var statearr_11777 = f__6368__auto__.call(null);(statearr_11777[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto___11778);
return statearr_11777;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto___11778,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6367__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto__){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto__){
return (function (state_11942){var state_val_11943 = (state_11942[(1)]);if((state_val_11943 === (7)))
{var inst_11938 = (state_11942[(2)]);var state_11942__$1 = state_11942;var statearr_11944_11981 = state_11942__$1;(statearr_11944_11981[(2)] = inst_11938);
(statearr_11944_11981[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11943 === (20)))
{var inst_11913 = (state_11942[(7)]);var inst_11924 = (state_11942[(2)]);var inst_11925 = cljs.core.next.call(null,inst_11913);var inst_11899 = inst_11925;var inst_11900 = null;var inst_11901 = (0);var inst_11902 = (0);var state_11942__$1 = (function (){var statearr_11945 = state_11942;(statearr_11945[(8)] = inst_11899);
(statearr_11945[(9)] = inst_11902);
(statearr_11945[(10)] = inst_11900);
(statearr_11945[(11)] = inst_11901);
(statearr_11945[(12)] = inst_11924);
return statearr_11945;
})();var statearr_11946_11982 = state_11942__$1;(statearr_11946_11982[(2)] = null);
(statearr_11946_11982[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11943 === (1)))
{var state_11942__$1 = state_11942;var statearr_11947_11983 = state_11942__$1;(statearr_11947_11983[(2)] = null);
(statearr_11947_11983[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11943 === (4)))
{var inst_11888 = (state_11942[(13)]);var inst_11888__$1 = (state_11942[(2)]);var inst_11889 = (inst_11888__$1 == null);var state_11942__$1 = (function (){var statearr_11951 = state_11942;(statearr_11951[(13)] = inst_11888__$1);
return statearr_11951;
})();if(cljs.core.truth_(inst_11889))
{var statearr_11952_11984 = state_11942__$1;(statearr_11952_11984[(1)] = (5));
} else
{var statearr_11953_11985 = state_11942__$1;(statearr_11953_11985[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11943 === (15)))
{var state_11942__$1 = state_11942;var statearr_11954_11986 = state_11942__$1;(statearr_11954_11986[(2)] = null);
(statearr_11954_11986[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11943 === (13)))
{var inst_11899 = (state_11942[(8)]);var inst_11902 = (state_11942[(9)]);var inst_11900 = (state_11942[(10)]);var inst_11901 = (state_11942[(11)]);var inst_11909 = (state_11942[(2)]);var inst_11910 = (inst_11902 + (1));var tmp11948 = inst_11899;var tmp11949 = inst_11900;var tmp11950 = inst_11901;var inst_11899__$1 = tmp11948;var inst_11900__$1 = tmp11949;var inst_11901__$1 = tmp11950;var inst_11902__$1 = inst_11910;var state_11942__$1 = (function (){var statearr_11955 = state_11942;(statearr_11955[(14)] = inst_11909);
(statearr_11955[(8)] = inst_11899__$1);
(statearr_11955[(9)] = inst_11902__$1);
(statearr_11955[(10)] = inst_11900__$1);
(statearr_11955[(11)] = inst_11901__$1);
return statearr_11955;
})();var statearr_11956_11987 = state_11942__$1;(statearr_11956_11987[(2)] = null);
(statearr_11956_11987[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11943 === (6)))
{var inst_11888 = (state_11942[(13)]);var inst_11893 = f.call(null,inst_11888);var inst_11898 = cljs.core.seq.call(null,inst_11893);var inst_11899 = inst_11898;var inst_11900 = null;var inst_11901 = (0);var inst_11902 = (0);var state_11942__$1 = (function (){var statearr_11957 = state_11942;(statearr_11957[(8)] = inst_11899);
(statearr_11957[(9)] = inst_11902);
(statearr_11957[(10)] = inst_11900);
(statearr_11957[(11)] = inst_11901);
return statearr_11957;
})();var statearr_11958_11988 = state_11942__$1;(statearr_11958_11988[(2)] = null);
(statearr_11958_11988[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11943 === (17)))
{var inst_11913 = (state_11942[(7)]);var inst_11917 = cljs.core.chunk_first.call(null,inst_11913);var inst_11918 = cljs.core.chunk_rest.call(null,inst_11913);var inst_11919 = cljs.core.count.call(null,inst_11917);var inst_11899 = inst_11918;var inst_11900 = inst_11917;var inst_11901 = inst_11919;var inst_11902 = (0);var state_11942__$1 = (function (){var statearr_11959 = state_11942;(statearr_11959[(8)] = inst_11899);
(statearr_11959[(9)] = inst_11902);
(statearr_11959[(10)] = inst_11900);
(statearr_11959[(11)] = inst_11901);
return statearr_11959;
})();var statearr_11960_11989 = state_11942__$1;(statearr_11960_11989[(2)] = null);
(statearr_11960_11989[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11943 === (3)))
{var inst_11940 = (state_11942[(2)]);var state_11942__$1 = state_11942;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11942__$1,inst_11940);
} else
{if((state_val_11943 === (12)))
{var inst_11933 = (state_11942[(2)]);var state_11942__$1 = state_11942;var statearr_11961_11990 = state_11942__$1;(statearr_11961_11990[(2)] = inst_11933);
(statearr_11961_11990[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11943 === (2)))
{var state_11942__$1 = state_11942;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11942__$1,(4),in$);
} else
{if((state_val_11943 === (19)))
{var inst_11928 = (state_11942[(2)]);var state_11942__$1 = state_11942;var statearr_11962_11991 = state_11942__$1;(statearr_11962_11991[(2)] = inst_11928);
(statearr_11962_11991[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11943 === (11)))
{var inst_11899 = (state_11942[(8)]);var inst_11913 = (state_11942[(7)]);var inst_11913__$1 = cljs.core.seq.call(null,inst_11899);var state_11942__$1 = (function (){var statearr_11963 = state_11942;(statearr_11963[(7)] = inst_11913__$1);
return statearr_11963;
})();if(inst_11913__$1)
{var statearr_11964_11992 = state_11942__$1;(statearr_11964_11992[(1)] = (14));
} else
{var statearr_11965_11993 = state_11942__$1;(statearr_11965_11993[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11943 === (9)))
{var inst_11935 = (state_11942[(2)]);var state_11942__$1 = (function (){var statearr_11966 = state_11942;(statearr_11966[(15)] = inst_11935);
return statearr_11966;
})();var statearr_11967_11994 = state_11942__$1;(statearr_11967_11994[(2)] = null);
(statearr_11967_11994[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11943 === (5)))
{var inst_11891 = cljs.core.async.close_BANG_.call(null,out);var state_11942__$1 = state_11942;var statearr_11968_11995 = state_11942__$1;(statearr_11968_11995[(2)] = inst_11891);
(statearr_11968_11995[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11943 === (14)))
{var inst_11913 = (state_11942[(7)]);var inst_11915 = cljs.core.chunked_seq_QMARK_.call(null,inst_11913);var state_11942__$1 = state_11942;if(inst_11915)
{var statearr_11969_11996 = state_11942__$1;(statearr_11969_11996[(1)] = (17));
} else
{var statearr_11970_11997 = state_11942__$1;(statearr_11970_11997[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11943 === (16)))
{var inst_11931 = (state_11942[(2)]);var state_11942__$1 = state_11942;var statearr_11971_11998 = state_11942__$1;(statearr_11971_11998[(2)] = inst_11931);
(statearr_11971_11998[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11943 === (10)))
{var inst_11902 = (state_11942[(9)]);var inst_11900 = (state_11942[(10)]);var inst_11907 = cljs.core._nth.call(null,inst_11900,inst_11902);var state_11942__$1 = state_11942;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11942__$1,(13),out,inst_11907);
} else
{if((state_val_11943 === (18)))
{var inst_11913 = (state_11942[(7)]);var inst_11922 = cljs.core.first.call(null,inst_11913);var state_11942__$1 = state_11942;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11942__$1,(20),out,inst_11922);
} else
{if((state_val_11943 === (8)))
{var inst_11902 = (state_11942[(9)]);var inst_11901 = (state_11942[(11)]);var inst_11904 = (inst_11902 < inst_11901);var inst_11905 = inst_11904;var state_11942__$1 = state_11942;if(cljs.core.truth_(inst_11905))
{var statearr_11972_11999 = state_11942__$1;(statearr_11972_11999[(1)] = (10));
} else
{var statearr_11973_12000 = state_11942__$1;(statearr_11973_12000[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6367__auto__))
;return ((function (switch__6352__auto__,c__6367__auto__){
return (function() {
var state_machine__6353__auto__ = null;
var state_machine__6353__auto____0 = (function (){var statearr_11977 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11977[(0)] = state_machine__6353__auto__);
(statearr_11977[(1)] = (1));
return statearr_11977;
});
var state_machine__6353__auto____1 = (function (state_11942){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_11942);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e11978){if((e11978 instanceof Object))
{var ex__6356__auto__ = e11978;var statearr_11979_12001 = state_11942;(statearr_11979_12001[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11942);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11978;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12002 = state_11942;
state_11942 = G__12002;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_11942){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_11942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto__))
})();var state__6369__auto__ = (function (){var statearr_11980 = f__6368__auto__.call(null);(statearr_11980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto__);
return statearr_11980;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto__))
);
return c__6367__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6367__auto___12083 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto___12083){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto___12083){
return (function (state_12062){var state_val_12063 = (state_12062[(1)]);if((state_val_12063 === (7)))
{var inst_12058 = (state_12062[(2)]);var state_12062__$1 = state_12062;var statearr_12064_12084 = state_12062__$1;(statearr_12064_12084[(2)] = inst_12058);
(statearr_12064_12084[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12063 === (1)))
{var state_12062__$1 = state_12062;var statearr_12065_12085 = state_12062__$1;(statearr_12065_12085[(2)] = null);
(statearr_12065_12085[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12063 === (4)))
{var inst_12045 = (state_12062[(7)]);var inst_12045__$1 = (state_12062[(2)]);var inst_12046 = (inst_12045__$1 == null);var state_12062__$1 = (function (){var statearr_12066 = state_12062;(statearr_12066[(7)] = inst_12045__$1);
return statearr_12066;
})();if(cljs.core.truth_(inst_12046))
{var statearr_12067_12086 = state_12062__$1;(statearr_12067_12086[(1)] = (5));
} else
{var statearr_12068_12087 = state_12062__$1;(statearr_12068_12087[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12063 === (6)))
{var inst_12045 = (state_12062[(7)]);var state_12062__$1 = state_12062;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12062__$1,(11),to,inst_12045);
} else
{if((state_val_12063 === (3)))
{var inst_12060 = (state_12062[(2)]);var state_12062__$1 = state_12062;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12062__$1,inst_12060);
} else
{if((state_val_12063 === (2)))
{var state_12062__$1 = state_12062;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12062__$1,(4),from);
} else
{if((state_val_12063 === (11)))
{var inst_12055 = (state_12062[(2)]);var state_12062__$1 = (function (){var statearr_12069 = state_12062;(statearr_12069[(8)] = inst_12055);
return statearr_12069;
})();var statearr_12070_12088 = state_12062__$1;(statearr_12070_12088[(2)] = null);
(statearr_12070_12088[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12063 === (9)))
{var state_12062__$1 = state_12062;var statearr_12071_12089 = state_12062__$1;(statearr_12071_12089[(2)] = null);
(statearr_12071_12089[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12063 === (5)))
{var state_12062__$1 = state_12062;if(cljs.core.truth_(close_QMARK_))
{var statearr_12072_12090 = state_12062__$1;(statearr_12072_12090[(1)] = (8));
} else
{var statearr_12073_12091 = state_12062__$1;(statearr_12073_12091[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12063 === (10)))
{var inst_12052 = (state_12062[(2)]);var state_12062__$1 = state_12062;var statearr_12074_12092 = state_12062__$1;(statearr_12074_12092[(2)] = inst_12052);
(statearr_12074_12092[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12063 === (8)))
{var inst_12049 = cljs.core.async.close_BANG_.call(null,to);var state_12062__$1 = state_12062;var statearr_12075_12093 = state_12062__$1;(statearr_12075_12093[(2)] = inst_12049);
(statearr_12075_12093[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6367__auto___12083))
;return ((function (switch__6352__auto__,c__6367__auto___12083){
return (function() {
var state_machine__6353__auto__ = null;
var state_machine__6353__auto____0 = (function (){var statearr_12079 = [null,null,null,null,null,null,null,null,null];(statearr_12079[(0)] = state_machine__6353__auto__);
(statearr_12079[(1)] = (1));
return statearr_12079;
});
var state_machine__6353__auto____1 = (function (state_12062){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_12062);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e12080){if((e12080 instanceof Object))
{var ex__6356__auto__ = e12080;var statearr_12081_12094 = state_12062;(statearr_12081_12094[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12062);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12080;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12095 = state_12062;
state_12062 = G__12095;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_12062){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_12062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto___12083))
})();var state__6369__auto__ = (function (){var statearr_12082 = f__6368__auto__.call(null);(statearr_12082[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto___12083);
return statearr_12082;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto___12083))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6367__auto___12182 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto___12182,tc,fc){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto___12182,tc,fc){
return (function (state_12160){var state_val_12161 = (state_12160[(1)]);if((state_val_12161 === (7)))
{var inst_12156 = (state_12160[(2)]);var state_12160__$1 = state_12160;var statearr_12162_12183 = state_12160__$1;(statearr_12162_12183[(2)] = inst_12156);
(statearr_12162_12183[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12161 === (1)))
{var state_12160__$1 = state_12160;var statearr_12163_12184 = state_12160__$1;(statearr_12163_12184[(2)] = null);
(statearr_12163_12184[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12161 === (4)))
{var inst_12141 = (state_12160[(7)]);var inst_12141__$1 = (state_12160[(2)]);var inst_12142 = (inst_12141__$1 == null);var state_12160__$1 = (function (){var statearr_12164 = state_12160;(statearr_12164[(7)] = inst_12141__$1);
return statearr_12164;
})();if(cljs.core.truth_(inst_12142))
{var statearr_12165_12185 = state_12160__$1;(statearr_12165_12185[(1)] = (5));
} else
{var statearr_12166_12186 = state_12160__$1;(statearr_12166_12186[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12161 === (6)))
{var inst_12141 = (state_12160[(7)]);var inst_12147 = p.call(null,inst_12141);var state_12160__$1 = state_12160;if(cljs.core.truth_(inst_12147))
{var statearr_12167_12187 = state_12160__$1;(statearr_12167_12187[(1)] = (9));
} else
{var statearr_12168_12188 = state_12160__$1;(statearr_12168_12188[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12161 === (3)))
{var inst_12158 = (state_12160[(2)]);var state_12160__$1 = state_12160;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12160__$1,inst_12158);
} else
{if((state_val_12161 === (2)))
{var state_12160__$1 = state_12160;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12160__$1,(4),ch);
} else
{if((state_val_12161 === (11)))
{var inst_12141 = (state_12160[(7)]);var inst_12151 = (state_12160[(2)]);var state_12160__$1 = state_12160;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12160__$1,(8),inst_12151,inst_12141);
} else
{if((state_val_12161 === (9)))
{var state_12160__$1 = state_12160;var statearr_12169_12189 = state_12160__$1;(statearr_12169_12189[(2)] = tc);
(statearr_12169_12189[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12161 === (5)))
{var inst_12144 = cljs.core.async.close_BANG_.call(null,tc);var inst_12145 = cljs.core.async.close_BANG_.call(null,fc);var state_12160__$1 = (function (){var statearr_12170 = state_12160;(statearr_12170[(8)] = inst_12144);
return statearr_12170;
})();var statearr_12171_12190 = state_12160__$1;(statearr_12171_12190[(2)] = inst_12145);
(statearr_12171_12190[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12161 === (10)))
{var state_12160__$1 = state_12160;var statearr_12172_12191 = state_12160__$1;(statearr_12172_12191[(2)] = fc);
(statearr_12172_12191[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12161 === (8)))
{var inst_12153 = (state_12160[(2)]);var state_12160__$1 = (function (){var statearr_12173 = state_12160;(statearr_12173[(9)] = inst_12153);
return statearr_12173;
})();var statearr_12174_12192 = state_12160__$1;(statearr_12174_12192[(2)] = null);
(statearr_12174_12192[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6367__auto___12182,tc,fc))
;return ((function (switch__6352__auto__,c__6367__auto___12182,tc,fc){
return (function() {
var state_machine__6353__auto__ = null;
var state_machine__6353__auto____0 = (function (){var statearr_12178 = [null,null,null,null,null,null,null,null,null,null];(statearr_12178[(0)] = state_machine__6353__auto__);
(statearr_12178[(1)] = (1));
return statearr_12178;
});
var state_machine__6353__auto____1 = (function (state_12160){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_12160);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e12179){if((e12179 instanceof Object))
{var ex__6356__auto__ = e12179;var statearr_12180_12193 = state_12160;(statearr_12180_12193[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12160);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12179;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12194 = state_12160;
state_12160 = G__12194;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_12160){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_12160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto___12182,tc,fc))
})();var state__6369__auto__ = (function (){var statearr_12181 = f__6368__auto__.call(null);(statearr_12181[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto___12182);
return statearr_12181;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto___12182,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6367__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto__){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto__){
return (function (state_12241){var state_val_12242 = (state_12241[(1)]);if((state_val_12242 === (7)))
{var inst_12237 = (state_12241[(2)]);var state_12241__$1 = state_12241;var statearr_12243_12259 = state_12241__$1;(statearr_12243_12259[(2)] = inst_12237);
(statearr_12243_12259[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12242 === (6)))
{var inst_12227 = (state_12241[(7)]);var inst_12230 = (state_12241[(8)]);var inst_12234 = f.call(null,inst_12227,inst_12230);var inst_12227__$1 = inst_12234;var state_12241__$1 = (function (){var statearr_12244 = state_12241;(statearr_12244[(7)] = inst_12227__$1);
return statearr_12244;
})();var statearr_12245_12260 = state_12241__$1;(statearr_12245_12260[(2)] = null);
(statearr_12245_12260[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12242 === (5)))
{var inst_12227 = (state_12241[(7)]);var state_12241__$1 = state_12241;var statearr_12246_12261 = state_12241__$1;(statearr_12246_12261[(2)] = inst_12227);
(statearr_12246_12261[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12242 === (4)))
{var inst_12230 = (state_12241[(8)]);var inst_12230__$1 = (state_12241[(2)]);var inst_12231 = (inst_12230__$1 == null);var state_12241__$1 = (function (){var statearr_12247 = state_12241;(statearr_12247[(8)] = inst_12230__$1);
return statearr_12247;
})();if(cljs.core.truth_(inst_12231))
{var statearr_12248_12262 = state_12241__$1;(statearr_12248_12262[(1)] = (5));
} else
{var statearr_12249_12263 = state_12241__$1;(statearr_12249_12263[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12242 === (3)))
{var inst_12239 = (state_12241[(2)]);var state_12241__$1 = state_12241;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12241__$1,inst_12239);
} else
{if((state_val_12242 === (2)))
{var state_12241__$1 = state_12241;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12241__$1,(4),ch);
} else
{if((state_val_12242 === (1)))
{var inst_12227 = init;var state_12241__$1 = (function (){var statearr_12250 = state_12241;(statearr_12250[(7)] = inst_12227);
return statearr_12250;
})();var statearr_12251_12264 = state_12241__$1;(statearr_12251_12264[(2)] = null);
(statearr_12251_12264[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__6367__auto__))
;return ((function (switch__6352__auto__,c__6367__auto__){
return (function() {
var state_machine__6353__auto__ = null;
var state_machine__6353__auto____0 = (function (){var statearr_12255 = [null,null,null,null,null,null,null,null,null];(statearr_12255[(0)] = state_machine__6353__auto__);
(statearr_12255[(1)] = (1));
return statearr_12255;
});
var state_machine__6353__auto____1 = (function (state_12241){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_12241);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e12256){if((e12256 instanceof Object))
{var ex__6356__auto__ = e12256;var statearr_12257_12265 = state_12241;(statearr_12257_12265[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12241);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12256;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12266 = state_12241;
state_12241 = G__12266;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_12241){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_12241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto__))
})();var state__6369__auto__ = (function (){var statearr_12258 = f__6368__auto__.call(null);(statearr_12258[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto__);
return statearr_12258;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto__))
);
return c__6367__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6367__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto__){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto__){
return (function (state_12328){var state_val_12329 = (state_12328[(1)]);if((state_val_12329 === (7)))
{var inst_12309 = (state_12328[(7)]);var inst_12314 = (state_12328[(2)]);var inst_12315 = cljs.core.next.call(null,inst_12309);var inst_12309__$1 = inst_12315;var state_12328__$1 = (function (){var statearr_12330 = state_12328;(statearr_12330[(8)] = inst_12314);
(statearr_12330[(7)] = inst_12309__$1);
return statearr_12330;
})();var statearr_12331_12349 = state_12328__$1;(statearr_12331_12349[(2)] = null);
(statearr_12331_12349[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12329 === (1)))
{var inst_12308 = cljs.core.seq.call(null,coll);var inst_12309 = inst_12308;var state_12328__$1 = (function (){var statearr_12332 = state_12328;(statearr_12332[(7)] = inst_12309);
return statearr_12332;
})();var statearr_12333_12350 = state_12328__$1;(statearr_12333_12350[(2)] = null);
(statearr_12333_12350[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12329 === (4)))
{var inst_12309 = (state_12328[(7)]);var inst_12312 = cljs.core.first.call(null,inst_12309);var state_12328__$1 = state_12328;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12328__$1,(7),ch,inst_12312);
} else
{if((state_val_12329 === (6)))
{var inst_12324 = (state_12328[(2)]);var state_12328__$1 = state_12328;var statearr_12334_12351 = state_12328__$1;(statearr_12334_12351[(2)] = inst_12324);
(statearr_12334_12351[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12329 === (3)))
{var inst_12326 = (state_12328[(2)]);var state_12328__$1 = state_12328;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12328__$1,inst_12326);
} else
{if((state_val_12329 === (2)))
{var inst_12309 = (state_12328[(7)]);var state_12328__$1 = state_12328;if(cljs.core.truth_(inst_12309))
{var statearr_12335_12352 = state_12328__$1;(statearr_12335_12352[(1)] = (4));
} else
{var statearr_12336_12353 = state_12328__$1;(statearr_12336_12353[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12329 === (9)))
{var state_12328__$1 = state_12328;var statearr_12337_12354 = state_12328__$1;(statearr_12337_12354[(2)] = null);
(statearr_12337_12354[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12329 === (5)))
{var state_12328__$1 = state_12328;if(cljs.core.truth_(close_QMARK_))
{var statearr_12338_12355 = state_12328__$1;(statearr_12338_12355[(1)] = (8));
} else
{var statearr_12339_12356 = state_12328__$1;(statearr_12339_12356[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12329 === (10)))
{var inst_12322 = (state_12328[(2)]);var state_12328__$1 = state_12328;var statearr_12340_12357 = state_12328__$1;(statearr_12340_12357[(2)] = inst_12322);
(statearr_12340_12357[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12329 === (8)))
{var inst_12319 = cljs.core.async.close_BANG_.call(null,ch);var state_12328__$1 = state_12328;var statearr_12341_12358 = state_12328__$1;(statearr_12341_12358[(2)] = inst_12319);
(statearr_12341_12358[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});})(c__6367__auto__))
;return ((function (switch__6352__auto__,c__6367__auto__){
return (function() {
var state_machine__6353__auto__ = null;
var state_machine__6353__auto____0 = (function (){var statearr_12345 = [null,null,null,null,null,null,null,null,null];(statearr_12345[(0)] = state_machine__6353__auto__);
(statearr_12345[(1)] = (1));
return statearr_12345;
});
var state_machine__6353__auto____1 = (function (state_12328){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_12328);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e12346){if((e12346 instanceof Object))
{var ex__6356__auto__ = e12346;var statearr_12347_12359 = state_12328;(statearr_12347_12359[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12328);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12346;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12360 = state_12328;
state_12328 = G__12360;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_12328){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_12328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto__))
})();var state__6369__auto__ = (function (){var statearr_12348 = f__6368__auto__.call(null);(statearr_12348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto__);
return statearr_12348;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto__))
);
return c__6367__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj12362 = {};return obj12362;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3548__auto__ = _;if(and__3548__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3548__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4187__auto__ = (((_ == null))?null:_);return (function (){var or__3560__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj12364 = {};return obj12364;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3548__auto__ = m;if(and__3548__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3548__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4187__auto__ = (((m == null))?null:m);return (function (){var or__3560__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3548__auto__ = m;if(and__3548__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3548__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4187__auto__ = (((m == null))?null:m);return (function (){var or__3560__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3548__auto__ = m;if(and__3548__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3548__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4187__auto__ = (((m == null))?null:m);return (function (){var or__3560__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12588 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12588 = (function (cs,ch,mult,meta12589){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12589 = meta12589;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12588.cljs$lang$type = true;
cljs.core.async.t12588.cljs$lang$ctorStr = "cljs.core.async/t12588";
cljs.core.async.t12588.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t12588");
});})(cs))
;
cljs.core.async.t12588.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12588.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12588.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12588.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12588.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12588.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12588.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12590){var self__ = this;
var _12590__$1 = this;return self__.meta12589;
});})(cs))
;
cljs.core.async.t12588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12590,meta12589__$1){var self__ = this;
var _12590__$1 = this;return (new cljs.core.async.t12588(self__.cs,self__.ch,self__.mult,meta12589__$1));
});})(cs))
;
cljs.core.async.__GT_t12588 = ((function (cs){
return (function __GT_t12588(cs__$1,ch__$1,mult__$1,meta12589){return (new cljs.core.async.t12588(cs__$1,ch__$1,mult__$1,meta12589));
});})(cs))
;
}
return (new cljs.core.async.t12588(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6367__auto___12811 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto___12811,cs,m,dchan,dctr,done){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto___12811,cs,m,dchan,dctr,done){
return (function (state_12725){var state_val_12726 = (state_12725[(1)]);if((state_val_12726 === (7)))
{var inst_12721 = (state_12725[(2)]);var state_12725__$1 = state_12725;var statearr_12727_12812 = state_12725__$1;(statearr_12727_12812[(2)] = inst_12721);
(statearr_12727_12812[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12726 === (20)))
{var inst_12622 = (state_12725[(7)]);var inst_12632 = cljs.core.first.call(null,inst_12622);var inst_12633 = cljs.core.nth.call(null,inst_12632,(0),null);var inst_12634 = cljs.core.nth.call(null,inst_12632,(1),null);var state_12725__$1 = (function (){var statearr_12728 = state_12725;(statearr_12728[(8)] = inst_12633);
return statearr_12728;
})();if(cljs.core.truth_(inst_12634))
{var statearr_12729_12813 = state_12725__$1;(statearr_12729_12813[(1)] = (22));
} else
{var statearr_12730_12814 = state_12725__$1;(statearr_12730_12814[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12726 === (27)))
{var inst_12664 = (state_12725[(9)]);var inst_12662 = (state_12725[(10)]);var inst_12669 = cljs.core._nth.call(null,inst_12662,inst_12664);var state_12725__$1 = (function (){var statearr_12731 = state_12725;(statearr_12731[(11)] = inst_12669);
return statearr_12731;
})();var statearr_12732_12815 = state_12725__$1;(statearr_12732_12815[(2)] = null);
(statearr_12732_12815[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12726 === (1)))
{var state_12725__$1 = state_12725;var statearr_12733_12816 = state_12725__$1;(statearr_12733_12816[(2)] = null);
(statearr_12733_12816[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12726 === (24)))
{var inst_12622 = (state_12725[(7)]);var inst_12639 = (state_12725[(2)]);var inst_12640 = cljs.core.next.call(null,inst_12622);var inst_12602 = inst_12640;var inst_12603 = null;var inst_12604 = (0);var inst_12605 = (0);var state_12725__$1 = (function (){var statearr_12734 = state_12725;(statearr_12734[(12)] = inst_12602);
(statearr_12734[(13)] = inst_12603);
(statearr_12734[(14)] = inst_12639);
(statearr_12734[(15)] = inst_12605);
(statearr_12734[(16)] = inst_12604);
return statearr_12734;
})();var statearr_12735_12817 = state_12725__$1;(statearr_12735_12817[(2)] = null);
(statearr_12735_12817[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12726 === (39)))
{var inst_12682 = (state_12725[(17)]);var inst_12700 = (state_12725[(2)]);var inst_12701 = cljs.core.next.call(null,inst_12682);var inst_12661 = inst_12701;var inst_12662 = null;var inst_12663 = (0);var inst_12664 = (0);var state_12725__$1 = (function (){var statearr_12739 = state_12725;(statearr_12739[(18)] = inst_12700);
(statearr_12739[(19)] = inst_12663);
(statearr_12739[(20)] = inst_12661);
(statearr_12739[(9)] = inst_12664);
(statearr_12739[(10)] = inst_12662);
return statearr_12739;
})();var statearr_12740_12818 = state_12725__$1;(statearr_12740_12818[(2)] = null);
(statearr_12740_12818[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12726 === (4)))
{var inst_12593 = (state_12725[(21)]);var inst_12593__$1 = (state_12725[(2)]);var inst_12594 = (inst_12593__$1 == null);var state_12725__$1 = (function (){var statearr_12741 = state_12725;(statearr_12741[(21)] = inst_12593__$1);
return statearr_12741;
})();if(cljs.core.truth_(inst_12594))
{var statearr_12742_12819 = state_12725__$1;(statearr_12742_12819[(1)] = (5));
} else
{var statearr_12743_12820 = state_12725__$1;(statearr_12743_12820[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12726 === (15)))
{var inst_12602 = (state_12725[(12)]);var inst_12603 = (state_12725[(13)]);var inst_12605 = (state_12725[(15)]);var inst_12604 = (state_12725[(16)]);var inst_12618 = (state_12725[(2)]);var inst_12619 = (inst_12605 + (1));var tmp12736 = inst_12602;var tmp12737 = inst_12603;var tmp12738 = inst_12604;var inst_12602__$1 = tmp12736;var inst_12603__$1 = tmp12737;var inst_12604__$1 = tmp12738;var inst_12605__$1 = inst_12619;var state_12725__$1 = (function (){var statearr_12744 = state_12725;(statearr_12744[(12)] = inst_12602__$1);
(statearr_12744[(13)] = inst_12603__$1);
(statearr_12744[(15)] = inst_12605__$1);
(statearr_12744[(22)] = inst_12618);
(statearr_12744[(16)] = inst_12604__$1);
return statearr_12744;
})();var statearr_12745_12821 = state_12725__$1;(statearr_12745_12821[(2)] = null);
(statearr_12745_12821[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12726 === (21)))
{var inst_12643 = (state_12725[(2)]);var state_12725__$1 = state_12725;var statearr_12746_12822 = state_12725__$1;(statearr_12746_12822[(2)] = inst_12643);
(statearr_12746_12822[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12726 === (31)))
{var inst_12669 = (state_12725[(11)]);var inst_12670 = (state_12725[(2)]);var inst_12671 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12672 = cljs.core.async.untap_STAR_.call(null,m,inst_12669);var state_12725__$1 = (function (){var statearr_12747 = state_12725;(statearr_12747[(23)] = inst_12670);
(statearr_12747[(24)] = inst_12671);
return statearr_12747;
})();var statearr_12748_12823 = state_12725__$1;(statearr_12748_12823[(2)] = inst_12672);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12725__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12726 === (32)))
{var inst_12669 = (state_12725[(11)]);var inst_12593 = (state_12725[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12725,(31),Object,null,(30));var inst_12676 = cljs.core.async.put_BANG_.call(null,inst_12669,inst_12593,done);var state_12725__$1 = state_12725;var statearr_12749_12824 = state_12725__$1;(statearr_12749_12824[(2)] = inst_12676);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12725__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12726 === (40)))
{var inst_12691 = (state_12725[(25)]);var inst_12692 = (state_12725[(2)]);var inst_12693 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12694 = cljs.core.async.untap_STAR_.call(null,m,inst_12691);var state_12725__$1 = (function (){var statearr_12750 = state_12725;(statearr_12750[(26)] = inst_12693);
(statearr_12750[(27)] = inst_12692);
return statearr_12750;
})();var statearr_12751_12825 = state_12725__$1;(statearr_12751_12825[(2)] = inst_12694);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12725__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12726 === (33)))
{var inst_12682 = (state_12725[(17)]);var inst_12684 = cljs.core.chunked_seq_QMARK_.call(null,inst_12682);var state_12725__$1 = state_12725;if(inst_12684)
{var statearr_12752_12826 = state_12725__$1;(statearr_12752_12826[(1)] = (36));
} else
{var statearr_12753_12827 = state_12725__$1;(statearr_12753_12827[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12726 === (13)))
{var inst_12612 = (state_12725[(28)]);var inst_12615 = cljs.core.async.close_BANG_.call(null,inst_12612);var state_12725__$1 = state_12725;var statearr_12754_12828 = state_12725__$1;(statearr_12754_12828[(2)] = inst_12615);
(statearr_12754_12828[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12726 === (22)))
{var inst_12633 = (state_12725[(8)]);var inst_12636 = cljs.core.async.close_BANG_.call(null,inst_12633);var state_12725__$1 = state_12725;var statearr_12755_12829 = state_12725__$1;(statearr_12755_12829[(2)] = inst_12636);
(statearr_12755_12829[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12726 === (36)))
{var inst_12682 = (state_12725[(17)]);var inst_12686 = cljs.core.chunk_first.call(null,inst_12682);var inst_12687 = cljs.core.chunk_rest.call(null,inst_12682);var inst_12688 = cljs.core.count.call(null,inst_12686);var inst_12661 = inst_12687;var inst_12662 = inst_12686;var inst_12663 = inst_12688;var inst_12664 = (0);var state_12725__$1 = (function (){var statearr_12756 = state_12725;(statearr_12756[(19)] = inst_12663);
(statearr_12756[(20)] = inst_12661);
(statearr_12756[(9)] = inst_12664);
(statearr_12756[(10)] = inst_12662);
return statearr_12756;
})();var statearr_12757_12830 = state_12725__$1;(statearr_12757_12830[(2)] = null);
(statearr_12757_12830[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12726 === (41)))
{var inst_12593 = (state_12725[(21)]);var inst_12691 = (state_12725[(25)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12725,(40),Object,null,(39));var inst_12698 = cljs.core.async.put_BANG_.call(null,inst_12691,inst_12593,done);var state_12725__$1 = state_12725;var statearr_12758_12831 = state_12725__$1;(statearr_12758_12831[(2)] = inst_12698);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12725__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12726 === (43)))
{var state_12725__$1 = state_12725;var statearr_12759_12832 = state_12725__$1;(statearr_12759_12832[(2)] = null);
(statearr_12759_12832[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12726 === (29)))
{var inst_12709 = (state_12725[(2)]);var state_12725__$1 = state_12725;var statearr_12760_12833 = state_12725__$1;(statearr_12760_12833[(2)] = inst_12709);
(statearr_12760_12833[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12726 === (44)))
{var inst_12718 = (state_12725[(2)]);var state_12725__$1 = (function (){var statearr_12761 = state_12725;(statearr_12761[(29)] = inst_12718);
return statearr_12761;
})();var statearr_12762_12834 = state_12725__$1;(statearr_12762_12834[(2)] = null);
(statearr_12762_12834[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12726 === (6)))
{var inst_12653 = (state_12725[(30)]);var inst_12652 = cljs.core.deref.call(null,cs);var inst_12653__$1 = cljs.core.keys.call(null,inst_12652);var inst_12654 = cljs.core.count.call(null,inst_12653__$1);var inst_12655 = cljs.core.reset_BANG_.call(null,dctr,inst_12654);var inst_12660 = cljs.core.seq.call(null,inst_12653__$1);var inst_12661 = inst_12660;var inst_12662 = null;var inst_12663 = (0);var inst_12664 = (0);var state_12725__$1 = (function (){var statearr_12763 = state_12725;(statearr_12763[(19)] = inst_12663);
(statearr_12763[(20)] = inst_12661);
(statearr_12763[(31)] = inst_12655);
(statearr_12763[(30)] = inst_12653__$1);
(statearr_12763[(9)] = inst_12664);
(statearr_12763[(10)] = inst_12662);
return statearr_12763;
})();var statearr_12764_12835 = state_12725__$1;(statearr_12764_12835[(2)] = null);
(statearr_12764_12835[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12726 === (28)))
{var inst_12682 = (state_12725[(17)]);var inst_12661 = (state_12725[(20)]);var inst_12682__$1 = cljs.core.seq.call(null,inst_12661);var state_12725__$1 = (function (){var statearr_12765 = state_12725;(statearr_12765[(17)] = inst_12682__$1);
return statearr_12765;
})();if(inst_12682__$1)
{var statearr_12766_12836 = state_12725__$1;(statearr_12766_12836[(1)] = (33));
} else
{var statearr_12767_12837 = state_12725__$1;(statearr_12767_12837[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12726 === (25)))
{var inst_12663 = (state_12725[(19)]);var inst_12664 = (state_12725[(9)]);var inst_12666 = (inst_12664 < inst_12663);var inst_12667 = inst_12666;var state_12725__$1 = state_12725;if(cljs.core.truth_(inst_12667))
{var statearr_12768_12838 = state_12725__$1;(statearr_12768_12838[(1)] = (27));
} else
{var statearr_12769_12839 = state_12725__$1;(statearr_12769_12839[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12726 === (34)))
{var state_12725__$1 = state_12725;var statearr_12770_12840 = state_12725__$1;(statearr_12770_12840[(2)] = null);
(statearr_12770_12840[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12726 === (17)))
{var state_12725__$1 = state_12725;var statearr_12771_12841 = state_12725__$1;(statearr_12771_12841[(2)] = null);
(statearr_12771_12841[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12726 === (3)))
{var inst_12723 = (state_12725[(2)]);var state_12725__$1 = state_12725;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12725__$1,inst_12723);
} else
{if((state_val_12726 === (12)))
{var inst_12648 = (state_12725[(2)]);var state_12725__$1 = state_12725;var statearr_12772_12842 = state_12725__$1;(statearr_12772_12842[(2)] = inst_12648);
(statearr_12772_12842[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12726 === (2)))
{var state_12725__$1 = state_12725;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12725__$1,(4),ch);
} else
{if((state_val_12726 === (23)))
{var state_12725__$1 = state_12725;var statearr_12773_12843 = state_12725__$1;(statearr_12773_12843[(2)] = null);
(statearr_12773_12843[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12726 === (35)))
{var inst_12707 = (state_12725[(2)]);var state_12725__$1 = state_12725;var statearr_12774_12844 = state_12725__$1;(statearr_12774_12844[(2)] = inst_12707);
(statearr_12774_12844[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12726 === (19)))
{var inst_12622 = (state_12725[(7)]);var inst_12626 = cljs.core.chunk_first.call(null,inst_12622);var inst_12627 = cljs.core.chunk_rest.call(null,inst_12622);var inst_12628 = cljs.core.count.call(null,inst_12626);var inst_12602 = inst_12627;var inst_12603 = inst_12626;var inst_12604 = inst_12628;var inst_12605 = (0);var state_12725__$1 = (function (){var statearr_12775 = state_12725;(statearr_12775[(12)] = inst_12602);
(statearr_12775[(13)] = inst_12603);
(statearr_12775[(15)] = inst_12605);
(statearr_12775[(16)] = inst_12604);
return statearr_12775;
})();var statearr_12776_12845 = state_12725__$1;(statearr_12776_12845[(2)] = null);
(statearr_12776_12845[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12726 === (11)))
{var inst_12602 = (state_12725[(12)]);var inst_12622 = (state_12725[(7)]);var inst_12622__$1 = cljs.core.seq.call(null,inst_12602);var state_12725__$1 = (function (){var statearr_12777 = state_12725;(statearr_12777[(7)] = inst_12622__$1);
return statearr_12777;
})();if(inst_12622__$1)
{var statearr_12778_12846 = state_12725__$1;(statearr_12778_12846[(1)] = (16));
} else
{var statearr_12779_12847 = state_12725__$1;(statearr_12779_12847[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12726 === (9)))
{var inst_12650 = (state_12725[(2)]);var state_12725__$1 = state_12725;var statearr_12780_12848 = state_12725__$1;(statearr_12780_12848[(2)] = inst_12650);
(statearr_12780_12848[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12726 === (5)))
{var inst_12600 = cljs.core.deref.call(null,cs);var inst_12601 = cljs.core.seq.call(null,inst_12600);var inst_12602 = inst_12601;var inst_12603 = null;var inst_12604 = (0);var inst_12605 = (0);var state_12725__$1 = (function (){var statearr_12781 = state_12725;(statearr_12781[(12)] = inst_12602);
(statearr_12781[(13)] = inst_12603);
(statearr_12781[(15)] = inst_12605);
(statearr_12781[(16)] = inst_12604);
return statearr_12781;
})();var statearr_12782_12849 = state_12725__$1;(statearr_12782_12849[(2)] = null);
(statearr_12782_12849[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12726 === (14)))
{var state_12725__$1 = state_12725;var statearr_12783_12850 = state_12725__$1;(statearr_12783_12850[(2)] = null);
(statearr_12783_12850[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12726 === (45)))
{var inst_12715 = (state_12725[(2)]);var state_12725__$1 = state_12725;var statearr_12784_12851 = state_12725__$1;(statearr_12784_12851[(2)] = inst_12715);
(statearr_12784_12851[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12726 === (26)))
{var inst_12653 = (state_12725[(30)]);var inst_12711 = (state_12725[(2)]);var inst_12712 = cljs.core.seq.call(null,inst_12653);var state_12725__$1 = (function (){var statearr_12785 = state_12725;(statearr_12785[(32)] = inst_12711);
return statearr_12785;
})();if(inst_12712)
{var statearr_12786_12852 = state_12725__$1;(statearr_12786_12852[(1)] = (42));
} else
{var statearr_12787_12853 = state_12725__$1;(statearr_12787_12853[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12726 === (16)))
{var inst_12622 = (state_12725[(7)]);var inst_12624 = cljs.core.chunked_seq_QMARK_.call(null,inst_12622);var state_12725__$1 = state_12725;if(inst_12624)
{var statearr_12791_12854 = state_12725__$1;(statearr_12791_12854[(1)] = (19));
} else
{var statearr_12792_12855 = state_12725__$1;(statearr_12792_12855[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12726 === (38)))
{var inst_12704 = (state_12725[(2)]);var state_12725__$1 = state_12725;var statearr_12793_12856 = state_12725__$1;(statearr_12793_12856[(2)] = inst_12704);
(statearr_12793_12856[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12726 === (30)))
{var inst_12663 = (state_12725[(19)]);var inst_12661 = (state_12725[(20)]);var inst_12664 = (state_12725[(9)]);var inst_12662 = (state_12725[(10)]);var inst_12678 = (state_12725[(2)]);var inst_12679 = (inst_12664 + (1));var tmp12788 = inst_12663;var tmp12789 = inst_12661;var tmp12790 = inst_12662;var inst_12661__$1 = tmp12789;var inst_12662__$1 = tmp12790;var inst_12663__$1 = tmp12788;var inst_12664__$1 = inst_12679;var state_12725__$1 = (function (){var statearr_12794 = state_12725;(statearr_12794[(19)] = inst_12663__$1);
(statearr_12794[(33)] = inst_12678);
(statearr_12794[(20)] = inst_12661__$1);
(statearr_12794[(9)] = inst_12664__$1);
(statearr_12794[(10)] = inst_12662__$1);
return statearr_12794;
})();var statearr_12795_12857 = state_12725__$1;(statearr_12795_12857[(2)] = null);
(statearr_12795_12857[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12726 === (10)))
{var inst_12603 = (state_12725[(13)]);var inst_12605 = (state_12725[(15)]);var inst_12611 = cljs.core._nth.call(null,inst_12603,inst_12605);var inst_12612 = cljs.core.nth.call(null,inst_12611,(0),null);var inst_12613 = cljs.core.nth.call(null,inst_12611,(1),null);var state_12725__$1 = (function (){var statearr_12796 = state_12725;(statearr_12796[(28)] = inst_12612);
return statearr_12796;
})();if(cljs.core.truth_(inst_12613))
{var statearr_12797_12858 = state_12725__$1;(statearr_12797_12858[(1)] = (13));
} else
{var statearr_12798_12859 = state_12725__$1;(statearr_12798_12859[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12726 === (18)))
{var inst_12646 = (state_12725[(2)]);var state_12725__$1 = state_12725;var statearr_12799_12860 = state_12725__$1;(statearr_12799_12860[(2)] = inst_12646);
(statearr_12799_12860[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12726 === (42)))
{var state_12725__$1 = state_12725;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12725__$1,(45),dchan);
} else
{if((state_val_12726 === (37)))
{var inst_12682 = (state_12725[(17)]);var inst_12691 = cljs.core.first.call(null,inst_12682);var state_12725__$1 = (function (){var statearr_12800 = state_12725;(statearr_12800[(25)] = inst_12691);
return statearr_12800;
})();var statearr_12801_12861 = state_12725__$1;(statearr_12801_12861[(2)] = null);
(statearr_12801_12861[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12726 === (8)))
{var inst_12605 = (state_12725[(15)]);var inst_12604 = (state_12725[(16)]);var inst_12607 = (inst_12605 < inst_12604);var inst_12608 = inst_12607;var state_12725__$1 = state_12725;if(cljs.core.truth_(inst_12608))
{var statearr_12802_12862 = state_12725__$1;(statearr_12802_12862[(1)] = (10));
} else
{var statearr_12803_12863 = state_12725__$1;(statearr_12803_12863[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6367__auto___12811,cs,m,dchan,dctr,done))
;return ((function (switch__6352__auto__,c__6367__auto___12811,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6353__auto__ = null;
var state_machine__6353__auto____0 = (function (){var statearr_12807 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12807[(0)] = state_machine__6353__auto__);
(statearr_12807[(1)] = (1));
return statearr_12807;
});
var state_machine__6353__auto____1 = (function (state_12725){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_12725);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e12808){if((e12808 instanceof Object))
{var ex__6356__auto__ = e12808;var statearr_12809_12864 = state_12725;(statearr_12809_12864[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12725);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12808;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12865 = state_12725;
state_12725 = G__12865;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_12725){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_12725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto___12811,cs,m,dchan,dctr,done))
})();var state__6369__auto__ = (function (){var statearr_12810 = f__6368__auto__.call(null);(statearr_12810[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto___12811);
return statearr_12810;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto___12811,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj12867 = {};return obj12867;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3548__auto__ = m;if(and__3548__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3548__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4187__auto__ = (((m == null))?null:m);return (function (){var or__3560__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3548__auto__ = m;if(and__3548__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3548__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4187__auto__ = (((m == null))?null:m);return (function (){var or__3560__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3548__auto__ = m;if(and__3548__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3548__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4187__auto__ = (((m == null))?null:m);return (function (){var or__3560__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3548__auto__ = m;if(and__3548__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3548__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4187__auto__ = (((m == null))?null:m);return (function (){var or__3560__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3548__auto__ = m;if(and__3548__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3548__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4187__auto__ = (((m == null))?null:m);return (function (){var or__3560__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t12977 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12977 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12978){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12978 = meta12978;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12977.cljs$lang$type = true;
cljs.core.async.t12977.cljs$lang$ctorStr = "cljs.core.async/t12977";
cljs.core.async.t12977.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t12977");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12977.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12977.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12977.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12977.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12977.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12977.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12977.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12977.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12977.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12979){var self__ = this;
var _12979__$1 = this;return self__.meta12978;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12977.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12979,meta12978__$1){var self__ = this;
var _12979__$1 = this;return (new cljs.core.async.t12977(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12978__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12977 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12977(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12978){return (new cljs.core.async.t12977(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12978));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12977(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6367__auto___13086 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto___13086,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto___13086,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13044){var state_val_13045 = (state_13044[(1)]);if((state_val_13045 === (7)))
{var inst_12993 = (state_13044[(7)]);var inst_12998 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12993);var state_13044__$1 = state_13044;var statearr_13046_13087 = state_13044__$1;(statearr_13046_13087[(2)] = inst_12998);
(statearr_13046_13087[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13045 === (20)))
{var inst_13008 = (state_13044[(8)]);var state_13044__$1 = state_13044;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13044__$1,(23),out,inst_13008);
} else
{if((state_val_13045 === (1)))
{var inst_12983 = (state_13044[(9)]);var inst_12983__$1 = calc_state.call(null);var inst_12984 = cljs.core.seq_QMARK_.call(null,inst_12983__$1);var state_13044__$1 = (function (){var statearr_13047 = state_13044;(statearr_13047[(9)] = inst_12983__$1);
return statearr_13047;
})();if(inst_12984)
{var statearr_13048_13088 = state_13044__$1;(statearr_13048_13088[(1)] = (2));
} else
{var statearr_13049_13089 = state_13044__$1;(statearr_13049_13089[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13045 === (4)))
{var inst_12983 = (state_13044[(9)]);var inst_12989 = (state_13044[(2)]);var inst_12990 = cljs.core.get.call(null,inst_12989,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12991 = cljs.core.get.call(null,inst_12989,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12992 = cljs.core.get.call(null,inst_12989,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_12993 = inst_12983;var state_13044__$1 = (function (){var statearr_13050 = state_13044;(statearr_13050[(10)] = inst_12991);
(statearr_13050[(11)] = inst_12990);
(statearr_13050[(7)] = inst_12993);
(statearr_13050[(12)] = inst_12992);
return statearr_13050;
})();var statearr_13051_13090 = state_13044__$1;(statearr_13051_13090[(2)] = null);
(statearr_13051_13090[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13045 === (15)))
{var state_13044__$1 = state_13044;var statearr_13052_13091 = state_13044__$1;(statearr_13052_13091[(2)] = null);
(statearr_13052_13091[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13045 === (21)))
{var state_13044__$1 = state_13044;var statearr_13053_13092 = state_13044__$1;(statearr_13053_13092[(2)] = null);
(statearr_13053_13092[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13045 === (13)))
{var inst_13040 = (state_13044[(2)]);var state_13044__$1 = state_13044;var statearr_13054_13093 = state_13044__$1;(statearr_13054_13093[(2)] = inst_13040);
(statearr_13054_13093[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13045 === (22)))
{var inst_13001 = (state_13044[(13)]);var inst_13037 = (state_13044[(2)]);var inst_12993 = inst_13001;var state_13044__$1 = (function (){var statearr_13055 = state_13044;(statearr_13055[(7)] = inst_12993);
(statearr_13055[(14)] = inst_13037);
return statearr_13055;
})();var statearr_13056_13094 = state_13044__$1;(statearr_13056_13094[(2)] = null);
(statearr_13056_13094[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13045 === (6)))
{var inst_13042 = (state_13044[(2)]);var state_13044__$1 = state_13044;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13044__$1,inst_13042);
} else
{if((state_val_13045 === (17)))
{var inst_13023 = (state_13044[(15)]);var state_13044__$1 = state_13044;var statearr_13057_13095 = state_13044__$1;(statearr_13057_13095[(2)] = inst_13023);
(statearr_13057_13095[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13045 === (3)))
{var inst_12983 = (state_13044[(9)]);var state_13044__$1 = state_13044;var statearr_13058_13096 = state_13044__$1;(statearr_13058_13096[(2)] = inst_12983);
(statearr_13058_13096[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13045 === (12)))
{var inst_13009 = (state_13044[(16)]);var inst_13023 = (state_13044[(15)]);var inst_13004 = (state_13044[(17)]);var inst_13023__$1 = inst_13004.call(null,inst_13009);var state_13044__$1 = (function (){var statearr_13059 = state_13044;(statearr_13059[(15)] = inst_13023__$1);
return statearr_13059;
})();if(cljs.core.truth_(inst_13023__$1))
{var statearr_13060_13097 = state_13044__$1;(statearr_13060_13097[(1)] = (17));
} else
{var statearr_13061_13098 = state_13044__$1;(statearr_13061_13098[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13045 === (2)))
{var inst_12983 = (state_13044[(9)]);var inst_12986 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12983);var state_13044__$1 = state_13044;var statearr_13062_13099 = state_13044__$1;(statearr_13062_13099[(2)] = inst_12986);
(statearr_13062_13099[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13045 === (23)))
{var inst_13034 = (state_13044[(2)]);var state_13044__$1 = state_13044;var statearr_13063_13100 = state_13044__$1;(statearr_13063_13100[(2)] = inst_13034);
(statearr_13063_13100[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13045 === (19)))
{var inst_13031 = (state_13044[(2)]);var state_13044__$1 = state_13044;if(cljs.core.truth_(inst_13031))
{var statearr_13064_13101 = state_13044__$1;(statearr_13064_13101[(1)] = (20));
} else
{var statearr_13065_13102 = state_13044__$1;(statearr_13065_13102[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13045 === (11)))
{var inst_13008 = (state_13044[(8)]);var inst_13014 = (inst_13008 == null);var state_13044__$1 = state_13044;if(cljs.core.truth_(inst_13014))
{var statearr_13066_13103 = state_13044__$1;(statearr_13066_13103[(1)] = (14));
} else
{var statearr_13067_13104 = state_13044__$1;(statearr_13067_13104[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13045 === (9)))
{var inst_13001 = (state_13044[(13)]);var inst_13001__$1 = (state_13044[(2)]);var inst_13002 = cljs.core.get.call(null,inst_13001__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_13003 = cljs.core.get.call(null,inst_13001__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_13004 = cljs.core.get.call(null,inst_13001__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_13044__$1 = (function (){var statearr_13068 = state_13044;(statearr_13068[(18)] = inst_13003);
(statearr_13068[(13)] = inst_13001__$1);
(statearr_13068[(17)] = inst_13004);
return statearr_13068;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13044__$1,(10),inst_13002);
} else
{if((state_val_13045 === (5)))
{var inst_12993 = (state_13044[(7)]);var inst_12996 = cljs.core.seq_QMARK_.call(null,inst_12993);var state_13044__$1 = state_13044;if(inst_12996)
{var statearr_13069_13105 = state_13044__$1;(statearr_13069_13105[(1)] = (7));
} else
{var statearr_13070_13106 = state_13044__$1;(statearr_13070_13106[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13045 === (14)))
{var inst_13009 = (state_13044[(16)]);var inst_13016 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13009);var state_13044__$1 = state_13044;var statearr_13071_13107 = state_13044__$1;(statearr_13071_13107[(2)] = inst_13016);
(statearr_13071_13107[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13045 === (16)))
{var inst_13019 = (state_13044[(2)]);var inst_13020 = calc_state.call(null);var inst_12993 = inst_13020;var state_13044__$1 = (function (){var statearr_13072 = state_13044;(statearr_13072[(19)] = inst_13019);
(statearr_13072[(7)] = inst_12993);
return statearr_13072;
})();var statearr_13073_13108 = state_13044__$1;(statearr_13073_13108[(2)] = null);
(statearr_13073_13108[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13045 === (10)))
{var inst_13009 = (state_13044[(16)]);var inst_13008 = (state_13044[(8)]);var inst_13007 = (state_13044[(2)]);var inst_13008__$1 = cljs.core.nth.call(null,inst_13007,(0),null);var inst_13009__$1 = cljs.core.nth.call(null,inst_13007,(1),null);var inst_13010 = (inst_13008__$1 == null);var inst_13011 = cljs.core._EQ_.call(null,inst_13009__$1,change);var inst_13012 = (inst_13010) || (inst_13011);var state_13044__$1 = (function (){var statearr_13074 = state_13044;(statearr_13074[(16)] = inst_13009__$1);
(statearr_13074[(8)] = inst_13008__$1);
return statearr_13074;
})();if(cljs.core.truth_(inst_13012))
{var statearr_13075_13109 = state_13044__$1;(statearr_13075_13109[(1)] = (11));
} else
{var statearr_13076_13110 = state_13044__$1;(statearr_13076_13110[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13045 === (18)))
{var inst_13009 = (state_13044[(16)]);var inst_13003 = (state_13044[(18)]);var inst_13004 = (state_13044[(17)]);var inst_13026 = cljs.core.empty_QMARK_.call(null,inst_13004);var inst_13027 = inst_13003.call(null,inst_13009);var inst_13028 = cljs.core.not.call(null,inst_13027);var inst_13029 = (inst_13026) && (inst_13028);var state_13044__$1 = state_13044;var statearr_13077_13111 = state_13044__$1;(statearr_13077_13111[(2)] = inst_13029);
(statearr_13077_13111[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13045 === (8)))
{var inst_12993 = (state_13044[(7)]);var state_13044__$1 = state_13044;var statearr_13078_13112 = state_13044__$1;(statearr_13078_13112[(2)] = inst_12993);
(statearr_13078_13112[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6367__auto___13086,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6352__auto__,c__6367__auto___13086,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6353__auto__ = null;
var state_machine__6353__auto____0 = (function (){var statearr_13082 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13082[(0)] = state_machine__6353__auto__);
(statearr_13082[(1)] = (1));
return statearr_13082;
});
var state_machine__6353__auto____1 = (function (state_13044){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_13044);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e13083){if((e13083 instanceof Object))
{var ex__6356__auto__ = e13083;var statearr_13084_13113 = state_13044;(statearr_13084_13113[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13044);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13083;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13114 = state_13044;
state_13044 = G__13114;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_13044){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_13044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto___13086,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6369__auto__ = (function (){var statearr_13085 = f__6368__auto__.call(null);(statearr_13085[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto___13086);
return statearr_13085;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto___13086,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj13116 = {};return obj13116;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3548__auto__ = p;if(and__3548__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3548__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4187__auto__ = (((p == null))?null:p);return (function (){var or__3560__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3548__auto__ = p;if(and__3548__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3548__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4187__auto__ = (((p == null))?null:p);return (function (){var or__3560__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3548__auto__ = p;if(and__3548__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3548__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4187__auto__ = (((p == null))?null:p);return (function (){var or__3560__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3548__auto__ = p;if(and__3548__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3548__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4187__auto__ = (((p == null))?null:p);return (function (){var or__3560__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4187__auto__)]);if(or__3560__auto__)
{return or__3560__auto__;
} else
{var or__3560__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3560__auto____$1)
{return or__3560__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3560__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3560__auto__,mults){
return (function (p1__13117_SHARP_){if(cljs.core.truth_(p1__13117_SHARP_.call(null,topic)))
{return p1__13117_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13117_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3560__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13242 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13242 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13243){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13243 = meta13243;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13242.cljs$lang$type = true;
cljs.core.async.t13242.cljs$lang$ctorStr = "cljs.core.async/t13242";
cljs.core.async.t13242.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t13242");
});})(mults,ensure_mult))
;
cljs.core.async.t13242.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13242.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13242.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13242.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13242.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13242.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13242.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13242.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13244){var self__ = this;
var _13244__$1 = this;return self__.meta13243;
});})(mults,ensure_mult))
;
cljs.core.async.t13242.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13244,meta13243__$1){var self__ = this;
var _13244__$1 = this;return (new cljs.core.async.t13242(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13243__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13242 = ((function (mults,ensure_mult){
return (function __GT_t13242(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13243){return (new cljs.core.async.t13242(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13243));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13242(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6367__auto___13366 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto___13366,mults,ensure_mult,p){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto___13366,mults,ensure_mult,p){
return (function (state_13318){var state_val_13319 = (state_13318[(1)]);if((state_val_13319 === (7)))
{var inst_13314 = (state_13318[(2)]);var state_13318__$1 = state_13318;var statearr_13320_13367 = state_13318__$1;(statearr_13320_13367[(2)] = inst_13314);
(statearr_13320_13367[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13319 === (20)))
{var state_13318__$1 = state_13318;var statearr_13321_13368 = state_13318__$1;(statearr_13321_13368[(2)] = null);
(statearr_13321_13368[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13319 === (1)))
{var state_13318__$1 = state_13318;var statearr_13322_13369 = state_13318__$1;(statearr_13322_13369[(2)] = null);
(statearr_13322_13369[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13319 === (24)))
{var inst_13247 = (state_13318[(7)]);var inst_13297 = (state_13318[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13318,(23),Object,null,(22));var inst_13304 = cljs.core.async.muxch_STAR_.call(null,inst_13297);var state_13318__$1 = state_13318;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13318__$1,(25),inst_13304,inst_13247);
} else
{if((state_val_13319 === (4)))
{var inst_13247 = (state_13318[(7)]);var inst_13247__$1 = (state_13318[(2)]);var inst_13248 = (inst_13247__$1 == null);var state_13318__$1 = (function (){var statearr_13323 = state_13318;(statearr_13323[(7)] = inst_13247__$1);
return statearr_13323;
})();if(cljs.core.truth_(inst_13248))
{var statearr_13324_13370 = state_13318__$1;(statearr_13324_13370[(1)] = (5));
} else
{var statearr_13325_13371 = state_13318__$1;(statearr_13325_13371[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13319 === (15)))
{var inst_13289 = (state_13318[(2)]);var state_13318__$1 = state_13318;var statearr_13326_13372 = state_13318__$1;(statearr_13326_13372[(2)] = inst_13289);
(statearr_13326_13372[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13319 === (21)))
{var inst_13311 = (state_13318[(2)]);var state_13318__$1 = (function (){var statearr_13327 = state_13318;(statearr_13327[(9)] = inst_13311);
return statearr_13327;
})();var statearr_13328_13373 = state_13318__$1;(statearr_13328_13373[(2)] = null);
(statearr_13328_13373[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13319 === (13)))
{var inst_13271 = (state_13318[(10)]);var inst_13273 = cljs.core.chunked_seq_QMARK_.call(null,inst_13271);var state_13318__$1 = state_13318;if(inst_13273)
{var statearr_13329_13374 = state_13318__$1;(statearr_13329_13374[(1)] = (16));
} else
{var statearr_13330_13375 = state_13318__$1;(statearr_13330_13375[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13319 === (22)))
{var inst_13308 = (state_13318[(2)]);var state_13318__$1 = state_13318;var statearr_13331_13376 = state_13318__$1;(statearr_13331_13376[(2)] = inst_13308);
(statearr_13331_13376[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13319 === (6)))
{var inst_13247 = (state_13318[(7)]);var inst_13297 = (state_13318[(8)]);var inst_13295 = (state_13318[(11)]);var inst_13295__$1 = topic_fn.call(null,inst_13247);var inst_13296 = cljs.core.deref.call(null,mults);var inst_13297__$1 = cljs.core.get.call(null,inst_13296,inst_13295__$1);var state_13318__$1 = (function (){var statearr_13332 = state_13318;(statearr_13332[(8)] = inst_13297__$1);
(statearr_13332[(11)] = inst_13295__$1);
return statearr_13332;
})();if(cljs.core.truth_(inst_13297__$1))
{var statearr_13333_13377 = state_13318__$1;(statearr_13333_13377[(1)] = (19));
} else
{var statearr_13334_13378 = state_13318__$1;(statearr_13334_13378[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13319 === (25)))
{var inst_13306 = (state_13318[(2)]);var state_13318__$1 = state_13318;var statearr_13335_13379 = state_13318__$1;(statearr_13335_13379[(2)] = inst_13306);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13318__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13319 === (17)))
{var inst_13271 = (state_13318[(10)]);var inst_13280 = cljs.core.first.call(null,inst_13271);var inst_13281 = cljs.core.async.muxch_STAR_.call(null,inst_13280);var inst_13282 = cljs.core.async.close_BANG_.call(null,inst_13281);var inst_13283 = cljs.core.next.call(null,inst_13271);var inst_13257 = inst_13283;var inst_13258 = null;var inst_13259 = (0);var inst_13260 = (0);var state_13318__$1 = (function (){var statearr_13336 = state_13318;(statearr_13336[(12)] = inst_13259);
(statearr_13336[(13)] = inst_13282);
(statearr_13336[(14)] = inst_13257);
(statearr_13336[(15)] = inst_13260);
(statearr_13336[(16)] = inst_13258);
return statearr_13336;
})();var statearr_13337_13380 = state_13318__$1;(statearr_13337_13380[(2)] = null);
(statearr_13337_13380[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13319 === (3)))
{var inst_13316 = (state_13318[(2)]);var state_13318__$1 = state_13318;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13318__$1,inst_13316);
} else
{if((state_val_13319 === (12)))
{var inst_13291 = (state_13318[(2)]);var state_13318__$1 = state_13318;var statearr_13338_13381 = state_13318__$1;(statearr_13338_13381[(2)] = inst_13291);
(statearr_13338_13381[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13319 === (2)))
{var state_13318__$1 = state_13318;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13318__$1,(4),ch);
} else
{if((state_val_13319 === (23)))
{var inst_13295 = (state_13318[(11)]);var inst_13299 = (state_13318[(2)]);var inst_13300 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13295);var state_13318__$1 = (function (){var statearr_13339 = state_13318;(statearr_13339[(17)] = inst_13299);
return statearr_13339;
})();var statearr_13340_13382 = state_13318__$1;(statearr_13340_13382[(2)] = inst_13300);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13318__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13319 === (19)))
{var state_13318__$1 = state_13318;var statearr_13341_13383 = state_13318__$1;(statearr_13341_13383[(2)] = null);
(statearr_13341_13383[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13319 === (11)))
{var inst_13257 = (state_13318[(14)]);var inst_13271 = (state_13318[(10)]);var inst_13271__$1 = cljs.core.seq.call(null,inst_13257);var state_13318__$1 = (function (){var statearr_13342 = state_13318;(statearr_13342[(10)] = inst_13271__$1);
return statearr_13342;
})();if(inst_13271__$1)
{var statearr_13343_13384 = state_13318__$1;(statearr_13343_13384[(1)] = (13));
} else
{var statearr_13344_13385 = state_13318__$1;(statearr_13344_13385[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13319 === (9)))
{var inst_13293 = (state_13318[(2)]);var state_13318__$1 = state_13318;var statearr_13345_13386 = state_13318__$1;(statearr_13345_13386[(2)] = inst_13293);
(statearr_13345_13386[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13319 === (5)))
{var inst_13254 = cljs.core.deref.call(null,mults);var inst_13255 = cljs.core.vals.call(null,inst_13254);var inst_13256 = cljs.core.seq.call(null,inst_13255);var inst_13257 = inst_13256;var inst_13258 = null;var inst_13259 = (0);var inst_13260 = (0);var state_13318__$1 = (function (){var statearr_13346 = state_13318;(statearr_13346[(12)] = inst_13259);
(statearr_13346[(14)] = inst_13257);
(statearr_13346[(15)] = inst_13260);
(statearr_13346[(16)] = inst_13258);
return statearr_13346;
})();var statearr_13347_13387 = state_13318__$1;(statearr_13347_13387[(2)] = null);
(statearr_13347_13387[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13319 === (14)))
{var state_13318__$1 = state_13318;var statearr_13351_13388 = state_13318__$1;(statearr_13351_13388[(2)] = null);
(statearr_13351_13388[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13319 === (16)))
{var inst_13271 = (state_13318[(10)]);var inst_13275 = cljs.core.chunk_first.call(null,inst_13271);var inst_13276 = cljs.core.chunk_rest.call(null,inst_13271);var inst_13277 = cljs.core.count.call(null,inst_13275);var inst_13257 = inst_13276;var inst_13258 = inst_13275;var inst_13259 = inst_13277;var inst_13260 = (0);var state_13318__$1 = (function (){var statearr_13352 = state_13318;(statearr_13352[(12)] = inst_13259);
(statearr_13352[(14)] = inst_13257);
(statearr_13352[(15)] = inst_13260);
(statearr_13352[(16)] = inst_13258);
return statearr_13352;
})();var statearr_13353_13389 = state_13318__$1;(statearr_13353_13389[(2)] = null);
(statearr_13353_13389[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13319 === (10)))
{var inst_13259 = (state_13318[(12)]);var inst_13257 = (state_13318[(14)]);var inst_13260 = (state_13318[(15)]);var inst_13258 = (state_13318[(16)]);var inst_13265 = cljs.core._nth.call(null,inst_13258,inst_13260);var inst_13266 = cljs.core.async.muxch_STAR_.call(null,inst_13265);var inst_13267 = cljs.core.async.close_BANG_.call(null,inst_13266);var inst_13268 = (inst_13260 + (1));var tmp13348 = inst_13259;var tmp13349 = inst_13257;var tmp13350 = inst_13258;var inst_13257__$1 = tmp13349;var inst_13258__$1 = tmp13350;var inst_13259__$1 = tmp13348;var inst_13260__$1 = inst_13268;var state_13318__$1 = (function (){var statearr_13354 = state_13318;(statearr_13354[(12)] = inst_13259__$1);
(statearr_13354[(14)] = inst_13257__$1);
(statearr_13354[(18)] = inst_13267);
(statearr_13354[(15)] = inst_13260__$1);
(statearr_13354[(16)] = inst_13258__$1);
return statearr_13354;
})();var statearr_13355_13390 = state_13318__$1;(statearr_13355_13390[(2)] = null);
(statearr_13355_13390[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13319 === (18)))
{var inst_13286 = (state_13318[(2)]);var state_13318__$1 = state_13318;var statearr_13356_13391 = state_13318__$1;(statearr_13356_13391[(2)] = inst_13286);
(statearr_13356_13391[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13319 === (8)))
{var inst_13259 = (state_13318[(12)]);var inst_13260 = (state_13318[(15)]);var inst_13262 = (inst_13260 < inst_13259);var inst_13263 = inst_13262;var state_13318__$1 = state_13318;if(cljs.core.truth_(inst_13263))
{var statearr_13357_13392 = state_13318__$1;(statearr_13357_13392[(1)] = (10));
} else
{var statearr_13358_13393 = state_13318__$1;(statearr_13358_13393[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6367__auto___13366,mults,ensure_mult,p))
;return ((function (switch__6352__auto__,c__6367__auto___13366,mults,ensure_mult,p){
return (function() {
var state_machine__6353__auto__ = null;
var state_machine__6353__auto____0 = (function (){var statearr_13362 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13362[(0)] = state_machine__6353__auto__);
(statearr_13362[(1)] = (1));
return statearr_13362;
});
var state_machine__6353__auto____1 = (function (state_13318){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_13318);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e13363){if((e13363 instanceof Object))
{var ex__6356__auto__ = e13363;var statearr_13364_13394 = state_13318;(statearr_13364_13394[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13318);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13363;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13395 = state_13318;
state_13318 = G__13395;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_13318){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_13318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto___13366,mults,ensure_mult,p))
})();var state__6369__auto__ = (function (){var statearr_13365 = f__6368__auto__.call(null);(statearr_13365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto___13366);
return statearr_13365;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto___13366,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6367__auto___13532 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto___13532,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto___13532,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13502){var state_val_13503 = (state_13502[(1)]);if((state_val_13503 === (7)))
{var state_13502__$1 = state_13502;var statearr_13504_13533 = state_13502__$1;(statearr_13504_13533[(2)] = null);
(statearr_13504_13533[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13503 === (1)))
{var state_13502__$1 = state_13502;var statearr_13505_13534 = state_13502__$1;(statearr_13505_13534[(2)] = null);
(statearr_13505_13534[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13503 === (4)))
{var inst_13466 = (state_13502[(7)]);var inst_13468 = (inst_13466 < cnt);var state_13502__$1 = state_13502;if(cljs.core.truth_(inst_13468))
{var statearr_13506_13535 = state_13502__$1;(statearr_13506_13535[(1)] = (6));
} else
{var statearr_13507_13536 = state_13502__$1;(statearr_13507_13536[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13503 === (15)))
{var inst_13498 = (state_13502[(2)]);var state_13502__$1 = state_13502;var statearr_13508_13537 = state_13502__$1;(statearr_13508_13537[(2)] = inst_13498);
(statearr_13508_13537[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13503 === (13)))
{var inst_13491 = cljs.core.async.close_BANG_.call(null,out);var state_13502__$1 = state_13502;var statearr_13509_13538 = state_13502__$1;(statearr_13509_13538[(2)] = inst_13491);
(statearr_13509_13538[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13503 === (6)))
{var state_13502__$1 = state_13502;var statearr_13510_13539 = state_13502__$1;(statearr_13510_13539[(2)] = null);
(statearr_13510_13539[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13503 === (3)))
{var inst_13500 = (state_13502[(2)]);var state_13502__$1 = state_13502;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13502__$1,inst_13500);
} else
{if((state_val_13503 === (12)))
{var inst_13488 = (state_13502[(8)]);var inst_13488__$1 = (state_13502[(2)]);var inst_13489 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13488__$1);var state_13502__$1 = (function (){var statearr_13511 = state_13502;(statearr_13511[(8)] = inst_13488__$1);
return statearr_13511;
})();if(cljs.core.truth_(inst_13489))
{var statearr_13512_13540 = state_13502__$1;(statearr_13512_13540[(1)] = (13));
} else
{var statearr_13513_13541 = state_13502__$1;(statearr_13513_13541[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13503 === (2)))
{var inst_13465 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13466 = (0);var state_13502__$1 = (function (){var statearr_13514 = state_13502;(statearr_13514[(9)] = inst_13465);
(statearr_13514[(7)] = inst_13466);
return statearr_13514;
})();var statearr_13515_13542 = state_13502__$1;(statearr_13515_13542[(2)] = null);
(statearr_13515_13542[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13503 === (11)))
{var inst_13466 = (state_13502[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13502,(10),Object,null,(9));var inst_13475 = chs__$1.call(null,inst_13466);var inst_13476 = done.call(null,inst_13466);var inst_13477 = cljs.core.async.take_BANG_.call(null,inst_13475,inst_13476);var state_13502__$1 = state_13502;var statearr_13516_13543 = state_13502__$1;(statearr_13516_13543[(2)] = inst_13477);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13502__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13503 === (9)))
{var inst_13466 = (state_13502[(7)]);var inst_13479 = (state_13502[(2)]);var inst_13480 = (inst_13466 + (1));var inst_13466__$1 = inst_13480;var state_13502__$1 = (function (){var statearr_13517 = state_13502;(statearr_13517[(10)] = inst_13479);
(statearr_13517[(7)] = inst_13466__$1);
return statearr_13517;
})();var statearr_13518_13544 = state_13502__$1;(statearr_13518_13544[(2)] = null);
(statearr_13518_13544[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13503 === (5)))
{var inst_13486 = (state_13502[(2)]);var state_13502__$1 = (function (){var statearr_13519 = state_13502;(statearr_13519[(11)] = inst_13486);
return statearr_13519;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13502__$1,(12),dchan);
} else
{if((state_val_13503 === (14)))
{var inst_13488 = (state_13502[(8)]);var inst_13493 = cljs.core.apply.call(null,f,inst_13488);var state_13502__$1 = state_13502;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13502__$1,(16),out,inst_13493);
} else
{if((state_val_13503 === (16)))
{var inst_13495 = (state_13502[(2)]);var state_13502__$1 = (function (){var statearr_13520 = state_13502;(statearr_13520[(12)] = inst_13495);
return statearr_13520;
})();var statearr_13521_13545 = state_13502__$1;(statearr_13521_13545[(2)] = null);
(statearr_13521_13545[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13503 === (10)))
{var inst_13470 = (state_13502[(2)]);var inst_13471 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13502__$1 = (function (){var statearr_13522 = state_13502;(statearr_13522[(13)] = inst_13470);
return statearr_13522;
})();var statearr_13523_13546 = state_13502__$1;(statearr_13523_13546[(2)] = inst_13471);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13502__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13503 === (8)))
{var inst_13484 = (state_13502[(2)]);var state_13502__$1 = state_13502;var statearr_13524_13547 = state_13502__$1;(statearr_13524_13547[(2)] = inst_13484);
(statearr_13524_13547[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6367__auto___13532,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6352__auto__,c__6367__auto___13532,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6353__auto__ = null;
var state_machine__6353__auto____0 = (function (){var statearr_13528 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13528[(0)] = state_machine__6353__auto__);
(statearr_13528[(1)] = (1));
return statearr_13528;
});
var state_machine__6353__auto____1 = (function (state_13502){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_13502);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e13529){if((e13529 instanceof Object))
{var ex__6356__auto__ = e13529;var statearr_13530_13548 = state_13502;(statearr_13530_13548[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13502);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13529;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13549 = state_13502;
state_13502 = G__13549;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_13502){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_13502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto___13532,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6369__auto__ = (function (){var statearr_13531 = f__6368__auto__.call(null);(statearr_13531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto___13532);
return statearr_13531;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto___13532,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6367__auto___13657 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto___13657,out){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto___13657,out){
return (function (state_13633){var state_val_13634 = (state_13633[(1)]);if((state_val_13634 === (7)))
{var inst_13612 = (state_13633[(7)]);var inst_13613 = (state_13633[(8)]);var inst_13612__$1 = (state_13633[(2)]);var inst_13613__$1 = cljs.core.nth.call(null,inst_13612__$1,(0),null);var inst_13614 = cljs.core.nth.call(null,inst_13612__$1,(1),null);var inst_13615 = (inst_13613__$1 == null);var state_13633__$1 = (function (){var statearr_13635 = state_13633;(statearr_13635[(9)] = inst_13614);
(statearr_13635[(7)] = inst_13612__$1);
(statearr_13635[(8)] = inst_13613__$1);
return statearr_13635;
})();if(cljs.core.truth_(inst_13615))
{var statearr_13636_13658 = state_13633__$1;(statearr_13636_13658[(1)] = (8));
} else
{var statearr_13637_13659 = state_13633__$1;(statearr_13637_13659[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13634 === (1)))
{var inst_13604 = cljs.core.vec.call(null,chs);var inst_13605 = inst_13604;var state_13633__$1 = (function (){var statearr_13638 = state_13633;(statearr_13638[(10)] = inst_13605);
return statearr_13638;
})();var statearr_13639_13660 = state_13633__$1;(statearr_13639_13660[(2)] = null);
(statearr_13639_13660[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13634 === (4)))
{var inst_13605 = (state_13633[(10)]);var state_13633__$1 = state_13633;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13633__$1,(7),inst_13605);
} else
{if((state_val_13634 === (6)))
{var inst_13629 = (state_13633[(2)]);var state_13633__$1 = state_13633;var statearr_13640_13661 = state_13633__$1;(statearr_13640_13661[(2)] = inst_13629);
(statearr_13640_13661[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13634 === (3)))
{var inst_13631 = (state_13633[(2)]);var state_13633__$1 = state_13633;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13633__$1,inst_13631);
} else
{if((state_val_13634 === (2)))
{var inst_13605 = (state_13633[(10)]);var inst_13607 = cljs.core.count.call(null,inst_13605);var inst_13608 = (inst_13607 > (0));var state_13633__$1 = state_13633;if(cljs.core.truth_(inst_13608))
{var statearr_13642_13662 = state_13633__$1;(statearr_13642_13662[(1)] = (4));
} else
{var statearr_13643_13663 = state_13633__$1;(statearr_13643_13663[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13634 === (11)))
{var inst_13605 = (state_13633[(10)]);var inst_13622 = (state_13633[(2)]);var tmp13641 = inst_13605;var inst_13605__$1 = tmp13641;var state_13633__$1 = (function (){var statearr_13644 = state_13633;(statearr_13644[(10)] = inst_13605__$1);
(statearr_13644[(11)] = inst_13622);
return statearr_13644;
})();var statearr_13645_13664 = state_13633__$1;(statearr_13645_13664[(2)] = null);
(statearr_13645_13664[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13634 === (9)))
{var inst_13613 = (state_13633[(8)]);var state_13633__$1 = state_13633;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13633__$1,(11),out,inst_13613);
} else
{if((state_val_13634 === (5)))
{var inst_13627 = cljs.core.async.close_BANG_.call(null,out);var state_13633__$1 = state_13633;var statearr_13646_13665 = state_13633__$1;(statearr_13646_13665[(2)] = inst_13627);
(statearr_13646_13665[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13634 === (10)))
{var inst_13625 = (state_13633[(2)]);var state_13633__$1 = state_13633;var statearr_13647_13666 = state_13633__$1;(statearr_13647_13666[(2)] = inst_13625);
(statearr_13647_13666[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13634 === (8)))
{var inst_13605 = (state_13633[(10)]);var inst_13614 = (state_13633[(9)]);var inst_13612 = (state_13633[(7)]);var inst_13613 = (state_13633[(8)]);var inst_13617 = (function (){var c = inst_13614;var v = inst_13613;var vec__13610 = inst_13612;var cs = inst_13605;return ((function (c,v,vec__13610,cs,inst_13605,inst_13614,inst_13612,inst_13613,state_val_13634,c__6367__auto___13657,out){
return (function (p1__13550_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13550_SHARP_);
});
;})(c,v,vec__13610,cs,inst_13605,inst_13614,inst_13612,inst_13613,state_val_13634,c__6367__auto___13657,out))
})();var inst_13618 = cljs.core.filterv.call(null,inst_13617,inst_13605);var inst_13605__$1 = inst_13618;var state_13633__$1 = (function (){var statearr_13648 = state_13633;(statearr_13648[(10)] = inst_13605__$1);
return statearr_13648;
})();var statearr_13649_13667 = state_13633__$1;(statearr_13649_13667[(2)] = null);
(statearr_13649_13667[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6367__auto___13657,out))
;return ((function (switch__6352__auto__,c__6367__auto___13657,out){
return (function() {
var state_machine__6353__auto__ = null;
var state_machine__6353__auto____0 = (function (){var statearr_13653 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13653[(0)] = state_machine__6353__auto__);
(statearr_13653[(1)] = (1));
return statearr_13653;
});
var state_machine__6353__auto____1 = (function (state_13633){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_13633);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e13654){if((e13654 instanceof Object))
{var ex__6356__auto__ = e13654;var statearr_13655_13668 = state_13633;(statearr_13655_13668[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13633);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13654;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13669 = state_13633;
state_13633 = G__13669;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_13633){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_13633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto___13657,out))
})();var state__6369__auto__ = (function (){var statearr_13656 = f__6368__auto__.call(null);(statearr_13656[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto___13657);
return statearr_13656;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto___13657,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6367__auto___13762 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto___13762,out){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto___13762,out){
return (function (state_13739){var state_val_13740 = (state_13739[(1)]);if((state_val_13740 === (7)))
{var inst_13721 = (state_13739[(7)]);var inst_13721__$1 = (state_13739[(2)]);var inst_13722 = (inst_13721__$1 == null);var inst_13723 = cljs.core.not.call(null,inst_13722);var state_13739__$1 = (function (){var statearr_13741 = state_13739;(statearr_13741[(7)] = inst_13721__$1);
return statearr_13741;
})();if(inst_13723)
{var statearr_13742_13763 = state_13739__$1;(statearr_13742_13763[(1)] = (8));
} else
{var statearr_13743_13764 = state_13739__$1;(statearr_13743_13764[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13740 === (1)))
{var inst_13716 = (0);var state_13739__$1 = (function (){var statearr_13744 = state_13739;(statearr_13744[(8)] = inst_13716);
return statearr_13744;
})();var statearr_13745_13765 = state_13739__$1;(statearr_13745_13765[(2)] = null);
(statearr_13745_13765[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13740 === (4)))
{var state_13739__$1 = state_13739;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13739__$1,(7),ch);
} else
{if((state_val_13740 === (6)))
{var inst_13734 = (state_13739[(2)]);var state_13739__$1 = state_13739;var statearr_13746_13766 = state_13739__$1;(statearr_13746_13766[(2)] = inst_13734);
(statearr_13746_13766[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13740 === (3)))
{var inst_13736 = (state_13739[(2)]);var inst_13737 = cljs.core.async.close_BANG_.call(null,out);var state_13739__$1 = (function (){var statearr_13747 = state_13739;(statearr_13747[(9)] = inst_13736);
return statearr_13747;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13739__$1,inst_13737);
} else
{if((state_val_13740 === (2)))
{var inst_13716 = (state_13739[(8)]);var inst_13718 = (inst_13716 < n);var state_13739__$1 = state_13739;if(cljs.core.truth_(inst_13718))
{var statearr_13748_13767 = state_13739__$1;(statearr_13748_13767[(1)] = (4));
} else
{var statearr_13749_13768 = state_13739__$1;(statearr_13749_13768[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13740 === (11)))
{var inst_13716 = (state_13739[(8)]);var inst_13726 = (state_13739[(2)]);var inst_13727 = (inst_13716 + (1));var inst_13716__$1 = inst_13727;var state_13739__$1 = (function (){var statearr_13750 = state_13739;(statearr_13750[(8)] = inst_13716__$1);
(statearr_13750[(10)] = inst_13726);
return statearr_13750;
})();var statearr_13751_13769 = state_13739__$1;(statearr_13751_13769[(2)] = null);
(statearr_13751_13769[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13740 === (9)))
{var state_13739__$1 = state_13739;var statearr_13752_13770 = state_13739__$1;(statearr_13752_13770[(2)] = null);
(statearr_13752_13770[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13740 === (5)))
{var state_13739__$1 = state_13739;var statearr_13753_13771 = state_13739__$1;(statearr_13753_13771[(2)] = null);
(statearr_13753_13771[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13740 === (10)))
{var inst_13731 = (state_13739[(2)]);var state_13739__$1 = state_13739;var statearr_13754_13772 = state_13739__$1;(statearr_13754_13772[(2)] = inst_13731);
(statearr_13754_13772[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13740 === (8)))
{var inst_13721 = (state_13739[(7)]);var state_13739__$1 = state_13739;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13739__$1,(11),out,inst_13721);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6367__auto___13762,out))
;return ((function (switch__6352__auto__,c__6367__auto___13762,out){
return (function() {
var state_machine__6353__auto__ = null;
var state_machine__6353__auto____0 = (function (){var statearr_13758 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13758[(0)] = state_machine__6353__auto__);
(statearr_13758[(1)] = (1));
return statearr_13758;
});
var state_machine__6353__auto____1 = (function (state_13739){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_13739);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e13759){if((e13759 instanceof Object))
{var ex__6356__auto__ = e13759;var statearr_13760_13773 = state_13739;(statearr_13760_13773[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13739);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13759;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13774 = state_13739;
state_13739 = G__13774;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_13739){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_13739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto___13762,out))
})();var state__6369__auto__ = (function (){var statearr_13761 = f__6368__auto__.call(null);(statearr_13761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto___13762);
return statearr_13761;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto___13762,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6367__auto___13871 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto___13871,out){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto___13871,out){
return (function (state_13846){var state_val_13847 = (state_13846[(1)]);if((state_val_13847 === (7)))
{var inst_13841 = (state_13846[(2)]);var state_13846__$1 = state_13846;var statearr_13848_13872 = state_13846__$1;(statearr_13848_13872[(2)] = inst_13841);
(statearr_13848_13872[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13847 === (1)))
{var inst_13823 = null;var state_13846__$1 = (function (){var statearr_13849 = state_13846;(statearr_13849[(7)] = inst_13823);
return statearr_13849;
})();var statearr_13850_13873 = state_13846__$1;(statearr_13850_13873[(2)] = null);
(statearr_13850_13873[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13847 === (4)))
{var inst_13826 = (state_13846[(8)]);var inst_13826__$1 = (state_13846[(2)]);var inst_13827 = (inst_13826__$1 == null);var inst_13828 = cljs.core.not.call(null,inst_13827);var state_13846__$1 = (function (){var statearr_13851 = state_13846;(statearr_13851[(8)] = inst_13826__$1);
return statearr_13851;
})();if(inst_13828)
{var statearr_13852_13874 = state_13846__$1;(statearr_13852_13874[(1)] = (5));
} else
{var statearr_13853_13875 = state_13846__$1;(statearr_13853_13875[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13847 === (6)))
{var state_13846__$1 = state_13846;var statearr_13854_13876 = state_13846__$1;(statearr_13854_13876[(2)] = null);
(statearr_13854_13876[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13847 === (3)))
{var inst_13843 = (state_13846[(2)]);var inst_13844 = cljs.core.async.close_BANG_.call(null,out);var state_13846__$1 = (function (){var statearr_13855 = state_13846;(statearr_13855[(9)] = inst_13843);
return statearr_13855;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13846__$1,inst_13844);
} else
{if((state_val_13847 === (2)))
{var state_13846__$1 = state_13846;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13846__$1,(4),ch);
} else
{if((state_val_13847 === (11)))
{var inst_13826 = (state_13846[(8)]);var inst_13835 = (state_13846[(2)]);var inst_13823 = inst_13826;var state_13846__$1 = (function (){var statearr_13856 = state_13846;(statearr_13856[(7)] = inst_13823);
(statearr_13856[(10)] = inst_13835);
return statearr_13856;
})();var statearr_13857_13877 = state_13846__$1;(statearr_13857_13877[(2)] = null);
(statearr_13857_13877[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13847 === (9)))
{var inst_13826 = (state_13846[(8)]);var state_13846__$1 = state_13846;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13846__$1,(11),out,inst_13826);
} else
{if((state_val_13847 === (5)))
{var inst_13823 = (state_13846[(7)]);var inst_13826 = (state_13846[(8)]);var inst_13830 = cljs.core._EQ_.call(null,inst_13826,inst_13823);var state_13846__$1 = state_13846;if(inst_13830)
{var statearr_13859_13878 = state_13846__$1;(statearr_13859_13878[(1)] = (8));
} else
{var statearr_13860_13879 = state_13846__$1;(statearr_13860_13879[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13847 === (10)))
{var inst_13838 = (state_13846[(2)]);var state_13846__$1 = state_13846;var statearr_13861_13880 = state_13846__$1;(statearr_13861_13880[(2)] = inst_13838);
(statearr_13861_13880[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13847 === (8)))
{var inst_13823 = (state_13846[(7)]);var tmp13858 = inst_13823;var inst_13823__$1 = tmp13858;var state_13846__$1 = (function (){var statearr_13862 = state_13846;(statearr_13862[(7)] = inst_13823__$1);
return statearr_13862;
})();var statearr_13863_13881 = state_13846__$1;(statearr_13863_13881[(2)] = null);
(statearr_13863_13881[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6367__auto___13871,out))
;return ((function (switch__6352__auto__,c__6367__auto___13871,out){
return (function() {
var state_machine__6353__auto__ = null;
var state_machine__6353__auto____0 = (function (){var statearr_13867 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13867[(0)] = state_machine__6353__auto__);
(statearr_13867[(1)] = (1));
return statearr_13867;
});
var state_machine__6353__auto____1 = (function (state_13846){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_13846);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e13868){if((e13868 instanceof Object))
{var ex__6356__auto__ = e13868;var statearr_13869_13882 = state_13846;(statearr_13869_13882[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13846);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13868;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13883 = state_13846;
state_13846 = G__13883;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_13846){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_13846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto___13871,out))
})();var state__6369__auto__ = (function (){var statearr_13870 = f__6368__auto__.call(null);(statearr_13870[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto___13871);
return statearr_13870;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto___13871,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6367__auto___14018 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto___14018,out){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto___14018,out){
return (function (state_13988){var state_val_13989 = (state_13988[(1)]);if((state_val_13989 === (7)))
{var inst_13984 = (state_13988[(2)]);var state_13988__$1 = state_13988;var statearr_13990_14019 = state_13988__$1;(statearr_13990_14019[(2)] = inst_13984);
(statearr_13990_14019[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13989 === (1)))
{var inst_13951 = (new Array(n));var inst_13952 = inst_13951;var inst_13953 = (0);var state_13988__$1 = (function (){var statearr_13991 = state_13988;(statearr_13991[(7)] = inst_13953);
(statearr_13991[(8)] = inst_13952);
return statearr_13991;
})();var statearr_13992_14020 = state_13988__$1;(statearr_13992_14020[(2)] = null);
(statearr_13992_14020[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13989 === (4)))
{var inst_13956 = (state_13988[(9)]);var inst_13956__$1 = (state_13988[(2)]);var inst_13957 = (inst_13956__$1 == null);var inst_13958 = cljs.core.not.call(null,inst_13957);var state_13988__$1 = (function (){var statearr_13993 = state_13988;(statearr_13993[(9)] = inst_13956__$1);
return statearr_13993;
})();if(inst_13958)
{var statearr_13994_14021 = state_13988__$1;(statearr_13994_14021[(1)] = (5));
} else
{var statearr_13995_14022 = state_13988__$1;(statearr_13995_14022[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13989 === (15)))
{var inst_13978 = (state_13988[(2)]);var state_13988__$1 = state_13988;var statearr_13996_14023 = state_13988__$1;(statearr_13996_14023[(2)] = inst_13978);
(statearr_13996_14023[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13989 === (13)))
{var state_13988__$1 = state_13988;var statearr_13997_14024 = state_13988__$1;(statearr_13997_14024[(2)] = null);
(statearr_13997_14024[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13989 === (6)))
{var inst_13953 = (state_13988[(7)]);var inst_13974 = (inst_13953 > (0));var state_13988__$1 = state_13988;if(cljs.core.truth_(inst_13974))
{var statearr_13998_14025 = state_13988__$1;(statearr_13998_14025[(1)] = (12));
} else
{var statearr_13999_14026 = state_13988__$1;(statearr_13999_14026[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13989 === (3)))
{var inst_13986 = (state_13988[(2)]);var state_13988__$1 = state_13988;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13988__$1,inst_13986);
} else
{if((state_val_13989 === (12)))
{var inst_13952 = (state_13988[(8)]);var inst_13976 = cljs.core.vec.call(null,inst_13952);var state_13988__$1 = state_13988;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13988__$1,(15),out,inst_13976);
} else
{if((state_val_13989 === (2)))
{var state_13988__$1 = state_13988;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13988__$1,(4),ch);
} else
{if((state_val_13989 === (11)))
{var inst_13968 = (state_13988[(2)]);var inst_13969 = (new Array(n));var inst_13952 = inst_13969;var inst_13953 = (0);var state_13988__$1 = (function (){var statearr_14000 = state_13988;(statearr_14000[(7)] = inst_13953);
(statearr_14000[(8)] = inst_13952);
(statearr_14000[(10)] = inst_13968);
return statearr_14000;
})();var statearr_14001_14027 = state_13988__$1;(statearr_14001_14027[(2)] = null);
(statearr_14001_14027[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13989 === (9)))
{var inst_13952 = (state_13988[(8)]);var inst_13966 = cljs.core.vec.call(null,inst_13952);var state_13988__$1 = state_13988;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13988__$1,(11),out,inst_13966);
} else
{if((state_val_13989 === (5)))
{var inst_13953 = (state_13988[(7)]);var inst_13952 = (state_13988[(8)]);var inst_13956 = (state_13988[(9)]);var inst_13961 = (state_13988[(11)]);var inst_13960 = (inst_13952[inst_13953] = inst_13956);var inst_13961__$1 = (inst_13953 + (1));var inst_13962 = (inst_13961__$1 < n);var state_13988__$1 = (function (){var statearr_14002 = state_13988;(statearr_14002[(12)] = inst_13960);
(statearr_14002[(11)] = inst_13961__$1);
return statearr_14002;
})();if(cljs.core.truth_(inst_13962))
{var statearr_14003_14028 = state_13988__$1;(statearr_14003_14028[(1)] = (8));
} else
{var statearr_14004_14029 = state_13988__$1;(statearr_14004_14029[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13989 === (14)))
{var inst_13981 = (state_13988[(2)]);var inst_13982 = cljs.core.async.close_BANG_.call(null,out);var state_13988__$1 = (function (){var statearr_14006 = state_13988;(statearr_14006[(13)] = inst_13981);
return statearr_14006;
})();var statearr_14007_14030 = state_13988__$1;(statearr_14007_14030[(2)] = inst_13982);
(statearr_14007_14030[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13989 === (10)))
{var inst_13972 = (state_13988[(2)]);var state_13988__$1 = state_13988;var statearr_14008_14031 = state_13988__$1;(statearr_14008_14031[(2)] = inst_13972);
(statearr_14008_14031[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13989 === (8)))
{var inst_13952 = (state_13988[(8)]);var inst_13961 = (state_13988[(11)]);var tmp14005 = inst_13952;var inst_13952__$1 = tmp14005;var inst_13953 = inst_13961;var state_13988__$1 = (function (){var statearr_14009 = state_13988;(statearr_14009[(7)] = inst_13953);
(statearr_14009[(8)] = inst_13952__$1);
return statearr_14009;
})();var statearr_14010_14032 = state_13988__$1;(statearr_14010_14032[(2)] = null);
(statearr_14010_14032[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6367__auto___14018,out))
;return ((function (switch__6352__auto__,c__6367__auto___14018,out){
return (function() {
var state_machine__6353__auto__ = null;
var state_machine__6353__auto____0 = (function (){var statearr_14014 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14014[(0)] = state_machine__6353__auto__);
(statearr_14014[(1)] = (1));
return statearr_14014;
});
var state_machine__6353__auto____1 = (function (state_13988){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_13988);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e14015){if((e14015 instanceof Object))
{var ex__6356__auto__ = e14015;var statearr_14016_14033 = state_13988;(statearr_14016_14033[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13988);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14015;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14034 = state_13988;
state_13988 = G__14034;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_13988){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_13988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto___14018,out))
})();var state__6369__auto__ = (function (){var statearr_14017 = f__6368__auto__.call(null);(statearr_14017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto___14018);
return statearr_14017;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto___14018,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6367__auto___14177 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto___14177,out){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto___14177,out){
return (function (state_14147){var state_val_14148 = (state_14147[(1)]);if((state_val_14148 === (7)))
{var inst_14143 = (state_14147[(2)]);var state_14147__$1 = state_14147;var statearr_14149_14178 = state_14147__$1;(statearr_14149_14178[(2)] = inst_14143);
(statearr_14149_14178[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14148 === (1)))
{var inst_14106 = [];var inst_14107 = inst_14106;var inst_14108 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_14147__$1 = (function (){var statearr_14150 = state_14147;(statearr_14150[(7)] = inst_14107);
(statearr_14150[(8)] = inst_14108);
return statearr_14150;
})();var statearr_14151_14179 = state_14147__$1;(statearr_14151_14179[(2)] = null);
(statearr_14151_14179[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14148 === (4)))
{var inst_14111 = (state_14147[(9)]);var inst_14111__$1 = (state_14147[(2)]);var inst_14112 = (inst_14111__$1 == null);var inst_14113 = cljs.core.not.call(null,inst_14112);var state_14147__$1 = (function (){var statearr_14152 = state_14147;(statearr_14152[(9)] = inst_14111__$1);
return statearr_14152;
})();if(inst_14113)
{var statearr_14153_14180 = state_14147__$1;(statearr_14153_14180[(1)] = (5));
} else
{var statearr_14154_14181 = state_14147__$1;(statearr_14154_14181[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14148 === (15)))
{var inst_14137 = (state_14147[(2)]);var state_14147__$1 = state_14147;var statearr_14155_14182 = state_14147__$1;(statearr_14155_14182[(2)] = inst_14137);
(statearr_14155_14182[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14148 === (13)))
{var state_14147__$1 = state_14147;var statearr_14156_14183 = state_14147__$1;(statearr_14156_14183[(2)] = null);
(statearr_14156_14183[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14148 === (6)))
{var inst_14107 = (state_14147[(7)]);var inst_14132 = inst_14107.length;var inst_14133 = (inst_14132 > (0));var state_14147__$1 = state_14147;if(cljs.core.truth_(inst_14133))
{var statearr_14157_14184 = state_14147__$1;(statearr_14157_14184[(1)] = (12));
} else
{var statearr_14158_14185 = state_14147__$1;(statearr_14158_14185[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14148 === (3)))
{var inst_14145 = (state_14147[(2)]);var state_14147__$1 = state_14147;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14147__$1,inst_14145);
} else
{if((state_val_14148 === (12)))
{var inst_14107 = (state_14147[(7)]);var inst_14135 = cljs.core.vec.call(null,inst_14107);var state_14147__$1 = state_14147;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14147__$1,(15),out,inst_14135);
} else
{if((state_val_14148 === (2)))
{var state_14147__$1 = state_14147;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14147__$1,(4),ch);
} else
{if((state_val_14148 === (11)))
{var inst_14111 = (state_14147[(9)]);var inst_14115 = (state_14147[(10)]);var inst_14125 = (state_14147[(2)]);var inst_14126 = [];var inst_14127 = inst_14126.push(inst_14111);var inst_14107 = inst_14126;var inst_14108 = inst_14115;var state_14147__$1 = (function (){var statearr_14159 = state_14147;(statearr_14159[(7)] = inst_14107);
(statearr_14159[(11)] = inst_14127);
(statearr_14159[(12)] = inst_14125);
(statearr_14159[(8)] = inst_14108);
return statearr_14159;
})();var statearr_14160_14186 = state_14147__$1;(statearr_14160_14186[(2)] = null);
(statearr_14160_14186[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14148 === (9)))
{var inst_14107 = (state_14147[(7)]);var inst_14123 = cljs.core.vec.call(null,inst_14107);var state_14147__$1 = state_14147;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14147__$1,(11),out,inst_14123);
} else
{if((state_val_14148 === (5)))
{var inst_14111 = (state_14147[(9)]);var inst_14115 = (state_14147[(10)]);var inst_14108 = (state_14147[(8)]);var inst_14115__$1 = f.call(null,inst_14111);var inst_14116 = cljs.core._EQ_.call(null,inst_14115__$1,inst_14108);var inst_14117 = cljs.core.keyword_identical_QMARK_.call(null,inst_14108,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_14118 = (inst_14116) || (inst_14117);var state_14147__$1 = (function (){var statearr_14161 = state_14147;(statearr_14161[(10)] = inst_14115__$1);
return statearr_14161;
})();if(cljs.core.truth_(inst_14118))
{var statearr_14162_14187 = state_14147__$1;(statearr_14162_14187[(1)] = (8));
} else
{var statearr_14163_14188 = state_14147__$1;(statearr_14163_14188[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14148 === (14)))
{var inst_14140 = (state_14147[(2)]);var inst_14141 = cljs.core.async.close_BANG_.call(null,out);var state_14147__$1 = (function (){var statearr_14165 = state_14147;(statearr_14165[(13)] = inst_14140);
return statearr_14165;
})();var statearr_14166_14189 = state_14147__$1;(statearr_14166_14189[(2)] = inst_14141);
(statearr_14166_14189[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14148 === (10)))
{var inst_14130 = (state_14147[(2)]);var state_14147__$1 = state_14147;var statearr_14167_14190 = state_14147__$1;(statearr_14167_14190[(2)] = inst_14130);
(statearr_14167_14190[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14148 === (8)))
{var inst_14107 = (state_14147[(7)]);var inst_14111 = (state_14147[(9)]);var inst_14115 = (state_14147[(10)]);var inst_14120 = inst_14107.push(inst_14111);var tmp14164 = inst_14107;var inst_14107__$1 = tmp14164;var inst_14108 = inst_14115;var state_14147__$1 = (function (){var statearr_14168 = state_14147;(statearr_14168[(7)] = inst_14107__$1);
(statearr_14168[(14)] = inst_14120);
(statearr_14168[(8)] = inst_14108);
return statearr_14168;
})();var statearr_14169_14191 = state_14147__$1;(statearr_14169_14191[(2)] = null);
(statearr_14169_14191[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6367__auto___14177,out))
;return ((function (switch__6352__auto__,c__6367__auto___14177,out){
return (function() {
var state_machine__6353__auto__ = null;
var state_machine__6353__auto____0 = (function (){var statearr_14173 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14173[(0)] = state_machine__6353__auto__);
(statearr_14173[(1)] = (1));
return statearr_14173;
});
var state_machine__6353__auto____1 = (function (state_14147){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_14147);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e14174){if((e14174 instanceof Object))
{var ex__6356__auto__ = e14174;var statearr_14175_14192 = state_14147;(statearr_14175_14192[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14147);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14174;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14193 = state_14147;
state_14147 = G__14193;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_14147){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_14147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto___14177,out))
})();var state__6369__auto__ = (function (){var statearr_14176 = f__6368__auto__.call(null);(statearr_14176[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto___14177);
return statearr_14176;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto___14177,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map