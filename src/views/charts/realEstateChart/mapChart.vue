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
        backgroundColor: "#404A59",
       title: {
        text: this.data.title,
        left: 'center',
         textStyle: {
            color: '#fff'
        }
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        backgroundColor:'white',
        data:this.data.type
    },
    visualMap: {
        min: 0,
        max: 800,
        left: 'left',
        top: 'bottom',
        text: ['高','低'],           // 文本，默认为数值文本
        calculable: true,
        textStyle:{
            color:'white'
        },
    },
    // toolbox: {
    //     show: true,
    //     orient: 'vertical',
    //     left: 'right',
    //     top: 'center',
    //     feature: {
    //         dataView: {readOnly: false},
    //         restore: {},
    //         saveAsImage: {}
    //     }
    // },
    series: [
        {
            name:this.data.type[0],
            type: 'map',
            mapType: 'china',
            roam: false,
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            data:this.data.value1
        },
        {
            name: this.data.type[1],
            type: 'map',
            mapType: 'china',
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            data:this.data.value2
        },
        {
            name:this.data.type[2], 
            type: 'map',
            mapType: 'china',
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            data: this.data.value3
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
  min-height: 300px;
}  

</style>