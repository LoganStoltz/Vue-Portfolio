<template>
  <section class="home">
    <!-- Hero Section -->
    <div class="hero">
      <h1 class="name"> {{ name }} </h1>
      <p class="tagline"> Im a Software Developer!</p>
      <p class="tagline"> Feel free to look around to learn more about my projects and contributions.</p>
    </div>


    <div class="content">
      <div class="section mission">
        <h2>Mission Statement</h2>
        <p>I am pursuing an opportunity as an intern or entry-level software developer to apply my technical competencies and commitment to professional growth in support of meaningful and innovative projects.</p>
        <p>I aspire to develop my skills further through collaboration with experienced professionals and by engaging in challenging assignments that contribute to organizational success. I am dedicated to delivering high-quality results while continuously enhancing my expertise within a structured and collegial environment.</p>
      </div>
      
      <div class="section about">
        <h2>About Me</h2>
        <p>My name is Logan Stoltz. I'm a Software Developer and a recent graduate from Eastern Washington University, where I earned my Bachelor of Science in Computer Science in June 2025</p>
        <p>Through a combination of academic projects and personal development work, I’ve developed strong proficiency in technologies such as Java, Python, C#, HTML, CSS, JavaScript, and SQL. My education at EWU also covered key areas like cybersecurity, networking, mathematics, and full-stack application development—providing me with a solid and well-rounded foundation in software engineering.</p>
        <p>I’m passionate about solving real-world problems through clean, scalable code. Whether I’m developing a web application or tackling a complex technical challenge, I bring a thoughtful, solution-oriented mindset to every project.</p>
      </div>
    </div>
  </section>
</template>

<script lang="js">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  data() {
    return {
      name: 'Logan Stoltz'
    };
  }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');

.home {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
  color: #f4f4f4;
}

/* HERO SECTION */
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 4rem 5%;
  background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
  animation: fadeIn 1.2s ease-out;
}

.name {
  font-size: 9rem;
  font-weight: 900;
  background: linear-gradient(90deg, #74ebd5, #ACB6E5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 2rem;
  line-height: 1.2;
  margin: 0 auto;
  margin-top: -10rem;
}

.tagline {
  font-size: 2rem;
  color: #6b7a8f;
  font-weight: 500;
  max-width: 90%;
  line-height: 1.5;
  margin: 0 auto;
}

/* MAIN CONTENT BELOW HERO */
.content {
  width: 100%;
  padding: 4rem 5%;
}

/* SECTION BOX */
.section {
  background: #f7f9fc;
  padding: 3rem 3rem;
  border-radius: 16px;
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.08);
  margin-bottom: 4rem;
}

.section h2 {
  font-size: 2.5rem;
  color: #000000;
  font-weight: 800;
  text-align: center;
}

.section p {
  font-size: 1.5rem;
  color: #000000;
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
