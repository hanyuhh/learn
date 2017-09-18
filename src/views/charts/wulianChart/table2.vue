<template>
  <el-table
    :data="tableData3"
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
          name: '沐威科技、伟钢物联、京瞾供应链组织架构与定岗定编、薪酬梳理      ',
          address: '.沐威科技、伟钢物联、京瞾供应链组织架构与定岗定编、薪酬梳理'
        }, {
          date: '2016-05-02',
          name: '2.开展生意宝业务开展',
          address: '生意宝授信1亿完成'
        }, {
          date: '2016-05-04',
          name: '1.京瞾供应链基金备案并路演       ',
          address: '供应链基金路演'
        },{
          date: '2016-05-03',
          name: '自营业务内部信息系统全面运行 及系统优化 ',
          address: '自营业务内部信息系统全面运行及问题修改'
        },]
      }
    }
  }
</script>