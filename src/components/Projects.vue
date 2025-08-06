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
        v-for="project in visibleProjects"
        :key="project.id"
      >
        <div class="project-content">
          <h2>{{ project.title }}</h2>
          <p> {{ project.description }}</p>
          <a :href="project.githubLink" class="github-link" target="_blank" rel="noopener">View on Github</a>
          <div v-if="project.projectLink">
            <a :href="project.projectLink" class="project-link" target="_blank" rel="noopener">View Project</a>
          </div>
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
        { id: 1, title: 'Project 1', githubLink: 'https://github.com/LoganStoltz/Vue-Portfolio', projectLink: 'https://example.com/project1', description: 'An elegant solution to XYZ problem. (PLACEHOLDER)' },
        { id: 2, title: 'Project 2', githubLink: 'https://github.com/LoganStoltz/CYK-Parser', description: 'Built with Vue and Tailwind, this project showcases responsiveness and state management. (PLACEHOLDER)' },
        { id: 3, title: 'Project 3', githubLink: 'https://github.com/LoganStoltz/LL-1-Parser', description: 'A data visualization dashboard featuring D3.js and REST APIs. (PLACEHOLDER)' }
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
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
  padding: 1rem 1rem;
  background: rgba(0, 0, 0, 0.192);
  border-radius: 16px;
  margin: 0rem 5rem;
}

.project-card {
  min-height: 50vh;
  background: var(--background-light);
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  margin: 1rem;
  box-sizing: border-box;
  box-shadow: var(--box-shadow-default);
  border-radius: 16px;
}

.project-card:hover {
  transform: translateY(-5px);
  transition: transform 0.3s ease;
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
