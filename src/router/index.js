
import HelloWorld from '@/components/HelloWorld'
// import AboutToi from '@/components/About'
import UserScreen from '@/views/user/index'
import NotFound from '@/views/404/index'
import LoginAdmin from '@/views/login/index'
import PostesBlog from '@/components/user/PostesBlog'
import CategoryUser from '@/components/user/category'
import MoneyManage from '@/components/user/moneymanage'
import * as VueRouter from 'vue-router'


  const routes = [ 
    {
      path: '', 
      component: UserScreen, 
      children: [
        {
          path: '/posts',
          component: HelloWorld,
          
        },
        {
          path: 'edit',
          component: PostesBlog,
          name: 'post'
        },
        {
          path: 'sanpham',
          component: CategoryUser,
          name: 'sanpham'
        },
        {
          path: 'thuchi',
          component: MoneyManage,
          name: 'thuchi'
        },
        {
          path: 'thuchi:key',
          component: MoneyManage,
          name: 'thuchikey'
        }
      ],
    },
    {
      path: '/admin', 
      component: UserScreen, 
      children: [
        {
          path: 'posts',
          component: HelloWorld, name: 'toi'
        },
      ],
    },
    {
      path: '/login',
      component: LoginAdmin,
      name: 'login',
    },
    {path: '/', redirect: '/user/posts', name:'home'},
    { path: '/:pathMatch(.*)*',  redirect: '/404' },
    { path: '/404',name: 'NotFound', component: NotFound },
    
  ]
  const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, 
  })
  export default router