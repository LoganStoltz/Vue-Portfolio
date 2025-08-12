<template>
  <section class="home">
    <!-- Hero Section -->
    <transition name="fade" @after-enter="revealNextSection">
      <div class="hero" v-if="visibleSections.hero">
        <h1 class="name">{{ name }}</h1>
        <p class="tagline">I'm a Software Developer!</p>
        <p class="tagline">Feel free to look around to learn more about my projects and contributions.</p>
      </div>
    </transition>

    <div class="content">
      <transition name="fade" @after-enter="revealNextSection">
        <div class="section mission" v-if="visibleSections.mission">
          <h2>Mission Statement</h2>
          <p>I am pursuing an opportunity as an intern or entry-level software developer to apply my technical competencies and commitment to professional growth in support of meaningful and innovative projects.</p>
          <p>I aspire to develop my skills further through collaboration with experienced professionals and by engaging in challenging assignments that contribute to organizational success. I am dedicated to delivering high-quality results while continuously enhancing my expertise within a structured and collegial environment.</p>
        </div>
      </transition>

      <transition name="fade" @after-enter="revealNextSection">
        <div class="section about" v-if="visibleSections.about">
          <h2>About Me</h2>
          <p>My name is Logan Stoltz. I'm a Software Developer and a recent graduate from Eastern Washington University, where I earned my Bachelor of Science in Computer Science in June 2025.</p>
          <p>Through a combination of academic projects and personal development work, I’ve developed strong proficiency in technologies such as Java, Python, C#, HTML, CSS, JavaScript, and SQL...</p>
          <p>I’m passionate about solving real-world problems through clean, scalable code. Whether I’m developing a web application or tackling a complex technical challenge, I bring a thoughtful, solution-oriented mindset to every project.</p>
        </div>
      </transition>
    </div>
  </section>
</template>


<script>
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'Home',
  setup() {
    const name = 'Logan Stoltz';

    const visibleSections = ref({
      hero: false,
      mission: false,
      about: false,
    });

    const sectionOrder = ['hero', 'mission', 'about'];
    let current = 0;

    const revealNextSection = () => {
      current += 1;
      if (current < sectionOrder.length) {
        const next = sectionOrder[current];
        visibleSections.value[next] = true;
      }
    };

    onMounted(() => {
      // Start the animation
      visibleSections.value.hero = true;
    });

    return {
      name,
      visibleSections,
      revealNextSection,
    };
  }
});
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');

.home {
  font-family: 'Inter', sans-serif;
  background: var(--main-background-dark);
  overflow-x: hidden;
}

/* HERO SECTION */
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 4rem 5%;
  background: var(--main-background-dark);
}

.name {
  font-size: 9rem;
  font-weight: 900;
  background: var(--heading-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 2rem;
  line-height: 1.2;
  margin: 0 auto;
  margin-top: -10rem;
}

.tagline {
  font-size: 2rem;
  color: var(--text-muted);
  font-weight: 500;
  max-width: 90%;
  line-height: 1.7;
  margin: 0 auto;
}

/* MAIN CONTENT BELOW HERO */
.content {
  padding: 2rem;
  background: rgba(0, 0, 0, 0.192);
  border-radius: 16px;
  margin-left: 5rem;
  margin-right: 5rem;
  gap: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* SECTION BOX */
.section {
  background: var(--background-light);
  padding: 2rem 3rem;
  border-radius: 16px;
  box-shadow: var(--box-shadow-default);
}

.section h2 {
  font-size: 2.5rem;
  color: var(--accent-blue);
  font-weight: 800;
  text-align: center;
}

.section p {
  font-size: 1.5rem;
  color: var(--text-dark-on-light);
  line-height: 2;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.grid-layout {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: stretch;
}


/* ANIMATION */
.fade-enter-active {
  transition: all 0.6s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
.fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}


/* RESPONSIVE */
@media (max-width: 1030px) {
  .name {
    font-size: 6rem;
  }

  .hero p {
    font-size: 1.35rem;
  }
}

@media (max-width: 768px) {
  .name {
    font-size: 4rem;
  }

  .tagline {
    font-size: 1.5rem;
  }

  .content {
    gap: 4rem;
    margin: 0;
    padding: 1rem;
    overflow-y: hidden;
  }

  .section {
    padding: 1rem;
  }

  .section h2 {
    font-size: 2rem;
  }

  .section p {
    font-size: 1rem;
  }

  .link-button {
    font-size: 1rem;
    padding: 0.8rem 1.2rem;
  }

  .grid-layout {
    display: flex;
    flex-direction: column;
  }

  .side-stack {
    flex-direction: column;
  }

  .about,
  .connect,
  .mission {
    width: 100%;
  }
}
</style>
