webpackJsonp([37],{FqGA:function(t,e,n){!function(e,n){t.exports=n()}(0,function(){return function(t){function e(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,a){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:a})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=5)}([function(t,e,n){var a=n(3)(n(1),n(4),null,null);t.exports=a.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(2);e.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,e,n,a){return n*(1-Math.pow(2,-10*t/a))*1024/1023+e}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,a.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,a.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,a.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,a.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),e<this.localDuration?this.rAF=(0,a.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals),t+="";var e=t.split("."),n=e[0],a=e.length>1?this.decimal+e[1]:"",r=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;r.test(n);)n=n.replace(r,"$1"+this.separator+"$2");return this.prefix+n+a+this.suffix}},destroyed:function(){(0,a.cancelAnimationFrame)(this.rAF)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});for(var a=0,r="webkit moz ms o".split(" "),i=window.requestAnimationFrame,s=window.cancelAnimationFrame,o=void 0,l=0;l<r.length&&(!i||!s);l++)o=r[l],e.requestAnimationFrame=i=i||window[o+"RequestAnimationFrame"],e.cancelAnimationFrame=s=s||window[o+"CancelAnimationFrame"]||window[o+"CancelRequestAnimationFrame"];i&&s||(e.requestAnimationFrame=i=function(t){var e=(new Date).getTime(),n=Math.max(0,16-(e-a)),r=window.setTimeout(function(){t(e+n)},n);return a=e+n,r},e.cancelAnimationFrame=s=function(t){window.clearTimeout(t)}),e.requestAnimationFrame=i,e.cancelAnimationFrame=s},function(t,e){t.exports=function(t,e,n,a){var r,i=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(r=t,i=t.default);var o="function"==typeof i?i.options:i;if(e&&(o.render=e.render,o.staticRenderFns=e.staticRenderFns),n&&(o._scopeId=n),a){var l=Object.create(o.computed||null);Object.keys(a).forEach(function(t){var e=a[t];l[t]=function(){return e}}),o.computed=l}return{esModule:r,exports:i,options:o}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),r=function(t){return t&&t.__esModule?t:{default:t}}(a);e.default=r.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",r.default)}])})},KQOv:function(t,e,n){"use strict";var a=n("FqGA"),r=n.n(a);e.a={components:{countTo:r.a},data:function(){return{setStartVal:0,setEndVal:2017,setDuration:4e3,setDecimals:0,setSeparator:",",setSuffix:" rmb",setPrefix:"¥ "}},computed:{_startVal:function(){return this.setStartVal?this.setStartVal:0},_endVal:function(){return this.setEndVal?this.setEndVal:0},_duration:function(){return this.setDuration?this.setDuration:100},_decimals:function(){return this.setDecimals?this.setDecimals<0||this.setDecimals>20?(alert("digits argument must be between 0 and 20"),0):this.setDecimals:0},_separator:function(){return this.setSeparator},_suffix:function(){return this.setSuffix},_prefix:function(){return this.setPrefix}},methods:{start:function(){this.$refs.example.start()},pauseResume:function(){this.$refs.example.pauseResume()}}}},"Ow+/":function(t,e,n){var a=n("m4Q7");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("XkoO")("914bb500",a,!1)},m4Q7:function(t,e,n){e=t.exports=n("YfG4")(!1),e.push([t.i,"\n.example-btn[data-v-3819bf1e] {\n  display: inline-block;\n  margin-bottom: 0;\n  font-weight: 500;\n  text-align: center;\n  -ms-touch-action: manipulation;\n  touch-action: manipulation;\n  cursor: pointer;\n  background-image: none;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  line-height: 1.5;\n  padding: 4px 15px;\n  font-size: 12px;\n  border-radius: 4px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-transition: all .3s cubic-bezier(.645, .045, .355, 1);\n  transition: all .3s cubic-bezier(.645, .045, .355, 1);\n  position: relative;\n  color: rgba(0, 0, 0, .65);\n  background-color: #fff;\n  border-color: #d9d9d9;\n}\n.example-btn[data-v-3819bf1e]:hover {\n  color: #4AB7BD;\n  background-color: #fff;\n  border-color: #4AB7BD;\n}\n.example[data-v-3819bf1e] {\n  font-size: 50px;\n  color: #F6416C;\n  display: block;\n  margin: 10px 0;\n  text-align: center;\n  font-size: 80px;\n  font-weight: 500;\n}\n.label[data-v-3819bf1e] {\n  color: #2f4f4f;\n  font-size: 16px;\n  display: inline-block;\n  margin: 15px 30px 15px 0;\n}\ninput[data-v-3819bf1e] {\n  position: relative;\n  display: inline-block;\n  padding: 4px 7px;\n  width: 70px;\n  height: 28px;\n  cursor: text;\n  font-size: 12px;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, .65);\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #d9d9d9;\n  border-radius: 4px;\n  -webkit-transition: all .3s;\n  transition: all .3s;\n}\n.startBtn[data-v-3819bf1e] {\n  margin-left: 20px;\n  font-size: 20px;\n  color: #30B08F;\n  background-color: #fff;\n}\n.startBtn[data-v-3819bf1e]:hover {\n  background-color: #30B08F;\n  color: #fff;\n  border-color: #30B08F;\n}\n.pause-resume-btn[data-v-3819bf1e] {\n  font-size: 20px;\n  color: #E65D6E;\n  background-color: #fff;\n}\n.pause-resume-btn[data-v-3819bf1e]:hover {\n  background-color: #E65D6E;\n  color: #fff;\n  border-color: #E65D6E;\n}\n",""])},xQ5q:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"components-container"},[t._m(0),t._v(" "),n("count-to",{ref:"example",staticClass:"example",attrs:{"start-val":t._startVal,"end-val":t._endVal,duration:t._duration,decimals:t._decimals,separator:t._separator,prefix:t._prefix,suffix:t._suffix,autoplay:!1}}),t._v(" "),n("div",{staticStyle:{"margin-left":"25%","margin-top":"40px"}},[n("label",{staticClass:"label",attrs:{for:"startValInput"}},[t._v("startVal:  "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.setStartVal,expression:"setStartVal",modifiers:{number:!0}}],attrs:{type:"number",name:"startValInput"},domProps:{value:t.setStartVal},on:{input:function(e){e.target.composing||(t.setStartVal=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),n("label",{staticClass:"label",attrs:{for:"endValInput"}},[t._v("endVal:  "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.setEndVal,expression:"setEndVal",modifiers:{number:!0}}],attrs:{type:"number",name:"endVaInput"},domProps:{value:t.setEndVal},on:{input:function(e){e.target.composing||(t.setEndVal=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),n("label",{staticClass:"label",attrs:{for:"durationInput"}},[t._v("duration:  "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.setDuration,expression:"setDuration",modifiers:{number:!0}}],attrs:{type:"number",name:"durationInput"},domProps:{value:t.setDuration},on:{input:function(e){e.target.composing||(t.setDuration=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),n("div",{staticClass:"startBtn example-btn",on:{click:t.start}},[t._v("开始")]),t._v(" "),n("div",{staticClass:"pause-resume-btn example-btn",on:{click:t.pauseResume}},[t._v("暂停/恢复")]),t._v(" "),n("br"),t._v(" "),n("label",{staticClass:"label",attrs:{for:"decimalsInput"}},[t._v("decimals:  "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.setDecimals,expression:"setDecimals",modifiers:{number:!0}}],attrs:{type:"number",name:"decimalsInput"},domProps:{value:t.setDecimals},on:{input:function(e){e.target.composing||(t.setDecimals=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),n("label",{staticClass:"label",attrs:{for:"separatorInput"}},[t._v("separator:  "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.setSeparator,expression:"setSeparator"}],attrs:{name:"separatorInput"},domProps:{value:t.setSeparator},on:{input:function(e){e.target.composing||(t.setSeparator=e.target.value)}}})]),t._v(" "),n("label",{staticClass:"label",attrs:{for:"prefixInput"}},[t._v("prefix: "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.setPrefix,expression:"setPrefix"}],attrs:{name:"prefixInput"},domProps:{value:t.setPrefix},on:{input:function(e){e.target.composing||(t.setPrefix=e.target.value)}}})]),t._v(" "),n("label",{staticClass:"label",attrs:{for:"suffixInput"}},[t._v("suffix: "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.setSuffix,expression:"setSuffix"}],attrs:{name:"suffixInput"},domProps:{value:t.setSuffix},on:{input:function(e){e.target.composing||(t.setSuffix=e.target.value)}}})])]),t._v(" "),n("code",[t._v("<count-to  :start-val='"+t._s(t._startVal)+"' :end-val='"+t._s(t._endVal)+"' :duration='"+t._s(t._duration)+"' :decimals='"+t._s(t._decimals)+"'\n          :separator='"+t._s(t._separator)+"' :prefix='"+t._s(t._prefix)+"' :suffix='"+t._s(t._suffix)+"' :autoplay=false>")])],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("code",[n("a",{attrs:{href:"https://github.com/PanJiaChen/vue-countTo",target:"_blank"}},[t._v("countTo component")])])}];a._withStripped=!0;var i={render:a,staticRenderFns:r};e.a=i},yO85:function(t,e,n){"use strict";function a(t){s||n("Ow+/")}Object.defineProperty(e,"__esModule",{value:!0});var r=n("KQOv"),i=n("xQ5q"),s=!1,o=n("J0+h"),l=a,u=o(r.a,i.a,l,"data-v-3819bf1e",null);u.options.__file="src\\views\\components\\countTo.vue",u.esModule&&Object.keys(u.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),u.options.functional&&console.error("[vue-loader] countTo.vue: functional components are not supported with templates, they should use render functions."),e.default=u.exports}});