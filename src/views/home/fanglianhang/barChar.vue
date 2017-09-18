<template style="padding: 20px;">
    <div :id="cid" class="barCharts"></div>
</template>
<script>
  import echarts from 'echarts'
  export default {
    props:[
      'cid',
      'data'
    ],
    data() {
      return {
        chart: null,
        chart1:null,
        mainTextColor:'white',
        xData:[],
        yData:[]
      }
    },
    methods: {
      solveData(){
        var xData = []
        var yData = []
        this.data.value.forEach(item=>{
          xData.push(item.name)
        })
        this.data.value.forEach(item=>{
          yData.push(item.value)
        })
        this.xData = xData
        this.yData = yData
        this.$hyLog(xData)
      },
      _init() {
        window.addEventListener('resize', function() {
            this.myChart.resize()
        }.bind(this))
     }
    },
    mounted() {
       // 基于准备好的dom，初始化echarts实例
  this.$nextTick(function(){
       this.solveData()
       var option = {
       color: ['#C23531','#3398DB'],
       grid: {
             top:'2%',
            },
    tooltip: {
        trigger: 'axis',
//     formatter: '{b0}: <br/>{a0}:{c0}<br/>{a1}:{c1}'
    },
    legend: {
        data:['月累计成交套数','周新增成交套数'],   
        bottom:'1%',
//      selected: {
//  		'月累计成交套数': true,
//  		'周新增成交套数': false
//		}
    },
    toolbox: {
        show: false,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis:  {
        type: 'category',
//      boundaryGap: false,
        data: ['第一周','第二周 ','第三周','第四周']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} 套'
        }
    },
    series: [
        {
            name:'月累计成交套数',
            type:'line',
            lineStyle : { normal: {width : 5}},
            data:[36, 76, 98, 133],
            itemStyle : { normal: {label : {show: true}}},
           
        },
        {
            name:'周新增成交套数',
            type:'bar',
            data:[36, 40, 22, 35],
            itemStyle : { normal: {label : {show: true}}}
        }
    ]
    }   
      this.myChart = echarts.init(document.getElementById(this.cid))
      this.myChart.setOption(option);
      this._init()
      })
    }
  }
</script>
<style scoped>


</style>