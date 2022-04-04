import { createRouter, createWebHistory } from 'vue-router';
import Home from './Home.vue';
import NotFound from './NotFound.vue';

const history = createWebHistory();
const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/:catchNotMatchPath(.*)', name: 'notfound', component: NotFound },
];

const router = createRouter({ history, routes });
export default router;
