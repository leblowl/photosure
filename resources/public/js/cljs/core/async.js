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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11551 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11551 = (function (f,fn_handler,meta11552){
this.f = f;
this.fn_handler = fn_handler;
this.meta11552 = meta11552;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11551.cljs$lang$type = true;
cljs.core.async.t11551.cljs$lang$ctorStr = "cljs.core.async/t11551";
cljs.core.async.t11551.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11551");
});
cljs.core.async.t11551.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11551.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11551.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11551.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11553){var self__ = this;
var _11553__$1 = this;return self__.meta11552;
});
cljs.core.async.t11551.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11553,meta11552__$1){var self__ = this;
var _11553__$1 = this;return (new cljs.core.async.t11551(self__.f,self__.fn_handler,meta11552__$1));
});
cljs.core.async.__GT_t11551 = (function __GT_t11551(f__$1,fn_handler__$1,meta11552){return (new cljs.core.async.t11551(f__$1,fn_handler__$1,meta11552));
});
}
return (new cljs.core.async.t11551(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11555 = buff;if(G__11555)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__11555.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11555.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11555);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11555);
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
{var val_11556 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11556);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_11556);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4291__auto___11557 = n;var x_11558 = 0;while(true){
if((x_11558 < n__4291__auto___11557))
{(a[x_11558] = 0);
{
var G__11559 = (x_11558 + 1);
x_11558 = G__11559;
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
var G__11560 = (i + 1);
i = G__11560;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11564 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11564 = (function (flag,alt_flag,meta11565){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11565 = meta11565;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11564.cljs$lang$type = true;
cljs.core.async.t11564.cljs$lang$ctorStr = "cljs.core.async/t11564";
cljs.core.async.t11564.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11564");
});
cljs.core.async.t11564.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11564.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t11564.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t11564.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11566){var self__ = this;
var _11566__$1 = this;return self__.meta11565;
});
cljs.core.async.t11564.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11566,meta11565__$1){var self__ = this;
var _11566__$1 = this;return (new cljs.core.async.t11564(self__.flag,self__.alt_flag,meta11565__$1));
});
cljs.core.async.__GT_t11564 = (function __GT_t11564(flag__$1,alt_flag__$1,meta11565){return (new cljs.core.async.t11564(flag__$1,alt_flag__$1,meta11565));
});
}
return (new cljs.core.async.t11564(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11570 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11570 = (function (cb,flag,alt_handler,meta11571){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11571 = meta11571;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11570.cljs$lang$type = true;
cljs.core.async.t11570.cljs$lang$ctorStr = "cljs.core.async/t11570";
cljs.core.async.t11570.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11570");
});
cljs.core.async.t11570.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11570.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11570.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11570.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11572){var self__ = this;
var _11572__$1 = this;return self__.meta11571;
});
cljs.core.async.t11570.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11572,meta11571__$1){var self__ = this;
var _11572__$1 = this;return (new cljs.core.async.t11570(self__.cb,self__.flag,self__.alt_handler,meta11571__$1));
});
cljs.core.async.__GT_t11570 = (function __GT_t11570(cb__$1,flag__$1,alt_handler__$1,meta11571){return (new cljs.core.async.t11570(cb__$1,flag__$1,alt_handler__$1,meta11571));
});
}
return (new cljs.core.async.t11570(cb,flag,alt_handler,null));
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
return (function (p1__11573_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11573_SHARP_,port], null));
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
var G__11574 = (i + 1);
i = G__11574;
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
var alts_BANG___delegate = function (ports,p__11575){var map__11577 = p__11575;var map__11577__$1 = ((cljs.core.seq_QMARK_.call(null,map__11577))?cljs.core.apply.call(null,cljs.core.hash_map,map__11577):map__11577);var opts = map__11577__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__11575 = null;if (arguments.length > 1) {
  p__11575 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11575);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11578){
var ports = cljs.core.first(arglist__11578);
var p__11575 = cljs.core.rest(arglist__11578);
return alts_BANG___delegate(ports,p__11575);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11586 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11586 = (function (ch,f,map_LT_,meta11587){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11587 = meta11587;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11586.cljs$lang$type = true;
cljs.core.async.t11586.cljs$lang$ctorStr = "cljs.core.async/t11586";
cljs.core.async.t11586.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11586");
});
cljs.core.async.t11586.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11586.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t11586.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11586.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11589 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11589 = (function (fn1,_,meta11587,ch,f,map_LT_,meta11590){
this.fn1 = fn1;
this._ = _;
this.meta11587 = meta11587;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11590 = meta11590;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11589.cljs$lang$type = true;
cljs.core.async.t11589.cljs$lang$ctorStr = "cljs.core.async/t11589";
cljs.core.async.t11589.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11589");
});
cljs.core.async.t11589.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11589.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t11589.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t11589.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__11579_SHARP_){return f1.call(null,(((p1__11579_SHARP_ == null))?null:self__.f.call(null,p1__11579_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t11589.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11591){var self__ = this;
var _11591__$1 = this;return self__.meta11590;
});
cljs.core.async.t11589.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11591,meta11590__$1){var self__ = this;
var _11591__$1 = this;return (new cljs.core.async.t11589(self__.fn1,self__._,self__.meta11587,self__.ch,self__.f,self__.map_LT_,meta11590__$1));
});
cljs.core.async.__GT_t11589 = (function __GT_t11589(fn1__$1,___$2,meta11587__$1,ch__$2,f__$2,map_LT___$2,meta11590){return (new cljs.core.async.t11589(fn1__$1,___$2,meta11587__$1,ch__$2,f__$2,map_LT___$2,meta11590));
});
}
return (new cljs.core.async.t11589(fn1,___$1,self__.meta11587,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t11586.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11586.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11586.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11588){var self__ = this;
var _11588__$1 = this;return self__.meta11587;
});
cljs.core.async.t11586.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11588,meta11587__$1){var self__ = this;
var _11588__$1 = this;return (new cljs.core.async.t11586(self__.ch,self__.f,self__.map_LT_,meta11587__$1));
});
cljs.core.async.__GT_t11586 = (function __GT_t11586(ch__$1,f__$1,map_LT___$1,meta11587){return (new cljs.core.async.t11586(ch__$1,f__$1,map_LT___$1,meta11587));
});
}
return (new cljs.core.async.t11586(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11595 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11595 = (function (ch,f,map_GT_,meta11596){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11596 = meta11596;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11595.cljs$lang$type = true;
cljs.core.async.t11595.cljs$lang$ctorStr = "cljs.core.async/t11595";
cljs.core.async.t11595.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11595");
});
cljs.core.async.t11595.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11595.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t11595.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11595.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11595.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11595.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11595.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11597){var self__ = this;
var _11597__$1 = this;return self__.meta11596;
});
cljs.core.async.t11595.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11597,meta11596__$1){var self__ = this;
var _11597__$1 = this;return (new cljs.core.async.t11595(self__.ch,self__.f,self__.map_GT_,meta11596__$1));
});
cljs.core.async.__GT_t11595 = (function __GT_t11595(ch__$1,f__$1,map_GT___$1,meta11596){return (new cljs.core.async.t11595(ch__$1,f__$1,map_GT___$1,meta11596));
});
}
return (new cljs.core.async.t11595(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11601 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11601 = (function (ch,p,filter_GT_,meta11602){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11602 = meta11602;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11601.cljs$lang$type = true;
cljs.core.async.t11601.cljs$lang$ctorStr = "cljs.core.async/t11601";
cljs.core.async.t11601.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11601");
});
cljs.core.async.t11601.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11601.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t11601.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11601.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11601.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11601.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11601.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11603){var self__ = this;
var _11603__$1 = this;return self__.meta11602;
});
cljs.core.async.t11601.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11603,meta11602__$1){var self__ = this;
var _11603__$1 = this;return (new cljs.core.async.t11601(self__.ch,self__.p,self__.filter_GT_,meta11602__$1));
});
cljs.core.async.__GT_t11601 = (function __GT_t11601(ch__$1,p__$1,filter_GT___$1,meta11602){return (new cljs.core.async.t11601(ch__$1,p__$1,filter_GT___$1,meta11602));
});
}
return (new cljs.core.async.t11601(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6659__auto___11686 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6660__auto__ = (function (){var switch__6644__auto__ = (function (state_11665){var state_val_11666 = (state_11665[1]);if((state_val_11666 === 1))
{var state_11665__$1 = state_11665;var statearr_11667_11687 = state_11665__$1;(statearr_11667_11687[2] = null);
(statearr_11667_11687[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11666 === 2))
{var state_11665__$1 = state_11665;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11665__$1,4,ch);
} else
{if((state_val_11666 === 3))
{var inst_11663 = (state_11665[2]);var state_11665__$1 = state_11665;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11665__$1,inst_11663);
} else
{if((state_val_11666 === 4))
{var inst_11647 = (state_11665[7]);var inst_11647__$1 = (state_11665[2]);var inst_11648 = (inst_11647__$1 == null);var state_11665__$1 = (function (){var statearr_11668 = state_11665;(statearr_11668[7] = inst_11647__$1);
return statearr_11668;
})();if(cljs.core.truth_(inst_11648))
{var statearr_11669_11688 = state_11665__$1;(statearr_11669_11688[1] = 5);
} else
{var statearr_11670_11689 = state_11665__$1;(statearr_11670_11689[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11666 === 5))
{var inst_11650 = cljs.core.async.close_BANG_.call(null,out);var state_11665__$1 = state_11665;var statearr_11671_11690 = state_11665__$1;(statearr_11671_11690[2] = inst_11650);
(statearr_11671_11690[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11666 === 6))
{var inst_11647 = (state_11665[7]);var inst_11652 = p.call(null,inst_11647);var state_11665__$1 = state_11665;if(cljs.core.truth_(inst_11652))
{var statearr_11672_11691 = state_11665__$1;(statearr_11672_11691[1] = 8);
} else
{var statearr_11673_11692 = state_11665__$1;(statearr_11673_11692[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11666 === 7))
{var inst_11661 = (state_11665[2]);var state_11665__$1 = state_11665;var statearr_11674_11693 = state_11665__$1;(statearr_11674_11693[2] = inst_11661);
(statearr_11674_11693[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11666 === 8))
{var inst_11647 = (state_11665[7]);var state_11665__$1 = state_11665;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11665__$1,11,out,inst_11647);
} else
{if((state_val_11666 === 9))
{var state_11665__$1 = state_11665;var statearr_11675_11694 = state_11665__$1;(statearr_11675_11694[2] = null);
(statearr_11675_11694[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11666 === 10))
{var inst_11658 = (state_11665[2]);var state_11665__$1 = (function (){var statearr_11676 = state_11665;(statearr_11676[8] = inst_11658);
return statearr_11676;
})();var statearr_11677_11695 = state_11665__$1;(statearr_11677_11695[2] = null);
(statearr_11677_11695[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11666 === 11))
{var inst_11655 = (state_11665[2]);var state_11665__$1 = state_11665;var statearr_11678_11696 = state_11665__$1;(statearr_11678_11696[2] = inst_11655);
(statearr_11678_11696[1] = 10);
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
});return ((function (switch__6644__auto__){
return (function() {
var state_machine__6645__auto__ = null;
var state_machine__6645__auto____0 = (function (){var statearr_11682 = [null,null,null,null,null,null,null,null,null];(statearr_11682[0] = state_machine__6645__auto__);
(statearr_11682[1] = 1);
return statearr_11682;
});
var state_machine__6645__auto____1 = (function (state_11665){while(true){
var ret_value__6646__auto__ = (function (){try{while(true){
var result__6647__auto__ = switch__6644__auto__.call(null,state_11665);if(cljs.core.keyword_identical_QMARK_.call(null,result__6647__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6647__auto__;
}
break;
}
}catch (e11683){if((e11683 instanceof Object))
{var ex__6648__auto__ = e11683;var statearr_11684_11697 = state_11665;(statearr_11684_11697[5] = ex__6648__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11665);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11683;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6646__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11698 = state_11665;
state_11665 = G__11698;
continue;
}
} else
{return ret_value__6646__auto__;
}
break;
}
});
state_machine__6645__auto__ = function(state_11665){
switch(arguments.length){
case 0:
return state_machine__6645__auto____0.call(this);
case 1:
return state_machine__6645__auto____1.call(this,state_11665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6645__auto____0;
state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6645__auto____1;
return state_machine__6645__auto__;
})()
;})(switch__6644__auto__))
})();var state__6661__auto__ = (function (){var statearr_11685 = f__6660__auto__.call(null);(statearr_11685[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6659__auto___11686);
return statearr_11685;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6661__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6659__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6660__auto__ = (function (){var switch__6644__auto__ = (function (state_11850){var state_val_11851 = (state_11850[1]);if((state_val_11851 === 1))
{var state_11850__$1 = state_11850;var statearr_11852_11889 = state_11850__$1;(statearr_11852_11889[2] = null);
(statearr_11852_11889[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11851 === 2))
{var state_11850__$1 = state_11850;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11850__$1,4,in$);
} else
{if((state_val_11851 === 3))
{var inst_11848 = (state_11850[2]);var state_11850__$1 = state_11850;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11850__$1,inst_11848);
} else
{if((state_val_11851 === 4))
{var inst_11796 = (state_11850[7]);var inst_11796__$1 = (state_11850[2]);var inst_11797 = (inst_11796__$1 == null);var state_11850__$1 = (function (){var statearr_11853 = state_11850;(statearr_11853[7] = inst_11796__$1);
return statearr_11853;
})();if(cljs.core.truth_(inst_11797))
{var statearr_11854_11890 = state_11850__$1;(statearr_11854_11890[1] = 5);
} else
{var statearr_11855_11891 = state_11850__$1;(statearr_11855_11891[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11851 === 5))
{var inst_11799 = cljs.core.async.close_BANG_.call(null,out);var state_11850__$1 = state_11850;var statearr_11856_11892 = state_11850__$1;(statearr_11856_11892[2] = inst_11799);
(statearr_11856_11892[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11851 === 6))
{var inst_11796 = (state_11850[7]);var inst_11801 = f.call(null,inst_11796);var inst_11806 = cljs.core.seq.call(null,inst_11801);var inst_11807 = inst_11806;var inst_11808 = null;var inst_11809 = 0;var inst_11810 = 0;var state_11850__$1 = (function (){var statearr_11857 = state_11850;(statearr_11857[8] = inst_11810);
(statearr_11857[9] = inst_11807);
(statearr_11857[10] = inst_11808);
(statearr_11857[11] = inst_11809);
return statearr_11857;
})();var statearr_11858_11893 = state_11850__$1;(statearr_11858_11893[2] = null);
(statearr_11858_11893[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11851 === 7))
{var inst_11846 = (state_11850[2]);var state_11850__$1 = state_11850;var statearr_11859_11894 = state_11850__$1;(statearr_11859_11894[2] = inst_11846);
(statearr_11859_11894[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11851 === 8))
{var inst_11810 = (state_11850[8]);var inst_11809 = (state_11850[11]);var inst_11812 = (inst_11810 < inst_11809);var inst_11813 = inst_11812;var state_11850__$1 = state_11850;if(cljs.core.truth_(inst_11813))
{var statearr_11860_11895 = state_11850__$1;(statearr_11860_11895[1] = 10);
} else
{var statearr_11861_11896 = state_11850__$1;(statearr_11861_11896[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11851 === 9))
{var inst_11843 = (state_11850[2]);var state_11850__$1 = (function (){var statearr_11862 = state_11850;(statearr_11862[12] = inst_11843);
return statearr_11862;
})();var statearr_11863_11897 = state_11850__$1;(statearr_11863_11897[2] = null);
(statearr_11863_11897[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11851 === 10))
{var inst_11810 = (state_11850[8]);var inst_11808 = (state_11850[10]);var inst_11815 = cljs.core._nth.call(null,inst_11808,inst_11810);var state_11850__$1 = state_11850;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11850__$1,13,out,inst_11815);
} else
{if((state_val_11851 === 11))
{var inst_11807 = (state_11850[9]);var inst_11821 = (state_11850[13]);var inst_11821__$1 = cljs.core.seq.call(null,inst_11807);var state_11850__$1 = (function (){var statearr_11867 = state_11850;(statearr_11867[13] = inst_11821__$1);
return statearr_11867;
})();if(inst_11821__$1)
{var statearr_11868_11898 = state_11850__$1;(statearr_11868_11898[1] = 14);
} else
{var statearr_11869_11899 = state_11850__$1;(statearr_11869_11899[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11851 === 12))
{var inst_11841 = (state_11850[2]);var state_11850__$1 = state_11850;var statearr_11870_11900 = state_11850__$1;(statearr_11870_11900[2] = inst_11841);
(statearr_11870_11900[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11851 === 13))
{var inst_11810 = (state_11850[8]);var inst_11807 = (state_11850[9]);var inst_11808 = (state_11850[10]);var inst_11809 = (state_11850[11]);var inst_11817 = (state_11850[2]);var inst_11818 = (inst_11810 + 1);var tmp11864 = inst_11807;var tmp11865 = inst_11808;var tmp11866 = inst_11809;var inst_11807__$1 = tmp11864;var inst_11808__$1 = tmp11865;var inst_11809__$1 = tmp11866;var inst_11810__$1 = inst_11818;var state_11850__$1 = (function (){var statearr_11871 = state_11850;(statearr_11871[8] = inst_11810__$1);
(statearr_11871[9] = inst_11807__$1);
(statearr_11871[10] = inst_11808__$1);
(statearr_11871[11] = inst_11809__$1);
(statearr_11871[14] = inst_11817);
return statearr_11871;
})();var statearr_11872_11901 = state_11850__$1;(statearr_11872_11901[2] = null);
(statearr_11872_11901[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11851 === 14))
{var inst_11821 = (state_11850[13]);var inst_11823 = cljs.core.chunked_seq_QMARK_.call(null,inst_11821);var state_11850__$1 = state_11850;if(inst_11823)
{var statearr_11873_11902 = state_11850__$1;(statearr_11873_11902[1] = 17);
} else
{var statearr_11874_11903 = state_11850__$1;(statearr_11874_11903[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11851 === 15))
{var state_11850__$1 = state_11850;var statearr_11875_11904 = state_11850__$1;(statearr_11875_11904[2] = null);
(statearr_11875_11904[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11851 === 16))
{var inst_11839 = (state_11850[2]);var state_11850__$1 = state_11850;var statearr_11876_11905 = state_11850__$1;(statearr_11876_11905[2] = inst_11839);
(statearr_11876_11905[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11851 === 17))
{var inst_11821 = (state_11850[13]);var inst_11825 = cljs.core.chunk_first.call(null,inst_11821);var inst_11826 = cljs.core.chunk_rest.call(null,inst_11821);var inst_11827 = cljs.core.count.call(null,inst_11825);var inst_11807 = inst_11826;var inst_11808 = inst_11825;var inst_11809 = inst_11827;var inst_11810 = 0;var state_11850__$1 = (function (){var statearr_11877 = state_11850;(statearr_11877[8] = inst_11810);
(statearr_11877[9] = inst_11807);
(statearr_11877[10] = inst_11808);
(statearr_11877[11] = inst_11809);
return statearr_11877;
})();var statearr_11878_11906 = state_11850__$1;(statearr_11878_11906[2] = null);
(statearr_11878_11906[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11851 === 18))
{var inst_11821 = (state_11850[13]);var inst_11830 = cljs.core.first.call(null,inst_11821);var state_11850__$1 = state_11850;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11850__$1,20,out,inst_11830);
} else
{if((state_val_11851 === 19))
{var inst_11836 = (state_11850[2]);var state_11850__$1 = state_11850;var statearr_11879_11907 = state_11850__$1;(statearr_11879_11907[2] = inst_11836);
(statearr_11879_11907[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11851 === 20))
{var inst_11821 = (state_11850[13]);var inst_11832 = (state_11850[2]);var inst_11833 = cljs.core.next.call(null,inst_11821);var inst_11807 = inst_11833;var inst_11808 = null;var inst_11809 = 0;var inst_11810 = 0;var state_11850__$1 = (function (){var statearr_11880 = state_11850;(statearr_11880[8] = inst_11810);
(statearr_11880[9] = inst_11807);
(statearr_11880[10] = inst_11808);
(statearr_11880[15] = inst_11832);
(statearr_11880[11] = inst_11809);
return statearr_11880;
})();var statearr_11881_11908 = state_11850__$1;(statearr_11881_11908[2] = null);
(statearr_11881_11908[1] = 8);
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
});return ((function (switch__6644__auto__){
return (function() {
var state_machine__6645__auto__ = null;
var state_machine__6645__auto____0 = (function (){var statearr_11885 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11885[0] = state_machine__6645__auto__);
(statearr_11885[1] = 1);
return statearr_11885;
});
var state_machine__6645__auto____1 = (function (state_11850){while(true){
var ret_value__6646__auto__ = (function (){try{while(true){
var result__6647__auto__ = switch__6644__auto__.call(null,state_11850);if(cljs.core.keyword_identical_QMARK_.call(null,result__6647__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6647__auto__;
}
break;
}
}catch (e11886){if((e11886 instanceof Object))
{var ex__6648__auto__ = e11886;var statearr_11887_11909 = state_11850;(statearr_11887_11909[5] = ex__6648__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11850);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11886;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6646__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11910 = state_11850;
state_11850 = G__11910;
continue;
}
} else
{return ret_value__6646__auto__;
}
break;
}
});
state_machine__6645__auto__ = function(state_11850){
switch(arguments.length){
case 0:
return state_machine__6645__auto____0.call(this);
case 1:
return state_machine__6645__auto____1.call(this,state_11850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6645__auto____0;
state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6645__auto____1;
return state_machine__6645__auto__;
})()
;})(switch__6644__auto__))
})();var state__6661__auto__ = (function (){var statearr_11888 = f__6660__auto__.call(null);(statearr_11888[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6659__auto__);
return statearr_11888;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6661__auto__);
}));
return c__6659__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6659__auto___11991 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6660__auto__ = (function (){var switch__6644__auto__ = (function (state_11970){var state_val_11971 = (state_11970[1]);if((state_val_11971 === 1))
{var state_11970__$1 = state_11970;var statearr_11972_11992 = state_11970__$1;(statearr_11972_11992[2] = null);
(statearr_11972_11992[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11971 === 2))
{var state_11970__$1 = state_11970;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11970__$1,4,from);
} else
{if((state_val_11971 === 3))
{var inst_11968 = (state_11970[2]);var state_11970__$1 = state_11970;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11970__$1,inst_11968);
} else
{if((state_val_11971 === 4))
{var inst_11953 = (state_11970[7]);var inst_11953__$1 = (state_11970[2]);var inst_11954 = (inst_11953__$1 == null);var state_11970__$1 = (function (){var statearr_11973 = state_11970;(statearr_11973[7] = inst_11953__$1);
return statearr_11973;
})();if(cljs.core.truth_(inst_11954))
{var statearr_11974_11993 = state_11970__$1;(statearr_11974_11993[1] = 5);
} else
{var statearr_11975_11994 = state_11970__$1;(statearr_11975_11994[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11971 === 5))
{var state_11970__$1 = state_11970;if(cljs.core.truth_(close_QMARK_))
{var statearr_11976_11995 = state_11970__$1;(statearr_11976_11995[1] = 8);
} else
{var statearr_11977_11996 = state_11970__$1;(statearr_11977_11996[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11971 === 6))
{var inst_11953 = (state_11970[7]);var state_11970__$1 = state_11970;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11970__$1,11,to,inst_11953);
} else
{if((state_val_11971 === 7))
{var inst_11966 = (state_11970[2]);var state_11970__$1 = state_11970;var statearr_11978_11997 = state_11970__$1;(statearr_11978_11997[2] = inst_11966);
(statearr_11978_11997[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11971 === 8))
{var inst_11957 = cljs.core.async.close_BANG_.call(null,to);var state_11970__$1 = state_11970;var statearr_11979_11998 = state_11970__$1;(statearr_11979_11998[2] = inst_11957);
(statearr_11979_11998[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11971 === 9))
{var state_11970__$1 = state_11970;var statearr_11980_11999 = state_11970__$1;(statearr_11980_11999[2] = null);
(statearr_11980_11999[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11971 === 10))
{var inst_11960 = (state_11970[2]);var state_11970__$1 = state_11970;var statearr_11981_12000 = state_11970__$1;(statearr_11981_12000[2] = inst_11960);
(statearr_11981_12000[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11971 === 11))
{var inst_11963 = (state_11970[2]);var state_11970__$1 = (function (){var statearr_11982 = state_11970;(statearr_11982[8] = inst_11963);
return statearr_11982;
})();var statearr_11983_12001 = state_11970__$1;(statearr_11983_12001[2] = null);
(statearr_11983_12001[1] = 2);
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
});return ((function (switch__6644__auto__){
return (function() {
var state_machine__6645__auto__ = null;
var state_machine__6645__auto____0 = (function (){var statearr_11987 = [null,null,null,null,null,null,null,null,null];(statearr_11987[0] = state_machine__6645__auto__);
(statearr_11987[1] = 1);
return statearr_11987;
});
var state_machine__6645__auto____1 = (function (state_11970){while(true){
var ret_value__6646__auto__ = (function (){try{while(true){
var result__6647__auto__ = switch__6644__auto__.call(null,state_11970);if(cljs.core.keyword_identical_QMARK_.call(null,result__6647__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6647__auto__;
}
break;
}
}catch (e11988){if((e11988 instanceof Object))
{var ex__6648__auto__ = e11988;var statearr_11989_12002 = state_11970;(statearr_11989_12002[5] = ex__6648__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11970);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11988;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6646__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12003 = state_11970;
state_11970 = G__12003;
continue;
}
} else
{return ret_value__6646__auto__;
}
break;
}
});
state_machine__6645__auto__ = function(state_11970){
switch(arguments.length){
case 0:
return state_machine__6645__auto____0.call(this);
case 1:
return state_machine__6645__auto____1.call(this,state_11970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6645__auto____0;
state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6645__auto____1;
return state_machine__6645__auto__;
})()
;})(switch__6644__auto__))
})();var state__6661__auto__ = (function (){var statearr_11990 = f__6660__auto__.call(null);(statearr_11990[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6659__auto___11991);
return statearr_11990;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6661__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6659__auto___12090 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6660__auto__ = (function (){var switch__6644__auto__ = (function (state_12068){var state_val_12069 = (state_12068[1]);if((state_val_12069 === 1))
{var state_12068__$1 = state_12068;var statearr_12070_12091 = state_12068__$1;(statearr_12070_12091[2] = null);
(statearr_12070_12091[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12069 === 2))
{var state_12068__$1 = state_12068;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12068__$1,4,ch);
} else
{if((state_val_12069 === 3))
{var inst_12066 = (state_12068[2]);var state_12068__$1 = state_12068;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12068__$1,inst_12066);
} else
{if((state_val_12069 === 4))
{var inst_12049 = (state_12068[7]);var inst_12049__$1 = (state_12068[2]);var inst_12050 = (inst_12049__$1 == null);var state_12068__$1 = (function (){var statearr_12071 = state_12068;(statearr_12071[7] = inst_12049__$1);
return statearr_12071;
})();if(cljs.core.truth_(inst_12050))
{var statearr_12072_12092 = state_12068__$1;(statearr_12072_12092[1] = 5);
} else
{var statearr_12073_12093 = state_12068__$1;(statearr_12073_12093[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12069 === 5))
{var inst_12052 = cljs.core.async.close_BANG_.call(null,tc);var inst_12053 = cljs.core.async.close_BANG_.call(null,fc);var state_12068__$1 = (function (){var statearr_12074 = state_12068;(statearr_12074[8] = inst_12052);
return statearr_12074;
})();var statearr_12075_12094 = state_12068__$1;(statearr_12075_12094[2] = inst_12053);
(statearr_12075_12094[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12069 === 6))
{var inst_12049 = (state_12068[7]);var inst_12055 = p.call(null,inst_12049);var state_12068__$1 = state_12068;if(cljs.core.truth_(inst_12055))
{var statearr_12076_12095 = state_12068__$1;(statearr_12076_12095[1] = 9);
} else
{var statearr_12077_12096 = state_12068__$1;(statearr_12077_12096[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12069 === 7))
{var inst_12064 = (state_12068[2]);var state_12068__$1 = state_12068;var statearr_12078_12097 = state_12068__$1;(statearr_12078_12097[2] = inst_12064);
(statearr_12078_12097[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12069 === 8))
{var inst_12061 = (state_12068[2]);var state_12068__$1 = (function (){var statearr_12079 = state_12068;(statearr_12079[9] = inst_12061);
return statearr_12079;
})();var statearr_12080_12098 = state_12068__$1;(statearr_12080_12098[2] = null);
(statearr_12080_12098[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12069 === 9))
{var state_12068__$1 = state_12068;var statearr_12081_12099 = state_12068__$1;(statearr_12081_12099[2] = tc);
(statearr_12081_12099[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12069 === 10))
{var state_12068__$1 = state_12068;var statearr_12082_12100 = state_12068__$1;(statearr_12082_12100[2] = fc);
(statearr_12082_12100[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12069 === 11))
{var inst_12049 = (state_12068[7]);var inst_12059 = (state_12068[2]);var state_12068__$1 = state_12068;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12068__$1,8,inst_12059,inst_12049);
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
});return ((function (switch__6644__auto__){
return (function() {
var state_machine__6645__auto__ = null;
var state_machine__6645__auto____0 = (function (){var statearr_12086 = [null,null,null,null,null,null,null,null,null,null];(statearr_12086[0] = state_machine__6645__auto__);
(statearr_12086[1] = 1);
return statearr_12086;
});
var state_machine__6645__auto____1 = (function (state_12068){while(true){
var ret_value__6646__auto__ = (function (){try{while(true){
var result__6647__auto__ = switch__6644__auto__.call(null,state_12068);if(cljs.core.keyword_identical_QMARK_.call(null,result__6647__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6647__auto__;
}
break;
}
}catch (e12087){if((e12087 instanceof Object))
{var ex__6648__auto__ = e12087;var statearr_12088_12101 = state_12068;(statearr_12088_12101[5] = ex__6648__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12068);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12087;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6646__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12102 = state_12068;
state_12068 = G__12102;
continue;
}
} else
{return ret_value__6646__auto__;
}
break;
}
});
state_machine__6645__auto__ = function(state_12068){
switch(arguments.length){
case 0:
return state_machine__6645__auto____0.call(this);
case 1:
return state_machine__6645__auto____1.call(this,state_12068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6645__auto____0;
state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6645__auto____1;
return state_machine__6645__auto__;
})()
;})(switch__6644__auto__))
})();var state__6661__auto__ = (function (){var statearr_12089 = f__6660__auto__.call(null);(statearr_12089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6659__auto___12090);
return statearr_12089;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6661__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6659__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6660__auto__ = (function (){var switch__6644__auto__ = (function (state_12149){var state_val_12150 = (state_12149[1]);if((state_val_12150 === 7))
{var inst_12145 = (state_12149[2]);var state_12149__$1 = state_12149;var statearr_12151_12167 = state_12149__$1;(statearr_12151_12167[2] = inst_12145);
(statearr_12151_12167[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12150 === 6))
{var inst_12138 = (state_12149[7]);var inst_12135 = (state_12149[8]);var inst_12142 = f.call(null,inst_12135,inst_12138);var inst_12135__$1 = inst_12142;var state_12149__$1 = (function (){var statearr_12152 = state_12149;(statearr_12152[8] = inst_12135__$1);
return statearr_12152;
})();var statearr_12153_12168 = state_12149__$1;(statearr_12153_12168[2] = null);
(statearr_12153_12168[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12150 === 5))
{var inst_12135 = (state_12149[8]);var state_12149__$1 = state_12149;var statearr_12154_12169 = state_12149__$1;(statearr_12154_12169[2] = inst_12135);
(statearr_12154_12169[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12150 === 4))
{var inst_12138 = (state_12149[7]);var inst_12138__$1 = (state_12149[2]);var inst_12139 = (inst_12138__$1 == null);var state_12149__$1 = (function (){var statearr_12155 = state_12149;(statearr_12155[7] = inst_12138__$1);
return statearr_12155;
})();if(cljs.core.truth_(inst_12139))
{var statearr_12156_12170 = state_12149__$1;(statearr_12156_12170[1] = 5);
} else
{var statearr_12157_12171 = state_12149__$1;(statearr_12157_12171[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12150 === 3))
{var inst_12147 = (state_12149[2]);var state_12149__$1 = state_12149;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12149__$1,inst_12147);
} else
{if((state_val_12150 === 2))
{var state_12149__$1 = state_12149;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12149__$1,4,ch);
} else
{if((state_val_12150 === 1))
{var inst_12135 = init;var state_12149__$1 = (function (){var statearr_12158 = state_12149;(statearr_12158[8] = inst_12135);
return statearr_12158;
})();var statearr_12159_12172 = state_12149__$1;(statearr_12159_12172[2] = null);
(statearr_12159_12172[1] = 2);
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
});return ((function (switch__6644__auto__){
return (function() {
var state_machine__6645__auto__ = null;
var state_machine__6645__auto____0 = (function (){var statearr_12163 = [null,null,null,null,null,null,null,null,null];(statearr_12163[0] = state_machine__6645__auto__);
(statearr_12163[1] = 1);
return statearr_12163;
});
var state_machine__6645__auto____1 = (function (state_12149){while(true){
var ret_value__6646__auto__ = (function (){try{while(true){
var result__6647__auto__ = switch__6644__auto__.call(null,state_12149);if(cljs.core.keyword_identical_QMARK_.call(null,result__6647__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6647__auto__;
}
break;
}
}catch (e12164){if((e12164 instanceof Object))
{var ex__6648__auto__ = e12164;var statearr_12165_12173 = state_12149;(statearr_12165_12173[5] = ex__6648__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12149);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12164;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6646__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12174 = state_12149;
state_12149 = G__12174;
continue;
}
} else
{return ret_value__6646__auto__;
}
break;
}
});
state_machine__6645__auto__ = function(state_12149){
switch(arguments.length){
case 0:
return state_machine__6645__auto____0.call(this);
case 1:
return state_machine__6645__auto____1.call(this,state_12149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6645__auto____0;
state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6645__auto____1;
return state_machine__6645__auto__;
})()
;})(switch__6644__auto__))
})();var state__6661__auto__ = (function (){var statearr_12166 = f__6660__auto__.call(null);(statearr_12166[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6659__auto__);
return statearr_12166;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6661__auto__);
}));
return c__6659__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6659__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6660__auto__ = (function (){var switch__6644__auto__ = (function (state_12236){var state_val_12237 = (state_12236[1]);if((state_val_12237 === 1))
{var inst_12216 = cljs.core.seq.call(null,coll);var inst_12217 = inst_12216;var state_12236__$1 = (function (){var statearr_12238 = state_12236;(statearr_12238[7] = inst_12217);
return statearr_12238;
})();var statearr_12239_12257 = state_12236__$1;(statearr_12239_12257[2] = null);
(statearr_12239_12257[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12237 === 2))
{var inst_12217 = (state_12236[7]);var state_12236__$1 = state_12236;if(cljs.core.truth_(inst_12217))
{var statearr_12240_12258 = state_12236__$1;(statearr_12240_12258[1] = 4);
} else
{var statearr_12241_12259 = state_12236__$1;(statearr_12241_12259[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12237 === 3))
{var inst_12234 = (state_12236[2]);var state_12236__$1 = state_12236;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12236__$1,inst_12234);
} else
{if((state_val_12237 === 4))
{var inst_12217 = (state_12236[7]);var inst_12220 = cljs.core.first.call(null,inst_12217);var state_12236__$1 = state_12236;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12236__$1,7,ch,inst_12220);
} else
{if((state_val_12237 === 5))
{var state_12236__$1 = state_12236;if(cljs.core.truth_(close_QMARK_))
{var statearr_12242_12260 = state_12236__$1;(statearr_12242_12260[1] = 8);
} else
{var statearr_12243_12261 = state_12236__$1;(statearr_12243_12261[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12237 === 6))
{var inst_12232 = (state_12236[2]);var state_12236__$1 = state_12236;var statearr_12244_12262 = state_12236__$1;(statearr_12244_12262[2] = inst_12232);
(statearr_12244_12262[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12237 === 7))
{var inst_12217 = (state_12236[7]);var inst_12222 = (state_12236[2]);var inst_12223 = cljs.core.next.call(null,inst_12217);var inst_12217__$1 = inst_12223;var state_12236__$1 = (function (){var statearr_12245 = state_12236;(statearr_12245[7] = inst_12217__$1);
(statearr_12245[8] = inst_12222);
return statearr_12245;
})();var statearr_12246_12263 = state_12236__$1;(statearr_12246_12263[2] = null);
(statearr_12246_12263[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12237 === 8))
{var inst_12227 = cljs.core.async.close_BANG_.call(null,ch);var state_12236__$1 = state_12236;var statearr_12247_12264 = state_12236__$1;(statearr_12247_12264[2] = inst_12227);
(statearr_12247_12264[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12237 === 9))
{var state_12236__$1 = state_12236;var statearr_12248_12265 = state_12236__$1;(statearr_12248_12265[2] = null);
(statearr_12248_12265[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12237 === 10))
{var inst_12230 = (state_12236[2]);var state_12236__$1 = state_12236;var statearr_12249_12266 = state_12236__$1;(statearr_12249_12266[2] = inst_12230);
(statearr_12249_12266[1] = 6);
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
});return ((function (switch__6644__auto__){
return (function() {
var state_machine__6645__auto__ = null;
var state_machine__6645__auto____0 = (function (){var statearr_12253 = [null,null,null,null,null,null,null,null,null];(statearr_12253[0] = state_machine__6645__auto__);
(statearr_12253[1] = 1);
return statearr_12253;
});
var state_machine__6645__auto____1 = (function (state_12236){while(true){
var ret_value__6646__auto__ = (function (){try{while(true){
var result__6647__auto__ = switch__6644__auto__.call(null,state_12236);if(cljs.core.keyword_identical_QMARK_.call(null,result__6647__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6647__auto__;
}
break;
}
}catch (e12254){if((e12254 instanceof Object))
{var ex__6648__auto__ = e12254;var statearr_12255_12267 = state_12236;(statearr_12255_12267[5] = ex__6648__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12236);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12254;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6646__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12268 = state_12236;
state_12236 = G__12268;
continue;
}
} else
{return ret_value__6646__auto__;
}
break;
}
});
state_machine__6645__auto__ = function(state_12236){
switch(arguments.length){
case 0:
return state_machine__6645__auto____0.call(this);
case 1:
return state_machine__6645__auto____1.call(this,state_12236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6645__auto____0;
state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6645__auto____1;
return state_machine__6645__auto__;
})()
;})(switch__6644__auto__))
})();var state__6661__auto__ = (function (){var statearr_12256 = f__6660__auto__.call(null);(statearr_12256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6659__auto__);
return statearr_12256;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6661__auto__);
}));
return c__6659__auto__;
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
cljs.core.async.Mux = (function (){var obj12270 = {};return obj12270;
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
cljs.core.async.Mult = (function (){var obj12272 = {};return obj12272;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12496 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12496 = (function (cs,ch,mult,meta12497){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12497 = meta12497;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12496.cljs$lang$type = true;
cljs.core.async.t12496.cljs$lang$ctorStr = "cljs.core.async/t12496";
cljs.core.async.t12496.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t12496");
});})(cs))
;
cljs.core.async.t12496.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12496.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12496.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12496.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12496.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12496.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12496.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12498){var self__ = this;
var _12498__$1 = this;return self__.meta12497;
});})(cs))
;
cljs.core.async.t12496.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12498,meta12497__$1){var self__ = this;
var _12498__$1 = this;return (new cljs.core.async.t12496(self__.cs,self__.ch,self__.mult,meta12497__$1));
});})(cs))
;
cljs.core.async.__GT_t12496 = ((function (cs){
return (function __GT_t12496(cs__$1,ch__$1,mult__$1,meta12497){return (new cljs.core.async.t12496(cs__$1,ch__$1,mult__$1,meta12497));
});})(cs))
;
}
return (new cljs.core.async.t12496(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6659__auto___12719 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6660__auto__ = (function (){var switch__6644__auto__ = (function (state_12633){var state_val_12634 = (state_12633[1]);if((state_val_12634 === 32))
{var inst_12501 = (state_12633[7]);var inst_12577 = (state_12633[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12633,31,Object,null,30);var inst_12584 = cljs.core.async.put_BANG_.call(null,inst_12577,inst_12501,done);var state_12633__$1 = state_12633;var statearr_12635_12720 = state_12633__$1;(statearr_12635_12720[2] = inst_12584);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12633__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12634 === 1))
{var state_12633__$1 = state_12633;var statearr_12636_12721 = state_12633__$1;(statearr_12636_12721[2] = null);
(statearr_12636_12721[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12634 === 33))
{var inst_12590 = (state_12633[9]);var inst_12592 = cljs.core.chunked_seq_QMARK_.call(null,inst_12590);var state_12633__$1 = state_12633;if(inst_12592)
{var statearr_12637_12722 = state_12633__$1;(statearr_12637_12722[1] = 36);
} else
{var statearr_12638_12723 = state_12633__$1;(statearr_12638_12723[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12634 === 2))
{var state_12633__$1 = state_12633;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12633__$1,4,ch);
} else
{if((state_val_12634 === 34))
{var state_12633__$1 = state_12633;var statearr_12639_12724 = state_12633__$1;(statearr_12639_12724[2] = null);
(statearr_12639_12724[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12634 === 3))
{var inst_12631 = (state_12633[2]);var state_12633__$1 = state_12633;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12633__$1,inst_12631);
} else
{if((state_val_12634 === 35))
{var inst_12615 = (state_12633[2]);var state_12633__$1 = state_12633;var statearr_12640_12725 = state_12633__$1;(statearr_12640_12725[2] = inst_12615);
(statearr_12640_12725[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12634 === 4))
{var inst_12501 = (state_12633[7]);var inst_12501__$1 = (state_12633[2]);var inst_12502 = (inst_12501__$1 == null);var state_12633__$1 = (function (){var statearr_12641 = state_12633;(statearr_12641[7] = inst_12501__$1);
return statearr_12641;
})();if(cljs.core.truth_(inst_12502))
{var statearr_12642_12726 = state_12633__$1;(statearr_12642_12726[1] = 5);
} else
{var statearr_12643_12727 = state_12633__$1;(statearr_12643_12727[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12634 === 36))
{var inst_12590 = (state_12633[9]);var inst_12594 = cljs.core.chunk_first.call(null,inst_12590);var inst_12595 = cljs.core.chunk_rest.call(null,inst_12590);var inst_12596 = cljs.core.count.call(null,inst_12594);var inst_12569 = inst_12595;var inst_12570 = inst_12594;var inst_12571 = inst_12596;var inst_12572 = 0;var state_12633__$1 = (function (){var statearr_12644 = state_12633;(statearr_12644[10] = inst_12569);
(statearr_12644[11] = inst_12572);
(statearr_12644[12] = inst_12570);
(statearr_12644[13] = inst_12571);
return statearr_12644;
})();var statearr_12645_12728 = state_12633__$1;(statearr_12645_12728[2] = null);
(statearr_12645_12728[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12634 === 5))
{var inst_12508 = cljs.core.deref.call(null,cs);var inst_12509 = cljs.core.seq.call(null,inst_12508);var inst_12510 = inst_12509;var inst_12511 = null;var inst_12512 = 0;var inst_12513 = 0;var state_12633__$1 = (function (){var statearr_12646 = state_12633;(statearr_12646[14] = inst_12511);
(statearr_12646[15] = inst_12510);
(statearr_12646[16] = inst_12512);
(statearr_12646[17] = inst_12513);
return statearr_12646;
})();var statearr_12647_12729 = state_12633__$1;(statearr_12647_12729[2] = null);
(statearr_12647_12729[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12634 === 37))
{var inst_12590 = (state_12633[9]);var inst_12599 = cljs.core.first.call(null,inst_12590);var state_12633__$1 = (function (){var statearr_12648 = state_12633;(statearr_12648[18] = inst_12599);
return statearr_12648;
})();var statearr_12649_12730 = state_12633__$1;(statearr_12649_12730[2] = null);
(statearr_12649_12730[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12634 === 6))
{var inst_12561 = (state_12633[19]);var inst_12560 = cljs.core.deref.call(null,cs);var inst_12561__$1 = cljs.core.keys.call(null,inst_12560);var inst_12562 = cljs.core.count.call(null,inst_12561__$1);var inst_12563 = cljs.core.reset_BANG_.call(null,dctr,inst_12562);var inst_12568 = cljs.core.seq.call(null,inst_12561__$1);var inst_12569 = inst_12568;var inst_12570 = null;var inst_12571 = 0;var inst_12572 = 0;var state_12633__$1 = (function (){var statearr_12650 = state_12633;(statearr_12650[19] = inst_12561__$1);
(statearr_12650[10] = inst_12569);
(statearr_12650[11] = inst_12572);
(statearr_12650[12] = inst_12570);
(statearr_12650[13] = inst_12571);
(statearr_12650[20] = inst_12563);
return statearr_12650;
})();var statearr_12651_12731 = state_12633__$1;(statearr_12651_12731[2] = null);
(statearr_12651_12731[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12634 === 38))
{var inst_12612 = (state_12633[2]);var state_12633__$1 = state_12633;var statearr_12652_12732 = state_12633__$1;(statearr_12652_12732[2] = inst_12612);
(statearr_12652_12732[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12634 === 7))
{var inst_12629 = (state_12633[2]);var state_12633__$1 = state_12633;var statearr_12653_12733 = state_12633__$1;(statearr_12653_12733[2] = inst_12629);
(statearr_12653_12733[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12634 === 39))
{var inst_12590 = (state_12633[9]);var inst_12608 = (state_12633[2]);var inst_12609 = cljs.core.next.call(null,inst_12590);var inst_12569 = inst_12609;var inst_12570 = null;var inst_12571 = 0;var inst_12572 = 0;var state_12633__$1 = (function (){var statearr_12654 = state_12633;(statearr_12654[21] = inst_12608);
(statearr_12654[10] = inst_12569);
(statearr_12654[11] = inst_12572);
(statearr_12654[12] = inst_12570);
(statearr_12654[13] = inst_12571);
return statearr_12654;
})();var statearr_12655_12734 = state_12633__$1;(statearr_12655_12734[2] = null);
(statearr_12655_12734[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12634 === 8))
{var inst_12512 = (state_12633[16]);var inst_12513 = (state_12633[17]);var inst_12515 = (inst_12513 < inst_12512);var inst_12516 = inst_12515;var state_12633__$1 = state_12633;if(cljs.core.truth_(inst_12516))
{var statearr_12656_12735 = state_12633__$1;(statearr_12656_12735[1] = 10);
} else
{var statearr_12657_12736 = state_12633__$1;(statearr_12657_12736[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12634 === 40))
{var inst_12599 = (state_12633[18]);var inst_12600 = (state_12633[2]);var inst_12601 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12602 = cljs.core.async.untap_STAR_.call(null,m,inst_12599);var state_12633__$1 = (function (){var statearr_12658 = state_12633;(statearr_12658[22] = inst_12600);
(statearr_12658[23] = inst_12601);
return statearr_12658;
})();var statearr_12659_12737 = state_12633__$1;(statearr_12659_12737[2] = inst_12602);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12633__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12634 === 9))
{var inst_12558 = (state_12633[2]);var state_12633__$1 = state_12633;var statearr_12660_12738 = state_12633__$1;(statearr_12660_12738[2] = inst_12558);
(statearr_12660_12738[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12634 === 41))
{var inst_12599 = (state_12633[18]);var inst_12501 = (state_12633[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12633,40,Object,null,39);var inst_12606 = cljs.core.async.put_BANG_.call(null,inst_12599,inst_12501,done);var state_12633__$1 = state_12633;var statearr_12661_12739 = state_12633__$1;(statearr_12661_12739[2] = inst_12606);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12633__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12634 === 10))
{var inst_12511 = (state_12633[14]);var inst_12513 = (state_12633[17]);var inst_12519 = cljs.core._nth.call(null,inst_12511,inst_12513);var inst_12520 = cljs.core.nth.call(null,inst_12519,0,null);var inst_12521 = cljs.core.nth.call(null,inst_12519,1,null);var state_12633__$1 = (function (){var statearr_12662 = state_12633;(statearr_12662[24] = inst_12520);
return statearr_12662;
})();if(cljs.core.truth_(inst_12521))
{var statearr_12663_12740 = state_12633__$1;(statearr_12663_12740[1] = 13);
} else
{var statearr_12664_12741 = state_12633__$1;(statearr_12664_12741[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12634 === 42))
{var state_12633__$1 = state_12633;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12633__$1,45,dchan);
} else
{if((state_val_12634 === 11))
{var inst_12510 = (state_12633[15]);var inst_12530 = (state_12633[25]);var inst_12530__$1 = cljs.core.seq.call(null,inst_12510);var state_12633__$1 = (function (){var statearr_12665 = state_12633;(statearr_12665[25] = inst_12530__$1);
return statearr_12665;
})();if(inst_12530__$1)
{var statearr_12666_12742 = state_12633__$1;(statearr_12666_12742[1] = 16);
} else
{var statearr_12667_12743 = state_12633__$1;(statearr_12667_12743[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12634 === 43))
{var state_12633__$1 = state_12633;var statearr_12668_12744 = state_12633__$1;(statearr_12668_12744[2] = null);
(statearr_12668_12744[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12634 === 12))
{var inst_12556 = (state_12633[2]);var state_12633__$1 = state_12633;var statearr_12669_12745 = state_12633__$1;(statearr_12669_12745[2] = inst_12556);
(statearr_12669_12745[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12634 === 44))
{var inst_12626 = (state_12633[2]);var state_12633__$1 = (function (){var statearr_12670 = state_12633;(statearr_12670[26] = inst_12626);
return statearr_12670;
})();var statearr_12671_12746 = state_12633__$1;(statearr_12671_12746[2] = null);
(statearr_12671_12746[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12634 === 13))
{var inst_12520 = (state_12633[24]);var inst_12523 = cljs.core.async.close_BANG_.call(null,inst_12520);var state_12633__$1 = state_12633;var statearr_12672_12747 = state_12633__$1;(statearr_12672_12747[2] = inst_12523);
(statearr_12672_12747[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12634 === 45))
{var inst_12623 = (state_12633[2]);var state_12633__$1 = state_12633;var statearr_12676_12748 = state_12633__$1;(statearr_12676_12748[2] = inst_12623);
(statearr_12676_12748[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12634 === 14))
{var state_12633__$1 = state_12633;var statearr_12677_12749 = state_12633__$1;(statearr_12677_12749[2] = null);
(statearr_12677_12749[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12634 === 15))
{var inst_12511 = (state_12633[14]);var inst_12510 = (state_12633[15]);var inst_12512 = (state_12633[16]);var inst_12513 = (state_12633[17]);var inst_12526 = (state_12633[2]);var inst_12527 = (inst_12513 + 1);var tmp12673 = inst_12511;var tmp12674 = inst_12510;var tmp12675 = inst_12512;var inst_12510__$1 = tmp12674;var inst_12511__$1 = tmp12673;var inst_12512__$1 = tmp12675;var inst_12513__$1 = inst_12527;var state_12633__$1 = (function (){var statearr_12678 = state_12633;(statearr_12678[14] = inst_12511__$1);
(statearr_12678[15] = inst_12510__$1);
(statearr_12678[27] = inst_12526);
(statearr_12678[16] = inst_12512__$1);
(statearr_12678[17] = inst_12513__$1);
return statearr_12678;
})();var statearr_12679_12750 = state_12633__$1;(statearr_12679_12750[2] = null);
(statearr_12679_12750[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12634 === 16))
{var inst_12530 = (state_12633[25]);var inst_12532 = cljs.core.chunked_seq_QMARK_.call(null,inst_12530);var state_12633__$1 = state_12633;if(inst_12532)
{var statearr_12680_12751 = state_12633__$1;(statearr_12680_12751[1] = 19);
} else
{var statearr_12681_12752 = state_12633__$1;(statearr_12681_12752[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12634 === 17))
{var state_12633__$1 = state_12633;var statearr_12682_12753 = state_12633__$1;(statearr_12682_12753[2] = null);
(statearr_12682_12753[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12634 === 18))
{var inst_12554 = (state_12633[2]);var state_12633__$1 = state_12633;var statearr_12683_12754 = state_12633__$1;(statearr_12683_12754[2] = inst_12554);
(statearr_12683_12754[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12634 === 19))
{var inst_12530 = (state_12633[25]);var inst_12534 = cljs.core.chunk_first.call(null,inst_12530);var inst_12535 = cljs.core.chunk_rest.call(null,inst_12530);var inst_12536 = cljs.core.count.call(null,inst_12534);var inst_12510 = inst_12535;var inst_12511 = inst_12534;var inst_12512 = inst_12536;var inst_12513 = 0;var state_12633__$1 = (function (){var statearr_12684 = state_12633;(statearr_12684[14] = inst_12511);
(statearr_12684[15] = inst_12510);
(statearr_12684[16] = inst_12512);
(statearr_12684[17] = inst_12513);
return statearr_12684;
})();var statearr_12685_12755 = state_12633__$1;(statearr_12685_12755[2] = null);
(statearr_12685_12755[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12634 === 20))
{var inst_12530 = (state_12633[25]);var inst_12540 = cljs.core.first.call(null,inst_12530);var inst_12541 = cljs.core.nth.call(null,inst_12540,0,null);var inst_12542 = cljs.core.nth.call(null,inst_12540,1,null);var state_12633__$1 = (function (){var statearr_12686 = state_12633;(statearr_12686[28] = inst_12541);
return statearr_12686;
})();if(cljs.core.truth_(inst_12542))
{var statearr_12687_12756 = state_12633__$1;(statearr_12687_12756[1] = 22);
} else
{var statearr_12688_12757 = state_12633__$1;(statearr_12688_12757[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12634 === 21))
{var inst_12551 = (state_12633[2]);var state_12633__$1 = state_12633;var statearr_12689_12758 = state_12633__$1;(statearr_12689_12758[2] = inst_12551);
(statearr_12689_12758[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12634 === 22))
{var inst_12541 = (state_12633[28]);var inst_12544 = cljs.core.async.close_BANG_.call(null,inst_12541);var state_12633__$1 = state_12633;var statearr_12690_12759 = state_12633__$1;(statearr_12690_12759[2] = inst_12544);
(statearr_12690_12759[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12634 === 23))
{var state_12633__$1 = state_12633;var statearr_12691_12760 = state_12633__$1;(statearr_12691_12760[2] = null);
(statearr_12691_12760[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12634 === 24))
{var inst_12530 = (state_12633[25]);var inst_12547 = (state_12633[2]);var inst_12548 = cljs.core.next.call(null,inst_12530);var inst_12510 = inst_12548;var inst_12511 = null;var inst_12512 = 0;var inst_12513 = 0;var state_12633__$1 = (function (){var statearr_12692 = state_12633;(statearr_12692[14] = inst_12511);
(statearr_12692[15] = inst_12510);
(statearr_12692[29] = inst_12547);
(statearr_12692[16] = inst_12512);
(statearr_12692[17] = inst_12513);
return statearr_12692;
})();var statearr_12693_12761 = state_12633__$1;(statearr_12693_12761[2] = null);
(statearr_12693_12761[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12634 === 25))
{var inst_12572 = (state_12633[11]);var inst_12571 = (state_12633[13]);var inst_12574 = (inst_12572 < inst_12571);var inst_12575 = inst_12574;var state_12633__$1 = state_12633;if(cljs.core.truth_(inst_12575))
{var statearr_12694_12762 = state_12633__$1;(statearr_12694_12762[1] = 27);
} else
{var statearr_12695_12763 = state_12633__$1;(statearr_12695_12763[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12634 === 26))
{var inst_12561 = (state_12633[19]);var inst_12619 = (state_12633[2]);var inst_12620 = cljs.core.seq.call(null,inst_12561);var state_12633__$1 = (function (){var statearr_12696 = state_12633;(statearr_12696[30] = inst_12619);
return statearr_12696;
})();if(inst_12620)
{var statearr_12697_12764 = state_12633__$1;(statearr_12697_12764[1] = 42);
} else
{var statearr_12698_12765 = state_12633__$1;(statearr_12698_12765[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12634 === 27))
{var inst_12572 = (state_12633[11]);var inst_12570 = (state_12633[12]);var inst_12577 = cljs.core._nth.call(null,inst_12570,inst_12572);var state_12633__$1 = (function (){var statearr_12699 = state_12633;(statearr_12699[8] = inst_12577);
return statearr_12699;
})();var statearr_12700_12766 = state_12633__$1;(statearr_12700_12766[2] = null);
(statearr_12700_12766[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12634 === 28))
{var inst_12590 = (state_12633[9]);var inst_12569 = (state_12633[10]);var inst_12590__$1 = cljs.core.seq.call(null,inst_12569);var state_12633__$1 = (function (){var statearr_12704 = state_12633;(statearr_12704[9] = inst_12590__$1);
return statearr_12704;
})();if(inst_12590__$1)
{var statearr_12705_12767 = state_12633__$1;(statearr_12705_12767[1] = 33);
} else
{var statearr_12706_12768 = state_12633__$1;(statearr_12706_12768[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12634 === 29))
{var inst_12617 = (state_12633[2]);var state_12633__$1 = state_12633;var statearr_12707_12769 = state_12633__$1;(statearr_12707_12769[2] = inst_12617);
(statearr_12707_12769[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12634 === 30))
{var inst_12569 = (state_12633[10]);var inst_12572 = (state_12633[11]);var inst_12570 = (state_12633[12]);var inst_12571 = (state_12633[13]);var inst_12586 = (state_12633[2]);var inst_12587 = (inst_12572 + 1);var tmp12701 = inst_12569;var tmp12702 = inst_12570;var tmp12703 = inst_12571;var inst_12569__$1 = tmp12701;var inst_12570__$1 = tmp12702;var inst_12571__$1 = tmp12703;var inst_12572__$1 = inst_12587;var state_12633__$1 = (function (){var statearr_12708 = state_12633;(statearr_12708[31] = inst_12586);
(statearr_12708[10] = inst_12569__$1);
(statearr_12708[11] = inst_12572__$1);
(statearr_12708[12] = inst_12570__$1);
(statearr_12708[13] = inst_12571__$1);
return statearr_12708;
})();var statearr_12709_12770 = state_12633__$1;(statearr_12709_12770[2] = null);
(statearr_12709_12770[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12634 === 31))
{var inst_12577 = (state_12633[8]);var inst_12578 = (state_12633[2]);var inst_12579 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12580 = cljs.core.async.untap_STAR_.call(null,m,inst_12577);var state_12633__$1 = (function (){var statearr_12710 = state_12633;(statearr_12710[32] = inst_12578);
(statearr_12710[33] = inst_12579);
return statearr_12710;
})();var statearr_12711_12771 = state_12633__$1;(statearr_12711_12771[2] = inst_12580);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12633__$1);
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
});return ((function (switch__6644__auto__){
return (function() {
var state_machine__6645__auto__ = null;
var state_machine__6645__auto____0 = (function (){var statearr_12715 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12715[0] = state_machine__6645__auto__);
(statearr_12715[1] = 1);
return statearr_12715;
});
var state_machine__6645__auto____1 = (function (state_12633){while(true){
var ret_value__6646__auto__ = (function (){try{while(true){
var result__6647__auto__ = switch__6644__auto__.call(null,state_12633);if(cljs.core.keyword_identical_QMARK_.call(null,result__6647__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6647__auto__;
}
break;
}
}catch (e12716){if((e12716 instanceof Object))
{var ex__6648__auto__ = e12716;var statearr_12717_12772 = state_12633;(statearr_12717_12772[5] = ex__6648__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12633);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12716;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6646__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12773 = state_12633;
state_12633 = G__12773;
continue;
}
} else
{return ret_value__6646__auto__;
}
break;
}
});
state_machine__6645__auto__ = function(state_12633){
switch(arguments.length){
case 0:
return state_machine__6645__auto____0.call(this);
case 1:
return state_machine__6645__auto____1.call(this,state_12633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6645__auto____0;
state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6645__auto____1;
return state_machine__6645__auto__;
})()
;})(switch__6644__auto__))
})();var state__6661__auto__ = (function (){var statearr_12718 = f__6660__auto__.call(null);(statearr_12718[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6659__auto___12719);
return statearr_12718;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6661__auto__);
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
cljs.core.async.Mix = (function (){var obj12775 = {};return obj12775;
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
;var m = (function (){if(typeof cljs.core.async.t12885 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12885 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta12886){
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
this.meta12886 = meta12886;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12885.cljs$lang$type = true;
cljs.core.async.t12885.cljs$lang$ctorStr = "cljs.core.async/t12885";
cljs.core.async.t12885.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t12885");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12885.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12885.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12885.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12885.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12885.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12885.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12885.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12885.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12885.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12887){var self__ = this;
var _12887__$1 = this;return self__.meta12886;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12885.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12887,meta12886__$1){var self__ = this;
var _12887__$1 = this;return (new cljs.core.async.t12885(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta12886__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12885 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12885(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12886){return (new cljs.core.async.t12885(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12886));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12885(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6659__auto___12994 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6660__auto__ = (function (){var switch__6644__auto__ = (function (state_12952){var state_val_12953 = (state_12952[1]);if((state_val_12953 === 1))
{var inst_12891 = (state_12952[7]);var inst_12891__$1 = calc_state.call(null);var inst_12892 = cljs.core.seq_QMARK_.call(null,inst_12891__$1);var state_12952__$1 = (function (){var statearr_12954 = state_12952;(statearr_12954[7] = inst_12891__$1);
return statearr_12954;
})();if(inst_12892)
{var statearr_12955_12995 = state_12952__$1;(statearr_12955_12995[1] = 2);
} else
{var statearr_12956_12996 = state_12952__$1;(statearr_12956_12996[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12953 === 2))
{var inst_12891 = (state_12952[7]);var inst_12894 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12891);var state_12952__$1 = state_12952;var statearr_12957_12997 = state_12952__$1;(statearr_12957_12997[2] = inst_12894);
(statearr_12957_12997[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12953 === 3))
{var inst_12891 = (state_12952[7]);var state_12952__$1 = state_12952;var statearr_12958_12998 = state_12952__$1;(statearr_12958_12998[2] = inst_12891);
(statearr_12958_12998[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12953 === 4))
{var inst_12891 = (state_12952[7]);var inst_12897 = (state_12952[2]);var inst_12898 = cljs.core.get.call(null,inst_12897,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12899 = cljs.core.get.call(null,inst_12897,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12900 = cljs.core.get.call(null,inst_12897,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_12901 = inst_12891;var state_12952__$1 = (function (){var statearr_12959 = state_12952;(statearr_12959[8] = inst_12900);
(statearr_12959[9] = inst_12898);
(statearr_12959[10] = inst_12899);
(statearr_12959[11] = inst_12901);
return statearr_12959;
})();var statearr_12960_12999 = state_12952__$1;(statearr_12960_12999[2] = null);
(statearr_12960_12999[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12953 === 5))
{var inst_12901 = (state_12952[11]);var inst_12904 = cljs.core.seq_QMARK_.call(null,inst_12901);var state_12952__$1 = state_12952;if(inst_12904)
{var statearr_12961_13000 = state_12952__$1;(statearr_12961_13000[1] = 7);
} else
{var statearr_12962_13001 = state_12952__$1;(statearr_12962_13001[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12953 === 6))
{var inst_12950 = (state_12952[2]);var state_12952__$1 = state_12952;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12952__$1,inst_12950);
} else
{if((state_val_12953 === 7))
{var inst_12901 = (state_12952[11]);var inst_12906 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12901);var state_12952__$1 = state_12952;var statearr_12963_13002 = state_12952__$1;(statearr_12963_13002[2] = inst_12906);
(statearr_12963_13002[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12953 === 8))
{var inst_12901 = (state_12952[11]);var state_12952__$1 = state_12952;var statearr_12964_13003 = state_12952__$1;(statearr_12964_13003[2] = inst_12901);
(statearr_12964_13003[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12953 === 9))
{var inst_12909 = (state_12952[12]);var inst_12909__$1 = (state_12952[2]);var inst_12910 = cljs.core.get.call(null,inst_12909__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12911 = cljs.core.get.call(null,inst_12909__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12912 = cljs.core.get.call(null,inst_12909__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_12952__$1 = (function (){var statearr_12965 = state_12952;(statearr_12965[13] = inst_12912);
(statearr_12965[12] = inst_12909__$1);
(statearr_12965[14] = inst_12911);
return statearr_12965;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12952__$1,10,inst_12910);
} else
{if((state_val_12953 === 10))
{var inst_12916 = (state_12952[15]);var inst_12917 = (state_12952[16]);var inst_12915 = (state_12952[2]);var inst_12916__$1 = cljs.core.nth.call(null,inst_12915,0,null);var inst_12917__$1 = cljs.core.nth.call(null,inst_12915,1,null);var inst_12918 = (inst_12916__$1 == null);var inst_12919 = cljs.core._EQ_.call(null,inst_12917__$1,change);var inst_12920 = (inst_12918) || (inst_12919);var state_12952__$1 = (function (){var statearr_12966 = state_12952;(statearr_12966[15] = inst_12916__$1);
(statearr_12966[16] = inst_12917__$1);
return statearr_12966;
})();if(cljs.core.truth_(inst_12920))
{var statearr_12967_13004 = state_12952__$1;(statearr_12967_13004[1] = 11);
} else
{var statearr_12968_13005 = state_12952__$1;(statearr_12968_13005[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12953 === 11))
{var inst_12916 = (state_12952[15]);var inst_12922 = (inst_12916 == null);var state_12952__$1 = state_12952;if(cljs.core.truth_(inst_12922))
{var statearr_12969_13006 = state_12952__$1;(statearr_12969_13006[1] = 14);
} else
{var statearr_12970_13007 = state_12952__$1;(statearr_12970_13007[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12953 === 12))
{var inst_12912 = (state_12952[13]);var inst_12917 = (state_12952[16]);var inst_12931 = (state_12952[17]);var inst_12931__$1 = inst_12912.call(null,inst_12917);var state_12952__$1 = (function (){var statearr_12971 = state_12952;(statearr_12971[17] = inst_12931__$1);
return statearr_12971;
})();if(cljs.core.truth_(inst_12931__$1))
{var statearr_12972_13008 = state_12952__$1;(statearr_12972_13008[1] = 17);
} else
{var statearr_12973_13009 = state_12952__$1;(statearr_12973_13009[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12953 === 13))
{var inst_12948 = (state_12952[2]);var state_12952__$1 = state_12952;var statearr_12974_13010 = state_12952__$1;(statearr_12974_13010[2] = inst_12948);
(statearr_12974_13010[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12953 === 14))
{var inst_12917 = (state_12952[16]);var inst_12924 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12917);var state_12952__$1 = state_12952;var statearr_12975_13011 = state_12952__$1;(statearr_12975_13011[2] = inst_12924);
(statearr_12975_13011[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12953 === 15))
{var state_12952__$1 = state_12952;var statearr_12976_13012 = state_12952__$1;(statearr_12976_13012[2] = null);
(statearr_12976_13012[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12953 === 16))
{var inst_12927 = (state_12952[2]);var inst_12928 = calc_state.call(null);var inst_12901 = inst_12928;var state_12952__$1 = (function (){var statearr_12977 = state_12952;(statearr_12977[18] = inst_12927);
(statearr_12977[11] = inst_12901);
return statearr_12977;
})();var statearr_12978_13013 = state_12952__$1;(statearr_12978_13013[2] = null);
(statearr_12978_13013[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12953 === 17))
{var inst_12931 = (state_12952[17]);var state_12952__$1 = state_12952;var statearr_12979_13014 = state_12952__$1;(statearr_12979_13014[2] = inst_12931);
(statearr_12979_13014[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12953 === 18))
{var inst_12912 = (state_12952[13]);var inst_12917 = (state_12952[16]);var inst_12911 = (state_12952[14]);var inst_12934 = cljs.core.empty_QMARK_.call(null,inst_12912);var inst_12935 = inst_12911.call(null,inst_12917);var inst_12936 = cljs.core.not.call(null,inst_12935);var inst_12937 = (inst_12934) && (inst_12936);var state_12952__$1 = state_12952;var statearr_12980_13015 = state_12952__$1;(statearr_12980_13015[2] = inst_12937);
(statearr_12980_13015[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12953 === 19))
{var inst_12939 = (state_12952[2]);var state_12952__$1 = state_12952;if(cljs.core.truth_(inst_12939))
{var statearr_12981_13016 = state_12952__$1;(statearr_12981_13016[1] = 20);
} else
{var statearr_12982_13017 = state_12952__$1;(statearr_12982_13017[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12953 === 20))
{var inst_12916 = (state_12952[15]);var state_12952__$1 = state_12952;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12952__$1,23,out,inst_12916);
} else
{if((state_val_12953 === 21))
{var state_12952__$1 = state_12952;var statearr_12983_13018 = state_12952__$1;(statearr_12983_13018[2] = null);
(statearr_12983_13018[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12953 === 22))
{var inst_12909 = (state_12952[12]);var inst_12945 = (state_12952[2]);var inst_12901 = inst_12909;var state_12952__$1 = (function (){var statearr_12984 = state_12952;(statearr_12984[19] = inst_12945);
(statearr_12984[11] = inst_12901);
return statearr_12984;
})();var statearr_12985_13019 = state_12952__$1;(statearr_12985_13019[2] = null);
(statearr_12985_13019[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12953 === 23))
{var inst_12942 = (state_12952[2]);var state_12952__$1 = state_12952;var statearr_12986_13020 = state_12952__$1;(statearr_12986_13020[2] = inst_12942);
(statearr_12986_13020[1] = 22);
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
});return ((function (switch__6644__auto__){
return (function() {
var state_machine__6645__auto__ = null;
var state_machine__6645__auto____0 = (function (){var statearr_12990 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12990[0] = state_machine__6645__auto__);
(statearr_12990[1] = 1);
return statearr_12990;
});
var state_machine__6645__auto____1 = (function (state_12952){while(true){
var ret_value__6646__auto__ = (function (){try{while(true){
var result__6647__auto__ = switch__6644__auto__.call(null,state_12952);if(cljs.core.keyword_identical_QMARK_.call(null,result__6647__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6647__auto__;
}
break;
}
}catch (e12991){if((e12991 instanceof Object))
{var ex__6648__auto__ = e12991;var statearr_12992_13021 = state_12952;(statearr_12992_13021[5] = ex__6648__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12952);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12991;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6646__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13022 = state_12952;
state_12952 = G__13022;
continue;
}
} else
{return ret_value__6646__auto__;
}
break;
}
});
state_machine__6645__auto__ = function(state_12952){
switch(arguments.length){
case 0:
return state_machine__6645__auto____0.call(this);
case 1:
return state_machine__6645__auto____1.call(this,state_12952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6645__auto____0;
state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6645__auto____1;
return state_machine__6645__auto__;
})()
;})(switch__6644__auto__))
})();var state__6661__auto__ = (function (){var statearr_12993 = f__6660__auto__.call(null);(statearr_12993[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6659__auto___12994);
return statearr_12993;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6661__auto__);
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
cljs.core.async.Pub = (function (){var obj13024 = {};return obj13024;
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
return (function (p1__13025_SHARP_){if(cljs.core.truth_(p1__13025_SHARP_.call(null,topic)))
{return p1__13025_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13025_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3443__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13150 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13150 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13151){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13151 = meta13151;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13150.cljs$lang$type = true;
cljs.core.async.t13150.cljs$lang$ctorStr = "cljs.core.async/t13150";
cljs.core.async.t13150.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t13150");
});})(mults,ensure_mult))
;
cljs.core.async.t13150.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13150.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13150.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13150.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13150.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13150.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13150.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13150.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13152){var self__ = this;
var _13152__$1 = this;return self__.meta13151;
});})(mults,ensure_mult))
;
cljs.core.async.t13150.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13152,meta13151__$1){var self__ = this;
var _13152__$1 = this;return (new cljs.core.async.t13150(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13151__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13150 = ((function (mults,ensure_mult){
return (function __GT_t13150(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13151){return (new cljs.core.async.t13150(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13151));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13150(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6659__auto___13274 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6660__auto__ = (function (){var switch__6644__auto__ = (function (state_13226){var state_val_13227 = (state_13226[1]);if((state_val_13227 === 1))
{var state_13226__$1 = state_13226;var statearr_13228_13275 = state_13226__$1;(statearr_13228_13275[2] = null);
(statearr_13228_13275[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13227 === 2))
{var state_13226__$1 = state_13226;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13226__$1,4,ch);
} else
{if((state_val_13227 === 3))
{var inst_13224 = (state_13226[2]);var state_13226__$1 = state_13226;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13226__$1,inst_13224);
} else
{if((state_val_13227 === 4))
{var inst_13155 = (state_13226[7]);var inst_13155__$1 = (state_13226[2]);var inst_13156 = (inst_13155__$1 == null);var state_13226__$1 = (function (){var statearr_13229 = state_13226;(statearr_13229[7] = inst_13155__$1);
return statearr_13229;
})();if(cljs.core.truth_(inst_13156))
{var statearr_13230_13276 = state_13226__$1;(statearr_13230_13276[1] = 5);
} else
{var statearr_13231_13277 = state_13226__$1;(statearr_13231_13277[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13227 === 5))
{var inst_13162 = cljs.core.deref.call(null,mults);var inst_13163 = cljs.core.vals.call(null,inst_13162);var inst_13164 = cljs.core.seq.call(null,inst_13163);var inst_13165 = inst_13164;var inst_13166 = null;var inst_13167 = 0;var inst_13168 = 0;var state_13226__$1 = (function (){var statearr_13232 = state_13226;(statearr_13232[8] = inst_13168);
(statearr_13232[9] = inst_13166);
(statearr_13232[10] = inst_13167);
(statearr_13232[11] = inst_13165);
return statearr_13232;
})();var statearr_13233_13278 = state_13226__$1;(statearr_13233_13278[2] = null);
(statearr_13233_13278[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13227 === 6))
{var inst_13155 = (state_13226[7]);var inst_13203 = (state_13226[12]);var inst_13205 = (state_13226[13]);var inst_13203__$1 = topic_fn.call(null,inst_13155);var inst_13204 = cljs.core.deref.call(null,mults);var inst_13205__$1 = cljs.core.get.call(null,inst_13204,inst_13203__$1);var state_13226__$1 = (function (){var statearr_13234 = state_13226;(statearr_13234[12] = inst_13203__$1);
(statearr_13234[13] = inst_13205__$1);
return statearr_13234;
})();if(cljs.core.truth_(inst_13205__$1))
{var statearr_13235_13279 = state_13226__$1;(statearr_13235_13279[1] = 19);
} else
{var statearr_13236_13280 = state_13226__$1;(statearr_13236_13280[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13227 === 7))
{var inst_13222 = (state_13226[2]);var state_13226__$1 = state_13226;var statearr_13237_13281 = state_13226__$1;(statearr_13237_13281[2] = inst_13222);
(statearr_13237_13281[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13227 === 8))
{var inst_13168 = (state_13226[8]);var inst_13167 = (state_13226[10]);var inst_13170 = (inst_13168 < inst_13167);var inst_13171 = inst_13170;var state_13226__$1 = state_13226;if(cljs.core.truth_(inst_13171))
{var statearr_13241_13282 = state_13226__$1;(statearr_13241_13282[1] = 10);
} else
{var statearr_13242_13283 = state_13226__$1;(statearr_13242_13283[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13227 === 9))
{var inst_13201 = (state_13226[2]);var state_13226__$1 = state_13226;var statearr_13243_13284 = state_13226__$1;(statearr_13243_13284[2] = inst_13201);
(statearr_13243_13284[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13227 === 10))
{var inst_13168 = (state_13226[8]);var inst_13166 = (state_13226[9]);var inst_13167 = (state_13226[10]);var inst_13165 = (state_13226[11]);var inst_13173 = cljs.core._nth.call(null,inst_13166,inst_13168);var inst_13174 = cljs.core.async.muxch_STAR_.call(null,inst_13173);var inst_13175 = cljs.core.async.close_BANG_.call(null,inst_13174);var inst_13176 = (inst_13168 + 1);var tmp13238 = inst_13166;var tmp13239 = inst_13167;var tmp13240 = inst_13165;var inst_13165__$1 = tmp13240;var inst_13166__$1 = tmp13238;var inst_13167__$1 = tmp13239;var inst_13168__$1 = inst_13176;var state_13226__$1 = (function (){var statearr_13244 = state_13226;(statearr_13244[8] = inst_13168__$1);
(statearr_13244[9] = inst_13166__$1);
(statearr_13244[10] = inst_13167__$1);
(statearr_13244[11] = inst_13165__$1);
(statearr_13244[14] = inst_13175);
return statearr_13244;
})();var statearr_13245_13285 = state_13226__$1;(statearr_13245_13285[2] = null);
(statearr_13245_13285[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13227 === 11))
{var inst_13165 = (state_13226[11]);var inst_13179 = (state_13226[15]);var inst_13179__$1 = cljs.core.seq.call(null,inst_13165);var state_13226__$1 = (function (){var statearr_13246 = state_13226;(statearr_13246[15] = inst_13179__$1);
return statearr_13246;
})();if(inst_13179__$1)
{var statearr_13247_13286 = state_13226__$1;(statearr_13247_13286[1] = 13);
} else
{var statearr_13248_13287 = state_13226__$1;(statearr_13248_13287[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13227 === 12))
{var inst_13199 = (state_13226[2]);var state_13226__$1 = state_13226;var statearr_13249_13288 = state_13226__$1;(statearr_13249_13288[2] = inst_13199);
(statearr_13249_13288[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13227 === 13))
{var inst_13179 = (state_13226[15]);var inst_13181 = cljs.core.chunked_seq_QMARK_.call(null,inst_13179);var state_13226__$1 = state_13226;if(inst_13181)
{var statearr_13250_13289 = state_13226__$1;(statearr_13250_13289[1] = 16);
} else
{var statearr_13251_13290 = state_13226__$1;(statearr_13251_13290[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13227 === 14))
{var state_13226__$1 = state_13226;var statearr_13252_13291 = state_13226__$1;(statearr_13252_13291[2] = null);
(statearr_13252_13291[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13227 === 15))
{var inst_13197 = (state_13226[2]);var state_13226__$1 = state_13226;var statearr_13253_13292 = state_13226__$1;(statearr_13253_13292[2] = inst_13197);
(statearr_13253_13292[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13227 === 16))
{var inst_13179 = (state_13226[15]);var inst_13183 = cljs.core.chunk_first.call(null,inst_13179);var inst_13184 = cljs.core.chunk_rest.call(null,inst_13179);var inst_13185 = cljs.core.count.call(null,inst_13183);var inst_13165 = inst_13184;var inst_13166 = inst_13183;var inst_13167 = inst_13185;var inst_13168 = 0;var state_13226__$1 = (function (){var statearr_13254 = state_13226;(statearr_13254[8] = inst_13168);
(statearr_13254[9] = inst_13166);
(statearr_13254[10] = inst_13167);
(statearr_13254[11] = inst_13165);
return statearr_13254;
})();var statearr_13255_13293 = state_13226__$1;(statearr_13255_13293[2] = null);
(statearr_13255_13293[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13227 === 17))
{var inst_13179 = (state_13226[15]);var inst_13188 = cljs.core.first.call(null,inst_13179);var inst_13189 = cljs.core.async.muxch_STAR_.call(null,inst_13188);var inst_13190 = cljs.core.async.close_BANG_.call(null,inst_13189);var inst_13191 = cljs.core.next.call(null,inst_13179);var inst_13165 = inst_13191;var inst_13166 = null;var inst_13167 = 0;var inst_13168 = 0;var state_13226__$1 = (function (){var statearr_13256 = state_13226;(statearr_13256[8] = inst_13168);
(statearr_13256[9] = inst_13166);
(statearr_13256[10] = inst_13167);
(statearr_13256[11] = inst_13165);
(statearr_13256[16] = inst_13190);
return statearr_13256;
})();var statearr_13257_13294 = state_13226__$1;(statearr_13257_13294[2] = null);
(statearr_13257_13294[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13227 === 18))
{var inst_13194 = (state_13226[2]);var state_13226__$1 = state_13226;var statearr_13258_13295 = state_13226__$1;(statearr_13258_13295[2] = inst_13194);
(statearr_13258_13295[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13227 === 19))
{var state_13226__$1 = state_13226;var statearr_13259_13296 = state_13226__$1;(statearr_13259_13296[2] = null);
(statearr_13259_13296[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13227 === 20))
{var state_13226__$1 = state_13226;var statearr_13260_13297 = state_13226__$1;(statearr_13260_13297[2] = null);
(statearr_13260_13297[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13227 === 21))
{var inst_13219 = (state_13226[2]);var state_13226__$1 = (function (){var statearr_13261 = state_13226;(statearr_13261[17] = inst_13219);
return statearr_13261;
})();var statearr_13262_13298 = state_13226__$1;(statearr_13262_13298[2] = null);
(statearr_13262_13298[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13227 === 22))
{var inst_13216 = (state_13226[2]);var state_13226__$1 = state_13226;var statearr_13263_13299 = state_13226__$1;(statearr_13263_13299[2] = inst_13216);
(statearr_13263_13299[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13227 === 23))
{var inst_13203 = (state_13226[12]);var inst_13207 = (state_13226[2]);var inst_13208 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13203);var state_13226__$1 = (function (){var statearr_13264 = state_13226;(statearr_13264[18] = inst_13207);
return statearr_13264;
})();var statearr_13265_13300 = state_13226__$1;(statearr_13265_13300[2] = inst_13208);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13226__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13227 === 24))
{var inst_13155 = (state_13226[7]);var inst_13205 = (state_13226[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13226,23,Object,null,22);var inst_13212 = cljs.core.async.muxch_STAR_.call(null,inst_13205);var state_13226__$1 = state_13226;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13226__$1,25,inst_13212,inst_13155);
} else
{if((state_val_13227 === 25))
{var inst_13214 = (state_13226[2]);var state_13226__$1 = state_13226;var statearr_13266_13301 = state_13226__$1;(statearr_13266_13301[2] = inst_13214);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13226__$1);
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
});return ((function (switch__6644__auto__){
return (function() {
var state_machine__6645__auto__ = null;
var state_machine__6645__auto____0 = (function (){var statearr_13270 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13270[0] = state_machine__6645__auto__);
(statearr_13270[1] = 1);
return statearr_13270;
});
var state_machine__6645__auto____1 = (function (state_13226){while(true){
var ret_value__6646__auto__ = (function (){try{while(true){
var result__6647__auto__ = switch__6644__auto__.call(null,state_13226);if(cljs.core.keyword_identical_QMARK_.call(null,result__6647__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6647__auto__;
}
break;
}
}catch (e13271){if((e13271 instanceof Object))
{var ex__6648__auto__ = e13271;var statearr_13272_13302 = state_13226;(statearr_13272_13302[5] = ex__6648__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13226);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13271;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6646__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13303 = state_13226;
state_13226 = G__13303;
continue;
}
} else
{return ret_value__6646__auto__;
}
break;
}
});
state_machine__6645__auto__ = function(state_13226){
switch(arguments.length){
case 0:
return state_machine__6645__auto____0.call(this);
case 1:
return state_machine__6645__auto____1.call(this,state_13226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6645__auto____0;
state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6645__auto____1;
return state_machine__6645__auto__;
})()
;})(switch__6644__auto__))
})();var state__6661__auto__ = (function (){var statearr_13273 = f__6660__auto__.call(null);(statearr_13273[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6659__auto___13274);
return statearr_13273;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6661__auto__);
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
,cljs.core.range.call(null,cnt));var c__6659__auto___13440 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6660__auto__ = (function (){var switch__6644__auto__ = (function (state_13410){var state_val_13411 = (state_13410[1]);if((state_val_13411 === 1))
{var state_13410__$1 = state_13410;var statearr_13412_13441 = state_13410__$1;(statearr_13412_13441[2] = null);
(statearr_13412_13441[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13411 === 2))
{var inst_13373 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13374 = 0;var state_13410__$1 = (function (){var statearr_13413 = state_13410;(statearr_13413[7] = inst_13373);
(statearr_13413[8] = inst_13374);
return statearr_13413;
})();var statearr_13414_13442 = state_13410__$1;(statearr_13414_13442[2] = null);
(statearr_13414_13442[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13411 === 3))
{var inst_13408 = (state_13410[2]);var state_13410__$1 = state_13410;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13410__$1,inst_13408);
} else
{if((state_val_13411 === 4))
{var inst_13374 = (state_13410[8]);var inst_13376 = (inst_13374 < cnt);var state_13410__$1 = state_13410;if(cljs.core.truth_(inst_13376))
{var statearr_13415_13443 = state_13410__$1;(statearr_13415_13443[1] = 6);
} else
{var statearr_13416_13444 = state_13410__$1;(statearr_13416_13444[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13411 === 5))
{var inst_13394 = (state_13410[2]);var state_13410__$1 = (function (){var statearr_13417 = state_13410;(statearr_13417[9] = inst_13394);
return statearr_13417;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13410__$1,12,dchan);
} else
{if((state_val_13411 === 6))
{var state_13410__$1 = state_13410;var statearr_13418_13445 = state_13410__$1;(statearr_13418_13445[2] = null);
(statearr_13418_13445[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13411 === 7))
{var state_13410__$1 = state_13410;var statearr_13419_13446 = state_13410__$1;(statearr_13419_13446[2] = null);
(statearr_13419_13446[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13411 === 8))
{var inst_13392 = (state_13410[2]);var state_13410__$1 = state_13410;var statearr_13420_13447 = state_13410__$1;(statearr_13420_13447[2] = inst_13392);
(statearr_13420_13447[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13411 === 9))
{var inst_13374 = (state_13410[8]);var inst_13387 = (state_13410[2]);var inst_13388 = (inst_13374 + 1);var inst_13374__$1 = inst_13388;var state_13410__$1 = (function (){var statearr_13421 = state_13410;(statearr_13421[8] = inst_13374__$1);
(statearr_13421[10] = inst_13387);
return statearr_13421;
})();var statearr_13422_13448 = state_13410__$1;(statearr_13422_13448[2] = null);
(statearr_13422_13448[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13411 === 10))
{var inst_13378 = (state_13410[2]);var inst_13379 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13410__$1 = (function (){var statearr_13423 = state_13410;(statearr_13423[11] = inst_13378);
return statearr_13423;
})();var statearr_13424_13449 = state_13410__$1;(statearr_13424_13449[2] = inst_13379);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13410__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13411 === 11))
{var inst_13374 = (state_13410[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13410,10,Object,null,9);var inst_13383 = chs__$1.call(null,inst_13374);var inst_13384 = done.call(null,inst_13374);var inst_13385 = cljs.core.async.take_BANG_.call(null,inst_13383,inst_13384);var state_13410__$1 = state_13410;var statearr_13425_13450 = state_13410__$1;(statearr_13425_13450[2] = inst_13385);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13410__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13411 === 12))
{var inst_13396 = (state_13410[12]);var inst_13396__$1 = (state_13410[2]);var inst_13397 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13396__$1);var state_13410__$1 = (function (){var statearr_13426 = state_13410;(statearr_13426[12] = inst_13396__$1);
return statearr_13426;
})();if(cljs.core.truth_(inst_13397))
{var statearr_13427_13451 = state_13410__$1;(statearr_13427_13451[1] = 13);
} else
{var statearr_13428_13452 = state_13410__$1;(statearr_13428_13452[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13411 === 13))
{var inst_13399 = cljs.core.async.close_BANG_.call(null,out);var state_13410__$1 = state_13410;var statearr_13429_13453 = state_13410__$1;(statearr_13429_13453[2] = inst_13399);
(statearr_13429_13453[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13411 === 14))
{var inst_13396 = (state_13410[12]);var inst_13401 = cljs.core.apply.call(null,f,inst_13396);var state_13410__$1 = state_13410;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13410__$1,16,out,inst_13401);
} else
{if((state_val_13411 === 15))
{var inst_13406 = (state_13410[2]);var state_13410__$1 = state_13410;var statearr_13430_13454 = state_13410__$1;(statearr_13430_13454[2] = inst_13406);
(statearr_13430_13454[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13411 === 16))
{var inst_13403 = (state_13410[2]);var state_13410__$1 = (function (){var statearr_13431 = state_13410;(statearr_13431[13] = inst_13403);
return statearr_13431;
})();var statearr_13432_13455 = state_13410__$1;(statearr_13432_13455[2] = null);
(statearr_13432_13455[1] = 2);
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
});return ((function (switch__6644__auto__){
return (function() {
var state_machine__6645__auto__ = null;
var state_machine__6645__auto____0 = (function (){var statearr_13436 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13436[0] = state_machine__6645__auto__);
(statearr_13436[1] = 1);
return statearr_13436;
});
var state_machine__6645__auto____1 = (function (state_13410){while(true){
var ret_value__6646__auto__ = (function (){try{while(true){
var result__6647__auto__ = switch__6644__auto__.call(null,state_13410);if(cljs.core.keyword_identical_QMARK_.call(null,result__6647__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6647__auto__;
}
break;
}
}catch (e13437){if((e13437 instanceof Object))
{var ex__6648__auto__ = e13437;var statearr_13438_13456 = state_13410;(statearr_13438_13456[5] = ex__6648__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13410);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13437;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6646__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13457 = state_13410;
state_13410 = G__13457;
continue;
}
} else
{return ret_value__6646__auto__;
}
break;
}
});
state_machine__6645__auto__ = function(state_13410){
switch(arguments.length){
case 0:
return state_machine__6645__auto____0.call(this);
case 1:
return state_machine__6645__auto____1.call(this,state_13410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6645__auto____0;
state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6645__auto____1;
return state_machine__6645__auto__;
})()
;})(switch__6644__auto__))
})();var state__6661__auto__ = (function (){var statearr_13439 = f__6660__auto__.call(null);(statearr_13439[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6659__auto___13440);
return statearr_13439;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6661__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6659__auto___13565 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6660__auto__ = (function (){var switch__6644__auto__ = (function (state_13541){var state_val_13542 = (state_13541[1]);if((state_val_13542 === 1))
{var inst_13512 = cljs.core.vec.call(null,chs);var inst_13513 = inst_13512;var state_13541__$1 = (function (){var statearr_13543 = state_13541;(statearr_13543[7] = inst_13513);
return statearr_13543;
})();var statearr_13544_13566 = state_13541__$1;(statearr_13544_13566[2] = null);
(statearr_13544_13566[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13542 === 2))
{var inst_13513 = (state_13541[7]);var inst_13515 = cljs.core.count.call(null,inst_13513);var inst_13516 = (inst_13515 > 0);var state_13541__$1 = state_13541;if(cljs.core.truth_(inst_13516))
{var statearr_13545_13567 = state_13541__$1;(statearr_13545_13567[1] = 4);
} else
{var statearr_13546_13568 = state_13541__$1;(statearr_13546_13568[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13542 === 3))
{var inst_13539 = (state_13541[2]);var state_13541__$1 = state_13541;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13541__$1,inst_13539);
} else
{if((state_val_13542 === 4))
{var inst_13513 = (state_13541[7]);var state_13541__$1 = state_13541;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13541__$1,7,inst_13513);
} else
{if((state_val_13542 === 5))
{var inst_13535 = cljs.core.async.close_BANG_.call(null,out);var state_13541__$1 = state_13541;var statearr_13547_13569 = state_13541__$1;(statearr_13547_13569[2] = inst_13535);
(statearr_13547_13569[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13542 === 6))
{var inst_13537 = (state_13541[2]);var state_13541__$1 = state_13541;var statearr_13548_13570 = state_13541__$1;(statearr_13548_13570[2] = inst_13537);
(statearr_13548_13570[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13542 === 7))
{var inst_13521 = (state_13541[8]);var inst_13520 = (state_13541[9]);var inst_13520__$1 = (state_13541[2]);var inst_13521__$1 = cljs.core.nth.call(null,inst_13520__$1,0,null);var inst_13522 = cljs.core.nth.call(null,inst_13520__$1,1,null);var inst_13523 = (inst_13521__$1 == null);var state_13541__$1 = (function (){var statearr_13549 = state_13541;(statearr_13549[10] = inst_13522);
(statearr_13549[8] = inst_13521__$1);
(statearr_13549[9] = inst_13520__$1);
return statearr_13549;
})();if(cljs.core.truth_(inst_13523))
{var statearr_13550_13571 = state_13541__$1;(statearr_13550_13571[1] = 8);
} else
{var statearr_13551_13572 = state_13541__$1;(statearr_13551_13572[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13542 === 8))
{var inst_13513 = (state_13541[7]);var inst_13522 = (state_13541[10]);var inst_13521 = (state_13541[8]);var inst_13520 = (state_13541[9]);var inst_13525 = (function (){var c = inst_13522;var v = inst_13521;var vec__13518 = inst_13520;var cs = inst_13513;return ((function (c,v,vec__13518,cs,inst_13513,inst_13522,inst_13521,inst_13520,state_val_13542){
return (function (p1__13458_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13458_SHARP_);
});
;})(c,v,vec__13518,cs,inst_13513,inst_13522,inst_13521,inst_13520,state_val_13542))
})();var inst_13526 = cljs.core.filterv.call(null,inst_13525,inst_13513);var inst_13513__$1 = inst_13526;var state_13541__$1 = (function (){var statearr_13552 = state_13541;(statearr_13552[7] = inst_13513__$1);
return statearr_13552;
})();var statearr_13553_13573 = state_13541__$1;(statearr_13553_13573[2] = null);
(statearr_13553_13573[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13542 === 9))
{var inst_13521 = (state_13541[8]);var state_13541__$1 = state_13541;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13541__$1,11,out,inst_13521);
} else
{if((state_val_13542 === 10))
{var inst_13533 = (state_13541[2]);var state_13541__$1 = state_13541;var statearr_13555_13574 = state_13541__$1;(statearr_13555_13574[2] = inst_13533);
(statearr_13555_13574[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13542 === 11))
{var inst_13513 = (state_13541[7]);var inst_13530 = (state_13541[2]);var tmp13554 = inst_13513;var inst_13513__$1 = tmp13554;var state_13541__$1 = (function (){var statearr_13556 = state_13541;(statearr_13556[7] = inst_13513__$1);
(statearr_13556[11] = inst_13530);
return statearr_13556;
})();var statearr_13557_13575 = state_13541__$1;(statearr_13557_13575[2] = null);
(statearr_13557_13575[1] = 2);
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
});return ((function (switch__6644__auto__){
return (function() {
var state_machine__6645__auto__ = null;
var state_machine__6645__auto____0 = (function (){var statearr_13561 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13561[0] = state_machine__6645__auto__);
(statearr_13561[1] = 1);
return statearr_13561;
});
var state_machine__6645__auto____1 = (function (state_13541){while(true){
var ret_value__6646__auto__ = (function (){try{while(true){
var result__6647__auto__ = switch__6644__auto__.call(null,state_13541);if(cljs.core.keyword_identical_QMARK_.call(null,result__6647__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6647__auto__;
}
break;
}
}catch (e13562){if((e13562 instanceof Object))
{var ex__6648__auto__ = e13562;var statearr_13563_13576 = state_13541;(statearr_13563_13576[5] = ex__6648__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13541);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13562;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6646__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13577 = state_13541;
state_13541 = G__13577;
continue;
}
} else
{return ret_value__6646__auto__;
}
break;
}
});
state_machine__6645__auto__ = function(state_13541){
switch(arguments.length){
case 0:
return state_machine__6645__auto____0.call(this);
case 1:
return state_machine__6645__auto____1.call(this,state_13541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6645__auto____0;
state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6645__auto____1;
return state_machine__6645__auto__;
})()
;})(switch__6644__auto__))
})();var state__6661__auto__ = (function (){var statearr_13564 = f__6660__auto__.call(null);(statearr_13564[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6659__auto___13565);
return statearr_13564;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6661__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6659__auto___13670 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6660__auto__ = (function (){var switch__6644__auto__ = (function (state_13647){var state_val_13648 = (state_13647[1]);if((state_val_13648 === 1))
{var inst_13624 = 0;var state_13647__$1 = (function (){var statearr_13649 = state_13647;(statearr_13649[7] = inst_13624);
return statearr_13649;
})();var statearr_13650_13671 = state_13647__$1;(statearr_13650_13671[2] = null);
(statearr_13650_13671[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13648 === 2))
{var inst_13624 = (state_13647[7]);var inst_13626 = (inst_13624 < n);var state_13647__$1 = state_13647;if(cljs.core.truth_(inst_13626))
{var statearr_13651_13672 = state_13647__$1;(statearr_13651_13672[1] = 4);
} else
{var statearr_13652_13673 = state_13647__$1;(statearr_13652_13673[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13648 === 3))
{var inst_13644 = (state_13647[2]);var inst_13645 = cljs.core.async.close_BANG_.call(null,out);var state_13647__$1 = (function (){var statearr_13653 = state_13647;(statearr_13653[8] = inst_13644);
return statearr_13653;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13647__$1,inst_13645);
} else
{if((state_val_13648 === 4))
{var state_13647__$1 = state_13647;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13647__$1,7,ch);
} else
{if((state_val_13648 === 5))
{var state_13647__$1 = state_13647;var statearr_13654_13674 = state_13647__$1;(statearr_13654_13674[2] = null);
(statearr_13654_13674[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13648 === 6))
{var inst_13642 = (state_13647[2]);var state_13647__$1 = state_13647;var statearr_13655_13675 = state_13647__$1;(statearr_13655_13675[2] = inst_13642);
(statearr_13655_13675[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13648 === 7))
{var inst_13629 = (state_13647[9]);var inst_13629__$1 = (state_13647[2]);var inst_13630 = (inst_13629__$1 == null);var inst_13631 = cljs.core.not.call(null,inst_13630);var state_13647__$1 = (function (){var statearr_13656 = state_13647;(statearr_13656[9] = inst_13629__$1);
return statearr_13656;
})();if(inst_13631)
{var statearr_13657_13676 = state_13647__$1;(statearr_13657_13676[1] = 8);
} else
{var statearr_13658_13677 = state_13647__$1;(statearr_13658_13677[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13648 === 8))
{var inst_13629 = (state_13647[9]);var state_13647__$1 = state_13647;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13647__$1,11,out,inst_13629);
} else
{if((state_val_13648 === 9))
{var state_13647__$1 = state_13647;var statearr_13659_13678 = state_13647__$1;(statearr_13659_13678[2] = null);
(statearr_13659_13678[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13648 === 10))
{var inst_13639 = (state_13647[2]);var state_13647__$1 = state_13647;var statearr_13660_13679 = state_13647__$1;(statearr_13660_13679[2] = inst_13639);
(statearr_13660_13679[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13648 === 11))
{var inst_13624 = (state_13647[7]);var inst_13634 = (state_13647[2]);var inst_13635 = (inst_13624 + 1);var inst_13624__$1 = inst_13635;var state_13647__$1 = (function (){var statearr_13661 = state_13647;(statearr_13661[10] = inst_13634);
(statearr_13661[7] = inst_13624__$1);
return statearr_13661;
})();var statearr_13662_13680 = state_13647__$1;(statearr_13662_13680[2] = null);
(statearr_13662_13680[1] = 2);
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
});return ((function (switch__6644__auto__){
return (function() {
var state_machine__6645__auto__ = null;
var state_machine__6645__auto____0 = (function (){var statearr_13666 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13666[0] = state_machine__6645__auto__);
(statearr_13666[1] = 1);
return statearr_13666;
});
var state_machine__6645__auto____1 = (function (state_13647){while(true){
var ret_value__6646__auto__ = (function (){try{while(true){
var result__6647__auto__ = switch__6644__auto__.call(null,state_13647);if(cljs.core.keyword_identical_QMARK_.call(null,result__6647__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6647__auto__;
}
break;
}
}catch (e13667){if((e13667 instanceof Object))
{var ex__6648__auto__ = e13667;var statearr_13668_13681 = state_13647;(statearr_13668_13681[5] = ex__6648__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13647);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13667;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6646__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13682 = state_13647;
state_13647 = G__13682;
continue;
}
} else
{return ret_value__6646__auto__;
}
break;
}
});
state_machine__6645__auto__ = function(state_13647){
switch(arguments.length){
case 0:
return state_machine__6645__auto____0.call(this);
case 1:
return state_machine__6645__auto____1.call(this,state_13647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6645__auto____0;
state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6645__auto____1;
return state_machine__6645__auto__;
})()
;})(switch__6644__auto__))
})();var state__6661__auto__ = (function (){var statearr_13669 = f__6660__auto__.call(null);(statearr_13669[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6659__auto___13670);
return statearr_13669;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6661__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6659__auto___13779 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6660__auto__ = (function (){var switch__6644__auto__ = (function (state_13754){var state_val_13755 = (state_13754[1]);if((state_val_13755 === 1))
{var inst_13731 = null;var state_13754__$1 = (function (){var statearr_13756 = state_13754;(statearr_13756[7] = inst_13731);
return statearr_13756;
})();var statearr_13757_13780 = state_13754__$1;(statearr_13757_13780[2] = null);
(statearr_13757_13780[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13755 === 2))
{var state_13754__$1 = state_13754;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13754__$1,4,ch);
} else
{if((state_val_13755 === 3))
{var inst_13751 = (state_13754[2]);var inst_13752 = cljs.core.async.close_BANG_.call(null,out);var state_13754__$1 = (function (){var statearr_13758 = state_13754;(statearr_13758[8] = inst_13751);
return statearr_13758;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13754__$1,inst_13752);
} else
{if((state_val_13755 === 4))
{var inst_13734 = (state_13754[9]);var inst_13734__$1 = (state_13754[2]);var inst_13735 = (inst_13734__$1 == null);var inst_13736 = cljs.core.not.call(null,inst_13735);var state_13754__$1 = (function (){var statearr_13759 = state_13754;(statearr_13759[9] = inst_13734__$1);
return statearr_13759;
})();if(inst_13736)
{var statearr_13760_13781 = state_13754__$1;(statearr_13760_13781[1] = 5);
} else
{var statearr_13761_13782 = state_13754__$1;(statearr_13761_13782[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13755 === 5))
{var inst_13734 = (state_13754[9]);var inst_13731 = (state_13754[7]);var inst_13738 = cljs.core._EQ_.call(null,inst_13734,inst_13731);var state_13754__$1 = state_13754;if(inst_13738)
{var statearr_13762_13783 = state_13754__$1;(statearr_13762_13783[1] = 8);
} else
{var statearr_13763_13784 = state_13754__$1;(statearr_13763_13784[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13755 === 6))
{var state_13754__$1 = state_13754;var statearr_13765_13785 = state_13754__$1;(statearr_13765_13785[2] = null);
(statearr_13765_13785[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13755 === 7))
{var inst_13749 = (state_13754[2]);var state_13754__$1 = state_13754;var statearr_13766_13786 = state_13754__$1;(statearr_13766_13786[2] = inst_13749);
(statearr_13766_13786[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13755 === 8))
{var inst_13731 = (state_13754[7]);var tmp13764 = inst_13731;var inst_13731__$1 = tmp13764;var state_13754__$1 = (function (){var statearr_13767 = state_13754;(statearr_13767[7] = inst_13731__$1);
return statearr_13767;
})();var statearr_13768_13787 = state_13754__$1;(statearr_13768_13787[2] = null);
(statearr_13768_13787[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13755 === 9))
{var inst_13734 = (state_13754[9]);var state_13754__$1 = state_13754;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13754__$1,11,out,inst_13734);
} else
{if((state_val_13755 === 10))
{var inst_13746 = (state_13754[2]);var state_13754__$1 = state_13754;var statearr_13769_13788 = state_13754__$1;(statearr_13769_13788[2] = inst_13746);
(statearr_13769_13788[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13755 === 11))
{var inst_13734 = (state_13754[9]);var inst_13743 = (state_13754[2]);var inst_13731 = inst_13734;var state_13754__$1 = (function (){var statearr_13770 = state_13754;(statearr_13770[10] = inst_13743);
(statearr_13770[7] = inst_13731);
return statearr_13770;
})();var statearr_13771_13789 = state_13754__$1;(statearr_13771_13789[2] = null);
(statearr_13771_13789[1] = 2);
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
});return ((function (switch__6644__auto__){
return (function() {
var state_machine__6645__auto__ = null;
var state_machine__6645__auto____0 = (function (){var statearr_13775 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13775[0] = state_machine__6645__auto__);
(statearr_13775[1] = 1);
return statearr_13775;
});
var state_machine__6645__auto____1 = (function (state_13754){while(true){
var ret_value__6646__auto__ = (function (){try{while(true){
var result__6647__auto__ = switch__6644__auto__.call(null,state_13754);if(cljs.core.keyword_identical_QMARK_.call(null,result__6647__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6647__auto__;
}
break;
}
}catch (e13776){if((e13776 instanceof Object))
{var ex__6648__auto__ = e13776;var statearr_13777_13790 = state_13754;(statearr_13777_13790[5] = ex__6648__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13754);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13776;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6646__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13791 = state_13754;
state_13754 = G__13791;
continue;
}
} else
{return ret_value__6646__auto__;
}
break;
}
});
state_machine__6645__auto__ = function(state_13754){
switch(arguments.length){
case 0:
return state_machine__6645__auto____0.call(this);
case 1:
return state_machine__6645__auto____1.call(this,state_13754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6645__auto____0;
state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6645__auto____1;
return state_machine__6645__auto__;
})()
;})(switch__6644__auto__))
})();var state__6661__auto__ = (function (){var statearr_13778 = f__6660__auto__.call(null);(statearr_13778[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6659__auto___13779);
return statearr_13778;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6661__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6659__auto___13926 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6660__auto__ = (function (){var switch__6644__auto__ = (function (state_13896){var state_val_13897 = (state_13896[1]);if((state_val_13897 === 1))
{var inst_13859 = (new Array(n));var inst_13860 = inst_13859;var inst_13861 = 0;var state_13896__$1 = (function (){var statearr_13898 = state_13896;(statearr_13898[7] = inst_13861);
(statearr_13898[8] = inst_13860);
return statearr_13898;
})();var statearr_13899_13927 = state_13896__$1;(statearr_13899_13927[2] = null);
(statearr_13899_13927[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13897 === 2))
{var state_13896__$1 = state_13896;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13896__$1,4,ch);
} else
{if((state_val_13897 === 3))
{var inst_13894 = (state_13896[2]);var state_13896__$1 = state_13896;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13896__$1,inst_13894);
} else
{if((state_val_13897 === 4))
{var inst_13864 = (state_13896[9]);var inst_13864__$1 = (state_13896[2]);var inst_13865 = (inst_13864__$1 == null);var inst_13866 = cljs.core.not.call(null,inst_13865);var state_13896__$1 = (function (){var statearr_13900 = state_13896;(statearr_13900[9] = inst_13864__$1);
return statearr_13900;
})();if(inst_13866)
{var statearr_13901_13928 = state_13896__$1;(statearr_13901_13928[1] = 5);
} else
{var statearr_13902_13929 = state_13896__$1;(statearr_13902_13929[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13897 === 5))
{var inst_13869 = (state_13896[10]);var inst_13864 = (state_13896[9]);var inst_13861 = (state_13896[7]);var inst_13860 = (state_13896[8]);var inst_13868 = (inst_13860[inst_13861] = inst_13864);var inst_13869__$1 = (inst_13861 + 1);var inst_13870 = (inst_13869__$1 < n);var state_13896__$1 = (function (){var statearr_13903 = state_13896;(statearr_13903[11] = inst_13868);
(statearr_13903[10] = inst_13869__$1);
return statearr_13903;
})();if(cljs.core.truth_(inst_13870))
{var statearr_13904_13930 = state_13896__$1;(statearr_13904_13930[1] = 8);
} else
{var statearr_13905_13931 = state_13896__$1;(statearr_13905_13931[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13897 === 6))
{var inst_13861 = (state_13896[7]);var inst_13882 = (inst_13861 > 0);var state_13896__$1 = state_13896;if(cljs.core.truth_(inst_13882))
{var statearr_13907_13932 = state_13896__$1;(statearr_13907_13932[1] = 12);
} else
{var statearr_13908_13933 = state_13896__$1;(statearr_13908_13933[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13897 === 7))
{var inst_13892 = (state_13896[2]);var state_13896__$1 = state_13896;var statearr_13909_13934 = state_13896__$1;(statearr_13909_13934[2] = inst_13892);
(statearr_13909_13934[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13897 === 8))
{var inst_13869 = (state_13896[10]);var inst_13860 = (state_13896[8]);var tmp13906 = inst_13860;var inst_13860__$1 = tmp13906;var inst_13861 = inst_13869;var state_13896__$1 = (function (){var statearr_13910 = state_13896;(statearr_13910[7] = inst_13861);
(statearr_13910[8] = inst_13860__$1);
return statearr_13910;
})();var statearr_13911_13935 = state_13896__$1;(statearr_13911_13935[2] = null);
(statearr_13911_13935[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13897 === 9))
{var inst_13860 = (state_13896[8]);var inst_13874 = cljs.core.vec.call(null,inst_13860);var state_13896__$1 = state_13896;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13896__$1,11,out,inst_13874);
} else
{if((state_val_13897 === 10))
{var inst_13880 = (state_13896[2]);var state_13896__$1 = state_13896;var statearr_13912_13936 = state_13896__$1;(statearr_13912_13936[2] = inst_13880);
(statearr_13912_13936[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13897 === 11))
{var inst_13876 = (state_13896[2]);var inst_13877 = (new Array(n));var inst_13860 = inst_13877;var inst_13861 = 0;var state_13896__$1 = (function (){var statearr_13913 = state_13896;(statearr_13913[12] = inst_13876);
(statearr_13913[7] = inst_13861);
(statearr_13913[8] = inst_13860);
return statearr_13913;
})();var statearr_13914_13937 = state_13896__$1;(statearr_13914_13937[2] = null);
(statearr_13914_13937[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13897 === 12))
{var inst_13860 = (state_13896[8]);var inst_13884 = cljs.core.vec.call(null,inst_13860);var state_13896__$1 = state_13896;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13896__$1,15,out,inst_13884);
} else
{if((state_val_13897 === 13))
{var state_13896__$1 = state_13896;var statearr_13915_13938 = state_13896__$1;(statearr_13915_13938[2] = null);
(statearr_13915_13938[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13897 === 14))
{var inst_13889 = (state_13896[2]);var inst_13890 = cljs.core.async.close_BANG_.call(null,out);var state_13896__$1 = (function (){var statearr_13916 = state_13896;(statearr_13916[13] = inst_13889);
return statearr_13916;
})();var statearr_13917_13939 = state_13896__$1;(statearr_13917_13939[2] = inst_13890);
(statearr_13917_13939[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13897 === 15))
{var inst_13886 = (state_13896[2]);var state_13896__$1 = state_13896;var statearr_13918_13940 = state_13896__$1;(statearr_13918_13940[2] = inst_13886);
(statearr_13918_13940[1] = 14);
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
});return ((function (switch__6644__auto__){
return (function() {
var state_machine__6645__auto__ = null;
var state_machine__6645__auto____0 = (function (){var statearr_13922 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13922[0] = state_machine__6645__auto__);
(statearr_13922[1] = 1);
return statearr_13922;
});
var state_machine__6645__auto____1 = (function (state_13896){while(true){
var ret_value__6646__auto__ = (function (){try{while(true){
var result__6647__auto__ = switch__6644__auto__.call(null,state_13896);if(cljs.core.keyword_identical_QMARK_.call(null,result__6647__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6647__auto__;
}
break;
}
}catch (e13923){if((e13923 instanceof Object))
{var ex__6648__auto__ = e13923;var statearr_13924_13941 = state_13896;(statearr_13924_13941[5] = ex__6648__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13896);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13923;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6646__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13942 = state_13896;
state_13896 = G__13942;
continue;
}
} else
{return ret_value__6646__auto__;
}
break;
}
});
state_machine__6645__auto__ = function(state_13896){
switch(arguments.length){
case 0:
return state_machine__6645__auto____0.call(this);
case 1:
return state_machine__6645__auto____1.call(this,state_13896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6645__auto____0;
state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6645__auto____1;
return state_machine__6645__auto__;
})()
;})(switch__6644__auto__))
})();var state__6661__auto__ = (function (){var statearr_13925 = f__6660__auto__.call(null);(statearr_13925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6659__auto___13926);
return statearr_13925;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6661__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6659__auto___14085 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6660__auto__ = (function (){var switch__6644__auto__ = (function (state_14055){var state_val_14056 = (state_14055[1]);if((state_val_14056 === 1))
{var inst_14014 = [];var inst_14015 = inst_14014;var inst_14016 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_14055__$1 = (function (){var statearr_14057 = state_14055;(statearr_14057[7] = inst_14016);
(statearr_14057[8] = inst_14015);
return statearr_14057;
})();var statearr_14058_14086 = state_14055__$1;(statearr_14058_14086[2] = null);
(statearr_14058_14086[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14056 === 2))
{var state_14055__$1 = state_14055;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14055__$1,4,ch);
} else
{if((state_val_14056 === 3))
{var inst_14053 = (state_14055[2]);var state_14055__$1 = state_14055;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14055__$1,inst_14053);
} else
{if((state_val_14056 === 4))
{var inst_14019 = (state_14055[9]);var inst_14019__$1 = (state_14055[2]);var inst_14020 = (inst_14019__$1 == null);var inst_14021 = cljs.core.not.call(null,inst_14020);var state_14055__$1 = (function (){var statearr_14059 = state_14055;(statearr_14059[9] = inst_14019__$1);
return statearr_14059;
})();if(inst_14021)
{var statearr_14060_14087 = state_14055__$1;(statearr_14060_14087[1] = 5);
} else
{var statearr_14061_14088 = state_14055__$1;(statearr_14061_14088[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14056 === 5))
{var inst_14016 = (state_14055[7]);var inst_14023 = (state_14055[10]);var inst_14019 = (state_14055[9]);var inst_14023__$1 = f.call(null,inst_14019);var inst_14024 = cljs.core._EQ_.call(null,inst_14023__$1,inst_14016);var inst_14025 = cljs.core.keyword_identical_QMARK_.call(null,inst_14016,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_14026 = (inst_14024) || (inst_14025);var state_14055__$1 = (function (){var statearr_14062 = state_14055;(statearr_14062[10] = inst_14023__$1);
return statearr_14062;
})();if(cljs.core.truth_(inst_14026))
{var statearr_14063_14089 = state_14055__$1;(statearr_14063_14089[1] = 8);
} else
{var statearr_14064_14090 = state_14055__$1;(statearr_14064_14090[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14056 === 6))
{var inst_14015 = (state_14055[8]);var inst_14040 = inst_14015.length;var inst_14041 = (inst_14040 > 0);var state_14055__$1 = state_14055;if(cljs.core.truth_(inst_14041))
{var statearr_14066_14091 = state_14055__$1;(statearr_14066_14091[1] = 12);
} else
{var statearr_14067_14092 = state_14055__$1;(statearr_14067_14092[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14056 === 7))
{var inst_14051 = (state_14055[2]);var state_14055__$1 = state_14055;var statearr_14068_14093 = state_14055__$1;(statearr_14068_14093[2] = inst_14051);
(statearr_14068_14093[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14056 === 8))
{var inst_14015 = (state_14055[8]);var inst_14023 = (state_14055[10]);var inst_14019 = (state_14055[9]);var inst_14028 = inst_14015.push(inst_14019);var tmp14065 = inst_14015;var inst_14015__$1 = tmp14065;var inst_14016 = inst_14023;var state_14055__$1 = (function (){var statearr_14069 = state_14055;(statearr_14069[7] = inst_14016);
(statearr_14069[8] = inst_14015__$1);
(statearr_14069[11] = inst_14028);
return statearr_14069;
})();var statearr_14070_14094 = state_14055__$1;(statearr_14070_14094[2] = null);
(statearr_14070_14094[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14056 === 9))
{var inst_14015 = (state_14055[8]);var inst_14031 = cljs.core.vec.call(null,inst_14015);var state_14055__$1 = state_14055;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14055__$1,11,out,inst_14031);
} else
{if((state_val_14056 === 10))
{var inst_14038 = (state_14055[2]);var state_14055__$1 = state_14055;var statearr_14071_14095 = state_14055__$1;(statearr_14071_14095[2] = inst_14038);
(statearr_14071_14095[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14056 === 11))
{var inst_14023 = (state_14055[10]);var inst_14019 = (state_14055[9]);var inst_14033 = (state_14055[2]);var inst_14034 = [];var inst_14035 = inst_14034.push(inst_14019);var inst_14015 = inst_14034;var inst_14016 = inst_14023;var state_14055__$1 = (function (){var statearr_14072 = state_14055;(statearr_14072[7] = inst_14016);
(statearr_14072[8] = inst_14015);
(statearr_14072[12] = inst_14035);
(statearr_14072[13] = inst_14033);
return statearr_14072;
})();var statearr_14073_14096 = state_14055__$1;(statearr_14073_14096[2] = null);
(statearr_14073_14096[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14056 === 12))
{var inst_14015 = (state_14055[8]);var inst_14043 = cljs.core.vec.call(null,inst_14015);var state_14055__$1 = state_14055;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14055__$1,15,out,inst_14043);
} else
{if((state_val_14056 === 13))
{var state_14055__$1 = state_14055;var statearr_14074_14097 = state_14055__$1;(statearr_14074_14097[2] = null);
(statearr_14074_14097[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14056 === 14))
{var inst_14048 = (state_14055[2]);var inst_14049 = cljs.core.async.close_BANG_.call(null,out);var state_14055__$1 = (function (){var statearr_14075 = state_14055;(statearr_14075[14] = inst_14048);
return statearr_14075;
})();var statearr_14076_14098 = state_14055__$1;(statearr_14076_14098[2] = inst_14049);
(statearr_14076_14098[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14056 === 15))
{var inst_14045 = (state_14055[2]);var state_14055__$1 = state_14055;var statearr_14077_14099 = state_14055__$1;(statearr_14077_14099[2] = inst_14045);
(statearr_14077_14099[1] = 14);
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
});return ((function (switch__6644__auto__){
return (function() {
var state_machine__6645__auto__ = null;
var state_machine__6645__auto____0 = (function (){var statearr_14081 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14081[0] = state_machine__6645__auto__);
(statearr_14081[1] = 1);
return statearr_14081;
});
var state_machine__6645__auto____1 = (function (state_14055){while(true){
var ret_value__6646__auto__ = (function (){try{while(true){
var result__6647__auto__ = switch__6644__auto__.call(null,state_14055);if(cljs.core.keyword_identical_QMARK_.call(null,result__6647__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6647__auto__;
}
break;
}
}catch (e14082){if((e14082 instanceof Object))
{var ex__6648__auto__ = e14082;var statearr_14083_14100 = state_14055;(statearr_14083_14100[5] = ex__6648__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14055);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14082;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6646__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14101 = state_14055;
state_14055 = G__14101;
continue;
}
} else
{return ret_value__6646__auto__;
}
break;
}
});
state_machine__6645__auto__ = function(state_14055){
switch(arguments.length){
case 0:
return state_machine__6645__auto____0.call(this);
case 1:
return state_machine__6645__auto____1.call(this,state_14055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6645__auto____0;
state_machine__6645__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6645__auto____1;
return state_machine__6645__auto__;
})()
;})(switch__6644__auto__))
})();var state__6661__auto__ = (function (){var statearr_14084 = f__6660__auto__.call(null);(statearr_14084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6659__auto___14085);
return statearr_14084;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6661__auto__);
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