<template>
  <el-table
    :data="tableData3"
    height="500"
    border
    style="width: 100%">
    <el-table-column
    	align="center"
        prop="name"
        label="行动计划表"
        width="120">
    <el-table-column
      prop="xiangmu"
      label="项目"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="工作内容与目的">
    </el-table-column>
    <el-table-column
      prop="date"
      label="时间节点"
      width="140">
    </el-table-column>
    <el-table-column
      prop="name"
      label="责任人"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name1"
      label="检查人"
      width="180">
    </el-table-column>
    <el-table-column
      prop="zanzhu"
      label="未完成赞助"
      width="140">
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
        	xiangmu:'实现销售额',
        	zanzhu:'200',
          date: '2017/9/15',
          name: '罗桦',
          name1: '王斯发',
          address: '3000万元'
        },{
        	xiangmu:'实现现场回款额',
        	zanzhu:'200',
          date: '2017/9/15',
          name: '罗桦',
          name1: '王斯发',
          address: '900万元'
        },{
        	xiangmu:'按揭回款',
        	zanzhu:'200',
          date: '2017/9/15',
          name: '罗桦',
          name1: '王斯发',
          address: '达到待放款金额5000万元'
        },{
        	xiangmu:'68#南四栋预售证办理',
        	zanzhu:'200',
          date: '2017/9/15',
          name: '方玉',
          name1: '王斯发',
          address: '施工许可证办理'
        },{
        	xiangmu:'67#27-28预售证办理',
        	zanzhu:'200',
          date: '2017/9/15',
          name: '方玉、王志鑫',
          name1: '王斯发',
          address: '取得预售证'
        },]
      }
    }
  }
</script>