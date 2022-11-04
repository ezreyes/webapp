
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import ประวัตินักศึกษา from '../views/ประวัตินักศึกษา.vue'
import Login from '@/views/Login.vue'
import ยกเลิกคำร้อง from '@/views/ยกเลิกคำร้อง.vue'
import ยื่นคำร้อง from '@/views/ยื่นคำร้อง.vue';

const routes = [
  
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path:'/ประวัตินักศึกษา',
    name:'ประวัตินักศึกษา',
    component:ประวัตินักศึกษา

  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/Login',
    name:'Login',
    component:Login,
    meta: {
      hideNavbar:true,
     }
  },
  {
    path:'/ยกเลิกคำร้อง',
    name:'ยกเลิกคำร้อง',
    component:ยกเลิกคำร้อง
  },
  {
    path:'/ยื่นคำร้อง',
    name:'ยื่นคำร้อง',
    component:ยื่นคำร้อง
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
