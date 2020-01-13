<template>
  <div class="container">
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            :class="['mui-control-item',item.id == 0 ? 'mui-active' : '']"
            v-for="item in cateList"
            :key="item.id"
            @click="showCate(item.id)"
          >{{item.title}}</a>
        </div>
        <ul class="photo-list">
          <li v-for="item in photoList" :key="item.id">
            <img v-lazy="item.image_url" :key="item.id" />
            <p class="desc">{{ item.desc }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import mui from "../../lib/mui/js/mui.min.js";

export default {
  data() {
    return {
      cateList: "",
      photoList:""
    };
  },
  created() {
    this.getCateList();
    this.getPhotoList();
  },
  mounted() {
    //当组件中的DOM结构被渲染好并放到页面中后，会执行这个钩子函数
    //若要操作元素了，最好在mounted里面，因为这个时候的DOM元素是最新的
    //初始化滑动控件
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {
    getCateList() {
      this.$http.get("../../src/json/photolist.json").then(result => {
        if (result.status === 200) {
          this.cateList = result.body;
        }
      });
    },
    getPhotoList(){
      this.$http.get("../../src/json/photolist.json").then(result => {
        if (result.status === 200) {
          this.photoList = result.body[0]['cate_list'];
        }
      });
    },
    showCate(id){
      this.$http.get("../../src/json/photolist.json").then(result => {
        if (result.status === 200) {
          this.photoList = result.body[id]['cate_list'];
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.container{
img[lazy="loading"] {
  width: 40px;
  height: 300px;
  margin: auto;
}
.photo-list{
  padding: 0;
  margin: 40px 0;
  li{
    width: 96%;margin: 5px 2%;
    position: relative;
    border: 1px solid #ccc;
    border-radius: 3px;
    img{
      width: 100%;
      height: 230px;
      background-size: cover;
      border: 0;
      vertical-align: middle;
    }
    .desc{
      position: absolute;
      bottom: 0;
      right: 0;
      width: 100%;
      background:rgba(0,0,0,.65);
      color: #fff;
      margin: 0;
      padding: 2px;
      font-size: 12px
    }
  }
}
}

</style>