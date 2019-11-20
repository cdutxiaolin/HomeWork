import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
// import Login from '../views/Login.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/toFirstPage',
    name: 'toFirstPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/toFirstPage.vue'),
  },
  {
    path: '/toDoList',
    name: 'toDoList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/toDoList.vue'),
  },
  {
    path: '/Login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
  },
  {
    path: '/toCommand',
    name: 'toCommand',
    component: () => import(/* webpackChunkName: "about" */ '../views/toCommand.vue'),
  },
  {
    path: '/zhiLing1',
    name: 'zhiLing1',
    component: () => import(/* webpackChunkName: "about" */ '../views/zhiLing1.vue'),
  },
  {
    path: '/zhiLing22',
    name: 'zhiLing22',
    component: () => import('../views/zhiLing22.vue'),
  },
  {
    path: '/zhiLing333',
    name: 'zhiLing333',
    component: () => import(/* webpackChunkName: "about" */ '../views/zhiLing333.vue'),
  },
];

// routes表示路由匹配规则

const router = new VueRouter({
  routes,
});
export default router;
// export default new Router({
//   routes: [
//     {
//       path: '/Login',
//       name: 'Login',
//       component: Login,
//     },
//   ],
//   mode: 'history',
// });
