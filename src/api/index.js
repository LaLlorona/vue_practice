import axios from 'axios'

const config = {
  baseUrl: 'https://hacker-news.firebaseio.com/v0',
  

}
function fetchNewsList() {
  return axios.get(`${config.baseUrl}/topstories.json`)
  //return axios.get(`${config.baseUrl}/item/26060748.json`)
}

function fetchArticles(num) {
  return axios.get(`${config.baseUrl}/item/${num}.json`)
}

function fetchAskList() {
  return axios.get(`${config.baseUrl}posts`)
}

function fetchJobsList() {
  return axios.get(`${config.baseUrl}todos`)
}

function fetchUserInfo(user_name) {
  return axios.get(`${config.baseUrl}/user/${user_name}.json`)
}


export {
  fetchNewsList,
  fetchArticles,
  fetchAskList,
  fetchJobsList,
  fetchUserInfo,
}

