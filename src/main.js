import Vue from 'vue'
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const VueScrollTo = require('vue-scrollto')
Vue.use(VueScrollTo)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
