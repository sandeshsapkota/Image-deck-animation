!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){n(1),t.exports=n(2)},function(t,e){function n(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var o=document.querySelector(".banner"),u=n(document.querySelectorAll(".banner__img")),a=n(document.querySelectorAll(".banner__img-name > *")),i=n(document.querySelectorAll(".banner__img-number > *")),c=document.querySelector(".scroll"),l=u.length-1,f=0,s=!1,d=function(t){t.forEach((function(t){return m(t,"fade-in","remove")}));var e=S(l,t);setTimeout((function(){return m(e,"fade-in")}),200)};function m(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"add";t.classList[n](e)}window.addEventListener("mousemove",(function(t){var e=t.x,n=t.y;c.style.transform="translate(".concat(e,"px, ").concat(n,"px)");var r=t.target.classList.contains("hide-magnet")?"add":"remove";m(c,"fade-out",r),m(c,"hidden","remove")})),o.addEventListener("mousewheel",(function(t){var e=t.deltaY;f++,s=e<0,f%10==0&&function(){s?l++:l--;var t=u.splice(s?0:u.length-1,1)[0];u.length&&(s?u.push(t):u.unshift(t)),v(t),setTimeout((function(){return y(u)}),200),setTimeout((function(){return p(t)}),400);var e=u[s?0:u.length-1],n=u[u.length-2];s?setTimeout((function(){return b(n)}),100):setTimeout((function(){return e.style.transform="rotate(0) scale(1)"}),600),l>u.length-1&&(l=0),l<0&&(l=u.length-1),d(a),d(i)}()}));var y=function(t){return t.forEach((function(t,e){return t.style.zIndex=e}))},p=function(t){t.style.transition=".3s ease-out",t.style.transform=s?"translateX(0) rotate(0deg)":b(t),t.classList.remove("img-size")},v=function(t){var e=document.documentElement.clientWidth>1400?-500:-432;t.style.transform="translateX(".concat(e,"px) rotate(-16deg)"),t.classList.add("img-size"),t.style.transition=".3s ease"},g=function(t,e){return Math.floor(Math.random()*(e-t+1))+t},b=function(t){var e=g(0,-8),n=g(8,0),r=g(0,1)?e:n;t.style.transform="rotate(".concat(r,"deg) scale(0.9)")},h=function(){return u.length-1},S=function(t,e){return e[t]};u.forEach((function(t,e){e!==h()&&b(t)})),m(S(h(),a),"fade-in"),m(S(h(),i),"fade-in")},function(t,e){}]);