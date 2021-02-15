<template>
  <div>
    <user-profile>
      <div slot = 'username'>
        {{UserInfo.userinfo.id}}
      </div>
      <span slot = 'time'>
        {{'joined ' + UserInfo.user_time}}, 
      </span>
      <span slot = 'karma'>
        {{UserInfo.userinfo.karma}}
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
      let made_time = new Date(this.$store.state.user.created * 1000);
      return {
        userinfo: this.$store.state.user, 
        user_time: made_time
      }
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