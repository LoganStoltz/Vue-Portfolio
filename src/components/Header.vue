<template>
  <header class="header">
    <nav class="nav">
      <a href="#">Home</a>
      <a href="#">Education</a>
      <a href="#">Projects</a>
      <a href="#">Contact Me</a>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header'
});
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;     
  width: 100%;          
  background-color: #505050;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  z-index: 1000;
}

.nav {
  display: flex;
  gap: 2rem;
}

.nav a {
  text-decoration: none;
  color: #000000;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.nav a:hover {
  background-color: #e0e0e0;
}
</style>
