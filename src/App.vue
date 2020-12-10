<template>
  <div id="app" class="homeWrap">
    <mainHead></mainHead>
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
  import MainHead from "../components/main_head.vue";
  import Carousel from "../components/carousel.vue";
  import MainBody from "../components/main_body.vue";
  import Recommend from "../components/recommend.vue";
  import MainFoot from "../components/main_foot.vue";
  import MainBottom from "../components/mian_bottom.vue";
  export default {
    name: 'app',
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
