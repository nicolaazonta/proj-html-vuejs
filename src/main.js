import { createApp } from 'vue';
import App from './App.vue';
import './assets/scss/style.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';
import { faGaugeHigh } from '@fortawesome/free-solid-svg-icons';


//<i class="fa-solid fa-gauge-high"></i>




library.add(faUserSecret, faClock, faPhone, faEnvelope, faFacebook, faLinkedin, faTwitter, faUserGroup , faChartPie , faGaugeHigh)
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
