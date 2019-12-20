import Vue from 'vue';

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import './lib/mui/css/mui.min.css'

import {Header} from 'mint-ui'
Vue.component(Header.name,Header)
import 'mint-ui/lib/style.min.css'


import router from './router.js'
import App from './App.vue';



new Vue({
  el: '#app',
  
  render: h => h(App),
  router

});