<template>
  <el-table
    :data="tableData3"
    border
    style="width: 100%">
    <el-table-column
    	align="center"
        prop="name"
        label="上周完成"
        width="120">
    <el-table-column
      prop="name"
      label="管理指标"
      width="220">
    </el-table-column>
    <el-table-column
      prop="address"
      label="完成重点">
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
          name: '团队建设与组织优化',
          address: '高管团队组建完毕：财务总监、人力行政总监、风控总监、自营店铺总监、物流总监入职'
        }, {
          date: '2016-05-02',
          name: '生意宝供应链金融',
          address: '1.第一、二阶段资料提交'
        }, {
          date: '2016-05-04',
          name: '京瞾供应链基金',
          address: '1.京瞾供应链产品设计               2.集团内部路演'
        },{
          date: '2016-05-03',
          name: '内部系统运营',
          address: '1.内部系统试运行                     2.收集反馈问题并持续优化'
        }, ]
      }
    }
  }
</script>