(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{310:function(e,t,a){},319:function(e,t,a){},321:function(e,t,a){},328:function(e,t,a){},468:function(e,t,a){},470:function(e,t,a){},471:function(e,t,a){},472:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a(14),c=a.n(n),s=a(89),o=a(23),r=a(12),l=(a(310),a(3)),d=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),a=t[0],n=t[1],c=function(){return n(!1)};return Object(l.jsx)("nav",{className:"navbar",children:Object(l.jsxs)("div",{className:"navbar-container",children:[Object(l.jsx)("div",{children:Object(l.jsxs)(s.b,{to:"/",className:"navbar-logo",children:["pgCOVAPI ",Object(l.jsx)("i",{className:"fas fa-viruses"})]})}),Object(l.jsx)("div",{className:"menu-icon",onClick:function(){return n(!a)},children:Object(l.jsx)("i",{className:a?"fas fa-times":"fas fa-bars"})}),Object(l.jsxs)("ul",{className:a?"nav-menu active":"nav-menu",onClick:c,children:[Object(l.jsx)("li",{className:"menu-item",children:Object(l.jsx)(s.b,{to:"/",className:"nav-links",onClick:c,children:"Home"})}),Object(l.jsx)("li",{className:"menu-item",children:Object(l.jsx)("a",{className:"nav-links",href:"https://ijn-shalma.github.io/pgCOVAPI/",target:"_blank",rel:"noreferrer",children:"Documentazione API"})}),Object(l.jsx)("li",{className:"menu-item",children:Object(l.jsx)(s.b,{className:"nav-links",to:"/grafici",onClick:c,children:"Grafici"})})]})]})})},j=a(532),b=a(261),h=a.n(b),u=a(262),m=a.n(u),O=(a(319),function(){return Object(l.jsxs)("div",{className:"banner-container",children:[Object(l.jsx)("div",{className:"banner-wrapper",children:Object(l.jsxs)("div",{className:"banner-content",children:[Object(l.jsx)("h2",{className:"title",children:"pgCOVAPI"}),Object(l.jsx)("h2",{className:"title",children:"Open Data Covid-19 in Italia"}),Object(l.jsxs)("p",{children:["Accedi ai dati COVID19 tramite una API ad accesso libero facile da utilizzare.",Object(l.jsx)("br",{})," Visualizza o implementa in altre applicazioni. Dati forniti dal ",Object(l.jsx)("a",{href:"https://github.com/pcm-dpc/COVID-19",children:"Dipartimento di Protezione Civile"})]}),Object(l.jsx)(j.a,{href:"https://github.com/IJN-Shalma/pgCOVAPI",endIcon:Object(l.jsx)(h.a,{}),target:"_blank",variant:"contained",style:{margin:"1rem 1rem"},color:"primary",children:"GitHub"}),Object(l.jsx)(j.a,{href:"https://ijn-shalma.github.io/pgCOVAPI/",endIcon:Object(l.jsx)(m.a,{}),target:"_blank",variant:"contained",color:"primary",children:"Documentazione API"})]})}),Object(l.jsx)("div",{className:"down-button",children:Object(l.jsx)("i",{className:"fas fa-angle-double-down"})})]})}),p=(a(321),function(){return Object(l.jsxs)("div",{className:"footer",children:[Object(l.jsxs)("div",{className:"authors",children:[Object(l.jsx)("h3",{children:"Autori"}),Object(l.jsx)("p",{children:"Silvio Caprara"}),Object(l.jsx)("p",{children:"Pietro Chiartano"}),Object(l.jsx)("p",{children:"Yun Qing Zhou"})]}),Object(l.jsxs)("div",{className:"credits",children:[Object(l.jsx)("h3",{children:"Extra"}),Object(l.jsx)("p",{children:"Progetto Maturit\xe0 2021"}),Object(l.jsx)("p",{children:"5^C Informatica IIS A. Avogadro Torino"}),Object(l.jsx)("p",{children:"\xa0"})]})]})}),x=(a(322),a(263)),g=(a(328),function(){var e=Object(i.useState)({}),t=Object(r.a)(e,2),a=t[0],n=t[1];return Object(i.useEffect)((function(){fetch("https://pgcovapi.herokuapp.com/api/nazione/?giorni=4").then((function(e){if(e.ok)return e.json()})).then((function(e){n(e[e.length-1])}))}),[]),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"carousel-container",children:Object(l.jsxs)("div",{className:"carousel-wrapper",children:[Object(l.jsx)("p",{className:"today-date",children:function(e){var t=new Date(e+"Z"),a=String(t.getMonth()+1),i=String(t.getDate()),n=String(t.getFullYear());return"".concat(i," - ").concat(a," - ").concat(n)}(a.data)}),Object(l.jsxs)(x.Carousel,{showArrows:!1,showThumbs:!1,autoPlay:!0,infiniteLoop:!0,swipeable:!0,centerMode:!0,showStatus:!1,stopOnHover:!1,children:[Object(l.jsxs)("div",{className:"data-box",children:[Object(l.jsx)("p",{className:"datainfo",children:"TOTALE POSITIVI"}),Object(l.jsx)("p",{className:"data c1",children:a.totale_positivi})]}),Object(l.jsxs)("div",{className:"data-box",children:[Object(l.jsx)("p",{className:"datainfo",children:"NUOVI POSITIVI"}),Object(l.jsx)("p",{className:"data c2",children:a.nuovi_positivi})]}),Object(l.jsxs)("div",{className:"data-box",children:[Object(l.jsx)("p",{className:"datainfo",children:"DECEDUTI"}),Object(l.jsx)("p",{className:"data c3",children:a.deceduti})]}),Object(l.jsxs)("div",{className:"data-box",children:[Object(l.jsx)("p",{className:"datainfo",children:"OSPEDALIZZATI"}),Object(l.jsx)("p",{className:"data c4",children:a.totale_ospedalizzati})]}),Object(l.jsxs)("div",{className:"data-box",children:[Object(l.jsx)("p",{className:"datainfo",children:"TERAPIA INTENSIVA"}),Object(l.jsx)("p",{className:"data c5",children:a.terapia_intensiva})]}),Object(l.jsxs)("div",{className:"data-box",children:[Object(l.jsx)("p",{className:"datainfo",children:"TAMPONI"}),Object(l.jsx)("p",{className:"data c5",children:a.tamponi})]})]})]})})})}),f=a(155),v=a(538),N=a(80),I=a(264),S=function(e){var t=e.data,a=e.labelY,i=["#eb4034","#eb9634","#ebdc34","#c1e010","#80eb07","#0dd41a","#44e37c","#31e8cd","#1ccfd9","#0fafdb","#0f79d6","#1444e0","#2f2196","#6e18c4","#6e18c4","#cf13bc","#c90e5c","#de0b35","#ff191d","#176b0e","#550e57"],n={anchor:"top-left",direction:"column",justify:!1,translateX:-50,translateY:-190,itemsSpacing:2,itemDirection:"left-to-right",itemWidth:80,itemHeight:12,itemOpacity:.75,symbolSize:10,symbolShape:"circle",symbolBorderColor:"rgba(0, 0, 0, .5)",effects:[{on:"hover",style:{itemBackground:"rgba(0, 0, 0, .03)",itemOpacity:1}}]};return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(I.a,{data:t,margin:{top:200,right:40,bottom:80,left:80},xScale:{format:"%d-%m-%Y",type:"time",precision:"day"},yScale:{type:"linear",stacked:!1,min:"auto",max:"auto"},xFormat:"time:%d-%m-%Y",curve:"monotoneX",axisBottom:{tickValues:"every month",tickSize:10,tickPadding:5,tickRotation:45,legend:"Data",legendOffset:60,legendPosition:"middle",format:"%Y-%b"},axisLeft:{tickSize:0,tickPadding:0,tickRotation:0,legend:a.replace("_"," "),legendOffset:-60,legendPosition:"middle"},enableGridX:!1,colors:i,enablePoints:!1,lineWidth:3,useMesh:!0,legends:t&&t.length<=11?[Object(N.a)(Object(N.a)({},n),{},{symbolSize:18,itemsSpacing:4})]:[Object(N.a)(Object(N.a)({},n),{},{symbolSize:10,itemsSpacing:2,translateX:0,data:t.slice(0,Math.floor(t.length/2)).map((function(e,a){return{id:e.id,label:e.id,color:i.slice(0,Math.floor(t.length/2))[a]}}))}),Object(N.a)(Object(N.a)({},n),{},{symbolSize:10,itemsSpacing:2,translateX:120,data:t.slice(Math.floor(t.length/2)).map((function(e,a){return{id:e.id,label:e.id,color:i.slice(Math.floor(t.length/2))[a]}}))})]})})},C=a(276),P=a.n(C),D=(a(468),function(){var e=Object(f.usePromiseTracker)().promiseInProgress;return Object(l.jsx)(l.Fragment,{children:e&&Object(l.jsx)("div",{className:"loading",children:Object(l.jsx)(P.a,{type:"RevolvingDot",color:"#2E8BC0",height:"100",width:"100"})})})}),_=a(543),z=a(539),T=a(544),y=a(540),k=a(545),A=a(546),w=function(e){var t=e.field,a=e.className,n=e.setField,c=e.setSelectedRegions,s=e.selectedRegions,o=(e.addedRegion,e.selectedChart),d=e.setTime,j=(e.time,new Date),b=new Date("2020/02/02"),h=Math.abs(j-b),u=-Math.ceil(h/864e5),m=Object(i.useState)([u,0]),O=Object(r.a)(m,2),p=O[0],x=O[1];function g(e){var t=String(e.getMonth()+1),a=String(e.getDate()),i=String(e.getFullYear());return t.length<2&&(t="0"+t),a.length<2&&(a="0"+a),"".concat(i,"-").concat(t,"-").concat(a)}return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(v.a,{className:a,item:!0,container:!0,xs:12,lg:4,justify:"center",alignItems:"center",direction:"column",children:["regioni"===o&&Object(l.jsxs)(z.a,{children:[Object(l.jsx)(T.a,{children:"Regione"}),Object(l.jsx)(y.a,{multiple:!0,id:"region-selector",style:{width:"10rem"},value:s,onChange:function(e){c((function(){return e.target.value}))},MenuProps:{getContentAnchorEl:function(){return null}},children:["Abruzzo","Basilicata","Calabria","Campania","Emilia-Romagna","Friuli Venezia Giulia","Lazio","Liguria","Lombardia","Marche","Molise","Piemonte","Puglia","Sardegna","Sicilia","Toscana","Umbria","Valle d'Aosta","Veneto","P.A. Trento","P.A. Bolzano"].map((function(e){return Object(l.jsx)(k.a,{value:e,children:e},e)}))})]}),Object(l.jsx)(T.a,{children:"Intervallo di Tempo"}),Object(l.jsx)(A.a,{value:p,onChange:function(e,t){return x(t)},onChangeCommitted:function(e,t){d((function(){var e=new Date,t=new Date;return e.setDate(e.getDate()+p[1]),t.setDate(t.getDate()+p[0]),{"date-start":g(t),"date-end":g(e)}}))},valueLabelDisplay:"auto","aria-labelledby":"range-slider",valueLabelFormat:function(e){var t=new Date;return t.setDate(t.getDate()+e),"".concat(t.getDate(),"/").concat(t.getMonth()+1,"/").concat(t.getFullYear())},ValueLabelComponent:function(e){var t=e.children,a=e.open,i=e.value;return Object(l.jsx)(_.a,{open:a,enterTouchDelay:0,placement:"top",title:i,children:t})},max:0,min:u}),Object(l.jsxs)(z.a,{children:[Object(l.jsx)(T.a,{htmlFor:"field",children:"Field"}),Object(l.jsxs)(y.a,{native:!0,onChange:function(e){n(e.target.value)},inputProps:{name:"field",id:"field"},value:t,children:[Object(l.jsx)("option",{value:"totale_positivi",children:"Totale Positivi"}),Object(l.jsx)("option",{value:"ricoverati_con_sintomi",children:"Ricoverati con Sintomi"}),Object(l.jsx)("option",{value:"terapia_intensiva",children:"Terapia Intensiva"}),Object(l.jsx)("option",{value:"totale_ospedalizzati",children:"Totale Ospedalizzati"}),Object(l.jsx)("option",{value:"isolamento_domiciliare",children:"Isolamento Domiciliare"}),Object(l.jsx)("option",{value:"variazione_totale_positivi",children:"Variazione Totale Positivi"}),Object(l.jsx)("option",{value:"nuovi_positivi",children:"Nuovi Positivi"}),Object(l.jsx)("option",{value:"dimessi_guariti",children:"Dimessi Guariti"}),Object(l.jsx)("option",{value:"deceduti",children:"Deceduti"}),Object(l.jsx)("option",{value:"totale_casi",children:"Totale Casi"}),Object(l.jsx)("option",{value:"tamponi",children:"Tamponi"}),Object(l.jsx)("option",{value:"casi_testati",children:"Casi Testati"}),Object(l.jsx)("option",{value:"ingressi_terapia_intensiva",children:"Ingerssi in Terapia Intensiva"}),Object(l.jsx)("option",{value:"totale_positivi_test_molecolare",children:"Totale Positivi Test Molecolare"}),Object(l.jsx)("option",{value:"totale_positivi_test_antigenico_rapido",children:"Totale Positivi Test Antigenico Rapido"}),Object(l.jsx)("option",{value:"tamponi_test_molecolare",children:"Tamponi Test Molecolare"}),Object(l.jsx)("option",{value:"tamponi_test_antigenico_rapido",children:"Tamponi Test Antigenico Rapido"})]})]})]})})},V=function(e){var t=e.onClick;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(v.a,{container:!0,item:!0,xs:12,justify:"center",alignItems:"center",className:"chart-select",children:[Object(l.jsx)(j.a,{variant:"contained",style:{margin:"1rem 1rem"},color:"primary",onClick:function(){return t("nazione")},children:"Grafico Andamento Nazionale"}),Object(l.jsx)(j.a,{variant:"contained",style:{margin:"1rem 1rem"},color:"primary",onClick:function(){return t("regioni")},children:"Grafico Andamento Regionale"})]})})},F=(a(470),function(){var e=Object(i.useState)({}),t=Object(r.a)(e,2),a=t[0],n=t[1],c=Object(i.useState)("totale_positivi"),s=Object(r.a)(c,2),o=s[0],d=s[1],j=Object(i.useState)("nazione"),b=Object(r.a)(j,2),h=b[0],u=b[1],m=Object(i.useState)([]),O=Object(r.a)(m,2),p=O[0],x=O[1],g=Object(i.useState)([]),N=Object(r.a)(g,2),I=N[0],C=N[1],P=Object(i.useState)(!1),_=Object(r.a)(P,2),z=_[0],T=_[1];return Object(i.useEffect)((function(){var e,t=function(e){var t=[],a=[],i=[],n=e[0].denominazione_regione||"Italia";e.map((function(e){var t=function(e){var t=String(e.getMonth()+1),a=String(e.getDate()),i=String(e.getFullYear());return t.length<2&&(t="0"+t),a.length<2&&(a="0"+a),"".concat(a,"-").concat(t,"-").concat(i)}(new Date(e.data+"Z"));return a.push(t),i.push(e[o]),!0}));for(var c=0;c<a.length;c++)t[c]={x:a[c],y:i[c]};return{formattedData:t,id:n}},i=[];T(!1),"nazione"===h?(e=(e="https://pgCOVAPI.herokuapp.com/api/".concat(h,"/")).concat("/?campo=".concat(o)),a&&a["date-start"]<a["date-end"]&&(e=e.concat("&dataInizio=".concat(a["date-start"],"&dataFine=").concat(a["date-end"]))),i.push(e)):"regioni"===h&&p.length>0&&p.forEach((function(t){e=(e=(e="https://pgCOVAPI.herokuapp.com/api/".concat(h,"/")).concat(t)).concat("/?campo=".concat(o)),a&&a["date-start"]<a["date-end"]&&(e=e.concat("&dataInizio=".concat(a["date-start"],"&dataFine=").concat(a["date-end"]))),i.push(e)})),function(e){var a=[],i=[];e.forEach((function(e){i.push(Object(f.trackPromise)(fetch(e).then((function(e){if(e.ok)return e.json()})).then((function(e){var i=t(e);a.push({id:i.id,color:"hsl(214, 70%, 50%)",data:i.formattedData})}))))})),Promise.all(i).then((function(){C(a)}))}(i)}),[o,a,p,h]),Object(i.useEffect)((function(){T(!0)}),[I]),Object(l.jsxs)(v.a,{container:!0,className:"chart-container-wrapper",children:[Object(l.jsx)(V,{onClick:u}),Object(l.jsxs)(v.a,{item:!0,xs:12,lg:8,className:"chart-container",children:[Object(l.jsx)(D,{}),z&&Object(l.jsx)(S,{data:I,labelY:o})]}),Object(l.jsx)(w,{className:"form-container",time:a,setTime:n,setField:d,setSelectedRegions:x,selectedRegions:p,selectedChart:h})]})}),M=(a(471),function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(s.a,{children:[Object(l.jsx)(d,{}),Object(l.jsxs)(o.c,{children:[Object(l.jsxs)(o.a,{path:"/",exact:!0,children:[Object(l.jsx)(O,{}),Object(l.jsx)(g,{})]}),Object(l.jsx)(o.a,{path:"/grafici",children:Object(l.jsx)(F,{})})]}),Object(l.jsx)(p,{})]})})});c.a.render(Object(l.jsx)(M,{}),document.getElementById("root"))}},[[472,1,2]]]);
//# sourceMappingURL=main.41aed00a.chunk.js.map