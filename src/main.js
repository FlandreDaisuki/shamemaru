import { createApp } from 'vue';
import { registerSW } from 'virtual:pwa-register';
import Toaster from '@meforma/vue-toaster';

import App from './App.vue';
import './assets/index.css';

registerSW({
  onOfflineReady() {
    // show a ready to work offline to user
  },
});

const app = createApp(App);

// https://github.com/MeForma/vue-toaster/issues/16#issuecomment-757466526
app.use(Toaster, {
  position: 'top',
  duration: 500,
  max: 3,
  pauseOnHover: false,
}).provide('toast', app.config.globalProperties.$toast);

app.mount('#app');
