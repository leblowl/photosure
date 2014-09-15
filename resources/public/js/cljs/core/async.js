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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11293 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11293 = (function (f,fn_handler,meta11294){
this.f = f;
this.fn_handler = fn_handler;
this.meta11294 = meta11294;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11293.cljs$lang$type = true;
cljs.core.async.t11293.cljs$lang$ctorStr = "cljs.core.async/t11293";
cljs.core.async.t11293.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t11293");
});
cljs.core.async.t11293.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11293.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11293.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11293.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11295){var self__ = this;
var _11295__$1 = this;return self__.meta11294;
});
cljs.core.async.t11293.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11295,meta11294__$1){var self__ = this;
var _11295__$1 = this;return (new cljs.core.async.t11293(self__.f,self__.fn_handler,meta11294__$1));
});
cljs.core.async.__GT_t11293 = (function __GT_t11293(f__$1,fn_handler__$1,meta11294){return (new cljs.core.async.t11293(f__$1,fn_handler__$1,meta11294));
});
}
return (new cljs.core.async.t11293(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11297 = buff;if(G__11297)
{var bit__4210__auto__ = null;if(cljs.core.truth_((function (){var or__3560__auto__ = bit__4210__auto__;if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return G__11297.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11297.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11297);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11297);
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
{var val_11298 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11298);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_11298,ret){
return (function (){return fn1.call(null,val_11298);
});})(val_11298,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4416__auto___11299 = n;var x_11300 = (0);while(true){
if((x_11300 < n__4416__auto___11299))
{(a[x_11300] = (0));
{
var G__11301 = (x_11300 + (1));
x_11300 = G__11301;
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
var G__11302 = (i + (1));
i = G__11302;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11306 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11306 = (function (flag,alt_flag,meta11307){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11307 = meta11307;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11306.cljs$lang$type = true;
cljs.core.async.t11306.cljs$lang$ctorStr = "cljs.core.async/t11306";
cljs.core.async.t11306.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t11306");
});})(flag))
;
cljs.core.async.t11306.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11306.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t11306.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t11306.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11308){var self__ = this;
var _11308__$1 = this;return self__.meta11307;
});})(flag))
;
cljs.core.async.t11306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11308,meta11307__$1){var self__ = this;
var _11308__$1 = this;return (new cljs.core.async.t11306(self__.flag,self__.alt_flag,meta11307__$1));
});})(flag))
;
cljs.core.async.__GT_t11306 = ((function (flag){
return (function __GT_t11306(flag__$1,alt_flag__$1,meta11307){return (new cljs.core.async.t11306(flag__$1,alt_flag__$1,meta11307));
});})(flag))
;
}
return (new cljs.core.async.t11306(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11312 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11312 = (function (cb,flag,alt_handler,meta11313){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11313 = meta11313;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11312.cljs$lang$type = true;
cljs.core.async.t11312.cljs$lang$ctorStr = "cljs.core.async/t11312";
cljs.core.async.t11312.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t11312");
});
cljs.core.async.t11312.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11312.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11312.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11312.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11314){var self__ = this;
var _11314__$1 = this;return self__.meta11313;
});
cljs.core.async.t11312.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11314,meta11313__$1){var self__ = this;
var _11314__$1 = this;return (new cljs.core.async.t11312(self__.cb,self__.flag,self__.alt_handler,meta11313__$1));
});
cljs.core.async.__GT_t11312 = (function __GT_t11312(cb__$1,flag__$1,alt_handler__$1,meta11313){return (new cljs.core.async.t11312(cb__$1,flag__$1,alt_handler__$1,meta11313));
});
}
return (new cljs.core.async.t11312(cb,flag,alt_handler,null));
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
return (function (p1__11315_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11315_SHARP_,port], null));
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
var G__11316 = (i + (1));
i = G__11316;
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
var alts_BANG___delegate = function (ports,p__11317){var map__11319 = p__11317;var map__11319__$1 = ((cljs.core.seq_QMARK_.call(null,map__11319))?cljs.core.apply.call(null,cljs.core.hash_map,map__11319):map__11319);var opts = map__11319__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__11317 = null;if (arguments.length > 1) {
  p__11317 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11317);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11320){
var ports = cljs.core.first(arglist__11320);
var p__11317 = cljs.core.rest(arglist__11320);
return alts_BANG___delegate(ports,p__11317);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11328 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11328 = (function (ch,f,map_LT_,meta11329){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11329 = meta11329;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11328.cljs$lang$type = true;
cljs.core.async.t11328.cljs$lang$ctorStr = "cljs.core.async/t11328";
cljs.core.async.t11328.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t11328");
});
cljs.core.async.t11328.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11328.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t11328.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11328.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11331 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11331 = (function (fn1,_,meta11329,ch,f,map_LT_,meta11332){
this.fn1 = fn1;
this._ = _;
this.meta11329 = meta11329;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11332 = meta11332;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11331.cljs$lang$type = true;
cljs.core.async.t11331.cljs$lang$ctorStr = "cljs.core.async/t11331";
cljs.core.async.t11331.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t11331");
});})(___$1))
;
cljs.core.async.t11331.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11331.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t11331.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t11331.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__11321_SHARP_){return f1.call(null,(((p1__11321_SHARP_ == null))?null:self__.f.call(null,p1__11321_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t11331.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_11333){var self__ = this;
var _11333__$1 = this;return self__.meta11332;
});})(___$1))
;
cljs.core.async.t11331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_11333,meta11332__$1){var self__ = this;
var _11333__$1 = this;return (new cljs.core.async.t11331(self__.fn1,self__._,self__.meta11329,self__.ch,self__.f,self__.map_LT_,meta11332__$1));
});})(___$1))
;
cljs.core.async.__GT_t11331 = ((function (___$1){
return (function __GT_t11331(fn1__$1,___$2,meta11329__$1,ch__$2,f__$2,map_LT___$2,meta11332){return (new cljs.core.async.t11331(fn1__$1,___$2,meta11329__$1,ch__$2,f__$2,map_LT___$2,meta11332));
});})(___$1))
;
}
return (new cljs.core.async.t11331(fn1,___$1,self__.meta11329,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t11328.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11328.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11328.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11330){var self__ = this;
var _11330__$1 = this;return self__.meta11329;
});
cljs.core.async.t11328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11330,meta11329__$1){var self__ = this;
var _11330__$1 = this;return (new cljs.core.async.t11328(self__.ch,self__.f,self__.map_LT_,meta11329__$1));
});
cljs.core.async.__GT_t11328 = (function __GT_t11328(ch__$1,f__$1,map_LT___$1,meta11329){return (new cljs.core.async.t11328(ch__$1,f__$1,map_LT___$1,meta11329));
});
}
return (new cljs.core.async.t11328(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11337 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11337 = (function (ch,f,map_GT_,meta11338){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11338 = meta11338;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11337.cljs$lang$type = true;
cljs.core.async.t11337.cljs$lang$ctorStr = "cljs.core.async/t11337";
cljs.core.async.t11337.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t11337");
});
cljs.core.async.t11337.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11337.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t11337.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11337.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11337.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11337.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11337.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11339){var self__ = this;
var _11339__$1 = this;return self__.meta11338;
});
cljs.core.async.t11337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11339,meta11338__$1){var self__ = this;
var _11339__$1 = this;return (new cljs.core.async.t11337(self__.ch,self__.f,self__.map_GT_,meta11338__$1));
});
cljs.core.async.__GT_t11337 = (function __GT_t11337(ch__$1,f__$1,map_GT___$1,meta11338){return (new cljs.core.async.t11337(ch__$1,f__$1,map_GT___$1,meta11338));
});
}
return (new cljs.core.async.t11337(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11343 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11343 = (function (ch,p,filter_GT_,meta11344){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11344 = meta11344;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11343.cljs$lang$type = true;
cljs.core.async.t11343.cljs$lang$ctorStr = "cljs.core.async/t11343";
cljs.core.async.t11343.cljs$lang$ctorPrWriter = (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t11343");
});
cljs.core.async.t11343.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11343.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t11343.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11343.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11343.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11343.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11343.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11345){var self__ = this;
var _11345__$1 = this;return self__.meta11344;
});
cljs.core.async.t11343.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11345,meta11344__$1){var self__ = this;
var _11345__$1 = this;return (new cljs.core.async.t11343(self__.ch,self__.p,self__.filter_GT_,meta11344__$1));
});
cljs.core.async.__GT_t11343 = (function __GT_t11343(ch__$1,p__$1,filter_GT___$1,meta11344){return (new cljs.core.async.t11343(ch__$1,p__$1,filter_GT___$1,meta11344));
});
}
return (new cljs.core.async.t11343(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6367__auto___11428 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto___11428,out){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto___11428,out){
return (function (state_11407){var state_val_11408 = (state_11407[(1)]);if((state_val_11408 === (7)))
{var inst_11403 = (state_11407[(2)]);var state_11407__$1 = state_11407;var statearr_11409_11429 = state_11407__$1;(statearr_11409_11429[(2)] = inst_11403);
(statearr_11409_11429[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11408 === (1)))
{var state_11407__$1 = state_11407;var statearr_11410_11430 = state_11407__$1;(statearr_11410_11430[(2)] = null);
(statearr_11410_11430[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11408 === (4)))
{var inst_11389 = (state_11407[(7)]);var inst_11389__$1 = (state_11407[(2)]);var inst_11390 = (inst_11389__$1 == null);var state_11407__$1 = (function (){var statearr_11411 = state_11407;(statearr_11411[(7)] = inst_11389__$1);
return statearr_11411;
})();if(cljs.core.truth_(inst_11390))
{var statearr_11412_11431 = state_11407__$1;(statearr_11412_11431[(1)] = (5));
} else
{var statearr_11413_11432 = state_11407__$1;(statearr_11413_11432[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11408 === (6)))
{var inst_11389 = (state_11407[(7)]);var inst_11394 = p.call(null,inst_11389);var state_11407__$1 = state_11407;if(cljs.core.truth_(inst_11394))
{var statearr_11414_11433 = state_11407__$1;(statearr_11414_11433[(1)] = (8));
} else
{var statearr_11415_11434 = state_11407__$1;(statearr_11415_11434[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11408 === (3)))
{var inst_11405 = (state_11407[(2)]);var state_11407__$1 = state_11407;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11407__$1,inst_11405);
} else
{if((state_val_11408 === (2)))
{var state_11407__$1 = state_11407;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11407__$1,(4),ch);
} else
{if((state_val_11408 === (11)))
{var inst_11397 = (state_11407[(2)]);var state_11407__$1 = state_11407;var statearr_11416_11435 = state_11407__$1;(statearr_11416_11435[(2)] = inst_11397);
(statearr_11416_11435[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11408 === (9)))
{var state_11407__$1 = state_11407;var statearr_11417_11436 = state_11407__$1;(statearr_11417_11436[(2)] = null);
(statearr_11417_11436[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11408 === (5)))
{var inst_11392 = cljs.core.async.close_BANG_.call(null,out);var state_11407__$1 = state_11407;var statearr_11418_11437 = state_11407__$1;(statearr_11418_11437[(2)] = inst_11392);
(statearr_11418_11437[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11408 === (10)))
{var inst_11400 = (state_11407[(2)]);var state_11407__$1 = (function (){var statearr_11419 = state_11407;(statearr_11419[(8)] = inst_11400);
return statearr_11419;
})();var statearr_11420_11438 = state_11407__$1;(statearr_11420_11438[(2)] = null);
(statearr_11420_11438[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11408 === (8)))
{var inst_11389 = (state_11407[(7)]);var state_11407__$1 = state_11407;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11407__$1,(11),out,inst_11389);
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
});})(c__6367__auto___11428,out))
;return ((function (switch__6352__auto__,c__6367__auto___11428,out){
return (function() {
var state_machine__6353__auto__ = null;
var state_machine__6353__auto____0 = (function (){var statearr_11424 = [null,null,null,null,null,null,null,null,null];(statearr_11424[(0)] = state_machine__6353__auto__);
(statearr_11424[(1)] = (1));
return statearr_11424;
});
var state_machine__6353__auto____1 = (function (state_11407){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_11407);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e11425){if((e11425 instanceof Object))
{var ex__6356__auto__ = e11425;var statearr_11426_11439 = state_11407;(statearr_11426_11439[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11407);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11425;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11440 = state_11407;
state_11407 = G__11440;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_11407){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_11407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto___11428,out))
})();var state__6369__auto__ = (function (){var statearr_11427 = f__6368__auto__.call(null);(statearr_11427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto___11428);
return statearr_11427;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto___11428,out))
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
return (function (state_11592){var state_val_11593 = (state_11592[(1)]);if((state_val_11593 === (7)))
{var inst_11588 = (state_11592[(2)]);var state_11592__$1 = state_11592;var statearr_11594_11631 = state_11592__$1;(statearr_11594_11631[(2)] = inst_11588);
(statearr_11594_11631[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11593 === (20)))
{var inst_11563 = (state_11592[(7)]);var inst_11574 = (state_11592[(2)]);var inst_11575 = cljs.core.next.call(null,inst_11563);var inst_11549 = inst_11575;var inst_11550 = null;var inst_11551 = (0);var inst_11552 = (0);var state_11592__$1 = (function (){var statearr_11595 = state_11592;(statearr_11595[(8)] = inst_11551);
(statearr_11595[(9)] = inst_11549);
(statearr_11595[(10)] = inst_11550);
(statearr_11595[(11)] = inst_11552);
(statearr_11595[(12)] = inst_11574);
return statearr_11595;
})();var statearr_11596_11632 = state_11592__$1;(statearr_11596_11632[(2)] = null);
(statearr_11596_11632[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11593 === (1)))
{var state_11592__$1 = state_11592;var statearr_11597_11633 = state_11592__$1;(statearr_11597_11633[(2)] = null);
(statearr_11597_11633[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11593 === (4)))
{var inst_11538 = (state_11592[(13)]);var inst_11538__$1 = (state_11592[(2)]);var inst_11539 = (inst_11538__$1 == null);var state_11592__$1 = (function (){var statearr_11601 = state_11592;(statearr_11601[(13)] = inst_11538__$1);
return statearr_11601;
})();if(cljs.core.truth_(inst_11539))
{var statearr_11602_11634 = state_11592__$1;(statearr_11602_11634[(1)] = (5));
} else
{var statearr_11603_11635 = state_11592__$1;(statearr_11603_11635[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11593 === (15)))
{var state_11592__$1 = state_11592;var statearr_11604_11636 = state_11592__$1;(statearr_11604_11636[(2)] = null);
(statearr_11604_11636[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11593 === (13)))
{var inst_11551 = (state_11592[(8)]);var inst_11549 = (state_11592[(9)]);var inst_11550 = (state_11592[(10)]);var inst_11552 = (state_11592[(11)]);var inst_11559 = (state_11592[(2)]);var inst_11560 = (inst_11552 + (1));var tmp11598 = inst_11551;var tmp11599 = inst_11549;var tmp11600 = inst_11550;var inst_11549__$1 = tmp11599;var inst_11550__$1 = tmp11600;var inst_11551__$1 = tmp11598;var inst_11552__$1 = inst_11560;var state_11592__$1 = (function (){var statearr_11605 = state_11592;(statearr_11605[(8)] = inst_11551__$1);
(statearr_11605[(9)] = inst_11549__$1);
(statearr_11605[(10)] = inst_11550__$1);
(statearr_11605[(14)] = inst_11559);
(statearr_11605[(11)] = inst_11552__$1);
return statearr_11605;
})();var statearr_11606_11637 = state_11592__$1;(statearr_11606_11637[(2)] = null);
(statearr_11606_11637[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11593 === (6)))
{var inst_11538 = (state_11592[(13)]);var inst_11543 = f.call(null,inst_11538);var inst_11548 = cljs.core.seq.call(null,inst_11543);var inst_11549 = inst_11548;var inst_11550 = null;var inst_11551 = (0);var inst_11552 = (0);var state_11592__$1 = (function (){var statearr_11607 = state_11592;(statearr_11607[(8)] = inst_11551);
(statearr_11607[(9)] = inst_11549);
(statearr_11607[(10)] = inst_11550);
(statearr_11607[(11)] = inst_11552);
return statearr_11607;
})();var statearr_11608_11638 = state_11592__$1;(statearr_11608_11638[(2)] = null);
(statearr_11608_11638[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11593 === (17)))
{var inst_11563 = (state_11592[(7)]);var inst_11567 = cljs.core.chunk_first.call(null,inst_11563);var inst_11568 = cljs.core.chunk_rest.call(null,inst_11563);var inst_11569 = cljs.core.count.call(null,inst_11567);var inst_11549 = inst_11568;var inst_11550 = inst_11567;var inst_11551 = inst_11569;var inst_11552 = (0);var state_11592__$1 = (function (){var statearr_11609 = state_11592;(statearr_11609[(8)] = inst_11551);
(statearr_11609[(9)] = inst_11549);
(statearr_11609[(10)] = inst_11550);
(statearr_11609[(11)] = inst_11552);
return statearr_11609;
})();var statearr_11610_11639 = state_11592__$1;(statearr_11610_11639[(2)] = null);
(statearr_11610_11639[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11593 === (3)))
{var inst_11590 = (state_11592[(2)]);var state_11592__$1 = state_11592;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11592__$1,inst_11590);
} else
{if((state_val_11593 === (12)))
{var inst_11583 = (state_11592[(2)]);var state_11592__$1 = state_11592;var statearr_11611_11640 = state_11592__$1;(statearr_11611_11640[(2)] = inst_11583);
(statearr_11611_11640[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11593 === (2)))
{var state_11592__$1 = state_11592;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11592__$1,(4),in$);
} else
{if((state_val_11593 === (19)))
{var inst_11578 = (state_11592[(2)]);var state_11592__$1 = state_11592;var statearr_11612_11641 = state_11592__$1;(statearr_11612_11641[(2)] = inst_11578);
(statearr_11612_11641[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11593 === (11)))
{var inst_11549 = (state_11592[(9)]);var inst_11563 = (state_11592[(7)]);var inst_11563__$1 = cljs.core.seq.call(null,inst_11549);var state_11592__$1 = (function (){var statearr_11613 = state_11592;(statearr_11613[(7)] = inst_11563__$1);
return statearr_11613;
})();if(inst_11563__$1)
{var statearr_11614_11642 = state_11592__$1;(statearr_11614_11642[(1)] = (14));
} else
{var statearr_11615_11643 = state_11592__$1;(statearr_11615_11643[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11593 === (9)))
{var inst_11585 = (state_11592[(2)]);var state_11592__$1 = (function (){var statearr_11616 = state_11592;(statearr_11616[(15)] = inst_11585);
return statearr_11616;
})();var statearr_11617_11644 = state_11592__$1;(statearr_11617_11644[(2)] = null);
(statearr_11617_11644[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11593 === (5)))
{var inst_11541 = cljs.core.async.close_BANG_.call(null,out);var state_11592__$1 = state_11592;var statearr_11618_11645 = state_11592__$1;(statearr_11618_11645[(2)] = inst_11541);
(statearr_11618_11645[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11593 === (14)))
{var inst_11563 = (state_11592[(7)]);var inst_11565 = cljs.core.chunked_seq_QMARK_.call(null,inst_11563);var state_11592__$1 = state_11592;if(inst_11565)
{var statearr_11619_11646 = state_11592__$1;(statearr_11619_11646[(1)] = (17));
} else
{var statearr_11620_11647 = state_11592__$1;(statearr_11620_11647[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11593 === (16)))
{var inst_11581 = (state_11592[(2)]);var state_11592__$1 = state_11592;var statearr_11621_11648 = state_11592__$1;(statearr_11621_11648[(2)] = inst_11581);
(statearr_11621_11648[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11593 === (10)))
{var inst_11550 = (state_11592[(10)]);var inst_11552 = (state_11592[(11)]);var inst_11557 = cljs.core._nth.call(null,inst_11550,inst_11552);var state_11592__$1 = state_11592;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11592__$1,(13),out,inst_11557);
} else
{if((state_val_11593 === (18)))
{var inst_11563 = (state_11592[(7)]);var inst_11572 = cljs.core.first.call(null,inst_11563);var state_11592__$1 = state_11592;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11592__$1,(20),out,inst_11572);
} else
{if((state_val_11593 === (8)))
{var inst_11551 = (state_11592[(8)]);var inst_11552 = (state_11592[(11)]);var inst_11554 = (inst_11552 < inst_11551);var inst_11555 = inst_11554;var state_11592__$1 = state_11592;if(cljs.core.truth_(inst_11555))
{var statearr_11622_11649 = state_11592__$1;(statearr_11622_11649[(1)] = (10));
} else
{var statearr_11623_11650 = state_11592__$1;(statearr_11623_11650[(1)] = (11));
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
var state_machine__6353__auto____0 = (function (){var statearr_11627 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11627[(0)] = state_machine__6353__auto__);
(statearr_11627[(1)] = (1));
return statearr_11627;
});
var state_machine__6353__auto____1 = (function (state_11592){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_11592);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e11628){if((e11628 instanceof Object))
{var ex__6356__auto__ = e11628;var statearr_11629_11651 = state_11592;(statearr_11629_11651[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11592);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11628;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11652 = state_11592;
state_11592 = G__11652;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_11592){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_11592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto__))
})();var state__6369__auto__ = (function (){var statearr_11630 = f__6368__auto__.call(null);(statearr_11630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto__);
return statearr_11630;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6367__auto___11733 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto___11733){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto___11733){
return (function (state_11712){var state_val_11713 = (state_11712[(1)]);if((state_val_11713 === (7)))
{var inst_11708 = (state_11712[(2)]);var state_11712__$1 = state_11712;var statearr_11714_11734 = state_11712__$1;(statearr_11714_11734[(2)] = inst_11708);
(statearr_11714_11734[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11713 === (1)))
{var state_11712__$1 = state_11712;var statearr_11715_11735 = state_11712__$1;(statearr_11715_11735[(2)] = null);
(statearr_11715_11735[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11713 === (4)))
{var inst_11695 = (state_11712[(7)]);var inst_11695__$1 = (state_11712[(2)]);var inst_11696 = (inst_11695__$1 == null);var state_11712__$1 = (function (){var statearr_11716 = state_11712;(statearr_11716[(7)] = inst_11695__$1);
return statearr_11716;
})();if(cljs.core.truth_(inst_11696))
{var statearr_11717_11736 = state_11712__$1;(statearr_11717_11736[(1)] = (5));
} else
{var statearr_11718_11737 = state_11712__$1;(statearr_11718_11737[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11713 === (6)))
{var inst_11695 = (state_11712[(7)]);var state_11712__$1 = state_11712;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11712__$1,(11),to,inst_11695);
} else
{if((state_val_11713 === (3)))
{var inst_11710 = (state_11712[(2)]);var state_11712__$1 = state_11712;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11712__$1,inst_11710);
} else
{if((state_val_11713 === (2)))
{var state_11712__$1 = state_11712;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11712__$1,(4),from);
} else
{if((state_val_11713 === (11)))
{var inst_11705 = (state_11712[(2)]);var state_11712__$1 = (function (){var statearr_11719 = state_11712;(statearr_11719[(8)] = inst_11705);
return statearr_11719;
})();var statearr_11720_11738 = state_11712__$1;(statearr_11720_11738[(2)] = null);
(statearr_11720_11738[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11713 === (9)))
{var state_11712__$1 = state_11712;var statearr_11721_11739 = state_11712__$1;(statearr_11721_11739[(2)] = null);
(statearr_11721_11739[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11713 === (5)))
{var state_11712__$1 = state_11712;if(cljs.core.truth_(close_QMARK_))
{var statearr_11722_11740 = state_11712__$1;(statearr_11722_11740[(1)] = (8));
} else
{var statearr_11723_11741 = state_11712__$1;(statearr_11723_11741[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11713 === (10)))
{var inst_11702 = (state_11712[(2)]);var state_11712__$1 = state_11712;var statearr_11724_11742 = state_11712__$1;(statearr_11724_11742[(2)] = inst_11702);
(statearr_11724_11742[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11713 === (8)))
{var inst_11699 = cljs.core.async.close_BANG_.call(null,to);var state_11712__$1 = state_11712;var statearr_11725_11743 = state_11712__$1;(statearr_11725_11743[(2)] = inst_11699);
(statearr_11725_11743[(1)] = (10));
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
});})(c__6367__auto___11733))
;return ((function (switch__6352__auto__,c__6367__auto___11733){
return (function() {
var state_machine__6353__auto__ = null;
var state_machine__6353__auto____0 = (function (){var statearr_11729 = [null,null,null,null,null,null,null,null,null];(statearr_11729[(0)] = state_machine__6353__auto__);
(statearr_11729[(1)] = (1));
return statearr_11729;
});
var state_machine__6353__auto____1 = (function (state_11712){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_11712);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e11730){if((e11730 instanceof Object))
{var ex__6356__auto__ = e11730;var statearr_11731_11744 = state_11712;(statearr_11731_11744[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11712);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11730;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11745 = state_11712;
state_11712 = G__11745;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_11712){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_11712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto___11733))
})();var state__6369__auto__ = (function (){var statearr_11732 = f__6368__auto__.call(null);(statearr_11732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto___11733);
return statearr_11732;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto___11733))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6367__auto___11832 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto___11832,tc,fc){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto___11832,tc,fc){
return (function (state_11810){var state_val_11811 = (state_11810[(1)]);if((state_val_11811 === (7)))
{var inst_11806 = (state_11810[(2)]);var state_11810__$1 = state_11810;var statearr_11812_11833 = state_11810__$1;(statearr_11812_11833[(2)] = inst_11806);
(statearr_11812_11833[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11811 === (1)))
{var state_11810__$1 = state_11810;var statearr_11813_11834 = state_11810__$1;(statearr_11813_11834[(2)] = null);
(statearr_11813_11834[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11811 === (4)))
{var inst_11791 = (state_11810[(7)]);var inst_11791__$1 = (state_11810[(2)]);var inst_11792 = (inst_11791__$1 == null);var state_11810__$1 = (function (){var statearr_11814 = state_11810;(statearr_11814[(7)] = inst_11791__$1);
return statearr_11814;
})();if(cljs.core.truth_(inst_11792))
{var statearr_11815_11835 = state_11810__$1;(statearr_11815_11835[(1)] = (5));
} else
{var statearr_11816_11836 = state_11810__$1;(statearr_11816_11836[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11811 === (6)))
{var inst_11791 = (state_11810[(7)]);var inst_11797 = p.call(null,inst_11791);var state_11810__$1 = state_11810;if(cljs.core.truth_(inst_11797))
{var statearr_11817_11837 = state_11810__$1;(statearr_11817_11837[(1)] = (9));
} else
{var statearr_11818_11838 = state_11810__$1;(statearr_11818_11838[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11811 === (3)))
{var inst_11808 = (state_11810[(2)]);var state_11810__$1 = state_11810;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11810__$1,inst_11808);
} else
{if((state_val_11811 === (2)))
{var state_11810__$1 = state_11810;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11810__$1,(4),ch);
} else
{if((state_val_11811 === (11)))
{var inst_11791 = (state_11810[(7)]);var inst_11801 = (state_11810[(2)]);var state_11810__$1 = state_11810;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11810__$1,(8),inst_11801,inst_11791);
} else
{if((state_val_11811 === (9)))
{var state_11810__$1 = state_11810;var statearr_11819_11839 = state_11810__$1;(statearr_11819_11839[(2)] = tc);
(statearr_11819_11839[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11811 === (5)))
{var inst_11794 = cljs.core.async.close_BANG_.call(null,tc);var inst_11795 = cljs.core.async.close_BANG_.call(null,fc);var state_11810__$1 = (function (){var statearr_11820 = state_11810;(statearr_11820[(8)] = inst_11794);
return statearr_11820;
})();var statearr_11821_11840 = state_11810__$1;(statearr_11821_11840[(2)] = inst_11795);
(statearr_11821_11840[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11811 === (10)))
{var state_11810__$1 = state_11810;var statearr_11822_11841 = state_11810__$1;(statearr_11822_11841[(2)] = fc);
(statearr_11822_11841[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11811 === (8)))
{var inst_11803 = (state_11810[(2)]);var state_11810__$1 = (function (){var statearr_11823 = state_11810;(statearr_11823[(9)] = inst_11803);
return statearr_11823;
})();var statearr_11824_11842 = state_11810__$1;(statearr_11824_11842[(2)] = null);
(statearr_11824_11842[(1)] = (2));
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
});})(c__6367__auto___11832,tc,fc))
;return ((function (switch__6352__auto__,c__6367__auto___11832,tc,fc){
return (function() {
var state_machine__6353__auto__ = null;
var state_machine__6353__auto____0 = (function (){var statearr_11828 = [null,null,null,null,null,null,null,null,null,null];(statearr_11828[(0)] = state_machine__6353__auto__);
(statearr_11828[(1)] = (1));
return statearr_11828;
});
var state_machine__6353__auto____1 = (function (state_11810){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_11810);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e11829){if((e11829 instanceof Object))
{var ex__6356__auto__ = e11829;var statearr_11830_11843 = state_11810;(statearr_11830_11843[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11810);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11829;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11844 = state_11810;
state_11810 = G__11844;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_11810){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_11810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto___11832,tc,fc))
})();var state__6369__auto__ = (function (){var statearr_11831 = f__6368__auto__.call(null);(statearr_11831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto___11832);
return statearr_11831;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto___11832,tc,fc))
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
return (function (state_11891){var state_val_11892 = (state_11891[(1)]);if((state_val_11892 === (7)))
{var inst_11887 = (state_11891[(2)]);var state_11891__$1 = state_11891;var statearr_11893_11909 = state_11891__$1;(statearr_11893_11909[(2)] = inst_11887);
(statearr_11893_11909[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11892 === (6)))
{var inst_11877 = (state_11891[(7)]);var inst_11880 = (state_11891[(8)]);var inst_11884 = f.call(null,inst_11877,inst_11880);var inst_11877__$1 = inst_11884;var state_11891__$1 = (function (){var statearr_11894 = state_11891;(statearr_11894[(7)] = inst_11877__$1);
return statearr_11894;
})();var statearr_11895_11910 = state_11891__$1;(statearr_11895_11910[(2)] = null);
(statearr_11895_11910[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11892 === (5)))
{var inst_11877 = (state_11891[(7)]);var state_11891__$1 = state_11891;var statearr_11896_11911 = state_11891__$1;(statearr_11896_11911[(2)] = inst_11877);
(statearr_11896_11911[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11892 === (4)))
{var inst_11880 = (state_11891[(8)]);var inst_11880__$1 = (state_11891[(2)]);var inst_11881 = (inst_11880__$1 == null);var state_11891__$1 = (function (){var statearr_11897 = state_11891;(statearr_11897[(8)] = inst_11880__$1);
return statearr_11897;
})();if(cljs.core.truth_(inst_11881))
{var statearr_11898_11912 = state_11891__$1;(statearr_11898_11912[(1)] = (5));
} else
{var statearr_11899_11913 = state_11891__$1;(statearr_11899_11913[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11892 === (3)))
{var inst_11889 = (state_11891[(2)]);var state_11891__$1 = state_11891;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11891__$1,inst_11889);
} else
{if((state_val_11892 === (2)))
{var state_11891__$1 = state_11891;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11891__$1,(4),ch);
} else
{if((state_val_11892 === (1)))
{var inst_11877 = init;var state_11891__$1 = (function (){var statearr_11900 = state_11891;(statearr_11900[(7)] = inst_11877);
return statearr_11900;
})();var statearr_11901_11914 = state_11891__$1;(statearr_11901_11914[(2)] = null);
(statearr_11901_11914[(1)] = (2));
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
var state_machine__6353__auto____0 = (function (){var statearr_11905 = [null,null,null,null,null,null,null,null,null];(statearr_11905[(0)] = state_machine__6353__auto__);
(statearr_11905[(1)] = (1));
return statearr_11905;
});
var state_machine__6353__auto____1 = (function (state_11891){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_11891);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e11906){if((e11906 instanceof Object))
{var ex__6356__auto__ = e11906;var statearr_11907_11915 = state_11891;(statearr_11907_11915[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11891);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11906;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11916 = state_11891;
state_11891 = G__11916;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_11891){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_11891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto__))
})();var state__6369__auto__ = (function (){var statearr_11908 = f__6368__auto__.call(null);(statearr_11908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto__);
return statearr_11908;
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
return (function (state_11978){var state_val_11979 = (state_11978[(1)]);if((state_val_11979 === (7)))
{var inst_11959 = (state_11978[(7)]);var inst_11964 = (state_11978[(2)]);var inst_11965 = cljs.core.next.call(null,inst_11959);var inst_11959__$1 = inst_11965;var state_11978__$1 = (function (){var statearr_11980 = state_11978;(statearr_11980[(8)] = inst_11964);
(statearr_11980[(7)] = inst_11959__$1);
return statearr_11980;
})();var statearr_11981_11999 = state_11978__$1;(statearr_11981_11999[(2)] = null);
(statearr_11981_11999[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11979 === (1)))
{var inst_11958 = cljs.core.seq.call(null,coll);var inst_11959 = inst_11958;var state_11978__$1 = (function (){var statearr_11982 = state_11978;(statearr_11982[(7)] = inst_11959);
return statearr_11982;
})();var statearr_11983_12000 = state_11978__$1;(statearr_11983_12000[(2)] = null);
(statearr_11983_12000[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11979 === (4)))
{var inst_11959 = (state_11978[(7)]);var inst_11962 = cljs.core.first.call(null,inst_11959);var state_11978__$1 = state_11978;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11978__$1,(7),ch,inst_11962);
} else
{if((state_val_11979 === (6)))
{var inst_11974 = (state_11978[(2)]);var state_11978__$1 = state_11978;var statearr_11984_12001 = state_11978__$1;(statearr_11984_12001[(2)] = inst_11974);
(statearr_11984_12001[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11979 === (3)))
{var inst_11976 = (state_11978[(2)]);var state_11978__$1 = state_11978;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11978__$1,inst_11976);
} else
{if((state_val_11979 === (2)))
{var inst_11959 = (state_11978[(7)]);var state_11978__$1 = state_11978;if(cljs.core.truth_(inst_11959))
{var statearr_11985_12002 = state_11978__$1;(statearr_11985_12002[(1)] = (4));
} else
{var statearr_11986_12003 = state_11978__$1;(statearr_11986_12003[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11979 === (9)))
{var state_11978__$1 = state_11978;var statearr_11987_12004 = state_11978__$1;(statearr_11987_12004[(2)] = null);
(statearr_11987_12004[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11979 === (5)))
{var state_11978__$1 = state_11978;if(cljs.core.truth_(close_QMARK_))
{var statearr_11988_12005 = state_11978__$1;(statearr_11988_12005[(1)] = (8));
} else
{var statearr_11989_12006 = state_11978__$1;(statearr_11989_12006[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11979 === (10)))
{var inst_11972 = (state_11978[(2)]);var state_11978__$1 = state_11978;var statearr_11990_12007 = state_11978__$1;(statearr_11990_12007[(2)] = inst_11972);
(statearr_11990_12007[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11979 === (8)))
{var inst_11969 = cljs.core.async.close_BANG_.call(null,ch);var state_11978__$1 = state_11978;var statearr_11991_12008 = state_11978__$1;(statearr_11991_12008[(2)] = inst_11969);
(statearr_11991_12008[(1)] = (10));
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
var state_machine__6353__auto____0 = (function (){var statearr_11995 = [null,null,null,null,null,null,null,null,null];(statearr_11995[(0)] = state_machine__6353__auto__);
(statearr_11995[(1)] = (1));
return statearr_11995;
});
var state_machine__6353__auto____1 = (function (state_11978){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_11978);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e11996){if((e11996 instanceof Object))
{var ex__6356__auto__ = e11996;var statearr_11997_12009 = state_11978;(statearr_11997_12009[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11978);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11996;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12010 = state_11978;
state_11978 = G__12010;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_11978){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_11978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto__))
})();var state__6369__auto__ = (function (){var statearr_11998 = f__6368__auto__.call(null);(statearr_11998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto__);
return statearr_11998;
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
cljs.core.async.Mux = (function (){var obj12012 = {};return obj12012;
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
cljs.core.async.Mult = (function (){var obj12014 = {};return obj12014;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12238 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12238 = (function (cs,ch,mult,meta12239){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12239 = meta12239;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12238.cljs$lang$type = true;
cljs.core.async.t12238.cljs$lang$ctorStr = "cljs.core.async/t12238";
cljs.core.async.t12238.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t12238");
});})(cs))
;
cljs.core.async.t12238.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12238.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12238.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12238.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12238.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12238.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12238.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12240){var self__ = this;
var _12240__$1 = this;return self__.meta12239;
});})(cs))
;
cljs.core.async.t12238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12240,meta12239__$1){var self__ = this;
var _12240__$1 = this;return (new cljs.core.async.t12238(self__.cs,self__.ch,self__.mult,meta12239__$1));
});})(cs))
;
cljs.core.async.__GT_t12238 = ((function (cs){
return (function __GT_t12238(cs__$1,ch__$1,mult__$1,meta12239){return (new cljs.core.async.t12238(cs__$1,ch__$1,mult__$1,meta12239));
});})(cs))
;
}
return (new cljs.core.async.t12238(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6367__auto___12461 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto___12461,cs,m,dchan,dctr,done){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto___12461,cs,m,dchan,dctr,done){
return (function (state_12375){var state_val_12376 = (state_12375[(1)]);if((state_val_12376 === (7)))
{var inst_12371 = (state_12375[(2)]);var state_12375__$1 = state_12375;var statearr_12377_12462 = state_12375__$1;(statearr_12377_12462[(2)] = inst_12371);
(statearr_12377_12462[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12376 === (20)))
{var inst_12272 = (state_12375[(7)]);var inst_12282 = cljs.core.first.call(null,inst_12272);var inst_12283 = cljs.core.nth.call(null,inst_12282,(0),null);var inst_12284 = cljs.core.nth.call(null,inst_12282,(1),null);var state_12375__$1 = (function (){var statearr_12378 = state_12375;(statearr_12378[(8)] = inst_12283);
return statearr_12378;
})();if(cljs.core.truth_(inst_12284))
{var statearr_12379_12463 = state_12375__$1;(statearr_12379_12463[(1)] = (22));
} else
{var statearr_12380_12464 = state_12375__$1;(statearr_12380_12464[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12376 === (27)))
{var inst_12312 = (state_12375[(9)]);var inst_12314 = (state_12375[(10)]);var inst_12319 = cljs.core._nth.call(null,inst_12312,inst_12314);var state_12375__$1 = (function (){var statearr_12381 = state_12375;(statearr_12381[(11)] = inst_12319);
return statearr_12381;
})();var statearr_12382_12465 = state_12375__$1;(statearr_12382_12465[(2)] = null);
(statearr_12382_12465[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12376 === (1)))
{var state_12375__$1 = state_12375;var statearr_12383_12466 = state_12375__$1;(statearr_12383_12466[(2)] = null);
(statearr_12383_12466[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12376 === (24)))
{var inst_12272 = (state_12375[(7)]);var inst_12289 = (state_12375[(2)]);var inst_12290 = cljs.core.next.call(null,inst_12272);var inst_12252 = inst_12290;var inst_12253 = null;var inst_12254 = (0);var inst_12255 = (0);var state_12375__$1 = (function (){var statearr_12384 = state_12375;(statearr_12384[(12)] = inst_12289);
(statearr_12384[(13)] = inst_12253);
(statearr_12384[(14)] = inst_12255);
(statearr_12384[(15)] = inst_12254);
(statearr_12384[(16)] = inst_12252);
return statearr_12384;
})();var statearr_12385_12467 = state_12375__$1;(statearr_12385_12467[(2)] = null);
(statearr_12385_12467[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12376 === (39)))
{var inst_12332 = (state_12375[(17)]);var inst_12350 = (state_12375[(2)]);var inst_12351 = cljs.core.next.call(null,inst_12332);var inst_12311 = inst_12351;var inst_12312 = null;var inst_12313 = (0);var inst_12314 = (0);var state_12375__$1 = (function (){var statearr_12389 = state_12375;(statearr_12389[(9)] = inst_12312);
(statearr_12389[(18)] = inst_12311);
(statearr_12389[(10)] = inst_12314);
(statearr_12389[(19)] = inst_12350);
(statearr_12389[(20)] = inst_12313);
return statearr_12389;
})();var statearr_12390_12468 = state_12375__$1;(statearr_12390_12468[(2)] = null);
(statearr_12390_12468[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12376 === (4)))
{var inst_12243 = (state_12375[(21)]);var inst_12243__$1 = (state_12375[(2)]);var inst_12244 = (inst_12243__$1 == null);var state_12375__$1 = (function (){var statearr_12391 = state_12375;(statearr_12391[(21)] = inst_12243__$1);
return statearr_12391;
})();if(cljs.core.truth_(inst_12244))
{var statearr_12392_12469 = state_12375__$1;(statearr_12392_12469[(1)] = (5));
} else
{var statearr_12393_12470 = state_12375__$1;(statearr_12393_12470[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12376 === (15)))
{var inst_12253 = (state_12375[(13)]);var inst_12255 = (state_12375[(14)]);var inst_12254 = (state_12375[(15)]);var inst_12252 = (state_12375[(16)]);var inst_12268 = (state_12375[(2)]);var inst_12269 = (inst_12255 + (1));var tmp12386 = inst_12253;var tmp12387 = inst_12254;var tmp12388 = inst_12252;var inst_12252__$1 = tmp12388;var inst_12253__$1 = tmp12386;var inst_12254__$1 = tmp12387;var inst_12255__$1 = inst_12269;var state_12375__$1 = (function (){var statearr_12394 = state_12375;(statearr_12394[(22)] = inst_12268);
(statearr_12394[(13)] = inst_12253__$1);
(statearr_12394[(14)] = inst_12255__$1);
(statearr_12394[(15)] = inst_12254__$1);
(statearr_12394[(16)] = inst_12252__$1);
return statearr_12394;
})();var statearr_12395_12471 = state_12375__$1;(statearr_12395_12471[(2)] = null);
(statearr_12395_12471[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12376 === (21)))
{var inst_12293 = (state_12375[(2)]);var state_12375__$1 = state_12375;var statearr_12396_12472 = state_12375__$1;(statearr_12396_12472[(2)] = inst_12293);
(statearr_12396_12472[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12376 === (31)))
{var inst_12319 = (state_12375[(11)]);var inst_12320 = (state_12375[(2)]);var inst_12321 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12322 = cljs.core.async.untap_STAR_.call(null,m,inst_12319);var state_12375__$1 = (function (){var statearr_12397 = state_12375;(statearr_12397[(23)] = inst_12320);
(statearr_12397[(24)] = inst_12321);
return statearr_12397;
})();var statearr_12398_12473 = state_12375__$1;(statearr_12398_12473[(2)] = inst_12322);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12375__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12376 === (32)))
{var inst_12319 = (state_12375[(11)]);var inst_12243 = (state_12375[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12375,(31),Object,null,(30));var inst_12326 = cljs.core.async.put_BANG_.call(null,inst_12319,inst_12243,done);var state_12375__$1 = state_12375;var statearr_12399_12474 = state_12375__$1;(statearr_12399_12474[(2)] = inst_12326);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12375__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12376 === (40)))
{var inst_12341 = (state_12375[(25)]);var inst_12342 = (state_12375[(2)]);var inst_12343 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12344 = cljs.core.async.untap_STAR_.call(null,m,inst_12341);var state_12375__$1 = (function (){var statearr_12400 = state_12375;(statearr_12400[(26)] = inst_12343);
(statearr_12400[(27)] = inst_12342);
return statearr_12400;
})();var statearr_12401_12475 = state_12375__$1;(statearr_12401_12475[(2)] = inst_12344);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12375__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12376 === (33)))
{var inst_12332 = (state_12375[(17)]);var inst_12334 = cljs.core.chunked_seq_QMARK_.call(null,inst_12332);var state_12375__$1 = state_12375;if(inst_12334)
{var statearr_12402_12476 = state_12375__$1;(statearr_12402_12476[(1)] = (36));
} else
{var statearr_12403_12477 = state_12375__$1;(statearr_12403_12477[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12376 === (13)))
{var inst_12262 = (state_12375[(28)]);var inst_12265 = cljs.core.async.close_BANG_.call(null,inst_12262);var state_12375__$1 = state_12375;var statearr_12404_12478 = state_12375__$1;(statearr_12404_12478[(2)] = inst_12265);
(statearr_12404_12478[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12376 === (22)))
{var inst_12283 = (state_12375[(8)]);var inst_12286 = cljs.core.async.close_BANG_.call(null,inst_12283);var state_12375__$1 = state_12375;var statearr_12405_12479 = state_12375__$1;(statearr_12405_12479[(2)] = inst_12286);
(statearr_12405_12479[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12376 === (36)))
{var inst_12332 = (state_12375[(17)]);var inst_12336 = cljs.core.chunk_first.call(null,inst_12332);var inst_12337 = cljs.core.chunk_rest.call(null,inst_12332);var inst_12338 = cljs.core.count.call(null,inst_12336);var inst_12311 = inst_12337;var inst_12312 = inst_12336;var inst_12313 = inst_12338;var inst_12314 = (0);var state_12375__$1 = (function (){var statearr_12406 = state_12375;(statearr_12406[(9)] = inst_12312);
(statearr_12406[(18)] = inst_12311);
(statearr_12406[(10)] = inst_12314);
(statearr_12406[(20)] = inst_12313);
return statearr_12406;
})();var statearr_12407_12480 = state_12375__$1;(statearr_12407_12480[(2)] = null);
(statearr_12407_12480[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12376 === (41)))
{var inst_12243 = (state_12375[(21)]);var inst_12341 = (state_12375[(25)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12375,(40),Object,null,(39));var inst_12348 = cljs.core.async.put_BANG_.call(null,inst_12341,inst_12243,done);var state_12375__$1 = state_12375;var statearr_12408_12481 = state_12375__$1;(statearr_12408_12481[(2)] = inst_12348);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12375__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12376 === (43)))
{var state_12375__$1 = state_12375;var statearr_12409_12482 = state_12375__$1;(statearr_12409_12482[(2)] = null);
(statearr_12409_12482[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12376 === (29)))
{var inst_12359 = (state_12375[(2)]);var state_12375__$1 = state_12375;var statearr_12410_12483 = state_12375__$1;(statearr_12410_12483[(2)] = inst_12359);
(statearr_12410_12483[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12376 === (44)))
{var inst_12368 = (state_12375[(2)]);var state_12375__$1 = (function (){var statearr_12411 = state_12375;(statearr_12411[(29)] = inst_12368);
return statearr_12411;
})();var statearr_12412_12484 = state_12375__$1;(statearr_12412_12484[(2)] = null);
(statearr_12412_12484[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12376 === (6)))
{var inst_12303 = (state_12375[(30)]);var inst_12302 = cljs.core.deref.call(null,cs);var inst_12303__$1 = cljs.core.keys.call(null,inst_12302);var inst_12304 = cljs.core.count.call(null,inst_12303__$1);var inst_12305 = cljs.core.reset_BANG_.call(null,dctr,inst_12304);var inst_12310 = cljs.core.seq.call(null,inst_12303__$1);var inst_12311 = inst_12310;var inst_12312 = null;var inst_12313 = (0);var inst_12314 = (0);var state_12375__$1 = (function (){var statearr_12413 = state_12375;(statearr_12413[(9)] = inst_12312);
(statearr_12413[(31)] = inst_12305);
(statearr_12413[(18)] = inst_12311);
(statearr_12413[(10)] = inst_12314);
(statearr_12413[(20)] = inst_12313);
(statearr_12413[(30)] = inst_12303__$1);
return statearr_12413;
})();var statearr_12414_12485 = state_12375__$1;(statearr_12414_12485[(2)] = null);
(statearr_12414_12485[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12376 === (28)))
{var inst_12311 = (state_12375[(18)]);var inst_12332 = (state_12375[(17)]);var inst_12332__$1 = cljs.core.seq.call(null,inst_12311);var state_12375__$1 = (function (){var statearr_12415 = state_12375;(statearr_12415[(17)] = inst_12332__$1);
return statearr_12415;
})();if(inst_12332__$1)
{var statearr_12416_12486 = state_12375__$1;(statearr_12416_12486[(1)] = (33));
} else
{var statearr_12417_12487 = state_12375__$1;(statearr_12417_12487[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12376 === (25)))
{var inst_12314 = (state_12375[(10)]);var inst_12313 = (state_12375[(20)]);var inst_12316 = (inst_12314 < inst_12313);var inst_12317 = inst_12316;var state_12375__$1 = state_12375;if(cljs.core.truth_(inst_12317))
{var statearr_12418_12488 = state_12375__$1;(statearr_12418_12488[(1)] = (27));
} else
{var statearr_12419_12489 = state_12375__$1;(statearr_12419_12489[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12376 === (34)))
{var state_12375__$1 = state_12375;var statearr_12420_12490 = state_12375__$1;(statearr_12420_12490[(2)] = null);
(statearr_12420_12490[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12376 === (17)))
{var state_12375__$1 = state_12375;var statearr_12421_12491 = state_12375__$1;(statearr_12421_12491[(2)] = null);
(statearr_12421_12491[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12376 === (3)))
{var inst_12373 = (state_12375[(2)]);var state_12375__$1 = state_12375;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12375__$1,inst_12373);
} else
{if((state_val_12376 === (12)))
{var inst_12298 = (state_12375[(2)]);var state_12375__$1 = state_12375;var statearr_12422_12492 = state_12375__$1;(statearr_12422_12492[(2)] = inst_12298);
(statearr_12422_12492[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12376 === (2)))
{var state_12375__$1 = state_12375;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12375__$1,(4),ch);
} else
{if((state_val_12376 === (23)))
{var state_12375__$1 = state_12375;var statearr_12423_12493 = state_12375__$1;(statearr_12423_12493[(2)] = null);
(statearr_12423_12493[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12376 === (35)))
{var inst_12357 = (state_12375[(2)]);var state_12375__$1 = state_12375;var statearr_12424_12494 = state_12375__$1;(statearr_12424_12494[(2)] = inst_12357);
(statearr_12424_12494[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12376 === (19)))
{var inst_12272 = (state_12375[(7)]);var inst_12276 = cljs.core.chunk_first.call(null,inst_12272);var inst_12277 = cljs.core.chunk_rest.call(null,inst_12272);var inst_12278 = cljs.core.count.call(null,inst_12276);var inst_12252 = inst_12277;var inst_12253 = inst_12276;var inst_12254 = inst_12278;var inst_12255 = (0);var state_12375__$1 = (function (){var statearr_12425 = state_12375;(statearr_12425[(13)] = inst_12253);
(statearr_12425[(14)] = inst_12255);
(statearr_12425[(15)] = inst_12254);
(statearr_12425[(16)] = inst_12252);
return statearr_12425;
})();var statearr_12426_12495 = state_12375__$1;(statearr_12426_12495[(2)] = null);
(statearr_12426_12495[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12376 === (11)))
{var inst_12272 = (state_12375[(7)]);var inst_12252 = (state_12375[(16)]);var inst_12272__$1 = cljs.core.seq.call(null,inst_12252);var state_12375__$1 = (function (){var statearr_12427 = state_12375;(statearr_12427[(7)] = inst_12272__$1);
return statearr_12427;
})();if(inst_12272__$1)
{var statearr_12428_12496 = state_12375__$1;(statearr_12428_12496[(1)] = (16));
} else
{var statearr_12429_12497 = state_12375__$1;(statearr_12429_12497[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12376 === (9)))
{var inst_12300 = (state_12375[(2)]);var state_12375__$1 = state_12375;var statearr_12430_12498 = state_12375__$1;(statearr_12430_12498[(2)] = inst_12300);
(statearr_12430_12498[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12376 === (5)))
{var inst_12250 = cljs.core.deref.call(null,cs);var inst_12251 = cljs.core.seq.call(null,inst_12250);var inst_12252 = inst_12251;var inst_12253 = null;var inst_12254 = (0);var inst_12255 = (0);var state_12375__$1 = (function (){var statearr_12431 = state_12375;(statearr_12431[(13)] = inst_12253);
(statearr_12431[(14)] = inst_12255);
(statearr_12431[(15)] = inst_12254);
(statearr_12431[(16)] = inst_12252);
return statearr_12431;
})();var statearr_12432_12499 = state_12375__$1;(statearr_12432_12499[(2)] = null);
(statearr_12432_12499[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12376 === (14)))
{var state_12375__$1 = state_12375;var statearr_12433_12500 = state_12375__$1;(statearr_12433_12500[(2)] = null);
(statearr_12433_12500[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12376 === (45)))
{var inst_12365 = (state_12375[(2)]);var state_12375__$1 = state_12375;var statearr_12434_12501 = state_12375__$1;(statearr_12434_12501[(2)] = inst_12365);
(statearr_12434_12501[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12376 === (26)))
{var inst_12303 = (state_12375[(30)]);var inst_12361 = (state_12375[(2)]);var inst_12362 = cljs.core.seq.call(null,inst_12303);var state_12375__$1 = (function (){var statearr_12435 = state_12375;(statearr_12435[(32)] = inst_12361);
return statearr_12435;
})();if(inst_12362)
{var statearr_12436_12502 = state_12375__$1;(statearr_12436_12502[(1)] = (42));
} else
{var statearr_12437_12503 = state_12375__$1;(statearr_12437_12503[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12376 === (16)))
{var inst_12272 = (state_12375[(7)]);var inst_12274 = cljs.core.chunked_seq_QMARK_.call(null,inst_12272);var state_12375__$1 = state_12375;if(inst_12274)
{var statearr_12441_12504 = state_12375__$1;(statearr_12441_12504[(1)] = (19));
} else
{var statearr_12442_12505 = state_12375__$1;(statearr_12442_12505[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12376 === (38)))
{var inst_12354 = (state_12375[(2)]);var state_12375__$1 = state_12375;var statearr_12443_12506 = state_12375__$1;(statearr_12443_12506[(2)] = inst_12354);
(statearr_12443_12506[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12376 === (30)))
{var inst_12312 = (state_12375[(9)]);var inst_12311 = (state_12375[(18)]);var inst_12314 = (state_12375[(10)]);var inst_12313 = (state_12375[(20)]);var inst_12328 = (state_12375[(2)]);var inst_12329 = (inst_12314 + (1));var tmp12438 = inst_12312;var tmp12439 = inst_12311;var tmp12440 = inst_12313;var inst_12311__$1 = tmp12439;var inst_12312__$1 = tmp12438;var inst_12313__$1 = tmp12440;var inst_12314__$1 = inst_12329;var state_12375__$1 = (function (){var statearr_12444 = state_12375;(statearr_12444[(9)] = inst_12312__$1);
(statearr_12444[(33)] = inst_12328);
(statearr_12444[(18)] = inst_12311__$1);
(statearr_12444[(10)] = inst_12314__$1);
(statearr_12444[(20)] = inst_12313__$1);
return statearr_12444;
})();var statearr_12445_12507 = state_12375__$1;(statearr_12445_12507[(2)] = null);
(statearr_12445_12507[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12376 === (10)))
{var inst_12253 = (state_12375[(13)]);var inst_12255 = (state_12375[(14)]);var inst_12261 = cljs.core._nth.call(null,inst_12253,inst_12255);var inst_12262 = cljs.core.nth.call(null,inst_12261,(0),null);var inst_12263 = cljs.core.nth.call(null,inst_12261,(1),null);var state_12375__$1 = (function (){var statearr_12446 = state_12375;(statearr_12446[(28)] = inst_12262);
return statearr_12446;
})();if(cljs.core.truth_(inst_12263))
{var statearr_12447_12508 = state_12375__$1;(statearr_12447_12508[(1)] = (13));
} else
{var statearr_12448_12509 = state_12375__$1;(statearr_12448_12509[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12376 === (18)))
{var inst_12296 = (state_12375[(2)]);var state_12375__$1 = state_12375;var statearr_12449_12510 = state_12375__$1;(statearr_12449_12510[(2)] = inst_12296);
(statearr_12449_12510[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12376 === (42)))
{var state_12375__$1 = state_12375;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12375__$1,(45),dchan);
} else
{if((state_val_12376 === (37)))
{var inst_12332 = (state_12375[(17)]);var inst_12341 = cljs.core.first.call(null,inst_12332);var state_12375__$1 = (function (){var statearr_12450 = state_12375;(statearr_12450[(25)] = inst_12341);
return statearr_12450;
})();var statearr_12451_12511 = state_12375__$1;(statearr_12451_12511[(2)] = null);
(statearr_12451_12511[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12376 === (8)))
{var inst_12255 = (state_12375[(14)]);var inst_12254 = (state_12375[(15)]);var inst_12257 = (inst_12255 < inst_12254);var inst_12258 = inst_12257;var state_12375__$1 = state_12375;if(cljs.core.truth_(inst_12258))
{var statearr_12452_12512 = state_12375__$1;(statearr_12452_12512[(1)] = (10));
} else
{var statearr_12453_12513 = state_12375__$1;(statearr_12453_12513[(1)] = (11));
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
});})(c__6367__auto___12461,cs,m,dchan,dctr,done))
;return ((function (switch__6352__auto__,c__6367__auto___12461,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6353__auto__ = null;
var state_machine__6353__auto____0 = (function (){var statearr_12457 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12457[(0)] = state_machine__6353__auto__);
(statearr_12457[(1)] = (1));
return statearr_12457;
});
var state_machine__6353__auto____1 = (function (state_12375){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_12375);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e12458){if((e12458 instanceof Object))
{var ex__6356__auto__ = e12458;var statearr_12459_12514 = state_12375;(statearr_12459_12514[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12375);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12458;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12515 = state_12375;
state_12375 = G__12515;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_12375){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_12375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto___12461,cs,m,dchan,dctr,done))
})();var state__6369__auto__ = (function (){var statearr_12460 = f__6368__auto__.call(null);(statearr_12460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto___12461);
return statearr_12460;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto___12461,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj12517 = {};return obj12517;
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
;var m = (function (){if(typeof cljs.core.async.t12627 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12627 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12628){
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
this.meta12628 = meta12628;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12627.cljs$lang$type = true;
cljs.core.async.t12627.cljs$lang$ctorStr = "cljs.core.async/t12627";
cljs.core.async.t12627.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t12627");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12627.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12627.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12627.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12627.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12627.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12627.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12627.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12627.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12627.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12629){var self__ = this;
var _12629__$1 = this;return self__.meta12628;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12627.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12629,meta12628__$1){var self__ = this;
var _12629__$1 = this;return (new cljs.core.async.t12627(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12628__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12627 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12627(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12628){return (new cljs.core.async.t12627(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12628));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12627(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6367__auto___12736 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto___12736,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto___12736,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12694){var state_val_12695 = (state_12694[(1)]);if((state_val_12695 === (7)))
{var inst_12643 = (state_12694[(7)]);var inst_12648 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12643);var state_12694__$1 = state_12694;var statearr_12696_12737 = state_12694__$1;(statearr_12696_12737[(2)] = inst_12648);
(statearr_12696_12737[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12695 === (20)))
{var inst_12658 = (state_12694[(8)]);var state_12694__$1 = state_12694;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12694__$1,(23),out,inst_12658);
} else
{if((state_val_12695 === (1)))
{var inst_12633 = (state_12694[(9)]);var inst_12633__$1 = calc_state.call(null);var inst_12634 = cljs.core.seq_QMARK_.call(null,inst_12633__$1);var state_12694__$1 = (function (){var statearr_12697 = state_12694;(statearr_12697[(9)] = inst_12633__$1);
return statearr_12697;
})();if(inst_12634)
{var statearr_12698_12738 = state_12694__$1;(statearr_12698_12738[(1)] = (2));
} else
{var statearr_12699_12739 = state_12694__$1;(statearr_12699_12739[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12695 === (4)))
{var inst_12633 = (state_12694[(9)]);var inst_12639 = (state_12694[(2)]);var inst_12640 = cljs.core.get.call(null,inst_12639,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12641 = cljs.core.get.call(null,inst_12639,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12642 = cljs.core.get.call(null,inst_12639,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_12643 = inst_12633;var state_12694__$1 = (function (){var statearr_12700 = state_12694;(statearr_12700[(10)] = inst_12642);
(statearr_12700[(7)] = inst_12643);
(statearr_12700[(11)] = inst_12641);
(statearr_12700[(12)] = inst_12640);
return statearr_12700;
})();var statearr_12701_12740 = state_12694__$1;(statearr_12701_12740[(2)] = null);
(statearr_12701_12740[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12695 === (15)))
{var state_12694__$1 = state_12694;var statearr_12702_12741 = state_12694__$1;(statearr_12702_12741[(2)] = null);
(statearr_12702_12741[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12695 === (21)))
{var state_12694__$1 = state_12694;var statearr_12703_12742 = state_12694__$1;(statearr_12703_12742[(2)] = null);
(statearr_12703_12742[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12695 === (13)))
{var inst_12690 = (state_12694[(2)]);var state_12694__$1 = state_12694;var statearr_12704_12743 = state_12694__$1;(statearr_12704_12743[(2)] = inst_12690);
(statearr_12704_12743[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12695 === (22)))
{var inst_12651 = (state_12694[(13)]);var inst_12687 = (state_12694[(2)]);var inst_12643 = inst_12651;var state_12694__$1 = (function (){var statearr_12705 = state_12694;(statearr_12705[(7)] = inst_12643);
(statearr_12705[(14)] = inst_12687);
return statearr_12705;
})();var statearr_12706_12744 = state_12694__$1;(statearr_12706_12744[(2)] = null);
(statearr_12706_12744[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12695 === (6)))
{var inst_12692 = (state_12694[(2)]);var state_12694__$1 = state_12694;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12694__$1,inst_12692);
} else
{if((state_val_12695 === (17)))
{var inst_12673 = (state_12694[(15)]);var state_12694__$1 = state_12694;var statearr_12707_12745 = state_12694__$1;(statearr_12707_12745[(2)] = inst_12673);
(statearr_12707_12745[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12695 === (3)))
{var inst_12633 = (state_12694[(9)]);var state_12694__$1 = state_12694;var statearr_12708_12746 = state_12694__$1;(statearr_12708_12746[(2)] = inst_12633);
(statearr_12708_12746[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12695 === (12)))
{var inst_12654 = (state_12694[(16)]);var inst_12673 = (state_12694[(15)]);var inst_12659 = (state_12694[(17)]);var inst_12673__$1 = inst_12654.call(null,inst_12659);var state_12694__$1 = (function (){var statearr_12709 = state_12694;(statearr_12709[(15)] = inst_12673__$1);
return statearr_12709;
})();if(cljs.core.truth_(inst_12673__$1))
{var statearr_12710_12747 = state_12694__$1;(statearr_12710_12747[(1)] = (17));
} else
{var statearr_12711_12748 = state_12694__$1;(statearr_12711_12748[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12695 === (2)))
{var inst_12633 = (state_12694[(9)]);var inst_12636 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12633);var state_12694__$1 = state_12694;var statearr_12712_12749 = state_12694__$1;(statearr_12712_12749[(2)] = inst_12636);
(statearr_12712_12749[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12695 === (23)))
{var inst_12684 = (state_12694[(2)]);var state_12694__$1 = state_12694;var statearr_12713_12750 = state_12694__$1;(statearr_12713_12750[(2)] = inst_12684);
(statearr_12713_12750[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12695 === (19)))
{var inst_12681 = (state_12694[(2)]);var state_12694__$1 = state_12694;if(cljs.core.truth_(inst_12681))
{var statearr_12714_12751 = state_12694__$1;(statearr_12714_12751[(1)] = (20));
} else
{var statearr_12715_12752 = state_12694__$1;(statearr_12715_12752[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12695 === (11)))
{var inst_12658 = (state_12694[(8)]);var inst_12664 = (inst_12658 == null);var state_12694__$1 = state_12694;if(cljs.core.truth_(inst_12664))
{var statearr_12716_12753 = state_12694__$1;(statearr_12716_12753[(1)] = (14));
} else
{var statearr_12717_12754 = state_12694__$1;(statearr_12717_12754[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12695 === (9)))
{var inst_12651 = (state_12694[(13)]);var inst_12651__$1 = (state_12694[(2)]);var inst_12652 = cljs.core.get.call(null,inst_12651__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12653 = cljs.core.get.call(null,inst_12651__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12654 = cljs.core.get.call(null,inst_12651__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_12694__$1 = (function (){var statearr_12718 = state_12694;(statearr_12718[(16)] = inst_12654);
(statearr_12718[(13)] = inst_12651__$1);
(statearr_12718[(18)] = inst_12653);
return statearr_12718;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12694__$1,(10),inst_12652);
} else
{if((state_val_12695 === (5)))
{var inst_12643 = (state_12694[(7)]);var inst_12646 = cljs.core.seq_QMARK_.call(null,inst_12643);var state_12694__$1 = state_12694;if(inst_12646)
{var statearr_12719_12755 = state_12694__$1;(statearr_12719_12755[(1)] = (7));
} else
{var statearr_12720_12756 = state_12694__$1;(statearr_12720_12756[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12695 === (14)))
{var inst_12659 = (state_12694[(17)]);var inst_12666 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12659);var state_12694__$1 = state_12694;var statearr_12721_12757 = state_12694__$1;(statearr_12721_12757[(2)] = inst_12666);
(statearr_12721_12757[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12695 === (16)))
{var inst_12669 = (state_12694[(2)]);var inst_12670 = calc_state.call(null);var inst_12643 = inst_12670;var state_12694__$1 = (function (){var statearr_12722 = state_12694;(statearr_12722[(7)] = inst_12643);
(statearr_12722[(19)] = inst_12669);
return statearr_12722;
})();var statearr_12723_12758 = state_12694__$1;(statearr_12723_12758[(2)] = null);
(statearr_12723_12758[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12695 === (10)))
{var inst_12658 = (state_12694[(8)]);var inst_12659 = (state_12694[(17)]);var inst_12657 = (state_12694[(2)]);var inst_12658__$1 = cljs.core.nth.call(null,inst_12657,(0),null);var inst_12659__$1 = cljs.core.nth.call(null,inst_12657,(1),null);var inst_12660 = (inst_12658__$1 == null);var inst_12661 = cljs.core._EQ_.call(null,inst_12659__$1,change);var inst_12662 = (inst_12660) || (inst_12661);var state_12694__$1 = (function (){var statearr_12724 = state_12694;(statearr_12724[(8)] = inst_12658__$1);
(statearr_12724[(17)] = inst_12659__$1);
return statearr_12724;
})();if(cljs.core.truth_(inst_12662))
{var statearr_12725_12759 = state_12694__$1;(statearr_12725_12759[(1)] = (11));
} else
{var statearr_12726_12760 = state_12694__$1;(statearr_12726_12760[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12695 === (18)))
{var inst_12654 = (state_12694[(16)]);var inst_12653 = (state_12694[(18)]);var inst_12659 = (state_12694[(17)]);var inst_12676 = cljs.core.empty_QMARK_.call(null,inst_12654);var inst_12677 = inst_12653.call(null,inst_12659);var inst_12678 = cljs.core.not.call(null,inst_12677);var inst_12679 = (inst_12676) && (inst_12678);var state_12694__$1 = state_12694;var statearr_12727_12761 = state_12694__$1;(statearr_12727_12761[(2)] = inst_12679);
(statearr_12727_12761[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12695 === (8)))
{var inst_12643 = (state_12694[(7)]);var state_12694__$1 = state_12694;var statearr_12728_12762 = state_12694__$1;(statearr_12728_12762[(2)] = inst_12643);
(statearr_12728_12762[(1)] = (9));
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
});})(c__6367__auto___12736,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6352__auto__,c__6367__auto___12736,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6353__auto__ = null;
var state_machine__6353__auto____0 = (function (){var statearr_12732 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12732[(0)] = state_machine__6353__auto__);
(statearr_12732[(1)] = (1));
return statearr_12732;
});
var state_machine__6353__auto____1 = (function (state_12694){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_12694);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e12733){if((e12733 instanceof Object))
{var ex__6356__auto__ = e12733;var statearr_12734_12763 = state_12694;(statearr_12734_12763[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12694);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12733;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12764 = state_12694;
state_12694 = G__12764;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_12694){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_12694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto___12736,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6369__auto__ = (function (){var statearr_12735 = f__6368__auto__.call(null);(statearr_12735[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto___12736);
return statearr_12735;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto___12736,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj12766 = {};return obj12766;
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
return (function (p1__12767_SHARP_){if(cljs.core.truth_(p1__12767_SHARP_.call(null,topic)))
{return p1__12767_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12767_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3560__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12892 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12892 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12893){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12893 = meta12893;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12892.cljs$lang$type = true;
cljs.core.async.t12892.cljs$lang$ctorStr = "cljs.core.async/t12892";
cljs.core.async.t12892.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4127__auto__,writer__4128__auto__,opt__4129__auto__){return cljs.core._write.call(null,writer__4128__auto__,"cljs.core.async/t12892");
});})(mults,ensure_mult))
;
cljs.core.async.t12892.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12892.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12892.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12892.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12892.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12892.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12892.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12892.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12894){var self__ = this;
var _12894__$1 = this;return self__.meta12893;
});})(mults,ensure_mult))
;
cljs.core.async.t12892.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12894,meta12893__$1){var self__ = this;
var _12894__$1 = this;return (new cljs.core.async.t12892(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12893__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12892 = ((function (mults,ensure_mult){
return (function __GT_t12892(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12893){return (new cljs.core.async.t12892(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12893));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12892(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6367__auto___13016 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto___13016,mults,ensure_mult,p){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto___13016,mults,ensure_mult,p){
return (function (state_12968){var state_val_12969 = (state_12968[(1)]);if((state_val_12969 === (7)))
{var inst_12964 = (state_12968[(2)]);var state_12968__$1 = state_12968;var statearr_12970_13017 = state_12968__$1;(statearr_12970_13017[(2)] = inst_12964);
(statearr_12970_13017[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12969 === (20)))
{var state_12968__$1 = state_12968;var statearr_12971_13018 = state_12968__$1;(statearr_12971_13018[(2)] = null);
(statearr_12971_13018[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12969 === (1)))
{var state_12968__$1 = state_12968;var statearr_12972_13019 = state_12968__$1;(statearr_12972_13019[(2)] = null);
(statearr_12972_13019[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12969 === (24)))
{var inst_12897 = (state_12968[(7)]);var inst_12947 = (state_12968[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12968,(23),Object,null,(22));var inst_12954 = cljs.core.async.muxch_STAR_.call(null,inst_12947);var state_12968__$1 = state_12968;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12968__$1,(25),inst_12954,inst_12897);
} else
{if((state_val_12969 === (4)))
{var inst_12897 = (state_12968[(7)]);var inst_12897__$1 = (state_12968[(2)]);var inst_12898 = (inst_12897__$1 == null);var state_12968__$1 = (function (){var statearr_12973 = state_12968;(statearr_12973[(7)] = inst_12897__$1);
return statearr_12973;
})();if(cljs.core.truth_(inst_12898))
{var statearr_12974_13020 = state_12968__$1;(statearr_12974_13020[(1)] = (5));
} else
{var statearr_12975_13021 = state_12968__$1;(statearr_12975_13021[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12969 === (15)))
{var inst_12939 = (state_12968[(2)]);var state_12968__$1 = state_12968;var statearr_12976_13022 = state_12968__$1;(statearr_12976_13022[(2)] = inst_12939);
(statearr_12976_13022[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12969 === (21)))
{var inst_12961 = (state_12968[(2)]);var state_12968__$1 = (function (){var statearr_12977 = state_12968;(statearr_12977[(9)] = inst_12961);
return statearr_12977;
})();var statearr_12978_13023 = state_12968__$1;(statearr_12978_13023[(2)] = null);
(statearr_12978_13023[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12969 === (13)))
{var inst_12921 = (state_12968[(10)]);var inst_12923 = cljs.core.chunked_seq_QMARK_.call(null,inst_12921);var state_12968__$1 = state_12968;if(inst_12923)
{var statearr_12979_13024 = state_12968__$1;(statearr_12979_13024[(1)] = (16));
} else
{var statearr_12980_13025 = state_12968__$1;(statearr_12980_13025[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12969 === (22)))
{var inst_12958 = (state_12968[(2)]);var state_12968__$1 = state_12968;var statearr_12981_13026 = state_12968__$1;(statearr_12981_13026[(2)] = inst_12958);
(statearr_12981_13026[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12969 === (6)))
{var inst_12897 = (state_12968[(7)]);var inst_12947 = (state_12968[(8)]);var inst_12945 = (state_12968[(11)]);var inst_12945__$1 = topic_fn.call(null,inst_12897);var inst_12946 = cljs.core.deref.call(null,mults);var inst_12947__$1 = cljs.core.get.call(null,inst_12946,inst_12945__$1);var state_12968__$1 = (function (){var statearr_12982 = state_12968;(statearr_12982[(8)] = inst_12947__$1);
(statearr_12982[(11)] = inst_12945__$1);
return statearr_12982;
})();if(cljs.core.truth_(inst_12947__$1))
{var statearr_12983_13027 = state_12968__$1;(statearr_12983_13027[(1)] = (19));
} else
{var statearr_12984_13028 = state_12968__$1;(statearr_12984_13028[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12969 === (25)))
{var inst_12956 = (state_12968[(2)]);var state_12968__$1 = state_12968;var statearr_12985_13029 = state_12968__$1;(statearr_12985_13029[(2)] = inst_12956);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12968__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12969 === (17)))
{var inst_12921 = (state_12968[(10)]);var inst_12930 = cljs.core.first.call(null,inst_12921);var inst_12931 = cljs.core.async.muxch_STAR_.call(null,inst_12930);var inst_12932 = cljs.core.async.close_BANG_.call(null,inst_12931);var inst_12933 = cljs.core.next.call(null,inst_12921);var inst_12907 = inst_12933;var inst_12908 = null;var inst_12909 = (0);var inst_12910 = (0);var state_12968__$1 = (function (){var statearr_12986 = state_12968;(statearr_12986[(12)] = inst_12910);
(statearr_12986[(13)] = inst_12907);
(statearr_12986[(14)] = inst_12909);
(statearr_12986[(15)] = inst_12932);
(statearr_12986[(16)] = inst_12908);
return statearr_12986;
})();var statearr_12987_13030 = state_12968__$1;(statearr_12987_13030[(2)] = null);
(statearr_12987_13030[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12969 === (3)))
{var inst_12966 = (state_12968[(2)]);var state_12968__$1 = state_12968;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12968__$1,inst_12966);
} else
{if((state_val_12969 === (12)))
{var inst_12941 = (state_12968[(2)]);var state_12968__$1 = state_12968;var statearr_12988_13031 = state_12968__$1;(statearr_12988_13031[(2)] = inst_12941);
(statearr_12988_13031[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12969 === (2)))
{var state_12968__$1 = state_12968;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12968__$1,(4),ch);
} else
{if((state_val_12969 === (23)))
{var inst_12945 = (state_12968[(11)]);var inst_12949 = (state_12968[(2)]);var inst_12950 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12945);var state_12968__$1 = (function (){var statearr_12989 = state_12968;(statearr_12989[(17)] = inst_12949);
return statearr_12989;
})();var statearr_12990_13032 = state_12968__$1;(statearr_12990_13032[(2)] = inst_12950);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12968__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12969 === (19)))
{var state_12968__$1 = state_12968;var statearr_12991_13033 = state_12968__$1;(statearr_12991_13033[(2)] = null);
(statearr_12991_13033[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12969 === (11)))
{var inst_12907 = (state_12968[(13)]);var inst_12921 = (state_12968[(10)]);var inst_12921__$1 = cljs.core.seq.call(null,inst_12907);var state_12968__$1 = (function (){var statearr_12992 = state_12968;(statearr_12992[(10)] = inst_12921__$1);
return statearr_12992;
})();if(inst_12921__$1)
{var statearr_12993_13034 = state_12968__$1;(statearr_12993_13034[(1)] = (13));
} else
{var statearr_12994_13035 = state_12968__$1;(statearr_12994_13035[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12969 === (9)))
{var inst_12943 = (state_12968[(2)]);var state_12968__$1 = state_12968;var statearr_12995_13036 = state_12968__$1;(statearr_12995_13036[(2)] = inst_12943);
(statearr_12995_13036[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12969 === (5)))
{var inst_12904 = cljs.core.deref.call(null,mults);var inst_12905 = cljs.core.vals.call(null,inst_12904);var inst_12906 = cljs.core.seq.call(null,inst_12905);var inst_12907 = inst_12906;var inst_12908 = null;var inst_12909 = (0);var inst_12910 = (0);var state_12968__$1 = (function (){var statearr_12996 = state_12968;(statearr_12996[(12)] = inst_12910);
(statearr_12996[(13)] = inst_12907);
(statearr_12996[(14)] = inst_12909);
(statearr_12996[(16)] = inst_12908);
return statearr_12996;
})();var statearr_12997_13037 = state_12968__$1;(statearr_12997_13037[(2)] = null);
(statearr_12997_13037[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12969 === (14)))
{var state_12968__$1 = state_12968;var statearr_13001_13038 = state_12968__$1;(statearr_13001_13038[(2)] = null);
(statearr_13001_13038[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12969 === (16)))
{var inst_12921 = (state_12968[(10)]);var inst_12925 = cljs.core.chunk_first.call(null,inst_12921);var inst_12926 = cljs.core.chunk_rest.call(null,inst_12921);var inst_12927 = cljs.core.count.call(null,inst_12925);var inst_12907 = inst_12926;var inst_12908 = inst_12925;var inst_12909 = inst_12927;var inst_12910 = (0);var state_12968__$1 = (function (){var statearr_13002 = state_12968;(statearr_13002[(12)] = inst_12910);
(statearr_13002[(13)] = inst_12907);
(statearr_13002[(14)] = inst_12909);
(statearr_13002[(16)] = inst_12908);
return statearr_13002;
})();var statearr_13003_13039 = state_12968__$1;(statearr_13003_13039[(2)] = null);
(statearr_13003_13039[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12969 === (10)))
{var inst_12910 = (state_12968[(12)]);var inst_12907 = (state_12968[(13)]);var inst_12909 = (state_12968[(14)]);var inst_12908 = (state_12968[(16)]);var inst_12915 = cljs.core._nth.call(null,inst_12908,inst_12910);var inst_12916 = cljs.core.async.muxch_STAR_.call(null,inst_12915);var inst_12917 = cljs.core.async.close_BANG_.call(null,inst_12916);var inst_12918 = (inst_12910 + (1));var tmp12998 = inst_12907;var tmp12999 = inst_12909;var tmp13000 = inst_12908;var inst_12907__$1 = tmp12998;var inst_12908__$1 = tmp13000;var inst_12909__$1 = tmp12999;var inst_12910__$1 = inst_12918;var state_12968__$1 = (function (){var statearr_13004 = state_12968;(statearr_13004[(12)] = inst_12910__$1);
(statearr_13004[(13)] = inst_12907__$1);
(statearr_13004[(14)] = inst_12909__$1);
(statearr_13004[(18)] = inst_12917);
(statearr_13004[(16)] = inst_12908__$1);
return statearr_13004;
})();var statearr_13005_13040 = state_12968__$1;(statearr_13005_13040[(2)] = null);
(statearr_13005_13040[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12969 === (18)))
{var inst_12936 = (state_12968[(2)]);var state_12968__$1 = state_12968;var statearr_13006_13041 = state_12968__$1;(statearr_13006_13041[(2)] = inst_12936);
(statearr_13006_13041[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12969 === (8)))
{var inst_12910 = (state_12968[(12)]);var inst_12909 = (state_12968[(14)]);var inst_12912 = (inst_12910 < inst_12909);var inst_12913 = inst_12912;var state_12968__$1 = state_12968;if(cljs.core.truth_(inst_12913))
{var statearr_13007_13042 = state_12968__$1;(statearr_13007_13042[(1)] = (10));
} else
{var statearr_13008_13043 = state_12968__$1;(statearr_13008_13043[(1)] = (11));
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
});})(c__6367__auto___13016,mults,ensure_mult,p))
;return ((function (switch__6352__auto__,c__6367__auto___13016,mults,ensure_mult,p){
return (function() {
var state_machine__6353__auto__ = null;
var state_machine__6353__auto____0 = (function (){var statearr_13012 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13012[(0)] = state_machine__6353__auto__);
(statearr_13012[(1)] = (1));
return statearr_13012;
});
var state_machine__6353__auto____1 = (function (state_12968){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_12968);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e13013){if((e13013 instanceof Object))
{var ex__6356__auto__ = e13013;var statearr_13014_13044 = state_12968;(statearr_13014_13044[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12968);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13013;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13045 = state_12968;
state_12968 = G__13045;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_12968){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_12968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto___13016,mults,ensure_mult,p))
})();var state__6369__auto__ = (function (){var statearr_13015 = f__6368__auto__.call(null);(statearr_13015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto___13016);
return statearr_13015;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto___13016,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__6367__auto___13182 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto___13182,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto___13182,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13152){var state_val_13153 = (state_13152[(1)]);if((state_val_13153 === (7)))
{var state_13152__$1 = state_13152;var statearr_13154_13183 = state_13152__$1;(statearr_13154_13183[(2)] = null);
(statearr_13154_13183[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13153 === (1)))
{var state_13152__$1 = state_13152;var statearr_13155_13184 = state_13152__$1;(statearr_13155_13184[(2)] = null);
(statearr_13155_13184[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13153 === (4)))
{var inst_13116 = (state_13152[(7)]);var inst_13118 = (inst_13116 < cnt);var state_13152__$1 = state_13152;if(cljs.core.truth_(inst_13118))
{var statearr_13156_13185 = state_13152__$1;(statearr_13156_13185[(1)] = (6));
} else
{var statearr_13157_13186 = state_13152__$1;(statearr_13157_13186[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13153 === (15)))
{var inst_13148 = (state_13152[(2)]);var state_13152__$1 = state_13152;var statearr_13158_13187 = state_13152__$1;(statearr_13158_13187[(2)] = inst_13148);
(statearr_13158_13187[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13153 === (13)))
{var inst_13141 = cljs.core.async.close_BANG_.call(null,out);var state_13152__$1 = state_13152;var statearr_13159_13188 = state_13152__$1;(statearr_13159_13188[(2)] = inst_13141);
(statearr_13159_13188[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13153 === (6)))
{var state_13152__$1 = state_13152;var statearr_13160_13189 = state_13152__$1;(statearr_13160_13189[(2)] = null);
(statearr_13160_13189[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13153 === (3)))
{var inst_13150 = (state_13152[(2)]);var state_13152__$1 = state_13152;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13152__$1,inst_13150);
} else
{if((state_val_13153 === (12)))
{var inst_13138 = (state_13152[(8)]);var inst_13138__$1 = (state_13152[(2)]);var inst_13139 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13138__$1);var state_13152__$1 = (function (){var statearr_13161 = state_13152;(statearr_13161[(8)] = inst_13138__$1);
return statearr_13161;
})();if(cljs.core.truth_(inst_13139))
{var statearr_13162_13190 = state_13152__$1;(statearr_13162_13190[(1)] = (13));
} else
{var statearr_13163_13191 = state_13152__$1;(statearr_13163_13191[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13153 === (2)))
{var inst_13115 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13116 = (0);var state_13152__$1 = (function (){var statearr_13164 = state_13152;(statearr_13164[(9)] = inst_13115);
(statearr_13164[(7)] = inst_13116);
return statearr_13164;
})();var statearr_13165_13192 = state_13152__$1;(statearr_13165_13192[(2)] = null);
(statearr_13165_13192[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13153 === (11)))
{var inst_13116 = (state_13152[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13152,(10),Object,null,(9));var inst_13125 = chs__$1.call(null,inst_13116);var inst_13126 = done.call(null,inst_13116);var inst_13127 = cljs.core.async.take_BANG_.call(null,inst_13125,inst_13126);var state_13152__$1 = state_13152;var statearr_13166_13193 = state_13152__$1;(statearr_13166_13193[(2)] = inst_13127);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13152__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13153 === (9)))
{var inst_13116 = (state_13152[(7)]);var inst_13129 = (state_13152[(2)]);var inst_13130 = (inst_13116 + (1));var inst_13116__$1 = inst_13130;var state_13152__$1 = (function (){var statearr_13167 = state_13152;(statearr_13167[(7)] = inst_13116__$1);
(statearr_13167[(10)] = inst_13129);
return statearr_13167;
})();var statearr_13168_13194 = state_13152__$1;(statearr_13168_13194[(2)] = null);
(statearr_13168_13194[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13153 === (5)))
{var inst_13136 = (state_13152[(2)]);var state_13152__$1 = (function (){var statearr_13169 = state_13152;(statearr_13169[(11)] = inst_13136);
return statearr_13169;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13152__$1,(12),dchan);
} else
{if((state_val_13153 === (14)))
{var inst_13138 = (state_13152[(8)]);var inst_13143 = cljs.core.apply.call(null,f,inst_13138);var state_13152__$1 = state_13152;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13152__$1,(16),out,inst_13143);
} else
{if((state_val_13153 === (16)))
{var inst_13145 = (state_13152[(2)]);var state_13152__$1 = (function (){var statearr_13170 = state_13152;(statearr_13170[(12)] = inst_13145);
return statearr_13170;
})();var statearr_13171_13195 = state_13152__$1;(statearr_13171_13195[(2)] = null);
(statearr_13171_13195[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13153 === (10)))
{var inst_13120 = (state_13152[(2)]);var inst_13121 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13152__$1 = (function (){var statearr_13172 = state_13152;(statearr_13172[(13)] = inst_13120);
return statearr_13172;
})();var statearr_13173_13196 = state_13152__$1;(statearr_13173_13196[(2)] = inst_13121);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13152__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13153 === (8)))
{var inst_13134 = (state_13152[(2)]);var state_13152__$1 = state_13152;var statearr_13174_13197 = state_13152__$1;(statearr_13174_13197[(2)] = inst_13134);
(statearr_13174_13197[(1)] = (5));
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
});})(c__6367__auto___13182,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6352__auto__,c__6367__auto___13182,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6353__auto__ = null;
var state_machine__6353__auto____0 = (function (){var statearr_13178 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13178[(0)] = state_machine__6353__auto__);
(statearr_13178[(1)] = (1));
return statearr_13178;
});
var state_machine__6353__auto____1 = (function (state_13152){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_13152);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e13179){if((e13179 instanceof Object))
{var ex__6356__auto__ = e13179;var statearr_13180_13198 = state_13152;(statearr_13180_13198[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13152);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13179;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13199 = state_13152;
state_13152 = G__13199;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_13152){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_13152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto___13182,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6369__auto__ = (function (){var statearr_13181 = f__6368__auto__.call(null);(statearr_13181[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto___13182);
return statearr_13181;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto___13182,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6367__auto___13307 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto___13307,out){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto___13307,out){
return (function (state_13283){var state_val_13284 = (state_13283[(1)]);if((state_val_13284 === (7)))
{var inst_13263 = (state_13283[(7)]);var inst_13262 = (state_13283[(8)]);var inst_13262__$1 = (state_13283[(2)]);var inst_13263__$1 = cljs.core.nth.call(null,inst_13262__$1,(0),null);var inst_13264 = cljs.core.nth.call(null,inst_13262__$1,(1),null);var inst_13265 = (inst_13263__$1 == null);var state_13283__$1 = (function (){var statearr_13285 = state_13283;(statearr_13285[(7)] = inst_13263__$1);
(statearr_13285[(9)] = inst_13264);
(statearr_13285[(8)] = inst_13262__$1);
return statearr_13285;
})();if(cljs.core.truth_(inst_13265))
{var statearr_13286_13308 = state_13283__$1;(statearr_13286_13308[(1)] = (8));
} else
{var statearr_13287_13309 = state_13283__$1;(statearr_13287_13309[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13284 === (1)))
{var inst_13254 = cljs.core.vec.call(null,chs);var inst_13255 = inst_13254;var state_13283__$1 = (function (){var statearr_13288 = state_13283;(statearr_13288[(10)] = inst_13255);
return statearr_13288;
})();var statearr_13289_13310 = state_13283__$1;(statearr_13289_13310[(2)] = null);
(statearr_13289_13310[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13284 === (4)))
{var inst_13255 = (state_13283[(10)]);var state_13283__$1 = state_13283;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13283__$1,(7),inst_13255);
} else
{if((state_val_13284 === (6)))
{var inst_13279 = (state_13283[(2)]);var state_13283__$1 = state_13283;var statearr_13290_13311 = state_13283__$1;(statearr_13290_13311[(2)] = inst_13279);
(statearr_13290_13311[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13284 === (3)))
{var inst_13281 = (state_13283[(2)]);var state_13283__$1 = state_13283;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13283__$1,inst_13281);
} else
{if((state_val_13284 === (2)))
{var inst_13255 = (state_13283[(10)]);var inst_13257 = cljs.core.count.call(null,inst_13255);var inst_13258 = (inst_13257 > (0));var state_13283__$1 = state_13283;if(cljs.core.truth_(inst_13258))
{var statearr_13292_13312 = state_13283__$1;(statearr_13292_13312[(1)] = (4));
} else
{var statearr_13293_13313 = state_13283__$1;(statearr_13293_13313[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13284 === (11)))
{var inst_13255 = (state_13283[(10)]);var inst_13272 = (state_13283[(2)]);var tmp13291 = inst_13255;var inst_13255__$1 = tmp13291;var state_13283__$1 = (function (){var statearr_13294 = state_13283;(statearr_13294[(11)] = inst_13272);
(statearr_13294[(10)] = inst_13255__$1);
return statearr_13294;
})();var statearr_13295_13314 = state_13283__$1;(statearr_13295_13314[(2)] = null);
(statearr_13295_13314[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13284 === (9)))
{var inst_13263 = (state_13283[(7)]);var state_13283__$1 = state_13283;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13283__$1,(11),out,inst_13263);
} else
{if((state_val_13284 === (5)))
{var inst_13277 = cljs.core.async.close_BANG_.call(null,out);var state_13283__$1 = state_13283;var statearr_13296_13315 = state_13283__$1;(statearr_13296_13315[(2)] = inst_13277);
(statearr_13296_13315[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13284 === (10)))
{var inst_13275 = (state_13283[(2)]);var state_13283__$1 = state_13283;var statearr_13297_13316 = state_13283__$1;(statearr_13297_13316[(2)] = inst_13275);
(statearr_13297_13316[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13284 === (8)))
{var inst_13263 = (state_13283[(7)]);var inst_13255 = (state_13283[(10)]);var inst_13264 = (state_13283[(9)]);var inst_13262 = (state_13283[(8)]);var inst_13267 = (function (){var c = inst_13264;var v = inst_13263;var vec__13260 = inst_13262;var cs = inst_13255;return ((function (c,v,vec__13260,cs,inst_13263,inst_13255,inst_13264,inst_13262,state_val_13284,c__6367__auto___13307,out){
return (function (p1__13200_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13200_SHARP_);
});
;})(c,v,vec__13260,cs,inst_13263,inst_13255,inst_13264,inst_13262,state_val_13284,c__6367__auto___13307,out))
})();var inst_13268 = cljs.core.filterv.call(null,inst_13267,inst_13255);var inst_13255__$1 = inst_13268;var state_13283__$1 = (function (){var statearr_13298 = state_13283;(statearr_13298[(10)] = inst_13255__$1);
return statearr_13298;
})();var statearr_13299_13317 = state_13283__$1;(statearr_13299_13317[(2)] = null);
(statearr_13299_13317[(1)] = (2));
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
});})(c__6367__auto___13307,out))
;return ((function (switch__6352__auto__,c__6367__auto___13307,out){
return (function() {
var state_machine__6353__auto__ = null;
var state_machine__6353__auto____0 = (function (){var statearr_13303 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13303[(0)] = state_machine__6353__auto__);
(statearr_13303[(1)] = (1));
return statearr_13303;
});
var state_machine__6353__auto____1 = (function (state_13283){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_13283);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e13304){if((e13304 instanceof Object))
{var ex__6356__auto__ = e13304;var statearr_13305_13318 = state_13283;(statearr_13305_13318[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13283);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13304;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13319 = state_13283;
state_13283 = G__13319;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_13283){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_13283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto___13307,out))
})();var state__6369__auto__ = (function (){var statearr_13306 = f__6368__auto__.call(null);(statearr_13306[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto___13307);
return statearr_13306;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto___13307,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6367__auto___13412 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto___13412,out){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto___13412,out){
return (function (state_13389){var state_val_13390 = (state_13389[(1)]);if((state_val_13390 === (7)))
{var inst_13371 = (state_13389[(7)]);var inst_13371__$1 = (state_13389[(2)]);var inst_13372 = (inst_13371__$1 == null);var inst_13373 = cljs.core.not.call(null,inst_13372);var state_13389__$1 = (function (){var statearr_13391 = state_13389;(statearr_13391[(7)] = inst_13371__$1);
return statearr_13391;
})();if(inst_13373)
{var statearr_13392_13413 = state_13389__$1;(statearr_13392_13413[(1)] = (8));
} else
{var statearr_13393_13414 = state_13389__$1;(statearr_13393_13414[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13390 === (1)))
{var inst_13366 = (0);var state_13389__$1 = (function (){var statearr_13394 = state_13389;(statearr_13394[(8)] = inst_13366);
return statearr_13394;
})();var statearr_13395_13415 = state_13389__$1;(statearr_13395_13415[(2)] = null);
(statearr_13395_13415[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13390 === (4)))
{var state_13389__$1 = state_13389;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13389__$1,(7),ch);
} else
{if((state_val_13390 === (6)))
{var inst_13384 = (state_13389[(2)]);var state_13389__$1 = state_13389;var statearr_13396_13416 = state_13389__$1;(statearr_13396_13416[(2)] = inst_13384);
(statearr_13396_13416[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13390 === (3)))
{var inst_13386 = (state_13389[(2)]);var inst_13387 = cljs.core.async.close_BANG_.call(null,out);var state_13389__$1 = (function (){var statearr_13397 = state_13389;(statearr_13397[(9)] = inst_13386);
return statearr_13397;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13389__$1,inst_13387);
} else
{if((state_val_13390 === (2)))
{var inst_13366 = (state_13389[(8)]);var inst_13368 = (inst_13366 < n);var state_13389__$1 = state_13389;if(cljs.core.truth_(inst_13368))
{var statearr_13398_13417 = state_13389__$1;(statearr_13398_13417[(1)] = (4));
} else
{var statearr_13399_13418 = state_13389__$1;(statearr_13399_13418[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13390 === (11)))
{var inst_13366 = (state_13389[(8)]);var inst_13376 = (state_13389[(2)]);var inst_13377 = (inst_13366 + (1));var inst_13366__$1 = inst_13377;var state_13389__$1 = (function (){var statearr_13400 = state_13389;(statearr_13400[(10)] = inst_13376);
(statearr_13400[(8)] = inst_13366__$1);
return statearr_13400;
})();var statearr_13401_13419 = state_13389__$1;(statearr_13401_13419[(2)] = null);
(statearr_13401_13419[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13390 === (9)))
{var state_13389__$1 = state_13389;var statearr_13402_13420 = state_13389__$1;(statearr_13402_13420[(2)] = null);
(statearr_13402_13420[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13390 === (5)))
{var state_13389__$1 = state_13389;var statearr_13403_13421 = state_13389__$1;(statearr_13403_13421[(2)] = null);
(statearr_13403_13421[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13390 === (10)))
{var inst_13381 = (state_13389[(2)]);var state_13389__$1 = state_13389;var statearr_13404_13422 = state_13389__$1;(statearr_13404_13422[(2)] = inst_13381);
(statearr_13404_13422[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13390 === (8)))
{var inst_13371 = (state_13389[(7)]);var state_13389__$1 = state_13389;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13389__$1,(11),out,inst_13371);
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
});})(c__6367__auto___13412,out))
;return ((function (switch__6352__auto__,c__6367__auto___13412,out){
return (function() {
var state_machine__6353__auto__ = null;
var state_machine__6353__auto____0 = (function (){var statearr_13408 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13408[(0)] = state_machine__6353__auto__);
(statearr_13408[(1)] = (1));
return statearr_13408;
});
var state_machine__6353__auto____1 = (function (state_13389){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_13389);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e13409){if((e13409 instanceof Object))
{var ex__6356__auto__ = e13409;var statearr_13410_13423 = state_13389;(statearr_13410_13423[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13389);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13409;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13424 = state_13389;
state_13389 = G__13424;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_13389){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_13389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto___13412,out))
})();var state__6369__auto__ = (function (){var statearr_13411 = f__6368__auto__.call(null);(statearr_13411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto___13412);
return statearr_13411;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto___13412,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6367__auto___13521 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto___13521,out){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto___13521,out){
return (function (state_13496){var state_val_13497 = (state_13496[(1)]);if((state_val_13497 === (7)))
{var inst_13491 = (state_13496[(2)]);var state_13496__$1 = state_13496;var statearr_13498_13522 = state_13496__$1;(statearr_13498_13522[(2)] = inst_13491);
(statearr_13498_13522[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13497 === (1)))
{var inst_13473 = null;var state_13496__$1 = (function (){var statearr_13499 = state_13496;(statearr_13499[(7)] = inst_13473);
return statearr_13499;
})();var statearr_13500_13523 = state_13496__$1;(statearr_13500_13523[(2)] = null);
(statearr_13500_13523[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13497 === (4)))
{var inst_13476 = (state_13496[(8)]);var inst_13476__$1 = (state_13496[(2)]);var inst_13477 = (inst_13476__$1 == null);var inst_13478 = cljs.core.not.call(null,inst_13477);var state_13496__$1 = (function (){var statearr_13501 = state_13496;(statearr_13501[(8)] = inst_13476__$1);
return statearr_13501;
})();if(inst_13478)
{var statearr_13502_13524 = state_13496__$1;(statearr_13502_13524[(1)] = (5));
} else
{var statearr_13503_13525 = state_13496__$1;(statearr_13503_13525[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13497 === (6)))
{var state_13496__$1 = state_13496;var statearr_13504_13526 = state_13496__$1;(statearr_13504_13526[(2)] = null);
(statearr_13504_13526[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13497 === (3)))
{var inst_13493 = (state_13496[(2)]);var inst_13494 = cljs.core.async.close_BANG_.call(null,out);var state_13496__$1 = (function (){var statearr_13505 = state_13496;(statearr_13505[(9)] = inst_13493);
return statearr_13505;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13496__$1,inst_13494);
} else
{if((state_val_13497 === (2)))
{var state_13496__$1 = state_13496;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13496__$1,(4),ch);
} else
{if((state_val_13497 === (11)))
{var inst_13476 = (state_13496[(8)]);var inst_13485 = (state_13496[(2)]);var inst_13473 = inst_13476;var state_13496__$1 = (function (){var statearr_13506 = state_13496;(statearr_13506[(7)] = inst_13473);
(statearr_13506[(10)] = inst_13485);
return statearr_13506;
})();var statearr_13507_13527 = state_13496__$1;(statearr_13507_13527[(2)] = null);
(statearr_13507_13527[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13497 === (9)))
{var inst_13476 = (state_13496[(8)]);var state_13496__$1 = state_13496;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13496__$1,(11),out,inst_13476);
} else
{if((state_val_13497 === (5)))
{var inst_13473 = (state_13496[(7)]);var inst_13476 = (state_13496[(8)]);var inst_13480 = cljs.core._EQ_.call(null,inst_13476,inst_13473);var state_13496__$1 = state_13496;if(inst_13480)
{var statearr_13509_13528 = state_13496__$1;(statearr_13509_13528[(1)] = (8));
} else
{var statearr_13510_13529 = state_13496__$1;(statearr_13510_13529[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13497 === (10)))
{var inst_13488 = (state_13496[(2)]);var state_13496__$1 = state_13496;var statearr_13511_13530 = state_13496__$1;(statearr_13511_13530[(2)] = inst_13488);
(statearr_13511_13530[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13497 === (8)))
{var inst_13473 = (state_13496[(7)]);var tmp13508 = inst_13473;var inst_13473__$1 = tmp13508;var state_13496__$1 = (function (){var statearr_13512 = state_13496;(statearr_13512[(7)] = inst_13473__$1);
return statearr_13512;
})();var statearr_13513_13531 = state_13496__$1;(statearr_13513_13531[(2)] = null);
(statearr_13513_13531[(1)] = (2));
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
});})(c__6367__auto___13521,out))
;return ((function (switch__6352__auto__,c__6367__auto___13521,out){
return (function() {
var state_machine__6353__auto__ = null;
var state_machine__6353__auto____0 = (function (){var statearr_13517 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13517[(0)] = state_machine__6353__auto__);
(statearr_13517[(1)] = (1));
return statearr_13517;
});
var state_machine__6353__auto____1 = (function (state_13496){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_13496);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e13518){if((e13518 instanceof Object))
{var ex__6356__auto__ = e13518;var statearr_13519_13532 = state_13496;(statearr_13519_13532[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13496);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13518;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13533 = state_13496;
state_13496 = G__13533;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_13496){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_13496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto___13521,out))
})();var state__6369__auto__ = (function (){var statearr_13520 = f__6368__auto__.call(null);(statearr_13520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto___13521);
return statearr_13520;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto___13521,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6367__auto___13668 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto___13668,out){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto___13668,out){
return (function (state_13638){var state_val_13639 = (state_13638[(1)]);if((state_val_13639 === (7)))
{var inst_13634 = (state_13638[(2)]);var state_13638__$1 = state_13638;var statearr_13640_13669 = state_13638__$1;(statearr_13640_13669[(2)] = inst_13634);
(statearr_13640_13669[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13639 === (1)))
{var inst_13601 = (new Array(n));var inst_13602 = inst_13601;var inst_13603 = (0);var state_13638__$1 = (function (){var statearr_13641 = state_13638;(statearr_13641[(7)] = inst_13603);
(statearr_13641[(8)] = inst_13602);
return statearr_13641;
})();var statearr_13642_13670 = state_13638__$1;(statearr_13642_13670[(2)] = null);
(statearr_13642_13670[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13639 === (4)))
{var inst_13606 = (state_13638[(9)]);var inst_13606__$1 = (state_13638[(2)]);var inst_13607 = (inst_13606__$1 == null);var inst_13608 = cljs.core.not.call(null,inst_13607);var state_13638__$1 = (function (){var statearr_13643 = state_13638;(statearr_13643[(9)] = inst_13606__$1);
return statearr_13643;
})();if(inst_13608)
{var statearr_13644_13671 = state_13638__$1;(statearr_13644_13671[(1)] = (5));
} else
{var statearr_13645_13672 = state_13638__$1;(statearr_13645_13672[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13639 === (15)))
{var inst_13628 = (state_13638[(2)]);var state_13638__$1 = state_13638;var statearr_13646_13673 = state_13638__$1;(statearr_13646_13673[(2)] = inst_13628);
(statearr_13646_13673[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13639 === (13)))
{var state_13638__$1 = state_13638;var statearr_13647_13674 = state_13638__$1;(statearr_13647_13674[(2)] = null);
(statearr_13647_13674[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13639 === (6)))
{var inst_13603 = (state_13638[(7)]);var inst_13624 = (inst_13603 > (0));var state_13638__$1 = state_13638;if(cljs.core.truth_(inst_13624))
{var statearr_13648_13675 = state_13638__$1;(statearr_13648_13675[(1)] = (12));
} else
{var statearr_13649_13676 = state_13638__$1;(statearr_13649_13676[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13639 === (3)))
{var inst_13636 = (state_13638[(2)]);var state_13638__$1 = state_13638;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13638__$1,inst_13636);
} else
{if((state_val_13639 === (12)))
{var inst_13602 = (state_13638[(8)]);var inst_13626 = cljs.core.vec.call(null,inst_13602);var state_13638__$1 = state_13638;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13638__$1,(15),out,inst_13626);
} else
{if((state_val_13639 === (2)))
{var state_13638__$1 = state_13638;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13638__$1,(4),ch);
} else
{if((state_val_13639 === (11)))
{var inst_13618 = (state_13638[(2)]);var inst_13619 = (new Array(n));var inst_13602 = inst_13619;var inst_13603 = (0);var state_13638__$1 = (function (){var statearr_13650 = state_13638;(statearr_13650[(7)] = inst_13603);
(statearr_13650[(8)] = inst_13602);
(statearr_13650[(10)] = inst_13618);
return statearr_13650;
})();var statearr_13651_13677 = state_13638__$1;(statearr_13651_13677[(2)] = null);
(statearr_13651_13677[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13639 === (9)))
{var inst_13602 = (state_13638[(8)]);var inst_13616 = cljs.core.vec.call(null,inst_13602);var state_13638__$1 = state_13638;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13638__$1,(11),out,inst_13616);
} else
{if((state_val_13639 === (5)))
{var inst_13606 = (state_13638[(9)]);var inst_13603 = (state_13638[(7)]);var inst_13602 = (state_13638[(8)]);var inst_13611 = (state_13638[(11)]);var inst_13610 = (inst_13602[inst_13603] = inst_13606);var inst_13611__$1 = (inst_13603 + (1));var inst_13612 = (inst_13611__$1 < n);var state_13638__$1 = (function (){var statearr_13652 = state_13638;(statearr_13652[(12)] = inst_13610);
(statearr_13652[(11)] = inst_13611__$1);
return statearr_13652;
})();if(cljs.core.truth_(inst_13612))
{var statearr_13653_13678 = state_13638__$1;(statearr_13653_13678[(1)] = (8));
} else
{var statearr_13654_13679 = state_13638__$1;(statearr_13654_13679[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13639 === (14)))
{var inst_13631 = (state_13638[(2)]);var inst_13632 = cljs.core.async.close_BANG_.call(null,out);var state_13638__$1 = (function (){var statearr_13656 = state_13638;(statearr_13656[(13)] = inst_13631);
return statearr_13656;
})();var statearr_13657_13680 = state_13638__$1;(statearr_13657_13680[(2)] = inst_13632);
(statearr_13657_13680[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13639 === (10)))
{var inst_13622 = (state_13638[(2)]);var state_13638__$1 = state_13638;var statearr_13658_13681 = state_13638__$1;(statearr_13658_13681[(2)] = inst_13622);
(statearr_13658_13681[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13639 === (8)))
{var inst_13602 = (state_13638[(8)]);var inst_13611 = (state_13638[(11)]);var tmp13655 = inst_13602;var inst_13602__$1 = tmp13655;var inst_13603 = inst_13611;var state_13638__$1 = (function (){var statearr_13659 = state_13638;(statearr_13659[(7)] = inst_13603);
(statearr_13659[(8)] = inst_13602__$1);
return statearr_13659;
})();var statearr_13660_13682 = state_13638__$1;(statearr_13660_13682[(2)] = null);
(statearr_13660_13682[(1)] = (2));
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
});})(c__6367__auto___13668,out))
;return ((function (switch__6352__auto__,c__6367__auto___13668,out){
return (function() {
var state_machine__6353__auto__ = null;
var state_machine__6353__auto____0 = (function (){var statearr_13664 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13664[(0)] = state_machine__6353__auto__);
(statearr_13664[(1)] = (1));
return statearr_13664;
});
var state_machine__6353__auto____1 = (function (state_13638){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_13638);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e13665){if((e13665 instanceof Object))
{var ex__6356__auto__ = e13665;var statearr_13666_13683 = state_13638;(statearr_13666_13683[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13638);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13665;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13684 = state_13638;
state_13638 = G__13684;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_13638){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_13638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto___13668,out))
})();var state__6369__auto__ = (function (){var statearr_13667 = f__6368__auto__.call(null);(statearr_13667[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto___13668);
return statearr_13667;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto___13668,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6367__auto___13827 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto___13827,out){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto___13827,out){
return (function (state_13797){var state_val_13798 = (state_13797[(1)]);if((state_val_13798 === (7)))
{var inst_13793 = (state_13797[(2)]);var state_13797__$1 = state_13797;var statearr_13799_13828 = state_13797__$1;(statearr_13799_13828[(2)] = inst_13793);
(statearr_13799_13828[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13798 === (1)))
{var inst_13756 = [];var inst_13757 = inst_13756;var inst_13758 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_13797__$1 = (function (){var statearr_13800 = state_13797;(statearr_13800[(7)] = inst_13757);
(statearr_13800[(8)] = inst_13758);
return statearr_13800;
})();var statearr_13801_13829 = state_13797__$1;(statearr_13801_13829[(2)] = null);
(statearr_13801_13829[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13798 === (4)))
{var inst_13761 = (state_13797[(9)]);var inst_13761__$1 = (state_13797[(2)]);var inst_13762 = (inst_13761__$1 == null);var inst_13763 = cljs.core.not.call(null,inst_13762);var state_13797__$1 = (function (){var statearr_13802 = state_13797;(statearr_13802[(9)] = inst_13761__$1);
return statearr_13802;
})();if(inst_13763)
{var statearr_13803_13830 = state_13797__$1;(statearr_13803_13830[(1)] = (5));
} else
{var statearr_13804_13831 = state_13797__$1;(statearr_13804_13831[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13798 === (15)))
{var inst_13787 = (state_13797[(2)]);var state_13797__$1 = state_13797;var statearr_13805_13832 = state_13797__$1;(statearr_13805_13832[(2)] = inst_13787);
(statearr_13805_13832[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13798 === (13)))
{var state_13797__$1 = state_13797;var statearr_13806_13833 = state_13797__$1;(statearr_13806_13833[(2)] = null);
(statearr_13806_13833[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13798 === (6)))
{var inst_13757 = (state_13797[(7)]);var inst_13782 = inst_13757.length;var inst_13783 = (inst_13782 > (0));var state_13797__$1 = state_13797;if(cljs.core.truth_(inst_13783))
{var statearr_13807_13834 = state_13797__$1;(statearr_13807_13834[(1)] = (12));
} else
{var statearr_13808_13835 = state_13797__$1;(statearr_13808_13835[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13798 === (3)))
{var inst_13795 = (state_13797[(2)]);var state_13797__$1 = state_13797;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13797__$1,inst_13795);
} else
{if((state_val_13798 === (12)))
{var inst_13757 = (state_13797[(7)]);var inst_13785 = cljs.core.vec.call(null,inst_13757);var state_13797__$1 = state_13797;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13797__$1,(15),out,inst_13785);
} else
{if((state_val_13798 === (2)))
{var state_13797__$1 = state_13797;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13797__$1,(4),ch);
} else
{if((state_val_13798 === (11)))
{var inst_13761 = (state_13797[(9)]);var inst_13765 = (state_13797[(10)]);var inst_13775 = (state_13797[(2)]);var inst_13776 = [];var inst_13777 = inst_13776.push(inst_13761);var inst_13757 = inst_13776;var inst_13758 = inst_13765;var state_13797__$1 = (function (){var statearr_13809 = state_13797;(statearr_13809[(11)] = inst_13777);
(statearr_13809[(7)] = inst_13757);
(statearr_13809[(12)] = inst_13775);
(statearr_13809[(8)] = inst_13758);
return statearr_13809;
})();var statearr_13810_13836 = state_13797__$1;(statearr_13810_13836[(2)] = null);
(statearr_13810_13836[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13798 === (9)))
{var inst_13757 = (state_13797[(7)]);var inst_13773 = cljs.core.vec.call(null,inst_13757);var state_13797__$1 = state_13797;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13797__$1,(11),out,inst_13773);
} else
{if((state_val_13798 === (5)))
{var inst_13761 = (state_13797[(9)]);var inst_13765 = (state_13797[(10)]);var inst_13758 = (state_13797[(8)]);var inst_13765__$1 = f.call(null,inst_13761);var inst_13766 = cljs.core._EQ_.call(null,inst_13765__$1,inst_13758);var inst_13767 = cljs.core.keyword_identical_QMARK_.call(null,inst_13758,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_13768 = (inst_13766) || (inst_13767);var state_13797__$1 = (function (){var statearr_13811 = state_13797;(statearr_13811[(10)] = inst_13765__$1);
return statearr_13811;
})();if(cljs.core.truth_(inst_13768))
{var statearr_13812_13837 = state_13797__$1;(statearr_13812_13837[(1)] = (8));
} else
{var statearr_13813_13838 = state_13797__$1;(statearr_13813_13838[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13798 === (14)))
{var inst_13790 = (state_13797[(2)]);var inst_13791 = cljs.core.async.close_BANG_.call(null,out);var state_13797__$1 = (function (){var statearr_13815 = state_13797;(statearr_13815[(13)] = inst_13790);
return statearr_13815;
})();var statearr_13816_13839 = state_13797__$1;(statearr_13816_13839[(2)] = inst_13791);
(statearr_13816_13839[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13798 === (10)))
{var inst_13780 = (state_13797[(2)]);var state_13797__$1 = state_13797;var statearr_13817_13840 = state_13797__$1;(statearr_13817_13840[(2)] = inst_13780);
(statearr_13817_13840[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13798 === (8)))
{var inst_13761 = (state_13797[(9)]);var inst_13765 = (state_13797[(10)]);var inst_13757 = (state_13797[(7)]);var inst_13770 = inst_13757.push(inst_13761);var tmp13814 = inst_13757;var inst_13757__$1 = tmp13814;var inst_13758 = inst_13765;var state_13797__$1 = (function (){var statearr_13818 = state_13797;(statearr_13818[(7)] = inst_13757__$1);
(statearr_13818[(8)] = inst_13758);
(statearr_13818[(14)] = inst_13770);
return statearr_13818;
})();var statearr_13819_13841 = state_13797__$1;(statearr_13819_13841[(2)] = null);
(statearr_13819_13841[(1)] = (2));
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
});})(c__6367__auto___13827,out))
;return ((function (switch__6352__auto__,c__6367__auto___13827,out){
return (function() {
var state_machine__6353__auto__ = null;
var state_machine__6353__auto____0 = (function (){var statearr_13823 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13823[(0)] = state_machine__6353__auto__);
(statearr_13823[(1)] = (1));
return statearr_13823;
});
var state_machine__6353__auto____1 = (function (state_13797){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_13797);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e13824){if((e13824 instanceof Object))
{var ex__6356__auto__ = e13824;var statearr_13825_13842 = state_13797;(statearr_13825_13842[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13797);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13824;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13843 = state_13797;
state_13797 = G__13843;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_13797){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_13797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto___13827,out))
})();var state__6369__auto__ = (function (){var statearr_13826 = f__6368__auto__.call(null);(statearr_13826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto___13827);
return statearr_13826;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto___13827,out))
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