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
        	xiangmu:'线上平台开发',
        	zanzhu:'100元',
          date: '2017/9/15',
          name: '杜玉刚',
          name1: '黄四平',
          address: '业务管控系统招标确定单位，启动开发'
        },{
        	xiangmu:'线上平台开发',
        	zanzhu:'100元',
          date: '2017/9/17',
          name: '张廷雷',
          name1: '黄四平',
          address: '二手房、新房、租房、金融更能优化'
        },{
        	xiangmu:'线上平台开发',
        	zanzhu:'100元',
          date: '2017/9/17',
          name: '杜玉刚',
          name1: '黄四平',
          address: '装修、自媒体开发思路确定'
        },{
        	xiangmu:'线上平台开发',
        	zanzhu:'100元',
          date: '2017/9/17',
          name: '杜玉刚',
          name1: '黄四平',
          address: '共享营销系统开发思路确定'
        },{
        	xiangmu:'团队发展',
        	zanzhu:'100元',
          date: '2017/9/17',
          name: '苏超',
          name1: '黄四平',
          address: '新增25人'
        },{
        	xiangmu:'共享营销体系设计  ',
        	zanzhu:'100元',
          date: '2017/9/17',
          name: '杜玉刚',
          name1: '黄四平',
          address: '方案定稿'
        },{
        	xiangmu:'房联行组织架构梳理',
        	zanzhu:'100元',
          date: '2017/9/17',
          name: '苏超',
          name1: '黄四平',
          address: '优化定稿'
        },{
        	xiangmu:'薪酬体系、晋升通道设计',
        	zanzhu:'100元',
          date: '2017/9/17',
          name: '苏超',
          name1: '黄四平',
          address: '设计定稿'
        },{
        	xiangmu:'类加盟责任制设计',
        	zanzhu:'100元',
          date: '2017/9/17',
          name: '杜玉刚',
          name1: '黄四平',
          address: '初稿完成'
        },{
        	xiangmu:'强化管控',
        	zanzhu:'100元',
          date: '2017/9/17',
          name: '桑红印',
          name1: '黄四平',
          address: '信息安全、服务标准、培训计划、会议体系，形成制度'
        },{
        	xiangmu:'二期门店发展',
        	zanzhu:'100元',
          date: '2017/9/17',
          name: '桑红印',
          name1: '黄四平',
          address: '已签约门店装修'
        },{
        	xiangmu:'二期门店发展',
        	zanzhu:'100元',
          date: '2017/9/17',
          name: '王少甫',
          name1: '黄四平',
          address: '经营手续及时办理'
        },]
      }
    }
  }
</script>