/* add fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';
/* add some free styles */
import { far } from '@fortawesome/free-regular-svg-icons';
// Komponentti kirjasto joka osaa näyttää ikonit
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createApp } from 'vue';
import App from './App.vue';
import router from './app/router';
import store from './app/store';
import './index.css';

library.add(far);

createApp(App)
  .component('fa', FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount('#app');
