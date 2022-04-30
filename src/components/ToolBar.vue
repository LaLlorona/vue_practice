<template>
  <div class = "header">
    <div class = "title"><p>소마 연수생을 위한 해커 뉴스</p></div>
    <div class = "header">
      <router-link to ="/news">뉴스</router-link>
      <router-link to ="/ask">질문</router-link>
      <router-link to ="/jobs">구직</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .header .title{
    color: white;
    font-family: 'Nanum Gothic', sans-serif;
    font-size: 2rem;
  }
  .header div {
    display: flex;
    color: white;
    background-color: #42b883;  
    padding: .5rem 2rem;
    font-family: 'Nanum Gothic', sans-serif;
    font-size: 1.5rem;
    min-height: 3rem;
  }

  .header div a {
    display: block;
    align-self: end;
    color: black;
    padding: .2rem .4rem;
    margin: 0 .2rem;
    background-color: rgba(203, 226, 249, 0);
    transition: 0.3s ease background-color;
    transition: 0.3s ease font-size;
  }

  .header a:hover {
    text-decoration: none;
    background-color: rgba(203, 226, 249, 0.5);
  }

  .header .router-link-exact-active {
    color: white;
    font-size: 1.5em;
  }
</style>