import{d as M,r as n,o as U,c as u,b as t,n as W,t as i,k as N,l as v,F as R,j as F,w as K,v as P,x as q,i as G,p as H,a as c,h as J,f as Q,y as X,T as Y,z as Z,A as tt,_ as st}from"./index-e463918c.js";import{_ as et,a as at,L as ot}from"./LoginBot-4e8af50e.js";import{_ as lt}from"./icon-pc-f4173e8a.js";import{a as it,s as nt,P as ct}from"./Toast-270bd26d.js";import{l as rt}from"./SwitchLang-6e8c54d1.js";import{s as dt}from"./SpinerComponent-b9b9e5a2.js";const ut="/assets/menu-2291fc42.svg",L="/assets/Arrow-1-7807954c.svg",vt="/assets/botico-7971115a.svg",pt="/assets/textImg-93a47a84.svg",_t="/assets/edit-33c577ee.svg",r=_=>(Z("data-v-82be8c59"),_=_(),tt(),_),mt=r(()=>t("h1",{class:"mt-8"},[t("span",{class:"rectangle text-4xl"},"Do it bot")],-1)),gt={class:"boxBot"},ft=r(()=>t("img",{src:ut,alt:""},null,-1)),ht=[ft],bt=["onClick"],xt={class:"d-ib va-t expertName"},wt={class:"uppercase"},yt=r(()=>t("img",{class:"d-ib va-t expertArrow",src:L,alt:""},null,-1)),kt={class:"d-flex si-center py-1"},Ct=r(()=>t("img",{src:at,alt:""},null,-1)),$t={class:"d-flex jc-fe flex-d-col"},It={class:"m-0 capitalize text-left"},St={class:"capitalize text-left"},Bt={class:"d-ib va-t w-50 bot"},Et=G('<div class="d-flex ai-center jc-sb" data-v-82be8c59><div class="d-flex ai-center jc-sb" data-v-82be8c59><img class="backArrow" src="'+L+'" alt="" data-v-82be8c59><img class="ml-1" src="'+vt+'" alt="" data-v-82be8c59></div><div data-v-82be8c59><h2 class="m-0" style="font-size:2rem;" data-v-82be8c59>Do it Bot</h2><ul data-v-82be8c59><li class="text-left text-primary" style="margin-left:25px;font-weight:200;font-size:1.5rem;" data-v-82be8c59>Online</li></ul></div><div data-v-82be8c59><img class="max-w-40" src="'+lt+'" alt="" data-v-82be8c59></div></div>',1),Tt={class:"mt-2 mb-2"},zt=r(()=>t("img",{class:"max-w-40",src:pt,alt:""},null,-1)),Dt={class:"w-100 text-center"},Nt=r(()=>t("p",null,"Ventas",-1)),Rt=[Nt],Lt=r(()=>t("p",null,"Operaciones",-1)),Vt=[Lt],Ot=r(()=>t("p",null,"Tecnología",-1)),jt=[Ot],At={class:"w-100 mt-1"},Mt={class:"text-primary w-100 text-center"},Ut={class:"mt-2"},Wt=r(()=>t("img",{src:_t,alt:""},null,-1)),Ft={class:"w-100 text-center"},Kt={class:"d-flex ai-center inputUser mt-1",style:{position:"relative"}},Pt="https://api-chatbot.letsdoitnow.us/api",qt=M({__name:"DoitBot",setup(_){const o=n(),m=n(0),p=n(!0),g=n(""),b=n(""),x=n(""),w=n([{career:"",name:"",description:""}]),h=n(!1),f=n(!1),V=async()=>{f.value=!1},d=(a,s)=>{a==0&&g.value!=""?localStorage.setItem("chat",g.value):(a==1||a==2||a==3)&&localStorage.setItem("chat",s),H.push("/doitbot/chat")},O=a=>{m.value===a?m.value=0:m.value=a},j=async()=>{h.value=!0;try{const a=await it.post(`${Pt}/experts`,{user:b.value},{headers:{token:x.value}});a.status===200?w.value=a.data:f.value=!0}catch{nt("Error al cargar","error",3e3,ct.BOTTOM_CENTER)}h.value=!1};return U(async()=>{o.value=rt(localStorage.getItem("Lang")==="Es").doitbot,window.addEventListener("resize",()=>{window.innerWidth<768?p.value=!1:p.value=!0});const a=localStorage.getItem("session");if(a){const s=a.split("-");x.value=s.slice(0,s.length-1).toString(),b.value=s[s.length-1],await j()}else f.value=!0}),(a,s)=>{var y,k,C,$,I,S,B,E,T,z,D;return c(),u(R,null,[mt,t("div",gt,[t("div",{class:"menu cursor-p",onClick:s[0]||(s[0]=e=>p.value=!p.value)},ht),t("div",{class:W(["d-ib va-t w-50 expert z-950",p.value?"open-menu":"closed-menu"])},[t("h2",null,i((y=o.value)==null?void 0:y.title),1),t("p",null,i((k=o.value)==null?void 0:k.text001),1),h.value?(c(),N(dt,{key:0})):v("",!0),(c(!0),u(R,null,F(w.value,(e,l)=>(c(),u("div",{key:l},[t("div",{onClick:A=>O(l+1),class:"w-100 divExpert cursor-p"},[t("p",xt,[J(i(l+1)+" / ",1),t("span",wt,i(e==null?void 0:e.career),1)]),yt],8,bt),Q(Y,{name:"fade",mode:"out-in"},{default:X(()=>[m.value===l+1?(c(),u("div",{key:"div1",class:"fade-div animar cursor-p",onClick:s[1]||(s[1]=A=>a.$router.push("/doitbot/chat"))},[t("div",kt,[Ct,t("div",$t,[t("h3",It,i(e==null?void 0:e.name),1),t("p",St,i(e==null?void 0:e.career),1)])]),t("p",null,i(e==null?void 0:e.description),1)])):v("",!0)]),_:2},1024)]))),128))],2),t("div",Bt,[Et,t("div",Tt,[zt,t("p",Dt,[t("b",null,i((C=o.value)==null?void 0:C.text002),1)]),t("div",{class:"btnRecom cursor-p",onClick:s[2]||(s[2]=e=>d(0,""))},Rt),t("div",{class:"btnRecom cursor-p",onClick:s[3]||(s[3]=e=>d(0,""))},Vt),t("div",{class:"btnRecom cursor-p",onClick:s[4]||(s[4]=e=>d(0,""))},jt),t("div",At,[t("p",Mt,i(($=o.value)==null?void 0:$.text003),1)])]),t("div",Ut,[Wt,t("p",Ft,[t("b",null,i((I=o.value)==null?void 0:I.text004),1)]),(S=o.value)!=null&&S.text005?(c(),u("div",{key:0,class:"btnRecom cursor-p",onClick:s[5]||(s[5]=e=>{var l;return d(1,(l=o.value)==null?void 0:l.text005)})},[t("p",null,i((B=o.value)==null?void 0:B.text005),1)])):v("",!0),(E=o.value)!=null&&E.text006?(c(),u("div",{key:1,class:"btnRecom cursor-p",onClick:s[6]||(s[6]=e=>{var l;return d(2,(l=o.value)==null?void 0:l.text006)})},[t("p",null,i((T=o.value)==null?void 0:T.text006),1)])):v("",!0),(z=o.value)!=null&&z.text007?(c(),u("div",{key:2,class:"btnRecom cursor-p",onClick:s[7]||(s[7]=e=>{var l;return d(3,(l=o.value)==null?void 0:l.text007)})},[t("p",null,i((D=o.value)==null?void 0:D.text007),1)])):v("",!0)]),t("div",Kt,[K(t("input",{class:"w-100",type:"text",style:{"padding-right":"3rem"},placeholder:"Escribe algo para empezar o selecciona","onUpdate:modelValue":s[8]||(s[8]=e=>g.value=e),onKeypress:s[9]||(s[9]=q(e=>d(0,""),["enter"]))},null,544),[[P,g.value]]),t("img",{style:{right:"10px",position:"absolute"},class:"cursor-p",src:et,alt:"",onClick:s[10]||(s[10]=e=>d(0,""))})])]),f.value?(c(),N(ot,{key:0,closeModal:V})):v("",!0)])],64)}}});const Zt=st(qt,[["__scopeId","data-v-82be8c59"]]);export{Zt as default};