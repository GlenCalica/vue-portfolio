<template>
   <base-card class="center fixed z-30">
      <div @click="$emit('close')">x</div>
      <slot></slot>
   </base-card>
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