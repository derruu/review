import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import ReviewView from '../views/ReviewView.vue'

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
    }
  ]
})

export default router
