<template>
    <div class='footer'>
        <p class='credits-link'>
            antekdev ❤︎ onegag 
        </p>
        <a 
            class='credits-link' 
            href="https://icons8.com/"
        >
            Thanks to icons8!
        </a>
        
    </div>
</template>

<script>
export default {
  name: 'FooterComponent',
  components: {}
}
</script>

<style scoped>
.footer {
    background-color: #1a242e;
    height: 4.7vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
}
.credits-link {
    font-size: 1.5vh;
    color: gray;
}
</style>