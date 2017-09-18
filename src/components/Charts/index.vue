<template>
    <div :id="cid" class="barCharts"></div>
    
</template>
<script>
  import echarts from 'echarts'
  export default {
    props:[
      'option'
    ],
    data() {
      return {
        cid:String(10*Math.random()),
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
       //初始化echarts实例
        this.$nextTick(function(){
            this.myChart = echarts.init(document.getElementById(this.cid))
            console.log(this.option)
            this.myChart.setOption( this.option);
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