## Build Vue project based on Webpack 4.0
## vue version:2.6.11
## webpack:4.41.4
## UI：Mint-UI/MUI
## DEV TOOL：Visual Studio Code
## OS：Mac OS Catalina

## 制作首页App组件
1. Header：使用Mint-UI中的Header组件
2. Tabbar：使用MUI的Tabbar.html
3. 中间区域放置一个router-view来展示路由匹配到的组件

## Vue-Router
 1.1 导入路由包 import 'Vue-Router' from 'vue-router'
 1.2 安装路由 Vue.use(VueRouter)
 1.3 导入自己的路由模块 import 'Router' from './router.js'
 1.4 挂载路由到Vue Dom实例上 new Vue({el:'#app',render:c=>c(App),router})
 1.5 路由配置 <router-link></router-link> <router-view></router-view>

## error log
    vue.runtime.esm.js:639 [Vue warn]: Unknown custom element: <router-view> - did you register the component correctly? For recursive components, make sure to provide the "name" option.
## fixed issue
 main.js
 import VueRouter from 'vue-router'
 Vue.use(VueRouter)

## 首页轮播图
## Mint-UI Swipe组件
## vue-resource

## http://vue.studyit.io/api/getlunbo
## img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1239701112,3641928982&fm=26&gp=0.jpg'
## url:'http://www.win4000.com/wallpaper_big_108176_4.html'
## img2:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577183612517&di=b5243eae6b3c2e71243c8aefae9afcb3&imgtype=jpg&src=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D3555882400%2C2114108882%26fm%3D214%26gp%3D0.jpg'
## url:'https://www.enterdesk.com/download/9349-82706/'

## vue 与 vue-resource跨域问题解决
## Method1: 在webpack.config.js中配置代理proxyTable
## Method2: 使用this.$http.jsonp('...',{credentials:true})

## 九宫格样式

## 新闻资讯 路由链接

## 展示新闻资讯列表 MUI中的media-list.html
## 使用vue-resource获取数据
## Issue:'src' of img tag become src="[object Module]" in browser
## Fixed:
## Workaround: set the esModule option in url-loader to false.

## It's because in @vue/component-compiler-utils we transformed the asset urls to require statements, which expect CommonJS modules, while the recent major release of url-loader emits ES modules by default.

## 使用Moment插件格式化日期 YYYY-MM-DD HH:mm:ss 
## 全局过滤器Vue.filter()
