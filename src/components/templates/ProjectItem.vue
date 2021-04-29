<template>
   <li>
      <h1>{{ index }}</h1>
      <h2>{{ name }}</h2>
      <p>{{ image }}</p>
      <p>{{ description }}</p>
   </li>
</template>

<script>
export default {
   props: ['index', 'name', 'image', 'description']
}
</script>
