!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t){function r(e){var t=document.createElement("a");return t.href="/programs-courses/course.html?course_code="+e,t.textContent=e,t}var n=/[A-Z]{4}[0-9]{4}[A-Z]?/g;function o(e){for(var t=[],o=0,u=e.textContent,c=n.exec(u);null!=c;)t.push(document.createTextNode(u.substr(o,c.index-o))),t.push(r(c[0])),o=c.index+c[0].length,c=n.exec(u);for(;e.hasChildNodes();)e.removeChild(e.lastChild);for(var i=0,l=t;i<l.length;i++){var a=l[i];e.appendChild(a)}return e}!function(){for(var e=0,t=["course-prerequisite","course-companion","course-incompatible"];e<t.length;e++){var r=t[e],n=document.getElementById(r);null!=n&&o(n)}}()}]);