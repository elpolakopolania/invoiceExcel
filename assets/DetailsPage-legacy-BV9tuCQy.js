System.register(["./index-legacy-DHHn3nle.js"],(function(e,l){"use strict";var n,t,o,a,u,i,d,s,c,f,r,m,_,p,g,I,b,v,h,y,x;return{setters:[e=>{n=e._,t=e.I,o=e.a,a=e.b,u=e.c,i=e.d,d=e.e,s=e.h,c=e.n,f=e.p,r=e.q,m=e.s,_=e.f,p=e.t,g=e.r,I=e.o,b=e.k,v=e.w,h=e.l,y=e.m,x=e.u}],execute:function(){var l=document.createElement("style");l.textContent=".example-content[data-v-eba197f6]{display:flex;align-items:center;justify-content:center;height:100%}\n",document.head.appendChild(l);const C={ref:"myDiv"};e("default",n({components:{IonHeader:t,IonToolbar:o,IonTitle:a,IonContent:u,IonPage:i,IonList:d,IonItem:s,IonLabel:c,IonButtons:f,IonButton:r,IonModal:m,IonInput:_},mounted(){console.log(this.$refs.myDiv)},setup(){const e=p("This modal example uses triggers to automatically open a modal when the button is clicked."),l=p(),n=p();return{message:e,modal:l,input:n,cancel:()=>l.value.dismiss(null,"cancel"),confirm:()=>{console.log(this.$refs.myDiv);const e=n.value.value;l.value.dismiss(e,"confirm")},onWillDismiss:l=>{"confirm"===l.detail.role&&(e.value=`Hello, ${l.detail.data}!`)}}}},[["render",function(e,l,n,t,o,a){const u=g("ion-title"),i=g("ion-toolbar"),d=g("ion-header"),s=g("ion-label"),c=g("ion-button"),f=g("ion-item"),r=g("ion-list"),m=g("ion-buttons"),_=g("ion-input"),p=g("ion-content"),D=g("ion-modal"),k=g("ion-page");return I(),b(k,null,{default:v((()=>[h(d,null,{default:v((()=>[h(i,null,{default:v((()=>[h(u,null,{default:v((()=>[y("Details")])),_:1})])),_:1})])),_:1}),h(p,null,{default:v((()=>[h(r,{inset:!0},{default:v((()=>[h(f,null,{default:v((()=>[h(s,null,{default:v((()=>[y("9/05/2024 9.23 floor and toilet bowl Service clean $ 7.5")])),_:1}),h(c,{id:"open-modal",expand:"block"},{default:v((()=>[y("Open")])),_:1})])),_:1}),h(f,null,{default:v((()=>[h(s,null,{default:v((()=>[y("Mega Man X")])),_:1})])),_:1}),h(f,null,{default:v((()=>[h(s,null,{default:v((()=>[y("The Legend of Zelda")])),_:1})])),_:1}),h(f,null,{default:v((()=>[h(s,null,{default:v((()=>[y("Pac-Man")])),_:1})])),_:1}),h(f,null,{default:v((()=>[h(s,null,{default:v((()=>[y("Super Mario World")])),_:1})])),_:1})])),_:1}),x("div",C,"Contenido",512),h(D,{ref:"modal",trigger:"open-modal",onWillDismiss:t.onWillDismiss},{default:v((()=>[h(d,null,{default:v((()=>[h(i,null,{default:v((()=>[h(m,{slot:"start"},{default:v((()=>[h(c,{onClick:l[0]||(l[0]=e=>t.cancel())},{default:v((()=>[y("Cancel")])),_:1})])),_:1}),h(u,null,{default:v((()=>[y("Welcome")])),_:1}),h(m,{slot:"end"},{default:v((()=>[h(c,{strong:!0,onClick:l[1]||(l[1]=e=>t.confirm())},{default:v((()=>[y("Confirm")])),_:1})])),_:1})])),_:1})])),_:1}),h(p,{class:"ion-padding"},{default:v((()=>[h(f,null,{default:v((()=>[h(_,{label:"Enter your name","label-placement":"stacked",ref:"input",type:"text",placeholder:"Your name"},null,512)])),_:1})])),_:1})])),_:1},8,["onWillDismiss"])])),_:1})])),_:1})}],["__scopeId","data-v-eba197f6"]]))}}}));
