<template>
  <div>
    <list-item></list-item>
    
  </div>
</template>

<script>
import ListItem from '../components/ListItem'

import ListMixin from '../mixins/ListMixin.js'

export default {
  components : {
    ListItem
  },
  mixins: [ListMixin],

  // created () {
    
  //   bus.$emit('start:spinner');
  //   setTimeout(() => {
  //     this.$store.dispatch('FETCH_JOBS')
  //     .then(() => {
  //       console.log('current store is')
  //       console.log(this.$store.news)
  //       bus.$emit('end:spinner')
        
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  //   }, 1500)
  // },
}
</script>

