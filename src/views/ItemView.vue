<template>
  <div>
    <section>
      <user-profile>
        <router-link slot = 'username' :to ='`/user/${ArticleInfo.user}`'>{{ArticleInfo.user}}</router-link>
        <template slot = 'time'>{{'posted ' + ArticleInfo.time_ago}}</template>
      </user-profile>
    </section>
    <section>
      <h2>{{ArticleInfo.title}}</h2>
    </section>

    <section>
      <div v-html = "ArticleInfo.content"></div>
      
    </section>
  </div>
  
</template>

<script>
import UserProfile from '../components/UserProfile'
import bus from '../utils/bus.js'
export default {
  components: {
    UserProfile
  },
  computed: {
    ArticleInfo() {
      return this.$store.state.article
    },
    
  },
  // created() {
  //   const article_id = this.$route.params.id;
  //   this.$store.dispatch('FETCH_ARTICLE', article_id)
  // }
  mounted() {
    bus.$emit('end:spinner')
  }
}
</script>

<style scoped>
  .user-container {
    display: flex;
    align-items: center;
    padding: 0.5rem
  }

  .fa-users {
    font-size: 2.5rem
  }

  .user-description {
    padding-left: 8px
  }

  .time {
    font-size: 0.7rem
  }
</style>