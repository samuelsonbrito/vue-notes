import Vue from 'vue'
import App from './App.vue'
import VnInput from	'./components/VnInput.vue'
import router from './routes'
import VueSession from 'vue-session'

Vue.component('vn-input',	VnInput)
Vue.use(VueSession)

new Vue({
  el: '#app',
  render: h => h(App),
  router:	router
})
