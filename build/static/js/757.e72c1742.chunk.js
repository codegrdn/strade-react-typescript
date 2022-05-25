"use strict";(self.webpackChunkstrade_react_typescript=self.webpackChunkstrade_react_typescript||[]).push([[757],{7578:function(e,t,a){a.d(t,{JI:function(){return l},LB:function(){return i},dO:function(){return c}});var r=a(1668),n="".concat(r.x,"/coins"),c=function(e){return{url:"".concat(n,"/markets"),method:"GET",params:e}},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{include_platform:!1};return{url:"".concat(n,"/list"),method:"GET",params:e}},l=function(e,t){return{url:"".concat(n,"/").concat(e,"/market_chart"),method:"GET",params:t}}},6789:function(e,t,a){a.d(t,{A:function(){return r}});var r=[{value:"usd",label:"USD"},{value:"rub",label:"RUB"}];r[0]},2757:function(e,t,a){a.r(t),a.d(t,{default:function(){return he}});var r=a(9439),n=a(2791),c=a(2617),i=a(4566),l=a(6089),s={menuMobile:{menuMobile:!1,toggleMenuMobile:function(){}}},o=n.createContext(s),u=a(4700),d=a(184),p=function(){return(0,d.jsx)("div",{className:"dashboard-header__menu-item-wrap",children:(0,d.jsx)("div",{className:"dashboard-header__menu-item",children:(0,d.jsx)(u.Z,{})})})},h=a(8880),_=a(3168),m=a(3504),f=a(6871),g=a(8815),v=function(){var e=(0,_.$)().t,t=(0,f.TH)(),a=h._.filter((function(e){return!h.b.includes(e.title)}));return(0,d.jsx)("div",{className:"dashboard-header__menu-item-wrap",children:a.map((function(a,r){return(0,d.jsx)("div",{className:"dashboard-header__menu-item",children:(0,d.jsx)(m.rU,{className:"dashboard-header__menu-link ".concat((0,g.A)(a.path,t.pathname)?"dashboard-header__menu-link--active disable-link":""),to:a.path,children:e("menu.".concat(a.title))})},a.title)}))})},x=function(){var e=(0,n.useContext)(o).menuMobile;return(0,d.jsx)("nav",{className:"header__menu menu"+(e.menuMobile?" dashboard-header__menu--active":""),children:(0,d.jsxs)("div",{className:"dashboard-header__menu-list",children:[(0,d.jsx)(v,{}),(0,d.jsx)(p,{})]})})},y=function(){var e=(0,n.useContext)(c.V).auth,t=(0,n.useContext)(o).menuMobile;return(0,d.jsx)("header",{className:"page-header dashboard-header",children:(0,d.jsxs)("div",{className:"dashboard-header__content",children:[(0,d.jsx)(i.Z,{}),(0,d.jsxs)("div",{className:"dashboard-header__nav",children:[(0,d.jsx)(x,{}),e.isAuth()?(0,d.jsxs)("div",{className:"dashboard-header__user-menu-wrap",children:[(0,d.jsx)("div",{className:"dashboard-header__notify"}),(0,d.jsx)(l.Z,{})]}):"",(0,d.jsx)("button",{className:"dashboard-header__menu-toggle",type:"button","aria-label":"mobile-menu",onClick:t.toggleMenuMobile,children:(0,d.jsx)("span",{className:"dashboard-header__menu-toggle-line",children:(0,d.jsx)("svg",{className:"dashboard-header__menu-toggle-icon",width:"20",height:"20",children:(0,d.jsx)("use",{xlinkHref:"#menu-icon"})})})})]})]})})},b=function(e){var t=e.title;return(0,d.jsx)("div",{className:"markets__topbar",children:(0,d.jsx)("h1",{className:"markets__topbar-title",children:t})})},k=a(4864),j=function(){return{id:"",symbol:"",name:"",image:"",current_price:0,market_cap:0,market_cap_rank:1,fully_diluted_valuation:0,total_volume:0,high_24h:0,low_24h:0,price_change_24h:0,price_change_percentage_24h:0,market_cap_change_24h:0,market_cap_change_percentage_24h:0,circulating_supply:0,total_supply:0,max_supply:0,ath:0,ath_change_percentage:0,ath_date:"",atl:0,atl_change_percentage:0,atl_date:"",roi:null,last_updated:""}},w=a(6186),C=a(9334),N=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$",a=parseFloat(e).toFixed(2).split(""),r=a.length-3;(r-=3)>0;)a.splice(r,0,",");return a.join("")+" "+t},Z=a(4278),S=a(3813),L=a(5861),P=a(7757),E=a.n(P),O=a(4569),F=a.n(O),A=a(7578),T=function(e){var t=(0,n.useContext)(k.tE).currency,a=(0,n.useState)(),c=(0,r.Z)(a,2),i=c[0],l=c[1],s=(0,n.useState)(),o=(0,r.Z)(s,2),u=o[0],d=o[1],p=(0,n.useState)(!0),h=(0,r.Z)(p,2),_=h[0],m=h[1],f=(0,n.useState)(j()),g=(0,r.Z)(f,2),v=g[0],x=g[1],y=(0,n.useState)(t.currency),b=(0,r.Z)(y,2),w=b[0],C=b[1],N=function(){var e=(0,L.Z)(E().mark((function e(a){var r;return E().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F().request(a);case 3:r=e.sent,l(r),x(r.data[0]),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),d(e.t0);case 11:return e.prev=11,m(!1),C(t.currency),e.finish(11);case 15:case"end":return e.stop()}}),e,null,[[0,8,11,15]])})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=(0,L.Z)(E().mark((function e(t){return E().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,n.useEffect)((function(){Z((0,A.dO)({vs_currency:t.currency,ids:e}))}),[t.currency]),{response:i,error:u,loading:_,sendData:Z,currency:w,coin:v}},D=function(e){var t=e.coinId,a=(0,_.$)().t,c=T(t),i=c.coin,l=c.loading,s=c.currency,o=(0,n.useState)(!0),u=(0,r.Z)(o,2),p=u[0],h=u[1],m=(0,n.useMemo)((function(){if(l){var e=setTimeout((function(){h(!0),clearTimeout(e)}),1500);return j()}var t=setTimeout((function(){h(!1),clearTimeout(t)}),1500);return i}),[i,l]);return(0,d.jsx)(d.Fragment,{children:p?(0,d.jsx)(Z.Z,{isRevert:!0,style:{height:"24px",width:"24px"}}):(0,d.jsxs)("div",{className:"markets__card",children:[(0,d.jsx)("div",{className:"markets__card-title",children:null===m||void 0===m?void 0:m.name}),(0,d.jsx)("div",{className:"markets__card-picture",children:(0,d.jsx)(S.Z,{coinId:m.id,color:(0,w.L)(m.price_change_24h),width:105,height:55})}),(0,d.jsxs)("div",{className:"markets__card-bet",children:[(0,d.jsx)("span",{className:(0,w.p)(m.price_change_24h),children:N(m.current_price,C.f4[s])}),m.price_change_24h<0?N((m.current_price+m.price_change_24h).toFixed(2),C.f4[s]):N((m.current_price-m.price_change_24h).toFixed(2),C.f4[s])]}),(0,d.jsxs)("div",{className:"markets__card-sum",children:[(0,d.jsx)("span",{className:(0,w.p)(m.price_change_percentage_24h),children:N(m.price_change_percentage_24h.toFixed(2),"%")}),a("markets.card.market-cap"),": ",N(m.market_cap,C.f4[s])]})]})})},M=function(){var e=(0,n.useContext)(k.tE).coins;return(0,d.jsx)("div",{className:"markets__card-list",children:e.list.length>0&&e.list.map((function(e){return(0,d.jsx)(D,{coinId:e},e)}))})},I=a(3433),U=a(4942);function $(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function H(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?$(Object(a),!0).forEach((function(t){(0,U.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):$(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var G,R=a(3513),V=a(6282),W="col-favourites-icon",B="col-favourites-icon--active",J=function(e){var t=e.coin,a=(0,n.useContext)(k.tE).coins,c=(0,n.useState)(a.list.filter((function(e){return e===t.id})).length?W+" "+B:W),i=(0,r.Z)(c,2),l=i[0],s=i[1];return(0,d.jsx)("div",{className:"col-favourites",children:(0,d.jsx)("div",{className:"col-favourites-img",children:(0,d.jsx)("svg",{className:l,onClick:function(){W===l?(s(W+" "+B),a.addCoin(t.id)):(s(W),a.removeCoin(t.id))},width:"14",height:"14",children:(0,d.jsx)("use",{xlinkHref:"#star-icon"})})})})},Y=[{id:"default-1",symbol:"----------------",name:"----------------",image:"",current_price:0,market_cap:0,market_cap_rank:0,fully_diluted_valuation:0,total_volume:0,high_24h:0,low_24h:0,price_change_24h:0,price_change_percentage_24h:0,market_cap_change_24h:0,market_cap_change_percentage_24h:0,circulating_supply:0,total_supply:0,max_supply:0,ath:0,ath_change_percentage:0,ath_date:"----------------",atl:0,atl_change_percentage:0,atl_date:"----------------",roi:null,last_updated:"----------------"},{id:"default-2",symbol:"----------------",name:"----------------",image:"",current_price:0,market_cap:0,market_cap_rank:0,fully_diluted_valuation:0,total_volume:0,high_24h:0,low_24h:0,price_change_24h:0,price_change_percentage_24h:0,market_cap_change_24h:0,market_cap_change_percentage_24h:0,circulating_supply:0,total_supply:0,max_supply:0,ath:0,ath_change_percentage:0,ath_date:"----------------",atl:0,atl_change_percentage:0,atl_date:"----------------",roi:null,last_updated:"----------------"},{id:"default-3",symbol:"----------------",name:"----------------",image:"",current_price:0,market_cap:0,market_cap_rank:0,fully_diluted_valuation:0,total_volume:0,high_24h:0,low_24h:0,price_change_24h:0,price_change_percentage_24h:0,market_cap_change_24h:0,market_cap_change_percentage_24h:0,circulating_supply:0,total_supply:0,max_supply:0,ath:0,ath_change_percentage:0,ath_date:"----------------",atl:0,atl_change_percentage:0,atl_date:"----------------",roi:null,last_updated:"----------------"},{id:"default-4",symbol:"----------------",name:"----------------",image:"",current_price:0,market_cap:0,market_cap_rank:0,fully_diluted_valuation:0,total_volume:0,high_24h:0,low_24h:0,price_change_24h:0,price_change_percentage_24h:0,market_cap_change_24h:0,market_cap_change_percentage_24h:0,circulating_supply:0,total_supply:0,max_supply:0,ath:0,ath_change_percentage:0,ath_date:"----------------",atl:0,atl_change_percentage:0,atl_date:"----------------",roi:null,last_updated:"----------------"},{id:"default-5",symbol:"----------------",name:"----------------",image:"",current_price:0,market_cap:0,market_cap_rank:0,fully_diluted_valuation:0,total_volume:0,high_24h:0,low_24h:0,price_change_24h:0,price_change_percentage_24h:0,market_cap_change_24h:0,market_cap_change_percentage_24h:0,circulating_supply:0,total_supply:0,max_supply:0,ath:0,ath_change_percentage:0,ath_date:"----------------",atl:0,atl_change_percentage:0,atl_date:"----------------",roi:null,last_updated:"----------------"},{id:"default-6",symbol:"----------------",name:"----------------",image:"",current_price:0,market_cap:0,market_cap_rank:0,fully_diluted_valuation:0,total_volume:0,high_24h:0,low_24h:0,price_change_24h:0,price_change_percentage_24h:0,market_cap_change_24h:0,market_cap_change_percentage_24h:0,circulating_supply:0,total_supply:0,max_supply:0,ath:0,ath_change_percentage:0,ath_date:"----------------",atl:0,atl_change_percentage:0,atl_date:"----------------",roi:null,last_updated:"----------------"},{id:"default-7",symbol:"----------------",name:"----------------",image:"",current_price:0,market_cap:0,market_cap_rank:0,fully_diluted_valuation:0,total_volume:0,high_24h:0,low_24h:0,price_change_24h:0,price_change_percentage_24h:0,market_cap_change_24h:0,market_cap_change_percentage_24h:0,circulating_supply:0,total_supply:0,max_supply:0,ath:0,ath_change_percentage:0,ath_date:"----------------",atl:0,atl_change_percentage:0,atl_date:"----------------",roi:null,last_updated:"----------------"},{id:"default-8",symbol:"----------------",name:"----------------",image:"",current_price:0,market_cap:0,market_cap_rank:0,fully_diluted_valuation:0,total_volume:0,high_24h:0,low_24h:0,price_change_24h:0,price_change_percentage_24h:0,market_cap_change_24h:0,market_cap_change_percentage_24h:0,circulating_supply:0,total_supply:0,max_supply:0,ath:0,ath_change_percentage:0,ath_date:"----------------",atl:0,atl_change_percentage:0,atl_date:"----------------",roi:null,last_updated:"----------------"},{id:"default-9",symbol:"----------------",name:"----------------",image:"",current_price:0,market_cap:0,market_cap_rank:0,fully_diluted_valuation:0,total_volume:0,high_24h:0,low_24h:0,price_change_24h:0,price_change_percentage_24h:0,market_cap_change_24h:0,market_cap_change_percentage_24h:0,circulating_supply:0,total_supply:0,max_supply:0,ath:0,ath_change_percentage:0,ath_date:"----------------",atl:0,atl_change_percentage:0,atl_date:"----------------",roi:null,last_updated:"----------------"},{id:"default-10",symbol:"----------------",name:"----------------",image:"",current_price:0,market_cap:0,market_cap_rank:0,fully_diluted_valuation:0,total_volume:0,high_24h:0,low_24h:0,price_change_24h:0,price_change_percentage_24h:0,market_cap_change_24h:0,market_cap_change_percentage_24h:0,circulating_supply:0,total_supply:0,max_supply:0,ath:0,ath_change_percentage:0,ath_date:"----------------",atl:0,atl_change_percentage:0,atl_date:"----------------",roi:null,last_updated:"----------------"}],q=function(){var e=(0,_.$)().t,t=(0,n.useContext)(k.tE),a=t.currency,c=t.filters,i=t.platforms,l=(0,n.useState)(a.currency),s=(0,r.Z)(l,2),o=s[0],u=s[1],p={vs_currency:a.currency};c.list.hasOwnProperty("category")&&c.list.category&&(p=H(H({},p),{},{category:c.list.category}));var h=(0,A.dO)(p),m=(0,V.Z)(h),f=m.response,g=m.sendData,v=m.loading,x=(0,n.useState)(!0),y=(0,r.Z)(x,2),b=y[0],j=y[1],Z=(0,n.useMemo)((function(){j(!0);var e=null!==f&&void 0!==f&&f.data?(0,I.Z)(f.data):Y;if(Object.keys(c.list).length){var t;if(c.list.hasOwnProperty("search")&&c.list.search&&(e=e.filter((function(e){var t,a;return e.name.toLowerCase().includes(null===(t=c.list)||void 0===t||null===(a=t.search)||void 0===a?void 0:a.toLowerCase())}))),c.list.hasOwnProperty("platform")&&c.list.platform){var r=i.list.hasOwnProperty(c.list.platform)?c.list.platform:"";e=e.filter((function(e){var t;return null===(t=i.list[r])||void 0===t?void 0:t.includes(" "+e.id.toLowerCase()+",")}))}c.list.isFavorite&&(e=e.filter((function(e){var t,a;return null===(t=c.list.coins)||void 0===t||null===(a=t.split(","))||void 0===a?void 0:a.filter((function(t){return e.id.toLowerCase()===t.toLowerCase()})).length}))),c.list.hasOwnProperty("lastPrice")&&null!==(t=c.list)&&void 0!==t&&t.lastPrice&&(c.list.lastPrice.includes("Up")?e=e.filter((function(e){return e.price_change_24h>0})):c.list.lastPrice.includes("Down")&&(e=e.filter((function(e){return e.price_change_24h<0}))))}u(a.currency);var n=setTimeout((function(){j(!1),clearTimeout(n)}),1500);return e}),[f,c.list,i.list]);(0,n.useEffect)((function(){v||(c.list.hasOwnProperty("category")&&c.list.category?g((0,A.dO)(H(H({},p),{},{category:c.list.category}))):g((0,A.dO)(p)))}),[a.currency,c.list]);var L=[{id:"name",name:e("markets.columns.name"),selector:function(e){return e.name.toLowerCase()},format:function(e){return e.name},cell:function(e){return(0,d.jsxs)("div",{className:"col-favourites",children:[(0,d.jsx)(J,{coin:e}),e.image?(0,d.jsx)("img",{src:e.image,width:"40px",height:"40px",style:{marginRight:"10px"},alt:e.id}):(0,d.jsx)("div",{style:{width:"40px",height:"40px"}}),(0,d.jsx)("p",{className:"col-info",children:e.name})]})},sortable:!0,minWidth:"25%",maxWidth:"40%"},{id:"current_price",name:e("markets.columns.last-price"),selector:function(e){return e.current_price},cell:function(e){return(0,d.jsx)("p",{className:"col-info",children:(0,d.jsx)("span",{className:"".concat((0,w.p)(e.price_change_24h)," white-space-text"),children:N(e.current_price,C.f4[o])})})},sortable:!0},{id:"price_change_percentage_24h",name:e("markets.columns.24h-\u0441hange"),selector:function(e){return e.price_change_percentage_24h},cell:function(e){return(0,d.jsx)("p",{className:"col-info",children:(0,d.jsxs)("span",{className:"".concat((0,w.p)(e.price_change_percentage_24h)," white-space-text"),children:[e.price_change_percentage_24h," %"]})})},sortable:!0},{id:"high_24h",name:e("markets.columns.24h-high"),selector:function(e){return e.high_24h},cell:function(e){return(0,d.jsx)("p",{className:"col-info",children:(0,d.jsx)("span",{className:"".concat((0,w.p)(e.high_24h)," white-space-text"),children:N(e.high_24h,C.f4[o])})})},sortable:!0},{id:"low_24h",name:e("markets.columns.24h-low"),selector:function(e){return e.low_24h},cell:function(e){return(0,d.jsx)("p",{className:"col-info",children:(0,d.jsx)("span",{className:"".concat((0,w.p)(e.low_24h)," white-space-text"),children:N(e.low_24h,C.f4[o])})})},sortable:!0},{id:"market_cap",name:e("markets.columns.market-cap"),selector:function(e){return e.market_cap},cell:function(e){return(0,d.jsx)("span",{className:"white-space-text",children:N(e.market_cap,C.f4[o])})},sortable:!0},{id:"total_volume",name:e("markets.columns.24h-volume"),selector:function(e){return e.total_volume},cell:function(e){return(0,d.jsx)("span",{className:"white-space-text",children:N(e.total_volume,C.f4[o])})},sortable:!0},{id:"chart",name:"",cell:function(e){return(0,d.jsx)(d.Fragment,{children:!e.id.toString().includes("default")&&(0,d.jsx)(S.Z,{coinId:e.id,color:(0,w.L)(e.price_change_percentage_24h),width:140,height:70})})},sortable:!1}];return(0,d.jsx)(R.ZP,{className:"markets__table table",noDataComponent:e("landing.market-info.table-have-not-data"),columns:L,data:Z,onChangePage:function(e){c.addFilter(H(H({},c.list),{},{page:e}))},onChangeRowsPerPage:function(e){c.addFilter(H(H({},c.list),{},{perPage:e}))},paginationPerPage:c.list.perPage,paginationDefaultPage:c.list.page,pagination:!0,disabled:b,customStyles:{rows:{style:{minHeight:"71px"}},tableWrapper:{style:{minHeight:"762px"}}}})};!function(e){e.DEFAULT_CLASS="markets__coin-item",e.ACTIVE_CLASS="markets__coin-item--active"}(G||(G={}));var z=function(){var e=(0,_.$)().t,t=(0,n.useContext)(k.tE).filters,a=(0,n.useState)(t.list.isFavorite?G.ACTIVE_CLASS:G.DEFAULT_CLASS),c=(0,r.Z)(a,2),i=c[0],l=c[1];return(0,d.jsx)("ul",{className:"markets__coin-list",children:(0,d.jsx)("li",{className:i,onClick:function(){G.DEFAULT_CLASS===i?(l(G.DEFAULT_CLASS+" "+G.ACTIVE_CLASS),t.addFilter({isFavorite:!0})):(l(G.DEFAULT_CLASS),t.addFilter({isFavorite:!1}))},children:e("markets.filters.favourites")})})},K=function(){var e=(0,n.useContext)(k.tE).filters,t=(0,_.$)().t,a=(0,n.useState)(e.list.search),c=(0,r.Z)(a,2),i=c[0],l=c[1];return(0,d.jsxs)("div",{className:"markets__search",children:[(0,d.jsx)("input",{className:"markets__search-input",value:i,onChange:function(t){l(t.target.value),e.addFilter({search:t.target.value})},type:"text",placeholder:t("markets.filters.search")}),(0,d.jsx)("button",{className:"markets__search-img",type:"button","aria-label":"search button",onClick:function(t){t.preventDefault(),e.addFilter({search:i})},children:(0,d.jsx)("svg",{className:"markets__search-icon",width:"12",height:"12",children:(0,d.jsx)("use",{xlinkHref:"#search-icon"})})})]})},Q=a(1668),X="".concat(Q.x,"/coins/categories"),ee=a(2394),te=function(){var e=(0,n.useState)(!1),t=(0,r.Z)(e,2),a=t[0],c=t[1],i=(0,_.$)(),l=i.i18n,s=i.t,o=(0,n.useContext)(k.tE).filters,u=(0,V.Z)({url:"".concat(X,"/list"),method:"GET",params:[]}).response,p=(0,n.useState)({label:s("markets.filters.select-category"),value:0}),h=(0,r.Z)(p,2),m=h[0],f=h[1],g=(0,n.useMemo)((function(){c(!1);var e=[{label:s("markets.filters.select-category"),value:0}];null!==u&&void 0!==u&&u.data&&u.data.forEach((function(t){e.push({value:t.category_id,label:t.name})})),f(o.list.category?e.filter((function(e){return e.value===o.list.category}))[0]:e.filter((function(e){return e.value===m.value}))[0]);var t=setTimeout((function(){c(!0),clearTimeout(t)}),1500);return e}),[u,l.language]);var v={option:function(){return{padding:"5px",borderLeft:"3px solid transparent",textAlign:"left",transition:"color .3s, border .3s",width:"100%",":hover":{borderLeft:"3px solid #24ac80"}}},control:function(){return{width:"200px",display:"flex",padding:"0px 0px 0px 0px"}},menuList:function(){return{backgroundColor:"rgba(var(--select-bg-color), 1)",border:"1px solid rgba(var(--primary-color),.05)",maxHeight:"15rem",overflowY:"auto",scrollbarWidth:"thin"}},valueContainer:function(e,t){return H(H({},e),{},{paddingLeft:"5px",textAlign:"left"})},dropdownIndicator:function(e,t){return{transition:"all .2s",transform:t.selectProps.menuIsOpen?"rotate(180deg)":"none",padding:"5px"}},singleValue:function(e,t){var a=t.isDisabled?.5:1;return H(H({},e),{},{opacity:a,transition:"opacity 300ms"})}};return(0,d.jsx)(ee.Z,{styles:v,values:g,selected:m,onChange:function(e){f(e),o.addFilter({category:e.value})},components:{IndicatorSeparator:function(){return null}},isDisabled:!a})},ae=function(){var e=(0,n.useContext)(k.tE),t=e.currency,a=e.filters,c=(0,n.useState)((0,C.AW)(t.currency)),i=(0,r.Z)(c,2),l=i[0],s=i[1];var o={option:function(e,t){return{padding:"5px",borderLeft:"3px solid transparent",textAlign:"left",transition:"color .3s, border .3s",width:"100%",":hover":{borderLeft:"3px solid #24ac80"}}},control:function(){return{width:"100px",display:"flex",padding:"0px 0px 0px 0px"}},menuList:function(){return{backgroundColor:"rgba(var(--select-bg-color), 1)",border:"1px solid rgba(var(--primary-color),.05)",maxHeight:"15rem",overflowY:"auto",scrollbarWidth:"thin"}},valueContainer:function(e,t){return H(H({},e),{},{paddingLeft:"5px",textAlign:"left"})},dropdownIndicator:function(e,t){return{transition:"all .2s",transform:t.selectProps.menuIsOpen?"rotate(180deg)":"none",padding:"5px"}},singleValue:function(e,t){var a=t.isDisabled?.5:1;return H(H({},e),{},{opacity:a,transition:"opacity 300ms"})}};return(0,d.jsx)(ee.Z,{styles:o,values:C.j,selected:l,onChange:function(e){t.changeCurrency(e.value),a.addFilter({currency:e.value}),s(e)},components:{IndicatorSeparator:function(){return null}},isSearchable:!1})},re=function(){var e=(0,_.$)(),t=e.t,a=e.i18n,c=(0,n.useContext)(k.tE),i=c.platforms,l=c.filters,s=(0,n.useState)({label:t("markets.filters.select-platform"),value:0}),o=(0,r.Z)(s,2),u=o[0],p=o[1],h=(0,n.useState)(!1),m=(0,r.Z)(h,2),f=m[0],g=m[1],v=(0,n.useMemo)((function(){if(g(!1),Object.keys(i.list).length<2)return[{label:t("markets.filters.select-platform"),value:0}];var e=Object.keys(i.list),a=[];e.forEach((function(e){var t=e.replaceAll("-"," ");t=t.charAt(0).toUpperCase()+t.slice(1),a.push({label:t,value:e})}));var r=[{label:t("markets.filters.select-platform"),value:0}].concat(a);p(l.list.platform?r.filter((function(e){return e.value===l.list.platform}))[0]:r.filter((function(e){return e.value===u.value}))[0]);var n=setTimeout((function(){g(!0),clearTimeout(n)}),1500);return r}),[i.list,a.language]);var x={option:function(e,t){return{padding:"5px",borderLeft:"3px solid transparent",textAlign:"left",transition:"color .3s, border .3s",width:"100%",":hover":{borderLeft:"3px solid #24ac80"}}},control:function(){return{width:"200px",display:"flex",padding:"0px 0px 0px 0px"}},menuList:function(){return{backgroundColor:"rgba(var(--select-bg-color), 1)",border:"1px solid rgba(var(--primary-color),.05)",maxHeight:"15rem",overflowY:"auto",scrollbarWidth:"thin"}},valueContainer:function(e,t){return H(H({},e),{},{paddingLeft:"5px",textAlign:"left"})},dropdownIndicator:function(e,t){return{transition:"all .2s",transform:t.selectProps.menuIsOpen?"rotate(180deg)":"none",padding:"5px"}},singleValue:function(e,t){var a=t.isDisabled?.5:1;return H(H({},e),{},{opacity:a,transition:"opacity 300ms"})}};return(0,d.jsx)(ee.Z,{styles:x,selected:u,values:v,onChange:function(e){p(e),l.addFilter({platform:e.value})},components:{IndicatorSeparator:function(){return null}},isDisabled:!f})},ne=function(){var e=(0,n.useState)(!1),t=(0,r.Z)(e,2),a=t[0],c=t[1],i=(0,n.useContext)(k.tE).filters,l=(0,_.$)(),s=l.t,o=l.i18n,u=(0,n.useState)([{value:"",label:s("markets.filters.price.select-last-price")},{value:"Last Price Down",label:s("markets.filters.price.last-price-down")},{value:"Last Price Up",label:s("markets.filters.price.last-price-up")}]),p=(0,r.Z)(u,2),h=p[0],m=p[1],f=(0,n.useState)(i.list.lastPrice?h.filter((function(e){return i.list.lastPrice===e.value}))[0]:h[0]),g=(0,r.Z)(f,2),v=g[0],x=g[1];(0,n.useEffect)((function(){c(!1);var e=[{value:"",label:s("markets.filters.price.select-last-price")},{value:"Last Price Down",label:s("markets.filters.price.last-price-down")},{value:"Last Price Up",label:s("markets.filters.price.last-price-up")}];m(e);var t=setTimeout((function(){x(e.filter((function(e){return e.value===v.value}))[0]),c(!0),clearTimeout(t)}),1500)}),[o.language]);var y={option:function(e,t){return{padding:"5px",borderLeft:"3px solid transparent",textAlign:"left",transition:"color .3s, border .3s",width:"100%",":hover":{borderLeft:"3px solid #24ac80"}}},control:function(){return{width:"200px",display:"flex",padding:"0px 0px 0px 0px"}},menuList:function(){return{backgroundColor:"rgba(var(--select-bg-color), 1)",border:"1px solid rgba(var(--primary-color),.05)",maxHeight:"15rem",overflowY:"auto",scrollbarWidth:"thin"}},valueContainer:function(e,t){return H(H({},e),{},{paddingLeft:"5px",textAlign:"left"})},dropdownIndicator:function(e,t){return{transition:"all .2s",transform:t.selectProps.menuIsOpen?"rotate(180deg)":"none",padding:"5px"}},singleValue:function(e,t){var a=t.isDisabled?.5:1;return H(H({},e),{},{opacity:a,transition:"opacity 300ms"})}};return(0,d.jsx)(ee.Z,{isSearchable:!1,selected:v,values:h,onChange:function(e){x(e),i.addFilter({lastPrice:e.value})},styles:y,components:{IndicatorSeparator:function(){return null}},isDisabled:!a})},ce=[{component:re,key:"platform"},{component:ne,key:"price"},{component:te,key:"category"},{component:ae,key:"currency"}],ie=function(){return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:"markets__table-head-row",children:[ce.length&&(0,d.jsx)("ul",{className:"markets__filters-list",children:ce.map((function(e){return(0,d.jsx)("li",{className:"markets__filters-item",children:(0,d.jsx)(e.component,{})},e.key)}))}),(0,d.jsx)(z,{}),(0,d.jsx)(K,{})]})})},le=function(e){var t,a,c=(0,m.lr)(),i=(0,r.Z)(c,2),l=i[0],s=(i[1],(0,n.useState)(null!==(t=null===(a=l.get("coins"))||void 0===a?void 0:a.split(","))&&void 0!==t?t:[])),o=(0,r.Z)(s,2),u=o[0],d=o[1];return{coinsList:u,removeCoin:function(t){e({coins:u.filter((function(e){return e!==t})).join(",")}),d(u.filter((function(e){return e!==t})))},addCoin:function(t){e({coins:[].concat((0,I.Z)(u),[t]).join(",")}),d([].concat((0,I.Z)(u),[t]))}}},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=new URLSearchParams(window.location.search),a={};return t.forEach((function(t,r){a[r]?"string"===typeof a[r]?a[r]=[a[r],t]:a[r]=[].concat((0,I.Z)(a[r]),[t]):e.includes(r)?a[r]=[t]:a[r]=t})),a},oe=function(){var e=se(),t=(0,m.lr)(),a=(0,r.Z)(t,2),c=(a[0],a[1]),i=(0,n.useState)(H({category:"",search:"",platform:"",coins:"",lastPrice:"",page:void 0,perPage:void 0,isFavorite:!1,currency:""},e)),l=(0,r.Z)(i,2),s=l[0],o=l[1];return{filtersMarkets:s,addFiltersMarkets:function(e){var t=H(H(H({},s),se()),e);o(H(H(H({},s),se()),e)),c(JSON.parse(JSON.stringify(t,(function(e,t){if(t)return t}))))}}},ue=function(){var e=(0,n.useState)({}),t=(0,r.Z)(e,2),a=t[0],c=t[1],i=(0,A.LB)({include_platform:!0}),l=(0,V.Z)(i).response;return(0,n.useEffect)((function(){var e=null===l||void 0===l?void 0:l.data;if(e){var t=[],a=[],r={};e.forEach((function(e){var t=Object.keys(null===e||void 0===e?void 0:e.platforms);t.length&&t.forEach((function(t){if(t){var n=t.toLowerCase();a.includes(n)?r[n].push(e.id.toLowerCase()):(a.push(n),r[n]=[e.id.toLowerCase()])}}))})),a.forEach((function(e){t.push({label:e,value:e.toLowerCase()}),r[e.toLowerCase()]=r[e.toLowerCase()].join(", ")})),c(r)}}),[l]),{platforms:a,addPlatform:function(e){c(H(H({},a),e))}}},de=function(){var e=(0,m.lr)(),t=(0,r.Z)(e,2),a=(t[0],t[1]),c=(0,n.useState)((0,C.zC)()),i=(0,r.Z)(c,2),l=i[0],s=i[1];return{currency:l,changeCurrency:function(e){if(e){s(e);var t=H(H({},se()),{},{currency:e});a(JSON.parse(JSON.stringify(t,(function(e,t){if(t)return t}))))}}}},pe=function(){var e=(0,_.$)().t,t=oe(),a=t.filtersMarkets,r=t.addFiltersMarkets,n=le(r),c=n.coinsList,i=n.removeCoin,l=n.addCoin,s=ue(),o=s.platforms,u=s.addPlatform,p=de(),h=p.currency,m=p.changeCurrency;return(0,d.jsx)("main",{className:"page-main",children:(0,d.jsx)(k.tE.Provider,{value:{platforms:{list:o,addPlatform:u},filters:{list:a,addFilter:r},coins:{list:c,removeCoin:i,addCoin:l},currency:{currency:h,changeCurrency:m}},children:(0,d.jsxs)("section",{className:"markets",children:[(0,d.jsx)(b,{title:e("markets.title-header")}),(0,d.jsx)(M,{}),(0,d.jsxs)("div",{className:"markets__content custom-scroll",children:[(0,d.jsx)("div",{className:"markets__table-head",children:(0,d.jsx)(ie,{})}),(0,d.jsx)("div",{className:"markets__table-wrap custom-scroll",children:(0,d.jsx)(q,{})})]})]})})})},he=function(){var e=(0,n.useState)(!1),t=(0,r.Z)(e,2),a=t[0],c=t[1];return(0,d.jsx)(o.Provider,{value:{menuMobile:{menuMobile:a,toggleMenuMobile:function(){c(!a)}}},children:(0,d.jsx)("div",{className:"page theme",children:(0,d.jsxs)("div",{className:"page__body dashboard"+(a?" no-scroll":""),children:[(0,d.jsx)(y,{}),(0,d.jsx)(pe,{})]})})})}},3813:function(e,t,a){a.d(t,{Z:function(){return v}});var r=a(9439),n=a(2791),c=a(812),i=a(2891),l=a(2955),s=a(7578),o=a(5861),u=a(7757),d=a.n(u),p=a(4569),h=a.n(p),_=function(e){var t=(0,n.useState)(),a=(0,r.Z)(t,2),c=a[0],i=a[1],l=(0,n.useState)(),s=(0,r.Z)(l,2),u=s[0],p=s[1],_=(0,n.useState)("GET"===e.method||"get"===e.method),m=(0,r.Z)(_,2),f=m[0],g=m[1],v=function(){var e=(0,o.Z)(d().mark((function e(t){var a;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h().request(t);case 3:a=e.sent,i(a),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),p(e.t0);case 10:return e.prev=10,g(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=(0,o.Z)(d().mark((function e(t){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,n.useEffect)((function(){"GET"!==e.method&&"get"!==e.method||v(e)}),[e]),{response:c,error:u,loading:f,sendData:x}},m=a(4864),f=a(4278),g=a(184),v=function(e){var t=e.coinId,a=e.color,o=e.width,u=void 0===o?140:o,d=e.height,p=void 0===d?70:d,h=(0,n.useContext)(m.tE).currency,v=(0,n.useMemo)((function(){return(0,s.JI)(t,{vs_currency:h.currency,days:"1"})}),[h.currency]),x=_(v).response,y=(0,n.useState)(!1),b=(0,r.Z)(y,2),k=b[0],j=b[1],w=(0,n.useMemo)((function(){var e,t;j(!1);var a=[];null===x||void 0===x||null===(e=x.data)||void 0===e||null===(t=e.prices)||void 0===t||t.forEach((function(e){a.push({x:e[0],y:e[1]})}));var r=setTimeout((function(){j(!0),clearTimeout(r)}),1500);return a}),[x]);return(0,g.jsx)(g.Fragment,{children:k?(0,g.jsxs)(c.T,{width:u,height:p,data:w,margin:{top:10,right:30,left:0,bottom:10},children:[(0,g.jsx)(i.B,{hide:!0,type:"number",domain:["auto","auto"]}),(0,g.jsx)(l.u,{type:"monotone",dataKey:"y",stroke:a,fill:a})]}):(0,g.jsx)(f.Z,{isRevert:!0,style:{height:"24px",width:"24px"}})})}},4864:function(e,t,a){a.d(t,{tE:function(){return l}});a(6789);var r,n=a(9334),c=a(2791);!function(e){e.category="category",e.search="search",e.platform="platform",e.coins="coins",e.lastPrice="lastPrice"}(r||(r={}));var i={platforms:{list:{},addPlatform:function(e){}},filters:{list:{},addFilter:function(e){}},coins:{list:[],removeCoin:function(e){},addCoin:function(e){}},currency:{currency:n.OM,changeCurrency:function(e){}}},l=c.createContext(i)},4278:function(e,t,a){a.d(t,{Z:function(){return n}});var r=a(184),n=function(e){var t=e.isRevert,a=void 0!==t&&t,n=e.style,c=void 0===n?{}:n,i=a?"loader loader-revert":"loader";return(0,r.jsx)("div",{className:"wrap-loader",children:(0,r.jsx)("span",{className:i,style:c})})}},4566:function(e,t,a){a(2791);var r=a(3504),n=a(1229),c=a(5677),i=a(184);t.Z=function(){return(0,i.jsxs)(r.rU,{className:"dashboard-header__logo logo",to:"/","aria-label":"logo",children:[(0,i.jsx)("img",{className:"logo__icon",src:n.Z,alt:"",width:"32",height:"27"}),(0,i.jsx)("img",{className:"dashboard-header__logo-text",src:c.Z,alt:"",width:"52",height:"11"})]})}},6089:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(9439),n=a(2791),c=a(3168),i=a(2617);var l=a.p+"static/media/account.880c1d5c85b53f84efed400d2d3660e0.svg",s=a(184),o=function(){var e,t=(0,n.useContext)(i.V).auth,a=(0,c.$)().t,o=(0,n.useState)(!1),u=(0,r.Z)(o,2),d=u[0],p=u[1];return(0,s.jsxs)("div",{className:"dashboard-header__user-dropdown dropdown-menu "+(d?"dropdown-menu--active":""),children:[(0,s.jsxs)("div",{className:"dropdown-menu__user-info",onClick:function(e){p(!d)},children:[(0,s.jsx)("img",{className:"dropdown-menu__user-icon",src:l,width:"48",height:"48",alt:"Account"}),(0,s.jsxs)("div",{className:"dropdown-menu__user-name",children:[null===(e=t.user)||void 0===e?void 0:e.email,(0,s.jsx)("i",{className:"arrow down"})]})]}),(0,s.jsx)("div",{className:"dropdown-menu__menu",children:(0,s.jsx)("div",{className:"dropdown-menu__menu-list",children:(0,s.jsx)("a",{className:"dropdown-menu__menu-item",href:"#!",onClick:function(e){e.preventDefault(),t.logout()},children:a("menu.Logout")})})})]})}},1668:function(e,t,a){a.d(t,{x:function(){return r}});var r="https://api.coingecko.com/api/v3"},6186:function(e,t,a){a.d(t,{L:function(){return n},p:function(){return r}});var r=function(e){return e>0?"color-green":"color-red"},n=function(e){return e>0?"#24ac80":"#ef4f46"}},9334:function(e,t,a){a.d(t,{AW:function(){return n},OM:function(){return c},f4:function(){return i},j:function(){return r},zC:function(){return l}});var r=[{value:"usd",label:"USD",sign:"$"},{value:"gbp",label:"GBP",sign:"\xa3"},{value:"rub",label:"RUB",sign:"\u20bd"}],n=function(e){return r.filter((function(t){return t.value===e}))[0]},c="usd",i={usd:"$",gbp:"\xa3",rub:"\u20bd"},l=function(){var e,t=null!==(e=new URLSearchParams(window.location.search).get("currency"))&&void 0!==e?e:"";return t||c}},6282:function(e,t,a){var r=a(5861),n=a(9439),c=a(7757),i=a.n(c),l=a(2791),s=a(4569),o=a.n(s);t.Z=function(e){var t=(0,l.useState)(),a=(0,n.Z)(t,2),c=a[0],s=a[1],u=(0,l.useState)(),d=(0,n.Z)(u,2),p=d[0],h=d[1],_=(0,l.useState)("GET"===e.method||"get"===e.method),m=(0,n.Z)(_,2),f=m[0],g=m[1],v=function(){var e=(0,r.Z)(i().mark((function e(t){var a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o().request(t);case 3:a=e.sent,s(a),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),h(e.t0);case 10:return e.prev=10,g(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=(0,r.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,l.useEffect)((function(){"GET"!==e.method&&"get"!==e.method||v(e)}),[]),{response:c,error:p,loading:f,sendData:x}}}}]);
//# sourceMappingURL=757.e72c1742.chunk.js.map