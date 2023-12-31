import {createRouter, createWebHistory} from 'vue-router'
const routes = [
  {
    path: '/hello',
    component: () => import('../components/HelloWorld')
  },
  {
    path: '/',
    component: () => import('../components/Home')
  },
  {
    path: '/page',
    component: () => import('../components/page')
  },
  {
    path: '/:catchAll(.*)',
    component: () => import('../components/Error')
  }
]
export default createRouter({
  history: createWebHistory(),
  routes
})