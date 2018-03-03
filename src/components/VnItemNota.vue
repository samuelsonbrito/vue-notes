<template>
  <div>
      <li>
          <span>{{ nota.conteudo }}</span>
          <button @click="apagar()">[x]</button>
      </li>
  </div>
</template>

<script>
import Nota from './../services/notas'

export default {
  name: 'vn-item-nota',
  props: {
      nota: {
          type: Object,
          required: true
      }
  },
  methods:{
      apagar(){
          if(confirm('Deseja realmente apagar a amotação?')){
            Nota.apagar(this.nota.id).then(r => {
                this.$bus.$emit('atualizacao')
            }).catch(e => {
                alert('Erro ao apagar')
            })
          }
      }
  }
}
</script>
