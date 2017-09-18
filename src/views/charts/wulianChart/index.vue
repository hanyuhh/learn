<template>
  <div class="components-container" style='height:100vh'>
    <h1 style="vertical-align: center;">
  		<span>沐威科技</span>
    	<el-date-picker v-model="week" type="week" format="yyyy 第 WW 周" placeholder="选择周" class='week-con'></el-date-picker>
  	</h1>
    <div class='chart-container'>
      <el-row :gutter="20" style="padding: 20px;">
  			<el-col :xs="24" :sm="24" :md="24" :lg="12">
           <div class="tableCon">
             <p>
               <h3 class="tableTitle">全员营销完成情况</h3>
             </p>
              <el-row :gutter="20" style="padding: 20px;">
                  <el-col :xs="24" :sm="24" :md="24" :lg="8">
                      <gauge cid="gauge"></gauge>
                      <h3 class="okCon">成交比</h3>
                  </el-col>    
                  <el-col :xs="24" :sm="24" :md="24" :lg="16">
                    <p v-for="item in okSale" :key="item.index" class="progressCon">
                      <span class="progress-text">
                        {{item.name}}
                      </span> 
                      <span class="progress-last-text">
                                {{item.value}}套
                      </span> 
                       <el-progress  :class="item.id"  :lg="5" :show-text="false" :text-inside="true" :stroke-width="18" :percentage="item.value"/> 
                    </p>
                    <p class="progressCon">
                        <span class="progress-text">
                        剩余天数
                        </span> 
                        <span class="progress-last-text">
                                  12天
                        </span> 
                        <el-progress  class="progress3"  :lg="5" :show-text="false" :text-inside="true" :stroke-width="18" :percentage="12"/> 

                    </p>
                  </el-col>
              </el-row>
            </div>
        </el-col>
  			<el-col :xs="24" :sm="24" :md="24" :lg="12">
          <div class="tableCon">
            <p>
                <h3 class="tableTitle">发展下线完成情况</h3>
            </p>
            <barc3  cid='barchart3' />
          </div>
        </el-col>
	</el-row>
      <el-row :gutter="20" style="padding: 20px;">
	    <el-col :xs="24" :sm="24" :md="24" :lg="12">
          <div class="tableCon">
            <p>
                <h3 class="tableTitle">9月物联钢材销售情况</h3>
            </p>
            <barc1  :data='barData' cid='barchart1' />
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
    </div>
  </div>
</template>
<script>
  import gauge from './gauge'; //仪表盘
  import barc from './barChar';
  import barc1 from './barChar1';
  import barc3 from './barChar3';
  import partnerc from './partnerChart';
  import linec  from './lineChart'
  import rowline from './rowBarChart'
  import piec   from './pieChart'
  import radar from './radar'
  import table1 from './table1'
  import table2 from './table2'
  import table3 from './table3'
  import tempData from '../../../assets/js/tempData'
  export default {
    data(){
      return{
        week:new Date(),
        barData:{
           value:[
              {name:'第1周',realValue:'5',planValue:'8'},
              {name:'第2周',realValue:'6',planValue:'9'},
              {name:'第3周',realValue:'10',planValue:'25'},
              {name:'第4周',realValue:'25',planValue:'30'},
           ]
        },
        mapData:tempData.cityData,
        lineData:tempData.lineData,
        rowLineData:tempData.rowBarData,
        pieData:tempData.pieData,
        saleProportion:tempData.peopleSaleSum, //全民营销占比
        partnerData:tempData.partnerData,
        okSale:[
          {id:'progress',name:'预计成交量',value:100},
          {id:'progress1',name:'实际成交量',value:75},
          {id:'progress2',name:'本周成交量',value:25},
          ]
      }
    },
    components: { barc,barc1,linec,rowline,piec,radar,partnerc,table1,table2,table3,gauge,barc3 },
    mounted() {
    }
  };
  </script>
  <style>
  .progress{
  width:70%;
  float: right;
}
.progress1{
  width:70%;
  float: right;
}
.progress2{
  width:70%;
  float: right;
}
.progress3{
  width:70%;
  float: right;
}
   .progress .el-progress-bar__inner{
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background-color:#77D7F0;
    text-align: right;
    border-radius: 100px;
    line-height: 1;
}
.progress1 .el-progress-bar__inner{
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background-color:#EB312D;
    text-align: right;
    border-radius: 100px;
    line-height: 1;
}
.progress2 .el-progress-bar__inner{
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background-color:#FCDD6C;
    text-align: right;
    border-radius: 100px;
    line-height: 1;
}
.progress3 .el-progress-bar__inner{
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background-color:#9388DE;
    text-align: right;
    border-radius: 100px;
    line-height: 1;
}



</style>
  <style scoped>
   .week-con{
    margin:10px
  }
.chart-container{
  display:block;
  /*background:#0D182B*/
}
.progress-text{
  float: left;
  padding-right: 10px
}
.progressCon{
  padding:25px 0
}
.tableCon{
  border:1px solid #D3D4D5;
  border-radius: 5px;
  width:100%
}
.tableTitle{
  margin: 0  20px;
  padding:0 10px 10px 0;
  border-bottom: 2px solid #F2F2F2
}
.okCon{
  position: absolute;
  bottom: 18%;
  left:13%
}
.progress-last-text{
  float:right;padding-left:5px;
  width:50px
}
</style>

