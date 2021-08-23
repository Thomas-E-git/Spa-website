import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue } from 'bootstrap-vue'
import './assets/custom.scss'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faUserPlus, faIdBadge, faChevronCircleDown, faChevronCircleUp, faCalendarCheck, faMobileAlt, faCalendarAlt, faMapMarkerAlt, faClock, faMapPin} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebookF, faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'

library.add(faUser, faUserPlus, faIdBadge, faChevronCircleDown, faChevronCircleUp, faCalendarCheck, faMobileAlt, faCalendarAlt, faMapMarkerAlt, faFacebookF, faInstagram, faClock, faMapPin, faStar)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
