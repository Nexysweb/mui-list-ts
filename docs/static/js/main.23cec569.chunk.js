(this["webpackJsonp@nexys/mui-list"]=this["webpackJsonp@nexys/mui-list"]||[]).push([[0],{103:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(7),l=t.n(i),o=(t(85),t(29)),c=t(15),u=t(126),m=function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Select an option from the menu above"),r.a.createElement("p",null,r.a.createElement("a",{href:"https://github.com/Nexysweb/mui-list"},r.a.createElement(u.a,null)," Source"),"  available under MIT license."))},s=t(17),d=t(146),f=t(147),p=t(148),g=t(129),h=t(47),E=t(150),v=t(141),b=t(104),y=t(3),C=t(69),w=t(149),k=t(151),x=function(){return r.a.createElement(h.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 Nexys ",(new Date).getFullYear())},S=function(){return r.a.createElement(k.a,{pt:4},r.a.createElement(x,null))},N=t(43),O=t(34),P=t(53),j=t(154),A=function(e){var n=e.type,t=void 0===n?"success":n,a=e.children;return r.a.createElement(j.a,{severity:t},a)},I=t(31),L=t.n(I),B=L.a.ds.get,R=function(e,n){var t=B(e,n);return"string"===typeof t?t.toLocaleLowerCase():t},U=function(e,n,t){if(!n)return e;var a=e.sort((function(e,t){return function(e,n,t){var a=R(t,e),r=R(t,n);return a<r?-1:a>r?1:0}(e,t,n)}));return!1===t?a.reverse():a},F=function(e,n){return{start:(e-1)*n,end:e*n}},z=function(e){var n=r.a.useState(e.value||""),t=Object(s.a)(n,2),a=t[0],i=t[1],l=e.name,o=e.onChange;return r.a.createElement("input",{value:a,type:"text",name:l,onChange:function(e){var n=e.target.value,t={name:l,value:n};i(n),o(t)}})},D=function(e){var n=e.onChange,t=e.filters;if(!e.config.search)return null;var a="globalSearch",i=t[a];return r.a.createElement("div",{className:"pull-right"},r.a.createElement(z,{onChange:n,name:a,value:i}))},G=t(130),H=t(156),W=t(136),T=t(137),M=t(138),J=t(139),K=t(140),X=t(131),Y=(t(132),t(133),t(134)),$=t(135),q=function(e){var n=r.a.useState(null),t=Object(s.a)(n,2),a=t[0],i=t[1],l=Boolean(a),o=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{onClick:function(e){i(e.currentTarget)}},r.a.createElement(X.a,null)),r.a.createElement(H.a,{open:l,anchorEl:a,onClose:function(){i(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},o))},Q=function(e,n,t){var a=typeof n;if("string"===a)switch(typeof e){case"string":return V(e,n);case"number":return e===Number(n);default:return!1}return"object"===a&&(0===n.value.length||n.func(t,n.value))},V=function(e,n){return e.toLowerCase().indexOf(n.toLowerCase())>-1},Z=function(e,n){var t=Object.keys(n).map((function(e){return{name:e,value:n[e]}}));return 0===t.length?e:e.filter((function(e){return t.map((function(n){var t=n.value,a=n.name,r=L.a.ds.get(a,e);return"globalSearch"===a?function(e,n){return JSON.stringify(n).toLowerCase().includes(e.toLowerCase())}(t,e):null===r||Q(r,t,e)})).reduce((function(e,n){return e&&n}))}))},_={sortAttribute:null,sortDescAsc:!0,filters:{},pageIdx:1},ee=function(e,n){var t=n||10;return{idx:1,nPerPage:t,nPage:function(e,n){return Math.ceil(e/n)}(e,t)}},ne=function(e){var n=e.HeaderUnit,t=e.FilterUnit,i=e.OrderController,l=e.ColCell,o=e.GlobalSearch,c=e.NoRow,u=e.Row,m=e.ListWrapper,d=e.ListContainer,f=e.ListHeader,p=e.ListBody,g=e.RecordInfo,h=e.Pagination;e.Loader;return function(e){var E=Object(a.useState)(_),v=Object(s.a)(E,2),b=v[0],y=v[1],C=e.def,w=e.data,k=e.nPerPage,x=void 0===k?5:k,S=e.config,N=void 0===S?{}:S,P=b.filters,j=b.pageIdx,A=b.sortAttribute,I=b.sortDescAsc,B=function(e){null===e.value||""===e.value?delete P[e.name]:"string"!==typeof e.value?(P[e.name]||(P[e.name]={value:[],func:e.value.func}),P[e.name].value=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(!n)return[e];if(n.includes(e)){var t=n.indexOf(e);return n.splice(t,1),n}return n.push(e),n}(e.value.value,P[e.name].value)):P[e.name]=""===e.value?null:e.value;y(Object(O.a)({},b,{filters:P,pageIdx:1}))},R=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;null===n&&(n=!I),y(Object(O.a)({},b,{pageIdx:1,sortDescAsc:n,sortAttribute:e}))},z=Z(w,P),D=z.length,G=function(e,n,t){var a=F(n,t),r=a.start,i=a.end;return e.slice(r,i)}(U(z,A,I),j,x);return r.a.createElement(m,null,r.a.createElement(o,{config:N,onChange:function(e){return B(e)},filters:P}),r.a.createElement(d,null,r.a.createElement(f,null,r.a.createElement(u,null,C.map((function(e,a){var l=null===e.label?null:e.label||e.name,o="boolean"===typeof e.sort&&!0===e.sort?r.a.createElement(i,{descAsc:I,onClick:function(n){return R(e.name)}}):null,c=r.a.createElement(t,{key:a,filters:P,name:e.name,filter:e.filter,onChange:B});return r.a.createElement(n,{key:a},l," ",o," ",c)})))),r.a.createElement(p,null,function(e){return e.map((function(e,n){return r.a.createElement("tr",{key:n},C.map((function(n,t){return r.a.createElement(l,{key:t},n.render?n.render(e):L.a.ds.get(n.name,e))})))}))}(G))),r.a.createElement(g,{n:D,idx:j,nPerPage:x}),r.a.createElement(h,{n:D,nPerPage:x,idx:j,onClick:function(e){e>0&&y(Object(O.a)({},b,{pageIdx:e}))}}),r.a.createElement(c,{n:D}))}}({HeaderUnit:function(e){var n=e.children;return r.a.createElement(G.a,null,n)},FilterUnit:function(e){var n=e.name,t=e.filter,a=e.filters,i=e.onChange;if("boolean"===typeof t&&!0===t||"object"===typeof t&&"string"===t.type)return r.a.createElement(q,null,r.a.createElement(z,{name:n,value:a[n],onChange:i}));if("object"===typeof t&&"category"===t.type&&Array.isArray(t.options)){var l=a[n]?a[n].value:[];return r.a.createElement(q,null,t.options.map((function(e,a){return r.a.createElement("span",{key:a},r.a.createElement("input",{checked:l.includes(e.id),type:"checkbox",onChange:function(a){return i({name:n,value:{value:e.id,func:t.func}})}})," ",e.name,r.a.createElement("br",null))})))}return null},OrderController:function(e){var n=e.onClick,t=e.descAsc?Y.a:$.a;return r.a.createElement("small",{style:{cursor:"pointer"},onClick:function(e){return n(null)}},r.a.createElement(t,null))},ColCell:function(e){var n=e.children;return r.a.createElement(G.a,null,n)},GlobalSearch:D,NoRow:function(e){return e.n>0?null:r.a.createElement(A,{type:"warning"},"No rows found")},Row:function(e){var n=e.children;return r.a.createElement(M.a,null,n)},ListWrapper:function(e){var n=e.children;return r.a.createElement("div",{className:"table-responsive-sm"},n)},ListContainer:function(e){var n=e.children;return r.a.createElement(W.a,null,r.a.createElement(T.a,null,n))},ListHeader:function(e){var n=e.children;return r.a.createElement(J.a,null,n)},ListBody:function(e){var n=e.children;return r.a.createElement(K.a,null,n)},RecordInfo:function(e){var n=e.nPerPage,t=e.idx,a=e.n;if(0===a)return null;var i=F(t,n),l=i.start,o=i.end;return r.a.createElement("p",{className:"pull-right"},"Showing ",l+1," to ",Number(l)+Number(n)>a?a:o," of ",a," entries")},Pagination:function(e){var n=e.PaginationWrapper,t=e.PaginationUnit;return function(e){var a=e.n,i=e.nPerPage,l=e.idx,o=e.onClick;if(0===a)return null;var c=ee(a,i).nPage,u=function(e,n){e<1&&(e=1),e>n&&(e=n);var t=e-1,a=e+1,r=[e];return e>1&&r.unshift(t),e===n&&n>3&&r.unshift(t-1),e<n&&r.push(a),1===e&&n>3&&r.push(3),t>2&&n>4&&r.unshift(-1),t>1&&r.unshift(1),a<n-1&&n>4&&r.push(-2),a<n&&r.push(n),r}(l,c).map((function(e){return e<0?r.a.createElement(t,{key:e,isDisabled:!0},"..."):r.a.createElement(t,{key:e,isActive:e===l,onClick:function(n){return o(e)}},e)}));return r.a.createElement(n,null,r.a.createElement(t,{isDisabled:1===l,onClick:function(e){return o(l-1)}},"\xab"),u,r.a.createElement(t,{isDisabled:l===c,onClick:function(e){return o(l+1)}},"\xbb"))}}({PaginationUnit:function(e){var n=e.isDisabled;if(n)return null;var t="page-item"+(e.isActive?" active":"")+(n?" disabled":"");return r.a.createElement("li",{className:t},r.a.createElement("button",{className:"page-link",onClick:e.onClick},e.children))},PaginationWrapper:function(e){return r.a.createElement("nav",null,r.a.createElement("ul",{className:"pagination"},e.children))}})}),te=t(21),ae=t.n(te),re={id:1,name:"Africa"},ie={id:2,name:"Europe"},le={id:3,name:"Asia"},oe={id:4,name:"America"},ce=[{id:2,check:!0,name:"Sheep",location:ie,country:{name:"United Kingdom"},amount:23.3,int:23,date:"2019-09-05"},{id:3,name:"Tiger",location:le,country:{name:"India"},amount:24.1,int:43,date:"2019-09-05"},{id:4,name:"Elephant",location:re,country:{name:"Tanzania"},amount:23,int:3,date:"2019-09-05"},{id:5,name:"Lion",location:re,country:{name:"South Africa"},amount:.3,int:2,date:"2019-09-05"},{id:6,name:"Cat",location:ie,country:{name:"Germany"},amount:2.31,int:7,date:"2019-09-05"},{id:7,name:"Grizzly",location:oe,country:{name:"Canada"},amount:3.35,int:43,date:"2019-09-05"},{id:8,name:"Antelope",location:re,country:{name:"Namibia"},amount:2.3,int:87,date:"2019-09-05"}],ue=[{name:"name",filter:!0,sort:!0},{name:"location.name",filter:{type:"category",func:function(e,n){return n.includes(e.location.id)},options:[re,ie,le,oe]}},{name:"country.name",label:"Country",filter:!0},{name:"amount",label:"A long label",filter:!0},{name:"int",label:"d",filter:!0},{name:"date",label:"a date",filter:!0},{name:"random",label:"custom",render:function(e){return"custom"+e.location.name}}],me={id:1,name:"Africa"},se={id:2,name:"Europe"},de={id:3,name:"Asia"},fe={id:4,name:"America"},pe=[{id:2,check:!0,name:"Sheep",location:se,country:{name:"United Kingdom"},amount:23.3,int:23,date:"2019-09-05"},{id:3,name:"Tiger",location:de,country:{name:"India"},amount:24.1,int:43,date:"2019-09-05"},{id:4,name:"Elephant",location:me,country:{name:"Tanzania"},amount:23,int:3,date:"2019-09-05"},{id:5,name:"Lion",location:me,country:{name:"South Africa"},amount:.3,int:2,date:"2019-09-05"},{id:6,name:"Cat",location:se,country:{name:"Germany"},amount:2.31,int:7,date:"2019-09-05"},{id:7,name:"Grizzly",location:fe,country:{name:"Canada"},amount:3.35,int:43,date:"2019-09-05"},{id:8,name:"Antelope",location:me,country:{name:"Namibia"},amount:2.3,int:87,date:"2019-09-05"}],ge=[{name:"name",filter:!0,sort:!0},{name:"location.name",filter:{type:"category",func:function(e,n){return n.includes(e.location.id)},options:[me,se,de,fe]}},{name:"country.name",label:"Country",filter:!0},{name:"amount",label:"A long label",filter:!0},{name:"int",label:"d",filter:!0},{name:"date",label:"a date",filter:!0},{name:"random",label:"custom",render:function(e){return"custom"+e.location.name}}],he=function(e){return new Promise((function(e){return e(pe)}))},Ee=t(72),ve=t(152),be=[{label:"Main",path:"/table",Component:function(){var e=[{name:"name",label:"Name",render:function(e){return r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/".concat(encodeURIComponent(e.name.common))},e.name.common)}},{label:"Capital",render:function(e){return e.capital||""}},{name:"currency",label:"Currency",render:function(e){var n=Object.keys(e.currencies);if(!n||0===n.length)return"-";var t=n[0];return"".concat(e.currencies[t].name," (").concat(t,")")}}];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Simple table example"),r.a.createElement(ne,{data:ae.a,def:e,config:{}}))}},{label:"Pagination",path:"/pagination",Component:function(){var e=r.a.useState(10),n=Object(s.a)(e,2),t=n[0],a=n[1],i=[{name:"name",title:"Name",render:function(e){return r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/".concat(encodeURIComponent(e.name.common))},e.name.common)}},{title:"Capital",render:function(e){return e.capital||""}},{name:"currency",title:"Currency",render:function(e){var n=Object.keys(e.currencies);if(!n||0===n.length)return"-";var t=n[0];return"".concat(e.currencies[t].name," (").concat(t,")")}}];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Pagination example"),r.a.createElement(v.a,{md:2,item:!0},"# of records per page",r.a.createElement("input",{width:"20%",type:"number",value:t,onChange:function(e){var n=Math.ceil(Number(e.target.value));a(n>0?n:1)}})),r.a.createElement(ne,{data:ae.a,def:i,nPerPage:t}))}},{label:"Filtering",path:"/filters",Component:function(){var e=[{name:"name",title:"Name",render:function(e){return r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/".concat(encodeURIComponent(e.name.common))},e.name.common)}},{title:"Capital",render:function(e){return e.capital||""}},{name:"currency",title:"Currency",render:function(e){var n=Object.keys(e.currencies);if(!n||0===n.length)return"-";var t=n[0];return"".concat(e.currencies[t].name," (").concat(t,")")}}];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Filter example"),r.a.createElement(ne,{data:ae.a,def:e,config:{search:!0}}))}},{label:"Sorting",path:"/sorting",Component:function(){var e=[{name:"name",title:"Name",render:function(e){return r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/".concat(encodeURIComponent(e.name.common))},e.name.common)}},{key:"capital",name:"capital",title:"Capital",render:function(e){return e.capital||""},sort:!0},{name:"currency",title:"Currency",render:function(e){var n=Object.keys(e.currencies);if(!n||0===n.length)return"-";var t=n[0];return"".concat(e.currencies[t].name," (").concat(t,")")}}];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Simple table example"),r.a.createElement(ne,{data:ae.a,def:e,config:{}}))}},{label:"Checks",path:"/checks",Component:function(){var e=r.a.useState([]),n=Object(s.a)(e,2),t=n[0],a=n[1];return r.a.createElement(r.a.Fragment,null,JSON.stringify(t),r.a.createElement("h2",null,"Simple table example"),r.a.createElement(ne,{data:ae.a,def:function(e){return[{name:"id",render:function(n){return r.a.createElement(ve.a,{onClick:function(){return e(n.name.common)}})}},{name:"name",label:"Name",render:function(e){return r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/".concat(encodeURIComponent(e.name.common))},e.name.common)}},{label:"Capital",render:function(e){return e.capital||""}},{name:"currency",label:"Currency",render:function(e){var n=Object.keys(e.currencies);if(!n||0===n.length)return"-";var t=n[0];return"".concat(e.currencies[t].name," (").concat(t,")")}}]}((function(e){var n=t.indexOf(e);a(n<0?[].concat(Object(Ee.a)(t),[e]):t.filter((function(e,t){return t!==n})))})),config:{}}))}},{label:"Small",path:"/small",Component:function(e){return r.a.createElement(ne,{data:ce,def:ue,config:{search:!0},nPerPage:"3"})}},{label:"Async",path:"/async",Component:function(e){return r.a.createElement(ne,{def:ge,config:{search:!0},asyncData:he,nPerPage:"3"})}},{label:"Alert",path:"/alert",Component:function(){return r.a.createElement(A,{severity:"info"},"Some content")}}],ye=t(157),Ce=t(142),we=t(155),ke=t(144),xe=t(145),Se=t(143),Ne=Object(C.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(O.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(N.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)})}})),Oe=function(e){var n=e.label,t=e.path;return r.a.createElement(P.a,{to:t},r.a.createElement(ye.a,{button:!0},r.a.createElement(Ce.a,{primary:n})))},Pe=be.map((function(e,n){return r.a.createElement(Oe,{key:n,path:e.path,label:e.label})})),je=function(e){var n=e.onClose,t=e.open,a=Ne();return r.a.createElement(we.a,{variant:"permanent",classes:{paper:Object(y.a)(a.drawerPaper,!t&&a.drawerPaperClose)},open:t},r.a.createElement("div",{className:a.toolbarIcon},r.a.createElement(g.a,{onClick:function(){n()}},r.a.createElement(Se.a,null))),r.a.createElement(ke.a,null),r.a.createElement(xe.a,null,r.a.createElement(Oe,{label:"Home",path:"/"}),Pe))},Ae=Object(C.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}})),Ie=function(e){var n=e.children,t=Ae(),a=r.a.useState(!0),i=Object(s.a)(a,2),l=i[0],o=i[1];return r.a.createElement("div",{className:t.root},r.a.createElement(d.a,null),r.a.createElement(f.a,{position:"absolute",className:Object(y.a)(t.appBar,l&&t.appBarShift)},r.a.createElement(p.a,{className:t.toolbar},r.a.createElement(g.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){o(!0)},className:Object(y.a)(t.menuButton,l&&t.menuButtonHidden)},r.a.createElement(w.a,null)),r.a.createElement(h.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:t.title},"MUI-List"))),r.a.createElement(je,{open:l,onClose:function(){return o(!1)}}),r.a.createElement("main",{className:t.content},r.a.createElement("div",{className:t.appBarSpacer}),r.a.createElement(E.a,{maxWidth:"lg",className:t.container},r.a.createElement(v.a,{container:!0,spacing:3},r.a.createElement(v.a,{item:!0,xs:12},r.a.createElement(b.a,{className:t.paper},n))),r.a.createElement(S,null))))},Le=c.a({basename:"/mui-list"});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement((function(){return r.a.createElement(o.b,{history:Le},r.a.createElement(Ie,null,r.a.createElement(o.c,null,be.map((function(e,n){return r.a.createElement(o.a,{key:n,exact:!0,path:e.path,component:function(){return r.a.createElement(e.Component,null)}})})),r.a.createElement(o.a,{component:function(){return r.a.createElement(m,null)}}))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},80:function(e,n,t){e.exports=t(103)},85:function(e,n,t){}},[[80,1,2]]]);
//# sourceMappingURL=main.23cec569.chunk.js.map