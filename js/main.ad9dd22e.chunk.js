(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{1314:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),s=c.n(a),i=c(24),r=c.n(i),j=(c(32),c(26)),d=c(3),o=c(8),b=c(5),l=c(2),O=(c(15),c(12)),h=new O.a("woven-finance-db");h.version(1).stores({onlineAccount:"++id,timestamp,name,dob,email,phone,address,bvn,generatedAt"});var u="CREATE_ACCOUNT",x=new WebSocket("wss://woven-db2.herokuapp.com");function p(e,t){return x.send(JSON.stringify({event:e,data:t}))}x.onopen=function(e){console.log("Connected to: "+e.currentTarget.url)},x.onerror=function(e){console.log("WebSocket Error: "+e)};var m=function(e,t){x.onmessage=function(c){var n=function(e){return JSON.parse(e)}(c.data);console.log(n,e),n.event===e&&t(n.data)}};function v(e){var t=e.onCreated,c=e.onClose,s=Object(a.useState)(""),i=Object(l.a)(s,2),r=i[0],j=i[1],d=Object(a.useState)(""),o=Object(l.a)(d,2),b=o[0],O=o[1],h=Object(a.useState)(""),x=Object(l.a)(h,2),v=x[0],f=x[1],g=Object(a.useState)(""),S=Object(l.a)(g,2),N=S[0],y=S[1],C=Object(a.useState)(""),w=Object(l.a)(C,2),A=w[0],D=w[1],k=Object(a.useState)(""),I=Object(l.a)(k,2),B=I[0],T=I[1],F=function(e){return function(t){e(t.target.value)}};return Object(n.jsx)("div",{className:"form-wrapper",children:Object(n.jsxs)("form",{children:[Object(n.jsx)("div",{className:"header",children:" Create Account "}),Object(n.jsxs)("div",{className:"content",children:[Object(n.jsx)("input",{id:"name",placeholder:"Full name",onKeyUp:F(j),onChange:F(j)}),Object(n.jsx)("input",{id:"email",placeholder:"Email Address",onKeyUp:F(O),onChange:F(O)}),Object(n.jsx)("input",{id:"phone",placeholder:"Phone number",onKeyUp:F(f),onChange:F(f)}),Object(n.jsx)("input",{id:"bvn",placeholder:"BVN",onChange:F(y),onKeyUp:F(y)}),Object(n.jsx)("input",{id:"address",placeholder:"address",onKeyUp:F(D),onChange:F(D)}),Object(n.jsx)("input",{id:"dob",placeholder:"Date of birth",onKeyUp:F(T),onChange:F(T)}),Object(n.jsx)("button",{type:"button",onClick:function(){var e,n;e={name:r,email:b,phone:v,bvn:N,address:A,dob:B,timeSent:Date.now()},n=function(e){e.error?alert(e.error):(t(e),c(!1)),console.log({data:e})},p(u,e),m(u,n)},children:"create Account"})]})]})})}var f=c(7),g=c.n(f),S=(g.a.name.findName(),g.a.internet.email(),Date.now(),g.a.random.number(999810009),g.a.address.secondaryAddress(),g.a.phone.phoneNumber(),function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=[],c=0;c<e;c++)t.push({name:g.a.name.findName(),email:g.a.internet.email(),generatedAt:Date.now(),bvn:g.a.random.number(999810009),address:g.a.address.secondaryAddress(),phone:g.a.phone.phoneNumber()});return t});function N(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),c=t[0],s=t[1];return navigator.onLine&&c&&s(!1),window.addEventListener("online",(function(e){s(!1)}),!1),window.addEventListener("offline",(function(e){s(!0)}),!1),Object(n.jsx)("div",{id:"offline",className:c?"":"hide",children:Object(n.jsx)("div",{className:"indicator",children:"."})})}var y=new O.a("woven-finance-db");y.version(1).stores({onlineAccount:"++id,timestamp,name,dob,email,phone,address,bvn,generatedAt"});var C={backend:"https://woven-db2.herokuapp.com",socket:"ws://woven-db2.herokuapp.com",database:y}.database.onlineAccount;function w(e,t){var c=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=Date.now();if(console.log("started transaction @,",{timeStart:n}),c){var a=JSON.parse(localStorage.getItem("DATABASE")||"[]"),s=localStorage.setItem("DATABASE",JSON.stringify([].concat(Object(b.a)(e),Object(b.a)(a))));t((Date.now()-n)/1e3,s)}else C.bulkPut(e).then((function(e){t((Date.now()-n)/1e3)}))}function A(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],c=Date.now();if(t){var n=JSON.parse(localStorage.getItem("DATABASE")||"[]");e((Date.now()-c)/1e3,n)}else C.toArray().then((function(t){e((Date.now()-c)/1e3,t)}))}function D(){C.clear().catch()}function k(e){var t=e.title,c=(e.image,e.name),a=e.address,s=e.dob,i=e.phone,r=e.email,j=(e.className,e.bvn);return Object(n.jsx)("div",{className:"profile ${className}",children:Object(n.jsx)("div",{className:"about",children:Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"title",children:[" ",t||c," "]}),Object(n.jsxs)("div",{children:[" ",r," | ",i," "]}),Object(n.jsx)("br",{}),Object(n.jsxs)("div",{children:[" ",Object(n.jsx)("strong",{children:"BVN:"})," ",j," "]}),Object(n.jsxs)("div",{children:[" ",Object(n.jsx)("strong",{children:"DOB:"})," ",s," "]}),Object(n.jsx)("div",{children:a})]})})})}var I=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),c=t[0],s=t[1],i=Object(a.useState)("0"),r=Object(l.a)(i,2),j=r[0],d=r[1],O=Object(a.useState)("0"),h=Object(l.a)(O,2),u=h[0],x=(h[1],Object(a.useState)("0")),f=Object(l.a)(x,2),g=f[0],y=f[1],C=Object(a.useState)(0),I=Object(l.a)(C,2),B=I[0],T=I[1],F=Object(a.useState)(null),L=Object(l.a)(F,2),M=L[0],E=L[1],R=Object(a.useState)([]),U=Object(l.a)(R,2),P=U[0],J=U[1],K=Object(a.useState)(!1),W=Object(l.a)(K,2),_=W[0],G=W[1];return setTimeout((function(){m("DUMP_TRANSACTION",(function(e){J([].concat(Object(b.a)(e),Object(b.a)(P)))}))})),Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(N,{}),Object(n.jsx)("header",{className:"title App-header",children:Object(n.jsx)("h1",{children:"IndexedDB App"})}),_&&Object(n.jsx)("div",{className:"loader"}),Object(n.jsxs)("div",{className:"timestamp",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{children:" Created In "}),Math.abs(j).toFixed(3)]}),Object(n.jsxs)("div",{className:"created",children:[Object(n.jsx)("span",{children:" SortedIn "}),Math.abs(u).toFixed(3)]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{children:" Displayed withIn "}),Math.abs(g).toFixed(3)]})]}),Object(n.jsxs)("div",{style:{maxWidth:"500px",margin:"0 auto"},children:[Object(n.jsxs)("div",{children:["Generated Records: ",Object(n.jsx)("span",{children:B})]}),Object(n.jsx)("br",{}),Object(n.jsxs)("div",{style:{display:"flex",width:"80%",justifyContent:"space-around"},children:[Object(n.jsx)("button",{onClick:function(){G(!0);var e=S(1e4);T(1e4),w(e,(function(e){d(e),G(!1)}))},style:{margin:"10px"},children:"generate"}),Object(n.jsx)("button",{onClick:function(){G(!0),A((function(e,t){y(e),E(t),G(!1)}))},style:{margin:"10px",background:"#123"},children:"display records"}),Object(n.jsx)("button",{onClick:function(){var e;D(),e=function(e){console.log(e)},p("DROP_TABLE","as"),m("DROP_TABLE",e)},style:{margin:"10px",background:"#db3434"},children:"clear records"})]})]}),Object(n.jsx)("h2",{children:" IndexedDB accounts "}),Object(n.jsx)("div",{className:"profiles",children:M?M.map((function(e){return Object(n.jsx)(k,Object(o.a)({},e))})):Object(n.jsx)("span",{children:" Not displaying data yet, click on display "})}),c&&Object(n.jsx)(v,{onClose:s,onCreated:function(e){return J([].concat(Object(b.a)(e),Object(b.a)(P)))}}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("h2",{children:" Mongo Database accounts "}),Object(n.jsx)("div",{className:"profiles",children:P&&P.map((function(e){return Object(n.jsx)(k,Object(o.a)({},e))}))}),Object(n.jsx)("div",{className:"add-profile",onClick:function(){return s(!c)},children:c?"x":"+"})]})};var B=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),c=(t[0],t[1],Object(a.useState)("0")),s=Object(l.a)(c,2),i=s[0],r=s[1],j=Object(a.useState)("0"),d=Object(l.a)(j,2),o=d[0],b=d[1],O=Object(a.useState)("0"),h=Object(l.a)(O,2),u=h[0],x=h[1],p=Object(a.useState)("0"),m=Object(l.a)(p,2),v=m[0],f=m[1],g=Object(a.useState)(0),y=Object(l.a)(g,2),C=y[0],k=y[1],I=Object(a.useState)(null),B=Object(l.a)(I,2),T=(B[0],B[1],Object(a.useState)([])),F=Object(l.a)(T,2),L=(F[0],F[1],Object(a.useState)(!1)),M=Object(l.a)(L,2),E=M[0],R=M[1];return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(N,{}),Object(n.jsx)("header",{className:"title App-header",children:Object(n.jsx)("h1",{children:"Difference Between Local and IndexDB Storage"})}),E&&Object(n.jsx)("div",{className:"loader"}),Object(n.jsx)("h2",{children:" LocalStorage accounts "}),Object(n.jsxs)("div",{className:"timestamp",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{children:" Created In "}),Math.abs(i).toFixed(3)]}),Object(n.jsxs)("div",{className:"display",children:[Object(n.jsx)("span",{children:" Displayed withIn "}),Math.abs(o).toFixed(3)]})]}),Object(n.jsx)("h2",{children:" IndexDb accounts "}),Object(n.jsxs)("div",{className:"timestamp",children:[Object(n.jsxs)("div",{className:"created",children:[Object(n.jsx)("span",{children:" Created In "}),Math.abs(u).toFixed(3)]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{children:" Displayed withIn "}),Math.abs(v).toFixed(3)]})]}),Object(n.jsxs)("div",{style:{maxWidth:"500px",margin:"0 auto"},className:"overflow",children:[Object(n.jsxs)("div",{children:["Generated Records: ",Object(n.jsx)("span",{children:C})]}),Object(n.jsx)("br",{}),Object(n.jsxs)("div",{style:{display:"flex",width:"80%",justifyContent:"space-around"},children:[Object(n.jsx)("button",{onClick:function(){R(!0);var e=S(1e4);k(1e4),w(e,(function(e,t){r(e),R(!1)}),!0),w(e,(function(e,t){x(e),R(!1)}))},style:{margin:"10px"},children:"generate"}),Object(n.jsx)("button",{onClick:function(){R(!0),A((function(e,t){b(e),R(!1)})),A((function(e,t){f(e)}),!0)},style:{margin:"10px",background:"#123"},children:"display records"}),Object(n.jsx)("button",{onClick:function(){D()},style:{margin:"10px",background:"#db3434"},children:"clear records"})]}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("h4",{children:" OTHER URL "}),Object(n.jsx)("a",{href:"/local",children:" view LocalStorage App data"}),Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:"/indexDB",children:" view IndexDB App data"})]}),Object(n.jsx)("h4",{children:" Time Difference between IndexDB and LocalStorage "}),Object(n.jsxs)("div",{className:"timestamp",children:[Object(n.jsxs)("div",{className:"created",children:[Object(n.jsx)("span",{children:" Created In "}),Math.abs(u-i).toFixed(3)]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{children:" Displayed withIn "}),Math.abs(v-o).toFixed(3)]})]})]})};var T=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),c=t[0],s=t[1],i=Object(a.useState)("0"),r=Object(l.a)(i,2),j=r[0],d=r[1],O=Object(a.useState)("0"),h=Object(l.a)(O,2),u=h[0],x=(h[1],Object(a.useState)("0")),p=Object(l.a)(x,2),f=p[0],g=p[1],y=Object(a.useState)(0),C=Object(l.a)(y,2),I=C[0],B=C[1],T=Object(a.useState)(null),F=Object(l.a)(T,2),L=F[0],M=F[1],E=Object(a.useState)([]),R=Object(l.a)(E,2),U=R[0],P=R[1],J=Object(a.useState)(!1),K=Object(l.a)(J,2),W=K[0],_=K[1];return setTimeout((function(){m("DUMP_TRANSACTION",(function(e){P([].concat(Object(b.a)(e),Object(b.a)(U)))}))})),Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(N,{}),Object(n.jsx)("header",{className:"title App-header",children:Object(n.jsx)("h1",{children:"LocalStorage App"})}),W&&Object(n.jsx)("div",{className:"loader"}),Object(n.jsxs)("div",{className:"timestamp",children:[Object(n.jsxs)("div",{className:"created",children:[Object(n.jsx)("span",{children:" Created In "}),j.toFixed(3)]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{children:" SortedIn "}),u.toFixed(3)]}),Object(n.jsxs)("div",{className:"display",children:[Object(n.jsx)("span",{children:" Displayed withIn "}),f.toFixed(3)]})]}),Object(n.jsxs)("div",{style:{maxWidth:"500px",margin:"0 auto"},children:[Object(n.jsxs)("div",{children:["Generated Records: ",Object(n.jsx)("span",{children:I})]}),Object(n.jsx)("br",{}),Object(n.jsxs)("div",{style:{display:"flex",width:"80%",justifyContent:"space-around"},children:[Object(n.jsx)("button",{onClick:function(){_(!0);var e=S(1e3);B(1e3),w(e,(function(e,t){d(e),_(!1)}),!0)},style:{margin:"10px"},children:"generate"}),Object(n.jsx)("button",{onClick:function(){_(!0),A((function(e,t){g(e),M(t),_(!1)}),!0)},style:{margin:"10px",background:"#123"},children:"display records"}),Object(n.jsx)("button",{onClick:function(){D()},style:{margin:"10px",background:"#db3434"},children:"clear records"})]})]}),Object(n.jsx)("h2",{children:" LocalStorage accounts "}),Object(n.jsx)("div",{className:"profiles",children:L?L.map((function(e){return Object(n.jsx)(k,Object(o.a)({},e))})):Object(n.jsx)("span",{children:" Not displaying data yet, click on display "})}),c&&Object(n.jsx)(v,{onClose:s,onCreated:function(e){return P([].concat(Object(b.a)(e),Object(b.a)(U)))}}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("h2",{children:" Mongo Database accounts "}),Object(n.jsx)("div",{className:"profiles",children:U&&U.map((function(e){return Object(n.jsx)(k,Object(o.a)({},e))}))}),Object(n.jsx)("div",{className:"add-profile",onClick:function(){return s(!c)},children:c?"x":"+"})]})};function F(){return Object(n.jsx)(j.a,{children:Object(n.jsxs)(d.c,{children:[Object(n.jsx)(d.a,{exact:!0,path:["/","/difference"],component:B}),Object(n.jsx)(d.a,{exact:!0,path:["/indexDB"],component:I}),Object(n.jsx)(d.a,{exact:!0,path:"/:localstoreage",role:"user",component:T})]})})}var L=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,1315)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(F,{})}),document.getElementById("root")),L()},15:function(e,t,c){},32:function(e,t,c){}},[[1314,1,2]]]);
//# sourceMappingURL=main.ad9dd22e.chunk.js.map