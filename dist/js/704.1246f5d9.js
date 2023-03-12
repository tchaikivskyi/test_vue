"use strict";(self["webpackChunkvue_test_3"]=self["webpackChunkvue_test_3"]||[]).push([[704],{5489:function(t,e,s){s.d(e,{Z:function(){return u}});var o=s(3396),a=s(7139);const r={class:"form"},n={class:"header"};function i(t,e,s,i,l,d){return(0,o.wg)(),(0,o.iD)("div",r,[(0,o._)("div",n,(0,a.zw)(s.title),1),(0,o.WI)(t.$slots,"default")])}var l={name:"MainForm",props:{title:String}},d=s(89);const c=(0,d.Z)(l,[["render",i]]);var u=c},1704:function(t,e,s){s.r(e),s.d(e,{default:function(){return rt}});var o=s(3396),a=s(9242);const r={class:"todos"},n={key:0,class:"error"};function i(t,e,s,i,l,d){const c=(0,o.up)("MainHeader"),u=(0,o.up)("MainForm"),p=(0,o.up)("FilterList"),v=(0,o.up)("TodoList");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(c),(0,o._)("div",r,[(0,o.Wm)(u,{title:"Create todo"},{default:(0,o.w5)((()=>[(0,o._)("form",null,[(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>l.todo.userId=t),placeholder:"User id"},null,512),[[a.nr,l.todo.userId]]),(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=t=>l.todo.title=t),placeholder:"Title"},null,512),[[a.nr,l.todo.title]]),l.newTodoError?((0,o.wg)(),(0,o.iD)("div",n,"Something error")):(0,o.kq)("",!0),(0,o._)("input",{type:"button",onClick:e[2]||(e[2]=(...t)=>d.createTodo&&d.createTodo(...t)),value:"Add"})])])),_:1}),(0,o.Wm)(p),(0,o.Wm)(v)])])}var l=s(7139);const d=t=>((0,o.dD)("data-v-69829d66"),t=t(),(0,o.Cn)(),t),c=d((()=>(0,o._)("span",{class:"logo"},"Todo List",-1))),u={key:0};function p(t,e,a,r,n,i){return(0,o.wg)(),(0,o.iD)("header",null,[c,t.$store.state.users.currentUser?((0,o.wg)(),(0,o.iD)("div",u,[(0,o._)("span",null,(0,l.zw)(t.$store.state.users.currentUser.name),1),(0,o._)("span",{class:"avatar",style:(0,l.j5)({backgroundImage:`url(${s(958)})`}),onClick:e[0]||(e[0]=e=>t.$store.dispatch("logout"))},null,4)])):(0,o.kq)("",!0)])}s(7658);var v={name:"MainHeader",created(){const t=localStorage.getItem("userId");t||this.$router.push({name:"Login"}),this.$store.dispatch("getUser",t)}},g=s(89);const h=(0,g.Z)(v,[["render",p],["__scopeId","data-v-69829d66"]]);var m=h;const _=t=>((0,o.dD)("data-v-fc100810"),t=t(),(0,o.Cn)(),t),w={key:1},f={class:"num"},k=["onClick"],I=_((()=>(0,o._)("path",{d:"M16.22,5.59a4.13,4.13,0,0,0-3.43-1.78A3.7,3.7,0,0,0,10,5,3.71,3.71,0,0,0,7.21,3.81,4.13,4.13,0,0,0,3.78,5.59,4.22,4.22,0,0,0,3.6,9.77a10.67,10.67,0,0,0,2.09,3.09,23.44,23.44,0,0,0,3.23,2.82,1.84,1.84,0,0,0,2.16,0,23.36,23.36,0,0,0,3.23-2.82A10.67,10.67,0,0,0,16.4,9.77,4.22,4.22,0,0,0,16.22,5.59Zm-.66,3.83a10,10,0,0,1-1.92,2.82,22.72,22.72,0,0,1-3.1,2.7.9.9,0,0,1-1.08,0,22.8,22.8,0,0,1-3.1-2.7A9.75,9.75,0,0,1,4.44,9.42a3.38,3.38,0,0,1,.1-3.33A3.21,3.21,0,0,1,7.21,4.73a2.8,2.8,0,0,1,2.24,1,.81.81,0,0,0,1.12,0,2.8,2.8,0,0,1,2.22-1,3.21,3.21,0,0,1,2.67,1.36A3.38,3.38,0,0,1,15.56,9.42Z"},null,-1))),$=[I],D={key:2,class:"not-found"};function L(t,e,s,a,r,n){const i=(0,o.up)("MainLoader");return(0,o.wg)(),(0,o.iD)("div",null,[t.$store.state.todos.loader?((0,o.wg)(),(0,o.j4)(i,{key:0})):t.$store.state.todos.searchList.length>0?((0,o.wg)(),(0,o.iD)("ul",w,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.$store.state.todos.searchList,((t,e)=>((0,o.wg)(),(0,o.iD)("li",{key:t.id},[(0,o._)("span",f,(0,l.zw)(++e),1),(0,o._)("span",null,(0,l.zw)(t.title),1),(0,o._)("span",{class:(0,l.C_)(["wish",{active:n.checkWishList(t.id)}])},[((0,o.wg)(),(0,o.iD)("svg",{onClick:e=>n.toggleWishList(e,t),"data-name":"Capa 1",id:"Capa_1",viewBox:"0 0 20 19.84",xmlns:"http://www.w3.org/2000/svg"},$,8,k))],2)])))),128))])):((0,o.wg)(),(0,o.iD)("span",D,"Not found"))])}const y=t=>((0,o.dD)("data-v-4db2de0f"),t=t(),(0,o.Cn)(),t),C={class:"lds-ellipsis"},T=y((()=>(0,o._)("div",null,null,-1))),S=y((()=>(0,o._)("div",null,null,-1))),U=y((()=>(0,o._)("div",null,null,-1))),M=y((()=>(0,o._)("div",null,null,-1))),Z=[T,S,U,M];function b(t,e,s,a,r,n){return(0,o.wg)(),(0,o.iD)("div",C,Z)}var W={name:"MainLoader"};const x=(0,g.Z)(W,[["render",b],["__scopeId","data-v-4db2de0f"]]);var A=x,E={name:"TodoList",components:{MainLoader:A},methods:{toggleWishList(t,e){const s=JSON.parse(localStorage.getItem("wishlist"));t.target.parentElement.classList.contains("active")?localStorage.setItem("wishlist",JSON.stringify(s.filter((t=>t.id!==e.id)))):localStorage.setItem("wishlist",JSON.stringify(s?[...s,e]:[e])),t.target.parentElement.classList.toggle("active")},checkWishList:t=>{const e=JSON.parse(localStorage.getItem("wishlist"));if(e)return-1!==e.findIndex((e=>e.id===t))}},created(){this.$store.dispatch("getTodos",{id:localStorage.getItem("userId")})}};const F=(0,g.Z)(E,[["render",L],["__scopeId","data-v-fc100810"]]);var z=F;const H=t=>((0,o.dD)("data-v-79da3d01"),t=t(),(0,o.Cn)(),t),N={class:"filters"},J={class:"filter"},O=["value"],V=H((()=>(0,o._)("option",{value:"all"},"All",-1))),j=H((()=>(0,o._)("option",{value:!0},"Completed",-1))),q=H((()=>(0,o._)("option",{value:!1},"Uncompleted",-1))),K=[V,j,q],Y={class:"filter"},B=["value"],P=["value"],G={class:"filter"},Q=["value"];function R(t,e,s,a,r,n){return(0,o.wg)(),(0,o.iD)("div",N,[(0,o._)("div",J,[(0,o.Uk)(" Status: "),(0,o._)("select",{value:t.$store.state.todos.status,onChange:e[0]||(e[0]=e=>t.$store.dispatch("getTodos",{id:t.$store.state.users.selectedUser,status:e.target.value}))},K,40,O)]),(0,o._)("div",Y,[(0,o.Uk)(" User ID: "),(0,o._)("select",{value:t.$store.state.users.selectedUser,onChange:e[1]||(e[1]=e=>t.$store.dispatch("getTodos",{id:e.target.value,status:t.$store.state.todos.status}))},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.$store.state.users.countUsers,(t=>((0,o.wg)(),(0,o.iD)("option",{key:t,value:t},(0,l.zw)(t),9,P)))),128))],40,B)]),(0,o._)("div",G,[(0,o.Uk)(" Search by title: "),(0,o._)("input",{type:"text",value:t.$store.state.todos.searchValue,onInput:e[2]||(e[2]=e=>t.$store.commit("changeSearchValue",e.target.value)),placeholder:"Search"},null,40,Q)])])}var X={name:"FilterList",created(){this.$store.dispatch("getCountUsers")}};const tt=(0,g.Z)(X,[["render",R],["__scopeId","data-v-79da3d01"]]);var et=tt,st=s(5489),ot={name:"TodosPage",components:{MainForm:st.Z,FilterList:et,TodoList:z,MainHeader:m},data(){return{todo:{userId:"",title:"",completed:!1},newTodoError:!1}},methods:{async createTodo(){const{userId:t,title:e}=this.todo,s=this.$store.state.todos.list.find((t=>t.title===e));if(!t||e.length<3||s)return this.newTodoError=!0,!1;const o=this.$store.dispatch("create",this.todo);if(!o)return this.newTodoError=!0,!1;this.newTodoError=!1,this.todo={userId:"",title:"",completed:!1}}}};const at=(0,g.Z)(ot,[["render",i],["__scopeId","data-v-54b576a8"]]);var rt=at},958:function(t,e,s){t.exports=s.p+"img/exit.74d9bcac.svg"}}]);
//# sourceMappingURL=704.1246f5d9.js.map