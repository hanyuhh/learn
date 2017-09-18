<template>
    <div :id="cid" class="lineCharts"></div>
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
      }
    },
    methods: {
      solveData(){
        if(this.data.length <= 0) return
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
        backgroundColor: "#404A59",
         title: {
        text: this.data.title
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        show:false,
        data:this.data.type
    },
    grid: {
        left: '2%',
        right: '8%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis:{
        name: this.data.xTitle,
        type: 'category',
         "axisLine": {
            lineStyle: {
                color: 'white'
            }
        },
        data: this.xData,
        nameTextStyle:{
          color:'red'
        },
         axisLabel: {
          textStyle: {
            color: 'white'
          }
        },
      },
    yAxis: {
        name: this.data.yTitle,
        type: 'value',
        "axisLine": {
            lineStyle: {
                color: '#fff'
            }
        },
        axisLabel: {
          textStyle: {
            color: 'white'
          }
        },
        nameTextStyle:{
          color:'white'
        }
      },
    series: [
        {
            name:this.data.type,
            type:'line',
            stack: '总量',
            data:this.yData
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
.lineCharts {
  min-width: 300px; 
  min-height: 300px;
}  

</style>