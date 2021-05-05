<template>
   <div class="flex my-8 md:flex-wrap md:justify-center md:mt-4">
      <div class="w-5/12 mr-4 md:mb-4">
         <img class="w-full h-auto border-custom-gray border-4" :src="require(`../../assets/images/${image}`)" :alt="`Screenshot of ${name}`">
      </div>
      <p class="w-7/12 text-xl md:w-full">{{ description }}</p>
   </div>
   <p class="mt-4 text-2xl md:w-full">Made with 
      <span class="font-bold">{{ tools }}</span>
   </p>
   <p v-if="github" class="text-2xl my-4"><a :href="github" target="_blank" class="font-bold hover:bg-custom-mint transition-colors">Link</a> to Github repository</p>
   <p v-if="liveExample" class="text-2xl"><a :href="liveExample" target="_blank" class="font-bold hover:bg-custom-mint transition-colors">Link</a> to live example</p>
</template>

<script>
export default {
   props: ['name', 'image', 'description', 'tools', 'github', 'liveExample']
}
</script>