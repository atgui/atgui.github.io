import{n,E as c,u}from"./index.fd6482f9.js";u();class d{static getBaseUrl(){return n.getBaseUrl()}static async post(t,a){return console.error("TAG \u53D1\u9001\u53C2\u6570:",a),new Promise((r,e)=>{n.axiosInstance({url:t,method:"post",data:a}).then(s=>{let o=s.data;if(o.code==401,console.error("Api:",o),!o.success){o.message&&c(o.message),e(!1);return}r(o.data)}).catch(s=>{console.error(s),e(s)})})}static async postService(t){return console.error("TAG \u53D1\u9001\u6570\u636E:",t),new Promise((a,r)=>{n.axiosInstance({url:"/api.service",method:"post",data:t}).then(e=>{a(e.data)}).catch(e=>{console.error(e),r(e)})})}static async get(t,a){return new Promise((r,e)=>{n.axiosInstance({url:t,method:"get",data:a}).then(s=>{console.error("TAG --\uFF1A\uFF1A",s),r(s.data)})})}}export{d as A};