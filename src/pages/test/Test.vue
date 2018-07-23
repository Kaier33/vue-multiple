<template>
    <div>
        我是 test
        <!-- <div class="background" :style="{'background-image':'url('+path+')'}"></div> -->
        <div class="background"></div>
        <br>
        <!-- <div class="background" :style="{backgroundImage:'url('+require('../../assets/images/test.png')+')'}"></div> -->
    </div>
</template>
<script>
export default {
  data() {
    return {
      path: "../../assets/images/logo.png"
    };
  }
};
</script>
<style scoped>
.background {
  width: 300px;
  height: 300px;
  background-image: url('../../assets/images/test.png');
  background-size: cover;
  background-position: center;
}
</style>

