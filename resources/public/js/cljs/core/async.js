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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t18232 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18232 = (function (f,fn_handler,meta18233){
this.f = f;
this.fn_handler = fn_handler;
this.meta18233 = meta18233;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18232.cljs$lang$type = true;
cljs.core.async.t18232.cljs$lang$ctorStr = "cljs.core.async/t18232";
cljs.core.async.t18232.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t18232");
});
cljs.core.async.t18232.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t18232.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t18232.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t18232.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18234){var self__ = this;
var _18234__$1 = this;return self__.meta18233;
});
cljs.core.async.t18232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18234,meta18233__$1){var self__ = this;
var _18234__$1 = this;return (new cljs.core.async.t18232(self__.f,self__.fn_handler,meta18233__$1));
});
cljs.core.async.__GT_t18232 = (function __GT_t18232(f__$1,fn_handler__$1,meta18233){return (new cljs.core.async.t18232(f__$1,fn_handler__$1,meta18233));
});
}
return (new cljs.core.async.t18232(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__18236 = buff;if(G__18236)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__18236.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__18236.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__18236);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__18236);
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
{var val_18237 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_18237);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_18237);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4291__auto___18238 = n;var x_18239 = 0;while(true){
if((x_18239 < n__4291__auto___18238))
{(a[x_18239] = 0);
{
var G__18240 = (x_18239 + 1);
x_18239 = G__18240;
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
var G__18241 = (i + 1);
i = G__18241;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t18245 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18245 = (function (flag,alt_flag,meta18246){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta18246 = meta18246;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18245.cljs$lang$type = true;
cljs.core.async.t18245.cljs$lang$ctorStr = "cljs.core.async/t18245";
cljs.core.async.t18245.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t18245");
});
cljs.core.async.t18245.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t18245.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t18245.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t18245.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18247){var self__ = this;
var _18247__$1 = this;return self__.meta18246;
});
cljs.core.async.t18245.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18247,meta18246__$1){var self__ = this;
var _18247__$1 = this;return (new cljs.core.async.t18245(self__.flag,self__.alt_flag,meta18246__$1));
});
cljs.core.async.__GT_t18245 = (function __GT_t18245(flag__$1,alt_flag__$1,meta18246){return (new cljs.core.async.t18245(flag__$1,alt_flag__$1,meta18246));
});
}
return (new cljs.core.async.t18245(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t18251 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18251 = (function (cb,flag,alt_handler,meta18252){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta18252 = meta18252;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18251.cljs$lang$type = true;
cljs.core.async.t18251.cljs$lang$ctorStr = "cljs.core.async/t18251";
cljs.core.async.t18251.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t18251");
});
cljs.core.async.t18251.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t18251.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t18251.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t18251.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18253){var self__ = this;
var _18253__$1 = this;return self__.meta18252;
});
cljs.core.async.t18251.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18253,meta18252__$1){var self__ = this;
var _18253__$1 = this;return (new cljs.core.async.t18251(self__.cb,self__.flag,self__.alt_handler,meta18252__$1));
});
cljs.core.async.__GT_t18251 = (function __GT_t18251(cb__$1,flag__$1,alt_handler__$1,meta18252){return (new cljs.core.async.t18251(cb__$1,flag__$1,alt_handler__$1,meta18252));
});
}
return (new cljs.core.async.t18251(cb,flag,alt_handler,null));
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
return (function (p1__18254_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18254_SHARP_,port], null));
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
var G__18255 = (i + 1);
i = G__18255;
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
var alts_BANG___delegate = function (ports,p__18256){var map__18258 = p__18256;var map__18258__$1 = ((cljs.core.seq_QMARK_.call(null,map__18258))?cljs.core.apply.call(null,cljs.core.hash_map,map__18258):map__18258);var opts = map__18258__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__18256 = null;if (arguments.length > 1) {
  p__18256 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__18256);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__18259){
var ports = cljs.core.first(arglist__18259);
var p__18256 = cljs.core.rest(arglist__18259);
return alts_BANG___delegate(ports,p__18256);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t18267 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18267 = (function (ch,f,map_LT_,meta18268){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta18268 = meta18268;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18267.cljs$lang$type = true;
cljs.core.async.t18267.cljs$lang$ctorStr = "cljs.core.async/t18267";
cljs.core.async.t18267.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t18267");
});
cljs.core.async.t18267.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t18267.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t18267.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t18267.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t18270 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18270 = (function (fn1,_,meta18268,ch,f,map_LT_,meta18271){
this.fn1 = fn1;
this._ = _;
this.meta18268 = meta18268;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta18271 = meta18271;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18270.cljs$lang$type = true;
cljs.core.async.t18270.cljs$lang$ctorStr = "cljs.core.async/t18270";
cljs.core.async.t18270.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t18270");
});
cljs.core.async.t18270.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t18270.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t18270.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t18270.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__18260_SHARP_){return f1.call(null,(((p1__18260_SHARP_ == null))?null:self__.f.call(null,p1__18260_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t18270.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18272){var self__ = this;
var _18272__$1 = this;return self__.meta18271;
});
cljs.core.async.t18270.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18272,meta18271__$1){var self__ = this;
var _18272__$1 = this;return (new cljs.core.async.t18270(self__.fn1,self__._,self__.meta18268,self__.ch,self__.f,self__.map_LT_,meta18271__$1));
});
cljs.core.async.__GT_t18270 = (function __GT_t18270(fn1__$1,___$2,meta18268__$1,ch__$2,f__$2,map_LT___$2,meta18271){return (new cljs.core.async.t18270(fn1__$1,___$2,meta18268__$1,ch__$2,f__$2,map_LT___$2,meta18271));
});
}
return (new cljs.core.async.t18270(fn1,___$1,self__.meta18268,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t18267.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t18267.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t18267.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18269){var self__ = this;
var _18269__$1 = this;return self__.meta18268;
});
cljs.core.async.t18267.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18269,meta18268__$1){var self__ = this;
var _18269__$1 = this;return (new cljs.core.async.t18267(self__.ch,self__.f,self__.map_LT_,meta18268__$1));
});
cljs.core.async.__GT_t18267 = (function __GT_t18267(ch__$1,f__$1,map_LT___$1,meta18268){return (new cljs.core.async.t18267(ch__$1,f__$1,map_LT___$1,meta18268));
});
}
return (new cljs.core.async.t18267(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t18276 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18276 = (function (ch,f,map_GT_,meta18277){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta18277 = meta18277;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18276.cljs$lang$type = true;
cljs.core.async.t18276.cljs$lang$ctorStr = "cljs.core.async/t18276";
cljs.core.async.t18276.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t18276");
});
cljs.core.async.t18276.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t18276.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t18276.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t18276.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t18276.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t18276.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t18276.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18278){var self__ = this;
var _18278__$1 = this;return self__.meta18277;
});
cljs.core.async.t18276.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18278,meta18277__$1){var self__ = this;
var _18278__$1 = this;return (new cljs.core.async.t18276(self__.ch,self__.f,self__.map_GT_,meta18277__$1));
});
cljs.core.async.__GT_t18276 = (function __GT_t18276(ch__$1,f__$1,map_GT___$1,meta18277){return (new cljs.core.async.t18276(ch__$1,f__$1,map_GT___$1,meta18277));
});
}
return (new cljs.core.async.t18276(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t18282 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18282 = (function (ch,p,filter_GT_,meta18283){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta18283 = meta18283;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18282.cljs$lang$type = true;
cljs.core.async.t18282.cljs$lang$ctorStr = "cljs.core.async/t18282";
cljs.core.async.t18282.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t18282");
});
cljs.core.async.t18282.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t18282.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t18282.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t18282.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t18282.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t18282.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t18282.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18284){var self__ = this;
var _18284__$1 = this;return self__.meta18283;
});
cljs.core.async.t18282.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18284,meta18283__$1){var self__ = this;
var _18284__$1 = this;return (new cljs.core.async.t18282(self__.ch,self__.p,self__.filter_GT_,meta18283__$1));
});
cljs.core.async.__GT_t18282 = (function __GT_t18282(ch__$1,p__$1,filter_GT___$1,meta18283){return (new cljs.core.async.t18282(ch__$1,p__$1,filter_GT___$1,meta18283));
});
}
return (new cljs.core.async.t18282(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7523__auto___18367 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7524__auto__ = (function (){var switch__7508__auto__ = (function (state_18346){var state_val_18347 = (state_18346[1]);if((state_val_18347 === 1))
{var state_18346__$1 = state_18346;var statearr_18348_18368 = state_18346__$1;(statearr_18348_18368[2] = null);
(statearr_18348_18368[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18347 === 2))
{var state_18346__$1 = state_18346;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18346__$1,4,ch);
} else
{if((state_val_18347 === 3))
{var inst_18344 = (state_18346[2]);var state_18346__$1 = state_18346;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18346__$1,inst_18344);
} else
{if((state_val_18347 === 4))
{var inst_18328 = (state_18346[7]);var inst_18328__$1 = (state_18346[2]);var inst_18329 = (inst_18328__$1 == null);var state_18346__$1 = (function (){var statearr_18349 = state_18346;(statearr_18349[7] = inst_18328__$1);
return statearr_18349;
})();if(cljs.core.truth_(inst_18329))
{var statearr_18350_18369 = state_18346__$1;(statearr_18350_18369[1] = 5);
} else
{var statearr_18351_18370 = state_18346__$1;(statearr_18351_18370[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18347 === 5))
{var inst_18331 = cljs.core.async.close_BANG_.call(null,out);var state_18346__$1 = state_18346;var statearr_18352_18371 = state_18346__$1;(statearr_18352_18371[2] = inst_18331);
(statearr_18352_18371[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18347 === 6))
{var inst_18328 = (state_18346[7]);var inst_18333 = p.call(null,inst_18328);var state_18346__$1 = state_18346;if(cljs.core.truth_(inst_18333))
{var statearr_18353_18372 = state_18346__$1;(statearr_18353_18372[1] = 8);
} else
{var statearr_18354_18373 = state_18346__$1;(statearr_18354_18373[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18347 === 7))
{var inst_18342 = (state_18346[2]);var state_18346__$1 = state_18346;var statearr_18355_18374 = state_18346__$1;(statearr_18355_18374[2] = inst_18342);
(statearr_18355_18374[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18347 === 8))
{var inst_18328 = (state_18346[7]);var state_18346__$1 = state_18346;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18346__$1,11,out,inst_18328);
} else
{if((state_val_18347 === 9))
{var state_18346__$1 = state_18346;var statearr_18356_18375 = state_18346__$1;(statearr_18356_18375[2] = null);
(statearr_18356_18375[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18347 === 10))
{var inst_18339 = (state_18346[2]);var state_18346__$1 = (function (){var statearr_18357 = state_18346;(statearr_18357[8] = inst_18339);
return statearr_18357;
})();var statearr_18358_18376 = state_18346__$1;(statearr_18358_18376[2] = null);
(statearr_18358_18376[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18347 === 11))
{var inst_18336 = (state_18346[2]);var state_18346__$1 = state_18346;var statearr_18359_18377 = state_18346__$1;(statearr_18359_18377[2] = inst_18336);
(statearr_18359_18377[1] = 10);
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
});return ((function (switch__7508__auto__){
return (function() {
var state_machine__7509__auto__ = null;
var state_machine__7509__auto____0 = (function (){var statearr_18363 = [null,null,null,null,null,null,null,null,null];(statearr_18363[0] = state_machine__7509__auto__);
(statearr_18363[1] = 1);
return statearr_18363;
});
var state_machine__7509__auto____1 = (function (state_18346){while(true){
var ret_value__7510__auto__ = (function (){try{while(true){
var result__7511__auto__ = switch__7508__auto__.call(null,state_18346);if(cljs.core.keyword_identical_QMARK_.call(null,result__7511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7511__auto__;
}
break;
}
}catch (e18364){if((e18364 instanceof Object))
{var ex__7512__auto__ = e18364;var statearr_18365_18378 = state_18346;(statearr_18365_18378[5] = ex__7512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18346);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18364;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18379 = state_18346;
state_18346 = G__18379;
continue;
}
} else
{return ret_value__7510__auto__;
}
break;
}
});
state_machine__7509__auto__ = function(state_18346){
switch(arguments.length){
case 0:
return state_machine__7509__auto____0.call(this);
case 1:
return state_machine__7509__auto____1.call(this,state_18346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7509__auto____0;
state_machine__7509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7509__auto____1;
return state_machine__7509__auto__;
})()
;})(switch__7508__auto__))
})();var state__7525__auto__ = (function (){var statearr_18366 = f__7524__auto__.call(null);(statearr_18366[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7523__auto___18367);
return statearr_18366;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7525__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__7523__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7524__auto__ = (function (){var switch__7508__auto__ = (function (state_18531){var state_val_18532 = (state_18531[1]);if((state_val_18532 === 1))
{var state_18531__$1 = state_18531;var statearr_18533_18570 = state_18531__$1;(statearr_18533_18570[2] = null);
(statearr_18533_18570[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18532 === 2))
{var state_18531__$1 = state_18531;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18531__$1,4,in$);
} else
{if((state_val_18532 === 3))
{var inst_18529 = (state_18531[2]);var state_18531__$1 = state_18531;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18531__$1,inst_18529);
} else
{if((state_val_18532 === 4))
{var inst_18477 = (state_18531[7]);var inst_18477__$1 = (state_18531[2]);var inst_18478 = (inst_18477__$1 == null);var state_18531__$1 = (function (){var statearr_18534 = state_18531;(statearr_18534[7] = inst_18477__$1);
return statearr_18534;
})();if(cljs.core.truth_(inst_18478))
{var statearr_18535_18571 = state_18531__$1;(statearr_18535_18571[1] = 5);
} else
{var statearr_18536_18572 = state_18531__$1;(statearr_18536_18572[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18532 === 5))
{var inst_18480 = cljs.core.async.close_BANG_.call(null,out);var state_18531__$1 = state_18531;var statearr_18537_18573 = state_18531__$1;(statearr_18537_18573[2] = inst_18480);
(statearr_18537_18573[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18532 === 6))
{var inst_18477 = (state_18531[7]);var inst_18482 = f.call(null,inst_18477);var inst_18487 = cljs.core.seq.call(null,inst_18482);var inst_18488 = inst_18487;var inst_18489 = null;var inst_18490 = 0;var inst_18491 = 0;var state_18531__$1 = (function (){var statearr_18538 = state_18531;(statearr_18538[8] = inst_18488);
(statearr_18538[9] = inst_18489);
(statearr_18538[10] = inst_18491);
(statearr_18538[11] = inst_18490);
return statearr_18538;
})();var statearr_18539_18574 = state_18531__$1;(statearr_18539_18574[2] = null);
(statearr_18539_18574[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18532 === 7))
{var inst_18527 = (state_18531[2]);var state_18531__$1 = state_18531;var statearr_18540_18575 = state_18531__$1;(statearr_18540_18575[2] = inst_18527);
(statearr_18540_18575[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18532 === 8))
{var inst_18491 = (state_18531[10]);var inst_18490 = (state_18531[11]);var inst_18493 = (inst_18491 < inst_18490);var inst_18494 = inst_18493;var state_18531__$1 = state_18531;if(cljs.core.truth_(inst_18494))
{var statearr_18541_18576 = state_18531__$1;(statearr_18541_18576[1] = 10);
} else
{var statearr_18542_18577 = state_18531__$1;(statearr_18542_18577[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18532 === 9))
{var inst_18524 = (state_18531[2]);var state_18531__$1 = (function (){var statearr_18543 = state_18531;(statearr_18543[12] = inst_18524);
return statearr_18543;
})();var statearr_18544_18578 = state_18531__$1;(statearr_18544_18578[2] = null);
(statearr_18544_18578[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18532 === 10))
{var inst_18489 = (state_18531[9]);var inst_18491 = (state_18531[10]);var inst_18496 = cljs.core._nth.call(null,inst_18489,inst_18491);var state_18531__$1 = state_18531;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18531__$1,13,out,inst_18496);
} else
{if((state_val_18532 === 11))
{var inst_18488 = (state_18531[8]);var inst_18502 = (state_18531[13]);var inst_18502__$1 = cljs.core.seq.call(null,inst_18488);var state_18531__$1 = (function (){var statearr_18548 = state_18531;(statearr_18548[13] = inst_18502__$1);
return statearr_18548;
})();if(inst_18502__$1)
{var statearr_18549_18579 = state_18531__$1;(statearr_18549_18579[1] = 14);
} else
{var statearr_18550_18580 = state_18531__$1;(statearr_18550_18580[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18532 === 12))
{var inst_18522 = (state_18531[2]);var state_18531__$1 = state_18531;var statearr_18551_18581 = state_18531__$1;(statearr_18551_18581[2] = inst_18522);
(statearr_18551_18581[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18532 === 13))
{var inst_18488 = (state_18531[8]);var inst_18489 = (state_18531[9]);var inst_18491 = (state_18531[10]);var inst_18490 = (state_18531[11]);var inst_18498 = (state_18531[2]);var inst_18499 = (inst_18491 + 1);var tmp18545 = inst_18488;var tmp18546 = inst_18489;var tmp18547 = inst_18490;var inst_18488__$1 = tmp18545;var inst_18489__$1 = tmp18546;var inst_18490__$1 = tmp18547;var inst_18491__$1 = inst_18499;var state_18531__$1 = (function (){var statearr_18552 = state_18531;(statearr_18552[8] = inst_18488__$1);
(statearr_18552[9] = inst_18489__$1);
(statearr_18552[14] = inst_18498);
(statearr_18552[10] = inst_18491__$1);
(statearr_18552[11] = inst_18490__$1);
return statearr_18552;
})();var statearr_18553_18582 = state_18531__$1;(statearr_18553_18582[2] = null);
(statearr_18553_18582[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18532 === 14))
{var inst_18502 = (state_18531[13]);var inst_18504 = cljs.core.chunked_seq_QMARK_.call(null,inst_18502);var state_18531__$1 = state_18531;if(inst_18504)
{var statearr_18554_18583 = state_18531__$1;(statearr_18554_18583[1] = 17);
} else
{var statearr_18555_18584 = state_18531__$1;(statearr_18555_18584[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18532 === 15))
{var state_18531__$1 = state_18531;var statearr_18556_18585 = state_18531__$1;(statearr_18556_18585[2] = null);
(statearr_18556_18585[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18532 === 16))
{var inst_18520 = (state_18531[2]);var state_18531__$1 = state_18531;var statearr_18557_18586 = state_18531__$1;(statearr_18557_18586[2] = inst_18520);
(statearr_18557_18586[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18532 === 17))
{var inst_18502 = (state_18531[13]);var inst_18506 = cljs.core.chunk_first.call(null,inst_18502);var inst_18507 = cljs.core.chunk_rest.call(null,inst_18502);var inst_18508 = cljs.core.count.call(null,inst_18506);var inst_18488 = inst_18507;var inst_18489 = inst_18506;var inst_18490 = inst_18508;var inst_18491 = 0;var state_18531__$1 = (function (){var statearr_18558 = state_18531;(statearr_18558[8] = inst_18488);
(statearr_18558[9] = inst_18489);
(statearr_18558[10] = inst_18491);
(statearr_18558[11] = inst_18490);
return statearr_18558;
})();var statearr_18559_18587 = state_18531__$1;(statearr_18559_18587[2] = null);
(statearr_18559_18587[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18532 === 18))
{var inst_18502 = (state_18531[13]);var inst_18511 = cljs.core.first.call(null,inst_18502);var state_18531__$1 = state_18531;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18531__$1,20,out,inst_18511);
} else
{if((state_val_18532 === 19))
{var inst_18517 = (state_18531[2]);var state_18531__$1 = state_18531;var statearr_18560_18588 = state_18531__$1;(statearr_18560_18588[2] = inst_18517);
(statearr_18560_18588[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18532 === 20))
{var inst_18502 = (state_18531[13]);var inst_18513 = (state_18531[2]);var inst_18514 = cljs.core.next.call(null,inst_18502);var inst_18488 = inst_18514;var inst_18489 = null;var inst_18490 = 0;var inst_18491 = 0;var state_18531__$1 = (function (){var statearr_18561 = state_18531;(statearr_18561[8] = inst_18488);
(statearr_18561[9] = inst_18489);
(statearr_18561[10] = inst_18491);
(statearr_18561[11] = inst_18490);
(statearr_18561[15] = inst_18513);
return statearr_18561;
})();var statearr_18562_18589 = state_18531__$1;(statearr_18562_18589[2] = null);
(statearr_18562_18589[1] = 8);
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
});return ((function (switch__7508__auto__){
return (function() {
var state_machine__7509__auto__ = null;
var state_machine__7509__auto____0 = (function (){var statearr_18566 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18566[0] = state_machine__7509__auto__);
(statearr_18566[1] = 1);
return statearr_18566;
});
var state_machine__7509__auto____1 = (function (state_18531){while(true){
var ret_value__7510__auto__ = (function (){try{while(true){
var result__7511__auto__ = switch__7508__auto__.call(null,state_18531);if(cljs.core.keyword_identical_QMARK_.call(null,result__7511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7511__auto__;
}
break;
}
}catch (e18567){if((e18567 instanceof Object))
{var ex__7512__auto__ = e18567;var statearr_18568_18590 = state_18531;(statearr_18568_18590[5] = ex__7512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18531);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18567;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18591 = state_18531;
state_18531 = G__18591;
continue;
}
} else
{return ret_value__7510__auto__;
}
break;
}
});
state_machine__7509__auto__ = function(state_18531){
switch(arguments.length){
case 0:
return state_machine__7509__auto____0.call(this);
case 1:
return state_machine__7509__auto____1.call(this,state_18531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7509__auto____0;
state_machine__7509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7509__auto____1;
return state_machine__7509__auto__;
})()
;})(switch__7508__auto__))
})();var state__7525__auto__ = (function (){var statearr_18569 = f__7524__auto__.call(null);(statearr_18569[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7523__auto__);
return statearr_18569;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7525__auto__);
}));
return c__7523__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__7523__auto___18672 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7524__auto__ = (function (){var switch__7508__auto__ = (function (state_18651){var state_val_18652 = (state_18651[1]);if((state_val_18652 === 1))
{var state_18651__$1 = state_18651;var statearr_18653_18673 = state_18651__$1;(statearr_18653_18673[2] = null);
(statearr_18653_18673[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18652 === 2))
{var state_18651__$1 = state_18651;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18651__$1,4,from);
} else
{if((state_val_18652 === 3))
{var inst_18649 = (state_18651[2]);var state_18651__$1 = state_18651;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18651__$1,inst_18649);
} else
{if((state_val_18652 === 4))
{var inst_18634 = (state_18651[7]);var inst_18634__$1 = (state_18651[2]);var inst_18635 = (inst_18634__$1 == null);var state_18651__$1 = (function (){var statearr_18654 = state_18651;(statearr_18654[7] = inst_18634__$1);
return statearr_18654;
})();if(cljs.core.truth_(inst_18635))
{var statearr_18655_18674 = state_18651__$1;(statearr_18655_18674[1] = 5);
} else
{var statearr_18656_18675 = state_18651__$1;(statearr_18656_18675[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18652 === 5))
{var state_18651__$1 = state_18651;if(cljs.core.truth_(close_QMARK_))
{var statearr_18657_18676 = state_18651__$1;(statearr_18657_18676[1] = 8);
} else
{var statearr_18658_18677 = state_18651__$1;(statearr_18658_18677[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18652 === 6))
{var inst_18634 = (state_18651[7]);var state_18651__$1 = state_18651;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18651__$1,11,to,inst_18634);
} else
{if((state_val_18652 === 7))
{var inst_18647 = (state_18651[2]);var state_18651__$1 = state_18651;var statearr_18659_18678 = state_18651__$1;(statearr_18659_18678[2] = inst_18647);
(statearr_18659_18678[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18652 === 8))
{var inst_18638 = cljs.core.async.close_BANG_.call(null,to);var state_18651__$1 = state_18651;var statearr_18660_18679 = state_18651__$1;(statearr_18660_18679[2] = inst_18638);
(statearr_18660_18679[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18652 === 9))
{var state_18651__$1 = state_18651;var statearr_18661_18680 = state_18651__$1;(statearr_18661_18680[2] = null);
(statearr_18661_18680[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18652 === 10))
{var inst_18641 = (state_18651[2]);var state_18651__$1 = state_18651;var statearr_18662_18681 = state_18651__$1;(statearr_18662_18681[2] = inst_18641);
(statearr_18662_18681[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18652 === 11))
{var inst_18644 = (state_18651[2]);var state_18651__$1 = (function (){var statearr_18663 = state_18651;(statearr_18663[8] = inst_18644);
return statearr_18663;
})();var statearr_18664_18682 = state_18651__$1;(statearr_18664_18682[2] = null);
(statearr_18664_18682[1] = 2);
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
});return ((function (switch__7508__auto__){
return (function() {
var state_machine__7509__auto__ = null;
var state_machine__7509__auto____0 = (function (){var statearr_18668 = [null,null,null,null,null,null,null,null,null];(statearr_18668[0] = state_machine__7509__auto__);
(statearr_18668[1] = 1);
return statearr_18668;
});
var state_machine__7509__auto____1 = (function (state_18651){while(true){
var ret_value__7510__auto__ = (function (){try{while(true){
var result__7511__auto__ = switch__7508__auto__.call(null,state_18651);if(cljs.core.keyword_identical_QMARK_.call(null,result__7511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7511__auto__;
}
break;
}
}catch (e18669){if((e18669 instanceof Object))
{var ex__7512__auto__ = e18669;var statearr_18670_18683 = state_18651;(statearr_18670_18683[5] = ex__7512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18651);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18669;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18684 = state_18651;
state_18651 = G__18684;
continue;
}
} else
{return ret_value__7510__auto__;
}
break;
}
});
state_machine__7509__auto__ = function(state_18651){
switch(arguments.length){
case 0:
return state_machine__7509__auto____0.call(this);
case 1:
return state_machine__7509__auto____1.call(this,state_18651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7509__auto____0;
state_machine__7509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7509__auto____1;
return state_machine__7509__auto__;
})()
;})(switch__7508__auto__))
})();var state__7525__auto__ = (function (){var statearr_18671 = f__7524__auto__.call(null);(statearr_18671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7523__auto___18672);
return statearr_18671;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7525__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__7523__auto___18771 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7524__auto__ = (function (){var switch__7508__auto__ = (function (state_18749){var state_val_18750 = (state_18749[1]);if((state_val_18750 === 1))
{var state_18749__$1 = state_18749;var statearr_18751_18772 = state_18749__$1;(statearr_18751_18772[2] = null);
(statearr_18751_18772[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18750 === 2))
{var state_18749__$1 = state_18749;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18749__$1,4,ch);
} else
{if((state_val_18750 === 3))
{var inst_18747 = (state_18749[2]);var state_18749__$1 = state_18749;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18749__$1,inst_18747);
} else
{if((state_val_18750 === 4))
{var inst_18730 = (state_18749[7]);var inst_18730__$1 = (state_18749[2]);var inst_18731 = (inst_18730__$1 == null);var state_18749__$1 = (function (){var statearr_18752 = state_18749;(statearr_18752[7] = inst_18730__$1);
return statearr_18752;
})();if(cljs.core.truth_(inst_18731))
{var statearr_18753_18773 = state_18749__$1;(statearr_18753_18773[1] = 5);
} else
{var statearr_18754_18774 = state_18749__$1;(statearr_18754_18774[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18750 === 5))
{var inst_18733 = cljs.core.async.close_BANG_.call(null,tc);var inst_18734 = cljs.core.async.close_BANG_.call(null,fc);var state_18749__$1 = (function (){var statearr_18755 = state_18749;(statearr_18755[8] = inst_18733);
return statearr_18755;
})();var statearr_18756_18775 = state_18749__$1;(statearr_18756_18775[2] = inst_18734);
(statearr_18756_18775[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18750 === 6))
{var inst_18730 = (state_18749[7]);var inst_18736 = p.call(null,inst_18730);var state_18749__$1 = state_18749;if(cljs.core.truth_(inst_18736))
{var statearr_18757_18776 = state_18749__$1;(statearr_18757_18776[1] = 9);
} else
{var statearr_18758_18777 = state_18749__$1;(statearr_18758_18777[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18750 === 7))
{var inst_18745 = (state_18749[2]);var state_18749__$1 = state_18749;var statearr_18759_18778 = state_18749__$1;(statearr_18759_18778[2] = inst_18745);
(statearr_18759_18778[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18750 === 8))
{var inst_18742 = (state_18749[2]);var state_18749__$1 = (function (){var statearr_18760 = state_18749;(statearr_18760[9] = inst_18742);
return statearr_18760;
})();var statearr_18761_18779 = state_18749__$1;(statearr_18761_18779[2] = null);
(statearr_18761_18779[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18750 === 9))
{var state_18749__$1 = state_18749;var statearr_18762_18780 = state_18749__$1;(statearr_18762_18780[2] = tc);
(statearr_18762_18780[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18750 === 10))
{var state_18749__$1 = state_18749;var statearr_18763_18781 = state_18749__$1;(statearr_18763_18781[2] = fc);
(statearr_18763_18781[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18750 === 11))
{var inst_18730 = (state_18749[7]);var inst_18740 = (state_18749[2]);var state_18749__$1 = state_18749;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18749__$1,8,inst_18740,inst_18730);
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
});return ((function (switch__7508__auto__){
return (function() {
var state_machine__7509__auto__ = null;
var state_machine__7509__auto____0 = (function (){var statearr_18767 = [null,null,null,null,null,null,null,null,null,null];(statearr_18767[0] = state_machine__7509__auto__);
(statearr_18767[1] = 1);
return statearr_18767;
});
var state_machine__7509__auto____1 = (function (state_18749){while(true){
var ret_value__7510__auto__ = (function (){try{while(true){
var result__7511__auto__ = switch__7508__auto__.call(null,state_18749);if(cljs.core.keyword_identical_QMARK_.call(null,result__7511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7511__auto__;
}
break;
}
}catch (e18768){if((e18768 instanceof Object))
{var ex__7512__auto__ = e18768;var statearr_18769_18782 = state_18749;(statearr_18769_18782[5] = ex__7512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18749);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18768;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18783 = state_18749;
state_18749 = G__18783;
continue;
}
} else
{return ret_value__7510__auto__;
}
break;
}
});
state_machine__7509__auto__ = function(state_18749){
switch(arguments.length){
case 0:
return state_machine__7509__auto____0.call(this);
case 1:
return state_machine__7509__auto____1.call(this,state_18749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7509__auto____0;
state_machine__7509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7509__auto____1;
return state_machine__7509__auto__;
})()
;})(switch__7508__auto__))
})();var state__7525__auto__ = (function (){var statearr_18770 = f__7524__auto__.call(null);(statearr_18770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7523__auto___18771);
return statearr_18770;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7525__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__7523__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7524__auto__ = (function (){var switch__7508__auto__ = (function (state_18830){var state_val_18831 = (state_18830[1]);if((state_val_18831 === 7))
{var inst_18826 = (state_18830[2]);var state_18830__$1 = state_18830;var statearr_18832_18848 = state_18830__$1;(statearr_18832_18848[2] = inst_18826);
(statearr_18832_18848[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18831 === 6))
{var inst_18819 = (state_18830[7]);var inst_18816 = (state_18830[8]);var inst_18823 = f.call(null,inst_18816,inst_18819);var inst_18816__$1 = inst_18823;var state_18830__$1 = (function (){var statearr_18833 = state_18830;(statearr_18833[8] = inst_18816__$1);
return statearr_18833;
})();var statearr_18834_18849 = state_18830__$1;(statearr_18834_18849[2] = null);
(statearr_18834_18849[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18831 === 5))
{var inst_18816 = (state_18830[8]);var state_18830__$1 = state_18830;var statearr_18835_18850 = state_18830__$1;(statearr_18835_18850[2] = inst_18816);
(statearr_18835_18850[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18831 === 4))
{var inst_18819 = (state_18830[7]);var inst_18819__$1 = (state_18830[2]);var inst_18820 = (inst_18819__$1 == null);var state_18830__$1 = (function (){var statearr_18836 = state_18830;(statearr_18836[7] = inst_18819__$1);
return statearr_18836;
})();if(cljs.core.truth_(inst_18820))
{var statearr_18837_18851 = state_18830__$1;(statearr_18837_18851[1] = 5);
} else
{var statearr_18838_18852 = state_18830__$1;(statearr_18838_18852[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18831 === 3))
{var inst_18828 = (state_18830[2]);var state_18830__$1 = state_18830;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18830__$1,inst_18828);
} else
{if((state_val_18831 === 2))
{var state_18830__$1 = state_18830;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18830__$1,4,ch);
} else
{if((state_val_18831 === 1))
{var inst_18816 = init;var state_18830__$1 = (function (){var statearr_18839 = state_18830;(statearr_18839[8] = inst_18816);
return statearr_18839;
})();var statearr_18840_18853 = state_18830__$1;(statearr_18840_18853[2] = null);
(statearr_18840_18853[1] = 2);
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
});return ((function (switch__7508__auto__){
return (function() {
var state_machine__7509__auto__ = null;
var state_machine__7509__auto____0 = (function (){var statearr_18844 = [null,null,null,null,null,null,null,null,null];(statearr_18844[0] = state_machine__7509__auto__);
(statearr_18844[1] = 1);
return statearr_18844;
});
var state_machine__7509__auto____1 = (function (state_18830){while(true){
var ret_value__7510__auto__ = (function (){try{while(true){
var result__7511__auto__ = switch__7508__auto__.call(null,state_18830);if(cljs.core.keyword_identical_QMARK_.call(null,result__7511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7511__auto__;
}
break;
}
}catch (e18845){if((e18845 instanceof Object))
{var ex__7512__auto__ = e18845;var statearr_18846_18854 = state_18830;(statearr_18846_18854[5] = ex__7512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18830);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18845;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18855 = state_18830;
state_18830 = G__18855;
continue;
}
} else
{return ret_value__7510__auto__;
}
break;
}
});
state_machine__7509__auto__ = function(state_18830){
switch(arguments.length){
case 0:
return state_machine__7509__auto____0.call(this);
case 1:
return state_machine__7509__auto____1.call(this,state_18830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7509__auto____0;
state_machine__7509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7509__auto____1;
return state_machine__7509__auto__;
})()
;})(switch__7508__auto__))
})();var state__7525__auto__ = (function (){var statearr_18847 = f__7524__auto__.call(null);(statearr_18847[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7523__auto__);
return statearr_18847;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7525__auto__);
}));
return c__7523__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__7523__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7524__auto__ = (function (){var switch__7508__auto__ = (function (state_18917){var state_val_18918 = (state_18917[1]);if((state_val_18918 === 1))
{var inst_18897 = cljs.core.seq.call(null,coll);var inst_18898 = inst_18897;var state_18917__$1 = (function (){var statearr_18919 = state_18917;(statearr_18919[7] = inst_18898);
return statearr_18919;
})();var statearr_18920_18938 = state_18917__$1;(statearr_18920_18938[2] = null);
(statearr_18920_18938[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18918 === 2))
{var inst_18898 = (state_18917[7]);var state_18917__$1 = state_18917;if(cljs.core.truth_(inst_18898))
{var statearr_18921_18939 = state_18917__$1;(statearr_18921_18939[1] = 4);
} else
{var statearr_18922_18940 = state_18917__$1;(statearr_18922_18940[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18918 === 3))
{var inst_18915 = (state_18917[2]);var state_18917__$1 = state_18917;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18917__$1,inst_18915);
} else
{if((state_val_18918 === 4))
{var inst_18898 = (state_18917[7]);var inst_18901 = cljs.core.first.call(null,inst_18898);var state_18917__$1 = state_18917;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18917__$1,7,ch,inst_18901);
} else
{if((state_val_18918 === 5))
{var state_18917__$1 = state_18917;if(cljs.core.truth_(close_QMARK_))
{var statearr_18923_18941 = state_18917__$1;(statearr_18923_18941[1] = 8);
} else
{var statearr_18924_18942 = state_18917__$1;(statearr_18924_18942[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18918 === 6))
{var inst_18913 = (state_18917[2]);var state_18917__$1 = state_18917;var statearr_18925_18943 = state_18917__$1;(statearr_18925_18943[2] = inst_18913);
(statearr_18925_18943[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18918 === 7))
{var inst_18898 = (state_18917[7]);var inst_18903 = (state_18917[2]);var inst_18904 = cljs.core.next.call(null,inst_18898);var inst_18898__$1 = inst_18904;var state_18917__$1 = (function (){var statearr_18926 = state_18917;(statearr_18926[7] = inst_18898__$1);
(statearr_18926[8] = inst_18903);
return statearr_18926;
})();var statearr_18927_18944 = state_18917__$1;(statearr_18927_18944[2] = null);
(statearr_18927_18944[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18918 === 8))
{var inst_18908 = cljs.core.async.close_BANG_.call(null,ch);var state_18917__$1 = state_18917;var statearr_18928_18945 = state_18917__$1;(statearr_18928_18945[2] = inst_18908);
(statearr_18928_18945[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18918 === 9))
{var state_18917__$1 = state_18917;var statearr_18929_18946 = state_18917__$1;(statearr_18929_18946[2] = null);
(statearr_18929_18946[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18918 === 10))
{var inst_18911 = (state_18917[2]);var state_18917__$1 = state_18917;var statearr_18930_18947 = state_18917__$1;(statearr_18930_18947[2] = inst_18911);
(statearr_18930_18947[1] = 6);
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
});return ((function (switch__7508__auto__){
return (function() {
var state_machine__7509__auto__ = null;
var state_machine__7509__auto____0 = (function (){var statearr_18934 = [null,null,null,null,null,null,null,null,null];(statearr_18934[0] = state_machine__7509__auto__);
(statearr_18934[1] = 1);
return statearr_18934;
});
var state_machine__7509__auto____1 = (function (state_18917){while(true){
var ret_value__7510__auto__ = (function (){try{while(true){
var result__7511__auto__ = switch__7508__auto__.call(null,state_18917);if(cljs.core.keyword_identical_QMARK_.call(null,result__7511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7511__auto__;
}
break;
}
}catch (e18935){if((e18935 instanceof Object))
{var ex__7512__auto__ = e18935;var statearr_18936_18948 = state_18917;(statearr_18936_18948[5] = ex__7512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18917);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18935;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18949 = state_18917;
state_18917 = G__18949;
continue;
}
} else
{return ret_value__7510__auto__;
}
break;
}
});
state_machine__7509__auto__ = function(state_18917){
switch(arguments.length){
case 0:
return state_machine__7509__auto____0.call(this);
case 1:
return state_machine__7509__auto____1.call(this,state_18917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7509__auto____0;
state_machine__7509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7509__auto____1;
return state_machine__7509__auto__;
})()
;})(switch__7508__auto__))
})();var state__7525__auto__ = (function (){var statearr_18937 = f__7524__auto__.call(null);(statearr_18937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7523__auto__);
return statearr_18937;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7525__auto__);
}));
return c__7523__auto__;
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
cljs.core.async.Mux = (function (){var obj18951 = {};return obj18951;
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
cljs.core.async.Mult = (function (){var obj18953 = {};return obj18953;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t19177 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19177 = (function (cs,ch,mult,meta19178){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta19178 = meta19178;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19177.cljs$lang$type = true;
cljs.core.async.t19177.cljs$lang$ctorStr = "cljs.core.async/t19177";
cljs.core.async.t19177.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t19177");
});})(cs))
;
cljs.core.async.t19177.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t19177.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t19177.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t19177.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t19177.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t19177.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t19177.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_19179){var self__ = this;
var _19179__$1 = this;return self__.meta19178;
});})(cs))
;
cljs.core.async.t19177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_19179,meta19178__$1){var self__ = this;
var _19179__$1 = this;return (new cljs.core.async.t19177(self__.cs,self__.ch,self__.mult,meta19178__$1));
});})(cs))
;
cljs.core.async.__GT_t19177 = ((function (cs){
return (function __GT_t19177(cs__$1,ch__$1,mult__$1,meta19178){return (new cljs.core.async.t19177(cs__$1,ch__$1,mult__$1,meta19178));
});})(cs))
;
}
return (new cljs.core.async.t19177(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__7523__auto___19400 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7524__auto__ = (function (){var switch__7508__auto__ = (function (state_19314){var state_val_19315 = (state_19314[1]);if((state_val_19315 === 32))
{var inst_19258 = (state_19314[7]);var inst_19182 = (state_19314[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19314,31,Object,null,30);var inst_19265 = cljs.core.async.put_BANG_.call(null,inst_19258,inst_19182,done);var state_19314__$1 = state_19314;var statearr_19316_19401 = state_19314__$1;(statearr_19316_19401[2] = inst_19265);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19314__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19315 === 1))
{var state_19314__$1 = state_19314;var statearr_19317_19402 = state_19314__$1;(statearr_19317_19402[2] = null);
(statearr_19317_19402[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19315 === 33))
{var inst_19271 = (state_19314[9]);var inst_19273 = cljs.core.chunked_seq_QMARK_.call(null,inst_19271);var state_19314__$1 = state_19314;if(inst_19273)
{var statearr_19318_19403 = state_19314__$1;(statearr_19318_19403[1] = 36);
} else
{var statearr_19319_19404 = state_19314__$1;(statearr_19319_19404[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19315 === 2))
{var state_19314__$1 = state_19314;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19314__$1,4,ch);
} else
{if((state_val_19315 === 34))
{var state_19314__$1 = state_19314;var statearr_19320_19405 = state_19314__$1;(statearr_19320_19405[2] = null);
(statearr_19320_19405[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19315 === 3))
{var inst_19312 = (state_19314[2]);var state_19314__$1 = state_19314;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19314__$1,inst_19312);
} else
{if((state_val_19315 === 35))
{var inst_19296 = (state_19314[2]);var state_19314__$1 = state_19314;var statearr_19321_19406 = state_19314__$1;(statearr_19321_19406[2] = inst_19296);
(statearr_19321_19406[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19315 === 4))
{var inst_19182 = (state_19314[8]);var inst_19182__$1 = (state_19314[2]);var inst_19183 = (inst_19182__$1 == null);var state_19314__$1 = (function (){var statearr_19322 = state_19314;(statearr_19322[8] = inst_19182__$1);
return statearr_19322;
})();if(cljs.core.truth_(inst_19183))
{var statearr_19323_19407 = state_19314__$1;(statearr_19323_19407[1] = 5);
} else
{var statearr_19324_19408 = state_19314__$1;(statearr_19324_19408[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19315 === 36))
{var inst_19271 = (state_19314[9]);var inst_19275 = cljs.core.chunk_first.call(null,inst_19271);var inst_19276 = cljs.core.chunk_rest.call(null,inst_19271);var inst_19277 = cljs.core.count.call(null,inst_19275);var inst_19250 = inst_19276;var inst_19251 = inst_19275;var inst_19252 = inst_19277;var inst_19253 = 0;var state_19314__$1 = (function (){var statearr_19325 = state_19314;(statearr_19325[10] = inst_19250);
(statearr_19325[11] = inst_19251);
(statearr_19325[12] = inst_19252);
(statearr_19325[13] = inst_19253);
return statearr_19325;
})();var statearr_19326_19409 = state_19314__$1;(statearr_19326_19409[2] = null);
(statearr_19326_19409[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19315 === 5))
{var inst_19189 = cljs.core.deref.call(null,cs);var inst_19190 = cljs.core.seq.call(null,inst_19189);var inst_19191 = inst_19190;var inst_19192 = null;var inst_19193 = 0;var inst_19194 = 0;var state_19314__$1 = (function (){var statearr_19327 = state_19314;(statearr_19327[14] = inst_19194);
(statearr_19327[15] = inst_19193);
(statearr_19327[16] = inst_19192);
(statearr_19327[17] = inst_19191);
return statearr_19327;
})();var statearr_19328_19410 = state_19314__$1;(statearr_19328_19410[2] = null);
(statearr_19328_19410[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19315 === 37))
{var inst_19271 = (state_19314[9]);var inst_19280 = cljs.core.first.call(null,inst_19271);var state_19314__$1 = (function (){var statearr_19329 = state_19314;(statearr_19329[18] = inst_19280);
return statearr_19329;
})();var statearr_19330_19411 = state_19314__$1;(statearr_19330_19411[2] = null);
(statearr_19330_19411[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19315 === 6))
{var inst_19242 = (state_19314[19]);var inst_19241 = cljs.core.deref.call(null,cs);var inst_19242__$1 = cljs.core.keys.call(null,inst_19241);var inst_19243 = cljs.core.count.call(null,inst_19242__$1);var inst_19244 = cljs.core.reset_BANG_.call(null,dctr,inst_19243);var inst_19249 = cljs.core.seq.call(null,inst_19242__$1);var inst_19250 = inst_19249;var inst_19251 = null;var inst_19252 = 0;var inst_19253 = 0;var state_19314__$1 = (function (){var statearr_19331 = state_19314;(statearr_19331[19] = inst_19242__$1);
(statearr_19331[10] = inst_19250);
(statearr_19331[11] = inst_19251);
(statearr_19331[12] = inst_19252);
(statearr_19331[13] = inst_19253);
(statearr_19331[20] = inst_19244);
return statearr_19331;
})();var statearr_19332_19412 = state_19314__$1;(statearr_19332_19412[2] = null);
(statearr_19332_19412[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19315 === 38))
{var inst_19293 = (state_19314[2]);var state_19314__$1 = state_19314;var statearr_19333_19413 = state_19314__$1;(statearr_19333_19413[2] = inst_19293);
(statearr_19333_19413[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19315 === 7))
{var inst_19310 = (state_19314[2]);var state_19314__$1 = state_19314;var statearr_19334_19414 = state_19314__$1;(statearr_19334_19414[2] = inst_19310);
(statearr_19334_19414[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19315 === 39))
{var inst_19271 = (state_19314[9]);var inst_19289 = (state_19314[2]);var inst_19290 = cljs.core.next.call(null,inst_19271);var inst_19250 = inst_19290;var inst_19251 = null;var inst_19252 = 0;var inst_19253 = 0;var state_19314__$1 = (function (){var statearr_19335 = state_19314;(statearr_19335[10] = inst_19250);
(statearr_19335[11] = inst_19251);
(statearr_19335[12] = inst_19252);
(statearr_19335[13] = inst_19253);
(statearr_19335[21] = inst_19289);
return statearr_19335;
})();var statearr_19336_19415 = state_19314__$1;(statearr_19336_19415[2] = null);
(statearr_19336_19415[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19315 === 8))
{var inst_19194 = (state_19314[14]);var inst_19193 = (state_19314[15]);var inst_19196 = (inst_19194 < inst_19193);var inst_19197 = inst_19196;var state_19314__$1 = state_19314;if(cljs.core.truth_(inst_19197))
{var statearr_19337_19416 = state_19314__$1;(statearr_19337_19416[1] = 10);
} else
{var statearr_19338_19417 = state_19314__$1;(statearr_19338_19417[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19315 === 40))
{var inst_19280 = (state_19314[18]);var inst_19281 = (state_19314[2]);var inst_19282 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_19283 = cljs.core.async.untap_STAR_.call(null,m,inst_19280);var state_19314__$1 = (function (){var statearr_19339 = state_19314;(statearr_19339[22] = inst_19282);
(statearr_19339[23] = inst_19281);
return statearr_19339;
})();var statearr_19340_19418 = state_19314__$1;(statearr_19340_19418[2] = inst_19283);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19314__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19315 === 9))
{var inst_19239 = (state_19314[2]);var state_19314__$1 = state_19314;var statearr_19341_19419 = state_19314__$1;(statearr_19341_19419[2] = inst_19239);
(statearr_19341_19419[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19315 === 41))
{var inst_19280 = (state_19314[18]);var inst_19182 = (state_19314[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19314,40,Object,null,39);var inst_19287 = cljs.core.async.put_BANG_.call(null,inst_19280,inst_19182,done);var state_19314__$1 = state_19314;var statearr_19342_19420 = state_19314__$1;(statearr_19342_19420[2] = inst_19287);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19314__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19315 === 10))
{var inst_19194 = (state_19314[14]);var inst_19192 = (state_19314[16]);var inst_19200 = cljs.core._nth.call(null,inst_19192,inst_19194);var inst_19201 = cljs.core.nth.call(null,inst_19200,0,null);var inst_19202 = cljs.core.nth.call(null,inst_19200,1,null);var state_19314__$1 = (function (){var statearr_19343 = state_19314;(statearr_19343[24] = inst_19201);
return statearr_19343;
})();if(cljs.core.truth_(inst_19202))
{var statearr_19344_19421 = state_19314__$1;(statearr_19344_19421[1] = 13);
} else
{var statearr_19345_19422 = state_19314__$1;(statearr_19345_19422[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19315 === 42))
{var state_19314__$1 = state_19314;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19314__$1,45,dchan);
} else
{if((state_val_19315 === 11))
{var inst_19211 = (state_19314[25]);var inst_19191 = (state_19314[17]);var inst_19211__$1 = cljs.core.seq.call(null,inst_19191);var state_19314__$1 = (function (){var statearr_19346 = state_19314;(statearr_19346[25] = inst_19211__$1);
return statearr_19346;
})();if(inst_19211__$1)
{var statearr_19347_19423 = state_19314__$1;(statearr_19347_19423[1] = 16);
} else
{var statearr_19348_19424 = state_19314__$1;(statearr_19348_19424[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19315 === 43))
{var state_19314__$1 = state_19314;var statearr_19349_19425 = state_19314__$1;(statearr_19349_19425[2] = null);
(statearr_19349_19425[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19315 === 12))
{var inst_19237 = (state_19314[2]);var state_19314__$1 = state_19314;var statearr_19350_19426 = state_19314__$1;(statearr_19350_19426[2] = inst_19237);
(statearr_19350_19426[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19315 === 44))
{var inst_19307 = (state_19314[2]);var state_19314__$1 = (function (){var statearr_19351 = state_19314;(statearr_19351[26] = inst_19307);
return statearr_19351;
})();var statearr_19352_19427 = state_19314__$1;(statearr_19352_19427[2] = null);
(statearr_19352_19427[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19315 === 13))
{var inst_19201 = (state_19314[24]);var inst_19204 = cljs.core.async.close_BANG_.call(null,inst_19201);var state_19314__$1 = state_19314;var statearr_19353_19428 = state_19314__$1;(statearr_19353_19428[2] = inst_19204);
(statearr_19353_19428[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19315 === 45))
{var inst_19304 = (state_19314[2]);var state_19314__$1 = state_19314;var statearr_19357_19429 = state_19314__$1;(statearr_19357_19429[2] = inst_19304);
(statearr_19357_19429[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19315 === 14))
{var state_19314__$1 = state_19314;var statearr_19358_19430 = state_19314__$1;(statearr_19358_19430[2] = null);
(statearr_19358_19430[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19315 === 15))
{var inst_19194 = (state_19314[14]);var inst_19193 = (state_19314[15]);var inst_19192 = (state_19314[16]);var inst_19191 = (state_19314[17]);var inst_19207 = (state_19314[2]);var inst_19208 = (inst_19194 + 1);var tmp19354 = inst_19193;var tmp19355 = inst_19192;var tmp19356 = inst_19191;var inst_19191__$1 = tmp19356;var inst_19192__$1 = tmp19355;var inst_19193__$1 = tmp19354;var inst_19194__$1 = inst_19208;var state_19314__$1 = (function (){var statearr_19359 = state_19314;(statearr_19359[14] = inst_19194__$1);
(statearr_19359[15] = inst_19193__$1);
(statearr_19359[16] = inst_19192__$1);
(statearr_19359[17] = inst_19191__$1);
(statearr_19359[27] = inst_19207);
return statearr_19359;
})();var statearr_19360_19431 = state_19314__$1;(statearr_19360_19431[2] = null);
(statearr_19360_19431[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19315 === 16))
{var inst_19211 = (state_19314[25]);var inst_19213 = cljs.core.chunked_seq_QMARK_.call(null,inst_19211);var state_19314__$1 = state_19314;if(inst_19213)
{var statearr_19361_19432 = state_19314__$1;(statearr_19361_19432[1] = 19);
} else
{var statearr_19362_19433 = state_19314__$1;(statearr_19362_19433[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19315 === 17))
{var state_19314__$1 = state_19314;var statearr_19363_19434 = state_19314__$1;(statearr_19363_19434[2] = null);
(statearr_19363_19434[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19315 === 18))
{var inst_19235 = (state_19314[2]);var state_19314__$1 = state_19314;var statearr_19364_19435 = state_19314__$1;(statearr_19364_19435[2] = inst_19235);
(statearr_19364_19435[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19315 === 19))
{var inst_19211 = (state_19314[25]);var inst_19215 = cljs.core.chunk_first.call(null,inst_19211);var inst_19216 = cljs.core.chunk_rest.call(null,inst_19211);var inst_19217 = cljs.core.count.call(null,inst_19215);var inst_19191 = inst_19216;var inst_19192 = inst_19215;var inst_19193 = inst_19217;var inst_19194 = 0;var state_19314__$1 = (function (){var statearr_19365 = state_19314;(statearr_19365[14] = inst_19194);
(statearr_19365[15] = inst_19193);
(statearr_19365[16] = inst_19192);
(statearr_19365[17] = inst_19191);
return statearr_19365;
})();var statearr_19366_19436 = state_19314__$1;(statearr_19366_19436[2] = null);
(statearr_19366_19436[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19315 === 20))
{var inst_19211 = (state_19314[25]);var inst_19221 = cljs.core.first.call(null,inst_19211);var inst_19222 = cljs.core.nth.call(null,inst_19221,0,null);var inst_19223 = cljs.core.nth.call(null,inst_19221,1,null);var state_19314__$1 = (function (){var statearr_19367 = state_19314;(statearr_19367[28] = inst_19222);
return statearr_19367;
})();if(cljs.core.truth_(inst_19223))
{var statearr_19368_19437 = state_19314__$1;(statearr_19368_19437[1] = 22);
} else
{var statearr_19369_19438 = state_19314__$1;(statearr_19369_19438[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19315 === 21))
{var inst_19232 = (state_19314[2]);var state_19314__$1 = state_19314;var statearr_19370_19439 = state_19314__$1;(statearr_19370_19439[2] = inst_19232);
(statearr_19370_19439[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19315 === 22))
{var inst_19222 = (state_19314[28]);var inst_19225 = cljs.core.async.close_BANG_.call(null,inst_19222);var state_19314__$1 = state_19314;var statearr_19371_19440 = state_19314__$1;(statearr_19371_19440[2] = inst_19225);
(statearr_19371_19440[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19315 === 23))
{var state_19314__$1 = state_19314;var statearr_19372_19441 = state_19314__$1;(statearr_19372_19441[2] = null);
(statearr_19372_19441[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19315 === 24))
{var inst_19211 = (state_19314[25]);var inst_19228 = (state_19314[2]);var inst_19229 = cljs.core.next.call(null,inst_19211);var inst_19191 = inst_19229;var inst_19192 = null;var inst_19193 = 0;var inst_19194 = 0;var state_19314__$1 = (function (){var statearr_19373 = state_19314;(statearr_19373[14] = inst_19194);
(statearr_19373[15] = inst_19193);
(statearr_19373[29] = inst_19228);
(statearr_19373[16] = inst_19192);
(statearr_19373[17] = inst_19191);
return statearr_19373;
})();var statearr_19374_19442 = state_19314__$1;(statearr_19374_19442[2] = null);
(statearr_19374_19442[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19315 === 25))
{var inst_19252 = (state_19314[12]);var inst_19253 = (state_19314[13]);var inst_19255 = (inst_19253 < inst_19252);var inst_19256 = inst_19255;var state_19314__$1 = state_19314;if(cljs.core.truth_(inst_19256))
{var statearr_19375_19443 = state_19314__$1;(statearr_19375_19443[1] = 27);
} else
{var statearr_19376_19444 = state_19314__$1;(statearr_19376_19444[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19315 === 26))
{var inst_19242 = (state_19314[19]);var inst_19300 = (state_19314[2]);var inst_19301 = cljs.core.seq.call(null,inst_19242);var state_19314__$1 = (function (){var statearr_19377 = state_19314;(statearr_19377[30] = inst_19300);
return statearr_19377;
})();if(inst_19301)
{var statearr_19378_19445 = state_19314__$1;(statearr_19378_19445[1] = 42);
} else
{var statearr_19379_19446 = state_19314__$1;(statearr_19379_19446[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19315 === 27))
{var inst_19251 = (state_19314[11]);var inst_19253 = (state_19314[13]);var inst_19258 = cljs.core._nth.call(null,inst_19251,inst_19253);var state_19314__$1 = (function (){var statearr_19380 = state_19314;(statearr_19380[7] = inst_19258);
return statearr_19380;
})();var statearr_19381_19447 = state_19314__$1;(statearr_19381_19447[2] = null);
(statearr_19381_19447[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19315 === 28))
{var inst_19271 = (state_19314[9]);var inst_19250 = (state_19314[10]);var inst_19271__$1 = cljs.core.seq.call(null,inst_19250);var state_19314__$1 = (function (){var statearr_19385 = state_19314;(statearr_19385[9] = inst_19271__$1);
return statearr_19385;
})();if(inst_19271__$1)
{var statearr_19386_19448 = state_19314__$1;(statearr_19386_19448[1] = 33);
} else
{var statearr_19387_19449 = state_19314__$1;(statearr_19387_19449[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19315 === 29))
{var inst_19298 = (state_19314[2]);var state_19314__$1 = state_19314;var statearr_19388_19450 = state_19314__$1;(statearr_19388_19450[2] = inst_19298);
(statearr_19388_19450[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19315 === 30))
{var inst_19250 = (state_19314[10]);var inst_19251 = (state_19314[11]);var inst_19252 = (state_19314[12]);var inst_19253 = (state_19314[13]);var inst_19267 = (state_19314[2]);var inst_19268 = (inst_19253 + 1);var tmp19382 = inst_19250;var tmp19383 = inst_19251;var tmp19384 = inst_19252;var inst_19250__$1 = tmp19382;var inst_19251__$1 = tmp19383;var inst_19252__$1 = tmp19384;var inst_19253__$1 = inst_19268;var state_19314__$1 = (function (){var statearr_19389 = state_19314;(statearr_19389[31] = inst_19267);
(statearr_19389[10] = inst_19250__$1);
(statearr_19389[11] = inst_19251__$1);
(statearr_19389[12] = inst_19252__$1);
(statearr_19389[13] = inst_19253__$1);
return statearr_19389;
})();var statearr_19390_19451 = state_19314__$1;(statearr_19390_19451[2] = null);
(statearr_19390_19451[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19315 === 31))
{var inst_19258 = (state_19314[7]);var inst_19259 = (state_19314[2]);var inst_19260 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_19261 = cljs.core.async.untap_STAR_.call(null,m,inst_19258);var state_19314__$1 = (function (){var statearr_19391 = state_19314;(statearr_19391[32] = inst_19259);
(statearr_19391[33] = inst_19260);
return statearr_19391;
})();var statearr_19392_19452 = state_19314__$1;(statearr_19392_19452[2] = inst_19261);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19314__$1);
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
});return ((function (switch__7508__auto__){
return (function() {
var state_machine__7509__auto__ = null;
var state_machine__7509__auto____0 = (function (){var statearr_19396 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19396[0] = state_machine__7509__auto__);
(statearr_19396[1] = 1);
return statearr_19396;
});
var state_machine__7509__auto____1 = (function (state_19314){while(true){
var ret_value__7510__auto__ = (function (){try{while(true){
var result__7511__auto__ = switch__7508__auto__.call(null,state_19314);if(cljs.core.keyword_identical_QMARK_.call(null,result__7511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7511__auto__;
}
break;
}
}catch (e19397){if((e19397 instanceof Object))
{var ex__7512__auto__ = e19397;var statearr_19398_19453 = state_19314;(statearr_19398_19453[5] = ex__7512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19314);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19397;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19454 = state_19314;
state_19314 = G__19454;
continue;
}
} else
{return ret_value__7510__auto__;
}
break;
}
});
state_machine__7509__auto__ = function(state_19314){
switch(arguments.length){
case 0:
return state_machine__7509__auto____0.call(this);
case 1:
return state_machine__7509__auto____1.call(this,state_19314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7509__auto____0;
state_machine__7509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7509__auto____1;
return state_machine__7509__auto__;
})()
;})(switch__7508__auto__))
})();var state__7525__auto__ = (function (){var statearr_19399 = f__7524__auto__.call(null);(statearr_19399[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7523__auto___19400);
return statearr_19399;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7525__auto__);
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
cljs.core.async.Mix = (function (){var obj19456 = {};return obj19456;
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
;var m = (function (){if(typeof cljs.core.async.t19566 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19566 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta19567){
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
this.meta19567 = meta19567;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19566.cljs$lang$type = true;
cljs.core.async.t19566.cljs$lang$ctorStr = "cljs.core.async/t19566";
cljs.core.async.t19566.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t19566");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19566.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t19566.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19566.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19566.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19566.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19566.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19566.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t19566.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19566.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19568){var self__ = this;
var _19568__$1 = this;return self__.meta19567;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19566.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19568,meta19567__$1){var self__ = this;
var _19568__$1 = this;return (new cljs.core.async.t19566(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta19567__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t19566 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t19566(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta19567){return (new cljs.core.async.t19566(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta19567));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t19566(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__7523__auto___19675 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7524__auto__ = (function (){var switch__7508__auto__ = (function (state_19633){var state_val_19634 = (state_19633[1]);if((state_val_19634 === 1))
{var inst_19572 = (state_19633[7]);var inst_19572__$1 = calc_state.call(null);var inst_19573 = cljs.core.seq_QMARK_.call(null,inst_19572__$1);var state_19633__$1 = (function (){var statearr_19635 = state_19633;(statearr_19635[7] = inst_19572__$1);
return statearr_19635;
})();if(inst_19573)
{var statearr_19636_19676 = state_19633__$1;(statearr_19636_19676[1] = 2);
} else
{var statearr_19637_19677 = state_19633__$1;(statearr_19637_19677[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19634 === 2))
{var inst_19572 = (state_19633[7]);var inst_19575 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19572);var state_19633__$1 = state_19633;var statearr_19638_19678 = state_19633__$1;(statearr_19638_19678[2] = inst_19575);
(statearr_19638_19678[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19634 === 3))
{var inst_19572 = (state_19633[7]);var state_19633__$1 = state_19633;var statearr_19639_19679 = state_19633__$1;(statearr_19639_19679[2] = inst_19572);
(statearr_19639_19679[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19634 === 4))
{var inst_19572 = (state_19633[7]);var inst_19578 = (state_19633[2]);var inst_19579 = cljs.core.get.call(null,inst_19578,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_19580 = cljs.core.get.call(null,inst_19578,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_19581 = cljs.core.get.call(null,inst_19578,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_19582 = inst_19572;var state_19633__$1 = (function (){var statearr_19640 = state_19633;(statearr_19640[8] = inst_19579);
(statearr_19640[9] = inst_19580);
(statearr_19640[10] = inst_19581);
(statearr_19640[11] = inst_19582);
return statearr_19640;
})();var statearr_19641_19680 = state_19633__$1;(statearr_19641_19680[2] = null);
(statearr_19641_19680[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19634 === 5))
{var inst_19582 = (state_19633[11]);var inst_19585 = cljs.core.seq_QMARK_.call(null,inst_19582);var state_19633__$1 = state_19633;if(inst_19585)
{var statearr_19642_19681 = state_19633__$1;(statearr_19642_19681[1] = 7);
} else
{var statearr_19643_19682 = state_19633__$1;(statearr_19643_19682[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19634 === 6))
{var inst_19631 = (state_19633[2]);var state_19633__$1 = state_19633;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19633__$1,inst_19631);
} else
{if((state_val_19634 === 7))
{var inst_19582 = (state_19633[11]);var inst_19587 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19582);var state_19633__$1 = state_19633;var statearr_19644_19683 = state_19633__$1;(statearr_19644_19683[2] = inst_19587);
(statearr_19644_19683[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19634 === 8))
{var inst_19582 = (state_19633[11]);var state_19633__$1 = state_19633;var statearr_19645_19684 = state_19633__$1;(statearr_19645_19684[2] = inst_19582);
(statearr_19645_19684[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19634 === 9))
{var inst_19590 = (state_19633[12]);var inst_19590__$1 = (state_19633[2]);var inst_19591 = cljs.core.get.call(null,inst_19590__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_19592 = cljs.core.get.call(null,inst_19590__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_19593 = cljs.core.get.call(null,inst_19590__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_19633__$1 = (function (){var statearr_19646 = state_19633;(statearr_19646[12] = inst_19590__$1);
(statearr_19646[13] = inst_19592);
(statearr_19646[14] = inst_19593);
return statearr_19646;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_19633__$1,10,inst_19591);
} else
{if((state_val_19634 === 10))
{var inst_19598 = (state_19633[15]);var inst_19597 = (state_19633[16]);var inst_19596 = (state_19633[2]);var inst_19597__$1 = cljs.core.nth.call(null,inst_19596,0,null);var inst_19598__$1 = cljs.core.nth.call(null,inst_19596,1,null);var inst_19599 = (inst_19597__$1 == null);var inst_19600 = cljs.core._EQ_.call(null,inst_19598__$1,change);var inst_19601 = (inst_19599) || (inst_19600);var state_19633__$1 = (function (){var statearr_19647 = state_19633;(statearr_19647[15] = inst_19598__$1);
(statearr_19647[16] = inst_19597__$1);
return statearr_19647;
})();if(cljs.core.truth_(inst_19601))
{var statearr_19648_19685 = state_19633__$1;(statearr_19648_19685[1] = 11);
} else
{var statearr_19649_19686 = state_19633__$1;(statearr_19649_19686[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19634 === 11))
{var inst_19597 = (state_19633[16]);var inst_19603 = (inst_19597 == null);var state_19633__$1 = state_19633;if(cljs.core.truth_(inst_19603))
{var statearr_19650_19687 = state_19633__$1;(statearr_19650_19687[1] = 14);
} else
{var statearr_19651_19688 = state_19633__$1;(statearr_19651_19688[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19634 === 12))
{var inst_19612 = (state_19633[17]);var inst_19593 = (state_19633[14]);var inst_19598 = (state_19633[15]);var inst_19612__$1 = inst_19593.call(null,inst_19598);var state_19633__$1 = (function (){var statearr_19652 = state_19633;(statearr_19652[17] = inst_19612__$1);
return statearr_19652;
})();if(cljs.core.truth_(inst_19612__$1))
{var statearr_19653_19689 = state_19633__$1;(statearr_19653_19689[1] = 17);
} else
{var statearr_19654_19690 = state_19633__$1;(statearr_19654_19690[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19634 === 13))
{var inst_19629 = (state_19633[2]);var state_19633__$1 = state_19633;var statearr_19655_19691 = state_19633__$1;(statearr_19655_19691[2] = inst_19629);
(statearr_19655_19691[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19634 === 14))
{var inst_19598 = (state_19633[15]);var inst_19605 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_19598);var state_19633__$1 = state_19633;var statearr_19656_19692 = state_19633__$1;(statearr_19656_19692[2] = inst_19605);
(statearr_19656_19692[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19634 === 15))
{var state_19633__$1 = state_19633;var statearr_19657_19693 = state_19633__$1;(statearr_19657_19693[2] = null);
(statearr_19657_19693[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19634 === 16))
{var inst_19608 = (state_19633[2]);var inst_19609 = calc_state.call(null);var inst_19582 = inst_19609;var state_19633__$1 = (function (){var statearr_19658 = state_19633;(statearr_19658[18] = inst_19608);
(statearr_19658[11] = inst_19582);
return statearr_19658;
})();var statearr_19659_19694 = state_19633__$1;(statearr_19659_19694[2] = null);
(statearr_19659_19694[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19634 === 17))
{var inst_19612 = (state_19633[17]);var state_19633__$1 = state_19633;var statearr_19660_19695 = state_19633__$1;(statearr_19660_19695[2] = inst_19612);
(statearr_19660_19695[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19634 === 18))
{var inst_19592 = (state_19633[13]);var inst_19593 = (state_19633[14]);var inst_19598 = (state_19633[15]);var inst_19615 = cljs.core.empty_QMARK_.call(null,inst_19593);var inst_19616 = inst_19592.call(null,inst_19598);var inst_19617 = cljs.core.not.call(null,inst_19616);var inst_19618 = (inst_19615) && (inst_19617);var state_19633__$1 = state_19633;var statearr_19661_19696 = state_19633__$1;(statearr_19661_19696[2] = inst_19618);
(statearr_19661_19696[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19634 === 19))
{var inst_19620 = (state_19633[2]);var state_19633__$1 = state_19633;if(cljs.core.truth_(inst_19620))
{var statearr_19662_19697 = state_19633__$1;(statearr_19662_19697[1] = 20);
} else
{var statearr_19663_19698 = state_19633__$1;(statearr_19663_19698[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19634 === 20))
{var inst_19597 = (state_19633[16]);var state_19633__$1 = state_19633;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19633__$1,23,out,inst_19597);
} else
{if((state_val_19634 === 21))
{var state_19633__$1 = state_19633;var statearr_19664_19699 = state_19633__$1;(statearr_19664_19699[2] = null);
(statearr_19664_19699[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19634 === 22))
{var inst_19590 = (state_19633[12]);var inst_19626 = (state_19633[2]);var inst_19582 = inst_19590;var state_19633__$1 = (function (){var statearr_19665 = state_19633;(statearr_19665[19] = inst_19626);
(statearr_19665[11] = inst_19582);
return statearr_19665;
})();var statearr_19666_19700 = state_19633__$1;(statearr_19666_19700[2] = null);
(statearr_19666_19700[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19634 === 23))
{var inst_19623 = (state_19633[2]);var state_19633__$1 = state_19633;var statearr_19667_19701 = state_19633__$1;(statearr_19667_19701[2] = inst_19623);
(statearr_19667_19701[1] = 22);
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
});return ((function (switch__7508__auto__){
return (function() {
var state_machine__7509__auto__ = null;
var state_machine__7509__auto____0 = (function (){var statearr_19671 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19671[0] = state_machine__7509__auto__);
(statearr_19671[1] = 1);
return statearr_19671;
});
var state_machine__7509__auto____1 = (function (state_19633){while(true){
var ret_value__7510__auto__ = (function (){try{while(true){
var result__7511__auto__ = switch__7508__auto__.call(null,state_19633);if(cljs.core.keyword_identical_QMARK_.call(null,result__7511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7511__auto__;
}
break;
}
}catch (e19672){if((e19672 instanceof Object))
{var ex__7512__auto__ = e19672;var statearr_19673_19702 = state_19633;(statearr_19673_19702[5] = ex__7512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19633);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19672;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19703 = state_19633;
state_19633 = G__19703;
continue;
}
} else
{return ret_value__7510__auto__;
}
break;
}
});
state_machine__7509__auto__ = function(state_19633){
switch(arguments.length){
case 0:
return state_machine__7509__auto____0.call(this);
case 1:
return state_machine__7509__auto____1.call(this,state_19633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7509__auto____0;
state_machine__7509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7509__auto____1;
return state_machine__7509__auto__;
})()
;})(switch__7508__auto__))
})();var state__7525__auto__ = (function (){var statearr_19674 = f__7524__auto__.call(null);(statearr_19674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7523__auto___19675);
return statearr_19674;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7525__auto__);
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
cljs.core.async.Pub = (function (){var obj19705 = {};return obj19705;
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
return (function (p1__19706_SHARP_){if(cljs.core.truth_(p1__19706_SHARP_.call(null,topic)))
{return p1__19706_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__19706_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3443__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t19831 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19831 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta19832){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta19832 = meta19832;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19831.cljs$lang$type = true;
cljs.core.async.t19831.cljs$lang$ctorStr = "cljs.core.async/t19831";
cljs.core.async.t19831.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t19831");
});})(mults,ensure_mult))
;
cljs.core.async.t19831.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t19831.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t19831.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t19831.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t19831.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t19831.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t19831.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t19831.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19833){var self__ = this;
var _19833__$1 = this;return self__.meta19832;
});})(mults,ensure_mult))
;
cljs.core.async.t19831.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19833,meta19832__$1){var self__ = this;
var _19833__$1 = this;return (new cljs.core.async.t19831(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta19832__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t19831 = ((function (mults,ensure_mult){
return (function __GT_t19831(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta19832){return (new cljs.core.async.t19831(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta19832));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t19831(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__7523__auto___19955 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7524__auto__ = (function (){var switch__7508__auto__ = (function (state_19907){var state_val_19908 = (state_19907[1]);if((state_val_19908 === 1))
{var state_19907__$1 = state_19907;var statearr_19909_19956 = state_19907__$1;(statearr_19909_19956[2] = null);
(statearr_19909_19956[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19908 === 2))
{var state_19907__$1 = state_19907;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19907__$1,4,ch);
} else
{if((state_val_19908 === 3))
{var inst_19905 = (state_19907[2]);var state_19907__$1 = state_19907;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19907__$1,inst_19905);
} else
{if((state_val_19908 === 4))
{var inst_19836 = (state_19907[7]);var inst_19836__$1 = (state_19907[2]);var inst_19837 = (inst_19836__$1 == null);var state_19907__$1 = (function (){var statearr_19910 = state_19907;(statearr_19910[7] = inst_19836__$1);
return statearr_19910;
})();if(cljs.core.truth_(inst_19837))
{var statearr_19911_19957 = state_19907__$1;(statearr_19911_19957[1] = 5);
} else
{var statearr_19912_19958 = state_19907__$1;(statearr_19912_19958[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19908 === 5))
{var inst_19843 = cljs.core.deref.call(null,mults);var inst_19844 = cljs.core.vals.call(null,inst_19843);var inst_19845 = cljs.core.seq.call(null,inst_19844);var inst_19846 = inst_19845;var inst_19847 = null;var inst_19848 = 0;var inst_19849 = 0;var state_19907__$1 = (function (){var statearr_19913 = state_19907;(statearr_19913[8] = inst_19849);
(statearr_19913[9] = inst_19848);
(statearr_19913[10] = inst_19847);
(statearr_19913[11] = inst_19846);
return statearr_19913;
})();var statearr_19914_19959 = state_19907__$1;(statearr_19914_19959[2] = null);
(statearr_19914_19959[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19908 === 6))
{var inst_19886 = (state_19907[12]);var inst_19836 = (state_19907[7]);var inst_19884 = (state_19907[13]);var inst_19884__$1 = topic_fn.call(null,inst_19836);var inst_19885 = cljs.core.deref.call(null,mults);var inst_19886__$1 = cljs.core.get.call(null,inst_19885,inst_19884__$1);var state_19907__$1 = (function (){var statearr_19915 = state_19907;(statearr_19915[12] = inst_19886__$1);
(statearr_19915[13] = inst_19884__$1);
return statearr_19915;
})();if(cljs.core.truth_(inst_19886__$1))
{var statearr_19916_19960 = state_19907__$1;(statearr_19916_19960[1] = 19);
} else
{var statearr_19917_19961 = state_19907__$1;(statearr_19917_19961[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19908 === 7))
{var inst_19903 = (state_19907[2]);var state_19907__$1 = state_19907;var statearr_19918_19962 = state_19907__$1;(statearr_19918_19962[2] = inst_19903);
(statearr_19918_19962[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19908 === 8))
{var inst_19849 = (state_19907[8]);var inst_19848 = (state_19907[9]);var inst_19851 = (inst_19849 < inst_19848);var inst_19852 = inst_19851;var state_19907__$1 = state_19907;if(cljs.core.truth_(inst_19852))
{var statearr_19922_19963 = state_19907__$1;(statearr_19922_19963[1] = 10);
} else
{var statearr_19923_19964 = state_19907__$1;(statearr_19923_19964[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19908 === 9))
{var inst_19882 = (state_19907[2]);var state_19907__$1 = state_19907;var statearr_19924_19965 = state_19907__$1;(statearr_19924_19965[2] = inst_19882);
(statearr_19924_19965[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19908 === 10))
{var inst_19849 = (state_19907[8]);var inst_19848 = (state_19907[9]);var inst_19847 = (state_19907[10]);var inst_19846 = (state_19907[11]);var inst_19854 = cljs.core._nth.call(null,inst_19847,inst_19849);var inst_19855 = cljs.core.async.muxch_STAR_.call(null,inst_19854);var inst_19856 = cljs.core.async.close_BANG_.call(null,inst_19855);var inst_19857 = (inst_19849 + 1);var tmp19919 = inst_19848;var tmp19920 = inst_19847;var tmp19921 = inst_19846;var inst_19846__$1 = tmp19921;var inst_19847__$1 = tmp19920;var inst_19848__$1 = tmp19919;var inst_19849__$1 = inst_19857;var state_19907__$1 = (function (){var statearr_19925 = state_19907;(statearr_19925[8] = inst_19849__$1);
(statearr_19925[14] = inst_19856);
(statearr_19925[9] = inst_19848__$1);
(statearr_19925[10] = inst_19847__$1);
(statearr_19925[11] = inst_19846__$1);
return statearr_19925;
})();var statearr_19926_19966 = state_19907__$1;(statearr_19926_19966[2] = null);
(statearr_19926_19966[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19908 === 11))
{var inst_19860 = (state_19907[15]);var inst_19846 = (state_19907[11]);var inst_19860__$1 = cljs.core.seq.call(null,inst_19846);var state_19907__$1 = (function (){var statearr_19927 = state_19907;(statearr_19927[15] = inst_19860__$1);
return statearr_19927;
})();if(inst_19860__$1)
{var statearr_19928_19967 = state_19907__$1;(statearr_19928_19967[1] = 13);
} else
{var statearr_19929_19968 = state_19907__$1;(statearr_19929_19968[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19908 === 12))
{var inst_19880 = (state_19907[2]);var state_19907__$1 = state_19907;var statearr_19930_19969 = state_19907__$1;(statearr_19930_19969[2] = inst_19880);
(statearr_19930_19969[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19908 === 13))
{var inst_19860 = (state_19907[15]);var inst_19862 = cljs.core.chunked_seq_QMARK_.call(null,inst_19860);var state_19907__$1 = state_19907;if(inst_19862)
{var statearr_19931_19970 = state_19907__$1;(statearr_19931_19970[1] = 16);
} else
{var statearr_19932_19971 = state_19907__$1;(statearr_19932_19971[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19908 === 14))
{var state_19907__$1 = state_19907;var statearr_19933_19972 = state_19907__$1;(statearr_19933_19972[2] = null);
(statearr_19933_19972[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19908 === 15))
{var inst_19878 = (state_19907[2]);var state_19907__$1 = state_19907;var statearr_19934_19973 = state_19907__$1;(statearr_19934_19973[2] = inst_19878);
(statearr_19934_19973[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19908 === 16))
{var inst_19860 = (state_19907[15]);var inst_19864 = cljs.core.chunk_first.call(null,inst_19860);var inst_19865 = cljs.core.chunk_rest.call(null,inst_19860);var inst_19866 = cljs.core.count.call(null,inst_19864);var inst_19846 = inst_19865;var inst_19847 = inst_19864;var inst_19848 = inst_19866;var inst_19849 = 0;var state_19907__$1 = (function (){var statearr_19935 = state_19907;(statearr_19935[8] = inst_19849);
(statearr_19935[9] = inst_19848);
(statearr_19935[10] = inst_19847);
(statearr_19935[11] = inst_19846);
return statearr_19935;
})();var statearr_19936_19974 = state_19907__$1;(statearr_19936_19974[2] = null);
(statearr_19936_19974[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19908 === 17))
{var inst_19860 = (state_19907[15]);var inst_19869 = cljs.core.first.call(null,inst_19860);var inst_19870 = cljs.core.async.muxch_STAR_.call(null,inst_19869);var inst_19871 = cljs.core.async.close_BANG_.call(null,inst_19870);var inst_19872 = cljs.core.next.call(null,inst_19860);var inst_19846 = inst_19872;var inst_19847 = null;var inst_19848 = 0;var inst_19849 = 0;var state_19907__$1 = (function (){var statearr_19937 = state_19907;(statearr_19937[8] = inst_19849);
(statearr_19937[9] = inst_19848);
(statearr_19937[16] = inst_19871);
(statearr_19937[10] = inst_19847);
(statearr_19937[11] = inst_19846);
return statearr_19937;
})();var statearr_19938_19975 = state_19907__$1;(statearr_19938_19975[2] = null);
(statearr_19938_19975[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19908 === 18))
{var inst_19875 = (state_19907[2]);var state_19907__$1 = state_19907;var statearr_19939_19976 = state_19907__$1;(statearr_19939_19976[2] = inst_19875);
(statearr_19939_19976[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19908 === 19))
{var state_19907__$1 = state_19907;var statearr_19940_19977 = state_19907__$1;(statearr_19940_19977[2] = null);
(statearr_19940_19977[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19908 === 20))
{var state_19907__$1 = state_19907;var statearr_19941_19978 = state_19907__$1;(statearr_19941_19978[2] = null);
(statearr_19941_19978[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19908 === 21))
{var inst_19900 = (state_19907[2]);var state_19907__$1 = (function (){var statearr_19942 = state_19907;(statearr_19942[17] = inst_19900);
return statearr_19942;
})();var statearr_19943_19979 = state_19907__$1;(statearr_19943_19979[2] = null);
(statearr_19943_19979[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19908 === 22))
{var inst_19897 = (state_19907[2]);var state_19907__$1 = state_19907;var statearr_19944_19980 = state_19907__$1;(statearr_19944_19980[2] = inst_19897);
(statearr_19944_19980[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19908 === 23))
{var inst_19884 = (state_19907[13]);var inst_19888 = (state_19907[2]);var inst_19889 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19884);var state_19907__$1 = (function (){var statearr_19945 = state_19907;(statearr_19945[18] = inst_19888);
return statearr_19945;
})();var statearr_19946_19981 = state_19907__$1;(statearr_19946_19981[2] = inst_19889);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19907__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19908 === 24))
{var inst_19886 = (state_19907[12]);var inst_19836 = (state_19907[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19907,23,Object,null,22);var inst_19893 = cljs.core.async.muxch_STAR_.call(null,inst_19886);var state_19907__$1 = state_19907;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19907__$1,25,inst_19893,inst_19836);
} else
{if((state_val_19908 === 25))
{var inst_19895 = (state_19907[2]);var state_19907__$1 = state_19907;var statearr_19947_19982 = state_19907__$1;(statearr_19947_19982[2] = inst_19895);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19907__$1);
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
});return ((function (switch__7508__auto__){
return (function() {
var state_machine__7509__auto__ = null;
var state_machine__7509__auto____0 = (function (){var statearr_19951 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19951[0] = state_machine__7509__auto__);
(statearr_19951[1] = 1);
return statearr_19951;
});
var state_machine__7509__auto____1 = (function (state_19907){while(true){
var ret_value__7510__auto__ = (function (){try{while(true){
var result__7511__auto__ = switch__7508__auto__.call(null,state_19907);if(cljs.core.keyword_identical_QMARK_.call(null,result__7511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7511__auto__;
}
break;
}
}catch (e19952){if((e19952 instanceof Object))
{var ex__7512__auto__ = e19952;var statearr_19953_19983 = state_19907;(statearr_19953_19983[5] = ex__7512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19907);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19952;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19984 = state_19907;
state_19907 = G__19984;
continue;
}
} else
{return ret_value__7510__auto__;
}
break;
}
});
state_machine__7509__auto__ = function(state_19907){
switch(arguments.length){
case 0:
return state_machine__7509__auto____0.call(this);
case 1:
return state_machine__7509__auto____1.call(this,state_19907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7509__auto____0;
state_machine__7509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7509__auto____1;
return state_machine__7509__auto__;
})()
;})(switch__7508__auto__))
})();var state__7525__auto__ = (function (){var statearr_19954 = f__7524__auto__.call(null);(statearr_19954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7523__auto___19955);
return statearr_19954;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7525__auto__);
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
,cljs.core.range.call(null,cnt));var c__7523__auto___20121 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7524__auto__ = (function (){var switch__7508__auto__ = (function (state_20091){var state_val_20092 = (state_20091[1]);if((state_val_20092 === 1))
{var state_20091__$1 = state_20091;var statearr_20093_20122 = state_20091__$1;(statearr_20093_20122[2] = null);
(statearr_20093_20122[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20092 === 2))
{var inst_20054 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_20055 = 0;var state_20091__$1 = (function (){var statearr_20094 = state_20091;(statearr_20094[7] = inst_20055);
(statearr_20094[8] = inst_20054);
return statearr_20094;
})();var statearr_20095_20123 = state_20091__$1;(statearr_20095_20123[2] = null);
(statearr_20095_20123[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20092 === 3))
{var inst_20089 = (state_20091[2]);var state_20091__$1 = state_20091;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20091__$1,inst_20089);
} else
{if((state_val_20092 === 4))
{var inst_20055 = (state_20091[7]);var inst_20057 = (inst_20055 < cnt);var state_20091__$1 = state_20091;if(cljs.core.truth_(inst_20057))
{var statearr_20096_20124 = state_20091__$1;(statearr_20096_20124[1] = 6);
} else
{var statearr_20097_20125 = state_20091__$1;(statearr_20097_20125[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20092 === 5))
{var inst_20075 = (state_20091[2]);var state_20091__$1 = (function (){var statearr_20098 = state_20091;(statearr_20098[9] = inst_20075);
return statearr_20098;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20091__$1,12,dchan);
} else
{if((state_val_20092 === 6))
{var state_20091__$1 = state_20091;var statearr_20099_20126 = state_20091__$1;(statearr_20099_20126[2] = null);
(statearr_20099_20126[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20092 === 7))
{var state_20091__$1 = state_20091;var statearr_20100_20127 = state_20091__$1;(statearr_20100_20127[2] = null);
(statearr_20100_20127[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20092 === 8))
{var inst_20073 = (state_20091[2]);var state_20091__$1 = state_20091;var statearr_20101_20128 = state_20091__$1;(statearr_20101_20128[2] = inst_20073);
(statearr_20101_20128[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20092 === 9))
{var inst_20055 = (state_20091[7]);var inst_20068 = (state_20091[2]);var inst_20069 = (inst_20055 + 1);var inst_20055__$1 = inst_20069;var state_20091__$1 = (function (){var statearr_20102 = state_20091;(statearr_20102[7] = inst_20055__$1);
(statearr_20102[10] = inst_20068);
return statearr_20102;
})();var statearr_20103_20129 = state_20091__$1;(statearr_20103_20129[2] = null);
(statearr_20103_20129[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20092 === 10))
{var inst_20059 = (state_20091[2]);var inst_20060 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_20091__$1 = (function (){var statearr_20104 = state_20091;(statearr_20104[11] = inst_20059);
return statearr_20104;
})();var statearr_20105_20130 = state_20091__$1;(statearr_20105_20130[2] = inst_20060);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20091__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20092 === 11))
{var inst_20055 = (state_20091[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20091,10,Object,null,9);var inst_20064 = chs__$1.call(null,inst_20055);var inst_20065 = done.call(null,inst_20055);var inst_20066 = cljs.core.async.take_BANG_.call(null,inst_20064,inst_20065);var state_20091__$1 = state_20091;var statearr_20106_20131 = state_20091__$1;(statearr_20106_20131[2] = inst_20066);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20091__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20092 === 12))
{var inst_20077 = (state_20091[12]);var inst_20077__$1 = (state_20091[2]);var inst_20078 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_20077__$1);var state_20091__$1 = (function (){var statearr_20107 = state_20091;(statearr_20107[12] = inst_20077__$1);
return statearr_20107;
})();if(cljs.core.truth_(inst_20078))
{var statearr_20108_20132 = state_20091__$1;(statearr_20108_20132[1] = 13);
} else
{var statearr_20109_20133 = state_20091__$1;(statearr_20109_20133[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20092 === 13))
{var inst_20080 = cljs.core.async.close_BANG_.call(null,out);var state_20091__$1 = state_20091;var statearr_20110_20134 = state_20091__$1;(statearr_20110_20134[2] = inst_20080);
(statearr_20110_20134[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20092 === 14))
{var inst_20077 = (state_20091[12]);var inst_20082 = cljs.core.apply.call(null,f,inst_20077);var state_20091__$1 = state_20091;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20091__$1,16,out,inst_20082);
} else
{if((state_val_20092 === 15))
{var inst_20087 = (state_20091[2]);var state_20091__$1 = state_20091;var statearr_20111_20135 = state_20091__$1;(statearr_20111_20135[2] = inst_20087);
(statearr_20111_20135[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20092 === 16))
{var inst_20084 = (state_20091[2]);var state_20091__$1 = (function (){var statearr_20112 = state_20091;(statearr_20112[13] = inst_20084);
return statearr_20112;
})();var statearr_20113_20136 = state_20091__$1;(statearr_20113_20136[2] = null);
(statearr_20113_20136[1] = 2);
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
});return ((function (switch__7508__auto__){
return (function() {
var state_machine__7509__auto__ = null;
var state_machine__7509__auto____0 = (function (){var statearr_20117 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20117[0] = state_machine__7509__auto__);
(statearr_20117[1] = 1);
return statearr_20117;
});
var state_machine__7509__auto____1 = (function (state_20091){while(true){
var ret_value__7510__auto__ = (function (){try{while(true){
var result__7511__auto__ = switch__7508__auto__.call(null,state_20091);if(cljs.core.keyword_identical_QMARK_.call(null,result__7511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7511__auto__;
}
break;
}
}catch (e20118){if((e20118 instanceof Object))
{var ex__7512__auto__ = e20118;var statearr_20119_20137 = state_20091;(statearr_20119_20137[5] = ex__7512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20091);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20118;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20138 = state_20091;
state_20091 = G__20138;
continue;
}
} else
{return ret_value__7510__auto__;
}
break;
}
});
state_machine__7509__auto__ = function(state_20091){
switch(arguments.length){
case 0:
return state_machine__7509__auto____0.call(this);
case 1:
return state_machine__7509__auto____1.call(this,state_20091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7509__auto____0;
state_machine__7509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7509__auto____1;
return state_machine__7509__auto__;
})()
;})(switch__7508__auto__))
})();var state__7525__auto__ = (function (){var statearr_20120 = f__7524__auto__.call(null);(statearr_20120[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7523__auto___20121);
return statearr_20120;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7525__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7523__auto___20246 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7524__auto__ = (function (){var switch__7508__auto__ = (function (state_20222){var state_val_20223 = (state_20222[1]);if((state_val_20223 === 1))
{var inst_20193 = cljs.core.vec.call(null,chs);var inst_20194 = inst_20193;var state_20222__$1 = (function (){var statearr_20224 = state_20222;(statearr_20224[7] = inst_20194);
return statearr_20224;
})();var statearr_20225_20247 = state_20222__$1;(statearr_20225_20247[2] = null);
(statearr_20225_20247[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20223 === 2))
{var inst_20194 = (state_20222[7]);var inst_20196 = cljs.core.count.call(null,inst_20194);var inst_20197 = (inst_20196 > 0);var state_20222__$1 = state_20222;if(cljs.core.truth_(inst_20197))
{var statearr_20226_20248 = state_20222__$1;(statearr_20226_20248[1] = 4);
} else
{var statearr_20227_20249 = state_20222__$1;(statearr_20227_20249[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20223 === 3))
{var inst_20220 = (state_20222[2]);var state_20222__$1 = state_20222;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20222__$1,inst_20220);
} else
{if((state_val_20223 === 4))
{var inst_20194 = (state_20222[7]);var state_20222__$1 = state_20222;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_20222__$1,7,inst_20194);
} else
{if((state_val_20223 === 5))
{var inst_20216 = cljs.core.async.close_BANG_.call(null,out);var state_20222__$1 = state_20222;var statearr_20228_20250 = state_20222__$1;(statearr_20228_20250[2] = inst_20216);
(statearr_20228_20250[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20223 === 6))
{var inst_20218 = (state_20222[2]);var state_20222__$1 = state_20222;var statearr_20229_20251 = state_20222__$1;(statearr_20229_20251[2] = inst_20218);
(statearr_20229_20251[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20223 === 7))
{var inst_20201 = (state_20222[8]);var inst_20202 = (state_20222[9]);var inst_20201__$1 = (state_20222[2]);var inst_20202__$1 = cljs.core.nth.call(null,inst_20201__$1,0,null);var inst_20203 = cljs.core.nth.call(null,inst_20201__$1,1,null);var inst_20204 = (inst_20202__$1 == null);var state_20222__$1 = (function (){var statearr_20230 = state_20222;(statearr_20230[8] = inst_20201__$1);
(statearr_20230[9] = inst_20202__$1);
(statearr_20230[10] = inst_20203);
return statearr_20230;
})();if(cljs.core.truth_(inst_20204))
{var statearr_20231_20252 = state_20222__$1;(statearr_20231_20252[1] = 8);
} else
{var statearr_20232_20253 = state_20222__$1;(statearr_20232_20253[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20223 === 8))
{var inst_20201 = (state_20222[8]);var inst_20202 = (state_20222[9]);var inst_20203 = (state_20222[10]);var inst_20194 = (state_20222[7]);var inst_20206 = (function (){var c = inst_20203;var v = inst_20202;var vec__20199 = inst_20201;var cs = inst_20194;return ((function (c,v,vec__20199,cs,inst_20201,inst_20202,inst_20203,inst_20194,state_val_20223){
return (function (p1__20139_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__20139_SHARP_);
});
;})(c,v,vec__20199,cs,inst_20201,inst_20202,inst_20203,inst_20194,state_val_20223))
})();var inst_20207 = cljs.core.filterv.call(null,inst_20206,inst_20194);var inst_20194__$1 = inst_20207;var state_20222__$1 = (function (){var statearr_20233 = state_20222;(statearr_20233[7] = inst_20194__$1);
return statearr_20233;
})();var statearr_20234_20254 = state_20222__$1;(statearr_20234_20254[2] = null);
(statearr_20234_20254[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20223 === 9))
{var inst_20202 = (state_20222[9]);var state_20222__$1 = state_20222;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20222__$1,11,out,inst_20202);
} else
{if((state_val_20223 === 10))
{var inst_20214 = (state_20222[2]);var state_20222__$1 = state_20222;var statearr_20236_20255 = state_20222__$1;(statearr_20236_20255[2] = inst_20214);
(statearr_20236_20255[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20223 === 11))
{var inst_20194 = (state_20222[7]);var inst_20211 = (state_20222[2]);var tmp20235 = inst_20194;var inst_20194__$1 = tmp20235;var state_20222__$1 = (function (){var statearr_20237 = state_20222;(statearr_20237[11] = inst_20211);
(statearr_20237[7] = inst_20194__$1);
return statearr_20237;
})();var statearr_20238_20256 = state_20222__$1;(statearr_20238_20256[2] = null);
(statearr_20238_20256[1] = 2);
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
});return ((function (switch__7508__auto__){
return (function() {
var state_machine__7509__auto__ = null;
var state_machine__7509__auto____0 = (function (){var statearr_20242 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20242[0] = state_machine__7509__auto__);
(statearr_20242[1] = 1);
return statearr_20242;
});
var state_machine__7509__auto____1 = (function (state_20222){while(true){
var ret_value__7510__auto__ = (function (){try{while(true){
var result__7511__auto__ = switch__7508__auto__.call(null,state_20222);if(cljs.core.keyword_identical_QMARK_.call(null,result__7511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7511__auto__;
}
break;
}
}catch (e20243){if((e20243 instanceof Object))
{var ex__7512__auto__ = e20243;var statearr_20244_20257 = state_20222;(statearr_20244_20257[5] = ex__7512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20222);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20243;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20258 = state_20222;
state_20222 = G__20258;
continue;
}
} else
{return ret_value__7510__auto__;
}
break;
}
});
state_machine__7509__auto__ = function(state_20222){
switch(arguments.length){
case 0:
return state_machine__7509__auto____0.call(this);
case 1:
return state_machine__7509__auto____1.call(this,state_20222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7509__auto____0;
state_machine__7509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7509__auto____1;
return state_machine__7509__auto__;
})()
;})(switch__7508__auto__))
})();var state__7525__auto__ = (function (){var statearr_20245 = f__7524__auto__.call(null);(statearr_20245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7523__auto___20246);
return statearr_20245;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7525__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7523__auto___20351 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7524__auto__ = (function (){var switch__7508__auto__ = (function (state_20328){var state_val_20329 = (state_20328[1]);if((state_val_20329 === 1))
{var inst_20305 = 0;var state_20328__$1 = (function (){var statearr_20330 = state_20328;(statearr_20330[7] = inst_20305);
return statearr_20330;
})();var statearr_20331_20352 = state_20328__$1;(statearr_20331_20352[2] = null);
(statearr_20331_20352[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20329 === 2))
{var inst_20305 = (state_20328[7]);var inst_20307 = (inst_20305 < n);var state_20328__$1 = state_20328;if(cljs.core.truth_(inst_20307))
{var statearr_20332_20353 = state_20328__$1;(statearr_20332_20353[1] = 4);
} else
{var statearr_20333_20354 = state_20328__$1;(statearr_20333_20354[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20329 === 3))
{var inst_20325 = (state_20328[2]);var inst_20326 = cljs.core.async.close_BANG_.call(null,out);var state_20328__$1 = (function (){var statearr_20334 = state_20328;(statearr_20334[8] = inst_20325);
return statearr_20334;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20328__$1,inst_20326);
} else
{if((state_val_20329 === 4))
{var state_20328__$1 = state_20328;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20328__$1,7,ch);
} else
{if((state_val_20329 === 5))
{var state_20328__$1 = state_20328;var statearr_20335_20355 = state_20328__$1;(statearr_20335_20355[2] = null);
(statearr_20335_20355[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20329 === 6))
{var inst_20323 = (state_20328[2]);var state_20328__$1 = state_20328;var statearr_20336_20356 = state_20328__$1;(statearr_20336_20356[2] = inst_20323);
(statearr_20336_20356[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20329 === 7))
{var inst_20310 = (state_20328[9]);var inst_20310__$1 = (state_20328[2]);var inst_20311 = (inst_20310__$1 == null);var inst_20312 = cljs.core.not.call(null,inst_20311);var state_20328__$1 = (function (){var statearr_20337 = state_20328;(statearr_20337[9] = inst_20310__$1);
return statearr_20337;
})();if(inst_20312)
{var statearr_20338_20357 = state_20328__$1;(statearr_20338_20357[1] = 8);
} else
{var statearr_20339_20358 = state_20328__$1;(statearr_20339_20358[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20329 === 8))
{var inst_20310 = (state_20328[9]);var state_20328__$1 = state_20328;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20328__$1,11,out,inst_20310);
} else
{if((state_val_20329 === 9))
{var state_20328__$1 = state_20328;var statearr_20340_20359 = state_20328__$1;(statearr_20340_20359[2] = null);
(statearr_20340_20359[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20329 === 10))
{var inst_20320 = (state_20328[2]);var state_20328__$1 = state_20328;var statearr_20341_20360 = state_20328__$1;(statearr_20341_20360[2] = inst_20320);
(statearr_20341_20360[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20329 === 11))
{var inst_20305 = (state_20328[7]);var inst_20315 = (state_20328[2]);var inst_20316 = (inst_20305 + 1);var inst_20305__$1 = inst_20316;var state_20328__$1 = (function (){var statearr_20342 = state_20328;(statearr_20342[7] = inst_20305__$1);
(statearr_20342[10] = inst_20315);
return statearr_20342;
})();var statearr_20343_20361 = state_20328__$1;(statearr_20343_20361[2] = null);
(statearr_20343_20361[1] = 2);
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
});return ((function (switch__7508__auto__){
return (function() {
var state_machine__7509__auto__ = null;
var state_machine__7509__auto____0 = (function (){var statearr_20347 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_20347[0] = state_machine__7509__auto__);
(statearr_20347[1] = 1);
return statearr_20347;
});
var state_machine__7509__auto____1 = (function (state_20328){while(true){
var ret_value__7510__auto__ = (function (){try{while(true){
var result__7511__auto__ = switch__7508__auto__.call(null,state_20328);if(cljs.core.keyword_identical_QMARK_.call(null,result__7511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7511__auto__;
}
break;
}
}catch (e20348){if((e20348 instanceof Object))
{var ex__7512__auto__ = e20348;var statearr_20349_20362 = state_20328;(statearr_20349_20362[5] = ex__7512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20328);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20348;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20363 = state_20328;
state_20328 = G__20363;
continue;
}
} else
{return ret_value__7510__auto__;
}
break;
}
});
state_machine__7509__auto__ = function(state_20328){
switch(arguments.length){
case 0:
return state_machine__7509__auto____0.call(this);
case 1:
return state_machine__7509__auto____1.call(this,state_20328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7509__auto____0;
state_machine__7509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7509__auto____1;
return state_machine__7509__auto__;
})()
;})(switch__7508__auto__))
})();var state__7525__auto__ = (function (){var statearr_20350 = f__7524__auto__.call(null);(statearr_20350[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7523__auto___20351);
return statearr_20350;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7525__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7523__auto___20460 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7524__auto__ = (function (){var switch__7508__auto__ = (function (state_20435){var state_val_20436 = (state_20435[1]);if((state_val_20436 === 1))
{var inst_20412 = null;var state_20435__$1 = (function (){var statearr_20437 = state_20435;(statearr_20437[7] = inst_20412);
return statearr_20437;
})();var statearr_20438_20461 = state_20435__$1;(statearr_20438_20461[2] = null);
(statearr_20438_20461[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20436 === 2))
{var state_20435__$1 = state_20435;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20435__$1,4,ch);
} else
{if((state_val_20436 === 3))
{var inst_20432 = (state_20435[2]);var inst_20433 = cljs.core.async.close_BANG_.call(null,out);var state_20435__$1 = (function (){var statearr_20439 = state_20435;(statearr_20439[8] = inst_20432);
return statearr_20439;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20435__$1,inst_20433);
} else
{if((state_val_20436 === 4))
{var inst_20415 = (state_20435[9]);var inst_20415__$1 = (state_20435[2]);var inst_20416 = (inst_20415__$1 == null);var inst_20417 = cljs.core.not.call(null,inst_20416);var state_20435__$1 = (function (){var statearr_20440 = state_20435;(statearr_20440[9] = inst_20415__$1);
return statearr_20440;
})();if(inst_20417)
{var statearr_20441_20462 = state_20435__$1;(statearr_20441_20462[1] = 5);
} else
{var statearr_20442_20463 = state_20435__$1;(statearr_20442_20463[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20436 === 5))
{var inst_20415 = (state_20435[9]);var inst_20412 = (state_20435[7]);var inst_20419 = cljs.core._EQ_.call(null,inst_20415,inst_20412);var state_20435__$1 = state_20435;if(inst_20419)
{var statearr_20443_20464 = state_20435__$1;(statearr_20443_20464[1] = 8);
} else
{var statearr_20444_20465 = state_20435__$1;(statearr_20444_20465[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20436 === 6))
{var state_20435__$1 = state_20435;var statearr_20446_20466 = state_20435__$1;(statearr_20446_20466[2] = null);
(statearr_20446_20466[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20436 === 7))
{var inst_20430 = (state_20435[2]);var state_20435__$1 = state_20435;var statearr_20447_20467 = state_20435__$1;(statearr_20447_20467[2] = inst_20430);
(statearr_20447_20467[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20436 === 8))
{var inst_20412 = (state_20435[7]);var tmp20445 = inst_20412;var inst_20412__$1 = tmp20445;var state_20435__$1 = (function (){var statearr_20448 = state_20435;(statearr_20448[7] = inst_20412__$1);
return statearr_20448;
})();var statearr_20449_20468 = state_20435__$1;(statearr_20449_20468[2] = null);
(statearr_20449_20468[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20436 === 9))
{var inst_20415 = (state_20435[9]);var state_20435__$1 = state_20435;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20435__$1,11,out,inst_20415);
} else
{if((state_val_20436 === 10))
{var inst_20427 = (state_20435[2]);var state_20435__$1 = state_20435;var statearr_20450_20469 = state_20435__$1;(statearr_20450_20469[2] = inst_20427);
(statearr_20450_20469[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20436 === 11))
{var inst_20415 = (state_20435[9]);var inst_20424 = (state_20435[2]);var inst_20412 = inst_20415;var state_20435__$1 = (function (){var statearr_20451 = state_20435;(statearr_20451[10] = inst_20424);
(statearr_20451[7] = inst_20412);
return statearr_20451;
})();var statearr_20452_20470 = state_20435__$1;(statearr_20452_20470[2] = null);
(statearr_20452_20470[1] = 2);
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
});return ((function (switch__7508__auto__){
return (function() {
var state_machine__7509__auto__ = null;
var state_machine__7509__auto____0 = (function (){var statearr_20456 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_20456[0] = state_machine__7509__auto__);
(statearr_20456[1] = 1);
return statearr_20456;
});
var state_machine__7509__auto____1 = (function (state_20435){while(true){
var ret_value__7510__auto__ = (function (){try{while(true){
var result__7511__auto__ = switch__7508__auto__.call(null,state_20435);if(cljs.core.keyword_identical_QMARK_.call(null,result__7511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7511__auto__;
}
break;
}
}catch (e20457){if((e20457 instanceof Object))
{var ex__7512__auto__ = e20457;var statearr_20458_20471 = state_20435;(statearr_20458_20471[5] = ex__7512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20435);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20457;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20472 = state_20435;
state_20435 = G__20472;
continue;
}
} else
{return ret_value__7510__auto__;
}
break;
}
});
state_machine__7509__auto__ = function(state_20435){
switch(arguments.length){
case 0:
return state_machine__7509__auto____0.call(this);
case 1:
return state_machine__7509__auto____1.call(this,state_20435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7509__auto____0;
state_machine__7509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7509__auto____1;
return state_machine__7509__auto__;
})()
;})(switch__7508__auto__))
})();var state__7525__auto__ = (function (){var statearr_20459 = f__7524__auto__.call(null);(statearr_20459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7523__auto___20460);
return statearr_20459;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7525__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7523__auto___20607 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7524__auto__ = (function (){var switch__7508__auto__ = (function (state_20577){var state_val_20578 = (state_20577[1]);if((state_val_20578 === 1))
{var inst_20540 = (new Array(n));var inst_20541 = inst_20540;var inst_20542 = 0;var state_20577__$1 = (function (){var statearr_20579 = state_20577;(statearr_20579[7] = inst_20542);
(statearr_20579[8] = inst_20541);
return statearr_20579;
})();var statearr_20580_20608 = state_20577__$1;(statearr_20580_20608[2] = null);
(statearr_20580_20608[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20578 === 2))
{var state_20577__$1 = state_20577;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20577__$1,4,ch);
} else
{if((state_val_20578 === 3))
{var inst_20575 = (state_20577[2]);var state_20577__$1 = state_20577;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20577__$1,inst_20575);
} else
{if((state_val_20578 === 4))
{var inst_20545 = (state_20577[9]);var inst_20545__$1 = (state_20577[2]);var inst_20546 = (inst_20545__$1 == null);var inst_20547 = cljs.core.not.call(null,inst_20546);var state_20577__$1 = (function (){var statearr_20581 = state_20577;(statearr_20581[9] = inst_20545__$1);
return statearr_20581;
})();if(inst_20547)
{var statearr_20582_20609 = state_20577__$1;(statearr_20582_20609[1] = 5);
} else
{var statearr_20583_20610 = state_20577__$1;(statearr_20583_20610[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20578 === 5))
{var inst_20542 = (state_20577[7]);var inst_20550 = (state_20577[10]);var inst_20545 = (state_20577[9]);var inst_20541 = (state_20577[8]);var inst_20549 = (inst_20541[inst_20542] = inst_20545);var inst_20550__$1 = (inst_20542 + 1);var inst_20551 = (inst_20550__$1 < n);var state_20577__$1 = (function (){var statearr_20584 = state_20577;(statearr_20584[11] = inst_20549);
(statearr_20584[10] = inst_20550__$1);
return statearr_20584;
})();if(cljs.core.truth_(inst_20551))
{var statearr_20585_20611 = state_20577__$1;(statearr_20585_20611[1] = 8);
} else
{var statearr_20586_20612 = state_20577__$1;(statearr_20586_20612[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20578 === 6))
{var inst_20542 = (state_20577[7]);var inst_20563 = (inst_20542 > 0);var state_20577__$1 = state_20577;if(cljs.core.truth_(inst_20563))
{var statearr_20588_20613 = state_20577__$1;(statearr_20588_20613[1] = 12);
} else
{var statearr_20589_20614 = state_20577__$1;(statearr_20589_20614[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20578 === 7))
{var inst_20573 = (state_20577[2]);var state_20577__$1 = state_20577;var statearr_20590_20615 = state_20577__$1;(statearr_20590_20615[2] = inst_20573);
(statearr_20590_20615[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20578 === 8))
{var inst_20550 = (state_20577[10]);var inst_20541 = (state_20577[8]);var tmp20587 = inst_20541;var inst_20541__$1 = tmp20587;var inst_20542 = inst_20550;var state_20577__$1 = (function (){var statearr_20591 = state_20577;(statearr_20591[7] = inst_20542);
(statearr_20591[8] = inst_20541__$1);
return statearr_20591;
})();var statearr_20592_20616 = state_20577__$1;(statearr_20592_20616[2] = null);
(statearr_20592_20616[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20578 === 9))
{var inst_20541 = (state_20577[8]);var inst_20555 = cljs.core.vec.call(null,inst_20541);var state_20577__$1 = state_20577;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20577__$1,11,out,inst_20555);
} else
{if((state_val_20578 === 10))
{var inst_20561 = (state_20577[2]);var state_20577__$1 = state_20577;var statearr_20593_20617 = state_20577__$1;(statearr_20593_20617[2] = inst_20561);
(statearr_20593_20617[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20578 === 11))
{var inst_20557 = (state_20577[2]);var inst_20558 = (new Array(n));var inst_20541 = inst_20558;var inst_20542 = 0;var state_20577__$1 = (function (){var statearr_20594 = state_20577;(statearr_20594[12] = inst_20557);
(statearr_20594[7] = inst_20542);
(statearr_20594[8] = inst_20541);
return statearr_20594;
})();var statearr_20595_20618 = state_20577__$1;(statearr_20595_20618[2] = null);
(statearr_20595_20618[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20578 === 12))
{var inst_20541 = (state_20577[8]);var inst_20565 = cljs.core.vec.call(null,inst_20541);var state_20577__$1 = state_20577;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20577__$1,15,out,inst_20565);
} else
{if((state_val_20578 === 13))
{var state_20577__$1 = state_20577;var statearr_20596_20619 = state_20577__$1;(statearr_20596_20619[2] = null);
(statearr_20596_20619[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20578 === 14))
{var inst_20570 = (state_20577[2]);var inst_20571 = cljs.core.async.close_BANG_.call(null,out);var state_20577__$1 = (function (){var statearr_20597 = state_20577;(statearr_20597[13] = inst_20570);
return statearr_20597;
})();var statearr_20598_20620 = state_20577__$1;(statearr_20598_20620[2] = inst_20571);
(statearr_20598_20620[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20578 === 15))
{var inst_20567 = (state_20577[2]);var state_20577__$1 = state_20577;var statearr_20599_20621 = state_20577__$1;(statearr_20599_20621[2] = inst_20567);
(statearr_20599_20621[1] = 14);
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
});return ((function (switch__7508__auto__){
return (function() {
var state_machine__7509__auto__ = null;
var state_machine__7509__auto____0 = (function (){var statearr_20603 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20603[0] = state_machine__7509__auto__);
(statearr_20603[1] = 1);
return statearr_20603;
});
var state_machine__7509__auto____1 = (function (state_20577){while(true){
var ret_value__7510__auto__ = (function (){try{while(true){
var result__7511__auto__ = switch__7508__auto__.call(null,state_20577);if(cljs.core.keyword_identical_QMARK_.call(null,result__7511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7511__auto__;
}
break;
}
}catch (e20604){if((e20604 instanceof Object))
{var ex__7512__auto__ = e20604;var statearr_20605_20622 = state_20577;(statearr_20605_20622[5] = ex__7512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20577);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20604;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20623 = state_20577;
state_20577 = G__20623;
continue;
}
} else
{return ret_value__7510__auto__;
}
break;
}
});
state_machine__7509__auto__ = function(state_20577){
switch(arguments.length){
case 0:
return state_machine__7509__auto____0.call(this);
case 1:
return state_machine__7509__auto____1.call(this,state_20577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7509__auto____0;
state_machine__7509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7509__auto____1;
return state_machine__7509__auto__;
})()
;})(switch__7508__auto__))
})();var state__7525__auto__ = (function (){var statearr_20606 = f__7524__auto__.call(null);(statearr_20606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7523__auto___20607);
return statearr_20606;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7525__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7523__auto___20766 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7524__auto__ = (function (){var switch__7508__auto__ = (function (state_20736){var state_val_20737 = (state_20736[1]);if((state_val_20737 === 1))
{var inst_20695 = [];var inst_20696 = inst_20695;var inst_20697 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_20736__$1 = (function (){var statearr_20738 = state_20736;(statearr_20738[7] = inst_20696);
(statearr_20738[8] = inst_20697);
return statearr_20738;
})();var statearr_20739_20767 = state_20736__$1;(statearr_20739_20767[2] = null);
(statearr_20739_20767[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20737 === 2))
{var state_20736__$1 = state_20736;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20736__$1,4,ch);
} else
{if((state_val_20737 === 3))
{var inst_20734 = (state_20736[2]);var state_20736__$1 = state_20736;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20736__$1,inst_20734);
} else
{if((state_val_20737 === 4))
{var inst_20700 = (state_20736[9]);var inst_20700__$1 = (state_20736[2]);var inst_20701 = (inst_20700__$1 == null);var inst_20702 = cljs.core.not.call(null,inst_20701);var state_20736__$1 = (function (){var statearr_20740 = state_20736;(statearr_20740[9] = inst_20700__$1);
return statearr_20740;
})();if(inst_20702)
{var statearr_20741_20768 = state_20736__$1;(statearr_20741_20768[1] = 5);
} else
{var statearr_20742_20769 = state_20736__$1;(statearr_20742_20769[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20737 === 5))
{var inst_20700 = (state_20736[9]);var inst_20704 = (state_20736[10]);var inst_20697 = (state_20736[8]);var inst_20704__$1 = f.call(null,inst_20700);var inst_20705 = cljs.core._EQ_.call(null,inst_20704__$1,inst_20697);var inst_20706 = cljs.core.keyword_identical_QMARK_.call(null,inst_20697,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_20707 = (inst_20705) || (inst_20706);var state_20736__$1 = (function (){var statearr_20743 = state_20736;(statearr_20743[10] = inst_20704__$1);
return statearr_20743;
})();if(cljs.core.truth_(inst_20707))
{var statearr_20744_20770 = state_20736__$1;(statearr_20744_20770[1] = 8);
} else
{var statearr_20745_20771 = state_20736__$1;(statearr_20745_20771[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20737 === 6))
{var inst_20696 = (state_20736[7]);var inst_20721 = inst_20696.length;var inst_20722 = (inst_20721 > 0);var state_20736__$1 = state_20736;if(cljs.core.truth_(inst_20722))
{var statearr_20747_20772 = state_20736__$1;(statearr_20747_20772[1] = 12);
} else
{var statearr_20748_20773 = state_20736__$1;(statearr_20748_20773[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20737 === 7))
{var inst_20732 = (state_20736[2]);var state_20736__$1 = state_20736;var statearr_20749_20774 = state_20736__$1;(statearr_20749_20774[2] = inst_20732);
(statearr_20749_20774[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20737 === 8))
{var inst_20700 = (state_20736[9]);var inst_20704 = (state_20736[10]);var inst_20696 = (state_20736[7]);var inst_20709 = inst_20696.push(inst_20700);var tmp20746 = inst_20696;var inst_20696__$1 = tmp20746;var inst_20697 = inst_20704;var state_20736__$1 = (function (){var statearr_20750 = state_20736;(statearr_20750[11] = inst_20709);
(statearr_20750[7] = inst_20696__$1);
(statearr_20750[8] = inst_20697);
return statearr_20750;
})();var statearr_20751_20775 = state_20736__$1;(statearr_20751_20775[2] = null);
(statearr_20751_20775[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20737 === 9))
{var inst_20696 = (state_20736[7]);var inst_20712 = cljs.core.vec.call(null,inst_20696);var state_20736__$1 = state_20736;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20736__$1,11,out,inst_20712);
} else
{if((state_val_20737 === 10))
{var inst_20719 = (state_20736[2]);var state_20736__$1 = state_20736;var statearr_20752_20776 = state_20736__$1;(statearr_20752_20776[2] = inst_20719);
(statearr_20752_20776[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20737 === 11))
{var inst_20700 = (state_20736[9]);var inst_20704 = (state_20736[10]);var inst_20714 = (state_20736[2]);var inst_20715 = [];var inst_20716 = inst_20715.push(inst_20700);var inst_20696 = inst_20715;var inst_20697 = inst_20704;var state_20736__$1 = (function (){var statearr_20753 = state_20736;(statearr_20753[12] = inst_20714);
(statearr_20753[13] = inst_20716);
(statearr_20753[7] = inst_20696);
(statearr_20753[8] = inst_20697);
return statearr_20753;
})();var statearr_20754_20777 = state_20736__$1;(statearr_20754_20777[2] = null);
(statearr_20754_20777[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20737 === 12))
{var inst_20696 = (state_20736[7]);var inst_20724 = cljs.core.vec.call(null,inst_20696);var state_20736__$1 = state_20736;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20736__$1,15,out,inst_20724);
} else
{if((state_val_20737 === 13))
{var state_20736__$1 = state_20736;var statearr_20755_20778 = state_20736__$1;(statearr_20755_20778[2] = null);
(statearr_20755_20778[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20737 === 14))
{var inst_20729 = (state_20736[2]);var inst_20730 = cljs.core.async.close_BANG_.call(null,out);var state_20736__$1 = (function (){var statearr_20756 = state_20736;(statearr_20756[14] = inst_20729);
return statearr_20756;
})();var statearr_20757_20779 = state_20736__$1;(statearr_20757_20779[2] = inst_20730);
(statearr_20757_20779[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20737 === 15))
{var inst_20726 = (state_20736[2]);var state_20736__$1 = state_20736;var statearr_20758_20780 = state_20736__$1;(statearr_20758_20780[2] = inst_20726);
(statearr_20758_20780[1] = 14);
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
});return ((function (switch__7508__auto__){
return (function() {
var state_machine__7509__auto__ = null;
var state_machine__7509__auto____0 = (function (){var statearr_20762 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20762[0] = state_machine__7509__auto__);
(statearr_20762[1] = 1);
return statearr_20762;
});
var state_machine__7509__auto____1 = (function (state_20736){while(true){
var ret_value__7510__auto__ = (function (){try{while(true){
var result__7511__auto__ = switch__7508__auto__.call(null,state_20736);if(cljs.core.keyword_identical_QMARK_.call(null,result__7511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7511__auto__;
}
break;
}
}catch (e20763){if((e20763 instanceof Object))
{var ex__7512__auto__ = e20763;var statearr_20764_20781 = state_20736;(statearr_20764_20781[5] = ex__7512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20736);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20763;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20782 = state_20736;
state_20736 = G__20782;
continue;
}
} else
{return ret_value__7510__auto__;
}
break;
}
});
state_machine__7509__auto__ = function(state_20736){
switch(arguments.length){
case 0:
return state_machine__7509__auto____0.call(this);
case 1:
return state_machine__7509__auto____1.call(this,state_20736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7509__auto____0;
state_machine__7509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7509__auto____1;
return state_machine__7509__auto__;
})()
;})(switch__7508__auto__))
})();var state__7525__auto__ = (function (){var statearr_20765 = f__7524__auto__.call(null);(statearr_20765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7523__auto___20766);
return statearr_20765;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7525__auto__);
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