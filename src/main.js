// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import router
import '@mdi/font/css/materialdesignicons.css';


const app = createApp(App);

app.use(router); // Pasang router sebagai plugin
app.mount('#app');
