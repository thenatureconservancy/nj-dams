import { createRouter, createWebHashHistory } from 'vue-router';
import CaseStudies from '../components/tabs/CaseStudies.vue';
import Home from '../components/tabs/Home.vue';
import Faq from '../components/tabs/Faq.vue';
import HowRemove from '../components/tabs/HowRemove.vue';
import News from '../components/tabs/News.vue';
import Resources from '../components/tabs/Resources.vue';
import WhyRemove from '../components/tabs/WhyRemove.vue';
import Contact from '../components/tabs/Contact.vue';
import DamsInfo from '../components/tabs/DamsInfo.vue';
import TheDashboard from '../components/TheDashboard.vue';
import Monitoring from '../components/tabs/Monitoring.vue';
import Funding from '../components/tabs/Funding.vue';
import Videos from '../components/tabs/Videos.vue';
import ReportsPublications from '../components/tabs/ReportsPublications.vue';
import Data from '../components/tabs/Data.vue';
import TheMap from '../components/TheMap.vue';

const routes = [
  {
    path: '/',
    name: 'home',
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
    path: '/dashboard',
    name: 'dashboard',
    component: TheDashboard,
  },
  {
    path: '/monitoring',
    name: 'monitoring',
    component: Monitoring,
  },
  {
    path: '/funding',
    name: 'funding',
    component: Funding,
  },
  {
    path: '/videos',
    name: 'videos',
    component: Videos,
  },
  {
    path: '/reports-publications',
    name: 'reports-publications',
    component: ReportsPublications,
  },
  {
    path: '/data',
    name: 'data',
    component: Data,
  },
  {
    path: '/map',
    name: 'map',
    component: TheMap,
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

router.afterEach(() => {
  window.scrollTo(0, 0);
});

export default router;
