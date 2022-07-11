import{Q as T}from"./QPage.37fc11d1.js";import{Q as y,a as q,b,c as A}from"./QTabPanels.78faf894.js";import{d as $,bT as R,bK as W,dh as B,dg as D,r as g,aH as F,b8 as w,ac as P,bM as S,_ as k,g as o,h as r,k as t,ad as v,bd as d,al as i,a2 as p,aS as f,bQ as U,bO as E,Z as n,l as V,ae as x,aT as N,d7 as H}from"./index.2d58de3a.js";import{Q as C}from"./QMarkupTable.d72cd5fe.js";import{Q as M}from"./QSplitter.0fece2df.js";import{analytics as Q}from"./analytics.851f3814.js";import"./use-panel.635e7b44.js";const z=$({components:{},setup(){const e=R();e.loadingBar.setDefaults({color:"accent",size:"10px",position:"top"});const{assignmentsForProject:l}=W(B()),{projectCrafts:_}=W(D()),h=g(null),u=g(null),m=g(null),a=["bg-primary text-white","bg-info text-white","bg-accent text-dark","bg-dark text-white"];return F(async()=>{e.loadingBar.start(),l.value.length>0&&(u.value=await Q.calcRateData({assignments:l.value.filter(c=>!c[112]),projectCrafts:_.value}),h.value=u.value[0][3]),e.loadingBar.stop()}),w(l,async()=>{m.value=null,e.loadingBar.start(),l.value.length>0&&(u.value=await Q.calcRateData({assignments:l.value.filter(c=>!c[112]),projectCrafts:_.value}),h.value=u.value[0][3]),e.loadingBar.stop()}),w(m,async(c,Dt)=>{m.value&&console.log(m.value)}),{craftWageArray:P(()=>u.value?u.value:[]),colors:a,clickedCraft:m,tab:h,splitValue:g(20),helpers:S}}}),I={class:"row text-caption"},J={class:"col-12 col-md-2"},G=t("div",null,[t("span",{class:"text-accent"},"Total Employees:")],-1),K={class:"text-white q-ml-sm"},L={class:"col-12 col-md-2"},O=t("div",null,[t("span",{class:"text-accent"},"Classifications:")],-1),Z={class:"text-white q-ml-sm"},X={class:"col-12 col-md-2"},Y=t("div",null,[t("span",{class:"text-accent"},"Avg. Wage:")],-1),j={class:"text-white q-ml-sm"},tt={class:"col-12 col-md-2"},et=t("div",null,[t("span",{class:"text-accent"},"Avg. Craft Wage:")],-1),at={class:"text-white q-ml-sm"},st={class:"col-12 col-md-3"},lt=t("div",null,[t("span",{class:"text-accent"},"Wage Status")],-1),ot={class:"text-white q-ml-sm"},nt=t("thead",{class:"bg-dark text-white"},[t("tr",null,[t("th",{class:"text-left"},"Job Title"),t("th",{class:"text-right"},"# of Employees"),t("th",{class:"text-right"},"Fixed Rate"),t("th",{class:"text-right"},"Average Rate"),t("th",{class:"text-right"},"Difference")])],-1),it=["onClick"],ct={class:"text-left"},dt={class:"text-right"},rt={class:"text-right"},ut={class:"text-right"},mt={class:"text-right"},ht={key:1},_t=t("td",{colspan:"100%",class:"text-center"},"No classifications to show",-1),pt=[_t],gt={key:2},ft={colspan:"100%"},vt=t("thead",{class:"bg-dark text-white"},[t("tr",null,[t("th",{class:"text-left"},"Name"),t("th",{class:"text-left"},"Employee ID"),t("th",{class:"text-left"},"Payroll ID"),t("th",{class:"text-left"},"Job Number"),t("th",{class:"text-right"},"Rate")])],-1),xt={class:"text-left"},yt={class:"text-left"},bt={class:"text-left"},$t={class:"text-left"},kt={class:"text-right"},Wt={key:1},wt=t("div",{class:"text-h6"},"Not available on mobile yet.",-1),Vt=[wt];function Ct(e,l,_,h,u,m){return o(),r("div",null,[t("div",null,[e.$q.screen.gt.sm&&e.craftWageArray?(o(),v(M,{key:0,modelValue:e.splitValue,"onUpdate:modelValue":l[2]||(l[2]=a=>e.splitValue=a)},{before:d(()=>[i(q,{modelValue:e.tab,"onUpdate:modelValue":l[0]||(l[0]=a=>e.tab=a),vertical:e.$q.screen.gt.md,align:"left","indicator-color":"accent","active-bg-color":"dark","active-color":"white"},{default:d(()=>[(o(!0),r(p,null,f(e.craftWageArray,a=>(o(),v(y,{key:a[3],name:a[3],label:a[10]},null,8,["name","label"]))),128))]),_:1},8,["modelValue","vertical"])]),after:d(()=>[i(A,{modelValue:e.tab,"onUpdate:modelValue":l[1]||(l[1]=a=>e.tab=a),animated:"",vertical:e.$q.screen.gt.md},{default:d(()=>[(o(!0),r(p,null,f(e.craftWageArray,a=>(o(),v(b,{key:a[3],name:a[3],class:"q-pt-none"},{default:d(()=>[t("div",null,[i(U,{class:"q-mb-md bg-dark"},{default:d(()=>[i(E,{class:"q-pa-sm"},{default:d(()=>[t("div",I,[t("div",J,[G,t("div",null,[t("span",K,n(a.craftRoster.length),1)])]),t("div",L,[O,t("div",null,[t("span",Z,n(a.classifications.length),1)])]),t("div",X,[Y,t("div",null,[t("span",j,"$"+n(a.avgWage.toFixed(2)),1)])]),t("div",tt,[et,t("div",null,[t("span",at,"$"+n(a.avgCraftWorkerWage.toFixed(2)),1)])]),t("div",st,[lt,t("div",null,[t("span",ot,n(a.highWages?`${a.highWageCount} with High Wages`:"Good"),1)])])])]),_:2},1024)]),_:2},1024),i(C,null,{default:d(()=>[nt,t("tbody",null,[(o(!0),r(p,null,f(a.classifications,s=>(o(),r(p,{key:s[3]},[s?(o(),r("tr",{key:0,class:V(["cursor-pointer",s.analytics.highWages?"bg-negative text-white":""]),onClick:c=>s.expanded=!s.expanded},[t("td",ct,n(s[18]),1),t("td",dt,n(s.analytics.roster.length),1),t("td",rt,n(s.analytics.fixedWage>0?`$${s.analytics.fixedWage.toFixed(2)}`:"N/A"),1),t("td",ut,n(s.analytics.avgWage>0?`$${s.analytics.avgWage.toFixed(2)}`:"N/A"),1),t("td",mt,n(s.analytics.avgWage>0&&s.analytics.fixedWage>0?`${s.analytics.diff>0?"+":""}${s.analytics.diff}`:"N/A"),1)],10,it)):x("",!0),s?x("",!0):(o(),r("tr",ht,pt)),s.expanded?(o(),r("tr",gt,[t("td",ft,[i(C,{dense:""},{default:d(()=>[vt,t("tbody",null,[(o(!0),r(p,null,f(s.analytics.roster,c=>(o(),r("tr",{key:c[3],class:V(c[116]>s.analytics.fixedWage&&s.analytics.fixedWage>0?"bg-accent":"")},[t("td",xt,n(e.helpers.formatName(c[75])),1),t("td",yt,n(c.employee[378]),1),t("td",bt,n(c.employee[213]===""?"N/A":c.employee[213]),1),t("td",$t,n(c[105]),1),t("td",kt,"$"+n(c[116].toFixed(2)),1)],2))),128))])]),_:2},1024)])])):x("",!0)],64))),128))])]),_:2},1024)])]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue","vertical"])]),_:1},8,["modelValue"])):(o(),r("div",Wt,Vt))])])}var Qt=k(z,[["render",Ct]]);const qt=$({components:{RatesPanel:Qt},setup(){return{tab:g(0)}}}),At={class:"q-px-sm"};function Nt(e,l,_,h,u,m){const a=N("rates-panel");return o(),r("div",At,[i(H,{class:"bg-info text-white shadow-2 rounded-borders"},{default:d(()=>[i(q,{modelValue:e.tab,"onUpdate:modelValue":l[0]||(l[0]=s=>e.tab=s),"bg-color":"none","indicator-color":"accent"},{default:d(()=>[i(y,{name:0,label:"Rates"}),i(y,{name:1,label:"Requests"})]),_:1},8,["modelValue"])]),_:1}),i(A,{modelValue:e.tab,"onUpdate:modelValue":l[1]||(l[1]=s=>e.tab=s),animated:""},{default:d(()=>[i(b,{name:0},{default:d(()=>[i(a)]),_:1}),i(b,{name:1})]),_:1},8,["modelValue"])])}var Tt=k(qt,[["render",Nt]]);const Rt=$({name:"Analytics",components:{Dash:Tt},setup(){return{}}});function Bt(e,l,_,h,u,m){const a=N("dash");return o(),v(T,{style:{"max-width":"100vw"}},{default:d(()=>[i(a)]),_:1})}var zt=k(Rt,[["render",Bt]]);export{zt as default};
