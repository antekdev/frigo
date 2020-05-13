<template>
    <div class='content'>
        <router-view/>
    </div>
</template>

<script>
export default {
  name: 'FooterComponent',
  components: {}
}
</script>

<style scoped>
.content {
    height: 85vh;
    overflow:auto;
    background-color: #2c3e50;
}
</style>