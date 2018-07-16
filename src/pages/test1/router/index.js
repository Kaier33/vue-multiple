import Vue from 'vue'
import Router from 'vue-router'
import One from '@/components/one.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/test1.html',
      name: 'One',
      component: One
    }
  ]
})
