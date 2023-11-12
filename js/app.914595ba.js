(function(){"use strict";var e={1670:function(e,t,a){var o=a(9242),s=a(3396);function n(e,t,a,o,n,l){const r=(0,s.up)("router-view"),i=(0,s.up)("MainNav");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(r,{class:"p-2 mainContent"}),(0,s.Wm)(i)],64)}const l={class:"mainNav row border-top"},r=(0,s._)("div",{class:""},"DELE",-1);function i(e,t,a,o,n,i){const d=(0,s.up)("router-link"),u=(0,s.up)("b-col");return(0,s.wg)(),(0,s.iD)("nav",l,[(0,s.Wm)(u,{class:"border-right"},{default:(0,s.w5)((()=>[(0,s.Wm)(d,{to:"/",class:"text-center link","active-class":"bg-secondary text-white"},{default:(0,s.w5)((()=>[(0,s.Uk)("ToDo")])),_:1})])),_:1}),(0,s.Wm)(u,{class:"border-right"},{default:(0,s.w5)((()=>[(0,s.Wm)(d,{to:"/create",class:"text-center link","active-class":"bg-secondary text-white"},{default:(0,s.w5)((()=>[(0,s.Uk)("Create")])),_:1})])),_:1}),(0,s.Wm)(u,{class:"border-right"},{default:(0,s.w5)((()=>[(0,s.Wm)(d,{to:"/schedule",class:"text-center link","active-class":"bg-secondary text-white"},{default:(0,s.w5)((()=>[(0,s.Uk)("Schedule")])),_:1})])),_:1}),(0,s.Wm)(u,null,{default:(0,s.w5)((()=>[(0,s.Wm)(d,{to:"/report",class:"text-center link","active-class":"bg-secondary text-white"},{default:(0,s.w5)((()=>[(0,s.Uk)("Report")])),_:1})])),_:1}),(0,s.Wm)(u,{class:"text-center link"},{default:(0,s.w5)((()=>[(0,s.Wm)(d,{to:"/test",class:"text-center link","active-class":"bg-secondary text-white"},{default:(0,s.w5)((()=>[(0,s.Uk)("test")])),_:1})])),_:1}),(0,s.Wm)(u,{class:"bg-warning text-center link",onClick:i.deleteStorage},{default:(0,s.w5)((()=>[r])),_:1},8,["onClick"])])}a(560);var d=a(65);const u=(e,t)=>{localStorage.setItem(e,t)},c=e=>{const t=e.getFullYear(),a=("00"+(e.getMonth()+1)).slice(-2),o=("00"+e.getDate()).slice(-2),s=`${t}-${a}-${o}`;return s};var m=(0,d.MT)({state:{tasks:[]},getters:{getTasks(e){return e.tasks}},mutations:{addTask(e,{task:t}){e.tasks.push(t)},changeTask(e,{task:t}){e.tasks=t},saveTask(e){u("tasks",JSON.stringify(e.tasks))},loadTask(e){localStorage.getItem("tasks")&&(e.tasks=JSON.parse(localStorage.getItem("tasks")))}},actions:{addTask(e,{task:t}){e.commit("addTask",{task:t}),e.commit("saveTask")},changeTask(e,{task:t}){e.commit("changeTask",{task:t}),e.commit("saveTask")}},modules:{}}),p={methods:{deleteStorage(){localStorage.clear(),m.commit("loadTask")}}},f=a(89);const h=(0,f.Z)(p,[["render",i]]);var g=h,k={components:{MainNav:g},mounted(){m.commit("loadTask")}};const b=(0,f.Z)(k,[["render",n]]);var w=b,v=a(5431);(0,v.z)("service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var _=a(2483),D=a(7139);const y=(0,s._)("div",{class:"btn","data-toggle":"modal","data-target":"#exampleModal"}," modal btn ",-1),C=(0,s._)("div",{class:"card p-2"},[(0,s.Uk)(" スマホを引き出しにしまいましたか？"),(0,s._)("br"),(0,s.Uk)("作業をするのに完璧な環境を整えましょう！ ")],-1),T=(0,s._)("h3",null,"未達成タスク",-1),V={class:"card"},W=(0,s._)("h3",null,"完了済みのタスク",-1),U={class:"finished"},x=(0,s._)("h3",null,"全てのタスクとステップ表示",-1);function B(e,t,a,o,n,l){const r=(0,s.up)("ModalWindow"),i=(0,s.up)("VCalendar"),d=(0,s.up)("BFormCheckbox"),u=(0,s.up)("BListGroupItem"),c=(0,s.up)("BListGroup"),m=(0,s.up)("b-container");return(0,s.wg)(),(0,s.iD)("div",null,[y,(0,s.Wm)(r,{text:"あなたの先延ばし傾向をチェックしてみましょう","show-btn-flg":"0"}),(0,s.Wm)(m,{fluid:"md"},{default:(0,s.w5)((()=>[(0,s.Wm)(i,{attributes:n.dates},null,8,["attributes"]),C,T,(0,s._)("ul",V,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.doingTasks,((e,t)=>((0,s.wg)(),(0,s.iD)("li",{key:t,class:"card m-2 p-2"},[(0,s._)("div",null,[(0,s.Wm)(d,{modelValue:e.finished,"onUpdate:modelValue":t=>e.finished=t,value:"1",class:"pb-2"},{default:(0,s.w5)((()=>[(0,s._)("div",{class:(0,D.C_)([{finished:1==e.finished},"pb-2"])},(0,D.zw)(e.name),3)])),_:2},1032,["modelValue","onUpdate:modelValue"]),(0,s.Wm)(c,null,{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.steps,((t,a)=>((0,s.wg)(),(0,s.j4)(u,{key:a,class:"p-2"},{default:(0,s.w5)((()=>[(0,s.Wm)(d,{modelValue:t.finished,"onUpdate:modelValue":e=>t.finished=e,value:"1",class:"b-block"},{default:(0,s.w5)((()=>[(0,s._)("span",{class:(0,D.C_)({finished:1==t.finished||1==e.finished})},(0,D.zw)(t.step),3)])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:2},1024)))),128))])),_:2},1024)])])))),128))]),W,(0,s._)("ul",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.finishTasks,((e,t)=>((0,s.wg)(),(0,s.iD)("li",{key:t,class:"card"},[(0,s.Wm)(d,{modelValue:e.finished,"onUpdate:modelValue":t=>e.finished=t,value:"1"},{default:(0,s.w5)((()=>[(0,s._)("span",U,(0,D.zw)(e.name),1)])),_:2},1032,["modelValue","onUpdate:modelValue"])])))),128))]),x,(0,s._)("ul",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.tasks,((e,t)=>((0,s.wg)(),(0,s.iD)("li",{key:t,class:"card p-2"},[(0,s.Wm)(d,{modelValue:e.finished,"onUpdate:modelValue":t=>e.finished=t,value:"1"},{default:(0,s.w5)((()=>[(0,s._)("span",{class:(0,D.C_)(["pb-2",{finished:1==e.finished}])},(0,D.zw)(e.name),3)])),_:2},1032,["modelValue","onUpdate:modelValue"]),(0,s.Wm)(c,null,{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.steps,((t,a)=>((0,s.wg)(),(0,s.j4)(u,{key:a,class:"p-2"},{default:(0,s.w5)((()=>[(0,s.Wm)(d,{modelValue:t.finished,"onUpdate:modelValue":e=>t.finished=e,value:"1",class:"b-block"},{default:(0,s.w5)((()=>[(0,s._)("span",{class:(0,D.C_)({finished:1==t.finished||1==e.finished})},(0,D.zw)(t.step),3)])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:2},1024)))),128))])),_:2},1024)])))),128))])])),_:1})])}const S={class:"modal fade",id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},H={class:"modal-dialog",id:"modal-window",role:"document"},F={class:"modal-content rounded-bottom"},j={class:"modal-body"},O=(0,s._)("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[(0,s._)("span",{"aria-hidden":"true"},"×")],-1),L={key:0,class:"modal-footer"},M=(0,s._)("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Close ",-1),N=(0,s._)("button",{type:"button",class:"btn btn-primary"},"Save changes",-1),P=[M,N];function q(e,t,a,o,n,l){return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("div",S,[(0,s._)("div",H,[(0,s._)("div",F,[(0,s._)("div",j,[O,(0,s._)("div",null,(0,D.zw)(a.text),1)]),1==a.showBtnFlg?((0,s.wg)(),(0,s.iD)("div",L,P)):(0,s.kq)("",!0)])])])])}var z={props:["text","showBtnFlg"]};const Z=(0,f.Z)(z,[["render",q]]);var E=Z,I=a(4870),Y={data(){return{tasks:[],steps:[],today:"",todayTasks:[],dates:(0,I.iH)([{bar:!0,dates:[new Date(2023,10,1),new Date(2023,10,10),new Date(2023,10,22)],popover:{label:"Take Noah to basketball practice."},isComplete:!1},{bar:"red",dates:[new Date(2023,10,4),new Date(2023,10,10),new Date(2023,10,15)]},{bar:{style:{backgroundColor:"brown"}},dates:[new Date(2023,10,12),new Date(2023,10,26),new Date(2023,10,15)]}])}},components:{ModalWindow:E},mounted(){this.tasks=m.getters.getTasks,this.steps=m.getters.getSteps,this.today=new Date,this.tasks.forEach((e=>{new Date(e.start_date)<=this.today&&new Date(e.end_date)>=this.today&&this.todayTasks.push(e)}))},computed:{doingTasks(){return this.tasks.filter((e=>!e.finished))},finishTasks(){return this.tasks.filter((e=>1==e.finished))}},watch:{tasks:{handler:function(){m.dispatch("changeTask",{task:this.tasks})},deep:!0}},methods:{finishToDo(e){this.tasks.splice(e,1)}}};const R=(0,f.Z)(Y,[["render",B]]);var K=R;const $=(0,s._)("h2",{class:"m-0"},"タスク作成",-1),A=(0,s._)("label",{for:"task-name"},"タスク名",-1);function G(e,t,a,o,n,l){const r=(0,s.up)("BFormInput"),i=(0,s.up)("b-form-group"),d=(0,s.up)("b-button"),u=(0,s.up)("b-input-group-append"),c=(0,s.up)("b-input-group"),m=(0,s.up)("BFormCheckbox"),p=(0,s.up)("VDatePicker"),f=(0,s.up)("b-col"),h=(0,s.up)("b-row"),g=(0,s.up)("b-form"),k=(0,s.up)("b-container");return(0,s.wg)(),(0,s.j4)(k,{fluid:"md"},{default:(0,s.w5)((()=>[$,(0,s.Wm)(g,null,{default:(0,s.w5)((()=>[(0,s.Wm)(i,{class:"mt-1"},{default:(0,s.w5)((()=>[A,(0,s.Wm)(r,{id:"task-name",modelValue:n.taskName,"onUpdate:modelValue":t[0]||(t[0]=e=>n.taskName=e),placeholder:"タスク名を入力",required:"",autofocus:""},null,8,["modelValue"])])),_:1}),(0,s.Wm)(i,{class:"mt-3",label:"ステップ"},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.steps,((e,t)=>((0,s.wg)(),(0,s.j4)(c,{class:"mb-2",key:t},{default:(0,s.w5)((()=>[(0,s.Wm)(r,{type:"text",modelValue:n.steps[t],"onUpdate:modelValue":e=>n.steps[t]=e},null,8,["modelValue","onUpdate:modelValue"]),n.steps.length>1?((0,s.wg)(),(0,s.j4)(u,{key:0},{default:(0,s.w5)((()=>[(0,s.Wm)(d,{variant:"secondary",onClick:e=>l.removeStep(t)},{default:(0,s.w5)((()=>[(0,s.Uk)("削除")])),_:2},1032,["onClick"])])),_:2},1024)):(0,s.kq)("",!0)])),_:2},1024)))),128)),(0,s.Wm)(d,{variant:"secondary",onClick:l.addStep,class:"mx-auto"},{default:(0,s.w5)((()=>[(0,s.Uk)("ステップを追加＋")])),_:1},8,["onClick"])])),_:1}),(0,s.Wm)(i,{class:"mt-3",label:"作業時間の目安"},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{append:"分"},{default:(0,s.w5)((()=>[(0,s.Wm)(r,{type:"number",modelValue:n.guidelineStepTime,"onUpdate:modelValue":t[1]||(t[1]=e=>n.guidelineStepTime=e)},null,8,["modelValue"])])),_:1})])),_:1}),(0,s.Wm)(i,{class:"mt-3",label:"期限"},{default:(0,s.w5)((()=>[(0,s.Wm)(r,{type:"date",class:"form-control",modelValue:n.deadLineDate,"onUpdate:modelValue":t[2]||(t[2]=e=>n.deadLineDate=e),min:n.today,onInput:t[3]||(t[3]=e=>l.selectDeadlineDate())},null,8,["modelValue","min"]),n.addTimeFlg?((0,s.wg)(),(0,s.j4)(r,{key:0,type:"time",class:"form-control",modelValue:n.deadLineTime,"onUpdate:modelValue":t[4]||(t[4]=e=>n.deadLineTime=e)},null,8,["modelValue"])):(0,s.kq)("",!0),(0,s.Wm)(m,{id:"addTimeCheck",class:"form-check-input",modelValue:n.addTimeFlg,"onUpdate:modelValue":t[5]||(t[5]=e=>n.addTimeFlg=e)},{default:(0,s.w5)((()=>[(0,s.Uk)(" 時間を追加 ")])),_:1},8,["modelValue"])])),_:1}),(0,s.Wm)(i,{class:"mt-3",label:"スケジュール"},{default:(0,s.w5)((()=>[(0,s.Wm)(p,{expanded:"",mode:"date",modelValue:n.range,"onUpdate:modelValue":t[6]||(t[6]=e=>n.range=e),modelModifiers:{range:!0},"min-date":n.today},null,8,["modelValue","min-date"]),(0,s.Wm)(h,null,{default:(0,s.w5)((()=>[(0,s.Wm)(f,null,{default:(0,s.w5)((()=>[(0,s.Wm)(r,{type:"date",class:"form-control",modelValue:n.startDate,"onUpdate:modelValue":t[7]||(t[7]=e=>n.startDate=e)},null,8,["modelValue"])])),_:1}),(0,s.Uk)(" ～ "),(0,s.Wm)(f,null,{default:(0,s.w5)((()=>[(0,s.Wm)(r,{type:"date",class:"form-control",modelValue:n.endDate,"onUpdate:modelValue":t[8]||(t[8]=e=>n.endDate=e)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1}),(0,s.Wm)(d,{block:"",variant:"primary",onClick:l.createTask},{default:(0,s.w5)((()=>[(0,s.Uk)(" タスクを登録 ")])),_:1},8,["onClick"])])),_:1})}var J={data(){return{range:(0,I.iH)({}),today:null,taskName:"レポート",categoryOptions:[{value:null,text:"未分類"},{value:1,text:"課題"},{value:2,text:"生活"},{value:3,text:"その他"}],category:null,steps:["テーマ選択","文献調査","下書き作成","清書","見直し","提出"],addTimeFlg:!1,guidelineStepTime:10,deadLineDate:null,deadLineTime:"12:00:00",startDate:null,endDate:null}},mounted(){this.today=c(new Date),this.deadLineDate=new Date},watch:{range:{handler:function(e){this.startDate=c(e.start),this.endDate=c(e.end)},deep:!0},startDate(e){const t=new Date(e);t!==this.range.start&&(this.range.start=t,console.log(this.range.start))}},methods:{addStep(){this.steps.push("")},removeStep(e){this.steps.splice(e,1)},selectDeadlineDate(){},createTask(){const e={name:this.taskName,category:this.category,guideline_step_time:this.guidelineStepTime,deadline_date:this.deadLineDate,deadline_time:this.deadLineTime,start_date:this.startDate,end_date:this.endDate,finished:0,steps:[]},t=[];this.steps.forEach((e=>{t.push({step:e,finished:0})})),console.log(t);let a=0;a=m.getters.getTasks.length<1?1:m.getters.getTasks.slice(-1)[0].id+1,e.id=a,e.steps=t,!1===this.addTimeFlg&&(e.deadline_time=null),m.dispatch("addTask",{task:e}),He.push("/list")}}};const Q=(0,f.Z)(J,[["render",G]]);var X=Q;const ee={id:"timer"},te={class:"timer"},ae={class:"time"},oe=(0,s._)("br",null,null,-1),se=(0,s._)("br",null,null,-1);var ne={__name:"ScheduleView",setup(e){const t=(0,I.iH)([{description:"レポート - テーマ選択",isComplete:!1,dates:new Date(2023,11,1),color:"green"},{description:"レポート - 文献調査",isComplete:!1,dates:new Date(2023,11,2),color:"green"},{description:"レポート - 下書き",isComplete:!1,dates:new Date(2023,11,3),color:"green"},{description:"レポート - 清書",isComplete:!1,dates:new Date(2023,11,4),color:"green"},{description:"レポート - 提出",isComplete:!1,dates:new Date(2023,11,5),color:"green"},{description:"bbb",isComplete:!1,dates:{repeat:{weekdays:3}},color:"red"}]),a=(0,s.Fl)((()=>[...t.value.map((e=>({dates:e.dates,bar:{color:e.color,...e.isComplete&&{class:"opacity-75"}},popover:{label:e.description}})))]));return(e,t)=>{const o=(0,s.up)("VCalendar");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(o,{attributes:a.value},null,8,["attributes"]),(0,s._)("div",ee,[(0,s._)("div",te,[(0,s._)("div",ae,(0,D.zw)(e.formatTime),1),e.timerOn?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("button",{key:0,onClick:t[0]||(t[0]=(...t)=>e.start&&e.start(...t))},"Start")),e.timerOn?((0,s.wg)(),(0,s.iD)("button",{key:1,onClick:t[1]||(t[1]=(...t)=>e.stop&&e.stop(...t))},"Stop")):(0,s.kq)("",!0)])]),oe,se])}}};const le=ne;var re=le;const ie={class:"card p-2",style:{width:"100%","max-height":"600px"}},de=(0,s._)("h3",null,"タスク達成率",-1),ue={class:"card p-2"},ce=(0,s._)("h3",null,"先延ばし傾向",-1);function me(e,t,a,o,n,l){const r=(0,s.up)("ChartPie"),i=(0,s.up)("ChartRadar");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",ie,[de,(0,s.Wm)(r,{labels:["達成","未達成"],datas:l.getTaskRate},null,8,["datas"])]),(0,s._)("div",ue,[ce,(0,s.Wm)(i,{labels:["期待","価値","時間"],data1:l.getbeforeProcrastinationTendency,data2:l.getafterProcrastinationTendency},null,8,["data1","data2"])])],64)}function pe(e,t,a,o,n,l){const r=(0,s.up)("Pie");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(r,{data:n.data,options:n.options},null,8,["data","options"]),(0,s.Uk)(" "+(0,D.zw)(a.labels),1)])}var fe=a(9646),he=a(5866);fe.kL.register(fe.qi,fe.u,fe.De);var ge={props:["labels","datas"],components:{Pie:he.by},data(){return{data:{labels:this.labels,datasets:[{backgroundColor:["#41B883","#E46651","#00D8FF","#DD1B16","#ccc"],data:this.datas}]},options:{responsive:!0}}}};const ke=(0,f.Z)(ge,[["render",pe]]);var be=ke;function we(e,t,a,o,n,l){const r=(0,s.up)("Radar");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(r,{data:n.data,options:n.options},null,8,["data","options"])])}fe.kL.register(fe.l7,fe.od,fe.jn,fe.Gu,fe.u,fe.De);var ve={props:["labels","data1","data2"],components:{Radar:he.Fk},data(){return{data:{labels:this.labels,datasets:[{label:"過去",backgroundColor:"rgba(179,181,198,0.2)",borderColor:"rgba(179,181,198,1)",pointBackgroundColor:"rgba(179,181,198,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(179,181,198,1)",data:this.data1},{label:"現在",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",pointBackgroundColor:"rgba(255,99,132,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(255,99,132,1)",data:this.data2}]},options:{responsive:!0}}}};const _e=(0,f.Z)(ve,[["render",we]]);var De=_e,ye={name:"App",components:{ChartPie:be,ChartRadar:De},data(){return{radar:{data:{labels:["a","b","c","d","e","f","g"],datasets:[{label:"aaa",backgroundColor:"rgba(179,181,198,0.2)",borderColor:"rgba(179,181,198,1)",pointBackgroundColor:"rgba(179,181,198,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(179,181,198,1)",data:[65,59,90,81,56,55,40]},{label:"bbb",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",pointBackgroundColor:"rgba(255,99,132,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(255,99,132,1)",data:[28,48,40,19,96,27,100]}]},options:{responsive:!1,maintainAspectRatio:!1}}}},computed:{getTaskRate(){let e=0,t=0;const a=m.getters.getTasks;return a.forEach((a=>{1==a.finished?e+=a.steps.length:a.steps.forEach((a=>{1==a.finished?e++:t++}))})),[e,t]},getbeforeProcrastinationTendency(){return[10,20,25]},getafterProcrastinationTendency(){return[20,20,30]}}};const Ce=(0,f.Z)(ye,[["render",me]]);var Te=Ce;function Ve(e,t,a,o,n,l){const r=(0,s.up)("BButton");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("h1",null,(0,D.zw)(l.getTimeStr()),1),(0,s._)("div",null,["start"!==n.status?((0,s.wg)(),(0,s.j4)(r,{key:0,onClick:t[0]||(t[0]=e=>l.start())},{default:(0,s.w5)((()=>[(0,s.Uk)(" スタート ")])),_:1})):((0,s.wg)(),(0,s.j4)(r,{key:1,onClick:t[1]||(t[1]=e=>l.stop())},{default:(0,s.w5)((()=>[(0,s.Uk)("ストップ")])),_:1}))]),(0,s._)("div",null,[(0,s.Wm)(r,{onClick:t[2]||(t[2]=e=>l.reset())},{default:(0,s.w5)((()=>[(0,s.Uk)("リセット")])),_:1})])])}var We={data(){return{status:"clear",time:0,startTime:null,stopTime:0}},methods:{start(){this.status="start",null===this.startTime&&(this.startTime=Date.now());const e=()=>{this.time=Date.now()-this.startTime+this.stopTime};this.timer=setInterval(e,10)},stop(){this.timer&&clearInterval(this.timer),this.status="stop",this.startTime=null,this.stopTime=this.time},reset(){this.stop(),this.status="clear",this.time=0,this.startTime=null,this.stopTime=0},getTimeStr(){let e=Math.floor(this.time/1e3%60),t=Math.floor(this.time/6e4%60),a=Math.floor(this.time/36e5);return e=("0"+e).slice(-2),t=("0"+t).slice(-2),a=a<100?("0"+a).slice(-2):a,`${a}:${t}:${e}`}}};const Ue=(0,f.Z)(We,[["render",Ve]]);var xe=Ue;const Be=[{path:"/",name:"list",component:K},{path:"/create",name:"create",component:X},{path:"/schedule",name:"schedule",component:re},{path:"/report",name:"report",component:Te},{path:"/test",name:"test",component:xe},{path:"/about",name:"about"}],Se=(0,_.p7)({history:(0,_.r5)(),routes:Be});var He=Se,Fe=a(1095),je=(a(7024),a(6744),a(6495));(0,o.ri)(w).use(m).use(He).use(Fe.qq).use(Fe.BootstrapVueIcons).use(je.ZP,{}).mount("#app")}},t={};function a(o){var s=t[o];if(void 0!==s)return s.exports;var n=t[o]={exports:{}};return e[o].call(n.exports,n,n.exports,a),n.exports}a.m=e,function(){var e=[];a.O=function(t,o,s,n){if(!o){var l=1/0;for(u=0;u<e.length;u++){o=e[u][0],s=e[u][1],n=e[u][2];for(var r=!0,i=0;i<o.length;i++)(!1&n||l>=n)&&Object.keys(a.O).every((function(e){return a.O[e](o[i])}))?o.splice(i--,1):(r=!1,n<l&&(l=n));if(r){e.splice(u--,1);var d=s();void 0!==d&&(t=d)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[o,s,n]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,o){var s,n,l=o[0],r=o[1],i=o[2],d=0;if(l.some((function(t){return 0!==e[t]}))){for(s in r)a.o(r,s)&&(a.m[s]=r[s]);if(i)var u=i(a)}for(t&&t(o);d<l.length;d++)n=l[d],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(u)},o=self["webpackChunk_20142nhu"]=self["webpackChunk_20142nhu"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(1670)}));o=a.O(o)})();
//# sourceMappingURL=app.914595ba.js.map