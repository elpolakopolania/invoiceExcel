import{y as h,z as D,A as M}from"./index-CwBzBniN.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const k=(n,m,g,p,X)=>{const c=n.ownerDocument.defaultView;let s=h(n);const w=t=>{const{startX:e}=t;return s?e>=c.innerWidth-50:e<=50},a=t=>s?-t.deltaX:t.deltaX,y=t=>s?-t.velocityX:t.velocityX;return D({el:n,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:t=>(s=h(n),w(t)&&m()),onStart:g,onMove:t=>{const e=a(t)/c.innerWidth;p(e)},onEnd:t=>{const o=a(t),e=c.innerWidth,r=o/e,i=y(t),v=e/2,l=i>=0&&(i>.2||o>v),u=(l?1-r:r)*e;let d=0;if(u>5){const f=u/Math.abs(i);d=Math.min(f,540)}X(l,r<=0?.01:M(0,r,.9999),d)}})};export{k as createSwipeBackGesture};
