<template>
  <header class="header">
    <!-- Desktop Navigation -->
    <transition name="slideIn">
      <nav class="nav" v-if="isVisible && !mobile">
        <router-link to="/" class="btn-home">Home</router-link>
        <router-link to="/education" class="btn-education">Education</router-link>
        <router-link to="/projects" class="btn-projects">Projects</router-link>
        <router-link to="/externalLinks" class="btn-contact">External links</router-link>
        <router-link to="/resume" class="btn-projects">Resume</router-link>
        <router-link to="/contact" class="btn-contact">Contact Me</router-link>
      </nav>
    </transition>

    <!-- Hamburger Icon (Mobile Only) -->
  <div v-if="mobile">
    <img
      :src="hamburgerIcon"
      alt="Menu"
      class="hamburger-icon"
      :class="{ 'icon-active': mobileNav }"
      @click="toggleMobileNav"
    />
  </div>

    <!-- Mobile Slide-out Navigation -->
    <transition name="mobile-nav">
      <nav class="dropdown-nav" v-show="mobileNav">
        <router-link @click="closeMobileNav" to="/" class="mobile-btn-home">Home</router-link>
        <router-link @click="closeMobileNav" to="/education" class="mobile-btn-education">Education</router-link>
        <router-link @click="closeMobileNav" to="/projects" class="mobile-btn-projects">Projects</router-link>
        <router-link @click="closeMobileNav" to="/externalLinks" class="mobile-btn-contact">External links</router-link>
        <router-link @click="closeMobileNav" to="/resume" class="mobile-btn-projects">Resume</router-link>
        <router-link @click="closeMobileNav" to="/contact" class="mobile-btn-contact">Contact Me</router-link>
      </nav>
    </transition>
  </header>
</template>

<script lang="js">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue';
import hamburgerIcon from '@/assets/hamburgerIcon.svg?url'

export default defineComponent({
  name: 'Header',
  setup() {
    const isVisible = ref(false);
    const mobileNav = ref(false);
    const mobile = ref(window.innerWidth <= 1225);

    const toggleMobileNav = () => {
      mobileNav.value = !mobileNav.value;
    };

    const closeMobileNav = () => {
      mobileNav.value = false;
    };

    const handleResize = () => {
      mobile.value = window.innerWidth <= 1225;
      if (!mobile.value) mobileNav.value = false; // Close if resizing to desktop
    };

    onMounted(() => {
      setTimeout(() => {
        isVisible.value = true;
      }, 100);
      window.addEventListener('resize', handleResize);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', handleResize);
    });

    return {
      isVisible,
      mobile,
      mobileNav,
      toggleMobileNav,
      closeMobileNav,
      hamburgerIcon
    };
  }
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');

/* MAIN HEADER SECTION */
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 6rem;
  background-color: var(--background-header, #1e3a5f);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

/* NAVIGATION BUTTONS (DESKTOP) */
.nav {
  display: flex;
  gap: 4rem;
}

.nav a {
  text-decoration: none;
  color: #f4f4f4;
  font-size: x-large;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  transition: background-color 0.3s, color 0.3s;
}

.nav a:hover {
  background-color: #ffd166;
  color: #1e3a5f;
}

/* HAMBURGER ICON (MOBILE) */
.hamburger-icon {
  height: 3.5rem;
  width: 3.5rem;
  position: absolute;
  right: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 1001;
  filter: brightness(0) invert(1);
  transition: filter 1s ease;
}

.icon-active {
  filter: brightness(0) saturate(100%) sepia(100%) hue-rotate(30deg) brightness(1.2);
}

/* MOBILE NAV MENU */
.dropdown-nav {
  position: fixed;
  top: 6rem;
  right: 0;
  width: 70%;
  max-width: 300px;
  background-color: var(--dropdown-nav);
  display: flex;
  flex-direction: column;
  box-shadow: -2px 2 10px rgba(0, 0, 0, 0.2);
  z-index: 999;
}

.dropdown-nav a {
  color: #f4f4f4;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  transition: color 0.3s ease;
  padding: 1.5rem 2rem;
}

.dropdown-nav a:hover {
  color: #ffd166;
  background: var(--background-header);
}

/* SLIDE-IN ANIMATION (DESKTOP NAV) */
.slideIn-enter-from {
  transform: translateX(1000px);
}
.slideIn-enter-to {
  transform: translateX(0);
}
.slideIn-enter-active {
  transition: transform 1s ease;
}

/* MOBILE NAV SLIDE ANIMATION */
.mobile-nav-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.mobile-nav-enter-to {
  transform: translateX(0);
  opacity: 1;
}
.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: all 0.3s ease;
}
.mobile-nav-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

/* RESPONSIVE DESIGN */
@media (max-width: 1225px) {
  .nav {
    display: none;
  }

  .header {
    justify-content: flex-start;
    padding: 0 1rem;
  }

  .dropdown-nav a:last-child {
    border-bottom-left-radius: var(--radius-large);
  }
}

@media (max-width: 768px) {
  .dropdown-nav {
    width: 55%;
    max-width: 300px;
    z-index: 999;
    border-bottom-left-radius: var(--radius-large);
  }

  .dropdown-nav a {
    font-size: 1.3rem;
    font-weight: bold;
    padding: 1.2rem 1.75rem;
  }
}

@media (max-width: 499px) {
  .header {
    height: 3.5rem;
  }
  .dropdown-nav {
    top: 3.5rem;
  }
}
</style>
