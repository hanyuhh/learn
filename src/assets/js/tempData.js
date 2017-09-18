var tempData = {
    list: [
          {"id":'0', "date": "1988-04-25 12:00", "name": "侯秀英", "className": "新闻",'edit':false}, 
          {"id":'1', "date": "2001-02-01 12:00", "name": "李丽", "className": "首页",'edit':false }, 
          {"id":'2', "date": "1975-03-31 12:00", "name": "姚静", "className": "详情",'edit':false }, 
          {"id":'3', "date": "1985-12-03 12:00", "name": "毛丽", "className": "新闻" ,'edit':false}, 
          {"id":'4', "date": "1987-10-02", "name": "龚明", "className": "新闻",'edit':false }, 
          {"id":'5', "date": "1992-07-09", "name": "林军", "className": "新闻" ,'edit':false}, 
          {"id":'6', "date": "2011-09-05", "name": "龚军", "className": "新闻",'edit':false }, 
          {"id":'7', "date": "1992-08-20", "name": "于勇", "className": "新闻" ,'edit':false},
          {"id":'8', "date": "1979-10-01", "name": "杨娜", "className": "首页",'edit':false }, 
          {"id":'9', "date": "1989-05-07", "name": "贺娜", "className": "首页",'edit':false },
          {"id":'10', "date": "1988-04-25 12:00", "name": "侯秀英", "className": "新闻" ,'edit':false}, 
          {"id":'11', "date": "2001-02-01 12:00", "name": "李丽", "className": "首页" ,'edit':false}, 
          {"id":'12', "date": "1975-03-31 12:00", "name": "姚静", "className": "详情",'edit':false }, 
          {"id":'13', "date": "1985-12-03 12:00", "name": "毛丽", "className": "新闻" ,'edit':false}, 
          {"id":'14', "date": "1987-10-02", "name": "龚明", "className": "新闻" ,'edit':false}, 
          {"id":'15', "date": "1992-07-09", "name": "林军", "className": "新闻",'edit':false }, 
          {"id":'16', "date": "2011-09-05", "name": "龚军", "className": "新闻" ,'edit':false}, 
          {"id":'17', "date": "1992-08-20", "name": "于勇", "className": "新闻" ,'edit':false},
          {"id":'18', "date": "1979-10-01", "name": "杨娜", "className": "首页" ,'edit':false}, 
          {"id":'19', "date": "1989-05-07", "name": "贺娜", "className": "首页" ,'edit':false}
    ],
    pieData:{
          title:'寝室学习氛围情况调查',
          xAxis:['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          value:[
                {value:26, name:'学习氛围差'},
                {value:31, name:'学习氛围一般'},
                {value:8, name:'学习氛围很好'}  
          ],
    },
    lineData:{
          title:'',
          value:[
                {}
          ]
    },
    peopleSaleSum:{
          title:'全民营销数据统计（百分比）',
          value:[
            {
                  name: '时间进度',
                  num:'90.32'
            },
            {
                  name: '集团',
                  num:'133'
            },
            {
                  name: '物联',
                  num:'0'
            },
            {
                  name: '地产',
                  num:'83'
            },
            {
                  name: '产业园',
                  num:'0'
            }
      ],
    },
    partnerData:{
      title:'板块合伙人发展明细',
      type:['累计数量','新增数量'],
      value:[
        {
              name: '物联',
              old:'1158',
              new:'54'
        },
        {
            name: '地产',
            old:'2588',
            new:'102'
      },
      {
            name: '产业园',
            old:'856',
            new:'19'
      },
      {
            name: '集团',
            old:'902',
            new:'32'
      },
      {
            name: '销售',
            old:'328',
            new:'123'
      },
      {
            name: '社会',
            old:'6630',
            new:'22'
      },
       
  ],

    },
    barData:{
      title:'全民营销数据统计（销售额）',
      type:'销量',
      class:['目标销售额','实际销售额'],
      xTitle:'板块',
      yTitle:'万元',
      value:[
            {
                  name: '物联',
                  value: 156, //实际销售额
                  target:300,// 目标销售额
                  saleNum:-4 //销售数量（套）
            },
            {name: '集团',value: 185,target:200 ,saleNum:1},
            {name: '地产',value: 555,target:100 ,saleNum:-1},
            {name: '产业园',value: 222,target:300 ,saleNum:-2},
            {name: '社会',value: 33,target:500,saleNum:9 },
            
      ],
      series:[
            {
                  name:'目标销售额',
                  type:'bar',
                  data:[400,280,520,200,2600],
                  label: {
                        normal: {
                            show: true,
                            position: 'top',
                            formatter: '{c}'
                        }
                    },
                  
            },
            {
                  name:'实际营销额',
                  type:'bar',
                  data:[0,352,432,0,4155],
                  label: {
                        normal: {
                            show: true,
                            position: 'top',
                            formatter: '{c}'
                        }
                    },
            },
      ]
    },
    lineData:{
      title:'2017销售额趋势',
      type:'金额',
      xTitle:'月份',
      yTitle:'金额/千万',
      value:[
            {name: '一月',value: 156 },
            {name: '二月',value: 185 },
            {name: '三月',value: 555 },
            {name: '四月',value: 222 },
            {name: '五月',value: 555 },
            {name: '六月',value: 33 },
            {name: '七月',value: 77 },
            {name: '八月',value: 88 },
            {name: '九月',value: 88 },
            {name: '十月',value: 33 },
            {name: '十一月',value: 88 },
            {name: '十二月',value: 99 },
      ]
    },
    rowBarData:{
      title:'2017销售排名',
      type:'金额',
      legend:'2017',
      xTitle:'月份',
      yTitle:'金额/千万',
      value:[
            {name: '小明',value: 156 },
            {name: '小明1',value: 185 },
            {name: '小明2',value: 555 },
            {name: '小红',value: 222 },
            {name: '小白',value: 555 },
            {name: '小月',value: 33 },
            {name: '喷彭',value: 77 },
            {name: '红红',value: 88 },
            {name: '小岳岳',value: 88 },
      ]
    },
    pieData:{
      title:'合同类型分布',
      type:'类型',
      legend:'2017',
      xTitle:null,
      yTitle:null,
      value:[
            {name: '贷款',value: 444 },
            {name: '服务协议',value: 777 },
            {name: '一次性付款',value: 333 },
            {name: '长期协议',value: 877 },
            {name: '购买合同',value: 577 },
      ]
    },
    cityData:{
          title:'全国二手房交易分布图',
          type:['一季度','二季度','三季度'],
          value1:[
                {name: '北京',value: 156 },
                {name: '天津',value: 185 },
                {name: '上海',value: 555 },
                {name: '重庆',value: 222 },
                {name: '河北',value: 555 },
                {name: '河南',value: 33 },
                {name: '云南',value: 77 },
                {name: '辽宁',value: 88 },
                {name: '黑龙江',value: 88 },
                {name: '湖南',value: 33 },
                {name: '安徽',value: 88 },
                {name: '山东',value: 99 },
                {name: '新疆',value: 99 },
                {name: '江苏',value: 88 },
                {name: '浙江',value: 66 },
                {name: '江西',value: 185 },
                {name: '湖北',value: 55 },
                {name: '广西',value: 185 },
                {name: '甘肃',value: 111 },
                {name: '山西',value: 185 },
                {name: '内蒙古',value: 77 },
                {name: '陕西',value: 185 },
                {name: '吉林',value: 55 },
                {name: '福建',value: 185 },
                {name: '贵州',value: 25 },
                {name: '广东',value: 185 },
                {name: '青海',value: 75 },
                {name: '西藏',value: 185 },
                {name: '四川',value: 185 },
                {name: '宁夏',value: 255 },
                {name: '海南',value: 333 },
                {name: '台湾',value: 185 },
                {name: '香港',value: 185 },
                {name: '澳门',value: 185 }
          ],
          value2:[
                {name: '北京',value: 156 },
                {name: '天津',value: 185 },
                {name: '上海',value: 555 },
                {name: '重庆',value: 222 },
                {name: '河北',value: 555 },
                {name: '河南',value: 33 },
                {name: '云南',value: 77 },
                {name: '辽宁',value: 88 },
                {name: '黑龙江',value: 88 },
          ],
          value3:[
                {name: '广东',value: 185 },
                {name: '青海',value: 75 },
                {name: '西藏',value: 185 },
                {name: '四川',value: 185 },
                {name: '宁夏',value: 255 },
                {name: '海南',value: 333 },
                {name: '台湾',value: 185 },
                {name: '香港',value: 185 },
                {name: '澳门',value: 185 }
          ]
    }
}


export default tempData