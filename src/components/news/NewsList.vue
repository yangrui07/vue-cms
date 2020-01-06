<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" :src="item.image_url" />
          <div class="mui-media-body">
            {{item.title}}
            <p class="mui-ellipsis">{{item.desc}}<small class="mui-pull-right">发布时间: {{item.date | dateFormat('YYYY-MM-DD HH:mm:ss')}}</small>
            
            </p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data(){
    return {
      newsList:[
        {
          id:0,
          image_url:"https://avatars2.githubusercontent.com/u/16751198?s=40&v=4",
          title:"幸福",
          desc:"能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？",
          date:new Date()
        },
        {
          id:1,
          image_url:"https://avatars2.githubusercontent.com/u/16751198?s=40&v=4",
          title:"木屋",
          desc:"想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.",
          date:new Date()
        },
        {
          id:2,
          image_url:"https://avatars2.githubusercontent.com/u/16751198?s=40&v=4",
          title:"幸福",
          desc:"烤炉模式的城，到黄昏，如同打翻的调色盘一般.",
          date:new Date()
        },
      ]
        

      
      
    }
  }
}
</script>
<style scoped>

</style>