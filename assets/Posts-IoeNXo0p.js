import{g as _,k as p,_ as l,o as a,c as o,F as i,h as u,a as f,t as s,b as d}from"./app-DVfg3JbJ.js";const g=_({__name:"Posts",setup(n,{expose:r}){r();const e={categoryMap:p("post")};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}}),m=["href"];function h(n,r,c,e,x,y){return a(),o("ul",null,[(a(!0),o(i,null,u(e.categoryMap.items,t=>(a(),o("li",null,[f("a",{href:t.path},s(t.info.title),9,m),d(" "+s(new Date(t.info.date).toLocaleDateString()),1)]))),256))])}const S=l(g,[["render",h],["__file","Posts.vue"]]);export{S as default};