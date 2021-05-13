<template>
   <form action="mailto:glencalica@gmail.com" method="post" enctype="text/plain">
      <div class="mb-2 mt-8 xl:mt-8 2xl:mt-10 2xl:mb-4 flex">
         <div class="mb-2 xl:mb-4 w-1/2 mr-8">
            <label for="name">
               <p class="text-2xl 2xl:text-3xl mb-2">Name</p>
               <input type="text" name="name" class="text-2xl w-full bg-custom-white border-b-4 border-custom-gray py-2 focus:outline-black" required>
            </label>
         </div>
         <div class="w-1/2">
            <label for="email">
               <p class="text-2xl 2xl:text-3xl mb-2">Email</p>
               <input type="text" name="email" class="text-2xl w-full bg-custom-white border-b-4 border-custom-gray py-2 focus:outline-black" required>
            </label>
         </div>
      </div>
      <label for="message">
         <p class="text-2xl 2xl:text-3xl mb-2">Message</p>
         <textarea name="message" cols="30" rows="3" class="text-2xl w-full bg-custom-white border-b-4 border-custom-gray py-2 resize-none focus:outline-black" required></textarea>
      </label>

      <input type="submit" value="Get in Touch" class="my-4 p-3 text-lg lg:my-8 xl:text-xl xl:p-4 2xl:my-12 border-4 border-custom-gray font-medium cursor-pointer bg-custom-white hover:bg-custom-mint transition-colors  focus:outline-black">
   </form>
</template>