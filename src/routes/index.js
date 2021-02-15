import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'
import CreateListView from '../views/CreateListView.js'

Vue.use(VueRouter);

export const router = new VueRouter({
  mode : 'history',
  routes: [
    {
      path: '/',
      redirect: '/news'
    }
    ,
    {
      path: '/news',
      name: 'news',
      component: CreateListView('NewsView')
    },
    {
      path: '/ask',
      name: 'ask',
      component: CreateListView('AskView')
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: CreateListView('JobsView')
    },

    {
      path: '/user/:id',
      name: 'user',
      component: UserView
    },

    {
      path: '/item/:id',
      name:'item',
      component: ItemView
    },


  ],
});


