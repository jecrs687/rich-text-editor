(this["webpackJsonprich-text-editor"]=this["webpackJsonprich-text-editor"]||[]).push([[0],[,,,,function(e,t,n){},,function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(5),c=n.n(o),i=(n(11),n(2)),r=n(1);n(4);function s(e){var t=e.children,n=e.onClick,o=(e.value,Object(a.useState)(!1)),c=Object(r.a)(o,2),i=c[0],s=c[1];return l.a.createElement("button",{style:{backgroundColor:i?"#bbb":"#eee"},onClick:function(){n(t),s(!i)}},t)}function u(e){var t=e.children,n=e.onClick;return l.a.createElement("button",{style:{backgroundColor:"#eee"},onClick:function(){n(t)}},t)}var m=function(){var e=Object(a.useState)([{text:"",style:{fontSize:14,fontWeight:"300",fontStyle:"normal",textAlign:"center"}}]),t=Object(r.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(-1),m=Object(r.a)(c,2),f=m[0],y=m[1],h=Object(a.useState)(!0),b=Object(r.a)(h,2),p=b[0],E=b[1];function d(e){e=e.props?e.props.children:e;var t=n;switch(console.log(Object(i.a)({},t[f].style)),console.log(e),e){case"i":"normal"===t[f].style.fontStyle?(t[f].style.fontStyle="italic",o(t)):(t[f].style.fontStyle="normal",o(t));break;case"size+":t[f].style.fontSize=t[f].style.fontSize+1,o(t);break;case"size-":t[f].style.fontSize=t[f].style.fontSize-1,o(t);break;case"n":"300"===t[f].style.fontWeight?(t[f].style.fontWeight="900",o(t)):(t[f].style.fontWeight="300",o(t));break;default:t[f].style.textAlign=e,o(t)}E(!p)}return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"App-head"},l.a.createElement("div",{className:"App-head-box"},l.a.createElement(s,{value:n[f],onClick:d},l.a.createElement("strong",null,"n")),l.a.createElement(s,{value:n[f],onClick:d},l.a.createElement("i",null,"i")),l.a.createElement(s,{value:n[f],onClick:d},l.a.createElement("i",null,"justify")),l.a.createElement(s,{value:n[f],onClick:d},l.a.createElement("i",null,"right")),l.a.createElement(s,{value:n[f],onClick:d},l.a.createElement("i",null,"center")),l.a.createElement(s,{value:n[f],onClick:d},l.a.createElement("i",null,"left")),l.a.createElement(u,{onClick:d},"size+"),l.a.createElement(u,{onClick:d},"size-")),n[f]?l.a.createElement("div",{className:"App-head-box"},l.a.createElement("h4",null,"fontSize: ",n[f].style.fontSize," | fontStyle: ",n[f].style.fontStyle," | fontWeight: ",n[f].style.fontWeight)):null),l.a.createElement("div",{className:"App-body"},n.map((function(e,t){return l.a.createElement("div",{className:"App-body-box",key:t},t===f?l.a.createElement("button",{className:"Button",onClick:function(){!function(){var e=n;e.splice(f+1,0,{text:"",style:{fontSize:14,fontWeight:"300",fontStyle:"normal",textAlign:"justify"}}),o(e),E(!p)}()}},"+"):l.a.createElement("div",{className:"Button"}),t===f&&n.length>1?l.a.createElement("button",{className:"Button",onClick:function(){!function(){var e=n;e.splice(f,1),o(e),E(!p)}()}},"-"):l.a.createElement("div",{className:"Button"}),l.a.createElement("div",{contentEditable:"true",placeholder:"write here",style:Object(i.a)({},e.style),className:"App-box",type:"text","data-text":"Enter text here",onFocus:function(){y(t)}},n.text))}))),l.a.createElement("div",{className:"App-footer"},"this is an open-source project by:",l.a.createElement("a",{href:"https://jecrs687.github.io/"},"@jecrs687")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[6,1,2]]]);
//# sourceMappingURL=main.17c81453.chunk.js.map