<template>
   <div class="flex justify-between px-8 xl:w-10/12 xl:self-center xl:px-0">
      <p class="text-sm sm:text-base lg:text-xl text-custom-gray font-medium">© 2021 Glen Calica</p>
      <div class="flex">
         <p class="text-sm sm:text-base lg:text-xl text-custom-gray font-medium"><a href="https://www.privacypolicytemplate.net/live.php?token=67jGUGLGTkat9yfRftRPAmIbystLMpAB" target="_blank" class="font-bold hover:bg-custom-mint transition-colors  focus:outline-black">Privacy</a></p>
         
         <a @mouseover="linkedInHovered = true" @mouseleave="linkedInHovered = false" href="https://www.linkedin.com/in/glencalica/" target="_blank" class="mx-4 sm:mx-6 lg:mx-12 focus:outline-black">
            <transition name="quick-fade" mode="out-in">
               <img v-if="!linkedInHovered" class="w-5 sm:w-7" :src="require('../../assets/icons/linkedin.svg')" alt="LinkedIn Icon">
               <img v-else-if="linkedInHovered" class="w-5 sm:w-7" :src="require('../../assets/icons/linkedin-hover.svg')" alt="LinkedIn Icon">
            </transition>
         </a>

         <a @mouseover="githubHovered = true" @mouseleave="githubHovered = false" href="https://github.com/GlenCalica" target="_blank" class="focus:outline-black">
            <transition name="quick-fade" mode="out-in">
               <img v-if="!githubHovered" class="w-5 sm:w-7" :src="require('../../assets/icons/github.svg')" alt="Github Icon">
               <img v-else-if="githubHovered" class="w-5 sm:w-7" :src="require('../../assets/icons/github-hover.svg')" alt="Github Icon">
            </transition>
         </a>
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {
         linkedInHovered: false,
         githubHovered: false
      }
   }
}
</script>