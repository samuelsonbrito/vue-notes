<template>
  <div>
      <span>Painel logado com {{ $store.state.usuario.nome }}</span>
      <button @click="sair">Sair</button>
  </div>
</template>

<script>
export default {
  name: 'vn-painel',
  methods: {
    sair(){
      this.$store.dispatch('logarUsuario', {id: 0, nome: '', email: ''})
      this.$route.replace('/')
    }
  }
}
</script>
