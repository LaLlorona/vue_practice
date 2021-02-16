
import bus from '../utils/bus.js'
export default {
  //reusable component optoins 
  // created() {

  //   bus.$emit('start:spinner');

  //   this.$store.dispatch('FETCH_LIST', this.$route.name)
  //     .then(() => {
  //       console.log('current store is')
  //       console.log(this.$store.news)
  //       bus.$emit('end:spinner')

  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
    

  // },

  mounted() {
    bus.$emit('end:spinner')
  }
}

