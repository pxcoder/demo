import{g as m,s as g}from"./utils.d6b00222.js";const f=Vue.defineComponent({props:{top:{default:0},zIndex:{default:10},target:null},emits:{scroll:({scrollTop:o,fixed:u})=>typeof o=="number"&&typeof u=="boolean",change:o=>typeof o=="boolean"},setup(o,{emit:u}){const t=o,a=Vue.ref(),n=Vue.ref(),c=Vue.ref(),l=Vue.ref(!1),s=Vue.ref(0),i=Vue.ref(0),d=Vue.ref(0),p=Vue.computed(()=>{if(!!l.value)return{width:`${s.value}px`,height:`${i.value}px`}}),V=Vue.computed(()=>{if(!!l.value)return{width:`${s.value}px`,height:`${i.value}px`,top:`${t.top}px`,zIndex:t.zIndex,position:"fixed"}}),v=()=>{if(!a.value||!n.value)return;const e=a.value.getBoundingClientRect();if(s.value=e.width,i.value=e.height,d.value=n.value instanceof Window?document.documentElement.scrollTop:n.value.scrollTop||0,c.value){const r=c.value.getBoundingClientRect();l.value=e.top<=t.top&&r.bottom>0}else l.value=e.top<=t.top};Vue.watch(l,e=>u("change",e));const h=()=>{v(),u("scroll",{scrollTop:d.value,fixed:l.value})};return Vue.onMounted(()=>{var e,r;t.target&&(c.value=(e=document.querySelector(t.target))!=null?e:void 0),n.value=m(a.value),(r=n.value)==null||r.addEventListener("scroll",h)}),(e,r)=>(Vue.openBlock(),Vue.createElementBlock("div",{ref_key:"root",ref:a,style:Vue.normalizeStyle(Vue.unref(p))},[Vue.createElementVNode("div",{style:Vue.normalizeStyle(Vue.unref(V))},[Vue.renderSlot(e.$slots,"default")],4)],4))}}),_={class:"h-[200vh] bg-gray-100"},x=Vue.createElementVNode("div",{class:"h-52"},null,-1),y={class:"w-96 h-96 bg-gray-400 affix-container"},w=Vue.createElementVNode("div",{class:"w-10 h-10 bg-red-400 mx-auto"},null,-1),E=Vue.createElementVNode("div",{class:"w-10 h-10 bg-red-400 mx-auto"},null,-1),C=Vue.defineComponent({setup(o){return g("\u56FA\u9489"),(u,t)=>(Vue.openBlock(),Vue.createElementBlock("div",_,[x,Vue.createElementVNode("div",y,[Vue.createVNode(f,{target:".affix-container"},{default:Vue.withCtx(()=>[w]),_:1},8,["target"])]),Vue.createVNode(f,{top:10},{default:Vue.withCtx(()=>[E]),_:1})]))}});export{C as default};
