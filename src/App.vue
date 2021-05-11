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
         sliderRatio: 5/12,
         containerIsExpanded: true,
         cardIsOpen: false
      }
   },
   created() {
      window.addEventListener("scroll", this.updateYPos);
      window.addEventListener("resize", this.updateSlider);
   },
   mounted() {
      document.getElementById("body").style.width = "100%";
      document.getElementById("slider").style.width = `${window.innerWidth * this.sliderRatio}px`;
      document.getElementById("slider").style.right = `-${window.innerWidth * this.sliderRatio}px`;
   },
   watch: {
      yPos() {
         if (window.innerWidth > 1000 && window.innerWidth < 3841 && this.containerIsExpanded && this.yPos + 200 > this.aboutYPos) {
            document.getElementById("body").style.width = "50%";
            document.getElementById("slider").style.width = `${(window.innerWidth * this.sliderRatio)}px`; //This needs to be recalculated in the case the user zooms in/out
            document.getElementById("slider").style.right = "0px";
            this.containerIsExpanded = false;
         }
         else if (!this.containerIsExpanded && this.yPos + 200 < this.aboutYPos) {
            document.getElementById("body").style.width = "100%";
            document.getElementById("slider").style.width = `${window.innerWidth * this.sliderRatio}px`; //This needs to be recalculated in the case the user zooms in/out
            document.getElementById("slider").style.right = `-${window.innerWidth * this.sliderRatio}px`;
            this.containerIsExpanded = true;
         }
      }
   },
   methods: {
      updateYPos() {
         this.yPos = window.scrollY;
      },
      updateAboutYPos(value) {
         this.aboutYPos = value;
      },
      updateCardIsToggled(value) {
         this.cardIsOpen = value;
      },
      updateSlider() {
         document.getElementById("slider").style.width = `${window.innerWidth * this.sliderRatio}px`;
      }
   }
}
</script>

<style scoped>
.main {
   min-width: 91vw;
}

#slider {
   transition: right 0.3s ease-out;
   background-image: url('~@/assets/images/image.png');
}
</style>