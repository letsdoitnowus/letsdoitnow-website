import{d as u,r as i,o as g,a as c,c as h,b as e,t as l,w as y,v as C,u as b,n as f,p as B,e as T,_ as M,f as d,g as V,h as S,i as x,j as O}from"./index-5736e8a3.js";import{l as v}from"./SwitchLang-6e8c54d1.js";import{s as _,P as m,a as I}from"./Toast-8d4cd99b.js";import{_ as R}from"./send-0a90cc1f.js";const $="/assets/LOGO-2eff2570.svg",L={class:"bg-white"},N={class:"mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8"},F={class:"lg:grid lg:grid-cols-2"},j={class:"border-b border-gray-100 py-8 lg:order-last lg:border-b-0 lg:border-s lg:py-16 lg:ps-16"},D=e("div",{class:"block text-teal-600 lg:hidden"},[e("img",{src:$,alt:"",class:"w-24"})],-1),H={class:"mt-8 space-y-4 lg:mt-0"},Z=e("span",{class:"hidden h-1 w-10 rounded bg-[#9cce7c] lg:block"},null,-1),z={class:"text-2xl font-medium text-[#397a3e]"},K={class:"mt-6 w-full"},G={class:"rounded-md border border-gray-100 p-2 focus-within:ring sm:flex sm:items-center sm:gap-4"},P=["placeholder"],U={class:"py-8 lg:py-16 lg:pe-16"},W=e("div",{class:"hidden text-teal-600 lg:block"},[e("img",{src:$,alt:"",class:"w-24"})],-1),q={class:"mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3"},A={class:"font-medium text-gray-900"},J={class:"mt-6 space-y-4 text-sm"},Q={href:"/about",class:"text-gray-700 transition hover:opacity-75"},X={href:"/careers",class:"text-gray-700 transition hover:opacity-75"},Y=e("li",null,[e("a",{href:"/blog",class:"text-gray-700 transition hover:opacity-75"}," Blog ")],-1),ee={class:"font-medium text-gray-900"},te=e("ul",{class:"mt-6 space-y-4 text-sm"},[e("li",null,[e("a",{href:"https://www.instagram.com/lets.doit.now/",class:"text-gray-700 transition hover:opacity-75"}," Instagram ")]),e("li",null,[e("a",{href:"https://www.linkedin.com/company/letsdoitnowus/",class:"text-gray-700 transition hover:opacity-75"}," Linkedin ")]),e("li",null,[e("a",{href:"https://api.whatsapp.com/send?phone=15512612985&text=Hola!%20%F0%9F%91%8B%F0%9F%8F%BC%20",class:"text-gray-700 transition hover:opacity-75"}," Chat ")])],-1),se={class:"font-medium text-gray-900"},oe={class:"mt-6 space-y-4 text-sm"},le={href:"#",class:"text-gray-700 transition hover:opacity-75"},ae={class:"mt-8 border-t border-gray-100 pt-8"},ne={class:"mt-8 text-xs text-gray-500"},re=u({__name:"Footer",setup(a){const t=i({allRights:"",newsletter:"",email:"",inforrmation:"",social:"",careers:"",resources:"",about:"",privacy:""}),o=i(""),n=async()=>{if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o.value))return _("Ingrese un correo electrónico válido","error",3e3,m.BOTTOM_CENTER);try{const s=await I.post("https://api-chatbot.letsdoitnow.us/api/mailchimp",{email_address:o.value,status:"subscribed"});s.status===200?(_(`El Correo ${s.data.msg} guardado exitosamente`,"success",3e3,m.BOTTOM_CENTER),o.value=""):_("Error al guardar el correo","error",3e3,m.BOTTOM_CENTER)}catch(s){console.log(s),_(`Error al guardar el correo: ${s.response.data.title}`,"error",3e3,m.BOTTOM_CENTER)}};return g(()=>{t.value=v(localStorage.getItem("Lang")==="Es").footer}),(p,s)=>(c(),h("footer",L,[e("div",N,[e("div",F,[e("div",j,[D,e("div",H,[Z,e("div",null,[e("h2",z,l(t.value.newsletter),1)]),e("form",K,[e("div",G,[y(e("input",{type:"text",placeholder:t.value.email,"onUpdate:modelValue":s[0]||(s[0]=r=>o.value=r),class:"w-full border-none sm:text-sm"},null,8,P),[[C,o.value]]),e("button",{value:"",onClick:s[1]||(s[1]=r=>n()),class:"mt-1 w-full rounded bg-gradient-to-r from-[#79DB92] to-[#9CCE7C] px-6 py-3 text-sm font-bold uppercase tracking-wide text-[#333333] transition-none hover:bg-teal-600 sm:mt-0 sm:w-auto sm:shrink-0"}," OK ")])])])]),e("div",U,[W,e("div",q,[e("div",null,[e("p",A,l(t.value.inforrmation),1),e("ul",J,[e("li",null,[e("a",Q,l(t.value.about),1)]),e("li",null,[e("a",X,l(t.value.careers),1)]),Y])]),e("div",null,[e("p",ee,l(t.value.social),1),te]),e("div",null,[e("p",se,l(t.value.resources),1),e("ul",oe,[e("li",null,[e("a",le,l(t.value.privacy),1)])])])]),e("div",ae,[e("p",ne,l(t.value.allRights),1)])])])])]))}}),ie="/assets/logo-header-32c95a50.svg",k=a=>(B("data-v-1dfb73d9"),a=a(),T(),a),de={class:"bg-[#4d4d4d] m-4 rounded-lg sticky top-0 z-10"},ce={class:"mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8"},he={class:"flex h-16 items-center justify-between"},ue={class:"md:flex md:items-center md:gap-12"},pe={class:"block text-teal-600",href:"/"},_e={class:"sr-only"},me=k(()=>e("img",{src:ie,alt:""},null,-1)),ve={"aria-label":"Global",class:"md:relative"},ge={class:"md:flex items-center md:gap-6 text-sm absolute md:relative bg-white md:transparent left-0 md:left-auto top-16 md:top-auto md:static md:bg-transparent z-10"},xe={class:"md:text-white text-black text-lg font-bold transition-all hover:bg-white hover:text-green-900 hover:pb-4 hover:pt-6 hover:px-6 hover:rounded-b-2xl",href:"/"},be={class:"md:text-white text-black text-lg font-bold transition-all hover:bg-white hover:text-green-900 hover:pb-4 hover:pt-6 hover:px-6 hover:rounded-b-2xl",href:"/about"},fe={class:"md:text-white text-black text-lg font-bold transition-all hover:bg-white hover:text-green-900 hover:pb-4 hover:pt-6 hover:px-6 hover:rounded-b-2xl",href:"/services"},we={class:"md:text-white text-black text-lg font-bold transition-all hover:bg-white hover:text-green-900 hover:pb-4 hover:pt-6 hover:px-6 hover:rounded-b-2xl",href:"/portfolio"},ye={class:"md:text-white text-black text-lg font-bold transition-all hover:bg-white hover:text-green-900 hover:pb-4 hover:pt-6 hover:px-6 hover:rounded-b-2xl",href:"/blog"},Ce={class:"flex items-center gap-4"},$e={class:"sm:flex sm:gap-4"},ke={class:"rounded-md bg-gradient-to-r from-[#79DB92] to-[#9CCE7C] px-5 py-2.5 text-m font-bold text-[#333333] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:duration-300",href:"/contact"},Ee={class:"hidden sm:flex"},Be={class:"rounded-md bg-none px-5 py-2.5 text-m font-bold text-white border border-[#79DB92] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:duration-300",href:"https://chatbot.letsdoitnow.us/doitbot/chat"},Te={class:"block md:hidden"},Me=k(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 6h16M4 12h16M4 18h16"})],-1)),Ve=[Me],Se=u({__name:"navBarResponsive",setup(a){const t=i({menu:{home:"",about:"",services:"",portfolio:"",blog:"",contact:"",doit:""}});b();const o=i(!1),n=()=>{console.log("click"),o.value=!o.value};return g(()=>{t.value=v(localStorage.getItem("Lang")==="Es")}),(p,s)=>(c(),h("header",de,[e("div",ce,[e("div",he,[e("div",ue,[e("a",pe,[e("span",_e,l(t.value.menu.home),1),me])]),e("div",{class:f(o.value?"view":"noview")},[e("nav",ve,[e("ul",ge,[e("li",null,[e("a",xe,l(t.value.menu.home),1)]),e("li",null,[e("a",be,l(t.value.menu.about),1)]),e("li",null,[e("a",fe,l(t.value.menu.services),1)]),e("li",null,[e("a",we,l(t.value.menu.portfolio),1)]),e("li",null,[e("a",ye,l(t.value.menu.blog),1)])])])],2),e("div",Ce,[e("div",$e,[e("a",ke,l(t.value.menu.contact),1),e("div",Ee,[e("a",Be,l(t.value.menu.doit),1)])]),e("div",Te,[e("button",{class:"rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75",onClick:s[0]||(s[0]=r=>n())},Ve)])])])])]))}});const Oe=M(Se,[["__scopeId","data-v-1dfb73d9"]]),Ie={class:"flex items-center justify-end mt-4"},Re=e("h5",{class:"px-4 text-[#4d4d4d] m-0"},"English",-1),Le={class:"relative inline-block w-[55px] h-[24px]"},Ne={class:"bg-[#79db92] rounded-full absolute cursor-pointer inset-0 transition duration-400"},Fe=e("h5",{class:"px-4 text-[#4d4d4d] m-0"},"Español",-1),je=u({__name:"SwitchLang",setup(a){const t=b(),o=i(),n=i({checked:!0}),p=s=>{o.value=v(s.target.checked),t.go(0)};return g(()=>{n.value.checked=localStorage.getItem("Lang")==="Es",o.value=v(localStorage.getItem("Lang")==="Es")}),(s,r)=>(c(),h("div",Ie,[Re,e("label",Le,[e("input",{type:"checkbox",ref_key:"check",ref:n,onClick:r[0]||(r[0]=E=>p(E)),class:"opacity-0 w-0 h-0"},null,512),e("span",Ne,[e("div",{class:f(["absolute content-[''] h-[18px] w-[18px] bottom-[4px] bg-white rounded-full transition-transform duration-400",{"left-[4px]":!n.value.checked,"right-[4px]":n.value.checked}])},null,2)])]),Fe]))}}),De=["width","height"],He=["fill"],Ze=["stroke"],w=u({__name:"bot-ico",props:{svgColorClass:{type:String,default:""},height:{type:String,default:"100%"},width:{type:String,default:"100%"}},setup(a){return(t,o)=>(c(),h("svg",{width:a.width,height:a.height,viewBox:"0 0 73 73",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M56.9888 32.3487V25.6746C56.9888 24.4846 56.5161 23.3434 55.6747 22.5019C54.8333 21.6605 53.692 21.1878 52.5021 21.1878H39.0417V18.2444C39.7259 17.6297 40.1634 16.7458 40.1634 15.7543C40.1634 14.8618 39.8088 14.0059 39.1777 13.3748C38.5467 12.7437 37.6907 12.3892 36.7983 12.3892C35.9058 12.3892 35.0498 12.7437 34.4188 13.3748C33.7877 14.0059 33.4332 14.8618 33.4332 15.7543C33.4332 16.7458 33.8706 17.6297 34.5549 18.2444V21.1878H21.0945C19.9045 21.1878 18.7632 21.6605 17.9218 22.5019C17.0804 23.3434 16.6077 24.4846 16.6077 25.6746V32.4003L16.4461 32.4115C15.8805 32.4518 15.3513 32.705 14.9649 33.12C14.5786 33.5351 14.364 34.0811 14.3643 34.6482V39.135C14.3643 39.73 14.6006 40.3006 15.0213 40.7213C15.4421 41.142 16.0127 41.3784 16.6077 41.3784V52.5954C16.6077 53.7853 17.0804 54.9266 17.9218 55.768C18.7632 56.6094 19.9045 57.0822 21.0945 57.0822H52.5021C53.692 57.0822 54.8333 56.6094 55.6747 55.768C56.5161 54.9266 56.9888 53.7853 56.9888 52.5954V41.3784C57.5838 41.3784 58.1545 41.142 58.5752 40.7213C58.9959 40.3006 59.2323 39.73 59.2323 39.135V34.7873C59.2582 34.4391 59.2029 34.0896 59.0707 33.7665C58.6176 32.6717 57.6462 32.4093 56.9888 32.3487ZM25.5813 34.6482C25.5813 32.1715 27.0888 30.1614 28.9464 30.1614C30.8039 30.1614 32.3115 32.1715 32.3115 34.6482C32.3115 37.1249 30.8039 39.135 28.9464 39.135C27.0888 39.135 25.5813 37.1249 25.5813 34.6482ZM45.7674 48.1086C43.5217 48.1018 27.8247 48.1086 27.8247 48.1086V43.6218C27.8247 43.6218 43.5307 43.6173 45.7763 43.6218L45.7674 48.1086ZM44.6502 39.135C42.7926 39.135 41.2851 37.1249 41.2851 34.6482C41.2851 32.1715 42.7926 30.1614 44.6502 30.1614C46.5077 30.1614 48.0153 32.1715 48.0153 34.6482C48.0153 37.1249 46.5077 39.135 44.6502 39.135Z",fill:a.svgColorClass},null,8,He),e("circle",{cx:"36.7997",cy:"36.4427",r:"35.0967",stroke:a.svgColorClass,"stroke-width":"1.59531"},null,8,Ze)],8,De))}}),ze={class:"fixed bottom-0 right-0 m-6 drop-shadow-xl",style:{display:"none"}},Ke={class:"flex items-center"},Ge=e("div",null,[e("p",{class:"ml-2 text-sm"},[e("span",{class:"font-semibold"},"Chat Bot"),e("br"),x("online")])],-1),Pe={key:0,class:"bg-white rounded-b-[25px] w-[350px] overflow-hidden"},Ue={class:"p-4 min-h-[150px] max-h-[350px] overflow-y-auto"},We={class:"flex items-center mb-4"},qe={class:"bg-[#69C36E] rounded-full h-[30px] w-[30px]"},Ae=e("div",{class:"bg-[#E3E3E3] ml-4 p-3 py-1 rounded-lg"},[x("primer mensaje"),e("br"),x("segunda linea")],-1),Je=e("div",{class:"flex justify-end mb-4"},[e("div",{class:"bg-[#263F28] p-3 py-1 rounded-lg text-white"},"segundo mensaje")],-1),Qe={class:"relative items-center flex mt-1"},Xe=u({__name:"BotSales",setup(a){b();const t=i(!1),o=i(""),n=()=>{console.log("sendChat")};return g(()=>{console.log("mounted")}),(p,s)=>(c(),h("div",ze,[e("div",{class:f(["bg-[#263F28] text-white p-4 py-2 rounded-t-[25px] cursor-pointer",[t.value?"rounded-t-[25px] w-[350px]":"rounded-[25px]"]]),onClick:s[0]||(s[0]=r=>t.value=!t.value)},[e("div",Ke,[d(w,{svgColorClass:"white",height:"50",width:"50"}),Ge])],2),t.value?(c(),h("div",Pe,[e("div",Ue,[e("div",We,[e("div",qe,[d(w,{svgColorClass:"#263F28",height:"30",width:"30"})]),Ae]),Je]),e("div",Qe,[y(e("input",{class:"w-full pr-12 border-t border-gray-400 px-4 pt-3 pb-4 text-lg outline-none",type:"text",placeholder:"¿Cómo puedo ayudarte?","onUpdate:modelValue":s[1]||(s[1]=r=>o.value=r),onKeypress:s[2]||(s[2]=V(r=>n(),["enter"]))},null,544),[[C,o.value]]),e("img",{class:"cursor-pointer right-3 absolute",src:R,alt:"",onClick:s[3]||(s[3]=r=>n())})])])):S("",!0)]))}}),Ye={class:"app"},lt=u({__name:"WebView",setup(a){return(t,o)=>{const n=O("router-view");return c(),h("div",Ye,[d(je),d(Oe),d(n),d(re),d(Xe)])}}});export{lt as default};
