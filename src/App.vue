<template>
  <div id="app">
    <mainHead></mainHead>
    <carousel></carousel>
    <div style="padding: 20px 80px">
      <recommend></recommend>
      <mainBody></mainBody>
    </div>
  </div>
</template>

<script>
  import MainHead from "../components/main_head.vue";
  import Carousel from "../components/carousel.vue";
  import MainBody from "../components/main_body.vue";
  import Recommend from "../components/recommend.vue";
  export default {
    name: 'app',
    data() {
      return {}
    },
    components:{
      mainHead: MainHead,
      carousel: Carousel,
      mainBody: MainBody,
      recommend: Recommend
    }
  }
</script>

<style>

</style>
