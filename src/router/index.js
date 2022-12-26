import { createRouter, createWebHistory } from 'vue-router'
import { projectAuth } from '@/config/firebase';

//Auth Guards: check logined to use route
const requireAuth = (to, from, next) => {
  const user = projectAuth.currentUser;

  // console.log("Before enter router: ", user);
  if (!user) {
    next({ name: "Login", params: {} });
  } else {
    next();
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      text: 'Hey, Nhan Chi Danh',
      leading: true,
    },
    component: () => import(/* webpackChunkName: "home" */ '../views/index.vue')
  },
  {
    path: '/register',
    name: 'Register',
    meta: {
      layout: 'auth',
    },
    component: () => import(/* webpackChunkName: "register" */ '../views/register.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      layout: 'auth',
    },
    component: () => import(/* webpackChunkName: "login" */ '../views/login.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: {
      text: "Profile",
      leading: false,
    },
    component: () => import(/* webpackChunkName: "profile" */ '../views/profile.vue'),
    beforeEnter: requireAuth,
  },
  {
    path: '/logout',
    name: 'Logout',
    component: () => import(/* webpackChunkName: "logout" */ '../views/logout.vue')
  },
  {
    path: '/report',
    name: 'Report',
    component: () => import(/* webpackChunkName: "report" */ '../views/report.vue')
  },
  {
    path: '/budget',
    name: 'Budget',
    component: () => import(/* webpackChunkName: "budget" */ '../views/budget.vue')
  },
  {
    path: '/new-transaction',
    name: 'New-transaction',
    component: () => import(/* webpackChunkName: "transaction" */ '../views/new-transaction.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
