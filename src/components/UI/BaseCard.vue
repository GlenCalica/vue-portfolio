<template>
   <div class="card pb-8 pt-16 lg:py-16 bg-custom-white shadow-xl lg:px-64 flex flex-col justify-between md:px-32 overflow-auto">
      <div class="w-10/12 self-center">
         <h1 class="text-5xl text-custom-gray font-medium">{{ title }}</h1>
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
   height: 91vh;
   width: 91vw;
}
</style>