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
 1. 导入路由包 import 'Vue-Router' from 'vue-router'
 2. 安装路由 Vue.use(VueRouter)
 3. 导入自己的路由模块 import 'Router' from './router.js'
 4. 挂载路由到Vue Dom实例上 new Vue({el:'#app',render:c=>c(App),router})
 5. 路由配置 <router-link></router-link> <router-view></router-view>

## error log
    vue.runtime.esm.js:639 [Vue warn]: Unknown custom element: <router-view> - did you register the component correctly? For recursive components, make sure to provide the "name" option.
## fixed issue
 1. 在main.js中import VueRouter from 'vue-router'
 2. Vue.use(VueRouter)

## 首页轮播图
## Mint-UI Swipe组件
## vue-resource 获取真实数据

## vue 与 vue-resource跨域问题解决
### Method1: 在webpack.config.js中配置代理proxyTable
### Method2: 使用this.$http.jsonp('...',{credentials:true})

## 新闻资讯
1. 展示新闻资讯列表 MUI中的media-list.html
2. 使用vue-resource获取数据
3. Issue:'src' of img tag become src="[object Module]" in browser
4. Fixed: Workaround: set the esModule option in url-loader to false.<br>
It's because in @vue/component-compiler-utils we transformed the asset urls to require statements, which expect CommonJS modules, while the recent major release of url-loader emits ES modules by default.

## 使用Moment插件格式化日期  
1. 设置全局过滤器 Vue.filter(dateStr,pattern)
