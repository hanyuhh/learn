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
            xAlisData.push(item.name)
            yData.push(item.num)
        })
        seriesItem.name = '进度',
        seriesItem.type = 'bar',
        seriesItem.data = yData,
        seriesItem.label= {
                        normal: {
                            show: true,
                            position: 'right'
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
             color:['#61A0A8'],
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
        formatter: "{b} : {c} %",
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
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
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