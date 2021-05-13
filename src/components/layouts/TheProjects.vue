<template>
   <section id="projects" class="min-h-full flex flex-col justify-center my-24 px-4 md:px-16 bg-custom-gray">
      <h1 class="text-6xl 2xl:text-8xl">Projects</h1>
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
            :tabOrder="tabOrder"
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
   props: ['tabOrder'],
   data() {
      return {
         projects: [
            {
               key: '1',
               name: 'Calica.ca',
               image: 'portfolio-website.png',
               summary: 'My first full project using VueJS',
               description: 'This was my first full project using VueJS and TailwindCSS. Because there isn\'t a lot of information to display, I was able to take a more creative approach with the design. This project took about 50 hours in total.',
               tools: 'AdobeXD, VueJS, TailwindCSS',
               github: 'https://github.com/GlenCalica/vue-portfolio'
            },
            // {
            //    key: '2',
            //    name: 'Project Name',
            //    image: 'Image File Name',
            //    summary: 'Short summary',
            //    description: 'Long description displayed on card',
            //    tools: 'tools listed',
            //    github: 'github link',
            //    liveExample: 'live example link'
            // }
         ]
      }
   }
}
</script>