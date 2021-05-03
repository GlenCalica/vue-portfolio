<template>
   <section class="container fixed flex justify-between py-24 z-10">
      <h1 class="text-4xl font-bold p-3 bg-custom-gray">GC</h1>
      <p class="text-xl font-bold self-center" @click="toggleCard">CONTACT</p>
   </section>


   <transition name="fade">
      <animated-card v-if="cardIsOpen" @close="toggleCard">
         <!-- <p>Test</p> -->
      </animated-card>
      <!-- <p v-if="cardIsOpen" @close="toggleCard">
         Test
      </p> -->
   </transition>

</template>

<script>
export default {
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

</style>