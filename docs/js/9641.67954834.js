"use strict";(self["webpackChunkvueionicinvoice"]=self["webpackChunkvueionicinvoice"]||[]).push([[9641],{9641:function(e,n,t){t.r(n),t.d(n,{KEYBOARD_DID_CLOSE:function(){return o},KEYBOARD_DID_OPEN:function(){return i},copyVisualViewport:function(){return D},keyboardDidClose:function(){return g},keyboardDidOpen:function(){return v},keyboardDidResize:function(){return b},resetKeyboardAssist:function(){return f},setKeyboardClose:function(){return p},setKeyboardOpen:function(){return h},startKeyboardAssist:function(){return s},trackViewportChanges:function(){return l}});var i="ionKeyboardDidShow",o="ionKeyboardDidHide",r=150,u={},a={},c=!1,f=function(){u={},a={},c=!1},s=function(e){d(e),e.visualViewport&&(a=D(e.visualViewport),e.visualViewport.onresize=function(){l(e),v()||b(e)?h(e):g(e)&&p(e)})},d=function(e){e.addEventListener("keyboardDidShow",(function(n){return h(e,n)})),e.addEventListener("keyboardDidHide",(function(){return p(e)}))},h=function(e,n){w(e,n),c=!0},p=function(e){y(e),c=!1},v=function(){var e=(u.height-a.height)*a.scale;return!c&&u.width===a.width&&e>r},b=function(e){return c&&!g(e)},g=function(e){return c&&a.height===e.innerHeight},w=function(e,n){var t=n?n.keyboardHeight:e.innerHeight-a.height,o=new CustomEvent(i,{detail:{keyboardHeight:t}});e.dispatchEvent(o)},y=function(e){var n=new CustomEvent(o);e.dispatchEvent(n)},l=function(e){u=Object.assign({},a),a=D(e.visualViewport)},D=function(e){return{width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale}}}}]);
//# sourceMappingURL=9641.67954834.js.map