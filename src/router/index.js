import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import menu from '@/components/menu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: login
    },{
      path: '/menu',
      name: 'menu',
      component: menu
    }
  ]
})
