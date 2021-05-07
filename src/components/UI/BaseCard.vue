<template>
   <div class="card pb-8 pt-16 md:px-16 lg:pt-24 xl:py-18 xl:px-32 xl:pb-10 2xl:px-64 2xl:pb-12 bg-custom-white shadow-xl flex flex-col justify-between overflow-auto">
      <div class="w-10/12 self-center">
         <h1 class="text-5xl lg:text-6xl 2xl:text-8xl text-custom-gray font-medium">{{ title }}</h1>
         <div class="text-custom-gray">
            <slot>

            </slot>
         </div>
      </div>
      <footer-info></footer-info>
   </div>
</template>

<script>
import FooterInfo from '../templates/FooterInfo.vue';

export default {
   props: ['title'],
   components: {
      FooterInfo
   }
}
</script>

<style scoped>
.card {
   min-height: 80%;
   height: 91vh;
   width: 91vw;
}

@media only screen and (min-width: 1921px) {
   .card {
      height: 858px;
      width: 1526px;
   }
}
</style>