<template>
    <div class='navbar'>
      <div class='navbar-section'>
        <router-link to="/explore/fridge">Fridge</router-link> 
      </div>
      <div class='navbar-section'>
        <router-link to="/explore/recipes">Recipes</router-link> 
      </div>
    </div>
</template>

<script>
export default {
  name: 'NavbarComponent',
  components: {}
}
</script>

<style scoped>
.navbar {
  width: 100vw;
  max-width:100vw; 
  display: flex;
  height: 4.5vh;
  justify-content: space-around;
  align-items: center;
  border-bottom: 0.5vh solid teal;
}
#nav {
  padding: 30px;
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