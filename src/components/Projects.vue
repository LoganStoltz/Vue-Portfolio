<template>
  <section class="projects-main-section">
    <transition name="slide-in">
      <div class="projects-header" v-if="visibleHeader">
        <h1>My Projects</h1>
        <p>
          Here is a collection of my projects that I have worked on. Each project showcases my skills in web development, programming, and problem-solving. Feel free to explore the details of each project and see the technologies I used.
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
          <h4>{{ project.tools }}</h4>
          <h4>{{ project.languages }}</h4>
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
        { id: 1, title: 'Data Structure Visualizer', tools: 'Visual Studio Code, Firebase, Github', languages: 'HTML, Javascript, CSS', githubLink: 'https://github.com/Evebarr20/data-structure-visualizer', projectLink: 'https://datastructurevisualizer.netlify.app/stack', description: 'I worked with a team to develop an online data structure visualizer aimed at helping students understand key concepts like Stacks, Doubly Linked Lists, Binary Search Trees, and Max-Heaps. My contribution focused on building the Stack page, where I created an interactive control panel allowing users to push, pop, peek, and clear elements in a stack, with real-time visual updates and an adjustable animation speed. I also implemented educational sections that showcased stack implementations in Python, C, and Java, along with a detailed breakdown of time complexities and common use cases. This project was shaped by feedback from our professors at Eastern Washington University, who guided us toward addressing the areas students struggle with the most.' },
        { id: 2, title: 'CYK Parser', tools: 'Visual Studio Code, Firebase, Github', languages: 'HTML, Javascript, CSS', githubLink: 'https://github.com/LoganStoltz/CYK-Parser', description: 'This program uses the Cocke–Younger–Kasami (CYK) algorithm to process a text input containing Context-Free Grammars (CFGs) and evaluates strings to determine whether they belong to the languages defined by the corresponding CFGs. It can parse grammars, construct parse trees, and apply language membership tests based on CYK parsing algorithms. The program has a time complexity of O(n^3 · |G|), where n is the length of the input string and |G| is the size of the grammar.' },
        { id: 3, title: 'LL(1) Parser', tools: 'Visual Studio Code, Firebase, Github', languages: 'HTML, Javascript, CSS', githubLink: 'https://github.com/LoganStoltz/LL-1-Parser', description: 'This program uses the LL(1) algorithm to process text input containing context-free grammars (CFGs) and evaluates strings to determine whether they belong to the languages defined by the corresponding CFGs. It can compute the FIRST and FOLLOWS for each non-terminal, constructing an LL(1) Parse Table from them to compute whether the grammar is in LL(1), and then applying language membership tests based on the LL(1) parsing algorithm.' },
        { id: 4, title: 'Vue Portfolio', tools: 'Visual Studio Code, Firebase, Github', languages: 'HTML, Javascript, CSS', githubLink: 'https://github.com/LoganStoltz/Vue-Portfolio', projectLink: 'https://loganstoltz.com', description: 'This Portfolio' }//,
        //{ id: 5, title: 'Example', tools: 'Visual Studio Code, Firebase, Github', languages: 'HTML, Javascript, CSS', githubLink: 'https://example.com/Github', projectLink: 'https://example.com/project1', description: '(PLACEHOLDER)' }
      ];

      const visibleHeader = ref(false);
      const visibleProjects = ref([]);
      const delay = 600; 

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
  max-width: 75vw;
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
  grid-template-columns: repeat(auto-fill, minmax(30vw, 1fr));
  padding: 1rem 1rem;
  background: rgba(0, 0, 0, 0.192);
  border-radius: 16px;
  margin: 0rem 5rem;
}

.project-card {
  min-height: 50vh;
  background: var(--background-light);
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
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--accent-blue);
  margin-bottom: 0.1rem;
}

.project-content h4 {
  text-align: center;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-dark-on-light);
}

.project-content p {
  font-size: 1.2rem;
  line-height: 1.7;
  color: var(--text-dark-on-light);
  margin-top: 1rem;
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
@media (max-width: 1130px) {
  .projects-section {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .projects-section {
    grid-template-columns: 1fr;
    padding: 1rem;
    margin: 0;
  }
  .projects-header h1 {
    font-size: 2rem;
  }

  .projects-header p {
    font-size: 1.1rem;
  }

  .project-card {
    flex-direction: column !important;
    min-height: 100vh;
    padding: 1rem;
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
