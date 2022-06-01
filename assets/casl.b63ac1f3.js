import{l as y,m as p,r as b,i as g,f as h,z as m,n as c,q as o}from"./index.45189184.js";function v(e){if(e.hasOwnProperty("possibleRulesFor"))return e;var i=b(!0);e.on("updated",function(){i.value=!i.value});var t=e.possibleRulesFor.bind(e);return e.possibleRulesFor=function(a,r){return i.value=i.value,t(a,r)},e.can=e.can.bind(e),e.cannot=e.cannot.bind(e),e}var d=Symbol("ability");function w(){var e=g(d);if(!e)throw new Error("Cannot inject Ability instance because it was not provided");return e}function q(e){return"a"in e?"a":"this"in e?"this":"an"in e?"an":""}y({name:"Can",props:{I:String,do:String,a:[String,Function],an:[String,Function],this:[String,Function,Object],on:[String,Function,Object],not:Boolean,passThrough:Boolean,field:String},setup:function(i,t){var a=t.slots,r=i,n="do",u="on";if(n in i||(n="I",u=q(i)),!r[n])throw new Error("Neither `I` nor `do` prop was passed in <Can>");if(!a.default)throw new Error("Expects to receive default slot");var l=w();return function(){var f=l.can(r[n],r[u],r.field),s=i.not?!f:f;return i.passThrough?a.default({allowed:s,ability:l}):s?a.default():null}}});function I(e,i,t){if(!i||!(i instanceof p))throw new Error("Please provide an Ability instance to abilitiesPlugin plugin");e.provide(d,v(i)),t&&t.useGlobalProperties&&(e.config.globalProperties.$ability=i,e.config.globalProperties.$can=i.can.bind(i))}const P=e=>e.matched.some(i=>c.can(i.meta.action||"read",i.meta.resource));var F=h(({app:e,router:i})=>{e.config.globalProperties.$subject=m,e.use(I,c,{useGlobalProperties:!0}),i.beforeEach(async(t,a,r)=>{const n=await o.isUserLoggedIn(),u=Object.assign({},t.query);if(n||o.logout(),u.oid&&(await o.setOfficeLocation({rid:u.oid,checkedIn:!1}),delete u.oid),a.fullPath==="/"&&!a.name&&n&&await o.reloadUserInfo({reAuthenticate:!0}),!P(t))return r(n?{name:"not-authorized"}:{name:"login",query:{redirect:t.fullPath}});if(t.meta.redirectIfLoggedIn&&n)return r("/");const l=await o.phoneNumberVerifyRequired(),f=await o.employeeLinkRequired(),s=await o.getUserFromStore();if(l)return a.name==="code-confirmation"&&n&&t.query.code?(await o.setPhoneNumberVerified(!0),r({path:"/"})):t.name!=="code-confirmation"?r({name:"code-confirmation",query:{p:s[8].replace("+",""),rid:s[3]}}):r();if(f)return a.name==="verify-identity"&&n&&t.query.verify?(t.query.rid?await o.setIdentityVerified(t.query.rid):await o.setIdentityVerified(!1),r({path:"/",query:{}})):t.name!=="verify-identity"?r({name:"verify-identity",query:{rid:s[3]}}):r();if(t.name==="verify-identity"){if(!f)return r({path:"/"})}else if(t.name==="code-confirmation")return!n&&t.query.ac?r():r({path:"/"});return r()}),i.afterEach(async(t,a)=>{const r=await o.isUserLoggedIn();a.fullPath==="/"&&!a.name&&r&&await o.updateStore({reAuthenticate:!1})})});export{F as default};
