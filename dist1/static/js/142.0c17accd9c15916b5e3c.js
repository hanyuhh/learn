webpackJsonp([142],{TdQX:function(t,e,a){"use strict";var n=a("FL0h"),i=a.n(n);e.a={props:["cid","data"],data:function(){return{chart:null,chart1:null,mainTextColor:"black",xAlisData:[],yData:[],series:[]}},methods:{solveData:function(){var t=[],e=[],a=[],n={},i={};this.data.value.forEach(function(n){t.push(n.name),e.push(n.realValue),a.push(n.planValue)}),i.name="预计销售量（万吨）",i.type="line",i.lineStyle={normal:{width:5}},i.data=a,i.label={normal:{show:!0,formatter:"{c}万吨",position:"top"}},i.markLine={label:{normal:{formatter:"预计{c}万吨"}},lineStyle:{normal:{type:"dashed"}},data:[{name:"Y 轴值为 100 的水平线",yAxis:30}]},n.name="实际销售量（万吨）",n.type="line",n.lineStyle={normal:{width:5}},n.data=e,n.label={normal:{show:!0,formatter:"{c}万吨",position:"top"}},n.markLine={label:{normal:{formatter:"实际{c}万吨"}},lineStyle:{normal:{type:"dashed"}},data:[{name:"Y 轴值为 100 的水平线",yAxis:25}]},this.series.push(n,i),this.xAlisData=t,this.yData=e,this.$hyLog(t)},_init:function(){window.addEventListener("resize",function(){this.myChart.resize()}.bind(this))}},mounted:function(){this.$nextTick(function(){this.solveData();var t={backgroundColor:"white",grid:{position:"left"},tooltip:{trigger:"axis",formatter:"钢材销售量：<br/>预计：{c}万吨<br/>实际：{c1}万吨",axisPointer:{type:"shadow"}},legend:{data:["预计销售量（万吨）","实际销售量（万吨）"],bottom:"1%"},xAxis:[{name:"板块",type:"category",axisLine:{lineStyle:{color:"black"}},data:this.xAlisData,nameTextStyle:{color:"red"},axisLabel:{textStyle:{color:"black"}}}],yAxis:[{name:"吨",type:"value",axisLabel:{textStyle:{color:"black"}},nameTextStyle:{color:"black"}}],series:this.series};this.myChart=i.a.init(document.getElementById(this.cid)),this.myChart.setOption(t),this._init()})}}},"U/AL":function(t,e,a){"use strict";function n(t){o||a("p/mK")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("TdQX"),r=a("ZnYo"),o=!1,s=a("J0+h"),l=n,c=s(i.a,r.a,l,"data-v-638b3b06",null);c.options.__file="src\\views\\charts\\chanyeyuanChart\\barChar1.vue",c.esModule&&Object.keys(c.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),c.options.functional&&console.error("[vue-loader] barChar1.vue: functional components are not supported with templates, they should use render functions."),e.default=c.exports},ZnYo:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"barCharts",attrs:{id:t.cid}})},i=[];n._withStripped=!0;var r={render:n,staticRenderFns:i};e.a=r},bBch:function(t,e,a){e=t.exports=a("YfG4")(!1),e.push([t.i,"\n.barCharts[data-v-638b3b06] {\r\n  min-width: 300px; \r\n  min-height: 340px;\n}  \r\n\r\n",""])},"p/mK":function(t,e,a){var n=a("bBch");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("XkoO")("84249c08",n,!1)}});