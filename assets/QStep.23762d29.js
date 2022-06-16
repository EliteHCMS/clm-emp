var K=Object.defineProperty,T=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var k=(e,a,r)=>a in e?K(e,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[a]=r,g=(e,a)=>{for(var r in a||(a={}))B.call(a,r)&&k(e,r,a[r]);if(y)for(var r of y(a))E.call(a,r)&&k(e,r,a[r]);return e},m=(e,a)=>T(e,$(a));import{D as b,r as Q,c as s,h as l,Y as W,$ as H,aF as L,g as x,E as R,aG as V,aH as j,G as F,aI as U,aJ as z,aK as N,aL as G,H as h,aM as M,aN as O,i as J,aO as Y,aP as X,aQ as Z}from"./index.0bacb86f.js";var A=b({name:"StepHeader",props:{stepper:{},step:{},goToPanel:Function},setup(e,{attrs:a}){const{proxy:{$q:r}}=x(),i=Q(null),n=s(()=>e.stepper.modelValue===e.step.name),c=s(()=>{const t=e.step.disable;return t===!0||t===""}),p=s(()=>{const t=e.step.error;return t===!0||t===""}),u=s(()=>{const t=e.step.done;return c.value===!1&&(t===!0||t==="")}),_=s(()=>{const t=e.step.headerNav,o=t===!0||t===""||t===void 0;return c.value===!1&&e.stepper.headerNav&&o}),d=s(()=>e.step.prefix&&(n.value===!1||e.stepper.activeIcon==="none")&&(p.value===!1||e.stepper.errorIcon==="none")&&(u.value===!1||e.stepper.doneIcon==="none")),f=s(()=>{const t=e.step.icon||e.stepper.inactiveIcon;if(n.value===!0){const o=e.step.activeIcon||e.stepper.activeIcon;return o==="none"?t:o||r.iconSet.stepper.active}if(p.value===!0){const o=e.step.errorIcon||e.stepper.errorIcon;return o==="none"?t:o||r.iconSet.stepper.error}if(c.value===!1&&u.value===!0){const o=e.step.doneIcon||e.stepper.doneIcon;return o==="none"?t:o||r.iconSet.stepper.done}return t}),v=s(()=>{const t=p.value===!0?e.step.errorColor||e.stepper.errorColor:void 0;if(n.value===!0){const o=e.step.activeColor||e.stepper.activeColor||e.step.color;return o!==void 0?o:t}return t!==void 0?t:c.value===!1&&u.value===!0?e.step.doneColor||e.stepper.doneColor||e.step.color||e.stepper.inactiveColor:e.step.color||e.stepper.inactiveColor}),S=s(()=>"q-stepper__tab col-grow flex items-center no-wrap relative-position"+(v.value!==void 0?` text-${v.value}`:"")+(p.value===!0?" q-stepper__tab--error q-stepper__tab--error-with-"+(d.value===!0?"prefix":"icon"):"")+(n.value===!0?" q-stepper__tab--active":"")+(u.value===!0?" q-stepper__tab--done":"")+(_.value===!0?" q-stepper__tab--navigation q-focusable q-hoverable":"")+(c.value===!0?" q-stepper__tab--disabled":"")),C=s(()=>e.stepper.headerNav!==!0?!1:_.value);function P(){i.value!==null&&i.value.focus(),n.value===!1&&e.goToPanel(e.step.name)}function I(t){t.keyCode===13&&n.value===!1&&e.goToPanel(e.step.name)}return()=>{const t={class:S.value};_.value===!0&&(t.onClick=P,t.onKeyup=I,Object.assign(t,c.value===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:a.tabindex||0}));const o=[l("div",{class:"q-focus-helper",tabindex:-1,ref:i}),l("div",{class:"q-stepper__dot row flex-center q-stepper__line relative-position"},[l("span",{class:"row flex-center"},[d.value===!0?e.step.prefix:l(W,{name:f.value})])])];if(e.step.title!==void 0&&e.step.title!==null){const q=[l("div",{class:"q-stepper__title"},e.step.title)];e.step.caption!==void 0&&e.step.caption!==null&&q.push(l("div",{class:"q-stepper__caption"},e.step.caption)),o.push(l("div",{class:"q-stepper__label q-stepper__line relative-position"},q))}return H(l("div",t,o),[[L,C.value]])}}});const ee=/(-\w)/g;function te(e){const a={};for(const r in e){const i=r.replace(ee,n=>n[1].toUpperCase());a[i]=e[r]}return a}var ne=b({name:"QStepper",props:m(g(g({},R),V),{flat:Boolean,bordered:Boolean,alternativeLabels:Boolean,headerNav:Boolean,contracted:Boolean,headerClass:String,inactiveColor:String,inactiveIcon:String,doneIcon:String,doneColor:String,activeIcon:String,activeColor:String,errorIcon:String,errorColor:String}),emits:j,setup(e,{slots:a}){const r=x(),i=F(e,r.proxy.$q),{updatePanelsList:n,isValidPanelName:c,updatePanelIndex:p,getPanelContent:u,getPanels:_,panelDirectives:d,goToPanel:f,keepAliveProps:v,needsUniqueKeepAliveWrapper:S}=U();z(N,s(()=>g({goToPanel:f,keepAliveProps:v,needsUniqueKeepAliveWrapper:S},e)));const C=s(()=>`q-stepper q-stepper--${e.vertical===!0?"vertical":"horizontal"}`+(e.flat===!0||i.value===!0?" q-stepper--flat no-shadow":"")+(e.bordered===!0||i.value===!0&&e.flat===!1?" q-stepper--bordered":"")+(i.value===!0?" q-stepper--dark q-dark":"")),P=s(()=>`q-stepper__header row items-stretch justify-between q-stepper__header--${e.alternativeLabels===!0?"alternative":"standard"}-labels`+(e.flat===!1||e.bordered===!0?" q-stepper__header--border":"")+(e.contracted===!0?" q-stepper__header--contracted":"")+(e.headerClass!==void 0?` ${e.headerClass}`:""));function I(){const t=h(a.message,[]);if(e.vertical===!0){c(e.modelValue)&&p();const o=l("div",{class:"q-stepper__content"},h(a.default));return t===void 0?[o]:t.concat(o)}return[l("div",{class:P.value},_().map(o=>{const q=te(o.props);return l(A,{key:q.name,stepper:e,step:q,goToPanel:f})})),t,M("div",{class:"q-stepper__content q-panel-parent"},u(),"cont",e.swipeable,()=>d.value)]}return()=>(n(a),l("div",{class:C.value},G(a.navigation,I())))}}),oe=b({name:"QStepperNavigation",setup(e,{slots:a}){return()=>l("div",{class:"q-stepper__nav"},h(a.default))}});function D(e){return l("div",{class:"q-stepper__step-content"},[l("div",{class:"q-stepper__step-inner"},h(e.default))])}const w={setup(e,{slots:a}){return()=>D(a)}};var le=b({name:"QStep",props:m(g({},O),{icon:String,color:String,title:{type:String,required:!0},caption:String,prefix:[String,Number],doneIcon:String,doneColor:String,activeIcon:String,activeColor:String,errorIcon:String,errorColor:String,headerNav:{type:Boolean,default:!0},done:Boolean,error:Boolean}),setup(e,{attrs:a,slots:r}){const{proxy:{$q:i}}=x(),n=J(N,()=>{console.error("QStep needs to be child of QStepper")}),{getCacheWithFn:c}=Z(),p=Q(null),u=s(()=>n.value.modelValue===e.name),_=s(()=>i.platform.is.ios!==!0&&i.platform.is.chrome===!0||u.value!==!0||n.value.vertical!==!0?{}:{onScroll(v){const{target:S}=v;S.scrollTop>0&&(S.scrollTop=0),a.onScroll!==void 0&&a.onScroll(v)}}),d=s(()=>typeof e.name=="string"||typeof e.name=="number"?e.name:String(e.name));function f(){const v=n.value.vertical;return v===!0&&n.value.keepAlive===!0?l(X,n.value.keepAliveProps.value,u.value===!0?[l(n.value.needsUniqueKeepAliveWrapper.value===!0?c(d.value,()=>m(g({},w),{name:d.value})):w,{key:d.value},r.default)]:void 0):v!==!0||u.value===!0?D(r):void 0}return()=>l("div",g({ref:p,class:"q-stepper__step"},_.value),n.value.vertical===!0?[l(A,{stepper:n.value,step:e,goToPanel:n.value.goToPanel}),n.value.animated===!0?l(Y,f):f()]:[f()])}});export{oe as Q,le as a,ne as b};
