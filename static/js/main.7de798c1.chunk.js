(this["webpackJsonprich-text-editor"]=this["webpackJsonprich-text-editor"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(11)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),a=n(3),i=n.n(a),r=(n(9),n(1));n(10);var l=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],a=t[1],i=Object(c.useRef)(),l=Object(c.useState)(""),s=Object(r.a)(l,2),u=s[0],f=s[1],d=Object(c.useState)({start:0,end:0}),m=Object(r.a)(d,2),g=m[0],h=m[1];return document.onselectionchange=function(){var e=document.getSelection().anchorOffset-document.getSelection().extentOffset>0?document.getSelection().extentOffset:document.getSelection().anchorOffset,t=document.getSelection().extentOffset-document.getSelection().anchorOffset>0?document.getSelection().extentOffset:document.getSelection().anchorOffset;h({start:e,end:t})},Object(c.useEffect)((function(){n.split("  *.&**  ")}),[n]),o.a.createElement("div",{className:"App"},o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){var e=u.slice(0,g.start)+"  *.&**  "+u.slice(g.start,g.end)+"  *.&**  "+u.slice(g.end,u.length);a(e)}},o.a.createElement("strong",null,"N")),o.a.createElement("button",{onClick:function(){var e=u.slice(0,g.start)+"  *.&||  "+u.slice(g.start,g.end)+"  *.&||  "+u.slice(g.end,u.length);a(e)}},o.a.createElement("i",null,"I"))),o.a.createElement("div",{className:"box-text",contentEditable:!0,ref:i,suppressContentEditableWarning:!0,children:n,onInput:function(e){f(e.currentTarget.textContent)}}),o.a.createElement("button",{onClick:function(){console.log()}},"teste ...."))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(l,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[4,1,2]]]);
//# sourceMappingURL=main.7de798c1.chunk.js.map