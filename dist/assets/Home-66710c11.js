import{l as y}from"./SwitchLang-3e3dc634.js";import{s as f}from"./SeoMeta-6a2a6b5a.js";import{_ as $}from"./icon-pc-f4173e8a.js";import{d,c as l,i,a as t,t as s,o as n,F as b,r as w,j as I,h as r,e as a,p as k,k as S,_ as C}from"./index-c4bdd0bc.js";import{_ as h}from"./cardBlogResume.vue_vue_type_script_setup_true_lang-dfce6a8a.js";const T="/assets/icon-global-64ddf46d.svg",N="/assets/icon-phone-ccbe4e6b.svg",A="/assets/icon-web-d492e12f.svg",B={class:"layout-card"},j={key:0,src:T,alt:""},M={key:1,src:$,alt:""},P={key:2,src:N,alt:""},V={key:3,src:A,alt:""},p=d({__name:"card-1",props:{imgIcon:{type:Number},text:{type:String}},setup(o){const e=o;return(_,u)=>(n(),l("div",B,[o.imgIcon==1?(n(),l("img",j)):i("",!0),o.imgIcon==2?(n(),l("img",M)):i("",!0),o.imgIcon==3?(n(),l("img",P)):i("",!0),o.imgIcon==4?(n(),l("img",V)):i("",!0),t("h4",null,s(e.text),1)]))}}),E=t("h3",{class:"subtitle-3"},"Categorías del blog",-1),H={class:""},J={href:"",class:"blogtop"},R={href:"",class:"blogtop"},q={href:"",class:"blogtop"},D={href:"",class:"blogtop"},F={href:"",class:"blogtop"},z=d({__name:"cardBlogCategory",props:{text:{type:String},text2:{type:String},text3:{type:String},text4:{type:String},text5:{type:String}},setup(o){const e=o;return(_,u)=>(n(),l(b,null,[E,t("ul",H,[t("a",J,[t("li",null,s(e.text),1)]),t("a",R,[t("li",null,s(e.text2),1)]),t("a",q,[t("li",null,s(e.text3),1)]),t("a",D,[t("li",null,s(e.text4),1)]),t("a",F,[t("li",null,s(e.text5),1)])])],64))}}),G="/assets/icon-line-ddec0cac.svg",L="/assets/icon-draw-d462edea.svg",O="/assets/icon-people-b2a6ffa2.svg",K="/assets/icon-people-2-01402cf2.svg",Q={class:"layout-cardI"},U={key:0,src:G,alt:""},W={key:1,src:L,alt:""},X={key:2,src:O,alt:""},Y={key:3,src:K,alt:""},Z={class:"subtitle-2"},tt={class:"pf"},g=d({__name:"cardInformation",props:{imgIcon:{type:Number},text:{type:String},longText:{type:String}},setup(o){const e=o;return(_,u)=>(n(),l("div",Q,[o.imgIcon==1?(n(),l("img",U)):i("",!0),o.imgIcon==2?(n(),l("img",W)):i("",!0),o.imgIcon==3?(n(),l("img",X)):i("",!0),o.imgIcon==4?(n(),l("img",Y)):i("",!0),t("h4",Z,s(e.text),1),t("p",tt,s(e.longText),1)]))}}),et="/assets/aliaga_go-6c67475c.png",st={class:"layout-card-review"},ot={class:"name-review"},lt=t("img",{src:et,alt:""},null,-1),nt=d({__name:"cardReview",props:{namePerson:{type:String},company:{type:String},review:{type:String}},setup(o){const e=o;return(_,u)=>(n(),l("div",st,[t("div",ot,[lt,t("div",null,[t("h5",null,s(e.namePerson),1),t("h6",null,s(e.company),1)])]),t("p",null,s(e.review),1)]))}}),x=o=>(k("data-v-f154a919"),o=o(),S(),o),at={class:"wrapper"},it={class:"layout"},ct={class:"title"},rt=x(()=>t("br",null,null,-1)),_t={class:"rectangle"},ut=x(()=>t("br",null,null,-1)),dt={class:"pf"},xt={class:"layout-btn"},pt={class:"btn-underline"},gt={class:"wrapper-2"},mt={class:"grid-card"},vt={class:"layout-2"},ht={class:"subtitle"},bt={class:"pf"},yt={class:"btn-style-deg"},ft={class:"wrapper-3"},$t={class:"wrapper-6"},wt={class:"layout-3"},It={class:"subtitle"},kt=x(()=>t("br",null,null,-1)),St={class:"rectangle"},Ct=x(()=>t("br",null,null,-1)),Tt={class:"pf"},Nt={class:"layout-btn"},At={class:"btn-style-deg"},Bt={class:"layout-4"},jt={class:"wrapper-4"},Mt={class:"wrapper-5"},Pt={class:"layout-5"},Vt=x(()=>t("br",null,null,-1)),Et={href:""},Ht=d({__name:"Home",setup(o){const e=w({langweb:"",titleweb:"",desciptionweb:"",keywords:"",imgweb:"",title01:"",title02:"",title03:"",text001:"",text002:"",text003:"",text004:"",text005:"",text006:"",text007:"",text008:"",text009:"",text010:"",text011:"",text012:"",text013:"",text014:"",text015:"",text016:"",text017:"",text018:"",text019:"",text020:"",text021:"",text022:"",text023:"",text024:"",text025:"",text026:"",text027:"",text028:"",text029:"",text030:""}),_=()=>{window.open("https://7j1l5jqb43v.typeform.com/to/kSlNtr0J","_blank")},u=()=>{window.open("https://calendly.com/juanes-paca-letsdoitnow/30min?month=2023-07","_blank")};return I(()=>{e.value=y(localStorage.getItem("Lang")==="Es").home,f(e.value.langweb,e.value.titleweb,e.value.desciptionweb,e.value.imgweb,e.value.keywords)}),(m,c)=>(n(),l(b,null,[t("div",at,[t("div",it,[t("h1",ct,[r(s(e.value.title01),1),rt,t("span",_t,s(e.value.title02),1),ut,r(s(e.value.title03),1)]),t("p",dt,s(e.value.text001),1),t("div",xt,[t("a",null,[t("button",{class:"btn-style-deg",onClick:_},s(e.value.text002),1)]),t("a",{onClick:c[0]||(c[0]=v=>m.$router.push("/portfolio"))},[t("button",pt,s(e.value.text003),1)])])])]),t("div",gt,[t("div",mt,[a(p,{imgIcon:1,text:e.value.text004},null,8,["text"]),a(p,{imgIcon:2,text:e.value.text005},null,8,["text"]),a(p,{imgIcon:3,text:e.value.text006},null,8,["text"]),a(p,{imgIcon:4,text:e.value.text007},null,8,["text"])]),t("div",vt,[t("h2",ht,s(e.value.text008),1),t("p",bt,s(e.value.text009),1),t("a",{onClick:c[1]||(c[1]=v=>m.$router.push("/services"))},[t("button",yt,s(e.value.text010),1)])])]),t("div",ft,[t("div",null,[a(g,{imgIcon:1,text:e.value.text011,longText:e.value.text012},null,8,["text","longText"])]),t("div",null,[a(g,{imgIcon:2,text:e.value.text013,longText:e.value.text014},null,8,["text","longText"])]),t("div",null,[a(g,{imgIcon:3,text:e.value.text015,longText:e.value.text016},null,8,["text","longText"])]),t("div",null,[a(g,{imgIcon:4,text:e.value.text017,longText:e.value.text018},null,8,["text","longText"])])]),t("div",$t,[t("div",wt,[t("h3",It,[r(s(e.value.text019),1),kt,t("span",St,s(e.value.text020),1),Ct,r(s(e.value.text021),1)]),t("p",Tt,s(e.value.text022),1),t("div",Nt,[t("a",{onClick:c[2]||(c[2]=v=>m.$router.push("/blog"))},[t("button",At,s(e.value.text023),1)])])]),t("div",Bt,[a(h,{title:"El cambio inevitable",category:"Inteligencia Artificial",nameCreator:"Marysabel",timeRead:"8min"}),a(h,{title:"Desencadenando el Poder de la Inteligencia Artificial",category:"Inteligencia Artificial",nameCreator:"Marysabel",timeRead:"8min"})])]),t("div",jt,[a(z,{text:e.value.text024,text2:e.value.text025,text3:e.value.text026,text4:e.value.text027,text5:e.value.text028},null,8,["text","text2","text3","text4","text5"])]),t("div",Mt,[t("h2",null,s(e.value.text029),1),t("div",Pt,[a(nt,{review:e.value.text030,company:"AliadaGO",namePerson:"Juan José Alzate"},null,8,["review"])]),t("p",null,[r(s(e.value.text033),1),Vt,r(s(e.value.text034),1)]),t("a",Et,[t("button",{class:"btn-style-deg",onClick:u},s(e.value.text035),1)])])],64))}});const zt=C(Ht,[["__scopeId","data-v-f154a919"]]);export{zt as default};
