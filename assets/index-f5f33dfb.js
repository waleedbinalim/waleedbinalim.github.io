import{l as x,c as t,g as d,a as r,i,T as g,A as b,t as _}from"./entry-client-07684f50.js";import{M as $}from"./Contact-473ad2f6.js";import"./routes-e6eee641.js";const h=()=>{const[e,{increment:n}]=x();return t($.button,{animate:{opacity:[0,1],x:[-100,0]},transition:{duration:.5,easing:"ease-in-out"},class:"rounded-md bg-blue-100 px-3 py-1 text-gray-400  shadow-lg",onClick:n,get children(){return["Clicks: ",e]}})},f=_('<main><!#><!/><!#><!/><p class="text-xl font-bold">Go back home <span class="text-blue-500 underline">'),y=()=>(()=>{const e=d(f),n=e.firstChild,[l,s]=r(n.nextSibling),a=l.nextSibling,[o,c]=r(a.nextSibling),u=o.nextSibling,m=u.firstChild,p=m.nextSibling;return i(e,t(g,{children:"About"}),l,s),i(e,t(h,{}),o,c),i(p,t(b,{href:"/",children:"Here"})),e})();export{y as Apple,y as default};