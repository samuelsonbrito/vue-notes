import Vue from 'vue'
import VueRouter from 'vue-router'
import VnRegistro from './components/VnRegistro.vue'

Vue.use(VueRouter)

export default new VueRouter({
	mode: 'history',
	routes: [
		{path: '/registrar', 	component: VnRegistro},
	],
})