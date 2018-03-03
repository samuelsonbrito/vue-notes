<template>
  <div>
      <span>Painel logado com {{ this.$session.get('nome') }}</span>
      <button @click="sair">Sair</button>
      <br><br><br><br><br><br>
      <vn-nova-nota></vn-nova-nota>
  </div>
</template>

<script>

import VnNovaNota from './VnNovaNota.vue'

export default {
  name: 'vn-painel',
  components: {
    VnNovaNota
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
