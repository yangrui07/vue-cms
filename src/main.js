import Vue from 'vue';
//1.1 导入路由的包
import VueRouter from 'vue-router'
//1.1 安装路由
Vue.use(VueRouter)

import VueResource from 'vue-resource'
Vue.use(VueResource)


import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'


import {Header} from 'mint-ui'
Vue.component(Header.name,Header)
import 'mint-ui/lib/style.min.css'

import {Swipe, SwipeItem} from 'mint-ui'
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

//1.2 导入自己的路由模块
import router from './router.js'
import App from './App.vue';

import './css/style.css'



new Vue({
  el: '#app',
  
  render: h => h(App),
  router//1.3 挂载路由对象到Vue Dom实例上

});