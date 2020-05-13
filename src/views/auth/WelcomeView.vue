<template>
  <div class='welcome-view'>
    <HeaderComponent />
    <router-view/>
    <a class='credits-link' href='https://icons8.com'>Thanks to icons8!</a>
  </div>
</template>

<script>
import HeaderComponent from '@/components/auth/HeaderComponent'
export default {
  name: 'WelcomeView',
  components: {
    HeaderComponent
  }
}
</script>

<style scoped>
.welcome-view {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.credits-link {
  margin-top: 5vh;
  color: gray;
}
</style>