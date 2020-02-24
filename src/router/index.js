import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/old/Home.vue'
import About from '../views/old/About.vue'
import Index from '../views/index/Index.vue'
import Essay from '../views/Essay/Essay.vue'
import Code from '../views/Code/Code.vue'
import Store from '../views/storeDemo/store.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/Essay',
    name: 'Essay',
    component: Essay
  },{
    path: '/Code',
    name: 'Code',
    component: Code
  },{
    path: '/store',
    name: 'Store',
    component: Store
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router