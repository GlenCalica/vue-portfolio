<template>
   <section
      id="about"
      class="h-screen flex flex-col justify-center mb-24 px-4 md:px-16 bg-custom-gray"
   >
      <h1 class="text-6xl mb-4 2xl:text-8xl">Skills</h1>
      <p class="text-xl 2xl:text-3xl"></p>
      <div class="flex py-8">
         <ul class="w-1/3">
            <li><p class="text-xl font-bold 2xl:text-3xl">Languages</p></li>
            <li><p class="text-xl 2xl:text-3xl">JavaScript</p></li>
            <li><p class="text-xl 2xl:text-3xl">Java</p></li>
            <li><p class="text-xl 2xl:text-3xl">C++</p></li>
         </ul>
         <ul class="w-1/3">
            <li><p class="text-xl font-bold 2xl:text-3xl">Frameworks</p></li>
            <li><p class="text-xl 2xl:text-3xl">React</p></li>
            <li><p class="text-xl 2xl:text-3xl">Express</p></li>
            <li><p class="text-xl 2xl:text-3xl">VueJS</p></li>
         </ul>
         <ul class="w-1/3">
            <li><p class="text-xl font-bold 2xl:text-3xl">Databases</p></li>
            <li><p class="text-xl 2xl:text-3xl">MongoDB</p></li>
            <li><p class="text-xl 2xl:text-3xl">Oracle SQL</p></li>
         </ul>
      </div>
      <div class="flex">
         <ul class="w-1/3">
            <li><p class="text-xl font-bold 2xl:text-3xl">Other</p></li>
            <li><p class="text-xl 2xl:text-3xl">HTML</p></li>
            <li><p class="text-xl 2xl:text-3xl">CSS</p></li>
            <li><p class="text-xl 2xl:text-3xl">SASS</p></li>
            <li><p class="text-xl 2xl:text-3xl">TailWindCSS</p></li>
            <li><p class="text-xl 2xl:text-3xl">WordPress</p></li>
         </ul>
         <ul class="w-1/3">
            <li><p class="text-xl font-bold 2xl:text-3xl">Tools</p></li>
            <li><p class="text-xl 2xl:text-3xl">Git</p></li>
            <li><p class="text-xl 2xl:text-3xl">AdobeXD</p></li>
         </ul>
      </div>
   </section>
</template>

<script>
export default {
   emits: ["updateAboutYPos"],
   data() {
      return {
         aboutYPos: 0,
      };
   },
   created() {
      window.addEventListener("resize", this.updateAboutYPos);
   },
   mounted() {
      this.updateAboutYPos();
   },
   methods: {
      updateAboutYPos() {
         this.aboutYPos = document.getElementById("about").offsetTop;
         this.$emit("updateAboutYPos", this.aboutYPos);
      },
   },
};
</script>
