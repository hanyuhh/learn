<template>
  <div class="components-container" style='height:100vh'>
  	<h1 style="vertical-align: center;">
  		<span>产业园</span>
    	<el-date-picker v-model="week" type="week" format="yyyy 第 WW 周" placeholder="选择周" class='week-con'></el-date-picker>
  	</h1>

    <div class='chart-container'>
    	<el-row :gutter="20" style="padding: 20px;">
        <h1 style="vertical-align: center;">
          <span>全员营销</span>
        </h1>
  			<el-col :xs="24" :sm="24" :md="24" :lg="12">
           <div class="tableCon">
             <p>
               <h3 class="tableTitle">全员营销完成情况</h3>
             </p>
             <barc :data='barData' cid='barchart'/>
             <!-- <chart :option='allSaleOption'/> -->
           </div>
        </el-col>
  			<el-col :xs="24" :sm="24" :md="24" :lg="12">
           <div class="tableCon">
             <p>
               <h3 class="tableTitle">发展线下完成情况</h3>
             </p>
             <mapc :data='mapData' cid='mapchart'></mapc>
           </div>
        </el-col>
			</el-row>
			<el-row :gutter="20" style="padding: 20px;">
        <h1 style="vertical-align: center;">
          <span>经营指标</span>
        </h1>
  			<el-col :xs="24" :sm="24" :md="24" :lg="12">
           <div class="tableCon">
             <p>
               <h3 class="tableTitle">云仓招商</h3>
             </p>
             <linec :data='lineData' cid='linechart'></linec>
           </div>
        </el-col>
  			<el-col :xs="24" :sm="24" :md="24" :lg="12">
          <div class="tableCon">
             <p>
               <h3 class="tableTitle">孵化器招商</h3>
             </p>
            <rowline  :data='rowLineData' cid='rowbarchart'/>
          </div>
        </el-col>
			</el-row>
			<el-row :gutter="20" style="padding: 20px;">
  			<el-col :xs="24" :sm="24" :md="24" :lg="12">
          <div class="tableCon">
             <p>
               <h3 class="tableTitle">云仓发单量</h3>
             </p>
            <piec :data='pieData' cid='piechart'></piec>
          </div>
        </el-col>
        	<el-col :xs="24" :sm="24" :md="24" :lg="12">
          <div class="tableCon">
             <p>
               <h3 class="tableTitle">电商营业额</h3>
             </p>
            <piec1 :data='pieData' cid='salechart'></piec1>
          </div>
        </el-col>
  			<!--<el-col :xs="24" :sm="24" :md="24" :lg="12"><radar :data='pieData' cid='radarchart'></radar></el-col>-->
			</el-row>
      <el-row :gutter="20" style="padding: 20px;">
  			<el-col :xs="24" :sm="24" :md="24" :lg="12">
          <div class="tableCon">
             <p>
               <h3 class="tableTitle">物流营业额</h3>
             </p>
            <piec3 :data='pieData' cid='wuliuchart'></piec3>
          </div>
        </el-col>
			</el-row>
			<el-row :gutter="20" style="padding: 20px;">
  			<el-col :xs="24" :sm="24" :md="24" :lg="24"><table1></table1></el-col>
			</el-row>
			<el-row :gutter="20" style="padding: 20px;">
  			<el-col :xs="24" :sm="24" :md="24" :lg="24"><table3></table3></el-col>
			</el-row>
			<el-row :gutter="20" style="padding: 20px;">
  			<!-- <el-col :xs="24" :sm="24" :md="24" :lg="24"><table4></table4></el-col> -->
			</el-row>
    </div>
  </div>
</template>
<script>
  import barc from './barChar';
  import mapc from './mapChart'
  import linec  from './lineChart'
  import rowline from './rowBarChart'
  import piec   from './pieChart'
  import piec1 from './pieChart1'
  import piec3 from './pieChart3'
  import radar from './radar'
  import tempData from './tempData'
  import table1 from './table1'
  import table2 from './table2'
  import table3 from './table3'
  import table4 from './table4'
  import chart from '../../../components/Charts/index'
  export default {
    data(){
      return{
        allSaleOption:{},//全民营销数据统计（销售额）
        allSaleOptionData:tempData.barData,
        week:new Date(),
        barData:tempData.barData,
        mapData:tempData.citydata,
        lineData:tempData.lineData,
        rowLineData:tempData.rowBarData,
        pieData:tempData.pieData,
      }
    },
    components: { barc,mapc,linec,rowline,piec,radar,table1,table2,table3,table4,piec1,piec3,chart },
    methods:{
      //全民营销数据统计（销售额）
      setAllSale(){
        var data = this.getAllSaleData()
        var option = {}
        option.color = ['#C23531','#3398DB'],
        option.grid = {top:'2%'}
        option.tooltip = {trigger:'axis'}
        option.legend = {
                        data: data.legend,
                        bottom:'1%'
        }
        option.toolbox = {show:false}
        option.feature = {
                          dataZoom: {
                              yAxisIndex: 'none'
                          },
                          dataView: {readOnly: false},
                          magicType: {type: ['line', 'bar']},
                          restore: {},
                          saveAsImage: {}
        }
        option.xAxis = {
                          type: 'category',
                  //      boundaryGap: false,
                          data: data.xAxis
        }
        option.yAxis = {
              type: 'value',
              axisLabel: {
                  formatter: '{value} 万'
              }
        }    
        option.series = data.series
        this.allSaleOption = option
      },
      getAllSaleData(){
        //处理数据
        var data = this.allSaleOptionData //获取数据
        //  this.$fetch({
        //         url,
        //         method: 'post',
        //         data: fmData
        //     }).then(resData=>{
        //         that.loading = 2;
        //         that.$emit('crop-upload-success', resData.data);
        //     }).catch(err=>{
        //         if (that.value) {
        //                 that.loading = 3;
        //                 that.hasError = true;
        //                 that.errorMsg = lang.fail;
        //                 that.$emit('crop-upload-fail', err, field, ki);
        //             }
        //     });

        var solveData = {}
            solveData.series = []
            solveData.xAxis = []
        var seriesItem1 = {}
            seriesItem1.name = data.class[0]
            seriesItem1.type = 'line'
            seriesItem1.data = []
            seriesItem1.lineStyle = {normal: {width : 5}}
            seriesItem1.itemStyle = { normal: {label : {show: true}}}
        var seriesItem2 = {}
            seriesItem2.name = data.class[1]
            seriesItem2.type = 'bar'
            seriesItem2.data = []
            seriesItem2.itemStyle = { normal: {label : {show: true}}}
            solveData.legend = data.class
            data.value.forEach(item=>{
              solveData.xAxis.push(item.name)
              seriesItem1.data.push(item.value)
              seriesItem2.data.push(item.target)
            })
            solveData.series.push(seriesItem1,seriesItem2)
            return solveData
      }
    },
    created() {
      //全民营销数据统计（销售额）
          this.setAllSale()
    }
  };
  </script>
  <style scoped>
  .week-con{
    margin:10px
  }
.chart-container{
  display:block;
  /*background:#0D182B*/
}
</style>

