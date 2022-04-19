<template>
  <div>
    <Navbar />
    <SingleBlogHeader :title="post.attributes.title"  :createdAt="post.attributes.publishedAt" :creator="creator" v-if="post && creator" />
    <SingleBlogContent :body="post.attributes.content" :imageUrl="imageUrl" v-if="post && imageUrl" />
    
    <Footer />
    <Artist />
  </div>
</template>

<script>
import Navbar from "../../components/Navbar.vue";
import SingleBlogHeader from "../../components/singleblog/SingleBlogHeader.vue";
import SingleBlogContent from "../../components/singleblog/SingleBlogContent.vue";
import Footer from '../../components/Footer.vue';
import Artist from '../../components/Artist.vue';
import qs from "qs";
import axios from 'axios';
export default {
  components: {
    Navbar,
    Footer,
    Artist,
    SingleBlogHeader,
    SingleBlogContent,
  },
  data() {
    return {
      post: null,
      creator: null,
      imageUrl: null
    };
  },
  async created() {
    const slug = this.$route.params.slug;
    const query = qs.stringify(
      {
        filters: {
          slug: {
            $eq: slug,
          },
        },
        populate: ['author', 'image'], 
      },
     
      {
        encodeValuesOnly: true,
      }
    );
    try {
      const resp = await axios.get('http://localhost:1337/api/articles/?'+ query);
      this.post = resp.data.data[0]
      this.creator =  this.post.attributes.author.data.attributes.name;
      this.imageUrl = this.post.attributes.image.data.attributes.url;
    } catch (e) {
      console.log(e);
    }
  },
};
</script>

<style>
</style>