<template>
  <section class="contact-main-section">
    <div class="contact-header">
      <h1>Links and Social Media</h1>
      <p>Welcome to the contact page. Reach out using any method below!</p>
    </div>

    <div class="contact-section">
      <div class="contact-links">
        <div
          class="contact-link"
          v-for="conlink in conlinks"
          :key="conlink.id"
        >
          <h3>{{ conlink.name }}</h3>
          <a :href="conlink.link" target="_blank" rel="noopener">{{ conlink.link }}</a>
        </div>
      </div>

      <div class="contact-image">
        <img src="@/assets/contact-page-image.png.png" alt="Logan Stoltz" />
      </div>
    </div>


    <div class="contact-header">
      <h1>Contact Me</h1>
      <p>Thank you for your consideration</p>
    </div>

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

<script setup>
import { reactive } from 'vue';

const form = reactive({
  name: '',
  email: '',
  phone: '',
  message: ''
});

const conlinks = [
  { id: 1, name: 'placeholder', link: 'placeholder' },
  { id: 2, name: 'placeholder', link: 'placeholder' },
  { id: 3, name: 'placeholder', link: 'placeholder' },
  { id: 4, name: 'placeholder', link: 'placeholder' }
];

function submitForm() {
  alert(`Thanks, ${form.name}! Your message has been sent.`);
  form.name = '';
  form.email = '';
  form.phone = '';
  form.message = '';
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');

.contact-main-section {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
  color: #f4f4f4;
  padding: 4rem 5%;
  min-height: 100vh;
}

.contact-header {
  text-align: center;
  margin-bottom: 2rem;
}

.contact-header h1 {
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(90deg, #74ebd5, #ACB6E5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
}

.contact-header p {
  font-size: 1.25rem;
  color: #d0d8e4;
  line-height: 1.7;
}

/* Contact Info + Image Section */
.contact-section {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 5rem;
  gap: 2rem;
}

.contact-links {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-link {
  background: #f7f9fc;
  color: #1c2b38;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.contact-link h3 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #1a73e8;
}

.contact-link a {
  font-size: 1rem;
  color: #333;
  word-break: break-all;
}

/* Image */
.contact-image {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-image img {
  max-width: 100%;
  max-height: 533px;
  border-radius: 16px;
}

/* Form */
.contact-form {
  background: #f7f9fc;
  color: #1c2b38;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.08);
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
  color: #0B1F3F;
}

input,
textarea {
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-family: 'Inter', sans-serif;
  resize: none;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #1a73e8;
  box-shadow: 0 0 0 2px rgba(26, 115, 232, 0.2);
}

.submit-button {
  background-color: #1e3a5f;
  color: #f7f9fc;
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
  background-color: #ffd166;
  color: #1e3a5f;
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
