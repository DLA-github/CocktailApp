import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Detail from './views/Detail.vue'
import detailI from './views/detailI.vue'
import cocktails from './views/cocktails.vue'
import ordinary from './views/ordinary.vue'
import register from './views/register.vue'
import login from './views/login.vue'
import user from './views/user.vue'
import chat from './views/chat.vue'
import alcoholic from './views/alcoholics.vue'
import nonAlcoholic from './views/nonAlcoholic.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/detail:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/ingredient:id',
      name: 'ingredient',
      component: detailI
    },
    {
      path: '/cocktails',
      name: 'cocktails',
      component: cocktails
    },
    {
      path: '/alcoholic',
      name: 'alcoholic',
      component: alcoholic
    },
    {
      path: '/non-alcoholic',
      name: 'non-alcoholic',
      component: nonAlcoholic
    },
    {
      path: '/ordinary',
      name: 'ordinary',
      component: ordinary
    },

    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/user:id',
      name: 'user',
      component: user
    },
    {
      path: '/chat',
      name: 'chat',
      component: chat,
      props: true,
      beforeEnter: (to, from, next) => {
        if (to.params.user) {
          next();
        } else {
          next({
            name: 'login'
          })
        }
      }
    },

  ]
})