<template>
   <transition name="fade">
      <section id="navbar" class="pt-8 px-4 md:pt-12 md:px-16 lg:pt-24 container fixed flex justify-between z-20" v-if="!contactIsOpen && !cardIsOpen">
         <h1 class="text-3xl lg:text-4xl 2xl:text-5xl font-bold bg-custom-gray text-custom-white p-2">GC</h1>
         <p class="text-xl lg:text-xl 2xl:text-2xl font-bold self-center cursor-pointer bg-custom-gray p-2  focus:outline-white" @click="toggleCard" @keydown.enter="toggleCard" tabindex="0">CONTACT</p>
      </section>
   </transition>

   <teleport to="body">
      <transition name="fade" mode="out-in">
         <animated-card v-if="contactIsOpen" @close="toggleCard" title="Contact">
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
   props: ['cardIsOpen'],
   emits: ['cardIsToggled'],
   data() {
      return {
         contactIsOpen: false
      }
   },
   methods: {
      toggleCard() {
         this.contactIsOpen = !this.contactIsOpen;
         this.$emit('cardIsToggled', this.contactIsOpen);
      }
   }
}
</script>