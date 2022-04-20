<template>
  <section class="mt-44 ">
        <div class="text-4xl px-4 sm:px-20 xl:px-36 text-center">
            What people are saying ...
        </div>
        <div class="grid  grid-flow-col  gap-x-8 overflow-x-auto  py-8 mt-8 no-scrollbar test" id="scroll_container">
            <!-- We can insert these cards VIA CMS -->
            <testimonial-card />
            <testimonial-card />
              <testimonial-card />
            <testimonial-card />
              <testimonial-card />
            <testimonial-card />
              <testimonial-card />
            <testimonial-card />
              <testimonial-card />
            <testimonial-card />
    
        
           
        

               

            
          
        </div>
      
    </section>  
</template>

<script>
import TestimonialCard from './TestimonialCard.vue';
export default {
    name: 'Testimonials',
    components:{
        TestimonialCard
    }
}
</script>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}
 
</style>