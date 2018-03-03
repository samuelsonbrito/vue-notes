<template>
  <div>
      <span>Painel logado com {{ this.$session.get('nome') }}</span>
      <button @click="sair">Sair</button>
      <br><br><br>
      <vn-nova-nota></vn-nova-nota>
      <vn-lista-notas></vn-lista-notas>
  </div>
</template>

<script>

import VnNovaNota from './VnNovaNota.vue'
import VnListaNotas from './VnListaNotas'

export default {
  name: 'vn-painel',
  components: {
    VnNovaNota,VnListaNotas
  },
  methods: {
    sair(){
      this.$session.destroy()
      this.$router.replace('/')
    }
  },
  beforeCreate: function () {
    if (!this.$session.exists()) {
      this.$router.push('/')
    }
  }   
}
</script>
