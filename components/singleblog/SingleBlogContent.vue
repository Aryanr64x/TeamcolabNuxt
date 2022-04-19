<template>
  <div class="px-52 pt-12 text-lg leading-8">
    <img
      class="w-full"
      :src="'http://localhost:1337' + imageUrl"
      alt="Header Image of the pOst"
    />
    <br />
    <vue-markdown>{{ body  }} </vue-markdown>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";

export default {
  name: "SingleBlogContent",
  components: {
    VueMarkdown
  },
  props: ["body", "imageUrl"],
};
</script>

