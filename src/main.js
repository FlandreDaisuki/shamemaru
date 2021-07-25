import { createApp } from 'vue';
import App from './App.vue';
import './assets/index.css';

import { registerSW } from 'virtual:pwa-register';

registerSW({
  onOfflineReady() {
    // show a ready to work offline to user
  },
});

createApp(App).mount('#app');
