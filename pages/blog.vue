<template>
 <div>
     <Navbar  :isHome="false"/>
     <blog-header />
     <blogs />

</div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import BlogHeader from '../components/blog/BlogHeader.vue';
import Blogs from '../components/blog/Blogs.vue';
export default {
  
  name: 'BlogPage',
  components:{
      Navbar, BlogHeader, Blogs
  }
}
</script>
