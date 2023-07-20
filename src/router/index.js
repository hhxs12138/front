import {createRouter, createWebHistory} from 'vue-router'
const routes = [
  {
    path: '/hello',
    component: () => import('../components/HelloWorld')
  },
  {
    path: '/',
    component: () => import('../components/Home')
  }
]
export default createRouter({
  history: createWebHistory(),
  routes
})