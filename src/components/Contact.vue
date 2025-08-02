<template>
  <section class="contact-main-section">
    <transition name="slide-in">
      <div class="contact-header" v-if="visibleHeader">
        <h1>Contact Me</h1>
        <p>Welcome to the contact page, Thank you for your consideration.</p>
      </div>
    </transition>

    <form class="contact-form" @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Your Name</label>
        <input type="text" id="name" v-model="form.name" required />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="form.email" required />
      </div>

      <div class="form-group">
        <label for="phone">Phone Number</label>
        <input type="tel" id="phone" v-model="form.phone" />
      </div>

      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" rows="5" v-model="form.message" required></textarea>
      </div>

      <button type="submit" class="submit-button">Send Message</button>
    </form>
  </section>
</template>

<script>
import { reactive } from 'vue';
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'Contact Me',
  setup() {
    const visibleHeader = ref(false);

    const form = reactive({
      name: '',
      email: '',
      phone: '',
      message: ''
    });

    const submitForm = () => {
      alert(`Thanks, ${form.name}! Your message has been sent.`);
      form.name = '';
      form.email = '';
      form.phone = '';
      form.message = '';
    }
    
    onMounted(() => {
      visibleHeader.value = true;
    });

    return {
      visibleHeader,
      form,
      submitForm
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

/* Form */
.contact-form {
  background: var(--background-light);
  padding: 2rem;
  border-radius: 16px;
  box-shadow: var(--box-shadow-default);
  max-width: 1000px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-dark-on-light);
}

input,
textarea {
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  border-radius: 10px;
  border: 2px solid #ccc;
  font-family: 'Inter', sans-serif;
  resize: none;
}

input:focus,
textarea:focus {
  outline: none;
  border: 2px solid var(--accent-blue);
}

.submit-button {
  background-color: var(--background-blue);
  color: var(--text-primary);
  padding: 1rem 2rem;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;
}

.submit-button:hover {
  background-color: var(--accent-yellow);
  color: var(--background-blue);
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

  .contact-form {
    padding: 2rem;
  }

  .submit-button {
    font-size: 1rem;
  }
}
</style>
