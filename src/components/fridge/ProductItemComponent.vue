<template>
  <img v-bind:src='imgSrc' @click='toggleProductAsPossessed' />
</template>

<script>

function toggleProductAsPossessed() {
  this.$emit('possessed', this.possessed)
}

export default {
  name: 'ProductItemComponent',
  props: ['imgSrc', 'possessed'],
  methods: {
    toggleProductAsPossessed
  }
}
</script>

<style scoped>
</style>