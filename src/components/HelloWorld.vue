<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p class="test">
      我是test
    </p>
    <div>
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide>I'm Slide 1</swiper-slide>
        <swiper-slide>I'm Slide 2</swiper-slide>
        <swiper-slide>I'm Slide 3</swiper-slide>
        <swiper-slide>I'm Slide 4</swiper-slide>
        <swiper-slide>I'm Slide 5</swiper-slide>
        <swiper-slide>I'm Slide 6</swiper-slide>
        <swiper-slide>I'm Slide 7</swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "HelloWorld",
  components: { swiper, swiperSlide },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      swiperOption: {
        slidesPerView: "auto",
        spaceBetween: 40
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log("this is current swiper instance object", this.swiper);
    // this.swiper.slideTo(3, 1000, false);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
@m: 750/375;
.test {
  display: flex;
  width: 150px;
  height: 150px;
  background-color: pink;
  font-size: 28px; /*px*/
}
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-wrapper .swiper-slide {
  background-color: greenyellow;
  height: 136px;
  width: 120px
}
</style>
