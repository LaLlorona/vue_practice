import Vue from 'vue'
import Vuex from 'vuex'


import new_mutations from './mutations.js'
import new_actions from './actions.js'

Vue.use(Vuex);
export const store = new Vuex.Store( {
  state: {
    news_nums: [],
    news: [],
    jobs: [],
    asks: [],
    user: {},
    article: {},
    list: [],
    

  },
  getters: {
    GET_ASKS(state) {
      return state.asks;
    },
    GET_NEWS_NUMS(state) {
      return state.news_nums
    }
  },

  mutations: new_mutations,

  actions: new_actions,

})