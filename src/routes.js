import StartPage from './components/StartPage.vue';
import Welcome from './components/Welcome.vue';
import Offer from './components/Offer.vue';

const routes = [
  { path: '/', component: StartPage },
  { path: '/welcome', component: Welcome },
  { path: '/offer', component: Offer },
];

export default routes;
