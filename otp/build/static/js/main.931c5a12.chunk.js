(this.webpackJsonpotp=this.webpackJsonpotp||[]).push([[0],{12:function(t,e,n){},29:function(t,e,n){},37:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),s=n(22),r=n.n(s),i=(n(29),n(8)),o=n(3),u=(n(12),n(1)),j=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{style:{textAlign:"center"},children:"Logged in"}),Object(u.jsx)("h4",{style:{textAlign:"center"},children:Object(u.jsx)(i.b,{to:"/",children:"Go back to register"})})]})},l=n(18),b=n.n(l),h=n(24),O=n(9),d=(n(21),n(38)),p=n(39),x=function(){return Object(u.jsx)("div",{className:"btnout",children:Object(u.jsx)(p.a,{className:"btn btn-primary btn",children:"Loading...."})})},f=function(){var t=Object(o.f)(),e=localStorage.getItem("email"),n=Object(c.useState)(""),a=Object(O.a)(n,2),s=a[0],r=a[1],j=Object(c.useState)(!1),l=Object(O.a)(j,2),f=l[0],m=l[1],g=Object(c.useState)(!1),v=Object(O.a)(g,2),y=v[0],N=v[1];Object(c.useEffect)((function(){e.length>0&&s.length>0?N(!1):N(!0)}),[s]);var S=function(){var n=Object(h.a)(b.a.mark((function n(c){return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c.preventDefault(),m(!0),n.next=4,fetch("https://otplogins.herokuapp.com/login",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({email:e,otp:s})}).then((function(t){return t.json()})).then((function(e){alert("Login success"),localStorage.removeItem("email"),console.log(e),t.push("/dummy")})).catch((function(t){return console.log(t)}));case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return Object(u.jsxs)(d.a,{children:[Object(u.jsxs)("h1",{className:"heading",children:["Enter the otp [if not received ",Object(u.jsx)(i.b,{to:"/",children:"Click here"})," ]"]}),Object(u.jsxs)("div",{className:"inout",children:["  ",Object(u.jsx)("input",{type:"text",className:"input-goup input",value:s,onChange:function(t){return r(t.target.value)}})]}),f?Object(u.jsx)(x,{}):Object(u.jsx)("div",{className:"btnout",children:Object(u.jsx)(p.a,{className:"btn btn-primary btn",type:"submit",onClick:S,disabled:y,children:"Submit"})})]})},m=function(){var t=Object(c.useState)(""),e=Object(O.a)(t,2),n=e[0],a=e[1],s=Object(c.useState)(!1),r=Object(O.a)(s,2),i=r[0],j=r[1],l=Object(c.useState)(!1),b=Object(O.a)(l,2),h=b[0],f=b[1];Object(c.useEffect)((function(){n.length>0?f(!1):f(!0)}),[n]);var m=Object(o.f)();return Object(u.jsxs)(d.a,{children:[Object(u.jsx)("h1",{className:"heading",children:"Enter the email to login"}),Object(u.jsxs)("div",{className:"inout",children:["  ",Object(u.jsx)("input",{type:"text",className:"input-goup input",value:n,onChange:function(t){return a(t.target.value)}})]}),i?Object(u.jsx)(x,{}):Object(u.jsx)("div",{className:"btnout",children:Object(u.jsx)(p.a,{className:"btn btn-primary btn",type:"submit",onClick:function(t){t.preventDefault(),localStorage.setItem("email",n),j(!0),fetch("https://otplogins.herokuapp.com/register",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({email:n})}).then((function(t){j(!1)})).then((function(t){m.push("/login")})).catch((function(t){return console.log(t)}))},disabled:h,children:"Next"})})]})};var g=function(t){return Object(u.jsx)(i.a,{children:Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{exact:!0,path:"/",render:function(t){return Object(u.jsx)(m,{})}}),Object(u.jsx)(o.a,{exact:!0,path:"/login",render:function(t){return Object(u.jsx)(f,{})}}),Object(u.jsx)(o.a,{exact:!0,path:"/dummy",render:function(t){return Object(u.jsx)(j,{})}})]})})};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.931c5a12.chunk.js.map