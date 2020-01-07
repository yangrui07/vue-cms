<template>
  <div class="container">
    <h3>{{newsInfo.title}}</h3>
    <p>
      <span>发表时间：{{newsInfo.add_time | dateFormat('YYYY-MM-DD HH:mm:ss')}}</span>
      <span>点击{{ newsInfo.clicked }}次</span>
    </p>
    <div class="desc">{{ newsInfo.desc }}</div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      id: this.$route.params.id,
      newsInfo: ""
    };
  },
  created() {
    this.getNewsInfo();
  },
  methods: {
    getNewsInfo() {
      let newsID = this.id;
      this.$http.get("./src/json/newslist.json").then(result => {
        if (result.status === 200) {
          this.newsInfo = result.body[newsID];
        } else {
          Toast("请求失败");
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding: 0 10px;
  font-size: 12px;
  h3 {
    text-align: center;
    font-size: 14px;
    color: #ef4f4f;
    padding: 5px 0;
  }
  p {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    padding-bottom: 3px;
    span {
      color: #26a2ff;
      font-size: 12px;
    }
  }
  .desc {
    color: #656b79;
  }
}
</style>