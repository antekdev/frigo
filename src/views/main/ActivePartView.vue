<template>
  <div id="active-part">
    <HeaderComponent/>
    <NavbarComponent/>
    <ContentComponent/>
    <FooterComponent/>
  </div>
</template>

<script>
import HeaderComponent from '@/components/structural/HeaderComponent'
import NavbarComponent from '@/components/structural/NavbarComponent'
import ContentComponent from '@/components/structural/ContentComponent'
import FooterComponent from '@/components/structural/FooterComponent'
export default {
  name: 'ActivePartView',
  components: {
    HeaderComponent,
    NavbarComponent,
    ContentComponent,
    FooterComponent
  }
}
</script>

<style scoped>
#active-part {
  display: flex;
  flex-direction: column;
  flex: 1;
}
</style>