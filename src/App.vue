<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script lang="js">
import { defineComponent } from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      name: 'Logan Stoltz'
    };
  }
});
</script>

<style>
:root {
  /* Typography */
  --font-family-base: 'Inter', sans-serif;

  /* Colors - Backgrounds */
  --main-background-dark: linear-gradient(to right, #0f2027, #203a43, #2c5364);
  --background-light: #f7f9fc;
  --background-blue: #1e3a5f;
  --background-header: #1e425f;

  /* Colors - Text */
  --text-primary: #f4f4f4;
  --text-secondary: #d0d8e4;
  --text-dark: #1c2b38;
  --text-dark-on-light: #252525;
  --text-muted: #6b7a8f;
  --text-black: #000000;

  /* Colors - Accent & Brand */
  --accent-blue: #1a73e8;
  --accent-yellow: #ffd166;
  --heading-gradient: linear-gradient(90deg, #74ebd5, #ACB6E5);

  /* Shadows */
  --box-shadow-default: 0 12px 36px rgba(0, 0, 0, 0.08);
  --box-shadow-hover: 0 16px 40px rgba(0, 0, 0, 0.12);

  /* Border radius */
  --radius-large: 16px;
}


.slide-in-enter-active {
  transition: all 0.5s ease;
}
.slide-in-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.slide-in-enter-to {
  opacity: 1;
  transform: translateX(0);
}
</style>
