<template>
  <section class="mt-44 px-4 sm:px-20 xl:px-36">
        <div class="text-4xl">
            What people are saying ...
        </div>
        <div class="grid grid-flow-col gap-x-8 overflow-x-auto  py-8 mt-32 no-scrollbar " id="scroll_container">
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