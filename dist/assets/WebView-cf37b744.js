import{l as p}from"./SwitchLang-f8182f43.js";import{d as c,o as _,c as h,a as t,t as a,r as v,b as f,e as n,F as w,f as k,w as d,n as x,g,u as $}from"./index-292c74a2.js";const F="/assets/LOGO-2eff2570.svg",y={class:"links-footer"},b=["href"],S=["href"],B=["href"],m=c({__name:"cardFooter",props:{textFooter:{type:String},textFooter2:{type:String},textFooter3:{type:String},link1:{type:String},link2:{type:String},link3:{type:String}},setup(o){const e=o;return(s,i)=>(_(),h("ul",y,[t("a",{href:o.link1},[t("li",null,a(e.textFooter),1)],8,b),t("a",{href:o.link2},[t("li",null,a(e.textFooter2),1)],8,S),t("a",{href:o.link3},[t("li",null,a(e.textFooter3),1)],8,B)]))}}),L=t("div",{class:"line-f"},null,-1),E={class:"wrapper-f1"},H={class:"layout-f1"},M=t("img",{src:F,alt:""},null,-1),I={class:"subtitle-2"},D={class:"input"},R=["placeholder"],V=t("input",{class:"input-button",type:"button",value:""},null,-1),N={class:"layout-f2"},O={class:"layout-f2"},Z={class:"layout-f2"},U=c({__name:"Footer",setup(o){const e=v({allRights:"",newsletter:"",email:"",inforrmation:"",social:"",careers:"",resources:"",about:"",privacy:""});return f(()=>{e.value=p(localStorage.getItem("Lang")==="Es").footer}),(s,i)=>(_(),h(w,null,[L,t("div",E,[t("div",H,[M,t("p",null,a(e.value.allRights),1),t("h2",I,a(e.value.newsletter),1),t("div",D,[t("input",{class:"input-content",type:"text",placeholder:e.value.email},null,8,R),V])]),t("div",N,[t("h3",null,a(e.value.inforrmation),1),n(m,{textFooter:e.value.about,link1:"/about",textFooter2:e.value.careers,link2:"/careers",textFooter3:"Blog",link3:"blog"},null,8,["textFooter","textFooter2"])]),t("div",O,[t("h3",null,a(e.value.social),1),n(m,{textFooter:"Instagram",link1:"https://www.instagram.com/lets.doit.now/",textFooter2:"Linkedin",link2:"https://www.linkedin.com/company/letsdoitnowus/",textFooter3:"Chat",link3:"https://api.whatsapp.com/send?phone=15512612985&text=Hola!%20%F0%9F%91%8B%F0%9F%8F%BC%20"},null,8,["link1","link2","link3"])]),t("div",Z,[t("h3",null,a(e.value.resources),1),n(m,{textFooter:e.value.privacy},null,8,["textFooter"])])])],64))}}),j="/assets/logo-header-f165a5b0.svg",z=["width","height"],G=["width","height"],T=["fill"],W={mask:"url(#mask0_696_83)"},q=["fill"],A=c({__name:"menu-ico",props:{svgColorClass:{type:String,default:""},height:{type:String,default:"100%"},width:{type:String,default:"100%"}},setup(o){return(e,s)=>(_(),h("svg",{width:o.width,height:o.height,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("mask",{id:"mask0_696_83",style:{"mask-type":"alpha"},maskUnits:"userSpaceOnUse",x:"0",y:"0",width:o.width,height:o.height},[t("rect",{width:"32",height:"32",fill:o.svgColorClass},null,8,T)],8,G),t("g",W,[t("path",{d:"M5.33333 24C4.95556 24 4.63889 23.8722 4.38333 23.6167C4.12778 23.3611 4 23.0444 4 22.6667C4 22.2889 4.12778 21.9722 4.38333 21.7167C4.63889 21.4611 4.95556 21.3333 5.33333 21.3333H26.6667C27.0444 21.3333 27.3611 21.4611 27.6167 21.7167C27.8722 21.9722 28 22.2889 28 22.6667C28 23.0444 27.8722 23.3611 27.6167 23.6167C27.3611 23.8722 27.0444 24 26.6667 24H5.33333ZM5.33333 17.3333C4.95556 17.3333 4.63889 17.2056 4.38333 16.95C4.12778 16.6944 4 16.3778 4 16C4 15.6222 4.12778 15.3056 4.38333 15.05C4.63889 14.7944 4.95556 14.6667 5.33333 14.6667H26.6667C27.0444 14.6667 27.3611 14.7944 27.6167 15.05C27.8722 15.3056 28 15.6222 28 16C28 16.3778 27.8722 16.6944 27.6167 16.95C27.3611 17.2056 27.0444 17.3333 26.6667 17.3333H5.33333ZM5.33333 10.6667C4.95556 10.6667 4.63889 10.5389 4.38333 10.2833C4.12778 10.0278 4 9.71111 4 9.33333C4 8.95556 4.12778 8.63889 4.38333 8.38333C4.63889 8.12778 4.95556 8 5.33333 8H26.6667C27.0444 8 27.3611 8.12778 27.6167 8.38333C27.8722 8.63889 28 8.95556 28 9.33333C28 9.71111 27.8722 10.0278 27.6167 10.2833C27.3611 10.5389 27.0444 10.6667 26.6667 10.6667H5.33333Z",fill:o.svgColorClass},null,8,q)])],8,z))}}),J={class:"header"},K=t("div",{class:"logo"},[t("img",{src:j,alt:""})],-1),P={class:"links"},Q=c({__name:"navBarResponsive",setup(o){const e=v({menu:{home:"",about:"",services:"",portfolio:"",blog:""}}),s=v(!1),i=()=>{s.value=!s.value};return f(()=>{e.value=p(localStorage.getItem("Lang")==="Es")}),(C,l)=>{const r=k("router-link");return _(),h("header",J,[t("i",{onClick:i},[n(A,{svgColorClass:"#D9D9D9",height:"32",width:"32"})]),K,t("nav",{class:x(["nav",s.value?"open-menu":"closed-menu"])},[t("ul",P,[t("li",{onClick:l[0]||(l[0]=u=>s.value=!1)},[n(r,{to:"/"},{default:d(()=>[g(a(e.value.menu.home),1)]),_:1})]),t("li",{onClick:l[1]||(l[1]=u=>s.value=!1)},[n(r,{to:"/about"},{default:d(()=>[g(a(e.value.menu.about),1)]),_:1})]),t("li",{onClick:l[2]||(l[2]=u=>s.value=!1)},[n(r,{to:"/services"},{default:d(()=>[g(a(e.value.menu.services),1)]),_:1})]),t("li",{onClick:l[3]||(l[3]=u=>s.value=!1)},[n(r,{to:"/portfolio"},{default:d(()=>[g(a(e.value.menu.portfolio),1)]),_:1})]),t("li",{onClick:l[4]||(l[4]=u=>s.value=!1)},[n(r,{to:"/blog"},{default:d(()=>[g(a(e.value.menu.blog),1)]),_:1})])])],2)])}}}),X={class:"languaje"},Y=t("h5",null,"English",-1),tt={class:"switch"},et=t("span",{class:"slider round"},null,-1),ot=t("h5",null,"Español",-1),st=c({__name:"SwitchLang",setup(o){const e=$(),s=v(),i=v(),C=l=>{s.value=p(l.target.checked),e.go(0)};return f(()=>{i.value.checked=localStorage.getItem("Lang")==="Es",s.value=p(localStorage.getItem("Lang")==="Es")}),(l,r)=>(_(),h("div",X,[Y,t("label",tt,[t("input",{type:"checkbox",ref_key:"check",ref:i,onClick:r[0]||(r[0]=u=>C(u))},null,512),et]),ot]))}}),lt={class:"app"},it=c({__name:"WebView",setup(o){return(e,s)=>{const i=k("router-view");return _(),h("div",lt,[n(st),n(Q),n(i),n(U)])}}});export{it as default};