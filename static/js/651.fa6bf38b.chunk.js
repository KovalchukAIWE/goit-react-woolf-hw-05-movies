"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[651],{651:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var r=n(861),a=n(439),c=n(757),u=n.n(c),s=n(791),o=n(87),i=n(784),p=n(354),f="SearchForm_button__UXY06",v="SearchForm_input__HOxJo",h=n(184),l=function(e){var t=e.searchMovies,n=(0,s.useState)(""),r=(0,a.Z)(n,2),c=r[0],u=r[1];return(0,h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(c.toLowerCase())},children:[(0,h.jsx)("input",{type:"text",name:"query",autoFocus:!0,value:c,onChange:function(e){u(e.target.value)},placeholder:"Search movie",className:v}),(0,h.jsx)("button",{type:"submit",className:f,children:"Search"})]})},m=n(689),d="MoviesList_item__eePYv",x=function(e){var t=e.films,n=(0,m.TH)();return(0,h.jsx)("ul",{children:t.map((function(e){return(0,h.jsx)("li",{className:d,children:(0,h.jsx)(o.rU,{to:"/movies/".concat(e.id),state:{from:n},cover:e.poster_path,children:e.title})},e.id)}))})},y=function(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),n=t[0],c=t[1],f=(0,s.useState)(!1),v=(0,a.Z)(f,2),m=v[0],d=v[1],y=(0,s.useState)(!1),_=(0,a.Z)(y,2),k=_[0],w=_[1],Z=(0,o.lr)(),g=(0,a.Z)(Z,2),b=g[0],j=g[1],S=b.get("query")||"";return(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(!0),e.next=4,(0,p.V0)(S);case 4:t=e.sent,c(t),w(0===t.length),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:return e.prev=12,d(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[S]),(0,h.jsxs)("main",{children:[(0,h.jsx)(l,{searchMovies:function(e){j(""!==e&&{query:e})}}),m&&(0,h.jsx)(i.Z,{}),k&&(0,h.jsx)("p",{children:"There are no movies. Please, try again..."}),n.length>0&&(0,h.jsx)(x,{films:n})]})}},354:function(e,t,n){n.d(t,{DL:function(){return f},Fb:function(){return i},M1:function(){return v},V0:function(){return p},tx:function(){return h}});var r=n(861),a=n(757),c=n.n(a),u=n(294),s="dda59f4936591e74cda44d0ee157e8ca",o="https://api.themoviedb.org/3",i=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(o,"/trending/movie/day?api_key=").concat(s));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(o,"/search/movie?api_key=").concat(s,"&page=1&query=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(o,"/movie/").concat(t,"?api_key=").concat(s));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(s));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(s,"&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=651.fa6bf38b.chunk.js.map