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
export default {
  components: {
    UserProfile
  },
  computed: {
    UserInfo() {
      return this.$store.state.user
    }
  },
  created() {
    const user_name = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', user_name)
    
  },

  
}
</script>

<style>

</style>