import{A as v}from"./api.ebc9ef4c.js";import{u as $}from"./login.a6886546.js";import{d as B,r as i,o as S,a as I,e as y,g as r,w as d,j as z,F as D,b as p,f as b,v as A,c as T,k as f,t as U}from"./index.4887ea37.js";const j={key:0,class:"commonCls"},L=f("\u7F16\u8F91 "),P=f("\u6743\u9650\u5206\u914D "),G={style:{display:"flex","flex-direction":"row","align-items":"center","justify-content":"center","margin-top":"10px"}},q=b("span",{style:{flex:"1"}}," \u9009\u62E9\u83DC\u5355\uFF1A",-1),H={class:"dialog-footer"},J=f("Cancel"),K=f("Confirm"),Y=B({__name:"role",setup(O){const x=$(),m=i(!1);let V=-1;const g=i(),k=i([]),_=i(),F=i(!1);S(()=>{w(),F.value=!0});const w=()=>{v.post("/getRoles",{}).then(a=>{console.error("\u89D2\u8272\u4FE1\u606F:",a),g.value=a}).catch(a=>{})},C=i([]);function E(a,t){console.error(a,t)}const M=(a,t)=>{console.error(a,t),V=a,m.value=!0,k.value=[];for(let o in t)console.error(o,"::",t[o]),k.value.push({key:o,value:t[o]});C.value=[],_.value=[],v.post("/getMenus").then(o=>{console.error(o);let n=[],c=o;o.sort((l,s)=>l.menuId-s.menuId),o.forEach(l=>{let s={value:l.menuId,label:l.menuName,meta:l.meta,parentId:l.parentId,registerTime:l.registerTime,show:l.show,children:[]};if(l.parentId==0)n.push(s);else{let u=-1;for(let e=0;e<n.length;e++)if(n[e].value==l.parentId){u=e;break}u>-1&&n[u].children.push(s)}}),C.value=n,console.error("TAG \u83DC\u5355\u4FE1\u606F:",n),v.post("/getRoleMenus",{RoleId:t.roleId}).then(l=>{if(console.error("\u89D2\u8272\u83DC\u5355\u4FE1\u606F:",l),l.roleId==t.roleId){let s=l.menuIds.split(",");for(let u=0;u<s.length;u++){let e=c.find(h=>h.menuId==s[u]);e&&_.value.push(e.menuId)}}}).catch(l=>{console.error(l)})}).catch(o=>{console.error(o)})},N=()=>{let a=g.value[V];m.value=!1;let t=_.value;t.sort((n,c)=>n-c);let o=t.join(",");console.error(o),v.post("/updateRoleMenus",{RoleId:a.roleId,MenuIds:o}).then(n=>{console.error(n);let c=x.updateMenu(n.MenuIds);x.$patch(l=>{l.menus=c})}).catch(n=>{console.error(n)})};return(a,t)=>{const o=p("el-table-column"),n=p("el-button"),c=p("el-table"),l=p("el-input"),s=p("el-tree-select"),u=p("el-dialog");return I(),y(D,null,[F.value?(I(),y("div",j,[r(c,{data:g.value,stripe:"",style:{width:"100%"}},{default:d(()=>[r(o,{prop:"roleId",label:"ID",width:"180"}),r(o,{prop:"roleName",label:"\u89D2\u8272\u540D\u79F0",width:"180"}),r(o,{label:"\u64CD\u4F5C"},{default:d(e=>[r(n,{size:"small",onClick:h=>E(e.$index,e.row)},{default:d(()=>[L]),_:2},1032,["onClick"]),r(n,{size:"small",onClick:h=>M(e.$index,e.row)},{default:d(()=>[P]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])])):z("",!0),r(u,{modelValue:m.value,"onUpdate:modelValue":t[2]||(t[2]=e=>m.value=e),title:"\u83DC\u5355\u6743\u9650\u914D\u7F6E",width:"60%"},{footer:d(()=>[b("span",H,[r(n,{onClick:t[1]||(t[1]=e=>m.value=!1)},{default:d(()=>[J]),_:1}),r(n,{type:"primary",onClick:N},{default:d(()=>[K]),_:1})])]),default:d(()=>[(I(!0),y(D,null,A(k.value,(e,h)=>(I(),T(l,{disabled:"",style:{margin:"5px"},class:"w-50 m-2",size:"large",modelValue:e.value,"onUpdate:modelValue":R=>e.value=R,key:e.key,placeholder:"Please input"},{prepend:d(()=>[f(U(e.key),1)]),_:2},1032,["modelValue","onUpdate:modelValue"]))),128)),b("div",G,[q,r(s,{style:{flex:"4"},modelValue:_.value,"onUpdate:modelValue":t[0]||(t[0]=e=>_.value=e),class:"w-50 m-2",size:"large",data:C.value,multiple:"","render-after-expand":!1,"show-checkbox":"","check-strictly":"","check-on-click-node":""},null,8,["modelValue","data"])])]),_:1},8,["modelValue"])],64)}}});export{Y as default};