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


    <BlogCard v-for="post in posts" :key="post.slug.current" :post="post"/>
        <BlogCard v-for="post in posts" :key="post.slug.current" :post="post"/>
           <BlogCard v-for="post in posts" :key="post.slug.current" :post="post"/>
        <BlogCard v-for="post in posts" :key="post.slug.current" :post="post"/>



  </div>
</div>
</template>

<script>
import BlogCard from "./BlogCard.vue";
import client from "../../sanity/sanity_client";

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
    try {
      const response = await client.fetch("*[_type=='post']");
      this.posts.push(...response);
    } catch (e) {
        console.log(e);
    }
  },
};
</script>

<style>
</style>                                            