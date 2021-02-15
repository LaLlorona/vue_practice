import {fetchUserInfo, fetchNewsList, fetchJobsList, fetchAskList,fetchArticle} from '../api/index.js'

export default {
  FETCH_NEWS(context) {
      fetchNewsList()
      .then(response => { 
        console.log(response);
        context.commit('SET_NEWS', response.data)
      })
      .catch(err => console.log(err)) 
  },

  FETCH_JOBS(context) {
    fetchJobsList()
    .then(response => { 
      console.log(response);
      context.commit('SET_JOBS', response.data)
    })
    .catch(err => console.log(err)) 
  },

  FETCH_ASKS(context) {
    fetchAskList()
    .then(response => { 
      console.log(response);
      context.commit('SET_ASKS', response.data)
    })
    .catch(err => console.log(err)) 
  },

  FETCH_USER(context, user_name) {
    fetchUserInfo(user_name)
    .then(response => {
      context.commit('SET_USER', response.data)
    })
    .catch(err => console.log(err));
  },

  FETCH_ARTICLE(context, article_id) {
    fetchArticle(article_id)
    .then(response => {
      context.commit('SET_ARTICLE', response.data)
    })
    .catch(err => console.log(err));
  }

}
