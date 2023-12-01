import{a as D}from"./axios-4a70c6fc.js";import{d as Q,x as W,r as o,o as X,c as s,y as Y,b as r,t as i,j as n,F as U,l as Z,m as b,P as l,a}from"./index-1cb887ef.js";import{s as _}from"./Toast-913090e5.js";import{S as k}from"./SpinerComponent-0ffd577d.js";const ee={class:"text-white text-4xl font-bold drop-shadow-lg max-w-2xl"},te={class:"px-6 pt-4 sm:px-8 xl:px-12 md:pt-12 text-left"},ae={key:0,class:"max-w-screen-md mx-auto prose lg:prose-lg text-5xl"},se={key:1,class:"max-w-screen-md mx-auto prose lg:prose-lg text-4xl"},re={key:2,class:"max-w-screen-md mx-auto prose lg:prose-lg text-3xl"},ne={key:3,class:"max-w-screen-md mx-auto prose lg:prose-lg"},ie={key:4,class:"max-w-screen-md mx-auto prose lg:prose-lg"},pe=["src"],oe={key:5,class:"max-w-screen-md mx-auto prose lg:prose-lg"},de={class:"aspect-w-16 aspect-h-9"},ue=["src"],le={key:6,class:"max-w-screen-md mx-auto prose lg:prose-lg"},_e={class:"bg-slate-800 text-white text-left p-2 overflow-auto"},q="https://api-chatbot.letsdoitnow.us/api",ce=Q({__name:"TermsAndConditions",setup(ge){const G=W();o("");const p=o(!0),d=o(""),m=o([]),u=o([]),H=async()=>{p.value=!0;try{const t=await D.post(`${q}/notiondoitpage`,{pageId:d.value});t.status===200?u.value=t.data:_("Error al cargar los datos","error",3e3,l.BOTTOM_CENTER)}catch(t){console.log(t),_(`Error al cargar los datos: ${t}`,"error",3e3,l.BOTTOM_CENTER)}p.value=!1},J=async()=>{p.value=!0;try{const t=await D.post(`${q}/notiondoitpagecontent`,{pageId:d.value});t.status===200?m.value=t.data:_("Error al cargar los datos","error",3e3,l.BOTTOM_CENTER)}catch(t){console.log(t),_(`Error al cargar los datos: ${t}`,"error",3e3,l.BOTTOM_CENTER)}p.value=!1},K=t=>{if(t){const g=t.split("/");return g[g.length-1]}};return X(async()=>{let t=G.path.split("/");t[t.length-1]=="terminos-y-condiciones"&&(d.value="6fd89aaf77d74b839e2727eb56ce3373"),t[t.length-1]=="politica-de-privacidad"&&(d.value="4924616fe8eb46a7a2ef26be49f7d413"),await H(),await J()}),(t,g)=>{var x,h,v,c,f,y,w,T,E;return a(),s(U,null,[(v=(h=(x=u.value)==null?void 0:x.properties)==null?void 0:h.Titulo)!=null&&v.title[0].plain_text?(a(),s("div",{key:0,style:Y(`background-image: url(${(y=(f=(c=u.value)==null?void 0:c.cover)==null?void 0:f.external)==null?void 0:y.url})`),class:"h-64 mt-8 p-8 flex justify-center items-center bg-no-repeat bg-cover bg-center bg-zinc-900 grayscale"},[r("h1",ee,i((E=(T=(w=u.value)==null?void 0:w.properties)==null?void 0:T.Titulo)==null?void 0:E.title[0].plain_text),1)],4)):n("",!0),(a(!0),s(U,null,Z(m.value.results,e=>{var O,B,C,N,R,S,$,M,I,P,V,j,z,A,F,L;return a(),s("div",te,[(e==null?void 0:e.type)=="heading_1"?(a(),s("div",ae,[r("h2",null,i((B=(O=e==null?void 0:e.heading_1)==null?void 0:O.rich_text[0])==null?void 0:B.plain_text),1)])):n("",!0),(e==null?void 0:e.type)=="heading_2"?(a(),s("div",se,[r("h3",null,i((N=(C=e==null?void 0:e.heading_2)==null?void 0:C.rich_text[0])==null?void 0:N.plain_text),1)])):n("",!0),(e==null?void 0:e.type)=="heading_3"?(a(),s("div",re,[r("h4",null,i((S=(R=e==null?void 0:e.heading_3)==null?void 0:R.rich_text[0])==null?void 0:S.plain_text),1)])):n("",!0),(e==null?void 0:e.type)=="paragraph"&&((M=($=e==null?void 0:e.paragraph)==null?void 0:$.rich_text[0])==null?void 0:M.plain_text)!=""?(a(),s("div",ne,[r("p",null,i((P=(I=e==null?void 0:e.paragraph)==null?void 0:I.rich_text[0])==null?void 0:P.plain_text),1)])):n("",!0),(e==null?void 0:e.type)=="image"?(a(),s("div",ie,[r("img",{src:(j=(V=e==null?void 0:e.image)==null?void 0:V.file)==null?void 0:j.url,alt:""},null,8,pe)])):n("",!0),(e==null?void 0:e.type)=="video"?(a(),s("div",oe,[r("div",de,[r("iframe",{src:`https://www.youtube.com/embed/${K((A=(z=e==null?void 0:e.video)==null?void 0:z.external)==null?void 0:A.url)}`,frameborder:"0",allowfullscreen:""},null,8,ue)])])):n("",!0),(e==null?void 0:e.type)=="code"?(a(),s("div",le,[r("pre",_e,[r("code",null,i((L=(F=e==null?void 0:e.code)==null?void 0:F.rich_text[0])==null?void 0:L.plain_text),1)])])):n("",!0)])}),256)),p.value?(a(),b(k,{key:1})):n("",!0)],64)}}});export{ce as default};