(function(t){function e(e){for(var a,i,c=e[0],s=e[1],l=e[2],u=0,f=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);v&&v(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},i={app:0},o={app:0},r=[];function c(t){return s.p+"js/"+({portfolio:"portfolio"}[t]||t)+"."+{portfolio:"ad500200"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={portfolio:1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise(function(e,n){for(var a="css/"+({portfolio:"portfolio"}[t]||t)+"."+{portfolio:"ba775fa7"}[t]+".css",o=s.p+a,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var l=r[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===o))return e()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){l=f[c],u=l.getAttribute("data-href");if(u===a||u===o)return e()}var v=document.createElement("link");v.rel="stylesheet",v.type="text/css",v.onload=e,v.onerror=function(e){var a=e&&e.target&&e.target.src||o,r=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete i[t],v.parentNode.removeChild(v),n(r)},v.href=o;var _=document.getElementsByTagName("head")[0];_.appendChild(v)}).then(function(){i[t]=0}));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise(function(e,n){a=o[t]=[e,n]});e.push(a[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(t);var f=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(v);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",f.name="ChunkLoadError",f.type=a,f.request=i,n[1](f)}o[t]=void 0}};var v=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var v=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0618":function(t,e,n){},"1acb":function(t,e,n){},"2f48":function(t,e,n){"use strict";var a=n("db86"),i=n.n(a);i.a},4433:function(t,e,n){"use strict";var a=n("0618"),i=n.n(a);i.a},"4a71":function(t,e,n){"use strict";var a=n("875e"),i=n.n(a);i.a},"4f87":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("brand-component"),n("navigation-component"),n("contact-component"),n("router-view"),n("footer-component")],1)},o=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-link",{staticClass:"brand",attrs:{to:"/about"}},[n("picture",{staticClass:"brand__img"},[n("source",{attrs:{srcset:"/img/mejdi.png 1x, /img/mejdi.png 2x",media:"(min-width: 120em)"}}),n("img",{staticClass:"brand__img",attrs:{srcset:"/img/mejdi.png 1x, /img/mejdi.png 2x",alt:"Mejdi Hafiane Brand Image"}})])])},c=[],s={},l=s,u=(n("2f48"),n("2877")),f=Object(u["a"])(l,r,c,!1,null,null,null),v=f.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navigation"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.navActive,expression:"navActive"}],staticClass:"navigation__checkbox",attrs:{type:"checkbox",id:"nav_toggle"},domProps:{checked:Array.isArray(t.navActive)?t._i(t.navActive,null)>-1:t.navActive},on:{change:function(e){var n=t.navActive,a=e.target,i=!!a.checked;if(Array.isArray(n)){var o=null,r=t._i(n,o);a.checked?r<0&&(t.navActive=n.concat([o])):r>-1&&(t.navActive=n.slice(0,r).concat(n.slice(r+1)))}else t.navActive=i}}}),t._m(0),n("nav",{staticClass:"navigation__nav"},[n("ul",{staticClass:"navigation__list"},[n("li",{staticClass:"navigation__item",on:{click:function(e){t.navActive=!1}}},[n("router-link",{staticClass:"navigation__link",attrs:{to:"/about"}},[n("span",[t._v("About")])])],1),n("li",{staticClass:"navigation__item",on:{click:function(e){t.navActive=!1}}},[n("router-link",{staticClass:"navigation__link",attrs:{to:"/portfolio"}},[n("span",[t._v("Portfolio")])])],1)])])])},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"navigation__button",attrs:{for:"nav_toggle"}},[n("div",{staticClass:"navigation__line"}),n("div",{staticClass:"navigation__line"}),n("div",{staticClass:"navigation__line"})])}],d={data:function(){return{navActive:!1}}},m=d,g=(n("f920"),Object(u["a"])(m,_,p,!1,null,null,null)),h=g.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contact"},[n("ul",{staticClass:"contact__list"},[n("li",{staticClass:"contact__item"},[n("a",{staticClass:"contact__link contact__link--linkedin",attrs:{href:"https://www.linkedin.com/in/mejdi-hafiane-5b1646142/",target:"_blank"}},[n("span",{staticClass:"contact__label"},[t._v("Linkedin")]),n("font-awesome-icon",{attrs:{icon:["fab","linkedin"]}})],1)]),n("li",{staticClass:"contact__item"},[n("a",{staticClass:"contact__link contact__link--github",attrs:{href:"https://github.com/mejdi14",target:"_blank"}},[n("span",{staticClass:"contact__label"},[t._v("Github")]),n("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1)]),n("li",{staticClass:"contact__item"},[n("a",{staticClass:"contact__link contact__link--email",attrs:{href:"mailto:mejdihafiane@gmail.com",target:"_blank"}},[n("span",{staticClass:"contact__label"},[t._v("Email")]),n("font-awesome-icon",{attrs:{icon:["far","envelope"]}})],1)]),n("li",{staticClass:"contact__item"},[n("a",{staticClass:"contact__link contact__link--resume",attrs:{href:"https://drive.google.com/file/d/1vH0kFBmy4GqF4TzRPFBKEvRKEzBXSjCW/view?usp=sharing",target:"_blank"}},[n("span",{staticClass:"contact__label"},[t._v("Resume")]),n("font-awesome-icon",{attrs:{icon:["fas","portrait"]}})],1)])])])},C=[],k={},y=k,w=(n("4433"),Object(u["a"])(y,b,C,!1,null,null,null)),j=w.exports,A=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},E=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"footer__item"},[t._v("\n        © 2019 Mejdi Hafiane.\n    ")]),n("div",{staticClass:"footer__item"},[n("div",{staticClass:"footer__contact"},[t._v("Email: "),n("a",{staticClass:"footer__link",attrs:{href:"mailto:mejdihafiane@gmail.com"}},[t._v("mejdihafiane@gmail.com")])]),n("div",{staticClass:"footer__contact"},[t._v("Tel: "),n("a",{staticClass:"footer__link",attrs:{href:"tel: +21623825559"}},[t._v("+21623825559")])])])])}],x={},O=x,P=(n("4a71"),Object(u["a"])(O,A,E,!1,null,null,null)),S=P.exports,T={components:{BrandComponent:v,NavigationComponent:h,ContactComponent:j,FooterComponent:S}},B=T,$=(n("5c0b"),Object(u["a"])(B,i,o,!1,null,null,null)),N=$.exports,L=(n("4f87"),n("8c4f"));a["a"].use(L["a"]);var M=new L["a"]({routes:[{path:"/",redirect:"/about"},{path:"/about",name:"about",component:function(){return n.e("portfolio").then(n.bind(null,"f820"))}},{path:"/portfolio",name:"portfolio",component:function(){return n.e("portfolio").then(n.bind(null,"c9e5"))}}]}),F=n("ecee"),H=n("c074"),q=n("f2d1"),K=n("b702"),R=n("ad3d");F["c"].add(H["b"],H["a"],q["a"],q["b"],K["a"],H["c"],H["d"]),a["a"].component("font-awesome-icon",R["a"]),a["a"].config.productionTip=!1,new a["a"]({router:M,render:function(t){return t(N)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("1acb"),i=n.n(a);i.a},"875e":function(t,e,n){},db86:function(t,e,n){},f6d6:function(t,e,n){},f920:function(t,e,n){"use strict";var a=n("f6d6"),i=n.n(a);i.a}});
//# sourceMappingURL=app.ad984202.js.map