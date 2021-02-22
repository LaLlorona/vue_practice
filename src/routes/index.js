import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'
import {store} from '../store/index.js'

// import CreateListView from '../views/CreateListView.js'
import bus from '../utils/bus.js'

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
      component: NewsView,
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');

        store.dispatch('FETCH_LIST', to.name)
          .then(() => {
            console.log('current store is')
            console.log(store.state.list)
            
            next();

          })
          .catch((err) => {
            console.log(err);
            next();
          })
      }
    },
    {
      path: '/ask',
      name: 'ask',
      component: AskView,
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');

        store.dispatch('FETCH_LIST', to.name)
          .then(() => {
            console.log('current store is')
            console.log(store.state.list)
            
            next();

          })
          .catch((err) => {
            console.log(err);
            next();
          })
      }
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');

        store.dispatch('FETCH_LIST', to.name)
          .then(() => {
            console.log('current store is')
            console.log(store.state.list)
            
            next();

          })
          .catch((err) => {
            console.log(err);
            next();
          })
      }
      
      
    },

    {
      path: '/user/:id',
      name: 'user',
      component: UserView,
      beforeEnter: (to, from, next) => {
        const user_name = to.params.id;
        bus.$emit('start:spinner');

        store.dispatch('FETCH_USER', user_name)
        .then(next);
      }
    },

    {
      path: '/item/:id',
      name:'item',
      component: ItemView,
      beforeEnter: (to, from, next) => {
        const article_name = to.params.id;
        bus.$emit('start:spinner');

        store.dispatch('FETCH_ARTICLE', article_name)
        .then(next);
      }
    },


  ],
});


