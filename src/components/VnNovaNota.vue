<template>

    <div>
        <input	type="text" v-model="conteudo">
        <input	@click='criar' type="submit" :value="estado" :disabled="estado != 'Criar'">
    </div>

  
</template>

<script>
import Nota from './../services/notas'
export default{
	name: 'vn-nova-nota',
	data() { return { estado: 'Criar', conteudo: '' } },
	methods: {
		criar() {
			if(this.conteudo != '') {
				this.estado = 'Carregando...'
				Nota.criar( this.campos ).then(resposta => {
					if(resposta.data.sucesso) {
						this.conteudo = ''
						this.$bus.$emit('atualizacao')
					}
					this.estado = 'Criar'
				}).catch( e => this.estado = 'Criar' )
			}
		}
	},
	computed: {
		campos() {
			return {
				conteudo: this.conteudo,
				usuario_id: this.$session.get('id')
			}
		},
	}
}
</script>
