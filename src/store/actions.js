import {
  fetchUserInfo, 
  fetchNewsList, 
  fetchJobsList, 
  fetchAskList,
  fetchArticle,
  fetchList
} from '../api/index.js'

export default {
  FETCH_NEWS(context) {
    return fetchNewsList()
    .then(response => { 
      console.log(response);
      context.commit('SET_NEWS', response.data)
    })
    .catch(err => console.log(err)) 
  },

  FETCH_JOBS(context) {
    return fetchJobsList()
    .then(response => { 
      console.log(response);
      context.commit('SET_JOBS', response.data)
    })
    .catch(err => console.log(err)) 
  },

  FETCH_ASKS(context) {
    return fetchAskList()
    .then(response => { 
      console.log(response);
      context.commit('SET_ASKS', response.data)
    })
    .catch(err => console.log(err)) 
  },

  FETCH_USER(context, user_name) {
    return fetchUserInfo(user_name)
    .then(response => {
      context.commit('SET_USER', response.data)
    })
    .catch(err => console.log(err));
  },

  FETCH_ARTICLE(context, article_id) {
    return fetchArticle(article_id)
    .then(response => {
      context.commit('SET_ARTICLE', response.data)
    })
    .catch(err => console.log(err));
  },
  FETCH_LIST(context, page_name) {
    return fetchList(page_name)
    .then(response => {
      context.commit('SET_LIST', response.data)
    })
    .catch(err => console.log(err))
  }

}
