import{d as k,r as C,o as b,a as v,e as x,f as o,g as e,w as t,j as y,a1 as d,a3 as a,a4 as N,E as i,b as u,k as s}from"./index.fd6482f9.js";const B={key:0,class:"commonCls"},E=s(" Message \u6D88\u606F\u63D0\u793A "),M=s("Show message"),T=s("VNode"),V=o("br",null,null,-1),w=o("br",null,null,-1),D=s(" Notification \u901A\u77E5 "),F=s(" Closes automatically "),A=s(" Won't close automatically "),S=o("br",null,null,-1),j=o("br",null,null,-1),z=s(" MessageBox \u6D88\u606F\u5F39\u6846 "),K=s("Click to open the Message Box"),O=o("br",null,null,-1),P=o("br",null,null,-1),W=s(" \u5176\u4ED6\u53C2\u770B\u6587\u6863 "),H=k({__name:"base_tips",setup($){const r=()=>{d({title:"Title",message:a("i",{style:"color: teal"},"This is a reminder")})},m=()=>{d({title:"Prompt",message:"This is a message that does not automatically close",duration:0})},h=()=>{N.alert("This is a message","Title",{confirmButtonText:"OK",callback:_=>{i({type:"info",message:`action: ${_}`})}})},p=()=>{i("this is a message.")},f=()=>{i({message:a("p",null,[a("span",null,"Message can be "),a("i",{style:"color: teal"},"VNode")])})},c=C(!1);return b(()=>{c.value=!0}),(_,q)=>{const n=u("el-divider"),l=u("el-button"),g=u("el-link");return c.value?(v(),x("div",B,[o("div",null,[e(n,null,{default:t(()=>[E]),_:1})]),e(l,{plain:!0,onClick:p},{default:t(()=>[M]),_:1}),e(l,{plain:!0,onClick:f},{default:t(()=>[T]),_:1}),V,w,o("div",null,[e(n,null,{default:t(()=>[D]),_:1})]),e(l,{plain:"",onClick:r},{default:t(()=>[F]),_:1}),e(l,{plain:"",onClick:m},{default:t(()=>[A]),_:1}),S,j,o("div",null,[e(n,null,{default:t(()=>[z]),_:1})]),e(l,{text:"",onClick:h},{default:t(()=>[K]),_:1}),O,P,o("div",null,[e(n,null,{default:t(()=>[e(g,{type:"primary",href:"https://element-plus.org/zh-CN/component/message.html",target:"_blank"},{default:t(()=>[W]),_:1})]),_:1})])])):y("",!0)}}});export{H as default};