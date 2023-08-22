import{_ as q,o,c as l,p as U,k as V,a as s,d as H,r,b as j,i as w,s as P,w as x,v as I,h as L,P as i,t as E,x as D,F as M,y as F,z as A,m as K}from"./index-c9d152b1.js";import{_ as Y,a as G}from"./send-89db135c.js";import{a as $,s as c}from"./Toast-b4526541.js";const Q={},X=u=>(U("data-v-537dd02a"),u=u(),V(),u),J={class:"w-100 vh-100 d-flex ai-center jc-center spinnerCont"},W=X(()=>s("div",{class:"spinner"},[s("div"),s("div"),s("div")],-1)),Z=[W];function ee(u,m){return o(),l("div",J,Z)}const te=q(Q,[["render",ee],["__scopeId","data-v-537dd02a"]]),z=u=>(U("data-v-c70a0f32"),u=u(),V(),u),se={class:"modal"},ae={class:"modal-content"},oe={key:0},le={key:0,class:"modal-title"},re={key:1,class:"modal-title"},ne={key:2,class:"text-center mb-1"},ie={key:0,class:"form-group"},ce={class:"form-group"},ue={class:"form-group"},de={key:1,class:"form-group"},ve={key:4,class:"w-100 text-center mt-1"},pe={key:5,class:"w-100 text-center mt-1"},me={key:1},_e=z(()=>s("h2",null,"Limite alcanzado",-1)),ge=z(()=>s("p",{class:"text-center mb-1"},"Has alcanzado el límite de consultas diarias, ¿quieres seguir usando el chat, considera contratar uno de nuestros planes.",-1)),he=[_e,ge],N="https://api-chatbot.letsdoitnow.us/api",fe=H({__name:"LoginBot",props:{closeModal:Function},setup(u){const m=u,p=r(""),v=r(""),_=r(""),f=r(""),n=r(!1),h=r(!1),g=r(""),O=r(""),k=r(!1),y=r(!1),C=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,b=()=>{p.value="",v.value="",_.value=""},T=async()=>{try{const t=await $.get(`${N}/user/temp`);t.status===200?(localStorage.setItem("session",t.data.token+"-"+t.data.user),m.closeModal(),window.location.reload()):c("Error al cargar","error",3e3,i.BOTTOM_CENTER)}catch{c("Error al cargar","error",3e3,i.BOTTOM_CENTER)}},B=async()=>{if(y.value=!0,!C.test(p.value))c("El email no es válido","error",3e3,i.BOTTOM_CENTER);else if(!f.value||!v.value||!_.value)c("Todos los campos son obligatorios","error",3e3,i.BOTTOM_CENTER);else if(v.value!==_.value)c("Las contraseñas no coinciden","error",3e3,i.BOTTOM_CENTER);else try{let t;g.value?t={userId:g.value,name:f.value,email:p.value,password:v.value}:t={name:f.value,email:p.value,password:v.value};let e=await $.post(`${N}/user`,t,{});localStorage.setItem("session",e.data.token+"-"+e.data.user),c("Registrado correctamente","success",2e3,i.BOTTOM_CENTER),m.closeModal(),setTimeout(()=>{window.location.reload()},1200),b()}catch(t){t.response.data.message=="A user with this email already exists."?c("Correo registrado","error",3e3,i.BOTTOM_CENTER):c(`Error al registrar ${t}`,"error",3e3,i.BOTTOM_CENTER)}y.value=!1},a=()=>{y.value=!0,C.test(p.value)?v.value?$.post(`${N}/login`,{email:p.value,password:v.value},{}).then(t=>{localStorage.setItem("session",t.data.token+"-"+t.data.user),c("Iniciado correctamente","success",2e3,i.BOTTOM_CENTER),m.closeModal(),setTimeout(()=>{window.location.reload()},1200),b()}).catch(t=>{t.response.data.message=="Invalid email or password."?c("Contraseña o correo incorrectos","error",3e3,i.BOTTOM_CENTER):c(`Error al iniciar ${t}`,"error",3e3,i.BOTTOM_CENTER)}):c("Todos los campos son obligatorios","error",3e3,i.BOTTOM_CENTER):c("El email no es válido","error",3e3,i.BOTTOM_CENTER),y.value=!1};return j(async()=>{if(localStorage.getItem("limit")&&(h.value=!0,localStorage.removeItem("limit")),localStorage.getItem("registerLimit")&&(k.value=!0,localStorage.removeItem("registerLimit")),localStorage.getItem("session")){const e=localStorage.getItem("session").split("-");O.value=e.slice(0,e.length-1),g.value=e[e.length-1]}else O.value="",g.value=""}),(t,e)=>(o(),l("div",se,[s("div",ae,[s("span",{class:"close",onClick:e[0]||(e[0]=d=>T())},"×"),k.value?(o(),l("div",me,he)):(o(),l("div",oe,[n.value?(o(),l("h2",le,"Iniciar sesión")):(o(),l("h2",re,"Registro")),h.value?(o(),l("p",ne,"Has alcanzado el límite de consultas gratuitas, regístrate para continuar usando el chat y no perder el historial.")):w("",!0),s("form",{onSubmit:e[10]||(e[10]=P((...d)=>t.submitForm&&t.submitForm(...d),["prevent"]))},[n.value?w("",!0):(o(),l("div",ie,[x(s("input",{"onUpdate:modelValue":e[1]||(e[1]=d=>f.value=d),type:"text",placeholder:"Nombre",required:""},null,512),[[I,f.value]])])),s("div",ce,[x(s("input",{"onUpdate:modelValue":e[2]||(e[2]=d=>p.value=d),type:"email",placeholder:"Email",required:""},null,512),[[I,p.value]])]),s("div",ue,[x(s("input",{"onUpdate:modelValue":e[3]||(e[3]=d=>v.value=d),type:"password",placeholder:"Password",required:""},null,512),[[I,v.value]])]),n.value?w("",!0):(o(),l("div",de,[x(s("input",{"onUpdate:modelValue":e[4]||(e[4]=d=>_.value=d),type:"password",placeholder:"Confirmar password",required:""},null,512),[[I,_.value]])])),n.value?(o(),l("button",{key:2,class:"submit",onClick:e[5]||(e[5]=d=>a())},"Iniciar sesión")):(o(),l("button",{key:3,class:"submit",onClick:e[6]||(e[6]=d=>B())},"Registrarse")),n.value?(o(),l("p",pe,[L("¿No tienes cuenta? regístrate "),s("span",{class:"cursor-p text-primary",onClick:e[8]||(e[8]=d=>n.value=!1)},"aquí")])):(o(),l("p",ve,[L("¿Ya tienes cuenta? inicia sesión "),s("span",{class:"cursor-p text-primary",onClick:e[7]||(e[7]=d=>n.value=!0)},"aquí")])),n.value?w("",!0):(o(),l("p",{key:6,class:"w-100 text-center mt-1 text-primary cursor-p",onClick:e[9]||(e[9]=d=>T())},"Continuar sin cuenta"))],32)]))])]))}});const ye=q(fe,[["__scopeId","data-v-c70a0f32"]]),S=u=>(U("data-v-c42a70d7"),u=u(),V(),u),Te={class:"max-w-550 px-1 mx-auto mb-1"},we={class:"d-flex si-center py-1"},Ee=S(()=>s("img",{src:G,alt:""},null,-1)),xe={class:"d-flex jc-fe flex-d-col"},$e={class:"m-0 text-left"},Ce=["value"],Ie={class:"d-ib va-t w-50 p-2 mt-1 bot"},Oe={class:"answerbot pr-1"},ke={key:0},be=S(()=>s("p",{class:"botanswer",style:{"white-space":"pre-line"}},"Hola, ¿Como puedo ayudarte hoy?",-1)),Se=[be],Be={class:"send"},Me={class:"botanswer",style:{"white-space":"pre-line"}},Ne=S(()=>s("div",{id:"endChat",class:"mt-2 w-100"},null,-1)),Re={class:"d-flex ai-center inputUser mt-1",style:{position:"relative"}},Le=S(()=>s("p",{class:"text-center mt-2"},[L("Dejanos saber que opinas "),s("a",{href:"https://forms.gle/Nj27Lg1eXGhv6eeT6",target:"_blank"},"Aquí")],-1)),R="https://api-chatbot.letsdoitnow.us/api",qe=H({__name:"ChatBot",setup(u){const m=r(""),p=r(""),v=r(""),_=r([]),f=r([]),n=r(""),h=r(!1),g=r(!1),O=async()=>{g.value=!1},k=async()=>{h.value=!0;try{const a=await $.post(`${R}/experts`,{user:p.value},{headers:{token:v.value}});a.status===200?(f.value=a.data,n.value=a.data[a.data.length-1]):g.value=!0}catch{c("Error al cargar","error",3e3,i.BOTTOM_CENTER)}h.value=!1},y=async()=>{h.value=!0;try{const a=await $.post(`${R}/chats/expert`,{userId:p.value,expertId:n.value._id},{headers:{token:v.value}});_.value=a.data.slice().reverse()}catch(a){c(`Error al cargar: ${a}`,"error",3e3,i.BOTTOM_CENTER)}h.value=!1},C=async()=>{h.value=!0,m.value!=""&&(_.value.push({question:m.value,answer:""}),T(),await $.post(`${R}/chats`,{userId:p.value,expertId:n.value._id,userQuestion:m.value},{headers:{token:v.value}}).then(a=>{_.value[_.value.length-1].answer=a.data.answer,m.value="",T()}).catch(a=>{a.response.data.message=="You have exceeded the number of free queries."?(c("Has excedido el número de consultas gratuitas","error",3e3,i.BOTTOM_CENTER),localStorage.setItem("limit","true"),g.value=!0):a.response.data.message=="User, you have exceeded the number of free queries."?(localStorage.setItem("registerLimit","true"),g.value=!0):c(`Error al enviar: ${a}`,"error",3e3,i.BOTTOM_CENTER)})),h.value=!1,T()},b=async()=>{const a=localStorage.getItem("session");if(a){const t=a.split("-");v.value=t.slice(0,t.length-1),p.value=t[t.length-1],await k(),await y()}else g.value=!0},T=()=>{const a=document.getElementById("endChat");a&&a.scrollIntoView({behavior:"smooth",block:"end"})},B=a=>{const t=a.indexOf("</end>");return t!==-1?a.substring(0,t):a};return j(async()=>{localStorage.getItem("chat")&&(m.value=localStorage.getItem("chat"),localStorage.removeItem("chat")),localStorage.getItem("session")?await b():g.value=!0,T()}),(a,t)=>(o(),l(M,null,[s("div",null,[s("div",Te,[s("div",we,[Ee,s("div",xe,[s("h3",$e,E(n.value.name),1),s("p",null,E(n.value.career),1)])]),s("p",null,E(n.value.description),1)]),x(s("select",{name:"","onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),onChange:t[1]||(t[1]=e=>y())},[(o(!0),l(M,null,F(f.value,e=>(o(),l("option",{value:e},E(e.career),9,Ce))),256))],544),[[D,n.value]])]),s("div",Ie,[s("div",Oe,[_.value.length==0?(o(),l("div",ke,Se)):w("",!0),(o(!0),l(M,null,F(_.value,e=>(o(),l("div",null,[s("p",Be,E(e.question),1),s("p",Me,E(B(e.answer)),1)]))),256)),Ne,h.value?(o(),A(te,{key:1})):w("",!0)]),s("div",Re,[x(s("input",{class:"w-100",style:{"padding-right":"3rem"},type:"text",placeholder:"Escribe algo","onUpdate:modelValue":t[2]||(t[2]=e=>m.value=e),onKeypress:t[3]||(t[3]=K(e=>C(),["enter"]))},null,544),[[I,m.value]]),s("img",{style:{right:"10px",position:"absolute"},class:"cursor-p",src:Y,alt:"",onClick:t[4]||(t[4]=e=>C())})])]),Le,g.value?(o(),A(ye,{key:0,closeModal:O})):w("",!0)],64))}});const Ae=q(qe,[["__scopeId","data-v-c42a70d7"]]);export{Ae as default};
