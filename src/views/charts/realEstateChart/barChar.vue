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
        xData:[],
        yData:[],
        series:[]
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
        this.series= this.data.series
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
        backgroundColor: "white",
          color: ['#3398DB','#ef5c4c'],
           grid: {
             top:'2%',
            },
              tooltip: {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
    },
      xAxis: [{
        name: this.data.xTitle,
        type: 'category',
         "axisLine": {
            lineStyle: {
                color: 'black'
            }
        },
        data: this.xData,
        nameTextStyle:{
          color:'red'
        },
         axisLabel: {
          textStyle: {
            color: 'black'
          }
        },
      }],
      yAxis: [{
        name: this.data.yTitle,
        type: 'value',
        axisLabel: {
          textStyle: {
            color: 'black'
          }
        },
        nameTextStyle:{
          color:'black'
        }
      }],
       legend: {
        bottom:'1%',
        data: ['目标销售额','实际营销额'],
        textStyle: {
            color: '#fff',
            fontSize: 16
        }
    },
      series: this.data.series
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
  min-height: 340px;
}  

</style>