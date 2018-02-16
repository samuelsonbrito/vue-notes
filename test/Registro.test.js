import test from 'ava'
import Vue from 'vue'
import { mount } from 'avoriaz'
import Registro from './../src/components/VnRegistro.vue'
import VnInput from './../src/components/VnInput.vue'

Vue.component('vn-input')

let componente = mount(Registro)

test('formulario de registro com mock de ação', t =>{

	componente.setData({
		usuario:{
			nome: 'Samuelson',
			emial: 'samuelson@descompila.com.br',
			senha: '12345678'
		}
	})

	componente.vm.registrar = function(){
		componente.setData({
			estado: 'Carregando...'
		})
	}

	componente.update()
	const botao = componente.find('input[type=submit]')[0]
	botao.trigger('click')
	t.is(botao.hasAttribute('disabled', 'disabled'), true)

})
