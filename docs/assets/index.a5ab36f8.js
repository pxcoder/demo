import{g as V,s as v}from"./utils.0d89fb9c.js";const h=Vue.defineComponent({props:{top:{default:0},zIndex:{default:10}},emits:{scroll:({scrollTop:o,fixed:l})=>typeof o=="number"&&typeof l=="boolean"},setup(o,{emit:l}){const u=o,n=Vue.shallowRef(),t=Vue.shallowRef(),r=Vue.ref(!1),s=Vue.ref(0),a=Vue.ref(0),c=Vue.ref(0),d=Vue.computed(()=>{if(!!r.value)return{width:`${s.value}px`,height:`${a.value}px`}}),i=Vue.computed(()=>{if(!!r.value)return{width:`${s.value}px`,height:`${a.value}px`,top:`${u.top}px`,zIndex:u.zIndex,position:"fixed"}}),p=()=>{if(!n.value||!t.value)return;const e=n.value.getBoundingClientRect();s.value=e.width,a.value=e.height,r.value=e.top<=u.top,c.value=t.value instanceof Window?document.documentElement.scrollTop:t.value.scrollTop||0},f=()=>{p(),l("scroll",{scrollTop:c.value,fixed:r.value})};return Vue.onMounted(()=>{var e;t.value=V(n.value),(e=t.value)==null||e.addEventListener("scroll",f)}),(e,g)=>(Vue.openBlock(),Vue.createElementBlock("div",{ref_key:"root",ref:n,style:Vue.normalizeStyle(Vue.unref(d))},[Vue.createElementVNode("div",{style:Vue.normalizeStyle(Vue.unref(i))},[Vue.renderSlot(e.$slots,"default")],4)],4))}}),m={class:"h-[200vh] bg-gray-100"},_=Vue.createElementVNode("div",{class:"h-24"},null,-1),x=Vue.createElementVNode("div",{class:"w-10 h-10 bg-red-400 mx-auto"},null,-1),w=Vue.defineComponent({setup(o){return v("\u56FA\u9489"),(l,u)=>(Vue.openBlock(),Vue.createElementBlock("div",m,[_,Vue.createVNode(h,null,{default:Vue.withCtx(()=>[x]),_:1})]))}});export{w as default};
