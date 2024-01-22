import{s as q,m as S,e as J,g as f,v as C,q as _,p as O,i as b,r as R,t as h,o as z,w as G,h as $,x as V,y as X,z as F,B as Q,c as p,C as B,a as j,F as x,A as T,k as U,l as w,E as Y,f as K}from"./entry-client-d96bfbc9.js";import{F as Z,i as P,P as N,s as ee}from"./routes-b910af9e.js";const te=h("<form>");let ne=t=>{let[e,n]=q(S({reloadDocument:!1,replace:!1,method:"post",action:"/",encType:"application/x-www-form-urlencoded"},t),["reloadDocument","replace","method","action","encType","onSubmission","onSubmit","children","ref"]),i=re(l=>{e.onSubmission&&e.onSubmission(l)}),a=e.method.toLowerCase()==="get"?"get":"post",o=null,r=null;return J(()=>{if(!r)return;function l(c){if(!(c.target instanceof HTMLElement||c.target instanceof SVGElement))return;let u=c.target.closest("button,input[type=submit]");u&&u.type==="submit"&&(o=u)}r.addEventListener("click",l),z(()=>{r&&r.removeEventListener("click",l)})},[]),(()=>{const l=f(te);return C(c=>{r=c,typeof e.ref=="function"&&e.ref(c)},l),_(l,"method",a),O(l,S({get action(){return t.action},get enctype(){return e.encType},get onSubmit(){return e.reloadDocument?void 0:c=>{e.onSubmit&&e.onSubmit(c),!c.defaultPrevented&&(c.preventDefault(),i(o||c.currentTarget,{method:e.method,replace:e.replace}),o=null)}}},n),!1,!0),b(l,()=>e.children),R(),l})()};function re(t){return(e,n={})=>{let i,a,o,r;if(se(e)){let s=n.submissionTrigger;i=n.method||e.method,a=n.action||e.action,o=n.encType||e.enctype,r=new FormData(e),s&&s.name&&r.append(s.name,s.value)}else if(D(e)||ie(e)&&(e.type==="submit"||e.type==="image")){let s=e.form;if(s==null)throw new Error("Cannot submit a <button> without a <form>");i=n.method||e.getAttribute("formmethod")||s.method,a=n.action||e.getAttribute("formaction")||s.action,o=n.encType||e.getAttribute("formenctype")||s.enctype,r=new FormData(s),e.name&&r.set(e.name,e.value)}else{if(k(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');if(i=n.method||"get",a=n.action||"/",o=n.encType||"application/x-www-form-urlencoded",e instanceof FormData)r=e;else if(r=new FormData,e instanceof URLSearchParams)for(let[s,d]of e)r.append(s,d);else if(e!=null)for(let s of Object.keys(e))r.append(s,e[s])}let{protocol:l,host:c}=window.location,u=new URL(D(a)?"/":a,`${l}//${c}`);if(i.toLowerCase()==="get")for(let[s,d]of r)if(typeof d=="string")u.searchParams.append(s,d);else throw new Error("Cannot submit binary form data using GET");let m={formData:r,action:u.pathname+u.search,method:i.toUpperCase(),encType:o};t(m)}}function k(t){return t!=null&&typeof t.tagName=="string"}function D(t){return k(t)&&t.tagName.toLowerCase()==="button"}function se(t){return k(t)&&t.tagName.toLowerCase()==="form"}function ie(t){return k(t)&&t.tagName.toLowerCase()==="input"}const ae=new Set;function oe(t){return G(()=>{for(let e of ae)e(t)})}function le(t,e={}){let n=ce(t);const[i,a]=$(n.input),[o,r]=$(n.result),l=V(),c=X();let u=0;function m(s){const d=t(s,c),v=++u;return F(()=>{r(void 0),a(()=>s)}),d.then(async g=>(v===u&&(g instanceof Response?await A(g,l,e):await W(g,e),!g||P(g)?a(void 0):r({data:g})),g)).catch(async g=>{v===u&&(g instanceof Response&&await A(g,l,e),P(g)?a(void 0):r({error:g}))})}return m.url=t.url,m.Form=s=>{let d=t.url;return p(ne,S(s,{action:d,onSubmission:v=>{m(v.formData)},get children(){return s.children}}))},[{get pending(){return!!i()&&!o()},get input(){return i()},get result(){return o()?.data},get error(){return o()?.error},clear(){F(()=>{a(void 0),r(void 0)})},retry(){const s=i();if(!s)throw new Error("No submission to retry");m(s)}},m]}function W(t,e={}){return oe(typeof e.invalidate=="function"?e.invalidate(t):e.invalidate)}function A(t,e,n){if(t instanceof Response&&P(t)){const i=t.headers.get("Location")||"/";i.startsWith("http")?window.location.href=i:e(i)}return W(t,n)}function ce(t){const[e]=Q();let n=e.form?JSON.parse(e.form):null;if(!n||n.url!==t.url)return{};const i=new Map(n.entries);return{result:{error:n.error?new Z(n.error.message,{fieldErrors:n.error.fieldErrors,stack:n.error.stack,form:n.error.form,fields:n.error.fields}):void 0},input:i}}const E={heroAvatar:"/images/hero-avatar.png",projectsPulsePlus:"/images/projects/pulseplus.png",projectsRemotebase:"/images/projects/remotebase.png",projectsCryoChamber:"/images/projects/cryochamber.png"},M=[{name:"Home",href:N.Home},{name:"Bonus",href:N.Bonus}],ue=h('<div class="sm:hidden"><div class="space-y-1 px-2 pb-3 pt-2">'),me=h('<nav class="bg-black"><div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"><div class="relative flex h-16 items-center justify-between"><div class="absolute inset-y-0 left-0 flex items-center sm:hidden"><button class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none "><div class="w-100 flex flex-col justify-center align-middle"></div></button></div><div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"><div class="flex flex-shrink-0 items-center text-white"></div><div class="hidden sm:ml-6 sm:block"><div class="flex space-x-4"></div></div></div></div></div><!#><!/>'),de=h('<span class="mb-1 h-1 w-8 bg-white">'),Ne=()=>{const[t,e]=$(!1);return(()=>{const n=f(me),i=n.firstChild,a=i.firstChild,o=a.firstChild,r=o.firstChild,l=r.firstChild,c=o.nextSibling,u=c.firstChild,m=u.nextSibling,s=m.firstChild,d=i.nextSibling,[v,g]=j(d.nextSibling);return r.$$click=()=>e(!t()),b(l,p(x,{get each(){return[...Array(3)]},children:()=>f(de)})),b(s,p(x,{each:M,children:y=>p(T,{get href(){return y.href},class:"rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700",activeClass:"underline decoration-white decoration-2 underline-offset-2",end:!0,get children(){return y.name}})})),b(n,p(U,{get when(){return t()},get children(){const y=f(ue),I=y.firstChild;return b(I,p(x,{each:M,children:L=>p(T,{get href(){return L.href},class:"block rounded-md px-3 py-2 text-base font-medium text-white","aria-current":"page",get children(){return L.name}})})),y}}),v,g),w(()=>r.classList.toggle("bg-gray-700",!!t())),R(),n})()};B(["click"]);const De={resume:"https://drive.google.com/file/d/1aYCaXEK8e_Xtc29DfuVohzFgY5mBcLes/view?usp=sharing",artstation:"https://www.artstation.com/waleedbinalim"},pe=h('<div class="w-100 col-span-5 min-h-[344px] overflow-hidden rounded-3xl shadow-2xl annoying-bp:col-span-4"><div class="w-100 h-36"><img class="h-36 w-full object-contain" alt="Music Label Site"></div><div class="px-6 py-4"><div class="mb-2 text-xl font-extrabold">Music Label Site</div><p class="text-base text-gray-700"><span class="block">An beautiful minimal and responsive site for a record label. Site map consists of a dynamic homepage, artist roster and album collection. Each of which has its own route for info.</span><br><span>This website is built with NestJS using Incremental Site Generation and uses Sanity io as a CMS for Dynamic content. Additional features include a dark theme, pagination, sorting and smooth animations using Framer Motion</span></p><a href="https://cryo-chamber.vercel.app/" target="_blank" rel="noopener noreferrer"><button class="group relative mb-1 mr-2 mt-6 inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-teal-300 to-lime-300 p-0.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-lime-200 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 dark:focus:ring-lime-800"><span class="relative rounded-full bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">Website</span></button></a></div><div class="px-6 pb-2 pt-4">'),fe=h('<span class="md:text-sm mb-2 mr-2 inline-block rounded-full bg-green-300 px-3 py-1 text-xs font-semibold text-gray-800">'),he=["Sanity io","NextJS","Framer Motion","Tanstack Query"],be=()=>(()=>{const t=f(pe),e=t.firstChild,n=e.firstChild,i=e.nextSibling,a=i.nextSibling;return b(a,p(x,{each:he,children:o=>(()=>{const r=f(fe);return b(r,o),r})()})),w(()=>_(n,"src",E.projectsCryoChamber)),t})(),ge=h('<div class="w-100 col-span-5 min-h-[344px] overflow-hidden rounded-3xl shadow-2xl annoying-bp:col-span-4"><div class="w-100 h-36"><img class="h-36 w-full object-contain" alt="Pulse Plus" elementtiming="" fetchpriority="high"></div><div class="px-6 py-4"><div class="mb-2 text-xl font-extrabold">Pulse Plus</div><p class="text-base text-gray-700"><span class="block"> A HealthTech app created under <a href="https://venture.studio/" target="_blank" rel="noopener noreferrer">Venture Studio</a> organization. Combines wearable data from a range of devices such as (Fitbit, Apple Watch, Oura etc).</span><br><span class="block">Pulse Plus is a platform to provide continuous at-home total health monitoring by connecting these devices PLUS the health data from selt testing at-home testkits as a subscription thus providing unprecedented insight to your health and fitness journey.</span></p><a href="https://pulse.plus" target="_blank" rel="noopener noreferrer"><button class="group relative mb-1 mr-2 mt-6 inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-teal-300 to-lime-300 p-0.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-lime-200 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 dark:focus:ring-lime-800"><span class="relative rounded-full bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">Website</span></button></a></div><div class="px-6 pb-2 pt-4">'),xe=h('<span class="md:text-sm mb-2 mr-2 inline-block rounded-full bg-green-300 px-3 py-1 text-xs font-semibold text-gray-800">'),ve=["D3","NextJS","XState","NestJS"],ye=()=>(()=>{const t=f(ge),e=t.firstChild,n=e.firstChild,i=e.nextSibling,a=i.nextSibling;return b(a,p(x,{each:ve,children:o=>(()=>{const r=f(xe);return b(r,o),r})()})),w(()=>_(n,"src",E.projectsPulsePlus)),t})(),we=h('<div class="w-100 col-span-5 min-h-[344px] overflow-hidden rounded-3xl shadow-2xl annoying-bp:col-span-4"><div class="w-100 h-36"><img class="h-36 w-full object-contain" alt="Remotebase" elementtiming="" fetchpriority="high"></div><div class="px-6 py-4"><div class="mb-2 text-xl font-extrabold">Remotebase</div><p class="text-base text-gray-700"><span class="block">Platform developed in collaboration alongside a team of remote engineers. Remotebase, the leading tech start-up of Pakistan, creates a solution to lack of transparency and communication lags during job hiring.</span><br><span>This is an automated hiring process application! Now one can, at their OWN pace and convenience, take tests as per their domain be a part of the hiring process at Remotebase! With full transparency and no time constraints.</span></p><a href="https://talent.remotebase.com/" target="_blank" rel="noopener noreferrer"><button class="group relative mb-1 mr-2 mt-6 inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-teal-300 to-lime-300 p-0.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-lime-200 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 dark:focus:ring-lime-800"><span class="relative rounded-full bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">Website</span></button></a></div><div class="px-6 pb-2 pt-4">'),$e=h('<span class="md:text-sm mb-2 mr-2 inline-block rounded-full bg-green-300 px-3 py-1 text-xs font-semibold text-gray-800">'),_e=["Amplify","React","GraphQL","TypeScript"],ke=()=>(()=>{const t=f(we),e=t.firstChild,n=e.firstChild,i=e.nextSibling,a=i.nextSibling;return b(a,p(x,{each:_e,children:o=>(()=>{const r=f($e);return b(r,o),r})()})),w(()=>_(n,"src",E.projectsRemotebase)),t})(),Se=h(`<div class="w-100 relative isolate inline-block w-full bg-black pb-12 after:absolute after:-inset-0 after:-top-8 after:-z-10 after:block after:min-h-[80px] after:-skew-y-3 after:bg-white after:content-['']"><div class="sm:px-16 md:px-28 mx-auto px-8 py-8"><div class="pb-12 text-4xl font-bold text-black">Projects</div><div class="grid gap-4 annoying-bp:grid-cols-5 annoying-bp:gap-8"><div class="col-span-5 annoying-bp:col-span-1 "></div><!#><!/>`),Ce=h('<div class="h-18 mb-2 rounded-xl bg-white p-4 text-center text-sm shadow-xl">'),H=[{title:"Pulse Plus",content:p(ye,{})},{title:"Remotebase",content:p(ke,{})},{title:"Music Label Site",content:p(be,{})}],Ae=()=>{const[t,e]=$("Pulse Plus");return(()=>{const n=f(Se),i=n.firstChild,a=i.firstChild,o=a.nextSibling,r=o.firstChild,l=r.nextSibling,[c,u]=j(l.nextSibling);return b(r,p(x,{each:H,children:m=>(()=>{const s=f(Ce);return s.$$click=()=>e(m.title),b(s,()=>m.title),w(d=>Y(s,{"border-2 border-green-300 shadow-none":t()===m.title},d)),R(),s})()})),b(o,p(x,{each:H,children:m=>p(U,{get when(){return t()===m?.title},get children(){return K(()=>m.content)}})}),c,u),n})()};B(["click"]);const Pe=h('<div class="mb-6"><label for="email" class="mb-2 text-sm font-medium text-white">Email</label><input name="email" id="email" class="block w-full rounded-lg border border-gray-600 bg-gray-100 p-2.5 text-sm placeholder-gray-400 outline-none" placeholder="email@domain.com" required>'),Re=h('<div class="mb-6"><label for="message" class="mb-2 text-sm font-medium text-white">Message</label><textarea name="message" class="block w-full rounded-lg border border-gray-600 bg-gray-100 p-2.5 text-sm placeholder-gray-400 outline-none" required>'),je=h('<button type="submit" class="w-full rounded-full border-2 border-green-400 px-4 py-2 font-bold text-green-400 transition-colors hover:bg-green-400 hover:text-gray-800 sm:w-[200px] md:w-full xl:text-2xl">Submit'),Ee=h('<div class="py-18 sm:px-18 bg-black px-28 pt-24"><div class="mb-8 text-center text-4xl font-bold text-white sm:text-left">Contact</div><!#><!/>'),Le=ee.createFetcher("/_m/047fee6642/acting",!0),Me=()=>{let t,e;const[n,{Form:i}]=le(Le);return(()=>{const a=f(Ee),o=a.firstChild,r=o.nextSibling,[l,c]=j(r.nextSibling);return b(a,p(i,{class:"w-70 px-8 pb-24 sm:w-80 sm:px-0",get children(){return[(()=>{const u=f(Pe),m=u.firstChild,s=m.nextSibling,d=t;return typeof d=="function"?C(d,s):t=s,u})(),(()=>{const u=f(Re),m=u.firstChild,s=m.nextSibling,d=e;return typeof d=="function"?C(d,s):e=s,u})(),f(je)]}}),l,c),a})()};export{Me as C,Ne as N,Ae as P,De as e,E as i};
