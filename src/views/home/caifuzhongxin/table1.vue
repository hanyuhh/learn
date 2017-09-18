<template>
  <el-table
    :data="tableData3"
    height="500"
    border
    style="width: 100%">
    <el-table-column
    	align="center"
        prop="name"
        label="上周重点工作完成情况及本周重点工作部署"
        width="120">
    <el-table-column
      prop="name"
      label="管理指标"
      width="220">
    </el-table-column>
    <el-table-column
      prop="address"
      label="上周实际完成重点">
    </el-table-column>
    <el-table-column
      prop="address1"
      label="本周重点工作部署">
    </el-table-column>
   </el-table-column>
  </el-table>
</template>
<style>
	  .el-table .info-row {
    background: #c9e5f5;
  }

  .el-table .danger-row {
    background: red;
  }
</style>
<script>
  export default {
//	methods: {
//    tableRowClassName(row, index) {
//      if (index === 1) {
//        return 'info-row';
//      } else if (index === 3) {
//        return 'danger-row';
//      }
//      return '';
//    }
//  },
    data() {
      return {
        tableData3: [{
          date: '2016-05-03',
          name: '招聘',
          address: '面试9人、确定录用1人、持续跟进2人',
          address1: '筛选简历200份以上，完成录用1人'
        },{
          date: '2016-05-03',
          name: '招聘',
          address: '招聘H5的制作',
          address1: '校园招聘的洽谈'
        },{
          date: '2016-05-03',
          name: '制度建设',
          address: '1、人才推荐制度的下发',
          address1: '1、VI设计方案初稿'
        },{
          date: '2016-05-03',
          name: '制度建设',
          address: '2、KPI指标的提取上交',
          address1: '2、财富中心内部工作计划报集团审核'
        },{
          date: '2016-05-03',
          name: '制度建设',
          address: '3、人事档案及行政档案的完善',
          address1: '3、转正标准的上报'
        },{
          date: '2016-05-03',
          name: '制度建设',
          address: '4、广告发布制度的初稿试运行',
          address1: ''
        },]
      }
    }
  }
</script>