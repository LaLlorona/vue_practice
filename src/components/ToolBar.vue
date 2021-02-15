<template>
  <div class = "header">
    <router-link to ="/news">News</router-link> |
    <router-link to ="/ask">Ask</router-link> |
    <router-link to ="/jobs">Jobs</router-link> |
    <router-link to ="/user">Users</router-link> |
    <router-link to ="/item">Items</router-link> |
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