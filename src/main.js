import { createApp } from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'

import './assets/scss/style.scss';
library.add(faUserSecret, faClock)
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
