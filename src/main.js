import { createApp } from 'vue';

import App from './App.vue';
const app = createApp(App);

import router from './hocs/router';
app.use(router);

import store from './hocs/store';
app.use(store);

app.mount('#app');
