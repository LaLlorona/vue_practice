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
    //dispath.then work only when it returns promise 
    bus.$emit('start:spinner');
    this.$store.dispatch('FETCH_TOPSTORY')
    .then(() => {
      this.$store.dispatch('FETCH_NEW_TOPSTORY')
      .then(() => bus.$emit('end:spinner'))
    })
    
  },
  
}
</script>

<style>

</style>