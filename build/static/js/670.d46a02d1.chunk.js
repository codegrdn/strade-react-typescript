"use strict";(self.webpackChunkstrade_react_typescript=self.webpackChunkstrade_react_typescript||[]).push([[670],{7578:function(e,t,r){r.d(t,{JI:function(){return o},LB:function(){return s},dO:function(){return i}});var n=r(1668),a="".concat(n.x,"/coins"),i=function(e){return{url:"".concat(a,"/markets"),method:"GET",params:e}},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{include_platform:!1};return{url:"".concat(a,"/list"),method:"GET",params:e}},o=function(e,t){return{url:"".concat(a,"/").concat(e,"/market_chart"),method:"GET",params:t}}},6789:function(e,t,r){r.d(t,{A:function(){return n}});var n=[{value:"usd",label:"USD"},{value:"rub",label:"RUB"}];n[0]},1670:function(e,t,r){r.r(t),r.d(t,{default:function(){return ue}});var n,a=r(9439),i=r(2791),s=r(2617),o=r(4566),c=r(6089),l={menuMobile:{menuMobile:!1,toggleMenuMobile:function(){}}},u=i.createContext(l),d=r(4700),f=r(184),p=function(){return(0,f.jsx)("div",{className:"dashboard-header__menu-item-wrap",children:(0,f.jsx)("div",{className:"dashboard-header__menu-item",children:(0,f.jsx)(d.Z,{})})})},h=r(8880),m=r(3168),v=r(3504),g=r(6871),x=r(8815),_=function(){var e=(0,m.$)().t,t=(0,g.TH)(),r=h._.filter((function(e){return!h.b.includes(e.title)}));return(0,f.jsx)("div",{className:"dashboard-header__menu-item-wrap",children:r.map((function(r,n){return(0,f.jsx)("div",{className:"dashboard-header__menu-item",children:(0,f.jsx)(v.rU,{className:"dashboard-header__menu-link ".concat((0,x.A)(r.path,t.pathname)?"dashboard-header__menu-link--active disable-link":""),to:r.path,children:e("menu.".concat(r.title))})},r.title)}))})},b=function(){var e=(0,i.useContext)(u).menuMobile;return(0,f.jsx)("nav",{className:"header__menu menu"+(e.menuMobile?" dashboard-header__menu--active":""),children:(0,f.jsxs)("div",{className:"dashboard-header__menu-list",children:[(0,f.jsx)(_,{}),(0,f.jsx)(p,{})]})})},y=function(){var e=(0,i.useContext)(s.V).auth,t=(0,i.useContext)(u).menuMobile;return(0,f.jsx)("header",{className:"page-header dashboard-header",children:(0,f.jsxs)("div",{className:"dashboard-header__content",children:[(0,f.jsx)(o.Z,{}),(0,f.jsxs)("div",{className:"dashboard-header__nav",children:[(0,f.jsx)(b,{}),e.isAuth()?(0,f.jsxs)("div",{className:"dashboard-header__user-menu-wrap",children:[(0,f.jsx)("div",{className:"dashboard-header__notify"}),(0,f.jsx)(c.Z,{})]}):"",(0,f.jsx)("button",{className:"dashboard-header__menu-toggle",type:"button","aria-label":"mobile-menu",onClick:t.toggleMenuMobile,children:(0,f.jsx)("span",{className:"dashboard-header__menu-toggle-line",children:(0,f.jsx)("svg",{className:"dashboard-header__menu-toggle-icon",width:"20",height:"20",children:(0,f.jsx)("use",{xlinkHref:"#menu-icon"})})})})]})]})})},j=function(e){var t=e.title;return(0,f.jsx)("div",{className:"markets__topbar",children:(0,f.jsx)("h1",{className:"markets__topbar-title",children:t})})},k=r(4864),Z=function(){return{id:"",symbol:"",name:"",image:"",current_price:0,market_cap:0,market_cap_rank:1,fully_diluted_valuation:0,total_volume:0,high_24h:0,low_24h:0,price_change_24h:0,price_change_percentage_24h:0,market_cap_change_24h:0,market_cap_change_percentage_24h:0,circulating_supply:0,total_supply:0,max_supply:0,ath:0,ath_change_percentage:0,ath_date:"",atl:0,atl_change_percentage:0,atl_date:"",roi:null,last_updated:""}},w=r(6186),C=r(9334),N=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$",r=parseFloat(e).toFixed(2).split(""),n=r.length-3;(n-=3)>0;)r.splice(n,0,",");return r.join("")+" "+t},S=r(4278),L=r(3813),P=r(5861),E=r(7757),A=r.n(E),F=r(4569),T=r.n(F),D=r(7578),M=function(e){var t=(0,i.useContext)(k.tE).currency,r=(0,i.useState)(),n=(0,a.Z)(r,2),s=n[0],o=n[1],c=(0,i.useState)(),l=(0,a.Z)(c,2),u=l[0],d=l[1],f=(0,i.useState)(!0),p=(0,a.Z)(f,2),h=p[0],m=p[1],v=(0,i.useState)(Z()),g=(0,a.Z)(v,2),x=g[0],_=g[1],b=(0,i.useState)(t.currency),y=(0,a.Z)(b,2),j=y[0],w=y[1],C=function(){var e=(0,P.Z)(A().mark((function e(r){var n;return A().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T().request(r);case 3:n=e.sent,o(n),_(n.data[0]),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),d(e.t0);case 11:return e.prev=11,m(!1),w(t.currency),e.finish(11);case 15:case"end":return e.stop()}}),e,null,[[0,8,11,15]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=(0,P.Z)(A().mark((function e(t){return A().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,i.useEffect)((function(){N((0,D.dO)({vs_currency:t.currency,ids:e}))}),[t.currency]),{response:s,error:u,loading:h,sendData:N,currency:j,coin:x}},O=function(e){var t=e.coinId,r=(0,m.$)().t,n=M(t),s=n.coin,o=n.loading,c=n.currency,l=(0,i.useState)(!0),u=(0,a.Z)(l,2),d=u[0],p=u[1],h=(0,i.useMemo)((function(){if(o){var e=setTimeout((function(){p(!0),clearTimeout(e)}),1500);return Z()}var t=setTimeout((function(){p(!1),clearTimeout(t)}),1500);return s}),[s,o]);return(0,f.jsx)(f.Fragment,{children:d?(0,f.jsx)(S.Z,{isRevert:!0,style:{height:"24px",width:"24px"}}):(0,f.jsxs)("div",{className:"markets__card",children:[(0,f.jsx)("div",{className:"markets__card-title",children:null===h||void 0===h?void 0:h.name}),(0,f.jsx)("div",{className:"markets__card-picture",children:(0,f.jsx)(L.Z,{coinId:h.id,color:(0,w.L)(h.price_change_24h),width:105,height:55})}),(0,f.jsxs)("div",{className:"markets__card-bet",children:[(0,f.jsx)("span",{className:(0,w.p)(h.price_change_24h),children:N(h.current_price,C.f4[c])}),h.price_change_24h<0?N((h.current_price+h.price_change_24h).toFixed(2),C.f4[c]):N((h.current_price-h.price_change_24h).toFixed(2),C.f4[c])]}),(0,f.jsxs)("div",{className:"markets__card-sum",children:[(0,f.jsx)("span",{className:(0,w.p)(h.price_change_percentage_24h),children:N(h.price_change_percentage_24h.toFixed(2),"%")}),r("markets.card.market-cap"),": ",N(h.market_cap,C.f4[c])]})]})})},I=function(){var e=(0,i.useContext)(k.tE).coins;return(0,f.jsx)("div",{className:"markets__card-list",children:e.list.length>0&&e.list.map((function(e){return(0,f.jsx)(O,{coinId:e},e)}))})},U=r(3433),$=r(1413),G=r(3513),R=r(6282),V="col-favourites-icon",H="col-favourites-icon--active",W=function(e){var t=e.coin,r=(0,i.useContext)(k.tE).coins,n=(0,i.useState)(r.list.filter((function(e){return e===t.id})).length?V+" "+H:V),s=(0,a.Z)(n,2),o=s[0],c=s[1];return(0,f.jsx)("div",{className:"col-favourites",children:(0,f.jsx)("div",{className:"col-favourites-img",children:(0,f.jsx)("svg",{className:o,onClick:function(){V===o?(c(V+" "+H),r.addCoin(t.id)):(c(V),r.removeCoin(t.id))},width:"14",height:"14",children:(0,f.jsx)("use",{xlinkHref:"#star-icon"})})})})},B=function(){var e=(0,m.$)().t,t=(0,i.useContext)(k.tE),r=t.currency,n=t.filters,s=t.platforms,o=(0,i.useState)(r.currency),c=(0,a.Z)(o,2),l=c[0],u=c[1],d={vs_currency:r.currency};n.list.hasOwnProperty("category")&&n.list.category&&(d=(0,$.Z)((0,$.Z)({},d),{},{category:n.list.category}));var p=(0,D.dO)(d),h=(0,R.Z)(p),v=h.response,g=h.sendData,x=h.loading,_=(0,i.useState)(!0),b=(0,a.Z)(_,2),y=b[0],j=b[1],Z=(0,i.useMemo)((function(){j(!0);var e=null!==v&&void 0!==v&&v.data?(0,U.Z)(v.data):[];if(Object.keys(n.list).length){var t;if(n.list.hasOwnProperty("search")&&n.list.search&&(e=e.filter((function(e){var t,r;return e.name.toLowerCase().includes(null===(t=n.list)||void 0===t||null===(r=t.search)||void 0===r?void 0:r.toLowerCase())}))),n.list.hasOwnProperty("platform")&&n.list.platform){var a=s.list.hasOwnProperty(n.list.platform)?n.list.platform:"";e=e.filter((function(e){var t;return null===(t=s.list[a])||void 0===t?void 0:t.includes(" "+e.id.toLowerCase()+",")}))}n.list.isFavorite&&(e=e.filter((function(e){var t,r;return null===(t=n.list.coins)||void 0===t||null===(r=t.split(","))||void 0===r?void 0:r.filter((function(t){return e.id.toLowerCase()===t.toLowerCase()})).length}))),n.list.hasOwnProperty("lastPrice")&&null!==(t=n.list)&&void 0!==t&&t.lastPrice&&(n.list.lastPrice.includes("Up")?e=e.filter((function(e){return e.price_change_24h>0})):n.list.lastPrice.includes("Down")&&(e=e.filter((function(e){return e.price_change_24h<0}))))}u(r.currency);var i=setTimeout((function(){j(!1),clearTimeout(i)}),1500);return e}),[v,n.list,s.list]);(0,i.useEffect)((function(){x||(n.list.hasOwnProperty("category")&&n.list.category?g((0,D.dO)((0,$.Z)((0,$.Z)({},d),{},{category:n.list.category}))):g((0,D.dO)(d)))}),[r.currency,n.list]);var P=[{id:"name",name:e("markets.columns.name"),selector:function(e){return e.name.toLowerCase()},format:function(e,t){return e.name},cell:function(e){return(0,f.jsxs)("div",{className:"col-favourites",children:[(0,f.jsx)(W,{coin:e}),(0,f.jsx)("img",{src:e.image,width:"40px",height:"40px",style:{marginRight:"10px"},alt:e.id}),(0,f.jsx)("p",{className:"col-info",children:e.name})]})},sortable:!0,minWidth:"25%",maxWidth:"40%"},{id:"current_price",name:e("markets.columns.last-price"),selector:function(e){return e.current_price},cell:function(e){return(0,f.jsx)("p",{className:"col-info",children:(0,f.jsx)("span",{className:"".concat((0,w.p)(e.price_change_24h)," white-space-text"),children:N(e.current_price,C.f4[l])})})},sortable:!0},{id:"price_change_percentage_24h",name:e("markets.columns.24h-\u0441hange"),selector:function(e){return e.price_change_percentage_24h},cell:function(e){return(0,f.jsx)("p",{className:"col-info",children:(0,f.jsxs)("span",{className:"".concat((0,w.p)(e.price_change_percentage_24h)," white-space-text"),children:[e.price_change_percentage_24h," %"]})})},sortable:!0},{id:"high_24h",name:e("markets.columns.24h-high"),selector:function(e){return e.high_24h},cell:function(e){return(0,f.jsx)("p",{className:"col-info",children:(0,f.jsx)("span",{className:"".concat((0,w.p)(e.high_24h)," white-space-text"),children:N(e.high_24h,C.f4[l])})})},sortable:!0},{id:"low_24h",name:e("markets.columns.24h-low"),selector:function(e){return e.low_24h},cell:function(e){return(0,f.jsx)("p",{className:"col-info",children:(0,f.jsx)("span",{className:"".concat((0,w.p)(e.low_24h)," white-space-text"),children:N(e.low_24h,C.f4[l])})})},sortable:!0},{id:"market_cap",name:e("markets.columns.market-cap"),selector:function(e){return e.market_cap},cell:function(e){return(0,f.jsx)("span",{className:"white-space-text",children:N(e.market_cap,C.f4[l])})},sortable:!0},{id:"total_volume",name:e("markets.columns.24h-volume"),selector:function(e){return e.total_volume},cell:function(e){return(0,f.jsx)("span",{className:"white-space-text",children:N(e.total_volume,C.f4[l])})},sortable:!0},{id:"chart",name:"",cell:function(e){return(0,f.jsx)(L.Z,{coinId:e.id,color:(0,w.L)(e.price_change_percentage_24h),width:140,height:70})},sortable:!1}];return(0,f.jsx)(G.ZP,{className:"markets__table table",noDataComponent:e("landing.market-info.table-have-not-data"),columns:P,data:Z,progressPending:y,progressComponent:(0,f.jsx)(S.Z,{}),onChangePage:function(e){n.addFilter((0,$.Z)((0,$.Z)({},n.list),{},{page:e}))},onChangeRowsPerPage:function(e){n.addFilter((0,$.Z)((0,$.Z)({},n.list),{},{perPage:e}))},paginationPerPage:n.list.perPage,paginationDefaultPage:n.list.page,pagination:!0})};!function(e){e.DEFAULT_CLASS="markets__coin-item",e.ACTIVE_CLASS="markets__coin-item--active"}(n||(n={}));var J=function(){var e=(0,m.$)().t,t=(0,i.useContext)(k.tE).filters,r=(0,i.useState)(t.list.isFavorite?n.ACTIVE_CLASS:n.DEFAULT_CLASS),s=(0,a.Z)(r,2),o=s[0],c=s[1];return(0,f.jsx)("ul",{className:"markets__coin-list",children:(0,f.jsx)("li",{className:o,onClick:function(){n.DEFAULT_CLASS===o?(c(n.DEFAULT_CLASS+" "+n.ACTIVE_CLASS),t.addFilter({isFavorite:!0})):(c(n.DEFAULT_CLASS),t.addFilter({isFavorite:!1}))},children:e("markets.filters.favourites")})})},Y=function(){var e=(0,i.useContext)(k.tE).filters,t=(0,m.$)().t,r=(0,i.useState)(e.list.search),n=(0,a.Z)(r,2),s=n[0],o=n[1];return(0,f.jsxs)("div",{className:"markets__search",children:[(0,f.jsx)("input",{className:"markets__search-input",value:s,onChange:function(t){o(t.target.value),e.addFilter({search:t.target.value})},type:"text",placeholder:t("markets.filters.search")}),(0,f.jsx)("button",{className:"markets__search-img",type:"button","aria-label":"search button",onClick:function(t){t.preventDefault(),e.addFilter({search:s})},children:(0,f.jsx)("svg",{className:"markets__search-icon",width:"12",height:"12",children:(0,f.jsx)("use",{xlinkHref:"#search-icon"})})})]})},q=r(1668),z="".concat(q.x,"/coins/categories"),K=r(2394),Q=function(){var e=(0,i.useState)(!1),t=(0,a.Z)(e,2),r=t[0],n=t[1],s=(0,m.$)(),o=s.i18n,c=s.t,l=(0,i.useContext)(k.tE).filters,u=(0,R.Z)({url:"".concat(z,"/list"),method:"GET",params:[]}).response,d=(0,i.useState)({label:c("markets.filters.select-category"),value:0}),p=(0,a.Z)(d,2),h=p[0],v=p[1],g=(0,i.useMemo)((function(){n(!1);var e=[{label:c("markets.filters.select-category"),value:0}];null!==u&&void 0!==u&&u.data&&u.data.forEach((function(t){e.push({value:t.category_id,label:t.name})})),v(l.list.category?e.filter((function(e){return e.value===l.list.category}))[0]:e.filter((function(e){return e.value===h.value}))[0]);var t=setTimeout((function(){n(!0),clearTimeout(t)}),1500);return e}),[u,o.language]);var x={option:function(){return{padding:"5px",borderLeft:"3px solid transparent",textAlign:"left",transition:"color .3s, border .3s",width:"100%",":hover":{borderLeft:"3px solid #24ac80"}}},control:function(){return{width:"200px",display:"flex",padding:"0px 0px 0px 0px"}},menuList:function(){return{backgroundColor:"rgba(var(--select-bg-color), 1)",border:"1px solid rgba(var(--primary-color),.05)",maxHeight:"15rem",overflowY:"auto",scrollbarWidth:"thin"}},valueContainer:function(e,t){return(0,$.Z)((0,$.Z)({},e),{},{paddingLeft:"5px",textAlign:"left"})},dropdownIndicator:function(e,t){return{transition:"all .2s",transform:t.selectProps.menuIsOpen?"rotate(180deg)":"none",padding:"5px"}},singleValue:function(e,t){var r=t.isDisabled?.5:1;return(0,$.Z)((0,$.Z)({},e),{},{opacity:r,transition:"opacity 300ms"})}};return(0,f.jsx)(K.Z,{styles:x,values:g,selected:h,onChange:function(e){v(e),l.addFilter({category:e.value})},components:{IndicatorSeparator:function(){return null}},isDisabled:!r})},X=function(){var e=(0,i.useContext)(k.tE),t=e.currency,r=e.filters,n=(0,i.useState)((0,C.AW)(t.currency)),s=(0,a.Z)(n,2),o=s[0],c=s[1];var l={option:function(e,t){return{padding:"5px",borderLeft:"3px solid transparent",textAlign:"left",transition:"color .3s, border .3s",width:"100%",":hover":{borderLeft:"3px solid #24ac80"}}},control:function(){return{width:"100px",display:"flex",padding:"0px 0px 0px 0px"}},menuList:function(){return{backgroundColor:"rgba(var(--select-bg-color), 1)",border:"1px solid rgba(var(--primary-color),.05)",maxHeight:"15rem",overflowY:"auto",scrollbarWidth:"thin"}},valueContainer:function(e,t){return(0,$.Z)((0,$.Z)({},e),{},{paddingLeft:"5px",textAlign:"left"})},dropdownIndicator:function(e,t){return{transition:"all .2s",transform:t.selectProps.menuIsOpen?"rotate(180deg)":"none",padding:"5px"}},singleValue:function(e,t){var r=t.isDisabled?.5:1;return(0,$.Z)((0,$.Z)({},e),{},{opacity:r,transition:"opacity 300ms"})}};return(0,f.jsx)(K.Z,{styles:l,values:C.j,selected:o,onChange:function(e){t.changeCurrency(e.value),r.addFilter({currency:e.value}),c(e)},components:{IndicatorSeparator:function(){return null}},isSearchable:!1})},ee=function(){var e=(0,m.$)(),t=e.t,r=e.i18n,n=(0,i.useContext)(k.tE),s=n.platforms,o=n.filters,c=(0,i.useState)({label:t("markets.filters.select-platform"),value:0}),l=(0,a.Z)(c,2),u=l[0],d=l[1],p=(0,i.useState)(!1),h=(0,a.Z)(p,2),v=h[0],g=h[1],x=(0,i.useMemo)((function(){if(g(!1),Object.keys(s.list).length<2)return[{label:t("markets.filters.select-platform"),value:0}];var e=Object.keys(s.list),r=[];e.forEach((function(e){var t=e.replaceAll("-"," ");t=t.charAt(0).toUpperCase()+t.slice(1),r.push({label:t,value:e})}));var n=[{label:t("markets.filters.select-platform"),value:0}].concat(r);d(o.list.platform?n.filter((function(e){return e.value===o.list.platform}))[0]:n.filter((function(e){return e.value===u.value}))[0]);var a=setTimeout((function(){g(!0),clearTimeout(a)}),1500);return n}),[s.list,r.language]);var _={option:function(e,t){return{padding:"5px",borderLeft:"3px solid transparent",textAlign:"left",transition:"color .3s, border .3s",width:"100%",":hover":{borderLeft:"3px solid #24ac80"}}},control:function(){return{width:"200px",display:"flex",padding:"0px 0px 0px 0px"}},menuList:function(){return{backgroundColor:"rgba(var(--select-bg-color), 1)",border:"1px solid rgba(var(--primary-color),.05)",maxHeight:"15rem",overflowY:"auto",scrollbarWidth:"thin"}},valueContainer:function(e,t){return(0,$.Z)((0,$.Z)({},e),{},{paddingLeft:"5px",textAlign:"left"})},dropdownIndicator:function(e,t){return{transition:"all .2s",transform:t.selectProps.menuIsOpen?"rotate(180deg)":"none",padding:"5px"}},singleValue:function(e,t){var r=t.isDisabled?.5:1;return(0,$.Z)((0,$.Z)({},e),{},{opacity:r,transition:"opacity 300ms"})}};return(0,f.jsx)(K.Z,{styles:_,selected:u,values:x,onChange:function(e){d(e),o.addFilter({platform:e.value})},components:{IndicatorSeparator:function(){return null}},isDisabled:!v})},te=function(){var e=(0,i.useState)(!1),t=(0,a.Z)(e,2),r=t[0],n=t[1],s=(0,i.useContext)(k.tE).filters,o=(0,m.$)(),c=o.t,l=o.i18n,u=(0,i.useState)([{value:"",label:c("markets.filters.price.select-last-price")},{value:"Last Price Down",label:c("markets.filters.price.last-price-down")},{value:"Last Price Up",label:c("markets.filters.price.last-price-up")}]),d=(0,a.Z)(u,2),p=d[0],h=d[1],v=(0,i.useState)(s.list.lastPrice?p.filter((function(e){return s.list.lastPrice===e.value}))[0]:p[0]),g=(0,a.Z)(v,2),x=g[0],_=g[1];(0,i.useEffect)((function(){n(!1);var e=[{value:"",label:c("markets.filters.price.select-last-price")},{value:"Last Price Down",label:c("markets.filters.price.last-price-down")},{value:"Last Price Up",label:c("markets.filters.price.last-price-up")}];h(e);var t=setTimeout((function(){_(e.filter((function(e){return e.value===x.value}))[0]),n(!0),clearTimeout(t)}),1500)}),[l.language]);var b={option:function(e,t){return{padding:"5px",borderLeft:"3px solid transparent",textAlign:"left",transition:"color .3s, border .3s",width:"100%",":hover":{borderLeft:"3px solid #24ac80"}}},control:function(){return{width:"200px",display:"flex",padding:"0px 0px 0px 0px"}},menuList:function(){return{backgroundColor:"rgba(var(--select-bg-color), 1)",border:"1px solid rgba(var(--primary-color),.05)",maxHeight:"15rem",overflowY:"auto",scrollbarWidth:"thin"}},valueContainer:function(e,t){return(0,$.Z)((0,$.Z)({},e),{},{paddingLeft:"5px",textAlign:"left"})},dropdownIndicator:function(e,t){return{transition:"all .2s",transform:t.selectProps.menuIsOpen?"rotate(180deg)":"none",padding:"5px"}},singleValue:function(e,t){var r=t.isDisabled?.5:1;return(0,$.Z)((0,$.Z)({},e),{},{opacity:r,transition:"opacity 300ms"})}};return(0,f.jsx)(K.Z,{isSearchable:!1,selected:x,values:p,onChange:function(e){_(e),s.addFilter({lastPrice:e.value})},styles:b,components:{IndicatorSeparator:function(){return null}},isDisabled:!r})},re=[{component:ee,key:"platform"},{component:te,key:"price"},{component:Q,key:"category"},{component:X,key:"currency"}],ne=function(){return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("div",{className:"markets__table-head-row",children:[re.length&&(0,f.jsx)("ul",{className:"markets__filters-list",children:re.map((function(e){return(0,f.jsx)("li",{className:"markets__filters-item",children:(0,f.jsx)(e.component,{})},e.key)}))}),(0,f.jsx)(J,{}),(0,f.jsx)(Y,{})]})})},ae=function(e){var t,r,n=(0,v.lr)(),s=(0,a.Z)(n,2),o=s[0],c=(s[1],(0,i.useState)(null!==(t=null===(r=o.get("coins"))||void 0===r?void 0:r.split(","))&&void 0!==t?t:[])),l=(0,a.Z)(c,2),u=l[0],d=l[1];return{coinsList:u,removeCoin:function(t){e({coins:u.filter((function(e){return e!==t})).join(",")}),d(u.filter((function(e){return e!==t})))},addCoin:function(t){e({coins:[].concat((0,U.Z)(u),[t]).join(",")}),d([].concat((0,U.Z)(u),[t]))}}},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=new URLSearchParams(window.location.search),r={};return t.forEach((function(t,n){r[n]?"string"===typeof r[n]?r[n]=[r[n],t]:r[n]=[].concat((0,U.Z)(r[n]),[t]):e.includes(n)?r[n]=[t]:r[n]=t})),r},se=function(){var e=ie(),t=(0,v.lr)(),r=(0,a.Z)(t,2),n=(r[0],r[1]),s=(0,i.useState)((0,$.Z)({category:"",search:"",platform:"",coins:"",lastPrice:"",page:void 0,perPage:void 0,isFavorite:!1,currency:""},e)),o=(0,a.Z)(s,2),c=o[0],l=o[1];return{filtersMarkets:c,addFiltersMarkets:function(e){var t=(0,$.Z)((0,$.Z)((0,$.Z)({},c),ie()),e);l((0,$.Z)((0,$.Z)((0,$.Z)({},c),ie()),e)),n(JSON.parse(JSON.stringify(t,(function(e,t){if(t)return t}))))}}},oe=function(){var e=(0,i.useState)({}),t=(0,a.Z)(e,2),r=t[0],n=t[1],s=(0,D.LB)({include_platform:!0}),o=(0,R.Z)(s).response;return(0,i.useEffect)((function(){var e=null===o||void 0===o?void 0:o.data;if(e){var t=[],r=[],a={};e.forEach((function(e){var t=Object.keys(null===e||void 0===e?void 0:e.platforms);t.length&&t.forEach((function(t){if(t){var n=t.toLowerCase();r.includes(n)?a[n].push(e.id.toLowerCase()):(r.push(n),a[n]=[e.id.toLowerCase()])}}))})),r.forEach((function(e){t.push({label:e,value:e.toLowerCase()}),a[e.toLowerCase()]=a[e.toLowerCase()].join(", ")})),n(a)}}),[o]),{platforms:r,addPlatform:function(e){n((0,$.Z)((0,$.Z)({},r),e))}}},ce=function(){var e=(0,v.lr)(),t=(0,a.Z)(e,2),r=(t[0],t[1]),n=(0,i.useState)((0,C.zC)()),s=(0,a.Z)(n,2),o=s[0],c=s[1];return{currency:o,changeCurrency:function(e){if(e){c(e);var t=(0,$.Z)((0,$.Z)({},ie()),{},{currency:e});r(JSON.parse(JSON.stringify(t,(function(e,t){if(t)return t}))))}}}},le=function(){var e=(0,m.$)().t,t=se(),r=t.filtersMarkets,n=t.addFiltersMarkets,a=ae(n),i=a.coinsList,s=a.removeCoin,o=a.addCoin,c=oe(),l=c.platforms,u=c.addPlatform,d=ce(),p=d.currency,h=d.changeCurrency;return(0,f.jsx)("main",{className:"page-main",children:(0,f.jsx)(k.tE.Provider,{value:{platforms:{list:l,addPlatform:u},filters:{list:r,addFilter:n},coins:{list:i,removeCoin:s,addCoin:o},currency:{currency:p,changeCurrency:h}},children:(0,f.jsxs)("section",{className:"markets",children:[(0,f.jsx)(j,{title:e("markets.title-header")}),(0,f.jsx)(I,{}),(0,f.jsxs)("div",{className:"markets__content custom-scroll",children:[(0,f.jsx)("div",{className:"markets__table-head",children:(0,f.jsx)(ne,{})}),(0,f.jsx)("div",{className:"markets__table-wrap custom-scroll",children:(0,f.jsx)(B,{})})]})]})})})},ue=function(){var e=(0,i.useState)(!1),t=(0,a.Z)(e,2),r=t[0],n=t[1];return(0,f.jsx)(u.Provider,{value:{menuMobile:{menuMobile:r,toggleMenuMobile:function(){n(!r)}}},children:(0,f.jsx)("div",{className:"page theme",children:(0,f.jsxs)("div",{className:"page__body dashboard"+(r?" no-scroll":""),children:[(0,f.jsx)(y,{}),(0,f.jsx)(le,{})]})})})}},3813:function(e,t,r){r.d(t,{Z:function(){return x}});var n=r(9439),a=r(2791),i=r(812),s=r(2891),o=r(2955),c=r(7578),l=r(5861),u=r(7757),d=r.n(u),f=r(4569),p=r.n(f),h=function(e){var t=(0,a.useState)(),r=(0,n.Z)(t,2),i=r[0],s=r[1],o=(0,a.useState)(),c=(0,n.Z)(o,2),u=c[0],f=c[1],h=(0,a.useState)("GET"===e.method||"get"===e.method),m=(0,n.Z)(h,2),v=m[0],g=m[1],x=function(){var e=(0,l.Z)(d().mark((function e(t){var r;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p().request(t);case 3:r=e.sent,s(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),f(e.t0);case 10:return e.prev=10,g(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=(0,l.Z)(d().mark((function e(t){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,a.useEffect)((function(){"GET"!==e.method&&"get"!==e.method||x(e)}),[e]),{response:i,error:u,loading:v,sendData:_}},m=r(4864),v=r(4278),g=r(184),x=function(e){var t=e.coinId,r=e.color,l=e.width,u=void 0===l?140:l,d=e.height,f=void 0===d?70:d,p=(0,a.useContext)(m.tE).currency,x=(0,a.useMemo)((function(){return(0,c.JI)(t,{vs_currency:p.currency,days:"1"})}),[p.currency]),_=h(x).response,b=(0,a.useState)(!1),y=(0,n.Z)(b,2),j=y[0],k=y[1],Z=(0,a.useMemo)((function(){var e,t;k(!1);var r=[];null===_||void 0===_||null===(e=_.data)||void 0===e||null===(t=e.prices)||void 0===t||t.forEach((function(e){r.push({x:e[0],y:e[1]})}));var n=setTimeout((function(){k(!0),clearTimeout(n)}),1500);return r}),[_]);return(0,g.jsx)(g.Fragment,{children:j?(0,g.jsxs)(i.T,{width:u,height:f,data:Z,margin:{top:10,right:30,left:0,bottom:10},children:[(0,g.jsx)(s.B,{hide:!0,type:"number",domain:["auto","auto"]}),(0,g.jsx)(o.u,{type:"monotone",dataKey:"y",stroke:r,fill:r})]}):(0,g.jsx)(v.Z,{isRevert:!0,style:{height:"24px",width:"24px"}})})}},4864:function(e,t,r){r.d(t,{tE:function(){return o}});r(6789);var n,a=r(9334),i=r(2791);!function(e){e.category="category",e.search="search",e.platform="platform",e.coins="coins",e.lastPrice="lastPrice"}(n||(n={}));var s={platforms:{list:{},addPlatform:function(e){}},filters:{list:{},addFilter:function(e){}},coins:{list:[],removeCoin:function(e){},addCoin:function(e){}},currency:{currency:a.OM,changeCurrency:function(e){}}},o=i.createContext(s)},4278:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(184),a=function(e){var t=e.isRevert,r=void 0!==t&&t,a=e.style,i=void 0===a?{}:a,s=r?"loader loader-revert":"loader";return(0,n.jsx)("div",{className:"wrap-loader",children:(0,n.jsx)("span",{className:s,style:i})})}},4566:function(e,t,r){r(2791);var n=r(3504),a=r(1229),i=r(5677),s=r(184);t.Z=function(){return(0,s.jsxs)(n.rU,{className:"dashboard-header__logo logo",to:"/","aria-label":"logo",children:[(0,s.jsx)("img",{className:"logo__icon",src:a.Z,alt:"",width:"32",height:"27"}),(0,s.jsx)("img",{className:"dashboard-header__logo-text",src:i.Z,alt:"",width:"52",height:"11"})]})}},6089:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(9439),a=r(2791),i=r(3168),s=r(2617);var o=r.p+"static/media/account.880c1d5c85b53f84efed400d2d3660e0.svg",c=r(184),l=function(){var e,t=(0,a.useContext)(s.V).auth,r=(0,i.$)().t,l=(0,a.useState)(!1),u=(0,n.Z)(l,2),d=u[0],f=u[1];return(0,c.jsxs)("div",{className:"dashboard-header__user-dropdown dropdown-menu "+(d?"dropdown-menu--active":""),children:[(0,c.jsxs)("div",{className:"dropdown-menu__user-info",onClick:function(e){f(!d)},children:[(0,c.jsx)("img",{className:"dropdown-menu__user-icon",src:o,width:"48",height:"48",alt:"Account"}),(0,c.jsxs)("div",{className:"dropdown-menu__user-name",children:[null===(e=t.user)||void 0===e?void 0:e.email,(0,c.jsx)("i",{className:"arrow down"})]})]}),(0,c.jsx)("div",{className:"dropdown-menu__menu",children:(0,c.jsx)("div",{className:"dropdown-menu__menu-list",children:(0,c.jsx)("a",{className:"dropdown-menu__menu-item",href:"#!",onClick:function(e){e.preventDefault(),t.logout()},children:r("menu.Logout")})})})]})}},1668:function(e,t,r){r.d(t,{x:function(){return n}});var n="https://api.coingecko.com/api/v3"},6186:function(e,t,r){r.d(t,{L:function(){return a},p:function(){return n}});var n=function(e){return e>0?"color-green":"color-red"},a=function(e){return e>0?"#24ac80":"#ef4f46"}},9334:function(e,t,r){r.d(t,{AW:function(){return a},OM:function(){return i},f4:function(){return s},j:function(){return n},zC:function(){return o}});var n=[{value:"usd",label:"USD",sign:"$"},{value:"gbp",label:"GBP",sign:"\xa3"},{value:"rub",label:"RUB",sign:"\u20bd"}],a=function(e){return n.filter((function(t){return t.value===e}))[0]},i="usd",s={usd:"$",gbp:"\xa3",rub:"\u20bd"},o=function(){var e,t=null!==(e=new URLSearchParams(window.location.search).get("currency"))&&void 0!==e?e:"";return t||i}},6282:function(e,t,r){var n=r(5861),a=r(9439),i=r(7757),s=r.n(i),o=r(2791),c=r(4569),l=r.n(c);t.Z=function(e){var t=(0,o.useState)(),r=(0,a.Z)(t,2),i=r[0],c=r[1],u=(0,o.useState)(),d=(0,a.Z)(u,2),f=d[0],p=d[1],h=(0,o.useState)("GET"===e.method||"get"===e.method),m=(0,a.Z)(h,2),v=m[0],g=m[1],x=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l().request(t);case 3:r=e.sent,c(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),p(e.t0);case 10:return e.prev=10,g(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=(0,n.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){"GET"!==e.method&&"get"!==e.method||x(e)}),[]),{response:i,error:f,loading:v,sendData:_}}}}]);
//# sourceMappingURL=670.d46a02d1.chunk.js.map