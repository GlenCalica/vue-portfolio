<template>
   <div class="mb-4 lg:flex-nowrap lg:mb-4 lg:pt-4 xl:mb-8 flex flex-wrap justify-center mt-4">
      <div class="w-12/12 mb-4 lg:w-6/12 lg:mr-4 xl:w-5/12">
         <img class="w-10/12 sm:w-8/12 lg:w-full h-auto border-custom-gray border-4" :src="require(`../../assets/images/${image}`)" :alt="`Screenshot of ${name}`" loading="lazy">
      </div>
      <p class="w-full text-base leading-4 lg:text-lg lg:w-6/12 lg:leading-5 xl:w-7/12 xl:leading-6 2xl:text-2xl">{{ description }}</p>
   </div>
   <p class="text-base leading-4 my-2 lg:text-xl lg:my-4 2xl:text-2xl w-full">Tools used: 
      <span class="font-bold">{{ tools }}</span>
   </p>
   <p v-if="github" class="text-base my-2 lg:text-xl lg:my-4 2xl:text-2xl"><a :href="github" target="_blank" class="font-bold hover:bg-custom-mint transition-colors">Link</a> to Github repository</p>
   <p v-if="liveExample" class="text-base my-2 lg:text-2xl lg:my-4 2xl:text-2xl"><a :href="liveExample" target="_blank" class="font-bold hover:bg-custom-mint transition-colors">Link</a> to live example</p>
</template>

<script>
export default {
   props: ['name', 'image', 'description', 'tools', 'github', 'liveExample']
}
</script>