<template>
  <el-table
    :data="tableData3"
    height="300"
    border
    style="width: 100%">
    <el-table-column
      prop="address"
      label="待协调计划">
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
          name: '68#地后四栋施工证、预售证',
          address: '67#地30、32#楼洛阳银行资金监管承诺书的盖章协调'
        }]
      }
    }
  }
</script>