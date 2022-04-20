<template>
  <section class="hero bg-cover text-white">
    <Navbar :isHome="true" />
    <div
      class="
        px-4
        sm:px-20
        xl:px-36
        flex
        xl:basis-1/2
        items-center
        min-h-screen
        pb-14
        pt-14
      "
    >
      <div class="bg-black bg-opacity-30 p-8" data-aos="slide-right">
        <div
          class="text-3xl sm:text-5xl font-bold text-center xl:text-left"
        >
          Instant Collaboration for Remote Teams
        </div>
        <div
          class="text-lg sm:text-xl font-medium mt-4 text-center xl:text-left"
        >
          All in one place for your remote team to chat and track progress
        </div>
        <HeroForm />
      </div>

      <div class="xl:basis-1/2"></div>
    </div>
  </section>
</template>

<script>
import HeroForm from "./HeroForm.vue";
import Navbar from "../Navbar.vue";
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  name: "Hero",
  mounted() {
    AOS.init();
  },
  components: {
    HeroForm,
    Navbar,
  },
};
</script>

<style scoped>
.hero {
  background-image: url("https://i.ibb.co/MCQH1kj/hero-min.jpg");
}
</style>
<style>
.dg-btn--ok{
  background-color: white !important;
  color: rgb(30 ,58, 138) !important;
  border: none !important;
  transition-duration: 200ms;
}

.dg-btn--ok:hover{
  box-shadow:  2px 2px black !important;
}



 


</style>