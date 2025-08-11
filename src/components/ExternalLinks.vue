<template>
  <section class="contact-main-section">
    <transition name="slide-in">
      <div class="contact-header" v-if="visibleHeader">
        <h1>Links and Social Media</h1>
        <p> Welcome to the links and External wepsites page. Feel free to look at all my work and contributions</p>
      </div>
    </transition>
    <div class="contact-section">
      <div class="contact-image">
        <img src="@/assets/contact-page-image.png.png" alt="Logan Stoltz" />
      </div>

      <transition-group name="fade" tag="div" class="contact-links">
        <a
          class="contact-link"
          target="_blank"
          rel="noopener"
          v-for="conlink in visibleConlinks"
          :key="conlink.id"
          :href="conlink.link"
        >
          <h3>{{ conlink.name }}</h3>
          <component :is="conlink.icon" width="50" height="50" />
        </a>
      </transition-group>
    </div>
  </section>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';
import GithubIcon from '@/assets/github.svg';
import LinkedInIcon from '@/assets/linkedin.svg';
import HackerRankIcon from '@/assets/hackerrank.svg';
import LeetCodeIcon from '@/assets/leetcode.svg';

export default defineComponent({
  name: 'Links',
  setup() {
    const allConlinks = [
      { id: 1, name: 'GitHub', link: 'https://github.com/LoganStoltz', icon: GithubIcon},
      { id: 2, name: 'LinkedIn', link: 'https://www.linkedin.com/in/logan-stoltz/', icon: LinkedInIcon},
      { id: 3, name: 'HackerRank', link: 'https://www.hackerrank.com/profile/loganstoltz1234', icon: HackerRankIcon},
      { id: 4, name: 'LeetCode', link: 'https://leetcode.com/u/lstoltz/', icon: LeetCodeIcon}
    ];

    const visibleHeader = ref(false);
    const visibleConlinks = ref([]);
    const delay = 500;

    onMounted(() => {
      visibleHeader.value = true;
      allConlinks.forEach((conlink, index) => {
        setTimeout(() => {
          visibleConlinks.value.push(conlink);
        }, index * delay);
      });
    });

    return {
      visibleHeader,
      visibleConlinks
    };
  }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');

.contact-main-section {
  font-family: 'Inter', sans-serif;
  background: var(--main-background-dark);
  padding: 4rem 5%;
  min-height: 100vh;
  overflow-x: hidden;
}

.contact-header {
  text-align: center;
  margin-bottom: 2rem;
}

.contact-header h1 {
  font-size: 3rem;
  font-weight: 800;
  background: var(--heading-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
}

.contact-header p {
  font-size: 1.65rem;
  color: var(--text-muted);
  line-height: 1.7;
}

/* Contact Info + Image Section */
.contact-section {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 5rem;
  gap: 2rem;
}

.contact-links {
  flex: 1;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1.2rem;
  margin-top: 1rem;
}

.contact-links a {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.contact-link {
  background: var(--background-light);
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: var(--box-shadow-default);
  transition: transform 0.2s, background-color 0.3s;
  text-decoration: none;
}

.contact-link:hover {
  background-color: var(--accent-yellow);
  transform: translateY(-3px);
}

.contact-link h3 {
  font-size: 2rem;
  font-weight: 700;
  color: var(--accent-blue);
}

/* Image */
.contact-image {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-image img {
  max-width: 100%;
  max-height: 533px;
  border-radius: 16px;
}

.fade-enter-active {
  transition: all 0.5s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}

/* Responsive */
@media (max-width: 768px) {
  .contact-section {
    flex-direction: column;
  }

  .contact-header h1 {
    font-size: 2rem;
  }

  .contact-header p {
    font-size: 1.1rem;
  }
}
</style>
