webpackJsonp([107],{NjZB:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("div",{staticStyle:{"margin-bottom":"15px"}},[e._v("你的权限： "+e._s(e.roles))]),e._v("\n  切换权限：\n  "),n("el-radio-group",{model:{value:e.role,callback:function(t){e.role=t},expression:"role"}},[n("el-radio-button",{attrs:{label:"editor"}})],1)],1)},r=[];o._withStripped=!0;var s={render:o,staticRenderFns:r};t.a=s},V9V6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("WxZQ"),r=n("NjZB"),s=n("J0+h"),i=s(o.a,r.a,null,null,null);i.options.__file="src\\views\\permission\\index.vue",i.esModule&&Object.keys(i.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),t.default=i.exports},WxZQ:function(e,t,n){"use strict";var o=n("4YfN"),r=n.n(o),s=n("lQSI");t.a={data:function(){return{role:""}},computed:r()({},n.i(s.b)(["roles"])),watch:{role:function(e){var t=this;this.$store.dispatch("ChangeRole",e).then(function(){t.$router.push({path:"/permission/index?"+ +new Date})})}}}}});