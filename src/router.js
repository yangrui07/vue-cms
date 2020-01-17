import VueRouter from 'vue-router'
//导入对应的路由组件
import Home from './components/tabbar/Home.vue'
import Member from './components/tabbar/Member.vue'
import Shopcar from './components/tabbar/Shopcar.vue'
import Search from './components/tabbar/Search.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import PhotoList from './components/photolist/PhotoList.vue'
import PhotoInfo from './components/photolist/PhotoInfo.vue'
//创建路由对象
var router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:Home},
        {path:'/member',component:Member},
        {path:'/shopcar',component:Shopcar},
        {path:'/search',component:Search},
        {path:'/home/newslist',component:NewsList},
        {path:'/home/newsinfo/:id',component:NewsInfo},
        {path:'/home/photolist',component:PhotoList},
        {path:'/home/photoinfo/:id',component:PhotoInfo}

    ],
    linkActiveClass:'mui-active'//替换默认的路由高亮类router-link-active
})
//把路由对象暴露出去
export default router