// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '../App'
import Router from 'vue-router'
import axios from 'axios'
import TestBridge from '@/pages/testBridge/TestBridge'



if(process.env.NODE_ENV=="production"){
  Vue.prototype.$axios = axios.create({
    baseURL:'http://dev2.xchuxing.com/',
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    }
  })
}else{
  Vue.prototype.$axios = axios.create({
    withCredentials: true,
    baseURL:'/api/',
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    }
  })
}


Vue.use(Router)
const router = new Router({
  routes: [{
    path: '/',
    name: 'TestBridge',
    component: TestBridge
  }, ]
})



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
