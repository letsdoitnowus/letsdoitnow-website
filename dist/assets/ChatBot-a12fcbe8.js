import{d as V,r as i,b as R,c as u,a as s,t as o,i as m,w as B,B as A,F as k,m as O,q as $,v as j,A as D,h as F,P as w,o as l,p as H,k as K,_ as P}from"./index-acbef2cf.js";import{_ as G,a as Q,L as X}from"./LoginBot-adb9335d.js";import{a as C,s as I}from"./Toast-162c3c0a.js";import{s as Y}from"./SpinerComponent-9726c1ba.js";import{l as z}from"./SwitchLang-3e3dc634.js";const L=h=>(H("data-v-152dc0a6"),h=h(),K(),h),J={class:"max-w-550 px-1 mx-auto mb-1"},W={class:"d-flex si-center py-1"},Z=L(()=>s("img",{src:Q,alt:""},null,-1)),ee={class:"d-flex jc-fe flex-d-col"},te={key:0,class:"m-0 text-left"},se={key:1},ae=["value"],oe={class:"d-ib va-t w-50 p-2 mt-1 bot"},le={class:"answerbot pr-1"},ne={key:0},re={class:"botanswer",style:{"white-space":"pre-line"}},ie={class:"send"},ue={class:"botanswer",style:{"white-space":"pre-line"}},ce=L(()=>s("div",{id:"endChat",class:"mt-2 w-100"},null,-1)),de={key:0,class:"mt-8"},ve={class:"d-flex ai-center inputUser mt-1",style:{position:"relative"}},pe={class:"text-center mt-2"},me={href:"https://forms.gle/Nj27Lg1eXGhv6eeT6",target:"_blank"},T="https://api-chatbot.letsdoitnow.us/api",_e=V({__name:"ChatBot",setup(h){const g=i({}),n=i(""),x=i(""),f=i(""),c=i([{question:"",answer:""}]),b=i([{career:""}]),r=i({}),d=i(!1),v=i(!1),p=i([]),N=async()=>{v.value=!1},M=async()=>{d.value=!0;try{const t=await C.post(`${T}/experts`,{user:x.value},{headers:{token:f.value}});t.status===200?(b.value=t.data,r.value=t.data[0]):v.value=!0}catch{I("Error al cargar","error",3e3,w.BOTTOM_CENTER)}d.value=!1},E=async()=>{var t;d.value=!0;try{const e=await C.post(`${T}/chats/expert`,{userId:x.value,expertId:(t=r.value)==null?void 0:t._id},{headers:{token:f.value}});c.value=e.data.reverse(),S()}catch(e){I(`Error al cargar: ${e}`,"error",3e3,w.BOTTOM_CENTER)}d.value=!1},_=async()=>{var t;d.value=!0,n.value!=""&&(c.value.push({question:n.value,answer:""}),y(),await C.post(`${T}/chats`,{userId:x.value,expertId:(t=r.value)==null?void 0:t._id,userQuestion:n.value},{headers:{token:f.value}}).then(e=>{E(),n.value="",y()}).catch(e=>{e.response.data.message=="You have exceeded the number of free queries."?(I("Has excedido el número de consultas gratuitas","error",3e3,w.BOTTOM_CENTER),localStorage.setItem("limit","true"),v.value=!0):e.response.data.message=="User, you have exceeded the number of free queries."?(localStorage.setItem("registerLimit","true"),v.value=!0):I(`Error al enviar: ${e}`,"error",3e3,w.BOTTOM_CENTER)})),d.value=!1,y()},q=async()=>{const t=localStorage.getItem("session");if(t){const e=t.split("-");f.value=e.slice(0,e.length-1).toString(),x.value=e[e.length-1],await M(),await E()}else v.value=!0},y=()=>{const t=document.getElementById("endChat");t&&t.scrollIntoView({behavior:"smooth",block:"end"})},U=t=>{const e=t.indexOf("</end>");return e!==-1?t.substring(0,e):t},S=()=>{const t=/(\¿.+?\?)/g;if(c.value.length>0){const e=c.value[c.value.length-1].answer;p.value=e.split("</end>")[e.split("</end>").length-1].match(t)}};return R(async()=>{g.value=z(localStorage.getItem("Lang")==="Es").doitbot,localStorage.getItem("chat")&&(n.value=localStorage.getItem("chat")||"",localStorage.removeItem("chat")),localStorage.getItem("session")?await q():v.value=!0,y(),S()}),(t,e)=>(l(),u(k,null,[s("div",null,[s("div",J,[s("div",W,[Z,s("div",ee,[r.value.name?(l(),u("h3",te,o(r.value.name),1)):m("",!0),r.value.career?(l(),u("p",se,o(r.value.career),1)):m("",!0)])]),s("p",null,o(r.value.description),1)]),B(s("select",{name:"","onUpdate:modelValue":e[0]||(e[0]=a=>r.value=a),onChange:e[1]||(e[1]=a=>E())},[(l(!0),u(k,null,O(b.value,a=>(l(),u("option",{value:a},o(a.career),9,ae))),256))],544),[[A,r.value]])]),s("div",oe,[s("div",le,[c.value.length==0?(l(),u("div",ne,[s("p",re,o(g.value.text001),1)])):m("",!0),(l(!0),u(k,null,O(c.value,a=>(l(),u("div",null,[s("p",ie,o(a.question),1),s("p",ue,o(U(a.answer)),1)]))),256)),ce,d.value?(l(),$(Y,{key:1})):m("",!0)]),c.value!=0?(l(),u("div",de,[s("p",{class:"send cursor-pointer text-xs",onClick:e[2]||(e[2]=a=>(n.value=p.value[0],_()))},o(p.value[0]),1),s("p",{class:"send cursor-pointer text-xs",onClick:e[3]||(e[3]=a=>(n.value=p.value[1],_()))},o(p.value[1]),1),s("p",{class:"send cursor-pointer text-xs",onClick:e[4]||(e[4]=a=>(n.value=p.value[2],_()))},o(p.value[2]),1)])):m("",!0),s("div",ve,[B(s("input",{class:"w-100",style:{"padding-right":"3rem"},type:"text",placeholder:"Escribe algo","onUpdate:modelValue":e[5]||(e[5]=a=>n.value=a),onKeypress:e[6]||(e[6]=D(a=>_(),["enter"]))},null,544),[[j,n.value]]),s("img",{style:{right:"10px",position:"absolute"},class:"cursor-p",src:G,alt:"",onClick:e[7]||(e[7]=a=>_())})])]),s("p",pe,[F(o(g.value.text002)+" ",1),s("a",me,o(g.value.text003),1)]),v.value?(l(),$(X,{key:0,closeModal:N})):m("",!0)],64))}});const we=P(_e,[["__scopeId","data-v-152dc0a6"]]);export{we as default};