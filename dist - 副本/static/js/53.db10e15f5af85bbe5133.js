webpackJsonp([53],{IEJF:function(n,t,e){"use strict";var a=e("FL0h"),i=e.n(a);t.a={props:["cid","data"],data:function(){return{chart:null,chart1:null,mainTextColor:"white",xData:[],yData:[]}},methods:{solveData:function(){var n=[],t=[];this.data.value.forEach(function(t){n.push(t.name)}),this.data.value.forEach(function(n){t.push(n.value)}),this.xData=n,this.yData=t,this.$hyLog(n)},_init:function(){window.addEventListener("resize",function(){this.myChart.resize()}.bind(this))}},mounted:function(){this.$nextTick(function(){this.solveData();var n={color:["#C23531","#3398DB"],grid:{top:"2%"},tooltip:{trigger:"axis"},legend:{data:["月累计成交套数","周新增成交套数"],bottom:"1%"},toolbox:{show:!1,feature:{dataZoom:{yAxisIndex:"none"},dataView:{readOnly:!1},magicType:{type:["line","bar"]},restore:{},saveAsImage:{}}},xAxis:{type:"category",data:["第一周","第二周 ","第三周","第四周"]},yAxis:{type:"value",axisLabel:{formatter:"{value} 套"}},series:[{name:"月累计成交套数",type:"line",lineStyle:{normal:{width:5}},data:[36,76,98,133],itemStyle:{normal:{label:{show:!0}}}},{name:"周新增成交套数",type:"bar",data:[36,40,22,35],itemStyle:{normal:{label:{show:!0}}}}]};this.myChart=i.a.init(document.getElementById(this.cid)),this.myChart.setOption(n),this._init()})}}},IvDu:function(n,t,e){"use strict";var a=function(){var n=this,t=n.$createElement;return(n._self._c||t)("div",{staticClass:"barCharts",attrs:{id:n.cid}})},i=[];a._withStripped=!0;var o={render:a,staticRenderFns:i};t.a=o},oXYD:function(n,t,e){"use strict";function a(n){r||e("pAKq")}Object.defineProperty(t,"__esModule",{value:!0});var i=e("IEJF"),o=e("IvDu"),r=!1,s=e("J0+h"),l=a,u=s(i.a,o.a,l,"data-v-0e47709d",null);u.options.__file="src\\views\\home\\fanglianhang\\barChar.vue",u.esModule&&Object.keys(u.esModule).some(function(n){return"default"!==n&&"__"!==n.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),u.options.functional&&console.error("[vue-loader] barChar.vue: functional components are not supported with templates, they should use render functions."),t.default=u.exports},pAKq:function(n,t,e){var a=e("rIvf");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e("XkoO")("3a4985c7",a,!1)},rIvf:function(n,t,e){t=n.exports=e("YfG4")(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])}});