<template>
  <section class="home">
    <!-- Hero Section -->
    <div class="hero">
      <h1 class="name">Logan Stoltz</h1>
      <p class="tagline">
        Crafting modern web experiences with clean code and creative vision.
      </p>
    </div>

    <!-- External Links Section -->
    <div class="content">
      <div class="section">
        <h2>Connect with Me</h2>
        <div class="links">
          <a href="https://github.com/" target="_blank" rel="noopener" class="link-button">GitHub</a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener" class="link-button">LinkedIn</a>
          <a href="mailto:logan@example.com" class="link-button">Email</a>
          <a href="https://your-resume.com" target="_blank" rel="noopener" class="link-button">Résumé</a>
        </div>
      </div>

      <!-- Mission Statement -->
      <div class="section">
        <h2>Mission Statement</h2>
        <p>
          I strive to design and build elegant, performant web interfaces that elevate user
          experience and leave lasting impressions. My mission is to blend technical precision with
          creative direction to produce high-quality digital products.
        </p>
      </div>

      <!-- About Me -->
      <div class="section">
        <h2>About Me</h2>
        <p>
          I’m a frontend developer with a passion for minimalist design, UX accessibility, and
          performance optimization. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Donec nec sapien vel turpis tincidunt tempor. Suspendisse potenti. Integer id justo in
          velit accumsan lacinia at a magna.
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="js">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');

.home {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(to right, #f5f7fa, #b2faff);
  color: #0b1f3f;
}

/* HERO SECTION */
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 4rem 5%;
  background: linear-gradient(to right, #f5f7fa, #b2faff);
  animation: fadeIn 1.2s ease-out;
}

.name {
  font-size: 5rem;
  font-weight: 900;
  background: linear-gradient(90deg, #0B1F3F, #3AAFA9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 2rem;
  line-height: 1.1;
}

.tagline {
  font-size: 2rem;
  color: #6b7a8f;
  font-weight: 500;
  max-width: 90%;
  line-height: 1.5;
}

/* MAIN CONTENT BELOW HERO */
.content {
  width: 100%;
  padding: 4rem 5%;
}

/* SECTION BOX */
.section {
  background: #ffffff;
  padding: 3rem 3rem;
  border-radius: 16px;
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.08);
  margin-bottom: 4rem;
}

.section h2 {
  font-size: 2.5rem;
  color: #0B1F3F;
  margin-bottom: 1.5rem;
  font-weight: 800;
}

.section p {
  font-size: 1.25rem;
  color: #333;
  line-height: 2;
}

/* LINK BUTTONS */
.links {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 1.2rem;
  margin-top: 1rem;
}

.link-button {
  background-color: #0B1F3F;
  color: #F5F7FA;
  padding: 1rem 1.5rem;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.2s, background-color 0.3s;
  box-shadow: 0 6px 20px rgba(11, 31, 63, 0.15);
}

.link-button:hover {
  background-color: #D4AF37;
  color: #0B1F3F;
  transform: translateY(-3px);
}

/* ANIMATION */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .name {
    font-size: 3rem;
  }

  .tagline {
    font-size: 1.5rem;
  }

  .section {
    padding: 2rem;
  }

  .section h2 {
    font-size: 2rem;
  }

  .section p {
    font-size: 1.1rem;
  }

  .link-button {
    font-size: 1rem;
    padding: 0.8rem 1.2rem;
  }
}
</style>
