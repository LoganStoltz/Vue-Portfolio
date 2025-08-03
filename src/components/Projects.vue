<template>
  <section class="projects-main-section">
    <transition name="slide-in">
      <div class="projects-header" v-if="visibleHeader">
        <h1>My Projects</h1>
        <p>
          A showcase of work that combines thoughtful design and practical development. (PLACEHOLDER)
        </p>
      </div>
    </transition>

    <transition-group name="fade" tag="div" class="projects-section">
      <div
        class="project-card"
        v-for="(project, index) in visibleProjects"
        :key="project.id"
        :class="{ 'reverse': index % 2 !== 0 }"
      > <!--(project, index), The index is used to alternate which side the project displays on -->
        <div class="project-content">
          <h2>{{ project.title }}</h2>
          <p> {{ project.description }}</p>
        </div>
      </div>
    </transition-group>
  </section>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'Projects',
  setup() {
      const allProjects = [
        { id: 1, title: 'Project 1', description: 'An elegant solution to XYZ problem. (PLACEHOLDER)' },
        { id: 2, title: 'Project 2', description: 'Built with Vue and Tailwind, this project showcases responsiveness and state management. (PLACEHOLDER)' },
        { id: 3, title: 'Project 3', description: 'A data visualization dashboard featuring D3.js and REST APIs. (PLACEHOLDER)' }
      ];

      const visibleHeader = ref(false);
      const visibleProjects = ref([]);
      const delay = 900; 

      onMounted(() => {
        visibleHeader.value = true;
        allProjects.forEach((project, index) => {
          setTimeout(() => {
            visibleProjects.value.push(project);
          }, index * delay);
        });
      });
      
      return {
        visibleHeader,
        visibleProjects
      };
    }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');

.projects-main-section {
  font-family: 'Inter', sans-serif;
  background: var(--main-background-dark);
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

.projects-header {
  max-width: 1000px;
  margin: 0 auto;
  padding: 4rem 5% 2rem;
  text-align: center;
}

.projects-header h1 {
  font-size: 3rem;
  font-weight: 800;
  background: var(--heading-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
}

.projects-header p {
  font-size: 1.65rem;
  color: var(--text-muted);
  line-height: 1.7;
  padding-bottom: 4rem;
}

.projects-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.project-card {
  min-height: 85vh;
  background: var(--background-light);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 5%;
  box-sizing: border-box;
  width: 100%;
  box-shadow: var(--box-shadow-default);
}

/* Content wrapper */
.project-content {
  max-width: 800px;
  width: 100%;
}

.project-content h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--accent-blue);
  margin-bottom: 1rem;
}

.project-content p {
  font-size: 1.25rem;
  line-height: 1.7;
  color: var(--text-dark-on-light);
}

/* Alternating layout */
.project-card {
  flex-direction: row;
}

.project-card.reverse {
  flex-direction: row-reverse;
}

.project-card.reverse .project-content {
  text-align: right;
}

/* ANIMATION */
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
  .projects-header h1 {
    font-size: 2rem;
  }

  .projects-header p {
    font-size: 1.1rem;
  }

  .project-card {
    flex-direction: column !important;
    min-height: 100vh;
    padding: 2rem;
    justify-content: flex-start;
  }

  .project-content {
    text-align: center !important;
  }

  .project-content h2 {
    font-size: 2rem;
  }

  .project-content p {
    font-size: 1rem;
  }
}
</style>
