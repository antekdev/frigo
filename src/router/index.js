import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/explore',
    component: () => import(/* webpackChunkName: "active-part" */ '@/views/main/ActivePartView.vue'),
    children: [
      {
        path: 'fridge',
        component: () => import(/* webpackChunkName: "active-part" */ '@/views/active/FridgeView.vue')
      },
      {
        path: 'recipes',
        component: () => import(/* webpackChunkName: "active-part" */ '@/views/active/RecipesView.vue'),
        children: [
          {
            path: 'favorites',
            component: () => import(/* webpackChunkName: "active-part" */ '@/views/active/FavoritesView.vue')
          },
          {
            path: 'cook',
            component: () => import(/* webpackChunkName: "active-part" */ '@/views/active/CookView.vue')
          },
          {
            path: 'buy',
            component: () => import(/* webpackChunkName: "active-part" */ '@/views/active/BuyView.vue')
          },
        ]
      },
    ]
  },
  {
    path: '/',
    component: () => import(/* webpackChunkName: "auth-part" */ '@/views/auth/WelcomeView.vue'),
    children: [
      {
        path: 'login',
        component: () => import(/* webpackChunkName: "auth-part" */ '@/views/auth/LoginView.vue')
      },
      {
        path: 'register',
        component: () => import(/* webpackChunkName: "auth-part" */ '@/views/auth/RegisterView.vue')
      }
    ]
  }, 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router