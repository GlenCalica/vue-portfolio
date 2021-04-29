<template>
   <h1>Projects</h1>
   <ul>
      <project-item
         v-for="(project, index) in projects"
         :key="project.key"
         :index="index"
         :name="project.name"
         :image="project.image"
         :description="project.description"
      ></project-item>
   </ul>
</template>

<script>
import ProjectItem from '../templates/ProjectItem.vue';

export default {
   components: {
      ProjectItem
   },
   data() {
      return {
         projects: [
            {
               key: '1',
               name: 'project 1',
               image: './assets/test1.png',
               description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Morbi non arcu risus quis varius quam quisque id. Placerat orci nulla pellentesque dignissim. Ac ut consequat semper viverra nam libero justo laoreet sit. Sollicitudin nibh sit amet commodo nulla facilisi. Dolor sed viverra ipsum nunc. Nunc consequat interdum varius sit amet mattis vulputate enim nulla. Feugiat scelerisque varius morbi enim.'
            },
            {
               key: '2',
               name: 'project 2',
               image: './assets/test2.png',
               description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Morbi non arcu risus quis varius quam quisque id. Placerat orci nulla pellentesque dignissim. Ac ut consequat semper viverra nam libero justo laoreet sit. Sollicitudin nibh sit amet commodo nulla facilisi. Dolor sed viverra ipsum nunc. Nunc consequat interdum varius sit amet mattis vulputate enim nulla. Feugiat scelerisque varius morbi enim.'
            },
            {
               key: '3',
               name: 'project 3',
               image: './assets/test3.png',
               description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Morbi non arcu risus quis varius quam quisque id. Placerat orci nulla pellentesque dignissim. Ac ut consequat semper viverra nam libero justo laoreet sit. Sollicitudin nibh sit amet commodo nulla facilisi. Dolor sed viverra ipsum nunc. Nunc consequat interdum varius sit amet mattis vulputate enim nulla. Feugiat scelerisque varius morbi enim.'
            }
         ]
      }
   }
}
</script>