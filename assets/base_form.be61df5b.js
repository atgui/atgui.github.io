import{d as F,r as s,o as I,a as P,e as U,f as t,g as l,w as n,j as M,b as i,X as j,Y as L,k as d}from"./index.dcb32dfd.js";import{_ as R}from"./_plugin-vue_export-helper.cdc0426e.js";const v=c=>(j("data-v-a9f85d08"),c=c(),L(),c),O={key:0,class:"commonCls"},z=d(" \u8868\u5355\u81EA\u52A8\u8865\u5168 "),G=v(()=>t("div",{class:"sub-title my-2 text-sm text-gray-600"}," list suggestions when activated ",-1)),X=v(()=>t("div",{class:"sub-title my-2 text-sm text-gray-600"}," list suggestions on input ",-1)),Y=d(" \u8FDC\u7A0B\u52A0\u8F7D "),q=d(" \u8054\u7EA7\u9009\u62E9 "),H={class:"example-block"},J=v(()=>t("span",{class:"example-demonstration"},"Child options expand when clicked (default)",-1)),K={class:"example-block"},Q=v(()=>t("span",{class:"example-demonstration"},"Child options expand when hovered",-1)),W=d(" \u5176\u4ED6\u53C2\u770B\u6587\u6863 "),Z=F({__name:"base_form",setup(c){const h=s(""),_=s(""),b=s([]),g=(a,e)=>{const u=a?b.value.filter(f(a)):b.value;e(u)},f=a=>e=>e.value.toLowerCase().indexOf(a.toLowerCase())===0,E=()=>[{value:"vue",link:"https://github.com/vuejs/vue"},{value:"element",link:"https://github.com/ElemeFE/element"},{value:"cooking",link:"https://github.com/ElemeFE/cooking"},{value:"mint-ui",link:"https://github.com/ElemeFE/mint-ui"},{value:"vuex",link:"https://github.com/vuejs/vuex"},{value:"vue-router",link:"https://github.com/vuejs/vue-router"},{value:"babel",link:"https://github.com/babel/babel"}],p=a=>{console.log(a)},k=s(""),x=s([]);let C;const N=(a,e)=>{const u=a?x.value.filter(f(a)):x.value;clearTimeout(C),C=setTimeout(()=>{e(u)},3e3*Math.random())},r=s([]),D={expandTrigger:"hover"},y=a=>{console.log(a)},V=[{value:"guide",label:"Guide",children:[{value:"disciplines",label:"Disciplines",children:[{value:"consistency",label:"Consistency"},{value:"feedback",label:"Feedback"},{value:"efficiency",label:"Efficiency"},{value:"controllability",label:"Controllability"}]},{value:"navigation",label:"Navigation",children:[{value:"side nav",label:"Side Navigation"},{value:"top nav",label:"Top Navigation"}]}]},{value:"component",label:"Component",children:[{value:"basic",label:"Basic",children:[{value:"layout",label:"Layout"},{value:"color",label:"Color"},{value:"typography",label:"Typography"},{value:"icon",label:"Icon"},{value:"button",label:"Button"}]},{value:"form",label:"Form",children:[{value:"radio",label:"Radio"},{value:"checkbox",label:"Checkbox"},{value:"input",label:"Input"},{value:"input-number",label:"InputNumber"},{value:"select",label:"Select"},{value:"cascader",label:"Cascader"},{value:"switch",label:"Switch"},{value:"slider",label:"Slider"},{value:"time-picker",label:"TimePicker"},{value:"date-picker",label:"DatePicker"},{value:"datetime-picker",label:"DateTimePicker"},{value:"upload",label:"Upload"},{value:"rate",label:"Rate"},{value:"form",label:"Form"}]},{value:"data",label:"Data",children:[{value:"table",label:"Table"},{value:"tag",label:"Tag"},{value:"progress",label:"Progress"},{value:"tree",label:"Tree"},{value:"pagination",label:"Pagination"},{value:"badge",label:"Badge"}]},{value:"notice",label:"Notice",children:[{value:"alert",label:"Alert"},{value:"loading",label:"Loading"},{value:"message",label:"Message"},{value:"message-box",label:"MessageBox"},{value:"notification",label:"Notification"}]},{value:"navigation",label:"Navigation",children:[{value:"menu",label:"Menu"},{value:"tabs",label:"Tabs"},{value:"breadcrumb",label:"Breadcrumb"},{value:"dropdown",label:"Dropdown"},{value:"steps",label:"Steps"}]},{value:"others",label:"Others",children:[{value:"dialog",label:"Dialog"},{value:"tooltip",label:"Tooltip"},{value:"popover",label:"Popover"},{value:"card",label:"Card"},{value:"carousel",label:"Carousel"},{value:"collapse",label:"Collapse"}]}]},{value:"resource",label:"Resource",children:[{value:"axure",label:"Axure Components"},{value:"sketch",label:"Sketch Templates"},{value:"docs",label:"Design Documentation"}]}],w=s(!1);return I(()=>{w.value=!0,b.value=E()}),(a,e)=>{const u=i("el-divider"),m=i("el-autocomplete"),S=i("el-col"),B=i("el-row"),T=i("el-cascader"),A=i("el-link");return w.value?(P(),U("div",O,[t("div",null,[l(u,null,{default:n(()=>[z]),_:1}),l(B,{class:"demo-autocomplete text-center"},{default:n(()=>[l(S,{span:12},{default:n(()=>[G,l(m,{modelValue:h.value,"onUpdate:modelValue":e[0]||(e[0]=o=>h.value=o),"fetch-suggestions":g,clearable:"",class:"inline-input w-50",placeholder:"Please Input",onSelect:p},null,8,["modelValue"])]),_:1}),l(S,{span:12},{default:n(()=>[X,l(m,{modelValue:_.value,"onUpdate:modelValue":e[1]||(e[1]=o=>_.value=o),"fetch-suggestions":g,"trigger-on-focus":!1,clearable:"",class:"inline-input w-50",placeholder:"Please Input",onSelect:p},null,8,["modelValue"])]),_:1})]),_:1})]),t("div",null,[l(u,null,{default:n(()=>[Y]),_:1}),l(m,{modelValue:k.value,"onUpdate:modelValue":e[2]||(e[2]=o=>k.value=o),"fetch-suggestions":N,placeholder:"Please input",onSelect:p},null,8,["modelValue"])]),t("div",null,[l(u,null,{default:n(()=>[q]),_:1}),t("div",H,[J,l(T,{modelValue:r.value,"onUpdate:modelValue":e[3]||(e[3]=o=>r.value=o),options:V,onChange:y},null,8,["modelValue"])]),t("div",K,[Q,l(T,{modelValue:r.value,"onUpdate:modelValue":e[4]||(e[4]=o=>r.value=o),options:V,props:D,onChange:y},null,8,["modelValue"])])]),t("div",null,[l(u,null,{default:n(()=>[l(A,{type:"primary",href:"https://element-plus.org/zh-CN/component/form.html",target:"_blank"},{default:n(()=>[W]),_:1})]),_:1})])])):M("",!0)}}});const le=R(Z,[["__scopeId","data-v-a9f85d08"]]);export{le as default};
