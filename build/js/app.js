!function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=0)}([function(e,r,t){"use strict";t.r(r);var n=document,o={self:n.getElementById("root-header"),hamburger:n.getElementById("hamburger"),navContainer:n.querySelector("nav.mobile--nav-container"),close:n.querySelector(".mobile--nav-wrap figure img.close")};if(null!==o.self){var a=o.hamburger,u=o.navContainer,l=o.close;console.log(a);var i=0;a.addEventListener("click",(function e(){u.style.transform="translateX(".concat(-i,"%)"),(i+=10)<=100&&requestAnimationFrame(e),90===i&&(u.style.backgroundColor="rgba(0,0,0,.4)")})),l.addEventListener("click",(function e(){u.style.transform="translateX(".concat(-i,"%)"),(i-=10)>=0&&requestAnimationFrame(e),90===i&&(u.style.backgroundColor="rgba(0,0,0,0)")}))}}]);
//# sourceMappingURL=app.js.map