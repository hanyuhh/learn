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
        if(!this.data) return
        this.data.value.forEach(item=>{
            xAlisData.push(item.name)
            yData.push(item.saleNum)
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
           tooltip : {
        formatter: "{a} <br/>{b} : {c}%"
    },
    series: [
        {
            name: '成交',
            type: 'gauge',
            clockwise:true,
            radius:'70%',
            title: {
                text: '标题',
                x:"center",
                name:'232'
            },
            center : ['45%', '48%'], 
            splitLine:{
                show:false,
            },
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.2, '#F2382D'],[0.8, '#40C0E2'],[1, '#47D3AF']], 
                    width: 5
                }
            },
            axisTick:{
                show:false
            },
            axisLabel:{
                show:false
            },
            itemStyle:{

            },
            detail: {formatter:'{value}%'},
            data: [{value: 30}]
        }
    ]}   
      this.myChart = echarts.init(document.getElementById(this.cid))
      this.myChart.setOption(option,true);
      this._init()
      })
    }
  }
</script>
<style scoped>
.barCharts {
  min-width: 200px; 
  min-height: 300px;

}  

</style>