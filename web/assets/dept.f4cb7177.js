import{A as h}from"./api.9842e3f2.js";import{d as F,r as a,o as k,a as D,e as w,g as e,w as r,h as c,a8 as i,f as x,j as y,b as m}from"./index.9f059a2e.js";const z={key:0,class:"commonCls"},B={class:"demo-pagination-block roomPageClass"},I=F({__name:"dept",setup(N){a("1");const g=a(!1),_=a(!1),s=a(1),p=a(10),u=a(!1);a([1]),k(()=>{u.value=!0,b()});const b=()=>{h.post("/getDepts").then(t=>{console.error(t),d.value=t}).catch(t=>{console.error(t)})};a(),a([]);const d=a([]),f=t=>{console.log(`${t} items per page`)},v=t=>{console.log(`current page: ${t}`)};return(t,n)=>{const o=m("el-table-column"),C=m("el-pagination");return u.value?(D(),w("div",z,[e(c(i),{data:d.value,border:g.value,style:{width:"100%"}},{default:r(()=>[e(o,{type:"expand",onclick:"rowClick"},{default:r(l=>[e(c(i),{data:l.row.rooms,stripe:"",border:_.value},{default:r(()=>[e(o,{label:"ID",prop:"roomId"}),e(o,{label:"\u540D\u79F0",prop:"roomName"}),e(o,{label:"\u72B6\u6001",prop:"status"}),e(o,{label:"\u7F16\u7801",prop:"roomCode"}),e(o,{label:"\u4F4D\u7F6E",prop:"location"})]),_:2},1032,["data","border"])]),_:1}),e(o,{label:"ID",prop:"deptId"}),e(o,{label:"\u540D\u79F0",prop:"deptName"}),e(o,{label:"\u7F16\u7801",prop:"deptCode"}),e(o,{label:"\u4F4D\u7F6E",prop:"location"})]),_:1},8,["data","border"]),x("div",B,[e(C,{currentPage:s.value,"onUpdate:currentPage":n[0]||(n[0]=l=>s.value=l),"page-size":p.value,"onUpdate:page-size":n[1]||(n[1]=l=>p.value=l),small:!1,disabled:!1,background:!0,layout:"prev, pager, next, jumper",total:200,onSizeChange:f,onCurrentChange:v},null,8,["currentPage","page-size"])])])):y("",!0)}}});export{I as default};
