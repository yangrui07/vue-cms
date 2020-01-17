import Vue from 'vue';
//1.1 导入路由的包
import VueRouter from 'vue-router'
//1.1 安装路由
Vue.use(VueRouter)

import VueResource from 'vue-resource'
Vue.use(VueResource)

//日期格式化插件
import moment from 'moment'
Vue.filter('dateFormat',function(dataStr,pattern){
  return moment(dataStr).format(pattern)
})


import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.min.css'

// import {Header, Button} from 'mint-ui'
// Vue.component(Header.name,Header)
// Vue.component(Button.name,Button)
// import 'mint-ui/lib/style.min.css'

import VuePreview from 'vue2-preview'
Vue.use(VuePreview)

//1.2 导入自己的路由模块
import router from './router.js'
import App from './App.vue';

import './css/style.css'



new Vue({
  el: '#app',
  
  render: h => h(App),
  router//1.3 挂载路由对象到Vue Dom实例上

});