var d=Object.defineProperty;var f=(t,e,s)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var u=(t,e,s)=>(f(t,typeof e!="symbol"?e+"":e,s),s);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();const a=class{static handleErrors(e){return async()=>{try{return await e()}catch(r){console.error("Помилка при запиті:",r.message)}}}async getQuotes(){return await(await fetch(`${a.BASE_URL}/quote`)).json()}async getByFilterName(e){const s=new URLSearchParams({...e});return await(await fetch(`${a.BASE_URL}/filters?${s}`)).json()}async getByFilterCategory(e){const s=new URLSearchParams({...e});return await(await fetch(`${a.BASE_URL}/exercises?${s}`)).json()}async getOneExercises(e){return await(await fetch(`${a.BASE_URL}/exercises/${e}`)).json()}async addExercisesRate(e,s){const r={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)};return await(await fetch(`${a.BASE_URL}/exercises/${e}/rating`,r)).json()}async addSubscription(e){const s={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return await(await fetch(`${a.BASE_URL}/subscription`,s)).json()}};let c=a;u(c,"BASE_URL","https://your-energy.b.goit.study/api");const i=new c;async function p(){const t=await i.getQuotes();console.log("quotes-->",t)}const y={bodypart:"Muscles",page:1,limit:12};async function g(){const t=await i.getByFilterName(y);console.log("filter-->",t)}const m={bodypart:"back",muscles:"lats",equipment:"barbell",keyword:"pull",page:1,limit:10};async function w(){const t=await i.getByFilterCategory(m);console.log("exercises-->",t)}async function h(){const t=await i.getOneExercises("64f389465ae26083f39b1ab2");console.log("oneExercises-->",t)}const b={rate:5,email:"test2@gmail.com",review:"My best exercise"};async function E(){const t=await i.addExercisesRate("64f389465ae26083f39b1ab2",b);console.log("addRate-->",t)}const x={email:"test2@gmail.com"};async function R(){const t=await i.addSubscription(x);console.log("subscription-->",t)}p();g();w();h();E();R();
//# sourceMappingURL=main-80745b5c.js.map
