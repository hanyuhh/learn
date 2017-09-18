<template>
  <el-table
    :data="tableData3"
    height="500"
    border
    style="width: 100%">
    <el-table-column
    	align="center"
        prop="name"
        label="本周计划"
        width="120">
    <el-table-column
      prop="name"
      label="任务"
      width="200">
    </el-table-column>
    <el-table-column
      prop="address"
      label="详情">
    </el-table-column>
   </el-table-column>
  </el-table>
</template>
<style>
</style>
<script>
  export default {
    data() {
      return {
        tableData3: [{
          date: '2016-05-03',
          name: '平台业务管控系统开发公司整合3家',
          address: '管控系统开发的招标，合同签订，开发启动'
        }, {
          date: '2016-05-02',
          name: '合同签订、启动装修',
          address: '线上平台新房、租房、金融模块优化'
        }, {
          date: '2016-05-04',
          name: '结合行政部经纪部开始办理',
          address: '线上装修、自媒体开发思路确定'
        },{
          date: '2016-05-03',
          name: '二期门店城管装修手续办理',
          address: '共享营销开发思路确定'
        }, {
          date: '2016-05-02',
          name: '团队发展新增23人',
          address: '团队发展新增25人'
        }, {
          date: '2016-05-04',
          name: '独家房源政策方案审批落地执行',
          address: '房联行共享营销体系方案定稿'
        }, {
          date: '2016-05-04',
          name: '房联行共享营销体系设计初稿完成',
          address: '房联行组织架构梳理定稿'
        }, {
          date: '2016-05-04',
          name: '薪酬体系完善、晋升通道设计初稿完成',
          address: '薪酬体系、晋升通道方案定稿'
        }, {
          date: '2016-05-04',
          name: '类加盟责任制设计研讨会筹备执行',
          address: '类加盟责任制初稿完成'
        }, {
          date: '2016-05-04',
          name: '房联行总部负一楼整改完成',
          address: '强化管控：信息安全、服务标准、培训计划、会议体系'
        }, {
          date: '2016-05-04',
          name: '房联行总部办公区VI体系制作安装完成',
          address: '已签约门店装修'
        }]
      }
    }
  }
</script>