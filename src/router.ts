import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue';
import Home from './views/Home.vue';
import List from './components/List.vue';
import V_am from './components/V_am.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component:V_am,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import('./views/Mine.vue'),
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('./components/Search.vue'),
    },
    {
      path: '/list',
      name: 'list',
      component: List,
      children:[{
        path:'job',
        component: () => import('./components/Job.vue'),
      },
      {
        path:'life',
        component: () => import('./components/Life.vue'),
      },
      {
        path:'vocation',
        component: () => import('./components/Vocation.vue'),
      }
      
    ]
    },
    
  ],
});
