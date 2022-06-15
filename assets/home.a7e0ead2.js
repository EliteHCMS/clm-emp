var W=Object.defineProperty,M=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var Q=(e,t,o)=>t in e?W(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,j=(e,t)=>{for(var o in t||(t={}))x.call(t,o)&&Q(e,o,t[o]);if(E)for(var o of E(t))F.call(t,o)&&Q(e,o,t[o]);return e},H=(e,t)=>M(e,R(t));import{D as T,E as U,G,c as v,h as $,H as N,g as K,l as q,I as b,J as D,K as P,_ as w,p as n,t as p,v as s,y as r,L as l,d as c,M as d,N as i,Q as f,O as C,P as y,R as S,S as u,U as X,V as Z,r as ee,W as O,X as A,Y as V,Z as _,F as B,$ as L,a0 as Y,a1 as te}from"./index.979edcb2.js";import{Q as se}from"./QTooltip.b186681d.js";var oe=T({name:"QBanner",props:H(j({},U),{inlineActions:Boolean,dense:Boolean,rounded:Boolean}),setup(e,{slots:t}){const o=K(),a=G(e,o.proxy.$q),k=v(()=>"q-banner row items-center"+(e.dense===!0?" q-banner--dense":"")+(a.value===!0?" q-banner--dark q-dark":"")+(e.rounded===!0?" rounded-borders":"")),g=v(()=>`q-banner__actions row items-center justify-end col-${e.inlineActions===!0?"auto":"all"}`);return()=>{const h=[$("div",{class:"q-banner__avatar col-auto row items-center self-start"},N(t.avatar)),$("div",{class:"q-banner__content col text-body2"},N(t.default))],m=N(t.action);return m!==void 0&&h.push($("div",{class:g.value},m)),$("div",{class:k.value+(e.inlineActions===!1&&m!==void 0?" q-banner--top-padding":""),role:"alert"},h)}}});const ne=q({components:{},setup(){const{hiringCenterData:e,checkedIn:t,checkInData:o}=b(),{employeeData:a}=D();return{hiringCenterData:e,employeeData:a,helpers:P,checkedIn:t,checkInData:o}}}),ae={class:"row items-center"},re={key:0},ie={key:1};function le(e,t,o,a,k,g){return n(),p("div",{class:r(e.$q.screen.gt.sm?"q-px-md q-pb-md":"q-px-sm q-py-sm")},[s("div",ae,[s("div",{class:r(e.$q.screen.gt.sm?"col-8":"col-12 order-last text-center")},[s("div",{class:r(["text-primary",e.$q.screen.gt.sm?"text-h4":"text-h6 q-mt-sm"])}," Welcome, "+l(e.helpers.formatName(e.employeeData[20]))+"! ",3)],2),e.checkedIn?(n(),p("div",{key:0,class:r(e.$q.screen.gt.sm?"col-4":"col-12 order-first")},[c(oe,{dense:e.$q.screen.lt.md,rounded:"",class:"text-white bg-info text-center"},{default:d(()=>[e.$q.screen.gt.sm?(n(),p("span",re,"Currently checked in to the "+l(e.checkInData[22])+" Hiring Center.",1)):i("",!0),e.$q.screen.lt.md?(n(),p("span",ie,"Checked in to "+l(e.checkInData[22])+" Hiring Center.",1)):i("",!0)]),_:1},8,["dense"])],2)):i("",!0)])],2)}var ce=w(ne,[["render",le]]);const me=q({components:{},setup(){const{hiringCenterData:e}=b(),{employeeData:t,offerData:o}=D(),a=v(()=>t[79]===4||t[79]===5?"In Process":t[79]===6?"Deployed":"");return{hiringCenterData:e,employeeData:t,helpers:P,offerData:o,status:a}}}),de={class:"text-body2"},pe={class:"text-dark q-pb-sm"},ue=u("Status:"),he={class:"text-primary q-ml-md"},ye={class:"text-dark q-pb-sm"},ke=u("Project:"),ge={class:"text-primary q-ml-md"},fe={class:"text-dark q-pb-sm"},$e=u("Job:"),ve={class:"text-primary q-ml-md"},_e={class:"text-dark q-pb-sm"},qe=u("Hire Date:"),be={class:"text-primary q-ml-md"},De={class:"text-caption"},we={class:"text-dark q-pb-sm"},Ce=u("Status:"),Se={class:"text-primary q-ml-md"},Pe={class:"text-dark q-pb-sm"},Ie=u("Job Site:"),Ne={class:"text-primary q-ml-md"},Ae={class:"text-dark q-pb-sm"},Be=u("Job:"),Le={class:"text-primary q-ml-md"},ze={class:"text-dark q-pb-sm"},Ee=u("Hire Date:"),Qe={class:"text-primary q-ml-md"};function je(e,t,o,a,k,g){return n(),p("div",null,[c(S,null,{default:d(()=>[c(f,null,{default:d(()=>[s("div",{class:r(["text-dark",e.$q.screen.gt.md?"text-h6":"text-body1"])},"Current Job Details",2)]),_:1}),c(C),e.$q.screen.gt.md?(n(),y(f,{key:0},{default:d(()=>[s("div",de,[s("div",pe,[ue,s("span",he,l(e.status),1)]),s("div",ye,[ke,s("span",ge,l(e.offerData[56]),1)]),s("div",fe,[$e,s("span",ve,l(e.offerData[57]),1)]),s("div",_e,[qe,s("span",be,l(e.employeeData[397]!==""?e.employeeData[397]:"N/A"),1)])])]),_:1})):i("",!0),e.$q.screen.gt.md?i("",!0):(n(),y(f,{key:1},{default:d(()=>[s("div",De,[s("div",we,[Ce,s("span",Se,l(e.status),1)]),s("div",Pe,[Ie,s("span",Ne,l(e.offerData[160]),1)]),s("div",Ae,[Be,s("span",Le,l(e.offerData[57]),1)]),s("div",ze,[Ee,s("span",Qe,l(e.employeeData[397]!==""?e.employeeData[397]:"N/A"),1)])])]),_:1}))]),_:1})])}var He=w(me,[["render",je]]);const Oe=[$("circle",{cx:"50",cy:"50",r:"48",fill:"none","stroke-width":"4","stroke-miterlimit":"10",stroke:"currentColor"}),$("line",{"stroke-linecap":"round","stroke-width":"4","stroke-miterlimit":"10",stroke:"currentColor",x1:"50",y1:"50",x2:"85",y2:"50.5"},[$("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 50",to:"360 50 50",dur:"2s",repeatCount:"indefinite"})]),$("line",{"stroke-linecap":"round","stroke-width":"4","stroke-miterlimit":"10",stroke:"currentColor",x1:"50",y1:"50",x2:"49.5",y2:"74"},[$("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 50",to:"360 50 50",dur:"15s",repeatCount:"indefinite"})])];var Te=T({name:"QSpinnerClock",props:X,setup(e){const{cSize:t,classes:o}=Z(e);return()=>$("svg",{class:o.value,width:t.value,height:t.value,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",xmlns:"http://www.w3.org/2000/svg"},Oe)}});const Ve=q({props:{item:Object},setup(e){const{openWindow:t}=b(),{employeeData:o}=D();return{tasks:[],showDescription:ee(!1),openLink(){t(e.item.to,{url:e.item.url,name:e.item.to})},employeeData:o}}}),Ye={class:"row items-center"},Je={class:"col-11"},We={class:"col-1"},Me=u(" Use the following information to log in to complete your training: "),Re=s("span",{class:"text-primary"},"Username: ",-1),xe=s("span",{class:"text-primary"},"Password: ",-1),Fe=u(" welcome "),Ue=[xe,Fe];function Ge(e,t,o,a,k,g){return n(),p("div",null,[e.item.hide?i("",!0):(n(),y(S,{key:0,class:"q-mb-sm"},{default:d(()=>[c(f,{class:r(["q-py-sm",e.$q.screen.gt.md?"q-px-md":"q-px-sm",e.item.complete?"bg-positive":e.item.alert?"bg-negative":"bg-accent"])},{default:d(()=>[s("div",Ye,[s("div",Je,[s("div",{class:r(["text-white",e.$q.screen.gt.sm?"text-body2":"text-caption"])},[!e.item.visible&&!e.item.complete?(n(),y(O,{key:0,onClick:t[0]||(t[0]=h=>e.showDescription=!e.showDescription),round:"",flat:"",icon:e.showDescription?"keyboard_arrow_up":"keyboard_arrow_down",size:e.$q.screen.gt.md?"sm":(e.$q.screen.gt.sm,"xs"),color:"white"},null,8,["icon","size"])):i("",!0),u(" "+l(e.item.task)+" ",1),e.item.hasLink&&!e.item.complete?(n(),y(O,{key:1,round:"",flat:"",size:e.$q.screen.gt.md?"sm":(e.$q.screen.gt.sm,"xs"),color:"white",onClick:e.openLink,icon:"open_in_new"},{default:d(()=>[e.item.to&&e.item.to!==""?(n(),y(se,{key:0},{default:d(()=>[u("Open "+l(e.item.to),1)]),_:1})):i("",!0)]),_:1},8,["size","onClick"])):i("",!0)],2)]),s("div",We,[!e.item.complete&&!e.item.alert?(n(),y(Te,{key:0,size:e.$q.screen.gt.md?"2rem":e.$q.screen.gt.sm?"1.75rem":"1.5rem",color:"white"},null,8,["size"])):i("",!0),e.item.complete?(n(),y(A,{key:1,name:"check_circle",size:e.$q.screen.gt.md?"2rem":e.$q.screen.gt.sm?"1.75rem":"1.5rem",color:"white"},null,8,["size"])):i("",!0),e.item.alert?(n(),y(A,{key:2,name:"error_outline",size:e.$q.screen.gt.md?"2rem":e.$q.screen.gt.sm?"1.75rem":"1.5rem",color:"white"},null,8,["size"])):i("",!0)])])]),_:1},8,["class"]),e.showDescription||e.item.visible?(n(),y(f,{key:0},{default:d(()=>[s("div",{class:r([e.item.alert?"text-negative":"text-dark",e.$q.screen.gt.sm?"text-body2":"text-caption"])},l(e.item.description),3),e.item.saba?(n(),p("div",{key:0,class:r(["q-pt-sm",e.item.alert?"text-negative":"text-dark",e.$q.screen.gt.sm?"text-body2":"text-caption"])},[Me,s("div",{class:r(["text-dark q-mt-sm",e.$q.screen.gt.sm?"text-body2":"text-caption"])},[Re,u(" "+l(e.employeeData[378]),1)],2),s("div",{class:r(["text-dark",e.$q.screen.gt.sm?"text-body2":"text-caption"])},Ue,2)],2)):i("",!0)]),_:1})):i("",!0)]),_:1}))])}var z=w(Ve,[["render",Ge]]);const Ke=q({components:{task:z},setup(){const e=V(),{hiringCenterData:t}=b(),{employeeData:o,processingData:a,offerData:k}=D(),g=v(()=>o[79]===4||o[79]===5?"In Process":o[79]===6?"Deployed":""),h=v(()=>[{task:"Complete Hire Packet",complete:a[249],description:"Complete your hiring paperwork. You can get your paperwork from a hiring center employee.",hide:!a[258],hasLink:!1},{task:e.screen.gt.sm?"Complete I9, Employment Eligibility Verification":"Complete I9",complete:a[250],description:"Complete your I9 form. Click the link above to complete.",hasLink:!0,url:`${t[335]?t[335].value:""}`,to:"i9 Complete",hide:!a[257]},{task:e.screen.gt.sm?"Complete New Employee Safety Orientation":"Complete Safety Orientation",complete:a[251],description:"Complete your BrandSafway New Employee Safety Orientation. Click the link above to open the BrandSafway Learning Network.",hasLink:!0,url:"https://beis-newhire.sabacloud.com/Saba/Web_wdk/NA3P1PRD0029/index/prelogin.rdf",to:"BSLN",hide:!a[256],saba:!0,visible:!a[251]}]),m=v(()=>h.value.filter(I=>!I.complete));return{hiringCenterData:t,employeeData:o,helpers:P,processingData:a,offerData:k,status:g,tasks:h,incomplete:m}}}),Xe={key:0},Ze=u(" Assigned Tasks "),et={key:0,class:"text-body2 text-italic q-ml-sm text-accent"},tt={key:1,class:"text-body2 text-italic q-ml-sm text-positive"};function st(e,t,o,a,k,g){const h=_("task");return e.processingData?(n(),p("div",Xe,[c(S,null,{default:d(()=>[c(f,null,{default:d(()=>[s("div",{class:r(["text-dark",e.$q.screen.gt.md?"text-h6":"text-body1"])},[Ze,e.incomplete.length>0?(n(),p("span",et,"("+l(e.incomplete.length)+" tasks remaining)",1)):(n(),p("span",tt,"(All tasks completed!)"))],2)]),_:1}),c(C),c(f,{class:"q-pa-sm"},{default:d(()=>[(n(!0),p(B,null,L(e.tasks,m=>(n(),y(h,{key:m,item:m},null,8,["item"]))),128))]),_:1})]),_:1})])):i("",!0)}var ot=w(Ke,[["render",st]]);const nt=q({components:{task:z},setup(){const e=V(),{hiringCenterData:t}=b(),{employeeData:o,processingData:a,offerData:k}=D(),g=v(()=>[{task:"Complete Hire Packet",complete:a[210],description:"Complete your hiring paperwork. You can get your paperwork from a hiring center employee.",hide:!a[209]},{task:e.screen.gt.sm?"Complete I9, Employment Eligibility Verification":"Complete I9",complete:a[208],description:"Complete your I9 form. Click the link above to complete.",hasLink:!0,url:`${t[335]?t[335].value:""}`,to:"i9 Complete",hide:!a[207]},{task:e.screen.gt.sm?"Complete New Employee Safety Orientation":"Complete Safety Orientation",complete:a[205],description:"Complete your BrandSafway New Employee Safety Orientation. Click the link above to open the BrandSafway Learning Network.",hasLink:!0,url:"https://beis-newhire.sabacloud.com/Saba/Web_wdk/NA3P1PRD0029/index/prelogin.rdf",to:"BSLN",hide:!a[206],saba:!0,visible:!a[205]},{task:"Complete Safety Council Training",complete:a[33]==="Complete",description:"Complete the trainings required for your Project. A hiring center employee will schedule these classes for you."},{task:"Complete Drug Screens",complete:a[34]==="Complete",description:"Complete the drug screens required for your Project. A hiring center employee will order these for you."},{task:"Complete Fit Tests",complete:a[35]==="Complete",description:"Complete the fit tests required for your Project. A hiring center employee will order these for you."},{task:"Complete Medical Screens",complete:a[36]==="Complete",description:"Complete the medical screens required for your Project. A hiring center employee will order these for you."}]),h=v(()=>g.value.filter(m=>!m.complete&&(m.hide===void 0||!m.hide&&!m.complete)));return{hiringCenterData:t,employeeData:o,helpers:P,processingData:a,offerData:k,date:Y,tasks:g,incomplete:h}}}),at={key:0},rt=u(" Assigned Tasks "),it={key:0,class:"text-body2 text-italic q-ml-sm text-accent"},lt={key:1,class:"text-body2 text-italic q-ml-sm text-positive"};function ct(e,t,o,a,k,g){const h=_("task");return e.processingData?(n(),p("div",at,[c(S,null,{default:d(()=>[c(f,null,{default:d(()=>[s("div",{class:r(["text-dark",e.$q.screen.gt.md?"text-h6":"text-body1"])},[rt,e.incomplete.length>0?(n(),p("span",it,"("+l(e.incomplete.length)+" tasks remaining)",1)):(n(),p("span",lt,"(All tasks completed!)"))],2)]),_:1}),c(C),c(f,{class:"q-pa-sm"},{default:d(()=>[(n(!0),p(B,null,L(e.tasks,m=>(n(),y(h,{key:m,item:m},null,8,["item"]))),128))]),_:1})]),_:1})])):i("",!0)}var mt=w(nt,[["render",ct]]);const dt=q({components:{task:z},setup(){const{hiringCenterData:e}=b(),{employeeData:t,processingData:o,offerData:a}=D(),k=v(()=>[{task:`Start Work on ${o[33]}`,complete:!1,description:o[192]?`You were scheduled to arrive on site on ${o[33]} at ${o[39]}. If you have not arrived, please call your site contact to reschedule your start date.`:`Congratulations! You are ready to begin your new job assignment. You are scheduled to arrive on site on ${o[33]} at ${o[39]}. Review the arrival details for more info.`,visible:!0,alert:o[192]?o[192]:!1}]),g=v(()=>k.value.filter(h=>!h.complete));return{hiringCenterData:e,employeeData:t,helpers:P,processingData:o,offerData:a,date:Y,tasks:k,incomplete:g}}}),pt={key:0},ut={class:"row justify-between"},ht=u(" Arrival Details "),yt={class:"text-dark q-pb-sm"},kt=u("Start Date:"),gt={class:"text-dark q-pb-sm"},ft=u("Location:"),$t={class:"text-dark q-pb-sm"},vt=u("Address:"),_t={class:"text-dark q-pb-sm"},qt=u("Contact Name:"),bt={class:"text-dark q-pb-sm"},Dt=u("Contact Number:"),wt=u(" Assigned Tasks "),Ct={key:1,class:"text-body2 text-italic q-ml-sm text-positive"};function St(e,t,o,a,k,g){const h=_("task");return e.processingData?(n(),p("div",pt,[s("div",ut,[s("div",{class:r(["col-12 col-md-6",e.$q.screen.gt.sm?"q-pr-sm":"q-pb-sm"])},[c(S,null,{default:d(()=>[c(f,{class:r(e.processingData[192]?"bg-negative text-white":"text-dark")},{default:d(()=>[s("div",{class:r(e.$q.screen.gt.md?"text-h6":"text-body1")},[e.processingData[192]?(n(),y(A,{key:0,name:"error_outline",size:e.$q.screen.gt.md?"2rem":e.$q.screen.gt.sm?"1.75rem":"1.5rem",color:"white"},null,8,["size"])):i("",!0),ht,e.processingData[192]?(n(),p("span",{key:1,class:r(["text-italic q-ml-sm text-white",e.$q.screen.gt.sm?"text-body2":"text-caption"])},"(Missed arrival date!)",2)):i("",!0)],2)]),_:1},8,["class"]),c(C),c(f,null,{default:d(()=>[s("div",{class:r(e.$q.screen.gt.md?"text-body2":"text-caption")},[s("div",yt,[kt,s("span",{class:r(["q-ml-md",e.processingData[192]?"":"text-primary"])},l(e.processingData[33]),3)]),s("div",gt,[ft,s("span",{class:r(["q-ml-md",e.processingData[192]?"":"text-primary"])},l(e.processingData[188]===""?e.processingData[190]:e.processingData[188]),3)]),s("div",$t,[vt,s("span",{class:r(["q-ml-md",e.processingData[192]?"":"text-primary"])},l(e.processingData[189]===""?e.processingData[191]:e.processingData[189]),3)]),s("div",_t,[qt,s("span",{class:r(["q-ml-md",e.processingData[192]?"":"text-primary"])},l(e.processingData[186]===""?`Contact ${e.processingData[68]} Hiring Center`:e.processingData[186]),3)]),s("div",bt,[Dt,s("span",{class:r(["q-ml-md",e.processingData[192]?"":"text-primary"])},l(e.processingData[187]===""?`Contact ${e.processingData[68]} Hiring Center`:e.processingData[187]),3)])],2)]),_:1})]),_:1})],2),s("div",{class:r(["col-12 col-md-6",e.$q.screen.gt.sm?"q-pl-sm":"q-pb-sm"])},[c(S,null,{default:d(()=>[c(f,{class:r(e.processingData[192]?"bg-negative text-white":"text-dark")},{default:d(()=>[s("div",{class:r(e.$q.screen.gt.md?"text-h6":"text-body1")},[wt,e.incomplete.length>0?(n(),p("span",{key:0,class:r(["text-italic q-ml-sm",e.processingData[192]?"text-white":"text-accent",e.$q.screen.gt.sm?"text-body2":"text-caption"])},"("+l(e.incomplete.length)+" task"+l(e.incomplete.length>1?"s":"")+" remaining)",3)):(n(),p("span",Ct,"(All tasks completed!)"))],2)]),_:1},8,["class"]),c(C),c(f,{class:"q-pa-sm"},{default:d(()=>[(n(!0),p(B,null,L(e.tasks,m=>(n(),y(h,{key:m,item:m},null,8,["item"]))),128))]),_:1})]),_:1})],2)])])):i("",!0)}var Pt=w(dt,[["render",St]]);const It=q({components:{JobDetails:He,InProcess:ot,Pending:mt,Deployed:Pt},setup(){const{hiringCenterData:e}=b(),{employeeData:t,offerData:o,showInProcess:a}=D();return{hiringCenterData:e,employeeData:t,helpers:P,offerData:o,showInProcess:a}}}),Nt={class:"q-pt-md"},At={class:"row justify-between"};function Bt(e,t,o,a,k,g){const h=_("job-details"),m=_("in-process"),I=_("pending"),J=_("deployed");return n(),p("div",Nt,[s("div",At,[e.offerData&&e.showInProcess&&e.employeeData[79]!==6?(n(),p("div",{key:0,class:r(["col-12 col-md-6",e.$q.screen.gt.sm?"q-pr-sm":"q-pb-sm order-last"])},[c(h)],2)):i("",!0),e.showInProcess&&e.employeeData[79]&&(e.employeeData[79]===4||e.employeeData[79]===5)?(n(),p("div",{key:1,class:r(["col-12 col-md-6",e.$q.screen.gt.sm?"q-pl-sm":"q-pb-sm"])},[e.employeeData[79]===4?(n(),y(m,{key:0})):i("",!0),e.employeeData[79]===5?(n(),y(I,{key:1})):i("",!0)],2)):i("",!0)]),e.employeeData[79]&&e.employeeData[79]===6?(n(),y(J,{key:0,class:"q-mt-md"})):i("",!0)])}var Lt=w(It,[["render",Bt]]);const zt=q({name:"PageIndex",components:{Banner:ce,Employment:Lt},setup(){const{employeeData:e,showEmployment:t}=D(),{inHiringCenter:o,hiringCenterData:a}=b();return{employeeData:e,showEmployment:t,inHiringCenter:o,hiringCenterData:a}}});function Et(e,t,o,a,k,g){const h=_("banner"),m=_("employment");return n(),y(te,{padding:"",style:{"max-width":"100vw"}},{default:d(()=>[c(h),c(C),e.showEmployment?(n(),y(m,{key:0})):i("",!0)]),_:1})}var Ot=w(zt,[["render",Et]]);export{Ot as default};
