<template>
  <div id="indexs" class="homeWrap">
    <mainHead ref="mainHead"></mainHead>
    <carousel></carousel>
    <div style="padding: 20px 80px;background-color: #f7f7f7!important">
      <recommend></recommend>
      <mainBody></mainBody>
      <mainFoot></mainFoot>
    </div>
    <mainBottom></mainBottom>
  </div>
</template>

<script>
  import MainHead from "../components/indexElement/main_head.vue";
  import Carousel from "../components/indexElement/carousel.vue";
  import MainBody from "../components/indexElement/main_body.vue";
  import Recommend from "../components/indexElement/recommend.vue";
  import MainFoot from "../components/indexElement/main_foot.vue";
  import MainBottom from "../components/indexElement/mian_bottom.vue";
  export default {
    name: 'indexs',
    data() {
      return {}
    },
    components:{
      mainHead: MainHead,
      carousel: Carousel,
      mainBody: MainBody,
      recommend: Recommend,
      mainFoot: MainFoot,
      mainBottom: MainBottom
    },created() {
      //页面加载显示页面顶部
      window.scrollTo(0, document.body.scrollHeight)
    }
  }
</script>

<style>
  .homeWrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
