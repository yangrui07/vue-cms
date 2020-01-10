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
            v-for="item in list"
            :key="item.id"
          >{{item.title}}</a>
        </div>
        <ul class="photo-list" v-for="item in list" :key="item.id">
          <li v-for="subitem in item.cate_list" :key="subitem.id">
            <img v-lazy="subitem.image_url" :key="subitem.id" />
            <img :src="item.image_url" />
            <p>{{ subitem.desc }}</p>
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
      list: ""
    };
  },
  created() {
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
    getPhotoList() {
      this.$http.get("../../src/json/photolist.json").then(result => {
        if (result.status === 200) {
          this.list = result.body;
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
    width: 100%
  }
}
}

</style>