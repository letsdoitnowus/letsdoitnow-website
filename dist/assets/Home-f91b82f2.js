import{l as $}from"./SwitchLang-b8af5477.js";import{s as f}from"./SeoMeta-6a2a6b5a.js";import{d,o as l,c as a,h as c,a as t,t as s,F as b,r as w,i as I,g as u,e as n,p as S,j as k,_ as C}from"./index-cfcd2007.js";const T="/assets/icon-global-64ddf46d.svg",P="/assets/icon-pc-73852d61.svg",B="/assets/icon-phone-ccbe4e6b.svg",N="/assets/icon-web-d492e12f.svg",R={class:"layout-card"},A={key:0,src:T,alt:""},M={key:1,src:P,alt:""},j={key:2,src:B,alt:""},E={key:3,src:N,alt:""},p=d({__name:"card-1",props:{imgIcon:{type:Number},text:{type:String}},setup(o){const e=o;return(i,r)=>(l(),a("div",R,[o.imgIcon==1?(l(),a("img",A)):c("",!0),o.imgIcon==2?(l(),a("img",M)):c("",!0),o.imgIcon==3?(l(),a("img",j)):c("",!0),o.imgIcon==4?(l(),a("img",E)):c("",!0),t("h4",null,s(e.text),1)]))}}),V=t("h3",{class:"subtitle-3"},"Categorías del blog",-1),H={class:""},q={href:"",class:"blogtop"},D={href:"",class:"blogtop"},F={href:"",class:"blogtop"},J={href:"",class:"blogtop"},O={href:"",class:"blogtop"},G=d({__name:"cardBlogCategory",props:{text:{type:String},text2:{type:String},text3:{type:String},text4:{type:String},text5:{type:String}},setup(o){const e=o;return(i,r)=>(l(),a(b,null,[V,t("ul",H,[t("a",q,[t("li",null,s(e.text),1)]),t("a",D,[t("li",null,s(e.text2),1)]),t("a",F,[t("li",null,s(e.text3),1)]),t("a",J,[t("li",null,s(e.text4),1)]),t("a",O,[t("li",null,s(e.text5),1)])])],64))}}),L={class:"layout-card-blog"},z={class:"entry-blog"},K={class:"subtitle-2"},Q=t("div",{class:"line"},null,-1),y=d({__name:"cardBlogResume",props:{title:{type:String},nameCreator:{type:String},timeRead:{type:String},category:{type:String}},setup(o){const e=o;return(i,r)=>(l(),a("div",L,[t("div",z,[t("h4",K,s(e.title),1),Q,t("p",null,s(e.nameCreator)+" | "+s(e.timeRead)+" | "+s(e.category),1)])]))}}),U="/assets/icon-line-ddec0cac.svg",W="/assets/icon-draw-d462edea.svg",X="/assets/icon-people-b2a6ffa2.svg",Y="/assets/icon-people-2-01402cf2.svg",Z={class:"layout-cardI"},tt={key:0,src:U,alt:""},et={key:1,src:W,alt:""},st={key:2,src:X,alt:""},ot={key:3,src:Y,alt:""},nt={class:"subtitle-2"},lt={class:"pf"},g=d({__name:"cardInformation",props:{imgIcon:{type:Number},text:{type:String},longText:{type:String}},setup(o){const e=o;return(i,r)=>(l(),a("div",Z,[o.imgIcon==1?(l(),a("img",tt)):c("",!0),o.imgIcon==2?(l(),a("img",et)):c("",!0),o.imgIcon==3?(l(),a("img",st)):c("",!0),o.imgIcon==4?(l(),a("img",ot)):c("",!0),t("h4",nt,s(e.text),1),t("p",lt,s(e.longText),1)]))}}),at="/assets/icon-review-7b0cca3b.svg",ct={class:"layout-card-review"},it={class:"name-review"},rt=t("img",{src:at,alt:""},null,-1),m=d({__name:"cardReview",props:{namePerson:{type:String},company:{type:String},review:{type:String}},setup(o){const e=o;return(i,r)=>(l(),a("div",ct,[t("p",null,s(e.review),1),t("div",it,[rt,t("div",null,[t("h5",null,s(e.namePerson),1),t("h6",null,s(e.company),1)])])]))}}),x=o=>(S("data-v-c69d98f5"),o=o(),k(),o),_t={class:"wrapper"},ut={class:"layout"},dt={class:"title"},xt=x(()=>t("br",null,null,-1)),pt={class:"rectangle"},gt=x(()=>t("br",null,null,-1)),vt={class:"pf"},mt={class:"layout-btn"},ht={class:"btn-underline"},yt={class:"wrapper-2"},bt={class:"grid-card"},$t={class:"layout-2"},ft={class:"subtitle"},wt={class:"pf"},It={class:"btn-style-deg"},St={class:"wrapper-3"},kt={class:"wrapper-6"},Ct={class:"layout-3"},Tt={class:"subtitle"},Pt=x(()=>t("br",null,null,-1)),Bt={class:"rectangle"},Nt=x(()=>t("br",null,null,-1)),Rt={class:"pf"},At={class:"layout-btn"},Mt={class:"btn-style-deg"},jt={class:"layout-4"},Et={class:"wrapper-4"},Vt={class:"wrapper-5"},Ht={class:"layout-5"},qt=x(()=>t("br",null,null,-1)),Dt={href:""},Ft=d({__name:"Home",setup(o){const e=w({langweb:"",titleweb:"",desciptionweb:"",keywords:"",imgweb:"",title01:"",title02:"",title03:"",text001:"",text002:"",text003:"",text004:"",text005:"",text006:"",text007:"",text008:"",text009:"",text010:"",text011:"",text012:"",text013:"",text014:"",text015:"",text016:"",text017:"",text018:"",text019:"",text020:"",text021:"",text022:"",text023:"",text024:"",text025:"",text026:"",text027:"",text028:"",text029:"",text030:""}),i=()=>{window.open("https://7j1l5jqb43v.typeform.com/to/kSlNtr0J","_blank")},r=()=>{window.open("https://calendly.com/juanes-paca-letsdoitnow/30min?month=2023-07","_blank")};return I(()=>{e.value=$(localStorage.getItem("Lang")==="Es").home,f(e.value.langweb,e.value.titleweb,e.value.desciptionweb,e.value.imgweb,e.value.keywords)}),(v,_)=>(l(),a(b,null,[t("div",_t,[t("div",ut,[t("h1",dt,[u(s(e.value.title01),1),xt,t("span",pt,s(e.value.title02),1),gt,u(s(e.value.title03),1)]),t("p",vt,s(e.value.text001),1),t("div",mt,[t("a",null,[t("button",{class:"btn-style-deg",onClick:i},s(e.value.text002),1)]),t("a",{onClick:_[0]||(_[0]=h=>v.$router.push("/portfolio"))},[t("button",ht,s(e.value.text003),1)])])])]),t("div",yt,[t("div",bt,[n(p,{imgIcon:1,text:e.value.text004},null,8,["text"]),n(p,{imgIcon:2,text:e.value.text005},null,8,["text"]),n(p,{imgIcon:3,text:e.value.text006},null,8,["text"]),n(p,{imgIcon:4,text:e.value.text007},null,8,["text"])]),t("div",$t,[t("h2",ft,s(e.value.text008),1),t("p",wt,s(e.value.text009),1),t("a",{onClick:_[1]||(_[1]=h=>v.$router.push("/services"))},[t("button",It,s(e.value.text010),1)])])]),t("div",St,[t("div",null,[n(g,{imgIcon:1,text:e.value.text011,longText:e.value.text012},null,8,["text","longText"])]),t("div",null,[n(g,{imgIcon:2,text:e.value.text013,longText:e.value.text014},null,8,["text","longText"])]),t("div",null,[n(g,{imgIcon:3,text:e.value.text015,longText:e.value.text016},null,8,["text","longText"])]),t("div",null,[n(g,{imgIcon:4,text:e.value.text017,longText:e.value.text018},null,8,["text","longText"])])]),t("div",kt,[t("div",Ct,[t("h3",Tt,[u(s(e.value.text019),1),Pt,t("span",Bt,s(e.value.text020),1),Nt,u(s(e.value.text021),1)]),t("p",Rt,s(e.value.text022),1),t("div",At,[t("a",{onClick:_[2]||(_[2]=h=>v.$router.push("/blog"))},[t("button",Mt,s(e.value.text023),1)])])]),t("div",jt,[n(y,{title:"El cambio inevitable",category:"Inteligencia Artificial",nameCreator:"Marysabel",timeRead:"8min"}),n(y,{title:"Desencadenando el Poder de la Inteligencia Artificial",category:"Inteligencia Artificial",nameCreator:"Marysabel",timeRead:"8min"})])]),t("div",Et,[n(G,{text:e.value.text024,text2:e.value.text025,text3:e.value.text026,text4:e.value.text027,text5:e.value.text028},null,8,["text","text2","text3","text4","text5"])]),t("div",Vt,[t("h2",null,s(e.value.text029),1),t("div",Ht,[n(m,{review:e.value.text030,company:"AJPenny",namePerson:"Penélope"},null,8,["review"]),n(m,{review:e.value.text031,company:"Manager Real/State Agency",namePerson:"Ian"},null,8,["review"]),n(m,{review:e.value.text032,company:"CEO, AliadaGO",namePerson:"Brandon"},null,8,["review"])]),t("p",null,[u(s(e.value.text033),1),qt,u(s(e.value.text034),1)]),t("a",Dt,[t("button",{class:"btn-style-deg",onClick:r},s(e.value.text035),1)])])],64))}});const Lt=C(Ft,[["__scopeId","data-v-c69d98f5"]]);export{Lt as default};
