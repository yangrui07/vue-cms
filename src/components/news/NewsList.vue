<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
        <router-link :to="'/home/newsinfo/'+ item.id">
          <img class="mui-media-object mui-pull-left" :src="item.image_url" />
          <div class="mui-media-body">
            <p class="mui-ellipsis">{{item.desc}}</p> 
            <p><small class="mui-pull-left">发布时间: {{item.add_time | dateFormat('YYYY-MM-DD HH:mm:ss')}}</small>
            <small class="mui-pull-right">点击:{{item.clicked}}次</small>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
  data(){
    return {
      newsList:[],
    }
  },
  created(){
    this.getNewsList()
  },
  methods:{
    getNewsList(){
      this.$http.get('./src/json/newslist.json').then(result => {
        if(result.status === 200){
          this.newsList = result.body;
        }else{
          Toast('请求失败')
        }
        
      })
      
    }
  }
}
</script>
<style scoped>
small{color: #26a2ff}
</style>