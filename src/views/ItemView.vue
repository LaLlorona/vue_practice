<template>
  <div>
    <section>
      <user-profile>
        <router-link slot = 'username' :to ='`/user/${ArticleInfo.article_info.by}`'>{{ArticleInfo.article_info.by}}</router-link>
        <template slot = 'time'>{{'posted ' + ArticleInfo.article_time}}</template>
      </user-profile>
    </section>
    <section>
      <h2>{{ArticleInfo.article_info.title}}</h2>
    </section>

    <section>
      <div v-html = "ArticleInfo.article_info.text"></div>
      
    </section>
  </div>
  
</template>

<script>
import UserProfile from '../components/UserProfile'
export default {
  components: {
    UserProfile
  },
  computed: {
    ArticleInfo() {
      let article_time = new Date(this.$store.state.article.time * 1000).toLocaleString();

      return {article_info: this.$store.state.article, article_time: article_time};
    },
    
  },
  created() {
    const article_id = this.$route.params.id;
    this.$store.dispatch('FETCH_ARTICLE', article_id)
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