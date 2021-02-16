<template>
  <div>
    <user-profile>
      <div slot = 'username'>
        {{UserInfo.id}}
      </div>
      <span slot = 'time'>
        {{'joined ' + UserInfo.created}}, 
      </span>
      <span slot = 'karma'>
        {{UserInfo.karma}}
      </span>
    </user-profile>
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
    UserInfo() {
      return this.$store.state.user
    }
  },
  mounted() {
    bus.$emit('end:spinner')
  }

  
}
</script>

<style>

</style>