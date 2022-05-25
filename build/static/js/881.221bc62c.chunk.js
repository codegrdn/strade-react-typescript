"use strict";(self.webpackChunkstrade_react_typescript=self.webpackChunkstrade_react_typescript||[]).push([[881],{7578:function(e,t,i){i.d(t,{JI:function(){return l},LB:function(){return r},dO:function(){return s}});var a=i(1668),n="".concat(a.x,"/coins"),s=function(e){return{url:"".concat(n,"/markets"),method:"GET",params:e}},r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{include_platform:!1};return{url:"".concat(n,"/list"),method:"GET",params:e}},l=function(e,t){return{url:"".concat(n,"/").concat(e,"/market_chart"),method:"GET",params:t}}},5100:function(e,t,i){i.r(t),i.d(t,{default:function(){return Te}});var a=i(9439),n=i(2791),s=i(2426),r=i.n(s),l=i(3168),o=i(3504),c=i(1229),d=i(5677),u=i(3959),m=i(184),h=function(){return(0,m.jsxs)(o.rU,{className:"footer__logo logo",to:"/","aria-label":"logo",children:[(0,m.jsx)(u.ZP,{height:27,children:(0,m.jsx)("img",{className:"footer__logo-icon logo__icon",src:c.Z,alt:"",width:"32",height:"27"})}),(0,m.jsx)(u.ZP,{height:10,children:(0,m.jsx)("img",{className:"footer__logo-text logo__text",src:d.Z,alt:"",width:"50",height:"10"})})]})},p=[{id:"info",title:"landing.footer.info.title",links:[{id:"about-us",title:"landing.footer.info.list.about-us"},{id:"fees",title:"landing.footer.info.list.fees"},{id:"token-listing",title:"landing.footer.info.list.token-listing"},{id:"strade-blog",title:"landing.footer.info.list.strade-blog"}]},{id:"legal",title:"landing.footer.legal.title",links:[{id:"terms-of-use",title:"landing.footer.legal.list.terms-of-use"},{id:"privacy-policy",title:"landing.footer.legal.list.privacy-policy"},{id:"trading-rules",title:"landing.footer.legal.list.trading-rules"},{id:"aml-policy",title:"landing.footer.legal.list.aml-policy"}]},{id:"service",title:"landing.footer.service.title",links:[{id:"exchange",title:"landing.footer.service.list.exchange"},{id:"wallet",title:"landing.footer.service.list.wallet"},{id:"buy-crypto",title:"landing.footer.service.list.buy-crypto"},{id:"swap",title:"landing.footer.service.list.swap"}]},{id:"support",title:"landing.footer.support.title",links:[{id:"faq",title:"landing.footer.support.list.faq"},{id:"help-center",title:"landing.footer.support.list.help-center"},{id:"verification",title:"landing.footer.support.list.verification"},{id:"api-documentation",title:"landing.footer.support.list.api-documentation"}]}],f=i(3540),_=function(){var e=(0,l.$)().t;return(0,m.jsx)("footer",{className:"page-footer footer",children:(0,m.jsxs)("div",{className:"box",children:[(0,m.jsxs)("div",{className:"footer__row",children:[(0,m.jsxs)("div",{className:"footer__head",children:[(0,m.jsxs)("div",{className:"footer__head-wrap",children:[(0,m.jsx)(h,{}),(0,m.jsx)("div",{className:"footer__text",children:(0,m.jsx)("p",{children:(0,f.ZP)(e("landing.footer.footer-text-atfter-logo"))})})]}),(0,m.jsx)("div",{className:"footer__social",children:(0,m.jsx)("div",{className:"social"})})]}),(0,m.jsx)("div",{className:"footer__content",children:p.map((function(t){return(0,m.jsxs)("ul",{className:"footer__list",children:[(0,m.jsx)("li",{className:"footer__list-item",children:(0,m.jsx)("p",{className:"footer__list-title",children:e(t.title)})}),t.links.map((function(t){return(0,m.jsx)("li",{className:"footer__list-item",children:(0,m.jsx)(o.rU,{className:"footer__list-link",to:"/",children:e(t.title)})},t.id)}))]},t.id)}))})]}),(0,m.jsxs)("div",{className:"footer__bottom",children:[(0,m.jsxs)("div",{className:"footer__bottom-wrap",children:[(0,m.jsx)("div",{className:"footer__date",children:r()().format("YYYY-MM-DD HH:mm")}),(0,m.jsx)("div",{className:"footer__volume"})]}),(0,m.jsx)("div",{className:"footer__copy",children:e("landing.footer.copyright",{year:r()().format("YYYY")})})]})]})})},g=function(){return(0,m.jsxs)(o.rU,{className:"header__logo logo",to:"/","aria-label":"logo",children:[(0,m.jsx)("img",{className:"logo__icon",src:c.Z,alt:"",width:"32",height:"27"}),(0,m.jsx)("img",{className:"logo__text",src:d.Z,alt:"",width:"52",height:"11"})]})},x=i(2617),v={createModal:{show:!1,toggleModal:function(){}},loginModal:{show:!1,toggleModal:function(){}},menuMobile:{menuMobile:!1,toggleMenuMobile:function(){}}},j=n.createContext(v),b=i(8880),N=i(6871),w=i(8815),k=i(4700),y=function(){var e=(0,n.useContext)(x.V).auth,t=(0,l.$)().t,i=(0,n.useContext)(j).loginModal;return(0,m.jsxs)("div",{className:"menu__item-wrap",children:[(0,m.jsx)("li",{className:"menu__item",children:(0,m.jsx)(k.Z,{})}),!e.isAuth()&&(0,m.jsx)("li",{className:"menu__item",children:(0,m.jsx)("a",{className:"menu__link",href:"#",onClick:function(e){e.preventDefault(),i.toggleModal()},children:t("menu.Login")})})]})},Z=function(){var e=(0,l.$)().t,t=(0,N.TH)(),i=b._.filter((function(e){return!b.b.includes(e.title)}));return(0,m.jsxs)("ul",{className:"menu__list",children:[(0,m.jsx)("li",{className:"menu__title",children:"Menu"}),(0,m.jsx)("div",{className:"menu__item-wrap text-transform-uppercase",children:i.map((function(i,a){return(0,m.jsx)("li",{className:"menu__item",children:(0,m.jsx)(o.rU,{className:"menu__link ".concat((0,w.A)(i.path,t.pathname)?"disable-link":""),to:i.path,children:e("menu.".concat(i.title))})},i.title)}))}),(0,m.jsx)(y,{})]})};var C=i.p+"static/media/account.880c1d5c85b53f84efed400d2d3660e0.svg",M=function(){var e,t=(0,n.useContext)(x.V).auth,i=(0,l.$)().t,s=(0,n.useState)(!1),r=(0,a.Z)(s,2),o=r[0],c=r[1];return(0,m.jsxs)("div",{className:"landing-header__user-dropdown dropdown-menu landing-header__user-dropdown "+(o?"dropdown-menu--active":""),children:[(0,m.jsxs)("div",{className:"dropdown-menu__user-info",onClick:function(e){c(!o)},children:[(0,m.jsx)("img",{className:"dropdown-menu__user-icon",src:C,width:"48",height:"48",alt:"Account"}),(0,m.jsxs)("div",{className:"dropdown-menu__user-name",children:[null===(e=t.user)||void 0===e?void 0:e.email,(0,m.jsx)("i",{className:"arrow down arrow-landing"})]})]}),(0,m.jsx)("div",{className:"dropdown-menu__menu",children:(0,m.jsx)("div",{className:"dropdown-menu__menu-list landing-menu__menu-list",children:(0,m.jsx)("a",{className:"dropdown-menu__menu-item",href:"#!",onClick:function(e){e.preventDefault(),t.logout()},children:i("menu.Logout")})})})]})},S=function(){var e=(0,n.useContext)(x.V).auth,t=(0,l.$)().t,i=(0,n.useContext)(j),a=i.menuMobile,s=i.createModal;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("nav",{className:"header__menu menu"+(a.menuMobile?" menu--active":""),children:(0,m.jsx)(Z,{})}),e.isAuth()?(0,m.jsxs)("div",{className:"landing-header__user-menu-wrap",children:[(0,m.jsx)("div",{className:"landing-header__notify"}),(0,m.jsx)(M,{})]}):"",!e.isAuth()&&(0,m.jsx)("a",{className:"menu__btn btn btn--green js-modal-open",href:"#!","data-modal":"modal-2",onClick:function(e){e.preventDefault(),s.toggleModal()},children:t("menu.CreateAccount")}),(0,m.jsx)("button",{className:"menu__toggle"+(a.menuMobile?" menu__toggle--active":""),type:"button",onClick:a.toggleMenuMobile,children:(0,m.jsx)("span",{className:"menu__toggle-line"})})]})},P=function(){return(0,m.jsx)("header",{className:"page-header header",children:(0,m.jsx)("div",{className:"box",children:(0,m.jsxs)("div",{className:"header__content",children:[(0,m.jsx)(g,{}),(0,m.jsx)("div",{className:"header__nav",children:(0,m.jsx)(S,{})})]})})})},T=function(){var e=(0,l.$)().t,t=(0,n.useContext)(j).createModal;return(0,m.jsxs)("div",{className:"hero__content",children:[(0,m.jsx)("div",{className:"hero__subtitle",children:e("landing.hero.content.subTitle")}),(0,m.jsx)("h1",{className:"hero__title",children:e("landing.hero.content.title")}),(0,m.jsx)("div",{className:"hero__descr",children:(0,m.jsx)("p",{children:e("landing.hero.content.description")})}),(0,m.jsx)("button",{className:"hero__btn btn btn--green",onClick:t.toggleModal,children:e("landing.hero.content.free-account")})]})};var E=i.p+"static/media/wallet-icon.63c8090201245a24a0f671c701ed9b60.svg";var $=i.p+"static/media/swap-icon.e5293704b384c8b078e78603947fd628.svg";var D=i.p+"static/media/dex-icon.f2181bb39047c317d9fdc59427cba06b.svg";var U,A=[{id:"wallet",image:E,title:"landing.hero.features.wallet.title",desciption:"landing.hero.features.wallet.description"},{id:"swap",image:$,title:"landing.hero.features.swap.title",desciption:"landing.hero.features.swap.description"},{id:"dex",image:D,title:"landing.hero.features.dex.title",desciption:"landing.hero.features.dex.description"},{id:"license",image:i.p+"static/media/build-icon.6ab22a004e4f1ff8195979ecb5f706d2.svg",title:"landing.hero.features.license.title",desciption:"landing.hero.features.license.description"}],q=function(){var e=(0,l.$)().t;return(0,m.jsx)("section",{className:"features",children:(0,m.jsx)("ul",{className:"features__list",children:A.map((function(t){return(0,m.jsxs)("li",{className:"features__item",children:[(0,m.jsx)(u.ZP,{height:"20",once:!0,children:(0,m.jsx)("img",{width:"20px",height:"20px",className:"features__icon",src:t.image,alt:""})}),(0,m.jsx)("h2",{className:"features__title",children:(0,f.ZP)(e(t.title))}),(0,m.jsx)("p",{className:"features__descr",children:e(t.desciption)})]},t.id)}))})})},G=i(1668),H="".concat(G.x,"/simple");!function(e){e.YES="true",e.NO="false"}(U||(U={}));var Y=i(6282),F=i(2394),L=i.p+"static/media/visa.0de74ed7128ef67ea43d.webp",R=i.p+"static/media/stripe.98d97be7836d27550402.webp",B=[{key:"visa",image:L},{key:"paypal",image:i.p+"static/media/paypal.499284fe22a867d4c6ac.webp"},{key:"stripe",image:R}],O=[{value:"bitcoin",label:"BTC"},{value:"ethereum",label:"ETH"},{value:"ripple",label:"XRP"}],V=["bitcoin","ethereum","ripple"],I=i(6789),W=function(e){var t=0;if(e>1&&(t=6),e>1e5&&(t=2),e<1&&e>0){for(var i=e;i<1;)t++,i*=10;t++}return e.toFixed(t)},J=function(){var e=(0,l.$)().t,t=(0,n.useContext)(j).createModal,i=(0,n.useState)("visa"),s=(0,a.Z)(i,2),r=s[0],o=s[1],c=(0,n.useState)(""),d=(0,a.Z)(c,2),u=d[0],h=d[1],p=(0,n.useState)(""),f=(0,a.Z)(p,2),_=f[0],g=f[1],x=(0,n.useState)(O[0]),v=(0,a.Z)(x,2),b=v[0],N=v[1],w=(0,n.useState)(I.A[0]),k=(0,a.Z)(w,2),y=k[0],Z=k[1],C=(0,n.useState)(!1),M=(0,a.Z)(C,2),S=M[0],P=M[1],T=(0,n.useMemo)((function(){return e={vs_currencies:y.value.toString(),ids:V.join()},{url:"".concat(H,"/price"),method:"GET",params:e};var e}),[y]),E=(0,Y.Z)(T),$=E.response,D=E.sendData,U=E.loading;(0,n.useEffect)((function(){U||D(T)}),[T]);var A=(0,n.useMemo)((function(){P(!1);var e={};if(null!==$&&void 0!==$&&$.data){V.forEach((function(t){e[t]=null===$||void 0===$?void 0:$.data[t][y.value]})),u?(h(u),g(String(W(Number(u)*e[b.value])))):(g(""),h(""));var t=setTimeout((function(){P(!0),clearTimeout(t)}),1500)}return e}),[$]);function q(e){o(e.target.getAttribute("data-key"))}return(0,m.jsx)("div",{className:"hero__purchase",children:(0,m.jsxs)("div",{className:"purchase",children:[(0,m.jsxs)("div",{className:"purchase__converter converter",children:[(0,m.jsx)("h2",{className:"converter__title",children:e("landing.hero.purchase.title")}),(0,m.jsxs)("div",{className:"converter__inner",children:[(0,m.jsx)("div",{className:"converter__item-title",children:e("landing.hero.purchase.buy")}),(0,m.jsxs)("div",{className:"converter__item",children:[(0,m.jsx)("input",{className:"converter__input",type:"number",value:u,placeholder:"0,00",onChange:function(e){if(!e.target.value)return g(""),void h("");h(e.target.value),g(String(W(Number(e.target.value)*A[b.value])))},disabled:!S}),(0,m.jsx)("div",{className:"converter__coin",children:(0,m.jsx)("div",{className:"converter__coin-name",children:(0,m.jsx)(F.Z,{values:O,selected:b,onChange:function(e){N(e),u?(h(u),g(String(W(Number(u)*A[e.value])))):(g(""),h(""))},isDisabled:!S})})})]}),(0,m.jsx)("div",{className:"converter__item-title",children:e("landing.hero.purchase.for")}),(0,m.jsxs)("div",{className:"converter__item",children:[(0,m.jsx)("input",{className:"converter__input",value:_,type:"number",placeholder:"0,00",onChange:function(e){if(!e.target.value)return g(""),void h("");g(e.target.value),h(String(W(Number(e.target.value)/A[b.value])))},disabled:!S}),(0,m.jsx)("div",{className:"converter__coin",children:(0,m.jsx)("div",{className:"converter__coin-name",children:(0,m.jsx)(F.Z,{values:I.A,selected:y,onChange:function(e){Z(e)},isDisabled:!S})})})]})]})]}),(0,m.jsx)("div",{className:"purchase__payment-method payment-method",children:B.map((function(e){return(0,m.jsx)("div",{className:"payment-method__item"+(e.key===r?" payment-method__item--active":""),onClick:q,"data-key":e.key,children:(0,m.jsx)("img",{className:"filter--gray",src:e.image,width:"66",height:"25","data-key":e.key,alt:e.key})},e.key)}))}),(0,m.jsx)("button",{className:"purchase__btn btn btn--blue",onClick:t.toggleModal,children:e("landing.hero.purchase.buy-item",{item:b.label})})]})})},X=function(){return(0,m.jsx)("section",{className:"hero",children:(0,m.jsx)("div",{className:"box",children:(0,m.jsxs)("div",{className:"hero__inner",children:[(0,m.jsx)(T,{}),(0,m.jsx)(J,{}),(0,m.jsx)(q,{})]})})})},z=i.p+"static/media/bg-dots.b40ca7f0c2be3dd1f52b.webp",K=i(3433),Q=i(7578),ee=i(3513),te=i(6186),ie=i(3813),ae=i(4278),ne=function(){var e=(0,l.$)().t,t=(0,Q.dO)({vs_currency:"usd",per_page:5,page:1}),i=(0,Y.Z)(t).response,s=(0,n.useState)(!0),r=(0,a.Z)(s,2),o=r[0],c=r[1],d=(0,n.useMemo)((function(){c(!0);var e=null!==i&&void 0!==i&&i.data?(0,K.Z)(i.data):[],t=setTimeout((function(){c(!1),clearTimeout(t)}),1500);return e}),[i]),u=[{id:"name",name:e("markets.columns.name"),selector:function(e){return e.name},cell:function(e){return(0,m.jsxs)("div",{className:"col-favourites",children:[(0,m.jsx)("img",{src:e.image,width:"40px",height:"40px",alt:e.name,style:{marginRight:"10px"}}),(0,m.jsx)("p",{className:"col-info",children:e.name})]})},sortable:!0,minWidth:"20%",maxWidth:"30%"},{id:"current_price",name:e("markets.columns.last-price"),selector:function(e){return e.current_price},cell:function(e){return(0,m.jsx)("p",{className:"col-info",children:(0,m.jsx)("span",{className:(0,te.p)(e.price_change_24h),children:e.current_price})})},sortable:!0},{id:"price_change_percentage_24h",name:e("markets.columns.24h-\u0441hange"),selector:function(e){return e.price_change_percentage_24h},cell:function(e){return(0,m.jsx)("p",{className:"col-info",children:(0,m.jsxs)("span",{className:(0,te.p)(e.price_change_percentage_24h),children:[e.price_change_percentage_24h," %"]})})},sortable:!0},{id:"high_24h",name:e("markets.columns.24h-high"),selector:function(e){return e.high_24h},cell:function(e){return(0,m.jsx)("p",{className:"col-info",children:(0,m.jsx)("span",{className:(0,te.p)(e.high_24h),children:e.high_24h})})},sortable:!0},{id:"low_24h",name:e("markets.columns.24h-low"),selector:function(e){return e.low_24h},cell:function(e){return(0,m.jsx)("p",{className:"col-info",children:(0,m.jsx)("span",{className:(0,te.p)(e.low_24h),children:e.low_24h})})},sortable:!0},{id:"market_cap",name:e("markets.columns.market-cap"),selector:function(e){return e.market_cap},sortable:!0},{id:"total_volume",name:e("markets.columns.24h-volume"),selector:function(e){return e.total_volume},sortable:!0},{id:"chart",name:"",cell:function(e){return(0,m.jsx)(ie.Z,{coinId:e.id,color:(0,te.L)(e.price_change_percentage_24h),width:140,height:70})},sortable:!1}];return(0,m.jsx)(ee.ZP,{className:"markets__table table",noDataComponent:e("landing.market-info.table-have-not-data"),columns:u,data:d,progressPending:o,progressComponent:(0,m.jsx)(ae.Z,{})})},se=function(){var e=(0,l.$)().t;return(0,m.jsxs)("section",{className:"markets-info",children:[(0,m.jsx)("div",{className:"markets-info__bg",children:(0,m.jsx)("img",{className:"markets-info__bg-img",src:z,alt:""})}),(0,m.jsx)("div",{className:"box-custom",children:(0,m.jsxs)("div",{className:"markets-info__inner",children:[(0,m.jsx)("div",{className:"markets-info__subtitle subtitle",children:e("landing.market-info.subtitle").toUpperCase()}),(0,m.jsx)("h2",{className:"markets-info__title title",children:e("landing.market-info.title")}),(0,m.jsx)("div",{className:"markets-info__content",children:(0,m.jsx)("div",{className:"markets-info__table custom-scroll",children:(0,m.jsx)(ne,{})})}),(0,m.jsx)("div",{className:"markets-info__link-wrap",children:(0,m.jsxs)(o.rU,{className:"markets-info__link",to:"/markets",children:[e("landing.market-info.view-all"),(0,m.jsx)("svg",{className:"markets-info__link-icon",width:"20",height:"12",children:(0,m.jsx)("use",{xlinkHref:"#arrow-right-icon"})})]})})]})})]})},re=i.p+"static/media/security.42cda51067227c1ead48.webp",le=i.p+"static/media/deposit.06b775be0242a57e960e.webp",oe=i.p+"static/media/support.298a394b68f026c831e1.webp",ce=[{id:"security",image:re,title:"landing.privileges.list.security.title",subtitle:"landing.privileges.list.security.subtitle",description:"landing.privileges.list.security.description"},{id:"deposit",image:le,title:"landing.privileges.list.deposit.title",subtitle:"landing.privileges.list.deposit.subtitle",description:"landing.privileges.list.deposit.description"},{id:"liquid",image:i.p+"static/media/liquid.0881c22634d82fe91f25.webp",title:"landing.privileges.list.liquid.title",subtitle:"landing.privileges.list.liquid.subtitle",description:"landing.privileges.list.liquid.description"},{id:"support",image:oe,title:"landing.privileges.list.support.title",subtitle:"landing.privileges.list.support.subtitle",description:"landing.privileges.list.support.description"}],de=function(){var e=(0,l.$)().t;return(0,m.jsx)("ul",{className:"privileges__list privileges-list",children:ce.map((function(t){return(0,m.jsxs)("li",{className:"privileges-list__item",children:[(0,m.jsx)("div",{className:"privileges-list__picture",children:(0,m.jsx)(u.ZP,{height:190,children:(0,m.jsx)("img",{width:"190px",height:"190px",className:"privileges-list__img",src:t.image,alt:t.id})})}),(0,m.jsx)("div",{className:"privileges-list__subtitle",children:e(t.subtitle).toUpperCase()}),(0,m.jsx)("div",{className:"privileges-list__title",children:e(t.title)}),(0,m.jsx)("div",{className:"privileges-list__descr",children:(0,m.jsx)("p",{children:e(t.description)})})]},t.id)}))})},ue=function(){var e=(0,l.$)().t;return(0,m.jsx)("section",{className:"privileges",children:(0,m.jsxs)("div",{className:"box",children:[(0,m.jsx)("div",{className:"privileges__subtitle subtitle",children:e("landing.privileges.subtitle").toLocaleUpperCase()}),(0,m.jsx)("h2",{className:"privileges__title title",children:e("landing.privileges.title")}),(0,m.jsx)(de,{})]})})},me=i.p+"static/media/trade-desktop.b88ee98c45572634e2b0.png",he=i.p+"static/media/trade-desktop@2x.c78ce8f4f42fe1c3bb49.png",pe=i.p+"static/media/trade-desktop.11dc576499bfbf61568c.webp",fe=i.p+"static/media/trade-desktop@2x.858272ccc5758a3a8a00.webp",_e=i.p+"static/media/trade-tablet.e7aa8077231a5336bb7b.png",ge=i.p+"static/media/trade-tablet@2x.06a9bd478addbda44c03.png",xe=i.p+"static/media/trade-tablet.d46e36d80b4f4a5c64dd.webp",ve=i.p+"static/media/trade-tablet@2x.c4a07a0ffcaea151791a.webp",je=i.p+"static/media/trade-mobile.a8f82b3ed09c31e8585c.png",be=i.p+"static/media/trade-mobile@2x.35e9e3cfc8ea21e972f4.png",Ne=i.p+"static/media/trade-mobile.1bc44c87369b7796f593.webp",we=i.p+"static/media/trade-mobile@2x.26b081b71d62e04b88b7.webp",ke=function(){var e=(0,l.$)().t;return(0,m.jsxs)("section",{className:"trade-info",children:[(0,m.jsxs)("div",{className:"box",children:[(0,m.jsx)("h2",{className:"trade-info__title title",children:e("landing.trade-info.title")}),(0,m.jsx)("div",{className:"trade-info__descr",children:(0,m.jsx)("p",{children:(0,f.ZP)(e("landing.trade-info.description"))})})]}),(0,m.jsx)("div",{className:"trade-info__picture",children:(0,m.jsx)(u.ZP,{height:144,once:!0,children:(0,m.jsxs)("picture",{children:[(0,m.jsx)("source",{type:"image/webp",media:"(min-width: 1200px)",srcSet:"".concat(pe,", ").concat(fe," 2x")}),(0,m.jsx)("source",{type:"image/webp",media:"(min-width: 768px)",srcSet:"".concat(xe,", ").concat(ve," 2x")}),(0,m.jsx)("source",{type:"image/webp",srcSet:"".concat(Ne,", ").concat(we," 2x")}),(0,m.jsx)("source",{media:"(min-width: 1200px)",srcSet:"".concat(me,", ").concat(he," 2x")}),(0,m.jsx)("source",{media:"(min-width: 768px)",srcSet:"".concat(_e,", ").concat(ge," 2x")}),(0,m.jsx)("img",{className:"trade-info__image",src:je,srcSet:be,alt:"trade",width:"300",height:"144"})]})})})]})},ye=function(){return(0,m.jsxs)("main",{className:"page-main",children:[(0,m.jsx)(X,{}),(0,m.jsx)(u.ZP,{height:200,once:!0,children:(0,m.jsx)(se,{})}),(0,m.jsx)(u.ZP,{height:200,children:(0,m.jsx)(ke,{})}),(0,m.jsx)(u.ZP,{height:200,children:(0,m.jsx)(ue,{})})]})},Ze=i(6673),Ce=function(e){return/\S+@\S+\.\S+/.test(e)},Me=function(){var e=(0,n.useContext)(x.V).auth,t=(0,n.useContext)(j).createModal,i=(0,l.$)().t,s=(0,n.useState)("password"),r=(0,a.Z)(s,2),o=r[0],c=r[1],d=(0,n.useState)("show-icon show-icon--line"),u=(0,a.Z)(d,2),h=u[0],p=u[1],f=(0,n.useState)(""),_=(0,a.Z)(f,2),g=_[0],v=_[1],b=(0,n.useState)(""),N=(0,a.Z)(b,2),w=N[0],k=N[1],y=(0,n.useState)(!1),Z=(0,a.Z)(y,2),C=Z[0],M=Z[1],S=(0,n.useState)(""),P=(0,a.Z)(S,2),T=P[0],E=P[1];function $(e){M(!1),E(""),v(""),k(""),t.toggleModal()}return(0,m.jsxs)("div",{className:"modal"+(t.show?" modal--active":" "),children:[(0,m.jsx)("div",{className:"modal__inner modal--exit",onClick:$}),(0,m.jsxs)("div",{className:"modal__content",children:[(0,m.jsx)("div",{className:"modal__close-btn modal--exit",onClick:$}),(0,m.jsx)("div",{className:"modal__title",children:i("landing.modals.create.title").toUpperCase()}),(0,m.jsx)("div",{className:"modal__form",children:(0,m.jsxs)("form",{className:"form",method:"post",onSubmit:function(a){if(a.preventDefault(),M(!1),E(""),!Ce(w))return M(!0),void E(i("error.global.not-valid-email"));if(!g)return M(!0),void E(i("error.global.empty-password"));if(w&&g){var n=(0,Ze.v0)();(0,Ze.Xb)(n,w,g).then((function(i){var a=i.user;e.login(a),v(""),k(""),t.toggleModal()})).catch((function(e){M(!0),E(i("error.firebase."+e.code.replaceAll("/","-")))}))}},children:[(0,m.jsxs)("div",{className:"form__group modal__form-group",children:[(0,m.jsx)("label",{className:"form__label modal__form-label",htmlFor:"email",children:i("landing.modals.create.form.email")}),(0,m.jsx)("input",{className:"form__input modal__form-input "+(C?"error__input":""),value:w,onChange:function(e){k(e.target.value)},type:"email",id:"email",placeholder:i("landing.modals.create.form.email"),autoComplete:"username"})]}),(0,m.jsxs)("div",{className:"form__group modal__form-group",children:[(0,m.jsx)("label",{className:"form__label modal__form-label",htmlFor:"password",children:i("landing.modals.create.form.password")}),(0,m.jsxs)("div",{className:"form__input-wrap modal__form-input-wrap",children:[(0,m.jsx)("input",{className:"form__input modal__form-input "+(C?"error__input":""),value:g,onChange:function(e){v(e.target.value)},type:o,id:"password",placeholder:i("landing.modals.create.form.password"),autoComplete:"current-password"}),(0,m.jsxs)("div",{className:"show-icon-wrap js-show-icon",onClick:function(e){p("password"===o?"show-icon show-icon--line visually-hidden":"show-icon show-icon--line"),c("password"===o?"text":"password")},children:[(0,m.jsx)("svg",{className:"show-icon",width:"20",height:"20",children:(0,m.jsx)("use",{xlinkHref:"#eye-icon"})}),(0,m.jsx)("svg",{className:h,width:"20",height:"20",children:(0,m.jsx)("use",{xlinkHref:"#line-icon"})})]})]})]}),(0,m.jsx)("div",{className:"modal__text-wrap error__wrap",children:C&&(0,m.jsx)("div",{className:"modal__text error__modal__text",children:T})}),(0,m.jsx)("button",{className:"form__submit modal__form-submit btn btn--blue",type:"submit",children:i("landing.modals.create.sign-up")}),(0,m.jsx)("div",{className:"modal__text-wrap text-center",children:(0,m.jsxs)("div",{className:"modal__text",children:[(0,m.jsx)("p",{children:i("landing.modals.create.description")}),(0,m.jsxs)("p",{children:[(0,m.jsx)("a",{className:"modal__link",href:"/#",children:i("landing.modals.create.terms-of-service")})," & ",(0,m.jsx)("a",{className:"modal__link",href:"/#",children:i("landing.modals.create.privacy-policy")})]})]})})]})})]})]})},Se=function(){var e=(0,n.useState)(!1),t=(0,a.Z)(e,2),i=t[0],s=t[1];return{showModal:i,toggleShowModal:function(){s(!i)}}},Pe=function(){var e=(0,n.useContext)(x.V).auth,t=(0,n.useContext)(j),i=t.loginModal,s=t.createModal,r=(0,l.$)().t,o=(0,n.useState)("password"),c=(0,a.Z)(o,2),d=c[0],u=c[1],h=(0,n.useState)("show-icon show-icon--line"),p=(0,a.Z)(h,2),f=p[0],_=p[1],g=(0,n.useState)(""),v=(0,a.Z)(g,2),b=v[0],N=v[1],w=(0,n.useState)(""),k=(0,a.Z)(w,2),y=k[0],Z=k[1],C=(0,n.useState)(!1),M=(0,a.Z)(C,2),S=M[0],P=M[1],T=(0,n.useState)(""),E=(0,a.Z)(T,2),$=E[0],D=E[1];function U(e){P(!1),D(""),N(""),Z(""),i.toggleModal()}return(0,m.jsxs)("div",{className:"modal"+(i.show?" modal--active":" "),children:[(0,m.jsx)("div",{className:"modal__inner modal--exit",onClick:U}),(0,m.jsxs)("div",{className:"modal__content",children:[(0,m.jsx)("div",{className:"modal__close-btn modal--exit",onClick:U}),(0,m.jsx)("div",{className:"modal__title",children:r("landing.modals.login.title")}),(0,m.jsx)("div",{className:"modal__form",children:(0,m.jsxs)("form",{className:"form",method:"post",onSubmit:function(t){if(t.preventDefault(),P(!1),D(""),!Ce(y))return P(!0),void D(r("error.global.not-valid-email"));if(!b)return P(!0),void D(r("error.global.empty-password"));if(y&&b){var a=(0,Ze.v0)();(0,Ze.e5)(a,y,b).then((function(t){var a=t.user;e.login(a),N(""),Z(""),i.toggleModal()})).catch((function(e){P(!0),D(r("error.firebase."+e.code.replaceAll("/","-")))}))}},children:[(0,m.jsxs)("div",{className:"form__group modal__form-group",children:[(0,m.jsx)("label",{className:"form__label modal__form-label",htmlFor:"email-1",children:r("landing.modals.login.form.email")}),(0,m.jsx)("input",{className:"form__input modal__form-input "+(S?"error__input":""),value:y,onChange:function(e){Z(e.target.value)},type:"email",id:"email-1",placeholder:r("landing.modals.login.form.email"),autoComplete:"username"})]}),(0,m.jsxs)("div",{className:"form__group modal__form-group",children:[(0,m.jsx)("label",{className:"form__label modal__form-label",htmlFor:"password-1",children:r("landing.modals.login.form.password")}),(0,m.jsxs)("div",{className:"form__input-wrap modal__form-input-wrap",children:[(0,m.jsx)("input",{className:"form__input modal__form-input "+(S?"error__input":""),value:b,onChange:function(e){N(e.target.value)},type:d,id:"password-1",placeholder:r("landing.modals.login.form.password"),autoComplete:"current-password"}),(0,m.jsxs)("div",{className:"show-icon-wrap js-show-icon",onClick:function(e){_("password"===d?"show-icon show-icon--line visually-hidden":"show-icon show-icon--line"),u("password"===d?"text":"password")},children:[(0,m.jsx)("svg",{className:"show-icon",width:"20",height:"20",children:(0,m.jsx)("use",{xlinkHref:"#eye-icon"})}),(0,m.jsx)("svg",{className:f,width:"20",height:"20",children:(0,m.jsx)("use",{xlinkHref:"#line-icon"})})]})]})]}),(0,m.jsx)("div",{className:"error__wrap",children:S&&(0,m.jsx)("div",{className:"modal__text error__modal__text",children:$})}),(0,m.jsx)("button",{className:"form__submit modal__form-submit btn btn--blue",type:"submit",children:r("landing.modals.login.log-in")}),(0,m.jsx)("div",{className:"modal__text-wrap text-center",children:(0,m.jsxs)("div",{className:"modal__text",children:[r("landing.modals.login.have-account")," ",(0,m.jsxs)("a",{className:"modal__link modal--exit",href:"#!","data-modal":"modal-2",onClick:function(e){e.preventDefault(),P(!1),D(""),i.toggleModal(),s.toggleModal()},children:[" ",r("landing.modals.login.sign-up")]})]})})]})})]})]})},Te=function(){var e=Se(),t=e.showModal,i=e.toggleShowModal,s=Se(),r=s.showModal,l=s.toggleShowModal,o=(0,n.useState)(!1),c=(0,a.Z)(o,2),d=c[0],h=c[1];return(0,m.jsx)(j.Provider,{value:{createModal:{show:r,toggleModal:l},loginModal:{show:t,toggleModal:i},menuMobile:{menuMobile:d,toggleMenuMobile:function(){h(!d)}}},children:(0,m.jsx)("div",{className:"page",children:(0,m.jsxs)("div",{className:"page__body"+(r||t||d?" no-scroll":""),children:[(0,m.jsx)(P,{}),(0,m.jsx)(ye,{}),(0,m.jsx)(u.ZP,{height:200,children:(0,m.jsx)(_,{})}),(0,m.jsx)(Me,{}),(0,m.jsx)(Pe,{})]})})})}},6789:function(e,t,i){i.d(t,{A:function(){return a}});var a=[{value:"usd",label:"USD"},{value:"rub",label:"RUB"}];a[0]},3813:function(e,t,i){i.d(t,{Z:function(){return x}});var a=i(9439),n=i(2791),s=i(812),r=i(2891),l=i(2955),o=i(7578),c=i(5861),d=i(7757),u=i.n(d),m=i(4569),h=i.n(m),p=function(e){var t=(0,n.useState)(),i=(0,a.Z)(t,2),s=i[0],r=i[1],l=(0,n.useState)(),o=(0,a.Z)(l,2),d=o[0],m=o[1],p=(0,n.useState)("GET"===e.method||"get"===e.method),f=(0,a.Z)(p,2),_=f[0],g=f[1],x=function(){var e=(0,c.Z)(u().mark((function e(t){var i;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h().request(t);case 3:i=e.sent,r(i),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),m(e.t0);case 10:return e.prev=10,g(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,c.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,n.useEffect)((function(){"GET"!==e.method&&"get"!==e.method||x(e)}),[e]),{response:s,error:d,loading:_,sendData:v}},f=i(4864),_=i(4278),g=i(184),x=function(e){var t=e.coinId,i=e.color,c=e.width,d=void 0===c?140:c,u=e.height,m=void 0===u?70:u,h=(0,n.useContext)(f.tE).currency,x=(0,n.useMemo)((function(){return(0,o.JI)(t,{vs_currency:h.currency,days:"1"})}),[h.currency]),v=p(x).response,j=(0,n.useState)(!1),b=(0,a.Z)(j,2),N=b[0],w=b[1],k=(0,n.useMemo)((function(){var e,t;w(!1);var i=[];null===v||void 0===v||null===(e=v.data)||void 0===e||null===(t=e.prices)||void 0===t||t.forEach((function(e){i.push({x:e[0],y:e[1]})}));var a=setTimeout((function(){w(!0),clearTimeout(a)}),1500);return i}),[v]);return(0,g.jsx)(g.Fragment,{children:N?(0,g.jsxs)(s.T,{width:d,height:m,data:k,margin:{top:10,right:30,left:0,bottom:10},children:[(0,g.jsx)(r.B,{hide:!0,type:"number",domain:["auto","auto"]}),(0,g.jsx)(l.u,{type:"monotone",dataKey:"y",stroke:i,fill:i})]}):(0,g.jsx)(_.Z,{isRevert:!0,style:{height:"24px",width:"24px"}})})}},4864:function(e,t,i){i.d(t,{tE:function(){return l}});i(6789);var a,n=i(9334),s=i(2791);!function(e){e.category="category",e.search="search",e.platform="platform",e.coins="coins",e.lastPrice="lastPrice"}(a||(a={}));var r={platforms:{list:{},addPlatform:function(e){}},filters:{list:{},addFilter:function(e){}},coins:{list:[],removeCoin:function(e){},addCoin:function(e){}},currency:{currency:n.OM,changeCurrency:function(e){}}},l=s.createContext(r)},4278:function(e,t,i){i.d(t,{Z:function(){return n}});var a=i(184),n=function(e){var t=e.isRevert,i=void 0!==t&&t,n=e.style,s=void 0===n?{}:n,r=i?"loader loader-revert":"loader";return(0,a.jsx)("div",{className:"wrap-loader",children:(0,a.jsx)("span",{className:r,style:s})})}},1668:function(e,t,i){i.d(t,{x:function(){return a}});var a="https://api.coingecko.com/api/v3"},6186:function(e,t,i){i.d(t,{L:function(){return n},p:function(){return a}});var a=function(e){return e>0?"color-green":"color-red"},n=function(e){return e>0?"#24ac80":"#ef4f46"}},9334:function(e,t,i){i.d(t,{AW:function(){return n},OM:function(){return s},f4:function(){return r},j:function(){return a},zC:function(){return l}});var a=[{value:"usd",label:"USD",sign:"$"},{value:"gbp",label:"GBP",sign:"\xa3"},{value:"rub",label:"RUB",sign:"\u20bd"}],n=function(e){return a.filter((function(t){return t.value===e}))[0]},s="usd",r={usd:"$",gbp:"\xa3",rub:"\u20bd"},l=function(){var e,t=null!==(e=new URLSearchParams(window.location.search).get("currency"))&&void 0!==e?e:"";return t||s}},6282:function(e,t,i){var a=i(5861),n=i(9439),s=i(7757),r=i.n(s),l=i(2791),o=i(4569),c=i.n(o);t.Z=function(e){var t=(0,l.useState)(),i=(0,n.Z)(t,2),s=i[0],o=i[1],d=(0,l.useState)(),u=(0,n.Z)(d,2),m=u[0],h=u[1],p=(0,l.useState)("GET"===e.method||"get"===e.method),f=(0,n.Z)(p,2),_=f[0],g=f[1],x=function(){var e=(0,a.Z)(r().mark((function e(t){var i;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c().request(t);case 3:i=e.sent,o(i),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),h(e.t0);case 10:return e.prev=10,g(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,a.Z)(r().mark((function e(t){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,l.useEffect)((function(){"GET"!==e.method&&"get"!==e.method||x(e)}),[]),{response:s,error:m,loading:_,sendData:v}}}}]);
//# sourceMappingURL=881.221bc62c.chunk.js.map