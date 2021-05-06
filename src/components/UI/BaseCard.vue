<template>
   <div class="card pb-8 pt-16 md:px-16 lg:py-16 lg:px-64 bg-custom-white shadow-xl flex flex-col justify-between overflow-auto">
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