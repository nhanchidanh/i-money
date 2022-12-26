import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import './assets/style/tailwind.css'
import './assets/style/global.css'

import { registerGlobalComponents } from "./utils/import";

import { projectAuth } from './config/firebase';

let app;

projectAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)

    registerGlobalComponents(app);

    app.use(router);
    app.mount('#app');

  }
});