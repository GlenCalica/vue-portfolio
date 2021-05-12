<template>
   <div class="flex justify-center">
      <div class="container h-full">
         <the-navbar :cardIsOpen="cardIsOpen" @cardIsToggled="updateCardIsToggled"></the-navbar>

         <div id="body" class="bg-custom-gray">
            <the-header></the-header>
            <the-about @updateAboutYPos="updateAboutYPos"></the-about>
            <the-projects @cardIsToggled="updateCardIsToggled" :tabOrder="tabOrder"></the-projects>
         </div>
      </div>
   </div>
   <div id="slider" class="fixed top-0 bg-custom-white h-screen"></div>

   <div class="flex justify-center">
      <the-footer v-if="!cardIsOpen"></the-footer>
      <div v-else-if="cardIsOpen" class="h-screen mt-24 mb-6 align-bottom"></div>
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
         yPos: 0,
         aboutYPos: 0,
         sliderRatio: 5/12,
         sliderWidth: 0,
         containerIsExpanded: true,
         cardIsOpen: false,
         tabOrder: 0
      }
   },
   created() {
      window.addEventListener("scroll", () => {
         this.yPos = window.scrollY;
      });
      
      window.addEventListener("resize", () => {
         document.getElementById("slider").style.width = `${window.innerWidth * this.sliderRatio}px`;
      });
   },
   mounted() {
      this.sliderWidth = window.innerWidth * this.sliderRatio;
      this.updateSlider(100, this.sliderWidth, -this.sliderWidth, true);
   },
   watch: {
      yPos() {
         this.sliderWidth = window.innerWidth * this.sliderRatio; //This needs to be recalculated everytime since zooming in/out doesn't trigger a resize event

         if (window.innerWidth > 1000 && window.innerWidth < 3841 && this.containerIsExpanded && this.yPos + 500 > this.aboutYPos) {
            this.updateSlider(50, this.sliderWidth, 0, false);
         }
         else if (!this.containerIsExpanded && this.yPos + 500 < this.aboutYPos) {
            this.updateSlider(100, this.sliderWidth, -this.sliderWidth, true);
         }
      },
      cardIsOpen() {
         this.cardIsOpen ? this.tabOrder = -1 : this.tabOrder = 0
      }
   },
   methods: {
      updateAboutYPos(value) {
         this.aboutYPos = value;
      },
      updateCardIsToggled(value) {
         this.cardIsOpen = value;
      },
      updateSlider(bodyWidth, sliderWidth, sliderRight, containerIsExpanded) {
         document.getElementById("body").style.width = `${bodyWidth}%`;
         document.getElementById("slider").style.width = `${sliderWidth}px`;
         document.getElementById("slider").style.right = `${sliderRight}px`;
         this.containerIsExpanded = containerIsExpanded;
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