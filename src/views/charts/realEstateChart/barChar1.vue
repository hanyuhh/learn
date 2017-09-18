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
            var itemData = {}
            var itemStyle = {
                        normal:{
                          color:'#ef5c4c'
                        },
                      }
            if(item.saleNum <0) itemStyle.normal.color = '#3398DB'
            itemData.value = item.saleNum
            itemData.itemStyle= itemStyle
            yData.push(itemData)
        })
        seriesItem.name = '销售量（栋）',
        seriesItem.type = 'bar',
        seriesItem.data = yData,
        seriesItem.label= {
                        normal: {
                            show: true,
                            position: 'top'
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
            // color: ['#3398DB'],
             grid: {
                top: '2%',
                },
            tooltip: {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
    },
      xAxis: [{
        name: '板块',
        type: 'category',
         "axisLine": {
            lineStyle: {
                color: 'black'
            }
        },
        data: this.xAlisData,
        nameTextStyle:{
          color:'red'
        },
         axisLabel: {
          textStyle: {
            color: 'black'
          }
        },
      }],
      yAxis: [
        {
        name: '套',
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