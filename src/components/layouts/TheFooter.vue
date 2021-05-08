<template>
   <section id="footer" class="h-screen mt-24 mb-6 align-bottom">
      <base-card title="Contact" class="relative z-20">
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