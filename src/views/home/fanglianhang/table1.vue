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
          name: '平台业务管控系统开发公司整合3家',
          address: '已整合3家'
        }, {
          date: '2016-05-02',
          name: '合同签订、启动装修',
          address: '装修单位已确定'
        }, {
          date: '2016-05-04',
          name: '结合行政部经纪部开始办理',
          address: '持续办理'
        },{
          date: '2016-05-03',
          name: '二期门店城管装修手续办理',
          address: '持续办理'
        }, {
          date: '2016-05-02',
          name: '团队发展新增23人',
          address: '新增18人'
        }, {
          date: '2016-05-04',
          name: '独家房源政策方案审批落地执行',
          address: '已审批落地执行'
        }, {
          date: '2016-05-04',
          name: '房联行共享营销体系设计初稿完成',
          address: '初稿完成并汇报'
        }, {
          date: '2016-05-04',
          name: '薪酬体系完善、晋升通道设计初稿完成',
          address: '初稿完成并汇报'
        }, {
          date: '2016-05-04',
          name: '类加盟责任制设计研讨会筹备执行',
          address: '初稿完成并汇报'
        }, {
          date: '2016-05-04',
          name: '房联行总部负一楼整改完成',
          address: '已整改完成'
        }, {
          date: '2016-05-04',
          name: '房联行总部办公区VI体系制作安装完成',
          address: '已制作安装完成'
        },]
      }
    }
  }
</script>