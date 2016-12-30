YUI.add("event-custom-base",function(e,t){e.Env.evt={handles:{},plugins:{}};var n=0,r=1,i={objs:null,before:function(t,r,i,s){var o=t,u;return s&&(u=[t,s].concat(e.Array(arguments,4,!0)),o=e.rbind.apply(e,u)),this._inject(n,o,r,i)},after:function(t,n,i,s){var o=t,u;return s&&(u=[t,s].concat(e.Array(arguments,4,!0)),o=e.rbind.apply(e,u)),this._inject(r,o,n,i)},_inject:function(t,n,r,i){var s=e.stamp(r),o,u;return r._yuiaop||(r._yuiaop={}),o=r._yuiaop,o[i]||(o[i]=new e.Do.Method(r,i),r[i]=function(){return o[i].exec.apply(o[i],arguments)}),u=s+e.stamp(n)+i,o[i].register(u,n,t),new e.EventHandle(o[i],u)},detach:function(e){e.detach&&e.detach()}};e.Do=i,i.Method=function(e,t){this.obj=e,this.methodName=t,this.method=e[t],this.before={},this.after={}},i.Method.prototype.register=function(e,t,n){n?this.after[e]=t:this.before[e]=t},i.Method.prototype._delete=function(e){delete this.before[e],delete this.after[e]},i.Method.prototype.exec=function(){var t=e.Array(arguments,0,!0),n,r,s,o=this.before,u=this.after,a=!1;for(n in o)if(o.hasOwnProperty(n)){r=o[n].apply(this.obj,t);if(r)switch(r.constructor){case i.Halt:return r.retVal;case i.AlterArgs:t=r.newArgs;break;case i.Prevent:a=!0;break;default:}}a||(r=this.method.apply(this.obj,t)),i.originalRetVal=r,i.currentRetVal=r;for(n in u)if(u.hasOwnProperty(n)){s=u[n].apply(this.obj,t);if(s&&s.constructor===i.Halt)return s.retVal;s&&s.constructor===i.AlterReturn&&(r=s.newRetVal,i.currentRetVal=r)}return r},i.AlterArgs=function(e,t){this.msg=e,this.newArgs=t},i.AlterReturn=function(e,t){this.msg=e,this.newRetVal=t},i.Halt=function(e,t){this.msg=e,this.retVal=t},i.Prevent=function(e){this.msg=e},i.Error=i.Halt;var s=e.Array,o="after",u=["broadcast","monitored","bubbles","context","contextFn","currentTarget","defaultFn","defaultTargetOnly","details","emitFacade","fireOnce","async","host","preventable","preventedFn","queuable","silent","stoppedFn","target","type"],a=s.hash(u),f=Array.prototype.slice,l=9,c="yui:log",h=function(e,t,n){var r;for(r in t)a[r]&&(n||!(r in e))&&(e[r]=t[r]);return e};e.CustomEvent=function(t,n){this._kds=e.CustomEvent.keepDeprecatedSubs,this.id=e.guid(),this.type=t,this.silent=this.logSystem=t===c,this._kds&&(this.subscribers={},this.afters={}),n&&h(this,n,!0)},e.CustomEvent.keepDeprecatedSubs=!1,e.CustomEvent.mixConfigs=h,e.CustomEvent.prototype={constructor:e.CustomEvent,signature:l,context:e,preventable:!0,bubbles:!0,hasSubs:function(e){var t=0,n=0,r=this._subscribers,i=this._afters,s=this.sibling;return r&&(t=r.length),i&&(n=i.length),s&&(r=s._subscribers,i=s._afters,r&&(t+=r.length),i&&(n+=i.length)),e?e==="after"?n:t:t+n},monitor:function(e){this.monitored=!0;var t=this.id+"|"+this.type+"_"+e,n=f.call(arguments,0);return n[0]=t,this.host.on.apply(this.host,n)},getSubs:function(){var e=this.sibling,t=this._subscribers,n=this._afters,r,i;return e&&(r=e._subscribers,i=e._afters),r?t?t=t.concat(r):t=r.concat():t?t=t.concat():t=[],i?n?n=n.concat(i):n=i.concat():n?n=n.concat():n=[],[t,n]},applyConfig:function(e,t){h(this,e,t)},_on:function(t,n,r,i){var s=new e.Subscriber(t,n,r,i),u;return this.fireOnce&&this.fired&&(u=this.firedWith,this.emitFacade&&this._addFacadeToArgs&&this._addFacadeToArgs(u),this.async?setTimeout(e.bind(this._notify,this,s,u),0):this._notify(s,u)),i===o?(this._afters||(this._afters=[]),this._afters.push(s)):(this._subscribers||(this._subscribers=[]),this._subscribers.push(s)),this._kds&&(i===o?this.afters[s.id]=s:this.subscribers[s.id]=s),new e.EventHandle(this,s)},subscribe:function(e,t){var n=arguments.length>2?f.call(arguments,2):null;return this._on(e,t,n,!0)},on:function(e,t){var n=arguments.length>2?f.call(arguments,2):null;return this.monitored&&this.host&&this.host._monitor("attach",this,{args:arguments}),this._on(e,t,n,!0)},after:function(e,t){var n=arguments.length>2?f.call(arguments,2):null;return this._on(e,t,n,o)},detach:function(e,t){if(e&&e.detach)return e.detach();var n,r,i=0,s=this._subscribers,o=this._afters;if(s)for(n=s.length;n>=0;n--)r=s[n],r&&(!e||e===r.fn)&&(this._delete(r,s,n),i++);if(o)for(n=o.length;n>=0;n--)r=o[n],r&&(!e||e===r.fn)&&(this._delete(r,o,n),i++);return i},unsubscribe:function(){return this.detach.apply(this,arguments)},_notify:function(e,t,n){var r;return r=e.notify(t,this),!1===r||this.stopped>1?!1:!0},log:function(e,t){},fire:function(){var e=[];return e.push.apply(e,arguments),this._fire(e)},_fire:function(e){return this.fireOnce&&this.fired?!0:(this.fired=!0,this.fireOnce&&(this.firedWith=e),this.emitFacade?this.fireComplex(e):this.fireSimple(e))},fireSimple:function(e){this.stopped=0,this.prevented=0;if(this.hasSubs()){var t=this.getSubs();this._procSubs(t[0],e),this._procSubs(t[1],e)}return this.broadcast&&this._broadcast(e),this.stopped?!1:!0},fireComplex:function(e){return e[0]=e[0]||{},this.fireSimple(e)},_procSubs:function(e,t,n){var r,i,s;for(i=0,s=e.length;i<s;i++){r=e[i];if(r&&r.fn){!1===this._notify(r,t,n)&&(this.stopped=2);if(this.stopped===2)return!1}}return!0},_broadcast:function(t){if(!this.stopped&&this.broadcast){var n=t.concat();n.unshift(this.type),this.host!==e&&e.fire.apply(e,n),this.broadcast===2&&e.Global.fire.apply(e.Global,n)}},unsubscribeAll:function(){return this.detachAll.apply(this,arguments)},detachAll:function(){return this.detach()},_delete:function(e,t,n){var r=e._when;t||(t=r===o?this._afters:this._subscribers),t&&(n=s.indexOf(t,e,0),e&&t[n]===e&&t.splice(n,1)),this._kds&&(r===o?delete this.afters[e.id]:delete this.subscribers[e.id]),this.monitored&&this.host&&this.host._monitor("detach",this,{ce:this,sub:e}),e&&(e.deleted=!0)}},e.Subscriber=function(t,n,r,i){this.fn=t,this.context=n,this.id=e.guid(),this.args=r,this._when=i},e.Subscriber.prototype={constructor:e.Subscriber,_notify:function(e,t,n){if(this.deleted&&!this.postponed){if(!this.postponed)return delete this.postponed,null;delete this.fn,delete this.context}var r=this.args,i;switch(n.signature){case 0:i=this.fn.call(e,n.type,t,e);break;case 1:i=this.fn.call(e,t[0]||null,e);break;
default:r||t?(t=t||[],r=r?t.concat(r):t,i=this.fn.apply(e,r)):i=this.fn.call(e)}return this.once&&n._delete(this),i},notify:function(t,n){var r=this.context,i=!0;r||(r=n.contextFn?n.contextFn():n.context);if(e.config&&e.config.throwFail)i=this._notify(r,t,n);else try{i=this._notify(r,t,n)}catch(s){e.error(this+" failed: "+s.message,s)}return i},contains:function(e,t){return t?this.fn===e&&this.context===t:this.fn===e},valueOf:function(){return this.id}},e.EventHandle=function(e,t){this.evt=e,this.sub=t},e.EventHandle.prototype={batch:function(t,n){t.call(n||this,this),e.Lang.isArray(this.evt)&&e.Array.each(this.evt,function(e){e.batch.call(n||e,t)})},detach:function(){var t=this.evt,n=0,r;if(t)if(e.Lang.isArray(t))for(r=0;r<t.length;r++)n+=t[r].detach();else t._delete(this.sub),n=1;return n},monitor:function(e){return this.evt.monitor.apply(this.evt,arguments)}};var p=e.Lang,d=":",v="|",m="~AFTER~",g=/(.*?)(:)(.*?)/,y=e.cached(function(e){return e.replace(g,"*$2$3")}),b=function(e,t){return!t||typeof e!="string"||e.indexOf(d)>-1?e:t+d+e},w=e.cached(function(e,t){var n=e,r,i,s;return p.isString(n)?(s=n.indexOf(m),s>-1&&(i=!0,n=n.substr(m.length)),s=n.indexOf(v),s>-1&&(r=n.substr(0,s),n=n.substr(s+1),n==="*"&&(n=null)),[r,t?b(n,t):n,i,n]):n}),E=function(t){var n=this._yuievt,r;n||(n=this._yuievt={events:{},targets:null,config:{host:this,context:this},chain:e.config.chain}),r=n.config,t&&(h(r,t,!0),t.chain!==undefined&&(n.chain=t.chain),t.prefix&&(r.prefix=t.prefix))};E.prototype={constructor:E,once:function(){var e=this.on.apply(this,arguments);return e.batch(function(e){e.sub&&(e.sub.once=!0)}),e},onceAfter:function(){var e=this.after.apply(this,arguments);return e.batch(function(e){e.sub&&(e.sub.once=!0)}),e},parseType:function(e,t){return w(e,t||this._yuievt.config.prefix)},on:function(t,n,r){var i=this._yuievt,s=w(t,i.config.prefix),o,u,a,l,c,h,d,v=e.Env.evt.handles,g,y,b,E=e.Node,S,x,T;this._monitor("attach",s[1],{args:arguments,category:s[0],after:s[2]});if(p.isObject(t))return p.isFunction(t)?e.Do.before.apply(e.Do,arguments):(o=n,u=r,a=f.call(arguments,0),l=[],p.isArray(t)&&(T=!0),g=t._after,delete t._after,e.each(t,function(e,t){p.isObject(e)&&(o=e.fn||(p.isFunction(e)?e:o),u=e.context||u);var n=g?m:"";a[0]=n+(T?e:t),a[1]=o,a[2]=u,l.push(this.on.apply(this,a))},this),i.chain?this:new e.EventHandle(l));h=s[0],g=s[2],b=s[3];if(E&&e.instanceOf(this,E)&&b in E.DOM_EVENTS)return a=f.call(arguments,0),a.splice(2,0,E.getDOMNode(this)),e.on.apply(e,a);t=s[1];if(e.instanceOf(this,YUI)){y=e.Env.evt.plugins[t],a=f.call(arguments,0),a[0]=b,E&&(S=a[2],e.instanceOf(S,e.NodeList)?S=e.NodeList.getDOMNodes(S):e.instanceOf(S,E)&&(S=E.getDOMNode(S)),x=b in E.DOM_EVENTS,x&&(a[2]=S));if(y)d=y.on.apply(e,a);else if(!t||x)d=e.Event._attach(a)}return d||(c=i.events[t]||this.publish(t),d=c._on(n,r,arguments.length>3?f.call(arguments,3):null,g?"after":!0),t.indexOf("*:")!==-1&&(this._hasSiblings=!0)),h&&(v[h]=v[h]||{},v[h][t]=v[h][t]||[],v[h][t].push(d)),i.chain?this:d},subscribe:function(){return this.on.apply(this,arguments)},detach:function(t,n,r){var i=this._yuievt.events,s,o=e.Node,u=o&&e.instanceOf(this,o);if(!t&&this!==e){for(s in i)i.hasOwnProperty(s)&&i[s].detach(n,r);return u&&e.Event.purgeElement(o.getDOMNode(this)),this}var a=w(t,this._yuievt.config.prefix),l=p.isArray(a)?a[0]:null,c=a?a[3]:null,h,d=e.Env.evt.handles,v,m,g,y,b=function(e,t,n){var r=e[t],i,s;if(r)for(s=r.length-1;s>=0;--s)i=r[s].evt,(i.host===n||i.el===n)&&r[s].detach()};if(l){m=d[l],t=a[1],v=u?e.Node.getDOMNode(this):this;if(m){if(t)b(m,t,v);else for(s in m)m.hasOwnProperty(s)&&b(m,s,v);return this}}else{if(p.isObject(t)&&t.detach)return t.detach(),this;if(u&&(!c||c in o.DOM_EVENTS))return g=f.call(arguments,0),g[2]=o.getDOMNode(this),e.detach.apply(e,g),this}h=e.Env.evt.plugins[c];if(e.instanceOf(this,YUI)){g=f.call(arguments,0);if(h&&h.detach)return h.detach.apply(e,g),this;if(!t||!h&&o&&t in o.DOM_EVENTS)return g[0]=t,e.Event.detach.apply(e.Event,g),this}return y=i[a[1]],y&&y.detach(n,r),this},unsubscribe:function(){return this.detach.apply(this,arguments)},detachAll:function(e){return this.detach(e)},unsubscribeAll:function(){return this.detachAll.apply(this,arguments)},publish:function(t,n){var r,i=this._yuievt,s=i.config,o=s.prefix;return typeof t=="string"?(o&&(t=b(t,o)),r=this._publish(t,s,n)):(r={},e.each(t,function(e,t){o&&(t=b(t,o)),r[t]=this._publish(t,s,e||n)},this)),r},_getFullType:function(e){var t=this._yuievt.config.prefix;return t?t+d+e:e},_publish:function(t,n,r){var i,s=this._yuievt,o=s.config,u=o.host,a=o.context,f=s.events;return i=f[t],(o.monitored&&!i||i&&i.monitored)&&this._monitor("publish",t,{args:arguments}),i||(i=f[t]=new e.CustomEvent(t,n),n||(i.host=u,i.context=a)),r&&h(i,r,!0),i},_monitor:function(e,t,n){var r,i,s;if(t){typeof t=="string"?(s=t,i=this.getEvent(t,!0)):(i=t,s=t.type);if(this._yuievt.config.monitored&&(!i||i.monitored)||i&&i.monitored)r=s+"_"+e,n.monitored=e,this.fire.call(this,r,n)}},fire:function(e){var t=typeof e=="string",n=arguments.length,r=e,i=this._yuievt,s=i.config,o=s.prefix,u,a,l,c;t&&n<=3?n===2?c=[arguments[1]]:n===3?c=[arguments[1],arguments[2]]:c=[]:c=f.call(arguments,t?1:0),t||(r=e&&e.type),o&&(r=b(r,o)),a=i.events[r],this._hasSiblings&&(l=this.getSibling(r,a),l&&!a&&(a=this.publish(r))),(s.monitored&&(!a||a.monitored)||a&&a.monitored)&&this._monitor("fire",a||r,{args:c});if(!a){if(i.hasTargets)return this.bubble({type:r},c,this);u=!0}else l&&(a.sibling=l),u=a._fire(c);return i.chain?this:u},getSibling:function(e,t){var n;return e.indexOf(d)>-1&&(e=y(e),n=this.getEvent(e,!0),n&&(n.applyConfig(t),n.bubbles=!1,n.broadcast=0)),n},getEvent:function(e,t){var n,r;return t||(n=this._yuievt.config.prefix,e=n?b(e,n):e),r=this._yuievt.events,r[e]||null},after:function(t,n){var r=f.call(arguments,0);switch(p.type(t)){case"function":return e.Do.after.apply(e.Do,arguments);case"array":case"object":r[0]._after=!0;break;default:r[0]=m+t}return this.on.apply(this,r)},before:function(){
return this.on.apply(this,arguments)}},e.EventTarget=E,e.mix(e,E.prototype),E.call(e,{bubbles:!1}),YUI.Env.globalEvents=YUI.Env.globalEvents||new E,e.Global=YUI.Env.globalEvents},"patched-v3.11.0",{requires:["oop"]});
