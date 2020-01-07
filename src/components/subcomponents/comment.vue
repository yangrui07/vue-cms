<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <textarea placeholder="请输入您的评论（最多120个字）" maxlength="120"></textarea>
    <button class="mint-button mint-button--primary mint-button--large">
      <label class="mint-button-text">发表评论</label>
    </button>
    <div class="cmt-list">
      <div class="cmt-item">
        <div class="cmt-title">第一楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2020-02-02 12:20</div>
        <div class="cmt-body">良辰美景更与何人说</div>
      </div>
      <div class="cmt-item">
        <div class="cmt-title">第一楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2020-02-02 12:20</div>
        <div class="cmt-body">良辰美景更与何人说</div>
      </div>
      <div class="cmt-item">
        <div class="cmt-title">第一楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2020-02-02 12:20</div>
        <div class="cmt-body">良辰美景更与何人说</div>
      </div>
      <div class="cmt-item">
        <div class="cmt-title">第一楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2020-02-02 12:20</div>
        <div class="cmt-body">良辰美景更与何人说</div>
      </div>
      <div class="cmt-item">
        <div class="cmt-title">第一楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2020-02-02 12:20</div>
        <div class="cmt-body">良辰美景更与何人说</div>
      </div>
    </div>
    <button class="mint-button mint-button--danger mint-button--large is-plain">
      <label class="mint-button-text">加载更多</label>
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {

    };
  },
  created() {},
  methods() {
      
  }
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
      .cmt-body{padding-top: 5px}
  }
  }
}
</style>