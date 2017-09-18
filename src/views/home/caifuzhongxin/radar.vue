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
        text: '基础雷达图'
    },
    tooltip: {},
    legend: {
         x : 'left',
        y:'center',   
        bottom:'1%',
        orient: 'vertical',
        data: ['预算分配', '实际开销']
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
           }
        },
        indicator: [
           { name: '销售', max: 6500},
           { name: '管理', max: 16000},
           { name: '信息技术', max: 30000},
           { name: '客服', max: 38000},
           { name: '研发', max: 52000},
           { name: '市场', max: 25000}
        ]
    },
    series: [{
        name: '预算 vs 开销',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [4300, 10000, 28000, 35000, 50000, 19000],
                name : '预算分配'
            },
             {
                value : [5000, 14000, 28000, 31000, 42000, 21000],
                name : '实际开销'
            }
        ]
    }]
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