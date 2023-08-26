import{d as x,r as b,b as g,c as u,a as t,n as h,t as l,e as w,g as C,T as E,w as N,v as A,m as S,F as y,l as _,q as I,o as m,i as k,p as $,k as O,_ as R}from"./index-c4bdd0bc.js";import{_ as D,a as B}from"./send-89db135c.js";import{_ as T}from"./icon-pc-f4173e8a.js";import{l as V}from"./SwitchLang-3e3dc634.js";const z="/assets/menu-2291fc42.svg",c="/assets/Arrow-1-7807954c.svg",L="/assets/botico-7971115a.svg",M="/assets/textImg-93a47a84.svg",U="/assets/edit-33c577ee.svg",s=n=>($("data-v-f99bc00b"),n=n(),O(),n),j=s(()=>t("h1",null,[t("span",{class:"rectangle"},"Do it bot")],-1)),F={class:"boxBot"},W=s(()=>t("img",{src:z,alt:""},null,-1)),G=[W],K=s(()=>t("p",{class:"d-ib va-t expertName"},"01 / VENTAS",-1)),P=s(()=>t("img",{class:"d-ib va-t expertArrow",src:c,alt:""},null,-1)),Q=[K,P],q=s(()=>t("div",{class:"d-flex si-center py-1"},[t("img",{src:B,alt:""}),t("div",{class:"d-flex jc-fe flex-d-col"},[t("h3",{class:"m-0"},"Juan"),t("p",null,"Vendedor")])],-1)),H=s(()=>t("p",null,"Profesional altamente capacitado en identificar las necesidades de los clientes, comunicar el valor de un producto o servicio.",-1)),J=[q,H],Z=_('<div class="w-100 divExpert" data-v-f99bc00b><p class="d-ib va-t expertName" data-v-f99bc00b>02 / FINANZAS</p><img class="d-ib va-t expertArrow" src="'+c+'" alt="" data-v-f99bc00b></div><div class="w-100 divExpert" data-v-f99bc00b><p class="d-ib va-t expertName" data-v-f99bc00b>03/ RECURSOS HUMANOS</p><img class="d-ib va-t expertArrow" src="'+c+'" alt="" data-v-f99bc00b></div><div class="w-100 divExpert" data-v-f99bc00b><p class="d-ib va-t expertName" data-v-f99bc00b>04 / CRECIMIENTO</p><img class="d-ib va-t expertArrow" src="'+c+'" alt="" data-v-f99bc00b></div><div class="w-100 divExpert" data-v-f99bc00b><p class="d-ib va-t expertName" data-v-f99bc00b>05 / OPERACIONES</p><img class="d-ib va-t expertArrow" src="'+c+'" alt="" data-v-f99bc00b></div><div class="w-100 divExpert" data-v-f99bc00b><p class="d-ib va-t expertName" data-v-f99bc00b>06 / LOGÍSTICA</p><img class="d-ib va-t expertArrow" src="'+c+'" alt="" data-v-f99bc00b></div><div class="w-100 divExpert" data-v-f99bc00b><p class="d-ib va-t expertName" data-v-f99bc00b>07 / TECNOLOGÍA</p><img class="d-ib va-t expertArrow" src="'+c+'" alt="" data-v-f99bc00b></div>',6),X={class:"d-ib va-t w-50 bot"},Y=_('<div class="d-flex ai-center jc-sb" data-v-f99bc00b><div class="d-flex ai-center jc-sb" data-v-f99bc00b><img class="backArrow" src="'+c+'" alt="" data-v-f99bc00b><img class="ml-1" src="'+L+'" alt="" data-v-f99bc00b></div><div data-v-f99bc00b><h2 class="m-0" style="font-size:2rem;" data-v-f99bc00b>Do it Bot</h2><ul data-v-f99bc00b><li class="text-left text-primary" style="margin-left:25px;font-weight:200;font-size:1.5rem;" data-v-f99bc00b>Online</li></ul></div><div data-v-f99bc00b><img class="max-w-40" src="'+T+'" alt="" data-v-f99bc00b></div></div>',1),tt={class:"mt-2 mb-2"},et=s(()=>t("img",{class:"max-w-40",src:M,alt:""},null,-1)),st={class:"w-100 text-center"},at=s(()=>t("p",null,"Ventas",-1)),ot=[at],it=s(()=>t("div",{class:"btnRecom cursor-p"},[t("p",null,"Operaciones")],-1)),lt=s(()=>t("div",{class:"btnRecom cursor-p"},[t("p",null,"Tecnología")],-1)),ct={class:"w-100 mt-1"},dt={class:"text-primary w-100 text-center"},rt={class:"mt-2"},nt=s(()=>t("img",{src:U,alt:""},null,-1)),vt={class:"w-100 text-center"},pt={class:"d-flex ai-center inputUser mt-1",style:{position:"relative"}},bt=x({__name:"DoitBot",setup(n){const i=b({}),v=b(0),r=b(!0),p=b(""),d=a=>{a==0&&p.value!=""?localStorage.setItem("chat",p.value):a==1?localStorage.setItem("chat","¿Cómo puede la tecnología de inteligencia artificial (IA) beneficiar a mi negocio?"):a==2?localStorage.setItem("chat","¿Qué tipo de soporte técnico puedo ofrecer después de la venta?"):a==3&&localStorage.setItem("chat","¿Que hay de la capacitación para el uso de sus productos o servicios de tecnológicos?"),I.push("/doitbot/chat")},f=a=>{v.value===a?v.value=0:v.value=a};return g(()=>{i.value=V(localStorage.getItem("Lang")==="Es").chtbot,window.addEventListener("resize",()=>{window.innerWidth<768?r.value=!1:r.value=!0})}),(a,e)=>(m(),u(y,null,[j,t("div",F,[t("div",{class:"menu cursor-p",onClick:e[0]||(e[0]=o=>r.value=!r.value)},G),t("div",{class:h(["d-ib va-t w-50 expert z-950",r.value?"open-menu":"closed-menu"])},[t("h2",null,l(i.value.title),1),t("p",null,l(i.value.text001),1),t("div",null,[t("div",{onClick:e[1]||(e[1]=o=>f(1)),class:"w-100 divExpert cursor-p"},Q),w(E,{name:"fade",mode:"out-in"},{default:C(()=>[v.value===1?(m(),u("div",{key:"div1",class:"fade-div animar cursor-p",onClick:e[2]||(e[2]=o=>a.$router.push("/doitbot/chat"))},J)):k("",!0)]),_:1}),Z])],2),t("div",X,[Y,t("div",tt,[et,t("p",st,[t("b",null,l(i.value.text002),1)]),t("div",{class:"btnRecom cursor-p",onClick:e[3]||(e[3]=o=>d(0))},ot),it,lt,t("div",ct,[t("p",dt,l(i.value.text003),1)])]),t("div",rt,[nt,t("p",vt,[t("b",null,l(i.value.text004),1)]),t("div",{class:"btnRecom cursor-p",onClick:e[4]||(e[4]=o=>d(1))},[t("p",null,l(i.value.text005),1)]),t("div",{class:"btnRecom cursor-p",onClick:e[5]||(e[5]=o=>d(2))},[t("p",null,l(i.value.text006),1)]),t("div",{class:"btnRecom cursor-p",onClick:e[6]||(e[6]=o=>d(3))},[t("p",null,l(i.value.text007),1)])]),t("div",pt,[N(t("input",{class:"w-100",type:"text",style:{"padding-right":"3rem"},placeholder:"Escribe algo para empezar o selecciona","onUpdate:modelValue":e[7]||(e[7]=o=>p.value=o),onKeypress:e[8]||(e[8]=S(o=>d(0),["enter"]))},null,544),[[A,p.value]]),t("img",{style:{right:"10px",position:"absolute"},class:"cursor-p",src:D,alt:"",onClick:e[9]||(e[9]=o=>d(0))})])])])],64))}});const xt=R(bt,[["__scopeId","data-v-f99bc00b"]]);export{xt as default};
