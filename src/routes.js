import Vue from 'vue'
import VueRouter from 'vue-router'
import VnRegistro from './components/VnRegistro.vue'
import VnLogin from './components/VnLogin'
import VnPainel from './components/VnPainel'

Vue.use(VueRouter)

export default new VueRouter({
	mode: 'history',
	routes: [
		{path: '/registrar', 	component: VnRegistro},
		{path: '/', 	component: VnLogin},
		{path: '/notas', 	component: VnPainel},
	],
})