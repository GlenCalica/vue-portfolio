<template>
   <div>
      <div class="fixed h-screen w-screen top-0 left-0 z-30" @click="$emit('close')"></div>
      <base-card class="center fixed z-40">
         <img class="fixed right-16" :src="require('../../assets/icons/close.svg')" @click="$emit('close')">
         <slot></slot>
      </base-card>
   </div>
</template>

<script>
import BaseCard from './BaseCard.vue';

export default {
   components: {
      BaseCard
   },
   emits: ['close']
}
</script>

<style scoped>
.center {
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
}

</style>