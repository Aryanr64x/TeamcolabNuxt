<template>
   <div
      :class="['navbar h-16 flex justify-between items-center px-8 md:px-24 lg:px-36 ', (isHome) ? 'bg-black bg-opacity-30' : 
      '']"
    >
      <div class="text-2xl">
       <nuxt-link to = "/"> <span> Team</span><span class="font-bold">Colab </span></nuxt-link>
      </div>

      <div class="text-base hidden md:block">
        <a href="" class="mr-5"> About Us </a>
        <a href="" class="mr-5"> Contact Us </a>
        <nuxt-link to="/blog" class="mr-5"> Blog </nuxt-link>
        <a href=""> Product </a>
      </div>

      <div class="md:hidden cursor-pointer">
        <svg
          class="h-7 fill-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path
            d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"
          />
        </svg>
      </div>
    </div>
  
</template>

<script>
export default {
    name: 'Navbar',
    props: ['isHome']
}
</script>

<style>

</style>