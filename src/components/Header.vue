<template>
  <header class="header">
    <transition name="slideIn">
       <nav class="nav" v-if="isVisible">
        <router-link to="/" class="btn-home">Home</router-link>
        <router-link to="/education" class="btn-education">Education</router-link>
        <router-link to="/projects" class="btn-projects">Projects</router-link>
        <router-link to="/contact" class="btn-contact">Contact Me</router-link>
      </nav>
    </transition>
  </header>
</template>

<script lang="js">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'Header',
  setup() {
    const isVisible = ref(false);

    onMounted(() => {
      // Trigger animation after mount
      setTimeout(() => {
        isVisible.value = true;
      }, 100);
    });

    return {
      isVisible
    };
  }
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
.slideIn-enter-from {
  transform: translateX(1000px);
}

.slideIn-enter-to {
  transform: translateX(0);
}

.slideIn-enter-active {
  transition: transform 1s ease;
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
