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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11104 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11104 = (function (f,fn_handler,meta11105){
this.f = f;
this.fn_handler = fn_handler;
this.meta11105 = meta11105;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11104.cljs$lang$type = true;
cljs.core.async.t11104.cljs$lang$ctorStr = "cljs.core.async/t11104";
cljs.core.async.t11104.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11104");
});
cljs.core.async.t11104.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11104.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11104.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11104.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11106){var self__ = this;
var _11106__$1 = this;return self__.meta11105;
});
cljs.core.async.t11104.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11106,meta11105__$1){var self__ = this;
var _11106__$1 = this;return (new cljs.core.async.t11104(self__.f,self__.fn_handler,meta11105__$1));
});
cljs.core.async.__GT_t11104 = (function __GT_t11104(f__$1,fn_handler__$1,meta11105){return (new cljs.core.async.t11104(f__$1,fn_handler__$1,meta11105));
});
}
return (new cljs.core.async.t11104(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11108 = buff;if(G__11108)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__11108.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11108.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11108);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11108);
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
{var val_11109 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11109);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_11109);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4291__auto___11110 = n;var x_11111 = 0;while(true){
if((x_11111 < n__4291__auto___11110))
{(a[x_11111] = 0);
{
var G__11112 = (x_11111 + 1);
x_11111 = G__11112;
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
var G__11113 = (i + 1);
i = G__11113;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11117 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11117 = (function (flag,alt_flag,meta11118){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11118 = meta11118;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11117.cljs$lang$type = true;
cljs.core.async.t11117.cljs$lang$ctorStr = "cljs.core.async/t11117";
cljs.core.async.t11117.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11117");
});
cljs.core.async.t11117.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11117.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t11117.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t11117.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11119){var self__ = this;
var _11119__$1 = this;return self__.meta11118;
});
cljs.core.async.t11117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11119,meta11118__$1){var self__ = this;
var _11119__$1 = this;return (new cljs.core.async.t11117(self__.flag,self__.alt_flag,meta11118__$1));
});
cljs.core.async.__GT_t11117 = (function __GT_t11117(flag__$1,alt_flag__$1,meta11118){return (new cljs.core.async.t11117(flag__$1,alt_flag__$1,meta11118));
});
}
return (new cljs.core.async.t11117(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11123 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11123 = (function (cb,flag,alt_handler,meta11124){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11124 = meta11124;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11123.cljs$lang$type = true;
cljs.core.async.t11123.cljs$lang$ctorStr = "cljs.core.async/t11123";
cljs.core.async.t11123.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11123");
});
cljs.core.async.t11123.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11123.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11123.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11123.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11125){var self__ = this;
var _11125__$1 = this;return self__.meta11124;
});
cljs.core.async.t11123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11125,meta11124__$1){var self__ = this;
var _11125__$1 = this;return (new cljs.core.async.t11123(self__.cb,self__.flag,self__.alt_handler,meta11124__$1));
});
cljs.core.async.__GT_t11123 = (function __GT_t11123(cb__$1,flag__$1,alt_handler__$1,meta11124){return (new cljs.core.async.t11123(cb__$1,flag__$1,alt_handler__$1,meta11124));
});
}
return (new cljs.core.async.t11123(cb,flag,alt_handler,null));
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
return (function (p1__11126_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11126_SHARP_,port], null));
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
var G__11127 = (i + 1);
i = G__11127;
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
var alts_BANG___delegate = function (ports,p__11128){var map__11130 = p__11128;var map__11130__$1 = ((cljs.core.seq_QMARK_.call(null,map__11130))?cljs.core.apply.call(null,cljs.core.hash_map,map__11130):map__11130);var opts = map__11130__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__11128 = null;if (arguments.length > 1) {
  p__11128 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11128);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11131){
var ports = cljs.core.first(arglist__11131);
var p__11128 = cljs.core.rest(arglist__11131);
return alts_BANG___delegate(ports,p__11128);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11139 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11139 = (function (ch,f,map_LT_,meta11140){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11140 = meta11140;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11139.cljs$lang$type = true;
cljs.core.async.t11139.cljs$lang$ctorStr = "cljs.core.async/t11139";
cljs.core.async.t11139.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11139");
});
cljs.core.async.t11139.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11139.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t11139.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11139.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11142 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11142 = (function (fn1,_,meta11140,ch,f,map_LT_,meta11143){
this.fn1 = fn1;
this._ = _;
this.meta11140 = meta11140;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11143 = meta11143;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11142.cljs$lang$type = true;
cljs.core.async.t11142.cljs$lang$ctorStr = "cljs.core.async/t11142";
cljs.core.async.t11142.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11142");
});
cljs.core.async.t11142.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11142.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t11142.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t11142.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__11132_SHARP_){return f1.call(null,(((p1__11132_SHARP_ == null))?null:self__.f.call(null,p1__11132_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t11142.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11144){var self__ = this;
var _11144__$1 = this;return self__.meta11143;
});
cljs.core.async.t11142.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11144,meta11143__$1){var self__ = this;
var _11144__$1 = this;return (new cljs.core.async.t11142(self__.fn1,self__._,self__.meta11140,self__.ch,self__.f,self__.map_LT_,meta11143__$1));
});
cljs.core.async.__GT_t11142 = (function __GT_t11142(fn1__$1,___$2,meta11140__$1,ch__$2,f__$2,map_LT___$2,meta11143){return (new cljs.core.async.t11142(fn1__$1,___$2,meta11140__$1,ch__$2,f__$2,map_LT___$2,meta11143));
});
}
return (new cljs.core.async.t11142(fn1,___$1,self__.meta11140,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t11139.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11139.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11139.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11141){var self__ = this;
var _11141__$1 = this;return self__.meta11140;
});
cljs.core.async.t11139.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11141,meta11140__$1){var self__ = this;
var _11141__$1 = this;return (new cljs.core.async.t11139(self__.ch,self__.f,self__.map_LT_,meta11140__$1));
});
cljs.core.async.__GT_t11139 = (function __GT_t11139(ch__$1,f__$1,map_LT___$1,meta11140){return (new cljs.core.async.t11139(ch__$1,f__$1,map_LT___$1,meta11140));
});
}
return (new cljs.core.async.t11139(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11148 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11148 = (function (ch,f,map_GT_,meta11149){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11149 = meta11149;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11148.cljs$lang$type = true;
cljs.core.async.t11148.cljs$lang$ctorStr = "cljs.core.async/t11148";
cljs.core.async.t11148.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11148");
});
cljs.core.async.t11148.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11148.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t11148.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11148.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11148.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11148.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11148.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11150){var self__ = this;
var _11150__$1 = this;return self__.meta11149;
});
cljs.core.async.t11148.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11150,meta11149__$1){var self__ = this;
var _11150__$1 = this;return (new cljs.core.async.t11148(self__.ch,self__.f,self__.map_GT_,meta11149__$1));
});
cljs.core.async.__GT_t11148 = (function __GT_t11148(ch__$1,f__$1,map_GT___$1,meta11149){return (new cljs.core.async.t11148(ch__$1,f__$1,map_GT___$1,meta11149));
});
}
return (new cljs.core.async.t11148(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11154 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11154 = (function (ch,p,filter_GT_,meta11155){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11155 = meta11155;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11154.cljs$lang$type = true;
cljs.core.async.t11154.cljs$lang$ctorStr = "cljs.core.async/t11154";
cljs.core.async.t11154.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11154");
});
cljs.core.async.t11154.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11154.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t11154.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11154.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11154.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11154.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11154.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11156){var self__ = this;
var _11156__$1 = this;return self__.meta11155;
});
cljs.core.async.t11154.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11156,meta11155__$1){var self__ = this;
var _11156__$1 = this;return (new cljs.core.async.t11154(self__.ch,self__.p,self__.filter_GT_,meta11155__$1));
});
cljs.core.async.__GT_t11154 = (function __GT_t11154(ch__$1,p__$1,filter_GT___$1,meta11155){return (new cljs.core.async.t11154(ch__$1,p__$1,filter_GT___$1,meta11155));
});
}
return (new cljs.core.async.t11154(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6935__auto___11239 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6936__auto__ = (function (){var switch__6865__auto__ = (function (state_11218){var state_val_11219 = (state_11218[1]);if((state_val_11219 === 1))
{var state_11218__$1 = state_11218;var statearr_11220_11240 = state_11218__$1;(statearr_11220_11240[2] = null);
(statearr_11220_11240[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11219 === 2))
{var state_11218__$1 = state_11218;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11218__$1,4,ch);
} else
{if((state_val_11219 === 3))
{var inst_11216 = (state_11218[2]);var state_11218__$1 = state_11218;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11218__$1,inst_11216);
} else
{if((state_val_11219 === 4))
{var inst_11200 = (state_11218[7]);var inst_11200__$1 = (state_11218[2]);var inst_11201 = (inst_11200__$1 == null);var state_11218__$1 = (function (){var statearr_11221 = state_11218;(statearr_11221[7] = inst_11200__$1);
return statearr_11221;
})();if(cljs.core.truth_(inst_11201))
{var statearr_11222_11241 = state_11218__$1;(statearr_11222_11241[1] = 5);
} else
{var statearr_11223_11242 = state_11218__$1;(statearr_11223_11242[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11219 === 5))
{var inst_11203 = cljs.core.async.close_BANG_.call(null,out);var state_11218__$1 = state_11218;var statearr_11224_11243 = state_11218__$1;(statearr_11224_11243[2] = inst_11203);
(statearr_11224_11243[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11219 === 6))
{var inst_11200 = (state_11218[7]);var inst_11205 = p.call(null,inst_11200);var state_11218__$1 = state_11218;if(cljs.core.truth_(inst_11205))
{var statearr_11225_11244 = state_11218__$1;(statearr_11225_11244[1] = 8);
} else
{var statearr_11226_11245 = state_11218__$1;(statearr_11226_11245[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11219 === 7))
{var inst_11214 = (state_11218[2]);var state_11218__$1 = state_11218;var statearr_11227_11246 = state_11218__$1;(statearr_11227_11246[2] = inst_11214);
(statearr_11227_11246[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11219 === 8))
{var inst_11200 = (state_11218[7]);var state_11218__$1 = state_11218;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11218__$1,11,out,inst_11200);
} else
{if((state_val_11219 === 9))
{var state_11218__$1 = state_11218;var statearr_11228_11247 = state_11218__$1;(statearr_11228_11247[2] = null);
(statearr_11228_11247[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11219 === 10))
{var inst_11211 = (state_11218[2]);var state_11218__$1 = (function (){var statearr_11229 = state_11218;(statearr_11229[8] = inst_11211);
return statearr_11229;
})();var statearr_11230_11248 = state_11218__$1;(statearr_11230_11248[2] = null);
(statearr_11230_11248[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11219 === 11))
{var inst_11208 = (state_11218[2]);var state_11218__$1 = state_11218;var statearr_11231_11249 = state_11218__$1;(statearr_11231_11249[2] = inst_11208);
(statearr_11231_11249[1] = 10);
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
});return ((function (switch__6865__auto__){
return (function() {
var state_machine__6866__auto__ = null;
var state_machine__6866__auto____0 = (function (){var statearr_11235 = [null,null,null,null,null,null,null,null,null];(statearr_11235[0] = state_machine__6866__auto__);
(statearr_11235[1] = 1);
return statearr_11235;
});
var state_machine__6866__auto____1 = (function (state_11218){while(true){
var ret_value__6867__auto__ = (function (){try{while(true){
var result__6868__auto__ = switch__6865__auto__.call(null,state_11218);if(cljs.core.keyword_identical_QMARK_.call(null,result__6868__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6868__auto__;
}
break;
}
}catch (e11236){if((e11236 instanceof Object))
{var ex__6869__auto__ = e11236;var statearr_11237_11250 = state_11218;(statearr_11237_11250[5] = ex__6869__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11218);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11236;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6867__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11251 = state_11218;
state_11218 = G__11251;
continue;
}
} else
{return ret_value__6867__auto__;
}
break;
}
});
state_machine__6866__auto__ = function(state_11218){
switch(arguments.length){
case 0:
return state_machine__6866__auto____0.call(this);
case 1:
return state_machine__6866__auto____1.call(this,state_11218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6866__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6866__auto____0;
state_machine__6866__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6866__auto____1;
return state_machine__6866__auto__;
})()
;})(switch__6865__auto__))
})();var state__6937__auto__ = (function (){var statearr_11238 = f__6936__auto__.call(null);(statearr_11238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6935__auto___11239);
return statearr_11238;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6937__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6935__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6936__auto__ = (function (){var switch__6865__auto__ = (function (state_11403){var state_val_11404 = (state_11403[1]);if((state_val_11404 === 1))
{var state_11403__$1 = state_11403;var statearr_11405_11442 = state_11403__$1;(statearr_11405_11442[2] = null);
(statearr_11405_11442[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11404 === 2))
{var state_11403__$1 = state_11403;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11403__$1,4,in$);
} else
{if((state_val_11404 === 3))
{var inst_11401 = (state_11403[2]);var state_11403__$1 = state_11403;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11403__$1,inst_11401);
} else
{if((state_val_11404 === 4))
{var inst_11349 = (state_11403[7]);var inst_11349__$1 = (state_11403[2]);var inst_11350 = (inst_11349__$1 == null);var state_11403__$1 = (function (){var statearr_11406 = state_11403;(statearr_11406[7] = inst_11349__$1);
return statearr_11406;
})();if(cljs.core.truth_(inst_11350))
{var statearr_11407_11443 = state_11403__$1;(statearr_11407_11443[1] = 5);
} else
{var statearr_11408_11444 = state_11403__$1;(statearr_11408_11444[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11404 === 5))
{var inst_11352 = cljs.core.async.close_BANG_.call(null,out);var state_11403__$1 = state_11403;var statearr_11409_11445 = state_11403__$1;(statearr_11409_11445[2] = inst_11352);
(statearr_11409_11445[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11404 === 6))
{var inst_11349 = (state_11403[7]);var inst_11354 = f.call(null,inst_11349);var inst_11359 = cljs.core.seq.call(null,inst_11354);var inst_11360 = inst_11359;var inst_11361 = null;var inst_11362 = 0;var inst_11363 = 0;var state_11403__$1 = (function (){var statearr_11410 = state_11403;(statearr_11410[8] = inst_11362);
(statearr_11410[9] = inst_11363);
(statearr_11410[10] = inst_11360);
(statearr_11410[11] = inst_11361);
return statearr_11410;
})();var statearr_11411_11446 = state_11403__$1;(statearr_11411_11446[2] = null);
(statearr_11411_11446[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11404 === 7))
{var inst_11399 = (state_11403[2]);var state_11403__$1 = state_11403;var statearr_11412_11447 = state_11403__$1;(statearr_11412_11447[2] = inst_11399);
(statearr_11412_11447[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11404 === 8))
{var inst_11362 = (state_11403[8]);var inst_11363 = (state_11403[9]);var inst_11365 = (inst_11363 < inst_11362);var inst_11366 = inst_11365;var state_11403__$1 = state_11403;if(cljs.core.truth_(inst_11366))
{var statearr_11413_11448 = state_11403__$1;(statearr_11413_11448[1] = 10);
} else
{var statearr_11414_11449 = state_11403__$1;(statearr_11414_11449[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11404 === 9))
{var inst_11396 = (state_11403[2]);var state_11403__$1 = (function (){var statearr_11415 = state_11403;(statearr_11415[12] = inst_11396);
return statearr_11415;
})();var statearr_11416_11450 = state_11403__$1;(statearr_11416_11450[2] = null);
(statearr_11416_11450[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11404 === 10))
{var inst_11363 = (state_11403[9]);var inst_11361 = (state_11403[11]);var inst_11368 = cljs.core._nth.call(null,inst_11361,inst_11363);var state_11403__$1 = state_11403;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11403__$1,13,out,inst_11368);
} else
{if((state_val_11404 === 11))
{var inst_11374 = (state_11403[13]);var inst_11360 = (state_11403[10]);var inst_11374__$1 = cljs.core.seq.call(null,inst_11360);var state_11403__$1 = (function (){var statearr_11420 = state_11403;(statearr_11420[13] = inst_11374__$1);
return statearr_11420;
})();if(inst_11374__$1)
{var statearr_11421_11451 = state_11403__$1;(statearr_11421_11451[1] = 14);
} else
{var statearr_11422_11452 = state_11403__$1;(statearr_11422_11452[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11404 === 12))
{var inst_11394 = (state_11403[2]);var state_11403__$1 = state_11403;var statearr_11423_11453 = state_11403__$1;(statearr_11423_11453[2] = inst_11394);
(statearr_11423_11453[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11404 === 13))
{var inst_11362 = (state_11403[8]);var inst_11363 = (state_11403[9]);var inst_11360 = (state_11403[10]);var inst_11361 = (state_11403[11]);var inst_11370 = (state_11403[2]);var inst_11371 = (inst_11363 + 1);var tmp11417 = inst_11362;var tmp11418 = inst_11360;var tmp11419 = inst_11361;var inst_11360__$1 = tmp11418;var inst_11361__$1 = tmp11419;var inst_11362__$1 = tmp11417;var inst_11363__$1 = inst_11371;var state_11403__$1 = (function (){var statearr_11424 = state_11403;(statearr_11424[14] = inst_11370);
(statearr_11424[8] = inst_11362__$1);
(statearr_11424[9] = inst_11363__$1);
(statearr_11424[10] = inst_11360__$1);
(statearr_11424[11] = inst_11361__$1);
return statearr_11424;
})();var statearr_11425_11454 = state_11403__$1;(statearr_11425_11454[2] = null);
(statearr_11425_11454[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11404 === 14))
{var inst_11374 = (state_11403[13]);var inst_11376 = cljs.core.chunked_seq_QMARK_.call(null,inst_11374);var state_11403__$1 = state_11403;if(inst_11376)
{var statearr_11426_11455 = state_11403__$1;(statearr_11426_11455[1] = 17);
} else
{var statearr_11427_11456 = state_11403__$1;(statearr_11427_11456[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11404 === 15))
{var state_11403__$1 = state_11403;var statearr_11428_11457 = state_11403__$1;(statearr_11428_11457[2] = null);
(statearr_11428_11457[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11404 === 16))
{var inst_11392 = (state_11403[2]);var state_11403__$1 = state_11403;var statearr_11429_11458 = state_11403__$1;(statearr_11429_11458[2] = inst_11392);
(statearr_11429_11458[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11404 === 17))
{var inst_11374 = (state_11403[13]);var inst_11378 = cljs.core.chunk_first.call(null,inst_11374);var inst_11379 = cljs.core.chunk_rest.call(null,inst_11374);var inst_11380 = cljs.core.count.call(null,inst_11378);var inst_11360 = inst_11379;var inst_11361 = inst_11378;var inst_11362 = inst_11380;var inst_11363 = 0;var state_11403__$1 = (function (){var statearr_11430 = state_11403;(statearr_11430[8] = inst_11362);
(statearr_11430[9] = inst_11363);
(statearr_11430[10] = inst_11360);
(statearr_11430[11] = inst_11361);
return statearr_11430;
})();var statearr_11431_11459 = state_11403__$1;(statearr_11431_11459[2] = null);
(statearr_11431_11459[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11404 === 18))
{var inst_11374 = (state_11403[13]);var inst_11383 = cljs.core.first.call(null,inst_11374);var state_11403__$1 = state_11403;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11403__$1,20,out,inst_11383);
} else
{if((state_val_11404 === 19))
{var inst_11389 = (state_11403[2]);var state_11403__$1 = state_11403;var statearr_11432_11460 = state_11403__$1;(statearr_11432_11460[2] = inst_11389);
(statearr_11432_11460[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11404 === 20))
{var inst_11374 = (state_11403[13]);var inst_11385 = (state_11403[2]);var inst_11386 = cljs.core.next.call(null,inst_11374);var inst_11360 = inst_11386;var inst_11361 = null;var inst_11362 = 0;var inst_11363 = 0;var state_11403__$1 = (function (){var statearr_11433 = state_11403;(statearr_11433[15] = inst_11385);
(statearr_11433[8] = inst_11362);
(statearr_11433[9] = inst_11363);
(statearr_11433[10] = inst_11360);
(statearr_11433[11] = inst_11361);
return statearr_11433;
})();var statearr_11434_11461 = state_11403__$1;(statearr_11434_11461[2] = null);
(statearr_11434_11461[1] = 8);
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
});return ((function (switch__6865__auto__){
return (function() {
var state_machine__6866__auto__ = null;
var state_machine__6866__auto____0 = (function (){var statearr_11438 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11438[0] = state_machine__6866__auto__);
(statearr_11438[1] = 1);
return statearr_11438;
});
var state_machine__6866__auto____1 = (function (state_11403){while(true){
var ret_value__6867__auto__ = (function (){try{while(true){
var result__6868__auto__ = switch__6865__auto__.call(null,state_11403);if(cljs.core.keyword_identical_QMARK_.call(null,result__6868__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6868__auto__;
}
break;
}
}catch (e11439){if((e11439 instanceof Object))
{var ex__6869__auto__ = e11439;var statearr_11440_11462 = state_11403;(statearr_11440_11462[5] = ex__6869__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11403);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11439;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6867__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11463 = state_11403;
state_11403 = G__11463;
continue;
}
} else
{return ret_value__6867__auto__;
}
break;
}
});
state_machine__6866__auto__ = function(state_11403){
switch(arguments.length){
case 0:
return state_machine__6866__auto____0.call(this);
case 1:
return state_machine__6866__auto____1.call(this,state_11403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6866__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6866__auto____0;
state_machine__6866__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6866__auto____1;
return state_machine__6866__auto__;
})()
;})(switch__6865__auto__))
})();var state__6937__auto__ = (function (){var statearr_11441 = f__6936__auto__.call(null);(statearr_11441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6935__auto__);
return statearr_11441;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6937__auto__);
}));
return c__6935__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6935__auto___11544 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6936__auto__ = (function (){var switch__6865__auto__ = (function (state_11523){var state_val_11524 = (state_11523[1]);if((state_val_11524 === 1))
{var state_11523__$1 = state_11523;var statearr_11525_11545 = state_11523__$1;(statearr_11525_11545[2] = null);
(statearr_11525_11545[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11524 === 2))
{var state_11523__$1 = state_11523;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11523__$1,4,from);
} else
{if((state_val_11524 === 3))
{var inst_11521 = (state_11523[2]);var state_11523__$1 = state_11523;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11523__$1,inst_11521);
} else
{if((state_val_11524 === 4))
{var inst_11506 = (state_11523[7]);var inst_11506__$1 = (state_11523[2]);var inst_11507 = (inst_11506__$1 == null);var state_11523__$1 = (function (){var statearr_11526 = state_11523;(statearr_11526[7] = inst_11506__$1);
return statearr_11526;
})();if(cljs.core.truth_(inst_11507))
{var statearr_11527_11546 = state_11523__$1;(statearr_11527_11546[1] = 5);
} else
{var statearr_11528_11547 = state_11523__$1;(statearr_11528_11547[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11524 === 5))
{var state_11523__$1 = state_11523;if(cljs.core.truth_(close_QMARK_))
{var statearr_11529_11548 = state_11523__$1;(statearr_11529_11548[1] = 8);
} else
{var statearr_11530_11549 = state_11523__$1;(statearr_11530_11549[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11524 === 6))
{var inst_11506 = (state_11523[7]);var state_11523__$1 = state_11523;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11523__$1,11,to,inst_11506);
} else
{if((state_val_11524 === 7))
{var inst_11519 = (state_11523[2]);var state_11523__$1 = state_11523;var statearr_11531_11550 = state_11523__$1;(statearr_11531_11550[2] = inst_11519);
(statearr_11531_11550[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11524 === 8))
{var inst_11510 = cljs.core.async.close_BANG_.call(null,to);var state_11523__$1 = state_11523;var statearr_11532_11551 = state_11523__$1;(statearr_11532_11551[2] = inst_11510);
(statearr_11532_11551[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11524 === 9))
{var state_11523__$1 = state_11523;var statearr_11533_11552 = state_11523__$1;(statearr_11533_11552[2] = null);
(statearr_11533_11552[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11524 === 10))
{var inst_11513 = (state_11523[2]);var state_11523__$1 = state_11523;var statearr_11534_11553 = state_11523__$1;(statearr_11534_11553[2] = inst_11513);
(statearr_11534_11553[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11524 === 11))
{var inst_11516 = (state_11523[2]);var state_11523__$1 = (function (){var statearr_11535 = state_11523;(statearr_11535[8] = inst_11516);
return statearr_11535;
})();var statearr_11536_11554 = state_11523__$1;(statearr_11536_11554[2] = null);
(statearr_11536_11554[1] = 2);
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
});return ((function (switch__6865__auto__){
return (function() {
var state_machine__6866__auto__ = null;
var state_machine__6866__auto____0 = (function (){var statearr_11540 = [null,null,null,null,null,null,null,null,null];(statearr_11540[0] = state_machine__6866__auto__);
(statearr_11540[1] = 1);
return statearr_11540;
});
var state_machine__6866__auto____1 = (function (state_11523){while(true){
var ret_value__6867__auto__ = (function (){try{while(true){
var result__6868__auto__ = switch__6865__auto__.call(null,state_11523);if(cljs.core.keyword_identical_QMARK_.call(null,result__6868__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6868__auto__;
}
break;
}
}catch (e11541){if((e11541 instanceof Object))
{var ex__6869__auto__ = e11541;var statearr_11542_11555 = state_11523;(statearr_11542_11555[5] = ex__6869__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11523);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11541;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6867__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11556 = state_11523;
state_11523 = G__11556;
continue;
}
} else
{return ret_value__6867__auto__;
}
break;
}
});
state_machine__6866__auto__ = function(state_11523){
switch(arguments.length){
case 0:
return state_machine__6866__auto____0.call(this);
case 1:
return state_machine__6866__auto____1.call(this,state_11523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6866__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6866__auto____0;
state_machine__6866__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6866__auto____1;
return state_machine__6866__auto__;
})()
;})(switch__6865__auto__))
})();var state__6937__auto__ = (function (){var statearr_11543 = f__6936__auto__.call(null);(statearr_11543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6935__auto___11544);
return statearr_11543;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6937__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6935__auto___11643 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6936__auto__ = (function (){var switch__6865__auto__ = (function (state_11621){var state_val_11622 = (state_11621[1]);if((state_val_11622 === 1))
{var state_11621__$1 = state_11621;var statearr_11623_11644 = state_11621__$1;(statearr_11623_11644[2] = null);
(statearr_11623_11644[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11622 === 2))
{var state_11621__$1 = state_11621;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11621__$1,4,ch);
} else
{if((state_val_11622 === 3))
{var inst_11619 = (state_11621[2]);var state_11621__$1 = state_11621;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11621__$1,inst_11619);
} else
{if((state_val_11622 === 4))
{var inst_11602 = (state_11621[7]);var inst_11602__$1 = (state_11621[2]);var inst_11603 = (inst_11602__$1 == null);var state_11621__$1 = (function (){var statearr_11624 = state_11621;(statearr_11624[7] = inst_11602__$1);
return statearr_11624;
})();if(cljs.core.truth_(inst_11603))
{var statearr_11625_11645 = state_11621__$1;(statearr_11625_11645[1] = 5);
} else
{var statearr_11626_11646 = state_11621__$1;(statearr_11626_11646[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11622 === 5))
{var inst_11605 = cljs.core.async.close_BANG_.call(null,tc);var inst_11606 = cljs.core.async.close_BANG_.call(null,fc);var state_11621__$1 = (function (){var statearr_11627 = state_11621;(statearr_11627[8] = inst_11605);
return statearr_11627;
})();var statearr_11628_11647 = state_11621__$1;(statearr_11628_11647[2] = inst_11606);
(statearr_11628_11647[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11622 === 6))
{var inst_11602 = (state_11621[7]);var inst_11608 = p.call(null,inst_11602);var state_11621__$1 = state_11621;if(cljs.core.truth_(inst_11608))
{var statearr_11629_11648 = state_11621__$1;(statearr_11629_11648[1] = 9);
} else
{var statearr_11630_11649 = state_11621__$1;(statearr_11630_11649[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11622 === 7))
{var inst_11617 = (state_11621[2]);var state_11621__$1 = state_11621;var statearr_11631_11650 = state_11621__$1;(statearr_11631_11650[2] = inst_11617);
(statearr_11631_11650[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11622 === 8))
{var inst_11614 = (state_11621[2]);var state_11621__$1 = (function (){var statearr_11632 = state_11621;(statearr_11632[9] = inst_11614);
return statearr_11632;
})();var statearr_11633_11651 = state_11621__$1;(statearr_11633_11651[2] = null);
(statearr_11633_11651[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11622 === 9))
{var state_11621__$1 = state_11621;var statearr_11634_11652 = state_11621__$1;(statearr_11634_11652[2] = tc);
(statearr_11634_11652[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11622 === 10))
{var state_11621__$1 = state_11621;var statearr_11635_11653 = state_11621__$1;(statearr_11635_11653[2] = fc);
(statearr_11635_11653[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11622 === 11))
{var inst_11602 = (state_11621[7]);var inst_11612 = (state_11621[2]);var state_11621__$1 = state_11621;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11621__$1,8,inst_11612,inst_11602);
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
});return ((function (switch__6865__auto__){
return (function() {
var state_machine__6866__auto__ = null;
var state_machine__6866__auto____0 = (function (){var statearr_11639 = [null,null,null,null,null,null,null,null,null,null];(statearr_11639[0] = state_machine__6866__auto__);
(statearr_11639[1] = 1);
return statearr_11639;
});
var state_machine__6866__auto____1 = (function (state_11621){while(true){
var ret_value__6867__auto__ = (function (){try{while(true){
var result__6868__auto__ = switch__6865__auto__.call(null,state_11621);if(cljs.core.keyword_identical_QMARK_.call(null,result__6868__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6868__auto__;
}
break;
}
}catch (e11640){if((e11640 instanceof Object))
{var ex__6869__auto__ = e11640;var statearr_11641_11654 = state_11621;(statearr_11641_11654[5] = ex__6869__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11621);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11640;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6867__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11655 = state_11621;
state_11621 = G__11655;
continue;
}
} else
{return ret_value__6867__auto__;
}
break;
}
});
state_machine__6866__auto__ = function(state_11621){
switch(arguments.length){
case 0:
return state_machine__6866__auto____0.call(this);
case 1:
return state_machine__6866__auto____1.call(this,state_11621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6866__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6866__auto____0;
state_machine__6866__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6866__auto____1;
return state_machine__6866__auto__;
})()
;})(switch__6865__auto__))
})();var state__6937__auto__ = (function (){var statearr_11642 = f__6936__auto__.call(null);(statearr_11642[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6935__auto___11643);
return statearr_11642;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6937__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6935__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6936__auto__ = (function (){var switch__6865__auto__ = (function (state_11702){var state_val_11703 = (state_11702[1]);if((state_val_11703 === 7))
{var inst_11698 = (state_11702[2]);var state_11702__$1 = state_11702;var statearr_11704_11720 = state_11702__$1;(statearr_11704_11720[2] = inst_11698);
(statearr_11704_11720[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11703 === 6))
{var inst_11691 = (state_11702[7]);var inst_11688 = (state_11702[8]);var inst_11695 = f.call(null,inst_11688,inst_11691);var inst_11688__$1 = inst_11695;var state_11702__$1 = (function (){var statearr_11705 = state_11702;(statearr_11705[8] = inst_11688__$1);
return statearr_11705;
})();var statearr_11706_11721 = state_11702__$1;(statearr_11706_11721[2] = null);
(statearr_11706_11721[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11703 === 5))
{var inst_11688 = (state_11702[8]);var state_11702__$1 = state_11702;var statearr_11707_11722 = state_11702__$1;(statearr_11707_11722[2] = inst_11688);
(statearr_11707_11722[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11703 === 4))
{var inst_11691 = (state_11702[7]);var inst_11691__$1 = (state_11702[2]);var inst_11692 = (inst_11691__$1 == null);var state_11702__$1 = (function (){var statearr_11708 = state_11702;(statearr_11708[7] = inst_11691__$1);
return statearr_11708;
})();if(cljs.core.truth_(inst_11692))
{var statearr_11709_11723 = state_11702__$1;(statearr_11709_11723[1] = 5);
} else
{var statearr_11710_11724 = state_11702__$1;(statearr_11710_11724[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11703 === 3))
{var inst_11700 = (state_11702[2]);var state_11702__$1 = state_11702;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11702__$1,inst_11700);
} else
{if((state_val_11703 === 2))
{var state_11702__$1 = state_11702;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11702__$1,4,ch);
} else
{if((state_val_11703 === 1))
{var inst_11688 = init;var state_11702__$1 = (function (){var statearr_11711 = state_11702;(statearr_11711[8] = inst_11688);
return statearr_11711;
})();var statearr_11712_11725 = state_11702__$1;(statearr_11712_11725[2] = null);
(statearr_11712_11725[1] = 2);
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
});return ((function (switch__6865__auto__){
return (function() {
var state_machine__6866__auto__ = null;
var state_machine__6866__auto____0 = (function (){var statearr_11716 = [null,null,null,null,null,null,null,null,null];(statearr_11716[0] = state_machine__6866__auto__);
(statearr_11716[1] = 1);
return statearr_11716;
});
var state_machine__6866__auto____1 = (function (state_11702){while(true){
var ret_value__6867__auto__ = (function (){try{while(true){
var result__6868__auto__ = switch__6865__auto__.call(null,state_11702);if(cljs.core.keyword_identical_QMARK_.call(null,result__6868__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6868__auto__;
}
break;
}
}catch (e11717){if((e11717 instanceof Object))
{var ex__6869__auto__ = e11717;var statearr_11718_11726 = state_11702;(statearr_11718_11726[5] = ex__6869__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11702);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11717;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6867__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11727 = state_11702;
state_11702 = G__11727;
continue;
}
} else
{return ret_value__6867__auto__;
}
break;
}
});
state_machine__6866__auto__ = function(state_11702){
switch(arguments.length){
case 0:
return state_machine__6866__auto____0.call(this);
case 1:
return state_machine__6866__auto____1.call(this,state_11702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6866__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6866__auto____0;
state_machine__6866__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6866__auto____1;
return state_machine__6866__auto__;
})()
;})(switch__6865__auto__))
})();var state__6937__auto__ = (function (){var statearr_11719 = f__6936__auto__.call(null);(statearr_11719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6935__auto__);
return statearr_11719;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6937__auto__);
}));
return c__6935__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6935__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6936__auto__ = (function (){var switch__6865__auto__ = (function (state_11789){var state_val_11790 = (state_11789[1]);if((state_val_11790 === 1))
{var inst_11769 = cljs.core.seq.call(null,coll);var inst_11770 = inst_11769;var state_11789__$1 = (function (){var statearr_11791 = state_11789;(statearr_11791[7] = inst_11770);
return statearr_11791;
})();var statearr_11792_11810 = state_11789__$1;(statearr_11792_11810[2] = null);
(statearr_11792_11810[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11790 === 2))
{var inst_11770 = (state_11789[7]);var state_11789__$1 = state_11789;if(cljs.core.truth_(inst_11770))
{var statearr_11793_11811 = state_11789__$1;(statearr_11793_11811[1] = 4);
} else
{var statearr_11794_11812 = state_11789__$1;(statearr_11794_11812[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11790 === 3))
{var inst_11787 = (state_11789[2]);var state_11789__$1 = state_11789;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11789__$1,inst_11787);
} else
{if((state_val_11790 === 4))
{var inst_11770 = (state_11789[7]);var inst_11773 = cljs.core.first.call(null,inst_11770);var state_11789__$1 = state_11789;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11789__$1,7,ch,inst_11773);
} else
{if((state_val_11790 === 5))
{var state_11789__$1 = state_11789;if(cljs.core.truth_(close_QMARK_))
{var statearr_11795_11813 = state_11789__$1;(statearr_11795_11813[1] = 8);
} else
{var statearr_11796_11814 = state_11789__$1;(statearr_11796_11814[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11790 === 6))
{var inst_11785 = (state_11789[2]);var state_11789__$1 = state_11789;var statearr_11797_11815 = state_11789__$1;(statearr_11797_11815[2] = inst_11785);
(statearr_11797_11815[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11790 === 7))
{var inst_11770 = (state_11789[7]);var inst_11775 = (state_11789[2]);var inst_11776 = cljs.core.next.call(null,inst_11770);var inst_11770__$1 = inst_11776;var state_11789__$1 = (function (){var statearr_11798 = state_11789;(statearr_11798[7] = inst_11770__$1);
(statearr_11798[8] = inst_11775);
return statearr_11798;
})();var statearr_11799_11816 = state_11789__$1;(statearr_11799_11816[2] = null);
(statearr_11799_11816[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11790 === 8))
{var inst_11780 = cljs.core.async.close_BANG_.call(null,ch);var state_11789__$1 = state_11789;var statearr_11800_11817 = state_11789__$1;(statearr_11800_11817[2] = inst_11780);
(statearr_11800_11817[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11790 === 9))
{var state_11789__$1 = state_11789;var statearr_11801_11818 = state_11789__$1;(statearr_11801_11818[2] = null);
(statearr_11801_11818[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11790 === 10))
{var inst_11783 = (state_11789[2]);var state_11789__$1 = state_11789;var statearr_11802_11819 = state_11789__$1;(statearr_11802_11819[2] = inst_11783);
(statearr_11802_11819[1] = 6);
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
});return ((function (switch__6865__auto__){
return (function() {
var state_machine__6866__auto__ = null;
var state_machine__6866__auto____0 = (function (){var statearr_11806 = [null,null,null,null,null,null,null,null,null];(statearr_11806[0] = state_machine__6866__auto__);
(statearr_11806[1] = 1);
return statearr_11806;
});
var state_machine__6866__auto____1 = (function (state_11789){while(true){
var ret_value__6867__auto__ = (function (){try{while(true){
var result__6868__auto__ = switch__6865__auto__.call(null,state_11789);if(cljs.core.keyword_identical_QMARK_.call(null,result__6868__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6868__auto__;
}
break;
}
}catch (e11807){if((e11807 instanceof Object))
{var ex__6869__auto__ = e11807;var statearr_11808_11820 = state_11789;(statearr_11808_11820[5] = ex__6869__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11789);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11807;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6867__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11821 = state_11789;
state_11789 = G__11821;
continue;
}
} else
{return ret_value__6867__auto__;
}
break;
}
});
state_machine__6866__auto__ = function(state_11789){
switch(arguments.length){
case 0:
return state_machine__6866__auto____0.call(this);
case 1:
return state_machine__6866__auto____1.call(this,state_11789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6866__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6866__auto____0;
state_machine__6866__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6866__auto____1;
return state_machine__6866__auto__;
})()
;})(switch__6865__auto__))
})();var state__6937__auto__ = (function (){var statearr_11809 = f__6936__auto__.call(null);(statearr_11809[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6935__auto__);
return statearr_11809;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6937__auto__);
}));
return c__6935__auto__;
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
cljs.core.async.Mux = (function (){var obj11823 = {};return obj11823;
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
cljs.core.async.Mult = (function (){var obj11825 = {};return obj11825;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12049 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12049 = (function (cs,ch,mult,meta12050){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12050 = meta12050;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12049.cljs$lang$type = true;
cljs.core.async.t12049.cljs$lang$ctorStr = "cljs.core.async/t12049";
cljs.core.async.t12049.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t12049");
});})(cs))
;
cljs.core.async.t12049.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12049.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12049.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12049.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12049.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12049.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12049.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12051){var self__ = this;
var _12051__$1 = this;return self__.meta12050;
});})(cs))
;
cljs.core.async.t12049.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12051,meta12050__$1){var self__ = this;
var _12051__$1 = this;return (new cljs.core.async.t12049(self__.cs,self__.ch,self__.mult,meta12050__$1));
});})(cs))
;
cljs.core.async.__GT_t12049 = ((function (cs){
return (function __GT_t12049(cs__$1,ch__$1,mult__$1,meta12050){return (new cljs.core.async.t12049(cs__$1,ch__$1,mult__$1,meta12050));
});})(cs))
;
}
return (new cljs.core.async.t12049(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6935__auto___12272 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6936__auto__ = (function (){var switch__6865__auto__ = (function (state_12186){var state_val_12187 = (state_12186[1]);if((state_val_12187 === 32))
{var inst_12130 = (state_12186[7]);var inst_12054 = (state_12186[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12186,31,Object,null,30);var inst_12137 = cljs.core.async.put_BANG_.call(null,inst_12130,inst_12054,done);var state_12186__$1 = state_12186;var statearr_12188_12273 = state_12186__$1;(statearr_12188_12273[2] = inst_12137);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12186__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12187 === 1))
{var state_12186__$1 = state_12186;var statearr_12189_12274 = state_12186__$1;(statearr_12189_12274[2] = null);
(statearr_12189_12274[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12187 === 33))
{var inst_12143 = (state_12186[9]);var inst_12145 = cljs.core.chunked_seq_QMARK_.call(null,inst_12143);var state_12186__$1 = state_12186;if(inst_12145)
{var statearr_12190_12275 = state_12186__$1;(statearr_12190_12275[1] = 36);
} else
{var statearr_12191_12276 = state_12186__$1;(statearr_12191_12276[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12187 === 2))
{var state_12186__$1 = state_12186;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12186__$1,4,ch);
} else
{if((state_val_12187 === 34))
{var state_12186__$1 = state_12186;var statearr_12192_12277 = state_12186__$1;(statearr_12192_12277[2] = null);
(statearr_12192_12277[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12187 === 3))
{var inst_12184 = (state_12186[2]);var state_12186__$1 = state_12186;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12186__$1,inst_12184);
} else
{if((state_val_12187 === 35))
{var inst_12168 = (state_12186[2]);var state_12186__$1 = state_12186;var statearr_12193_12278 = state_12186__$1;(statearr_12193_12278[2] = inst_12168);
(statearr_12193_12278[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12187 === 4))
{var inst_12054 = (state_12186[8]);var inst_12054__$1 = (state_12186[2]);var inst_12055 = (inst_12054__$1 == null);var state_12186__$1 = (function (){var statearr_12194 = state_12186;(statearr_12194[8] = inst_12054__$1);
return statearr_12194;
})();if(cljs.core.truth_(inst_12055))
{var statearr_12195_12279 = state_12186__$1;(statearr_12195_12279[1] = 5);
} else
{var statearr_12196_12280 = state_12186__$1;(statearr_12196_12280[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12187 === 36))
{var inst_12143 = (state_12186[9]);var inst_12147 = cljs.core.chunk_first.call(null,inst_12143);var inst_12148 = cljs.core.chunk_rest.call(null,inst_12143);var inst_12149 = cljs.core.count.call(null,inst_12147);var inst_12122 = inst_12148;var inst_12123 = inst_12147;var inst_12124 = inst_12149;var inst_12125 = 0;var state_12186__$1 = (function (){var statearr_12197 = state_12186;(statearr_12197[10] = inst_12122);
(statearr_12197[11] = inst_12125);
(statearr_12197[12] = inst_12124);
(statearr_12197[13] = inst_12123);
return statearr_12197;
})();var statearr_12198_12281 = state_12186__$1;(statearr_12198_12281[2] = null);
(statearr_12198_12281[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12187 === 5))
{var inst_12061 = cljs.core.deref.call(null,cs);var inst_12062 = cljs.core.seq.call(null,inst_12061);var inst_12063 = inst_12062;var inst_12064 = null;var inst_12065 = 0;var inst_12066 = 0;var state_12186__$1 = (function (){var statearr_12199 = state_12186;(statearr_12199[14] = inst_12066);
(statearr_12199[15] = inst_12064);
(statearr_12199[16] = inst_12065);
(statearr_12199[17] = inst_12063);
return statearr_12199;
})();var statearr_12200_12282 = state_12186__$1;(statearr_12200_12282[2] = null);
(statearr_12200_12282[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12187 === 37))
{var inst_12143 = (state_12186[9]);var inst_12152 = cljs.core.first.call(null,inst_12143);var state_12186__$1 = (function (){var statearr_12201 = state_12186;(statearr_12201[18] = inst_12152);
return statearr_12201;
})();var statearr_12202_12283 = state_12186__$1;(statearr_12202_12283[2] = null);
(statearr_12202_12283[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12187 === 6))
{var inst_12114 = (state_12186[19]);var inst_12113 = cljs.core.deref.call(null,cs);var inst_12114__$1 = cljs.core.keys.call(null,inst_12113);var inst_12115 = cljs.core.count.call(null,inst_12114__$1);var inst_12116 = cljs.core.reset_BANG_.call(null,dctr,inst_12115);var inst_12121 = cljs.core.seq.call(null,inst_12114__$1);var inst_12122 = inst_12121;var inst_12123 = null;var inst_12124 = 0;var inst_12125 = 0;var state_12186__$1 = (function (){var statearr_12203 = state_12186;(statearr_12203[19] = inst_12114__$1);
(statearr_12203[10] = inst_12122);
(statearr_12203[20] = inst_12116);
(statearr_12203[11] = inst_12125);
(statearr_12203[12] = inst_12124);
(statearr_12203[13] = inst_12123);
return statearr_12203;
})();var statearr_12204_12284 = state_12186__$1;(statearr_12204_12284[2] = null);
(statearr_12204_12284[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12187 === 38))
{var inst_12165 = (state_12186[2]);var state_12186__$1 = state_12186;var statearr_12205_12285 = state_12186__$1;(statearr_12205_12285[2] = inst_12165);
(statearr_12205_12285[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12187 === 7))
{var inst_12182 = (state_12186[2]);var state_12186__$1 = state_12186;var statearr_12206_12286 = state_12186__$1;(statearr_12206_12286[2] = inst_12182);
(statearr_12206_12286[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12187 === 39))
{var inst_12143 = (state_12186[9]);var inst_12161 = (state_12186[2]);var inst_12162 = cljs.core.next.call(null,inst_12143);var inst_12122 = inst_12162;var inst_12123 = null;var inst_12124 = 0;var inst_12125 = 0;var state_12186__$1 = (function (){var statearr_12207 = state_12186;(statearr_12207[10] = inst_12122);
(statearr_12207[21] = inst_12161);
(statearr_12207[11] = inst_12125);
(statearr_12207[12] = inst_12124);
(statearr_12207[13] = inst_12123);
return statearr_12207;
})();var statearr_12208_12287 = state_12186__$1;(statearr_12208_12287[2] = null);
(statearr_12208_12287[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12187 === 8))
{var inst_12066 = (state_12186[14]);var inst_12065 = (state_12186[16]);var inst_12068 = (inst_12066 < inst_12065);var inst_12069 = inst_12068;var state_12186__$1 = state_12186;if(cljs.core.truth_(inst_12069))
{var statearr_12209_12288 = state_12186__$1;(statearr_12209_12288[1] = 10);
} else
{var statearr_12210_12289 = state_12186__$1;(statearr_12210_12289[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12187 === 40))
{var inst_12152 = (state_12186[18]);var inst_12153 = (state_12186[2]);var inst_12154 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12155 = cljs.core.async.untap_STAR_.call(null,m,inst_12152);var state_12186__$1 = (function (){var statearr_12211 = state_12186;(statearr_12211[22] = inst_12154);
(statearr_12211[23] = inst_12153);
return statearr_12211;
})();var statearr_12212_12290 = state_12186__$1;(statearr_12212_12290[2] = inst_12155);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12186__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12187 === 9))
{var inst_12111 = (state_12186[2]);var state_12186__$1 = state_12186;var statearr_12213_12291 = state_12186__$1;(statearr_12213_12291[2] = inst_12111);
(statearr_12213_12291[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12187 === 41))
{var inst_12152 = (state_12186[18]);var inst_12054 = (state_12186[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12186,40,Object,null,39);var inst_12159 = cljs.core.async.put_BANG_.call(null,inst_12152,inst_12054,done);var state_12186__$1 = state_12186;var statearr_12214_12292 = state_12186__$1;(statearr_12214_12292[2] = inst_12159);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12186__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12187 === 10))
{var inst_12066 = (state_12186[14]);var inst_12064 = (state_12186[15]);var inst_12072 = cljs.core._nth.call(null,inst_12064,inst_12066);var inst_12073 = cljs.core.nth.call(null,inst_12072,0,null);var inst_12074 = cljs.core.nth.call(null,inst_12072,1,null);var state_12186__$1 = (function (){var statearr_12215 = state_12186;(statearr_12215[24] = inst_12073);
return statearr_12215;
})();if(cljs.core.truth_(inst_12074))
{var statearr_12216_12293 = state_12186__$1;(statearr_12216_12293[1] = 13);
} else
{var statearr_12217_12294 = state_12186__$1;(statearr_12217_12294[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12187 === 42))
{var state_12186__$1 = state_12186;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12186__$1,45,dchan);
} else
{if((state_val_12187 === 11))
{var inst_12063 = (state_12186[17]);var inst_12083 = (state_12186[25]);var inst_12083__$1 = cljs.core.seq.call(null,inst_12063);var state_12186__$1 = (function (){var statearr_12218 = state_12186;(statearr_12218[25] = inst_12083__$1);
return statearr_12218;
})();if(inst_12083__$1)
{var statearr_12219_12295 = state_12186__$1;(statearr_12219_12295[1] = 16);
} else
{var statearr_12220_12296 = state_12186__$1;(statearr_12220_12296[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12187 === 43))
{var state_12186__$1 = state_12186;var statearr_12221_12297 = state_12186__$1;(statearr_12221_12297[2] = null);
(statearr_12221_12297[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12187 === 12))
{var inst_12109 = (state_12186[2]);var state_12186__$1 = state_12186;var statearr_12222_12298 = state_12186__$1;(statearr_12222_12298[2] = inst_12109);
(statearr_12222_12298[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12187 === 44))
{var inst_12179 = (state_12186[2]);var state_12186__$1 = (function (){var statearr_12223 = state_12186;(statearr_12223[26] = inst_12179);
return statearr_12223;
})();var statearr_12224_12299 = state_12186__$1;(statearr_12224_12299[2] = null);
(statearr_12224_12299[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12187 === 13))
{var inst_12073 = (state_12186[24]);var inst_12076 = cljs.core.async.close_BANG_.call(null,inst_12073);var state_12186__$1 = state_12186;var statearr_12225_12300 = state_12186__$1;(statearr_12225_12300[2] = inst_12076);
(statearr_12225_12300[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12187 === 45))
{var inst_12176 = (state_12186[2]);var state_12186__$1 = state_12186;var statearr_12229_12301 = state_12186__$1;(statearr_12229_12301[2] = inst_12176);
(statearr_12229_12301[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12187 === 14))
{var state_12186__$1 = state_12186;var statearr_12230_12302 = state_12186__$1;(statearr_12230_12302[2] = null);
(statearr_12230_12302[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12187 === 15))
{var inst_12066 = (state_12186[14]);var inst_12064 = (state_12186[15]);var inst_12065 = (state_12186[16]);var inst_12063 = (state_12186[17]);var inst_12079 = (state_12186[2]);var inst_12080 = (inst_12066 + 1);var tmp12226 = inst_12064;var tmp12227 = inst_12065;var tmp12228 = inst_12063;var inst_12063__$1 = tmp12228;var inst_12064__$1 = tmp12226;var inst_12065__$1 = tmp12227;var inst_12066__$1 = inst_12080;var state_12186__$1 = (function (){var statearr_12231 = state_12186;(statearr_12231[14] = inst_12066__$1);
(statearr_12231[15] = inst_12064__$1);
(statearr_12231[16] = inst_12065__$1);
(statearr_12231[17] = inst_12063__$1);
(statearr_12231[27] = inst_12079);
return statearr_12231;
})();var statearr_12232_12303 = state_12186__$1;(statearr_12232_12303[2] = null);
(statearr_12232_12303[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12187 === 16))
{var inst_12083 = (state_12186[25]);var inst_12085 = cljs.core.chunked_seq_QMARK_.call(null,inst_12083);var state_12186__$1 = state_12186;if(inst_12085)
{var statearr_12233_12304 = state_12186__$1;(statearr_12233_12304[1] = 19);
} else
{var statearr_12234_12305 = state_12186__$1;(statearr_12234_12305[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12187 === 17))
{var state_12186__$1 = state_12186;var statearr_12235_12306 = state_12186__$1;(statearr_12235_12306[2] = null);
(statearr_12235_12306[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12187 === 18))
{var inst_12107 = (state_12186[2]);var state_12186__$1 = state_12186;var statearr_12236_12307 = state_12186__$1;(statearr_12236_12307[2] = inst_12107);
(statearr_12236_12307[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12187 === 19))
{var inst_12083 = (state_12186[25]);var inst_12087 = cljs.core.chunk_first.call(null,inst_12083);var inst_12088 = cljs.core.chunk_rest.call(null,inst_12083);var inst_12089 = cljs.core.count.call(null,inst_12087);var inst_12063 = inst_12088;var inst_12064 = inst_12087;var inst_12065 = inst_12089;var inst_12066 = 0;var state_12186__$1 = (function (){var statearr_12237 = state_12186;(statearr_12237[14] = inst_12066);
(statearr_12237[15] = inst_12064);
(statearr_12237[16] = inst_12065);
(statearr_12237[17] = inst_12063);
return statearr_12237;
})();var statearr_12238_12308 = state_12186__$1;(statearr_12238_12308[2] = null);
(statearr_12238_12308[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12187 === 20))
{var inst_12083 = (state_12186[25]);var inst_12093 = cljs.core.first.call(null,inst_12083);var inst_12094 = cljs.core.nth.call(null,inst_12093,0,null);var inst_12095 = cljs.core.nth.call(null,inst_12093,1,null);var state_12186__$1 = (function (){var statearr_12239 = state_12186;(statearr_12239[28] = inst_12094);
return statearr_12239;
})();if(cljs.core.truth_(inst_12095))
{var statearr_12240_12309 = state_12186__$1;(statearr_12240_12309[1] = 22);
} else
{var statearr_12241_12310 = state_12186__$1;(statearr_12241_12310[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12187 === 21))
{var inst_12104 = (state_12186[2]);var state_12186__$1 = state_12186;var statearr_12242_12311 = state_12186__$1;(statearr_12242_12311[2] = inst_12104);
(statearr_12242_12311[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12187 === 22))
{var inst_12094 = (state_12186[28]);var inst_12097 = cljs.core.async.close_BANG_.call(null,inst_12094);var state_12186__$1 = state_12186;var statearr_12243_12312 = state_12186__$1;(statearr_12243_12312[2] = inst_12097);
(statearr_12243_12312[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12187 === 23))
{var state_12186__$1 = state_12186;var statearr_12244_12313 = state_12186__$1;(statearr_12244_12313[2] = null);
(statearr_12244_12313[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12187 === 24))
{var inst_12083 = (state_12186[25]);var inst_12100 = (state_12186[2]);var inst_12101 = cljs.core.next.call(null,inst_12083);var inst_12063 = inst_12101;var inst_12064 = null;var inst_12065 = 0;var inst_12066 = 0;var state_12186__$1 = (function (){var statearr_12245 = state_12186;(statearr_12245[14] = inst_12066);
(statearr_12245[29] = inst_12100);
(statearr_12245[15] = inst_12064);
(statearr_12245[16] = inst_12065);
(statearr_12245[17] = inst_12063);
return statearr_12245;
})();var statearr_12246_12314 = state_12186__$1;(statearr_12246_12314[2] = null);
(statearr_12246_12314[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12187 === 25))
{var inst_12125 = (state_12186[11]);var inst_12124 = (state_12186[12]);var inst_12127 = (inst_12125 < inst_12124);var inst_12128 = inst_12127;var state_12186__$1 = state_12186;if(cljs.core.truth_(inst_12128))
{var statearr_12247_12315 = state_12186__$1;(statearr_12247_12315[1] = 27);
} else
{var statearr_12248_12316 = state_12186__$1;(statearr_12248_12316[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12187 === 26))
{var inst_12114 = (state_12186[19]);var inst_12172 = (state_12186[2]);var inst_12173 = cljs.core.seq.call(null,inst_12114);var state_12186__$1 = (function (){var statearr_12249 = state_12186;(statearr_12249[30] = inst_12172);
return statearr_12249;
})();if(inst_12173)
{var statearr_12250_12317 = state_12186__$1;(statearr_12250_12317[1] = 42);
} else
{var statearr_12251_12318 = state_12186__$1;(statearr_12251_12318[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12187 === 27))
{var inst_12125 = (state_12186[11]);var inst_12123 = (state_12186[13]);var inst_12130 = cljs.core._nth.call(null,inst_12123,inst_12125);var state_12186__$1 = (function (){var statearr_12252 = state_12186;(statearr_12252[7] = inst_12130);
return statearr_12252;
})();var statearr_12253_12319 = state_12186__$1;(statearr_12253_12319[2] = null);
(statearr_12253_12319[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12187 === 28))
{var inst_12143 = (state_12186[9]);var inst_12122 = (state_12186[10]);var inst_12143__$1 = cljs.core.seq.call(null,inst_12122);var state_12186__$1 = (function (){var statearr_12257 = state_12186;(statearr_12257[9] = inst_12143__$1);
return statearr_12257;
})();if(inst_12143__$1)
{var statearr_12258_12320 = state_12186__$1;(statearr_12258_12320[1] = 33);
} else
{var statearr_12259_12321 = state_12186__$1;(statearr_12259_12321[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12187 === 29))
{var inst_12170 = (state_12186[2]);var state_12186__$1 = state_12186;var statearr_12260_12322 = state_12186__$1;(statearr_12260_12322[2] = inst_12170);
(statearr_12260_12322[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12187 === 30))
{var inst_12122 = (state_12186[10]);var inst_12125 = (state_12186[11]);var inst_12124 = (state_12186[12]);var inst_12123 = (state_12186[13]);var inst_12139 = (state_12186[2]);var inst_12140 = (inst_12125 + 1);var tmp12254 = inst_12122;var tmp12255 = inst_12124;var tmp12256 = inst_12123;var inst_12122__$1 = tmp12254;var inst_12123__$1 = tmp12256;var inst_12124__$1 = tmp12255;var inst_12125__$1 = inst_12140;var state_12186__$1 = (function (){var statearr_12261 = state_12186;(statearr_12261[31] = inst_12139);
(statearr_12261[10] = inst_12122__$1);
(statearr_12261[11] = inst_12125__$1);
(statearr_12261[12] = inst_12124__$1);
(statearr_12261[13] = inst_12123__$1);
return statearr_12261;
})();var statearr_12262_12323 = state_12186__$1;(statearr_12262_12323[2] = null);
(statearr_12262_12323[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12187 === 31))
{var inst_12130 = (state_12186[7]);var inst_12131 = (state_12186[2]);var inst_12132 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12133 = cljs.core.async.untap_STAR_.call(null,m,inst_12130);var state_12186__$1 = (function (){var statearr_12263 = state_12186;(statearr_12263[32] = inst_12132);
(statearr_12263[33] = inst_12131);
return statearr_12263;
})();var statearr_12264_12324 = state_12186__$1;(statearr_12264_12324[2] = inst_12133);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12186__$1);
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
});return ((function (switch__6865__auto__){
return (function() {
var state_machine__6866__auto__ = null;
var state_machine__6866__auto____0 = (function (){var statearr_12268 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12268[0] = state_machine__6866__auto__);
(statearr_12268[1] = 1);
return statearr_12268;
});
var state_machine__6866__auto____1 = (function (state_12186){while(true){
var ret_value__6867__auto__ = (function (){try{while(true){
var result__6868__auto__ = switch__6865__auto__.call(null,state_12186);if(cljs.core.keyword_identical_QMARK_.call(null,result__6868__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6868__auto__;
}
break;
}
}catch (e12269){if((e12269 instanceof Object))
{var ex__6869__auto__ = e12269;var statearr_12270_12325 = state_12186;(statearr_12270_12325[5] = ex__6869__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12186);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12269;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6867__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12326 = state_12186;
state_12186 = G__12326;
continue;
}
} else
{return ret_value__6867__auto__;
}
break;
}
});
state_machine__6866__auto__ = function(state_12186){
switch(arguments.length){
case 0:
return state_machine__6866__auto____0.call(this);
case 1:
return state_machine__6866__auto____1.call(this,state_12186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6866__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6866__auto____0;
state_machine__6866__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6866__auto____1;
return state_machine__6866__auto__;
})()
;})(switch__6865__auto__))
})();var state__6937__auto__ = (function (){var statearr_12271 = f__6936__auto__.call(null);(statearr_12271[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6935__auto___12272);
return statearr_12271;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6937__auto__);
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
cljs.core.async.Mix = (function (){var obj12328 = {};return obj12328;
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
;var m = (function (){if(typeof cljs.core.async.t12438 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12438 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta12439){
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
this.meta12439 = meta12439;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12438.cljs$lang$type = true;
cljs.core.async.t12438.cljs$lang$ctorStr = "cljs.core.async/t12438";
cljs.core.async.t12438.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t12438");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12438.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12438.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12438.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12438.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12438.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12438.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12438.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12438.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12438.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12440){var self__ = this;
var _12440__$1 = this;return self__.meta12439;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12438.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12440,meta12439__$1){var self__ = this;
var _12440__$1 = this;return (new cljs.core.async.t12438(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta12439__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12438 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12438(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12439){return (new cljs.core.async.t12438(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12439));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12438(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6935__auto___12547 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6936__auto__ = (function (){var switch__6865__auto__ = (function (state_12505){var state_val_12506 = (state_12505[1]);if((state_val_12506 === 1))
{var inst_12444 = (state_12505[7]);var inst_12444__$1 = calc_state.call(null);var inst_12445 = cljs.core.seq_QMARK_.call(null,inst_12444__$1);var state_12505__$1 = (function (){var statearr_12507 = state_12505;(statearr_12507[7] = inst_12444__$1);
return statearr_12507;
})();if(inst_12445)
{var statearr_12508_12548 = state_12505__$1;(statearr_12508_12548[1] = 2);
} else
{var statearr_12509_12549 = state_12505__$1;(statearr_12509_12549[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12506 === 2))
{var inst_12444 = (state_12505[7]);var inst_12447 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12444);var state_12505__$1 = state_12505;var statearr_12510_12550 = state_12505__$1;(statearr_12510_12550[2] = inst_12447);
(statearr_12510_12550[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12506 === 3))
{var inst_12444 = (state_12505[7]);var state_12505__$1 = state_12505;var statearr_12511_12551 = state_12505__$1;(statearr_12511_12551[2] = inst_12444);
(statearr_12511_12551[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12506 === 4))
{var inst_12444 = (state_12505[7]);var inst_12450 = (state_12505[2]);var inst_12451 = cljs.core.get.call(null,inst_12450,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12452 = cljs.core.get.call(null,inst_12450,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12453 = cljs.core.get.call(null,inst_12450,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_12454 = inst_12444;var state_12505__$1 = (function (){var statearr_12512 = state_12505;(statearr_12512[8] = inst_12454);
(statearr_12512[9] = inst_12453);
(statearr_12512[10] = inst_12451);
(statearr_12512[11] = inst_12452);
return statearr_12512;
})();var statearr_12513_12552 = state_12505__$1;(statearr_12513_12552[2] = null);
(statearr_12513_12552[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12506 === 5))
{var inst_12454 = (state_12505[8]);var inst_12457 = cljs.core.seq_QMARK_.call(null,inst_12454);var state_12505__$1 = state_12505;if(inst_12457)
{var statearr_12514_12553 = state_12505__$1;(statearr_12514_12553[1] = 7);
} else
{var statearr_12515_12554 = state_12505__$1;(statearr_12515_12554[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12506 === 6))
{var inst_12503 = (state_12505[2]);var state_12505__$1 = state_12505;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12505__$1,inst_12503);
} else
{if((state_val_12506 === 7))
{var inst_12454 = (state_12505[8]);var inst_12459 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12454);var state_12505__$1 = state_12505;var statearr_12516_12555 = state_12505__$1;(statearr_12516_12555[2] = inst_12459);
(statearr_12516_12555[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12506 === 8))
{var inst_12454 = (state_12505[8]);var state_12505__$1 = state_12505;var statearr_12517_12556 = state_12505__$1;(statearr_12517_12556[2] = inst_12454);
(statearr_12517_12556[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12506 === 9))
{var inst_12462 = (state_12505[12]);var inst_12462__$1 = (state_12505[2]);var inst_12463 = cljs.core.get.call(null,inst_12462__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12464 = cljs.core.get.call(null,inst_12462__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12465 = cljs.core.get.call(null,inst_12462__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_12505__$1 = (function (){var statearr_12518 = state_12505;(statearr_12518[12] = inst_12462__$1);
(statearr_12518[13] = inst_12465);
(statearr_12518[14] = inst_12464);
return statearr_12518;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12505__$1,10,inst_12463);
} else
{if((state_val_12506 === 10))
{var inst_12469 = (state_12505[15]);var inst_12470 = (state_12505[16]);var inst_12468 = (state_12505[2]);var inst_12469__$1 = cljs.core.nth.call(null,inst_12468,0,null);var inst_12470__$1 = cljs.core.nth.call(null,inst_12468,1,null);var inst_12471 = (inst_12469__$1 == null);var inst_12472 = cljs.core._EQ_.call(null,inst_12470__$1,change);var inst_12473 = (inst_12471) || (inst_12472);var state_12505__$1 = (function (){var statearr_12519 = state_12505;(statearr_12519[15] = inst_12469__$1);
(statearr_12519[16] = inst_12470__$1);
return statearr_12519;
})();if(cljs.core.truth_(inst_12473))
{var statearr_12520_12557 = state_12505__$1;(statearr_12520_12557[1] = 11);
} else
{var statearr_12521_12558 = state_12505__$1;(statearr_12521_12558[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12506 === 11))
{var inst_12469 = (state_12505[15]);var inst_12475 = (inst_12469 == null);var state_12505__$1 = state_12505;if(cljs.core.truth_(inst_12475))
{var statearr_12522_12559 = state_12505__$1;(statearr_12522_12559[1] = 14);
} else
{var statearr_12523_12560 = state_12505__$1;(statearr_12523_12560[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12506 === 12))
{var inst_12465 = (state_12505[13]);var inst_12470 = (state_12505[16]);var inst_12484 = (state_12505[17]);var inst_12484__$1 = inst_12465.call(null,inst_12470);var state_12505__$1 = (function (){var statearr_12524 = state_12505;(statearr_12524[17] = inst_12484__$1);
return statearr_12524;
})();if(cljs.core.truth_(inst_12484__$1))
{var statearr_12525_12561 = state_12505__$1;(statearr_12525_12561[1] = 17);
} else
{var statearr_12526_12562 = state_12505__$1;(statearr_12526_12562[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12506 === 13))
{var inst_12501 = (state_12505[2]);var state_12505__$1 = state_12505;var statearr_12527_12563 = state_12505__$1;(statearr_12527_12563[2] = inst_12501);
(statearr_12527_12563[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12506 === 14))
{var inst_12470 = (state_12505[16]);var inst_12477 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12470);var state_12505__$1 = state_12505;var statearr_12528_12564 = state_12505__$1;(statearr_12528_12564[2] = inst_12477);
(statearr_12528_12564[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12506 === 15))
{var state_12505__$1 = state_12505;var statearr_12529_12565 = state_12505__$1;(statearr_12529_12565[2] = null);
(statearr_12529_12565[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12506 === 16))
{var inst_12480 = (state_12505[2]);var inst_12481 = calc_state.call(null);var inst_12454 = inst_12481;var state_12505__$1 = (function (){var statearr_12530 = state_12505;(statearr_12530[8] = inst_12454);
(statearr_12530[18] = inst_12480);
return statearr_12530;
})();var statearr_12531_12566 = state_12505__$1;(statearr_12531_12566[2] = null);
(statearr_12531_12566[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12506 === 17))
{var inst_12484 = (state_12505[17]);var state_12505__$1 = state_12505;var statearr_12532_12567 = state_12505__$1;(statearr_12532_12567[2] = inst_12484);
(statearr_12532_12567[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12506 === 18))
{var inst_12465 = (state_12505[13]);var inst_12470 = (state_12505[16]);var inst_12464 = (state_12505[14]);var inst_12487 = cljs.core.empty_QMARK_.call(null,inst_12465);var inst_12488 = inst_12464.call(null,inst_12470);var inst_12489 = cljs.core.not.call(null,inst_12488);var inst_12490 = (inst_12487) && (inst_12489);var state_12505__$1 = state_12505;var statearr_12533_12568 = state_12505__$1;(statearr_12533_12568[2] = inst_12490);
(statearr_12533_12568[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12506 === 19))
{var inst_12492 = (state_12505[2]);var state_12505__$1 = state_12505;if(cljs.core.truth_(inst_12492))
{var statearr_12534_12569 = state_12505__$1;(statearr_12534_12569[1] = 20);
} else
{var statearr_12535_12570 = state_12505__$1;(statearr_12535_12570[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12506 === 20))
{var inst_12469 = (state_12505[15]);var state_12505__$1 = state_12505;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12505__$1,23,out,inst_12469);
} else
{if((state_val_12506 === 21))
{var state_12505__$1 = state_12505;var statearr_12536_12571 = state_12505__$1;(statearr_12536_12571[2] = null);
(statearr_12536_12571[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12506 === 22))
{var inst_12462 = (state_12505[12]);var inst_12498 = (state_12505[2]);var inst_12454 = inst_12462;var state_12505__$1 = (function (){var statearr_12537 = state_12505;(statearr_12537[8] = inst_12454);
(statearr_12537[19] = inst_12498);
return statearr_12537;
})();var statearr_12538_12572 = state_12505__$1;(statearr_12538_12572[2] = null);
(statearr_12538_12572[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12506 === 23))
{var inst_12495 = (state_12505[2]);var state_12505__$1 = state_12505;var statearr_12539_12573 = state_12505__$1;(statearr_12539_12573[2] = inst_12495);
(statearr_12539_12573[1] = 22);
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
});return ((function (switch__6865__auto__){
return (function() {
var state_machine__6866__auto__ = null;
var state_machine__6866__auto____0 = (function (){var statearr_12543 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12543[0] = state_machine__6866__auto__);
(statearr_12543[1] = 1);
return statearr_12543;
});
var state_machine__6866__auto____1 = (function (state_12505){while(true){
var ret_value__6867__auto__ = (function (){try{while(true){
var result__6868__auto__ = switch__6865__auto__.call(null,state_12505);if(cljs.core.keyword_identical_QMARK_.call(null,result__6868__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6868__auto__;
}
break;
}
}catch (e12544){if((e12544 instanceof Object))
{var ex__6869__auto__ = e12544;var statearr_12545_12574 = state_12505;(statearr_12545_12574[5] = ex__6869__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12505);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12544;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6867__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12575 = state_12505;
state_12505 = G__12575;
continue;
}
} else
{return ret_value__6867__auto__;
}
break;
}
});
state_machine__6866__auto__ = function(state_12505){
switch(arguments.length){
case 0:
return state_machine__6866__auto____0.call(this);
case 1:
return state_machine__6866__auto____1.call(this,state_12505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6866__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6866__auto____0;
state_machine__6866__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6866__auto____1;
return state_machine__6866__auto__;
})()
;})(switch__6865__auto__))
})();var state__6937__auto__ = (function (){var statearr_12546 = f__6936__auto__.call(null);(statearr_12546[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6935__auto___12547);
return statearr_12546;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6937__auto__);
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
cljs.core.async.Pub = (function (){var obj12577 = {};return obj12577;
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
return (function (p1__12578_SHARP_){if(cljs.core.truth_(p1__12578_SHARP_.call(null,topic)))
{return p1__12578_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12578_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3443__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12703 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12703 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12704){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12704 = meta12704;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12703.cljs$lang$type = true;
cljs.core.async.t12703.cljs$lang$ctorStr = "cljs.core.async/t12703";
cljs.core.async.t12703.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t12703");
});})(mults,ensure_mult))
;
cljs.core.async.t12703.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12703.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12703.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12703.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12703.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12703.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12703.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12703.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12705){var self__ = this;
var _12705__$1 = this;return self__.meta12704;
});})(mults,ensure_mult))
;
cljs.core.async.t12703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12705,meta12704__$1){var self__ = this;
var _12705__$1 = this;return (new cljs.core.async.t12703(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12704__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12703 = ((function (mults,ensure_mult){
return (function __GT_t12703(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12704){return (new cljs.core.async.t12703(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12704));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12703(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6935__auto___12827 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6936__auto__ = (function (){var switch__6865__auto__ = (function (state_12779){var state_val_12780 = (state_12779[1]);if((state_val_12780 === 1))
{var state_12779__$1 = state_12779;var statearr_12781_12828 = state_12779__$1;(statearr_12781_12828[2] = null);
(statearr_12781_12828[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12780 === 2))
{var state_12779__$1 = state_12779;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12779__$1,4,ch);
} else
{if((state_val_12780 === 3))
{var inst_12777 = (state_12779[2]);var state_12779__$1 = state_12779;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12779__$1,inst_12777);
} else
{if((state_val_12780 === 4))
{var inst_12708 = (state_12779[7]);var inst_12708__$1 = (state_12779[2]);var inst_12709 = (inst_12708__$1 == null);var state_12779__$1 = (function (){var statearr_12782 = state_12779;(statearr_12782[7] = inst_12708__$1);
return statearr_12782;
})();if(cljs.core.truth_(inst_12709))
{var statearr_12783_12829 = state_12779__$1;(statearr_12783_12829[1] = 5);
} else
{var statearr_12784_12830 = state_12779__$1;(statearr_12784_12830[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12780 === 5))
{var inst_12715 = cljs.core.deref.call(null,mults);var inst_12716 = cljs.core.vals.call(null,inst_12715);var inst_12717 = cljs.core.seq.call(null,inst_12716);var inst_12718 = inst_12717;var inst_12719 = null;var inst_12720 = 0;var inst_12721 = 0;var state_12779__$1 = (function (){var statearr_12785 = state_12779;(statearr_12785[8] = inst_12718);
(statearr_12785[9] = inst_12719);
(statearr_12785[10] = inst_12721);
(statearr_12785[11] = inst_12720);
return statearr_12785;
})();var statearr_12786_12831 = state_12779__$1;(statearr_12786_12831[2] = null);
(statearr_12786_12831[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12780 === 6))
{var inst_12758 = (state_12779[12]);var inst_12756 = (state_12779[13]);var inst_12708 = (state_12779[7]);var inst_12756__$1 = topic_fn.call(null,inst_12708);var inst_12757 = cljs.core.deref.call(null,mults);var inst_12758__$1 = cljs.core.get.call(null,inst_12757,inst_12756__$1);var state_12779__$1 = (function (){var statearr_12787 = state_12779;(statearr_12787[12] = inst_12758__$1);
(statearr_12787[13] = inst_12756__$1);
return statearr_12787;
})();if(cljs.core.truth_(inst_12758__$1))
{var statearr_12788_12832 = state_12779__$1;(statearr_12788_12832[1] = 19);
} else
{var statearr_12789_12833 = state_12779__$1;(statearr_12789_12833[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12780 === 7))
{var inst_12775 = (state_12779[2]);var state_12779__$1 = state_12779;var statearr_12790_12834 = state_12779__$1;(statearr_12790_12834[2] = inst_12775);
(statearr_12790_12834[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12780 === 8))
{var inst_12721 = (state_12779[10]);var inst_12720 = (state_12779[11]);var inst_12723 = (inst_12721 < inst_12720);var inst_12724 = inst_12723;var state_12779__$1 = state_12779;if(cljs.core.truth_(inst_12724))
{var statearr_12794_12835 = state_12779__$1;(statearr_12794_12835[1] = 10);
} else
{var statearr_12795_12836 = state_12779__$1;(statearr_12795_12836[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12780 === 9))
{var inst_12754 = (state_12779[2]);var state_12779__$1 = state_12779;var statearr_12796_12837 = state_12779__$1;(statearr_12796_12837[2] = inst_12754);
(statearr_12796_12837[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12780 === 10))
{var inst_12718 = (state_12779[8]);var inst_12719 = (state_12779[9]);var inst_12721 = (state_12779[10]);var inst_12720 = (state_12779[11]);var inst_12726 = cljs.core._nth.call(null,inst_12719,inst_12721);var inst_12727 = cljs.core.async.muxch_STAR_.call(null,inst_12726);var inst_12728 = cljs.core.async.close_BANG_.call(null,inst_12727);var inst_12729 = (inst_12721 + 1);var tmp12791 = inst_12718;var tmp12792 = inst_12719;var tmp12793 = inst_12720;var inst_12718__$1 = tmp12791;var inst_12719__$1 = tmp12792;var inst_12720__$1 = tmp12793;var inst_12721__$1 = inst_12729;var state_12779__$1 = (function (){var statearr_12797 = state_12779;(statearr_12797[8] = inst_12718__$1);
(statearr_12797[9] = inst_12719__$1);
(statearr_12797[14] = inst_12728);
(statearr_12797[10] = inst_12721__$1);
(statearr_12797[11] = inst_12720__$1);
return statearr_12797;
})();var statearr_12798_12838 = state_12779__$1;(statearr_12798_12838[2] = null);
(statearr_12798_12838[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12780 === 11))
{var inst_12718 = (state_12779[8]);var inst_12732 = (state_12779[15]);var inst_12732__$1 = cljs.core.seq.call(null,inst_12718);var state_12779__$1 = (function (){var statearr_12799 = state_12779;(statearr_12799[15] = inst_12732__$1);
return statearr_12799;
})();if(inst_12732__$1)
{var statearr_12800_12839 = state_12779__$1;(statearr_12800_12839[1] = 13);
} else
{var statearr_12801_12840 = state_12779__$1;(statearr_12801_12840[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12780 === 12))
{var inst_12752 = (state_12779[2]);var state_12779__$1 = state_12779;var statearr_12802_12841 = state_12779__$1;(statearr_12802_12841[2] = inst_12752);
(statearr_12802_12841[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12780 === 13))
{var inst_12732 = (state_12779[15]);var inst_12734 = cljs.core.chunked_seq_QMARK_.call(null,inst_12732);var state_12779__$1 = state_12779;if(inst_12734)
{var statearr_12803_12842 = state_12779__$1;(statearr_12803_12842[1] = 16);
} else
{var statearr_12804_12843 = state_12779__$1;(statearr_12804_12843[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12780 === 14))
{var state_12779__$1 = state_12779;var statearr_12805_12844 = state_12779__$1;(statearr_12805_12844[2] = null);
(statearr_12805_12844[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12780 === 15))
{var inst_12750 = (state_12779[2]);var state_12779__$1 = state_12779;var statearr_12806_12845 = state_12779__$1;(statearr_12806_12845[2] = inst_12750);
(statearr_12806_12845[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12780 === 16))
{var inst_12732 = (state_12779[15]);var inst_12736 = cljs.core.chunk_first.call(null,inst_12732);var inst_12737 = cljs.core.chunk_rest.call(null,inst_12732);var inst_12738 = cljs.core.count.call(null,inst_12736);var inst_12718 = inst_12737;var inst_12719 = inst_12736;var inst_12720 = inst_12738;var inst_12721 = 0;var state_12779__$1 = (function (){var statearr_12807 = state_12779;(statearr_12807[8] = inst_12718);
(statearr_12807[9] = inst_12719);
(statearr_12807[10] = inst_12721);
(statearr_12807[11] = inst_12720);
return statearr_12807;
})();var statearr_12808_12846 = state_12779__$1;(statearr_12808_12846[2] = null);
(statearr_12808_12846[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12780 === 17))
{var inst_12732 = (state_12779[15]);var inst_12741 = cljs.core.first.call(null,inst_12732);var inst_12742 = cljs.core.async.muxch_STAR_.call(null,inst_12741);var inst_12743 = cljs.core.async.close_BANG_.call(null,inst_12742);var inst_12744 = cljs.core.next.call(null,inst_12732);var inst_12718 = inst_12744;var inst_12719 = null;var inst_12720 = 0;var inst_12721 = 0;var state_12779__$1 = (function (){var statearr_12809 = state_12779;(statearr_12809[16] = inst_12743);
(statearr_12809[8] = inst_12718);
(statearr_12809[9] = inst_12719);
(statearr_12809[10] = inst_12721);
(statearr_12809[11] = inst_12720);
return statearr_12809;
})();var statearr_12810_12847 = state_12779__$1;(statearr_12810_12847[2] = null);
(statearr_12810_12847[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12780 === 18))
{var inst_12747 = (state_12779[2]);var state_12779__$1 = state_12779;var statearr_12811_12848 = state_12779__$1;(statearr_12811_12848[2] = inst_12747);
(statearr_12811_12848[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12780 === 19))
{var state_12779__$1 = state_12779;var statearr_12812_12849 = state_12779__$1;(statearr_12812_12849[2] = null);
(statearr_12812_12849[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12780 === 20))
{var state_12779__$1 = state_12779;var statearr_12813_12850 = state_12779__$1;(statearr_12813_12850[2] = null);
(statearr_12813_12850[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12780 === 21))
{var inst_12772 = (state_12779[2]);var state_12779__$1 = (function (){var statearr_12814 = state_12779;(statearr_12814[17] = inst_12772);
return statearr_12814;
})();var statearr_12815_12851 = state_12779__$1;(statearr_12815_12851[2] = null);
(statearr_12815_12851[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12780 === 22))
{var inst_12769 = (state_12779[2]);var state_12779__$1 = state_12779;var statearr_12816_12852 = state_12779__$1;(statearr_12816_12852[2] = inst_12769);
(statearr_12816_12852[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12780 === 23))
{var inst_12756 = (state_12779[13]);var inst_12760 = (state_12779[2]);var inst_12761 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12756);var state_12779__$1 = (function (){var statearr_12817 = state_12779;(statearr_12817[18] = inst_12760);
return statearr_12817;
})();var statearr_12818_12853 = state_12779__$1;(statearr_12818_12853[2] = inst_12761);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12779__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12780 === 24))
{var inst_12758 = (state_12779[12]);var inst_12708 = (state_12779[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12779,23,Object,null,22);var inst_12765 = cljs.core.async.muxch_STAR_.call(null,inst_12758);var state_12779__$1 = state_12779;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12779__$1,25,inst_12765,inst_12708);
} else
{if((state_val_12780 === 25))
{var inst_12767 = (state_12779[2]);var state_12779__$1 = state_12779;var statearr_12819_12854 = state_12779__$1;(statearr_12819_12854[2] = inst_12767);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12779__$1);
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
});return ((function (switch__6865__auto__){
return (function() {
var state_machine__6866__auto__ = null;
var state_machine__6866__auto____0 = (function (){var statearr_12823 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12823[0] = state_machine__6866__auto__);
(statearr_12823[1] = 1);
return statearr_12823;
});
var state_machine__6866__auto____1 = (function (state_12779){while(true){
var ret_value__6867__auto__ = (function (){try{while(true){
var result__6868__auto__ = switch__6865__auto__.call(null,state_12779);if(cljs.core.keyword_identical_QMARK_.call(null,result__6868__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6868__auto__;
}
break;
}
}catch (e12824){if((e12824 instanceof Object))
{var ex__6869__auto__ = e12824;var statearr_12825_12855 = state_12779;(statearr_12825_12855[5] = ex__6869__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12779);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12824;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6867__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12856 = state_12779;
state_12779 = G__12856;
continue;
}
} else
{return ret_value__6867__auto__;
}
break;
}
});
state_machine__6866__auto__ = function(state_12779){
switch(arguments.length){
case 0:
return state_machine__6866__auto____0.call(this);
case 1:
return state_machine__6866__auto____1.call(this,state_12779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6866__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6866__auto____0;
state_machine__6866__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6866__auto____1;
return state_machine__6866__auto__;
})()
;})(switch__6865__auto__))
})();var state__6937__auto__ = (function (){var statearr_12826 = f__6936__auto__.call(null);(statearr_12826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6935__auto___12827);
return statearr_12826;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6937__auto__);
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
,cljs.core.range.call(null,cnt));var c__6935__auto___12993 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6936__auto__ = (function (){var switch__6865__auto__ = (function (state_12963){var state_val_12964 = (state_12963[1]);if((state_val_12964 === 1))
{var state_12963__$1 = state_12963;var statearr_12965_12994 = state_12963__$1;(statearr_12965_12994[2] = null);
(statearr_12965_12994[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12964 === 2))
{var inst_12926 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12927 = 0;var state_12963__$1 = (function (){var statearr_12966 = state_12963;(statearr_12966[7] = inst_12926);
(statearr_12966[8] = inst_12927);
return statearr_12966;
})();var statearr_12967_12995 = state_12963__$1;(statearr_12967_12995[2] = null);
(statearr_12967_12995[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12964 === 3))
{var inst_12961 = (state_12963[2]);var state_12963__$1 = state_12963;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12963__$1,inst_12961);
} else
{if((state_val_12964 === 4))
{var inst_12927 = (state_12963[8]);var inst_12929 = (inst_12927 < cnt);var state_12963__$1 = state_12963;if(cljs.core.truth_(inst_12929))
{var statearr_12968_12996 = state_12963__$1;(statearr_12968_12996[1] = 6);
} else
{var statearr_12969_12997 = state_12963__$1;(statearr_12969_12997[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12964 === 5))
{var inst_12947 = (state_12963[2]);var state_12963__$1 = (function (){var statearr_12970 = state_12963;(statearr_12970[9] = inst_12947);
return statearr_12970;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12963__$1,12,dchan);
} else
{if((state_val_12964 === 6))
{var state_12963__$1 = state_12963;var statearr_12971_12998 = state_12963__$1;(statearr_12971_12998[2] = null);
(statearr_12971_12998[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12964 === 7))
{var state_12963__$1 = state_12963;var statearr_12972_12999 = state_12963__$1;(statearr_12972_12999[2] = null);
(statearr_12972_12999[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12964 === 8))
{var inst_12945 = (state_12963[2]);var state_12963__$1 = state_12963;var statearr_12973_13000 = state_12963__$1;(statearr_12973_13000[2] = inst_12945);
(statearr_12973_13000[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12964 === 9))
{var inst_12927 = (state_12963[8]);var inst_12940 = (state_12963[2]);var inst_12941 = (inst_12927 + 1);var inst_12927__$1 = inst_12941;var state_12963__$1 = (function (){var statearr_12974 = state_12963;(statearr_12974[10] = inst_12940);
(statearr_12974[8] = inst_12927__$1);
return statearr_12974;
})();var statearr_12975_13001 = state_12963__$1;(statearr_12975_13001[2] = null);
(statearr_12975_13001[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12964 === 10))
{var inst_12931 = (state_12963[2]);var inst_12932 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12963__$1 = (function (){var statearr_12976 = state_12963;(statearr_12976[11] = inst_12931);
return statearr_12976;
})();var statearr_12977_13002 = state_12963__$1;(statearr_12977_13002[2] = inst_12932);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12963__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12964 === 11))
{var inst_12927 = (state_12963[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12963,10,Object,null,9);var inst_12936 = chs__$1.call(null,inst_12927);var inst_12937 = done.call(null,inst_12927);var inst_12938 = cljs.core.async.take_BANG_.call(null,inst_12936,inst_12937);var state_12963__$1 = state_12963;var statearr_12978_13003 = state_12963__$1;(statearr_12978_13003[2] = inst_12938);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12963__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12964 === 12))
{var inst_12949 = (state_12963[12]);var inst_12949__$1 = (state_12963[2]);var inst_12950 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12949__$1);var state_12963__$1 = (function (){var statearr_12979 = state_12963;(statearr_12979[12] = inst_12949__$1);
return statearr_12979;
})();if(cljs.core.truth_(inst_12950))
{var statearr_12980_13004 = state_12963__$1;(statearr_12980_13004[1] = 13);
} else
{var statearr_12981_13005 = state_12963__$1;(statearr_12981_13005[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12964 === 13))
{var inst_12952 = cljs.core.async.close_BANG_.call(null,out);var state_12963__$1 = state_12963;var statearr_12982_13006 = state_12963__$1;(statearr_12982_13006[2] = inst_12952);
(statearr_12982_13006[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12964 === 14))
{var inst_12949 = (state_12963[12]);var inst_12954 = cljs.core.apply.call(null,f,inst_12949);var state_12963__$1 = state_12963;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12963__$1,16,out,inst_12954);
} else
{if((state_val_12964 === 15))
{var inst_12959 = (state_12963[2]);var state_12963__$1 = state_12963;var statearr_12983_13007 = state_12963__$1;(statearr_12983_13007[2] = inst_12959);
(statearr_12983_13007[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12964 === 16))
{var inst_12956 = (state_12963[2]);var state_12963__$1 = (function (){var statearr_12984 = state_12963;(statearr_12984[13] = inst_12956);
return statearr_12984;
})();var statearr_12985_13008 = state_12963__$1;(statearr_12985_13008[2] = null);
(statearr_12985_13008[1] = 2);
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
});return ((function (switch__6865__auto__){
return (function() {
var state_machine__6866__auto__ = null;
var state_machine__6866__auto____0 = (function (){var statearr_12989 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12989[0] = state_machine__6866__auto__);
(statearr_12989[1] = 1);
return statearr_12989;
});
var state_machine__6866__auto____1 = (function (state_12963){while(true){
var ret_value__6867__auto__ = (function (){try{while(true){
var result__6868__auto__ = switch__6865__auto__.call(null,state_12963);if(cljs.core.keyword_identical_QMARK_.call(null,result__6868__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6868__auto__;
}
break;
}
}catch (e12990){if((e12990 instanceof Object))
{var ex__6869__auto__ = e12990;var statearr_12991_13009 = state_12963;(statearr_12991_13009[5] = ex__6869__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12963);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12990;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6867__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13010 = state_12963;
state_12963 = G__13010;
continue;
}
} else
{return ret_value__6867__auto__;
}
break;
}
});
state_machine__6866__auto__ = function(state_12963){
switch(arguments.length){
case 0:
return state_machine__6866__auto____0.call(this);
case 1:
return state_machine__6866__auto____1.call(this,state_12963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6866__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6866__auto____0;
state_machine__6866__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6866__auto____1;
return state_machine__6866__auto__;
})()
;})(switch__6865__auto__))
})();var state__6937__auto__ = (function (){var statearr_12992 = f__6936__auto__.call(null);(statearr_12992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6935__auto___12993);
return statearr_12992;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6937__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6935__auto___13118 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6936__auto__ = (function (){var switch__6865__auto__ = (function (state_13094){var state_val_13095 = (state_13094[1]);if((state_val_13095 === 1))
{var inst_13065 = cljs.core.vec.call(null,chs);var inst_13066 = inst_13065;var state_13094__$1 = (function (){var statearr_13096 = state_13094;(statearr_13096[7] = inst_13066);
return statearr_13096;
})();var statearr_13097_13119 = state_13094__$1;(statearr_13097_13119[2] = null);
(statearr_13097_13119[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13095 === 2))
{var inst_13066 = (state_13094[7]);var inst_13068 = cljs.core.count.call(null,inst_13066);var inst_13069 = (inst_13068 > 0);var state_13094__$1 = state_13094;if(cljs.core.truth_(inst_13069))
{var statearr_13098_13120 = state_13094__$1;(statearr_13098_13120[1] = 4);
} else
{var statearr_13099_13121 = state_13094__$1;(statearr_13099_13121[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13095 === 3))
{var inst_13092 = (state_13094[2]);var state_13094__$1 = state_13094;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13094__$1,inst_13092);
} else
{if((state_val_13095 === 4))
{var inst_13066 = (state_13094[7]);var state_13094__$1 = state_13094;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13094__$1,7,inst_13066);
} else
{if((state_val_13095 === 5))
{var inst_13088 = cljs.core.async.close_BANG_.call(null,out);var state_13094__$1 = state_13094;var statearr_13100_13122 = state_13094__$1;(statearr_13100_13122[2] = inst_13088);
(statearr_13100_13122[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13095 === 6))
{var inst_13090 = (state_13094[2]);var state_13094__$1 = state_13094;var statearr_13101_13123 = state_13094__$1;(statearr_13101_13123[2] = inst_13090);
(statearr_13101_13123[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13095 === 7))
{var inst_13073 = (state_13094[8]);var inst_13074 = (state_13094[9]);var inst_13073__$1 = (state_13094[2]);var inst_13074__$1 = cljs.core.nth.call(null,inst_13073__$1,0,null);var inst_13075 = cljs.core.nth.call(null,inst_13073__$1,1,null);var inst_13076 = (inst_13074__$1 == null);var state_13094__$1 = (function (){var statearr_13102 = state_13094;(statearr_13102[8] = inst_13073__$1);
(statearr_13102[10] = inst_13075);
(statearr_13102[9] = inst_13074__$1);
return statearr_13102;
})();if(cljs.core.truth_(inst_13076))
{var statearr_13103_13124 = state_13094__$1;(statearr_13103_13124[1] = 8);
} else
{var statearr_13104_13125 = state_13094__$1;(statearr_13104_13125[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13095 === 8))
{var inst_13073 = (state_13094[8]);var inst_13075 = (state_13094[10]);var inst_13074 = (state_13094[9]);var inst_13066 = (state_13094[7]);var inst_13078 = (function (){var c = inst_13075;var v = inst_13074;var vec__13071 = inst_13073;var cs = inst_13066;return ((function (c,v,vec__13071,cs,inst_13073,inst_13075,inst_13074,inst_13066,state_val_13095){
return (function (p1__13011_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13011_SHARP_);
});
;})(c,v,vec__13071,cs,inst_13073,inst_13075,inst_13074,inst_13066,state_val_13095))
})();var inst_13079 = cljs.core.filterv.call(null,inst_13078,inst_13066);var inst_13066__$1 = inst_13079;var state_13094__$1 = (function (){var statearr_13105 = state_13094;(statearr_13105[7] = inst_13066__$1);
return statearr_13105;
})();var statearr_13106_13126 = state_13094__$1;(statearr_13106_13126[2] = null);
(statearr_13106_13126[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13095 === 9))
{var inst_13074 = (state_13094[9]);var state_13094__$1 = state_13094;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13094__$1,11,out,inst_13074);
} else
{if((state_val_13095 === 10))
{var inst_13086 = (state_13094[2]);var state_13094__$1 = state_13094;var statearr_13108_13127 = state_13094__$1;(statearr_13108_13127[2] = inst_13086);
(statearr_13108_13127[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13095 === 11))
{var inst_13066 = (state_13094[7]);var inst_13083 = (state_13094[2]);var tmp13107 = inst_13066;var inst_13066__$1 = tmp13107;var state_13094__$1 = (function (){var statearr_13109 = state_13094;(statearr_13109[11] = inst_13083);
(statearr_13109[7] = inst_13066__$1);
return statearr_13109;
})();var statearr_13110_13128 = state_13094__$1;(statearr_13110_13128[2] = null);
(statearr_13110_13128[1] = 2);
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
});return ((function (switch__6865__auto__){
return (function() {
var state_machine__6866__auto__ = null;
var state_machine__6866__auto____0 = (function (){var statearr_13114 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13114[0] = state_machine__6866__auto__);
(statearr_13114[1] = 1);
return statearr_13114;
});
var state_machine__6866__auto____1 = (function (state_13094){while(true){
var ret_value__6867__auto__ = (function (){try{while(true){
var result__6868__auto__ = switch__6865__auto__.call(null,state_13094);if(cljs.core.keyword_identical_QMARK_.call(null,result__6868__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6868__auto__;
}
break;
}
}catch (e13115){if((e13115 instanceof Object))
{var ex__6869__auto__ = e13115;var statearr_13116_13129 = state_13094;(statearr_13116_13129[5] = ex__6869__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13094);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13115;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6867__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13130 = state_13094;
state_13094 = G__13130;
continue;
}
} else
{return ret_value__6867__auto__;
}
break;
}
});
state_machine__6866__auto__ = function(state_13094){
switch(arguments.length){
case 0:
return state_machine__6866__auto____0.call(this);
case 1:
return state_machine__6866__auto____1.call(this,state_13094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6866__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6866__auto____0;
state_machine__6866__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6866__auto____1;
return state_machine__6866__auto__;
})()
;})(switch__6865__auto__))
})();var state__6937__auto__ = (function (){var statearr_13117 = f__6936__auto__.call(null);(statearr_13117[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6935__auto___13118);
return statearr_13117;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6937__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6935__auto___13223 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6936__auto__ = (function (){var switch__6865__auto__ = (function (state_13200){var state_val_13201 = (state_13200[1]);if((state_val_13201 === 1))
{var inst_13177 = 0;var state_13200__$1 = (function (){var statearr_13202 = state_13200;(statearr_13202[7] = inst_13177);
return statearr_13202;
})();var statearr_13203_13224 = state_13200__$1;(statearr_13203_13224[2] = null);
(statearr_13203_13224[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13201 === 2))
{var inst_13177 = (state_13200[7]);var inst_13179 = (inst_13177 < n);var state_13200__$1 = state_13200;if(cljs.core.truth_(inst_13179))
{var statearr_13204_13225 = state_13200__$1;(statearr_13204_13225[1] = 4);
} else
{var statearr_13205_13226 = state_13200__$1;(statearr_13205_13226[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13201 === 3))
{var inst_13197 = (state_13200[2]);var inst_13198 = cljs.core.async.close_BANG_.call(null,out);var state_13200__$1 = (function (){var statearr_13206 = state_13200;(statearr_13206[8] = inst_13197);
return statearr_13206;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13200__$1,inst_13198);
} else
{if((state_val_13201 === 4))
{var state_13200__$1 = state_13200;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13200__$1,7,ch);
} else
{if((state_val_13201 === 5))
{var state_13200__$1 = state_13200;var statearr_13207_13227 = state_13200__$1;(statearr_13207_13227[2] = null);
(statearr_13207_13227[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13201 === 6))
{var inst_13195 = (state_13200[2]);var state_13200__$1 = state_13200;var statearr_13208_13228 = state_13200__$1;(statearr_13208_13228[2] = inst_13195);
(statearr_13208_13228[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13201 === 7))
{var inst_13182 = (state_13200[9]);var inst_13182__$1 = (state_13200[2]);var inst_13183 = (inst_13182__$1 == null);var inst_13184 = cljs.core.not.call(null,inst_13183);var state_13200__$1 = (function (){var statearr_13209 = state_13200;(statearr_13209[9] = inst_13182__$1);
return statearr_13209;
})();if(inst_13184)
{var statearr_13210_13229 = state_13200__$1;(statearr_13210_13229[1] = 8);
} else
{var statearr_13211_13230 = state_13200__$1;(statearr_13211_13230[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13201 === 8))
{var inst_13182 = (state_13200[9]);var state_13200__$1 = state_13200;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13200__$1,11,out,inst_13182);
} else
{if((state_val_13201 === 9))
{var state_13200__$1 = state_13200;var statearr_13212_13231 = state_13200__$1;(statearr_13212_13231[2] = null);
(statearr_13212_13231[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13201 === 10))
{var inst_13192 = (state_13200[2]);var state_13200__$1 = state_13200;var statearr_13213_13232 = state_13200__$1;(statearr_13213_13232[2] = inst_13192);
(statearr_13213_13232[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13201 === 11))
{var inst_13177 = (state_13200[7]);var inst_13187 = (state_13200[2]);var inst_13188 = (inst_13177 + 1);var inst_13177__$1 = inst_13188;var state_13200__$1 = (function (){var statearr_13214 = state_13200;(statearr_13214[7] = inst_13177__$1);
(statearr_13214[10] = inst_13187);
return statearr_13214;
})();var statearr_13215_13233 = state_13200__$1;(statearr_13215_13233[2] = null);
(statearr_13215_13233[1] = 2);
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
});return ((function (switch__6865__auto__){
return (function() {
var state_machine__6866__auto__ = null;
var state_machine__6866__auto____0 = (function (){var statearr_13219 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13219[0] = state_machine__6866__auto__);
(statearr_13219[1] = 1);
return statearr_13219;
});
var state_machine__6866__auto____1 = (function (state_13200){while(true){
var ret_value__6867__auto__ = (function (){try{while(true){
var result__6868__auto__ = switch__6865__auto__.call(null,state_13200);if(cljs.core.keyword_identical_QMARK_.call(null,result__6868__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6868__auto__;
}
break;
}
}catch (e13220){if((e13220 instanceof Object))
{var ex__6869__auto__ = e13220;var statearr_13221_13234 = state_13200;(statearr_13221_13234[5] = ex__6869__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13200);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13220;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6867__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13235 = state_13200;
state_13200 = G__13235;
continue;
}
} else
{return ret_value__6867__auto__;
}
break;
}
});
state_machine__6866__auto__ = function(state_13200){
switch(arguments.length){
case 0:
return state_machine__6866__auto____0.call(this);
case 1:
return state_machine__6866__auto____1.call(this,state_13200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6866__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6866__auto____0;
state_machine__6866__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6866__auto____1;
return state_machine__6866__auto__;
})()
;})(switch__6865__auto__))
})();var state__6937__auto__ = (function (){var statearr_13222 = f__6936__auto__.call(null);(statearr_13222[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6935__auto___13223);
return statearr_13222;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6937__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6935__auto___13332 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6936__auto__ = (function (){var switch__6865__auto__ = (function (state_13307){var state_val_13308 = (state_13307[1]);if((state_val_13308 === 1))
{var inst_13284 = null;var state_13307__$1 = (function (){var statearr_13309 = state_13307;(statearr_13309[7] = inst_13284);
return statearr_13309;
})();var statearr_13310_13333 = state_13307__$1;(statearr_13310_13333[2] = null);
(statearr_13310_13333[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13308 === 2))
{var state_13307__$1 = state_13307;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13307__$1,4,ch);
} else
{if((state_val_13308 === 3))
{var inst_13304 = (state_13307[2]);var inst_13305 = cljs.core.async.close_BANG_.call(null,out);var state_13307__$1 = (function (){var statearr_13311 = state_13307;(statearr_13311[8] = inst_13304);
return statearr_13311;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13307__$1,inst_13305);
} else
{if((state_val_13308 === 4))
{var inst_13287 = (state_13307[9]);var inst_13287__$1 = (state_13307[2]);var inst_13288 = (inst_13287__$1 == null);var inst_13289 = cljs.core.not.call(null,inst_13288);var state_13307__$1 = (function (){var statearr_13312 = state_13307;(statearr_13312[9] = inst_13287__$1);
return statearr_13312;
})();if(inst_13289)
{var statearr_13313_13334 = state_13307__$1;(statearr_13313_13334[1] = 5);
} else
{var statearr_13314_13335 = state_13307__$1;(statearr_13314_13335[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13308 === 5))
{var inst_13287 = (state_13307[9]);var inst_13284 = (state_13307[7]);var inst_13291 = cljs.core._EQ_.call(null,inst_13287,inst_13284);var state_13307__$1 = state_13307;if(inst_13291)
{var statearr_13315_13336 = state_13307__$1;(statearr_13315_13336[1] = 8);
} else
{var statearr_13316_13337 = state_13307__$1;(statearr_13316_13337[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13308 === 6))
{var state_13307__$1 = state_13307;var statearr_13318_13338 = state_13307__$1;(statearr_13318_13338[2] = null);
(statearr_13318_13338[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13308 === 7))
{var inst_13302 = (state_13307[2]);var state_13307__$1 = state_13307;var statearr_13319_13339 = state_13307__$1;(statearr_13319_13339[2] = inst_13302);
(statearr_13319_13339[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13308 === 8))
{var inst_13284 = (state_13307[7]);var tmp13317 = inst_13284;var inst_13284__$1 = tmp13317;var state_13307__$1 = (function (){var statearr_13320 = state_13307;(statearr_13320[7] = inst_13284__$1);
return statearr_13320;
})();var statearr_13321_13340 = state_13307__$1;(statearr_13321_13340[2] = null);
(statearr_13321_13340[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13308 === 9))
{var inst_13287 = (state_13307[9]);var state_13307__$1 = state_13307;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13307__$1,11,out,inst_13287);
} else
{if((state_val_13308 === 10))
{var inst_13299 = (state_13307[2]);var state_13307__$1 = state_13307;var statearr_13322_13341 = state_13307__$1;(statearr_13322_13341[2] = inst_13299);
(statearr_13322_13341[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13308 === 11))
{var inst_13287 = (state_13307[9]);var inst_13296 = (state_13307[2]);var inst_13284 = inst_13287;var state_13307__$1 = (function (){var statearr_13323 = state_13307;(statearr_13323[7] = inst_13284);
(statearr_13323[10] = inst_13296);
return statearr_13323;
})();var statearr_13324_13342 = state_13307__$1;(statearr_13324_13342[2] = null);
(statearr_13324_13342[1] = 2);
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
});return ((function (switch__6865__auto__){
return (function() {
var state_machine__6866__auto__ = null;
var state_machine__6866__auto____0 = (function (){var statearr_13328 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13328[0] = state_machine__6866__auto__);
(statearr_13328[1] = 1);
return statearr_13328;
});
var state_machine__6866__auto____1 = (function (state_13307){while(true){
var ret_value__6867__auto__ = (function (){try{while(true){
var result__6868__auto__ = switch__6865__auto__.call(null,state_13307);if(cljs.core.keyword_identical_QMARK_.call(null,result__6868__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6868__auto__;
}
break;
}
}catch (e13329){if((e13329 instanceof Object))
{var ex__6869__auto__ = e13329;var statearr_13330_13343 = state_13307;(statearr_13330_13343[5] = ex__6869__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13307);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13329;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6867__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13344 = state_13307;
state_13307 = G__13344;
continue;
}
} else
{return ret_value__6867__auto__;
}
break;
}
});
state_machine__6866__auto__ = function(state_13307){
switch(arguments.length){
case 0:
return state_machine__6866__auto____0.call(this);
case 1:
return state_machine__6866__auto____1.call(this,state_13307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6866__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6866__auto____0;
state_machine__6866__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6866__auto____1;
return state_machine__6866__auto__;
})()
;})(switch__6865__auto__))
})();var state__6937__auto__ = (function (){var statearr_13331 = f__6936__auto__.call(null);(statearr_13331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6935__auto___13332);
return statearr_13331;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6937__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6935__auto___13479 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6936__auto__ = (function (){var switch__6865__auto__ = (function (state_13449){var state_val_13450 = (state_13449[1]);if((state_val_13450 === 1))
{var inst_13412 = (new Array(n));var inst_13413 = inst_13412;var inst_13414 = 0;var state_13449__$1 = (function (){var statearr_13451 = state_13449;(statearr_13451[7] = inst_13414);
(statearr_13451[8] = inst_13413);
return statearr_13451;
})();var statearr_13452_13480 = state_13449__$1;(statearr_13452_13480[2] = null);
(statearr_13452_13480[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13450 === 2))
{var state_13449__$1 = state_13449;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13449__$1,4,ch);
} else
{if((state_val_13450 === 3))
{var inst_13447 = (state_13449[2]);var state_13449__$1 = state_13449;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13449__$1,inst_13447);
} else
{if((state_val_13450 === 4))
{var inst_13417 = (state_13449[9]);var inst_13417__$1 = (state_13449[2]);var inst_13418 = (inst_13417__$1 == null);var inst_13419 = cljs.core.not.call(null,inst_13418);var state_13449__$1 = (function (){var statearr_13453 = state_13449;(statearr_13453[9] = inst_13417__$1);
return statearr_13453;
})();if(inst_13419)
{var statearr_13454_13481 = state_13449__$1;(statearr_13454_13481[1] = 5);
} else
{var statearr_13455_13482 = state_13449__$1;(statearr_13455_13482[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13450 === 5))
{var inst_13414 = (state_13449[7]);var inst_13422 = (state_13449[10]);var inst_13417 = (state_13449[9]);var inst_13413 = (state_13449[8]);var inst_13421 = (inst_13413[inst_13414] = inst_13417);var inst_13422__$1 = (inst_13414 + 1);var inst_13423 = (inst_13422__$1 < n);var state_13449__$1 = (function (){var statearr_13456 = state_13449;(statearr_13456[10] = inst_13422__$1);
(statearr_13456[11] = inst_13421);
return statearr_13456;
})();if(cljs.core.truth_(inst_13423))
{var statearr_13457_13483 = state_13449__$1;(statearr_13457_13483[1] = 8);
} else
{var statearr_13458_13484 = state_13449__$1;(statearr_13458_13484[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13450 === 6))
{var inst_13414 = (state_13449[7]);var inst_13435 = (inst_13414 > 0);var state_13449__$1 = state_13449;if(cljs.core.truth_(inst_13435))
{var statearr_13460_13485 = state_13449__$1;(statearr_13460_13485[1] = 12);
} else
{var statearr_13461_13486 = state_13449__$1;(statearr_13461_13486[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13450 === 7))
{var inst_13445 = (state_13449[2]);var state_13449__$1 = state_13449;var statearr_13462_13487 = state_13449__$1;(statearr_13462_13487[2] = inst_13445);
(statearr_13462_13487[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13450 === 8))
{var inst_13422 = (state_13449[10]);var inst_13413 = (state_13449[8]);var tmp13459 = inst_13413;var inst_13413__$1 = tmp13459;var inst_13414 = inst_13422;var state_13449__$1 = (function (){var statearr_13463 = state_13449;(statearr_13463[7] = inst_13414);
(statearr_13463[8] = inst_13413__$1);
return statearr_13463;
})();var statearr_13464_13488 = state_13449__$1;(statearr_13464_13488[2] = null);
(statearr_13464_13488[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13450 === 9))
{var inst_13413 = (state_13449[8]);var inst_13427 = cljs.core.vec.call(null,inst_13413);var state_13449__$1 = state_13449;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13449__$1,11,out,inst_13427);
} else
{if((state_val_13450 === 10))
{var inst_13433 = (state_13449[2]);var state_13449__$1 = state_13449;var statearr_13465_13489 = state_13449__$1;(statearr_13465_13489[2] = inst_13433);
(statearr_13465_13489[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13450 === 11))
{var inst_13429 = (state_13449[2]);var inst_13430 = (new Array(n));var inst_13413 = inst_13430;var inst_13414 = 0;var state_13449__$1 = (function (){var statearr_13466 = state_13449;(statearr_13466[12] = inst_13429);
(statearr_13466[7] = inst_13414);
(statearr_13466[8] = inst_13413);
return statearr_13466;
})();var statearr_13467_13490 = state_13449__$1;(statearr_13467_13490[2] = null);
(statearr_13467_13490[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13450 === 12))
{var inst_13413 = (state_13449[8]);var inst_13437 = cljs.core.vec.call(null,inst_13413);var state_13449__$1 = state_13449;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13449__$1,15,out,inst_13437);
} else
{if((state_val_13450 === 13))
{var state_13449__$1 = state_13449;var statearr_13468_13491 = state_13449__$1;(statearr_13468_13491[2] = null);
(statearr_13468_13491[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13450 === 14))
{var inst_13442 = (state_13449[2]);var inst_13443 = cljs.core.async.close_BANG_.call(null,out);var state_13449__$1 = (function (){var statearr_13469 = state_13449;(statearr_13469[13] = inst_13442);
return statearr_13469;
})();var statearr_13470_13492 = state_13449__$1;(statearr_13470_13492[2] = inst_13443);
(statearr_13470_13492[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13450 === 15))
{var inst_13439 = (state_13449[2]);var state_13449__$1 = state_13449;var statearr_13471_13493 = state_13449__$1;(statearr_13471_13493[2] = inst_13439);
(statearr_13471_13493[1] = 14);
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
});return ((function (switch__6865__auto__){
return (function() {
var state_machine__6866__auto__ = null;
var state_machine__6866__auto____0 = (function (){var statearr_13475 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13475[0] = state_machine__6866__auto__);
(statearr_13475[1] = 1);
return statearr_13475;
});
var state_machine__6866__auto____1 = (function (state_13449){while(true){
var ret_value__6867__auto__ = (function (){try{while(true){
var result__6868__auto__ = switch__6865__auto__.call(null,state_13449);if(cljs.core.keyword_identical_QMARK_.call(null,result__6868__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6868__auto__;
}
break;
}
}catch (e13476){if((e13476 instanceof Object))
{var ex__6869__auto__ = e13476;var statearr_13477_13494 = state_13449;(statearr_13477_13494[5] = ex__6869__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13449);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13476;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6867__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13495 = state_13449;
state_13449 = G__13495;
continue;
}
} else
{return ret_value__6867__auto__;
}
break;
}
});
state_machine__6866__auto__ = function(state_13449){
switch(arguments.length){
case 0:
return state_machine__6866__auto____0.call(this);
case 1:
return state_machine__6866__auto____1.call(this,state_13449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6866__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6866__auto____0;
state_machine__6866__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6866__auto____1;
return state_machine__6866__auto__;
})()
;})(switch__6865__auto__))
})();var state__6937__auto__ = (function (){var statearr_13478 = f__6936__auto__.call(null);(statearr_13478[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6935__auto___13479);
return statearr_13478;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6937__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6935__auto___13638 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6936__auto__ = (function (){var switch__6865__auto__ = (function (state_13608){var state_val_13609 = (state_13608[1]);if((state_val_13609 === 1))
{var inst_13567 = [];var inst_13568 = inst_13567;var inst_13569 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_13608__$1 = (function (){var statearr_13610 = state_13608;(statearr_13610[7] = inst_13568);
(statearr_13610[8] = inst_13569);
return statearr_13610;
})();var statearr_13611_13639 = state_13608__$1;(statearr_13611_13639[2] = null);
(statearr_13611_13639[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13609 === 2))
{var state_13608__$1 = state_13608;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13608__$1,4,ch);
} else
{if((state_val_13609 === 3))
{var inst_13606 = (state_13608[2]);var state_13608__$1 = state_13608;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13608__$1,inst_13606);
} else
{if((state_val_13609 === 4))
{var inst_13572 = (state_13608[9]);var inst_13572__$1 = (state_13608[2]);var inst_13573 = (inst_13572__$1 == null);var inst_13574 = cljs.core.not.call(null,inst_13573);var state_13608__$1 = (function (){var statearr_13612 = state_13608;(statearr_13612[9] = inst_13572__$1);
return statearr_13612;
})();if(inst_13574)
{var statearr_13613_13640 = state_13608__$1;(statearr_13613_13640[1] = 5);
} else
{var statearr_13614_13641 = state_13608__$1;(statearr_13614_13641[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13609 === 5))
{var inst_13572 = (state_13608[9]);var inst_13569 = (state_13608[8]);var inst_13576 = (state_13608[10]);var inst_13576__$1 = f.call(null,inst_13572);var inst_13577 = cljs.core._EQ_.call(null,inst_13576__$1,inst_13569);var inst_13578 = cljs.core.keyword_identical_QMARK_.call(null,inst_13569,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_13579 = (inst_13577) || (inst_13578);var state_13608__$1 = (function (){var statearr_13615 = state_13608;(statearr_13615[10] = inst_13576__$1);
return statearr_13615;
})();if(cljs.core.truth_(inst_13579))
{var statearr_13616_13642 = state_13608__$1;(statearr_13616_13642[1] = 8);
} else
{var statearr_13617_13643 = state_13608__$1;(statearr_13617_13643[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13609 === 6))
{var inst_13568 = (state_13608[7]);var inst_13593 = inst_13568.length;var inst_13594 = (inst_13593 > 0);var state_13608__$1 = state_13608;if(cljs.core.truth_(inst_13594))
{var statearr_13619_13644 = state_13608__$1;(statearr_13619_13644[1] = 12);
} else
{var statearr_13620_13645 = state_13608__$1;(statearr_13620_13645[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13609 === 7))
{var inst_13604 = (state_13608[2]);var state_13608__$1 = state_13608;var statearr_13621_13646 = state_13608__$1;(statearr_13621_13646[2] = inst_13604);
(statearr_13621_13646[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13609 === 8))
{var inst_13572 = (state_13608[9]);var inst_13568 = (state_13608[7]);var inst_13576 = (state_13608[10]);var inst_13581 = inst_13568.push(inst_13572);var tmp13618 = inst_13568;var inst_13568__$1 = tmp13618;var inst_13569 = inst_13576;var state_13608__$1 = (function (){var statearr_13622 = state_13608;(statearr_13622[7] = inst_13568__$1);
(statearr_13622[8] = inst_13569);
(statearr_13622[11] = inst_13581);
return statearr_13622;
})();var statearr_13623_13647 = state_13608__$1;(statearr_13623_13647[2] = null);
(statearr_13623_13647[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13609 === 9))
{var inst_13568 = (state_13608[7]);var inst_13584 = cljs.core.vec.call(null,inst_13568);var state_13608__$1 = state_13608;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13608__$1,11,out,inst_13584);
} else
{if((state_val_13609 === 10))
{var inst_13591 = (state_13608[2]);var state_13608__$1 = state_13608;var statearr_13624_13648 = state_13608__$1;(statearr_13624_13648[2] = inst_13591);
(statearr_13624_13648[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13609 === 11))
{var inst_13572 = (state_13608[9]);var inst_13576 = (state_13608[10]);var inst_13586 = (state_13608[2]);var inst_13587 = [];var inst_13588 = inst_13587.push(inst_13572);var inst_13568 = inst_13587;var inst_13569 = inst_13576;var state_13608__$1 = (function (){var statearr_13625 = state_13608;(statearr_13625[12] = inst_13588);
(statearr_13625[13] = inst_13586);
(statearr_13625[7] = inst_13568);
(statearr_13625[8] = inst_13569);
return statearr_13625;
})();var statearr_13626_13649 = state_13608__$1;(statearr_13626_13649[2] = null);
(statearr_13626_13649[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13609 === 12))
{var inst_13568 = (state_13608[7]);var inst_13596 = cljs.core.vec.call(null,inst_13568);var state_13608__$1 = state_13608;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13608__$1,15,out,inst_13596);
} else
{if((state_val_13609 === 13))
{var state_13608__$1 = state_13608;var statearr_13627_13650 = state_13608__$1;(statearr_13627_13650[2] = null);
(statearr_13627_13650[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13609 === 14))
{var inst_13601 = (state_13608[2]);var inst_13602 = cljs.core.async.close_BANG_.call(null,out);var state_13608__$1 = (function (){var statearr_13628 = state_13608;(statearr_13628[14] = inst_13601);
return statearr_13628;
})();var statearr_13629_13651 = state_13608__$1;(statearr_13629_13651[2] = inst_13602);
(statearr_13629_13651[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13609 === 15))
{var inst_13598 = (state_13608[2]);var state_13608__$1 = state_13608;var statearr_13630_13652 = state_13608__$1;(statearr_13630_13652[2] = inst_13598);
(statearr_13630_13652[1] = 14);
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
});return ((function (switch__6865__auto__){
return (function() {
var state_machine__6866__auto__ = null;
var state_machine__6866__auto____0 = (function (){var statearr_13634 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13634[0] = state_machine__6866__auto__);
(statearr_13634[1] = 1);
return statearr_13634;
});
var state_machine__6866__auto____1 = (function (state_13608){while(true){
var ret_value__6867__auto__ = (function (){try{while(true){
var result__6868__auto__ = switch__6865__auto__.call(null,state_13608);if(cljs.core.keyword_identical_QMARK_.call(null,result__6868__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6868__auto__;
}
break;
}
}catch (e13635){if((e13635 instanceof Object))
{var ex__6869__auto__ = e13635;var statearr_13636_13653 = state_13608;(statearr_13636_13653[5] = ex__6869__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13608);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13635;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6867__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13654 = state_13608;
state_13608 = G__13654;
continue;
}
} else
{return ret_value__6867__auto__;
}
break;
}
});
state_machine__6866__auto__ = function(state_13608){
switch(arguments.length){
case 0:
return state_machine__6866__auto____0.call(this);
case 1:
return state_machine__6866__auto____1.call(this,state_13608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6866__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6866__auto____0;
state_machine__6866__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6866__auto____1;
return state_machine__6866__auto__;
})()
;})(switch__6865__auto__))
})();var state__6937__auto__ = (function (){var statearr_13637 = f__6936__auto__.call(null);(statearr_13637[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6935__auto___13638);
return statearr_13637;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6937__auto__);
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