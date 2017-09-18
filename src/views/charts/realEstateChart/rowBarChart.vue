<template>
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
        mainTextColor:'black',
        xAlisData:[],
        yData:[],
        series:[]
      }
    },
    methods: {
      solveData(){
        var xAlisData = []
        var yData = []
        var value  = [] //value
        var seriesItem = {}
        this.data.value.forEach(item=>{
            var itemData = {}
             var itemStyle = {
                        normal:{
                          color:'#3398DB'
                        },
                      }
            itemData.value = item.num
            itemData.itemStyle= itemStyle
            xAlisData.push(item.name)
            yData.push(itemData)
        })
        seriesItem.name = '进度',
        seriesItem.type = 'bar',
        seriesItem.data = yData,
        seriesItem.label= {
                        normal: {
                            show: true,
                            position: 'right',
                             formatter: '{c}%'
                        }
                    },
        this.series.push(seriesItem)
        this.xAlisData = xAlisData
        this.yData = yData
        this.$hyLog(xAlisData)
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
             backgroundColor: "white",
              color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        formatter: "{b} : {c} %",
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        top: '2%',
    },
    xAxis: {
        name:'%',
        type: 'value',
        boundaryGap: [0, 0.01],
        axisLabel:{
             formatter: "{value}%",
        }
    },
    yAxis: {
         name:'板块',
        type: 'category',
        data: this.xAlisData
    },
    series: this.series
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