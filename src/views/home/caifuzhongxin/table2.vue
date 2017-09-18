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
          name: '67#预售证办理',
          address: '预售证资料政府审查及审批'
        }, {
          date: '2016-05-02',
          name: '68#地后四栋施工证、预售证',
          address: '获取施工许可证'
        }, {
          date: '2016-05-04',
          name: '68#地工程进度',
          address: '38号楼4层完成60%，39号楼7层完成10%，40号楼5层完成30%，41号楼4层完成50%'
        },{
          date: '2016-05-03',
          name: '67#地工程进度',
          address: '27号楼六层完成50%，28号楼六层完成70%，30号楼三层完成70%，32号楼二层完成'
        }, {
          date: '2016-05-02',
          name: '60#.47#地',
          address: '1、47#地地面附属物拆除队伍进场；2、60.47#深化方案的设计及外立面造型的再次上会'
        }, {
          date: '2016-05-04',
          name: '团队建设',
          address: '1、组织优化工作的实施后的人员补充；2、对营销回款工作日常支持；3、销售月度目标的冲刺及人员淘和补充；4、景观公司定岗、定薪、架构报公司审批；5、进行高密度社会合伙人、下线培训，提高访客户数量'
        }]
      }
    }
  }
</script>