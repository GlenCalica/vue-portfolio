<template>
   <section class="min-h-screen py-24">
      <base-card
         title="Contact" class="relative z-20"
      >
         <contact-info></contact-info>
      </base-card>
   </section>
</template>

<script>
import ContactInfo from '../templates/ContactInfo.vue';

export default {
   components: {
      ContactInfo
   }
}
</script>