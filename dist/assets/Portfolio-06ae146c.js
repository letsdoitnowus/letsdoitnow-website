import{a as F,s as I,P as L}from"./Toast-f966b529.js";import{l as P}from"./SwitchLang-6e8c54d1.js";import{s as R}from"./SeoMeta-6a2a6b5a.js";import{s as S}from"./SpinerComponent-d072cb00.js";import{d as V,r as u,o as q,c as s,b as r,t as n,i as M,F as A,k as j,l as U,m as i,a as t,q as p,s as m}from"./index-a8aa8772.js";const z={class:"wrapper-port pt-16"},G={class:"text-2xl font-bold sm:text-3xl text-[#263F28] text-center mb-4 animation-fade-in"},H={style:{background:"linear-gradient(180deg, rgba(121, 219, 146, 0.00) 57.28%, #79DB92 57.29%)"}},J={class:"text-center"},K=r("br",null,null,-1),Q={class:"grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center items-center px-16 text-left mt-2"},W=["onClick"],X=["src"],Y=["src"],Z=["onClick"],ee={class:"subtitle"},te={class:"mb-1"},se=["href"],oe=["onClick"],re=["src"],ae=["src"],ne={key:0,class:"h-[1px]",style:{"box-shadow":"1px 5px 5px",width:"90%",margin:"2rem auto"}},le="https://api-chatbot.letsdoitnow.us/api",he=V({__name:"Portfolio",setup(ie){const c=u(!0),d=u([]),o=u({langweb:"",titleweb:"",desciptionweb:"",keywords:"",imgweb:""}),D=async()=>{c.value=!0;try{const a=await F.post(`${le}/notiondoit`,{pageId:"27696e940dd042e1b07650b93900bf6e"});a.status===200?d.value=a.data:I("Error al cargar los datos","error",3e3,L.BOTTOM_CENTER)}catch(a){console.log(a),I(`Error al cargar los datos: ${a}`,"error",3e3,L.BOTTOM_CENTER)}c.value=!1};return q(async()=>{o.value=P(localStorage.getItem("Lang")==="Es").portfolio,R(o.value.langweb,o.value.titleweb,o.value.desciptionweb,o.value.imgweb,o.value.keywords),await D()}),(a,ce)=>(t(),s("div",z,[r("h1",G,[r("span",H,n(o.value.portfolio),1)]),r("p",J,[M(n(o.value.text001),1),K,M(n(o.value.text002),1)]),(t(!0),s(A,null,j(d.value.results,(e,l)=>{var _,h,x,g,v,f,y,b,k,w,C,T,E,$,B,N;return t(),s("div",{key:l,class:"max-w-screen-xl mx-auto"},[r("div",Q,[(l+1)%2==0?(t(),s("div",{key:0,class:"text-center",onClick:O=>p(m).push(`/portfolio/${e.id}`)},[(_=e==null?void 0:e.cover)!=null&&_.external?(t(),s("img",{key:0,src:(x=(h=e.cover)==null?void 0:h.external)==null?void 0:x.url,class:"cursor-pointer",alt:"",style:{"max-width":"100%","max-height":"350px"}},null,8,X)):(t(),s("img",{key:1,src:(v=(g=e.cover)==null?void 0:g.file)==null?void 0:v.url,class:"cursor-pointer",alt:"",style:{"max-width":"100%","max-height":"350px"}},null,8,Y))],8,W)):i("",!0),r("div",{class:"my-12 mx-4 cursor-pointer",onClick:O=>p(m).push(`/portfolio/${e.id}`)},[r("h2",ee,n((b=(y=(f=e.properties)==null?void 0:f.Titulo)==null?void 0:y.title[0])==null?void 0:b.plain_text),1),r("p",te,n((C=(w=(k=e.properties)==null?void 0:k.Descripcion)==null?void 0:w.rich_text[0])==null?void 0:C.plain_text),1),r("a",{class:"btn-underline",href:"/portfolio/"+e.id},"Lee la entrada aquí",8,se)],8,Z),(l+1)%2!=0?(t(),s("div",{key:1,class:"text-center",onClick:O=>p(m).push(`/portfolio/${e.id}`)},[(T=e==null?void 0:e.cover)!=null&&T.external?(t(),s("img",{key:0,src:($=(E=e.cover)==null?void 0:E.external)==null?void 0:$.url,class:"cursor-pointer",alt:"",style:{"max-width":"100%","max-height":"350px"}},null,8,re)):(t(),s("img",{key:1,src:(N=(B=e.cover)==null?void 0:B.file)==null?void 0:N.url,class:"cursor-pointer",alt:"",style:{"max-width":"100%","max-height":"350px"}},null,8,ae))],8,oe)):i("",!0)]),d.value.results.length-1!=l?(t(),s("div",ne)):i("",!0)])}),128)),c.value?(t(),U(S,{key:0})):i("",!0)]))}});export{he as default};
