import Vue from 'vue'
import Router from 'vue-router'
import Two from '@/components/two.vue'
import Child from '../../../components/twoChild.vue'
import Null from '../../../components/405.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history', 
  routes: [
    {
      path: '/',
      name: 'Two',
      component: Two
    },
    {
      path: '/Child',
      name: 'Child',
      component: Child
    },
    // {
    //   path: '/test2.html',
    //   name: 'Two',
    //   component: Two
    // },
    // {
    //   path: '/test2.html/Child',
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
