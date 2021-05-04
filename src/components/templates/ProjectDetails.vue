<template>
   <div class="flex my-8">
      <div class="w-5/12 mr-4">
         <img class="w-full h-auto border-custom-gray border-4" :src="require(`../../assets/images/${image}`)" :alt="`Screenshot of ${name}`">
      </div>
      <p class="w-7/12 text-xl">{{ description }}</p>
   </div>
   <p class="mt-4 text-2xl">Made with 
      <span class="font-bold">{{ tools }}</span>
   </p>
</template>

<script>
export default {
   props: ['name', 'image', 'description', 'tools']
}
</script>