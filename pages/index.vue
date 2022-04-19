<template>
 <div>
   <Hero />
   <ShowSection />
   <Testimonials />
   <Footer />
   <Artist />
 </div>
</template>

<script>
import Hero from '../components/home/Hero.vue';
import ShowSection from '../components/home/ShowSection.vue';
import Testimonials from '../components/home/Testimonials.vue';
import Footer from '../components/Footer.vue';
import Artist from '../components/Artist.vue';
export default {
  name: 'IndexPage',
  components:{
    Hero, ShowSection, Testimonials, Footer, Artist
  }
}
</script>
