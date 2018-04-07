import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import detail from '@/pages/detail'
import forecast from '@/pages/detail/forecast'
import analysis from '@/pages/detail/analysis'
import count from '@/pages/detail/count'
import publish from '@/pages/detail/publish'






Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path:'/detail',
      name:'detail',
      component:detail,
      redirect: '/detail/analysis',
      children:[
        {
          path:'analysis',
          component:analysis,
        },
        {
          path:'count',
          component:count,
        },
        {
          path:'forecast',
          component:forecast,
        },
        {
          path:'publish',
          component:publish,
        }
      ]
    }
  ]
})
