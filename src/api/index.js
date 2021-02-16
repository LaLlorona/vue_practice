import axios from 'axios'

const config = {
  baseUrl: 'https://api.hnpwa.com/v0',
  

}
function fetchNewsList() {
  return axios.get(`${config.baseUrl}/news/1.json`)
  //return axios.get(`${config.baseUrl}/item/26060748.json`)
}


function fetchAskList() {
  return axios.get(`${config.baseUrl}/ask/1.json`)
}

function fetchJobsList() {
  return axios.get(`${config.baseUrl}/jobs/1.json`)
}

function fetchList(pageName) {
  return axios.get(`${config.baseUrl}/${pageName}/1.json`)
}



function fetchUserInfo(user_name) {
  return axios.get(`${config.baseUrl}/user/${user_name}.json`)
}

function fetchArticle(article_num) {
  return axios.get(`${config.baseUrl}/item/${article_num}.json`)
}



 
export {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUserInfo,
  fetchArticle,
  fetchList
}

