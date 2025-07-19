<template>
  <div id="app">
    <Header />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header
  },
  data() {
    return {
      name: 'Logan Stoltz'
    };
  }
});
</script>

<style>
/* You can leave this empty or add global styles */
</style>
