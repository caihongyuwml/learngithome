import Vue from 'vue'
import Router from 'vue-router'

import MyMusic from './../components/mymusic'
import FindMusic from './../components/findmusic'
import Community from './../components/community'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/mymusic'
    },
    {
      path:'/mymusic',
      component:MyMusic
    },
    {
      path:'/findmusic',
      component:FindMusic,
    },
    {
      path:'/community',
      component:Community
    }
  ]
})
