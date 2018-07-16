import Vue from 'vue'
import Router from 'vue-router'
import Two from '@/components/two.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/test2.html',
      name: 'Two',
      component: Two
    }
  ]
})
