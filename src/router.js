import Vue from 'vue'
import Router from 'vue-router'
import login from './views/login.vue'

Vue.use(Router)

export default new Router({
  //  使用history模式，调用后台接口时，路由路径会被当成api请求的路经，所以尽量使用hash模式
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      name: 'work',
      component: () => import('./views/Work.vue')
    },
    {
      path: '/life',
      name: 'life',
      component: () => import('./views/About.vue')
    },
    {
      path: '/work',
      name: 'work',
      component: () => import('./views/Work.vue'),
      children: [
        {
          path: '/work/company',
          name: 'company',
          component: () => import('./views/company.vue')
        },
        {
          path: '/work/web',
          name: 'web',
          component: () => import('./views/web.vue')
        },
        {
          path: '/work/university',
          name: 'university',
          component: () => import('./views/study.vue')
        },
        {
          path: '/work/other',
          name: 'other',
          component: () => import('./views/other.vue')
        },
        {
          path: '/work/honor',
          name: 'honor',
          component: () => import('./views/honor.vue')
        },
      ]
    }
  ]
})
