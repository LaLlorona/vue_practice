<template>
  <div>
    <ul class = "news-list">
      <li v-for = "item in listItems" :key = 'item.id' class = "post">
        <div class = "points">
          {{item.score}}
        </div>
        <div>
          <p class = "news-title">
            <template v-if ='item.url'>
              <a :href = "item.url">{{item.title}}</a>
            </template>
            
            <template v-else>
              <router-link :to = '`/item/${item.id}`'>{{item.title}}</router-link>
            </template>
          </p>
          <small class = "link-text">
            by <router-link class = "link-text" :to = '`/user/${item.by}`'>{{item.by}}</router-link>
          </small>
        </div>
      </li>
    </ul>
  

  </div>
</template>

<script>


//import axios from 'axios'

export default {
  computed: {
    listItems() {
      const name = this.$route.name;
      if (name === 'news') {
        return this.$store.state.news
      }
      else if (name ==='ask') {
        return this.$store.state.asks
      }
      else if (name === 'jobs') {
        return this.$store.state.jobs
      }
      else {
        return 'asdf'
      }
    }
  },
  
  created() {
    // const name = this.$route.name;
    // if (name === 'news') {
    //   this.$store.dispatch('FETCH_NEWS')
    // }
    // else if (name ==='ask') {
    //   this.$store.dispatch('FETCH_ASKS')
    // }
    // else if (name === 'jobs') {
    //   this.$store.dispatch('FETCH_JOBS')
    // }
  },

  

  
}
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}

.post {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.points {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #41b883;
}

.news-title {
  margin: 0;
}

.link-text {
  color: #828282
}
</style>