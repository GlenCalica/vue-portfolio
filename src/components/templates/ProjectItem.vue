<template>
   <li>
      <div class="static my-8">
         <h1 class="text-6xl absolute p-6 text-custom-gray">0{{ index + 1 }}</h1>
         <img @click="toggleCard" :src="require(`../../assets/images/${image}`)" class="cursor-pointer" :alt="`Screenshot of ${name}`">
      </div>

      <teleport to="body">
         <transition name="fade">
            <animated-card v-if="cardIsOpen" @close="toggleCard" :title="name">
               <project-details
               :name="name"
               :image="image"
               :description="description"
               :tools="tools"
               :github="github"
               :liveExample="liveExample"
               ></project-details>
            </animated-card>
         </transition>
      </teleport>

      <h2 class="text-white text-4xl my-4">{{ name }}</h2>
      <p class="text-xl my-4 leading-6">{{ summary }}</p>
   </li>
</template>

<script>
import ProjectDetails from './ProjectDetails.vue';

export default {
   props: ['index', 'name', 'image', 'summary', 'description', 'tools', 'github', 'liveExample'],
   components: {
      ProjectDetails
   },
   data() {
      return {
         cardIsOpen: false
      }
   },
   methods: {
      toggleCard() {
         this.cardIsOpen = !this.cardIsOpen;
      }
   }
}
</script>
