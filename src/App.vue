<template>
   <the-navbar></the-navbar>
   <the-header></the-header>
   <the-about></the-about>
   <the-projects></the-projects>
   <the-footer></the-footer>
</template>

<script>
import TheNavbar from './layouts/TheNavbar';
import TheHeader from './layouts/TheHeader';
import TheAbout from './layouts/TheAbout';
import TheProjects from './layouts/TheProjects';
import TheFooter from './layouts/TheFooter';

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