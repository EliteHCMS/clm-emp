var n=Object.defineProperty;var c=(t,e,s)=>e in t?n(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var a=(t,e,s)=>(c(t,typeof e!="symbol"?e+"":e,s),s);import{P as r,s as h,a as u,b as p}from"./index.2d58de3a.js";var o={get dev(){return!1},baseURL:"https://api.elitehcms.com",apiDevURL:"https://api.elitehcms.com",socketDevURL:"wss://api.elitehcms.com",storageTokenKeyName:"feathers-jwt",tokenType:"Bearer",tokenExpiration:"12h",apiToken:"dafcbf3f-35d1-44ea-b9e6-732ef3812777"};class f{constructor(e,s){a(this,"axiosIns",null);a(this,"feathersIns",null);a(this,"feathersConfig",{...o});a(this,"isAlreadyFetchingAccessToken",!1);a(this,"subscribers",[]);this.axiosIns=e,this.feathersConfig={...this.feathersConfig,...s},this.axiosIns.interceptors.request.use(i=>(i.headers["x-access-token"]=this.feathersConfig.apiToken,i),i=>Promise.reject(i))}createMessageQueue(e){return this.axiosIns.post("messages/queue",e).then(s=>s.data).catch(s=>{throw s})}createNotification(e){return this.axiosIns.post("notifications",e).then(s=>s.data).catch(s=>{throw s})}onAccessTokenFetched(e){this.subscribers=this.subscribers.filter(s=>s(e))}addSubscriber(e){this.subscribers.push(e)}getToken(){return r.get(this.feathersConfig.storageTokenKeyName)}setToken(e){r.set(this.feathersConfig.storageTokenKeyName,e,{expires:this.config.tokenExpiration,secure:!0,sameSite:"Strict"})}}function g(t,e){return{api:new f(t,e)}}const l=h(u.create({baseURL:o.baseURL,timeout:25e3,headers:{"Content-Type":"application/json"}}),{maxRequests:6,perMilliseconds:1e3}),{api:b}=g(l,{});var d=p(({app:t})=>{t.config.globalProperties.$api=b});export{b as api,d as default};
