<template>
   <li>
      <h1 class="text-white">{{ index }}</h1>
      <h2 class="text-white">{{ name }}</h2>
      <p>{{ image }}</p>
      <p>{{ description }}</p>
   </li>
</template>

<script>
export default {
   props: ['index', 'name', 'image', 'description']
}
</script>