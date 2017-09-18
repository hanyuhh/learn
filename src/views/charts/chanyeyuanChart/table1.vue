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
          name: '开园工作',
          address: '已于8月17日顺利完成开园启动仪式',
          address1: '完成开园来访客户转化'
        },{
          date: '2016-05-03',
          name: '仓储智能化设备及信息化系统优化，作业能力提升',
          address: '仓库流水线WCS控制系统调试完成，模拟发单',
          address1: 'A库作业发单运行'
        },{
          date: '2016-05-03',
          name: '物流公司落地配业务启动',
          address: '上周预计完成落地配线路规划，本周因开园暂未进行',
          address1: '进行落地配线路规划，尽快投入运营'
        },{
          date: '2016-05-03',
          name: '孵化器服务体系的建立',
          address: '孵化器服务标准草案已完成',
          address1: '孵化器服务标准内部讨论、修整'
        },{
          date: '2016-05-03',
          name: '梳理公司各项管理制度、作业指导书',
          address: '初稿已完成，待审核后定稿',
          address1: '产业园各部门的制度整合'
        },]
      }
    }
  }
</script>