import { createRouter, createWebHistory } from 'vue-router';
import HomeContainer from '../home/home.container.vue';
import TestComponent from '../test/test.component.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeContainer,
  },
  {
    path: '/test',
    name: 'test',
    component: TestComponent,
  },

  // LAZY LOADING
  // {
  //   path: '/test',
  //   name: 'test',
  //   component: () => import(/* webpackChunkName: "signup" */ '../test/test.component.vue')
  // },
];

const router = createRouter({
  // To make url look normal en tiä enempää
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
