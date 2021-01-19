import Vue from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false
export const bus = new Vue();
new Vue({
  render: h => h(App),
}).$mount('#app')
