<template>
  <div>
     <h2 style="vertical-align: center;">
  		<span>全民营销全年排名</span>
        <el-select v-model="value">
              <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label" 
                        :value="item.value">
              </el-option>
       </el-select>
    </h2>
    <el-table
    :data="data"
    :row-class-name="tableRowClassName"
    border
    style="width: 100%"
    height="600">
        <el-table-column
          prop="id"
          label="排名"
          width="140">
        </el-table-column>
        <el-table-column
          prop="class"
          label="部门"
          width="200">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="special"
          label="车位抵任务">
        </el-table-column>
        <el-table-column
          prop="success"
          label="成交套数">
        </el-table-column>
        <el-table-column
          prop="sumSuccess"
          label="成交总套数">
        </el-table-column>
        <el-table-column
          prop="other"
          label="备注">
        </el-table-column>
  </el-table>
   <el-pagination
    class="pageCon"
    layout="prev, pager, next"
    :total="50">
  </el-pagination>

  </div>
</template>
<style>
	  .el-table .info-row {
    background: #c9e5f5;
  }
  .pageCon{
    text-align: center;
    padding: 10px 0 20px 0
  }
  .el-table .danger-row {
    background: red;
  }
.titleCon{
      font-size: 20px;
  }
</style>
<script>
  export default {
  	methods: {
      tableRowClassName(row, index) {
        var self = this
        if (index === 1) {
          // return 'info-row';
        } else if ( self.value=== '0' && index === 3) {
          return 'danger-row';
        }
        return '';
      }
    },
    computed:{
       data(){
                const self = this;
                return self.tableData.filter(function(d){
                    // let is_del = false;
                    // for (let i = 0; i < self.del_list.length; i++) {
                    //     if(d.title === self.del_list[i].title){
                    //         is_del = true;
                    //         break;
                    //     }
                    // }
                    // if(!is_del){
                      // debugger
            
                      //  var selectItem =  self.options.filter(function(c){
                      //       if(c.label.indexOf(self.value)> -1){
                      //           return c
                      //       }
                      //   })
                        if(d.cid.indexOf(self.value) > -1){
                            return d;
                        }
                    // }
                })
            }
    },
    data() {
      return {
        value:'0',
        options: [{
          value: '0',
          label: '总排名'
        }, {
          value: '1',
          label: '中层以上排名'
        }, {
          value: '2',
          label: '本月新增'
        }, {
          value: '3',
          label: '尖刀团'
        }],
        tableData: [
          {
          id:1,
          cid:'013',
          class:'集团审计',
          special:'0',
          success:'19',
          sumSuccess:'19',
          name: '毛政辉',
          other: '尖刀连'
        },
        {
          id:2,
          cid:'0123',
          class:'地产高层',
          special:'0',
          success:'17',
          sumSuccess:'17',
          name: '郭利好',
          other: '尖刀团'
        },
        {
          id:3,
          cid:'013',
          class:'地产招采',
          special:'2',
          success:'14',
          sumSuccess:'16',
          name: '姬安峰',
          other: '尖刀团'
        },
        {
          id:3,
          cid:'0123',
          class:'地产高层',
          special:'3',
          success:'13',
          sumSuccess:'16',
          name: '张彩霞',
          other: '尖刀团'
        },
        {
          id:4,
          cid:'013',
          class:'独立监事',
          special:'3',
          success:'11',
          sumSuccess:'14',
          name: '李向茹',
          other: '尖刀团'
        },
        {
          id:4,
          cid:'0123',
          class:'地产高层',
          special:'3',
          success:'11',
          sumSuccess:'14',
          name: '甄树钢',
          other: '尖刀团'
        },
        {
          id:4,
          cid:'013',
          class:'党委/商学院',
          special:'0',
          success:'14',
          sumSuccess:'14',
          name: '刘三州',
          other: '尖刀团'
        },
        {
          id:5,
          cid:'013',
          class:'电商产业园',
          special:'2',
          success:'11',
          sumSuccess:'13',
          name: '张晓明',
          other: '尖刀团'
        },
        {
          id:6,
          cid:'013',
          class:'地产策划',
          special:'0',
          success:'12',
          sumSuccess:'12',
          name: '赵喆',
          other: '尖刀团'
        },
        {
          id:6,
          cid:'023',
          class:'伟钢物联财务中心',
          special:'0',
          success:'12',
          sumSuccess:'12',
          name: '王灿普',
          other: '尖刀团'
        },
        {
          id:7,
          cid:'03',
          class:'集团财务',
          special:'3',
          success:'8',
          sumSuccess:'11',
          name: '符征',
          other: '尖刀团'
        },
        {
          id:8,
          cid:'0123',
          class:'独立董事',
          special:'4',
          success:'6',
          sumSuccess:'10',
          name: '张向刚',
          other: '尖刀团'
        },
        {
          id:9,
          cid:'03',
          class:'地产预算',
          special:'1',
          success:'8',
          sumSuccess:'9',
          name: '张向刚',
          other: '尖刀团'
        },
        ]
      }
    }
  }
</script>