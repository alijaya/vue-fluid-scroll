(function(t){function e(e){for(var o,i,s=e[0],a=e[1],c=e[2],h=0,f=[];h<s.length;h++)i=s[h],r[i]&&f.push(r[i][0]),r[i]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o]);u&&u(e);while(f.length)f.shift()();return l.push.apply(l,c||[]),n()}function n(){for(var t,e=0;e<l.length;e++){for(var n=l[e],o=!0,s=1;s<n.length;s++){var a=n[s];0!==r[a]&&(o=!1)}o&&(l.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},r={0:0},l=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/smooth-scroll/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=a;l.push([0,1]),n()})({0:function(t,e,n){t.exports=n("Vtdi")},"5L1+":function(t,e,n){"use strict";var o=n("vGN1"),r=n.n(o);r.a},"A0++":function(t,e,n){"use strict";var o=n("BPUQ"),r=n.n(o);r.a},BPUQ:function(t,e,n){},DGkh:function(t,e,n){},Vtdi:function(t,e,n){"use strict";n.r(e);n("yt8O"),n("VRzm");var o=n("Kw5r"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"vertical-scroll"},[n("div",{staticClass:"long-text"},[n("ol",t._l(200,function(e){return n("li",{key:e},[t._v("I have "+t._s(e)+" doggo!")])}))])]),n("div",{staticClass:"horizontal-scroll"},[n("div",{staticClass:"long-text"},[n("p",{staticClass:"horizontal-text"},t._l(200,function(e){return n("span",{key:e},[t._v("I have "+t._s(e)+" doggo!")])}))])]),n("SmoothScroll",{staticClass:"smooth-vertical-scroll"},[n("div",{staticClass:"long-text"},[n("ol",t._l(200,function(e){return n("li",{key:e},[t._v("I have "+t._s(e)+" doggo!")])}))])]),n("SmoothScroll",{staticClass:"smooth-horizontal-scroll"},[n("div",{staticClass:"long-text"},[n("p",{staticClass:"horizontal-text"},t._l(200,function(e){return n("span",{key:e},[t._v("I have "+t._s(e)+" doggo!")])}))])])],1)},l=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("FakeScroll",{attrs:{"scroll-width":t.scrollWidth,"scroll-height":t.scrollHeight},on:{update:t.handleUpdate}},[n("div",{ref:"content",staticClass:"content"},[n("ResizeObserver",{on:{notify:t.handleResize}}),t._t("default")],2)])},s=[],a=n("+LDU"),c=n("JSzz"),u={name:"smooth-scroll",components:{FakeScroll:a["a"],ResizeObserver:c["a"]},props:{invert:!1},data:function(){return{scrollWidth:0,scrollHeight:0}},mounted:function(){this.handleResize()},methods:{handleResize:function(){var t=this.$el,e=this.$refs.content;this.scrollWidth=e.scrollWidth-t.clientWidth<=1?t.clientWidth:e.scrollWidth,this.scrollHeight=e.scrollHeight-t.clientHeight<=1?t.clientHeight:e.scrollHeight},handleUpdate:function(t){this.handleResize();var e=this.$refs.content;e.style.transform="translate(-".concat(t.scrollLeft,"px, -").concat(t.scrollTop,"px)"),this.$emit("update",t)}}},h=u,f=(n("5L1+"),n("KHd+")),d=Object(f["a"])(h,i,s,!1,null,"7f716302",null),p=d.exports,v={name:"app",components:{SmoothScroll:p}},g=v,m=(n("A0++"),n("abVj"),Object(f["a"])(g,r,l,!1,null,"b8591846",null)),b=m.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(b)}}).$mount("#app")},abVj:function(t,e,n){"use strict";var o=n("DGkh"),r=n.n(o);r.a},vGN1:function(t,e,n){}});
//# sourceMappingURL=app.33b7caed.js.map