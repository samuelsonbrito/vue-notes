import test from 'ava'
import { mount } from 'avoriaz'
import Input from './../src/components/VnInput.vue'

let componente = mount(Input, {
	propsData: {
		titulo: 'Nome'
	}
})

test('componente sendo inicalizado com titulo Nome', t => {
	const titulo = componente.find('legend')[0]
	t.is(titulo.text(), 'Nome')
})