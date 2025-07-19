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
  background-color: #F5F7FA;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  z-index: 1000;
}

.nav {
  display: flex;
  gap: 4rem;
}

.nav a {
  text-decoration: none;
  color: #0B1F3F; /* Deep Navy */
  font-size: x-large;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  transition: background-color 0.3s;
}

.nav a:hover {
  background-color: #D4AF37; /* Warm Gold */
  color: #F5F7FA;            /* Soft White */
}
</style>
