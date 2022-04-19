<template>
<div>
      <div
    class="grid grid-cols-1
      lg:grid-cols-2
      xl:grid-cols-3
      gap-x-20 gap-y-12
      px-12
      md:px-24
      lg:px-36
      mt-12
    "
  >


    <BlogCard v-for="post in posts" :key="post.attributes.slug" :post="post"/>
  


  </div>
</div>
</template>

<script>
import BlogCard from "./BlogCard.vue";
import axios from 'axios';
import qs from 'qs';

export default {
  name: "Blogs",
  components: {
    BlogCard,
  },
  data(){
      return{
          posts: []
      }
  },
  async created() {
    const query = qs.stringify(
      {
        
        populate: ['author', 'image'], 
      },
     
      {
        encodeValuesOnly: true,
      }
    );
    try {
      const resp = await axios.get('http://localhost:1337/api/articles?'+query);
      this.posts.push(...resp.data.data);
    } catch (e) {
        console.log(e);
    }
  },
};
</script>

<style>
</style>                                            