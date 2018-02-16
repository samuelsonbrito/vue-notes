import Vue from 'vue'
import App from './App.vue'
import	VnInput	from	'./components/VnInput.vue'
import router from './routes'

Vue.component('vn-input',	VnInput)

new Vue({
  el: '#app',
  render: h => h(App),
  router:	router
})
