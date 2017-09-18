<template>
  <el-table
    :data="tableData3"
    height="500"
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
          name: '67#预售证办理',
          address: '预售证资料整理完毕'
        }, {
          date: '2016-05-02',
          name: '68#地后四栋施工证、预售证',
          address: '施工证的政府手续协调'
        }, {
          date: '2016-05-04',
          name: '68#地工程进度',
          address: '38号楼三层完成30%，39号楼五层完成50%，40号楼四层完成50%，41号楼三层完成50%'
        },{
          date: '2016-05-03',
          name: '67#地工程进度',
          address: '27号楼五层完成，28号楼六层完成30%，30号楼三层完成30%，32号楼二层完成50%'
        }, {
          date: '2016-05-02',
          name: '60#.47#地',
          address: ''
        }, {
          date: '2016-05-04',
          name: '团队建设',
          address: '1、营销服务月誓师大会召开；2、销售月度目标的冲刺及人员淘和补充；3、组织优化人员调整；4、销售按揭及销售策划策略制定；  '
        },]
      }
    }
  }
</script>