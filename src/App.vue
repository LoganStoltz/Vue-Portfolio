<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script lang="js">
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
</style>
