<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted() {

    console.log(this.$session.get('id'))
    console.log(this.$session.get('nome'))
    console.log(this.$session.get('email'))

  } 

}
</script>

<style>
  body, html, * { text-align: center }
</style>
