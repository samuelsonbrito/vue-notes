<template>
  <div>
      <span>Painel logado com {{ this.$session.get('nome') }}</span>
      <button @click="sair">Sair</button>
  </div>
</template>

<script>
export default {
  name: 'vn-painel',
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
