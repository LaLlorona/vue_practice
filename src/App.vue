<template>
  <div id="app">
    <tool-bar></tool-bar>
    <!-- <transition name = 'fade'> -->

      <router-view></router-view>
    <!-- </transition> -->
    <spinner :loading = 'loading_status'></spinner>
  </div>
</template>

<script>

import ToolBar from './components/ToolBar.vue';
import Spinner from './components/Spinner.vue';
import bus from './utils/bus.js';

export default {
  components: {
    ToolBar,
    Spinner
  },
  data() {
    return {
      loading_status: false,
    };
  },
  created() {
    bus.$on('start:spinner',this.startSpinner);
    bus.$on('end:spinner',this.endSpinner);
  },
  beforeDestroy() {
    bus.$off('start:spinner', this.startSpinner);
    bus.$off('end:spinner', this.endSpinner);
  },
  methods: {
    startSpinner() {
      this.loading_status = true;
    },
    endSpinner() {
      this.loading_status = false;
    }
  },
};
</script>

<style>
a {
  color: #34495e;
  text-decoration: none;
}

a:hover {
  color: #42b883;
  text-decoration: underline;
}

a.router-link-exact-active {
  text-decoration: underline;
}
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>


