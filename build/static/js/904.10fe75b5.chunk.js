"use strict";(self.webpackChunkstrade_react_typescript=self.webpackChunkstrade_react_typescript||[]).push([[904],{4566:function(e,a,s){s(2791);var n=s(3504),l=s(1229),o=s(5677),r=s(184);a.Z=function(){return(0,r.jsxs)(n.rU,{className:"dashboard-header__logo logo",to:"/","aria-label":"logo",children:[(0,r.jsx)("img",{className:"logo__icon",src:l.Z,alt:"",width:"32",height:"27"}),(0,r.jsx)("img",{className:"dashboard-header__logo-text",src:o.Z,alt:"",width:"52",height:"11"})]})}},6089:function(e,a,s){s.d(a,{Z:function(){return d}});var n=s(9439),l=s(2791),o=s(3168),r=s(2617);var t=s.p+"static/media/account.880c1d5c85b53f84efed400d2d3660e0.svg",i=s(184),d=function(){var e,a=(0,l.useContext)(r.V).auth,s=(0,o.$)().t,d=(0,l.useState)(!1),c=(0,n.Z)(d,2),m=c[0],u=c[1];return(0,i.jsxs)("div",{className:"dashboard-header__user-dropdown dropdown-menu "+(m?"dropdown-menu--active":""),children:[(0,i.jsxs)("div",{className:"dropdown-menu__user-info",onClick:function(e){u(!m)},children:[(0,i.jsx)("img",{className:"dropdown-menu__user-icon",src:t,width:"48",height:"48",alt:"Account"}),(0,i.jsxs)("div",{className:"dropdown-menu__user-name",children:[null===(e=a.user)||void 0===e?void 0:e.email,(0,i.jsx)("i",{className:"arrow down"})]})]}),(0,i.jsx)("div",{className:"dropdown-menu__menu",children:(0,i.jsx)("div",{className:"dropdown-menu__menu-list",children:(0,i.jsx)("a",{className:"dropdown-menu__menu-item",href:"#!",onClick:function(e){e.preventDefault(),a.logout()},children:s("menu.Logout")})})})]})}},6904:function(e,a,s){s.r(a),s.d(a,{default:function(){return Z}});var n=s(9439),l=s(2791),o=s(2617),r=s(4566),t=s(6089),i={createModal:{show:!1,toggleModal:function(){}},menuMobile:{menuMobile:!1,toggleMenuMobile:function(){}}},d=l.createContext(i),c=s(4700),m=s(184),u=function(){return(0,m.jsx)("div",{className:"dashboard-header__menu-item-wrap",children:(0,m.jsx)("div",{className:"dashboard-header__menu-item",children:(0,m.jsx)(c.Z,{})})})},h=s(8880),_=s(3168),p=s(3504),x=s(6871),j=s(8815),v=function(){var e=(0,_.$)().t,a=(0,x.TH)(),s=h._.filter((function(e){return!h.b.includes(e.title)}));return(0,m.jsx)("div",{className:"dashboard-header__menu-item-wrap",children:s.map((function(s,n){return(0,m.jsx)("div",{className:"dashboard-header__menu-item",children:(0,m.jsx)(p.rU,{className:"dashboard-header__menu-link ".concat((0,j.A)(s.path,a.pathname)?"dashboard-header__menu-link--active disable-link":""),to:s.path,children:e("menu.".concat(s.title))})},s.title)}))})},w=function(){var e=(0,l.useContext)(d).menuMobile;return(0,m.jsx)("nav",{className:"header__menu menu"+(e.menuMobile?" dashboard-header__menu--active":""),children:(0,m.jsxs)("div",{className:"dashboard-header__menu-list",children:[(0,m.jsx)(v,{}),(0,m.jsx)(u,{})]})})},f=function(){var e=(0,l.useContext)(o.V).auth,a=(0,l.useContext)(d).menuMobile;return(0,m.jsx)("header",{className:"page-header dashboard-header",children:(0,m.jsxs)("div",{className:"dashboard-header__content",children:[(0,m.jsx)(r.Z,{}),(0,m.jsxs)("div",{className:"dashboard-header__nav",children:[(0,m.jsx)(w,{}),e.isAuth()?(0,m.jsxs)("div",{className:"dashboard-header__user-menu-wrap",children:[(0,m.jsx)("div",{className:"dashboard-header__notify"}),(0,m.jsx)(t.Z,{})]}):"",(0,m.jsx)("button",{className:"dashboard-header__menu-toggle",type:"button","aria-label":"mobile-menu",onClick:a.toggleMenuMobile,children:(0,m.jsx)("span",{className:"dashboard-header__menu-toggle-line",children:(0,m.jsx)("svg",{className:"dashboard-header__menu-toggle-icon",width:"20",height:"20",children:(0,m.jsx)("use",{xlinkHref:"#menu-icon"})})})})]})]})})},b=function(){var e=(0,_.$)().t;return(0,m.jsx)("div",{className:"swap__topbar",children:(0,m.jsx)("h1",{className:"swap__topbar-title",children:e("swap.title")})})};var N=s.p+"static/media/swap.edb9cf555d740aac6573b800efe86a73.svg",g=[{value:"ETH",label:"ETH"},{value:"BTC",label:"BTC"},{value:"BNB",label:"BNB"},{value:"XRP",label:"XRP"},{value:"TRON",label:"TRON"},{value:"OKB",label:"OKB"}],C=s(2394),M=function(){var e=(0,_.$)().t,a=(0,l.useContext)(d).createModal,s=(0,l.useState)("BTC"),o=(0,n.Z)(s,2),r=o[0],t=o[1],i=(0,l.useState)(""),c=(0,n.Z)(i,2),u=c[0],h=c[1],p=(0,l.useState)(g[0]),x=(0,n.Z)(p,2),j=x[0],v=x[1],w=(0,l.useState)(g[1]),f=(0,n.Z)(w,2),M=f[0],k=f[1];return(0,m.jsx)("main",{className:"page-main",children:(0,m.jsxs)("section",{className:"swap",children:[(0,m.jsx)(b,{}),(0,m.jsxs)("div",{className:"swap__content",children:[(0,m.jsx)("div",{className:"swap__content-col",children:(0,m.jsxs)("form",{className:"swap__form",onSubmit:function(e){e.preventDefault()},children:[(0,m.jsx)("div",{className:"swap__content-title",children:e("swap.currency-conversion")}),(0,m.jsxs)("div",{className:"form__group modal__form-group",children:[(0,m.jsxs)("div",{className:"swap__form-text-inner",children:[(0,m.jsx)("div",{className:"swap__form-text",children:e("swap.convert")}),(0,m.jsxs)("div",{className:"swap__form-text",children:[e("swap.available"),":",(0,m.jsxs)("span",{children:["-- ",r]})]})]}),(0,m.jsxs)("div",{className:"swap__form-input-wrap",children:[(0,m.jsx)("div",{children:(0,m.jsx)(C.Z,{values:g,selected:M,onChange:function(e){t(e.label),k(e)}})}),(0,m.jsx)("div",{className:"swap__form__input-convert",children:(0,m.jsx)("input",{className:"swap__form-input",type:"text",value:u,placeholder:e("swap.enter-amount"),onChange:function(e){h(e.target.value)}})})]}),(0,m.jsx)("div",{className:"swap__form-text",children:e("swap.to")}),(0,m.jsx)(C.Z,{values:g,selected:j,onChange:function(e){v(e)}}),(0,m.jsx)("button",{className:"swap__form-submit-btn btn btn-green",type:"button",onClick:function(){a.toggleModal()},children:e("swap.swap")})]})]})}),(0,m.jsx)("div",{className:"swap__content-col swap__content-col--picture",children:(0,m.jsx)("div",{className:"swap__content-wrap",children:(0,m.jsx)("div",{className:"swap__content-picture",children:(0,m.jsx)("img",{className:"swap__content-img",src:N,alt:"swap"})})})})]})]})})},k=function(){var e=(0,l.useContext)(d).createModal,a=(0,_.$)().t,s=(0,l.useState)("password"),o=(0,n.Z)(s,2),r=o[0],t=o[1],i=(0,l.useState)("show-icon show-icon--line"),c=(0,n.Z)(i,2),u=c[0],h=c[1];return(0,m.jsxs)("div",{className:"modal"+(e.show?" modal--active":" "),children:[(0,m.jsx)("div",{className:"modal__inner modal--exit",onClick:e.toggleModal}),(0,m.jsxs)("div",{className:"modal__content",children:[(0,m.jsx)("div",{className:"modal__close-btn modal--exit",onClick:e.toggleModal}),(0,m.jsx)("div",{className:"modal__title",children:a("swap.modals.create.title").toUpperCase()}),(0,m.jsx)("div",{className:"modal__form",children:(0,m.jsxs)("form",{className:"form",method:"post",onSubmit:function(e){e.preventDefault()},children:[(0,m.jsxs)("div",{className:"form__group modal__form-group",children:[(0,m.jsx)("label",{className:"form__label modal__form-label",htmlFor:"email",children:a("swap.modals.create.form.email")}),(0,m.jsx)("input",{className:"form__input modal__form-input",type:"email",id:"email",placeholder:a("swap.modals.create.form.email"),autoComplete:"username"})]}),(0,m.jsxs)("div",{className:"form__group modal__form-group",children:[(0,m.jsx)("label",{className:"form__label modal__form-label",htmlFor:"password",children:a("swap.modals.create.form.password")}),(0,m.jsxs)("div",{className:"form__input-wrap modal__form-input-wrap",children:[(0,m.jsx)("input",{className:"form__input modal__form-input",type:r,id:"password",placeholder:a("swap.modals.create.form.password"),autoComplete:"current-password"}),(0,m.jsxs)("div",{className:"show-icon-wrap js-show-icon",onClick:function(e){h("password"===r?"show-icon show-icon--line visually-hidden":"show-icon show-icon--line"),t("password"===r?"text":"password")},children:[(0,m.jsx)("svg",{className:"show-icon",width:"20",height:"20",children:(0,m.jsx)("use",{xlinkHref:"#eye-icon"})}),(0,m.jsx)("svg",{className:u,width:"20",height:"20",children:(0,m.jsx)("use",{xlinkHref:"#line-icon"})})]})]})]}),(0,m.jsx)("div",{className:"modal__text-wrap",children:(0,m.jsxs)("div",{className:"modal__text",children:[(0,m.jsx)("p",{children:a("swap.modals.create.description")}),(0,m.jsxs)("p",{children:[(0,m.jsx)("a",{className:"modal__link",href:"/#",children:a("swap.modals.create.terms-of-service")})," & ",(0,m.jsx)("a",{className:"modal__link",href:"/#",children:a("swap.modals.create.privacy-policy")})]})]})}),(0,m.jsx)("button",{className:"form__submit modal__form-submit btn btn--blue",type:"submit",children:a("swap.modals.create.sign-up")})]})})]})]})},Z=function(){var e=(0,l.useState)(!1),a=(0,n.Z)(e,2),s=a[0],o=a[1],r=(0,l.useState)(!1),t=(0,n.Z)(r,2),i=t[0],c=t[1];return(0,m.jsx)(d.Provider,{value:{createModal:{show:s,toggleModal:function(){o(!s)}},menuMobile:{menuMobile:i,toggleMenuMobile:function(){c(!i)}}},children:(0,m.jsx)("div",{className:"page theme",children:(0,m.jsxs)("div",{className:"page__body dashboard"+(s||i?" no-scroll":""),children:[(0,m.jsx)(f,{}),(0,m.jsx)(M,{}),(0,m.jsx)(k,{})]})})})}}}]);
//# sourceMappingURL=904.10fe75b5.chunk.js.map