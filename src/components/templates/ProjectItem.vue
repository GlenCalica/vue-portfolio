<template>
   <li>
      <div
         class="static my-8 focus:outline-white"
         @keydown.enter="toggleCard"
         :tabindex="tabOrder"
      >
         <img
            @click="toggleCard"
            :src="require(`../../assets/images/${image}`)"
            class="cursor-pointer"
            :alt="`Screenshot of ${name}`"
            loading="lazy"
         />
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
import ProjectDetails from "./ProjectDetails.vue";

export default {
   emits: ["cardIsToggled"],
   props: [
      "index",
      "name",
      "image",
      "summary",
      "description",
      "tools",
      "github",
      "liveExample",
      "tabOrder",
   ],
   components: {
      ProjectDetails,
   },
   data() {
      return {
         cardIsOpen: false,
      };
   },
   methods: {
      toggleCard() {
         this.cardIsOpen = !this.cardIsOpen;
         this.$parent.$emit("cardIsToggled", this.cardIsOpen);
      },
   },
};
</script>
