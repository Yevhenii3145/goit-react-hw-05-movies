"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[961],{961:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(861),s=n(885),i=n(757),c=n.n(i),l=n(791),a=n(689),o=n(731),u=n(832),h=n(979),d=n(184);function p(){var e,t,n=(0,l.useState)(null),i=(0,s.Z)(n,2),p=i[0],x=i[1],m=(0,l.useState)(!1),v=(0,s.Z)(m,2),f=v[0],j=v[1],g=(0,l.useState)(null),w=(0,s.Z)(g,2),k=w[0],y=w[1],b=(0,a.UO)().movieId,S=b.includes(":")?Number(b.slice(1,b.length)):b,Z=(0,a.s0)(),_=(0,a.TH)(),C=null!==(e=null===(t=_.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies";(0,l.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!0),y(null),e.next=5,(0,u.Pg)(S);case 5:t=e.sent,x(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),y(e.t0);case 12:return e.prev=12,j(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[S]);if(p){var U=p.genres.map((function(e){var t=e.id,n=e.name;return(0,d.jsx)("li",{style:{marginRight:"20px"},children:n},t)})),R=_.pathname.includes("cast")?"/movies/:".concat(S):"/movies/:".concat(S,"/cast"),F=_.pathname.includes("reviews")?"/movies/:".concat(S):"/movies/:".concat(S,"/reviews");return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("button",{style:{marginBottom:"20px",marginLeft:"20px"},onClick:function(){return Z(C)},children:"Go back"}),f&&(0,d.jsx)(h.Z,{}),k&&(0,d.jsx)("p",{children:"Something went wrong (("}),p&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{style:{display:"flex"},children:[(0,d.jsx)("img",{style:{marginRight:"40px"},width:"250",src:"https://image.tmdb.org/t/p/w500/".concat(p.poster_path),alt:p.title}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:p.title}),(0,d.jsxs)("p",{children:["User Score: ",p.popularity," %"]}),(0,d.jsx)("h3",{children:"Overwiew"}),(0,d.jsx)("p",{children:p.overview}),(0,d.jsx)("h3",{children:"Genres"}),(0,d.jsx)("ul",{style:{listStyle:"none",display:"flex"},children:U})]})]}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(o.rU,{state:{from:C},to:R,children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(o.rU,{state:{from:C},to:F,children:"Reviews"})})]})]})]}),(0,d.jsx)(a.j3,{})]})}}}}]);
//# sourceMappingURL=961.45033442.chunk.js.map