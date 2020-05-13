<template>
  <div id='app'>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {}
}
</script>


// Global styles
<style>
*, html, body, #app {
  margin:0;
  padding:0;
}
html, body, #app {
  height: 100%;
}
#app {
  background-color: #2c3e50;
  color: teal;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.auth-form {
  width: 80vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #2c3e50;
  border: 2px solid gray;
  border-radius: 5%;
}

.auth-form__input {
  color: white;
  font-size: 3vh;
  border: 2px solid gray;
  border-radius: 5%;
  background-color: #2c3e50;
  margin: 1vh;
  padding: 1vh;
}

::placeholder {
  color: darkgray;
}

.auth-form__inner-title {
  color: darkgray;
  margin-bottom: 5vh;
}

.auth-form__button {
  color: darkgray;
  font-size: 3vh;
  border: 2px solid gray;
  border-radius: 25%;
  background-color: #2c3e50;
  margin: 1vh;
  padding: 1vh;
  outline:0;
}

.auth-form__button:active {
  background: teal;
  outline:0;
}

.auth-form__validation-error {
  color: black;
  font-size: 2vh;
}
</style>
