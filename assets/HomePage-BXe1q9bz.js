import{_ as b,r as p,u as w,o as k,c as C,w as t,a as e,b as a,I as N,d as T,e as I,f as V,g as x,h as S,t as A,i as h,j as D,k as u,l as s,m as R,n as E}from"./index-SRlnzebt.js";function P(y,f){const r=[];let l=new Date(y);for(;l<=f;){const i=l.getDay();if(i>=1&&i<=4){const c=l.getDate(),_=l.getMonth()+1,g=l.getFullYear();let d="";switch(i){case 1:d="floor 1, 2, 3, 4";break;case 2:d="floor 5, 6, 7, 8";break;case 3:d="floor 9, 10, 11, 12";break;case 4:d="floor 13, 14, 15, 16";break;default:d="Unknown"}const v="".concat(c,"/").concat(_,"/").concat(g);r.push({date:v,room:d,description:"Kitchen cleaning",amount:120})}l.setDate(l.getDate()+1)}return r}const B={__name:"HomePage",setup(y){const f=p(""),r=p(""),l=p(!1),i=p(null),c=w(),_=c.state.itemExcel,g=o=>{setTimeout(()=>{o.target.complete()},2e3)},d=()=>{i.value=P(new Date(f.value),new Date(r.value)),i.value.forEach(o=>{const n={id:null,date:o.date,room:o.room,type:"",description:o.description,time:"",amount:o.amount};c.commit("setItem",n),c.commit("SetNewItem",_)})},v=()=>{l.value=!0,(!f.value||!r.value)&&(l.value=!1);const o=new Date(f.value),n=new Date(r.value);(isNaN(o.getTime())||isNaN(n.getTime()))&&(l.value=!1),o>=n&&(l.value=!1),l.value&&d()};return(o,n)=>(k(),C(e(E),null,{default:t(()=>[a(e(V),null,{default:t(()=>[a(e(N),null,{default:t(()=>[a(e(T),null,{default:t(()=>[I("Make your invoice")]),_:1})]),_:1})]),_:1}),a(e(R),{class:"ion-padding"},{default:t(()=>[a(e(x),{slot:"fixed",onIonRefresh:n[0]||(n[0]=m=>g(m))},{default:t(()=>[a(e(S))]),_:1}),I(" "+A(l.value)+" ",1),a(e(h),{class:"ion-padding"},{default:t(()=>[a(e(D),null,{default:t(()=>[a(e(u),null,{default:t(()=>[a(e(s),{label:"Name",value:"Angie Katherine Fierro Rojas",readonly:!0})]),_:1}),a(e(u),null,{default:t(()=>[a(e(s),{label:"ABN",value:"34632148828",readonly:!0})]),_:1}),a(e(u),null,{default:t(()=>[a(e(s),{label:"Invoice",value:"14"})]),_:1}),a(e(u),null,{default:t(()=>[a(e(s),{label:"Start",type:"date",modelValue:f.value,"onUpdate:modelValue":n[1]||(n[1]=m=>f.value=m),onChange:v},null,8,["modelValue"])]),_:1}),a(e(u),null,{default:t(()=>[a(e(s),{label:"End",type:"date",modelValue:r.value,"onUpdate:modelValue":n[2]||(n[2]=m=>r.value=m),onChange:v},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),a(e(h),{class:"ion-padding"},{default:t(()=>[a(e(D),null,{default:t(()=>[a(e(u),null,{default:t(()=>[a(e(s),{label:"To",value:"Corporate Clean Property Services",readonly:!0})]),_:1}),a(e(u),null,{default:t(()=>[a(e(s),{label:"Address",value:"128 Waymouth St",readonly:!0})]),_:1}),a(e(u),null,{default:t(()=>[a(e(s),{value:"Adelaide",readonly:!0})]),_:1}),a(e(u),null,{default:t(()=>[a(e(s),{value:"SA  5000 ",readonly:!0})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},K=b(B,[["__scopeId","data-v-32d9fac0"]]);export{K as default};
