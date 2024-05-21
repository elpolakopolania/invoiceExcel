"use strict";(self["webpackChunkvueionicinvoice"]=self["webpackChunkvueionicinvoice"]||[]).push([[4550],{4550:function(t,e,n){n.r(e),n.d(e,{ion_route:function(){return a},ion_route_redirect:function(){return c},ion_router:function(){return G},ion_router_link:function(){return z}});n(4114),n(4603),n(7566),n(8721);var r=n(8542),o=n(5356),i=n(8342),u=n(160),s=n(9572),a=function(){function t(t){(0,o.r)(this,t),this.ionRouteDataChanged=(0,o.e)(this,"ionRouteDataChanged",7),this.url=""}return t.prototype.onUpdate=function(t){this.ionRouteDataChanged.emit(t)},t.prototype.onComponentProps=function(t,e){if(t!==e){var n=t?Object.keys(t):[],r=e?Object.keys(e):[];if(n.length===r.length)for(var o=0,i=n;o<i.length;o++){var u=i[o];if(t[u]!==e[u])return void this.onUpdate(t)}else this.onUpdate(t)}},t.prototype.connectedCallback=function(){this.ionRouteDataChanged.emit()},Object.defineProperty(t,"watchers",{get:function(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}},enumerable:!1,configurable:!0}),t}(),c=function(){function t(t){(0,o.r)(this,t),this.ionRouteRedirectChanged=(0,o.e)(this,"ionRouteRedirectChanged",7)}return t.prototype.propDidChange=function(){this.ionRouteRedirectChanged.emit()},t.prototype.connectedCallback=function(){this.ionRouteRedirectChanged.emit()},Object.defineProperty(t,"watchers",{get:function(){return{from:["propDidChange"],to:["propDidChange"]}},enumerable:!1,configurable:!0}),t}(),h="root",l="forward",f="back",d=function(t){var e=t.filter((function(t){return t.length>0})).join("/");return"/"+e},p=function(t,e,n){var r=d(t);return e&&(r="#"+r),void 0!==n&&(r+="?"+n),r},v=function(t,e,n,o,i,u,s){var a=p((0,r.fX)((0,r.fX)([],y(e).segments),o),n,s);i===l?t.pushState(u,"",a):t.replaceState(u,"",a)},g=function(t){for(var e=[],n=0,r=t;n<r.length;n++)for(var o=r[n],i=0,u=o.path;i<u.length;i++){var s=u[i];if(":"===s[0]){var a=o.params&&o.params[s.slice(1)];if(!a)return null;e.push(a)}else""!==s&&e.push(s)}return e},m=function(t,e){if(t.length>e.length)return null;if(t.length<=1&&""===t[0])return e;for(var n=0;n<t.length;n++)if(t[n]!==e[n])return null;return e.length===t.length?[""]:e.slice(t.length)},b=function(t,e,n){var r=y(e).segments,o=n?t.hash.slice(1):t.pathname,i=y(o).segments;return m(r,i)},y=function(t){var e,n=[""];if(null!=t){var r=t.indexOf("?");r>-1&&(e=t.substr(r+1),t=t.substr(0,r)),n=t.split("/").map((function(t){return t.trim()})).filter((function(t){return t.length>0})),0===n.length&&(n=[""])}return{segments:n,queryString:e}},w=function(t){console.group("[ion-core] ROUTES["+t.length+"]");for(var e=function(t){var e=[];t.forEach((function(t){return e.push.apply(e,t.path)}));var n=t.map((function(t){return t.id}));console.debug("%c "+d(e),"font-weight: bold; padding-left: 20px","=>\t","("+n.join(", ")+")")},n=0,r=t;n<r.length;n++){var o=r[n];e(o)}console.groupEnd()},R=function(t){console.group("[ion-core] REDIRECTS["+t.length+"]");for(var e=0,n=t;e<n.length;e++){var r=n[e];r.to&&console.debug("FROM: ","$c "+d(r.from),"font-weight: bold"," TO: ","$c "+d(r.to.segments),"font-weight: bold")}console.groupEnd()},C=function(t,e,n,o,u,s){return void 0===u&&(u=!1),(0,r.sH)(void 0,void 0,void 0,(function(){var a,c,l,f;return(0,r.YH)(this,(function(r){switch(r.label){case 0:return r.trys.push([0,6,,7]),a=S(t),o>=e.length||!a?[2,u]:[4,new Promise((function(t){return(0,i.c)(a,t)}))];case 1:return r.sent(),c=e[o],[4,a.setRouteId(c.id,c.params,n,s)];case 2:return l=r.sent(),l.changed&&(n=h,u=!0),[4,C(l.element,e,n,o+1,u,s)];case 3:return u=r.sent(),l.markVisible?[4,l.markVisible()]:[3,5];case 4:r.sent(),r.label=5;case 5:return[2,u];case 6:return f=r.sent(),console.error(f),[2,!1];case 7:return[2]}}))}))},H=function(t){return(0,r.sH)(void 0,void 0,void 0,(function(){var e,n,o,i;return(0,r.YH)(this,(function(r){switch(r.label){case 0:e=[],o=t,r.label=1;case 1:return n=S(o),n?[4,n.getRouteId()]:[3,3];case 2:return i=r.sent(),i?(o=i.element,i.element=void 0,e.push(i),[3,4]):[3,5];case 3:return[3,5];case 4:return[3,1];case 5:return[2,{ids:e,outlet:n}]}}))}))},P=function(){return S(document.body)?Promise.resolve():new Promise((function(t){window.addEventListener("ionNavWillLoad",t,{once:!0})}))},k=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",S=function(t){if(t){if(t.matches(k))return t;var e=t.querySelector(k);return null!==e&&void 0!==e?e:void 0}},E=function(t,e){var n=e.from,r=e.to;if(void 0===r)return!1;if(n.length>t.length)return!1;for(var o=0;o<n.length;o++){var i=n[o];if("*"===i)return!0;if(i!==t[o])return!1}return n.length===t.length},D=function(t,e){return e.find((function(e){return E(t,e)}))},L=function(t,e){for(var n=Math.min(t.length,e.length),r=0,o=0;o<n;o++){var i=t[o],u=e[o];if(i.id.toLowerCase()!==u.id)break;if(i.params){var s=Object.keys(i.params);if(s.length===u.path.length)for(var a=s.map((function(t){return":"+t})),c=0;c<a.length;c++){if(a[c].toLowerCase()!==u.path[c])break;r++}}r++}return r},O=function(t,e){for(var n,r=new x(t),o=!1,i=0;i<e.length;i++){var u=e[i].path;if(""===u[0])o=!0;else{for(var s=0,a=u;s<a.length;s++){var c=a[s],h=r.next();if(":"===c[0]){if(""===h)return null;n=n||[];var l=n[i]||(n[i]={});l[c.slice(1)]=h}else if(h!==c)return null}o=!1}}var f=!o||o===(""===r.next());return f?n?e.map((function(t,e){return{id:t.id,path:t.path,params:j(t.params,n[e]),beforeEnter:t.beforeEnter,beforeLeave:t.beforeLeave}})):e:null},j=function(t,e){return t||e?Object.assign(Object.assign({},t),e):void 0},N=function(t,e){for(var n=null,r=0,o=0,i=e;o<i.length;o++){var u=i[o],s=L(t,u);s>r&&(n=u,r=s)}return n?n.map((function(e,n){return{id:e.id,path:e.path,params:j(e.params,t[n]&&t[n].params)}})):null},Y=function(t,e){for(var n=null,r=0,o=0,i=e;o<i.length;o++){var u=i[o],s=O(t,u);if(null!==s){var a=U(s);a>r&&(r=a,n=s)}}return n},U=function(t){for(var e=1,n=1,r=0,o=t;r<o.length;r++)for(var i=o[r],u=0,s=i.path;u<s.length;u++){var a=s[u];":"===a[0]?e+=Math.pow(1,n):""!==a&&(e+=Math.pow(2,n)),n++}return e},x=function(){function t(t){this.path=t.slice()}return t.prototype.next=function(){return this.path.length>0?this.path.shift():""},t}(),W=function(t,e){return e in t?t[e]:t.hasAttribute(e)?t.getAttribute(e):null},q=function(t){return Array.from(t.children).filter((function(t){return"ION-ROUTE-REDIRECT"===t.tagName})).map((function(t){var e=W(t,"to");return{from:y(W(t,"from")).segments,to:null==e?void 0:y(e)}}))},A=function(t){return I(T(t))},T=function(t){return Array.from(t.children).filter((function(t){return"ION-ROUTE"===t.tagName&&t.component})).map((function(t){var e=W(t,"component");return{path:y(W(t,"url")).segments,id:e.toLowerCase(),params:t.componentProps,beforeLeave:t.beforeLeave,beforeEnter:t.beforeEnter,children:T(t)}}))},I=function(t){for(var e=[],n=0,r=t;n<r.length;n++){var o=r[n];_([],e,o)}return e},_=function(t,e,n){if(t=t.slice(),t.push({id:n.id,path:n.path,params:n.params,beforeLeave:n.beforeLeave,beforeEnter:n.beforeEnter}),0!==n.children.length)for(var r=0,o=n.children;r<o.length;r++){var i=o[r];_(t,e,i)}else e.push(t)},G=function(){function t(t){(0,o.r)(this,t),this.ionRouteWillChange=(0,o.e)(this,"ionRouteWillChange",7),this.ionRouteDidChange=(0,o.e)(this,"ionRouteDidChange",7),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0}return t.prototype.componentWillLoad=function(){return(0,r.sH)(this,void 0,void 0,(function(){var t,e,n;return(0,r.YH)(this,(function(r){switch(r.label){case 0:return[4,P()];case 1:return r.sent(),[4,this.runGuards(this.getPath())];case 2:return t=r.sent(),!0===t?[3,5]:"object"!==typeof t?[3,4]:(e=t.redirect,n=y(e),this.setPath(n.segments,h,n.queryString),[4,this.writeNavStateRoot(n.segments,h)]);case 3:r.sent(),r.label=4;case 4:return[3,7];case 5:return[4,this.onRoutesChanged()];case 6:r.sent(),r.label=7;case 7:return[2]}}))}))},t.prototype.componentDidLoad=function(){window.addEventListener("ionRouteRedirectChanged",(0,i.o)(this.onRedirectChanged.bind(this),10)),window.addEventListener("ionRouteDataChanged",(0,i.o)(this.onRoutesChanged.bind(this),100))},t.prototype.onPopState=function(){return(0,r.sH)(this,void 0,void 0,(function(){var t,e,n;return(0,r.YH)(this,(function(r){switch(r.label){case 0:return t=this.historyDirection(),e=this.getPath(),[4,this.runGuards(e)];case 1:if(n=r.sent(),!0!==n){if("object"!==typeof n)return[2,!1];e=y(n.redirect).segments}return[2,this.writeNavStateRoot(e,t)]}}))}))},t.prototype.onBackButton=function(t){var e=this;t.detail.register(0,(function(t){e.back(),t()}))},t.prototype.canTransition=function(){return(0,r.sH)(this,void 0,void 0,(function(){var t;return(0,r.YH)(this,(function(e){switch(e.label){case 0:return[4,this.runGuards()];case 1:return t=e.sent(),!0!==t?"object"===typeof t?[2,t.redirect]:[2,!1]:[2,!0]}}))}))},t.prototype.push=function(t,e,n){return void 0===e&&(e="forward"),(0,r.sH)(this,void 0,void 0,(function(){var o,i;return(0,r.YH)(this,(function(r){switch(r.label){case 0:return t.startsWith(".")&&(t=new URL(t,window.location.href).pathname),o=y(t),[4,this.runGuards(o.segments)];case 1:if(i=r.sent(),!0!==i){if("object"!==typeof i)return[2,!1];o=y(i.redirect)}return this.setPath(o.segments,e,o.queryString),[2,this.writeNavStateRoot(o.segments,e,n)]}}))}))},t.prototype.back=function(){return window.history.back(),Promise.resolve(this.waitPromise)},t.prototype.printDebug=function(){return(0,r.sH)(this,void 0,void 0,(function(){return(0,r.YH)(this,(function(t){return w(A(this.el)),R(q(this.el)),[2]}))}))},t.prototype.navChanged=function(t){return(0,r.sH)(this,void 0,void 0,(function(){var e,n,o,i,u,s;return(0,r.YH)(this,(function(r){switch(r.label){case 0:return this.busy?(console.warn("[ion-router] router is busy, navChanged was cancelled"),[2,!1]):[4,H(window.document.body)];case 1:return e=r.sent(),n=e.ids,o=e.outlet,i=A(this.el),u=N(n,i),u?(s=g(u),s?(this.setPath(s,t),[4,this.safeWriteNavState(o,u,h,s,null,n.length)]):(console.warn("[ion-router] router could not match path because some required param is missing"),[2,!1])):(console.warn("[ion-router] no matching URL for ",n.map((function(t){return t.id}))),[2,!1]);case 2:return r.sent(),[2,!0]}}))}))},t.prototype.onRedirectChanged=function(){var t=this.getPath();t&&D(t,q(this.el))&&this.writeNavStateRoot(t,h)},t.prototype.onRoutesChanged=function(){return this.writeNavStateRoot(this.getPath(),h)},t.prototype.historyDirection=function(){var t,e=window;null===e.history.state&&(this.state++,e.history.replaceState(this.state,e.document.title,null===(t=e.document.location)||void 0===t?void 0:t.href));var n=e.history.state,r=this.lastState;return this.lastState=n,n>r||n>=r&&r>0?l:n<r?f:h},t.prototype.writeNavStateRoot=function(t,e,n){return(0,r.sH)(this,void 0,void 0,(function(){var o,i,u,s,a,c,h,l;return(0,r.YH)(this,(function(r){return t?(o=q(this.el),i=D(t,o),u=null,i&&(s=i.to,a=s.segments,c=s.queryString,this.setPath(a,e,c),u=i.from,t=a),h=A(this.el),l=Y(t,h),l?[2,this.safeWriteNavState(document.body,l,e,t,u,0,n)]:(console.error("[ion-router] the path does not match any route"),[2,!1])):(console.error("[ion-router] URL is not part of the routing set"),[2,!1])}))}))},t.prototype.safeWriteNavState=function(t,e,n,o,i,u,s){return void 0===u&&(u=0),(0,r.sH)(this,void 0,void 0,(function(){var a,c,h;return(0,r.YH)(this,(function(r){switch(r.label){case 0:return[4,this.lock()];case 1:a=r.sent(),c=!1,r.label=2;case 2:return r.trys.push([2,4,,5]),[4,this.writeNavState(t,e,n,o,i,u,s)];case 3:return c=r.sent(),[3,5];case 4:return h=r.sent(),console.error(h),[3,5];case 5:return a(),[2,c]}}))}))},t.prototype.lock=function(){return(0,r.sH)(this,void 0,void 0,(function(){var t,e;return(0,r.YH)(this,(function(n){switch(n.label){case 0:return t=this.waitPromise,this.waitPromise=new Promise((function(t){return e=t})),void 0===t?[3,2]:[4,t];case 1:n.sent(),n.label=2;case 2:return[2,e]}}))}))},t.prototype.runGuards=function(t,e){return void 0===t&&(t=this.getPath()),(0,r.sH)(this,void 0,void 0,(function(){var n,o,i,u,s,a,c;return(0,r.YH)(this,(function(r){switch(r.label){case 0:return void 0===e&&(e=y(this.previousPath).segments),t&&e?(n=A(this.el),o=Y(e,n),i=o&&o[o.length-1].beforeLeave,i?[4,i()]:[3,2]):[2,!0];case 1:return s=r.sent(),[3,3];case 2:s=!0,r.label=3;case 3:return u=s,!1===u||"object"===typeof u?[2,u]:(a=Y(t,n),c=a&&a[a.length-1].beforeEnter,[2,!c||c()])}}))}))},t.prototype.writeNavState=function(t,e,n,o,i,u,s){return void 0===u&&(u=0),(0,r.sH)(this,void 0,void 0,(function(){var a,c;return(0,r.YH)(this,(function(r){switch(r.label){case 0:return this.busy?(console.warn("[ion-router] router is busy, transition was cancelled"),[2,!1]):(this.busy=!0,a=this.routeChangeEvent(o,i),a&&this.ionRouteWillChange.emit(a),[4,C(t,e,n,u,!1,s)]);case 1:return c=r.sent(),this.busy=!1,a&&this.ionRouteDidChange.emit(a),[2,c]}}))}))},t.prototype.setPath=function(t,e,n){this.state++,v(window.history,this.root,this.useHash,t,e,this.state,n)},t.prototype.getPath=function(){return b(window.location,this.root,this.useHash)},t.prototype.routeChangeEvent=function(t,e){var n=this.previousPath,r=d(t);if(this.previousPath=r,r===n)return null;var o=e?d(e):null;return{from:n,redirectedFrom:o,to:r}},Object.defineProperty(t.prototype,"el",{get:function(){return(0,o.i)(this)},enumerable:!1,configurable:!0}),t}(),M=":host{--background:transparent;--color:var(--ion-color-primary, #3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}",z=function(){function t(t){var e=this;(0,o.r)(this,t),this.routerDirection="forward",this.onClick=function(t){(0,s.o)(e.href,t,e.routerDirection,e.routerAnimation)}}return t.prototype.render=function(){var t,e=(0,u.b)(this),n={href:this.href,rel:this.rel,target:this.target};return(0,o.h)(o.H,{onClick:this.onClick,class:(0,s.c)(this.color,(t={},t[e]=!0,t["ion-activatable"]=!0,t))},(0,o.h)("a",Object.assign({},n),(0,o.h)("slot",null)))},t}();z.style=M},9572:function(t,e,n){n.d(e,{c:function(){return i},g:function(){return s},h:function(){return o},o:function(){return c}});n(4114);var r=n(8542),o=function(t,e){return null!==e.closest(t)},i=function(t,e){var n;return"string"===typeof t&&t.length>0?Object.assign((n={"ion-color":!0},n["ion-color-"+t]=!0,n),e):e},u=function(t){if(void 0!==t){var e=Array.isArray(t)?t:t.split(" ");return e.filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t}))}return[]},s=function(t){var e={};return u(t).forEach((function(t){return e[t]=!0})),e},a=/^[a-z][a-z0-9+\-.]*:/,c=function(t,e,n,o){return(0,r.sH)(void 0,void 0,void 0,(function(){var i;return(0,r.YH)(this,(function(r){return null!=t&&"#"!==t[0]&&!a.test(t)&&(i=document.querySelector("ion-router"),i)?(null!=e&&e.preventDefault(),[2,i.push(t,n,o)]):[2,!1]}))}))}}}]);
//# sourceMappingURL=4550.c8810ca0.js.map