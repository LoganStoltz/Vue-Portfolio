<template>
  <section class="projects-main-section">
    <div class="projects-header">
      <h1>My Projects</h1>
      <p>
        A showcase of work that combines thoughtful design and practical development.
      </p>
    </div>

    <div class="projects-section">
      <div
        class="project-card"
        v-for="(project, index) in projects"
        :key="project.id"
        :class="{ 'reverse': index % 2 !== 0 }"
      >
        <div class="project-content">
          <h2>{{ project.title }}</h2>
          <p>{{ project.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      name: 'Projects',
      projects: [
        { id: 1, title: 'Project 1', description: 'An elegant solution to XYZ problem.' },
        { id: 2, title: 'Project 2', description: 'Built with Vue and Tailwind, this project showcases responsiveness and state management.' },
        { id: 3, title: 'Project 3', description: 'A data visualization dashboard featuring D3.js and REST APIs.' }
      ]
    };
  }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');

.projects-main-section {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
  color: #f4f4f4;
  margin: 0;
  padding: 0;
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
  background: linear-gradient(90deg, #74ebd5, #ACB6E5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
}

.projects-header p {
  font-size: 1.25rem;
  color: #d0d8e4;
  line-height: 1.7;
}

.projects-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.project-card {
  min-height: 85vh;
  background: #f7f9fc;
  color: #1c2b38;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 5%;
  box-sizing: border-box;
  width: 100%;
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.08);
}

/* Content wrapper */
.project-content {
  max-width: 800px;
  width: 100%;
}

.project-content h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a73e8;
  margin-bottom: 1rem;
}

.project-content p {
  font-size: 1.25rem;
  line-height: 1.7;
  color: #333;
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
