import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Pruebas from './views/Pruebas.vue'
import Signin from './views/Signin.vue'
import User from './components/User.vue'
import Signup from './views/Signup.vue'
import UserAmbulance from './views/UserAmbulance.vue'
import UserHospital from './views/UserHospital.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path:'/pruebas',
      name:'pruebas',
      component: Pruebas
    },
    {
      path:'/signin',
      name:'signin',
      component: Signin
    },
    {
      path:'/user',
      name:'user',
      component: User
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/ambulance',
      name: 'userAmbulance',
      component: UserAmbulance
    },
    {
      path: '/hospital',
      name: 'userHospital',
      component: UserHospital
    },
  ]
})
