(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,c,a){},12:function(e,c,a){"use strict";a.r(c);var t=a(5),n=a.n(t),i=a(4),l=a(1);a(10);function r(e,c){for(var a=[],t=e;t<=c;t+=1)a.push(t);return a}var s=a(2),o=a.n(s),j=a(0),d=function(e){var c=e.total,a=e.perPage,t=e.currentPage,n=e.onPageChange,i=Math.ceil(c/a),l=r(1,i);return Object(j.jsxs)("ul",{className:"pagination",children:[Object(j.jsx)("li",{className:o()("page-item",{disabled:1===t}),children:Object(j.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":1===t,onClick:function(){n(t-1)},children:"\xab"})}),l.map((function(e){return Object(j.jsx)("li",{className:o()("page-item",{active:t===e}),children:Object(j.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){e!==t&&n(e)},children:e})})})),Object(j.jsx)("li",{className:o()("page-item",{disabled:t===i}),children:Object(j.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":t===i,onClick:function(){n(t+1)},children:"\xbb"})})]})},h=r(1,42).map((function(e){return"Item ".concat(e)})),u=function(){var e=Object(l.useState)(1),c=Object(i.a)(e,2),a=c[0],t=c[1],n=Object(l.useState)(5),s=Object(i.a)(n,2),o=s[0],u=s[1],b=Math.ceil(h.length/o),g=function(e){var c=e.slice(0,a-1);return a<b&&(c=e.slice((a-1)*o,o*a)),a===b&&(c=e.slice((a-1)*o,e.length)),c},p=g(h),m=g(r(1,h.length)),O=m[0],x=m[m.length-1];return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Items with Pagination"}),Object(j.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(a," (items ").concat(O," - ").concat(x," of ").concat(h.length,")")}),Object(j.jsxs)("div",{className:"form-group row",children:[Object(j.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(j.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:o,onChange:function(e){u(Number(e.target.value)),t(1)},children:[Object(j.jsx)("option",{value:"3",children:"3"}),Object(j.jsx)("option",{value:"5",children:"5"}),Object(j.jsx)("option",{value:"10",children:"10"}),Object(j.jsx)("option",{value:"20",children:"20"})]})}),Object(j.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(j.jsx)(d,{total:h.length,perPage:o,currentPage:a,onPageChange:function(e){t(e)}}),Object(j.jsx)("ul",{children:p.map((function(e){return Object(j.jsx)("li",{"data-cy":"item",children:e},e)}))})]})};n.a.render(Object(j.jsx)(u,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.488e1d18.chunk.js.map