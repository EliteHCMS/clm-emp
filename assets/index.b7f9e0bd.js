import{k as L,at as N,r as f,w as z,_ as T,v as a,x as v,z as s,ae as h,af as o,d as t,ak as g,b0 as l,aw as q,b4 as k,ai as i,F as G,as as R,ap as U,bJ as J,o as K,c as O,B as x,aj as Y,ah as H,bI as W,aP as P,av as X,ar as B}from"./index.172e2525.js";import{Q as Z}from"./QPage.5bce1de2.js";import{m as S,g as ee,d as te}from"./quickbase.0e5ca545.js";import{Q as se}from"./QImg.0790ec49.js";import"./_commonjsHelpers.d497b07e.js";import"./dayjs.38d40b2d.js";import"./localForage.482f4ef4.js";import"./index.7dbe61ef.js";import"./i18n.a8b0edb4.js";const oe=L({components:{},setup(){const e=N(),{updateAssessment:n,startToolChecklist:_,finishToolChecklist:d,toolsForCraft:y,toolListInstructions:w,toolListName:r}=S(),m=f([]),C=f(0);async function V(){await _(),C.value=1}async function A(){await n({next:1,type:"tools",values:m.value}),await d()&&e.replace({path:"/thanks"})}function b(u,$){console.log(u)}return z(m,(u,$)=>{console.log(u)}),{toolsForCraft:y,save:A,pushItem:b,selected:m,step:C,updateAssessment:n,toolListInstructions:w,start:V,toolListName:r}}}),ae={class:"row justify-center"},le={class:"col-12 col-md-10 q-pt-sm"},ne={class:"text-h6 text-primary"},re={class:"text-body1 text-dark"},ie=s("div",{class:"text-h6 text-dark"}," Tool Assessment ",-1),ue=s("div",{class:"text-body1 text-secondary text-italic"}," Please select the tools you own from the following list. ",-1),ce={class:"row justify-center"},de={class:"row items-center"},me={class:"col-11"},pe={class:"text-body1 text-primary"},fe={class:"col-1"},ve={class:"row q-pt-md"},he={class:"col-12 text-right"};function _e(e,n,_,d,y,w){return a(),v("div",null,[s("div",ae,[s("div",le,[e.step===0?(a(),h(k,{key:0,class:"q-mt-xl"},{default:o(()=>[t(l,null,{default:o(()=>[s("div",ne,g(e.toolListName),1)]),_:1}),t(l,null,{default:o(()=>[s("div",re,g(e.toolListInstructions),1)]),_:1}),t(l,{class:"text-right"},{default:o(()=>[t(q,{color:"primary",label:"Continue",onClick:e.start},null,8,["onClick"])]),_:1})]),_:1})):i("",!0),e.step===1?(a(),h(k,{key:1,flat:""},{default:o(()=>[t(l,null,{default:o(()=>[ie,ue]),_:1}),t(l,null,{default:o(()=>[s("div",ce,[(a(!0),v(G,null,R(e.toolsForCraft,r=>(a(),v("div",{class:"col-12 col-md-6",key:r[3]},[t(k,{class:"tool-card q-ma-sm"},{default:o(()=>[t(l,null,{default:o(()=>[t(se,{style:{"max-height":"150px"},fit:"scale-down",src:r[11]},null,8,["src"])]),_:2},1024),t(U),t(l,null,{default:o(()=>[s("div",de,[s("div",me,[s("div",pe,g(r[8]),1)]),s("div",fe,[t(J,{modelValue:e.selected,"onUpdate:modelValue":n[0]||(n[0]=m=>e.selected=m),color:"primary",val:r.value},null,8,["modelValue","val"])])])]),_:2},1024)]),_:2},1024)]))),128))]),s("div",ve,[s("div",he,[t(q,{color:"primary",onClick:e.save,label:e.$t("continue")},null,8,["onClick","label"])])])]),_:1})]),_:1})):i("",!0)])])])}var ye=T(oe,[["render",_e]]);const ge=L({components:{},setup(){const e=N(),n=f(0),{startLevelForTest:_}=ee(),{testForCraft:d}=te(),{getAllQuestions:y,questionsLoaded:w,loadQuestionGroup:r,completeQuestion:m,startAssessment:C,finishAssessment:V,updateAssessment:A}=S(),b=f(!0),u=f(null),$=f(null),p=f([]),j=f(!1),Q=f(!1);K(async()=>{w||await y(),b.value=!1,p.value=await r(_,1)});const F=O(()=>{const c=p.value?p.value.length:0,I=Math.floor(Math.random()*(c-0));return p.value&&p.value.length>0?p.value[I]:null});z(u,(c,I)=>{c&&($.value=null)});async function D(){if(!u.value)$.value="Select an answer";else{Q.value=!0,$.value=null,F.value.response=u.value;const{data:c}=await m(F.value);if(u.value=null,c.nextQuestions.length>0)p.value=c.nextQuestions,Q.value=!1;else try{p.value=await r(c.scope,c.iteration),Q.value=!1}catch{p.value=[];const{success:M}=await V();M&&d[18]==="Yes"?A({next:1}):e.replace({path:"/thanks"})}}}async function E(){j.value=!0;try{await C(),n.value=1}catch(c){console.log(c)}}return{step:n,testForCraft:d,loading:b,currentQuestion:F,response:u,responseError:$,submit:D,launchAssessment:E,starting:j,submitting:Q}}}),ke={key:0,class:"row justify-center"},we={class:"col-12 col-md-10 q-pt-sm"},$e={class:"text-h6 text-primary"},be={class:"text-body1 text-dark"},Ce={class:"text-h5 text-primary"},Qe={class:"q-pa-sm"},qe={class:"text-body1 q-pb-md"},Se=s("hr",null,null,-1),Ve={key:0,class:"col-5 text-center"},Ae=["src","alt"],Fe={key:1,class:"absolute-center"};function Ie(e,n,_,d,y,w){return a(),v("div",null,[e.loading?i("",!0):(a(),v("div",ke,[s("div",we,[e.step===0?(a(),h(k,{key:0,class:"q-mt-xl"},{default:o(()=>[t(l,null,{default:o(()=>[s("div",$e,g(e.testForCraft[29]),1)]),_:1}),t(l,null,{default:o(()=>[s("div",be,g(e.testForCraft[28]),1)]),_:1}),t(l,{class:"text-right"},{default:o(()=>[t(q,{color:"primary",label:"Continue",onClick:e.launchAssessment,loading:e.starting,disabled:e.starting},null,8,["onClick","loading","disabled"])]),_:1})]),_:1})):i("",!0),e.step===1?(a(),h(k,{key:1,flat:""},{default:o(()=>[t(l,null,{default:o(()=>[s("div",Ce,g(e.testForCraft[29]),1)]),_:1}),e.currentQuestion?(a(),h(l,{key:0},{default:o(()=>[t(k,{flat:""},{default:o(()=>[t(l,null,{default:o(()=>[s("div",{class:x(e.currentQuestion.hasImage?"row justify-between items-start":"row justify-center items-start")},[s("div",{class:x(e.currentQuestion.hasImage?"col-6":"col-10")},[t(k,null,{default:o(()=>[t(l,null,{default:o(()=>[s("div",Qe,[s("div",qe,[Y(g(e.currentQuestion[9])+" ",1),e.responseError?(a(),h(H,{key:0,size:"md",class:"q-ml-sm",name:"error",color:"red"})):i("",!0)]),t(W,{options:e.currentQuestion[19],type:"radio",modelValue:e.response,"onUpdate:modelValue":n[0]||(n[0]=r=>e.response=r)},null,8,["options","modelValue"])])]),_:1}),Se,t(l,{class:"text-right"},{default:o(()=>[t(q,{color:"primary",label:"Submit",onClick:e.submit,loading:e.submitting,disabled:e.submitting},null,8,["onClick","loading","disabled"])]),_:1})]),_:1})],2),e.currentQuestion.hasImage?(a(),v("div",Ve,[s("img",{class:"question-img",src:e.currentQuestion.imageData.src,alt:e.currentQuestion.imageData.alt},null,8,Ae)])):i("",!0)],2)]),_:1})]),_:1})]),_:1})):i("",!0)]),_:1})):i("",!0)])])),e.loading?(a(),v("div",Fe,[t(P,{color:"primary",size:"5em"})])):i("",!0)])}var Le=T(ge,[["render",Ie]]);const Te=L({components:{tools:ye,test:Le},setup(){const e=S(),{dataLoaded:n,fetchCraftTools:_}=S(),{step:d,loading:y}=X(e);return _(),n(),{step:d,loading:y}}}),je={key:0,class:"row"},xe={class:"col"},Be={key:1,class:"absolute-center"};function Ne(e,n,_,d,y,w){const r=B("tools"),m=B("test");return a(),h(Z,{class:"window-height window-width"},{default:o(()=>[e.loading?i("",!0):(a(),v("div",je,[s("div",xe,[e.step===1?(a(),h(r,{key:0})):i("",!0),e.step===0?(a(),h(m,{key:1})):i("",!0)])])),e.loading?(a(),v("div",Be,[t(P,{color:"primary",size:"5em"})])):i("",!0)]),_:1})}var Ke=T(Te,[["render",Ne]]);export{Ke as default};
