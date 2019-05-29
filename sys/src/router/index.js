import Vue from 'vue'
import Router from 'vue-router'
// import routes from './routers'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ '../views/layout/index.vue'),
      children: [{
        path: 'top250',
        name: 'movies',
        component: () => import(/* webpackChunkName: "about" */ '../views/top250/index.vue'),
        children: [{
          path: 'list',
          name: 'moviesList',
          component: () => import(/* webpackChunkName: "about" */ '../views/top250/moviesList.vue')
        },
        {
          path: 'new',
          name: 'createNew',
          component: () => import(/* webpackChunkName: "about" */ '../views/top250/createNew.vue')
        }
        ]
      }]
    }
  ]
})
