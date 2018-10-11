import Vue from 'vue'
import Router from 'vue-router'
import Community from '@/components/community'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/community',
      component:Community
    }
  ]
})
