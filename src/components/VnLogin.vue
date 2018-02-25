<template>
	<div>
		<h2>Entre	no	sistema</h2>
		<router-link to="/registrar">Registre-se</router-link>
		<hr>
		<lv-input titulo="Email">
			<input type="email" v-model="usuario.email">
		</lv-input>
		<lv-input titulo="Senha">
			<input	type="password" v-model="usuario.senha">
		</lv-input>
		<br>
		<input @click='logar' type="submit" :value="estado" :disabled="estado!='Entrar'">
	</div>
</template>

<script >

import Usuario from './../services/usuarios'

export default{
	name: 'vn-login',
	data(){
		return {
			estado: 'Entrar',
			usuario: {
				email: '',
				senha: ''
			}
		}
	},
	methods:{
		logar(){
			this.estado = 'Carregando...'
			Usuario.logar(this.usuario).then(resposta => {

			}).catch(e => this.estado = 'Entrar')
		},
	},
}

</script>