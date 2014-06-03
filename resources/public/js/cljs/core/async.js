// Compiled by ClojureScript 0.0-2173
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11481 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11481 = (function (f,fn_handler,meta11482){
this.f = f;
this.fn_handler = fn_handler;
this.meta11482 = meta11482;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11481.cljs$lang$type = true;
cljs.core.async.t11481.cljs$lang$ctorStr = "cljs.core.async/t11481";
cljs.core.async.t11481.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11481");
});
cljs.core.async.t11481.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11481.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11481.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11481.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11483){var self__ = this;
var _11483__$1 = this;return self__.meta11482;
});
cljs.core.async.t11481.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11483,meta11482__$1){var self__ = this;
var _11483__$1 = this;return (new cljs.core.async.t11481(self__.f,self__.fn_handler,meta11482__$1));
});
cljs.core.async.__GT_t11481 = (function __GT_t11481(f__$1,fn_handler__$1,meta11482){return (new cljs.core.async.t11481(f__$1,fn_handler__$1,meta11482));
});
}
return (new cljs.core.async.t11481(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11485 = buff;if(G__11485)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__11485.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11485.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11485);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11485);
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
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
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
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
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
{var val_11486 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11486);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_11486);
}));
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
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3431__auto__ = ret;if(cljs.core.truth_(and__3431__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3431__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4291__auto___11487 = n;var x_11488 = 0;while(true){
if((x_11488 < n__4291__auto___11487))
{(a[x_11488] = 0);
{
var G__11489 = (x_11488 + 1);
x_11488 = G__11489;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__11490 = (i + 1);
i = G__11490;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11494 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11494 = (function (flag,alt_flag,meta11495){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11495 = meta11495;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11494.cljs$lang$type = true;
cljs.core.async.t11494.cljs$lang$ctorStr = "cljs.core.async/t11494";
cljs.core.async.t11494.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11494");
});
cljs.core.async.t11494.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11494.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t11494.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t11494.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11496){var self__ = this;
var _11496__$1 = this;return self__.meta11495;
});
cljs.core.async.t11494.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11496,meta11495__$1){var self__ = this;
var _11496__$1 = this;return (new cljs.core.async.t11494(self__.flag,self__.alt_flag,meta11495__$1));
});
cljs.core.async.__GT_t11494 = (function __GT_t11494(flag__$1,alt_flag__$1,meta11495){return (new cljs.core.async.t11494(flag__$1,alt_flag__$1,meta11495));
});
}
return (new cljs.core.async.t11494(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11500 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11500 = (function (cb,flag,alt_handler,meta11501){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11501 = meta11501;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11500.cljs$lang$type = true;
cljs.core.async.t11500.cljs$lang$ctorStr = "cljs.core.async/t11500";
cljs.core.async.t11500.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11500");
});
cljs.core.async.t11500.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11500.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11500.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11500.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11502){var self__ = this;
var _11502__$1 = this;return self__.meta11501;
});
cljs.core.async.t11500.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11502,meta11501__$1){var self__ = this;
var _11502__$1 = this;return (new cljs.core.async.t11500(self__.cb,self__.flag,self__.alt_handler,meta11501__$1));
});
cljs.core.async.__GT_t11500 = (function __GT_t11500(cb__$1,flag__$1,alt_handler__$1,meta11501){return (new cljs.core.async.t11500(cb__$1,flag__$1,alt_handler__$1,meta11501));
});
}
return (new cljs.core.async.t11500(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11503_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11503_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3443__auto__ = wport;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__11504 = (i + 1);
i = G__11504;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3443__auto__ = ret;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3431__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3431__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3431__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
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
var alts_BANG___delegate = function (ports,p__11505){var map__11507 = p__11505;var map__11507__$1 = ((cljs.core.seq_QMARK_.call(null,map__11507))?cljs.core.apply.call(null,cljs.core.hash_map,map__11507):map__11507);var opts = map__11507__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__11505 = null;if (arguments.length > 1) {
  p__11505 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11505);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11508){
var ports = cljs.core.first(arglist__11508);
var p__11505 = cljs.core.rest(arglist__11508);
return alts_BANG___delegate(ports,p__11505);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11516 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11516 = (function (ch,f,map_LT_,meta11517){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11517 = meta11517;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11516.cljs$lang$type = true;
cljs.core.async.t11516.cljs$lang$ctorStr = "cljs.core.async/t11516";
cljs.core.async.t11516.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11516");
});
cljs.core.async.t11516.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11516.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t11516.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11516.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11519 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11519 = (function (fn1,_,meta11517,ch,f,map_LT_,meta11520){
this.fn1 = fn1;
this._ = _;
this.meta11517 = meta11517;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11520 = meta11520;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11519.cljs$lang$type = true;
cljs.core.async.t11519.cljs$lang$ctorStr = "cljs.core.async/t11519";
cljs.core.async.t11519.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11519");
});
cljs.core.async.t11519.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11519.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t11519.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t11519.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__11509_SHARP_){return f1.call(null,(((p1__11509_SHARP_ == null))?null:self__.f.call(null,p1__11509_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t11519.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11521){var self__ = this;
var _11521__$1 = this;return self__.meta11520;
});
cljs.core.async.t11519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11521,meta11520__$1){var self__ = this;
var _11521__$1 = this;return (new cljs.core.async.t11519(self__.fn1,self__._,self__.meta11517,self__.ch,self__.f,self__.map_LT_,meta11520__$1));
});
cljs.core.async.__GT_t11519 = (function __GT_t11519(fn1__$1,___$2,meta11517__$1,ch__$2,f__$2,map_LT___$2,meta11520){return (new cljs.core.async.t11519(fn1__$1,___$2,meta11517__$1,ch__$2,f__$2,map_LT___$2,meta11520));
});
}
return (new cljs.core.async.t11519(fn1,___$1,self__.meta11517,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3431__auto__ = ret;if(cljs.core.truth_(and__3431__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3431__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t11516.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11516.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11516.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11518){var self__ = this;
var _11518__$1 = this;return self__.meta11517;
});
cljs.core.async.t11516.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11518,meta11517__$1){var self__ = this;
var _11518__$1 = this;return (new cljs.core.async.t11516(self__.ch,self__.f,self__.map_LT_,meta11517__$1));
});
cljs.core.async.__GT_t11516 = (function __GT_t11516(ch__$1,f__$1,map_LT___$1,meta11517){return (new cljs.core.async.t11516(ch__$1,f__$1,map_LT___$1,meta11517));
});
}
return (new cljs.core.async.t11516(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11525 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11525 = (function (ch,f,map_GT_,meta11526){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11526 = meta11526;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11525.cljs$lang$type = true;
cljs.core.async.t11525.cljs$lang$ctorStr = "cljs.core.async/t11525";
cljs.core.async.t11525.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11525");
});
cljs.core.async.t11525.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11525.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t11525.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11525.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11525.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11525.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11525.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11527){var self__ = this;
var _11527__$1 = this;return self__.meta11526;
});
cljs.core.async.t11525.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11527,meta11526__$1){var self__ = this;
var _11527__$1 = this;return (new cljs.core.async.t11525(self__.ch,self__.f,self__.map_GT_,meta11526__$1));
});
cljs.core.async.__GT_t11525 = (function __GT_t11525(ch__$1,f__$1,map_GT___$1,meta11526){return (new cljs.core.async.t11525(ch__$1,f__$1,map_GT___$1,meta11526));
});
}
return (new cljs.core.async.t11525(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11531 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11531 = (function (ch,p,filter_GT_,meta11532){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11532 = meta11532;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11531.cljs$lang$type = true;
cljs.core.async.t11531.cljs$lang$ctorStr = "cljs.core.async/t11531";
cljs.core.async.t11531.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11531");
});
cljs.core.async.t11531.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11531.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t11531.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11531.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11531.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11531.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11531.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11533){var self__ = this;
var _11533__$1 = this;return self__.meta11532;
});
cljs.core.async.t11531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11533,meta11532__$1){var self__ = this;
var _11533__$1 = this;return (new cljs.core.async.t11531(self__.ch,self__.p,self__.filter_GT_,meta11532__$1));
});
cljs.core.async.__GT_t11531 = (function __GT_t11531(ch__$1,p__$1,filter_GT___$1,meta11532){return (new cljs.core.async.t11531(ch__$1,p__$1,filter_GT___$1,meta11532));
});
}
return (new cljs.core.async.t11531(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6746__auto___11616 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6747__auto__ = (function (){var switch__6731__auto__ = (function (state_11595){var state_val_11596 = (state_11595[1]);if((state_val_11596 === 1))
{var state_11595__$1 = state_11595;var statearr_11597_11617 = state_11595__$1;(statearr_11597_11617[2] = null);
(statearr_11597_11617[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 2))
{var state_11595__$1 = state_11595;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11595__$1,4,ch);
} else
{if((state_val_11596 === 3))
{var inst_11593 = (state_11595[2]);var state_11595__$1 = state_11595;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11595__$1,inst_11593);
} else
{if((state_val_11596 === 4))
{var inst_11577 = (state_11595[7]);var inst_11577__$1 = (state_11595[2]);var inst_11578 = (inst_11577__$1 == null);var state_11595__$1 = (function (){var statearr_11598 = state_11595;(statearr_11598[7] = inst_11577__$1);
return statearr_11598;
})();if(cljs.core.truth_(inst_11578))
{var statearr_11599_11618 = state_11595__$1;(statearr_11599_11618[1] = 5);
} else
{var statearr_11600_11619 = state_11595__$1;(statearr_11600_11619[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 5))
{var inst_11580 = cljs.core.async.close_BANG_.call(null,out);var state_11595__$1 = state_11595;var statearr_11601_11620 = state_11595__$1;(statearr_11601_11620[2] = inst_11580);
(statearr_11601_11620[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 6))
{var inst_11577 = (state_11595[7]);var inst_11582 = p.call(null,inst_11577);var state_11595__$1 = state_11595;if(cljs.core.truth_(inst_11582))
{var statearr_11602_11621 = state_11595__$1;(statearr_11602_11621[1] = 8);
} else
{var statearr_11603_11622 = state_11595__$1;(statearr_11603_11622[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 7))
{var inst_11591 = (state_11595[2]);var state_11595__$1 = state_11595;var statearr_11604_11623 = state_11595__$1;(statearr_11604_11623[2] = inst_11591);
(statearr_11604_11623[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 8))
{var inst_11577 = (state_11595[7]);var state_11595__$1 = state_11595;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11595__$1,11,out,inst_11577);
} else
{if((state_val_11596 === 9))
{var state_11595__$1 = state_11595;var statearr_11605_11624 = state_11595__$1;(statearr_11605_11624[2] = null);
(statearr_11605_11624[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 10))
{var inst_11588 = (state_11595[2]);var state_11595__$1 = (function (){var statearr_11606 = state_11595;(statearr_11606[8] = inst_11588);
return statearr_11606;
})();var statearr_11607_11625 = state_11595__$1;(statearr_11607_11625[2] = null);
(statearr_11607_11625[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11596 === 11))
{var inst_11585 = (state_11595[2]);var state_11595__$1 = state_11595;var statearr_11608_11626 = state_11595__$1;(statearr_11608_11626[2] = inst_11585);
(statearr_11608_11626[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__6731__auto__){
return (function() {
var state_machine__6732__auto__ = null;
var state_machine__6732__auto____0 = (function (){var statearr_11612 = [null,null,null,null,null,null,null,null,null];(statearr_11612[0] = state_machine__6732__auto__);
(statearr_11612[1] = 1);
return statearr_11612;
});
var state_machine__6732__auto____1 = (function (state_11595){while(true){
var ret_value__6733__auto__ = (function (){try{while(true){
var result__6734__auto__ = switch__6731__auto__.call(null,state_11595);if(cljs.core.keyword_identical_QMARK_.call(null,result__6734__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6734__auto__;
}
break;
}
}catch (e11613){if((e11613 instanceof Object))
{var ex__6735__auto__ = e11613;var statearr_11614_11627 = state_11595;(statearr_11614_11627[5] = ex__6735__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11595);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11613;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6733__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11628 = state_11595;
state_11595 = G__11628;
continue;
}
} else
{return ret_value__6733__auto__;
}
break;
}
});
state_machine__6732__auto__ = function(state_11595){
switch(arguments.length){
case 0:
return state_machine__6732__auto____0.call(this);
case 1:
return state_machine__6732__auto____1.call(this,state_11595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6732__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6732__auto____0;
state_machine__6732__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6732__auto____1;
return state_machine__6732__auto__;
})()
;})(switch__6731__auto__))
})();var state__6748__auto__ = (function (){var statearr_11615 = f__6747__auto__.call(null);(statearr_11615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6746__auto___11616);
return statearr_11615;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6748__auto__);
}));
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6746__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6747__auto__ = (function (){var switch__6731__auto__ = (function (state_11780){var state_val_11781 = (state_11780[1]);if((state_val_11781 === 1))
{var state_11780__$1 = state_11780;var statearr_11782_11819 = state_11780__$1;(statearr_11782_11819[2] = null);
(statearr_11782_11819[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11781 === 2))
{var state_11780__$1 = state_11780;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11780__$1,4,in$);
} else
{if((state_val_11781 === 3))
{var inst_11778 = (state_11780[2]);var state_11780__$1 = state_11780;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11780__$1,inst_11778);
} else
{if((state_val_11781 === 4))
{var inst_11726 = (state_11780[7]);var inst_11726__$1 = (state_11780[2]);var inst_11727 = (inst_11726__$1 == null);var state_11780__$1 = (function (){var statearr_11783 = state_11780;(statearr_11783[7] = inst_11726__$1);
return statearr_11783;
})();if(cljs.core.truth_(inst_11727))
{var statearr_11784_11820 = state_11780__$1;(statearr_11784_11820[1] = 5);
} else
{var statearr_11785_11821 = state_11780__$1;(statearr_11785_11821[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11781 === 5))
{var inst_11729 = cljs.core.async.close_BANG_.call(null,out);var state_11780__$1 = state_11780;var statearr_11786_11822 = state_11780__$1;(statearr_11786_11822[2] = inst_11729);
(statearr_11786_11822[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11781 === 6))
{var inst_11726 = (state_11780[7]);var inst_11731 = f.call(null,inst_11726);var inst_11736 = cljs.core.seq.call(null,inst_11731);var inst_11737 = inst_11736;var inst_11738 = null;var inst_11739 = 0;var inst_11740 = 0;var state_11780__$1 = (function (){var statearr_11787 = state_11780;(statearr_11787[8] = inst_11740);
(statearr_11787[9] = inst_11738);
(statearr_11787[10] = inst_11737);
(statearr_11787[11] = inst_11739);
return statearr_11787;
})();var statearr_11788_11823 = state_11780__$1;(statearr_11788_11823[2] = null);
(statearr_11788_11823[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11781 === 7))
{var inst_11776 = (state_11780[2]);var state_11780__$1 = state_11780;var statearr_11789_11824 = state_11780__$1;(statearr_11789_11824[2] = inst_11776);
(statearr_11789_11824[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11781 === 8))
{var inst_11740 = (state_11780[8]);var inst_11739 = (state_11780[11]);var inst_11742 = (inst_11740 < inst_11739);var inst_11743 = inst_11742;var state_11780__$1 = state_11780;if(cljs.core.truth_(inst_11743))
{var statearr_11790_11825 = state_11780__$1;(statearr_11790_11825[1] = 10);
} else
{var statearr_11791_11826 = state_11780__$1;(statearr_11791_11826[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11781 === 9))
{var inst_11773 = (state_11780[2]);var state_11780__$1 = (function (){var statearr_11792 = state_11780;(statearr_11792[12] = inst_11773);
return statearr_11792;
})();var statearr_11793_11827 = state_11780__$1;(statearr_11793_11827[2] = null);
(statearr_11793_11827[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11781 === 10))
{var inst_11740 = (state_11780[8]);var inst_11738 = (state_11780[9]);var inst_11745 = cljs.core._nth.call(null,inst_11738,inst_11740);var state_11780__$1 = state_11780;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11780__$1,13,out,inst_11745);
} else
{if((state_val_11781 === 11))
{var inst_11737 = (state_11780[10]);var inst_11751 = (state_11780[13]);var inst_11751__$1 = cljs.core.seq.call(null,inst_11737);var state_11780__$1 = (function (){var statearr_11797 = state_11780;(statearr_11797[13] = inst_11751__$1);
return statearr_11797;
})();if(inst_11751__$1)
{var statearr_11798_11828 = state_11780__$1;(statearr_11798_11828[1] = 14);
} else
{var statearr_11799_11829 = state_11780__$1;(statearr_11799_11829[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11781 === 12))
{var inst_11771 = (state_11780[2]);var state_11780__$1 = state_11780;var statearr_11800_11830 = state_11780__$1;(statearr_11800_11830[2] = inst_11771);
(statearr_11800_11830[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11781 === 13))
{var inst_11740 = (state_11780[8]);var inst_11738 = (state_11780[9]);var inst_11737 = (state_11780[10]);var inst_11739 = (state_11780[11]);var inst_11747 = (state_11780[2]);var inst_11748 = (inst_11740 + 1);var tmp11794 = inst_11738;var tmp11795 = inst_11737;var tmp11796 = inst_11739;var inst_11737__$1 = tmp11795;var inst_11738__$1 = tmp11794;var inst_11739__$1 = tmp11796;var inst_11740__$1 = inst_11748;var state_11780__$1 = (function (){var statearr_11801 = state_11780;(statearr_11801[14] = inst_11747);
(statearr_11801[8] = inst_11740__$1);
(statearr_11801[9] = inst_11738__$1);
(statearr_11801[10] = inst_11737__$1);
(statearr_11801[11] = inst_11739__$1);
return statearr_11801;
})();var statearr_11802_11831 = state_11780__$1;(statearr_11802_11831[2] = null);
(statearr_11802_11831[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11781 === 14))
{var inst_11751 = (state_11780[13]);var inst_11753 = cljs.core.chunked_seq_QMARK_.call(null,inst_11751);var state_11780__$1 = state_11780;if(inst_11753)
{var statearr_11803_11832 = state_11780__$1;(statearr_11803_11832[1] = 17);
} else
{var statearr_11804_11833 = state_11780__$1;(statearr_11804_11833[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11781 === 15))
{var state_11780__$1 = state_11780;var statearr_11805_11834 = state_11780__$1;(statearr_11805_11834[2] = null);
(statearr_11805_11834[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11781 === 16))
{var inst_11769 = (state_11780[2]);var state_11780__$1 = state_11780;var statearr_11806_11835 = state_11780__$1;(statearr_11806_11835[2] = inst_11769);
(statearr_11806_11835[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11781 === 17))
{var inst_11751 = (state_11780[13]);var inst_11755 = cljs.core.chunk_first.call(null,inst_11751);var inst_11756 = cljs.core.chunk_rest.call(null,inst_11751);var inst_11757 = cljs.core.count.call(null,inst_11755);var inst_11737 = inst_11756;var inst_11738 = inst_11755;var inst_11739 = inst_11757;var inst_11740 = 0;var state_11780__$1 = (function (){var statearr_11807 = state_11780;(statearr_11807[8] = inst_11740);
(statearr_11807[9] = inst_11738);
(statearr_11807[10] = inst_11737);
(statearr_11807[11] = inst_11739);
return statearr_11807;
})();var statearr_11808_11836 = state_11780__$1;(statearr_11808_11836[2] = null);
(statearr_11808_11836[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11781 === 18))
{var inst_11751 = (state_11780[13]);var inst_11760 = cljs.core.first.call(null,inst_11751);var state_11780__$1 = state_11780;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11780__$1,20,out,inst_11760);
} else
{if((state_val_11781 === 19))
{var inst_11766 = (state_11780[2]);var state_11780__$1 = state_11780;var statearr_11809_11837 = state_11780__$1;(statearr_11809_11837[2] = inst_11766);
(statearr_11809_11837[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11781 === 20))
{var inst_11751 = (state_11780[13]);var inst_11762 = (state_11780[2]);var inst_11763 = cljs.core.next.call(null,inst_11751);var inst_11737 = inst_11763;var inst_11738 = null;var inst_11739 = 0;var inst_11740 = 0;var state_11780__$1 = (function (){var statearr_11810 = state_11780;(statearr_11810[8] = inst_11740);
(statearr_11810[15] = inst_11762);
(statearr_11810[9] = inst_11738);
(statearr_11810[10] = inst_11737);
(statearr_11810[11] = inst_11739);
return statearr_11810;
})();var statearr_11811_11838 = state_11780__$1;(statearr_11811_11838[2] = null);
(statearr_11811_11838[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__6731__auto__){
return (function() {
var state_machine__6732__auto__ = null;
var state_machine__6732__auto____0 = (function (){var statearr_11815 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11815[0] = state_machine__6732__auto__);
(statearr_11815[1] = 1);
return statearr_11815;
});
var state_machine__6732__auto____1 = (function (state_11780){while(true){
var ret_value__6733__auto__ = (function (){try{while(true){
var result__6734__auto__ = switch__6731__auto__.call(null,state_11780);if(cljs.core.keyword_identical_QMARK_.call(null,result__6734__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6734__auto__;
}
break;
}
}catch (e11816){if((e11816 instanceof Object))
{var ex__6735__auto__ = e11816;var statearr_11817_11839 = state_11780;(statearr_11817_11839[5] = ex__6735__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11780);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11816;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6733__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11840 = state_11780;
state_11780 = G__11840;
continue;
}
} else
{return ret_value__6733__auto__;
}
break;
}
});
state_machine__6732__auto__ = function(state_11780){
switch(arguments.length){
case 0:
return state_machine__6732__auto____0.call(this);
case 1:
return state_machine__6732__auto____1.call(this,state_11780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6732__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6732__auto____0;
state_machine__6732__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6732__auto____1;
return state_machine__6732__auto__;
})()
;})(switch__6731__auto__))
})();var state__6748__auto__ = (function (){var statearr_11818 = f__6747__auto__.call(null);(statearr_11818[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6746__auto__);
return statearr_11818;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6748__auto__);
}));
return c__6746__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6746__auto___11921 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6747__auto__ = (function (){var switch__6731__auto__ = (function (state_11900){var state_val_11901 = (state_11900[1]);if((state_val_11901 === 1))
{var state_11900__$1 = state_11900;var statearr_11902_11922 = state_11900__$1;(statearr_11902_11922[2] = null);
(statearr_11902_11922[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11901 === 2))
{var state_11900__$1 = state_11900;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11900__$1,4,from);
} else
{if((state_val_11901 === 3))
{var inst_11898 = (state_11900[2]);var state_11900__$1 = state_11900;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11900__$1,inst_11898);
} else
{if((state_val_11901 === 4))
{var inst_11883 = (state_11900[7]);var inst_11883__$1 = (state_11900[2]);var inst_11884 = (inst_11883__$1 == null);var state_11900__$1 = (function (){var statearr_11903 = state_11900;(statearr_11903[7] = inst_11883__$1);
return statearr_11903;
})();if(cljs.core.truth_(inst_11884))
{var statearr_11904_11923 = state_11900__$1;(statearr_11904_11923[1] = 5);
} else
{var statearr_11905_11924 = state_11900__$1;(statearr_11905_11924[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11901 === 5))
{var state_11900__$1 = state_11900;if(cljs.core.truth_(close_QMARK_))
{var statearr_11906_11925 = state_11900__$1;(statearr_11906_11925[1] = 8);
} else
{var statearr_11907_11926 = state_11900__$1;(statearr_11907_11926[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11901 === 6))
{var inst_11883 = (state_11900[7]);var state_11900__$1 = state_11900;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11900__$1,11,to,inst_11883);
} else
{if((state_val_11901 === 7))
{var inst_11896 = (state_11900[2]);var state_11900__$1 = state_11900;var statearr_11908_11927 = state_11900__$1;(statearr_11908_11927[2] = inst_11896);
(statearr_11908_11927[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11901 === 8))
{var inst_11887 = cljs.core.async.close_BANG_.call(null,to);var state_11900__$1 = state_11900;var statearr_11909_11928 = state_11900__$1;(statearr_11909_11928[2] = inst_11887);
(statearr_11909_11928[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11901 === 9))
{var state_11900__$1 = state_11900;var statearr_11910_11929 = state_11900__$1;(statearr_11910_11929[2] = null);
(statearr_11910_11929[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11901 === 10))
{var inst_11890 = (state_11900[2]);var state_11900__$1 = state_11900;var statearr_11911_11930 = state_11900__$1;(statearr_11911_11930[2] = inst_11890);
(statearr_11911_11930[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11901 === 11))
{var inst_11893 = (state_11900[2]);var state_11900__$1 = (function (){var statearr_11912 = state_11900;(statearr_11912[8] = inst_11893);
return statearr_11912;
})();var statearr_11913_11931 = state_11900__$1;(statearr_11913_11931[2] = null);
(statearr_11913_11931[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__6731__auto__){
return (function() {
var state_machine__6732__auto__ = null;
var state_machine__6732__auto____0 = (function (){var statearr_11917 = [null,null,null,null,null,null,null,null,null];(statearr_11917[0] = state_machine__6732__auto__);
(statearr_11917[1] = 1);
return statearr_11917;
});
var state_machine__6732__auto____1 = (function (state_11900){while(true){
var ret_value__6733__auto__ = (function (){try{while(true){
var result__6734__auto__ = switch__6731__auto__.call(null,state_11900);if(cljs.core.keyword_identical_QMARK_.call(null,result__6734__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6734__auto__;
}
break;
}
}catch (e11918){if((e11918 instanceof Object))
{var ex__6735__auto__ = e11918;var statearr_11919_11932 = state_11900;(statearr_11919_11932[5] = ex__6735__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11900);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11918;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6733__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11933 = state_11900;
state_11900 = G__11933;
continue;
}
} else
{return ret_value__6733__auto__;
}
break;
}
});
state_machine__6732__auto__ = function(state_11900){
switch(arguments.length){
case 0:
return state_machine__6732__auto____0.call(this);
case 1:
return state_machine__6732__auto____1.call(this,state_11900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6732__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6732__auto____0;
state_machine__6732__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6732__auto____1;
return state_machine__6732__auto__;
})()
;})(switch__6731__auto__))
})();var state__6748__auto__ = (function (){var statearr_11920 = f__6747__auto__.call(null);(statearr_11920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6746__auto___11921);
return statearr_11920;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6748__auto__);
}));
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6746__auto___12020 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6747__auto__ = (function (){var switch__6731__auto__ = (function (state_11998){var state_val_11999 = (state_11998[1]);if((state_val_11999 === 1))
{var state_11998__$1 = state_11998;var statearr_12000_12021 = state_11998__$1;(statearr_12000_12021[2] = null);
(statearr_12000_12021[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11999 === 2))
{var state_11998__$1 = state_11998;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11998__$1,4,ch);
} else
{if((state_val_11999 === 3))
{var inst_11996 = (state_11998[2]);var state_11998__$1 = state_11998;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11998__$1,inst_11996);
} else
{if((state_val_11999 === 4))
{var inst_11979 = (state_11998[7]);var inst_11979__$1 = (state_11998[2]);var inst_11980 = (inst_11979__$1 == null);var state_11998__$1 = (function (){var statearr_12001 = state_11998;(statearr_12001[7] = inst_11979__$1);
return statearr_12001;
})();if(cljs.core.truth_(inst_11980))
{var statearr_12002_12022 = state_11998__$1;(statearr_12002_12022[1] = 5);
} else
{var statearr_12003_12023 = state_11998__$1;(statearr_12003_12023[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11999 === 5))
{var inst_11982 = cljs.core.async.close_BANG_.call(null,tc);var inst_11983 = cljs.core.async.close_BANG_.call(null,fc);var state_11998__$1 = (function (){var statearr_12004 = state_11998;(statearr_12004[8] = inst_11982);
return statearr_12004;
})();var statearr_12005_12024 = state_11998__$1;(statearr_12005_12024[2] = inst_11983);
(statearr_12005_12024[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11999 === 6))
{var inst_11979 = (state_11998[7]);var inst_11985 = p.call(null,inst_11979);var state_11998__$1 = state_11998;if(cljs.core.truth_(inst_11985))
{var statearr_12006_12025 = state_11998__$1;(statearr_12006_12025[1] = 9);
} else
{var statearr_12007_12026 = state_11998__$1;(statearr_12007_12026[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11999 === 7))
{var inst_11994 = (state_11998[2]);var state_11998__$1 = state_11998;var statearr_12008_12027 = state_11998__$1;(statearr_12008_12027[2] = inst_11994);
(statearr_12008_12027[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11999 === 8))
{var inst_11991 = (state_11998[2]);var state_11998__$1 = (function (){var statearr_12009 = state_11998;(statearr_12009[9] = inst_11991);
return statearr_12009;
})();var statearr_12010_12028 = state_11998__$1;(statearr_12010_12028[2] = null);
(statearr_12010_12028[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11999 === 9))
{var state_11998__$1 = state_11998;var statearr_12011_12029 = state_11998__$1;(statearr_12011_12029[2] = tc);
(statearr_12011_12029[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11999 === 10))
{var state_11998__$1 = state_11998;var statearr_12012_12030 = state_11998__$1;(statearr_12012_12030[2] = fc);
(statearr_12012_12030[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11999 === 11))
{var inst_11979 = (state_11998[7]);var inst_11989 = (state_11998[2]);var state_11998__$1 = state_11998;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11998__$1,8,inst_11989,inst_11979);
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
});return ((function (switch__6731__auto__){
return (function() {
var state_machine__6732__auto__ = null;
var state_machine__6732__auto____0 = (function (){var statearr_12016 = [null,null,null,null,null,null,null,null,null,null];(statearr_12016[0] = state_machine__6732__auto__);
(statearr_12016[1] = 1);
return statearr_12016;
});
var state_machine__6732__auto____1 = (function (state_11998){while(true){
var ret_value__6733__auto__ = (function (){try{while(true){
var result__6734__auto__ = switch__6731__auto__.call(null,state_11998);if(cljs.core.keyword_identical_QMARK_.call(null,result__6734__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6734__auto__;
}
break;
}
}catch (e12017){if((e12017 instanceof Object))
{var ex__6735__auto__ = e12017;var statearr_12018_12031 = state_11998;(statearr_12018_12031[5] = ex__6735__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11998);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12017;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6733__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12032 = state_11998;
state_11998 = G__12032;
continue;
}
} else
{return ret_value__6733__auto__;
}
break;
}
});
state_machine__6732__auto__ = function(state_11998){
switch(arguments.length){
case 0:
return state_machine__6732__auto____0.call(this);
case 1:
return state_machine__6732__auto____1.call(this,state_11998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6732__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6732__auto____0;
state_machine__6732__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6732__auto____1;
return state_machine__6732__auto__;
})()
;})(switch__6731__auto__))
})();var state__6748__auto__ = (function (){var statearr_12019 = f__6747__auto__.call(null);(statearr_12019[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6746__auto___12020);
return statearr_12019;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6748__auto__);
}));
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6746__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6747__auto__ = (function (){var switch__6731__auto__ = (function (state_12079){var state_val_12080 = (state_12079[1]);if((state_val_12080 === 7))
{var inst_12075 = (state_12079[2]);var state_12079__$1 = state_12079;var statearr_12081_12097 = state_12079__$1;(statearr_12081_12097[2] = inst_12075);
(statearr_12081_12097[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12080 === 6))
{var inst_12065 = (state_12079[7]);var inst_12068 = (state_12079[8]);var inst_12072 = f.call(null,inst_12065,inst_12068);var inst_12065__$1 = inst_12072;var state_12079__$1 = (function (){var statearr_12082 = state_12079;(statearr_12082[7] = inst_12065__$1);
return statearr_12082;
})();var statearr_12083_12098 = state_12079__$1;(statearr_12083_12098[2] = null);
(statearr_12083_12098[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12080 === 5))
{var inst_12065 = (state_12079[7]);var state_12079__$1 = state_12079;var statearr_12084_12099 = state_12079__$1;(statearr_12084_12099[2] = inst_12065);
(statearr_12084_12099[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12080 === 4))
{var inst_12068 = (state_12079[8]);var inst_12068__$1 = (state_12079[2]);var inst_12069 = (inst_12068__$1 == null);var state_12079__$1 = (function (){var statearr_12085 = state_12079;(statearr_12085[8] = inst_12068__$1);
return statearr_12085;
})();if(cljs.core.truth_(inst_12069))
{var statearr_12086_12100 = state_12079__$1;(statearr_12086_12100[1] = 5);
} else
{var statearr_12087_12101 = state_12079__$1;(statearr_12087_12101[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12080 === 3))
{var inst_12077 = (state_12079[2]);var state_12079__$1 = state_12079;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12079__$1,inst_12077);
} else
{if((state_val_12080 === 2))
{var state_12079__$1 = state_12079;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12079__$1,4,ch);
} else
{if((state_val_12080 === 1))
{var inst_12065 = init;var state_12079__$1 = (function (){var statearr_12088 = state_12079;(statearr_12088[7] = inst_12065);
return statearr_12088;
})();var statearr_12089_12102 = state_12079__$1;(statearr_12089_12102[2] = null);
(statearr_12089_12102[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__6731__auto__){
return (function() {
var state_machine__6732__auto__ = null;
var state_machine__6732__auto____0 = (function (){var statearr_12093 = [null,null,null,null,null,null,null,null,null];(statearr_12093[0] = state_machine__6732__auto__);
(statearr_12093[1] = 1);
return statearr_12093;
});
var state_machine__6732__auto____1 = (function (state_12079){while(true){
var ret_value__6733__auto__ = (function (){try{while(true){
var result__6734__auto__ = switch__6731__auto__.call(null,state_12079);if(cljs.core.keyword_identical_QMARK_.call(null,result__6734__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6734__auto__;
}
break;
}
}catch (e12094){if((e12094 instanceof Object))
{var ex__6735__auto__ = e12094;var statearr_12095_12103 = state_12079;(statearr_12095_12103[5] = ex__6735__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12079);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12094;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6733__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12104 = state_12079;
state_12079 = G__12104;
continue;
}
} else
{return ret_value__6733__auto__;
}
break;
}
});
state_machine__6732__auto__ = function(state_12079){
switch(arguments.length){
case 0:
return state_machine__6732__auto____0.call(this);
case 1:
return state_machine__6732__auto____1.call(this,state_12079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6732__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6732__auto____0;
state_machine__6732__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6732__auto____1;
return state_machine__6732__auto__;
})()
;})(switch__6731__auto__))
})();var state__6748__auto__ = (function (){var statearr_12096 = f__6747__auto__.call(null);(statearr_12096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6746__auto__);
return statearr_12096;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6748__auto__);
}));
return c__6746__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6746__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6747__auto__ = (function (){var switch__6731__auto__ = (function (state_12166){var state_val_12167 = (state_12166[1]);if((state_val_12167 === 1))
{var inst_12146 = cljs.core.seq.call(null,coll);var inst_12147 = inst_12146;var state_12166__$1 = (function (){var statearr_12168 = state_12166;(statearr_12168[7] = inst_12147);
return statearr_12168;
})();var statearr_12169_12187 = state_12166__$1;(statearr_12169_12187[2] = null);
(statearr_12169_12187[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12167 === 2))
{var inst_12147 = (state_12166[7]);var state_12166__$1 = state_12166;if(cljs.core.truth_(inst_12147))
{var statearr_12170_12188 = state_12166__$1;(statearr_12170_12188[1] = 4);
} else
{var statearr_12171_12189 = state_12166__$1;(statearr_12171_12189[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12167 === 3))
{var inst_12164 = (state_12166[2]);var state_12166__$1 = state_12166;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12166__$1,inst_12164);
} else
{if((state_val_12167 === 4))
{var inst_12147 = (state_12166[7]);var inst_12150 = cljs.core.first.call(null,inst_12147);var state_12166__$1 = state_12166;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12166__$1,7,ch,inst_12150);
} else
{if((state_val_12167 === 5))
{var state_12166__$1 = state_12166;if(cljs.core.truth_(close_QMARK_))
{var statearr_12172_12190 = state_12166__$1;(statearr_12172_12190[1] = 8);
} else
{var statearr_12173_12191 = state_12166__$1;(statearr_12173_12191[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12167 === 6))
{var inst_12162 = (state_12166[2]);var state_12166__$1 = state_12166;var statearr_12174_12192 = state_12166__$1;(statearr_12174_12192[2] = inst_12162);
(statearr_12174_12192[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12167 === 7))
{var inst_12147 = (state_12166[7]);var inst_12152 = (state_12166[2]);var inst_12153 = cljs.core.next.call(null,inst_12147);var inst_12147__$1 = inst_12153;var state_12166__$1 = (function (){var statearr_12175 = state_12166;(statearr_12175[8] = inst_12152);
(statearr_12175[7] = inst_12147__$1);
return statearr_12175;
})();var statearr_12176_12193 = state_12166__$1;(statearr_12176_12193[2] = null);
(statearr_12176_12193[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12167 === 8))
{var inst_12157 = cljs.core.async.close_BANG_.call(null,ch);var state_12166__$1 = state_12166;var statearr_12177_12194 = state_12166__$1;(statearr_12177_12194[2] = inst_12157);
(statearr_12177_12194[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12167 === 9))
{var state_12166__$1 = state_12166;var statearr_12178_12195 = state_12166__$1;(statearr_12178_12195[2] = null);
(statearr_12178_12195[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12167 === 10))
{var inst_12160 = (state_12166[2]);var state_12166__$1 = state_12166;var statearr_12179_12196 = state_12166__$1;(statearr_12179_12196[2] = inst_12160);
(statearr_12179_12196[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__6731__auto__){
return (function() {
var state_machine__6732__auto__ = null;
var state_machine__6732__auto____0 = (function (){var statearr_12183 = [null,null,null,null,null,null,null,null,null];(statearr_12183[0] = state_machine__6732__auto__);
(statearr_12183[1] = 1);
return statearr_12183;
});
var state_machine__6732__auto____1 = (function (state_12166){while(true){
var ret_value__6733__auto__ = (function (){try{while(true){
var result__6734__auto__ = switch__6731__auto__.call(null,state_12166);if(cljs.core.keyword_identical_QMARK_.call(null,result__6734__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6734__auto__;
}
break;
}
}catch (e12184){if((e12184 instanceof Object))
{var ex__6735__auto__ = e12184;var statearr_12185_12197 = state_12166;(statearr_12185_12197[5] = ex__6735__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12166);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12184;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6733__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12198 = state_12166;
state_12166 = G__12198;
continue;
}
} else
{return ret_value__6733__auto__;
}
break;
}
});
state_machine__6732__auto__ = function(state_12166){
switch(arguments.length){
case 0:
return state_machine__6732__auto____0.call(this);
case 1:
return state_machine__6732__auto____1.call(this,state_12166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6732__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6732__auto____0;
state_machine__6732__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6732__auto____1;
return state_machine__6732__auto__;
})()
;})(switch__6731__auto__))
})();var state__6748__auto__ = (function (){var statearr_12186 = f__6747__auto__.call(null);(statearr_12186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6746__auto__);
return statearr_12186;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6748__auto__);
}));
return c__6746__auto__;
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
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj12200 = {};return obj12200;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3431__auto__ = _;if(and__3431__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4070__auto__ = (((_ == null))?null:_);return (function (){var or__3443__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj12202 = {};return obj12202;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12426 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12426 = (function (cs,ch,mult,meta12427){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12427 = meta12427;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12426.cljs$lang$type = true;
cljs.core.async.t12426.cljs$lang$ctorStr = "cljs.core.async/t12426";
cljs.core.async.t12426.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t12426");
});})(cs))
;
cljs.core.async.t12426.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12426.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12426.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12426.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12426.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12426.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12426.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12428){var self__ = this;
var _12428__$1 = this;return self__.meta12427;
});})(cs))
;
cljs.core.async.t12426.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12428,meta12427__$1){var self__ = this;
var _12428__$1 = this;return (new cljs.core.async.t12426(self__.cs,self__.ch,self__.mult,meta12427__$1));
});})(cs))
;
cljs.core.async.__GT_t12426 = ((function (cs){
return (function __GT_t12426(cs__$1,ch__$1,mult__$1,meta12427){return (new cljs.core.async.t12426(cs__$1,ch__$1,mult__$1,meta12427));
});})(cs))
;
}
return (new cljs.core.async.t12426(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6746__auto___12649 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6747__auto__ = (function (){var switch__6731__auto__ = (function (state_12563){var state_val_12564 = (state_12563[1]);if((state_val_12564 === 32))
{var inst_12431 = (state_12563[7]);var inst_12507 = (state_12563[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12563,31,Object,null,30);var inst_12514 = cljs.core.async.put_BANG_.call(null,inst_12507,inst_12431,done);var state_12563__$1 = state_12563;var statearr_12565_12650 = state_12563__$1;(statearr_12565_12650[2] = inst_12514);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12563__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12564 === 1))
{var state_12563__$1 = state_12563;var statearr_12566_12651 = state_12563__$1;(statearr_12566_12651[2] = null);
(statearr_12566_12651[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12564 === 33))
{var inst_12520 = (state_12563[9]);var inst_12522 = cljs.core.chunked_seq_QMARK_.call(null,inst_12520);var state_12563__$1 = state_12563;if(inst_12522)
{var statearr_12567_12652 = state_12563__$1;(statearr_12567_12652[1] = 36);
} else
{var statearr_12568_12653 = state_12563__$1;(statearr_12568_12653[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12564 === 2))
{var state_12563__$1 = state_12563;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12563__$1,4,ch);
} else
{if((state_val_12564 === 34))
{var state_12563__$1 = state_12563;var statearr_12569_12654 = state_12563__$1;(statearr_12569_12654[2] = null);
(statearr_12569_12654[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12564 === 3))
{var inst_12561 = (state_12563[2]);var state_12563__$1 = state_12563;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12563__$1,inst_12561);
} else
{if((state_val_12564 === 35))
{var inst_12545 = (state_12563[2]);var state_12563__$1 = state_12563;var statearr_12570_12655 = state_12563__$1;(statearr_12570_12655[2] = inst_12545);
(statearr_12570_12655[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12564 === 4))
{var inst_12431 = (state_12563[7]);var inst_12431__$1 = (state_12563[2]);var inst_12432 = (inst_12431__$1 == null);var state_12563__$1 = (function (){var statearr_12571 = state_12563;(statearr_12571[7] = inst_12431__$1);
return statearr_12571;
})();if(cljs.core.truth_(inst_12432))
{var statearr_12572_12656 = state_12563__$1;(statearr_12572_12656[1] = 5);
} else
{var statearr_12573_12657 = state_12563__$1;(statearr_12573_12657[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12564 === 36))
{var inst_12520 = (state_12563[9]);var inst_12524 = cljs.core.chunk_first.call(null,inst_12520);var inst_12525 = cljs.core.chunk_rest.call(null,inst_12520);var inst_12526 = cljs.core.count.call(null,inst_12524);var inst_12499 = inst_12525;var inst_12500 = inst_12524;var inst_12501 = inst_12526;var inst_12502 = 0;var state_12563__$1 = (function (){var statearr_12574 = state_12563;(statearr_12574[10] = inst_12501);
(statearr_12574[11] = inst_12502);
(statearr_12574[12] = inst_12500);
(statearr_12574[13] = inst_12499);
return statearr_12574;
})();var statearr_12575_12658 = state_12563__$1;(statearr_12575_12658[2] = null);
(statearr_12575_12658[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12564 === 5))
{var inst_12438 = cljs.core.deref.call(null,cs);var inst_12439 = cljs.core.seq.call(null,inst_12438);var inst_12440 = inst_12439;var inst_12441 = null;var inst_12442 = 0;var inst_12443 = 0;var state_12563__$1 = (function (){var statearr_12576 = state_12563;(statearr_12576[14] = inst_12440);
(statearr_12576[15] = inst_12441);
(statearr_12576[16] = inst_12443);
(statearr_12576[17] = inst_12442);
return statearr_12576;
})();var statearr_12577_12659 = state_12563__$1;(statearr_12577_12659[2] = null);
(statearr_12577_12659[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12564 === 37))
{var inst_12520 = (state_12563[9]);var inst_12529 = cljs.core.first.call(null,inst_12520);var state_12563__$1 = (function (){var statearr_12578 = state_12563;(statearr_12578[18] = inst_12529);
return statearr_12578;
})();var statearr_12579_12660 = state_12563__$1;(statearr_12579_12660[2] = null);
(statearr_12579_12660[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12564 === 6))
{var inst_12491 = (state_12563[19]);var inst_12490 = cljs.core.deref.call(null,cs);var inst_12491__$1 = cljs.core.keys.call(null,inst_12490);var inst_12492 = cljs.core.count.call(null,inst_12491__$1);var inst_12493 = cljs.core.reset_BANG_.call(null,dctr,inst_12492);var inst_12498 = cljs.core.seq.call(null,inst_12491__$1);var inst_12499 = inst_12498;var inst_12500 = null;var inst_12501 = 0;var inst_12502 = 0;var state_12563__$1 = (function (){var statearr_12580 = state_12563;(statearr_12580[10] = inst_12501);
(statearr_12580[11] = inst_12502);
(statearr_12580[12] = inst_12500);
(statearr_12580[13] = inst_12499);
(statearr_12580[20] = inst_12493);
(statearr_12580[19] = inst_12491__$1);
return statearr_12580;
})();var statearr_12581_12661 = state_12563__$1;(statearr_12581_12661[2] = null);
(statearr_12581_12661[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12564 === 38))
{var inst_12542 = (state_12563[2]);var state_12563__$1 = state_12563;var statearr_12582_12662 = state_12563__$1;(statearr_12582_12662[2] = inst_12542);
(statearr_12582_12662[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12564 === 7))
{var inst_12559 = (state_12563[2]);var state_12563__$1 = state_12563;var statearr_12583_12663 = state_12563__$1;(statearr_12583_12663[2] = inst_12559);
(statearr_12583_12663[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12564 === 39))
{var inst_12520 = (state_12563[9]);var inst_12538 = (state_12563[2]);var inst_12539 = cljs.core.next.call(null,inst_12520);var inst_12499 = inst_12539;var inst_12500 = null;var inst_12501 = 0;var inst_12502 = 0;var state_12563__$1 = (function (){var statearr_12584 = state_12563;(statearr_12584[10] = inst_12501);
(statearr_12584[11] = inst_12502);
(statearr_12584[12] = inst_12500);
(statearr_12584[21] = inst_12538);
(statearr_12584[13] = inst_12499);
return statearr_12584;
})();var statearr_12585_12664 = state_12563__$1;(statearr_12585_12664[2] = null);
(statearr_12585_12664[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12564 === 8))
{var inst_12443 = (state_12563[16]);var inst_12442 = (state_12563[17]);var inst_12445 = (inst_12443 < inst_12442);var inst_12446 = inst_12445;var state_12563__$1 = state_12563;if(cljs.core.truth_(inst_12446))
{var statearr_12586_12665 = state_12563__$1;(statearr_12586_12665[1] = 10);
} else
{var statearr_12587_12666 = state_12563__$1;(statearr_12587_12666[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12564 === 40))
{var inst_12529 = (state_12563[18]);var inst_12530 = (state_12563[2]);var inst_12531 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12532 = cljs.core.async.untap_STAR_.call(null,m,inst_12529);var state_12563__$1 = (function (){var statearr_12588 = state_12563;(statearr_12588[22] = inst_12531);
(statearr_12588[23] = inst_12530);
return statearr_12588;
})();var statearr_12589_12667 = state_12563__$1;(statearr_12589_12667[2] = inst_12532);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12563__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12564 === 9))
{var inst_12488 = (state_12563[2]);var state_12563__$1 = state_12563;var statearr_12590_12668 = state_12563__$1;(statearr_12590_12668[2] = inst_12488);
(statearr_12590_12668[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12564 === 41))
{var inst_12431 = (state_12563[7]);var inst_12529 = (state_12563[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12563,40,Object,null,39);var inst_12536 = cljs.core.async.put_BANG_.call(null,inst_12529,inst_12431,done);var state_12563__$1 = state_12563;var statearr_12591_12669 = state_12563__$1;(statearr_12591_12669[2] = inst_12536);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12563__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12564 === 10))
{var inst_12441 = (state_12563[15]);var inst_12443 = (state_12563[16]);var inst_12449 = cljs.core._nth.call(null,inst_12441,inst_12443);var inst_12450 = cljs.core.nth.call(null,inst_12449,0,null);var inst_12451 = cljs.core.nth.call(null,inst_12449,1,null);var state_12563__$1 = (function (){var statearr_12592 = state_12563;(statearr_12592[24] = inst_12450);
return statearr_12592;
})();if(cljs.core.truth_(inst_12451))
{var statearr_12593_12670 = state_12563__$1;(statearr_12593_12670[1] = 13);
} else
{var statearr_12594_12671 = state_12563__$1;(statearr_12594_12671[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12564 === 42))
{var state_12563__$1 = state_12563;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12563__$1,45,dchan);
} else
{if((state_val_12564 === 11))
{var inst_12460 = (state_12563[25]);var inst_12440 = (state_12563[14]);var inst_12460__$1 = cljs.core.seq.call(null,inst_12440);var state_12563__$1 = (function (){var statearr_12595 = state_12563;(statearr_12595[25] = inst_12460__$1);
return statearr_12595;
})();if(inst_12460__$1)
{var statearr_12596_12672 = state_12563__$1;(statearr_12596_12672[1] = 16);
} else
{var statearr_12597_12673 = state_12563__$1;(statearr_12597_12673[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12564 === 43))
{var state_12563__$1 = state_12563;var statearr_12598_12674 = state_12563__$1;(statearr_12598_12674[2] = null);
(statearr_12598_12674[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12564 === 12))
{var inst_12486 = (state_12563[2]);var state_12563__$1 = state_12563;var statearr_12599_12675 = state_12563__$1;(statearr_12599_12675[2] = inst_12486);
(statearr_12599_12675[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12564 === 44))
{var inst_12556 = (state_12563[2]);var state_12563__$1 = (function (){var statearr_12600 = state_12563;(statearr_12600[26] = inst_12556);
return statearr_12600;
})();var statearr_12601_12676 = state_12563__$1;(statearr_12601_12676[2] = null);
(statearr_12601_12676[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12564 === 13))
{var inst_12450 = (state_12563[24]);var inst_12453 = cljs.core.async.close_BANG_.call(null,inst_12450);var state_12563__$1 = state_12563;var statearr_12602_12677 = state_12563__$1;(statearr_12602_12677[2] = inst_12453);
(statearr_12602_12677[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12564 === 45))
{var inst_12553 = (state_12563[2]);var state_12563__$1 = state_12563;var statearr_12606_12678 = state_12563__$1;(statearr_12606_12678[2] = inst_12553);
(statearr_12606_12678[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12564 === 14))
{var state_12563__$1 = state_12563;var statearr_12607_12679 = state_12563__$1;(statearr_12607_12679[2] = null);
(statearr_12607_12679[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12564 === 15))
{var inst_12440 = (state_12563[14]);var inst_12441 = (state_12563[15]);var inst_12443 = (state_12563[16]);var inst_12442 = (state_12563[17]);var inst_12456 = (state_12563[2]);var inst_12457 = (inst_12443 + 1);var tmp12603 = inst_12440;var tmp12604 = inst_12441;var tmp12605 = inst_12442;var inst_12440__$1 = tmp12603;var inst_12441__$1 = tmp12604;var inst_12442__$1 = tmp12605;var inst_12443__$1 = inst_12457;var state_12563__$1 = (function (){var statearr_12608 = state_12563;(statearr_12608[14] = inst_12440__$1);
(statearr_12608[15] = inst_12441__$1);
(statearr_12608[27] = inst_12456);
(statearr_12608[16] = inst_12443__$1);
(statearr_12608[17] = inst_12442__$1);
return statearr_12608;
})();var statearr_12609_12680 = state_12563__$1;(statearr_12609_12680[2] = null);
(statearr_12609_12680[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12564 === 16))
{var inst_12460 = (state_12563[25]);var inst_12462 = cljs.core.chunked_seq_QMARK_.call(null,inst_12460);var state_12563__$1 = state_12563;if(inst_12462)
{var statearr_12610_12681 = state_12563__$1;(statearr_12610_12681[1] = 19);
} else
{var statearr_12611_12682 = state_12563__$1;(statearr_12611_12682[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12564 === 17))
{var state_12563__$1 = state_12563;var statearr_12612_12683 = state_12563__$1;(statearr_12612_12683[2] = null);
(statearr_12612_12683[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12564 === 18))
{var inst_12484 = (state_12563[2]);var state_12563__$1 = state_12563;var statearr_12613_12684 = state_12563__$1;(statearr_12613_12684[2] = inst_12484);
(statearr_12613_12684[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12564 === 19))
{var inst_12460 = (state_12563[25]);var inst_12464 = cljs.core.chunk_first.call(null,inst_12460);var inst_12465 = cljs.core.chunk_rest.call(null,inst_12460);var inst_12466 = cljs.core.count.call(null,inst_12464);var inst_12440 = inst_12465;var inst_12441 = inst_12464;var inst_12442 = inst_12466;var inst_12443 = 0;var state_12563__$1 = (function (){var statearr_12614 = state_12563;(statearr_12614[14] = inst_12440);
(statearr_12614[15] = inst_12441);
(statearr_12614[16] = inst_12443);
(statearr_12614[17] = inst_12442);
return statearr_12614;
})();var statearr_12615_12685 = state_12563__$1;(statearr_12615_12685[2] = null);
(statearr_12615_12685[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12564 === 20))
{var inst_12460 = (state_12563[25]);var inst_12470 = cljs.core.first.call(null,inst_12460);var inst_12471 = cljs.core.nth.call(null,inst_12470,0,null);var inst_12472 = cljs.core.nth.call(null,inst_12470,1,null);var state_12563__$1 = (function (){var statearr_12616 = state_12563;(statearr_12616[28] = inst_12471);
return statearr_12616;
})();if(cljs.core.truth_(inst_12472))
{var statearr_12617_12686 = state_12563__$1;(statearr_12617_12686[1] = 22);
} else
{var statearr_12618_12687 = state_12563__$1;(statearr_12618_12687[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12564 === 21))
{var inst_12481 = (state_12563[2]);var state_12563__$1 = state_12563;var statearr_12619_12688 = state_12563__$1;(statearr_12619_12688[2] = inst_12481);
(statearr_12619_12688[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12564 === 22))
{var inst_12471 = (state_12563[28]);var inst_12474 = cljs.core.async.close_BANG_.call(null,inst_12471);var state_12563__$1 = state_12563;var statearr_12620_12689 = state_12563__$1;(statearr_12620_12689[2] = inst_12474);
(statearr_12620_12689[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12564 === 23))
{var state_12563__$1 = state_12563;var statearr_12621_12690 = state_12563__$1;(statearr_12621_12690[2] = null);
(statearr_12621_12690[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12564 === 24))
{var inst_12460 = (state_12563[25]);var inst_12477 = (state_12563[2]);var inst_12478 = cljs.core.next.call(null,inst_12460);var inst_12440 = inst_12478;var inst_12441 = null;var inst_12442 = 0;var inst_12443 = 0;var state_12563__$1 = (function (){var statearr_12622 = state_12563;(statearr_12622[29] = inst_12477);
(statearr_12622[14] = inst_12440);
(statearr_12622[15] = inst_12441);
(statearr_12622[16] = inst_12443);
(statearr_12622[17] = inst_12442);
return statearr_12622;
})();var statearr_12623_12691 = state_12563__$1;(statearr_12623_12691[2] = null);
(statearr_12623_12691[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12564 === 25))
{var inst_12501 = (state_12563[10]);var inst_12502 = (state_12563[11]);var inst_12504 = (inst_12502 < inst_12501);var inst_12505 = inst_12504;var state_12563__$1 = state_12563;if(cljs.core.truth_(inst_12505))
{var statearr_12624_12692 = state_12563__$1;(statearr_12624_12692[1] = 27);
} else
{var statearr_12625_12693 = state_12563__$1;(statearr_12625_12693[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12564 === 26))
{var inst_12491 = (state_12563[19]);var inst_12549 = (state_12563[2]);var inst_12550 = cljs.core.seq.call(null,inst_12491);var state_12563__$1 = (function (){var statearr_12626 = state_12563;(statearr_12626[30] = inst_12549);
return statearr_12626;
})();if(inst_12550)
{var statearr_12627_12694 = state_12563__$1;(statearr_12627_12694[1] = 42);
} else
{var statearr_12628_12695 = state_12563__$1;(statearr_12628_12695[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12564 === 27))
{var inst_12502 = (state_12563[11]);var inst_12500 = (state_12563[12]);var inst_12507 = cljs.core._nth.call(null,inst_12500,inst_12502);var state_12563__$1 = (function (){var statearr_12629 = state_12563;(statearr_12629[8] = inst_12507);
return statearr_12629;
})();var statearr_12630_12696 = state_12563__$1;(statearr_12630_12696[2] = null);
(statearr_12630_12696[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12564 === 28))
{var inst_12499 = (state_12563[13]);var inst_12520 = (state_12563[9]);var inst_12520__$1 = cljs.core.seq.call(null,inst_12499);var state_12563__$1 = (function (){var statearr_12634 = state_12563;(statearr_12634[9] = inst_12520__$1);
return statearr_12634;
})();if(inst_12520__$1)
{var statearr_12635_12697 = state_12563__$1;(statearr_12635_12697[1] = 33);
} else
{var statearr_12636_12698 = state_12563__$1;(statearr_12636_12698[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12564 === 29))
{var inst_12547 = (state_12563[2]);var state_12563__$1 = state_12563;var statearr_12637_12699 = state_12563__$1;(statearr_12637_12699[2] = inst_12547);
(statearr_12637_12699[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12564 === 30))
{var inst_12501 = (state_12563[10]);var inst_12502 = (state_12563[11]);var inst_12500 = (state_12563[12]);var inst_12499 = (state_12563[13]);var inst_12516 = (state_12563[2]);var inst_12517 = (inst_12502 + 1);var tmp12631 = inst_12501;var tmp12632 = inst_12500;var tmp12633 = inst_12499;var inst_12499__$1 = tmp12633;var inst_12500__$1 = tmp12632;var inst_12501__$1 = tmp12631;var inst_12502__$1 = inst_12517;var state_12563__$1 = (function (){var statearr_12638 = state_12563;(statearr_12638[31] = inst_12516);
(statearr_12638[10] = inst_12501__$1);
(statearr_12638[11] = inst_12502__$1);
(statearr_12638[12] = inst_12500__$1);
(statearr_12638[13] = inst_12499__$1);
return statearr_12638;
})();var statearr_12639_12700 = state_12563__$1;(statearr_12639_12700[2] = null);
(statearr_12639_12700[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12564 === 31))
{var inst_12507 = (state_12563[8]);var inst_12508 = (state_12563[2]);var inst_12509 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12510 = cljs.core.async.untap_STAR_.call(null,m,inst_12507);var state_12563__$1 = (function (){var statearr_12640 = state_12563;(statearr_12640[32] = inst_12508);
(statearr_12640[33] = inst_12509);
return statearr_12640;
})();var statearr_12641_12701 = state_12563__$1;(statearr_12641_12701[2] = inst_12510);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12563__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__6731__auto__){
return (function() {
var state_machine__6732__auto__ = null;
var state_machine__6732__auto____0 = (function (){var statearr_12645 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12645[0] = state_machine__6732__auto__);
(statearr_12645[1] = 1);
return statearr_12645;
});
var state_machine__6732__auto____1 = (function (state_12563){while(true){
var ret_value__6733__auto__ = (function (){try{while(true){
var result__6734__auto__ = switch__6731__auto__.call(null,state_12563);if(cljs.core.keyword_identical_QMARK_.call(null,result__6734__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6734__auto__;
}
break;
}
}catch (e12646){if((e12646 instanceof Object))
{var ex__6735__auto__ = e12646;var statearr_12647_12702 = state_12563;(statearr_12647_12702[5] = ex__6735__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12563);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12646;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6733__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12703 = state_12563;
state_12563 = G__12703;
continue;
}
} else
{return ret_value__6733__auto__;
}
break;
}
});
state_machine__6732__auto__ = function(state_12563){
switch(arguments.length){
case 0:
return state_machine__6732__auto____0.call(this);
case 1:
return state_machine__6732__auto____1.call(this,state_12563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6732__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6732__auto____0;
state_machine__6732__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6732__auto____1;
return state_machine__6732__auto__;
})()
;})(switch__6731__auto__))
})();var state__6748__auto__ = (function (){var statearr_12648 = f__6747__auto__.call(null);(statearr_12648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6746__auto___12649);
return statearr_12648;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6748__auto__);
}));
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
cljs.core.async.Mix = (function (){var obj12705 = {};return obj12705;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t12815 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12815 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta12816){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta12816 = meta12816;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12815.cljs$lang$type = true;
cljs.core.async.t12815.cljs$lang$ctorStr = "cljs.core.async/t12815";
cljs.core.async.t12815.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t12815");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12815.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12815.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12815.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12815.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12815.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12815.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12815.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12815.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12815.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12817){var self__ = this;
var _12817__$1 = this;return self__.meta12816;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12815.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12817,meta12816__$1){var self__ = this;
var _12817__$1 = this;return (new cljs.core.async.t12815(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta12816__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12815 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12815(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12816){return (new cljs.core.async.t12815(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12816));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12815(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6746__auto___12924 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6747__auto__ = (function (){var switch__6731__auto__ = (function (state_12882){var state_val_12883 = (state_12882[1]);if((state_val_12883 === 1))
{var inst_12821 = (state_12882[7]);var inst_12821__$1 = calc_state.call(null);var inst_12822 = cljs.core.seq_QMARK_.call(null,inst_12821__$1);var state_12882__$1 = (function (){var statearr_12884 = state_12882;(statearr_12884[7] = inst_12821__$1);
return statearr_12884;
})();if(inst_12822)
{var statearr_12885_12925 = state_12882__$1;(statearr_12885_12925[1] = 2);
} else
{var statearr_12886_12926 = state_12882__$1;(statearr_12886_12926[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 2))
{var inst_12821 = (state_12882[7]);var inst_12824 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12821);var state_12882__$1 = state_12882;var statearr_12887_12927 = state_12882__$1;(statearr_12887_12927[2] = inst_12824);
(statearr_12887_12927[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 3))
{var inst_12821 = (state_12882[7]);var state_12882__$1 = state_12882;var statearr_12888_12928 = state_12882__$1;(statearr_12888_12928[2] = inst_12821);
(statearr_12888_12928[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 4))
{var inst_12821 = (state_12882[7]);var inst_12827 = (state_12882[2]);var inst_12828 = cljs.core.get.call(null,inst_12827,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12829 = cljs.core.get.call(null,inst_12827,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12830 = cljs.core.get.call(null,inst_12827,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_12831 = inst_12821;var state_12882__$1 = (function (){var statearr_12889 = state_12882;(statearr_12889[8] = inst_12830);
(statearr_12889[9] = inst_12831);
(statearr_12889[10] = inst_12828);
(statearr_12889[11] = inst_12829);
return statearr_12889;
})();var statearr_12890_12929 = state_12882__$1;(statearr_12890_12929[2] = null);
(statearr_12890_12929[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 5))
{var inst_12831 = (state_12882[9]);var inst_12834 = cljs.core.seq_QMARK_.call(null,inst_12831);var state_12882__$1 = state_12882;if(inst_12834)
{var statearr_12891_12930 = state_12882__$1;(statearr_12891_12930[1] = 7);
} else
{var statearr_12892_12931 = state_12882__$1;(statearr_12892_12931[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 6))
{var inst_12880 = (state_12882[2]);var state_12882__$1 = state_12882;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12882__$1,inst_12880);
} else
{if((state_val_12883 === 7))
{var inst_12831 = (state_12882[9]);var inst_12836 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12831);var state_12882__$1 = state_12882;var statearr_12893_12932 = state_12882__$1;(statearr_12893_12932[2] = inst_12836);
(statearr_12893_12932[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 8))
{var inst_12831 = (state_12882[9]);var state_12882__$1 = state_12882;var statearr_12894_12933 = state_12882__$1;(statearr_12894_12933[2] = inst_12831);
(statearr_12894_12933[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 9))
{var inst_12839 = (state_12882[12]);var inst_12839__$1 = (state_12882[2]);var inst_12840 = cljs.core.get.call(null,inst_12839__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12841 = cljs.core.get.call(null,inst_12839__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12842 = cljs.core.get.call(null,inst_12839__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_12882__$1 = (function (){var statearr_12895 = state_12882;(statearr_12895[12] = inst_12839__$1);
(statearr_12895[13] = inst_12842);
(statearr_12895[14] = inst_12841);
return statearr_12895;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12882__$1,10,inst_12840);
} else
{if((state_val_12883 === 10))
{var inst_12847 = (state_12882[15]);var inst_12846 = (state_12882[16]);var inst_12845 = (state_12882[2]);var inst_12846__$1 = cljs.core.nth.call(null,inst_12845,0,null);var inst_12847__$1 = cljs.core.nth.call(null,inst_12845,1,null);var inst_12848 = (inst_12846__$1 == null);var inst_12849 = cljs.core._EQ_.call(null,inst_12847__$1,change);var inst_12850 = (inst_12848) || (inst_12849);var state_12882__$1 = (function (){var statearr_12896 = state_12882;(statearr_12896[15] = inst_12847__$1);
(statearr_12896[16] = inst_12846__$1);
return statearr_12896;
})();if(cljs.core.truth_(inst_12850))
{var statearr_12897_12934 = state_12882__$1;(statearr_12897_12934[1] = 11);
} else
{var statearr_12898_12935 = state_12882__$1;(statearr_12898_12935[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 11))
{var inst_12846 = (state_12882[16]);var inst_12852 = (inst_12846 == null);var state_12882__$1 = state_12882;if(cljs.core.truth_(inst_12852))
{var statearr_12899_12936 = state_12882__$1;(statearr_12899_12936[1] = 14);
} else
{var statearr_12900_12937 = state_12882__$1;(statearr_12900_12937[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 12))
{var inst_12847 = (state_12882[15]);var inst_12861 = (state_12882[17]);var inst_12842 = (state_12882[13]);var inst_12861__$1 = inst_12842.call(null,inst_12847);var state_12882__$1 = (function (){var statearr_12901 = state_12882;(statearr_12901[17] = inst_12861__$1);
return statearr_12901;
})();if(cljs.core.truth_(inst_12861__$1))
{var statearr_12902_12938 = state_12882__$1;(statearr_12902_12938[1] = 17);
} else
{var statearr_12903_12939 = state_12882__$1;(statearr_12903_12939[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 13))
{var inst_12878 = (state_12882[2]);var state_12882__$1 = state_12882;var statearr_12904_12940 = state_12882__$1;(statearr_12904_12940[2] = inst_12878);
(statearr_12904_12940[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 14))
{var inst_12847 = (state_12882[15]);var inst_12854 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12847);var state_12882__$1 = state_12882;var statearr_12905_12941 = state_12882__$1;(statearr_12905_12941[2] = inst_12854);
(statearr_12905_12941[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 15))
{var state_12882__$1 = state_12882;var statearr_12906_12942 = state_12882__$1;(statearr_12906_12942[2] = null);
(statearr_12906_12942[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 16))
{var inst_12857 = (state_12882[2]);var inst_12858 = calc_state.call(null);var inst_12831 = inst_12858;var state_12882__$1 = (function (){var statearr_12907 = state_12882;(statearr_12907[18] = inst_12857);
(statearr_12907[9] = inst_12831);
return statearr_12907;
})();var statearr_12908_12943 = state_12882__$1;(statearr_12908_12943[2] = null);
(statearr_12908_12943[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 17))
{var inst_12861 = (state_12882[17]);var state_12882__$1 = state_12882;var statearr_12909_12944 = state_12882__$1;(statearr_12909_12944[2] = inst_12861);
(statearr_12909_12944[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 18))
{var inst_12847 = (state_12882[15]);var inst_12842 = (state_12882[13]);var inst_12841 = (state_12882[14]);var inst_12864 = cljs.core.empty_QMARK_.call(null,inst_12842);var inst_12865 = inst_12841.call(null,inst_12847);var inst_12866 = cljs.core.not.call(null,inst_12865);var inst_12867 = (inst_12864) && (inst_12866);var state_12882__$1 = state_12882;var statearr_12910_12945 = state_12882__$1;(statearr_12910_12945[2] = inst_12867);
(statearr_12910_12945[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 19))
{var inst_12869 = (state_12882[2]);var state_12882__$1 = state_12882;if(cljs.core.truth_(inst_12869))
{var statearr_12911_12946 = state_12882__$1;(statearr_12911_12946[1] = 20);
} else
{var statearr_12912_12947 = state_12882__$1;(statearr_12912_12947[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 20))
{var inst_12846 = (state_12882[16]);var state_12882__$1 = state_12882;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12882__$1,23,out,inst_12846);
} else
{if((state_val_12883 === 21))
{var state_12882__$1 = state_12882;var statearr_12913_12948 = state_12882__$1;(statearr_12913_12948[2] = null);
(statearr_12913_12948[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 22))
{var inst_12839 = (state_12882[12]);var inst_12875 = (state_12882[2]);var inst_12831 = inst_12839;var state_12882__$1 = (function (){var statearr_12914 = state_12882;(statearr_12914[19] = inst_12875);
(statearr_12914[9] = inst_12831);
return statearr_12914;
})();var statearr_12915_12949 = state_12882__$1;(statearr_12915_12949[2] = null);
(statearr_12915_12949[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12883 === 23))
{var inst_12872 = (state_12882[2]);var state_12882__$1 = state_12882;var statearr_12916_12950 = state_12882__$1;(statearr_12916_12950[2] = inst_12872);
(statearr_12916_12950[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__6731__auto__){
return (function() {
var state_machine__6732__auto__ = null;
var state_machine__6732__auto____0 = (function (){var statearr_12920 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12920[0] = state_machine__6732__auto__);
(statearr_12920[1] = 1);
return statearr_12920;
});
var state_machine__6732__auto____1 = (function (state_12882){while(true){
var ret_value__6733__auto__ = (function (){try{while(true){
var result__6734__auto__ = switch__6731__auto__.call(null,state_12882);if(cljs.core.keyword_identical_QMARK_.call(null,result__6734__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6734__auto__;
}
break;
}
}catch (e12921){if((e12921 instanceof Object))
{var ex__6735__auto__ = e12921;var statearr_12922_12951 = state_12882;(statearr_12922_12951[5] = ex__6735__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12882);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12921;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6733__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12952 = state_12882;
state_12882 = G__12952;
continue;
}
} else
{return ret_value__6733__auto__;
}
break;
}
});
state_machine__6732__auto__ = function(state_12882){
switch(arguments.length){
case 0:
return state_machine__6732__auto____0.call(this);
case 1:
return state_machine__6732__auto____1.call(this,state_12882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6732__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6732__auto____0;
state_machine__6732__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6732__auto____1;
return state_machine__6732__auto__;
})()
;})(switch__6731__auto__))
})();var state__6748__auto__ = (function (){var statearr_12923 = f__6747__auto__.call(null);(statearr_12923[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6746__auto___12924);
return statearr_12923;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6748__auto__);
}));
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
cljs.core.async.Pub = (function (){var obj12954 = {};return obj12954;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
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
return (function (topic){var or__3443__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3443__auto__,mults){
return (function (p1__12955_SHARP_){if(cljs.core.truth_(p1__12955_SHARP_.call(null,topic)))
{return p1__12955_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12955_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3443__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13080 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13080 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13081){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13081 = meta13081;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13080.cljs$lang$type = true;
cljs.core.async.t13080.cljs$lang$ctorStr = "cljs.core.async/t13080";
cljs.core.async.t13080.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t13080");
});})(mults,ensure_mult))
;
cljs.core.async.t13080.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13080.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13080.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13080.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13080.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13080.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13080.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13080.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13082){var self__ = this;
var _13082__$1 = this;return self__.meta13081;
});})(mults,ensure_mult))
;
cljs.core.async.t13080.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13082,meta13081__$1){var self__ = this;
var _13082__$1 = this;return (new cljs.core.async.t13080(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13081__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13080 = ((function (mults,ensure_mult){
return (function __GT_t13080(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13081){return (new cljs.core.async.t13080(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13081));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13080(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6746__auto___13204 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6747__auto__ = (function (){var switch__6731__auto__ = (function (state_13156){var state_val_13157 = (state_13156[1]);if((state_val_13157 === 1))
{var state_13156__$1 = state_13156;var statearr_13158_13205 = state_13156__$1;(statearr_13158_13205[2] = null);
(statearr_13158_13205[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13157 === 2))
{var state_13156__$1 = state_13156;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13156__$1,4,ch);
} else
{if((state_val_13157 === 3))
{var inst_13154 = (state_13156[2]);var state_13156__$1 = state_13156;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13156__$1,inst_13154);
} else
{if((state_val_13157 === 4))
{var inst_13085 = (state_13156[7]);var inst_13085__$1 = (state_13156[2]);var inst_13086 = (inst_13085__$1 == null);var state_13156__$1 = (function (){var statearr_13159 = state_13156;(statearr_13159[7] = inst_13085__$1);
return statearr_13159;
})();if(cljs.core.truth_(inst_13086))
{var statearr_13160_13206 = state_13156__$1;(statearr_13160_13206[1] = 5);
} else
{var statearr_13161_13207 = state_13156__$1;(statearr_13161_13207[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13157 === 5))
{var inst_13092 = cljs.core.deref.call(null,mults);var inst_13093 = cljs.core.vals.call(null,inst_13092);var inst_13094 = cljs.core.seq.call(null,inst_13093);var inst_13095 = inst_13094;var inst_13096 = null;var inst_13097 = 0;var inst_13098 = 0;var state_13156__$1 = (function (){var statearr_13162 = state_13156;(statearr_13162[8] = inst_13098);
(statearr_13162[9] = inst_13095);
(statearr_13162[10] = inst_13097);
(statearr_13162[11] = inst_13096);
return statearr_13162;
})();var statearr_13163_13208 = state_13156__$1;(statearr_13163_13208[2] = null);
(statearr_13163_13208[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13157 === 6))
{var inst_13085 = (state_13156[7]);var inst_13133 = (state_13156[12]);var inst_13135 = (state_13156[13]);var inst_13133__$1 = topic_fn.call(null,inst_13085);var inst_13134 = cljs.core.deref.call(null,mults);var inst_13135__$1 = cljs.core.get.call(null,inst_13134,inst_13133__$1);var state_13156__$1 = (function (){var statearr_13164 = state_13156;(statearr_13164[12] = inst_13133__$1);
(statearr_13164[13] = inst_13135__$1);
return statearr_13164;
})();if(cljs.core.truth_(inst_13135__$1))
{var statearr_13165_13209 = state_13156__$1;(statearr_13165_13209[1] = 19);
} else
{var statearr_13166_13210 = state_13156__$1;(statearr_13166_13210[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13157 === 7))
{var inst_13152 = (state_13156[2]);var state_13156__$1 = state_13156;var statearr_13167_13211 = state_13156__$1;(statearr_13167_13211[2] = inst_13152);
(statearr_13167_13211[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13157 === 8))
{var inst_13098 = (state_13156[8]);var inst_13097 = (state_13156[10]);var inst_13100 = (inst_13098 < inst_13097);var inst_13101 = inst_13100;var state_13156__$1 = state_13156;if(cljs.core.truth_(inst_13101))
{var statearr_13171_13212 = state_13156__$1;(statearr_13171_13212[1] = 10);
} else
{var statearr_13172_13213 = state_13156__$1;(statearr_13172_13213[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13157 === 9))
{var inst_13131 = (state_13156[2]);var state_13156__$1 = state_13156;var statearr_13173_13214 = state_13156__$1;(statearr_13173_13214[2] = inst_13131);
(statearr_13173_13214[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13157 === 10))
{var inst_13098 = (state_13156[8]);var inst_13095 = (state_13156[9]);var inst_13097 = (state_13156[10]);var inst_13096 = (state_13156[11]);var inst_13103 = cljs.core._nth.call(null,inst_13096,inst_13098);var inst_13104 = cljs.core.async.muxch_STAR_.call(null,inst_13103);var inst_13105 = cljs.core.async.close_BANG_.call(null,inst_13104);var inst_13106 = (inst_13098 + 1);var tmp13168 = inst_13095;var tmp13169 = inst_13097;var tmp13170 = inst_13096;var inst_13095__$1 = tmp13168;var inst_13096__$1 = tmp13170;var inst_13097__$1 = tmp13169;var inst_13098__$1 = inst_13106;var state_13156__$1 = (function (){var statearr_13174 = state_13156;(statearr_13174[8] = inst_13098__$1);
(statearr_13174[9] = inst_13095__$1);
(statearr_13174[14] = inst_13105);
(statearr_13174[10] = inst_13097__$1);
(statearr_13174[11] = inst_13096__$1);
return statearr_13174;
})();var statearr_13175_13215 = state_13156__$1;(statearr_13175_13215[2] = null);
(statearr_13175_13215[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13157 === 11))
{var inst_13109 = (state_13156[15]);var inst_13095 = (state_13156[9]);var inst_13109__$1 = cljs.core.seq.call(null,inst_13095);var state_13156__$1 = (function (){var statearr_13176 = state_13156;(statearr_13176[15] = inst_13109__$1);
return statearr_13176;
})();if(inst_13109__$1)
{var statearr_13177_13216 = state_13156__$1;(statearr_13177_13216[1] = 13);
} else
{var statearr_13178_13217 = state_13156__$1;(statearr_13178_13217[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13157 === 12))
{var inst_13129 = (state_13156[2]);var state_13156__$1 = state_13156;var statearr_13179_13218 = state_13156__$1;(statearr_13179_13218[2] = inst_13129);
(statearr_13179_13218[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13157 === 13))
{var inst_13109 = (state_13156[15]);var inst_13111 = cljs.core.chunked_seq_QMARK_.call(null,inst_13109);var state_13156__$1 = state_13156;if(inst_13111)
{var statearr_13180_13219 = state_13156__$1;(statearr_13180_13219[1] = 16);
} else
{var statearr_13181_13220 = state_13156__$1;(statearr_13181_13220[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13157 === 14))
{var state_13156__$1 = state_13156;var statearr_13182_13221 = state_13156__$1;(statearr_13182_13221[2] = null);
(statearr_13182_13221[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13157 === 15))
{var inst_13127 = (state_13156[2]);var state_13156__$1 = state_13156;var statearr_13183_13222 = state_13156__$1;(statearr_13183_13222[2] = inst_13127);
(statearr_13183_13222[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13157 === 16))
{var inst_13109 = (state_13156[15]);var inst_13113 = cljs.core.chunk_first.call(null,inst_13109);var inst_13114 = cljs.core.chunk_rest.call(null,inst_13109);var inst_13115 = cljs.core.count.call(null,inst_13113);var inst_13095 = inst_13114;var inst_13096 = inst_13113;var inst_13097 = inst_13115;var inst_13098 = 0;var state_13156__$1 = (function (){var statearr_13184 = state_13156;(statearr_13184[8] = inst_13098);
(statearr_13184[9] = inst_13095);
(statearr_13184[10] = inst_13097);
(statearr_13184[11] = inst_13096);
return statearr_13184;
})();var statearr_13185_13223 = state_13156__$1;(statearr_13185_13223[2] = null);
(statearr_13185_13223[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13157 === 17))
{var inst_13109 = (state_13156[15]);var inst_13118 = cljs.core.first.call(null,inst_13109);var inst_13119 = cljs.core.async.muxch_STAR_.call(null,inst_13118);var inst_13120 = cljs.core.async.close_BANG_.call(null,inst_13119);var inst_13121 = cljs.core.next.call(null,inst_13109);var inst_13095 = inst_13121;var inst_13096 = null;var inst_13097 = 0;var inst_13098 = 0;var state_13156__$1 = (function (){var statearr_13186 = state_13156;(statearr_13186[16] = inst_13120);
(statearr_13186[8] = inst_13098);
(statearr_13186[9] = inst_13095);
(statearr_13186[10] = inst_13097);
(statearr_13186[11] = inst_13096);
return statearr_13186;
})();var statearr_13187_13224 = state_13156__$1;(statearr_13187_13224[2] = null);
(statearr_13187_13224[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13157 === 18))
{var inst_13124 = (state_13156[2]);var state_13156__$1 = state_13156;var statearr_13188_13225 = state_13156__$1;(statearr_13188_13225[2] = inst_13124);
(statearr_13188_13225[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13157 === 19))
{var state_13156__$1 = state_13156;var statearr_13189_13226 = state_13156__$1;(statearr_13189_13226[2] = null);
(statearr_13189_13226[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13157 === 20))
{var state_13156__$1 = state_13156;var statearr_13190_13227 = state_13156__$1;(statearr_13190_13227[2] = null);
(statearr_13190_13227[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13157 === 21))
{var inst_13149 = (state_13156[2]);var state_13156__$1 = (function (){var statearr_13191 = state_13156;(statearr_13191[17] = inst_13149);
return statearr_13191;
})();var statearr_13192_13228 = state_13156__$1;(statearr_13192_13228[2] = null);
(statearr_13192_13228[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13157 === 22))
{var inst_13146 = (state_13156[2]);var state_13156__$1 = state_13156;var statearr_13193_13229 = state_13156__$1;(statearr_13193_13229[2] = inst_13146);
(statearr_13193_13229[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13157 === 23))
{var inst_13133 = (state_13156[12]);var inst_13137 = (state_13156[2]);var inst_13138 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13133);var state_13156__$1 = (function (){var statearr_13194 = state_13156;(statearr_13194[18] = inst_13137);
return statearr_13194;
})();var statearr_13195_13230 = state_13156__$1;(statearr_13195_13230[2] = inst_13138);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13156__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13157 === 24))
{var inst_13085 = (state_13156[7]);var inst_13135 = (state_13156[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13156,23,Object,null,22);var inst_13142 = cljs.core.async.muxch_STAR_.call(null,inst_13135);var state_13156__$1 = state_13156;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13156__$1,25,inst_13142,inst_13085);
} else
{if((state_val_13157 === 25))
{var inst_13144 = (state_13156[2]);var state_13156__$1 = state_13156;var statearr_13196_13231 = state_13156__$1;(statearr_13196_13231[2] = inst_13144);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13156__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__6731__auto__){
return (function() {
var state_machine__6732__auto__ = null;
var state_machine__6732__auto____0 = (function (){var statearr_13200 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13200[0] = state_machine__6732__auto__);
(statearr_13200[1] = 1);
return statearr_13200;
});
var state_machine__6732__auto____1 = (function (state_13156){while(true){
var ret_value__6733__auto__ = (function (){try{while(true){
var result__6734__auto__ = switch__6731__auto__.call(null,state_13156);if(cljs.core.keyword_identical_QMARK_.call(null,result__6734__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6734__auto__;
}
break;
}
}catch (e13201){if((e13201 instanceof Object))
{var ex__6735__auto__ = e13201;var statearr_13202_13232 = state_13156;(statearr_13202_13232[5] = ex__6735__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13156);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13201;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6733__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13233 = state_13156;
state_13156 = G__13233;
continue;
}
} else
{return ret_value__6733__auto__;
}
break;
}
});
state_machine__6732__auto__ = function(state_13156){
switch(arguments.length){
case 0:
return state_machine__6732__auto____0.call(this);
case 1:
return state_machine__6732__auto____1.call(this,state_13156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6732__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6732__auto____0;
state_machine__6732__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6732__auto____1;
return state_machine__6732__auto__;
})()
;})(switch__6731__auto__))
})();var state__6748__auto__ = (function (){var statearr_13203 = f__6747__auto__.call(null);(statearr_13203[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6746__auto___13204);
return statearr_13203;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6748__auto__);
}));
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
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6746__auto___13370 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6747__auto__ = (function (){var switch__6731__auto__ = (function (state_13340){var state_val_13341 = (state_13340[1]);if((state_val_13341 === 1))
{var state_13340__$1 = state_13340;var statearr_13342_13371 = state_13340__$1;(statearr_13342_13371[2] = null);
(statearr_13342_13371[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13341 === 2))
{var inst_13303 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13304 = 0;var state_13340__$1 = (function (){var statearr_13343 = state_13340;(statearr_13343[7] = inst_13304);
(statearr_13343[8] = inst_13303);
return statearr_13343;
})();var statearr_13344_13372 = state_13340__$1;(statearr_13344_13372[2] = null);
(statearr_13344_13372[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13341 === 3))
{var inst_13338 = (state_13340[2]);var state_13340__$1 = state_13340;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13340__$1,inst_13338);
} else
{if((state_val_13341 === 4))
{var inst_13304 = (state_13340[7]);var inst_13306 = (inst_13304 < cnt);var state_13340__$1 = state_13340;if(cljs.core.truth_(inst_13306))
{var statearr_13345_13373 = state_13340__$1;(statearr_13345_13373[1] = 6);
} else
{var statearr_13346_13374 = state_13340__$1;(statearr_13346_13374[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13341 === 5))
{var inst_13324 = (state_13340[2]);var state_13340__$1 = (function (){var statearr_13347 = state_13340;(statearr_13347[9] = inst_13324);
return statearr_13347;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13340__$1,12,dchan);
} else
{if((state_val_13341 === 6))
{var state_13340__$1 = state_13340;var statearr_13348_13375 = state_13340__$1;(statearr_13348_13375[2] = null);
(statearr_13348_13375[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13341 === 7))
{var state_13340__$1 = state_13340;var statearr_13349_13376 = state_13340__$1;(statearr_13349_13376[2] = null);
(statearr_13349_13376[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13341 === 8))
{var inst_13322 = (state_13340[2]);var state_13340__$1 = state_13340;var statearr_13350_13377 = state_13340__$1;(statearr_13350_13377[2] = inst_13322);
(statearr_13350_13377[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13341 === 9))
{var inst_13304 = (state_13340[7]);var inst_13317 = (state_13340[2]);var inst_13318 = (inst_13304 + 1);var inst_13304__$1 = inst_13318;var state_13340__$1 = (function (){var statearr_13351 = state_13340;(statearr_13351[10] = inst_13317);
(statearr_13351[7] = inst_13304__$1);
return statearr_13351;
})();var statearr_13352_13378 = state_13340__$1;(statearr_13352_13378[2] = null);
(statearr_13352_13378[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13341 === 10))
{var inst_13308 = (state_13340[2]);var inst_13309 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13340__$1 = (function (){var statearr_13353 = state_13340;(statearr_13353[11] = inst_13308);
return statearr_13353;
})();var statearr_13354_13379 = state_13340__$1;(statearr_13354_13379[2] = inst_13309);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13340__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13341 === 11))
{var inst_13304 = (state_13340[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13340,10,Object,null,9);var inst_13313 = chs__$1.call(null,inst_13304);var inst_13314 = done.call(null,inst_13304);var inst_13315 = cljs.core.async.take_BANG_.call(null,inst_13313,inst_13314);var state_13340__$1 = state_13340;var statearr_13355_13380 = state_13340__$1;(statearr_13355_13380[2] = inst_13315);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13340__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13341 === 12))
{var inst_13326 = (state_13340[12]);var inst_13326__$1 = (state_13340[2]);var inst_13327 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13326__$1);var state_13340__$1 = (function (){var statearr_13356 = state_13340;(statearr_13356[12] = inst_13326__$1);
return statearr_13356;
})();if(cljs.core.truth_(inst_13327))
{var statearr_13357_13381 = state_13340__$1;(statearr_13357_13381[1] = 13);
} else
{var statearr_13358_13382 = state_13340__$1;(statearr_13358_13382[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13341 === 13))
{var inst_13329 = cljs.core.async.close_BANG_.call(null,out);var state_13340__$1 = state_13340;var statearr_13359_13383 = state_13340__$1;(statearr_13359_13383[2] = inst_13329);
(statearr_13359_13383[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13341 === 14))
{var inst_13326 = (state_13340[12]);var inst_13331 = cljs.core.apply.call(null,f,inst_13326);var state_13340__$1 = state_13340;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13340__$1,16,out,inst_13331);
} else
{if((state_val_13341 === 15))
{var inst_13336 = (state_13340[2]);var state_13340__$1 = state_13340;var statearr_13360_13384 = state_13340__$1;(statearr_13360_13384[2] = inst_13336);
(statearr_13360_13384[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13341 === 16))
{var inst_13333 = (state_13340[2]);var state_13340__$1 = (function (){var statearr_13361 = state_13340;(statearr_13361[13] = inst_13333);
return statearr_13361;
})();var statearr_13362_13385 = state_13340__$1;(statearr_13362_13385[2] = null);
(statearr_13362_13385[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__6731__auto__){
return (function() {
var state_machine__6732__auto__ = null;
var state_machine__6732__auto____0 = (function (){var statearr_13366 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13366[0] = state_machine__6732__auto__);
(statearr_13366[1] = 1);
return statearr_13366;
});
var state_machine__6732__auto____1 = (function (state_13340){while(true){
var ret_value__6733__auto__ = (function (){try{while(true){
var result__6734__auto__ = switch__6731__auto__.call(null,state_13340);if(cljs.core.keyword_identical_QMARK_.call(null,result__6734__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6734__auto__;
}
break;
}
}catch (e13367){if((e13367 instanceof Object))
{var ex__6735__auto__ = e13367;var statearr_13368_13386 = state_13340;(statearr_13368_13386[5] = ex__6735__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13340);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13367;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6733__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13387 = state_13340;
state_13340 = G__13387;
continue;
}
} else
{return ret_value__6733__auto__;
}
break;
}
});
state_machine__6732__auto__ = function(state_13340){
switch(arguments.length){
case 0:
return state_machine__6732__auto____0.call(this);
case 1:
return state_machine__6732__auto____1.call(this,state_13340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6732__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6732__auto____0;
state_machine__6732__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6732__auto____1;
return state_machine__6732__auto__;
})()
;})(switch__6731__auto__))
})();var state__6748__auto__ = (function (){var statearr_13369 = f__6747__auto__.call(null);(statearr_13369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6746__auto___13370);
return statearr_13369;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6748__auto__);
}));
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6746__auto___13495 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6747__auto__ = (function (){var switch__6731__auto__ = (function (state_13471){var state_val_13472 = (state_13471[1]);if((state_val_13472 === 1))
{var inst_13442 = cljs.core.vec.call(null,chs);var inst_13443 = inst_13442;var state_13471__$1 = (function (){var statearr_13473 = state_13471;(statearr_13473[7] = inst_13443);
return statearr_13473;
})();var statearr_13474_13496 = state_13471__$1;(statearr_13474_13496[2] = null);
(statearr_13474_13496[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13472 === 2))
{var inst_13443 = (state_13471[7]);var inst_13445 = cljs.core.count.call(null,inst_13443);var inst_13446 = (inst_13445 > 0);var state_13471__$1 = state_13471;if(cljs.core.truth_(inst_13446))
{var statearr_13475_13497 = state_13471__$1;(statearr_13475_13497[1] = 4);
} else
{var statearr_13476_13498 = state_13471__$1;(statearr_13476_13498[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13472 === 3))
{var inst_13469 = (state_13471[2]);var state_13471__$1 = state_13471;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13471__$1,inst_13469);
} else
{if((state_val_13472 === 4))
{var inst_13443 = (state_13471[7]);var state_13471__$1 = state_13471;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13471__$1,7,inst_13443);
} else
{if((state_val_13472 === 5))
{var inst_13465 = cljs.core.async.close_BANG_.call(null,out);var state_13471__$1 = state_13471;var statearr_13477_13499 = state_13471__$1;(statearr_13477_13499[2] = inst_13465);
(statearr_13477_13499[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13472 === 6))
{var inst_13467 = (state_13471[2]);var state_13471__$1 = state_13471;var statearr_13478_13500 = state_13471__$1;(statearr_13478_13500[2] = inst_13467);
(statearr_13478_13500[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13472 === 7))
{var inst_13450 = (state_13471[8]);var inst_13451 = (state_13471[9]);var inst_13450__$1 = (state_13471[2]);var inst_13451__$1 = cljs.core.nth.call(null,inst_13450__$1,0,null);var inst_13452 = cljs.core.nth.call(null,inst_13450__$1,1,null);var inst_13453 = (inst_13451__$1 == null);var state_13471__$1 = (function (){var statearr_13479 = state_13471;(statearr_13479[10] = inst_13452);
(statearr_13479[8] = inst_13450__$1);
(statearr_13479[9] = inst_13451__$1);
return statearr_13479;
})();if(cljs.core.truth_(inst_13453))
{var statearr_13480_13501 = state_13471__$1;(statearr_13480_13501[1] = 8);
} else
{var statearr_13481_13502 = state_13471__$1;(statearr_13481_13502[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13472 === 8))
{var inst_13443 = (state_13471[7]);var inst_13452 = (state_13471[10]);var inst_13450 = (state_13471[8]);var inst_13451 = (state_13471[9]);var inst_13455 = (function (){var c = inst_13452;var v = inst_13451;var vec__13448 = inst_13450;var cs = inst_13443;return ((function (c,v,vec__13448,cs,inst_13443,inst_13452,inst_13450,inst_13451,state_val_13472){
return (function (p1__13388_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13388_SHARP_);
});
;})(c,v,vec__13448,cs,inst_13443,inst_13452,inst_13450,inst_13451,state_val_13472))
})();var inst_13456 = cljs.core.filterv.call(null,inst_13455,inst_13443);var inst_13443__$1 = inst_13456;var state_13471__$1 = (function (){var statearr_13482 = state_13471;(statearr_13482[7] = inst_13443__$1);
return statearr_13482;
})();var statearr_13483_13503 = state_13471__$1;(statearr_13483_13503[2] = null);
(statearr_13483_13503[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13472 === 9))
{var inst_13451 = (state_13471[9]);var state_13471__$1 = state_13471;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13471__$1,11,out,inst_13451);
} else
{if((state_val_13472 === 10))
{var inst_13463 = (state_13471[2]);var state_13471__$1 = state_13471;var statearr_13485_13504 = state_13471__$1;(statearr_13485_13504[2] = inst_13463);
(statearr_13485_13504[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13472 === 11))
{var inst_13443 = (state_13471[7]);var inst_13460 = (state_13471[2]);var tmp13484 = inst_13443;var inst_13443__$1 = tmp13484;var state_13471__$1 = (function (){var statearr_13486 = state_13471;(statearr_13486[7] = inst_13443__$1);
(statearr_13486[11] = inst_13460);
return statearr_13486;
})();var statearr_13487_13505 = state_13471__$1;(statearr_13487_13505[2] = null);
(statearr_13487_13505[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__6731__auto__){
return (function() {
var state_machine__6732__auto__ = null;
var state_machine__6732__auto____0 = (function (){var statearr_13491 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13491[0] = state_machine__6732__auto__);
(statearr_13491[1] = 1);
return statearr_13491;
});
var state_machine__6732__auto____1 = (function (state_13471){while(true){
var ret_value__6733__auto__ = (function (){try{while(true){
var result__6734__auto__ = switch__6731__auto__.call(null,state_13471);if(cljs.core.keyword_identical_QMARK_.call(null,result__6734__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6734__auto__;
}
break;
}
}catch (e13492){if((e13492 instanceof Object))
{var ex__6735__auto__ = e13492;var statearr_13493_13506 = state_13471;(statearr_13493_13506[5] = ex__6735__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13471);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13492;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6733__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13507 = state_13471;
state_13471 = G__13507;
continue;
}
} else
{return ret_value__6733__auto__;
}
break;
}
});
state_machine__6732__auto__ = function(state_13471){
switch(arguments.length){
case 0:
return state_machine__6732__auto____0.call(this);
case 1:
return state_machine__6732__auto____1.call(this,state_13471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6732__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6732__auto____0;
state_machine__6732__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6732__auto____1;
return state_machine__6732__auto__;
})()
;})(switch__6731__auto__))
})();var state__6748__auto__ = (function (){var statearr_13494 = f__6747__auto__.call(null);(statearr_13494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6746__auto___13495);
return statearr_13494;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6748__auto__);
}));
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6746__auto___13600 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6747__auto__ = (function (){var switch__6731__auto__ = (function (state_13577){var state_val_13578 = (state_13577[1]);if((state_val_13578 === 1))
{var inst_13554 = 0;var state_13577__$1 = (function (){var statearr_13579 = state_13577;(statearr_13579[7] = inst_13554);
return statearr_13579;
})();var statearr_13580_13601 = state_13577__$1;(statearr_13580_13601[2] = null);
(statearr_13580_13601[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13578 === 2))
{var inst_13554 = (state_13577[7]);var inst_13556 = (inst_13554 < n);var state_13577__$1 = state_13577;if(cljs.core.truth_(inst_13556))
{var statearr_13581_13602 = state_13577__$1;(statearr_13581_13602[1] = 4);
} else
{var statearr_13582_13603 = state_13577__$1;(statearr_13582_13603[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13578 === 3))
{var inst_13574 = (state_13577[2]);var inst_13575 = cljs.core.async.close_BANG_.call(null,out);var state_13577__$1 = (function (){var statearr_13583 = state_13577;(statearr_13583[8] = inst_13574);
return statearr_13583;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13577__$1,inst_13575);
} else
{if((state_val_13578 === 4))
{var state_13577__$1 = state_13577;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13577__$1,7,ch);
} else
{if((state_val_13578 === 5))
{var state_13577__$1 = state_13577;var statearr_13584_13604 = state_13577__$1;(statearr_13584_13604[2] = null);
(statearr_13584_13604[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13578 === 6))
{var inst_13572 = (state_13577[2]);var state_13577__$1 = state_13577;var statearr_13585_13605 = state_13577__$1;(statearr_13585_13605[2] = inst_13572);
(statearr_13585_13605[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13578 === 7))
{var inst_13559 = (state_13577[9]);var inst_13559__$1 = (state_13577[2]);var inst_13560 = (inst_13559__$1 == null);var inst_13561 = cljs.core.not.call(null,inst_13560);var state_13577__$1 = (function (){var statearr_13586 = state_13577;(statearr_13586[9] = inst_13559__$1);
return statearr_13586;
})();if(inst_13561)
{var statearr_13587_13606 = state_13577__$1;(statearr_13587_13606[1] = 8);
} else
{var statearr_13588_13607 = state_13577__$1;(statearr_13588_13607[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13578 === 8))
{var inst_13559 = (state_13577[9]);var state_13577__$1 = state_13577;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13577__$1,11,out,inst_13559);
} else
{if((state_val_13578 === 9))
{var state_13577__$1 = state_13577;var statearr_13589_13608 = state_13577__$1;(statearr_13589_13608[2] = null);
(statearr_13589_13608[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13578 === 10))
{var inst_13569 = (state_13577[2]);var state_13577__$1 = state_13577;var statearr_13590_13609 = state_13577__$1;(statearr_13590_13609[2] = inst_13569);
(statearr_13590_13609[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13578 === 11))
{var inst_13554 = (state_13577[7]);var inst_13564 = (state_13577[2]);var inst_13565 = (inst_13554 + 1);var inst_13554__$1 = inst_13565;var state_13577__$1 = (function (){var statearr_13591 = state_13577;(statearr_13591[10] = inst_13564);
(statearr_13591[7] = inst_13554__$1);
return statearr_13591;
})();var statearr_13592_13610 = state_13577__$1;(statearr_13592_13610[2] = null);
(statearr_13592_13610[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__6731__auto__){
return (function() {
var state_machine__6732__auto__ = null;
var state_machine__6732__auto____0 = (function (){var statearr_13596 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13596[0] = state_machine__6732__auto__);
(statearr_13596[1] = 1);
return statearr_13596;
});
var state_machine__6732__auto____1 = (function (state_13577){while(true){
var ret_value__6733__auto__ = (function (){try{while(true){
var result__6734__auto__ = switch__6731__auto__.call(null,state_13577);if(cljs.core.keyword_identical_QMARK_.call(null,result__6734__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6734__auto__;
}
break;
}
}catch (e13597){if((e13597 instanceof Object))
{var ex__6735__auto__ = e13597;var statearr_13598_13611 = state_13577;(statearr_13598_13611[5] = ex__6735__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13577);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13597;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6733__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13612 = state_13577;
state_13577 = G__13612;
continue;
}
} else
{return ret_value__6733__auto__;
}
break;
}
});
state_machine__6732__auto__ = function(state_13577){
switch(arguments.length){
case 0:
return state_machine__6732__auto____0.call(this);
case 1:
return state_machine__6732__auto____1.call(this,state_13577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6732__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6732__auto____0;
state_machine__6732__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6732__auto____1;
return state_machine__6732__auto__;
})()
;})(switch__6731__auto__))
})();var state__6748__auto__ = (function (){var statearr_13599 = f__6747__auto__.call(null);(statearr_13599[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6746__auto___13600);
return statearr_13599;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6748__auto__);
}));
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6746__auto___13709 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6747__auto__ = (function (){var switch__6731__auto__ = (function (state_13684){var state_val_13685 = (state_13684[1]);if((state_val_13685 === 1))
{var inst_13661 = null;var state_13684__$1 = (function (){var statearr_13686 = state_13684;(statearr_13686[7] = inst_13661);
return statearr_13686;
})();var statearr_13687_13710 = state_13684__$1;(statearr_13687_13710[2] = null);
(statearr_13687_13710[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13685 === 2))
{var state_13684__$1 = state_13684;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13684__$1,4,ch);
} else
{if((state_val_13685 === 3))
{var inst_13681 = (state_13684[2]);var inst_13682 = cljs.core.async.close_BANG_.call(null,out);var state_13684__$1 = (function (){var statearr_13688 = state_13684;(statearr_13688[8] = inst_13681);
return statearr_13688;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13684__$1,inst_13682);
} else
{if((state_val_13685 === 4))
{var inst_13664 = (state_13684[9]);var inst_13664__$1 = (state_13684[2]);var inst_13665 = (inst_13664__$1 == null);var inst_13666 = cljs.core.not.call(null,inst_13665);var state_13684__$1 = (function (){var statearr_13689 = state_13684;(statearr_13689[9] = inst_13664__$1);
return statearr_13689;
})();if(inst_13666)
{var statearr_13690_13711 = state_13684__$1;(statearr_13690_13711[1] = 5);
} else
{var statearr_13691_13712 = state_13684__$1;(statearr_13691_13712[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13685 === 5))
{var inst_13664 = (state_13684[9]);var inst_13661 = (state_13684[7]);var inst_13668 = cljs.core._EQ_.call(null,inst_13664,inst_13661);var state_13684__$1 = state_13684;if(inst_13668)
{var statearr_13692_13713 = state_13684__$1;(statearr_13692_13713[1] = 8);
} else
{var statearr_13693_13714 = state_13684__$1;(statearr_13693_13714[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13685 === 6))
{var state_13684__$1 = state_13684;var statearr_13695_13715 = state_13684__$1;(statearr_13695_13715[2] = null);
(statearr_13695_13715[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13685 === 7))
{var inst_13679 = (state_13684[2]);var state_13684__$1 = state_13684;var statearr_13696_13716 = state_13684__$1;(statearr_13696_13716[2] = inst_13679);
(statearr_13696_13716[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13685 === 8))
{var inst_13661 = (state_13684[7]);var tmp13694 = inst_13661;var inst_13661__$1 = tmp13694;var state_13684__$1 = (function (){var statearr_13697 = state_13684;(statearr_13697[7] = inst_13661__$1);
return statearr_13697;
})();var statearr_13698_13717 = state_13684__$1;(statearr_13698_13717[2] = null);
(statearr_13698_13717[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13685 === 9))
{var inst_13664 = (state_13684[9]);var state_13684__$1 = state_13684;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13684__$1,11,out,inst_13664);
} else
{if((state_val_13685 === 10))
{var inst_13676 = (state_13684[2]);var state_13684__$1 = state_13684;var statearr_13699_13718 = state_13684__$1;(statearr_13699_13718[2] = inst_13676);
(statearr_13699_13718[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13685 === 11))
{var inst_13664 = (state_13684[9]);var inst_13673 = (state_13684[2]);var inst_13661 = inst_13664;var state_13684__$1 = (function (){var statearr_13700 = state_13684;(statearr_13700[10] = inst_13673);
(statearr_13700[7] = inst_13661);
return statearr_13700;
})();var statearr_13701_13719 = state_13684__$1;(statearr_13701_13719[2] = null);
(statearr_13701_13719[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__6731__auto__){
return (function() {
var state_machine__6732__auto__ = null;
var state_machine__6732__auto____0 = (function (){var statearr_13705 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13705[0] = state_machine__6732__auto__);
(statearr_13705[1] = 1);
return statearr_13705;
});
var state_machine__6732__auto____1 = (function (state_13684){while(true){
var ret_value__6733__auto__ = (function (){try{while(true){
var result__6734__auto__ = switch__6731__auto__.call(null,state_13684);if(cljs.core.keyword_identical_QMARK_.call(null,result__6734__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6734__auto__;
}
break;
}
}catch (e13706){if((e13706 instanceof Object))
{var ex__6735__auto__ = e13706;var statearr_13707_13720 = state_13684;(statearr_13707_13720[5] = ex__6735__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13684);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13706;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6733__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13721 = state_13684;
state_13684 = G__13721;
continue;
}
} else
{return ret_value__6733__auto__;
}
break;
}
});
state_machine__6732__auto__ = function(state_13684){
switch(arguments.length){
case 0:
return state_machine__6732__auto____0.call(this);
case 1:
return state_machine__6732__auto____1.call(this,state_13684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6732__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6732__auto____0;
state_machine__6732__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6732__auto____1;
return state_machine__6732__auto__;
})()
;})(switch__6731__auto__))
})();var state__6748__auto__ = (function (){var statearr_13708 = f__6747__auto__.call(null);(statearr_13708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6746__auto___13709);
return statearr_13708;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6748__auto__);
}));
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6746__auto___13856 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6747__auto__ = (function (){var switch__6731__auto__ = (function (state_13826){var state_val_13827 = (state_13826[1]);if((state_val_13827 === 1))
{var inst_13789 = (new Array(n));var inst_13790 = inst_13789;var inst_13791 = 0;var state_13826__$1 = (function (){var statearr_13828 = state_13826;(statearr_13828[7] = inst_13791);
(statearr_13828[8] = inst_13790);
return statearr_13828;
})();var statearr_13829_13857 = state_13826__$1;(statearr_13829_13857[2] = null);
(statearr_13829_13857[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13827 === 2))
{var state_13826__$1 = state_13826;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13826__$1,4,ch);
} else
{if((state_val_13827 === 3))
{var inst_13824 = (state_13826[2]);var state_13826__$1 = state_13826;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13826__$1,inst_13824);
} else
{if((state_val_13827 === 4))
{var inst_13794 = (state_13826[9]);var inst_13794__$1 = (state_13826[2]);var inst_13795 = (inst_13794__$1 == null);var inst_13796 = cljs.core.not.call(null,inst_13795);var state_13826__$1 = (function (){var statearr_13830 = state_13826;(statearr_13830[9] = inst_13794__$1);
return statearr_13830;
})();if(inst_13796)
{var statearr_13831_13858 = state_13826__$1;(statearr_13831_13858[1] = 5);
} else
{var statearr_13832_13859 = state_13826__$1;(statearr_13832_13859[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13827 === 5))
{var inst_13794 = (state_13826[9]);var inst_13791 = (state_13826[7]);var inst_13799 = (state_13826[10]);var inst_13790 = (state_13826[8]);var inst_13798 = (inst_13790[inst_13791] = inst_13794);var inst_13799__$1 = (inst_13791 + 1);var inst_13800 = (inst_13799__$1 < n);var state_13826__$1 = (function (){var statearr_13833 = state_13826;(statearr_13833[10] = inst_13799__$1);
(statearr_13833[11] = inst_13798);
return statearr_13833;
})();if(cljs.core.truth_(inst_13800))
{var statearr_13834_13860 = state_13826__$1;(statearr_13834_13860[1] = 8);
} else
{var statearr_13835_13861 = state_13826__$1;(statearr_13835_13861[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13827 === 6))
{var inst_13791 = (state_13826[7]);var inst_13812 = (inst_13791 > 0);var state_13826__$1 = state_13826;if(cljs.core.truth_(inst_13812))
{var statearr_13837_13862 = state_13826__$1;(statearr_13837_13862[1] = 12);
} else
{var statearr_13838_13863 = state_13826__$1;(statearr_13838_13863[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13827 === 7))
{var inst_13822 = (state_13826[2]);var state_13826__$1 = state_13826;var statearr_13839_13864 = state_13826__$1;(statearr_13839_13864[2] = inst_13822);
(statearr_13839_13864[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13827 === 8))
{var inst_13799 = (state_13826[10]);var inst_13790 = (state_13826[8]);var tmp13836 = inst_13790;var inst_13790__$1 = tmp13836;var inst_13791 = inst_13799;var state_13826__$1 = (function (){var statearr_13840 = state_13826;(statearr_13840[7] = inst_13791);
(statearr_13840[8] = inst_13790__$1);
return statearr_13840;
})();var statearr_13841_13865 = state_13826__$1;(statearr_13841_13865[2] = null);
(statearr_13841_13865[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13827 === 9))
{var inst_13790 = (state_13826[8]);var inst_13804 = cljs.core.vec.call(null,inst_13790);var state_13826__$1 = state_13826;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13826__$1,11,out,inst_13804);
} else
{if((state_val_13827 === 10))
{var inst_13810 = (state_13826[2]);var state_13826__$1 = state_13826;var statearr_13842_13866 = state_13826__$1;(statearr_13842_13866[2] = inst_13810);
(statearr_13842_13866[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13827 === 11))
{var inst_13806 = (state_13826[2]);var inst_13807 = (new Array(n));var inst_13790 = inst_13807;var inst_13791 = 0;var state_13826__$1 = (function (){var statearr_13843 = state_13826;(statearr_13843[12] = inst_13806);
(statearr_13843[7] = inst_13791);
(statearr_13843[8] = inst_13790);
return statearr_13843;
})();var statearr_13844_13867 = state_13826__$1;(statearr_13844_13867[2] = null);
(statearr_13844_13867[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13827 === 12))
{var inst_13790 = (state_13826[8]);var inst_13814 = cljs.core.vec.call(null,inst_13790);var state_13826__$1 = state_13826;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13826__$1,15,out,inst_13814);
} else
{if((state_val_13827 === 13))
{var state_13826__$1 = state_13826;var statearr_13845_13868 = state_13826__$1;(statearr_13845_13868[2] = null);
(statearr_13845_13868[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13827 === 14))
{var inst_13819 = (state_13826[2]);var inst_13820 = cljs.core.async.close_BANG_.call(null,out);var state_13826__$1 = (function (){var statearr_13846 = state_13826;(statearr_13846[13] = inst_13819);
return statearr_13846;
})();var statearr_13847_13869 = state_13826__$1;(statearr_13847_13869[2] = inst_13820);
(statearr_13847_13869[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13827 === 15))
{var inst_13816 = (state_13826[2]);var state_13826__$1 = state_13826;var statearr_13848_13870 = state_13826__$1;(statearr_13848_13870[2] = inst_13816);
(statearr_13848_13870[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__6731__auto__){
return (function() {
var state_machine__6732__auto__ = null;
var state_machine__6732__auto____0 = (function (){var statearr_13852 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13852[0] = state_machine__6732__auto__);
(statearr_13852[1] = 1);
return statearr_13852;
});
var state_machine__6732__auto____1 = (function (state_13826){while(true){
var ret_value__6733__auto__ = (function (){try{while(true){
var result__6734__auto__ = switch__6731__auto__.call(null,state_13826);if(cljs.core.keyword_identical_QMARK_.call(null,result__6734__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6734__auto__;
}
break;
}
}catch (e13853){if((e13853 instanceof Object))
{var ex__6735__auto__ = e13853;var statearr_13854_13871 = state_13826;(statearr_13854_13871[5] = ex__6735__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13826);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13853;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6733__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13872 = state_13826;
state_13826 = G__13872;
continue;
}
} else
{return ret_value__6733__auto__;
}
break;
}
});
state_machine__6732__auto__ = function(state_13826){
switch(arguments.length){
case 0:
return state_machine__6732__auto____0.call(this);
case 1:
return state_machine__6732__auto____1.call(this,state_13826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6732__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6732__auto____0;
state_machine__6732__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6732__auto____1;
return state_machine__6732__auto__;
})()
;})(switch__6731__auto__))
})();var state__6748__auto__ = (function (){var statearr_13855 = f__6747__auto__.call(null);(statearr_13855[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6746__auto___13856);
return statearr_13855;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6748__auto__);
}));
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6746__auto___14015 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6747__auto__ = (function (){var switch__6731__auto__ = (function (state_13985){var state_val_13986 = (state_13985[1]);if((state_val_13986 === 1))
{var inst_13944 = [];var inst_13945 = inst_13944;var inst_13946 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_13985__$1 = (function (){var statearr_13987 = state_13985;(statearr_13987[7] = inst_13945);
(statearr_13987[8] = inst_13946);
return statearr_13987;
})();var statearr_13988_14016 = state_13985__$1;(statearr_13988_14016[2] = null);
(statearr_13988_14016[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13986 === 2))
{var state_13985__$1 = state_13985;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13985__$1,4,ch);
} else
{if((state_val_13986 === 3))
{var inst_13983 = (state_13985[2]);var state_13985__$1 = state_13985;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13985__$1,inst_13983);
} else
{if((state_val_13986 === 4))
{var inst_13949 = (state_13985[9]);var inst_13949__$1 = (state_13985[2]);var inst_13950 = (inst_13949__$1 == null);var inst_13951 = cljs.core.not.call(null,inst_13950);var state_13985__$1 = (function (){var statearr_13989 = state_13985;(statearr_13989[9] = inst_13949__$1);
return statearr_13989;
})();if(inst_13951)
{var statearr_13990_14017 = state_13985__$1;(statearr_13990_14017[1] = 5);
} else
{var statearr_13991_14018 = state_13985__$1;(statearr_13991_14018[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13986 === 5))
{var inst_13953 = (state_13985[10]);var inst_13946 = (state_13985[8]);var inst_13949 = (state_13985[9]);var inst_13953__$1 = f.call(null,inst_13949);var inst_13954 = cljs.core._EQ_.call(null,inst_13953__$1,inst_13946);var inst_13955 = cljs.core.keyword_identical_QMARK_.call(null,inst_13946,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_13956 = (inst_13954) || (inst_13955);var state_13985__$1 = (function (){var statearr_13992 = state_13985;(statearr_13992[10] = inst_13953__$1);
return statearr_13992;
})();if(cljs.core.truth_(inst_13956))
{var statearr_13993_14019 = state_13985__$1;(statearr_13993_14019[1] = 8);
} else
{var statearr_13994_14020 = state_13985__$1;(statearr_13994_14020[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13986 === 6))
{var inst_13945 = (state_13985[7]);var inst_13970 = inst_13945.length;var inst_13971 = (inst_13970 > 0);var state_13985__$1 = state_13985;if(cljs.core.truth_(inst_13971))
{var statearr_13996_14021 = state_13985__$1;(statearr_13996_14021[1] = 12);
} else
{var statearr_13997_14022 = state_13985__$1;(statearr_13997_14022[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13986 === 7))
{var inst_13981 = (state_13985[2]);var state_13985__$1 = state_13985;var statearr_13998_14023 = state_13985__$1;(statearr_13998_14023[2] = inst_13981);
(statearr_13998_14023[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13986 === 8))
{var inst_13953 = (state_13985[10]);var inst_13945 = (state_13985[7]);var inst_13949 = (state_13985[9]);var inst_13958 = inst_13945.push(inst_13949);var tmp13995 = inst_13945;var inst_13945__$1 = tmp13995;var inst_13946 = inst_13953;var state_13985__$1 = (function (){var statearr_13999 = state_13985;(statearr_13999[7] = inst_13945__$1);
(statearr_13999[8] = inst_13946);
(statearr_13999[11] = inst_13958);
return statearr_13999;
})();var statearr_14000_14024 = state_13985__$1;(statearr_14000_14024[2] = null);
(statearr_14000_14024[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13986 === 9))
{var inst_13945 = (state_13985[7]);var inst_13961 = cljs.core.vec.call(null,inst_13945);var state_13985__$1 = state_13985;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13985__$1,11,out,inst_13961);
} else
{if((state_val_13986 === 10))
{var inst_13968 = (state_13985[2]);var state_13985__$1 = state_13985;var statearr_14001_14025 = state_13985__$1;(statearr_14001_14025[2] = inst_13968);
(statearr_14001_14025[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13986 === 11))
{var inst_13953 = (state_13985[10]);var inst_13949 = (state_13985[9]);var inst_13963 = (state_13985[2]);var inst_13964 = [];var inst_13965 = inst_13964.push(inst_13949);var inst_13945 = inst_13964;var inst_13946 = inst_13953;var state_13985__$1 = (function (){var statearr_14002 = state_13985;(statearr_14002[12] = inst_13963);
(statearr_14002[7] = inst_13945);
(statearr_14002[8] = inst_13946);
(statearr_14002[13] = inst_13965);
return statearr_14002;
})();var statearr_14003_14026 = state_13985__$1;(statearr_14003_14026[2] = null);
(statearr_14003_14026[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13986 === 12))
{var inst_13945 = (state_13985[7]);var inst_13973 = cljs.core.vec.call(null,inst_13945);var state_13985__$1 = state_13985;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13985__$1,15,out,inst_13973);
} else
{if((state_val_13986 === 13))
{var state_13985__$1 = state_13985;var statearr_14004_14027 = state_13985__$1;(statearr_14004_14027[2] = null);
(statearr_14004_14027[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13986 === 14))
{var inst_13978 = (state_13985[2]);var inst_13979 = cljs.core.async.close_BANG_.call(null,out);var state_13985__$1 = (function (){var statearr_14005 = state_13985;(statearr_14005[14] = inst_13978);
return statearr_14005;
})();var statearr_14006_14028 = state_13985__$1;(statearr_14006_14028[2] = inst_13979);
(statearr_14006_14028[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13986 === 15))
{var inst_13975 = (state_13985[2]);var state_13985__$1 = state_13985;var statearr_14007_14029 = state_13985__$1;(statearr_14007_14029[2] = inst_13975);
(statearr_14007_14029[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__6731__auto__){
return (function() {
var state_machine__6732__auto__ = null;
var state_machine__6732__auto____0 = (function (){var statearr_14011 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14011[0] = state_machine__6732__auto__);
(statearr_14011[1] = 1);
return statearr_14011;
});
var state_machine__6732__auto____1 = (function (state_13985){while(true){
var ret_value__6733__auto__ = (function (){try{while(true){
var result__6734__auto__ = switch__6731__auto__.call(null,state_13985);if(cljs.core.keyword_identical_QMARK_.call(null,result__6734__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6734__auto__;
}
break;
}
}catch (e14012){if((e14012 instanceof Object))
{var ex__6735__auto__ = e14012;var statearr_14013_14030 = state_13985;(statearr_14013_14030[5] = ex__6735__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13985);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14012;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6733__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14031 = state_13985;
state_13985 = G__14031;
continue;
}
} else
{return ret_value__6733__auto__;
}
break;
}
});
state_machine__6732__auto__ = function(state_13985){
switch(arguments.length){
case 0:
return state_machine__6732__auto____0.call(this);
case 1:
return state_machine__6732__auto____1.call(this,state_13985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6732__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6732__auto____0;
state_machine__6732__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6732__auto____1;
return state_machine__6732__auto__;
})()
;})(switch__6731__auto__))
})();var state__6748__auto__ = (function (){var statearr_14014 = f__6747__auto__.call(null);(statearr_14014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6746__auto___14015);
return statearr_14014;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6748__auto__);
}));
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