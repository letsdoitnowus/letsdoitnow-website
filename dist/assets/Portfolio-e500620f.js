import{a as N,s as T}from"./Toast-732b00ec.js";import{l as O}from"./SwitchLang-d7d6260e.js";import{s as I}from"./SeoMeta-6a2a6b5a.js";import{s as L}from"./SpinerComponent-5b1fc8de.js";import{d as M,r as d,b as P,c as a,a as e,t as l,h as E,F as R,q as S,s as V,i,P as $,o,x as p,y as _}from"./index-a89f6908.js";const q={class:"wrapper-port pt-16"},A={class:"subtitle"},D={class:"rectangle"},F=e("br",null,null,-1),j={class:"grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center items-center px-16 text-left mt-2"},U=["onClick"],z=["src"],G=["onClick"],H={class:"subtitle"},J={class:"mb-1"},K=["href"],Q=["onClick"],W=["src"],X={key:0,style:{"box-shadow":"1px 5px 5px",height:"1px",width:"90%",margin:"2rem auto"}},Y="https://api-chatbot.letsdoitnow.us/api",le=M({__name:"Portfolio",setup(Z){const c=d(!0),u=d([]),t=d({langweb:"",titleweb:"",desciptionweb:"",keywords:"",imgweb:""}),B=async()=>{c.value=!0;try{const r=await N.post(`${Y}/notiondoit`,{pageId:"27696e940dd042e1b07650b93900bf6e"});r.status===200?u.value=r.data:T("Error al cargar los datos","error",3e3,$.BOTTOM_CENTER)}catch(r){console.log(r),T(`Error al cargar los datos: ${r}`,"error",3e3,$.BOTTOM_CENTER)}c.value=!1};return P(async()=>{t.value=O(localStorage.getItem("Lang")==="Es").portfolio,I(t.value.langweb,t.value.titleweb,t.value.desciptionweb,t.value.imgweb,t.value.keywords),await B()}),(r,ee)=>(o(),a("div",q,[e("h1",A,[e("span",D,l(t.value.portfolio),1)]),e("p",null,[E(l(t.value.text001),1),F,E(l(t.value.text002),1)]),(o(!0),a(R,null,S(u.value.results,(s,n)=>{var h,m,g,v,x,f,b,w,y,k;return o(),a("div",{key:n},[e("div",j,[(n+1)%2==0?(o(),a("div",{key:0,class:"text-center",onClick:C=>p(_).push(`/portfolio/${s.id}`)},[e("img",{src:(m=(h=s.cover)==null?void 0:h.external)==null?void 0:m.url,class:"cursor-pointer",alt:"",style:{"max-width":"100%","max-height":"350px"}},null,8,z)],8,U)):i("",!0),e("div",{class:"my-12 cursor-pointer",onClick:C=>p(_).push(`/portfolio/${s.id}`)},[e("h2",H,l((x=(v=(g=s.properties)==null?void 0:g.Titulo)==null?void 0:v.title[0])==null?void 0:x.plain_text),1),e("p",J,l((w=(b=(f=s.properties)==null?void 0:f.Descripcion)==null?void 0:b.rich_text[0])==null?void 0:w.plain_text),1),e("a",{class:"btn-underline",href:"/portfolio/"+s.id},"Lee la entrada aquí",8,K)],8,G),(n+1)%2!=0?(o(),a("div",{key:1,class:"text-center",onClick:C=>p(_).push(`/portfolio/${s.id}`)},[e("img",{src:(k=(y=s.cover)==null?void 0:y.external)==null?void 0:k.url,class:"cursor-pointer",alt:"",style:{"max-width":"100%","max-height":"350px"}},null,8,W)],8,Q)):i("",!0)]),u.value.results.length-1!=n?(o(),a("div",X)):i("",!0)])}),128)),c.value?(o(),V(L,{key:0})):i("",!0)]))}});export{le as default};