function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=a||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,p=Math.min,v=function(){return l.Date.now()};function g(t,e,n){var i,r,o,u,f,a,c=0,l=!1,s=!1,g=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(e){var n=i,o=r;return i=r=void 0,c=e,u=t.apply(o,n)}function j(t){return c=t,f=setTimeout(h,e),l?b(t):u}function T(t){var n=t-a;return void 0===a||n>=e||n<0||s&&t-c>=o}function h(){var t=v();if(T(t))return w(t);f=setTimeout(h,function(t){var n=e-(t-a);return s?p(n,o-(t-c)):n}(t))}function w(t){return f=void 0,g&&i?b(t):(i=r=void 0,u)}function E(){var t=v(),n=T(t);if(i=arguments,r=this,a=t,n){if(void 0===f)return j(a);if(s)return f=setTimeout(h,e),b(a)}return void 0===f&&(f=setTimeout(h,e)),u}return e=m(e)||0,y(n)&&(l=!!n.leading,o=(s="maxWait"in n)?d(m(n.maxWait)||0,e):o,g="trailing"in n?!!n.trailing:g),E.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=a=r=f=void 0},E.flush=function(){return void 0===f?u:w(v())},E}function y(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function m(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(y(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=y(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var n=o.test(t);return n||u.test(t)?f(t.slice(2),n?2:8):r.test(t)?NaN:+t}e=function(t,e,n){var i=!0,r=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return y(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),g(t,e,{leading:i,maxWait:e,trailing:r})};const b=document.querySelector(".feedback-form"),j={};b.addEventListener("input",t(e)((function(t){j[t.target.name]=t.target.value,localStorage.setItem("KEY",JSON.stringify(j))}),500)),b.addEventListener("submit",(function(t){console.log(JSON.parse(localStorage.getItem("KEY"))),t.preventDefault(),t.currentTarget.reset(),localStorage.removeItem("KEY")}));
//# sourceMappingURL=03-feedback.1c7bc7ba.js.map
