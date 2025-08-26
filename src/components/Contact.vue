<template>
  <section class="contact-main-section">
    <!-- Contact Info Header -->
    <transition name="slide-in" @after-enter="revealNextSection">
      <div class="contact-header" v-if="visibleSections.infoHeader">
        <h1>Contact Information</h1>
        <p>Feel free to reach out using any of the methods below.</p>
      </div>
    </transition>

    <!-- Contact Info -->
    <transition name="fade" @after-enter="revealNextSection">
      <div class="contact-info-section" v-if="visibleSections.info">
        <div class="contact-info" v-if="visibleSections.infoHeader">
          <h2>Personal Email:</h2><h3>loganstoltz1234@gmail.com</h3>
          <h2>School Email:</h2><h3>lstoltz@ewu.edu</h3>
          <h2>Phone Number:</h2><h3>(775)-276-0061</h3>
        </div>
      </div>
    </transition>

    <!-- Contact Form Header -->
    <transition name="slide-in" @after-enter="revealNextSection">
      <div class="contact-header" v-if="visibleSections.formHeader">
        <h1>Contact Form</h1>
        <p>Email me directly using this Contact Form</p>
      </div>
    </transition>

    <!-- Contact Form -->
    <transition name="fade" @after-enter="revealNextSection">
      <div class="contact-form-section" v-if="visibleSections.form">
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
      </div>
    </transition>
  </section>
</template>

<script>
import { reactive } from 'vue';
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'Contact Me',
  setup() {
    const visibleSections = ref({
      infoHeader: false,
      info: false,
      formHeader: false,
      form: false,
    });

    const sectionOrder = ['infoHeader', 'info', 'formHeader', 'form'];
    let current = 0;

    const revealNextSection = () => {
      current += 1;
      if (current < sectionOrder.length) {
        const next = sectionOrder[current];
        visibleSections.value[next] = true;
      }
    };

    const form = reactive({
      name: '',
      email: '',
      phone: '',
      message: ''
    });

    const submitForm = async () => {
      try {
        const response = await fetch("https://47jsn0vqs4.execute-api.us-east-2.amazonaws.com/prod", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            phone: form.phone,
            message: form.message
          })
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        alert(`Thanks, ${form.name}! Your message has been sent.`);
        
        // Reset the form
        form.name = '';
        form.email = '';
        form.phone = '';
        form.message = '';

      } catch (error) {
        console.error("Error sending message:", error);
        alert("Sorry, there was a problem sending your message. Please try again.");
      }
    };

    
    onMounted(() => {
      visibleSections.value.infoHeader = true;
    });

    return {
      visibleSections,
      revealNextSection,
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
  overflow: hidden;
  min-height: 100vh;
}

.contact-header {
  text-align: center;
  margin: 6rem 2rem;
}

.contact-header h1 {
  font-size: 3rem;
  font-weight: 800;
  background: var(--heading-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
}

.contact-header p {
  font-size: 1.65rem;
  color: var(--text-muted);
  line-height: 1.7;
}

.contact-info-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.192);
  border-radius: 16px;
  padding: 2rem;
  margin: 2rem auto;        
  box-shadow: var(--box-shadow-default);
  width: 60%;
  
}

.contact-info {
  background: var(--background-light);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 2rem;
  margin: 1rem;
  box-sizing: border-box;
  box-shadow: var(--box-shadow-default);
  border-radius: 16px;
  width: 100%;
}

.contact-info h2 {
  font-size: 2rem;
  color: var(--text-dark-on-light);
  font-weight: 600;
  margin-bottom: 1rem;
}

.contact-info h3 {
  font-size: 1.85rem;
  color: var(--text-dark-on-light);
  font-weight: 600;
}

/* Form */
.contact-form-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.192);
  border-radius: 16px;
  padding: 2rem;
  margin: 2rem auto;        
  box-shadow: var(--box-shadow-default);
  width: 80%;
}

.contact-form {
  background: var(--background-light);
  padding: 2rem;
  border-radius: 16px;
  box-shadow: var(--box-shadow-default);
  margin: 0 auto;
  width: 100%;
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
  background: var(--box-shadow-default);
  color: white;
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
  color: var(--background-header);
}

@media (max-width: 1450px) {
  .contact-info-section {
    width: 70%;
  }
  
  .contact-info h2 {
    font-size: 1.75rem;
  }

  .contact-info h3 {
  font-size: 1.75rem;
  }
}

@media (max-width: 1080px) {
  .contact-info-section {
    width: 80%;
  }
  
  .contact-info h2 {
    font-size: 1.5rem;
  }

  .contact-info h3 {
  font-size: 1.5rem;
  }
}

/* Responsive */
@media (max-width: 870px) {
  .contact-section {
    flex-direction: column;
  }

  .contact-header h1 {
    font-size: 2.75rem;
  }

  .contact-header p {
    font-size: 1.1rem;
  }
  
  .contact-info-section {
    grid-template-columns: 1fr;
    padding: 1rem;
    margin: 0;
    width: 100%;
  }

  .contact-info {
    grid-template-columns: 1fr;
    padding: 1rem;
    text-align: center;
  }

  .contact-info h2 {
    font-size: 1.75rem;
    margin-bottom: 0rem;
  }

  .contact-info h3 {
    font-size: 1.25rem;
    margin-bottom: 2rem;
  }

  .contact-info h3:last-child {
    margin-bottom: 0rem;
  }

  .contact-form-section {
    padding: 1rem;
    margin: 0rem;
    width: 100%;

  }

  .contact-form {
    margin: 0rem;
    padding: 1rem;
  }

  .submit-button {
    font-size: 1rem;
  }
}
</style>
