<template>
   <li>
      <div class="static my-8">
         <h1 class="absolute px-6 text-custom-gray">0{{ index + 1 }}</h1>
         <img :src="require(`../../assets/images/${image}`)" :alt="`Screenshot of ${name}`">
      </div>

      <h2 class="text-white text-4xl my-4">{{ name }}</h2>
      <p class="text-xl my-4">{{ summary }}</p>
   </li>
</template>

<script>
export default {
   props: ['index', 'name', 'image', 'summary']
}
</script>