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
        :key="project.title"
      >
        <div class="project-content">
          <h2>{{ project.title }}</h2>
          <div class="project-meta">
            <div class="project-meta-row">
              <span class="project-meta-label">Tools</span>
              <div class="project-tags">
                <span
                  v-for="tool in splitProjectMeta(project.tools)"
                  :key="`${project.title}-${tool}`"
                  class="project-tag"
                >
                  {{ tool }}
                </span>
              </div>
            </div>
            <div class="project-meta-row">
              <span class="project-meta-label">Languages</span>
              <div class="project-tags project-tags-languages">
                <span
                  v-for="language in splitProjectMeta(project.languages)"
                  :key="`${project.title}-${language}`"
                  class="project-tag project-tag-language"
                >
                  {{ language }}
                </span>
              </div>
            </div>
          </div>
          <p> {{ project.description }}</p>
          <div class="project-links">
            <a 
              :href="project.githubLink" 
              class="github-link" 
              target="_blank" 
              rel="noopener"
              >
                View on Github
            </a>
            <a 
              v-if="project.projectLink"
              :href="project.projectLink" 
              class="project-link" 
              target="_blank" 
              rel="noopener"
              >
                View Project
              </a>
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
        { title: 'Family Habit & Activity Tracker', tools: 'Visual Studio Code, AWS (Amplify, Route 53, and EC2), Vue.js, Ruby on Rails, Github', languages: 'HTML, Javascript, CSS, Ruby', githubLink: 'https://github.com/LoganStoltz/Family-Habit-and-Activity-Tracker', /*projectLink: 'https://familyhabittracker.com',*/ description: 'The Family Habit & Activity Tracker is a multi-profile app built with Vue.js. It allows users to keep an eye on their personal goals and manage their baby’s essentials in one place. Adults can track their own habits like hydration, workouts, or sleep, while also logging baby-specific activities like feeding times, diaper changes, and milestones. By combining habit tracking for adults with structured baby care logging, the app makes it easier for parents to maintain balance, stay healthy, and have all the data they need at their fingertips — whether for personal wellness or for sharing with a pediatrician.' },  
        { title: 'Data Structure Visualizer', tools: 'Visual Studio Code, Firebase, Github', languages: 'HTML, Javascript, CSS', githubLink: 'https://github.com/Evebarr20/data-structure-visualizer', projectLink: 'https://datastructurevisualizer.netlify.app/stack', description: 'I worked with a team to develop an online data structure visualizer aimed at helping students understand key concepts like Stacks, Doubly Linked Lists, Binary Search Trees, and Max-Heaps. My contribution focused on building the Stack page, where I created an interactive control panel allowing users to push, pop, peek, and clear elements in a stack, with real-time visual updates and an adjustable animation speed. I also implemented educational sections that showcased stack implementations in Python, C, and Java, along with a detailed breakdown of time complexities and common use cases. This project was shaped by feedback from our professors at Eastern Washington University, who guided us toward addressing the areas students struggle with the most.' },
        { title: 'Vue Portfolio', tools: 'Visual Studio Code, Github, AWS (Amplify, and Route 53), Vite, Vue.js', languages: 'HTML, Javascript, CSS', githubLink: 'https://github.com/LoganStoltz/Vue-Portfolio', projectLink: 'https://loganjstoltz.com', description: 'I built a modern, mobile-friendly portfolio using Vue.js and Vite to showcase my projects, education, and skills. It’s got dedicated sections for Home, Education, Projects, External Links, Resume, and Contact, all tied together with a clean, responsive navigation bar. I designed custom components, added SVG icons, smooth animations, and even an embedded PDF viewer for my resume. The site is fast, easy to navigate, and hosted on AWS Amplify.' },
        { title: 'Stardew Valley Planner', tools: 'Visual Studio Code, AWS (Amplify, Route 53, and EC2), Vue.js, Ruby on Rails, Github', languages: 'HTML, Javascript, CSS, Ruby', githubLink: 'https://github.com/LoganStoltz/stardew-planner', /*projectLink: 'https://example.com/project1',*/ description: 'The Stardew Planner is a Ruby on Rails powered web app I built to min‑max Stardew Valley farming profits. It compares crops by season, estimates expected yield and revenue, and helps plan the most profitable greenhouse setups. There are plans to implement a Discord bot that pulls from the same backend data for ease of use for multiplayer farms.' },
        { title: 'LL(1) Parser', tools: 'IntelliJ IDEA, Github', languages: 'Java', githubLink: 'https://github.com/LoganStoltz/LL-1-Parser', description: 'This program uses the LL(1) algorithm to process text input containing context-free grammars (CFGs) and evaluates strings to determine whether they belong to the languages defined by the corresponding CFGs. It can compute the FIRST and FOLLOWS for each non-terminal, constructing an LL(1) Parse Table from them to compute whether the grammar is in LL(1), and then applying language membership tests based on the LL(1) parsing algorithm.' },
        { title: 'CYK Parser', tools: 'IntelliJ IDEA, Github', languages: 'Java', githubLink: 'https://github.com/LoganStoltz/CYK-Parser', description: 'This program uses the Cocke–Younger–Kasami (CYK) algorithm to process a text input containing Context-Free Grammars (CFGs) and evaluates strings to determine whether they belong to the languages defined by the corresponding CFGs. It can parse grammars, construct parse trees, and apply language membership tests based on CYK parsing algorithms. The program has a time complexity of O(n^3 · |G|), where n is the length of the input string and |G| is the size of the grammar.' }
        //{ title: 'Example', tools: 'Visual Studio Code, Firebase, Github', languages: 'HTML, Javascript, CSS', githubLink: 'https://example.com/Github', projectLink: 'https://example.com/project1', description: '(PLACEHOLDER)' }
      ];

      const visibleHeader = ref(false);
      const visibleProjects = ref([]);
      const delay = 600; 

      const splitProjectMeta = (value) => {
        const entries = [];
        let currentEntry = '';
        let parenDepth = 0;

        for (const character of value) {
          if (character === '(') {
            parenDepth += 1;
          } else if (character === ')' && parenDepth > 0) {
            parenDepth -= 1;
          }

          if (character === ',' && parenDepth === 0) {
            const trimmedEntry = currentEntry.trim();

            if (trimmedEntry) {
              entries.push(trimmedEntry);
            }

            currentEntry = '';
            continue;
          }

          currentEntry += character;
        }

        const trimmedEntry = currentEntry.trim();

        if (trimmedEntry) {
          entries.push(trimmedEntry);
        }

        return entries;
      };

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
        visibleProjects,
        splitProjectMeta
      };
    }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');

.projects-main-section {
  font-family: 'Inter', sans-serif;
  background: var(--main-background-dark);
  overflow-x: hidden;
  min-height: 100vh;
}

.projects-header {
  margin: 6rem 2rem;
  text-align: center;
}

.projects-header h1 {
  font-size: 3rem;
  font-weight: 800;
  background: var(--heading-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
}

.projects-header p {
  font-size: 1.65rem;
  color: var(--text-muted);
  line-height: 1.7;
}

.projects-section {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30vw, 1fr));
  background: rgba(0, 0, 0, 0.192);
  border-radius: 16px;
  padding: 2rem;
  margin: 2rem;
}

.project-card {
  min-height: 50vh;
  background: var(--background-light);
  display: flex;
  flex-direction: column; 
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
  display: flex;
  flex-direction: column;
  flex: 1;
}

.project-content h2 {
  width: calc(100% + 4rem);
  text-align: center;
  font-size: 2.3rem;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: #70e2ff;
  margin: -2rem 0 1.25rem -2rem;
  padding: 1.35rem 2rem 1.15rem;
  background: linear-gradient(135deg, #14476c 0%, #1b6897 100%);
  border-radius: 16px 16px 0 0;
}

.project-meta {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  margin-bottom: 1rem;
  align-items: center;
}

.project-meta-row {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  align-items: center;
}

.project-meta-label {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent-blue);
  text-align: center;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  justify-content: center;
}

.project-tag {
  display: inline-flex;
  align-items: center;
  min-width: 0;
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  background: rgba(6, 52, 92, 0.08);
  border: 1px solid rgba(6, 52, 92, 0.12);
  color: var(--text-dark);
  font-size: 0.92rem;
  font-weight: 600;
  line-height: 1.35;
}

.project-tag-language {
  background: rgba(255, 199, 87, 0.18);
  border-color: rgba(255, 199, 87, 0.35);
}

.project-content p {
  font-size: 1.2rem;
  line-height: 1.7;
  color: var(--text-dark-on-light);
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  text-align: left;
}

.project-links {
  display: flex;
  margin-top: auto;
  gap: 1rem;
  width: 100%;
}

.project-links a {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--background-blue);
  color: var(--text-primary);
  padding: 1rem;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
  text-decoration: none;
}

.project-links a:hover {
  background-color: var(--accent-yellow);
  color: var(--background-header);
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
    gap: 1.5rem;
    overflow-y: hidden;
  }
  .projects-header h1 {
    font-size: 2.75rem;
  }

  .projects-header p {
    font-size: 1.1rem;
  }

  .project-card {
    flex-direction: column !important;
    min-height: fit-content;
    padding: 1rem;
    margin: 0rem ;
    justify-content: flex-start;
  }

  .project-content {
    text-align: center !important;
  }

  .project-content h2 {
    width: calc(100% + 2rem);
    font-size: 2rem;
    margin: -1rem 0 1rem -1rem;
    padding: 1.1rem 1rem 0.95rem;
  }

  .project-tag {
    font-size: 0.85rem;
    padding: 0.3rem 0.6rem;
  }

  .project-content p {
    font-size: 0.85rem;
  }

    .project-links a {
    font-size: 0.8rem;
    font-weight: 400;
  }
}
</style>
