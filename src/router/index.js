import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginView
    },
    {
      path: "/restos",
      name: "restos",
      component: () => import("../views/RestoView.vue"),
    },
    {
      path: "/restos/:id",
      name: "restos-show",
      component: () => import("../views/RestoDetailView.vue"),
    },
    {
      path: "/profile",
      name: "/profile",
      component: () => import("../views/ProfileView.vue"),
    },
    {
      path: "/create",
      name: "/create",
      component: () => import("../views/CreateView.vue"),
    },
    {
      path: "/register",
      name: "/register",
      component: () => import("../views/RegisterView.vue"),
    },
  ]
})

export default router
