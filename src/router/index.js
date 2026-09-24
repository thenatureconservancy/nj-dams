import { createRouter, createWebHistory } from 'vue-router';
import CaseStudies from '../components/tabs/CaseStudies.vue';
import Home from '../components/tabs/Home.vue';
import Faq from '../components/tabs/Faq.vue';
import HowRemove from '../components/tabs/HowRemove.vue';
import News from '../components/tabs/News.vue';
import Resources from '../components/tabs/Resources.vue';
import WhyRemove from '../components/tabs/WhyRemove.vue';
import Contact from '../components/tabs/Contact.vue';
import DamsInfo from '../components/tabs/DamsInfo.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Home,
  },
  {
    path: '/faq',
    name: 'faq',
    component: Faq,
  },
  {
    path: '/dams-info',
    name: 'dams-info',
    component: DamsInfo,
  },
  {
    path: '/why-remove',
    name: 'why-remove',
    component: WhyRemove,
  },
  {
    path: '/how-remove',
    name: 'how-remove',
    component: HowRemove,
  },
  {
    path: '/case-studies',
    name: 'case-studies',
    component: CaseStudies,
  },
  {
    path: '/resources',
    name: 'resources',
    component: Resources,
  },
  {
    path: '/news',
    name: 'news',
    component: News,
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
  },
  {
    path: '/map',
    name: 'map',
    component: () => import('../components/TheMap.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
