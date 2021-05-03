<template>
   <div class="card bg-custom-white shadow-xl px-64 py-16 flex flex-col justify-between">
      <div>
         <h1 class="text-custom-gray font-medium">{{ title }}</h1>
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