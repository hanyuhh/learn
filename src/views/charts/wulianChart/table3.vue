<template>
  <el-table
    :data="tableData3"
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
          name: '',
          address: '无'
        }]
      }
    }
  }
</script>