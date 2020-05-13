<template>
    <div class="header">
        <div class='logo-with-title'>
            <img src="https://img.icons8.com/dotty/50/008080/fridge.png">
            <h1 class='title'>Frigo</h1>
        </div>
        <p class="welcome">Welcome to the app!</p>
        <div class="login-register-navbar">
            <router-link to="/login">Login</router-link>
            <p style='color: gray'>|</p>
            <router-link to="/register">Register</router-link>
        </div>
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
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column
}
.logo-with-title {
    width: 50vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 3vh;
}
.login-register-navbar {
    width: 50vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 3vh;
}
.title {
    color: teal;
    font-family: 'Mistral';
    font-size: 5vh;
}
.welcome {
    color: gray;
    font-size: 3vh;
    margin-bottom: 3vh;
}
a {
  font-weight: bold;
  color: gray;
  text-decoration: none;
}

a.router-link-exact-active {
  color: teal;
}
</style>