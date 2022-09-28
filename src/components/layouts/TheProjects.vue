<template>
   <section
      id="projects"
      class="min-h-full flex flex-col justify-center my-24 px-4 md:px-16 bg-custom-gray"
   >
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
import ProjectItem from "../templates/ProjectItem.vue";

export default {
   components: {
      ProjectItem,
   },
   props: ["tabOrder"],
   data() {
      return {
         projects: [
            {
               key: "1",
               name: "Progress Tracker",
               image: "progress-tracker.png",
               summary: "Full-stack MERN app to track metrics over time",
               description:
                  "Progress Tracker is a MERN SPA that can be used to track a metric over time. Progress Tracker uses ChartJS to visualize user data and JWT to handle user authentication and authorization.",
               tools: "React, React Router, NodeJS, Express, MongoDB, JWT",
               github:
                  "https://github.com/GlenCalica/progress-tracker-frontend",
               liveExample: "https://jovial-jalebi-d5c41c.netlify.app/",
            },
            {
               key: "2",
               name: "Portfolio Site",
               image: "portfolio-website.png",
               summary: "Front-end project made using VueJS",
               description:
                  "My portfolio site (this website) was designed using AdobeXD and developed using VueJS. Because a lot of attention was put into the design, I used TailwindCSS over other CSS frameworks to get a more custom look.",
               tools: "AdobeXD, VueJS, TailwindCSS",
               github: "https://github.com/GlenCalica/vue-portfolio",
            },
            {
               key: "3",
               name: "Rushing Together",
               image: "rushing-together.png",
               summary: "Custom WordPress template made from scratch",
               description:
                  "I created a custom WordPress template from scratch using WordPress developer functions, PHP, SASS, and a touch of JavaScript. Wireframes and website design were made in AdobeXD.",
               tools: "WordPress, PHP, SASS, JavaScript",
               github: "https://github.com/GlenCalica/rushingtogether",
            },
            // {
            //    key: '0',
            //    name: 'Project Name',
            //    image: 'Image File Name',
            //    summary: 'Short summary',
            //    description: 'Long description displayed on card',
            //    tools: 'tools listed',
            //    github: 'github link',
            //    liveExample: 'live example link'
            // }
         ],
      };
   },
};
</script>
