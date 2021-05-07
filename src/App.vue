<template>

   <div class="flex flex-wrap justify-center">
      <div class="container h-full">
         <the-navbar></the-navbar>
         <the-header></the-header>
         <the-about></the-about>
         <the-projects></the-projects>
      </div>
   </div>
   <div class="flex justify-center">
      <the-footer></the-footer>
   </div>

</template>

<script>
import TheNavbar from './components/layouts/TheNavbar';
import TheHeader from './components/layouts/TheHeader';
import TheAbout from './components/layouts/TheAbout';
import TheProjects from './components/layouts/TheProjects';
import TheFooter from './components/layouts/TheFooter';

export default {
   components: {
      TheNavbar,
      TheHeader,
      TheAbout,
      TheProjects,
      TheFooter
   }
}
</script>

<style scoped>
.main {
   min-width: 91vw;
}
</style>