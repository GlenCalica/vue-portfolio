<template>
   <li>
      <p>{{ key }}</p>
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
