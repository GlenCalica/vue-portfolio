<template>
   <section class="min-h-screen flex flex-col justify-center py-24">
      <h1>Projects</h1>
      <ul>
         <project-item
            v-for="(project, index) in projects"
            :key="project.key"
            :index="index"
            :name="project.name"
            :image="project.image"
            :summary="project.summary"
            :description="project.description"
            :tools="project.tools"
            :github="project.github"
            :liveExample="project.liveExample"
         ></project-item>
      </ul>
   </section>
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
               name: 'This website',
               image: 'test1.png',
               summary: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
               description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Morbi non arcu risus quis varius quam quisque id. Placerat orci nulla pellentesque dignissim. Ac ut consequat semper viverra nam libero justo laoreet sit.',
               tools: 'html, css, vuejs, tailwindcss',
               github: 'https://github.com/GlenCalica/vue-portfolio'
            },
            {
               key: '2',
               name: 'Project 2',
               image: 'test2.png',
               summary: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
               description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Morbi non arcu risus quis varius quam quisque id. Placerat orci nulla pellentesque dignissim. Ac ut consequat semper viverra nam libero justo laoreet sit.',
               tools: 'html, css, vuejs, tailwindcss',
               github: '',
               liveExample: ''
            },
            {
               key: '3',
               name: 'Project 3',
               image: 'test3.png',
               summary: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
               description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Morbi non arcu risus quis varius quam quisque id. Placerat orci nulla pellentesque dignissim. Ac ut consequat semper viverra nam libero justo laoreet sit.',
               tools: 'html, css, vuejs, tailwindcss',
               github: '',
               liveExample: ''
            }
         ]
      }
   }
}
</script>