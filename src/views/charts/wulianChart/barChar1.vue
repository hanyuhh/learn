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
        var yData1 = []
        var value  = [] //value
        var seriesItem = {}
        var seriesItem1 = {}
        this.data.value.forEach(item=>{
            xAlisData.push(item.name)
            yData.push(item.realValue)
            yData1.push(item.planValue)
        })
         seriesItem1.name = '预计销售量（万吨）',
        seriesItem1.type = 'line',
        seriesItem1.lineStyle ={ normal: {width : 5}},
        seriesItem1.data = yData1,
        seriesItem1.label= {
                        normal: {
                            show: true,
                            formatter:'{c}万吨',
                            position: 'top'
                        }
                    },
        seriesItem1.markLine ={
          label:{
            normal:{
              formatter:'预计{c}万吨'
            }
          },
            lineStyle: {
                normal: {
                    type: 'dashed',
                }
            },
            data : [
                  {
                      name: 'Y 轴值为 100 的水平线',
                      yAxis: 30
                  },
            ]
        }
        seriesItem.name = '实际销售量（万吨）',
        seriesItem.type = 'line',
        seriesItem.lineStyle ={ normal: {width : 5}},
        seriesItem.data = yData,
        seriesItem.label= {
                        normal: {
                            show: true,
                            formatter:'{c}万吨',
                            position: 'top'
                        }
                    },
        seriesItem.markLine ={
          label:{
            normal:{
              formatter:'实际{c}万吨'
            }
          },
            lineStyle: {
                normal: {
                    type: 'dashed',
                }
            },
            data : [
                  {
                      name: 'Y 轴值为 100 的水平线',
                      yAxis: 25
                  },
            ]
        }
        this.series.push(seriesItem,seriesItem1)
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
             grid: {
                position: 'left',
                },
            tooltip: {
                trigger: 'axis',
                formatter:'钢材销售量：<br/>预计：{c}万吨<br/>实际：{c1}万吨',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
        },
     legend: {
        data:['预计销售量（万吨）','实际销售量（万吨）'],   
        bottom:'1%',
  //      selected: {
  //  		'月累计成交套数': true,
  //  		'周新增成交套数': false
  //		}
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
      yAxis: [{
        name: '吨',
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
.barCharts {
  min-width: 300px; 
  min-height: 340px;

}  

</style>