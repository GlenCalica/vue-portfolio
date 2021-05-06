<template>
   <section class="min-h-screen pt-24 pb-6">
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