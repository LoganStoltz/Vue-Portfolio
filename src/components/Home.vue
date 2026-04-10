<template>
  <section class="home">
    <transition name="fade" @after-enter="revealNextSection">
      <div class="hero" v-if="visibleSections.hero">
        <p class="eyebrow">Junior Software Developer</p>
        <h1 class="name">{{ name }}</h1>
        <p class="headline">Pursuing junior full-stack and software development roles.</p>
        <p class="tagline">I like building practical web applications and learning tools that make development cleaner, faster, and easier to maintain.</p>

        <div class="stack-chips">
          <span v-for="item in highlightedStack" :key="item" class="stack-chip">{{ item }}</span>
        </div>
      </div>
    </transition>

    <div class="content">
      <transition name="fade" @after-enter="revealNextSection">
        <div class="section about" v-if="visibleSections.background">
          <h2>About Me</h2>
          <p>My name is Logan Stoltz. I am a recent Computer Science graduate from Eastern Washington University working to turn a broad technical foundation into strong real-world development experience.</p>
          <p>I started on the frontend with frameworks like Vue.js and Next.js because I enjoy building interfaces that are clear, responsive, and practical.</p>
          <p>I have also spent time on backend concepts through Ruby, Ruby on Rails, and Python to better understand APIs, server-side logic, and how complete applications are structured.</p>
          <p>I learn quickly, value maintainable code, and want to keep growing into the kind of engineer a team can rely on.</p>
        </div>
      </transition>

      <transition name="fade" @after-enter="revealNextSection">
        <div class="section roles" v-if="visibleSections.focus">
          <h2>What I'm Looking For</h2>
          <div class="role-grid">
            <article class="role-card" v-for="role in targetRoles" :key="role.title">
              <h3>{{ role.title }}</h3>
              <p>{{ role.description }}</p>
            </article>
          </div>
        </div>
      </transition>

      <transition name="fade">
        <div class="section mindset" v-if="visibleSections.mindset">
          <h2>How I Approach Development</h2>
          <div class="mindset-grid">
            <article class="mindset-card">
              <h3>Frameworks With Purpose</h3>
              <p>I like learning frameworks that remove friction, improve developer experience, and make a codebase easier to scale and maintain.</p>
            </article>
            <article class="mindset-card">
              <h3>Across the Stack</h3>
              <p>I am comfortable contributing on the frontend today, and I am actively building the backend depth needed for full-stack and backend responsibilities.</p>
            </article>
            <article class="mindset-card">
              <h3>Growth Mindset</h3>
              <p>I do my best work in environments where I can learn from experienced developers, take feedback seriously, and keep improving through real projects.</p>
            </article>
          </div>
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
    const highlightedStack = ['CSS', 'HTML', 'JavaScript/TypeScript', 'Vue.js', 'NPM', 'Next.js/Node.js', 'Ruby','Ruby on Rails', 'Java', 'Python', 'AWS Services (Route 53, EC2, RDS, Amplify)', 'Git/GitHub', 'PostgreSQL', 'Restful APIs'];
    const targetRoles = [
      {
        title: 'Frontend Development',
        description: 'I enjoy building responsive interfaces and creating user experiences that feel clear and polished.'
      },
      {
        title: 'Full-Stack Development',
        description: 'I want opportunities to connect frontend work with APIs, application logic, and the systems behind the interface.'
      },
      {
        title: 'Backend Development',
        description: 'I am continuing to build server-side depth and I am interested in roles that strengthen my understanding of application architecture.'
      }
    ];

    const visibleSections = ref({
      hero: false,
      background: false,
      focus: false,
      mindset: false,
    });

    const sectionOrder = ['hero', 'background', 'focus', 'mindset'];
    let current = 0;

    const revealNextSection = () => {
      current += 1;
      if (current < sectionOrder.length) {
        const next = sectionOrder[current];
        visibleSections.value[next] = true;
      }
    };

    onMounted(() => {
      visibleSections.value.hero = true;
    });

    return {
      name,
      highlightedStack,
      targetRoles,
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
  min-height: 100vh;
}

.hero {
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem 2.25rem 7.5rem;
}

.eyebrow {
  font-size: 1rem;
  letter-spacing: 0.22rem;
  text-transform: uppercase;
  color: var(--accent-yellow);
  margin: 0 auto 1.35rem;
}

.name {
  font-size: 8rem;
  font-weight: 900;
  background: var(--heading-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.14;
  margin: 0 auto 1.75rem;
  text-align: center;
}

.headline {
  font-size: 2.35rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.38;
  margin: 0 auto 1.35rem;
  text-align: center;
  max-width: 1120px;
}

.tagline {
  font-size: 1.55rem;
  color: var(--text-muted);
  font-weight: 500;
  line-height: 1.72;
  margin: 0 auto;
  max-width: 1120px;
  text-align: center;
}

.hero-details {
  display: grid;
  gap: 1.35rem;
  max-width: 1180px;
  margin: 2.5rem auto 0;
}

.hero-details p {
  font-size: 1.2rem;
  color: var(--text-secondary);
  line-height: 1.9;
  text-align: center;
}

.stack-chips {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  max-width: 1120px;
  margin: 2.5rem auto 0;
}

.stack-chip {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 999px;
  color: var(--text-primary);
  padding: 0.75rem 1.1rem;
  font-size: 1rem;
  letter-spacing: 0.03rem;
}

.content {
  padding: 2rem;
  background: rgba(0, 0, 0, 0.192);
  border-radius: 16px;
  margin: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: stretch;
}

.section {
  background: var(--background-light);
  padding: 2rem;
  border-radius: 16px;
  box-shadow: var(--box-shadow-default);
  width: 100%;
}

.section h2 {
  font-size: 2.5rem;
  color: var(--accent-blue);
  font-weight: 800;
  text-align: center;
  margin-bottom: 1.25rem;
}

.section p {
  font-size: 1.2rem;
  color: var(--text-dark-on-light);
  line-height: 1.8;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
}

.role-grid,
.mindset-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
  align-items: stretch;
}

.role-card,
.mindset-card {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.08) 100%);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 14px;
  padding: 1.75rem 1.6rem;
  box-shadow: 0 14px 32px rgba(0, 0, 0, 0.18);
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.role-card h3,
.mindset-card h3 {
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--accent-yellow);
  line-height: 1.35;
}

.role-card p,
.mindset-card p {
  padding: 0;
  font-size: 1.02rem;
  line-height: 1.75;
}

@media (max-width: 1030px) {
  .name {
    font-size: 6rem;
  }

  .headline {
    font-size: 2rem;
  }

  .hero-details p {
    font-size: 1.1rem;
  }

  .role-grid,
  .mindset-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 2.35rem 1.15rem 6.15rem;
  }

  .name {
    font-size: 4rem;
  }

  .headline {
    font-size: 1.65rem;
  }

  .tagline {
    font-size: 1.2rem;
  }

  .hero-details {
    margin-top: 2rem;
    gap: 1rem;
  }

  .hero-details p {
    font-size: 1rem;
  }

  .content {
    margin: 0;
    padding: 1rem;
    gap: 2rem;
    overflow-y: hidden;
  }

  .section {
    padding: 1.5rem;
  }

  .section h2 {
    font-size: 2rem;
  }

  .section p {
    font-size: 1rem;
  }

  .role-grid,
  .mindset-grid {
    gap: 1rem;
  }

  .role-card,
  .mindset-card {
    padding: 1.35rem;
  }
}

@media (max-width: 499px) {
  .name {
    font-size: 2.5rem;
  }

  .headline {
    font-size: 1.3rem;
  }

  .eyebrow {
    font-size: 0.8rem;
    letter-spacing: 0.16rem;
  }

  .stack-chip {
    width: 100%;
    text-align: center;
  }
}
</style>