(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{35:function(A,e,t){},36:function(A,e,t){},43:function(A,e,t){},48:function(A,e,t){},49:function(A,e,t){"use strict";t.r(e);var n=t(3),c=t(29),a=t.n(c),o=(t(35),t(12)),s=(t(36),t(21));s.a.initializeApp({apiKey:"AIzaSyCMZjtB_aYL1OFZjBp237RRt1-NnkIhw-g",authDomain:"todo-app-1e4f9.firebaseapp.com",projectId:"todo-app-1e4f9",storageBucket:"todo-app-1e4f9.appspot.com",messagingSenderId:"958719707093",appId:"1:958719707093:web:b4a91522cbce1169875f5c",measurementId:"G-W0R1NMG60P"});var d=s.a.auth(),r=s.a.firestore(),C=t(51),i=t(4);var Q=function(){console.log("called");var A=Object(n.useState)(""),e=Object(o.a)(A,2),t=e[0],c=e[1],a=Object(n.useState)([]),s=Object(o.a)(a,2),Q=s[0],I=s[1],E=Object(n.useState)(0),g=Object(o.a)(E,2),l=g[0],u=g[1],h=Object(n.useState)("1"),B=Object(o.a)(h,2),j=B[0],f=B[1],v=Object(n.useState)(""),O=Object(o.a)(v,2),b=O[0],p=O[1],k=Object(n.useState)(""),w=Object(o.a)(k,2),J=w[0],x=w[1];function P(A){console.log("Auth Staet Chenaged",A.uid),p(A.uid),r.collection("Users").doc(A.uid).get().then((function(A){x(A.data().name)})).catch((function(A){console.log("Error Response")})),r.collection("Todos").doc(A.uid).collection("Items").get().then((function(A){var e=A.docs.map((function(A){return A.data()}));I(e)}))}Object(n.useEffect)((function(){console.log("executed"),d.onAuthStateChanged(P)}),[]);var D=Q.filter((function(A){return"1"===j||("2"===j?A.completed:!A.completed)})).map((function(A){return Object(i.jsxs)("div",{className:"todoItemWrapper",children:[Object(i.jsx)("div",{className:"todoItem",children:A.name}),Object(i.jsxs)("div",{children:[Object(i.jsx)("input",{type:"checkbox",onChange:function(e){!function(A,e){var t=Q.map((function(t){return t.key===e&&(t.completed=A.target.checked),t}));I(t),r.collection("Todos").doc(b).collection("Items").doc(e).update({completed:A.target.checked})}(e,A.key)},checked:A.completed,style:{height:"20px"}}),Object(i.jsx)("span",{onClick:function(){!function(A){var e=Q.filter((function(e){return e.key!==A}));I(e),r.collection("Todos").doc(b).collection("Items").doc(A).delete()}(A.key)},children:Object(i.jsx)("img",{src:"data:image/png;base64,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",style:{height:"20px"}})})]})]},A.key)}));function S(A){f(A.target.value),console.log(A.target.value)}return Object(i.jsx)("div",{className:"outerBox",children:Object(i.jsxs)("div",{className:"App",children:[Object(i.jsxs)("div",{children:["Welcome ",J," "]}),Object(i.jsx)("input",{className:"inputTask",placeholder:"Enter Your Tasks",onChange:function(A){c(A.target.value)},value:t}),Object(i.jsx)("button",{className:"addButton",onClick:function(A){var e=Object(C.a)(),n=Q.concat({name:t,key:e,completed:!1});r.collection("Todos").doc(b).collection("Items").doc(e).set({name:t,completed:!1,key:e}),I(n),c(""),u(l+1)},children:"ADD"}),Object(i.jsxs)("div",{children:[Object(i.jsx)("input",{type:"radio",value:"1",checked:"1"===j,onChange:S}),Object(i.jsx)("span",{children:"All Tasks"}),Object(i.jsx)("input",{type:"radio",value:"2",checked:"2"===j,onChange:S}),Object(i.jsx)("span",{children:"Completed Tasks"}),Object(i.jsx)("input",{type:"radio",value:"3",checked:"3"===j,onChange:S}),Object(i.jsx)("span",{children:"Pending Tasks"})]}),Object(i.jsx)("div",{children:D})]})})},I=t(20);t(43);var E=function(A){var e=Object(n.useState)(""),t=Object(o.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),r=Object(o.a)(s,2),C=r[0],Q=r[1];return Object(i.jsx)("div",{className:"loginPage",children:Object(i.jsxs)("div",{className:"loginButton",children:[Object(i.jsx)("h1",{children:"Loads Of Tasks To Accomplish!"}),Object(i.jsx)("div",{children:"Enter Email"}),Object(i.jsx)("input",{onChange:function(A){a(A.target.value)},value:c,className:"emailInput",placeholder:"Your Email"}),Object(i.jsx)("div",{children:"Enter your Password"}),Object(i.jsx)("input",{onChange:function(A){Q(A.target.value)},value:C,className:"passwordInput",type:"password",placeholder:"Your Password"}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{onClick:function(){d.signInWithEmailAndPassword(c,C).then((function(){A.history.push("/todo")})).catch((function(A){window.alert(A.message)}))},className:"handleButton",children:"LOGIN"})}),Object(i.jsxs)("div",{children:["Don't have an account?"," ",Object(i.jsx)(I.b,{to:"/register",children:Object(i.jsx)("span",{children:"Create One"})})]})]})})};t(48);var g=function(A){var e=Object(n.useState)(""),t=Object(o.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),C=Object(o.a)(s,2),Q=C[0],I=C[1],E=Object(n.useState)(""),g=Object(o.a)(E,2),l=g[0],u=g[1];return Object(i.jsx)("div",{className:"registerPage",children:Object(i.jsxs)("div",{className:"registerButton",children:[Object(i.jsx)("h2",{children:"Start Your Tasks by Registering"}),Object(i.jsx)("div",{children:"Enter Your Name"}),Object(i.jsx)("input",{onChange:function(A){a(A.target.value)},value:c,className:"nameInput",placeholder:"Your Name"}),Object(i.jsx)("div",{children:"Enter Your Email"}),Object(i.jsx)("input",{onChange:function(A){I(A.target.value)},value:Q,className:"emailInput",placeholder:"Your Email"}),Object(i.jsx)("div",{children:"Enter Your Password"}),Object(i.jsx)("input",{onChange:function(A){u(A.target.value)},value:l,className:"passwordInput",type:"password",placeholder:"Your Password"}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{onClick:function(){console.log(c,Q,l,d),d.createUserWithEmailAndPassword(Q,l).then((function(e){!function(e){r.collection("Users").doc(e).set({name:c}).then((function(){A.history.push("/")})).catch((function(A){console.error("Error writing document: ",A)}))}(e.user.uid)})).catch((function(A){window.alert(A.message)}))},className:"handleButton",children:"REGISTER"})})]})})},l=t(9);var u=function(){return Object(i.jsx)(I.a,{children:Object(i.jsx)("div",{className:"main",children:Object(i.jsxs)(l.c,{children:[Object(i.jsx)(l.a,{path:"/",exact:!0,component:E}),Object(i.jsx)(l.a,{path:"/register",exact:!0,component:g}),Object(i.jsx)(l.a,{path:"/todo",exact:!0,component:Q})]})})})},h=function(A){A&&A instanceof Function&&t.e(3).then(t.bind(null,52)).then((function(e){var t=e.getCLS,n=e.getFID,c=e.getFCP,a=e.getLCP,o=e.getTTFB;t(A),n(A),c(A),a(A),o(A)}))};a.a.render(Object(i.jsx)(u,{}),document.getElementById("root")),h()}},[[49,1,2]]]);
//# sourceMappingURL=main.c67c20b0.chunk.js.map