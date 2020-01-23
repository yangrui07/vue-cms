#### Build Vue project based on Webpack 4.0
1. Vue version: 2.6.11
2. Webpack: 4.41.4
3. UI: Mint-UI/MUI
4. Dev tool: Visual Studio Code
5. OS: Mac OS Catalina

#### 制作首页App组件
1. Header：使用Mint-UI中的Header组件
2. Tabbar：使用MUI的Tabbar.html
3. 中间区域放置一个router-view来展示路由匹配到的组件

#### Vue-Router
 1. 导入路由包 import 'Vue-Router' from 'vue-router'
 2. 安装路由 Vue.use(VueRouter)
 3. 导入自己的路由模块 import 'Router' from './router.js'
 4. 挂载路由到Vue Dom实例上 new Vue({el:'#app',render:c=>c(App),router})
 5. 路由配置 <router-link></router-link> <router-view></router-view>

#### Error log
    vue.runtime.esm.js:639 [Vue warn]: Unknown custom element: <router-view> - did you register the component correctly? For recursive components, make sure to provide the "name" option.
#### Fixed issue
 1. 在main.js中import VueRouter from 'vue-router'
 2. Vue.use(VueRouter)

#### 首页轮播图
1. Mint-UI Swipe组件
2. vue-resource 获取真实数据

#### vue 与 vue-resource跨域问题解决
1. Method1: 在webpack.config.js中配置代理proxyTable
2. Method2: 使用this.$http.jsonp('...',{credentials:true})

#### 新闻资讯
1. 展示新闻资讯列表 MUI中的media-list.html
2. 使用vue-resource获取数据
3. Issue:'src' of img tag become src="[object Module]" in browser
4. Fixed: Workaround: set the esModule option in url-loader to false.<br>
It's because in @vue/component-compiler-utils we transformed the asset urls to require statements, which expect CommonJS modules, while the recent major release of url-loader emits ES modules by default.

##### 使用Moment插件格式化日期  
1. 设置全局过滤器 Vue.filter(dateStr,pattern)

##### 实现新闻资讯列表，点击跳转到新闻详情
1. 把列表中的每一项改造为router-link且提供唯一ID
2. Create NewsInfo.vue
3. 路由模块中，将新闻详情的路由地址和组件页面对应起来

##### 单独封装一个评论子组件 comment.vue
1. Create `comment.vue`
2. 按需导入此组件 `import comment from './comment.vue'`
3. 在父组件中，使用components属性，将comment组件注册为自己的子组件
4. 将注册的子组件以标签形式在页面中引用即可

##### 获取所有评论的数据加载到页面中
1. 在用标签引用子组件时绑定父组件ID
2. 在子组件中通过props属性获取父组件ID

##### 发表评论
1. 把文本框做双向数据绑定
2. 为发表评论绑定一个事件
3. 校验评论内容是否为空
4. 通过vue-resource发送请求，将评论保存到服务器中
5. 点击发表评论后，在客户端，手动拼接出一个最新的评论对象，然后调用数组的unshift方法，将最新的评论追加到comments前面

#### 图片分享
1. 顶部使用MUI中的scroll组件
2. 渲染分类列表的数据

##### Image Issue
1. 使用懒加载情况下，若前台页面没有加载出图片，控制台也没有报错，查看前台元素如下：

`<img data-v-0f3f4df1="" data-src="undefined" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" lazy="error">`

2. 出现此问题是因为在前台获取数据，使用的属性与后台不同造成的。如后台数据属性为images_url，而前台使用image_url获取数据，这样就会获取不到图片地址。
3. 若不使用懒加载，普通的Img标签，图片不显示，同时控制台也不报错，审查元素时也没有error提醒。
4. 设置加载图片CSS，需要将此代码放在li img层级中，不然不起作用

`img[lazy="loading"]{width:40px;}`

#### 图片详情页
1. 将`li`改为`router-link`,并添加`tag="li"`
2. Vue preview plugin
3. Vue-preview循环的图片列表数据类型必须为数组，里面包含多个Object
`list:[{src:'',w:800,h:600}]`
其中`w h`分别代表放大后图片的宽高度


