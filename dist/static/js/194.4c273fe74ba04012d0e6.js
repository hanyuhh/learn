webpackJsonp([194],{"4mVR":function(e,a,t){"use strict";var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"app-container"},[t("div",{staticClass:"filter-container"},[t("el-checkbox-group",{model:{value:e.formThead,callback:function(a){e.formThead=a},expression:"formThead"}},[t("el-checkbox",{attrs:{label:"apple"}},[e._v("apple")]),e._v(" "),t("el-checkbox",{attrs:{label:"banana"}},[e._v("banana")]),e._v(" "),t("el-checkbox",{attrs:{label:"orange"}},[e._v("orange")])],1)],1),e._v(" "),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[t("el-table-column",{attrs:{prop:"name",label:"fruitName",width:"180"}}),e._v(" "),e._l(e.formThead,function(a,n){return t("el-table-column",{key:a,attrs:{label:a},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row[a])+"\n      ")]}}])})})],2)],1)},l=[];n._withStripped=!0;var r={render:n,staticRenderFns:l};a.a=r},E0HR:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t("L3SD"),l=t("4mVR"),r=t("VU/8"),o=r(n.a,l.a,null,null,null);o.options.__file="src\\views\\example\\table\\dynamictable\\unfixedThead.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] unfixedThead.vue: functional components are not supported with templates, they should use render functions."),a.default=o.exports},L3SD:function(e,a,t){"use strict";a.a={data:function(){return{tableData:[{name:"fruit-1",apple:"apple-10",banana:"banana-10",orange:"orange-10"},{name:"fruit-2",apple:"apple-20",banana:"banana-20",orange:"orange-20"}],formThead:["apple","banana"]}}}}});