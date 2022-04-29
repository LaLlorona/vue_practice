<template>
  <div class = "header">
    <router-link to ="/news">뉴스</router-link> |
    <router-link to ="/ask">질문</router-link> |
    <router-link to ="/jobs">구직</router-link> |
 
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .header {
    display: flex;
    color: white;
    background-color: #42b883;
    padding: 8px 8px 8px 8px;
  }

  .header .router-link-exact-active {
    color: white
  }

  .header a{
    color: black
  }

 
</style>