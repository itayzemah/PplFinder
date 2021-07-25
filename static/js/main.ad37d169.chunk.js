(this["webpackJsonpppl-finder"]=this["webpackJsonpppl-finder"]||[]).push([[0],{113:function(e,n,t){"use strict";t.r(n);var i,c,a,r,o,l,s,d,u,j,b,f,x,p,O,v,h,y,m,g,E,S,A,_,w,R,z=t(0),N=t.n(z),k=t(25),C=t.n(k),U=t(52),V=t(19),M=t(76),F=t(10),I=t(115),T=t(6),L=t(7),G=L.a.div(i||(i=Object(T.a)(["\n  font-size: ",";\n  font-weight: ",";\n"])),(function(e){return e.size}),(function(e){return e.bold?"700":"400"})),J=t(2),D=function(e){var n=e.size,t=void 0===n?"14px":n,i=e.children,c=e.bold;return Object(J.jsx)(I.a,{component:"span",children:Object(J.jsx)(G,{size:t,bold:c,children:i})})},B=t(24),P=t(142),q=function(e){var n=e.size,t=e.color,i=e.thickness,c=e.variant;return Object(J.jsx)(P.a,{size:n,color:t,thickness:i,variant:c})},H=t(149),K=t(143),Q=L.a.div(c||(c=Object(T.a)([""]))),W=function(e){var n=e.isChecked,t=e.onChange,i=e.label,c=e.value,a=function(e){t&&t(c,e)};return Object(J.jsx)(Q,{children:Object(J.jsx)(K.a,{control:Object(J.jsx)(H.a,{checked:n,onChange:function(e){return a(e.currentTarget.checked)},color:"primary"}),label:i})})},X=t(144),Y=t(45),Z=t.n(Y),$=L.a.div(a||(a=Object(T.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),ee=L.a.div(r||(r=Object(T.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 35px;\n  width: 500px;\n  height: calc(100vh - 270px);\n  margin-block-start: 30px;\n  overflow-y: auto;\n"]))),ne=L.a.div(o||(o=Object(T.a)(["\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n"]))),te=L.a.div(l||(l=Object(T.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  max-height: 128px;\n  gap: 2px;\n  overflow: hidden;\n"]))),ie=L.a.img(s||(s=Object(T.a)(["\n  border-radius: 45%;\n"]))),ce=L.a.div(d||(d=Object(T.a)(["\n  display: flex;\n  justify-content: center;\n"]))),ae=L.a.div(u||(u=Object(T.a)(["\n  display: flex;\n  flex-direction: column;\n  opacity: ",";\n  transition: opacity 0.2s ease-in-out;\n"])),(function(e){return e.isVisible?1:0})),re=L.a.div(j||(j=Object(T.a)(["\n  display: flex;\n  justify-content: center;\n  & > * {\n    margin-inline-end: 8px;\n  }\n"]))),oe=function(e){var n=e.users,t=e.isLoading,i=Object(z.useState)(),c=Object(B.a)(i,2),a=c[0],r=c[1],o=Object(V.b)(),l=Object(z.useRef)(),s=Object(z.useCallback)((function(e){l.current&&l.current.disconnect(),l.current=new IntersectionObserver((function(e){e[0].isIntersecting&&o({type:"INCREASE_PAGE_NUMBER"})})),e&&l.current.observe(e)}),[]),d=Object(V.c)((function(e){return e.favoritesUsers}));Object(z.useEffect)((function(){var e=JSON.parse(localStorage.getItem("favoritesUsers"))||d;e.forEach((function(n){return o({type:"GET_FROM_LOCAL_STORAGE",payload:e})}))}),[n]);var u=function(){r()},j=function(e,n){o({type:n?"ADD_NATION":"REMOVE_NATION",payload:e})};return Object(J.jsxs)($,{children:[Object(J.jsx)(re,{children:[{value:"BR",label:"Brazil"},{value:"AU",label:"Australia"},{value:"CA",label:"Canada"},{value:"DE",label:"Germany"},{value:"FR",label:"France"}].map((function(e){return Object(J.jsx)(W,{value:e.value,label:e.label,onChange:j},e.value)}))}),Object(J.jsxs)(ee,{children:[null===n||void 0===n?void 0:n.map((function(e,t){return Object(J.jsxs)(ne,{ref:t+1===n.length?s:null,onMouseEnter:function(){return function(e){r(e)}(t)},onMouseLeave:u,onClick:function(){return function(e){o({type:d.includes(e)?"REMOVE_FAV_USERS":"SAVE_FAV_USERS",payload:e})}(e)},children:[Object(J.jsx)(ie,{src:null===e||void 0===e?void 0:e.picture.large,alt:""}),Object(J.jsxs)(te,{children:[Object(J.jsxs)(D,{size:"22px",bold:!0,children:[null===e||void 0===e?void 0:e.name.title," ",null===e||void 0===e?void 0:e.name.first," ",null===e||void 0===e?void 0:e.name.last]}),Object(J.jsx)(D,{size:"14px",children:null===e||void 0===e?void 0:e.email}),Object(J.jsxs)(D,{size:"14px",children:[null===e||void 0===e?void 0:e.location.street.number," ",null===e||void 0===e?void 0:e.location.street.name]}),Object(J.jsxs)(D,{size:"14px",children:[null===e||void 0===e?void 0:e.location.city," ",null===e||void 0===e?void 0:e.location.country]})]}),Object(J.jsx)(ae,{isVisible:t===a||d.includes(e),children:Object(J.jsx)(X.a,{children:Object(J.jsx)(Z.a,{color:"error"})})})]},t)})),t&&Object(J.jsx)(ce,{children:Object(J.jsx)(q,{color:"primary",size:"45px",thickness:6,variant:"indeterminate"})})]})]})},le=t(49),se=t.n(le),de=t(28),ue=t(74),je=t(75),be=t.n(je),fe=L.a.div(b||(b=Object(T.a)(["\n  display: flex;\n  height: 100vh;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n"]))),xe=L.a.div(f||(f=Object(T.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding-block-start: 100px;\n"]))),pe=L.a.div(x||(x=Object(T.a)(["\n  display: flex;\n"]))),Oe=(L.a.div(p||(p=Object(T.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n  max-width: 400px;\n  width: 100%;\n"]))),function(){var e=function(){var e=Object(z.useState)([]),n=Object(B.a)(e,2),t=n[0],i=n[1],c=Object(z.useState)(!1),a=Object(B.a)(c,2),r=a[0],o=a[1],l=Object(V.b)(),s=Object(V.c)((function(e){return e.pageNumber})),d=Object(V.c)((function(e){return e.nationsArr}));function u(){return j.apply(this,arguments)}function j(){return(j=Object(ue.a)(se.a.mark((function e(){var n,c;return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),n="https://randomuser.me/api/?results=5&page=".concat(s).concat(0!==d.length?"&nat="+d.join():""),e.next=4,be.a.get(n);case 4:c=e.sent,o(!1),i([].concat(Object(de.a)(t),Object(de.a)(c.data.results)));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(z.useEffect)((function(){t.length=0,l({type:"RESET"}),u()}),[d]),Object(z.useEffect)((function(){u()}),[s]),{users:t,isLoading:r,fetchUsers:u}}(),n=e.users,t=e.isLoading;return Object(J.jsx)(fe,{children:Object(J.jsxs)(xe,{children:[Object(J.jsx)(pe,{children:Object(J.jsx)(D,{size:"64px",bold:!0,children:"PplFinder"})}),Object(J.jsx)(oe,{users:n,isLoading:t})]})})}),ve=L.a.div(O||(O=Object(T.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),he=L.a.div(v||(v=Object(T.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 35px;\n  width: 500px;\n  height: calc(100vh - 270px);\n  margin-block-start: 30px;\n  overflow-y: auto;\n"]))),ye=L.a.div(h||(h=Object(T.a)(["\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n"]))),me=L.a.div(y||(y=Object(T.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  max-height: 128px;\n  gap: 2px;\n  overflow: hidden;\n"]))),ge=L.a.img(m||(m=Object(T.a)(["\n  border-radius: 45%;\n"]))),Ee=(L.a.div(g||(g=Object(T.a)(["\n  display: flex;\n  justify-content: center;\n"]))),L.a.div(E||(E=Object(T.a)(["\n  display: flex;\n  flex-direction: column;\n  opacity: ",";\n  transition: opacity 0.2s ease-in-out;\n"])),(function(e){return e.isVisible?1:0}))),Se=(L.a.div(S||(S=Object(T.a)(["\n  display: flex;\n  justify-content: center;\n  & > * {\n    margin-inline-end: 8px;\n  }\n"]))),function(){var e=Object(z.useState)(JSON.parse(localStorage.getItem("favoritesUsers"))),n=Object(B.a)(e,2),t=n[0],i=n[1],c=Object(V.b)(),a=Object(V.c)((function(e){return e.favoritesUsers}));Object(z.useEffect)((function(){i(a)}),[t,a]);return Object(J.jsx)(ve,{children:Object(J.jsx)(he,{children:null===t||void 0===t?void 0:t.map((function(e,n){return Object(J.jsxs)(ye,{onClick:function(){return function(e){c({type:"REMOVE_FAV_USERS",payload:e})}(e)},children:[Object(J.jsx)(ge,{src:null===e||void 0===e?void 0:e.picture.large,alt:""}),Object(J.jsxs)(me,{children:[Object(J.jsxs)(D,{size:"22px",bold:!0,children:[null===e||void 0===e?void 0:e.name.title," ",null===e||void 0===e?void 0:e.name.first," ",null===e||void 0===e?void 0:e.name.last]}),Object(J.jsx)(D,{size:"14px",children:null===e||void 0===e?void 0:e.email}),Object(J.jsxs)(D,{size:"14px",children:[null===e||void 0===e?void 0:e.location.street.number," ",null===e||void 0===e?void 0:e.location.street.name]}),Object(J.jsxs)(D,{size:"14px",children:[null===e||void 0===e?void 0:e.location.city," ",null===e||void 0===e?void 0:e.location.country]})]}),Object(J.jsx)(Ee,{isVisible:a.includes(e),children:Object(J.jsx)(X.a,{children:Object(J.jsx)(Z.a,{color:"error"})})})]},n)}))})})}),Ae=L.a.div(A||(A=Object(T.a)(["\n  display: flex;\n  height: 100vh;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n"]))),_e=L.a.div(_||(_=Object(T.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding-block-start: 100px;\n"]))),we=L.a.div(w||(w=Object(T.a)(["\n  display: flex;\n"]))),Re=(L.a.div(R||(R=Object(T.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n  max-width: 400px;\n  width: 100%;\n"]))),function(e){return Object(J.jsx)(Ae,{children:Object(J.jsxs)(_e,{children:[Object(J.jsx)(we,{children:Object(J.jsx)(D,{size:"64px",bold:!0,children:"My Favorites"})}),Object(J.jsx)(Se,{})]})})}),ze=t(77),Ne=t(145),ke=t(146),Ce=function(e){var n=e.children,t={MuiTab:{root:{backgroundColor:"#303030"}}},i=N.a.useMemo((function(){return Object(ze.a)({overrides:t,palette:{type:"dark",primary:{main:"#84ffff"},error:{main:"#f06292"}}})}),[]);return Object(J.jsxs)(Ne.a,{theme:i,children:[Object(J.jsx)(ke.a,{}),n]})},Ue=t(150),Ve=t(148),Me=t(147),Fe=function(){var e=Object(F.f)(),n=["/","/favorites"],t=Object(z.useState)(0),i=Object(B.a)(t,2),c=i[0],a=i[1];return Object(z.useEffect)((function(){e.location.pathname!=n[c]&&e.push(n[c])}),[c]),Object(J.jsx)(Ue.a,{position:"static",color:"transparent",style:{position:"fixed",top:0},children:Object(J.jsxs)(Ve.a,{value:c,onChange:function(e,n){a(n)},"aria-label":"Navigation",indicatorColor:"primary",textColor:"primary",children:[Object(J.jsx)(Me.a,{label:"Home",index:0}),Object(J.jsx)(Me.a,{label:"Favorites",index:1})]})})},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"REMOVE_FAV_USERS":var t=e.filter((function(e){return e!==n.payload}));return localStorage.setItem("favoritesUsers",JSON.stringify(t)),t;case"GET_FROM_LOCAL_STORAGE":return n.payload;case"SAVE_FAV_USERS":if(e.includes(n.payload))return e;var i=e.concat(n.payload);return localStorage.setItem("favoritesUsers",JSON.stringify(i)),i;default:return e}},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"INCREASE_PAGE_NUMBER":return++e;case"RESET":return 1;default:return e}},Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"ADD_NATION":var t=[].concat(Object(de.a)(e),[n.payload]);return t;case"REMOVE_NATION":return e.filter((function(e){return e!==n.payload}));default:return e}},Ge=Object(U.b)(Object(U.a)({favoritesUsers:Ie,pageNumber:Te,nationsArr:Le})),Je=function(){return Object(J.jsx)(Ce,{children:Object(J.jsx)(V.a,{store:Ge,children:Object(J.jsxs)(M.a,{children:[Object(J.jsx)(Fe,{}),Object(J.jsxs)(F.c,{children:[Object(J.jsx)(F.a,{exact:!0,path:"/",component:Oe}),Object(J.jsx)(F.a,{exact:!0,path:"/favorites",component:Re})]})]})})})};C.a.render(Object(J.jsx)(Je,{}),document.querySelector("#root"))}},[[113,1,2]]]);
//# sourceMappingURL=main.ad37d169.chunk.js.map