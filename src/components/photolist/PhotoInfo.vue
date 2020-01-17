<template>
  <div>
    <div class="container">
      <h3>{{photoInfo.title}}</h3>
      <p class="desc">{{ photoInfo.desc }}</p>
      <p>
        <span>发表时间：{{photoInfo.add_time | dateFormat('YYYY-MM-DD HH:mm:ss')}}</span>
        <span>点击{{ photoInfo.clicked }}次</span>
      </p>
    </div>
    <vue-preview
      :list="imgList"
      :thumbImageStyle="{width: '80px', height: '80px', margin: '5px'}"
      :previewBoxStyle="{border:0}"
      :tapToClose="true"
      @close="closeHandler"
      @destroy="destroyHandler"
    />
    <comment-box :id="this.id"></comment-box>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
import comment from "../subcomponents/comment.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      list: [
        {
          cid: 0,
          title: "美式风格装修效果图",
          desc:"98平米美式风格装修效果图 暖色调的高端质感",
          clicked: 2,
          add_time: "2020-1-7 14:06:57",
          img_list: [
            {
              src:
                "http://image1.zhuangku.com/upfile2018/Image/zsalImg/20180828/20180828144458_8604.jpg",
                w:800,
                h:600
            },
            {
              src:
                "https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00612-1197.jpg",
                w:1036,
                h:584
            },
            {
              src:
                "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1085375201,669815157&fm=26&gp=0.jpg",
                w:600,
                h:500
            },
            {
              src:
                "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1513862548,798888128&fm=11&gp=0.jpg",
                w:300,
                h:300
            },
            {
              src:
                "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4104809776,1709866457&fm=26&gp=0.jpg",
                w:700,
                h:600
            }
          ]
        },
        {
          cid: 1,
          title: "色拉简介",
          desc:"色拉系音译，即Salad，源自西方，又译作沙拉、沙律。主要有三类，分别为水果沙拉、蔬菜沙拉、其他沙拉。",
          clicked: 1,
          add_time: "2020-1-16 17:44:57",
          img_list: [
            {
              src:
                "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=993459845,1609554367&fm=26&gp=0.jpg",
                w:800,
                h:600
            },
            {
              src:
                "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3499876852,3026151180&fm=26&gp=0.jpg",
                w:1036,
                h:584
            },
            {
              src:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1579259569651&di=fbeb2ad477f9da48a7848a7536db61f0&imgtype=0&src=http%3A%2F%2Fimage.uczzd.cn%2F2078469025663164320.jpg",
                w:600,
                h:500
            },
            {
              src:
                "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2193815130,2935439718&fm=26&gp=0.jpg",
                w:300,
                h:300
            }
          ]
        }
      ],
      photoInfo: [],
      imgList: []
    };
  },
  created() {
    this.getPhotoInfo();
  },
  methods: {
    getPhotoInfo() {
      this.photoInfo = this.list[this.id];
      this.imgList = this.list[this.id].img_list;
    },
    // 即将关闭的时候，调用这个处理函数
    closeHandler() {
      console.log("closeHandler");
    },
    // 完全关闭之后，调用这个函数清理资源
    destroyHandler() {
      console.log("destroyHandler");
    }
  },
  components: {
    "comment-box": comment
  }
};
</script>
<style lang="scss" scoped>
.container{
    h3{font-size: 16px;color: #ef4f4f;text-align: center}
    .desc{margin: 10px 0}
    .desc+p{color: #26a2ff;margin: 5px 0;font-size: 12px;
    display: flex;
    justify-content: space-between
    }
}
</style>