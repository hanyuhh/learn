<template>
  <div class="components-container" style='height:100vh'>
  	<h1 style="vertical-align: center;">
  		<span>房联行</span>
    	<el-date-picker v-model="week" type="week" format="yyyy 第 WW 周" placeholder="选择周" class='week-con'></el-date-picker>
  	</h1>

    <div class='chart-container'>
    	<el-row :gutter="20" style="padding: 20px;">
  			<el-col :xs="24" :sm="24" :md="24" :lg="24">
           <div class="tableCon">
              <p>
                <h3 class="tableTitle">房联行经营指标</h3>
              </p>
              <barc :data='barData' cid='barchart'/>
           </div>
        </el-col>
			</el-row>
			<el-row :gutter="20" style="padding: 20px;">
  			<el-col :xs="24" :sm="24" :md="24" :lg="12"><table1></table1></el-col>
  			<el-col :xs="24" :sm="24" :md="24" :lg="12"><table2></table2></el-col>
			</el-row>
			<el-row :gutter="20" style="padding: 20px;">
  			<el-col :xs="24" :sm="24" :md="24" :lg="24"><table3></table3></el-col>
			</el-row>
			<el-row :gutter="20" style="padding: 20px;">
  			<el-col :xs="24" :sm="24" :md="24" :lg="24"><table4></table4></el-col>
			</el-row>
    </div>
  </div>
</template>
<script>
  import barc from './barChar'
  import table1 from './table1'
  import tempData from './tempData'
  import table2 from './table2'
  import table3 from './table3'
  import table4 from './table4'
  export default {
    data(){
      return{
        week:new Date(),
        barData:tempData.barData
      }
    },
    components: { barc,table1,table2,table3,table4 },
    mounted() {
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

