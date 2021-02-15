<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem'
import bus from '../utils/bus.js'
export default {
  components: {
    ListItem
  },
  created() {
    bus.$emit('start:spinner');
    setTimeout(() => {
      this.$store.dispatch('FETCH_NEWS')
      .then(() => {
        console.log('current store is')
        console.log(this.$store.news)
        bus.$emit('end:spinner')
        
      })
      .catch((err) => {
        console.log(err);
      }) 
    }, 1500)
    




    //dispatch.then is not working well
    // this.$store.dispatch('FETCH_TOPSTORY')
    // .then(() => this.$store.dispatch('FETCH_NEW_TOPSTORY'))

    // using settimeout works fine.
    
  },
  
}
</script>

<style>

</style>