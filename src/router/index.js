import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Education from '../components/Education.vue';
import Projects from '../components/Projects.vue';
import Contact from '../components/Contact.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/education', name: 'Education', component: Education },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/contact', name: 'Contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
