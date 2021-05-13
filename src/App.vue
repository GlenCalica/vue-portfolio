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
         sliderIsExpanded: false,
         cardIsOpen: false,
         tabOrder: 0,
         minWidth: 1200,
         maxWidth: 3841
      }
   },
   created() {
      window.addEventListener("scroll", () => {
         this.yPos = window.scrollY;
      });
      
      window.addEventListener("resize", () => {
         this.sliderWidth = window.innerWidth * this.sliderRatio;
         document.getElementById("slider").style.width = `${this.sliderWidth}px`;
         
         if (this.sliderIsExpanded && (window.innerWidth < this.minWidth || window.innerWidth > this.maxWidth)) {
            this.expandSlider(false);
         }
         else if (!this.sliderIsExpanded && window.innerWidth >= this.minWidth && window.innerWidth <= this.maxWidth) {
            this.expandSlider(true);
         }
      });
   },
   mounted() {
      this.sliderWidth = window.innerWidth * this.sliderRatio;
      this.expandSlider(false);
   },
   watch: {
      yPos() {
         this.sliderWidth = window.innerWidth * this.sliderRatio;
         document.getElementById("slider").style.width = `${this.sliderWidth}px`;

         if (window.innerWidth >= this.minWidth && window.innerWidth <= this.maxWidth && !this.sliderIsExpanded && this.yPos + 500 > this.aboutYPos) {
            this.expandSlider(true);
         }
         else if (this.sliderIsExpanded && this.yPos + 500 < this.aboutYPos) {
            this.expandSlider(false);
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
      expandSlider(expand) {
         if (expand) {
            document.getElementById("body").style.width = "50%";
            document.getElementById("slider").style.right = "0px";
            this.sliderIsExpanded = true;
         }
         else {
            document.getElementById("body").style.width = "100%";
            document.getElementById("slider").style.right = `${-this.sliderWidth}px`;
            this.sliderIsExpanded = false;
         }
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