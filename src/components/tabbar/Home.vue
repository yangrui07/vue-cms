<template>
  <div>
    <!-- swipe -->
    <mt-swipe :show-indicators="true">
      <mt-swipe-item v-for="item in swipeList" :key="item.url">
        <!-- <img :src="item.img" alt /> -->
        <img v-lazy="item.img" :key="item.id" />
      </mt-swipe-item>
    </mt-swipe>
    <!-- grid -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <span class="mui-icon mui-icon-home"></span>
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photolist">
          <span class="mui-icon mui-icon-redo"></span>
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-compose"></span>
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-videocam"></span>
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-phone"></span>
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import Toast from "mint-ui";
export default {
  data() {
    return {
      swipeList: [
        {
          img:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1239701112,3641928982&fm=26&gp=0.jpg",
          url: "http://www.win4000.com/wallpaper_big_108176_4.html"
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577183612517&di=b5243eae6b3c2e71243c8aefae9afcb3&imgtype=jpg&src=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D3555882400%2C2114108882%26fm%3D214%26gp%3D0.jpg",
          url: "https://www.enterdesk.com/download/9349-82706/"
        }
      ]
    };
  },
  created() {
    // this.getSwipeList()
  },
  methods: {
    getSwipeList() {
      Toast("加载轮播图成功");
      this.$http.jsonp("http://vue.studyit.io/api/getlunbo").then(result => {
        if (result.body.status === 0) {
          this.swipeList = result.body.message;
        } else {
          Toast("加载轮播图失败");
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
}
.mint-swipe-item {
  img {
    width: 100%;
    background-size: contain;
  }
}
.mui-table-view {
  background-color: #fff;
  border: 0;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: 0;
}
</style>