"use strict";(self.webpackChunkstrade_react_typescript=self.webpackChunkstrade_react_typescript||[]).push([[213],{7578:function(e,t,a){a.d(t,{JI:function(){return r},LB:function(){return l},dO:function(){return s}});var i=a(1668),n="".concat(i.x,"/coins"),s=function(e){return{url:"".concat(n,"/markets"),method:"GET",params:e}},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{include_platform:!1};return{url:"".concat(n,"/list"),method:"GET",params:e}},r=function(e,t){return{url:"".concat(n,"/").concat(e,"/market_chart"),method:"GET",params:t}}},2725:function(e,t,a){a.r(t),a.d(t,{default:function(){return Me}});var i=a(9439),n=a(2791),s=a(3168),l=a(3504),r=a(1229),o=a(5677),c=a(3959),d=a(184),u=function(){return(0,d.jsxs)(l.rU,{className:"footer__logo logo",to:"/","aria-label":"logo",children:[(0,d.jsx)(c.ZP,{height:27,children:(0,d.jsx)("img",{className:"footer__logo-icon logo__icon",src:r.Z,alt:"",width:"32",height:"27"})}),(0,d.jsx)(c.ZP,{height:10,children:(0,d.jsx)("img",{className:"footer__logo-text logo__text",src:o.Z,alt:"",width:"50",height:"10"})})]})},m=[{id:"info",title:"landing.footer.info.title",links:[{id:"about-us",title:"landing.footer.info.list.about-us"},{id:"fees",title:"landing.footer.info.list.fees"},{id:"token-listing",title:"landing.footer.info.list.token-listing"},{id:"strade-blog",title:"landing.footer.info.list.strade-blog"}]},{id:"legal",title:"landing.footer.legal.title",links:[{id:"terms-of-use",title:"landing.footer.legal.list.terms-of-use"},{id:"privacy-policy",title:"landing.footer.legal.list.privacy-policy"},{id:"trading-rules",title:"landing.footer.legal.list.trading-rules"},{id:"aml-policy",title:"landing.footer.legal.list.aml-policy"}]},{id:"service",title:"landing.footer.service.title",links:[{id:"exchange",title:"landing.footer.service.list.exchange"},{id:"wallet",title:"landing.footer.service.list.wallet"},{id:"buy-crypto",title:"landing.footer.service.list.buy-crypto"},{id:"swap",title:"landing.footer.service.list.swap"}]},{id:"support",title:"landing.footer.support.title",links:[{id:"faq",title:"landing.footer.support.list.faq"},{id:"help-center",title:"landing.footer.support.list.help-center"},{id:"verification",title:"landing.footer.support.list.verification"},{id:"api-documentation",title:"landing.footer.support.list.api-documentation"}]}],h=a(3540),_=function(){var e,t=(0,s.$)().t;function a(e){return e.toString().padStart(2,"0")}return(0,d.jsx)("footer",{className:"page-footer footer",children:(0,d.jsxs)("div",{className:"box",children:[(0,d.jsxs)("div",{className:"footer__row",children:[(0,d.jsxs)("div",{className:"footer__head",children:[(0,d.jsxs)("div",{className:"footer__head-wrap",children:[(0,d.jsx)(u,{}),(0,d.jsx)("div",{className:"footer__text",children:(0,d.jsx)("p",{children:(0,h.ZP)(t("landing.footer.footer-text-atfter-logo"))})})]}),(0,d.jsx)("div",{className:"footer__social",children:(0,d.jsx)("div",{className:"social"})})]}),(0,d.jsx)("div",{className:"footer__content",children:m.map((function(e){return(0,d.jsxs)("ul",{className:"footer__list",children:[(0,d.jsx)("li",{className:"footer__list-item",children:(0,d.jsx)("p",{className:"footer__list-title",children:t(e.title)})}),e.links.map((function(e){return(0,d.jsx)("li",{className:"footer__list-item",children:(0,d.jsx)(l.rU,{className:"footer__list-link",to:"/",children:t(e.title)})},e.id)}))]},e.id)}))})]}),(0,d.jsxs)("div",{className:"footer__bottom",children:[(0,d.jsxs)("div",{className:"footer__bottom-wrap",children:[(0,d.jsx)("div",{className:"footer__date",children:(e=new Date,[e.getFullYear(),a(e.getMonth()+1),a(e.getDate())].join("-")+" "+[a(e.getHours()),a(e.getMinutes())].join(":"))}),(0,d.jsx)("div",{className:"footer__volume"})]}),(0,d.jsx)("div",{className:"footer__copy",children:t("landing.footer.copyright",{year:(new Date).getFullYear()})})]})]})})},p=function(){return(0,d.jsxs)(l.rU,{className:"header__logo logo",to:"/","aria-label":"logo",children:[(0,d.jsx)("img",{className:"logo__icon",src:r.Z,alt:"",width:"32",height:"27"}),(0,d.jsx)("img",{className:"logo__text",src:o.Z,alt:"",width:"52",height:"11"})]})},g=a(2617),f={createModal:{show:!1,toggleModal:function(){}},loginModal:{show:!1,toggleModal:function(){}},menuMobile:{menuMobile:!1,toggleMenuMobile:function(){}}},x=n.createContext(f),v=a(8880),j=a(6871),b=a(8815),N=a(4700),w=function(){var e=(0,n.useContext)(g.V).auth,t=(0,s.$)().t,a=(0,n.useContext)(x).loginModal;return(0,d.jsxs)("div",{className:"menu__item-wrap",children:[(0,d.jsx)("li",{className:"menu__item",children:(0,d.jsx)(N.Z,{})}),!e.isAuth()&&(0,d.jsx)("li",{className:"menu__item",children:(0,d.jsx)("a",{className:"menu__link",href:"#",onClick:function(e){e.preventDefault(),a.toggleModal()},children:t("menu.Login")})})]})},k=function(){var e=(0,s.$)().t,t=(0,j.TH)(),a=v._.filter((function(e){return!v.b.includes(e.title)}));return(0,d.jsxs)("ul",{className:"menu__list",children:[(0,d.jsx)("li",{className:"menu__title",children:"Menu"}),(0,d.jsx)("div",{className:"menu__item-wrap text-transform-uppercase",children:a.map((function(a,i){return(0,d.jsx)("li",{className:"menu__item",children:(0,d.jsx)(l.rU,{className:"menu__link ".concat((0,b.A)(a.path,t.pathname)?"disable-link":""),to:a.path,children:e("menu.".concat(a.title))})},a.title)}))}),(0,d.jsx)(w,{})]})};var y=a.p+"static/media/account.880c1d5c85b53f84efed400d2d3660e0.svg",Z=function(){var e,t=(0,n.useContext)(g.V).auth,a=(0,s.$)().t,l=(0,n.useState)(!1),r=(0,i.Z)(l,2),o=r[0],c=r[1];return(0,d.jsxs)("div",{className:"landing-header__user-dropdown dropdown-menu landing-header__user-dropdown "+(o?"dropdown-menu--active":""),children:[(0,d.jsxs)("div",{className:"dropdown-menu__user-info",onClick:function(e){c(!o)},children:[(0,d.jsx)("img",{className:"dropdown-menu__user-icon",src:y,width:"48",height:"48",alt:"Account"}),(0,d.jsxs)("div",{className:"dropdown-menu__user-name",children:[null===(e=t.user)||void 0===e?void 0:e.email,(0,d.jsx)("i",{className:"arrow down arrow-landing"})]})]}),(0,d.jsx)("div",{className:"dropdown-menu__menu",children:(0,d.jsx)("div",{className:"dropdown-menu__menu-list landing-menu__menu-list",children:(0,d.jsx)("a",{className:"dropdown-menu__menu-item",href:"#!",onClick:function(e){e.preventDefault(),t.logout()},children:a("menu.Logout")})})})]})},S=function(){var e=(0,n.useContext)(g.V).auth,t=(0,s.$)().t,a=(0,n.useContext)(x),i=a.menuMobile,l=a.createModal;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("nav",{className:"header__menu menu"+(i.menuMobile?" menu--active":""),children:(0,d.jsx)(k,{})}),e.isAuth()?(0,d.jsxs)("div",{className:"landing-header__user-menu-wrap",children:[(0,d.jsx)("div",{className:"landing-header__notify"}),(0,d.jsx)(Z,{})]}):"",!e.isAuth()&&(0,d.jsx)("a",{className:"menu__btn btn btn--green js-modal-open",href:"#!","data-modal":"modal-2",onClick:function(e){e.preventDefault(),l.toggleModal()},children:t("menu.CreateAccount")}),(0,d.jsx)("button",{className:"menu__toggle"+(i.menuMobile?" menu__toggle--active":""),type:"button",onClick:i.toggleMenuMobile,children:(0,d.jsx)("span",{className:"menu__toggle-line"})})]})},C=function(){return(0,d.jsx)("header",{className:"page-header header",children:(0,d.jsx)("div",{className:"box",children:(0,d.jsxs)("div",{className:"header__content",children:[(0,d.jsx)(p,{}),(0,d.jsx)("div",{className:"header__nav",children:(0,d.jsx)(S,{})})]})})})},M=function(){var e=(0,s.$)().t,t=(0,n.useContext)(x).createModal;return(0,d.jsxs)("div",{className:"hero__content",children:[(0,d.jsx)("div",{className:"hero__subtitle",children:e("landing.hero.content.subTitle")}),(0,d.jsx)("h1",{className:"hero__title",children:e("landing.hero.content.title")}),(0,d.jsx)("div",{className:"hero__descr",children:(0,d.jsx)("p",{children:e("landing.hero.content.description")})}),(0,d.jsx)("button",{className:"hero__btn btn btn--green",onClick:t.toggleModal,children:e("landing.hero.content.free-account")})]})};var P=a.p+"static/media/wallet-icon.63c8090201245a24a0f671c701ed9b60.svg";var T=a.p+"static/media/swap-icon.e5293704b384c8b078e78603947fd628.svg";var D=a.p+"static/media/dex-icon.f2181bb39047c317d9fdc59427cba06b.svg";var E,$=[{id:"wallet",image:P,title:"landing.hero.features.wallet.title",desciption:"landing.hero.features.wallet.description"},{id:"swap",image:T,title:"landing.hero.features.swap.title",desciption:"landing.hero.features.swap.description"},{id:"dex",image:D,title:"landing.hero.features.dex.title",desciption:"landing.hero.features.dex.description"},{id:"license",image:a.p+"static/media/build-icon.6ab22a004e4f1ff8195979ecb5f706d2.svg",title:"landing.hero.features.license.title",desciption:"landing.hero.features.license.description"}],U=function(){var e=(0,s.$)().t;return(0,d.jsx)("section",{className:"features",children:(0,d.jsx)("ul",{className:"features__list",children:$.map((function(t){return(0,d.jsxs)("li",{className:"features__item",children:[(0,d.jsx)(c.ZP,{height:"20",once:!0,children:(0,d.jsx)("img",{width:"20px",height:"20px",className:"features__icon",src:t.image,alt:""})}),(0,d.jsx)("h2",{className:"features__title",children:(0,h.ZP)(e(t.title))}),(0,d.jsx)("p",{className:"features__descr",children:e(t.desciption)})]},t.id)}))})})},A=a(1668),F="".concat(A.x,"/simple");!function(e){e.YES="true",e.NO="false"}(E||(E={}));var H=a(6282),q=a(2394),G=a.p+"static/media/visa.0de74ed7128ef67ea43d.webp",L=a.p+"static/media/stripe.98d97be7836d27550402.webp",R=[{key:"visa",image:G},{key:"paypal",image:a.p+"static/media/paypal.499284fe22a867d4c6ac.webp"},{key:"stripe",image:L}],B=[{value:"bitcoin",label:"BTC"},{value:"ethereum",label:"ETH"},{value:"ripple",label:"XRP"}],O=["bitcoin","ethereum","ripple"],V=a(6789),I=function(e){var t=0;if(e>1&&(t=6),e>1e5&&(t=2),e<1&&e>0){for(var a=e;a<1;)t++,a*=10;t++}return e.toFixed(t)},W=function(){var e=(0,s.$)().t,t=(0,n.useContext)(x).createModal,a=(0,n.useState)("visa"),l=(0,i.Z)(a,2),r=l[0],o=l[1],c=(0,n.useState)(""),u=(0,i.Z)(c,2),m=u[0],h=u[1],_=(0,n.useState)(""),p=(0,i.Z)(_,2),g=p[0],f=p[1],v=(0,n.useState)(B[0]),j=(0,i.Z)(v,2),b=j[0],N=j[1],w=(0,n.useState)(V.A[0]),k=(0,i.Z)(w,2),y=k[0],Z=k[1],S=(0,n.useState)(!1),C=(0,i.Z)(S,2),M=C[0],P=C[1],T=(0,n.useMemo)((function(){return e={vs_currencies:y.value.toString(),ids:O.join()},{url:"".concat(F,"/price"),method:"GET",params:e};var e}),[y]),D=(0,H.Z)(T),E=D.response,$=D.sendData,U=D.loading;(0,n.useEffect)((function(){U||$(T)}),[T]);var A=(0,n.useMemo)((function(){P(!1);var e={};if(null!==E&&void 0!==E&&E.data){O.forEach((function(t){e[t]=null===E||void 0===E?void 0:E.data[t][y.value]})),m?(h(m),f(String(I(Number(m)*e[b.value])))):(f(""),h(""));var t=setTimeout((function(){P(!0),clearTimeout(t)}),1500)}return e}),[E]);function G(e){o(e.target.getAttribute("data-key"))}return(0,d.jsx)("div",{className:"hero__purchase",children:(0,d.jsxs)("div",{className:"purchase",children:[(0,d.jsxs)("div",{className:"purchase__converter converter",children:[(0,d.jsx)("h2",{className:"converter__title",children:e("landing.hero.purchase.title")}),(0,d.jsxs)("div",{className:"converter__inner",children:[(0,d.jsx)("div",{className:"converter__item-title",children:e("landing.hero.purchase.buy")}),(0,d.jsxs)("div",{className:"converter__item",children:[(0,d.jsx)("input",{className:"converter__input",type:"number",value:m,placeholder:"0,00",onChange:function(e){if(!e.target.value)return f(""),void h("");h(e.target.value),f(String(I(Number(e.target.value)*A[b.value])))},disabled:!M}),(0,d.jsx)("div",{className:"converter__coin",children:(0,d.jsx)("div",{className:"converter__coin-name",children:(0,d.jsx)(q.Z,{values:B,selected:b,onChange:function(e){N(e),m?(h(m),f(String(I(Number(m)*A[e.value])))):(f(""),h(""))},isDisabled:!M})})})]}),(0,d.jsx)("div",{className:"converter__item-title",children:e("landing.hero.purchase.for")}),(0,d.jsxs)("div",{className:"converter__item",children:[(0,d.jsx)("input",{className:"converter__input",value:g,type:"number",placeholder:"0,00",onChange:function(e){if(!e.target.value)return f(""),void h("");f(e.target.value),h(String(I(Number(e.target.value)/A[b.value])))},disabled:!M}),(0,d.jsx)("div",{className:"converter__coin",children:(0,d.jsx)("div",{className:"converter__coin-name",children:(0,d.jsx)(q.Z,{values:V.A,selected:y,onChange:function(e){Z(e)},isDisabled:!M})})})]})]})]}),(0,d.jsx)("div",{className:"purchase__payment-method payment-method",children:R.map((function(e){return(0,d.jsx)("div",{className:"payment-method__item"+(e.key===r?" payment-method__item--active":""),onClick:G,"data-key":e.key,children:(0,d.jsx)("img",{className:"filter--gray",src:e.image,width:"66",height:"25","data-key":e.key,alt:e.key})},e.key)}))}),(0,d.jsx)("button",{className:"purchase__btn btn btn--blue",onClick:t.toggleModal,children:e("landing.hero.purchase.buy-item",{item:b.label})})]})})},Y=function(){return(0,d.jsx)("section",{className:"hero",children:(0,d.jsx)("div",{className:"box",children:(0,d.jsxs)("div",{className:"hero__inner",children:[(0,d.jsx)(M,{}),(0,d.jsx)(W,{}),(0,d.jsx)(U,{})]})})})},J=a.p+"static/media/bg-dots.b40ca7f0c2be3dd1f52b.webp",X=a(3433),z=a(7578),K=a(3513),Q=a(6186),ee=a(3813),te=[{id:"default-1",symbol:"----------------",name:"----------------",image:"",current_price:0,market_cap:0,market_cap_rank:0,fully_diluted_valuation:0,total_volume:0,high_24h:0,low_24h:0,price_change_24h:0,price_change_percentage_24h:0,market_cap_change_24h:0,market_cap_change_percentage_24h:0,circulating_supply:0,total_supply:0,max_supply:0,ath:0,ath_change_percentage:0,ath_date:"----------------",atl:0,atl_change_percentage:0,atl_date:"----------------",roi:null,last_updated:"----------------"},{id:"default-2",symbol:"----------------",name:"----------------",image:"",current_price:0,market_cap:0,market_cap_rank:0,fully_diluted_valuation:0,total_volume:0,high_24h:0,low_24h:0,price_change_24h:0,price_change_percentage_24h:0,market_cap_change_24h:0,market_cap_change_percentage_24h:0,circulating_supply:0,total_supply:0,max_supply:0,ath:0,ath_change_percentage:0,ath_date:"----------------",atl:0,atl_change_percentage:0,atl_date:"----------------",roi:null,last_updated:"----------------"},{id:"default-3",symbol:"----------------",name:"----------------",image:"",current_price:0,market_cap:0,market_cap_rank:0,fully_diluted_valuation:0,total_volume:0,high_24h:0,low_24h:0,price_change_24h:0,price_change_percentage_24h:0,market_cap_change_24h:0,market_cap_change_percentage_24h:0,circulating_supply:0,total_supply:0,max_supply:0,ath:0,ath_change_percentage:0,ath_date:"----------------",atl:0,atl_change_percentage:0,atl_date:"----------------",roi:null,last_updated:"----------------"},{id:"default-4",symbol:"----------------",name:"----------------",image:"",current_price:0,market_cap:0,market_cap_rank:0,fully_diluted_valuation:0,total_volume:0,high_24h:0,low_24h:0,price_change_24h:0,price_change_percentage_24h:0,market_cap_change_24h:0,market_cap_change_percentage_24h:0,circulating_supply:0,total_supply:0,max_supply:0,ath:0,ath_change_percentage:0,ath_date:"----------------",atl:0,atl_change_percentage:0,atl_date:"----------------",roi:null,last_updated:"----------------"},{id:"default-5",symbol:"----------------",name:"----------------",image:"",current_price:0,market_cap:0,market_cap_rank:0,fully_diluted_valuation:0,total_volume:0,high_24h:0,low_24h:0,price_change_24h:0,price_change_percentage_24h:0,market_cap_change_24h:0,market_cap_change_percentage_24h:0,circulating_supply:0,total_supply:0,max_supply:0,ath:0,ath_change_percentage:0,ath_date:"----------------",atl:0,atl_change_percentage:0,atl_date:"----------------",roi:null,last_updated:"----------------"}],ae=function(){var e=(0,s.$)().t,t=(0,z.dO)({vs_currency:"usd",per_page:5,page:1}),a=(0,H.Z)(t).response,l=(0,n.useState)(!0),r=(0,i.Z)(l,2),o=r[0],c=r[1],u=(0,n.useMemo)((function(){c(!0);var e=null!==a&&void 0!==a&&a.data?(0,X.Z)(a.data):te,t=setTimeout((function(){c(!1),clearTimeout(t)}),1500);return e}),[a]),m=[{id:"name",name:e("markets.columns.name"),selector:function(e){return e.name},cell:function(e){return(0,d.jsxs)("div",{className:"col-favourites",children:[e.image?(0,d.jsx)("img",{src:e.image,width:"40px",height:"40px",style:{marginRight:"10px",width:"40px",height:"40px"},alt:e.id}):(0,d.jsx)("div",{style:{width:"40px",height:"40px"}}),(0,d.jsx)("p",{className:"col-info",children:e.name})]})},sortable:!0,minWidth:"20%",maxWidth:"30%"},{id:"current_price",name:e("markets.columns.last-price"),selector:function(e){return e.current_price},cell:function(e){return(0,d.jsx)("p",{className:"col-info",children:(0,d.jsx)("span",{className:(0,Q.p)(e.price_change_24h),children:e.current_price})})},sortable:!0},{id:"price_change_percentage_24h",name:e("markets.columns.24h-\u0441hange"),selector:function(e){return e.price_change_percentage_24h},cell:function(e){return(0,d.jsx)("p",{className:"col-info",children:(0,d.jsxs)("span",{className:(0,Q.p)(e.price_change_percentage_24h),children:[e.price_change_percentage_24h," %"]})})},sortable:!0},{id:"high_24h",name:e("markets.columns.24h-high"),selector:function(e){return e.high_24h},cell:function(e){return(0,d.jsx)("p",{className:"col-info",children:(0,d.jsx)("span",{className:(0,Q.p)(e.high_24h),children:e.high_24h})})},sortable:!0},{id:"low_24h",name:e("markets.columns.24h-low"),selector:function(e){return e.low_24h},cell:function(e){return(0,d.jsx)("p",{className:"col-info",children:(0,d.jsx)("span",{className:(0,Q.p)(e.low_24h),children:e.low_24h})})},sortable:!0},{id:"market_cap",name:e("markets.columns.market-cap"),selector:function(e){return e.market_cap},sortable:!0},{id:"total_volume",name:e("markets.columns.24h-volume"),selector:function(e){return e.total_volume},sortable:!0},{id:"chart",name:"",cell:function(e){return(0,d.jsx)(d.Fragment,{children:!String(e.id).includes("default")&&(0,d.jsx)(ee.Z,{coinId:e.id,color:(0,Q.L)(e.price_change_percentage_24h),width:140,height:70})})},sortable:!1}];return(0,d.jsx)(K.ZP,{className:"markets__table table",noDataComponent:e("landing.market-info.table-have-not-data"),columns:m,data:u,disabled:o,customStyles:{rows:{style:{minHeight:"71px"}},tableWrapper:{style:{minHeight:"406px"}}}})},ie=function(){var e=(0,s.$)().t;return(0,d.jsxs)("section",{className:"markets-info",children:[(0,d.jsx)("div",{className:"markets-info__bg",children:(0,d.jsx)("img",{className:"markets-info__bg-img",src:J,alt:""})}),(0,d.jsx)("div",{className:"box-custom",children:(0,d.jsxs)("div",{className:"markets-info__inner",children:[(0,d.jsx)("div",{className:"markets-info__subtitle subtitle",children:e("landing.market-info.subtitle").toUpperCase()}),(0,d.jsx)("h2",{className:"markets-info__title title",children:e("landing.market-info.title")}),(0,d.jsx)("div",{className:"markets-info__content",children:(0,d.jsx)("div",{className:"markets-info__table custom-scroll",children:(0,d.jsx)(ae,{})})}),(0,d.jsx)("div",{className:"markets-info__link-wrap",children:(0,d.jsxs)(l.rU,{className:"markets-info__link",to:"/markets",children:[e("landing.market-info.view-all"),(0,d.jsx)("svg",{className:"markets-info__link-icon",width:"20",height:"12",children:(0,d.jsx)("use",{xlinkHref:"#arrow-right-icon"})})]})})]})})]})},ne=a.p+"static/media/security.42cda51067227c1ead48.webp",se=a.p+"static/media/deposit.06b775be0242a57e960e.webp",le=a.p+"static/media/support.298a394b68f026c831e1.webp",re=[{id:"security",image:ne,title:"landing.privileges.list.security.title",subtitle:"landing.privileges.list.security.subtitle",description:"landing.privileges.list.security.description"},{id:"deposit",image:se,title:"landing.privileges.list.deposit.title",subtitle:"landing.privileges.list.deposit.subtitle",description:"landing.privileges.list.deposit.description"},{id:"liquid",image:a.p+"static/media/liquid.0881c22634d82fe91f25.webp",title:"landing.privileges.list.liquid.title",subtitle:"landing.privileges.list.liquid.subtitle",description:"landing.privileges.list.liquid.description"},{id:"support",image:le,title:"landing.privileges.list.support.title",subtitle:"landing.privileges.list.support.subtitle",description:"landing.privileges.list.support.description"}],oe=function(){var e=(0,s.$)().t;return(0,d.jsx)("ul",{className:"privileges__list privileges-list",children:re.map((function(t){return(0,d.jsxs)("li",{className:"privileges-list__item",children:[(0,d.jsx)("div",{className:"privileges-list__picture",children:(0,d.jsx)(c.ZP,{height:190,children:(0,d.jsx)("img",{width:"190px",height:"190px",className:"privileges-list__img",src:t.image,alt:t.id})})}),(0,d.jsx)("div",{className:"privileges-list__subtitle",children:e(t.subtitle).toUpperCase()}),(0,d.jsx)("div",{className:"privileges-list__title",children:e(t.title)}),(0,d.jsx)("div",{className:"privileges-list__descr",children:(0,d.jsx)("p",{children:e(t.description)})})]},t.id)}))})},ce=function(){var e=(0,s.$)().t;return(0,d.jsx)("section",{className:"privileges",children:(0,d.jsxs)("div",{className:"box",children:[(0,d.jsx)("div",{className:"privileges__subtitle subtitle",children:e("landing.privileges.subtitle").toLocaleUpperCase()}),(0,d.jsx)("h2",{className:"privileges__title title",children:e("landing.privileges.title")}),(0,d.jsx)(oe,{})]})})},de=a.p+"static/media/trade-desktop.b88ee98c45572634e2b0.png",ue=a.p+"static/media/trade-desktop@2x.c78ce8f4f42fe1c3bb49.png",me=a.p+"static/media/trade-desktop.11dc576499bfbf61568c.webp",he=a.p+"static/media/trade-desktop@2x.858272ccc5758a3a8a00.webp",_e=a.p+"static/media/trade-tablet.e7aa8077231a5336bb7b.png",pe=a.p+"static/media/trade-tablet@2x.06a9bd478addbda44c03.png",ge=a.p+"static/media/trade-tablet.d46e36d80b4f4a5c64dd.webp",fe=a.p+"static/media/trade-tablet@2x.c4a07a0ffcaea151791a.webp",xe=a.p+"static/media/trade-mobile.a8f82b3ed09c31e8585c.png",ve=a.p+"static/media/trade-mobile@2x.35e9e3cfc8ea21e972f4.png",je=a.p+"static/media/trade-mobile.1bc44c87369b7796f593.webp",be=a.p+"static/media/trade-mobile@2x.26b081b71d62e04b88b7.webp",Ne=function(){var e=(0,s.$)().t;return(0,d.jsxs)("section",{className:"trade-info",children:[(0,d.jsxs)("div",{className:"box",children:[(0,d.jsx)("h2",{className:"trade-info__title title",children:e("landing.trade-info.title")}),(0,d.jsx)("div",{className:"trade-info__descr",children:(0,d.jsx)("p",{children:(0,h.ZP)(e("landing.trade-info.description"))})})]}),(0,d.jsx)("div",{className:"trade-info__picture",children:(0,d.jsx)(c.ZP,{height:144,once:!0,children:(0,d.jsxs)("picture",{children:[(0,d.jsx)("source",{type:"image/webp",media:"(min-width: 1200px)",srcSet:"".concat(me,", ").concat(he," 2x")}),(0,d.jsx)("source",{type:"image/webp",media:"(min-width: 768px)",srcSet:"".concat(ge,", ").concat(fe," 2x")}),(0,d.jsx)("source",{type:"image/webp",srcSet:"".concat(je,", ").concat(be," 2x")}),(0,d.jsx)("source",{media:"(min-width: 1200px)",srcSet:"".concat(de,", ").concat(ue," 2x")}),(0,d.jsx)("source",{media:"(min-width: 768px)",srcSet:"".concat(_e,", ").concat(pe," 2x")}),(0,d.jsx)("img",{className:"trade-info__image",src:xe,srcSet:ve,alt:"trade",width:"300",height:"144"})]})})})]})},we=function(){return(0,d.jsxs)("main",{className:"page-main",children:[(0,d.jsx)(Y,{}),(0,d.jsx)(c.ZP,{height:200,once:!0,children:(0,d.jsx)(ie,{})}),(0,d.jsx)(c.ZP,{height:200,children:(0,d.jsx)(Ne,{})}),(0,d.jsx)(c.ZP,{height:200,children:(0,d.jsx)(ce,{})})]})},ke=a(6673),ye=function(e){return/\S+@\S+\.\S+/.test(e)},Ze=function(){var e=(0,n.useContext)(g.V).auth,t=(0,n.useContext)(x).createModal,a=(0,s.$)().t,l=(0,n.useState)("password"),r=(0,i.Z)(l,2),o=r[0],c=r[1],u=(0,n.useState)("show-icon show-icon--line"),m=(0,i.Z)(u,2),h=m[0],_=m[1],p=(0,n.useState)(""),f=(0,i.Z)(p,2),v=f[0],j=f[1],b=(0,n.useState)(""),N=(0,i.Z)(b,2),w=N[0],k=N[1],y=(0,n.useState)(!1),Z=(0,i.Z)(y,2),S=Z[0],C=Z[1],M=(0,n.useState)(""),P=(0,i.Z)(M,2),T=P[0],D=P[1];function E(e){C(!1),D(""),j(""),k(""),t.toggleModal()}return(0,d.jsxs)("div",{className:"modal"+(t.show?" modal--active":" "),children:[(0,d.jsx)("div",{className:"modal__inner modal--exit",onClick:E}),(0,d.jsxs)("div",{className:"modal__content",children:[(0,d.jsx)("div",{className:"modal__close-btn modal--exit",onClick:E}),(0,d.jsx)("div",{className:"modal__title",children:a("landing.modals.create.title").toUpperCase()}),(0,d.jsx)("div",{className:"modal__form",children:(0,d.jsxs)("form",{className:"form",method:"post",onSubmit:function(i){if(i.preventDefault(),C(!1),D(""),!ye(w))return C(!0),void D(a("error.global.not-valid-email"));if(!v)return C(!0),void D(a("error.global.empty-password"));if(w&&v){var n=(0,ke.v0)();(0,ke.Xb)(n,w,v).then((function(a){var i=a.user;e.login(i),j(""),k(""),t.toggleModal()})).catch((function(e){C(!0),D(a("error.firebase."+e.code.replaceAll("/","-")))}))}},children:[(0,d.jsxs)("div",{className:"form__group modal__form-group",children:[(0,d.jsx)("label",{className:"form__label modal__form-label",htmlFor:"email",children:a("landing.modals.create.form.email")}),(0,d.jsx)("input",{className:"form__input modal__form-input "+(S?"error__input":""),value:w,onChange:function(e){k(e.target.value)},type:"email",id:"email",placeholder:a("landing.modals.create.form.email"),autoComplete:"username"})]}),(0,d.jsxs)("div",{className:"form__group modal__form-group",children:[(0,d.jsx)("label",{className:"form__label modal__form-label",htmlFor:"password",children:a("landing.modals.create.form.password")}),(0,d.jsxs)("div",{className:"form__input-wrap modal__form-input-wrap",children:[(0,d.jsx)("input",{className:"form__input modal__form-input "+(S?"error__input":""),value:v,onChange:function(e){j(e.target.value)},type:o,id:"password",placeholder:a("landing.modals.create.form.password"),autoComplete:"current-password"}),(0,d.jsxs)("div",{className:"show-icon-wrap js-show-icon",onClick:function(e){_("password"===o?"show-icon show-icon--line visually-hidden":"show-icon show-icon--line"),c("password"===o?"text":"password")},children:[(0,d.jsx)("svg",{className:"show-icon",width:"20",height:"20",children:(0,d.jsx)("use",{xlinkHref:"#eye-icon"})}),(0,d.jsx)("svg",{className:h,width:"20",height:"20",children:(0,d.jsx)("use",{xlinkHref:"#line-icon"})})]})]})]}),(0,d.jsx)("div",{className:"modal__text-wrap error__wrap",children:S&&(0,d.jsx)("div",{className:"modal__text error__modal__text",children:T})}),(0,d.jsx)("button",{className:"form__submit modal__form-submit btn btn--blue",type:"submit",children:a("landing.modals.create.sign-up")}),(0,d.jsx)("div",{className:"modal__text-wrap text-center",children:(0,d.jsxs)("div",{className:"modal__text",children:[(0,d.jsx)("p",{children:a("landing.modals.create.description")}),(0,d.jsxs)("p",{children:[(0,d.jsx)("a",{className:"modal__link",href:"/#",children:a("landing.modals.create.terms-of-service")})," & ",(0,d.jsx)("a",{className:"modal__link",href:"/#",children:a("landing.modals.create.privacy-policy")})]})]})})]})})]})]})},Se=function(){var e=(0,n.useState)(!1),t=(0,i.Z)(e,2),a=t[0],s=t[1];return{showModal:a,toggleShowModal:function(){s(!a)}}},Ce=function(){var e=(0,n.useContext)(g.V).auth,t=(0,n.useContext)(x),a=t.loginModal,l=t.createModal,r=(0,s.$)().t,o=(0,n.useState)("password"),c=(0,i.Z)(o,2),u=c[0],m=c[1],h=(0,n.useState)("show-icon show-icon--line"),_=(0,i.Z)(h,2),p=_[0],f=_[1],v=(0,n.useState)(""),j=(0,i.Z)(v,2),b=j[0],N=j[1],w=(0,n.useState)(""),k=(0,i.Z)(w,2),y=k[0],Z=k[1],S=(0,n.useState)(!1),C=(0,i.Z)(S,2),M=C[0],P=C[1],T=(0,n.useState)(""),D=(0,i.Z)(T,2),E=D[0],$=D[1];function U(e){P(!1),$(""),N(""),Z(""),a.toggleModal()}return(0,d.jsxs)("div",{className:"modal"+(a.show?" modal--active":" "),children:[(0,d.jsx)("div",{className:"modal__inner modal--exit",onClick:U}),(0,d.jsxs)("div",{className:"modal__content",children:[(0,d.jsx)("div",{className:"modal__close-btn modal--exit",onClick:U}),(0,d.jsx)("div",{className:"modal__title",children:r("landing.modals.login.title")}),(0,d.jsx)("div",{className:"modal__form",children:(0,d.jsxs)("form",{className:"form",method:"post",onSubmit:function(t){if(t.preventDefault(),P(!1),$(""),!ye(y))return P(!0),void $(r("error.global.not-valid-email"));if(!b)return P(!0),void $(r("error.global.empty-password"));if(y&&b){var i=(0,ke.v0)();(0,ke.e5)(i,y,b).then((function(t){var i=t.user;e.login(i),N(""),Z(""),a.toggleModal()})).catch((function(e){P(!0),$(r("error.firebase."+e.code.replaceAll("/","-")))}))}},children:[(0,d.jsxs)("div",{className:"form__group modal__form-group",children:[(0,d.jsx)("label",{className:"form__label modal__form-label",htmlFor:"email-1",children:r("landing.modals.login.form.email")}),(0,d.jsx)("input",{className:"form__input modal__form-input "+(M?"error__input":""),value:y,onChange:function(e){Z(e.target.value)},type:"email",id:"email-1",placeholder:r("landing.modals.login.form.email"),autoComplete:"username"})]}),(0,d.jsxs)("div",{className:"form__group modal__form-group",children:[(0,d.jsx)("label",{className:"form__label modal__form-label",htmlFor:"password-1",children:r("landing.modals.login.form.password")}),(0,d.jsxs)("div",{className:"form__input-wrap modal__form-input-wrap",children:[(0,d.jsx)("input",{className:"form__input modal__form-input "+(M?"error__input":""),value:b,onChange:function(e){N(e.target.value)},type:u,id:"password-1",placeholder:r("landing.modals.login.form.password"),autoComplete:"current-password"}),(0,d.jsxs)("div",{className:"show-icon-wrap js-show-icon",onClick:function(e){f("password"===u?"show-icon show-icon--line visually-hidden":"show-icon show-icon--line"),m("password"===u?"text":"password")},children:[(0,d.jsx)("svg",{className:"show-icon",width:"20",height:"20",children:(0,d.jsx)("use",{xlinkHref:"#eye-icon"})}),(0,d.jsx)("svg",{className:p,width:"20",height:"20",children:(0,d.jsx)("use",{xlinkHref:"#line-icon"})})]})]})]}),(0,d.jsx)("div",{className:"error__wrap",children:M&&(0,d.jsx)("div",{className:"modal__text error__modal__text",children:E})}),(0,d.jsx)("button",{className:"form__submit modal__form-submit btn btn--blue",type:"submit",children:r("landing.modals.login.log-in")}),(0,d.jsx)("div",{className:"modal__text-wrap text-center",children:(0,d.jsxs)("div",{className:"modal__text",children:[r("landing.modals.login.have-account")," ",(0,d.jsxs)("a",{className:"modal__link modal--exit",href:"#!","data-modal":"modal-2",onClick:function(e){e.preventDefault(),P(!1),$(""),a.toggleModal(),l.toggleModal()},children:[" ",r("landing.modals.login.sign-up")]})]})})]})})]})]})},Me=function(){var e=Se(),t=e.showModal,a=e.toggleShowModal,s=Se(),l=s.showModal,r=s.toggleShowModal,o=(0,n.useState)(!1),u=(0,i.Z)(o,2),m=u[0],h=u[1];return(0,d.jsx)(x.Provider,{value:{createModal:{show:l,toggleModal:r},loginModal:{show:t,toggleModal:a},menuMobile:{menuMobile:m,toggleMenuMobile:function(){h(!m)}}},children:(0,d.jsx)("div",{className:"page",children:(0,d.jsxs)("div",{className:"page__body"+(l||t||m?" no-scroll":""),children:[(0,d.jsx)(C,{}),(0,d.jsx)(we,{}),(0,d.jsx)(c.ZP,{height:200,children:(0,d.jsx)(_,{})}),(0,d.jsx)(Ze,{}),(0,d.jsx)(Ce,{})]})})})}},6789:function(e,t,a){a.d(t,{A:function(){return i}});var i=[{value:"usd",label:"USD"},{value:"rub",label:"RUB"}];i[0]},3813:function(e,t,a){a.d(t,{Z:function(){return x}});var i=a(9439),n=a(2791),s=a(812),l=a(2891),r=a(2955),o=a(7578),c=a(5861),d=a(7757),u=a.n(d),m=a(4569),h=a.n(m),_=function(e){var t=(0,n.useState)(),a=(0,i.Z)(t,2),s=a[0],l=a[1],r=(0,n.useState)(),o=(0,i.Z)(r,2),d=o[0],m=o[1],_=(0,n.useState)("GET"===e.method||"get"===e.method),p=(0,i.Z)(_,2),g=p[0],f=p[1],x=function(){var e=(0,c.Z)(u().mark((function e(t){var a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h().request(t);case 3:a=e.sent,l(a),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),m(e.t0);case 10:return e.prev=10,f(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,c.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,n.useEffect)((function(){"GET"!==e.method&&"get"!==e.method||x(e)}),[e]),{response:s,error:d,loading:g,sendData:v}},p=a(4864),g=a(4278),f=a(184),x=function(e){var t=e.coinId,a=e.color,c=e.width,d=void 0===c?140:c,u=e.height,m=void 0===u?70:u,h=(0,n.useContext)(p.tE).currency,x=(0,n.useMemo)((function(){return(0,o.JI)(t,{vs_currency:h.currency,days:"1"})}),[h.currency]),v=_(x).response,j=(0,n.useState)(!1),b=(0,i.Z)(j,2),N=b[0],w=b[1],k=(0,n.useMemo)((function(){var e,t;w(!1);var a=[];null===v||void 0===v||null===(e=v.data)||void 0===e||null===(t=e.prices)||void 0===t||t.forEach((function(e){a.push({x:e[0],y:e[1]})}));var i=setTimeout((function(){w(!0),clearTimeout(i)}),1500);return a}),[v]);return(0,f.jsx)(f.Fragment,{children:N?(0,f.jsxs)(s.T,{width:d,height:m,data:k,margin:{top:10,right:30,left:0,bottom:10},children:[(0,f.jsx)(l.B,{hide:!0,type:"number",domain:["auto","auto"]}),(0,f.jsx)(r.u,{type:"monotone",dataKey:"y",stroke:a,fill:a})]}):(0,f.jsx)(g.Z,{isRevert:!0,style:{height:"24px",width:"24px"}})})}},4864:function(e,t,a){a.d(t,{tE:function(){return r}});a(6789);var i,n=a(9334),s=a(2791);!function(e){e.category="category",e.search="search",e.platform="platform",e.coins="coins",e.lastPrice="lastPrice"}(i||(i={}));var l={platforms:{list:{},addPlatform:function(e){}},filters:{list:{},addFilter:function(e){}},coins:{list:[],removeCoin:function(e){},addCoin:function(e){}},currency:{currency:n.OM,changeCurrency:function(e){}}},r=s.createContext(l)},4278:function(e,t,a){a.d(t,{Z:function(){return n}});var i=a(184),n=function(e){var t=e.isRevert,a=void 0!==t&&t,n=e.style,s=void 0===n?{}:n,l=a?"loader loader-revert":"loader";return(0,i.jsx)("div",{className:"wrap-loader",children:(0,i.jsx)("span",{className:l,style:s})})}},1668:function(e,t,a){a.d(t,{x:function(){return i}});var i="https://api.coingecko.com/api/v3"},6186:function(e,t,a){a.d(t,{L:function(){return n},p:function(){return i}});var i=function(e){return e>0?"color-green":"color-red"},n=function(e){return e>0?"#24ac80":"#ef4f46"}},9334:function(e,t,a){a.d(t,{AW:function(){return n},OM:function(){return s},f4:function(){return l},j:function(){return i},zC:function(){return r}});var i=[{value:"usd",label:"USD",sign:"$"},{value:"gbp",label:"GBP",sign:"\xa3"},{value:"rub",label:"RUB",sign:"\u20bd"}],n=function(e){return i.filter((function(t){return t.value===e}))[0]},s="usd",l={usd:"$",gbp:"\xa3",rub:"\u20bd"},r=function(){var e,t=null!==(e=new URLSearchParams(window.location.search).get("currency"))&&void 0!==e?e:"";return t||s}},6282:function(e,t,a){var i=a(5861),n=a(9439),s=a(7757),l=a.n(s),r=a(2791),o=a(4569),c=a.n(o);t.Z=function(e){var t=(0,r.useState)(),a=(0,n.Z)(t,2),s=a[0],o=a[1],d=(0,r.useState)(),u=(0,n.Z)(d,2),m=u[0],h=u[1],_=(0,r.useState)("GET"===e.method||"get"===e.method),p=(0,n.Z)(_,2),g=p[0],f=p[1],x=function(){var e=(0,i.Z)(l().mark((function e(t){var a;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c().request(t);case 3:a=e.sent,o(a),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),h(e.t0);case 10:return e.prev=10,f(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,i.Z)(l().mark((function e(t){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,r.useEffect)((function(){"GET"!==e.method&&"get"!==e.method||x(e)}),[]),{response:s,error:m,loading:g,sendData:v}}}}]);
//# sourceMappingURL=213.51b6947a.chunk.js.map