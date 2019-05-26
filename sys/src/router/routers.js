
const routes = {
  routes: [{
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/layout/index.vue'),
    children: [
      {
        path: '/top250',
        name: 'moviesList',
        component: () => import(/* webpackChunkName: "about" */ '../views/layout/index.vue')
      }
    ]
  }
  ]
}
export default routes
