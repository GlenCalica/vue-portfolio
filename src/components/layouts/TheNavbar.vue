<template>
   <transition name="fade" mode="out-in">
      <section class="container fixed flex justify-between py-24 z-10" v-if="!cardIsOpen">
         <h1 class="text-4xl font-bold p-3 bg-custom-gray">GC</h1>
         <p class="text-xl font-bold self-center" @click="toggleCard">CONTACT</p>
      </section>

      <animated-card v-else @close="toggleCard" title="Contact">
         <contact-info></contact-info>
      </animated-card>
   </transition>
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