import{a as c}from"./axios-4a70c6fc.js";import{_ as t}from"./cardBlogResume.vue_vue_type_script_setup_true_lang-fda43d89.js";import{s as i}from"./Toast-437c90e0.js";import{d as m,r as o,b as d,c as u,a as p,e as a,F as g,l as _,P as r,o as b}from"./index-a1a3bc01.js";const f="/assets/img-blog-background-126da1f4.png",v=_('<div class="wrapper-blog"><div class="last-entry"><h1 class="subtitle">Norem ipsum dolor sit amet, consectetur adipiscing elit. <span class="rectangle">Etiam eu turpis</span> molestie, dictum est a</h1><p>Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.</p><button class="btn-underline" style="margin-top:2rem;">Lee la entrada aquí</button></div><div><img src="'+f+'" alt=""></div></div><div class="line-port"></div>',2),y={class:"wrapper-blog-2"},M=m({__name:"Blog",setup(E){const s=o(!1),l=o([]),n=async()=>{s.value=!0;try{const e=await c.get("http://localhost:3000/api/notiondoit");e.status===200?l.value=e:i("Error al cargar los datos","error",3e3,r.BOTTOM_CENTER),console.log(e)}catch(e){console.log(e),i(`Error al cargar los datos: ${e}`,"error",3e3,r.BOTTOM_CENTER)}s.value=!1};return d(async()=>{await n()}),(e,h)=>(b(),u(g,null,[v,p("div",y,[a(t,{title:"El cambio inevitable",category:"Inteligencia Artificial",nameCreator:"Marysabel",timeRead:"8min"}),a(t,{title:"El cambio inevitable",category:"Inteligencia Artificial",nameCreator:"Marysabel",timeRead:"8min"}),a(t,{title:"El cambio inevitable",category:"Inteligencia Artificial",nameCreator:"Marysabel",timeRead:"8min"})])],64))}});export{M as default};
