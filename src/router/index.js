/* eslint-disable no-unused-vars */
import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/home.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/home', component: Home }
  ]
})

//挂载路由导航守卫
router.beforeEach((to,from,next) => {
  //to 将要访问的路径
  //from 代表哪个路径跳转而来
  //next() 放行
  if(to.path === '/login') return next();
  const tokenStr = window.sessionStorage.getItem('token')
  if(!tokenStr) return next('/login')//强制跳转到登录页
  next()
})

export default router

