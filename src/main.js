import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import '../src/assets/css/main.css'
import App from './App'
import router from './router'
import store from './store'
import * as filters from './filters' // 全局filter
import './icons' // icon
import './errorLog'// error log
import './permission' // 权限
import './mock'  // 该项目所有请求使用mockjs模拟
import echarts from 'echarts'
import { hyLog } from '../src/utils/index'
import VTable from './components/Table/table';
import VTableColumn from './components/Table/table/src/table-column';
import fetch from './utils/fetch'

Vue.use(ElementUI)

Vue.component('VTable', VTable);
Vue.component('VTableColumn', VTableColumn);
Vue.prototype.$online = true  // 是否在线
Vue.prototype.$hyLog = hyLog   // 自定义输出
Vue.prototype.$fetch = fetch


// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
