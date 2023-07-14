import { createApp } from 'vue';
import App from './app.vue';
import antvplus from '@antvplus/components';
const app = createApp(App);
app.use(antvplus);
app.mount('#app');
