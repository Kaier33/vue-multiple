<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import bridge from '@/assets/js/bridge'
import { disabledDoubleTouch, publishVmWindows } from '@/assets/js/app-fn.js'
export default {
  name: 'App',
  data(){
    return {}
  },
  methods:{},
  beforeCreate(){
    publishVmWindows()// 暴露vms
    disabledDoubleTouch()//近视ios双击放大
  },
  mounted(){
    bridge(window)//初始化bridge
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
