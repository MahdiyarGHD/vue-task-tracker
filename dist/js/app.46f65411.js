(function(){"use strict";var t={9877:function(t,e,n){var a=n(9242),o=n(3396);const s={class:"container"};function r(t,e,n,a,r,i){const d=(0,o.up)("Header"),l=(0,o.up)("router-view"),u=(0,o.up)("Footer");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",s,[(0,o.Wm)(d,{onToggleAddTask:i.toggleAddTask,title:"Task Tracker",showAddTask:r.showAddTask},null,8,["onToggleAddTask","showAddTask"]),(0,o.Wm)(l,{showAddTask:r.showAddTask},null,8,["showAddTask"])]),(0,o.Wm)(u)],64)}var i=n(7139);function d(t,e,n,a,s,r){const d=(0,o.up)("Button");return(0,o.wg)(),(0,o.iD)("header",null,[(0,o._)("h1",null,(0,i.zw)(n.title),1),r.homePage?((0,o.wg)(),(0,o.j4)(d,{key:0,onBtnClick:e[0]||(e[0]=e=>t.$emit("toggle-add-task")),text:n.showAddTask?"Close":"Add Task",color:n.showAddTask?"red":"green"},null,8,["text","color"])):(0,o.kq)("",!0)])}function l(t,e,n,a,s,r){return(0,o.wg)(),(0,o.iD)("button",{onClick:e[0]||(e[0]=t=>r.onClick()),style:(0,i.j5)({background:n.color}),class:"btn"},(0,i.zw)(n.text),5)}var u={name:"Button",props:{text:String,color:String},methods:{onClick(){this.$emit("btn-click")}}},c=n(89);const k=(0,c.Z)(u,[["render",l]]);var m=k,h={name:"Header",props:{title:String,showAddTask:String},components:{Button:m},emits:["toggle-add-task"],computed:{homePage(){return"/"===this.$route.path}}};const f=(0,c.Z)(h,[["render",d],["__scopeId","data-v-8aba03f4"]]);var p=f;const g=(0,o.Uk)("About");function T(t,e){const n=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("footer",null,[(0,o._)("p",null," Copyright © "+(0,i.zw)((new Date).getFullYear()),1),(0,o.Wm)(n,{to:"/about"},{default:(0,o.w5)((()=>[g])),_:1})])}const w={},v=(0,c.Z)(w,[["render",T],["__scopeId","data-v-ea3eb452"]]);var y=v,b={name:"App",components:{Header:p,Footer:y},data(){return{showAddTask:!1}},methods:{toggleAddTask(){this.showAddTask=!this.showAddTask}}};const _=(0,c.Z)(b,[["render",r]]);var A=_,D=n(678);const x=(0,o._)("h3",null,"Version 1.0.0",-1),O=(0,o.Uk)("Go Back");function j(t,e){const n=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)(o.HY,null,[x,(0,o.Wm)(n,{to:"/"},{default:(0,o.w5)((()=>[O])),_:1})],64)}const C={},S=(0,c.Z)(C,[["render",j]]);var $=S;const H={key:0};function Z(t,e,n,a,s,r){const i=(0,o.up)("AddTask"),d=(0,o.up)("Tasks");return(0,o.wg)(),(0,o.iD)(o.HY,null,[n.showAddTask?((0,o.wg)(),(0,o.iD)("div",H,[(0,o.Wm)(i,{onAddTask:r.addTask},null,8,["onAddTask"])])):(0,o.kq)("",!0),(0,o.Wm)(d,{onToggleReminder:r.toggleReminder,onDeleteTask:r.deleteTask,tasks:s.tasks},null,8,["onToggleReminder","onDeleteTask","tasks"])],64)}const P=t=>((0,o.dD)("data-v-ff1149ce"),t=t(),(0,o.Cn)(),t),W={class:"form-control"},R=P((()=>(0,o._)("label",null,"Task",-1))),U={class:"form-control"},B=P((()=>(0,o._)("label",null,"Day & Time",-1))),z={class:"form-control form-control-check"},Y=P((()=>(0,o._)("label",null,"Set Reminder",-1))),E=P((()=>(0,o._)("input",{type:"submit",value:"Save Task",class:"btn btn-block"},null,-1)));function F(t,e,n,s,r,i){return(0,o.wg)(),(0,o.iD)("form",{onSubmit:e[3]||(e[3]=(...t)=>i.onSubmit&&i.onSubmit(...t)),class:"add-form"},[(0,o._)("div",W,[R,(0,o.wy)((0,o._)("input",{type:"text",name:"text","onUpdate:modelValue":e[0]||(e[0]=t=>r.text=t),placeholder:"Add Text"},null,512),[[a.nr,r.text]])]),(0,o._)("div",U,[B,(0,o.wy)((0,o._)("input",{type:"text",name:"day",placeholder:"Add Day & Time","onUpdate:modelValue":e[1]||(e[1]=t=>r.day=t)},null,512),[[a.nr,r.day]])]),(0,o._)("div",z,[Y,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":e[2]||(e[2]=t=>r.reminder=t),type:"checkbox",name:"reminder"},null,512),[[a.e8,r.reminder]])]),E],32)}var V={name:"AddTask",data(){return{text:"",day:"",reminder:!1}},methods:{onSubmit(t){if(t.preventDefault(),!this.text)return void alert("Please add a task");const e={id:Math.floor(1e5*Math.random()),text:this.text,day:this.day,reminder:this.reminder};this.$emit("add-task",e),this.text="",this.day="",this.reminder=!1}}};const I=(0,c.Z)(V,[["render",F],["__scopeId","data-v-ff1149ce"]]);var M=I;function q(t,e,n,a,s,r){const i=(0,o.up)("Task");return(0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.tasks,(e=>((0,o.wg)(),(0,o.iD)("div",{key:e.id},[(0,o.Wm)(i,{onToggleReminder:n=>t.$emit("toggle-reminder",e.id),onDeleteTask:n=>t.$emit("delete-task",e.id),task:e},null,8,["onToggleReminder","onDeleteTask","task"])])))),128)}function J(t,e,n,a,s,r){return(0,o.wg)(),(0,o.iD)("div",{onDblclick:e[1]||(e[1]=e=>t.$emit("toggle-reminder",n.task.id)),class:(0,i.C_)([n.task.reminder?"reminder":"","task"])},[(0,o._)("h3",null,[(0,o.Uk)((0,i.zw)(n.task.text)+" ",1),(0,o._)("i",{onClick:e[0]||(e[0]=e=>t.$emit("delete-task",n.task.id)),class:"fas fa-times"})]),(0,o._)("p",null,(0,i.zw)(n.task.day),1)],34)}var N={name:"Task",props:{task:Object}};const G=(0,c.Z)(N,[["render",J]]);var K=G,L={name:"Tasks",components:{Task:K},props:{tasks:Array},emits:["delete-task","toggle-reminder"]};const Q=(0,c.Z)(L,[["render",q]]);var X=Q,tt={name:"Home",components:{AddTask:M,Tasks:X},props:{showAddTask:Boolean},data(){return{tasks:[]}},methods:{async deleteTask(t){if(confirm("Are you sure?")){const e=await fetch(`api/tasks/${t}`,{method:"DELETE"});e.status=this.tasks=this.tasks.filter((e=>e.id!==t))}},async toggleReminder(t){const e=await this.fetchTask(t),n={...e,reminder:!e.reminder},a=await fetch(`api/tasks/${t}`,{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(n)}),o=await a.json();this.tasks=this.tasks.map((e=>e.id===t?{...e,reminder:o.reminder}:e))},async addTask(t){const e=await fetch("api/tasks",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),n=await e.json();this.tasks=[...this.tasks,n]},async fetchTasks(){const t=await fetch("api/tasks"),e=await t.json();return e},async fetchTask(t){const e=await fetch(`api/tasks/${t}`),n=await e.json();return n}},async created(){this.tasks=await this.fetchTasks()}};const et=(0,c.Z)(tt,[["render",Z]]);var nt=et;const at=[{path:"/",name:"Home",component:nt},{path:"/about",name:"About",component:$}],ot=(0,D.p7)({history:(0,D.PO)("/"),routes:at});var st=ot;(0,a.ri)(A).use(st).mount("#app")}},e={};function n(a){var o=e[a];if(void 0!==o)return o.exports;var s=e[a]={exports:{}};return t[a](s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,a,o,s){if(!a){var r=1/0;for(u=0;u<t.length;u++){a=t[u][0],o=t[u][1],s=t[u][2];for(var i=!0,d=0;d<a.length;d++)(!1&s||r>=s)&&Object.keys(n.O).every((function(t){return n.O[t](a[d])}))?a.splice(d--,1):(i=!1,s<r&&(r=s));if(i){t.splice(u--,1);var l=o();void 0!==l&&(e=l)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[a,o,s]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var o,s,r=a[0],i=a[1],d=a[2],l=0;if(r.some((function(e){return 0!==t[e]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(d)var u=d(n)}for(e&&e(a);l<r.length;l++)s=r[l],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(u)},a=self["webpackChunkvue_crash_2021"]=self["webpackChunkvue_crash_2021"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(9877)}));a=n.O(a)})();
//# sourceMappingURL=app.46f65411.js.map