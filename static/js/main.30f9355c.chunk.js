(this.webpackJsonpadd_friend_project=this.webpackJsonpadd_friend_project||[]).push([[0],{19:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n.n(a),i=n(13),r=n.n(i),s=(n(19),n(9),n(14)),u=n(2),d=n(12),l=n(11),j=n(7),o=n(0),b=1,f=function(e){var t=e.items,n=e.parentCallback,a=e.currentPage;b=a;for(var c=[],i=1;i<=Math.ceil(t.length/4);i++)c.push(i);var r=function(e){b=Number(e.target.id),n(b)},s=c.map((function(e){return Object(o.jsx)("div",{id:e,className:"pages-div "+(e===b&&document.getElementById(e)?"page-div-clicked":""),onClick:r,children:e},e)}));return Object(o.jsx)("div",{children:Object(o.jsx)("div",{id:"page-numbers",children:s})})},m=function(){var e,t,n,c=Object(a.useState)({inputData:"",items:[],currentPage:1}),i=Object(d.a)(c,2),r=i[0],b=i[1],m=Object(a.useState)([]),O=Object(d.a)(m,2),h=(O[0],O[1]);Object(a.useEffect)((function(){n=v(r.items),h(n)}),[r,r.items,r.currentPage]);var v=function(n){return e=4*r.currentPage,t=e-4,n.slice(t,e)},g=Object(o.jsx)("input",{type:"text",value:r.inputData,onChange:function(e){return b(Object(u.a)(Object(u.a)({},r),{},{inputData:e.target.value,currentPage:r.currentPage}))},placeholder:"Enter your friend's name",onKeyPress:function(e){return x(e)},maxLength:"50"}),p=r.items.filter((function(e,t){return""===r.inputData?t>=4*r.currentPage-4&&t<4*r.currentPage:e.friendName.toLowerCase().includes(r.inputData.toLowerCase())?e:void 0})).map((function(e,t){return Object(o.jsxs)("div",{className:"eachItem",children:[Object(o.jsx)("h3",{children:e.friendName}),Object(o.jsxs)("div",{className:"todo-btn",children:[Object(o.jsx)(l.a,{icon:j.a,id:"star"+t,className:"fa-star "+(0===e.fav?"star-empty":"star-filled"),onClick:function(){return P(t,e.id)}}),Object(o.jsx)(l.a,{icon:j.b,className:"fa-trash-alt",onClick:function(){return N(t,e.id)}})]}),Object(o.jsxs)("div",{className:"friend-text",children:[Object(o.jsx)("br",{}),0===e.fav?"is your friend":"is your close friend"]})]},t)})),x=function(e){if(13===e.charCode&&""!==r.inputData){var t={id:r.items.length,friendName:r.inputData,fav:0};b(Object(u.a)(Object(u.a)({},r),{},{items:[].concat(Object(s.a)(r.items),[t]),inputData:""}))}},N=function(e,t){var n=r.items.filter((function(e,n){return e.id!==t})),a=v(n);if(b(Object(u.a)(Object(u.a)({},r),{},{items:n})),0===a.length&&1!==r.currentPage){var c=r.currentPage-1;b(Object(u.a)(Object(u.a)({},r),{},{items:n,currentPage:c}))}},P=function(e,t){for(var n=r.items.slice(),a=0;a<n.length;a++){var c=n[a];if(c.id===t){if(0===c.fav){c.fav=1,n.splice(a,1),n.unshift(c);break}c.fav=0;var i=n.splice(a,1);n.push(i[0]);break}}b(Object(u.a)(Object(u.a)({},r),{},{items:n}))};return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"main-div",children:[Object(o.jsxs)("div",{className:"child-div",children:[Object(o.jsx)("div",{className:"header-div",children:Object(o.jsx)("h3",{children:"Friends List"})}),Object(o.jsx)("div",{className:"addItems",children:g}),Object(o.jsx)("div",{className:"showItems",children:p}),Object(o.jsx)(f,{items:r.items,currentPage:r.currentPage,parentCallback:function(e){b(Object(u.a)(Object(u.a)({},r),{},{currentPage:e}))}}),r.items.length>0&&Object(o.jsxs)("div",{className:"clearAll",children:[Object(o.jsx)("button",{className:"clearAll",onClick:function(){b({inputData:"",items:[],currentPage:1})},children:"Clear All"})," "]})]}),Object(o.jsx)("div",{})]})})};var O=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(m,{})})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};n(26);r.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(O,{})}),document.getElementById("root")),h()},9:function(e,t,n){}},[[27,1,2]]]);
//# sourceMappingURL=main.30f9355c.chunk.js.map