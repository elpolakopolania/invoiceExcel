import{_ as U,r as v,u as N,o as x,c as T,w as o,a as e,b as l,I as _,d as C,e as E,f as R,g as A,h as S,i as b,j as D,k as s,l as m,m as B,n as H}from"./index-Bmnwp69n.js";function K(I,p){const V=[];let n=new Date(I);for(;n<=p;){const c=n.getDay();if(c>=1&&c<=4){const y=n.getDate(),i=n.getMonth()+1,d=n.getFullYear();let u="";switch(c){case 1:u="floor 1, 2, 3, 4";break;case 2:u="floor 5, 6, 7, 8";break;case 3:u="floor 9, 10, 11, 12";break;case 4:u="floor 13, 14, 15, 16";break;default:u="Unknown"}const f="".concat(y,"/").concat(i,"/").concat(d);V.push({date:f,room:u,description:"Kitchen cleaning",amount:120})}n.setDate(n.getDate()+1)}return V}const M={__name:"HomePage",setup(I){const p=v(!1),V=v(null),n=N(),c=n.state.itemExcel,y=n.state.mainExcel,i=n.state.employee,d=n.state.company,u=v(null),f=v(null),w=r=>{setTimeout(()=>{r.target.complete()},2e3)},k=()=>{n.dispatch("actionRemoveItemsKitchen"),V.value=K(new Date(f.value),new Date(u.value)),V.value.forEach(r=>{const a={id:null,date:r.date,room:r.room,type:"1",description:r.description,time:"",amount:r.amount};n.commit("setItem",a),n.commit("SetNewItem",c),n.dispatch("calculateTotal")})},g=()=>{n.commit("setStartDate",f.value),n.commit("setEndDate",u.value),p.value=!0,(!f.value||!u.value)&&(p.value=!1);const r=new Date(f.value),a=new Date(u.value);(isNaN(r.getTime())||isNaN(a.getTime()))&&(p.value=!1),r>=a&&(p.value=!1),p.value&&k()};return(r,a)=>(x(),T(e(H),null,{default:o(()=>[l(e(R),null,{default:o(()=>[l(e(_),null,{default:o(()=>[l(e(C),null,{default:o(()=>[E("Make your invoice")]),_:1})]),_:1})]),_:1}),l(e(B),{class:"ion-padding"},{default:o(()=>[l(e(A),{slot:"fixed",onIonRefresh:a[0]||(a[0]=t=>w(t))},{default:o(()=>[l(e(S))]),_:1}),l(e(b),{class:"ion-padding"},{default:o(()=>[l(e(D),null,{default:o(()=>[l(e(s),null,{default:o(()=>[l(e(m),{label:"Name",modelValue:e(i).name,"onUpdate:modelValue":a[1]||(a[1]=t=>e(i).name=t),readonly:!0},null,8,["modelValue"])]),_:1}),l(e(s),null,{default:o(()=>[l(e(m),{label:"Last name",modelValue:e(i).lastname,"onUpdate:modelValue":a[2]||(a[2]=t=>e(i).lastname=t),readonly:!0},null,8,["modelValue"])]),_:1}),l(e(s),null,{default:o(()=>[l(e(m),{label:"ABN",modelValue:e(i).abn,"onUpdate:modelValue":a[3]||(a[3]=t=>e(i).abn=t),readonly:!0},null,8,["modelValue"])]),_:1}),l(e(s),null,{default:o(()=>[l(e(m),{label:"Invoice",modelValue:e(y).invioceNumer,"onUpdate:modelValue":a[4]||(a[4]=t=>e(y).invioceNumer=t)},null,8,["modelValue"])]),_:1}),l(e(s),null,{default:o(()=>[l(e(m),{label:"Start",type:"date",modelValue:f.value,"onUpdate:modelValue":a[5]||(a[5]=t=>f.value=t),onChange:g},null,8,["modelValue"])]),_:1}),l(e(s),null,{default:o(()=>[l(e(m),{label:"End",type:"date",modelValue:u.value,"onUpdate:modelValue":a[6]||(a[6]=t=>u.value=t),onChange:g},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),l(e(b),{class:"ion-padding"},{default:o(()=>[l(e(D),null,{default:o(()=>[l(e(s),null,{default:o(()=>[l(e(m),{label:"To",modelValue:e(d).name,"onUpdate:modelValue":a[7]||(a[7]=t=>e(d).name=t),readonly:!0},null,8,["modelValue"])]),_:1}),l(e(s),null,{default:o(()=>[l(e(m),{label:"Address",modelValue:e(d).address,"onUpdate:modelValue":a[8]||(a[8]=t=>e(d).address=t),readonly:!0},null,8,["modelValue"])]),_:1}),l(e(s),null,{default:o(()=>[l(e(m),{modelValue:e(d).city,"onUpdate:modelValue":a[9]||(a[9]=t=>e(d).city=t),readonly:!0},null,8,["modelValue"])]),_:1}),l(e(s),null,{default:o(()=>[l(e(m),{modelValue:e(d).stateA,"onUpdate:modelValue":a[10]||(a[10]=t=>e(d).stateA=t),readonly:!0},null,8,["modelValue"])]),_:1}),l(e(s),null,{default:o(()=>[l(e(m),{modelValue:e(d).postcode,"onUpdate:modelValue":a[11]||(a[11]=t=>e(d).postcode=t),readonly:!0},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},$=U(M,[["__scopeId","data-v-fddd11ef"]]);export{$ as default};
