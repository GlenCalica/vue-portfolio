<template>
   <div class="flex justify-center">
      <div class="container h-full">
         <the-navbar v-if="!cardIsOpen"></the-navbar>

         <div id="body" class="bg-custom-gray">
         <the-header></the-header>
            <the-about @updateAboutYPos="updateAboutYPos"></the-about>
            <the-projects @cardIsToggled="updateCardIsToggled"></the-projects>
         </div>
      </div>
   </div>
   <div id="slider" class="fixed top-0 bg-custom-white h-screen"></div>

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
         sliderWidth: 0,
         containerIsExpanded: true,
         cardIsOpen: false
      }
   },
   created() {
      window.addEventListener("resize", this.updateBrowserWidth);
      window.addEventListener("scroll", this.updateYPos);
   },
   mounted() {
      this.updateBrowserWidth();
      document.getElementById("body").style.width = "100%";
      document.getElementById("slider").style.width = `${this.sliderWidth}px`;
      document.getElementById("slider").style.right = `-${this.sliderWidth}px`;
   },
   watch: {
      yPos() {
         if (this.browserWidth > 1000 && this.containerIsExpanded && this.yPos + 200 > this.aboutYPos) {
            document.getElementById("body").style.width = "50%";
            document.getElementById("slider").style.right = "0px";
            this.containerIsExpanded = false;
         }
         else if (this.browserWidth > 1000 && !this.containerIsExpanded && this.yPos + 200 < this.aboutYPos) {
            document.getElementById("body").style.width = "100%";
            document.getElementById("slider").style.right = `-${this.sliderWidth}px`;
            this.containerIsExpanded = true;
         }
      }
   },
   methods: {
      updateBrowserWidth() {
         this.browserWidth = window.innerWidth;
         this.sliderWidth = this.browserWidth * (5/12);
      },
      updateYPos() {
         this.yPos = window.scrollY;
      },
      updateAboutYPos(value) {
         this.aboutYPos = value;
      },
      updateCardIsToggled(value) {
         this.cardIsOpen = value;
      }
   }
}
</script>

<style scoped>
.main {
   min-width: 91vw;
}

#slider {
   transition: right 0.5s ease-out;
}
</style>