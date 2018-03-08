import Vue from 'vue'
import Router from 'vue-router'
import Notice from '@/components/Notice'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Notice',
      component: Notice
    }
  ]
})
