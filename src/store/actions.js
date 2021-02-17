import {fetchArticles, fetchUserInfo, fetchNewsList} from '../api/index.js'

export default {
  FETCH_NEWS(context) {
    let top_stories = [ 26060748, 26060414, 26058312, 26060152, 26060517, 26059766, 26058440, 26060307, 26057472, 26057155]
    

    for (let i = 0; i < top_stories.length; i++) {
      fetchArticles(top_stories[i])
      .then(response => { 
        console.log(response);
        context.commit('UPDATE_NEWS', response.data)
        if (i == top_stories.length - 1) {
          console.log('last news received')
          // return response;
        }

  
      })
      .catch(err => console.log(err)) 
    }
   
  },

  // ADD_NEWS(context) {
  //   console.log(this.state.news_nums)
  //   for (let i = 0; i < this.state.news_nums.length; i++) {
  //     console.log(i);
  //     fetchNews(this.state.news_nums[i])
  //     .then(response => {
  //       console.log(response);
  //       context.commit('UPDATE_NEWS', response.data)
  //     })
  //   }
  // },

  FETCH_JOBS(context) {
    let job_stories = [ 26070038, 26067085, 26063378, 26058139, 26056269, 26054456, 26053246, 26049890, 26047805, 26045978, 26044724, 26041115, 26038438, 26035388, 26029708, 26027239, 26024625, 26021322]


    for (let i = 0; i < job_stories.length; i++) {
      fetchArticles(job_stories[i])
      .then(response => { 
        console.log(response);
        context.commit('UPDATE_JOBS', response.data)
  
      })
      .catch(err => console.log(err)) 
    }
  },

  FETCH_ASKS(context) {
    let ask_stories = [ 26069216, 26064427, 26068985, 26067177, 26064722, 26067816, 26058289, 26059347, 26056136, 26060304, 26058580, 26053612, 26044558, 26057742, 26040504, 26051591, 26046054]

    for (let i = 0; i < ask_stories.length; i++) {
      fetchArticles(ask_stories[i])
      .then(response => { 
        console.log(response);
        context.commit('UPDATE_ASKS', response.data)
        
  
      })
      .catch(err => console.log(err)) 
    }
  },

  FETCH_USER(context, user_name) {
    fetchUserInfo(user_name)
    .then(response => {
      context.commit('SET_USER', response.data)
    })
    .catch(err => console.log(err));
  },
  
  FETCH_ARTICLE(context, article_id) {
    fetchArticles(article_id)
    .then(response => {
      context.commit('SET_ARTICLE', response.data)
    })
    .catch(err => console.log(err));
  },

  FETCH_TOPSTORY(context) {
    return fetchNewsList()
    .then((response) => {
      return new Promise((res) => {
        console.log('hey, this is the new promise!')
        setTimeout(() => {
          console.log('waited for 2 second');
          res(response);
        }, 2000)
      })
    })
    .then(response => {
      console.log('FETCH_TOPSTORY RUNNING')
      context.commit('SET_TOPSTORY', response.data)
      // return response;
    })
    .catch(err => console.log(err));
    // return new Promise((res) => {
    //   console.log(res);
    //   fetchNewsList()
    //   .then(response => {
    //     console.log('FETCH_TOPSTORY RUNNING')
    //     context.commit('SET_TOPSTORY', response.data)
    //     res('yes!')
    //   })
      
    //   .catch(err => console.log(err))
    // })
    
  },

  FETCH_NEW_TOPSTORY(context) {
    let top_stories = this.state.news_nums;
    console.log('FETCH_NEWSTORY_RUNNING')
    let stories = [];
    
    
    for (let i = 0; i < top_stories.length; i++) {
      stories.push(fetchArticles(top_stories[i]))
    }
    return Promise.allSettled(stories).then(result => {
      console.log(result);
      let articles = []
      for (let i = 0; i < result.length; i++) {
        articles.push(result[i].value.data)
      }
      context.commit('SET_NEWS', articles);
   });

  }


}
