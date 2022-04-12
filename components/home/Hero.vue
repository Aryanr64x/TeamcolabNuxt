<template>
      <section class="hero   bg-cover  text-white ">
        <div class="navbar h-16  flex justify-between  items-center bg-black bg-opacity-30 px-8  md:px-24 lg:px-36">
            <div class="text-2xl">
                <span> Team</span><span class="font-bold">Colab </span>
            </div>

            <div class="text-base hidden md:block">

                <a href="" class="mr-5"> About Us </a>
                <a href="" class="mr-5"> Contact Us </a>
                <a href="" class="mr-5"> Blogsss  </a>
                <a href=""> Product </a>
            </div>

            <div class="md:hidden cursor-pointer">
                <svg class="h-7 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/></svg>
            </div>
        </div>
        <div class="px-4 sm:px-20 xl:px-36 flex xl:basis-1/2  items-center min-h-screen  pb-14 pt-14">
            <div class=" bg-black bg-opacity-30 p-8  ">
                <div class="text-3xl sm:text-5xl font-bold text-center  xl:text-left" data-aos="slide-right" >
                    Instant Collaboration for Remote Teams
                </div>
                <div class="text-lg sm:text-xl font-medium mt-4 text-center  xl:text-left" data-aos="slide-right" data-aos-delay="50">
                    All in one place for your remote team to chat and track progress
                </div>
                <div class="mt-12 flex pl-2 sm:pl-0 flex-col items-center sm:flex-row  justify-center xl:block " data-aos="slide-right" >
                    <input class="placeholder:text-gray-800 text-black p-2 rounded-md w-full sm:w-2/3 mr-4"
                        placeholder="Provide Email For Early Access.." type="email" />
                        <button
                        class="bg-yellow-500 text-gray-800 py-2 px-3 rounded-md mt-4 sm:mt-0 hover:shadow-md hover:shadow-black hover:bg-yellow-600 hover:text-white transition-all duration-500">
                        Get Early Access </button>
                </div>
            </div>
            <div class="xl:basis-1/2">

            </div>

        </div>
    </section>


  
</template>

<script>
export default {
    name: 'Hero'
}
</script>

<style scoped>
    .hero{
        background-image: url('https://i.ibb.co/zhNJCLg/hero-min.jpg');
    }
</style>