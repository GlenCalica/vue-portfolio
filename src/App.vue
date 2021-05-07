<template>
   <div class="flex flex-wrap justify-center bg-custom-white">
      <div class="container h-full">
         <the-navbar></the-navbar>
            <div id="body" class="bg-custom-gray">
            <the-header></the-header>
               <the-about @updateAboutYPos="updateAboutYPos"></the-about>
               <the-projects></the-projects>
            </div>
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
   },
   data() {
      return {
         browserWidth: 0,
         yPos: 0,
         aboutYPos: 0,
         containerIsExpanded: true
      }
   },
   created() {
      window.addEventListener("resize", this.updateBrowserWidth);
      window.addEventListener("scroll", this.updateYPos);
   },
   mounted() {
      this.updateBrowserWidth();
      document.getElementById("body").style.width = "100%";
   },
   watch: {
      yPos() {
         if (this.browserWidth > 1000 && this.containerIsExpanded && this.yPos + 200 > this.aboutYPos) {
            document.getElementById("body").style.width = "50%";
            this.containerIsExpanded = false;
            console.log("contract");
         }
         else if (this.browserWidth > 1000 && !this.containerIsExpanded && this.yPos + 200 < this.aboutYPos) {
            document.getElementById("body").style.width = "100%";
            this.containerIsExpanded = true;
            console.log("expand");
         }
      }
   },
   methods: {
      updateBrowserWidth() {
         this.browserWidth = window.innerWidth;
      },
      updateYPos() {
         this.yPos = window.scrollY;
      },
      updateAboutYPos(value) {
         this.aboutYPos = value;
      }
   }
}
</script>

<style scoped>
.main {
   min-width: 91vw;
}

#body {
   transition: width 1s ease-out;
}
</style>