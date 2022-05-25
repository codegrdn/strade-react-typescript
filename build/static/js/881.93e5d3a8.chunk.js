"use strict";(self.webpackChunkstrade_react_typescript=self.webpackChunkstrade_react_typescript||[]).push([[881],{7578:function(e,t,i){i.d(t,{JI:function(){return l},LB:function(){return r},dO:function(){return s}});var a=i(1668),n="".concat(a.x,"/coins"),s=function(e){return{url:"".concat(n,"/markets"),method:"GET",params:e}},r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{include_platform:!1};return{url:"".concat(n,"/list"),method:"GET",params:e}},l=function(e,t){return{url:"".concat(n,"/").concat(e,"/market_chart"),method:"GET",params:t}}},5100:function(e,t,i){i.r(t),i.d(t,{default:function(){return Me}});var a=i(9439),n=i(2791),s=i(3168),r=i(3504),l=i(1229),o=i(5677),c=i(3959),d=i(184),u=function(){return(0,d.jsxs)(r.rU,{className:"footer__logo logo",to:"/","aria-label":"logo",children:[(0,d.jsx)(c.ZP,{height:27,children:(0,d.jsx)("img",{className:"footer__logo-icon logo__icon",src:l.Z,alt:"",width:"32",height:"27"})}),(0,d.jsx)(c.ZP,{height:10,children:(0,d.jsx)("img",{className:"footer__logo-text logo__text",src:o.Z,alt:"",width:"50",height:"10"})})]})},m=[{id:"info",title:"landing.footer.info.title",links:[{id:"about-us",title:"landing.footer.info.list.about-us"},{id:"fees",title:"landing.footer.info.list.fees"},{id:"token-listing",title:"landing.footer.info.list.token-listing"},{id:"strade-blog",title:"landing.footer.info.list.strade-blog"}]},{id:"legal",title:"landing.footer.legal.title",links:[{id:"terms-of-use",title:"landing.footer.legal.list.terms-of-use"},{id:"privacy-policy",title:"landing.footer.legal.list.privacy-policy"},{id:"trading-rules",title:"landing.footer.legal.list.trading-rules"},{id:"aml-policy",title:"landing.footer.legal.list.aml-policy"}]},{id:"service",title:"landing.footer.service.title",links:[{id:"exchange",title:"landing.footer.service.list.exchange"},{id:"wallet",title:"landing.footer.service.list.wallet"},{id:"buy-crypto",title:"landing.footer.service.list.buy-crypto"},{id:"swap",title:"landing.footer.service.list.swap"}]},{id:"support",title:"landing.footer.support.title",links:[{id:"faq",title:"landing.footer.support.list.faq"},{id:"help-center",title:"landing.footer.support.list.help-center"},{id:"verification",title:"landing.footer.support.list.verification"},{id:"api-documentation",title:"landing.footer.support.list.api-documentation"}]}],h=i(3540),p=function(){var e,t=(0,s.$)().t;function i(e){return e.toString().padStart(2,"0")}return(0,d.jsx)("footer",{className:"page-footer footer",children:(0,d.jsxs)("div",{className:"box",children:[(0,d.jsxs)("div",{className:"footer__row",children:[(0,d.jsxs)("div",{className:"footer__head",children:[(0,d.jsxs)("div",{className:"footer__head-wrap",children:[(0,d.jsx)(u,{}),(0,d.jsx)("div",{className:"footer__text",children:(0,d.jsx)("p",{children:(0,h.ZP)(t("landing.footer.footer-text-atfter-logo"))})})]}),(0,d.jsx)("div",{className:"footer__social",children:(0,d.jsx)("div",{className:"social"})})]}),(0,d.jsx)("div",{className:"footer__content",children:m.map((function(e){return(0,d.jsxs)("ul",{className:"footer__list",children:[(0,d.jsx)("li",{className:"footer__list-item",children:(0,d.jsx)("p",{className:"footer__list-title",children:t(e.title)})}),e.links.map((function(e){return(0,d.jsx)("li",{className:"footer__list-item",children:(0,d.jsx)(r.rU,{className:"footer__list-link",to:"/",children:t(e.title)})},e.id)}))]},e.id)}))})]}),(0,d.jsxs)("div",{className:"footer__bottom",children:[(0,d.jsxs)("div",{className:"footer__bottom-wrap",children:[(0,d.jsx)("div",{className:"footer__date",children:(e=new Date,[e.getFullYear(),i(e.getMonth()+1),i(e.getDate())].join("-")+" "+[i(e.getHours()),i(e.getMinutes())].join(":"))}),(0,d.jsx)("div",{className:"footer__volume"})]}),(0,d.jsx)("div",{className:"footer__copy",children:t("landing.footer.copyright",{year:(new Date).getFullYear()})})]})]})})},f=function(){return(0,d.jsxs)(r.rU,{className:"header__logo logo",to:"/","aria-label":"logo",children:[(0,d.jsx)("img",{className:"logo__icon",src:l.Z,alt:"",width:"32",height:"27"}),(0,d.jsx)("img",{className:"logo__text",src:o.Z,alt:"",width:"52",height:"11"})]})},_=i(2617),g={createModal:{show:!1,toggleModal:function(){}},loginModal:{show:!1,toggleModal:function(){}},menuMobile:{menuMobile:!1,toggleMenuMobile:function(){}}},x=n.createContext(g),v=i(8880),j=i(6871),b=i(8815),N=i(4700),w=function(){var e=(0,n.useContext)(_.V).auth,t=(0,s.$)().t,i=(0,n.useContext)(x).loginModal;return(0,d.jsxs)("div",{className:"menu__item-wrap",children:[(0,d.jsx)("li",{className:"menu__item",children:(0,d.jsx)(N.Z,{})}),!e.isAuth()&&(0,d.jsx)("li",{className:"menu__item",children:(0,d.jsx)("a",{className:"menu__link",href:"#",onClick:function(e){e.preventDefault(),i.toggleModal()},children:t("menu.Login")})})]})},k=function(){var e=(0,s.$)().t,t=(0,j.TH)(),i=v._.filter((function(e){return!v.b.includes(e.title)}));return(0,d.jsxs)("ul",{className:"menu__list",children:[(0,d.jsx)("li",{className:"menu__title",children:"Menu"}),(0,d.jsx)("div",{className:"menu__item-wrap text-transform-uppercase",children:i.map((function(i,a){return(0,d.jsx)("li",{className:"menu__item",children:(0,d.jsx)(r.rU,{className:"menu__link ".concat((0,b.A)(i.path,t.pathname)?"disable-link":""),to:i.path,children:e("menu.".concat(i.title))})},i.title)}))}),(0,d.jsx)(w,{})]})};var y=i.p+"static/media/account.880c1d5c85b53f84efed400d2d3660e0.svg",Z=function(){var e,t=(0,n.useContext)(_.V).auth,i=(0,s.$)().t,r=(0,n.useState)(!1),l=(0,a.Z)(r,2),o=l[0],c=l[1];return(0,d.jsxs)("div",{className:"landing-header__user-dropdown dropdown-menu landing-header__user-dropdown "+(o?"dropdown-menu--active":""),children:[(0,d.jsxs)("div",{className:"dropdown-menu__user-info",onClick:function(e){c(!o)},children:[(0,d.jsx)("img",{className:"dropdown-menu__user-icon",src:y,width:"48",height:"48",alt:"Account"}),(0,d.jsxs)("div",{className:"dropdown-menu__user-name",children:[null===(e=t.user)||void 0===e?void 0:e.email,(0,d.jsx)("i",{className:"arrow down arrow-landing"})]})]}),(0,d.jsx)("div",{className:"dropdown-menu__menu",children:(0,d.jsx)("div",{className:"dropdown-menu__menu-list landing-menu__menu-list",children:(0,d.jsx)("a",{className:"dropdown-menu__menu-item",href:"#!",onClick:function(e){e.preventDefault(),t.logout()},children:i("menu.Logout")})})})]})},C=function(){var e=(0,n.useContext)(_.V).auth,t=(0,s.$)().t,i=(0,n.useContext)(x),a=i.menuMobile,r=i.createModal;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("nav",{className:"header__menu menu"+(a.menuMobile?" menu--active":""),children:(0,d.jsx)(k,{})}),e.isAuth()?(0,d.jsxs)("div",{className:"landing-header__user-menu-wrap",children:[(0,d.jsx)("div",{className:"landing-header__notify"}),(0,d.jsx)(Z,{})]}):"",!e.isAuth()&&(0,d.jsx)("a",{className:"menu__btn btn btn--green js-modal-open",href:"#!","data-modal":"modal-2",onClick:function(e){e.preventDefault(),r.toggleModal()},children:t("menu.CreateAccount")}),(0,d.jsx)("button",{className:"menu__toggle"+(a.menuMobile?" menu__toggle--active":""),type:"button",onClick:a.toggleMenuMobile,children:(0,d.jsx)("span",{className:"menu__toggle-line"})})]})},M=function(){return(0,d.jsx)("header",{className:"page-header header",children:(0,d.jsx)("div",{className:"box",children:(0,d.jsxs)("div",{className:"header__content",children:[(0,d.jsx)(f,{}),(0,d.jsx)("div",{className:"header__nav",children:(0,d.jsx)(C,{})})]})})})},S=function(){var e=(0,s.$)().t,t=(0,n.useContext)(x).createModal;return(0,d.jsxs)("div",{className:"hero__content",children:[(0,d.jsx)("div",{className:"hero__subtitle",children:e("landing.hero.content.subTitle")}),(0,d.jsx)("h1",{className:"hero__title",children:e("landing.hero.content.title")}),(0,d.jsx)("div",{className:"hero__descr",children:(0,d.jsx)("p",{children:e("landing.hero.content.description")})}),(0,d.jsx)("button",{className:"hero__btn btn btn--green",onClick:t.toggleModal,children:e("landing.hero.content.free-account")})]})};var P=i.p+"static/media/wallet-icon.63c8090201245a24a0f671c701ed9b60.svg";var T=i.p+"static/media/swap-icon.e5293704b384c8b078e78603947fd628.svg";var D=i.p+"static/media/dex-icon.f2181bb39047c317d9fdc59427cba06b.svg";var E,$=[{id:"wallet",image:P,title:"landing.hero.features.wallet.title",desciption:"landing.hero.features.wallet.description"},{id:"swap",image:T,title:"landing.hero.features.swap.title",desciption:"landing.hero.features.swap.description"},{id:"dex",image:D,title:"landing.hero.features.dex.title",desciption:"landing.hero.features.dex.description"},{id:"license",image:i.p+"static/media/build-icon.6ab22a004e4f1ff8195979ecb5f706d2.svg",title:"landing.hero.features.license.title",desciption:"landing.hero.features.license.description"}],U=function(){var e=(0,s.$)().t;return(0,d.jsx)("section",{className:"features",children:(0,d.jsx)("ul",{className:"features__list",children:$.map((function(t){return(0,d.jsxs)("li",{className:"features__item",children:[(0,d.jsx)(c.ZP,{height:"20",once:!0,children:(0,d.jsx)("img",{width:"20px",height:"20px",className:"features__icon",src:t.image,alt:""})}),(0,d.jsx)("h2",{className:"features__title",children:(0,h.ZP)(e(t.title))}),(0,d.jsx)("p",{className:"features__descr",children:e(t.desciption)})]},t.id)}))})})},A=i(1668),F="".concat(A.x,"/simple");!function(e){e.YES="true",e.NO="false"}(E||(E={}));var q=i(6282),G=i(2394),H=i.p+"static/media/visa.0de74ed7128ef67ea43d.webp",L=i.p+"static/media/stripe.98d97be7836d27550402.webp",R=[{key:"visa",image:H},{key:"paypal",image:i.p+"static/media/paypal.499284fe22a867d4c6ac.webp"},{key:"stripe",image:L}],B=[{value:"bitcoin",label:"BTC"},{value:"ethereum",label:"ETH"},{value:"ripple",label:"XRP"}],O=["bitcoin","ethereum","ripple"],V=i(6789),I=function(e){var t=0;if(e>1&&(t=6),e>1e5&&(t=2),e<1&&e>0){for(var i=e;i<1;)t++,i*=10;t++}return e.toFixed(t)},W=function(){var e=(0,s.$)().t,t=(0,n.useContext)(x).createModal,i=(0,n.useState)("visa"),r=(0,a.Z)(i,2),l=r[0],o=r[1],c=(0,n.useState)(""),u=(0,a.Z)(c,2),m=u[0],h=u[1],p=(0,n.useState)(""),f=(0,a.Z)(p,2),_=f[0],g=f[1],v=(0,n.useState)(B[0]),j=(0,a.Z)(v,2),b=j[0],N=j[1],w=(0,n.useState)(V.A[0]),k=(0,a.Z)(w,2),y=k[0],Z=k[1],C=(0,n.useState)(!1),M=(0,a.Z)(C,2),S=M[0],P=M[1],T=(0,n.useMemo)((function(){return e={vs_currencies:y.value.toString(),ids:O.join()},{url:"".concat(F,"/price"),method:"GET",params:e};var e}),[y]),D=(0,q.Z)(T),E=D.response,$=D.sendData,U=D.loading;(0,n.useEffect)((function(){U||$(T)}),[T]);var A=(0,n.useMemo)((function(){P(!1);var e={};if(null!==E&&void 0!==E&&E.data){O.forEach((function(t){e[t]=null===E||void 0===E?void 0:E.data[t][y.value]})),m?(h(m),g(String(I(Number(m)*e[b.value])))):(g(""),h(""));var t=setTimeout((function(){P(!0),clearTimeout(t)}),1500)}return e}),[E]);function H(e){o(e.target.getAttribute("data-key"))}return(0,d.jsx)("div",{className:"hero__purchase",children:(0,d.jsxs)("div",{className:"purchase",children:[(0,d.jsxs)("div",{className:"purchase__converter converter",children:[(0,d.jsx)("h2",{className:"converter__title",children:e("landing.hero.purchase.title")}),(0,d.jsxs)("div",{className:"converter__inner",children:[(0,d.jsx)("div",{className:"converter__item-title",children:e("landing.hero.purchase.buy")}),(0,d.jsxs)("div",{className:"converter__item",children:[(0,d.jsx)("input",{className:"converter__input",type:"number",value:m,placeholder:"0,00",onChange:function(e){if(!e.target.value)return g(""),void h("");h(e.target.value),g(String(I(Number(e.target.value)*A[b.value])))},disabled:!S}),(0,d.jsx)("div",{className:"converter__coin",children:(0,d.jsx)("div",{className:"converter__coin-name",children:(0,d.jsx)(G.Z,{values:B,selected:b,onChange:function(e){N(e),m?(h(m),g(String(I(Number(m)*A[e.value])))):(g(""),h(""))},isDisabled:!S})})})]}),(0,d.jsx)("div",{className:"converter__item-title",children:e("landing.hero.purchase.for")}),(0,d.jsxs)("div",{className:"converter__item",children:[(0,d.jsx)("input",{className:"converter__input",value:_,type:"number",placeholder:"0,00",onChange:function(e){if(!e.target.value)return g(""),void h("");g(e.target.value),h(String(I(Number(e.target.value)/A[b.value])))},disabled:!S}),(0,d.jsx)("div",{className:"converter__coin",children:(0,d.jsx)("div",{className:"converter__coin-name",children:(0,d.jsx)(G.Z,{values:V.A,selected:y,onChange:function(e){Z(e)},isDisabled:!S})})})]})]})]}),(0,d.jsx)("div",{className:"purchase__payment-method payment-method",children:R.map((function(e){return(0,d.jsx)("div",{className:"payment-method__item"+(e.key===l?" payment-method__item--active":""),onClick:H,"data-key":e.key,children:(0,d.jsx)("img",{className:"filter--gray",src:e.image,width:"66",height:"25","data-key":e.key,alt:e.key})},e.key)}))}),(0,d.jsx)("button",{className:"purchase__btn btn btn--blue",onClick:t.toggleModal,children:e("landing.hero.purchase.buy-item",{item:b.label})})]})})},Y=function(){return(0,d.jsx)("section",{className:"hero",children:(0,d.jsx)("div",{className:"box",children:(0,d.jsxs)("div",{className:"hero__inner",children:[(0,d.jsx)(S,{}),(0,d.jsx)(W,{}),(0,d.jsx)(U,{})]})})})},J=i.p+"static/media/bg-dots.b40ca7f0c2be3dd1f52b.webp",X=i(3433),z=i(7578),K=i(3513),Q=i(6186),ee=i(3813),te=function(){var e=(0,s.$)().t,t=(0,z.dO)({vs_currency:"usd",per_page:5,page:1}),i=(0,q.Z)(t).response,r=(0,n.useState)(!0),l=(0,a.Z)(r,2),o=l[0],c=l[1],u=(0,n.useMemo)((function(){c(!0);var e=null!==i&&void 0!==i&&i.data?(0,X.Z)(i.data):[],t=setTimeout((function(){c(!1),clearTimeout(t)}),1500);return e}),[i]),m=[{id:"name",name:e("markets.columns.name"),selector:function(e){return e.name},cell:function(e){return(0,d.jsxs)("div",{className:"col-favourites",children:[(0,d.jsx)("img",{src:e.image,width:"40px",height:"40px",alt:e.name,style:{marginRight:"10px"}}),(0,d.jsx)("p",{className:"col-info",children:e.name})]})},sortable:!0,minWidth:"20%",maxWidth:"30%"},{id:"current_price",name:e("markets.columns.last-price"),selector:function(e){return e.current_price},cell:function(e){return(0,d.jsx)("p",{className:"col-info",children:(0,d.jsx)("span",{className:(0,Q.p)(e.price_change_24h),children:e.current_price})})},sortable:!0},{id:"price_change_percentage_24h",name:e("markets.columns.24h-\u0441hange"),selector:function(e){return e.price_change_percentage_24h},cell:function(e){return(0,d.jsx)("p",{className:"col-info",children:(0,d.jsxs)("span",{className:(0,Q.p)(e.price_change_percentage_24h),children:[e.price_change_percentage_24h," %"]})})},sortable:!0},{id:"high_24h",name:e("markets.columns.24h-high"),selector:function(e){return e.high_24h},cell:function(e){return(0,d.jsx)("p",{className:"col-info",children:(0,d.jsx)("span",{className:(0,Q.p)(e.high_24h),children:e.high_24h})})},sortable:!0},{id:"low_24h",name:e("markets.columns.24h-low"),selector:function(e){return e.low_24h},cell:function(e){return(0,d.jsx)("p",{className:"col-info",children:(0,d.jsx)("span",{className:(0,Q.p)(e.low_24h),children:e.low_24h})})},sortable:!0},{id:"market_cap",name:e("markets.columns.market-cap"),selector:function(e){return e.market_cap},sortable:!0},{id:"total_volume",name:e("markets.columns.24h-volume"),selector:function(e){return e.total_volume},sortable:!0},{id:"chart",name:"",cell:function(e){return(0,d.jsx)(ee.Z,{coinId:e.id,color:(0,Q.L)(e.price_change_percentage_24h),width:140,height:70})},sortable:!1}];return(0,d.jsx)(K.ZP,{className:"markets__table table",noDataComponent:e("landing.market-info.table-have-not-data"),columns:m,data:u,disabled:o})},ie=function(){var e=(0,s.$)().t;return(0,d.jsxs)("section",{className:"markets-info",children:[(0,d.jsx)("div",{className:"markets-info__bg",children:(0,d.jsx)("img",{className:"markets-info__bg-img",src:J,alt:""})}),(0,d.jsx)("div",{className:"box-custom",children:(0,d.jsxs)("div",{className:"markets-info__inner",children:[(0,d.jsx)("div",{className:"markets-info__subtitle subtitle",children:e("landing.market-info.subtitle").toUpperCase()}),(0,d.jsx)("h2",{className:"markets-info__title title",children:e("landing.market-info.title")}),(0,d.jsx)("div",{className:"markets-info__content",children:(0,d.jsx)("div",{className:"markets-info__table custom-scroll",children:(0,d.jsx)(te,{})})}),(0,d.jsx)("div",{className:"markets-info__link-wrap",children:(0,d.jsxs)(r.rU,{className:"markets-info__link",to:"/markets",children:[e("landing.market-info.view-all"),(0,d.jsx)("svg",{className:"markets-info__link-icon",width:"20",height:"12",children:(0,d.jsx)("use",{xlinkHref:"#arrow-right-icon"})})]})})]})})]})},ae=i.p+"static/media/security.42cda51067227c1ead48.webp",ne=i.p+"static/media/deposit.06b775be0242a57e960e.webp",se=i.p+"static/media/support.298a394b68f026c831e1.webp",re=[{id:"security",image:ae,title:"landing.privileges.list.security.title",subtitle:"landing.privileges.list.security.subtitle",description:"landing.privileges.list.security.description"},{id:"deposit",image:ne,title:"landing.privileges.list.deposit.title",subtitle:"landing.privileges.list.deposit.subtitle",description:"landing.privileges.list.deposit.description"},{id:"liquid",image:i.p+"static/media/liquid.0881c22634d82fe91f25.webp",title:"landing.privileges.list.liquid.title",subtitle:"landing.privileges.list.liquid.subtitle",description:"landing.privileges.list.liquid.description"},{id:"support",image:se,title:"landing.privileges.list.support.title",subtitle:"landing.privileges.list.support.subtitle",description:"landing.privileges.list.support.description"}],le=function(){var e=(0,s.$)().t;return(0,d.jsx)("ul",{className:"privileges__list privileges-list",children:re.map((function(t){return(0,d.jsxs)("li",{className:"privileges-list__item",children:[(0,d.jsx)("div",{className:"privileges-list__picture",children:(0,d.jsx)(c.ZP,{height:190,children:(0,d.jsx)("img",{width:"190px",height:"190px",className:"privileges-list__img",src:t.image,alt:t.id})})}),(0,d.jsx)("div",{className:"privileges-list__subtitle",children:e(t.subtitle).toUpperCase()}),(0,d.jsx)("div",{className:"privileges-list__title",children:e(t.title)}),(0,d.jsx)("div",{className:"privileges-list__descr",children:(0,d.jsx)("p",{children:e(t.description)})})]},t.id)}))})},oe=function(){var e=(0,s.$)().t;return(0,d.jsx)("section",{className:"privileges",children:(0,d.jsxs)("div",{className:"box",children:[(0,d.jsx)("div",{className:"privileges__subtitle subtitle",children:e("landing.privileges.subtitle").toLocaleUpperCase()}),(0,d.jsx)("h2",{className:"privileges__title title",children:e("landing.privileges.title")}),(0,d.jsx)(le,{})]})})},ce=i.p+"static/media/trade-desktop.b88ee98c45572634e2b0.png",de=i.p+"static/media/trade-desktop@2x.c78ce8f4f42fe1c3bb49.png",ue=i.p+"static/media/trade-desktop.11dc576499bfbf61568c.webp",me=i.p+"static/media/trade-desktop@2x.858272ccc5758a3a8a00.webp",he=i.p+"static/media/trade-tablet.e7aa8077231a5336bb7b.png",pe=i.p+"static/media/trade-tablet@2x.06a9bd478addbda44c03.png",fe=i.p+"static/media/trade-tablet.d46e36d80b4f4a5c64dd.webp",_e=i.p+"static/media/trade-tablet@2x.c4a07a0ffcaea151791a.webp",ge=i.p+"static/media/trade-mobile.a8f82b3ed09c31e8585c.png",xe=i.p+"static/media/trade-mobile@2x.35e9e3cfc8ea21e972f4.png",ve=i.p+"static/media/trade-mobile.1bc44c87369b7796f593.webp",je=i.p+"static/media/trade-mobile@2x.26b081b71d62e04b88b7.webp",be=function(){var e=(0,s.$)().t;return(0,d.jsxs)("section",{className:"trade-info",children:[(0,d.jsxs)("div",{className:"box",children:[(0,d.jsx)("h2",{className:"trade-info__title title",children:e("landing.trade-info.title")}),(0,d.jsx)("div",{className:"trade-info__descr",children:(0,d.jsx)("p",{children:(0,h.ZP)(e("landing.trade-info.description"))})})]}),(0,d.jsx)("div",{className:"trade-info__picture",children:(0,d.jsx)(c.ZP,{height:144,once:!0,children:(0,d.jsxs)("picture",{children:[(0,d.jsx)("source",{type:"image/webp",media:"(min-width: 1200px)",srcSet:"".concat(ue,", ").concat(me," 2x")}),(0,d.jsx)("source",{type:"image/webp",media:"(min-width: 768px)",srcSet:"".concat(fe,", ").concat(_e," 2x")}),(0,d.jsx)("source",{type:"image/webp",srcSet:"".concat(ve,", ").concat(je," 2x")}),(0,d.jsx)("source",{media:"(min-width: 1200px)",srcSet:"".concat(ce,", ").concat(de," 2x")}),(0,d.jsx)("source",{media:"(min-width: 768px)",srcSet:"".concat(he,", ").concat(pe," 2x")}),(0,d.jsx)("img",{className:"trade-info__image",src:ge,srcSet:xe,alt:"trade",width:"300",height:"144"})]})})})]})},Ne=function(){return(0,d.jsxs)("main",{className:"page-main",children:[(0,d.jsx)(Y,{}),(0,d.jsx)(c.ZP,{height:200,once:!0,children:(0,d.jsx)(ie,{})}),(0,d.jsx)(c.ZP,{height:200,children:(0,d.jsx)(be,{})}),(0,d.jsx)(c.ZP,{height:200,children:(0,d.jsx)(oe,{})})]})},we=i(6673),ke=function(e){return/\S+@\S+\.\S+/.test(e)},ye=function(){var e=(0,n.useContext)(_.V).auth,t=(0,n.useContext)(x).createModal,i=(0,s.$)().t,r=(0,n.useState)("password"),l=(0,a.Z)(r,2),o=l[0],c=l[1],u=(0,n.useState)("show-icon show-icon--line"),m=(0,a.Z)(u,2),h=m[0],p=m[1],f=(0,n.useState)(""),g=(0,a.Z)(f,2),v=g[0],j=g[1],b=(0,n.useState)(""),N=(0,a.Z)(b,2),w=N[0],k=N[1],y=(0,n.useState)(!1),Z=(0,a.Z)(y,2),C=Z[0],M=Z[1],S=(0,n.useState)(""),P=(0,a.Z)(S,2),T=P[0],D=P[1];function E(e){M(!1),D(""),j(""),k(""),t.toggleModal()}return(0,d.jsxs)("div",{className:"modal"+(t.show?" modal--active":" "),children:[(0,d.jsx)("div",{className:"modal__inner modal--exit",onClick:E}),(0,d.jsxs)("div",{className:"modal__content",children:[(0,d.jsx)("div",{className:"modal__close-btn modal--exit",onClick:E}),(0,d.jsx)("div",{className:"modal__title",children:i("landing.modals.create.title").toUpperCase()}),(0,d.jsx)("div",{className:"modal__form",children:(0,d.jsxs)("form",{className:"form",method:"post",onSubmit:function(a){if(a.preventDefault(),M(!1),D(""),!ke(w))return M(!0),void D(i("error.global.not-valid-email"));if(!v)return M(!0),void D(i("error.global.empty-password"));if(w&&v){var n=(0,we.v0)();(0,we.Xb)(n,w,v).then((function(i){var a=i.user;e.login(a),j(""),k(""),t.toggleModal()})).catch((function(e){M(!0),D(i("error.firebase."+e.code.replaceAll("/","-")))}))}},children:[(0,d.jsxs)("div",{className:"form__group modal__form-group",children:[(0,d.jsx)("label",{className:"form__label modal__form-label",htmlFor:"email",children:i("landing.modals.create.form.email")}),(0,d.jsx)("input",{className:"form__input modal__form-input "+(C?"error__input":""),value:w,onChange:function(e){k(e.target.value)},type:"email",id:"email",placeholder:i("landing.modals.create.form.email"),autoComplete:"username"})]}),(0,d.jsxs)("div",{className:"form__group modal__form-group",children:[(0,d.jsx)("label",{className:"form__label modal__form-label",htmlFor:"password",children:i("landing.modals.create.form.password")}),(0,d.jsxs)("div",{className:"form__input-wrap modal__form-input-wrap",children:[(0,d.jsx)("input",{className:"form__input modal__form-input "+(C?"error__input":""),value:v,onChange:function(e){j(e.target.value)},type:o,id:"password",placeholder:i("landing.modals.create.form.password"),autoComplete:"current-password"}),(0,d.jsxs)("div",{className:"show-icon-wrap js-show-icon",onClick:function(e){p("password"===o?"show-icon show-icon--line visually-hidden":"show-icon show-icon--line"),c("password"===o?"text":"password")},children:[(0,d.jsx)("svg",{className:"show-icon",width:"20",height:"20",children:(0,d.jsx)("use",{xlinkHref:"#eye-icon"})}),(0,d.jsx)("svg",{className:h,width:"20",height:"20",children:(0,d.jsx)("use",{xlinkHref:"#line-icon"})})]})]})]}),(0,d.jsx)("div",{className:"modal__text-wrap error__wrap",children:C&&(0,d.jsx)("div",{className:"modal__text error__modal__text",children:T})}),(0,d.jsx)("button",{className:"form__submit modal__form-submit btn btn--blue",type:"submit",children:i("landing.modals.create.sign-up")}),(0,d.jsx)("div",{className:"modal__text-wrap text-center",children:(0,d.jsxs)("div",{className:"modal__text",children:[(0,d.jsx)("p",{children:i("landing.modals.create.description")}),(0,d.jsxs)("p",{children:[(0,d.jsx)("a",{className:"modal__link",href:"/#",children:i("landing.modals.create.terms-of-service")})," & ",(0,d.jsx)("a",{className:"modal__link",href:"/#",children:i("landing.modals.create.privacy-policy")})]})]})})]})})]})]})},Ze=function(){var e=(0,n.useState)(!1),t=(0,a.Z)(e,2),i=t[0],s=t[1];return{showModal:i,toggleShowModal:function(){s(!i)}}},Ce=function(){var e=(0,n.useContext)(_.V).auth,t=(0,n.useContext)(x),i=t.loginModal,r=t.createModal,l=(0,s.$)().t,o=(0,n.useState)("password"),c=(0,a.Z)(o,2),u=c[0],m=c[1],h=(0,n.useState)("show-icon show-icon--line"),p=(0,a.Z)(h,2),f=p[0],g=p[1],v=(0,n.useState)(""),j=(0,a.Z)(v,2),b=j[0],N=j[1],w=(0,n.useState)(""),k=(0,a.Z)(w,2),y=k[0],Z=k[1],C=(0,n.useState)(!1),M=(0,a.Z)(C,2),S=M[0],P=M[1],T=(0,n.useState)(""),D=(0,a.Z)(T,2),E=D[0],$=D[1];function U(e){P(!1),$(""),N(""),Z(""),i.toggleModal()}return(0,d.jsxs)("div",{className:"modal"+(i.show?" modal--active":" "),children:[(0,d.jsx)("div",{className:"modal__inner modal--exit",onClick:U}),(0,d.jsxs)("div",{className:"modal__content",children:[(0,d.jsx)("div",{className:"modal__close-btn modal--exit",onClick:U}),(0,d.jsx)("div",{className:"modal__title",children:l("landing.modals.login.title")}),(0,d.jsx)("div",{className:"modal__form",children:(0,d.jsxs)("form",{className:"form",method:"post",onSubmit:function(t){if(t.preventDefault(),P(!1),$(""),!ke(y))return P(!0),void $(l("error.global.not-valid-email"));if(!b)return P(!0),void $(l("error.global.empty-password"));if(y&&b){var a=(0,we.v0)();(0,we.e5)(a,y,b).then((function(t){var a=t.user;e.login(a),N(""),Z(""),i.toggleModal()})).catch((function(e){P(!0),$(l("error.firebase."+e.code.replaceAll("/","-")))}))}},children:[(0,d.jsxs)("div",{className:"form__group modal__form-group",children:[(0,d.jsx)("label",{className:"form__label modal__form-label",htmlFor:"email-1",children:l("landing.modals.login.form.email")}),(0,d.jsx)("input",{className:"form__input modal__form-input "+(S?"error__input":""),value:y,onChange:function(e){Z(e.target.value)},type:"email",id:"email-1",placeholder:l("landing.modals.login.form.email"),autoComplete:"username"})]}),(0,d.jsxs)("div",{className:"form__group modal__form-group",children:[(0,d.jsx)("label",{className:"form__label modal__form-label",htmlFor:"password-1",children:l("landing.modals.login.form.password")}),(0,d.jsxs)("div",{className:"form__input-wrap modal__form-input-wrap",children:[(0,d.jsx)("input",{className:"form__input modal__form-input "+(S?"error__input":""),value:b,onChange:function(e){N(e.target.value)},type:u,id:"password-1",placeholder:l("landing.modals.login.form.password"),autoComplete:"current-password"}),(0,d.jsxs)("div",{className:"show-icon-wrap js-show-icon",onClick:function(e){g("password"===u?"show-icon show-icon--line visually-hidden":"show-icon show-icon--line"),m("password"===u?"text":"password")},children:[(0,d.jsx)("svg",{className:"show-icon",width:"20",height:"20",children:(0,d.jsx)("use",{xlinkHref:"#eye-icon"})}),(0,d.jsx)("svg",{className:f,width:"20",height:"20",children:(0,d.jsx)("use",{xlinkHref:"#line-icon"})})]})]})]}),(0,d.jsx)("div",{className:"error__wrap",children:S&&(0,d.jsx)("div",{className:"modal__text error__modal__text",children:E})}),(0,d.jsx)("button",{className:"form__submit modal__form-submit btn btn--blue",type:"submit",children:l("landing.modals.login.log-in")}),(0,d.jsx)("div",{className:"modal__text-wrap text-center",children:(0,d.jsxs)("div",{className:"modal__text",children:[l("landing.modals.login.have-account")," ",(0,d.jsxs)("a",{className:"modal__link modal--exit",href:"#!","data-modal":"modal-2",onClick:function(e){e.preventDefault(),P(!1),$(""),i.toggleModal(),r.toggleModal()},children:[" ",l("landing.modals.login.sign-up")]})]})})]})})]})]})},Me=function(){var e=Ze(),t=e.showModal,i=e.toggleShowModal,s=Ze(),r=s.showModal,l=s.toggleShowModal,o=(0,n.useState)(!1),u=(0,a.Z)(o,2),m=u[0],h=u[1];return(0,d.jsx)(x.Provider,{value:{createModal:{show:r,toggleModal:l},loginModal:{show:t,toggleModal:i},menuMobile:{menuMobile:m,toggleMenuMobile:function(){h(!m)}}},children:(0,d.jsx)("div",{className:"page",children:(0,d.jsxs)("div",{className:"page__body"+(r||t||m?" no-scroll":""),children:[(0,d.jsx)(M,{}),(0,d.jsx)(Ne,{}),(0,d.jsx)(c.ZP,{height:200,children:(0,d.jsx)(p,{})}),(0,d.jsx)(ye,{}),(0,d.jsx)(Ce,{})]})})})}},6789:function(e,t,i){i.d(t,{A:function(){return a}});var a=[{value:"usd",label:"USD"},{value:"rub",label:"RUB"}];a[0]},3813:function(e,t,i){i.d(t,{Z:function(){return x}});var a=i(9439),n=i(2791),s=i(812),r=i(2891),l=i(2955),o=i(7578),c=i(5861),d=i(7757),u=i.n(d),m=i(4569),h=i.n(m),p=function(e){var t=(0,n.useState)(),i=(0,a.Z)(t,2),s=i[0],r=i[1],l=(0,n.useState)(),o=(0,a.Z)(l,2),d=o[0],m=o[1],p=(0,n.useState)("GET"===e.method||"get"===e.method),f=(0,a.Z)(p,2),_=f[0],g=f[1],x=function(){var e=(0,c.Z)(u().mark((function e(t){var i;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h().request(t);case 3:i=e.sent,r(i),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),m(e.t0);case 10:return e.prev=10,g(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,c.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,n.useEffect)((function(){"GET"!==e.method&&"get"!==e.method||x(e)}),[e]),{response:s,error:d,loading:_,sendData:v}},f=i(4864),_=i(4278),g=i(184),x=function(e){var t=e.coinId,i=e.color,c=e.width,d=void 0===c?140:c,u=e.height,m=void 0===u?70:u,h=(0,n.useContext)(f.tE).currency,x=(0,n.useMemo)((function(){return(0,o.JI)(t,{vs_currency:h.currency,days:"1"})}),[h.currency]),v=p(x).response,j=(0,n.useState)(!1),b=(0,a.Z)(j,2),N=b[0],w=b[1],k=(0,n.useMemo)((function(){var e,t;w(!1);var i=[];null===v||void 0===v||null===(e=v.data)||void 0===e||null===(t=e.prices)||void 0===t||t.forEach((function(e){i.push({x:e[0],y:e[1]})}));var a=setTimeout((function(){w(!0),clearTimeout(a)}),1500);return i}),[v]);return(0,g.jsx)(g.Fragment,{children:N?(0,g.jsxs)(s.T,{width:d,height:m,data:k,margin:{top:10,right:30,left:0,bottom:10},children:[(0,g.jsx)(r.B,{hide:!0,type:"number",domain:["auto","auto"]}),(0,g.jsx)(l.u,{type:"monotone",dataKey:"y",stroke:i,fill:i})]}):(0,g.jsx)(_.Z,{isRevert:!0,style:{height:"24px",width:"24px"}})})}},4864:function(e,t,i){i.d(t,{tE:function(){return l}});i(6789);var a,n=i(9334),s=i(2791);!function(e){e.category="category",e.search="search",e.platform="platform",e.coins="coins",e.lastPrice="lastPrice"}(a||(a={}));var r={platforms:{list:{},addPlatform:function(e){}},filters:{list:{},addFilter:function(e){}},coins:{list:[],removeCoin:function(e){},addCoin:function(e){}},currency:{currency:n.OM,changeCurrency:function(e){}}},l=s.createContext(r)},4278:function(e,t,i){i.d(t,{Z:function(){return n}});var a=i(184),n=function(e){var t=e.isRevert,i=void 0!==t&&t,n=e.style,s=void 0===n?{}:n,r=i?"loader loader-revert":"loader";return(0,a.jsx)("div",{className:"wrap-loader",children:(0,a.jsx)("span",{className:r,style:s})})}},1668:function(e,t,i){i.d(t,{x:function(){return a}});var a="https://api.coingecko.com/api/v3"},6186:function(e,t,i){i.d(t,{L:function(){return n},p:function(){return a}});var a=function(e){return e>0?"color-green":"color-red"},n=function(e){return e>0?"#24ac80":"#ef4f46"}},9334:function(e,t,i){i.d(t,{AW:function(){return n},OM:function(){return s},f4:function(){return r},j:function(){return a},zC:function(){return l}});var a=[{value:"usd",label:"USD",sign:"$"},{value:"gbp",label:"GBP",sign:"\xa3"},{value:"rub",label:"RUB",sign:"\u20bd"}],n=function(e){return a.filter((function(t){return t.value===e}))[0]},s="usd",r={usd:"$",gbp:"\xa3",rub:"\u20bd"},l=function(){var e,t=null!==(e=new URLSearchParams(window.location.search).get("currency"))&&void 0!==e?e:"";return t||s}},6282:function(e,t,i){var a=i(5861),n=i(9439),s=i(7757),r=i.n(s),l=i(2791),o=i(4569),c=i.n(o);t.Z=function(e){var t=(0,l.useState)(),i=(0,n.Z)(t,2),s=i[0],o=i[1],d=(0,l.useState)(),u=(0,n.Z)(d,2),m=u[0],h=u[1],p=(0,l.useState)("GET"===e.method||"get"===e.method),f=(0,n.Z)(p,2),_=f[0],g=f[1],x=function(){var e=(0,a.Z)(r().mark((function e(t){var i;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c().request(t);case 3:i=e.sent,o(i),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),h(e.t0);case 10:return e.prev=10,g(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,a.Z)(r().mark((function e(t){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,l.useEffect)((function(){"GET"!==e.method&&"get"!==e.method||x(e)}),[]),{response:s,error:m,loading:_,sendData:v}}}}]);
//# sourceMappingURL=881.93e5d3a8.chunk.js.map