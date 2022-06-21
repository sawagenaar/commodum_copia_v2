import { createApp } from 'vue';
import App from './App.vue';

import routers from "./routes";

import '/src/assets/style.css';
import '/src/assets/awesome/css/all.min.css';

const app = createApp(App);
app.use(routers);

app.mount('#app');