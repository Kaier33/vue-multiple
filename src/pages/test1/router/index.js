// 本地运行 assetsPublicPath 就得改为 "./" , 线上则 '/' 
import Vue from 'vue'
import Router from 'vue-router'
import One from '@/components/one.vue'
import Child from '../../../components/oneChild.vue'
import Null from '../../../components/404.vue'
Vue.use(Router)

export default new Router({
  // mode: 'history', //history需要后端配合的,本地则用不了. nginx要配置一下 https://blog.csdn.net/xjlinme/article/details/74783887
  routes: [
    {
      path: '/',
      name: 'One',
      component: One
    },
    {
      path: '/Child',
      name: 'Child',
      component: Child
    },
    // 线上写法, 记得给/test1.html/xxx
    // {  
    //   path: '/test1.html',
    //   name: 'One',
    //   component: One
    // },
    // {
    //   path: '/test1.html/Child',
    //   name: 'Child',
    //   component: Child
    // },
    {
      path: '*',
      name: 'Null',
      component: Null
    },
  ]
})
