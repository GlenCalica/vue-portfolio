<template>
   <section class="pt-8 px-4 md:pt-12 md:px-16 lg:pt-24 container fixed flex justify-between z-10">
      <h1 class="text-3xl lg:text-4xl 2xl:text-5xl font-bold">GC</h1>
      <p class="text-xl lg:text-xl 2xl:text-2xl font-bold self-center cursor-pointer" @click="toggleCard">CONTACT</p>
   </section>

   <teleport to="body">
      <transition name="fade" mode="out-in">
         <animated-card v-if="cardIsOpen" @close="toggleCard" title="Contact">
            <contact-info></contact-info>
         </animated-card>
      </transition>
   </teleport>
</template>

<script>
import ContactInfo from '../templates/ContactInfo.vue';

export default {
   components: {
      ContactInfo
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

<style scoped>
/* .container {
   width: 100vw;
} */
</style>