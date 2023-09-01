import{d as V,r as n,b as O,c as g,a as t,n as M,t as l,s as E,i as f,F as T,q as U,w as j,v as A,B as W,m as F,y as K,P,o as d,h as q,e as G,g as H,T as J,p as Q,l as X,_ as Y}from"./index-cc65cfc0.js";import{_ as Z,a as tt,L as st}from"./LoginBot-a0fae42f.js";import{_ as et}from"./icon-pc-f4173e8a.js";import{a as at,s as ot}from"./Toast-7bea229d.js";import{l as lt}from"./SwitchLang-3e3dc634.js";import{s as it}from"./SpinerComponent-c72b7753.js";const nt="/assets/menu-2291fc42.svg",D="/assets/Arrow-1-7807954c.svg",ct="/assets/botico-7971115a.svg",rt="/assets/textImg-93a47a84.svg",dt="/assets/edit-33c577ee.svg",c=u=>(Q("data-v-336318bd"),u=u(),X(),u),vt=c(()=>t("h1",{class:"mt-8"},[t("span",{class:"rectangle text-4xl"},"Do it bot")],-1)),ut={class:"boxBot"},_t=c(()=>t("img",{src:nt,alt:""},null,-1)),mt=[_t],pt=["onClick"],gt={class:"d-ib va-t expertName"},ht={class:"uppercase"},ft=c(()=>t("img",{class:"d-ib va-t expertArrow",src:D,alt:""},null,-1)),bt={class:"d-flex si-center py-1"},xt=c(()=>t("img",{src:tt,alt:""},null,-1)),wt={class:"d-flex jc-fe flex-d-col"},yt={class:"m-0 capitalize text-left"},kt={class:"capitalize text-left"},Ct={class:"d-ib va-t w-50 bot"},$t=F('<div class="d-flex ai-center jc-sb" data-v-336318bd><div class="d-flex ai-center jc-sb" data-v-336318bd><img class="backArrow" src="'+D+'" alt="" data-v-336318bd><img class="ml-1" src="'+ct+'" alt="" data-v-336318bd></div><div data-v-336318bd><h2 class="m-0" style="font-size:2rem;" data-v-336318bd>Do it Bot</h2><ul data-v-336318bd><li class="text-left text-primary" style="margin-left:25px;font-weight:200;font-size:1.5rem;" data-v-336318bd>Online</li></ul></div><div data-v-336318bd><img class="max-w-40" src="'+et+'" alt="" data-v-336318bd></div></div>',1),It={class:"mt-2 mb-2"},Bt=c(()=>t("img",{class:"max-w-40",src:rt,alt:""},null,-1)),St={class:"w-100 text-center"},Et=c(()=>t("p",null,"Ventas",-1)),Tt=[Et],Dt=c(()=>t("p",null,"Operaciones",-1)),zt=[Dt],Nt=c(()=>t("p",null,"Tecnología",-1)),Rt=[Nt],Lt={class:"w-100 mt-1"},Vt={class:"text-primary w-100 text-center"},Ot={class:"mt-2"},Mt=c(()=>t("img",{src:dt,alt:""},null,-1)),Ut={class:"w-100 text-center"},jt={class:"d-flex ai-center inputUser mt-1",style:{position:"relative"}},At="https://api-chatbot.letsdoitnow.us/api",Wt=V({__name:"DoitBot",setup(u){const i=n({}),_=n(0),v=n(!0),m=n(""),b=n(""),x=n(""),w=n([{career:""}]),h=n(!1),p=n(!1),z=async()=>{p.value=!1},r=(a,s)=>{a==0&&m.value!=""?localStorage.setItem("chat",m.value):(a==1||a==2||a==3)&&localStorage.setItem("chat",s),K.push("/doitbot/chat")},N=a=>{_.value===a?_.value=0:_.value=a},R=async()=>{h.value=!0;try{const a=await at.post(`${At}/experts`,{user:b.value},{headers:{token:x.value}});a.status===200?w.value=a.data:p.value=!0}catch{ot("Error al cargar","error",3e3,P.BOTTOM_CENTER)}h.value=!1};return O(async()=>{i.value=lt(localStorage.getItem("Lang")==="Es").doitbot,window.addEventListener("resize",()=>{window.innerWidth<768?v.value=!1:v.value=!0});const a=localStorage.getItem("session");if(a){const s=a.split("-");x.value=s.slice(0,s.length-1).toString(),b.value=s[s.length-1],await R()}else p.value=!0}),(a,s)=>{var y,k,C,$,I,B,S;return d(),g(T,null,[vt,t("div",ut,[t("div",{class:"menu cursor-p",onClick:s[0]||(s[0]=e=>v.value=!v.value)},mt),t("div",{class:M(["d-ib va-t w-50 expert z-950",v.value?"open-menu":"closed-menu"])},[t("h2",null,l((y=i.value)==null?void 0:y.title),1),t("p",null,l((k=i.value)==null?void 0:k.text001),1),h.value?(d(),E(it,{key:0})):f("",!0),(d(!0),g(T,null,U(w.value,(e,o)=>(d(),g("div",{key:o},[t("div",{onClick:L=>N(o+1),class:"w-100 divExpert cursor-p"},[t("p",gt,[q(l(o+1)+" / ",1),t("span",ht,l(e==null?void 0:e.career),1)]),ft],8,pt),G(J,{name:"fade",mode:"out-in"},{default:H(()=>[_.value===o+1?(d(),g("div",{key:"div1",class:"fade-div animar cursor-p",onClick:s[1]||(s[1]=L=>a.$router.push("/doitbot/chat"))},[t("div",bt,[xt,t("div",wt,[t("h3",yt,l(e==null?void 0:e.name),1),t("p",kt,l(e==null?void 0:e.career),1)])]),t("p",null,l(e==null?void 0:e.description),1)])):f("",!0)]),_:2},1024)]))),128))],2),t("div",Ct,[$t,t("div",It,[Bt,t("p",St,[t("b",null,l((C=i.value)==null?void 0:C.text002),1)]),t("div",{class:"btnRecom cursor-p",onClick:s[2]||(s[2]=e=>r(0,""))},Tt),t("div",{class:"btnRecom cursor-p",onClick:s[3]||(s[3]=e=>r(0,""))},zt),t("div",{class:"btnRecom cursor-p",onClick:s[4]||(s[4]=e=>r(0,""))},Rt),t("div",Lt,[t("p",Vt,l(i.value.text003),1)])]),t("div",Ot,[Mt,t("p",Ut,[t("b",null,l(($=i.value)==null?void 0:$.text004),1)]),t("div",{class:"btnRecom cursor-p",onClick:s[5]||(s[5]=e=>{var o;return r(1,(o=i.value)==null?void 0:o.text005)})},[t("p",null,l((I=i.value)==null?void 0:I.text005),1)]),t("div",{class:"btnRecom cursor-p",onClick:s[6]||(s[6]=e=>{var o;return r(2,(o=i.value)==null?void 0:o.text006)})},[t("p",null,l((B=i.value)==null?void 0:B.text006),1)]),t("div",{class:"btnRecom cursor-p",onClick:s[7]||(s[7]=e=>{var o;return r(3,(o=i.value)==null?void 0:o.text007)})},[t("p",null,l((S=i.value)==null?void 0:S.text007),1)])]),t("div",jt,[j(t("input",{class:"w-100",type:"text",style:{"padding-right":"3rem"},placeholder:"Escribe algo para empezar o selecciona","onUpdate:modelValue":s[8]||(s[8]=e=>m.value=e),onKeypress:s[9]||(s[9]=W(e=>r(0,""),["enter"]))},null,544),[[A,m.value]]),t("img",{style:{right:"10px",position:"absolute"},class:"cursor-p",src:Z,alt:"",onClick:s[10]||(s[10]=e=>r(0,""))})])]),p.value?(d(),E(st,{key:0,closeModal:z})):f("",!0)])],64)}}});const Jt=Y(Wt,[["__scopeId","data-v-336318bd"]]);export{Jt as default};