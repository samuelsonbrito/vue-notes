<template>
  <div>
      <ul style="text-align: left">
          <vn-item-nota v-for="(nota, ch) in notas" :key="ch" :nota="nota">
          </vn-item-nota>
      </ul>
  </div>
</template>

<script>
import Nota from './../services/notas'
import VnItemNota from './VnItemNota.vue'

export default{
	name: 'vn-lista-nota',
	components: { VnItemNota },
	data() { 
        return { 
            notas: {}
        } 
    },
	mounted() {
		this.$bus.$on('atualizacao', this.atualizar)
		this.atualizar()
	},
	methods: {
		atualizar() {
			Nota.listar( this.campos ).then(resposta => {
				if(resposta.data.sucesso)
					this.notas = resposta.data.notas
			}).catch( e => {} )
		}
	},
	computed: {
		campos() {
			return this.$session.get('id')
		},
	}
}
</script>
