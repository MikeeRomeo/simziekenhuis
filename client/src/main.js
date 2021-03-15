import Vue from 'vue'
import App from './App.vue'
import store from './assets/js/store/store'
import 'es6-promise/auto'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false
export const bus = new Vue();

/* eslint-disable no-new */
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
