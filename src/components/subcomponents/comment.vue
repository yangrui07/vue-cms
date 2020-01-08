<template>
  <div class="cmt-container">
    <h3>发表评论 -- {{ this.id }}</h3>
    <textarea placeholder="请输入您的评论（最多120个字）" maxlength="120"></textarea>
    <button class="mint-button mint-button--primary mint-button--large">
      <label class="mint-button-text">发表评论</label>
    </button>
    <div class="cmt-list">
      <div class="cmt-item" v-for="(item, i) in comments" :key="item.id">
        <div class="cmt-title">第{{i+1}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time | dateFormat('YYYY-MM-DD hh:mm')}}</div>
        <div class="cmt-body">{{item.content == '' ? '此用户很懒，什么都没有留下' : item.content}}</div>
      </div>
    </div>
    <button class="mint-button mint-button--danger mint-button--large is-plain">
      <label class="mint-button-text">加载更多</label>
    </button>
  </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
  data() {
    return {
        nid:this.id,
        comments:''
    };
  },
  created() {
      this.getComment()
  },
  methods:{
      getComment(){
          let newsID = this.nid
          this.$http.get('./src/json/newslist.json').then(result => {
              if(result.status === 200){
                  this.comments = result.body[newsID]['comments']
              }else{
                  Toast('加载数据失败')
              }
          })
      }
  },
  props:['id']
};
</script>
<style lang="scss" scoped>
.cmt-container {
  h3 {
    font-size: 16px;
    padding: 10px 0 5px;
    border-bottom: 1px solid #ccc;
  }
  textarea {
    font-size: 14px;
    height: 75px;
  }
  .cmt-list{
      margin: 10px 0;
      .cmt-item{
      margin: 5px 0;
      .cmt-title{background-color: #f6f8fa;line-height: 30px;}
      .cmt-body{padding-top: 5px;color: #656b79}
  }
  }
}
</style>