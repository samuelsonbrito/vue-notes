<template>
	<div>
		<h2>Entre	no	sistema</h2>
		<router-link to="/registrar">Registre-se</router-link>
		<hr>
		<vn-input titulo="Email">
			<input type="email" v-model="usuario.email">
		</vn-input>
		<vn-input titulo="Senha">
			<input	type="password" v-model="usuario.senha">
		</vn-input>
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

				if(resposta.data.sucesso){

					this.$session.start();
					this.$session.set('id', resposta.data.usuario.id)
					this.$session.set('nome', resposta.data.usuario.nome)
					this.$session.set('email', resposta.data.usuario.email)
					this.$router.replace('/notas')
					
				}else{
					this.estado = 'Entrar'
				}

			}).catch(e => {
				this.estado = 'Entrar'
				console.log('Erro:'+e)
			})
		},
	},
}

</script>