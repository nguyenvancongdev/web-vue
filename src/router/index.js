import { createRouter, createWebHashHistory  } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/layout/DefaultLayout.vue')
    },
    {
      path: '/admin',
      name: 'homevue',
      component: () => import('@/layout/AdminLayout.vue')
    },
  ]
})

export default router
// ngày hôm nay code trang admin quản trị