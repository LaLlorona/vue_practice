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
    // bus.$emit('start:spinner');
    // setTimeout(() => {
    //   this.$store.dispatch('FETCH_NEWS')
    //   .then(() => {
    //     console.log('current store is')
    //     console.log(this.$store.news)
    //     bus.$emit('end:spinner')
        
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   })
    // }, 3000)
    // this.$store.dispatch('FETCH_NEWS')
    // .then(() => console.log(this.$store.state.news))




    //dispatch.then is not working well
    bus.$emit('start:spinner');
    this.$store.dispatch('FETCH_TOPSTORY')
    .then(() => {
      this.$store.dispatch('FETCH_NEW_TOPSTORY')
      .then(() => bus.$emit('end:spinner'))
    })
    

    // using settimeout works fine.
    // this.$store.dispatch('FETCH_TOPSTORY');
    // setTimeout(() => {
    //   this.$store.dispatch('FETCH_NEW_TOPSTORY')
    // }, 3000)
  },
  
}
</script>

<style>

</style>