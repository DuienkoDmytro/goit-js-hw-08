function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),d=Object.prototype.toString,s=Math.max,v=Math.min,p=function(){return l.Date.now()};function m(e,t,n){var r,o,i,u,a,f,c=0,l=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,i=o;return r=o=void 0,c=t,u=e.apply(i,n)}function j(e){return c=e,a=setTimeout(T,t),l?b(e):u}function S(e){var n=e-f;return void 0===f||n>=t||n<0||d&&e-c>=i}function T(){var e=p();if(S(e))return h(e);a=setTimeout(T,function(e){var n=t-(e-f);return d?v(n,i-(e-c)):n}(e))}function h(e){return a=void 0,m&&r?b(e):(r=o=void 0,u)}function w(){var e=p(),n=S(e);if(r=arguments,o=this,f=e,n){if(void 0===a)return j(f);if(d)return a=setTimeout(T,t),b(f)}return void 0===a&&(a=setTimeout(T,t)),u}return t=y(t)||0,g(n)&&(l=!!n.leading,i=(d="maxWait"in n)?s(y(n.maxWait)||0,t):i,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=f=o=a=void 0},w.flush=function(){return void 0===a?u:h(p())},w}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||u.test(e)?a(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),m(e,t,{leading:r,maxWait:t,trailing:o})};const b=document.querySelector(".feedback-form"),j={},S=JSON.parse(localStorage.getItem("KEY"));b.addEventListener("input",e(t)((function(e){j[e.target.name]=e.target.value,localStorage.setItem("KEY",JSON.stringify(j))}),500)),b.addEventListener("submit",(function(e){console.log(S),e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("KEY")})),function(){const e=document.querySelector(".feedback-form input"),t=document.querySelector(".feedback-form textarea");S?(e.value=S.email,t.value=S.message):(e.value="",t.value="")}();
//# sourceMappingURL=03-feedback.b21a403d.js.map
