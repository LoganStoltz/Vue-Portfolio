<template>
  <header class="header">
        <router-link to="/" class="btn-home">Home</router-link>
        <router-link to="/education" class="btn-education">Education</router-link>
        <router-link to="/projects" class="btn-projects">Projects</router-link>
        <router-link to="/contact" class="btn-contact">Contact Me</router-link>
  </header>
</template>

<script lang="ts">
import { defineComponent, TransitionGroup } from 'vue';

export default defineComponent({
  name: 'Header'
});

</script>

<style scoped>

/* MAIN HEADER SECTION */
.header {
  position: fixed;
  top: 0;
  left: 0;     
  width: 100%;  
  height: 6rem;        
  background-color: #8d8d8d;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  z-index: 1000;
}

/* NAVIGATION BUTTONS */
.nav {
  display: flex;
  gap: 4rem;
  animation: slideIn 0.5s ease-out;
}

.nav a {
  text-decoration: none;
  color: #ffffff; /* Deep Navy */
  font-size: x-large;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  transition: background-color 1s;
}

.nav a:hover {
  background-color: #37d4c7; /* Warm Gold */
  color: #01132e;            /* Soft White */
}

/* ANIMATION */
@keyframes slideIn {
  from {
    transform: translateX(1000px);
  }
  to {
    transform: translateX(0);
  }
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .header {
    padding: 0rem;
  }
  
  .nav {
    gap: 0rem
  }

  .nav a {
    font-size: 20px;
  }

}
</style>
