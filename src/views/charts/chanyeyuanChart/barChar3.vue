<template>
    <div :id="cid" class="mapChart"></div>
</template>
<script>
  import echarts from 'echarts'
  import  'echarts/map/js/china'
  export default {
    props:['cid','data'],
    data() {
      return {
        chart: null,
        chart1:null,
      }
    },
    methods: {
      _init() {
        window.addEventListener('resize', function() {
            this.myChart.resize()
        }.bind(this))
     }
    },
    mounted() {
    
       // 基于准备好的dom，初始化echarts实例
    var option = { 
    	color: ['#C23531','#3398DB'],
    tooltip: {
        trigger: 'axis',
    },
    legend: {
        data:['累计发展下线总人数','周新增发展下线人数'],   
        bottom:'1%',
    },
    // toolbox: {
    //     show: true,
    //     feature: {
    //         dataZoom: {
    //             yAxisIndex: 'none'
    //         },
    //         dataView: {readOnly: false},
    //         magicType: {type: ['line', 'bar']},
    //         restore: {},
    //         saveAsImage: {}
    //     }
    // },
    xAxis:  {
        type: 'category',
        data: ['第一周','第二周 ','第三周','第四周']
    },
    yAxis: [
    	{
            type: 'value',
            name: '累计发展下线总人数',
            min: 2400,
//          max: 25,
//          interval: 5,
            axisLabel: {
                formatter: '{value} 人'
            }
        },
    	{
        	type: 'value',
        	name:'周新增发展下线人数',
        	min:0,
        	axisLabel: {
            	formatter: '{value} 人'
        	}
    	}],
    series: [
        {
            name:'累计发展下线总人数',
            type:'line',
            data:[2486, 2588, 2665, 2765],
            lineStyle : { normal: {width : 5}},
            itemStyle : { normal: {label : {show: true}}}
           
        },
        {
            name:'周新增发展下线人数',
            yAxisIndex: 1,
            type:'bar',
            data:[86, 102, 77, 100],
            itemStyle : { normal: {label : {show: true}}}
        }
    ]
    }
       this.$nextTick(function() { 
               this.myChart = echarts.init(document.getElementById(this.cid))
                this.myChart.setOption(option);
                this._init()
            })  
  }
  }
</script>
<style scoped>
.mapChart {
  min-width: 300px;
  min-height: 340px;
}  

</style>