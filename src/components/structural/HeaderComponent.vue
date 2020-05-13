<template>
    <div class='header'>
        <h4 class='logo-text'>Frigo</h4>
    </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  components: {}
}
</script>

<style scoped>
.header {
    width: 100vw;
    max-width:100vw; 
    border-bottom: 2px dashed teal;
    height: 5vh;
}

.logo-text {
    color: teal;
    font-family: 'Mistral';
    font-size: 4vh;
}
</style>