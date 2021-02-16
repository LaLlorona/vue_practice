export default {
 
  UPDATE_NEWS(state, data) {
    if(!state.news.some(item => item.id == data.id)) {
      state.news.push(data)
    }
  },

  UPDATE_JOBS(state, data) {
    
    if(!state.jobs.some(item => item.id == data.id)) {
      state.jobs.push(data)
    }
    
  },

  UPDATE_ASKS(state, data) {
    if(!state.asks.some(item => item.id == data.id)) {
      state.asks.push(data)
    }
  },

  SET_NEWS(state, data) {
    state.news = data;
  },

  SET_USER(state, data) {
    state.user = data;
  },

  SET_ARTICLE(state, data) {
    state.article = data;
  },
  
  SET_TOPSTORY(state, data) {
    state.news_nums = data;
  }
}