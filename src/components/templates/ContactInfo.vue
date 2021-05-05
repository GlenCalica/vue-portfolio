<template>
   <form action="mailto:glencalica@gmail.com" method="post" enctype="text/plain">
      <div class="flex my-8">
         <div class="w-1/2 mr-8 mb-4">
            <label for="name"><p class="mb-2">Name</p></label>
            <input type="text" name="name" class="w-full bg-custom-white border-b-4 border-custom-gray py-2 focus:outline-black" required>
         </div>
         <div class="w-1/2">
            <label for="email"><p class="mb-2">Email</p></label>
            <input type="text" name="email" class="w-full bg-custom-white border-b-4 border-custom-gray py-2 focus:outline-black" required>
         </div>
      </div>
      <label for="message"><p class="mb-2">Message</p></label>
      <textarea name="message" id="" cols="30" rows="3" class="w-full bg-custom-white border-b-4 border-custom-gray py-2 resize-none focus:outline-black" required></textarea>

      <input type="submit" value="Get in Touch" class="p-4 border-custom-gray border-4 text-xl font-medium my-12 cursor-pointer hover:bg-custom-mint transition-colors">
   </form>
</template>