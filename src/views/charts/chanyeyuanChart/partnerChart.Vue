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
        var series = []
        var seriesItem1 = {}
        var seriesItem2 = {}
        var newNum = []
        this.data.value.forEach(item=>{
            xAlisData.push(item.name)
            yData.push(item.old)
            newNum.push(item.new)
        })
        seriesItem1.name = this.data.type[0],
        seriesItem1.type = 'bar',
        seriesItem1.stack= '总量',
        seriesItem1.label= {
                normal: {
                    show: true,
//                  position: 'center'
                }
            },
        seriesItem1.data = yData

        seriesItem2.name = this.data.type[1],
        seriesItem2.type = 'bar',
        seriesItem2.stack= '总量',
        seriesItem2.label= {
                normal: {
                    show: true,
                    // position: 'insideRight',
//                  right:'10%'
                }
            },
        seriesItem2.data = newNum
        series.push(seriesItem1,seriesItem2)
        this.series = series
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
          title: {
                text:this.data.title,
                x:'center',
                textStyle:{
                    color:'#black'
                },
              },
           grid: {
                left: '1%',
                bottom: '10%',
                containLabel: true
            },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    xAxis: {
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
.barCharts {
  min-width: 300px; 
  min-height: 400px;
  border:1px solid black

}  

</style>