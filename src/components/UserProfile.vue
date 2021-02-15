<template>
  <div>
    <div class = 'user-container'>
      <i class="fas fa-users"></i>
      <div class = 'user-description'>
        <slot name = 'username'>
        </slot>
        <div class = 'time'>
          <slot name = 'time'>

          </slot>
        </div>

        <slot name = 'karma'>

        </slot>

        
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: Object,

  },
  // computed: {
  //   UserInfo() {
  //     return this.$store.state.user;
  //   },
  //   UserCreatedTime() {
  //     return new Date(this.$store.state.user.created * 1000).toLocaleString();
  //   }
  // },

  
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