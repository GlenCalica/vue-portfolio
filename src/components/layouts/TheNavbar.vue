<template>
   <section class="container fixed flex justify-between py-24 z-10">
      <h1 class="text-4xl font-bold p-3 bg-custom-gray">GC</h1>
      <p class="text-xl font-bold self-center" @click="toggleCard">CONTACT</p>
   </section>

   <animated-card v-if="cardIsOpen" @close="toggleCard">
      <p>Test</p>
   </animated-card>

</template>

<script>
import AnimatedCard from '../UI/AnimatedCard.vue';

export default {
   components: {
      AnimatedCard
   },
   data() {
      return {
         cardIsOpen: false
      }
   },
   methods: {
      toggleCard() {
         this.cardIsOpen = !this.cardIsOpen;
      }
   }
}
</script>