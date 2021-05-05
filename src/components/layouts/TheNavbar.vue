<template>
   <section class="container fixed flex justify-between pt-24 z-10 px-4">
      <h1 class="text-4xl font-bold">GC</h1>
      <p class="text-xl font-bold self-center cursor-pointer" @click="toggleCard">CONTACT</p>
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