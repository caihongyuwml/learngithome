import Vue from 'vue'
import Router from 'vue-router'

import MyMusic from './../components/mymusic'
import FindMusic from './../components/findmusic'
import Community from './../components/community'
import Findrecommend from './../components/findrecommend'
import Findsheet from './../components/findsheet'

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
      children:[{
        path:'',
        redirect: '/findmusic/findrecommend'
      },
        {
          path:'/findmusic/findrecommend',
          component: Findrecommend
        },
        {
          path:'/findmusic/findsheet',
          component: Findsheet
        }]
    },
    {
      path:'/community',
      component:Community
    }
  ]
})
