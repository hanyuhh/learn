<template>
  <div class="components-container" style='height:100vh'>
    <h1 style="vertical-align: center;">
  		<span>重点工作部署</span>
    	<el-date-picker v-model="week" type="week" format="yyyy 第 WW 周"  placeholder="选择周" class='week-con'></el-date-picker>
  	</h1>
    <div class='chart-container'>
      <el-row :gutter="20" style="padding: 20px;">
  			<el-col :xs="24" :sm="24" :md="24" :lg="12">
          <div class="tableCon">
             <p>
               <h3 class="tableTitle">全民营销数据统计（销售额）</h3>
             </p>
          <barc  :data='barData' cid='barchart'/>
          </div>
        </el-col>
  			<el-col :xs="24" :sm="24" :md="24" :lg="12">
           <div class="tableCon">
             <p>
               <h3 class="tableTitle">全民营销数据统计（销售量）</h3>
             </p>
             <barc1  :data='barData' cid='barchart1' />
           </div>
          </el-col>
			</el-row>
      <el-row :gutter="20" style="padding: 20px;">
        <el-col :xs="24" :sm="24" :md="24" :lg="12">
          <div class="tableCon">
             <p>
               <h3 class="tableTitle">全民营销数据统计（百分比）</h3>
             </p>
              <rowline  :data='saleProportion' cid='rowbarchart'></rowline>
           </div>
        </el-col>
  			<el-col :xs="24" :sm="24" :md="24" :lg="12">
          <div class="tableCon">
             <p>
               <h3 class="tableTitle">板块合伙人发展明细</h3>
             </p>
            <partnerc :data='partnerData' cid='partnechart1' ></partnerc>
          </div>
        </el-col>
			</el-row>
      <el-row :gutter="20" style="padding: 20px;">
  			<el-col :xs="24" :sm="24" :md="24" :lg="24"><table1></table1></el-col>
  			<el-col :xs="24" :sm="24" :md="24" :lg="24"><table4></table4></el-col>
			</el-row>
    </div>
  </div>
</template>
<script>
  import barc from './barChar';
  import barc1 from './barChar1';
  import partnerc from './partnerChart';
  import rowline from './rowBarChart'
  import table1 from './table1'
  import table2 from './table2'
  import table4 from './table4'
  import tempData from '../../../assets/js/tempData'
  export default {
    data(){
      return{
        week:new Date(),
        barData:tempData.barData,
        mapData:tempData.cityData,
        lineData:tempData.lineData,
        rowLineData:tempData.rowBarData,
        pieData:tempData.pieData,
        saleProportion:tempData.peopleSaleSum, //全民营销占比
        partnerData:tempData.partnerData
      }
    },
    components: { barc,barc1,rowline,partnerc,table1,table2,table4 },
    methods:{
    
    },
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

