(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{161:function(t,e,n){"use strict";n.d(e,"c",function(){return o}),n.d(e,"b",function(){return c}),n.d(e,"a",function(){return l});var r=n(163);n(162);function o(t){var e=Math.round(t/10);return"".concat(new Array(e||1).fill("☕️").join("")," ").concat(t," min read")}function c(t){var e;if("function"!=typeof Date.prototype.toLocaleDateString)return t;t=new Date(t);var n=["en-EN",{day:"numeric",month:"long",year:"numeric"}].filter(Boolean);return(e=t).toLocaleDateString.apply(e,Object(r.a)(n))}function l(t,e,n){var r;return function(){var o=this,c=arguments,l=n&&!r;clearTimeout(r),r=setTimeout(function(){r=null,n||t.apply(o,c)},e),l&&t.apply(o,c)}}},162:function(t,e,n){var r=n(7);r(r.P,"Array",{fill:n(164)}),n(51)("fill")},163:function(t,e,n){"use strict";function r(t){return function(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(e,"a",function(){return r})},164:function(t,e,n){"use strict";var r=n(28),o=n(100),c=n(17);t.exports=function(t){for(var e=r(this),n=c(e.length),l=arguments.length,m=o(l>1?arguments[1]:void 0,n),f=l>2?arguments[2]:void 0,d=void 0===f?n:o(f,n);d>m;)e[m++]=t;return e}},165:function(t,e,n){var map={"./create-simple-like-button-using-firebase-rtdb/index.md":[170,20],"./eslint-formatter-html-extended/index.md":[171,21],"./membuat-blog-keren-dengan-gridsome/index.md":[172,22],"./mencicipi-reasonml-untuk-react/index.md":[173,23],"./migrasi-nuxt-ke-typescript/index.md":[174,24],"./panduan-unit-testing-di-vuejs/index.md":[175,25],"./pengalaman-menjadi-fasilitator-gdk-mws-2018/index.md":[176,26]};function r(t){if(!n.o(map,t))return Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e});var e=map[t],r=e[0];return n.e(e[1]).then(function(){return n.t(r,7)})}r.keys=function(){return Object.keys(map)},r.id=165,t.exports=r},166:function(t,e,n){"use strict";n(167);var r=n(161),o={name:"MetaData",props:{metaDate:{type:String,default:""},metaMinuteToRead:{type:Number,default:0},isShowStats:{type:Boolean,default:!1},statsLikes:{type:Number,default:0},statsRead:{type:Number,default:0}},data:function(){return{formatReadingTime:r.c,formatPostDate:r.b}}},c=n(2),component=Object(c.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"meta meta--desktop"},[n("small",{staticClass:"meta__date"},[t._v("\n      📆 "+t._s(t.formatPostDate(t.metaDate))+"\n    ")]),t._v(" "),n("small",{staticClass:"dot"},[t._v(" • ")]),t._v(" "),n("small",{staticClass:"meta__read"},[t._v(t._s(t.formatReadingTime(t.metaMinuteToRead)))]),t._v(" "),t.isShowStats?n("small",{staticClass:"dot"},[t._v(" • ")]):t._e(),t._v(" "),t.isShowStats?n("small",[t._v("\n      ❤️ "+t._s(t.statsLikes)+" likes\n    ")]):t._e(),t._v(" "),t.isShowStats?n("small",{staticClass:"dot"},[t._v(" • ")]):t._e(),t._v(" "),t.isShowStats?n("small",[t._v("\n      📓 "+t._s(t.statsRead)+" read\n    ")]):t._e()]),t._v(" "),n("div",{staticClass:"meta meta--mobile"},[n("div",[n("small",{staticClass:"meta__date"},[t._v("\n        📆 "+t._s(t.formatPostDate(t.metaDate))+"\n      ")]),t._v(" "),n("small",{staticClass:"dot"},[t._v(" • ")]),t._v(" "),n("small",{staticClass:"meta__read"},[t._v(t._s(t.formatReadingTime(t.metaMinuteToRead)))])]),t._v(" "),n("div",{staticStyle:{"margin-top":".5em"}},[t.isShowStats?n("small",[t._v("\n        ❤️ "+t._s(t.statsLikes)+" likes\n      ")]):t._e(),t._v(" "),t.isShowStats?n("small",{staticClass:"dot"},[t._v(" • ")]):t._e(),t._v(" "),t.isShowStats?n("small",[t._v("\n        📓 "+t._s(t.statsRead)+" read\n      ")]):t._e()])])])},[],!1,null,null,null);e.a=component.exports},167:function(t,e,n){"use strict";var r=n(5),o=n(18),c=n(23),l=n(101),m=n(52),f=n(11),d=n(53).f,_=n(70).f,v=n(12).f,h=n(168).trim,y=r.Number,w=y,S=y.prototype,N="Number"==c(n(69)(S)),x="trim"in String.prototype,k=function(t){var e=m(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,c=(e=x?e.trim():h(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,l=e.slice(2),i=0,f=l.length;i<f;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,r)}}return+e};if(!y(" 0o1")||!y("0b1")||y("+0x1")){y=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof y&&(N?f(function(){S.valueOf.call(n)}):"Number"!=c(n))?l(new w(k(e)),n,y):k(e)};for(var C,E=n(9)?d(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;E.length>I;I++)o(w,C=E[I])&&!o(y,C)&&v(y,C,_(w,C));y.prototype=S,S.constructor=y,n(13)(r,"Number",y)}},168:function(t,e,n){var r=n(7),o=n(22),c=n(11),l=n(169),m="["+l+"]",f=RegExp("^"+m+m+"*"),d=RegExp(m+m+"*$"),_=function(t,e,n){var o={},m=c(function(){return!!l[t]()||"​"!="​"[t]()}),f=o[t]=m?e(v):l[t];n&&(o[n]=f),r(r.P+r.F*m,"String",o)},v=_.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(d,"")),t};t.exports=_},169:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},198:function(t,e,n){var content=n(224);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("64b69148",content,!0,{sourceMap:!1})},223:function(t,e,n){"use strict";var r=n(198);n.n(r).a},224:function(t,e,n){(t.exports=n(20)(!1)).push([t.i,".pages__title[data-v-33b0330c] {\n  margin-bottom: .25em;\n}\n.pages__date[data-v-33b0330c] {\n  color: var(--textSubtitle);\n}\n.pages__item[data-v-33b0330c] {\n  margin-bottom: 3.5em;\n}\n",""])},237:function(t,e,n){"use strict";n.r(e);n(35),n(29),n(68),n(16);var r=n(3),o=n(71),c=n(161),l={name:"Homepage",layout:"homepage",components:{MetaData:n(166).a},head:function(){return{link:[{hid:"amphtml",rel:"amphtml",href:"".concat(this.productionUrl,"/amp/")}]}},data:function(){return{productionUrl:"https://www.mazipan.xyz",formatReadingTime:c.c,formatPostDate:c.b}},asyncData:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e){var c,l;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return l=function(){return(l=Object(r.a)(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n(165)("./".concat(e,"/index.md"));case 2:return r=t.sent,t.abrupt("return",r.attributes);case 4:case"end":return t.stop()}},t)}))).apply(this,arguments)},c=function(t){return l.apply(this,arguments)},e.store,t.abrupt("return",Promise.all(o.a.data.map(function(t){return c(t)})).then(function(t){return{metas:t}}));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},m=(n(223),n(2)),component=Object(m.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"pages"},t._l(t.metas,function(meta){return n("div",{key:meta.title,staticClass:"pages__item"},[n("nuxt-link",{staticClass:"pages__link",attrs:{to:"/"+meta.slug+"/?utm_source=home",title:meta.title}},[n("h2",{staticClass:"pages__title"},[t._v("\n        "+t._s(meta.title)+"\n      ")])]),t._v(" "),n("MetaData",{attrs:{"meta-date":meta.date,"meta-minute-to-read":meta.minute2read}}),t._v(" "),n("div",[n("p",[t._v("\n        "+t._s(meta.description)+"\n      ")])])],1)}),0)},[],!1,null,"33b0330c",null);e.default=component.exports}}]);