<template>
  <div>
      <li>
          <span>{{ nota.conteudo }}</span>
      </li>
  </div>
</template>

<script>
export default {
  name: 'vn-item-nota',
  props: {
      nota: {
          type: Object,
          required: true
      }
  }
}
</script>
