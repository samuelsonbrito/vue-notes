<template>
	<div>

		<h2>Registre-se no sistema</h2>
		
		<hr>

		<vn-input titulo="Nome">
			<input type="text" v-model="usuario.nome">
		</vn-input>

		<vn-input titulo="Email">
			<input type="text" v-model="usuario.email">
		</vn-input>

		<vn-input titulo="Password">
			<input type="password" v-model="usuario.senha">
		</vn-input>
		<br>
		<input @click='registrar' type="submit" :value="estado" :disabled="estado	!='Registrar'">
	</div>
</template>

<script>

import VnInput from './VnInput.vue';
import Usuario from './../services/usuarios'

export default{
	name: 'vn-registro',
	components: { VnInput },
	data(){
		return {
			estado: 'Registrar',
			usuario: {
				nome: '',
				email: '',
				senha: ''
			}
		}
	},
	methods: {
		registrar(){
			this.estado = 'Carregando...'
			Usuario.registrar(this.usuario).then(resposta => {
				if(resposta.data.sucesso){
					alert('Registrado com sucesso!')
					this.$router.replace('/')
				}else{
					this.estado = 'Registrado'
				}
			}).catch(e => console.log(e))
		},
	}
	
}
</script>