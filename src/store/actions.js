import {
  fetchUserInfo, 
  fetchNewsList, 
  fetchJobsList, 
  fetchAskList,
  fetchArticle,
  fetchList
} from '../api/index.js'

export default {
  

  async FETCH_NEWS(context) {
    const response = await fetchNewsList();
    context.commit('SET_NEWS', response.data);
    return response;
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
  

  async FETCH_LIST(context, page_name) {
    console.log('async version of fetch list ')
    let response = await fetchList(page_name);
    context.commit('SET_LIST', response.data);
    return response
    
  }
 
}
